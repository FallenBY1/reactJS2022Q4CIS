type MovieProps = {
  title: string;
  description: string;
};

export function MovieCard(props: MovieProps): JSX.Element {
  return (
    <>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </>
  );
}
