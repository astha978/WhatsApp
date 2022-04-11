
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigator/AppNavigator';
import WtpTitle from './src/layouts/Title/WtpTitle';


export default function App({navigation}) {
  return (
   <NavigationContainer>
    
    <WtpTitle/>
    <AppNavigator/>
    
   </NavigationContainer>
    
  );}


