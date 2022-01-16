import React, { useCallback, useMemo, useRef, useState} from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import colors from '../colors';
import Homeicon from '../Svg/HomeIcon';
import Tabicon from '../components/Tabicon';
import Profileicon from '../Svg/Profileicon';
import Uploadicon from '../Svg/Uploadicon';
import Notificationicon from '../Svg/Notificationicon';
import NewListingButton from '../NewListingButton';
import ScanScreen from '../Screens/ScanScreen';
import Topnav from './Topnav';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Bottomsheetfornav from '../components/Bottomsheetfornav';
import { Portal, PortalHost } from '@gorhom/portal';
import Additionalscreenforbottomnav from './Additionalscreenforbottomnav';
import NotificationScreen from '../Screens/NotificationScreen';
import store from "../reducers/store";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: Cannot update a component from inside the function body of a different component.']);
function Bottomnav({navigation,route}) {
    const bottomSheetRef = useRef(null); 
    const snapPoints = useMemo( () =>{ return ['0%', '50%']; }, []);
  const handleSheetChanges = useCallback( (index)=> {null
}, []);
const [bottomnavval,setbottomnavval]=useState(false);
// const lowerthebottomnav=()=>{
//    // console.log("store changed",store.getState());
//     const val= store.getState();
     
//     //   setbottomnavval(val);
//     // if(bottomnavval==false){
//          console.log("from val here"+val);
//     // }
// }


store.subscribe(()=>{
   // lowerthebottomnav()
    const val= store.getState();
    setbottomnavval(val);
    // console.log("from val here"+val);
});
 
    //    const val= store.getState();
    //    console.log("from val"+JSON.stringify(val));
    const Tab = createBottomTabNavigator();
    //   const googleuser=route.params.user+"from google sign";
    //   const googleuser3=route.params.user2+"from signin with email";
    // const googleuser2= route.params.profile+"from profile"; 
        // console.log(googleuser3);
    
   return (
       <>
       
       {/* <BottomSheet
       
       ref={bottomSheetRef}
       index={0}
       snapPoints={snapPoints}
       animateOnMount={true} 
       onChange={handleSheetChanges}
     >
        <View style={{backgroundColor:"papayawhip",flex:1,borderRadius:25}}>
         <Text>Hello to you</Text>
         </View>
     </BottomSheet> */}
    
    <Tab.Navigator tabBarOptions={{ showLabel:false ,keyboardHidesTabBar:true, style:{position:"absolute",
    bottom:bottomnavval==true?-30:0,
    left:0,
    right:0,
    elevation:0,
    backgroundColor:colors.white,
    borderTopColor:colors.form , // can be transparent
    borderTopWidth: 1.8, 
    height:100 ,
     }}}>
           
    <Tab.Screen name="Home" component={HomeScreen}  options={{
         tabBarIcon:({focused})=> <Tabicon focused={focused} icon={ focused ?<Homeicon fill="#1FCC79"/>:<Homeicon fill="#9FA5C0"/>} Name="Home"/> 
    }} />
    <Tab.Screen name="Upload" component={Additionalscreenforbottomnav}  options={{
        
        tabBarIcon:({focused})=> <Tabicon focused={focused} icon={focused ?<Uploadicon fill="#1FCC79"/>:<Uploadicon fill="#9FA5C0"/>} Name="Search" />

    }}   />
    <Tab.Screen name="Scan" component={ScanScreen} options={{
        tabBarIcon:({focused})=>console.log("from bottom nav "+focused),
        tabBarButton:({onFocus})=>
        <Bottomsheetfornav/>,
        
     } }  />
    <Tab.Screen name="Notification" component={NotificationScreen} options={{
        tabBarIcon:({focused})=> <Tabicon focused={focused} icon={focused ?<Notificationicon fill="#1FCC79"/>:<Notificationicon fill="#9FA5C0"/>} Name="Notification"/>
    }}  />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon:({focused})=> <Tabicon focused={focused} icon={focused ?<Profileicon fill="#1FCC79"/>:<Profileicon fill="#9FA5C0"/>} Name="Profile" />
    }}   />
      
  

</Tab.Navigator>

</>
    );
}
const styles = StyleSheet.create({
    container:{},
});
export default Bottomnav;