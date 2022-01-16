import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Liketabscreen from '../Screens/Liketabscreen';
import Recipestabscreen from '../Screens/Recipestabscreen';

const Tab = createMaterialTopTabNavigator();

function Topnav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Recipes" component={Recipestabscreen} />
      <Tab.Screen name="Likes" component={Liketabscreen} />
    </Tab.Navigator>
  );
}
export default Topnav