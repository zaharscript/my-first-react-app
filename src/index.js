import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./App";
import "./index.css";

let element = (
  <div className="container">
    <div classNameName="row text-center">
      <strong>hellow world</strong>
    </div>
    <div classNameName="row">
      <div classNameName="col-12 text-center">
        <button className="btn btn-success">click me!</button>
      </div>
    </div>
  </div>
);

ReactDOM.render(<NavBar />, document.getElementById("root"));
