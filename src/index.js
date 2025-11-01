import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Mantenemos solo el CSS global
import App from './App';
// Eliminar: import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Eliminar: Si dejas esta parte, puede causar un error si no borraste reportWebVitals.js
// reportWebVitals();