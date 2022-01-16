import React, { useMemo } from 'react';
import { View,StyleSheet, StatusBar } from 'react-native';
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import Animated, { Extrapolate,interpolateNode } from 'react-native-reanimated';

const CustomBackdropforBottomsheet = ({ animatedIndex, style }) => {
    // animated variables
    const animatedOpacity = useMemo(() => interpolateNode(animatedIndex, {
        inputRange: [0, 2.5],
        outputRange: [0, 1],
        extrapolate: Extrapolate.CLAMP,
    }), [animatedIndex]);
    // styles
    const containerStyle = useMemo(() => [
        style,
        {
            backgroundColor: '#666666',
            opacity: animatedOpacity,
        },
    ], [style, animatedOpacity]);
    return <Animated.View pointerEvents="none" style={containerStyle}/>
};

export default CustomBackdropforBottomsheet;