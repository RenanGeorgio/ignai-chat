import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./global.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // desativei temporariamente por conta dos 2 renders estarem incrementando o contador de 2 em 2
  // <React.StrictMode>
    <BrowserRouter>    
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();