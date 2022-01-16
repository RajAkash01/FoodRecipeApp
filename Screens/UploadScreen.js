import React,{useEffect, useState} from 'react';
import { View,StyleSheet, StatusBar,Text, TextInput,Slider, TouchableOpacity,ScrollView
  ,BackHandler,Image,TouchableWithoutFeedback,Keyboard } from 'react-native';
import colors from '../colors';
import AppButton2 from '../components/AppButton2';
import * as ImagePicker from 'expo-image-picker';
import {db} from '../components/firebase'
import Additionalscreenforbottomnav from '../navigation/Additionalscreenforbottomnav';
import Imageuploadercover from '../Svg/Imageuploadercover';
import store from "../reducers/store";
import * as actions from '../reducers/fortest';

function UploadScreen({navigation}) {
    const [bordercolor,setbordercolor]=useState("#9FA5C0");
    const [bordercolor2,setbordercolor2]=useState("#9FA5C0");
    const [Image2,setImage]=useState("");
    const [foodname22,setfoodname22]=useState("");
    const [Description,setDescription]=useState("");
    const [minvalue,setminvalue]=useState(0);
    const [toshowimg,settoshowimg]=useState(true);
    const colorforborder = colors.primary;
   const colorforborder2 = "#D0DBEA";
   const [keyboardStatus, setKeyboardStatus] = useState(undefined);
   store.dispatch(actions.storebottomnav({bottomnavvalue:keyboardStatus}))
   const [foodname,setfoodname]=useState("");
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
   useEffect(()=>{
    const backAction = () => {
        navigation.navigate("Home");
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
       backAction
      );

      const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardStatus(true);
      });
      const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardStatus(false);
      });
  
      return () => {
        backHandler.remove();
        showSubscription.remove();
        hideSubscription.remove();
      };
   },[]);

  //  useEffect(()=>{
  //    if(keyboardStatus==true){

  //    }
  //  })

   const pickImage2 = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setImage(pickerResult.uri);
    if(pickerResult.cancelled!=true){
      settoshowimg(false);
    }
    else if(pickerResult.cancelled==true){
      settoshowimg(true);
    }
    console.log(pickerResult);
    console.log(toshowimg);
   

  }
   return (
    //  <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}} >
  <View style={styles.container} >
      <ScrollView onResponderStart={Keyboard.dismiss}>
     <View style={{flexDirection:"row"}}>
       <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
     <Text style={{color:colors.red,fontSize:18,marginLeft:28,marginTop:15}} >Cancel</Text>
     </TouchableOpacity>
     <Text style={{fontSize:18,marginTop:15,marginLeft:245}}>1/2</Text>
     </View>
     <View style={{marginLeft:28,marginTop:25}}>
         { 
         toshowimg ==true ?
             <TouchableOpacity onPress={pickImage2}>
    <Imageuploadercover/>
    </TouchableOpacity>:<>
    <Image source={{uri:Image2}} resizeMode="cover" style={{top:1,alignSelf:"center",alignItems:"center",right:12,width:340,height:210,borderRadius:10}} />
    <TouchableOpacity style={{alignSelf:"flex-end",right:24}} onPress={()=>[setImage(""),settoshowimg(true)]}>
    <Text>Clear </Text>
    </TouchableOpacity>
    </>
    }
    </View>
    <Text style={{color:"#3E5481",fontSize:18,marginLeft:28,marginTop:18,fontWeight:"bold"}}>Food Name</Text>
    <View style={{padding:15,bottom:5}}>
    <TextInput style={{borderWidth:1,padding:12,fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 25,
    paddingLeft:16,
    borderColor:bordercolor}} placeholder="Enter food name" 
    onChangeText={text=>setfoodname22(text)}
    onFocus={() => setbordercolor(colorforborder)}
    onBlur={() => setbordercolor(colorforborder2)}
    value={foodname22}
    autocorrect={false}
    autoCapitilize="none"  />
    {console.log(foodname22)}
    </View>

    <Text style={{color:"#3E5481",fontSize:18,marginLeft:28,marginTop:2,fontWeight:"bold"}}>Description</Text>
    <View style={{padding:15,bottom:5}}>
    <TextInput style={{borderWidth:1,padding:12,fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical:"top",
    paddingTop:18,
    paddingLeft:16,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    borderColor:bordercolor2}} placeholder="Tell a little about your food" 
    onChangeText={text=>setDescription(text)}
    value={Description}
    onFocus={() => setbordercolor2(colorforborder)}
    onBlur={() => setbordercolor2(colorforborder2)}
    autocorrect={false}
    autoCapitilize="none"  
    maxLength={255}
    numberOfLines={5}
    multiline />
    {console.log(Description)}
    </View>
    <View style={{flexDirection:"row"}}>
    <Text style={{color:"#3E5481",fontSize:18,marginLeft:28,marginTop:2,fontWeight:"bold"}}>Cooking Duration</Text>
    <Text style={{color:"#9FA5C0",fontSize:18,marginLeft:5,marginTop:2}}>{"(in minutes)"}</Text>
    </View>
    <View style={{flexDirection:"row",width:360,marginLeft:15,marginBottom:10,marginTop:10,justifyContent:"space-between"}}>
        <Text style={{color:colors.primary}}>{"<10"}</Text>
        <Text style={{color:colors.primary}}>30</Text>
        <Text style={{color:colors.primary}}>{">60"}</Text>
    </View>
    <View style={{paddingLeft:93,paddingRight:93}}>
    <Slider style={{transform: [{ scaleX: 1.9 }, { scaleY: 1.9 }]}} 
    thumbTintColor={colors.primary}
   value={minvalue}
    onValueChange={val=>setminvalue(val)}
     minimumTrackTintColor={colors.primary}
      maximumTrackTintColor="darkgrey"
      step={30}
      maximumValue={60}
      minimumValue={10}
      />
      {console.log(minvalue)}
    </View>
    <View style={{padding:125,bottom:125,left:110}}>
    <AppButton2  title="Next"
     onPress={()=>[navigation.navigate("Upload",{screen:"upload2"}),console.log(foodname22)]}
     />
    </View>
    </ScrollView>
     </View>
    //  </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0},
});
export default UploadScreen;