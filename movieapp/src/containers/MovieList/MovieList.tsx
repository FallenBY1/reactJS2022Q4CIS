import { Card } from '../../components/Card/Card';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { Fragment, useCallback, useState } from 'react';
import { Button } from '../../components/Button/Button';
import Modal from 'react-modal';
import { AddEditMovieForm } from '../AddEditMovieForm/AddEditMovieForm';
import { useTranslation } from 'react-i18next';
import { Localization } from '../../services/constants';
import { IMovie, MovieType } from '../../models/Movie';
import { ButtonTypes } from '../../models/enums';
import useNewMovies from '../../hooks/MovieContext';

//move to component avoid duplicate
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

export function MovieList(props: any): any {
  const { newMovies, addNewMovies, updateNewMovies, deleteNewMovies } = useNewMovies();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<IMovie>({ fullDescription: '', title: '', description: '', id: '' });
  const { t } = useTranslation();

  Modal.setAppElement('body');

  const showDetails = useCallback(
    (id: string): void => {
      props.setExpandedMovie(newMovies.find((movie: MovieType) => movie.id === id));
    },
    [props, newMovies]
  );

  function openModal(id: string): void {
    setCurrentMovie(newMovies.filter((movie: MovieType) => movie.id === id)[0]);
    setIsOpen(true);
  }

  function deleteMovie(id: string): void {
    if (window.confirm('Delete?')) {
      deleteNewMovies(id);
    }
  }

  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <ErrorBoundary>
      <div>
        {Object.values(newMovies).map((movie: any) => (
          <Fragment key={movie.id}>
            <Card title={movie.title} description={movie.description} onClick={() => showDetails(movie.id)} />
            <Button title={t(Localization.LABEL_EDIT)} type={ButtonTypes.button} onClick={() => openModal(movie.id)} />
            <Button title={t(Localization.LABEL_DELETE)} type={ButtonTypes.button} onClick={() => deleteMovie(movie.id)} />
          </Fragment>
        ))}
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel={t(Localization.LABEL_MODAL)}>
          <AddEditMovieForm onCloseModal={closeModal} onAddMovie={addNewMovies} onUpdateMovie={updateNewMovies} currentValue={currentMovie} />
        </Modal>
      </div>
    </ErrorBoundary>
  );
}
