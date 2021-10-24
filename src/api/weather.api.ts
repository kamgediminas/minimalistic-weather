import axios from 'axios';
import { CoordinatesInterface } from '../types/types';

export const fetchWeatherApi = (coordinates: CoordinatesInterface) => {
  const { lat, long } = coordinates;
  const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current_weather=true`;
  return axios.get(endpoint);
};
