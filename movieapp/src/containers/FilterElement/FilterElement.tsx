import { FilterElement } from './FilterElementTypes';
import { Option } from '../../components/Option/Option';
import { useDispatch } from 'react-redux';
import { receiveMoviesFromApiError, sortMoviesById } from '../../actions/actions';
import { AnyAction } from 'redux';

const movieSortCriterias: Array<FilterElement> = [
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

function FilterMovies(e: any): void {
  const dispatch = useDispatch();
  console.log(e.currentTarget.value);
  fetch('http://localhost:4000/movies?searchBy=genres&filter=' + e.currentTarget.value + '&sortOrder=asc')
    .then((res) => res.json())
    .then((movies) => {
      console.log(movies);
      dispatch(sortMoviesById(movies.data) as AnyAction);
    })
    .catch((error) => dispatch(receiveMoviesFromApiError(error) as AnyAction));
}

export function FilterElement(): JSX.Element {
  return (
    <select onChange={FilterMovies}>
      {movieSortCriterias.map((element) => (
        <Option key={element.id} title={element.title} value={element.value} />
      ))}
    </select>
  );
}
