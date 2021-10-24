import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useColor } from '../../hooks/useColor';

import { ColorInterface } from '../../types/types';

interface Props {
  active?: boolean;
  onPress: () => void;
  children?: any;
}

const SettingsButton = ({ onPress, children, active }: Props) => {
  const { colors } = useColor();
  return (
    <TouchableOpacity
      style={[styles(colors).container, active && styles(colors).active]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default SettingsButton;

const styles = (colors: ColorInterface) =>
  StyleSheet.create({
    container: {
      marginRight: 20,
      marginVertical: 10,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    active: {
      borderRadius: 7,
      borderWidth: 3,
      borderColor: colors.text,
    },
  });
