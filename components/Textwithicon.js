import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
function Textwithicon({title,svgname}) {
   return (
  <View style={styles.container} >
      {svgname}
      <Text>{title}</Text>
     </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
});
export default Textwithicon;