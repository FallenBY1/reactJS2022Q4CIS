import { SortElement } from './SortElementTypes';
import { Option } from '../../components/Option/Option';

const movieSortCriterias: Array<SortElement> = [
  {
    id: '1',
    title: 'Popularity',
    link: 'popularity'
  },
  {
    id: '2',
    title: 'Release date',
    link: 'release-date'
  },
  {
    id: '3',
    title: 'Rating',
    link: 'rating'
  }
];

export function SortElement(): JSX.Element {
  return (
    <select>
      {movieSortCriterias.map((element) => (
        <Option key={element.id} title={element.title} link={element.link} />
      ))}
    </select>
  );
}
