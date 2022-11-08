type Button = {
  title: string;
};

export function Button({ title = 'Button title' }: Button): JSX.Element {
  return (
    <>
      <button type="button">{title}</button>
    </>
  );
}
