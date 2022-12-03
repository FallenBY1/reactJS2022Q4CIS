import * as ReactDOM from 'react-dom';
import { App } from './App';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return <App />
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<AppWithCallbackAfterRender />);
