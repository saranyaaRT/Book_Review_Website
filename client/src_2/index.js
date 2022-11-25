import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import { ContextProvider } from "./contexts/Context";

ReactDOM.render(
  <React.StrictMode>
    {/* <ContextProvider> */}
      <App />
    {/* </ContextProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);