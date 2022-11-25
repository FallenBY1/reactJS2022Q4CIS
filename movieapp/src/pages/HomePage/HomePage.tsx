import { Navigation } from '../../containers/Navigation/Navigation';
import { SortElement } from '../../containers/SortElement/SortElement';
import { MovieList } from '../../containers/MovieList/MovieList';
import { MovieState } from '../../models/types';

export function HomePage(props: MovieState): JSX.Element {
  return (
    <>
      <Navigation />
      <SortElement />
      <MovieList setMovies={props.setMovies} movies={props.movies} setExpandedMovie={props.setExpandedMovie} />
    </>
  );
}
