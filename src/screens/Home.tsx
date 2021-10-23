import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

const Home = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const fetchWeather = () => {
		dispatch({type: 'WEATHER_FETCH_REQUESTED', payload: {lat: 54.70, long: 25.30}});
	};

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
