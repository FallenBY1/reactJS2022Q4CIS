import { SearchForm } from '../SearchForm/SearchForm';
import Modal from 'react-modal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AddEditMovieForm } from '../AddEditMovieForm/AddEditMovieForm';
import { Button } from '../../components/Button/Button';
import { CONSTANTS } from '../../services/constants';
import { HeaderProps } from '../../models/types';
import { ButtonTypes } from '../../models/enums';
import { MovieDetails } from '../MovieDetails/MovieDetails';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('body');

export function Header(props: HeaderProps): JSX.Element {
  const { t } = useTranslation();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(): void {
    setIsOpen(true);
  }

  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <h1>
        <b>{t(CONSTANTS.NETFLIX)}</b>
        {t(CONSTANTS.ROULETTE)}
      </h1>
      <Button type={ButtonTypes.button} onClick={openModal} title={t(CONSTANTS.ADD_MOVIE)} />
      {!props.expandedMovie ? <SearchForm /> : ''}
      {props.expandedMovie ? <MovieDetails expandedMovie={props.expandedMovie} setExpandedMovie={props.setExpandedMovie} /> : ''}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel={t(CONSTANTS.LABEL_MODAL)}>
        <AddEditMovieForm onCloseModal={closeModal} onAddMovie={props.setMovies} currentValue={{ title: '', description: '', id: '' }} />
      </Modal>
    </>
  );
}
