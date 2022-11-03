type ErrorProps = {
  isOk: boolean;
  children: JSX.Element;
};

function ErrorBoundary(props: ErrorProps): JSX.Element {
  const ErrorText = (): JSX.Element => <h3>Error, please try again later</h3>;
  return <>{props.isOk ? props.children : <ErrorText />}</>;
}

export default ErrorBoundary;
