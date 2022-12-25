import { Navigation } from '../../containers/Navigation/Navigation';
import { SortElement } from '../../containers/SortElement/SortElement';
import { FilterElement } from '../../containers/FilterElement/FilterElement';
import { MovieList } from '../../containers/MovieList/MovieList';
import { MovieState } from '../../models/Movie';

export function HomePage(props: MovieState): JSX.Element {
  return (
    <>
      <Navigation />
      <SortElement />
      <FilterElement />
      <MovieList setExpandedMovie={props.setExpandedMovie} />
    </>
  );
}
