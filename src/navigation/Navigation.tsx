import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import StatusBar from '../components/UI/StatusBar';
import TabBar from '../components/UI/TabBar';
import { useColor } from '../hooks/useColor';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { colors } = useColor();

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.text,
      background: colors.background,
      card: colors.background,
      text: colors.text,
      border: colors.background,
    },
  };

  return (
    <NavigationContainer theme={Theme}>
      <StatusBar />
      <Tab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={() => ({
          header: () => false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
