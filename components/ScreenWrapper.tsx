/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2025-05-02 14:30
*****************************************************************************************/
import { colors } from '@/constants/theme';
import { ScreenWrapperProps } from '@/types';
import React from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet, View } from 'react-native';

const { height } = Dimensions.get("window");

const ScreenWrapper = ({ children, style }: ScreenWrapperProps) => {

    //------------------------------------------------
    // CONST`S
    //------------------------------------------------
    let paddingTop = Platform.OS == "ios" ? height * 0.06 : 30;

    return (
        <View style={[
            {
                paddingTop,
                flex: 1,
                backgroundColor: colors.neutral900
            },
            style
        ]}>
            <StatusBar barStyle={"light-content"} />
            {children}
        </View>
    )
}

export default ScreenWrapper

const styles = StyleSheet.create({})