import React, { Component } from "react";
import NavBar from "./NavBar";
import MainComponent from "./MainContent";
import Footer from "./Footer";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <MainComponent />
        <Footer />
      </React.Fragment>
    );
  }
}
