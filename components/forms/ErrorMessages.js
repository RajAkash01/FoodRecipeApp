import React from 'react';
import colors from '../../colors';
import AppText from '../AppText';
import { StyleSheet } from 'react-native';
function ErrorMessages({ error, visible }) {
    if (!visible || !error) return null;
    return (
        <AppText style={styles.error}>
            {error}
        </AppText>
    );
}
const styles = StyleSheet.create({
    error: {
        color: colors.black
    }
})
export default ErrorMessages;