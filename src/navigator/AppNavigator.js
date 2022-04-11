
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import StatusScreen from '../screens/StatusScreen';
import CallsScreen from '../screens/CallsScreen';


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const AppNavigator=({navigation, route})=> {
  
  return (

      <Tab.Navigator 
      initialRouteName='Chat' 
      screenOptions={{
        tabBarPressColor: 'white',
        tabBarLabelStyle: { fontSize: 19 },
         tabBarItemStyle: { width: 132 },     
        tabBarStyle: { backgroundColor: '#068f61' },
        tabBarActiveTintColor:'white'      
      }}
      >        
        <Tab.Screen name="Chat" component={HomeScreen} />
        <Tab.Screen name="Status" component={StatusScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
      </Tab.Navigator>
    
  );}
  export default AppNavigator
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

