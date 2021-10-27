import axios from 'axios';
import { CoordinatesInterface } from '../types/types';

export const fetchWeatherApi = (coords: CoordinatesInterface) => {
  const { latitude, longitude } = coords;
  const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`;
  return axios.get(endpoint).then(response => ({ response }))
  .catch(error => ({ error }));
};
