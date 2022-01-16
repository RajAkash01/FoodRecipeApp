import React, { useState } from 'react';
import { View,StyleSheet,StatusBar,Text,TouchableOpacity } from 'react-native';
import * as yup from 'yup';
import colors from '../colors';
import AppButton2 from '../components/AppButton2';
import { auth } from '../components/firebase';
import { AppForm,AppFormFieldforwhitebg, SubmitButton } from '../components/forms';
import CheckCircle from '../Svg/CheckCircle';
import CheckCirclewithoutcolor from '../Svg/CheckCirclewithoutcolor';
import {Formik} from 'formik';
import { TextInput, Platform} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableRipple } from 'react-native-paper';
import AppText from '../components/AppText';
import Showbtn from '../Svg/Showbtn';


const validationSchema=yup.object().shape({
    email:yup.string().required().email().label("email"),
    password:yup.string().required().min(4).label("password")
});

function Sign_Up(props) {
   const [email,setEmail]= useState('');
   const [passlength6,setpasslength6]= useState();
   const [containnum,setcontainnum]= useState();
   const [password,setPassword]= useState('');
   const [onpress_show, setonpress_show] = useState(true);
   const colorforborder = colors.primary
   const colorforborder2 = "#D0DBEA"
   const [borderColorss1, setborderColor1] = useState();
   const [borderColorss2, setborderColor2] = useState();
//   const { setFieldValue, values, errors, setFieldTouched, touched } = useFormikContext();
 let disname="hello to you"
let hasNumber = /\d/;   // ----------- to check pasword contains a number . to check ue hasNumber.test("your string here")
      
function pasword23conditionchecker(){
 if(password.length==6){
console.log("contain 6 character");
setpasslength6(true);
 }
else if(hasNumber.test(password)){
    console.log("contain a number");
    setcontainnum(true);
}
}
//  pasword23conditionchecker();



    const handleSubmit=({email,password})=>{()=>null}
    const sign_up =()=>{
      auth.createUserWithEmailAndPassword(email,password)
      .then(authUser=>{
          
          authUser.user.updateProfile({
              displayName:"hello to you",
              photoURL:"https://firebasestorage.googleapis.com/v0/b/nothing-aac9d.appspot.com/o/images%2F029eb022-1649-4108-ae47-2a94ea7eb417?alt=media&token=ab256c06-c5ec-4d18-93d6-c139727e37f7"
          })
      })
      .catch(error=>alert(error.message))
    };
   return (
  <View style={styles.container} >
 <Formik
       initialValues={{email:'',password:''}}
      onSubmit={handleSubmit} 
      validationSchema={validationSchema}>
          {({setFieldValue, values, errors, setFieldTouched, touched})=>(
            <>
      <View style={styles.title}>
   <Text style={{fontSize:26 , fontWeight:"bold",color:colors.Main_Text}} >Welcome! </Text>
   <Text style={{fontSize:17,color:colors.Secondary_Text,paddingTop:5}}>Please enter your account here</Text>
   </View>
   <View style={styles.txtinput} >


   <TouchableRipple
                onPress={() => null}
                rippleColor="#c7c7c7">
                <>
                    <View style={[styles.containerfortxtinput, { borderColor: borderColorss1 }]}>
                         <MaterialCommunityIcons name="email" size={20} color={colors.Main_Text} style={styles.icon} />
                        <TextInput style={styles.textInput}
                             onChangeText={text => [setEmail(text),setFieldValue("email",text)]}
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
      {/* <ErrorMessages error={errors.email} visible={touched.email} /> */}

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
                             onChangeText={text => [setPassword(text),setFieldValue("password",text)]}
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
   <View style={{alignItems:"flex-start",paddingStart:45}} >
   <Text style={{fontSize:22,color:"#3E5481",}} >Your Password must contain:</Text>
   <View style={{flexDirection:"row",paddingTop:15}}>
       {password.length>=6 ?<CheckCircle/>:<CheckCirclewithoutcolor/>}
   <Text style={{fontSize:22,color:"#3E5481",paddingStart:15}} >At least 6 characters</Text>
   </View>
   <View style={{flexDirection:"row",paddingTop:15}}>
       {hasNumber.test(password) ?<CheckCircle/>:<CheckCirclewithoutcolor/> }
   <Text style={{fontSize:22,color:"#3E5481",paddingStart:15}} >Contain a number</Text>
   </View>
   </View>
   <View style={{padding:20,paddingTop:50}}>
   <AppButton2 title="Sign Up"      onPress={sign_up}/>
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
    padding:20
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

    }
});
export default Sign_Up;