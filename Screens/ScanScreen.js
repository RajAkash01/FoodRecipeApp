import React from 'react';
import { View,StyleSheet, StatusBar,Text } from 'react-native';
function ScanScreen(props) {
   return (
  <View style={styles.container} >
<Text>{"ScanScreen"}</Text>
     </View>
    );
}
const styles = StyleSheet.create({
    container:{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0},
});
export default ScanScreen;