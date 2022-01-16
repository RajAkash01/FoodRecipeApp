import { useFormikContext } from 'formik';
import ErrorMessages from './ErrorMessages';
import { TouchableRipple } from 'react-native-paper';
import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../colors';
import Showbtn from '../../Svg/Showbtn';


function AppFormFieldForpass({ name, icon, width, ...otherProps }) {
    const colorforborder = colors.primary
    const colorforborder2 = colors.black
    const [borderColorss1, setborderColor1] = useState();
    const [onpress_show, setonpress_show] = useState(true);
    const { setFieldValue, values, errors, setFieldTouched, touched } = useFormikContext();
    return (
        <>
            <TouchableRipple
                onPress={() => null}
                rippleColor="#c7c7c7"
            >
                <>
                    <View style={[styles.container, { borderColor: borderColorss1 }]}>
                        {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.Main_Text} style={styles.icon} />}
                        <TextInput style={styles.textInput}
                            onFocus={() => setborderColor1(colorforborder)}
                            onBlur={() => [setborderColor1(colorforborder2), setFieldTouched(name)]}
                            secureTextEntry={onpress_show}
                            value={values[name]}
                          
                            onChangeText={text => setFieldValue(name, text)}
                            {...otherProps}
                        />
                        <TouchableOpacity style={{
                            position: "absolute",
                            right: 25,
                            top: 16
                        }}
                            onPress={() => onpress_show === true ? setonpress_show(false) : setonpress_show(true)} >
                            <Showbtn />
                        </TouchableOpacity>
                    </View>
                    {/* <AppTextinputforpasswordwithwhitebg
                        onChangeText={text => setFieldValue(name, text)}
                        value={values[name]}
                        onFocus={() => setborderColor1(colorforborder)}
                        onBlur={() => [setFieldTouched(name)]}
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
        backgroundColor: "white",
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
        borderWidth: 1,

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
        // width: "100%",
    }
});
export default AppFormFieldForpass;