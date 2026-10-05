import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom/client';

const elemenHeader = <h1> halo, Selamat Belajar React!</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elemenHeader);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
