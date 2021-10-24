import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useColor } from '../hooks/useColor';

import Title from '../components/UI/Title';
import SettingsButton from '../components/UI/SettingsButton';

import { ColorInterface } from '../types/types';
import fonts from '../constants/fonts';

const Settings = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { colors } = useColor();
  const settings = useSelector(({ settings }: any) => settings);

  const themeHandler = (theme: string) => {
    dispatch({ type: 'CHANGE_THEME', payload: { theme } });
  };

  const lngHandler = (language: string) => {
    i18n.changeLanguage(language);
    dispatch({ type: 'CHANGE_LANGUAGE', payload: { language } });
  };

  const unitHandler = (unit: string) => {
    dispatch({ type: 'CHANGE_UNIT', payload: { unit } });
  };

  return (
    <View style={styles(colors).container}>
      {/* Title of the screen */}
      <Title text={t('settings.title')} size={fonts.sizeLarge} />

      {/* Language section */}
      <View style={styles(colors).innerContainer}>
        <Title text={t('settings.language')} size={fonts.sizeMedium} />
        <View style={styles(colors).buttonContainer}>
          <SettingsButton active={settings.language === 'en'} onPress={() => lngHandler('en')}>
            <Title text={'EN'} size={fonts.sizeSmall} />
          </SettingsButton>
          <SettingsButton active={settings.language === 'lt'} onPress={() => lngHandler('lt')}>
            <Title text={'LT'} size={fonts.sizeSmall} />
          </SettingsButton>
        </View>
      </View>

      {/* Theme */}
      <View style={styles(colors).innerContainer}>
        <Title text={t('settings.theme')} size={fonts.sizeMedium} />
        <View style={styles(colors).buttonContainer}>
          <SettingsButton active={settings.theme === 'light'} onPress={() => themeHandler('light')}>
            <MaterialCommunityIcons name="weather-sunny" size={32} color={colors.text} />
          </SettingsButton>
          <SettingsButton active={settings.theme === 'dark'} onPress={() => themeHandler('dark')}>
            <MaterialCommunityIcons name="weather-night" size={32} color={colors.text} />
          </SettingsButton>
        </View>
      </View>

      {/* Unit */}
      <View style={styles(colors).innerContainer}>
        <Title text={t('settings.unit')} size={fonts.sizeMedium} />
        <View style={styles(colors).buttonContainer}>
          <SettingsButton active={settings.unit === 'c'} onPress={() => unitHandler('c')}>
            <Title text={'C'} size={fonts.sizeSmall} />
          </SettingsButton>
          <SettingsButton active={settings.unit === 'f'} onPress={() => unitHandler('f')}>
            <Title text={'F'} size={fonts.sizeSmall} />
          </SettingsButton>
        </View>
      </View>
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
    buttonContainer: {
      flexDirection: 'row',
    },
  });

export default Settings;
