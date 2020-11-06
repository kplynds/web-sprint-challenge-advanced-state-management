import React, { Component } from "react";
import Smurfs from "./Smurfs";
import Form from "./Form";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>SMURFS! W/Redux</div>
        <div> <Smurfs /> </div>
        <div> <Form /> </div>
      </div>
    );
  }
}

export default App;
