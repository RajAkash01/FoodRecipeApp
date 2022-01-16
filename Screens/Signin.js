import React, { Component, useEffect, useState } from 'react';
import {Pressable, View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import colors from '../colors';
import * as yup from 'yup';
import Showbtn from '../Svg/Showbtn';
import AppText from '../components/AppText';
import * as Google from 'expo-google-app-auth';
import AppButton2 from '../components/AppButton2';
import { auth,provider } from '../components/firebase';
import "firebase/auth";
import {Formik} from 'formik';
import { TextInput, Platform} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableRipple } from 'react-native-paper';
import { ActivityIndicator, Colors } from 'react-native-paper';
// import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Bottomnav from '../navigation/Bottomnav';
import store from "../reducers/store";
import * as actions from '../reducers/fortest';

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("email"),
  password: yup.string().required().min(4).label("password")
});

function Signin({ navigation }) {
//  const dispatch=useDispatch();
   const [Email,setEmmail]= useState('');
   const [Password,setPasssword]= useState('');
   const [activityvalue,setactivityvalue] = useState(false);
   const [login,setlogin]= useState();
   const [onpress_show, setonpress_show] = useState(true);
   const colorforborder = colors.primary
   const colorforborder2 = "#D0DBEA"
   const [borderColorss1, setborderColor1] = useState();
   const [borderColorss2, setborderColor2] = useState();
  //  const loginvalue=()=>{
  //     setlogin(AsyncStorage.getItem('login')); 
  //   if(login==true){
  //     navigation.replace("BottomTabnav");
  //    console.log("true");
  //  }else if(login==false){
  //     navigation.replace("Signin");
  //     console.log("false");
  //  }
  // }
  const handleSubmit = ({ email, password }) => { () => null }

// useEffect(()=>{
  
//   // AsyncStorage.getItem('login').then(login=>{

//   //   if(login==true){
//   //     return navigation.replace("BottomTabnav");
//   //   }else if(login==false){
//   //     return navigation.replace("Signin");
      
//   //   }
//   // })

// // const unsubscribe=auth.onAuthStateChanged((authUser)=>{
// //   if(authUser){
// //     authUser.providerData.forEach((profile)=>{
// //       navigation.replace("BottomTabnav",{profile});
// //     })
 
// //   }
// // });
// // return unsubscribe;
// },[]);
useEffect(() => {
  // loginsystem();
  getloginvalue();
}, [login]);


function getloginvalue(){
AsyncStorage.getItem("login").then(value => {
   if(value=='true'){
    navigation.replace("BottomTabnav");
    console.log("true");
  }
  else if(value=='false') {
    console.log("false");
    navigation.replace("Signin");
    setlogin(false);
  }
})
}




const signInWithEmailPassword=async()=>{
  try {
    auth.signInWithEmailAndPassword(Email, Password)
    .then(async(userCredential) => {
      // Signed in
      const user2 = userCredential.user;
      navigation.replace("BottomTabnav");
      await AsyncStorage.multiSet([['login','true'],['usertype','emailandpass']]).catch((error)=>console.log(error));
      const value = await AsyncStorage.getItem('user');
    if(value == null) {
      await AsyncStorage.setItem('user',JSON.stringify(user2)).then(()=>{console.log("it was saved successfully")})
      .catch((error)=>{console.log(error)});
    }
    // else{
    //   await AsyncStorage.mergeItem('user',JSON.stringify(user2));

    // }
      console.log(value);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  } catch (error) {
    console.log(error);
  }
  
}
const handleGoogleSignin=()=>{
  setactivityvalue(true);
  const config={
    androidClientId:'749880649463-dvp63hu6gepqgdue5s57gs55ku0nqb1e.apps.googleusercontent.com',
    iosClientId:'749880649463-6b6k1a4evhclnsp2sfketfhb0jln9kjm.apps.googleusercontent.com',
  scopes:['profile','email']
};
Google.logInAsync(config)
.then(async(result)=>{
  const {type,user}=result;
  if(type=='success'){
    const{email,name,photoUrl}=user;
 navigation.replace("BottomTabnav");
   store.dispatch(actions.stored({user1:user}));
   console.log(store.getState());
  await AsyncStorage.multiSet([['login','true'],['usertype','googlesignin']]).catch((error)=>console.log(error));
 const value = await AsyncStorage.getItem('user')
 if(value == null) {
   await AsyncStorage.setItem('user',JSON.stringify(user))
   .then(()=>{console.log("it was saved successfully")})
   .catch((error)=>{console.log(error)});
 }else{
   await AsyncStorage.mergeItem('user',JSON.stringify(user));

 }


// console.log(user);
  }else{
    setactivityvalue(false);
console.warn("Googlesignin error occured")
  }
})
.catch(error=>{
  console.log(error)
})
};
const handleGoogleSignin2=()=>{
  auth.signInWithPopup(provider).then(()=>{
    dispatch(login({
      displayName:user.displayName,
      email:user.email,
      photoUrl:user.photoUrl
    }))
  })
 .catch(error =>alert(error.message))
};
  return (
    <View style={styles.container} >
      {}
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
{({setFieldValue, values, errors, setFieldTouched, touched})=>(
            <>
<View style={styles.title}>
          <Text style={{ fontSize: 26, fontWeight: "bold", color: colors.Main_Text }} >Welcome Back!</Text>
          <Text style={{ fontSize: 17, color: colors.Secondary_Text, paddingTop: 5 }}>Please enter your account here</Text>
        </View>
        <View style={styles.txtinput} >


        <TouchableRipple
                onPress={() => null}
                rippleColor="#c7c7c7">
                <>
                    <View style={[styles.containerfortxtinput2, { borderColor: borderColorss1 }]}>
                         <MaterialCommunityIcons name="email" size={20} color={colors.Main_Text} style={styles.icon} />
                        <TextInput style={styles.textInput}
                             onChangeText={text => [setEmmail(text),setFieldValue("email",text)]}
                             value={values["email"]}
                            onFocus={() => setborderColor1(colorforborder)}
                            onBlur={() =>[ setborderColor1(colorforborder2),setFieldTouched("email")]}
                           // ref={(input) => { this.firstTextInput = input; }}
                            placeholder="Email"
                            autocorrect={false}
                            autoCapitilize="none" 
                            keyboardType="email-address"
                           />
                    </View>
                </>
            </TouchableRipple>
          { errors.email && touched.email?<AppText style={styles.error}>  {errors.email}</AppText>:null}



          {/* <AppFormFieldforwhitebg
            icon="email"
            name="email"
            placeholder="Email"
            autocorrect={false}
            autoCapitilize="none"
            keyboardType="email-address"
          
          /> */}

<TouchableRipple
                onPress={() => null}
                rippleColor="#c7c7c7">
                <>
                    <View style={[styles.containerfortxtinput2, { borderColor: borderColorss2 }]}>
                         <MaterialCommunityIcons name="lock" size={20} color={colors.Main_Text} style={styles.icon} />
                        <TextInput style={styles.textInput}
                             onChangeText={text => [setPasssword(text),setFieldValue("password",text)]}
                             value={values["password"]}
                            onFocus={() => setborderColor2(colorforborder)}
                            onBlur={() =>[ setborderColor2(colorforborder2),setFieldTouched("password")]}
                           // ref={(input) => { this.firstTextInput = input; }}
                            placeholder="Password"
                            autocorrect={false}
                            autoCapitilize="none" 
                            secureTextEntry={onpress_show}
                           />
                           <TouchableOpacity style={{
                            position: "absolute",
                            right: 25,
                            top: 16
                        }}
                            onPress={() => onpress_show === true ? setonpress_show(false) : setonpress_show(true)} >
                            <Showbtn />
                        </TouchableOpacity>
                    </View>
                </>
            </TouchableRipple>
          { errors.password && touched.password?<AppText style={styles.error}>  {errors.password}</AppText>:null}






          {/* <AppFormFieldForpass
            icon="lock"
            name="password"
            placeholder="Password"
            autocorrect={false}
            autoCapitilize="none"
          /> */}
        </View>
        <AppText title="Forgot password?" style={{ fontSize: 17, color: colors.Main_Text, paddingStart: 200 }} onPress={() => navigation.navigate("Forgotpass")} />
        <View style={{ padding: 20 }}>
        <AppButton2 title="Login" onPress={signInWithEmailPassword}/>
        </View>
        <Text style={{ fontSize: 17, color: colors.Secondary_Text, alignSelf: "center" }}>Or continue with</Text>
        <View style={{padding:20}}>
         { activityvalue !=true ? <AppButton2 title="Google" icon="google" backgroundColor="secondary" btnsecondarycolor="#ff9792" 
          onPress={handleGoogleSignin}/>:
          <View style={[styles.View,{elevation:25}]} >
          <Pressable
      style={[styles.button,{backgroundColor:colors["secondary"]}]}
     
      // rippleColor="#ff776d"   
      android_ripple={{color: "#ff9792", borderless: true}}
    >
      <View style={styles.flex} >
      <ActivityIndicator animating={true} color={colors.white} />
      </View>
    </Pressable>
    </View>
    }




        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }} >
          <Text style={{ fontSize: 17, color: colors.Main_Text }}>Don't have any account?</Text>
          <AppText title="Sign Up" style={{ paddingStart: 7, fontSize: 17, color: "#1FCC79" }} onPress={() =>navigation.navigate("SignUp")} />


        </View>
            </>
)}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  title: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100
    // paddingStart:55
  },
  txtinput: {
    padding: 20
  },
  View:{
    alignSelf:"stretch",
   justifyContent: 'center',
   borderRadius: 25,
   margin: 10,
   elevation: 25, 
   },
  button: {
    // borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    // marginVertical: 10,
    // elevation: 10,
    justifyContent: 'center',
  },
  containerfortxtinput: {
    backgroundColor: "white",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    borderWidth: 1
},
containerfortxtinput2: {
    backgroundColor: "white",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    borderWidth: 1
},
  icon: {
    marginRight: 10,
    paddingTop: 5
},
textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",

},textInput2: {
  fontSize: 18,
  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",

}
});
export default Signin;