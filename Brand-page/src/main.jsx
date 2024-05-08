import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav.jsx";
import Page from "./components/Page.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Page />
  </React.StrictMode>
);
