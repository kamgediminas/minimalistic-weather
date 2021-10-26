import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useColor } from '../../hooks/useColor';

const Spinner = () => {
  const { colors } = useColor();

  return <ActivityIndicator size="large" color={colors.text} />;
};

export default Spinner;

const styles = StyleSheet.create({});
