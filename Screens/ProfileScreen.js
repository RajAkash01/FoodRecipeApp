import React, { useEffect, useState } from 'react';
import { View,StyleSheet, StatusBar,Text, TouchableOpacity,TouchableWithoutFeedback,Alert,
  ScrollView,useWindowDimensions,BackHandler } from 'react-native';
import { auth } from '../components/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar } from 'react-native-paper';
import colors from '../colors';
import LottieView from 'lottie-react-native';
import Recipestabscreen from './Recipestabscreen';
import Liketabscreen from './Liketabscreen';
import { NavigationContainer } from '@react-navigation/native';
// import Topnav from '../navigation/Topnav';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

function ProfileScreen({navigation}) {
    const [signout,setsignout]=useState();
    const [name,setname]=useState();
    const [photo,setphoto]=useState();
    const [share,setshare]=useState();
    const [logout,setlogout]=useState();
    useEffect(()=>{
      const backAction = () => {
          navigation.navigate("Home");
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
         backAction
        );
    
        return () => backHandler.remove();
     },[]);
    const FirstRoute = () => (
      <Recipestabscreen/>
    );
    const SecondRoute = () => (
       <Liketabscreen/>
    );

    const renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
    });
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: 'first', title: 'Recipes' },
      { key: 'second', title: 'Liked' },
    ]);
    


   

    const signout2= async()=>{
        Alert.alert(
            "LogOut",
            "Are you sure you want to logout?",
            [
              {
                text: "Yes",
                onPress:   async()=>{
                    await AsyncStorage.removeItem('login').then(navigation.replace("Signin")),
                    await AsyncStorage.removeItem('user');
                }
              },
              {
                text: "No",
                onPress: () => null,
                style: "cancel"
              },
              
            ],
            // { cancelable: false }
          );
     
       
    }

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
          setname(newval.name);
          setphoto(newval.photoUrl);
        }
      }
 user();
    const sign_out=()=>{
        auth.signOut().then(()=>{
           navigation.replace("Signin");
        }).catch((error)=>{
           console.log(error);
        });
    }
    
   return (
  <View style={styles.container} >
    
      <View style={{justifyContent:"center",alignSelf:"center",marginLeft:317,top:45}}>
<TouchableWithoutFeedback  onPress={()=>share.play(30,154)}>   
        <LottieView
        source={require('../Svg/lottie_animation/share.json') } 
        ref={animation=>{
          setshare(animation);
        }}
         
        loop={false} 
       
        style={{width:50}} />
        </TouchableWithoutFeedback>
        </View>
      <View style={{justifyContent:"center",alignSelf:"center",marginLeft:310,top:45}}>
<TouchableWithoutFeedback  onPress={()=>logout.play(),signout2}>   
        <LottieView
        source={require('../Svg/lottie_animation/logout.json') } 
        ref={animation=>{
          setlogout(animation);
        }}
         
        loop={false} 
       
        style={{width:80}} />
        </TouchableWithoutFeedback>
        </View>
 <Avatar.Image style={{alignSelf:"center",justifyContent:"center"}} size={100}  source={{uri:photo}} />
 <Text style={{justifyContent:"center",alignSelf:"center",marginTop:20,fontSize:22,fontWeight:"bold",color:"#3E5481"}}>{name}</Text>
 <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20,marginLeft:51,paddingLeft:15,marginRight:51 }}>
   <Text  style={{fontWeight:"bold",fontSize:20}} >{"32"}</Text>
   <Text  style={{fontWeight:"bold",fontSize:20,paddingLeft:8}}>{"782"}</Text>
   <Text  style={{fontWeight:"bold",fontSize:20}}>{"1.287"}</Text>
 </View>
 <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:2,marginLeft:30,marginRight:30 }}>
   <Text  style={{fontSize:17,paddingLeft:12,color:"#9FA5C0"}} >{"Recipes"}</Text>
   <Text  style={{fontSize:17,paddingLeft:4,color:"#9FA5C0"}}>{"Following"}</Text>
   <Text  style={{fontSize:17,paddingRight:5,color:"#9FA5C0"}}>{"Followers"}</Text>
 </View>
 <View style={{width:500,right:65,borderWidth:3.5,marginTop:29,borderColor:colors.Outline}}/>


 
 <TabView 
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
         renderTabBar={props =><TabBar {...props} style={{backgroundColor:"white"}} indicatorStyle={{backgroundColor:colors.primary}} inactiveColor="#9FA5C0" activeColor="#3E5481" />}
        
      />
  
    
<Text>ProfileScreen</Text>

     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,flex:1,backgroundColor:"white"},
    viewPager: {
      flex:1,
      width:"100%",
      height:"100%"
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
    },
});
export default ProfileScreen;