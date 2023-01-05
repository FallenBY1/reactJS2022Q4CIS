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
import { useSelector } from 'react-redux';
import { customStyles } from '../../components/Modal/modal';

export function MovieList(props: any): any {
  const { addNewMovies, updateNewMovies, deleteNewMovies } = useNewMovies();
  const newMovies = useSelector((state: any) => state.movies);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<IMovie>({ fullDescription: '', title: '', description: '', id: '' });
  const { t } = useTranslation();

  Modal.setAppElement('body');

  const showDetails = useCallback(
    (id: string): void => {
      props.setExpandedMovie(newMovies.movies.find((movie: MovieType) => movie.id === id));
    },
    [props, newMovies]
  );

  function openModal(id: string): void {
    setCurrentMovie(newMovies.movies.find((movie: MovieType) => movie.id === id));
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
        {newMovies.movies &&
          newMovies.movies.map((movie: any) => (
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
