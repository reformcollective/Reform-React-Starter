import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "components/Providers";
import { BrowserRouter } from "react-router-dom";

import "assets/fonts/typography.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
