import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchWeatherApi } from '../../api/weather.api';
import * as Location from 'expo-location';

function* fetchWeather(): any {
  try {
    const { status } = yield call(Location.requestForegroundPermissionsAsync);
    // throw if not granted
    const { coords } = yield call(Location.getCurrentPositionAsync);
    const { data } = yield call(fetchWeatherApi, coords);

    yield put({ type: 'WEATHER_FETCH_SUCCEEDED', payload: data });
  } catch (e: unknown) {
    const { message } = e as Error;
    yield put({ type: 'WEATHER_FETCH_FAILED', payload: message });
  }
}

export function* weatherSagas() {
  yield takeLatest('WEATHER_FETCH_REQUESTED', fetchWeather);
}
