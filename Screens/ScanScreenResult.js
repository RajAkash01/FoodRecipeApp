import React from 'react';
import { View,StyleSheet, StatusBar } from 'react-native';
function ScanScreenResult(props) {
   return (
  <View style={styles.container} >

     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0},
});
export default ScanScreenResult;