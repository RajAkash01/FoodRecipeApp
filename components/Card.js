import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";
import colors from "../colors";
import { Avatar } from 'react-native-paper';
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
import {db} from '../components/firebase'
//import {Image} from 'react-native-expo-image-cache';



 
const Card=({ title, subTitle,personname, imageUrl,mins,thumbnailUrl, onPress,onPressforbtn,valueforbtn=false,name,item })=>{
 
     const [btnpressed,setbtnpressed]=useState(valueforbtn);
     const Checkingopacity=({onPressforbtn})=>{
      return(
              <View style={{flex:1}}>
       <TouchableOpacity  onPress={onPressforbtn} >
           { btnpressed!=true?<AntDesign  name='hearto' size={27} color='white'/>
           :<AntDesign  name='heart' size={27} color='red'/>}
             </TouchableOpacity>
             </View>
      )
    } 
    const testing=()=>{
      btnpressed==true?setbtnpressed(false)+DeleteData():setbtnpressed(true)+Adddata();
      // btnpressed==true?DeleteData():Adddata();
      // onPressforbtn();
    }
    const Adddata=()=>{
      db.collection("Liked_one").doc(name).collection("Liked_oneincoll").doc(item.title).set({
        title:item.title,
        personname:item.sourceName,
        mins:item.readyInMinutes,
        imageUrl:item.image
      }).then(()=>{console.log("Document successfully written!");}).catch((error) => {
        console.error("Error writing document: ", error);
    })
    // console.log("Document successfully written!")
    //   db.collection("Liked_one").doc(item.title).set({
    //     title:item.title,
    //     personname:item.sourceName,
    //     mins:item.readyInMinutes,
    //     imageUrl:item.image
    //   }).then(()=>{console.log("Document successfully written!");}).catch((error) => {
    //     console.error("Error writing document: ", error);
    // })
     }
   
   const DeleteData=()=>{
    db.collection("Liked_one").doc(name).collection("Liked_oneincoll").doc(item.title).
     delete().then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });

  // console.log("Document successfully deleted!")
   }

  return (
   
    
      <View style={styles.card} >
        
      <TouchableOpacity onPress={onPress}  >
      
        {/* <Image style={styles.image} uri={imageUrl} preview={{uri:thumbnailUrl}} tint="light"/> */}
        <View style={{left:5,flexDirection:"row"}} >
        <Avatar.Image size={24} source={require('../assets/avatar.png')} />
        <Text style={{left:7}}>{personname}</Text>
        </View>
        <Image source={{uri:imageUrl}} resizeMode="cover" style={{top:15,alignSelf:"center",width:178,height:199,borderRadius:10}} />
        <View style={{position:"absolute",bottom:256,right:65}}>
        <BlurView intensity={50} tint="light" style={{position:"absolute",
      height:45,
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:10,
     }}>
        <Checkingopacity onPressforbtn={()=>testing()} />
        </BlurView>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <View style={{flexDirection:"row"}} >
          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
          <Text style={{left:5,color:colors.Secondary_Text}} >{"Food *  >"+mins}</Text>
          </View>
        </View>
        
        </TouchableOpacity>
        
      </View>
      
    
    
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 1,
    overflow: "hidden",
    width: 175,
    height:299,
    marginHorizontal:5,
    marginVertical:5,
    marginTop:25
  },
  detailsContainer: {
    padding: 20,
    right:15,
    width:210
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.Secondary_Text,
    fontWeight: "bold",
    
  },
  title: {
    marginBottom: 7,
    fontSize:18,
    color:"#3E5481",
    
  },
});

export default Card;
