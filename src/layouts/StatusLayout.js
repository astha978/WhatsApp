import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StatusLayout= ({navigation}) => {
  const DATA= [
    {id:'1',title:'status1'},
    {id:'2',title:'status2'},
    {id:'3',title:'status3'},
    {id:'4',title:'status4'},
    {id:'5',title:'status5'},
    {id:'6',title:'status6'},
    {id:'7',title:'status7'},
    {id:'8',title:'status8'}, 

  ]
  return (
    <View style= {styles.Container}>
         
      <FlatList
      data={DATA}
      keyExtractor={(item)=>{(item.id)}}
      renderItem={({item})=>
      <View style={styles.ChatHeader}>
        <View>
        {/* <Image
         style={styles.Img}
         source={{uri :'https://www.flaticon.com/free-icons/person', title:"person"}}  
        //  /> 
         

        <img scr="https://www.flaticon.com/free-icons/person" alt="Free image"></img> 
         
        <img scr="https://source.unsplash.com/user/c_v_r" alt="image"></img> */}

        <Image style={styles.Img}
           source={require('../../assets/images/hacker.png')}  />      
         </View>
       
     <TouchableOpacity 
     onPress={()=>navigation.navigate('ParticularChat')} >
       <View style={styles.UserBox}>
          <Text style={styles.Text1Style}>{ item.title } </Text>
          <Text style={styles.Text2Style}>Yesterday, 11:07 AM  </Text>
          </View>
          </TouchableOpacity>
         
      </View>}
      />
   </View>     

  );
}
export default StatusLayout
const styles = StyleSheet.create({
  Container: {
      flex: 1,
     // justifyContent:'center',
      alignItems:'center',
      marginVertical:10,
      paddingVertical:10,
      backgroundColor:'#e4ebe8',
      marginTop:-5
  },


ChatHeader:{
flexDirection:'row',
height:80,
width:390,
borderColor:"white",
borderWidth:0.2,
backgroundColor:"white",
borderRadius:5,
borderBottomColor:'silver'
//flexDirection:'row'

},

Img: {
  paddingLeft:50,
  paddingTop:45,
  width: 30,
  height: 30,
  marginTop:12,
   resizeMode : 'contain' ,
},
UserBox:{
  //flexDirection:'row',
  height:70,
  width:390,
   //borderColor:"white",
  //borderWidth:1/2,
  //backgroundColor:"white",
  //borderRadius:5,
  //borderBottomColor:'silver'
  //flexDirection:'row'
  
  },
  Text1Style: {
    fontSize: 25,
    paddingLeft:10,
    paddingTop:3
  },
  Text2Style: {
    fontSize: 18,
    paddingLeft:10,
    paddingTop:3
  },


})