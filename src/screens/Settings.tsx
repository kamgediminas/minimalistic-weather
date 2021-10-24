import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useColor } from '../hooks/useColor';

import Title from '../components/UI/Title'

import { ColorInterface } from '../types/types'

const Settings = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const theme = useSelector(({ settings }: any) => settings.theme);
  const {colors} = useColor()

  const lngHandler = (language: string) => {
    i18n.changeLanguage(language);
  };

  const themeHandler = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  return (
    <View style={styles(colors).container}>
      {/* Title of the screen */}
      <Title text={t('settings.title')} size={'large'} />
      {/* Language section */}
      <Title text={t('settings.language')}  />

      <TouchableOpacity onPress={() => lngHandler('lt')}>
        <Text>LT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => lngHandler('en')}>
        <Text>EN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => themeHandler()}>
        <Text>Theme</Text>
      </TouchableOpacity>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={themeHandler}
        value={theme === 'dark'}
      />
    </View>
  );
};

const styles = (colors:ColorInterface) => StyleSheet.create({
  container: {
    height: '100%',
    marginVertical: '10%',
    marginHorizontal: '10%',
    borderLeftColor: colors.text,
    borderLeftWidth: 3,
    paddingLeft: 15
  }
})

export default Settings;
