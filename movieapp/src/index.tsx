import { App } from './App';
import { createRoot } from 'react-dom/client';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function Index(): JSX.Element {
  return <App />;
}

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(
  <Provider store={store}>
    <Index />
  </Provider>
);
