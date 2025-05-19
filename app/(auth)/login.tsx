import BackButton from '@/components/BackButton'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Login = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton />
      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._20,
    paddingHorizontal: spacingX._20
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "500",
    color: colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: colors.text,
    fontSize: verticalScale(15),
  },
})