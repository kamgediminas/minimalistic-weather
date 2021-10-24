import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const fetchWeather = () => {
    console.log('WEATHER_FETCH_REQUESTED');
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
    <View>
      <Text>{t('home.intro')}</Text>
      <TouchableOpacity onPress={fetchWeather}>
        <Text>feč</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
