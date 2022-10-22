import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";

import App from './components/app/app';
import {createRoot} from 'react-dom/client';

const reactDom = document.getElementById('root');
const root = createRoot(reactDom);
root.render(<Router>
  <App/>
</Router>);

