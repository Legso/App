import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login, StartScreen, SignUp } from './src/Screens';
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
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="SignUpScreen" component={SignUp} />
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
