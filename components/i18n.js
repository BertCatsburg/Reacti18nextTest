import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from 'i18next-http-backend';


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(Backend)
    .init({

        lng: 'fr-FR',
        fallbackLng: 'en-US',
        supportedLngs: ['fr-FR', 'en-US', 'nl-NL'],
        backend: {
            loadPath: 'http://localhost:3014/getlanguage?lang={{lng}}',
            allowMultiLoading: false,
            requestOptions: {
                mode: 'cors',
                credentials: 'same-origin',
                cache: 'default'
            }
        },
        load: 'currentOnly',
        react: {
            useSuspense: false,
            wait: true
        },

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    }).then(()=>{});

export default i18n;
