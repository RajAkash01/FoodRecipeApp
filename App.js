import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './Screens/OnboardingScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import Sign_Up from './Screens/Sign_Up';
import Passwordrecovery from './Screens/Passwordrecovery';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingScreennav from './navigation/OnboardingScreennav';
import { NavigationContainer } from '@react-navigation/native';
import Signin from './Screens/Signin';
import Signinnav from './navigation/Signinnav';
import { LogBox} from 'react-native';
import _ from 'lodash';
import SearchScreen from './Screens/SearchScreen';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { PortalProvider } from '@gorhom/portal';
// import rootReducer from './reducers/rootreducers';
import store from './reducers/store';
import index from './reducers/index';
import ProfileScreen from './Screens/ProfileScreen';
import Recipestabscreen from './Screens/Recipestabscreen';
import Bottomsheetfornav from './components/Bottomsheetfornav';


export default function App() {
  console.ignoredYellowBox = ['Setting a timer'];
  const [firstlaunch, setfirstlaunch] = useState(null);
  // const store=createStore(rootReducer);
  useEffect(() => {
    AsyncStorage.getItem("alreadylaunched").then(value => {
      if (value == null) {
        AsyncStorage.setItem("alreadylaunched", "true");
        setfirstlaunch(true);
      }
      else {
        setfirstlaunch(false);
      }
    })
  }, []);

  if (firstlaunch == null) return null;
  else if (firstlaunch == true) {
    return (
      <NavigationContainer>
        <PaperProvider>
        <Provider store={store}>
          <PortalProvider>
          <OnboardingScreennav />
          </PortalProvider>
          </Provider>
        </PaperProvider>
      </NavigationContainer>
    );
  }
  else {
    return (
      <NavigationContainer>
        <PaperProvider>
          <Provider store={store}>
            <PortalProvider>
        <Signinnav />
        {/* <SearchScreen/> */}
        </PortalProvider>
        </Provider>
        </PaperProvider>
      </NavigationContainer>
    );
  }

  // return (
  //   <View style={styles.container}>
  //     <PaperProvider>
  //       <Passwordrecovery/>
  //       </PaperProvider>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
