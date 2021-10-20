import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import settings from './settings/reducer'

const initialState = {}
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['settings'],
}

const rootReducer = combineReducers({
  settings: settings,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware())
)

const persistor = persistStore(store)
export { store, persistor }
