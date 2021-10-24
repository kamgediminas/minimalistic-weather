import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useColor } from '../../hooks/useColor';

const StatusBarComponent = () => {
  const { colors, darkStatusIcons } = useColor();

  return (
    <View
      style={{
        height: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
        backgroundColor: colors.background,
      }}
    >
      <StatusBar
        barStyle={darkStatusIcons ? 'dark-content' : 'light-content'}
        backgroundColor={colors.background}
      />
    </View>
  );
};

export default StatusBarComponent;
