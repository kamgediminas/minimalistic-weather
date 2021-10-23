import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, View } from 'react-native';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import { useSelector } from 'react-redux';
import c from '../constants/colors';
import StatusBar from '../components/UI/StatusBar';

const Drawer = createDrawerNavigator();

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
	const theme = useSelector(({ settings }: any) => settings.theme);

	return (
		<NavigationContainer theme={theme === 'dark' ? DarkTheme : LightTheme}>
			<StatusBar />
			<Drawer.Navigator
				screenOptions={{
					header: () => false,
				}}
			>
				<Drawer.Screen name='Home' component={HomeScreen} />
				<Drawer.Screen name='Settings' component={SettingsScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;