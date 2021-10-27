import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchWeatherApi } from '../../api/weather.api';
import * as Location from 'expo-location';

function* fetchWeather(): any {
  try {
    const { status } = yield call(Location.requestForegroundPermissionsAsync);
    if(status !== 'granted'){
      throw {message: 'error.location'}
    }
    const { coords } = yield call(Location.getCurrentPositionAsync);
    const { response, error } = yield call(fetchWeatherApi, coords);
    if(error){
      throw {message: 'error.network'}
    }
    const {data} = response
    const { current_weather } = data;
    const { temperature, weathercode } = current_weather;
    const payload = { temperature, weathercode }
    yield put({ type: 'WEATHER_FETCH_SUCCEEDED', payload });
  } catch (e: unknown) {
    const {message} = e as Error
    yield put({ type: 'WEATHER_FETCH_FAILED', payload: {message} });
  }
}

export function* weatherSagas() {
  yield takeLatest('WEATHER_FETCH_REQUESTED', fetchWeather);
}
