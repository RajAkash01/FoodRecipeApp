import React from "react";
import { Text, StyleSheet, Platform, TouchableOpacity } from "react-native";


function AppText({ title,children, style ,onPress}) {
  return (
    <>
        <TouchableOpacity
         onPress={onPress}
        >
<Text style={[styles.text, style]}>{title||children}</Text>
</TouchableOpacity>
</>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
