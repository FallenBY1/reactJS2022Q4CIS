import { SearchForm } from '../SearchForm/SearchForm';

export function Header(): JSX.Element {
  return (
    <>
      <h1>
        <b>Netflix</b>Roulette
      </h1>
      <a href="#">Add Movie</a>
      <SearchForm />
    </>
  );
}
