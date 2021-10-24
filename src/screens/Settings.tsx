import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useColor } from '../hooks/useColor';

import Title from '../components/UI/Title';
import LanguageButton from '../components/UI/LanguageButton';
import ThemeButton from '../components/UI/ThemeButton';

import { ColorInterface } from '../types/types';
import fonts from '../constants/fonts';

const Settings = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { colors } = useColor();

  const lngHandler = (language: string) => {
    i18n.changeLanguage(language);
  };

  const themeHandler = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  return (
    <View style={styles(colors).container}>
      {/* Title of the screen */}
      <Title text={t('settings.title')} size={fonts.sizeLarge} />

      {/* Language section */}
      <View style={styles(colors).innerContainer}>
        <Title text={t('settings.language')} size={fonts.sizeMedium} />
        <View style={styles(colors).languageContainer}>
          <LanguageButton title="LT" onPress={() => lngHandler('lt')} />
          <LanguageButton title="EN" onPress={() => lngHandler('en')} />
        </View>
      </View>

      {/* Theme */}
      <View style={styles(colors).innerContainer}>
        <Title text={t('settings.theme')} size={fonts.sizeMedium} />
        <ThemeButton />
        {/* <TouchableOpacity onPress={() => themeHandler()}> */}
        {/* </TouchableOpacity> */}
      </View>

      {/* Unit */}
      <View style={styles(colors).innerContainer}></View>
    </View>
  );
};

const styles = (colors: ColorInterface) =>
  StyleSheet.create({
    container: {
      height: '100%',
      marginVertical: '10%',
      marginHorizontal: '10%',
      borderLeftColor: colors.text,
      borderLeftWidth: 3,
      paddingLeft: 15,
    },
    innerContainer: {
      marginTop: 20,
    },
    languageContainer: {
      flexDirection: 'row',
    },
  });

export default Settings;
