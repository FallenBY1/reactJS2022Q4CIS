import { Header } from './containers/Header/Header';
import { Footer } from './containers/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';

export function App(): JSX.Element {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
