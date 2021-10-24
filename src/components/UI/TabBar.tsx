import React from 'react';
import { StyleSheet, View } from 'react-native';
import TabButton from './TabButton';

const TabBar = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <TabButton name="home" onPress={() => navigation.navigate('Home')} />
      <TabButton name="cog" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
  },
});
