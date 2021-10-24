import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

interface Props {
  name: string;
  onPress: () => void;
}

const TabButton = ({ name, onPress }: Props) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* @ts-ignore */}
      <MaterialCommunityIcons name={name} size={42} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
});
