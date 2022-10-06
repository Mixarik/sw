import React from 'react';

import App from './components/app/app';
import { createRoot } from 'react-dom/client';

const reactDom = document.getElementById('root');
const root = createRoot(reactDom);
root.render(<App />);

