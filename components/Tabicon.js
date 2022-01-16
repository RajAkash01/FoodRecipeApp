import React from 'react';
import { View,StyleSheet, StatusBar,Image,Text } from 'react-native';
import colors from '../colors';
import AppText from './AppText';

function Tabicon({focused,icon,Name}) {
   return (
  <View style={{
      alignItems:"center",
      justifyContent:"center",
      height:68,
      width:80,
  }} >
      <View style={{
        width:26,
        position:"absolute",
        bottom:35,
        }} > 
     {icon}
     </View>
      <View style={{
          position:'absolute',
          bottom:5
    }} >
          <Text style={{color:focused?colors.primary:colors.Secondary_Text}}>{Name}</Text> 
        
      </View>
      {/* for only bottomborderpurpose */}
     {/* {focused && <View style={{
         position:"absolute",
         left:0,
         right:0,
         bottom:0,
         height:5,
         borderTopLeftRadius:5,
         borderTopRightRadius:5,
         backgroundColor:colors.primary
     }} />} */}
     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,},
    
});
export default Tabicon;