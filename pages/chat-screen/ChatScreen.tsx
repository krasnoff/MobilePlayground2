import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, FlatList, SafeAreaView } from 'react-native';
import { useErrorTrace } from '../../hooks/useErrorTrace';
import {BASE_ADDRESS} from "@env"
import { MessageObj, Roles } from '../../interfaces/openAI';

export default function ChatScreen() {
    const [text, setText] = useState<string>('');
    const { setError } = useErrorTrace();
    const [ messagesArr, setMessagesArr ] = useState<MessageObj[]>([]);

    const addMessageElement = (newMessageElement: MessageObj) => {
        setMessagesArr([...messagesArr, newMessageElement]);
    };

    const removeLastMessageElement = (messagesArr: MessageObj[]) => {
        const filteredArray = messagesArr.filter((item, index) => index < messagesArr.length - 1);
        setMessagesArr(filteredArray);
    }

    const fetchData = (text: string) => {
        addMessageElement({
            role: Roles.USER,
            content: text
        });
    };

    useEffect(() => {
        setText('');
        if (messagesArr.length > 0 && messagesArr[messagesArr.length - 1].role === Roles.USER) {
            callAPI();
        }
    }, [messagesArr]);   

    const callAPI = async () => {
        try {
            const response = await axios.post(`${BASE_ADDRESS}/api/AIQuery`, {
                "message": text
            })
            setData(response.data);
        } catch (err) {
            setError(err as Error, 'Error: fetch data from AI');
            removeLastMessageElement(messagesArr);
            Alert.alert('שגיאה', 'שגיאת מערכת');
        }
    } 

    const setData = (data: any) => {
        console.log('data response', data);
        const message: MessageObj = data.data.message;
        if (message.content) {
            addMessageElement(message);
        } else {
            Alert.alert('Alert Title', data.toString());
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.scrollContainer}>
                <FlatList
                    data={messagesArr}
                    keyExtractor={(item, index) => index.toString()}
                    inverted={true}
                    contentContainerStyle={{ flexDirection: 'column-reverse' }}
                    renderItem={({ item }) => (
                    (item.role !== Roles.REDIRECT ? 
                        <View style={item.role === Roles.USER ? styles.userMessage : styles.contactMessage}>
                            <Text>{item.content}</Text>
                        </View> : 
                        <View style={styles.contactMessage}>
                            <Text>למעבר לעמוד פעולה לחץ כאן</Text>
                            <Button
                                title="עבור"
                            />
                        </View>)
                    )}
                />
            </SafeAreaView>

            <View style={styles.bottomContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    onChangeText={newText => setText(newText)}
                    value={text}
                />
                <Button
                    title="Send"
                    onPress={() => fetchData(text)}
                    disabled={text === ''}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0', // Background color for the scrollable view
        paddingHorizontal: 16, // Adjust as needed
        paddingTop: 16, // Adjust as needed
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16, // Adjust as needed
        paddingBottom: 16, // Adjust as needed
        backgroundColor: 'white', // Background color for the bottom container
    },
    input: {
        flex: 1,
        height: 40, // Adjust as needed
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20, // Make it round
        paddingHorizontal: 16, // Adjust as needed
        marginRight: 10, // Spacing between input and button
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: 'lightblue',
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
        maxWidth: '70%',
    },
    contactMessage: {
        alignSelf: 'flex-start',
        backgroundColor: 'lightgray',
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
        maxWidth: '70%',
    },
});
