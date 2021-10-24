import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchWeatherApi } from '../../api/weather.api';
import { CoordinatesInterface } from '../../types/types';

interface fetchWeatherInterface {
  type: string;
  payload: CoordinatesInterface;
}

function* fetchWeather(action: fetchWeatherInterface): any {
  try {
    const { payload } = action;
    const { data } = yield call(fetchWeatherApi, payload);
    yield put({ type: 'WEATHER_FETCH_SUCCEEDED', payload: data });
  } catch (e: unknown) {
    const { message } = e as Error;
    console.log(e);
    yield put({ type: 'WEATHER_FETCH_FAILED', payload: message });
  }
}

export function* weatherSagas() {
  yield takeLatest('WEATHER_FETCH_REQUESTED', fetchWeather);
}
