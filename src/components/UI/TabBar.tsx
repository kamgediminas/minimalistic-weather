import React from 'react';
import { StyleSheet, View } from 'react-native';
import TabButton from './TabButton';
import { useColor } from '../../hooks/useColor';

const TabBar = ({ navigation }: any) => {
  const { colors } = useColor();

  return (
    <View style={styles(colors).container}>
      <TabButton name="home" onPress={() => navigation.navigate('Home')} />
      <TabButton name="cog" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

export default TabBar;

const styles = (colors: any) =>
  StyleSheet.create({
    container: {
      height: 80,
      flexDirection: 'row',
      backgroundColor: colors.background,
    },
  });
