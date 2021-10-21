import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';

const Settings = () => {
  const { i18n } = useTranslation()
  const dispatch = useDispatch()

  const lngHandler = (language: string) => {
    i18n.changeLanguage(language)
  }

  const modeHandler = () => {
    dispatch({ type: 'CHANGE_MODE' })
  }

  return (
    <View>
      <TouchableOpacity onPress={() => lngHandler('lt')}>
        <Text>LT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => lngHandler('en')}>
        <Text>EN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => modeHandler()}>
        <Text>Mode</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings
