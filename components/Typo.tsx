/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2025-05-02 14:40
*****************************************************************************************/
import { colors } from '@/constants/theme';
import { TypoProps } from '@/types';
import { verticalScale } from '@/utils/styling';
import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

const Typo = ({
    size,
    color = colors.text,
    fontWeight = '400',
    children,
    style,
    textProps = {}
}: TypoProps) => {

    //------------------------------------------------
    // CONST`S
    //------------------------------------------------
    const textStyle: TextStyle = {
        fontSize: size ? verticalScale(size) : verticalScale(18),
        color,
        fontWeight
    }

    //------------------------------------------------
    // MAIN RETURN
    //------------------------------------------------
    return <Text style={[textStyle, style]}{...textProps}>{children}</Text>
}

export default Typo;

const styles = StyleSheet.create({})