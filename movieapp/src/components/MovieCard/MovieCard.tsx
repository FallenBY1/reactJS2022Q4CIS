type MovieProps = {
  key: string;
  title: string;
  description: string;
};

export function MovieCard({ key, title = 'Default movie title', description = 'Description will be added soon' }: MovieProps): JSX.Element {
  return (
    <>
      <div key={key}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}
