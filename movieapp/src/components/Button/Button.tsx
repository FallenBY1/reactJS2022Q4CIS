import { Button } from '../../models/types';

export function Button(props: Button): JSX.Element {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.title}
    </button>
  );
}
