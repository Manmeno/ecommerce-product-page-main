import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Content from './Content';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Content />
  </React.StrictMode>
);
