import { Button } from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';
import { CONSTANTS } from '../../services/constants';
import { MovieFormProps } from '../../models/types';
import { ButtonTypes } from '../../models/enums';

export function AddEditMovieForm(props: MovieFormProps): JSX.Element {
  const { t } = useTranslation();

  const submitForm = (e: any): any => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const description = e.target.elements.description.value;
    const id = e.target.elements.id.value || `${title}_${description}_${Math.random().toString()}`;

    if (!e.target.elements.id.value) {
      props.onAddMovie((prev: any) => {
        return [...prev, { id, title, description }];
      });
    } else {
      props.onAddMovie((prev: any) => {
        return prev.map((el: any) => (el.id === id ? { id, title, description } : el));
      });
    }
    props.onCloseModal();
  };

  return (
    <>
      <h2>{t(CONSTANTS.ADD_FORM_TITLE)}</h2>
      <Button type={ButtonTypes.button} onClick={props.onCloseModal} title={t(CONSTANTS.LABEL_CLOSE)} />
      <form id="modalForm" onSubmit={submitForm}>
        <label htmlFor="title">
          {t(CONSTANTS.LABEL_TITLE)}:
          <input type="text" id={'title'} defaultValue={props.currentValue.title} />
        </label>
        <label htmlFor="description">
          {t(CONSTANTS.LABEL_DESCRIPTION)}:
          <input type="text" id={'description'} defaultValue={props.currentValue.description} />
        </label>
        <input type="hidden" id={'id'} defaultValue={props.currentValue.id} />
        <Button title={t(CONSTANTS.SUBMIT)} type={ButtonTypes.submit} />
      </form>
    </>
  );
}
