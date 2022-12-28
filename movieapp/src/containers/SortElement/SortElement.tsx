import { SortElement } from './SortElementTypes';
import { Option } from '../../components/Option/Option';
import { useDispatch } from 'react-redux';
import { receiveMoviesFromApiError, sortMoviesById } from '../../actions/actions';
import { AnyAction } from 'redux';

const movieSortCriterias: Array<SortElement> = [
  {
    id: '1',
    title: 'Popularity',
    value: 'vote_count'
  },
  {
    id: '2',
    title: 'Release date',
    value: 'release_date'
  },
  {
    id: '3',
    title: 'Rating',
    value: 'vote_average'
  }
];

export function SortElement(): JSX.Element {
  const dispatch = useDispatch();

  function SortMovies(e: any): void {
    fetch('http://localhost:4000/movies?sortBy=' + e.currentTarget.value + '&sortOrder=asc')
      .then((res) => res.json())
      .then((movies) => {
        dispatch(sortMoviesById(movies.data) as AnyAction);
      })
      .catch((error) => dispatch(receiveMoviesFromApiError(error) as AnyAction));
  }

  return (
    <select onChange={SortMovies}>
      {movieSortCriterias.map((element) => (
        <Option key={element.id} title={element.title} value={element.value} />
      ))}
    </select>
  );
}
