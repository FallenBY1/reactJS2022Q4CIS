import { Header } from './containers/Header/Header';
import { Footer } from './containers/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import './services/i18n';
import { useState } from 'react';
import { MovieType } from './models/Movie';
import { NewMoviesProvider } from './hooks/MovieContext';

export function App(): JSX.Element {
  const [expandedMovie, setExpandedMovie] = useState<MovieType>();

  return (
    <>
      <NewMoviesProvider>
        <Header expandedMovie={expandedMovie} setExpandedMovie={setExpandedMovie} />
        <HomePage setExpandedMovie={setExpandedMovie} />
      </NewMoviesProvider>
      <Footer />
    </>
  );
}
