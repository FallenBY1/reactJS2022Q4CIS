import { Sort } from './SortTypes';
import { Option } from '../../components/Option/Option';
import { useDispatch } from 'react-redux';
import { receiveMoviesFromApiError, sortMoviesById } from '../../actions/actions';
import { AnyAction } from 'redux';
import { searchParamsToQueryString } from '../../services/utils';
import { SortCriteria } from '../../services/constants';
import { useTranslation } from 'react-i18next';

export function Sort(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const movieSortCriterias: Array<Sort> = [
    {
      id: '1',
      title: t('popularity'),
      value: SortCriteria.VOTE_COUNT
    },
    {
      id: '2',
      title: t('release_date'),
      value: SortCriteria.RELEASE_DATE
    },
    {
      id: '3',
      title: t('rating'),
      value: SortCriteria.VOTE_AVERAGE
    }
  ];

  function sortMovies(e: any): void {
    fetch(searchParamsToQueryString({ searchBy: '', filter: '', sortBy: e.currentTarget.value }))
      .then((res) => res.json())
      .then((movies) => {
        dispatch(sortMoviesById(movies.data) as AnyAction);
      })
      .catch((error) => dispatch(receiveMoviesFromApiError(error) as AnyAction));
  }

  return (
    <select onChange={sortMovies}>
      {movieSortCriterias.map((element) => (
        <Option key={element.id} title={element.title} value={element.value} />
      ))}
    </select>
  );
}
