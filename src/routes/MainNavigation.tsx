import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import DashBoard from '../screens/DashBoard';
import FirstScreen from '../screens/FirstScreen';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
