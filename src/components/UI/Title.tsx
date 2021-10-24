import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useColor } from '../../hooks/useColor';
import fonts from '../../constants/fonts';
import { ColorInterface, FontInterface } from '../../types/types';

interface Props {
  text: string;
  size: number;
}

const Title = ({ text, size }: Props) => {
  const { colors } = useColor();

  return (
    // <View>
    <Text style={styles(colors, fonts, size).text}>{text}</Text>
    // </View>
  );
};

export default Title;

const styles = (colors: ColorInterface, fonts: FontInterface, size: number) =>
  StyleSheet.create({
    text: {
      fontFamily: fonts.regular500,
      fontSize: size,
      color: colors.text,
    },
  });
