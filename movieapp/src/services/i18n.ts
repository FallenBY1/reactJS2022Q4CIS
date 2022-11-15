import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            footer: "Footer",
            netflix: 'Netflix',
            roulette: 'roulette',
            add_movie: 'Add movie',
            search: 'Search'
        },
    },
    de: {
        translation: {
            footer: "Footer DE",
            netflix: 'Netflix DE',
            roulette: 'roulette DE',
            add_movie: 'Add movie DE',
            search: 'Search DE'
        },
    },
};
i18next
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false,
        },
    });
export default i18next;
