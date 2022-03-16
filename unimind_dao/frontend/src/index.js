import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//language translation
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import LoadingScreen from "./Components/Elements/Loading";


i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['pl', 'en'],
    fallbackLng: 'pl',
    debug: false,
    // Options for language detector
    detection: {
      order: [ 'cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense: false, escapeValue: false},
    interpolation: {escapeValue: false}
  })



ReactDOM.render(
  <Suspense fallback={LoadingScreen}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

