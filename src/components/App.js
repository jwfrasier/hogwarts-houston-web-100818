import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import OinkBrowser from "./OinkBrowser";
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
      .then(response => response.json())
      .then(pigs =>
        this.setState(state => {
          state.pigs = pigs;
        })
      );
  }

  render() {
    console.log(this.state.pigSpecialty);
    return (
      <div className="app">
        <Nav />
        <div>
          <OinkBrowser pigs={this.state.pigs} />
          {/* {this.state.pigs.map(pig => (
            <OinkBrowser pig={pig} key={pig.id} /> */}
          ))}
        </div>
      </div>
    );
  }
}

export default App;
