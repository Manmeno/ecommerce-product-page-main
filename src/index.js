import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Content from './Content';
import Lightbox from './Lightbox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Content />
    <Lightbox />
  </React.StrictMode>
);

