type MovieProps = {
  key: string;
  title: string;
  description: string;
};

function MovieElement(props: MovieProps): JSX.Element {
  return (
    <>
      <div key={props.key}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default MovieElement;
