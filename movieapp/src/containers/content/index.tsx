import Navigation from '../../components/navigation';
import Sorting from '../../components/sorting';
import MovieList from '../../components/movielist';

function MainContent(): JSX.Element {
  return (
    <>
      <Navigation />
      <Sorting />
      <MovieList />
    </>
  );
}

export default MainContent;
