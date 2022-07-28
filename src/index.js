import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  SortProvider } from "./context/sortContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SortProvider>
    <App />
    </SortProvider>
  </React.StrictMode>
);

