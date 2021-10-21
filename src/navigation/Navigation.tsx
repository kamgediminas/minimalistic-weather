import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import { useSelector } from 'react-redux';
import c from '../constants/colors';
import StatusBar from '../components/UI/StatusBar';

const Tab = createBottomTabNavigator();

const LightTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: c.black,
		background: c.white,
		card: c.white,
		text: c.black,
		border: c.white,
		// notification: 'rgb(255, 69, 58)',
	},
	dark: false
};

const DarkTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: c.white,
		background: c.black,
		card: c.black,
		text: c.white,
		border: c.black,
		// notification: 'rgb(255, 69, 58)',
	},
	dark: true
};

const Navigation = () => {
	const mode = useSelector(({ settings }: any) => settings.mode);

	return (
		<NavigationContainer theme={mode === 'dark' ? DarkTheme : LightTheme}>
			<StatusBar />
			<Tab.Navigator
				screenOptions={{
					header: () => false,
				}}
			>
				<Tab.Screen name='Home' component={HomeScreen} />
				<Tab.Screen name='Settings' component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;