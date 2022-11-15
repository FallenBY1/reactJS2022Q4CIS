import { Header } from './containers/Header/Header';
import { Footer } from './containers/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import './services/i18n';
import {useState} from "react";

type Movie = {
    [key: string]: string;
    title: string;
    description: string;
};

const moviesMock: Array<Movie> = [
    {
        key: 'm1',
        title: 'Movie 1',
        description: 'Description for Movie 1'
    },
    {
        key: 'm2',
        title: 'Movie 2',
        description: 'Description for Movie 2'
    },
    {
        key: 'm3',
        title: 'Movie 3',
        description: 'Description for Movie 3'
    },
    {
        key: 'm4',
        title: 'Movie 4',
        description: 'Description for Movie 4'
    }
];

export function App(): JSX.Element {
    const [movies, setMovies] = useState<any | null>(moviesMock);

    // useEffect(()=> {
    //     Promise.resolve(moviesMock)
    //         .then(movies => setMovies(movies))
    // })

  return (
    <>
      <Header setMovies={setMovies} />
      <HomePage setMovies={setMovies} movies={movies}  />
      <Footer />
    </>
  );
}
