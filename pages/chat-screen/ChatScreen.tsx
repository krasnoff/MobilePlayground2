import axios from 'axios';
import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { useErrorTrace } from '../../hooks/useErrorTrace';
import {BASE_ADDRESS} from "@env"

export default function ChatScreen() {
    const [text, setText] = useState<string>('');
    const { setError } = useErrorTrace();

    const setData = (data: any) => {
        console.log('data response', data);
    }

    const fetchData = async (text: string) => {
        try {
            const response = await axios.post(`${BASE_ADDRESS}/api/AIQuery`, {
                "message": text
            })
            setData(response.data);
        } catch (err) {
            setError(err as Error, 'Error: fetch data from AI');
        }
    };
    

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                {/* Content for the scrollable view */}
                {/* Add your content here */}
            </ScrollView>

            <View style={styles.bottomContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    onChangeText={newText => setText(newText)}
                />
                <Button
                    title="Send"
                    onPress={() => fetchData(text)}
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
});
