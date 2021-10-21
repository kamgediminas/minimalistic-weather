import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useTheme } from '@react-navigation/native';

const StatusBarComponent = () => {
	const { colors, dark } = useTheme();

	return (
		<View
			style={{
				height: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
				backgroundColor: colors.background,
			}}
		>
			<StatusBar barStyle={dark ? 'light-content' : 'dark-content'} backgroundColor={colors.background} />
		</View>
	);
};

export default StatusBarComponent;
