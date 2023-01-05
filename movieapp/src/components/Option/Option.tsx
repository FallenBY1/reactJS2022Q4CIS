import { Sort } from '../../containers/Sort/SortTypes';

export function Option(props: Sort): JSX.Element {
  return <option value={props.value}>{props.title}</option>;
}
