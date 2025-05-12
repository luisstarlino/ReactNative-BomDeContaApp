/*****************************************************************************************
* @Author: Luis Starlino
* @Date: 2025-05-01 07:24
*****************************************************************************************/
import { colors } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const index = () => {

    //------------------------------------------------
    // CONST'S
    //------------------------------------------------
    const router = useRouter();

    //------------------------------------------------
    // USE EFFECT'S
    //------------------------------------------------
    useEffect(() => {
        setTimeout(() => {
            router.push('/(auth)/welcome');
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>

            {/* SPASH IMAGE */}
            <Image
                style={styles.logo}
                resizeMode='contain'
                source={require('../assets/images/splash.png')}
            />


        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.neutral900
    },
    logo: {
        height: '20%',
        aspectRatio: 1
    }
})