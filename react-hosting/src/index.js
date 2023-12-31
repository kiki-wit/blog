//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './css/sb-admin-2.min.css';
import './vendor/fontawesome-free/css/all.min.css';

// js
import './vendor/bootstrap/js/bootstrap.bundle.min.js';


// util
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();