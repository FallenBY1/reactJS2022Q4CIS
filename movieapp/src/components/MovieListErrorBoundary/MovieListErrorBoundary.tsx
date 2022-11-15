import { useState } from 'react';

type ErrorProps = {
  children: JSX.Element;
};

export function MovieListErrorBoundary(props: ErrorProps): JSX.Element {
  let { hasError, setHasError }:any = useState(false);
  const ErrorText = (): JSX.Element => <h3>Error, please try again later</h3>;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getDerivedStateFromError(error: boolean): object {
    return { hasError: error };
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function componentDidCatch(error: boolean): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setHasError({ hasError: error });
  }

  return <>{hasError ? <ErrorText /> : props.children }</>;
}
