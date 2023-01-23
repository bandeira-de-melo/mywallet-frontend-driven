import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { GlobalStyles } from "./GlobalStyles.js";

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);