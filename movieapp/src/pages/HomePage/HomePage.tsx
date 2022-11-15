import { Navigation } from '../../components/Navigation/Navigation';
import { SortElement } from '../../components/SortElement/SortElement';
import { MovieList } from '../../containers/MovieList/MovieList';

type MovieState = {
    setMovies: Function;
    movies: [];
}

export function HomePage(props:MovieState): JSX.Element {
  return (
    <>
      <Navigation key='navigation'  />
      <SortElement key='sortelement' />
      <MovieList
          setMovies={props.setMovies}
          movies={props.movies}
      />
    </>
  );
}
