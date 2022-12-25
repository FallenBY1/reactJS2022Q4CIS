import { App } from './App';
import { createRoot } from 'react-dom/client';
import {applyMiddleware, legacy_createStore as createStore} from "redux";
import thunk from 'redux-thunk'
import rootReducer from "./reducers";
import { Provider } from 'react-redux';


/**
 * 1. Create Store
 * 2. Create actions - Fetch, Sort by date, sort by rating, filter by genre
 * 3. Create reducers
 * 4. Implement fetch function by Axios - to get Movies with specified parameters in request
 *
 *
 *
 */




const store = createStore(rootReducer, applyMiddleware(thunk));

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
