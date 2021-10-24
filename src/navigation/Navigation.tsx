import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import { useSelector } from 'react-redux';
import c from '../constants/colors';
import StatusBar from '../components/UI/StatusBar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
  dark: false,
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
  dark: true,
};

const Navigation = () => {
  const theme = useSelector(({ settings }: any) => settings.theme);

  const currentTheme = theme === 'dark' ? DarkTheme : LightTheme;

  return (
    <NavigationContainer theme={currentTheme}>
      <StatusBar />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Hides the top header
          header: () => false,
          // Hides screen labels in navigation
          tabBarShowLabel: false,
          // Custom icons for each route
          tabBarIcon: () => {
            if (route.name === 'Home') {
              return (
                <MaterialCommunityIcons name="home" size={42} color={currentTheme.colors.primary} />
              );
            }
            if (route.name === 'Settings') {
              return (
                <MaterialCommunityIcons name="cog" size={42} color={currentTheme.colors.primary} />
              );
            }
          },
          // Whole bar style to remove top border
          tabBarStyle: { borderTopWidth: 0, elevation: 0, height: 80 },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
