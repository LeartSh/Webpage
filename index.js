import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // You might need to adjust this path later if index.css isn't directly in src

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);