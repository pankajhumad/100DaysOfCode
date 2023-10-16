import { createRoot } from 'react-dom/client';

// Render your React component instead
const domNode = document.getElementById('test');
const root = createRoot(domNode);
root.render(<h1>Hello, world</h1>);