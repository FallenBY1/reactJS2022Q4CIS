import { MovieProps } from './CardTypes';

export function Card(props: MovieProps): JSX.Element {
  return (
    <div onClick={props.onClick}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
