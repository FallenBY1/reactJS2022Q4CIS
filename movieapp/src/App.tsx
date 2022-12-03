import { Header } from './containers/Header/Header';
import { Footer } from './containers/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import './services/i18n';
import { useState, useEffect } from 'react';
import { Movie } from './models/types';

const moviesMock: Array<Movie> = [
  {
    id: 'm1',
    title: 'Movie 1',
    description: 'Description for Movie 1',
    fullDescription: 'Full description for Movie 1'
  },
  {
    id: 'm2',
    title: 'Movie 2',
    description: 'Description for Movie 2',
    fullDescription: 'Full description for Movie 2'
  },
  {
    id: 'm3',
    title: 'Movie 3',
    description: 'Description for Movie 3',
    fullDescription: 'Full description for Movie 3'
  },
  {
    id: 'm4',
    title: 'Movie 4',
    description: 'Description for Movie 4',
    fullDescription: 'Full description for Movie 4'
  }
];

export function App(): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [expandedMovie, setExpandedMovie] = useState<Movie>();

  useEffect(() => {
    Promise.resolve(moviesMock).then((movies) => setMovies(movies));
  }, []);

  return (
    <>
      <Header setMovies={setMovies} expandedMovie={expandedMovie} setExpandedMovie={setExpandedMovie} />
      <HomePage setMovies={setMovies} movies={movies} setExpandedMovie={setExpandedMovie} />
      <Footer />
    </>
  );
}
