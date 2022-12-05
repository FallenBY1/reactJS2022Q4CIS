import { App } from './App';
import { createRoot } from 'react-dom/client';

function AppWithCallbackAfterRender(): JSX.Element {
  return <App />;
}

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(<AppWithCallbackAfterRender />);
