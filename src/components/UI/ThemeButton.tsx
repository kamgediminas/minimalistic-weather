import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColor } from '../../hooks/useColor';

const ThemeButton = () => {
  const theme = useSelector(({ settings }: any) => settings.theme);
  const { colors } = useColor();

  const dispatch = useDispatch();

  const themeHandler = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  return (
    <TouchableOpacity onPress={themeHandler}>
      {theme === 'dark' ? (
        <MaterialCommunityIcons name="weather-night" size={42} color={colors.text} />
      ) : (
        <MaterialCommunityIcons name="weather-sunny" size={42} color={colors.text} />
      )}
    </TouchableOpacity>
  );
};

export default ThemeButton;
