import React from 'react';
import { Text, ImageBackground, View,StyleSheet,StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../colors';
import AppButton2 from '../components/AppButton2';
function OnboardingScreen({navigation}) {
   return (
 <View style={styles.screen} >
  <ImageBackground style={styles.container} source={require("../assets/onboarding.png")} >
    <View style={styles.text}>
  <Text style={styles.text} >Start Cooking</Text>
  <Text style={styles.subtext} >Lets join our community{'\n'}    to cook better food!</Text>
  </View>
  </ImageBackground>
  <View style={{paddingTop:650}} >
  <AppButton2 title="Get Started" onPress={()=>navigation.replace("Signin")}  backgroundColor="primary" btnsecondarycolor="#67ffa9" />
  </View>
     </View>
    );
}
const styles = StyleSheet.create({
    screen:{ paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0},
    container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",  
    width:400,
    height:454
    },
    text:{
        paddingTop:325,
        color:colors.Main_Text,
        fontSize:29,
        fontWeight: "bold",
         alignItems:"center",
            
    },
    subtext:{
      color:colors.Secondary_Text,
      paddingBottom:40,
      paddingTop:9,
     fontSize:16,
    

    },
    
});
export default OnboardingScreen;