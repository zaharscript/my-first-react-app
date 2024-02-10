import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar";
import MainComponent from "./MainContent";
// import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.Fragment>
    <NavBar />
    <MainComponent />
  </React.Fragment>,
  document.getElementById("root")
);
