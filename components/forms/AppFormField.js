import { useFormikContext } from 'formik';
import ErrorMessages from './ErrorMessages';
import React from 'react';
import { TextInput, View, StyleSheet, Platform, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableRipple } from 'react-native-paper';

function AppFormField({ name, width, ...otherProps }) {
    const { setFieldValue, values, errors, setFieldTouched, touched } = useFormikContext();
    return (
        <>
            <TouchableRipple
                onPress={() => null}
                rippleColor="#c7c7c7"
            >
                <>
                    <View style={[styles.container, { width }]}>
                        {icon && <MaterialCommunityIcons name={icon} size={20} color={"#A9A9A9"} style={styles.icon} />}
                        <Image source={customicon} size={20} style={styles.icon} />
                        <TextInput style={styles.textInput}
                            onChangeText={text => setFieldValue(name, text)}
                            value={values[name]}
                            onBlur={() => setFieldTouched(name)}
                            {...otherProps} />
                    </View>

                    {/* <AppTextInput  
        onChangeText={text=>setFieldValue(name,text)}
        value={values[name]}
        onBlur={()=>setFieldTouched(name)}
        width={width} 
        {...otherprops} 
        /> */}
                </>
            </TouchableRipple>
            <ErrorMessages error={errors[name]} visible={touched[name]} />
        </>
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
export default AppFormField;