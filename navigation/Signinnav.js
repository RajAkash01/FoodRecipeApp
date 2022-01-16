import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Passwordrecovery from '../Screens/Passwordrecovery';
import Sign_Up from '../Screens/Sign_Up';
import Signin from '../Screens/Signin';
import Backbutton from '../Svg/Backbutton';
import HomeScreen from '../Screens/HomeScreen';
import Bottomnav from './Bottomnav';
import ScanScreen from '../Screens/ScanScreen';
import DetailRecipeScreen from '../Screens/DetailRecipeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SearchScreen from '../Screens/SearchScreen';
import UploadScreen2 from '../Screens/UploadScreen2';
import Additionalscreenforbottomnav from './Additionalscreenforbottomnav';
import Detailrecipesearchsreen from '../Screens/Detailrecipesearchscreen';

const Stack= createStackNavigator();

const Signinnav=()=>(
<Stack.Navigator mode="card" screenOptions={{headerShown:false}}  >
<Stack.Screen  name="Signin" component={Signin} />  
<Stack.Screen  name="Forgotpass" component={Passwordrecovery} />
<Stack.Screen name="SignUp" component={Sign_Up} />
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="BottomTabnav" component={Bottomnav} />
<Stack.Screen name="Scan" component={ScanScreen} />
<Stack.Screen name="Detail" component={DetailRecipeScreen} />
<Stack.Screen name="Search" component={SearchScreen} />
<Stack.Screen name="Detailsearchscreen" component={Detailrecipesearchsreen} />
{/* <Stack.Screen name="Additionalscreen" component={Additionalscreenforbottomnav} /> */}
{/* <Stack.Screen name="upload2" component={UploadScreen2} /> */}
{/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
</Stack.Navigator>
);
export default Signinnav;