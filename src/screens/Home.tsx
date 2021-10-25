import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../components/UI/Title';
import fonts from '../constants/fonts';
import { useColor } from '../hooks/useColor';
import weatherCodeIcon from '../util/weatherCode';
import displayTemperature from '../util/displayTemperature';
const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { colors } = useColor();
  const weather = useSelector(({ weather }: any) => weather);
  const unit = useSelector(({ settings }: any) => settings.unit);

  const fetchWeather = () => {
    console.log(weather);
    dispatch({ type: 'WEATHER_FETCH_REQUESTED', payload: { lat: 54.7, long: 25.3 } });
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(() => {
      fetchWeather();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (weather.isLoading) {
    return <></>;
  }

  const { data } = weather;
  const { current_weather } = data;
  const { temperature, weathercode } = current_weather;

  return (
    <View style={styles().container}>
      <MaterialCommunityIcons
        name={weatherCodeIcon({ weathercode })}
        size={64}
        color={colors.text}
      />
      <Title
        text={`${displayTemperature({ temperature, unit })}\xB0${unit.toUpperCase()}`}
        size={fonts.sizeLarge}
      />
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
  });

export default Home;
