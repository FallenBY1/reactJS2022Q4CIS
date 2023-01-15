import { App } from './App';
import { createRoot } from 'react-dom/client';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Navigate, useRouteError } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate replace to="/search" />} errorElement={<RootErrorBoundary />} />
      <Route path="/search" element={<App />} errorElement={<RootErrorBoundary />}>
        <Route path=":searchParams" element={<App />} />
      </Route>
    </>
  )
);

function Fallback(): JSX.Element {
  return <p>Performing initial data "load"</p>;
}

function RootErrorBoundary(): JSX.Element {
  const error = useRouteError() as Error;
  return (
    <div>
      <h1>Uh oh, something went terribly wrong 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <button onClick={() => (window.location.href = '/')}>Click here to reload the app</button>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} fallbackElement={<Fallback />} />
  </Provider>
);
