import { Button } from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';
import { CONSTANTS } from '../../services/constants';
import { Movie, MovieFormProps } from '../../models/types';
import { ButtonTypes } from '../../models/enums';
import { FormEvent } from 'react';

export function AddEditMovieForm(props: MovieFormProps): JSX.Element {
  const { t } = useTranslation();

  const submitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const title = e.currentTarget.title;
    const description = e.currentTarget.description;
    const fullDescription = e.currentTarget.fullDescription;
    const id = e.currentTarget.id || `${title}_${description}_${Math.random().toString()}`;

    if (!e.currentTarget.id) {
      props.onAddMovie((prev: Movie[]) => {
        return [...prev, { id, title, description, fullDescription }];
      });
    } else {
      props.onAddMovie((prev: Movie[]) => {
        return prev.map((el) => (el.id === id ? { id, title, description, fullDescription } : el));
      });
    }
    props.onCloseModal();
  };

  return (
    <>
      <h2>{t(CONSTANTS.ADD_FORM_TITLE)}</h2>
      <Button type={ButtonTypes.button} onClick={props.onCloseModal} title={t(CONSTANTS.LABEL_CLOSE)} />
      <form id="modalForm" onSubmit={submitForm}>
        <label>
          {t(CONSTANTS.LABEL_TITLE)}:
          <input type="text" id={'title'} defaultValue={props.currentValue.title} />
        </label>
        <label>
          {t(CONSTANTS.LABEL_DESCRIPTION)}:
          <input type="text" id={'description'} defaultValue={props.currentValue.description} />
        </label>
        <label>
          {t(CONSTANTS.LABEL_DESCRIPTION_FULL)}:
          <input type="text" id={'fullDescription'} defaultValue={props.currentValue.fullDescription} />
        </label>
        <input type="hidden" id={'id'} defaultValue={props.currentValue.id} />
        <Button title={t(CONSTANTS.SUBMIT)} type={ButtonTypes.submit} />
      </form>
    </>
  );
}
