import React, { useState } from 'react';
import { View,StyleSheet, StatusBar,TouchableOpacity, Text } from 'react-native';
import TimeCircle from '../Svg/TimeCircle';
import UpArrow from '../Svg/UpArrow';
function Searchcard({data,onPress}) {
   return (
  <View onLayout={(event)=>{
    const {width,height}=event.nativeEvent.layout;
    // console.log(width,height + "is height");
  }}  >
    <TouchableOpacity onPress={onPress} style={{flexDirection:"row" ,paddingTop:14
    ,paddingRight:25,paddingLeft:25,justifyContent:"space-between"}}>
        <View style={{alignSelf:"flex-start",right:5}}>
     <TimeCircle/>
     </View>
      <Text style={{position:"absolute",left:55,top:15}} >{data}</Text>
      <View style={{alignSelf:"flex-end",left:5}}>
      <UpArrow/>
      </View>
    </TouchableOpacity>
     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0},
});
export default Searchcard;