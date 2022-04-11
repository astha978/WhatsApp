import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ParticularChatScreen from './ParticularChatScreen';
import HomeLayout from '../layouts/HomeLayout';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation, route}) => {
  
HomeScreen.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  console.log('navigation.state.routes[1].routeName', navigation);
  if (
    navigation.state.index > 0 &&
    navigation.state.routes[1].routeName === 'ParticularChat'
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
  return (
           
    <Stack.Navigator 
    // screenOptions=
    // {{ headerShown: false }}
    >
      <Stack.Screen options={{headerShown: false}} name="HomeLayout" component={HomeLayout} />
      <Stack.Screen name="ParticularChat" component={ParticularChatScreen} />
    </Stack.Navigator>       
);
}
 
export default HomeScreen
const styles = StyleSheet.create({


})