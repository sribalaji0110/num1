import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/index";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./helpers";
import "./assets/scss/index.scss";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import { hydrate, render } from "react-dom";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Routes />, rootElement);
} else {
  render(<Routes />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
