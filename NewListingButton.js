import React from "react";
import { View, StyleSheet, TouchableOpacity,Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "./colors";
import Scanicon from "./Svg/Scanicon";

function NewListingButton({ onfocus, onPress }) {
  return (
    <TouchableOpacity hitSlop={{top:100,bottom:100}} onPress={onPress}>
      <View style={styles.container}>
        <Scanicon fill={colors.primary}/>
      </View>
      <View style={{
          position:"absolute",
          bottom:30,
          alignSelf:"center"
      }} >
        <Text style={{color:onfocus?colors.primary:"#9FA5C0",bottom:2}} >Scan</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 56,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});

export default NewListingButton;
