import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "mobx-react";
import { store } from "./stores";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const Layout = createGlobalStyle`
body{
  background-color:rgb(36, 40, 47);
  color:rgb(245, 245, 245);
  
}
`;

ReactDOM.render(
  <React.StrictMode>
    <Layout />
    <Router>
      <Provider {...store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
