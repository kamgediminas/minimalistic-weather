import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../components/UI/Title';

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const weather = useSelector(({ weather }: any) => weather);
  const unit = useSelector(({ settings }: any) => settings.unit);

  const {data} = weather
  const {current_weather} = data
  const {temperature, weathercode} = current_weather

  const displayTemperature = () => {
    if(unit === 'f'){
      return Math.round((temperature * 1.8) + 32)
    }
    return Math.round(temperature)
  }
  const fetchWeather = () => {
    console.log(weather)
    dispatch({ type: 'WEATHER_FETCH_REQUESTED', payload: { lat: 54.7, long: 25.3 } });
  };

  const MINUTE_MS = 60000;

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(() => {
      fetchWeather();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles().container}>
      <Text>{t('home.intro')}</Text>
      <TouchableOpacity onPress={fetchWeather}>
        <Title text={`${displayTemperature()}\xB0${unit.toUpperCase()}`} size={48}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = () => StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
})

export default Home;
