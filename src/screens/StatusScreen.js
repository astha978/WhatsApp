import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ParticularChatScreen from './ParticularChatScreen';
import StatusLayout from '../layouts/StatusLayout';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const StatusScreen = ({navigation}) => {
  return (
           
    <Stack.Navigator 
   // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen options={{headerShown: false}} name="StatusLayout" component={StatusLayout} />
      <Stack.Screen name="ParticularChat" component={ParticularChatScreen} />
    </Stack.Navigator>       
);
}
 
export default StatusScreen
const styles = StyleSheet.create({


})