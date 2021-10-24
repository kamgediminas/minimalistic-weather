import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColor } from '../../hooks/useColor';

interface Props {
  name: string;
  onPress: () => void;
}

const TabButton = ({ name, onPress }: Props) => {
  const { colors } = useColor();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* @ts-ignore */}
      <MaterialCommunityIcons name={name} size={42} color={colors.text} />
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
