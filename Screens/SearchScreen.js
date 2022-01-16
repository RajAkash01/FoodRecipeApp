import React, { useState,useCallback, useMemo, useRef,useEffect } from 'react';
import { View,StyleSheet, StatusBar,TextInput, TouchableOpacity,Text, Button,Slider,FlatList } from 'react-native';
import { Ionicons} from "@expo/vector-icons";
import colors from '../colors';
import CloseCircle from '../Svg/CloseCircle';
import Backbuttonforsearch from '../Svg/Backbuttonforsearch';
import Filtericonforsearch from '../Svg/Filtericonforsearch';
// import Animated from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Card from '../components/Card';
import {
  TouchableOpacity as Touchme,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from '@gorhom/bottom-sheet';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { create } from "apisauce";
import listingsApi from '../api/listings';
import { Chip, List } from 'react-native-paper';
import { Modalize } from 'react-native-modalize';
import AppButton2 from '../components/AppButton2';
import CustomBackdropforBottomsheet from '../components/CustomBackdropforBottomsheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Searchcard from '../components/Searchcard';

function SearchScreen({navigation}) {
  const bottomSheetRef = useRef(null);
  const textinput =useRef(null); 
  const[searchtext,setsearchtext]=useState('');
  const [heightoflist,setheightoflist]=useState(0);
  const [flatlistheight,setflatlistheight]=useState(-40);
  const[submittedtext,setsubmittedtext]=useState('');
  const [valueofbob,setvalueofbob]=useState(); 
  const [chipselected,setchipselected]=useState(); 
  const [chipselected2,setchipselected2]=useState(); 
  const [chipselected3,setchipselected3]=useState();
  const [listings,setlistings]=useState();
  const [flatlisttobeshown,setflatlisttobeshown]=useState(false);
   const [a,seta]=useState(0);
   const array=[];
   const arr2=[];
  const [old_data,setold_data]=useState([]);
  const snapPoints = useMemo( () =>{ return ['0%', '50%']; }, []);
  const handleSheetChanges = useCallback( (index)=> {null
}, []);

const BottomSheetHandleComponent = () => { 
  return ( 
    <View style={{backgroundColor: 'white',flex:1,borderTopLeftRadius:15,borderTopRightRadius:15}}> 
       <View style={{backgroundColor: 'black',marginBottom:15, alignSelf: 'center',
    width: (8 * 350) / 100,
    height: 6,
    borderRadius: 4,marginTop:8}} />  
    </View> 
  ); 
};
useEffect(() => {
  ()=>textinput.current.isFocused();
  console.log("i am doing something");
});
const re=async()=>{
  
  const value2= client.get("/recipes/findByIngredients?apiKey=7eeb845f50414c4aa997f923b0684079&ingredients=apple&number=20")
   
  // const response= await getlistings233
 // console.log("from where you wanted"+getlistings233);
}
var x=0
const savesearchhistory=()=>{
  let objectdata={
   search:searchtext,
   id:a
  }
  setold_data(oldArray => [...oldArray,objectdata]);   

        //  arr2.push(objectdata);
        //  array.push(arr2);
         if(old_data.length==5){
           arr2.pop();
        console.log(JSON.stringify(arr2));
         }
         console.log("from arr2"+JSON.stringify(arr2));
  // AsyncStorage.setItem('searchhist',old_data);
    seta(preva=>preva+1);
         console.log("added");
         console.log(a);
        //  if(old_data.length==0){
        //   setheightoflist(prevState => prevState + 1);
         
        //  }
        if(old_data.length==1){
          setheightoflist(prevState => prevState + 20);
          setflatlistheight(prevState => prevState + 20);
          console.log("its 1");
         }
         else if(old_data.length==0){

          console.log("its 0")
         }
         else if(old_data.length==2){
          setheightoflist(prevState => prevState + 20);
          setflatlistheight(prevState => prevState + 20);
          console.log("its >1");
         }
         else if(old_data.length>3){
          setheightoflist(prevState => prevState + 50);
          setflatlistheight(prevState => prevState + 30);
          console.log("its 4");
         }
         else if(old_data.length ==5){
           var test=old_data[0];
        setold_data(prevold_data=>prevold_data.filter(item => item.search !== test));
        console.log("its 5");
        console.log(old_data);
       // setold_data(oldArray => [...oldArray,objectdata]);
        }
    //   else if(old_data.length==5){
       
    //     setold_data(prevold_data=>[...prevold_data,prevold_data.shift()]);
    //     console.log("removed");
    //  }
    //  else{
    //    console.log("nothing to do");
    //  }
    // result.shift();
     console.log(old_data);
    //  console.log(array);
    // setold_data(searchtext);
   
    // array.push[x](old_data,searchtext);
    
  
  // else if(old_data==null){
  //  setold_data(searchtext);
  //   console.log(old_data);
  // }

  //  if(AsyncStorage.getItem('searchhist')==null){   
  //    AsyncStorage.setItem('searchhist','[ ]');
    
  //  }
  //  var old_data =AsyncStorage.getItem('searchhist')
  //  var result=JSON.parse(old_data);
  //  result.push()
}
  
//   useEffect(()=>{
//     loadlistings();
    
// },[searchtext])
const loadlistings=async()=>{
 // const response= await listingsApi.getlistings2(); 
// setflatlisttobeshown(true);
 const apiClient=create({
  baseURL:'https://api.spoonacular.com',
  headers:{"Content-Type":'application/json'}
});
 const endpoint122=`/recipes/findByIngredients?apiKey=7eeb845f50414c4aa997f923b0684079&ingredients=${searchtext}&number=2`
  const response = await apiClient.get(endpoint122);
  console.log(submittedtext);
  setlistings(response.data);
  //for updating height of list 
  

 savesearchhistory();
 
}

  
 
  return (
  <View style={styles.container} >
      <View style={{padding:65,bottom:30}}>    
       <View style={{position:"absolute",left:18,top:70}}>
         <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Backbuttonforsearch />
      </TouchableOpacity>
      </View>
   <View style={{flexDirection:"row",
           height:50,
           alignItems:"center",
          
           borderRadius:25,
           backgroundColor:colors.form,
           marginBottom:15,
           bottom:9,
          }} >

        <Ionicons style={{paddingLeft:12}} name="search" size={26}  color="grey"/>
        <TextInput  style={{marginLeft:8,flex:1}} placeholder="Search Recipes " placeholderTextColor="lightgrey" onChangeText={text=>setsearchtext(text)}
         onSubmitEditing={loadlistings} ref={textinput}  value={searchtext}/>
        {searchtext.length!=0?<TouchableOpacity  style={{position:"absolute" ,right:20}} onPress={()=>setsearchtext("")}>
        <CloseCircle />
        </TouchableOpacity>:null}
          </View>
          <View style={{position:"absolute",right:18,top:70}}>
         <TouchableOpacity onPress={()=> bottomSheetRef.current.snapTo(1) }>
          
      <Filtericonforsearch />
      </TouchableOpacity>
      </View>
      </View>
    <View style={{width:500,right:65,borderWidth:4,marginBottom:10,borderColor:colors.Outline,bottom:105}}/>
  { flatlisttobeshown!=true? <FlatList
   style={{bottom:129,marginTop:19,height:300,marginBottom:heightoflist}}
     data={old_data}
     keyExtractor={(item)=>item.id.toString()}
     renderItem={({item})=>{
       return ( <Searchcard data={item.search}  />)
     }}
   />:null}
{old_data!=0 && flatlisttobeshown!=true?<View style={{width:500,right:65,borderWidth:4,marginBottom:5,borderColor:colors.Outline,bottom:420-heightoflist}}/>:null}


    <FlatList  style={{bottom:399 - flatlistheight,alignSelf:"center",marginTop:flatlisttobeshown==true?140:null,  
  }}
    data={listings}
    keyExtractor={(item)=>item.id.toString()}
    keyboardDismissMode="on-drag"
    numColumns={2}
    renderItem={({item})=>{
   
    return (<Card  title={item.title} personname={  item.sourceName==null?"By Anonymous":"By "+item.sourceName} mins={  item.readyInMinutes==null?"":item.readyInMinutes+" mins"} imageUrl={item.image} onPress={()=>
       navigation.navigate("Detailsearchscreen",{item})}/>
      
      )
    
  }}
 />
   
    <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        activeOffsetY={[-1, 1]} 
        failOffsetX={[-5, 5]} 
        animateOnMount={true} 
        onChange={handleSheetChanges}
         backdropComponent={
          (props) => {
            return <CustomBackdropforBottomsheet {...props} />;
          } 
          }
         handleComponent={BottomSheetHandleComponent}
      >
        <View style={{backgroundColor:"white",flex:1}}>
          <Text style={{alignSelf:"center",paddingTop:20,fontWeight:"bold",fontSize:20,color:"#3E5481"}}>Add a Filter</Text>
          <Text style={{paddingTop:20,fontWeight:"bold",fontSize:20,paddingLeft:15,color:"#3E5481" }}>Category</Text>
          <View style={{flexDirection:"row"}}>
         <Touchme onPress={()=> chipselected==true?setchipselected(false):setchipselected(true)}>
           <Text style={{marginTop:12,paddingTop:5,
            paddingLeft:14,marginLeft:15,backgroundColor: chipselected==true?colors.primary:colors.white,
            borderRadius:15,borderWidth:1
            ,borderColor:colors.Outline,color:chipselected==true?colors.white:colors.Outline,width:45,height:31}}>All</Text>
          </Touchme>
         <Touchme onPress={()=> chipselected2==true?setchipselected2(false):setchipselected2(true)}>
         <Text style={{marginTop:12,paddingTop:5,
            paddingLeft:14,marginLeft:15,backgroundColor:chipselected2==true?colors.primary:colors.white,borderWidth:1,
            borderRadius:15,borderColor:colors.Outline,color:chipselected2==true?colors.white:colors.Outline,width:58,height:31}}>Food</Text>
          </Touchme>
         <Touchme onPress={()=> chipselected3==true?setchipselected3(false):setchipselected3(true)}>
         <Text style={{marginTop:12,paddingTop:5,
            paddingLeft:14,marginLeft:15,backgroundColor:chipselected3==true?colors.primary:colors.white,borderWidth:1,
            borderRadius:15,borderColor:colors.Outline,color:chipselected3==true?colors.white:colors.Outline,width:58,height:31}}>Drink</Text>
          </Touchme>
          </View>
          <View style={{flexDirection:"row",marginTop:19}}>
    <Text style={{color:"#3E5481",fontSize:18,marginLeft:18,marginTop:2,fontWeight:"bold"}}>Cooking Duration</Text>
    <Text style={{color:"#9FA5C0",fontSize:18,marginLeft:5,marginTop:2}}>{"(in minutes)"}</Text>
    </View>
    <View style={{flexDirection:"row",width:360,marginLeft:15,marginBottom:10,marginTop:10,justifyContent:"space-between"}}>
        <Text style={{color:colors.primary}}>{"<10"}</Text>
        <Text style={{color:colors.primary}}>30</Text>
        <Text style={{color:colors.primary}}>{">60"}</Text>
    </View>
    <View style={{paddingLeft:93,paddingRight:93}}>
    <NativeViewGestureHandler  disallowInterruption={true}>

    <Slider style={{transform: [{ scaleX: 1.9 }, { scaleY: 1.9 }]}} 
    thumbTintColor={colors.primary}
     minimumTrackTintColor={colors.primary}
      maximumTrackTintColor="darkgrey"
      step={30}
      maximumValue={60}
      minimumValue={10}
      />
      </NativeViewGestureHandler>
    </View>
     <View style={{flexDirection:"row"}}>
       <View style={{marginRight:25,marginLeft:25,marginTop:35,width:155}}>
    <AppButton2 title="Cancel" backgroundColor="form" textcolor="#2E3E5C" elevate={false}/>
    </View>
    <View style={{width:155,marginTop:35}}>
      <Touchme onPress={()=>bottomSheetRef.current.close()}>
    <AppButton2 title="Done" elevate={false} />
    </Touchme>
    </View>
    </View>
        </View>
      </BottomSheet>
      
 



     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
       bottom:15,
       height:1000,
  
  },
  dragBar: {
    backgroundColor: 'lightgray',
    borderRadius: 100,
    height: 4,
    marginTop: 15,
    width: '35%'
},
header: {
    alignItems: 'center',
    backgroundColor: 'papayawhip',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 35,
   

},
pillbar:{
  backgroundColor:"yellow"
}
});
export default SearchScreen;