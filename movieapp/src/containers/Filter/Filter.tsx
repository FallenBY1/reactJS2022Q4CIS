import { Filter } from './FilterTypes';
import { Option } from '../../components/Option/Option';
import { useDispatch } from 'react-redux';
import { receiveMoviesFromApiError, sortMoviesById } from '../../actions/actions';
import { AnyAction } from 'redux';
import { searchParamsToQueryString } from '../../services/utils';

const movieSortCriterias: Array<Filter> = [
  {
    id: '1',
    title: 'Drama',
    value: 'drama'
  },
  {
    id: '2',
    title: 'Comedy',
    value: 'comedy'
  },
  {
    id: '3',
    title: 'Animation',
    value: 'animation'
  }
];

export function Filter(): JSX.Element {
  const dispatch = useDispatch();

  function filterMovies(e: any): void {
    fetch(searchParamsToQueryString({ searchBy: 'genres', filter: e.currentTarget.value, sortBy: '' }))
      .then((res) => res.json())
      .then((movies) => {
        dispatch(sortMoviesById(movies.data) as AnyAction);
      })
      .catch((error) => dispatch(receiveMoviesFromApiError(error) as AnyAction));
  }

  return (
    <select onChange={filterMovies}>
      {movieSortCriterias.map((element) => (
        <Option key={element.id} title={element.title} value={element.value} />
      ))}
    </select>
  );
}
