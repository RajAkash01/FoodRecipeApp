import React, { useEffect, useState } from 'react';
import { View,StyleSheet, StatusBar,ScrollView,Text,FlatList,Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {db} from '../components/firebase';
import Card from '../components/Card';
import { ActivityIndicator, Colors } from 'react-native-paper';
import colors from '../colors';

function Liketabscreen({navigation}) {
    const [name,setname]=useState();
    const [photo,setphoto]=useState();
    const [listings,setListings]=useState([]);
    const [loading,setloading]=useState(true);
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
      },[])
    const loaddata=()=>{
        const incomingdata=[]
        db.collection("Liked_one").doc(name).collection("Liked_oneincoll")
        
        // .onSnapshot((querySnapshot) => {
         
        //     querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //      console.log(doc.id, " => ", doc.data().title);
               
        //          incomingdata.push(doc.data());
               
        //     });
        //     setListings(incomingdata);
        //    // console.log("Document data:", doc.data());    
        // })


       .get().then((querySnapshot) => {
         
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
             console.log(doc.id, " => ", doc.data().title);
               
                 incomingdata.push(doc.data());
               
            });
            setListings(incomingdata);
           // console.log("Document data:", doc.data());    
           setloading(false);
          })
  


    }
    useEffect(()=>{
        loaddata();
    },[name])
   return (
  <View style={styles.container}>
 
{/* <Text>Likescreen</Text> */}
{loading?<ActivityIndicator style={{alignItems:"center",height:Dimensions.get("window").height/2.7}} size={35} animating={true}  color={colors.primary} />:<FlatList on style={{flex:1,marginBottom:99}} data={listings}  keyExtractor={(item)=>item.title} numColumns={2} renderItem={ ({item})=> {return( <Card title={item.title}  mins={  item.mins==undefined?null:item.mins+" mins"}
 imageUrl={item.imageUrl} personname={"By "+item.personname} valueforbtn={true} item={item}  name={name} onPress={()=>navigation.navigate("Detail",{item})}/>)}} />}

{/* {listings.map(item=> <Card title={item.title}  mins={  item.mins==undefined?null:item.mins+" mins"}
 imageUrl={item.imageUrl} /> )} */}
{/* <Card title={item.title} personname={  item.sourceName==undefined?null:"By "+item.sourceName} mins={  item.readyInMinutes==undefined?null:item.readyInMinutes+" mins"} imageUrl={item.image} onPress={()=>
       navigation.navigate("Detailsearchscreen",{item})}  /> */}

     </View>
    );
}
const styles = StyleSheet.create({
    container:{flex:1},
});
export default Liketabscreen;