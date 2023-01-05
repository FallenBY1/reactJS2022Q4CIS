import { Navigation } from '../../containers/Navigation/Navigation';
import { Sort } from '../../containers/Sort/Sort';
import { Filter } from '../../containers/Filter/Filter';
import { MovieList } from '../../containers/MovieList/MovieList';
import { MovieState } from '../../models/Movie';

export function HomePage(props: MovieState): JSX.Element {
  return (
    <>
      <Navigation />
      <Sort />
      <Filter />
      <MovieList setExpandedMovie={props.setExpandedMovie} />
    </>
  );
}
