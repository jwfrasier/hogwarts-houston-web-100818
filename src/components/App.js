import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
const URL = "http://localhost:3001/hogs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pigs: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(function(response) {
        return response.json();
      })
      .then(function(pigs) {
        console.log(pigs);
      });
  }

  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
