import { SearchForm } from '../SearchForm/SearchForm';
import Modal from 'react-modal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AddEditMovieForm } from '../AddEditMovieForm/AddEditMovieForm';
import { Button } from '../../components/Button/Button';
import { Localization } from '../../services/constants';
import { HeaderProps } from './HeaderTypes';
import { ButtonTypes } from '../../models/enums';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import useNewMovies from '../../hooks/MovieContext';
import { customStyles } from '../../components/Modal/modal';

Modal.setAppElement('body');

export function Header(props: HeaderProps): JSX.Element {
  const { addNewMovies, updateNewMovies } = useNewMovies();
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
        <b>{t(Localization.NETFLIX)}</b>
        {t(Localization.ROULETTE)}
      </h1>
      <Button type={ButtonTypes.button} onClick={openModal} title={t(Localization.ADD_MOVIE)} />
      {!props.expandedMovie && <SearchForm />}
      {props.expandedMovie ? <MovieDetails expandedMovie={props.expandedMovie} setExpandedMovie={props.setExpandedMovie} /> : ''}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel={t(Localization.LABEL_MODAL)}>
        <AddEditMovieForm onCloseModal={closeModal} onAddMovie={addNewMovies} onUpdateMovie={updateNewMovies} currentValue={{ title: '', description: '', id: '' }} />
      </Modal>
    </>
  );
}
