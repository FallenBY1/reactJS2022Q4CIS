import { Button } from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';
import { Localization } from '../../services/constants';
import { MovieFormProps } from './AddEditMovieFormTypes';
import { Movie } from '../../models/Movie';
import { ButtonTypes } from '../../models/enums';
import { FormEvent } from 'react';

export function AddEditMovieForm(props: MovieFormProps): JSX.Element {
  const { t } = useTranslation();

  const submitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      id: { value: string };
      title: { value: string };
      description: { value: string };
      fullDescription: { value: string };
    };
    const newTitle = target.title.value;
    const newDescription = target.description.value;
    const newFullDescription = target.fullDescription.value;
    const newId = target.id.value || `${newTitle}_${newDescription}_${Math.random().toString()}`;

    const { id, title, description, fullDescription } = new Movie({
      id: newId,
      title: newTitle,
      description: newDescription,
      fullDescription: newFullDescription
    });

    if (!target.id.value) {
      props.onAddMovie({
        id,
        title,
        description,
        fullDescription
      });
    } else {
      props.onUpdateMovie({ id, title, description, fullDescription });
    }
    props.onCloseModal();
  };

  return (
    <>
      <h2>{t(Localization.ADD_FORM_TITLE)}</h2>
      <Button type={ButtonTypes.button} onClick={props.onCloseModal} title={t(Localization.LABEL_CLOSE)} />
      <form id="modalForm" onSubmit={submitForm}>
        <label>
          {t(Localization.LABEL_TITLE)}:
          <input type="text" id={'title'} defaultValue={props.currentValue.title} />
        </label>
        <label>
          {t(Localization.LABEL_DESCRIPTION)}:
          <input type="text" id={'description'} defaultValue={props.currentValue.description} />
        </label>
        <label>
          {t(Localization.LABEL_DESCRIPTION_FULL)}:
          <input type="text" id={'fullDescription'} defaultValue={props.currentValue.fullDescription} />
        </label>
        <input type="hidden" id={'id'} defaultValue={props.currentValue.id} />
        <Button title={t(Localization.SUBMIT)} type={ButtonTypes.submit} />
      </form>
    </>
  );
}
