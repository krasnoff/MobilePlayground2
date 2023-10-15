/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
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
import Icon from './assets/icons/icon';

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

  const drawer = useRef<DrawerLayoutAndroid>(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigationView = () => (
    <View>
      <Text>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current?.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={'right'}
        renderNavigationView={navigationView}>
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
            headerRight: () => (
              <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
                <Icon name="Menu" height="35" width="35" fill="#ffffff" />
            </TouchableOpacity>
            ),
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
      
    
    </DrawerLayoutAndroid>
  );
}

export default App;
