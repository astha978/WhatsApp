import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const wtpTitle = () => {
  return (
    <View style= {styles.Container}>
      <Text style= {styles.TextStyle}>Whatsapp</Text>
    </View>
  )
}

export default wtpTitle

const styles = StyleSheet.create({
Container:{
height:60,
width:2000,
backgroundColor:'#068f61',
marginBottom:-3
},
TextStyle:{
    fontSize:25,
    //fontWeight:'bold',
    paddingLeft:12,
    paddingTop:12,
    color:'white'

    },

})