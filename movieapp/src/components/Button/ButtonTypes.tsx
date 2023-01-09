export type Button = {
  title: string;
  type: 'submit' | 'reset' | 'button';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};
