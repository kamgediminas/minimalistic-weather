import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import settings from './settings/settings.reducer';
import weather from './weather/weather.reducer';
import { rootSaga } from './sagas';
import createSagaMiddleware from 'redux-saga';

const initialState = {};
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['settings'],
};

const rootReducer = combineReducers({
  settings,
  weather,
});

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store: Store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

const persistor = persistStore(store);
export { store, persistor };

sagaMiddleware.run(rootSaga);
