import {Button} from "../../components/Button/Button";
import {useTranslation} from "react-i18next";

type MovieProps = {
    title: string | '';
    description: string | '';
    key: string | '';
}

type MovieFormProps = {
    onCloseModal: Function;
    onAddMovie: Function;
    currentValue:MovieProps;
}

export function AddEditMovieForm(props:MovieFormProps): JSX.Element {
    const {t} = useTranslation();
    const currentValueToEdit = props.currentValue;

    const submitForm = (e:any) => {
        const title = e.target.elements.movieTitle.value;
        const description = e.target.elements.movieDescription.value;
        let key = e.target.elements.movieKey.value;

        if (!key) {
            key = `${title}_${description}_${Math.random().toString()}`;
            props.onAddMovie((prev: any) => {
                return [...prev, {key, title, description}];
            });
        } else {
            props.onAddMovie((prev: any) => {
                return prev.map((el:any) => el.key === key ? {key, title, description} : el);
            });
        }
        props.onCloseModal();
    }

    const closeModal = () => {
        props.onCloseModal();
    }

    return (
        <>
            <h2>{t('add_form_title')}</h2>
            <Button
                type={'button'}
                onclickAction={closeModal}
                title={t('label_close')}
            />
            <form id='modalForm' onSubmit={submitForm}>
                <label htmlFor="movieTitle">
                    {t('label_title')}:
                    <input
                        type="text"
                        id={'movieTitle'}
                        defaultValue={currentValueToEdit.title}
                    />
                </label>
                <label htmlFor="movieDescription">
                    {t('label_description')}:
                    <input
                        type="text"
                        id={'movieDescription'}
                        defaultValue={currentValueToEdit.description}
                    />
                </label>
                <input
                    type="hidden"
                    id={'movieKey'}
                    defaultValue={currentValueToEdit.key}
                />
                <Button
                    title={t('submit')}
                    type={'submit'}
                />
            </form>
        </>
    );
}
