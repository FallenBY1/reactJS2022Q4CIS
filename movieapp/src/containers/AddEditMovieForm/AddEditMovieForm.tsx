import { Button } from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';
import { Localization } from '../../services/constants';
import { MovieFormProps } from './AddEditMovieFormTypes';
import { Movie } from '../../models/Movie';
import { ButtonTypes } from '../../models/enums';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

interface FormValues extends MovieFormProps {
  id?: string;
  title: string;
  description: string;
  fullDescription: string;
}

const submitForm = (values: FormValues): void => {
  const newTitle = values.title;
  const newDescription = values.description;
  const newFullDescription = values.fullDescription;
  const newId = values.id || `${newTitle}_${newDescription}_${Math.random().toString()}`;

  const { id, title, description, fullDescription } = new Movie({
    id: newId,
    title: newTitle,
    description: newDescription,
    fullDescription: newFullDescription
  });

  if (!values.id) {
    values.onAddMovie({
      id,
      title,
      description,
      fullDescription
    });
  } else {
    values.onUpdateMovie({ id, title, description, fullDescription });
  }
  values.onCloseModal();
};

function AddEditMovieForm(props: MovieFormProps & FormikProps<FormValues>): JSX.Element {
  const { touched, errors, isSubmitting } = props;
  const { t } = useTranslation();

  return (
    <>
      <h2>{t(Localization.ADD_FORM_TITLE)}</h2>
      <Button type={ButtonTypes.button} onClick={props.onCloseModal} title={t(Localization.LABEL_CLOSE)} />
      <Form>
        <label>
          {t(Localization.LABEL_TITLE)}:
          <Field type="text" id={'title'} name={'title'} />
          {touched.title && errors.title && <div>{errors.title}</div>}
        </label>
        <label>
          {t(Localization.LABEL_DESCRIPTION)}:
          <Field type="text" id={'description'} name={'description'} />
          {touched.description && errors.description && <div>{errors.description}</div>}
        </label>
        <label>
          {t(Localization.LABEL_DESCRIPTION_FULL)}:
          <Field type="text" id={'fullDescription'} name={'fullDescription'} />
          {touched.fullDescription && errors.fullDescription && <div>{errors.fullDescription}</div>}
        </label>
        <input type="hidden" id={'id'} />
        <Button title={t(Localization.SUBMIT)} type={ButtonTypes.submit} disabled={isSubmitting} />
      </Form>
    </>
  );
}

// The type of props MyForm receives
interface WrapperFormProps extends MovieFormProps {
  initialTitle?: string;
  initialDescription?: string;
  initialFullDescription?: string;
}

const WrapperForm = withFormik<WrapperFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      ...props,
      title: props.currentValue.title || '',
      description: props.currentValue.description || '',
      fullDescription: props.currentValue.fullDescription || ''
    };
  },

  validate: (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    return errors;
  },

  handleSubmit: (values) => {
    submitForm(values);
  }
})(AddEditMovieForm);

export { WrapperForm };
