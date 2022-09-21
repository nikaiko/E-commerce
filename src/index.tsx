import React from "react";

import ReactDOM from "react-dom/client";
import "regenerator-runtime";

import "@styles/index.scss";
import "@configs/configureMobX";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);

if (module.hot) {
  module.hot.accept();
}
