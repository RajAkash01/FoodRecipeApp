import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from '../colors';
import {  TouchableRipple } from 'react-native-paper';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { ActivityIndicator, Colors } from 'react-native-paper';

function AppButton2({title,icon,elevate=true,textcolor="#ffffff", onPress,backgroundColor="primary",btnsecondarycolor="#67ffa9"}) {
  const [activityvalue,setactivityvalue]=useState(true);
    return (
      <View style={[styles.View,{elevation:elevate==true?25:0}]} >
      <Pressable
          style={[styles.button,{backgroundColor:colors[backgroundColor]}]}
          onPress={onPress}
          // rippleColor="#ff776d"   
          android_ripple={{color: btnsecondarycolor, borderless: true}}
        >
          <View style={styles.flex} >
            {icon && <MaterialCommunityIcons name={icon} size={20} color={"white"} style={styles.icon}  />}
          <Text style={[styles.text,{color:textcolor}]}>{title}</Text>
          </View>
        </Pressable>  
        </View>
      );
}
const styles = StyleSheet.create({
  flex:{
    flexDirection:'row'
  },
    button: {
      // borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      width: "100%",
      // marginVertical: 10,
      // elevation: 10,
      justifyContent: 'center',
    },
    text: {
      color: "#ffffff",
      fontSize: 18,
    //  textTransform: "uppercase",
      fontWeight: "bold",
     
    },
    View:{
     alignSelf:"stretch",
    justifyContent: 'center',
    borderRadius: 25,
    margin: 10,
    elevation: 25, 
    },
    icon:{
      marginRight:10,
      paddingTop:3
    }
  });
export default AppButton2;