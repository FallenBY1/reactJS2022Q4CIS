import { useState } from 'react';
import { ErrorProps, IError } from '../../models/types';

export function ErrorBoundary(props: ErrorProps): JSX.Element {
  const [hasError, setHasError] = useState<IError>({ hasError: false });
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

  return <>{hasError.hasError ? <ErrorText /> : props.children}</>;
}
