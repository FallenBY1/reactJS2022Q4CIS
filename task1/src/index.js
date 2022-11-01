import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HelloWorld } from './HelloWorld';
import { Counter } from './Counter';
import { SearchForm } from './SearchForm';
import { GenreToggle } from './GenreToggle';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelloWorld/>
      <hr/>
    <Counter/>
      <hr/>
    <SearchForm/>
      <hr/>
    <GenreToggle/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
