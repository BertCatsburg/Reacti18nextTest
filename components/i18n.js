import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    'en-US': {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next"
        }
    },
    'fr-FR': {
        translation: {
            "Welcome to React": "Bienvenue à React et react-i18next"
        }
    }
};

i18n
    .use(Backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({

        resources,
        lng: "fr-FR",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
