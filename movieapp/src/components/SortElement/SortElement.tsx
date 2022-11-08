type SortElement = {
  [id: string]: string;
  title: string;
  link: string;
};

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
        <>
          <option key={element.id} value={element.link}>
            {element.title}
          </option>
        </>
      ))}
    </select>
  );
}
