type Button = {
  title: string;
  type: 'submit' | 'reset' | 'button';
  onclickAction?: React.MouseEventHandler<HTMLButtonElement>;
  movieId?: string;
};

export function Button(props: Button): JSX.Element {
  return (
    <>
      <button type={props.type} onClick={props.onclickAction}>{props.title}</button>
    </>
  );
}
