import SearchForm from '../../components/searchform';

function Header(): JSX.Element {
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

export default Header;
