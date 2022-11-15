import { MovieCard } from '../../components/MovieCard/MovieCard';
import { MovieListErrorBoundary } from '../../components/MovieListErrorBoundary/MovieListErrorBoundary';
import {Fragment, useState} from "react";
import {Button} from "../../components/Button/Button";
import Modal from "react-modal";
import {AddEditMovieForm} from "../AddEditMovieForm/AddEditMovieForm";
import {useTranslation} from "react-i18next";

type Movie = {
  key: string;
  title: string;
  description: string;
};

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

export function MovieList(props:{movies: Movie[], setMovies: Function}):JSX.Element {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentMovie, setCurrentMovie] = useState({ title: '', description: '', key: ''})
    const {t} = useTranslation();

    Modal.setAppElement('body');

    function openModal(key:string) {
        setCurrentMovie(props.movies.filter(movie => movie.key === key)[0]);
        setIsOpen(true);
    }

    function deleteMovie(key:string) {
        if (window.confirm('Delete?')) {
            let newArray:Movie[] = [];
            props.movies.find((el:Movie) => {
                if (el.key !== key) {
                    newArray.push(el);
                }
            });
            props.setMovies(newArray);
        }
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
    <MovieListErrorBoundary>
      <div>
        {Object.values(props.movies).map((movie) => (
          <Fragment key={movie.key}>
            <MovieCard
                title={movie.title}
                description={movie.description}
            />
              <Button
                  title={t('label_edit')}
                  type={'button'}
                  onclickAction={() => openModal(movie.key)}
              />
              <Button
                  title={t('label_delete')}
                  type={'button'}
                  onclickAction={() => deleteMovie(movie.key)}
              />
          </Fragment>
        ))}
          <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="{t('label_modal')}"
          >
              <AddEditMovieForm
                  onCloseModal={closeModal}
                  onAddMovie={props.setMovies}
                  currentValue={currentMovie}
              />
          </Modal>
      </div>
    </MovieListErrorBoundary>
  );
}
