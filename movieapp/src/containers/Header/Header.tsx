import {SearchForm} from '../SearchForm/SearchForm';
import Modal from 'react-modal';
import {useState} from "react";
import {useTranslation} from "react-i18next";
import {AddEditMovieForm} from "../AddEditMovieForm/AddEditMovieForm";
import {Button} from "../../components/Button/Button";

type HeaderProps = {
    setMovies: React.MouseEventHandler<HTMLButtonElement>;
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export function Header(props:HeaderProps): JSX.Element {
    const {t} = useTranslation();
    const [modalIsOpen, setIsOpen] = useState(false);
    const initialMovie = {title:'', description: '', key: ''};

    Modal.setAppElement('body');
    function openModal() {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <h1>
                <b>{t('netflix')}</b>{t('roulette')}
            </h1>
            <Button
                type={'button'}
                onclickAction={openModal}
                title={t('add_movie')}
            />
            <SearchForm/>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="{t('label_modal')}"
            >
                <AddEditMovieForm
                    onCloseModal={closeModal}
                    onAddMovie={props.setMovies}
                    currentValue={initialMovie}
                />
            </Modal>
        </>
    );
}
