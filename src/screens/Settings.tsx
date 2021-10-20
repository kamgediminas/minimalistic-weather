import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useTranslation } from "react-i18next";

const Settings = () => {
    const { i18n } = useTranslation();

    const lngHandler = (language:string) => {
        i18n.changeLanguage(language)
    } 

    return (
      <View>
        <TouchableOpacity onPress={() => lngHandler('lt')}>
          <Text>LT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => lngHandler('en')}>
          <Text>EN</Text>
        </TouchableOpacity>
      </View>
    )
}

export default Settings
