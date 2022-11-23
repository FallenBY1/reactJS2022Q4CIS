import { SortElement } from '../../models/types';

export function Option(props: SortElement): JSX.Element {
  return <option value={props.link}>{props.title}</option>;
}
