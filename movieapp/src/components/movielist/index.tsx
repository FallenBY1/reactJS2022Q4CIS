import MovieElement from './movieelement';
import ErrorBoundary from './error-boundary';

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

const isMoviesAvailable = movies.length > 0;

function MovieList(): JSX.Element {
  return (
    <ErrorBoundary isOk={isMoviesAvailable}>
      <div>
        {movies.map((movie) => (
          <>
            <MovieElement title={movie.title} key={movie.id} description={movie.description} />
          </>
        ))}
      </div>
    </ErrorBoundary>
  );
}

export default MovieList;
