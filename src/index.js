import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from "react-dom/client";

import './index.css';
import App from './App';
import { DataLayer } from "./components/dataLayer";
import reducer,{ initialValue } from "./components/reducer";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

// const [state,dispatch]=useReducer(reducer,initialValue);

root.render(
  <BrowserRouter>
    <DataLayer initialValue={initialValue} reducer={reducer}>
      <App />
    </DataLayer>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
