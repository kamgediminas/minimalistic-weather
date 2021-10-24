import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/translations/en.json';
import lt from './public/translations/lt.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'intl-pluralrules';

const STORE_LANGUAGE_KEY = 'settings.lang';

const resources = {
  en: {
    translation: en,
  },
  lt: {
    translation: lt,
  },
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async function (callback: (arg0: string) => any) {
    try {
      //get stored language from Async storage
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then((language) => {
        if (language) {
          //if language was stored before, use this language in the app
          return callback(language);
        } else {
          //if language was not stored yet, use device's locale
          // return callback(Localization.locale);
          return callback('en');
        }
      });
    } catch (error) {
      console.log('Error reading language', error);
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      //save a user's language choice in Async storage
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {}
  },
};

i18n
  .use(initReactI18next)
  //@ts-ignore
  .use(languageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
