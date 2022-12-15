import { App } from './App';
import { createRoot } from 'react-dom/client';

function Index(): JSX.Element {
  return <App />;
}

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(<Index />);
