import React from 'react';
import { TouchableOpacity,StyleSheet } from 'react-native';
import AppText from '././components/AppText';

function PickerItem({label,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} >
            <AppText style={styles.Text}>{label}</AppText>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    Text:{
        padding:20
    }
})
export default PickerItem;