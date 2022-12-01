import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: true,
    };

    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  toggleDarkMode() {
    // console.log("Darkmode");
    this.setState({ darkMode: !this.state.darkMode });
  }

  render() {
    return (
      <div className={`${this.state.darkMode ? "bg-dark" : ""}`}>
        <Navbar toggleDarkMode={() => this.toggleDarkMode()} />
        <News />
      </div>
    );
  }
}

export default App;
// 77e33a89b3c146da8534b20cfe8bd40a--Api key  ---password -> punamkumari123@
