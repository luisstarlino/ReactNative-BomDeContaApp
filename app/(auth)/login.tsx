import BackButton from '@/components/BackButton'
import Button from '@/components/Button'
import Input from '@/components/Input'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import * as Icons from 'phosphor-react-native'
import React, { useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'

const Login = () => {

  //------------------------------------------------
  // CONST'S
  //------------------------------------------------
  var mailRef = useRef("");
  var passRef = useRef("");

  //------------------------------------------------
  // USEEFFECTS'S
  //------------------------------------------------
  const [isLoading, setIsLoading] = useState(false);

  //------------------------------------------------
  // FUNCIONS
  //------------------------------------------------
  const onSubmit = async () => {

  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={30} />

        {/* GREETINS */}
        <View style={{ gap: 5, marginTop: spacingY._20 }}>
          <Typo size={30} fontWeight={"600"}>Olá,</Typo>
          <Typo size={30} fontWeight={"600"}>Bem vindo de volta</Typo>
        </View>

        {/* FORM */}
        <View style={styles.form}>
          <Typo size={16} color={colors.textLighter}>Entre agora para aproveitar a melhor experiência</Typo>

          {/* EMAIL */}
          <Input
            placeholder='E-mail'
            icon={<Icons.At size={verticalScale(26)} color={colors.neutral300} weight='fill' />}
            onChangeText={v => mailRef.current = v}
          />

          {/* PASSWORD */}
          <Input
            placeholder='Senha'
            secureTextEntry
            icon={<Icons.Lock size={verticalScale(26)} color={colors.neutral300} weight='fill' />}
            onChangeText={v => passRef.current = v}
          />

          {/* BTN */}
          <Typo size={14} color={colors.text} style={{alignSelf: 'flex-end'}}>
            Esqueceu sua senha?
          </Typo>

          <Button loading={isLoading} onPress={onSubmit}>
            <Typo fontWeight={"700"} color={colors.black} size={21}>Login</Typo>
          </Button>
        </View>


        {/* FOOTER */}
        <View style={styles.footer}>

        </View>


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