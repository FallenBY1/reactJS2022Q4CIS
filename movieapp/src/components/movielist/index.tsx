import MovieElement from './movieelement';

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

function MovieList(): JSX.Element {
  return (
    <div>
      {movies.map((movie) => (
        <>
          <MovieElement title={movie.title} key={movie.id} description={movie.description} />
        </>
      ))}
    </div>
  );
}

export default MovieList;
