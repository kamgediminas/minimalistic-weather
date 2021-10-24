import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useColor } from '../../hooks/useColor';

import Title from '../../components/UI/Title';

import fonts from '../../constants/fonts';
import { ColorInterface } from '../../types/types';

interface Props {
  title: string;
  onPress: () => void;
}

const LanguageButton = ({ title, onPress }: Props) => {
  const { colors } = useColor();
  return (
    <TouchableOpacity style={styles(colors).container} onPress={onPress}>
      <Title text={title} size={fonts.sizeSmall} />
    </TouchableOpacity>
  );
};

export default LanguageButton;

const styles = (colors: ColorInterface) =>
  StyleSheet.create({
    container: {
      marginRight: 20,
      marginVertical: 10,
      borderWidth: 3,
      borderColor: colors.text,
      borderRadius: 7,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
