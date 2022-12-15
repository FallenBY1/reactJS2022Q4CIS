import { Navigation } from '../../containers/Navigation/Navigation';
import { SortElement } from '../../containers/SortElement/SortElement';
import { MovieList } from '../../containers/MovieList/MovieList';
import { MovieState } from '../../models/Movie';

export function HomePage(props: MovieState): JSX.Element {
  return (
    <>
      <Navigation />
      <SortElement />
      <MovieList setExpandedMovie={props.setExpandedMovie} />
    </>
  );
}
