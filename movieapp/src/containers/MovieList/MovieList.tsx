import { MovieCard } from '../../components/MovieCard/MovieCard';
import { MovieListErrorBoundary } from '../../components/MovieListErrorBoundary/MovieListErrorBoundary';

type Movie = {
  [id: string]: string;
  title: string;
  description: string;
};

const movies: Array<Movie> = [
  {
    id: '1',
    title: 'Movie 1',
    description: 'Description for Movie 1'
  },
  {
    id: '2',
    title: 'Movie 2',
    description: 'Description for Movie 2'
  },
  {
    id: '3',
    title: 'Movie 3',
    description: 'Description for Movie 3'
  },
  {
    id: '4',
    title: 'Movie 4',
    description: 'Description for Movie 4'
  }
];

export function MovieList(): JSX.Element {
  return (
    <MovieListErrorBoundary>
      <div>
        {movies.map((movie) => (
          <>
            <MovieCard title={movie.title} key={movie.id} description={movie.description} />
          </>
        ))}
      </div>
    </MovieListErrorBoundary>
  );
}
