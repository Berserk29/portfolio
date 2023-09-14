import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import jsonEn from './en.json'
import jsonFr from './fr.json'

export const lngArr = ['en', 'fr'];

// If localStorage language is not part of the supported language return english.
export const initialLng = () => {
    const supportedLanguage = ['en', 'fr'];
    const localLng = localStorage.getItem('lng');
    if(!localLng) return 'en'
    if(supportedLanguage.some(el => localLng.includes(el))) return localLng;
    else return 'en'
}

i18next.use(initReactI18next).init({
    lng: initialLng(),
    resources: {
        en: {
            translation: jsonEn 
        },
        fr: {
            translation: jsonFr
        }
    },

});


export default i18next;