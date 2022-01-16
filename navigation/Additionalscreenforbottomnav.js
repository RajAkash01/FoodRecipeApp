import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../Screens/ProfileScreen";
import UploadScreen from '../Screens/UploadScreen';
import UploadScreen2 from "../Screens/UploadScreen2";
import Detailrecipesearchscreen from '../Screens/Detailrecipesearchscreen';


const Stack= createStackNavigator();

const Additionalscreenforbottomnav=()=>(
    <Stack.Navigator mode="card" screenOptions={{headerShown:false}}  >
        <Stack.Screen name="upload1" component={UploadScreen} />
        <Stack.Screen name="upload2" component={UploadScreen2} />
  
    </Stack.Navigator>
    );
    export default Additionalscreenforbottomnav;