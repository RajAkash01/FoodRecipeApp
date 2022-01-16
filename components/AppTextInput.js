import React from 'react';
import { TextInput, View, StyleSheet, Platform, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function AppTextInput({ customicon, icon, width = "100%", ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={"#A9A9A9"} style={styles.icon} />}
            <Image source={customicon} size={20} style={styles.icon} />
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#edebeb",
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
        paddingTop: 5
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

    }
});

export default AppTextInput;