export type MovieProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  id?: string;
  title: string;
  description: string;
  fullDescription?: string;
};
