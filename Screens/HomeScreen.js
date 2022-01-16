import React, { useEffect, useRef, useState } from 'react';
import { View,StyleSheet,Text,StatusBar,FlatList, TouchableOpacity,TouchableWithoutFeedback,
  TextInput,Image,Platform,Alert,BackHandler } from 'react-native';
import colors from '../colors';
import AppButton2 from '../components/AppButton2';
import Card from '../components/Card';
import { auth } from '../components/firebase';
import { Avatar } from 'react-native-paper';
import { Ionicons} from "@expo/vector-icons";
import Trendingcard from '../components/Trendingcard';
import listingsApi from '../api/listings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';


function HomeScreen({navigation,route}) {
  //  console.log("fromhomescreen"+route.params.googleuser.givenName)
const [listings,setlistings]= useState([]);
const [name,setname]=useState();
const [search,setsearch]=useState(false);
const [photo,setphoto]=useState();
// const user=route.params.profile;
const user=async()=>{
  const usertype=await AsyncStorage.getItem('usertype')
  if(usertype=='emailandpass'){
    const value = await AsyncStorage.getItem('user');
    const newval=JSON.parse(value);
    setname(newval.displayName);
    setphoto(newval.photoURL);
  }
  else if(usertype=='googlesignin'){
    const value = await AsyncStorage.getItem('user');
    const newval=JSON.parse(value);
    setname(newval.givenName);
    setphoto(newval.photoUrl);
  }
}

// console.log(user);
useEffect(()=>{
    user();
},[[name,photo]])
useEffect(()=>{
    loadlistings();
    // const backAction = () => {
    //   Alert.alert("Hold on!", "Are you sure you want to go back?", [
    //     {
    //       text: "Cancel",
    //       onPress: () => null,
    //       style: "cancel"
    //     },
    //     { text: "YES", onPress: () => BackHandler.exitApp() }
    //   ]);
    //  ;
    //   return true;
    // };

    // const backHandler = BackHandler.addEventListener(
    //   "hardwareBackPress",
    //  backAction
    // );

    // return () => backHandler.remove();
},[])
const loadlistings=async()=>{
  const response= await listingsApi.getlistings(); 
  setlistings(response.data);
}
    function renderheader () {
        return (
            <View style={{flexDirection:"row",
            marginHorizontal:5,
            alignItems:"center",
            height:80}} >
            {/* text */}
            <View style={{flex:1,            
            }}>
            <Text style={{color:colors.primary,
              fontSize:25,
            }} >Hello
             {" "+name}
             </Text>
            <Text style={{marginTop:3,
              color:"grey"    
        }}
            >What you want to cook today? </Text>
            </View>
            {/* profile */}
      <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}} >
      <Avatar.Image size={45}  source={{uri:photo}} />
      </TouchableOpacity>

            </View>
        )
    }

  function renderSearchBar() {
      return (
          <View style={{flexDirection:"row",
           height:50,
           alignItems:"center",
           marginHorizontal:5,
           paddingHorizontal:10,
           borderRadius:25,
           backgroundColor:colors.form,
           marginBottom:15,
           
           
          }} >

        {/* <Ionicons name="search" size={26}  color="grey"/> */}
         <TouchableWithoutFeedback   onPress={()=>search.play()}>   
        <LottieView
        source={require('../Svg/lottie_animation/search1.json') } 
        ref={animation=>{
          setsearch(animation);
        }}
         
        loop={false} 
       
        style={{width:40}} />
        </TouchableWithoutFeedback>
         
        <TextInput  style={{marginLeft:8,flex:1}} onFocus={()=>[search.play(),setTimeout(() => {
          navigation.navigate("Search")
        }, 150)]} placeholder="Search Recipes " showSoftInputOnFocus={false} placeholderTextColor="lightgrey" pointerEvents="none"/>
    
          </View>
      )
  }
 
   function renderSeeRecipecard() {
       return (
            <View style={{flexDirection:"row",
             marginTop:5,
             marginHorizontal:5,
             borderRadius:10,
             backgroundColor:"lightgreen",
          
            }}>
           {/* image */}
           <View style={{width:100,
            alignItems:"center",
            justifyContent:"center"
        }} >
          <Image source={require("../assets/fruits-basket.png")}/>
           </View>
           {/* text */}
            </View>
       )
   }

function renderTrendingSection(){
    return(
        <View style={{marginTop:10}}>
          <Text style={{marginHorizontal:5,
            fontSize:22,
            marginBottom:5
        }} >{"Trending Recipe"}</Text>
         <FlatList  data={listings.recipes}
         horizontal
         showsHorizontalScrollIndicator={false}
         keyExtractor={(initialMessages) => initialMessages.id.toString()}
         renderItem={({item})=>{
            
          
            return(
                <Trendingcard subtitle={item.title}
                 recipeitemimg={item.image}
                 mins={item.readyInMinutes+" mins"}
                 serving={item.servings+" Servings"} 
                 onPress={()=>navigation.navigate("Detail",{item})} />
            )
        }
      }
         />
        </View>
    )
}

    const SignOut=()=>{
        auth.signOut().then(()=>{navigation.replace("Signin")});
    }
    const initialMessages ={"recipes": [
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
      ]};
      
  const testingconsolelog=()=>{
    // console.log("pressed from testingfunction");
  }

   return (
  <View style={styles.container} >

<FlatList data ={listings.recipes} 
  keyExtractor={(item)=>item.id.toString()} 
 keyboardDismissMode="on-drag"
  numColumns={2}
  renderItem={({item})=>{
  
    return (<Card  title={item.title} personname={"By "+item.sourceName} mins={item.readyInMinutes+" mins"} imageUrl={item.image}
     onPress={()=>navigation.navigate("Detail",{item})} name={name} item={item} />
      )
    
  }}


//   <FlatList data ={listings.recipes} 
//   keyExtractor={(item)=>item.id.toString()}
//   keyboardDismissMode="on-drag"
//   numColumns={2}
//   renderItem={({item})=>{
//     let item2 = [];
//      if(item.extendedIngredients){
//       item2=item.extendedIngredients.map(newitem=>{
//         return(
//             <Card title={newitem.name}
//              />
            
//           )
//       })
//      }
//   }}
  showsVerticalScrollIndicator={false}
  ListHeaderComponent={
      <View>
          {/* header */}
          {renderheader()}
          {/* Search bar  */}
          {renderSearchBar()}
          {/* trending section */}
          {renderTrendingSection()}
          {/* Category header */}
      </View>
  }
  ListFooterComponent={
      <View  style={{marginBottom:100}}/>
  }
/>
{/* <AppButton2 title="Log out" onPress={SignOut}/> */}

     </View>

    );
}
const styles = StyleSheet.create({
    container:{
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex:1,
       backgroundColor:colors.white,
       padding:15
    
    },
});
export default HomeScreen;