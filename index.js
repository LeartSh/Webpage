import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // We will create App.js next
// import './index.css'; // Uncomment this later if you have a global index.css in src

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);