/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './pages/homescreen/HomeScreen';
import DetailsScreen from './pages/details-screen/DetailedScreen';
import MainMenu from './pages/main-menu/MainMenu';
import ChatScreen from './pages/chat-screen/ChatScreen';
import SamplePage from './pages/sample-page/SamplePage';

const Stack = createNativeStackNavigator();

type Props = PropsWithChildren<{
  title: string;
}>;

function LogoTitle(props: Props) {
  return (
    <View>
      <Text style={{ 
        fontFamily: 'Heebo-Bold', 
        fontSize: 20,
        color: '#ffffff'
      }}>{props.title}</Text>
    </View>
  );
}

const customHeaderDesign: NativeStackNavigationOptions = {
  // title: 'כותרת לדוגמה',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',  
  },
  headerTitleAlign: "center",
  headerShadowVisible: true,
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={customHeaderDesign}>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerTitle: (() => <LogoTitle title={'כותרת props'} />),
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} options={{
          presentation: 'card',
          headerTitle: (() => <LogoTitle title={'מסך פרטים'} />),
        }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{
          presentation: 'card',
          headerTitle: (() => <LogoTitle title={'מסך chat'} />),
        }} />
        <Stack.Screen name="SamplePage" component={SamplePage} options={{
          presentation: 'card',
          headerTitle: (() => <LogoTitle title={'עמוד לדוגמה'} />),
        }} />
        <Stack.Screen name="MainMenu" component={MainMenu} options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
