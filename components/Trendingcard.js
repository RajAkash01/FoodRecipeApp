import React, { useState } from 'react';
import { View,Text,StyleSheet, StatusBar, TouchableOpacity,Image } from 'react-native';
import colors from '../colors';
import { BlurView } from 'expo-blur';
import { Ionicons } from "@expo/vector-icons";



const Trendingcard=({recipeitem,subtitle,mins,serving,recipeitemimg,onPress})=>{
  const [btnpressed,setbtnpressed]=useState();
  const RecipeCardDetails=({subtitle,mins,serving,onPressforbtn})=>{
    return(
        <View style={{
          flex:1
        }} >
      {/* name and bookmark */}
      <View style={{flex:1,
      flexDirection:"row",
      justifyContent:"space-between"
      }} >
  <Text style={{width:"70%",
             color:colors.white,
             fontSize:18,
              height:72,
              bottom:5
  }} numberOfLines={3} >{subtitle}
  </Text>
  <TouchableOpacity onPress={onPressforbtn}>
    {btnpressed==true?<Ionicons  name="bookmark" size={26} color={colors.primary} />
    :<Ionicons  name="bookmark-outline" size={26} color={colors.white} />}
    </TouchableOpacity>
      </View>
      {/* duration and serving section */}
      <Text style={{color:colors.Outline,fontSize:14}}>{mins} | {serving}  </Text>
        </View>
    )
  }
  
  const RecipeCardInfo=({subtitle,mins,serving,onPressforbtn})=>{
    return(
      <View  style={styles.blurviewconatiner}>
        <RecipeCardDetails   subtitle={subtitle}  mins={mins} serving={serving} onPressforbtn={onPressforbtn}/>
      </View>
    )
  }
   return (
  <View style={styles.container} >
   <TouchableOpacity style={{height:350 ,
          width:250,
          marginTop:5,
          borderRadius:10,
          marginRight:20,

}}  onPress={onPress} >
       
       {/* backgroundimage */}
       <Image source={{uri:recipeitemimg}} 
       resizeMode="cover"
       style={{width:250,
       height:350,
       borderRadius:15}} />

       <View style={{position:"absolute",
          top:20,
          left:15,
          paddingHorizontal:5,
          paddingVertical:5,
          backgroundColor:"#4f6774",
          borderRadius:10,

     }}>
              <Text style={{fontSize:17,
              color:colors.white,

            }}>{recipeitem}</Text>
       </View>
       {/* card info */}
       <RecipeCardInfo  subtitle={subtitle} mins={mins} serving={serving} onPressforbtn={()=>btnpressed==true?setbtnpressed(false):setbtnpressed(true)}/>
   </TouchableOpacity>
     </View>
    );
}
const styles = StyleSheet.create({
    container:{},
    blurviewconatiner:{
      position:"absolute",
      bottom:10,
      left:10,
      right:10,
      height:100,
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:10,
      backgroundColor:"#4f6774"
    }
});
export default Trendingcard;