import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/style.css";

/* Router choice:
   - "hash" (default): URLs look like /#/programs. Works on any static host with no
     configuration, including https://storage.googleapis.com/<bucket>/index.html.
   - "browser": clean URLs like /programs. Use once the site is on its own domain and
     the host serves index.html for unknown paths (see README). */
const Router = import.meta.env.VITE_ROUTER === "browser" ? BrowserRouter : HashRouter;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
