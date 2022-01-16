import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from '../Screens/OnboardingScreen';
import Signin from '../Screens/Signin';
import Signinnav from './Signinnav';
import Passwordrecovery from '../Screens/Passwordrecovery';
import Sign_Up from '../Screens/Sign_Up';
import Backbutton from '../Svg/Backbutton';
import HomeScreen from '../Screens/HomeScreen';
import Bottomnav from './Bottomnav';
import ScanScreen from '../Screens/ScanScreen';
import DetailRecipeScreen from '../Screens/DetailRecipeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SearchScreen from '../Screens/SearchScreen';

const Stack= createStackNavigator();

const OnboardingScreennav=()=>(
<Stack.Navigator mode="modal" screenOptions={{headerShown:false}}  >
<Stack.Screen  name="OnboardingScreen"  component={OnboardingScreen} />
<Stack.Screen name="Signin" component={Signin} />
<Stack.Screen  name="Forgotpass" component={Passwordrecovery} />
<Stack.Screen name="SignUp" component={Sign_Up} />
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="BottomTabnav" component={Bottomnav} />
<Stack.Screen name="Scan" component={ScanScreen} />
<Stack.Screen name="Detail" component={DetailRecipeScreen} />
<Stack.Screen name="Search" component={SearchScreen} />
</Stack.Navigator>
);
export default OnboardingScreennav;