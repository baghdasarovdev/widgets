/* eslint-disable absolute-imports/only-absolute-imports */
// @ts-nocheck directive by adding that at the top of the file
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import './index.css';

const widgetDivs = document.querySelectorAll('.container-widget');

const el = document.getElementById('app');

if (el) {
  const root = ReactDOM.createRoot(el);
  root.render(<App />);
}

widgetDivs.forEach((div) => {
  const root = ReactDOM.createRoot(div);
  root.render(<App />);
});
