import { Card } from '../../components/Card/Card';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import { Fragment, useState } from 'react';
import { Button } from '../../components/Button/Button';
import Modal from 'react-modal';
import { AddEditMovieForm } from '../AddEditMovieForm/AddEditMovieForm';
import { useTranslation } from 'react-i18next';
import { CONSTANTS } from '../../services/constants';
import { IMovie, Movie, MovieState } from '../../models/types';
import { ButtonTypes } from '../../models/enums';

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

export function MovieList(props: MovieState): JSX.Element {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<IMovie>({ fullDescription: '', title: '', description: '', id: '' });
  const { t } = useTranslation();

  Modal.setAppElement('body');

  function showDetails(key: string): void {
    props.setExpandedMovie(props.movies.filter((movie: Movie) => movie.id === key)[0]);
  }

  function openModal(key: string): void {
    setCurrentMovie(props.movies.filter((movie: Movie) => movie.id === key)[0]);
    setIsOpen(true);
  }

  function deleteMovie(key: string): void {
    if (window.confirm('Delete?')) {
      const newArray: Movie[] = [];
      props.movies.find((el: Movie) => {
        if (el.id !== key) {
          newArray.push(el);
        }
      });
      props.setMovies(newArray);
    }
  }

  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <ErrorBoundary>
      <div>
        {Object.values(props.movies).map((movie) => (
          <Fragment key={movie.id}>
            <Card title={movie.title} description={movie.description} onClick={() => showDetails(movie.id)} />
            <Button title={t(CONSTANTS.LABEL_EDIT)} type={ButtonTypes.button} onClick={() => openModal(movie.id)} />
            <Button title={t(CONSTANTS.LABEL_DELETE)} type={ButtonTypes.button} onClick={() => deleteMovie(movie.id)} />
          </Fragment>
        ))}
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel={t(CONSTANTS.LABEL_MODAL)}>
          <AddEditMovieForm onCloseModal={closeModal} onAddMovie={props.setMovies} currentValue={currentMovie} />
        </Modal>
      </div>
    </ErrorBoundary>
  );
}
