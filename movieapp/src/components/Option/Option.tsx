import { SortElement } from '../../containers/SortElement/SortElementTypes';

export function Option(props: SortElement): JSX.Element {
  return <option value={props.value}>{props.title}</option>;
}
