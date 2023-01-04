import { Button } from './ButtonTypes';

export function Button(props: Button): JSX.Element {
  return (
    <button type={props.type} onClick={props.onClick} disabled={props.disabled} >
      {props.title}
    </button>
  );
}
