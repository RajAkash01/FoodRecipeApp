import React, { useState } from 'react';
import { TextInput, View,Text,StatusBar ,StyleSheet, TextInputComponent, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PickerItem from '../PickerItem';
import AppText from '././AppText';
import colors from '../colors';
import {  TouchableRipple } from 'react-native-paper';

function AppPicker({icon,items,onSelectItem,selectedItem,placeholder}) {
    const[modalVisible,setModalVisible] =useState(false);
    return (
        <React.Fragment>
           <TouchableRipple onPress={()=>setModalVisible(true)} rippleColor="#c7c7c7" >
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={"#A9A9A9"} style={styles.icon}  />}
            {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <>
            <AppText style={styles.placeholder}>{placeholder}</AppText>
            <MaterialCommunityIcons name="chevron-down" size={20} color={"#A9A9A9"}   />
            </>
          )}
        </View>
           </TouchableRipple>
           <Modal visible={modalVisible} animationType='fade' style={styles.button} >
           <Button title='close' onPress={()=> setModalVisible(false)}  />
           <FlatList data={items}
           keyExtractor={item => item.value.toString()}
           renderItem={({item})=>
           <PickerItem label ={item.label} onPress={()=>{setModalVisible(false);onSelectItem(item);}}/>}/>
           </Modal>
         </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#edebeb",
        borderRadius:25,
        flexDirection:"row",
        width:'100%',
        padding:15,
        marginVertical:10,      
    },
    button:{

    },
    icon:{
 paddingTop:5,
 marginRight:10
    },
    placeholder: {
        color: colors.medium,
        flex: 1,
      },
    text:{
        color:colors.black,
        flex:1
    },
    textInput:{
  marginStart:10,
  fontSize:18,
  fontFamily:Platform.OS === "android" ? "Roboto" :"Avenir",
  justifyContent:"center",
  alignItems:"center"
    }
})

export default AppPicker;