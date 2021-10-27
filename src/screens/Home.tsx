import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useColor } from '../hooks/useColor';
import displayTemperature from '../utils/displayTemperature';
import weatherCodeIcon from '../utils/weatherCode';

import Title from '../components/UI/Title';
import Spinner from '../components/UI/Spinner';

import fonts from '../constants/fonts';

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { colors } = useColor();
  const weather = useSelector(({ weather }: any) => weather);
  const { isLoading, error, data } = weather;
  const { temperature, weathercode } = data;
  const unit = useSelector(({ settings }: any) => settings.unit);

  const fetchWeather = () => {
    dispatch({ type: 'WEATHER_FETCH_REQUESTED' });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (isLoading) {
    return (
      <View style={styles().container}>
        <Spinner />
      </View>
    );
  }

  return (
    <View style={styles().container}>
      <TouchableOpacity style={styles().container} onPress={fetchWeather}>
        {error ? (
          <Title text={t(error)} size={fonts.sizeSmall} />
        ) : (
          <>
            <MaterialCommunityIcons
              name={weatherCodeIcon({ weathercode })}
              size={64}
              color={colors.text}
            />
            <Title
              text={`${displayTemperature({ temperature, unit })}\xB0${unit.toUpperCase()}`}
              size={fonts.sizeLarge}
            />
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },
  });

export default Home;
