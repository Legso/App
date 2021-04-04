import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login, StartScreen, SignUp, Main, PostForm, MessageScreen } from './src/Screens';
import { loginScreen, mainScreen, signUpScreen, startScreen, postForm, messageScreen } from './src/Utils/Constants/ScreenNames';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={startScreen} component={StartScreen} />
      <Stack.Screen name={loginScreen} component={Login} />
      <Stack.Screen name={signUpScreen} component={SignUp} />
      <Stack.Screen name={mainScreen} component={Main} />
      <Stack.Screen name={postForm} component={PostForm} />
      <Stack.Screen name={messageScreen} component={MessageScreen} />
      {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
      {/* <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      /> */}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
