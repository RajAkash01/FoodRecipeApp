import React, { useState, useEffect, useLayoutEffect,useRef,useCallback } from 'react';
import { View,StyleSheet, StatusBar,Text, FlatList,Image,BackHandler,ScrollView,RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {db} from '../components/firebase';
import moment from "moment";
import { LogBox } from 'react-native';
import _ from 'lodash';
import { Avatar } from 'react-native-paper';
import colors from '../colors';
import AppButton2 from '../components/AppButton2';
import * as Notifications from 'expo-notifications';



LogBox.ignoreLogs(['Warning:...']); // ignore specific logs
LogBox.ignoreAllLogs(); // ignore all logs
const _console = _.clone(console);
console.warn = message => {
if (message.indexOf('Setting a timer') <= -1) {
   _console.warn(message);
   }
};
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})


function NotificationScreen({navigation}) {
    const [name,setname]=useState();
    const [photo,setphoto]=useState();
    const [listings,setListings] =useState([]);
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
  const responseListener = useRef();
    const [helperarr,sethelperarr]=useState([]);

    const [refreshing, setRefreshing] = React.useState(false);
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      loaddatafromfirebase();
      setTimeout(() => {
        setRefreshing(false)
      }, 2000);
     
    }, []);

    const registerforPushNotifications = async () =>{
       try {
        const permission = await Notifications.getPermissionsAsync();
        if(!permission.granted) return;
  
        const token= await Notifications.getExpoPushTokenAsync();
        console.log(token);   

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
        });
    
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response);
        });
       } catch (error) {
         console.log(error);
       }

      
    }

const calender=()=>{
//     1. Get Yesterday Date:
// moment().subtract(1, "days").format("YYYY-MM-DD");

// 2. Get Today Date:
// moment().subtract(0, "days").format("YYYY-MM-DD");

// 3. Get Tomorrow Date:
// moment().subtract(-1, "days").format("YYYY-MM-DD");
   var today=moment().subtract(0, "days").format("DD");
   var Yesterday=moment().subtract(1, "days").format("DD")
//    console.log(1<=today?"yesterday":"today") ;
     // current time  moment().subtract(0, "hours").format("h:mm:ss a") 
     // for full month name console.log(moment().subtract(0, "days").format("MMMM"))    
 //  console.log(moment().subtract(0, "days").format("MMMM")) ;
}
// useEffect(()=>{
  
// })

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
  useEffect(()=>{
    user();
    registerforPushNotifications();
      const backAction = () => {
          navigation.navigate("Home");
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
         backAction
        );
    
        return () => backHandler.remove();
    
  },[])
 const loaddatafromfirebase=()=>{
  const incomingdata=[]
  
  if(name==undefined){
    console.log("name got undefined");
    user().then(()=>{
      try {
        console.log("nested inside if"+name)
        db.collection("Notification").doc(name).collection("Notifiincoll").get()
       .then((querySnapshot) => {
        
           querySnapshot.forEach((doc) => {
               // doc.data() is never undefined for query doc snapshots
         //   console.log(doc.id, " => ", doc.data());
              
                incomingdata.push(doc.data());
              
           });
           setListings(incomingdata);
          // console.log("Document data:", doc.data());    
       })
       .catch((error) => {
           console.log("Error getting documents: ", error);
       });
      
    } catch (error) {
      console.log(error);
    }
    })
    // loaddatafromfirebase();
  }
  else if(name!=null){
    try {
      console.log("nested inside if"+name)
      db.collection("Notification").doc(name).collection("Notifiincoll").get()
     .then((querySnapshot) => {
      
         querySnapshot.forEach((doc) => {
             // doc.data() is never undefined for query doc snapshots
       //   console.log(doc.id, " => ", doc.data());
            
              incomingdata.push(doc.data());
            
         });
         setListings(incomingdata);
        // console.log("Document data:", doc.data());    
     })
     .catch((error) => {
         console.log("Error getting documents: ", error);
     });
    
  } catch (error) {
    console.log(error);
  }
  }
   
   
 }



 useEffect(()=>{
    loaddatafromfirebase();  
 },[name])
 
  //  coll:Notification . doc:userid .coll:Notifiincoll .doc:name .set:  name:name,operation:now following you,date:data,month:month  

// calender();
   return (
       
  <View style={styles.container} >
   <Text style={{paddingTop:15,paddingLeft:20,fontSize:17,color:"#3E5481",marginBottom:18,fontWeight:"bold"}}>Today</Text>
    <ScrollView 
    refreshControl={
      <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
    } >
   {listings.map(item22=>
  
  { if(item22.operation=="now following you"&&moment().subtract(0, "days").format("DD")==item22.date){
return(
   <View key={item22.name} style={{flexDirection:"row",marginBottom:15,marginLeft:19}}>
   <Avatar.Image size={45}  source={{uri:item22.profileimg}} />
   <View>
   <Text style={{paddingTop:2,fontWeight:"bold",fontSize:17,paddingLeft:8,color:"#3E5481"}}>{item22.name}</Text>
   <Text style={{paddingLeft:15,color:colors.Secondary_Text}} >{item22.operation} * {item22.date}</Text>
   </View>
   <View style={{position:"absolute",bottom:-12,left:220,height:65,width:135}}>
   <AppButton2  title="Follow" elevate={false}/>
   </View>
   </View>
)
   }
   else if(item22.operation==" liked your recipe"&&moment().subtract(0, "days").format("DD")==item22.date){
     return(
<View key={item22.name} style={{flexDirection:"row",marginBottom:15,marginLeft:19}}>
   <Avatar.Image size={45}  source={{uri:item22.profileimg}} />
   <View>
   <Text style={{paddingTop:2,fontWeight:"bold",fontSize:17,paddingLeft:8,color:"#3E5481"}}>{item22.name}</Text>
   <Text style={{paddingLeft:15,color:colors.Secondary_Text}} >{item22.operation} * {item22.date}</Text>
   </View>
   <View style={{position:"absolute",bottom:-12,left:220,height:65,width:135}}>
   <Image  resizeMode="cover" style={{bottom:4,alignSelf:"center",width:75,height:65,borderRadius:10,marginTop:5}} source={{uri:item22.imgliked}}/>
   </View>
   </View>
     )
   }
   
  }
   )}
   </ScrollView>
      <Text style={{paddingTop:15,paddingLeft:20,fontSize:17,color:"#3E5481",marginBottom:18,top:5,fontWeight:"bold"}}>Yesterday</Text>
      <ScrollView>
     {listings.map(item=>{
 if(item.operation=="now following you"&&moment().subtract(1, "days").format("DD")==item.date){
  return(
   <View key={item.name} style={{flexDirection:"row",marginBottom:15,marginLeft:19,marginTop:5}}>
   <Avatar.Image size={45}  source={{uri:item.profileimg}} />
   <View>
   <Text style={{paddingTop:2,fontWeight:"bold",fontSize:17,paddingLeft:8,color:"#3E5481"}}>{item.name}</Text>
   <Text style={{paddingLeft:15,color:colors.Secondary_Text}} >{item.operation} * {item.date}</Text>
   </View>
   <View style={{position:"absolute",bottom:-12,left:220,height:65,width:135}}>
   <AppButton2  title="Follow" elevate={false}/>
   </View>
   </View>
  )
}
else if(item.operation==" liked your recipe"&&moment().subtract(1, "days").format("DD")==item.date){
  return(
    <View key={item.name} style={{flexDirection:"row",marginBottom:15,marginLeft:19,marginTop:15}}>
       <Avatar.Image size={45}  source={{uri:item.profileimg}} />
       <View>
       <Text style={{paddingTop:2,fontWeight:"bold",fontSize:17,paddingLeft:8,color:"#3E5481"}}>{item.name}</Text>
       <Text style={{paddingLeft:15,color:colors.Secondary_Text}} >{item.operation} * {item.date}</Text>
       </View>
       <View style={{position:"absolute",bottom:-12,left:220,height:65,width:135}}>
       <Image  resizeMode="cover" style={{bottom:4,alignSelf:"center",width:75,height:65,borderRadius:10}} source={{uri:item.imgliked}}/>
       </View>
       </View>
         )
   

}
     })}
     </ScrollView>
    {/* <FlatList data={listings} keyExtractor={(item)=>item.name}  renderItem={(item22)=>{console.log(item22)}}/> */}
     </View>

    );
}

const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0},
});
export default NotificationScreen;