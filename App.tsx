import 'react-native-gesture-handler';
import React, {Suspense} from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store'
import './i18n'
import Navigation from './src/navigation/Navigation'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={null}>
          <Navigation />
        </Suspense>
      </PersistGate>
    </Provider>
  )
}

