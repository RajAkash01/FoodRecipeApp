import React, { useState } from 'react';
import { View,StyleSheet,Text,StatusBar,TextInput,TouchableOpacity } from 'react-native';
import * as yup from 'yup';
import colors from '../colors';
import Showbtn from '../Svg/Showbtn';
import {Formik} from 'formik';
import { auth } from '../components/firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppForm,AppFormFieldforwhitebg, SubmitButton } from '../components/forms';
import AppButton2 from '../components/AppButton2';
import AppText from '../components/AppText';
const validationSchema=yup.object().shape({
    email:yup.string().required("email is required").email().label("email")
});
function Passwordrecovery(props) {
    const [Email,setEmail]=useState();
    const colorforborder = colors.primary
    const colorforborder2 = colors.black
    const [borderColorss1, setborderColor1] = useState();

    const handleSubmit=({email})=>{()=>null}

    const forgetpass=()=>{
        auth.sendPasswordResetEmail(Email)
  .then(() => {
    // Password reset email sent!
    // ..
    console.log("Email send");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log("Error occured while sending email",error);
  });
    }
   return (
  <View style={styles.container} >
<Formik
        initialValues={{ email: ''}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
{({setFieldValue, values, errors, setFieldTouched, touched})=>(
            <>
      <View style={styles.title}>
   <Text style={{fontSize:26 , fontWeight:"bold",color:colors.Main_Text}} >Password recovery </Text>
   <Text style={{fontSize:17,color:colors.Secondary_Text,paddingTop:5}}>Enter your email to recover your password</Text>
   </View>
   <View style={[styles.txtinput,{borderColor: borderColorss1}]} >
    <MaterialCommunityIcons name="email" size={20} color={colors.Main_Text} style={styles.icon} />
                        <TextInput style={styles.textInput}
                            placeholder="Email"
                            onChangeText={text => [setFieldValue("email", text),setEmail(text)]}
                            value={values["email"]}
                            onFocus={() => setborderColor1(colorforborder)}
                            onBlur={() => [setborderColor1(colorforborder2), setFieldTouched("email")]}
                            
                            />
                            { errors.email?<AppText style={styles.error}>  {errors.email}</AppText>:null}
   </View>
   <View style={{padding:20}}>
   <AppButton2 title="Login" onPress={()=>forgetpass()}/>
   </View>
   </>
)}
   </Formik>
     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0},
    title:{
        alignItems:"center",
        justifyContent:"center",
       paddingTop:100
        // paddingStart:55
    },
    txtinput:{
        backgroundColor: "white",
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        top:18,
        borderWidth: 1,
        margin:18
        
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height:"100%"

    },
    icon: {
        marginRight: 10,
        paddingTop: 5
    },
});
export default Passwordrecovery;