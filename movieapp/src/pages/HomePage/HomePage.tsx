import { Navigation } from '../../components/Navigation/Navigation';
import { SortElement } from '../../components/SortElement/SortElement';
import { MovieList } from '../../containers/MovieList/MovieList';

export function HomePage(): JSX.Element {
  return (
    <>
      <Navigation />
      <SortElement />
      <MovieList />
    </>
  );
}
