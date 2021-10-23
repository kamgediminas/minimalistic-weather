import {all} from 'redux-saga/effects';
import {weatherSagas} from './weather/weather.sagas';

export function* rootSaga() {
	yield all([
		weatherSagas()
	]);
}