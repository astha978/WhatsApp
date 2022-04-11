import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatScreen = (route) => {
  return (
    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'silver',
  
      }}>
      <Text style={{
      fontSize: 30,
      fontWeight:'bold'
    }}>ChatScreen</Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})