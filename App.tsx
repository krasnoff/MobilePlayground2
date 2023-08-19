/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

function LogoTitle() {
  const [fontsLoaded] = useFonts({
    'Heebo-Bold': require('./assets/fonts/heebo/Heebo-Bold.ttf'),
  });

  return (
    <View>
      <Text style={{ 
        fontFamily: 'Heebo-Bold', 
        fontSize: 20,
        color: '#ffffff'
      }}>כותרת לדוגמה</Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            // title: 'כותרת לדוגמה',
            headerTitle: (() => <LogoTitle />),
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',  
            },
            headerTitleAlign: "center",
            headerShadowVisible: true, 
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} options={{
          presentation: 'card'
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
