import { Button } from '../../components/Button/Button';
import { SearchField } from '../../components/SearchField/SearchField';

export function SearchForm(): JSX.Element {
  return (
    <>
      <SearchField />
      <Button title="Search" />
    </>
  );
}
