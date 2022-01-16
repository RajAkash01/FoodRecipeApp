import React,{ useRef, useState} from 'react';
import { TextInput, View,StatusBar ,StyleSheet, TextInputComponent, Platform,Image } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../colors';

function AppTextInputforwhitebg({customicon,icon,width="100%",...otherProps}) {
    const colorforborder=colors.primary
    const colorforborder2=colors.secondary
    const [borderColorss1,setborderColor1] =  useState();
    return (
        <View style={[styles.container,{width},{borderColor:borderColorss1}]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.Main_Text} style={styles.icon}  />}
           <TextInput   style={styles.textInput} onFocus={()=>setborderColor1(colorforborder)} onBlur={()=>setborderColor1(colorforborder2)}  {...otherProps}   />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderRadius:25,
        flexDirection:"row",
        padding:15,
        marginVertical:10,
        
        borderWidth: 1,        
    },
    icon:{
 marginRight:10,
 paddingTop:5
    },
    textInput:{
  fontSize:18,
  fontFamily:Platform.OS === "android" ? "Roboto" :"Avenir",
  justifyContent:"center",
  alignItems:"center",
  width:"100%",
    }
});

export default AppTextInputforwhitebg;