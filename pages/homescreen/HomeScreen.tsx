/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FAB } from '@rneui/themed';
import Icon from '../../assets/icons/icon';
import crashlytics from '@react-native-firebase/crashlytics';


function HomeScreen({ navigation }: any): JSX.Element {
  const [text, setText] = useState<string>('');
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,

  };

  const fabClickHandler = () => {
    console.log('fabClickHandler');
    Alert.alert('You tapped the button!');
  }

  useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);

  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
    <View style={[
      styles.container,
      {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
      },
    ]}>
      <StatusBar
        //barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        //backgroundColor={backgroundStyle.backgroundColor}
        backgroundColor='#f4511e'
        barStyle="light-content"
      />
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View>
          <TextInput style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: '100%'
          }} placeholder='You can type in me'
            onChangeText={newText => setText(newText)}
          ></TextInput>
        </View>
        <View>
          <Text>{text}</Text>
        </View>
        <View>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
        <View><Text>&nbsp;</Text></View>
        {/* <View>
          <Button
            title="Go to personal AI assistant"
            onPress={() => navigation.navigate('PersonalAIAssistant')}
          />
        </View> */}
        <View>
          <Text style={{ fontFamily: 'Heebo-Regular', fontSize: 27 }}>שלום רב פונטים בעברית ץ</Text>
        </View>
      </View>
      <View style={{
        flex: 1,
      }}>
        <FAB
          visible={true}
          color="green"
          placement='left'
          onPress={() => navigation.navigate('MainMenu')}
        >
          <Icon name="Plus" height="35" width="35" fill="#ffffff" />
        </FAB>
      </View>
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
