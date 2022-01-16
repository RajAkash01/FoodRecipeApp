import React, { useState,useEffect, useRef } from 'react';
import { View,StyleSheet, StatusBar, Text, TextInput,FlatList,TouchableOpacity,useWindowDimensions
  ,BackHandler, KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback,ScrollView,ToastAndroid } from 'react-native';
import colors from '../colors';
import Plusforgroup from '../Svg/Plusforgroup';
import Dragicon from '../Svg/Dragicon';
import AppButton2 from '../components/AppButton2';
import { AntDesign } from "@expo/vector-icons";
import store from "../reducers/store";
import * as actions from '../reducers/fortest';



function UploadScreen2({navigation}) {
  const [Ingredients,setIngredients]=useState();
  const [Ingredients2,setIngredients2]=useState();
      const [data1,setdata1]=useState([]);
      const [data2,setdata2]=useState([]);
      const [submitdata,setsubmitdata]=useState([]);
      const [txtinput,settxtinput]=useState("");
      const [bottomnavval,setbottomnavval]=useState(false);
      const [previewvisible,setpreviewvisible] = useState(undefined);
      const [previewvisible2,setpreviewvisible2] = useState(false);
      const [keyboardStatus, setKeyboardStatus] = useState(undefined);
      store.dispatch(actions.storebottomnav({bottomnavvalue:keyboardStatus}))
      //store.subscribe(()=>console.log("store changed",store.getState()));
      // const val= store.getState();
      // console.log("from val"+JSON.stringify(val));
      const [a,seta]=useState(1);
      const [a2,seta2]=useState(1);
      
      // console.log(keyboardStatus);
    const [data,setdata]=useState( [...Array(20)].map((d, index) => ({
        key: `item-${index}`,
        label: index,
        backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index * 5}, ${132})`,
      })));
    const initialMessages = [
        {
          id: 1,
          title: "Pancake",
          description: "Food",
          image: require("../assets/Rectangle_188.png"),
        },
        {
          id: 2,
          title: "Food2",
          description: "Food",
          image: require("../assets/image2.png"),
        },
        {
            id: 3,
            title: "Food3",
            description: "Food",
            image: require("../assets/Rectangle_188.png"),
          },
          {
            id: 4,
            title: "Food4",
            description: "Food",
            image: require("../assets/image3.png"),
          },
      ];
      
      

      const flatlistdata=()=>{
        seta(preva=>preva+1);
        setdata1([...data1,{Ingredients:Ingredients,id:a}]);
        setIngredients("");
        setpreviewvisible(true);
         // console.log("from test"+test1);
        
      }
      const flatlistdata2=()=>{
        seta2(preva=>preva+1);
        setdata2([...data2,{Ingredients:Ingredients2,id:a2}]);
        setIngredients2("");
         setpreviewvisible(true);
         // console.log("from test"+test1);
        
      }
     // console.log(data1);


      useEffect(()=>{
        const backAction = () => {
          navigation.navigate("Upload",{screen:"upload1"});
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
      
          return () =>{
            backHandler.remove();
            showSubscription.remove();
      hideSubscription.remove();
          } 
       },[]);
    const renderItem=(data)=>{
        return(
            <View>
                <TextInput placeholder="testing" />
                <Text>{data}</Text>
            </View>
        )
    }
   const testarr= [{"Ingredients":"sgshg","id":0},{"Ingredients":"sgshg4y4y","id":1}]
   

   return (
      // <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex:1}} >
  <View style={styles.container}  >
  <ScrollView contentContainerStyle={{height:1000}} onResponderStart={Keyboard.dismiss}>
   <View style={{flexDirection:"row"}}>
     <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
     <Text style={{color:colors.red,fontSize:18,marginLeft:28,marginTop:15}} >Cancel</Text>
     </TouchableOpacity>
     <Text style={{fontSize:18,marginTop:15,marginLeft:240}}>2/2</Text>
     </View>
   <View style={{flexDirection:"row"}}>
     <Text style={{color:"#3E5481",fontWeight:"bold",fontSize:18,marginLeft:28,marginTop:40}} >Ingredients</Text>
     <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>ToastAndroid.show('You cant group ingredients now!', ToastAndroid.SHORT)}>
     <View style={{marginLeft:165,marginTop:40}}>
     <Plusforgroup/>
     </View>
     <Text style={{color:"#3E5481",fontSize:18,marginTop:40,marginLeft:5}}>Group</Text>
     </TouchableOpacity>
     </View>

<View style={{maxHeight:155}}>
{/* <FlatList
data={data1}
style={{left:28,maxHeight:150}}
keyExtractor={ (data)=> data.id.toString()}
renderItem={ ({item})=>{
  return(
    <View style={{flexDirection:"row"}}>
<Text style={{fontSize:18}}>{item.id+".  "}</Text>
<Text style={{fontSize:18}}>{item.Ingredients}</Text>
</View>
  )
   }
  }
  
/> */}

{ previewvisible ? 
<>
  <View style={{borderWidth:1,borderColor:"#D0DBEA",width:330,height:240,borderRadius:10,left:26,top:15}}>
<ScrollView nestedScrollEnabled={true}  style={{left:9,top:8,maxHeight:220}}>
{Ingredients!=null?<Text style={{paddingTop:5,fontSize:18}}>For Ingredients</Text>:null}
{data1.map((item)=>{return(
 
  
  <View key={item.id} style={{flexDirection:"row"}}>
  <Text style={{fontSize:18,color:"grey"}}>{item.id+".  "}</Text>
  <Text style={{fontSize:18,color:"grey"}}>{item.Ingredients}</Text>
  </View>
 
)})}
{Ingredients2!=null? <Text style={{paddingTop:5,fontSize:18}}>For Steps</Text>:null}
{data2.map((item)=>{return(
 
 
  <View key={item.id} style={{flexDirection:"row"}}>
  <Text style={{fontSize:18,color:"grey"}}>{item.id+".  "}</Text>
  <Text style={{fontSize:18,color:"grey"}}>{item.Ingredients}</Text>
  </View>

)})}
 </ScrollView>
 </View>
 </>:null}

</View>
<View style={{flexDirection:"row",alignSelf:"center",top:previewvisible?165:28}}>
             <View style={{paddingTop:8,paddingRight:6}}>
           <Dragicon/>
           </View>
           <TextInput style={{width:295,height:48,borderRadius:25,paddingLeft:14, borderWidth:1,borderColor:'#9FA5C0'}}
            placeholder="Enter ingredient" 
            value={Ingredients}
           onChangeText={(val)=>setIngredients(val)}
          
            // onSubmitEditing={}
            />
            
           </View>
         
         <TouchableOpacity style={{flexDirection:"row",top:previewvisible?195:45,alignSelf:"center",
         borderWidth:1,borderRadius:25,borderColor:'#9FA5C0',height:48,width:"90%",justifyContent:"center"}}
         onPress={()=>flatlistdata()}
         >
           <AntDesign style={{paddingTop:13,paddingRight:10}} name="plus" color="black"  size={21}/>
           <Text style={{alignSelf:"center"}}>Ingredient</Text>
         </TouchableOpacity>
         <View style={{width:500,right:65,borderWidth:4,marginBottom:10,borderColor:colors.Outline,top:previewvisible?220:75}}/>
  
  <Text style={{color:'#3E5481',top:previewvisible?230:115,left:40,fontWeight:"bold",fontSize:17}}>Steps</Text>
  <View style={{flexDirection:"row"}}> 
  <Text style={{width: 25,
    height: 25,
    borderRadius: 25 / 2,
    top:previewvisible?242:145,left:45,
    backgroundColor: colors.Main_Text,color:colors.white,textAlign:"center",paddingTop:2}}>1</Text>
    <View style={{top:previewvisible?290:195,left:23}}>
    <Dragicon/>
    </View>

    {/* <View style={{borderWidth:1,borderColor:"#D0DBEA",width:330,height:240,borderRadius:10,left:2,top:-240}}>
<ScrollView nestedScrollEnabled={true}  style={{left:9,top:8,maxHeight:220}}>
{data2.map((item)=>{return(
  
  <View key={item.id} style={{flexDirection:"row"}}>
  <Text style={{fontSize:18}}>{item.id+".  "}</Text>
  <Text style={{fontSize:18}}>{item.Ingredients}</Text>
  </View>
 
)})}
 </ScrollView>
 </View> */}

 <TextInput style={{top:previewvisible?242:145,left:40,borderWidth:1,borderColor:"#9FA5C0",borderRadius:25,
justifyContent: "center",
alignItems: "center",
textAlignVertical:"top",
paddingTop:18,
paddingLeft:16,
width: "70%", 

}}
value={Ingredients2}
 autocorrect={false}
 autoCapitilize="none"  
 maxLength={255}
 numberOfLines={5}
//  multiline
 placeholder="Tell a little about your food"
 onChangeText={(val)=>setIngredients2(val)}
 onSubmitEditing={()=>flatlistdata2()}
 />

 </View>
 
<View style={{flexDirection:"row" ,top:previewvisible?240:165}}>
 <View style={{marginRight:25,marginLeft:25,marginTop:35,width:155}}>
    <AppButton2 title="Back" onPress={()=>navigation.goBack()} backgroundColor="Outline" textcolor="#2E3E5C" elevate={false}/>
    </View>
    <View style={{width:155,marginTop:35}}>
    <AppButton2 title="Next" elevate={false} />
    </View>
    </View>
    </ScrollView>
     </View>
    //  </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,flex:1},
    pushdowntxtinput1:{},
    pushdowntxtinput2:{}
});
export default UploadScreen2;