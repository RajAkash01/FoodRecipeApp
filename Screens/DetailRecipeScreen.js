import React,{useEffect, useRef, useState} from 'react';
import { View,StyleSheet, StatusBar,Text,TouchableOpacity,Image,Platform,FlatList, ScrollView } from 'react-native';
import colors from '../colors';
import { Avatar } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";
import CheckCircle from '../Svg/CheckCircle';

const HEADER_HEIGHT=350;
function DetailRecipeScreen({navigation,route}) {
  const [selectedRecipe,setSelectedRecipe]=useState(null);
  // const scrollY=useRef(new Animated.Value(0)).current;
  const descriptionhandler=()=>{
    var inputstring=route.params.item.summary;
    var outputstring=inputstring.replace("<b>","");
    var outputstring2=outputstring.replace("</b>","");
    console.log(outputstring);
  }
  const Capitalize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
let itemfortest=route.params.item.analyzedInstructions;
let itemfortest3=route.params.item.extendedIngredients;
let itemfortest2=route.params.item.analyzedInstructions.map(test=>{return test.steps.map(test=>{return test.number})});
  //   let {recipe}=route.params  
  //  setSelectedRecipe(recipe)

   return (
  <View style={styles.container} >
{/* <Text>Details</Text> */}
{/* <Animated.FlatList data={}
  keyExtractor={}
  showsVerticalScrollIndicator={false}
  ListHeaderComponent={}
  scrollEventThrottle={16}
  onScroll={Animated.event([
    {nativeEvent:{contentOffset:{y:scrollY}}}
  ],{useNativeDriver:true})}
/> */}

<FlatList data={itemfortest} ListHeaderComponent={<View>
  <Image
  source={{uri:route.params.item.image}}
  resizeMode="contain"
  style={{width:"200%",height:299,alignSelf:"center",borderRadius:20}}
/>
  <Text style={{marginTop:15,color:"#3E5481",fontSize:17,marginLeft:28}}>{route.params.item.title}</Text>
<Text style={{marginTop:7,color:colors.Secondary_Text,fontSize:14,marginLeft:28}}>Food . {route.params.item.readyInMinutes+" mins"}</Text>
<View style={{flexDirection:"row",alignItems:"center"}}>
<Avatar.Image style={{marginLeft:28,marginTop:15}} size={31} source={require('../assets/avatar2.png')} />
<Text style={{marginTop:15,marginLeft:15,color:"#3E5481"}}>{route.params.item.sourceName}</Text>
<Ionicons style={{marginLeft:150,marginTop:15}} name={"heart-circle-outline"} size={31} color={colors.primary}/>
<Text style={{marginTop:13,marginLeft:3,color:"#3E5481"}}>{route.params.item.aggregateLikes+" Likes"}</Text>
</View>
<View style={{borderWidth:1,borderColor:colors.Outline,margin:33,bottom:4}}/>
<Text style={{color:"#3E5481",marginLeft:28,fontSize:17,bottom:14}}>Description</Text>
<Text style={{padding:25,bottom:22,marginLeft:4 ,color:colors.Secondary_Text}}>{route.params.item.summary}</Text>
<View style={{borderWidth:1,borderColor:colors.Outline,margin:33,bottom:18}}/>
<Text style={{color:"#3E5481",marginLeft:28,fontSize:17}}>Ingredients</Text>
<FlatList data={itemfortest3} renderItem={({item})=>{
  return(
    <View style={{flexDirection:"row",padding:5,marginLeft:28,paddingTop:18}}>
      <CheckCircle/>
    <Text style={{marginLeft:5,color:colors.Main_Text}}>{Capitalize(item.nameClean)}</Text>

    <Text numberOfLines={8} style={{marginLeft:45,paddingRight:105,color:colors.Main_Text,marginRight:75}}>{item.original}</Text>
    </View>
  )
}}keyExtractor={(item)=>item.id.toString()}/>
<View style={{borderWidth:1,borderColor:colors.Outline,margin:33,bottom:4}}/>
<Text style={{color:"#3E5481",marginLeft:28,fontSize:17}}>Steps</Text>
</View>}

renderItem={({item})=>{

  { return item.steps.map(test=> (
    <>
   
    <View  style={{flexDirection:"row",padding:15,marginRight:25,marginLeft:5}}>
    <Text style={{width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: colors.Main_Text,color:colors.white,textAlign:"center",paddingTop:2}}>{test.number}</Text>
    <Text style={{marginLeft:5,color:colors.Main_Text,textAlign:"left"}}>{test.step}</Text>
    </View>
    
    </>
  ))}
  

}} 
keyExtractor={(item)=>item.steps.map(test=>{
  return test.number.toString();
})}   />

{/* {console.log("testingite"+itemfortest.map(test=>{
  return test.steps.map(test1=>{return test1.number})
}))} */}

     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop:0,
   color:colors.white,
   flex:1
},
});
export default DetailRecipeScreen;