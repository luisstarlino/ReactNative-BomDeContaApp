/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2025-05-25 19:40
*****************************************************************************************/
import { colors, radius, spacingX } from '@/constants/theme'
import { InputProps } from '@/types'
import { verticalScale } from '@/utils/styling'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const Input = (props: InputProps) => {
    return (
        <View style={[styles.container, props.containerStyle && props.containerStyle]}>

            {/* IF EXIST ICON ==> SHOW  */}
            {props.icon && props.icon}

            <TextInput
                style={[styles.input, props.inputStyle]}
                placeholderTextColor={colors.neutral400}
                ref={props.inputRef && props.inputRef}
                {...props}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: verticalScale(54),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.neutral300,
        borderRadius: radius._17,
        borderCurve: 'continuous',
        paddingHorizontal: spacingX._15,
        gap: spacingX._10
    },
    input: {
        flex: 1,
        color: colors.white,
        fontSize: verticalScale(14)
    }
})