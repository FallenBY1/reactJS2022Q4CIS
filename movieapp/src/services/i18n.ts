import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      footer: 'Footer',
      netflix: 'Netflix',
      roulette: 'roulette',
      add_movie: 'Add movie',
      search: 'Search',
      add_form_title: 'Add/Edit Movie',
      label_title: 'Title',
      label_description: 'Description',
      label_description_full: 'Full Description',
      label_modal: 'Movie Modal',
      label_close: 'Close',
      label_edit: 'Edit',
      label_delete: 'Delete',
      submit: 'Submit',
      popularity: 'Popularity',
      release_date: 'Release Date',
      rating: 'Rating'
    }
  },
  de: {
    translation: {
      footer: 'Footer DE',
      netflix: 'Netflix DE',
      roulette: 'roulette DE',
      add_movie: 'Add movie DE',
      search: 'Search DE',
      add_form_title: 'Add/Edit Movie DE',
      label_title: 'Title DE',
      label_description: 'Description DE',
      label_description_full: 'Full Description DE',
      label_modal: 'Movie Modal DE',
      label_close: 'Close DE',
      label_edit: 'Edit DE',
      label_delete: 'Delete DE',
      submit: 'Submit DE',
      popularity: 'Popularity DE',
      release_date: 'Release Date DE',
      rating: 'Rating DE'
    }
  }
};
i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
});
export default i18next;
