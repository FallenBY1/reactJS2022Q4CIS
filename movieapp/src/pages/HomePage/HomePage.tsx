import { Navigation } from '../../containers/Navigation/Navigation';
import { SortElement } from '../../components/SortElement/SortElement';
import { MovieList } from '../../containers/MovieList/MovieList';
import { MovieState } from '../../models/types';

export function HomePage(props: MovieState): JSX.Element {
  return (
    <>
      <Navigation />
      <SortElement />
      <MovieList setMovies={props.setMovies} movies={props.movies} />
    </>
  );
}
