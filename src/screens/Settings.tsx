import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const Settings = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const theme = useSelector(({ settings }: any) => settings.theme);

  const lngHandler = (language: string) => {
    i18n.changeLanguage(language);
  };

  const themeHandler = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  return (
    <View>
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

export default Settings;
