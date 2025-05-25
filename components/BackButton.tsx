/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2025-05-19 18:40
*****************************************************************************************/
import { colors, radius } from '@/constants/theme';
import { BackButtonProps } from '@/types';
import { verticalScale } from '@/utils/styling';
import { useRouter } from 'expo-router';
import { CaretLeft } from "phosphor-react-native";
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const BackButton = ({ style, iconSize = 26 }: BackButtonProps) => {

    //------------------------------------------------
    // CONST`S
    //------------------------------------------------
    const router = useRouter();

    return (
        <TouchableOpacity onPress={() => router.back()} style={[style, styles.button]}>
            <CaretLeft size={verticalScale(iconSize)} color={colors.white}  weight='bold' />
        </TouchableOpacity>
    )
}

export default BackButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.neutral600,
        alignSelf: 'flex-start',
        borderRadius: radius._12,
        borderCurve: "continuous",
        padding: 5
    }
});