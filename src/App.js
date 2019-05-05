import "./App.css";
import React, { Component } from "react";
import Buttons from "./Buttons";
import * as math from "mathjs";

export class App extends Component {
  state = {
    data: [
      { value: "ON", operator: true },
      { value: "BACK", operator: true },
      { value: "%", operator: true },
      { value: "/", operator: true },
      { value: "7", operator: false },
      { value: "8", operator: false },
      { value: "9", operator: false },
      { value: "X", operator: true },
      { value: "4", operator: false },
      { value: "5", operator: false },
      { value: "6", operator: false },
      { value: "-", operator: true },
      { value: "1", operator: false },
      { value: "2", operator: false },
      { value: "3", operator: false },
      { value: "+", operator: true },
      { value: "0", operator: false },
      { value: ".", operator: false },
      { value: "=", operator: true }
    ],
    total: "0",
    output: ""
  };
  onButtonON() {
    this.setState({
      output: "",
      total:'0'
    });
  }

  calculate = (id, operator) => {
    const notempty = this.state.output.length > 0;
    if (id === "=") {
      this.setState({
        total:'= '+ math.eval(this.state.output)

      });
      console.log('calculating')
    }
  };
  onButtonClick(id, operator) {
    let space = "";
    let input = id;
    if (id === 'X') {
      input = '*';
    }

    if (operator) {
      space = " ";
      if (id === '=')
        input =''
    }
    this.setState({
      output: this.state.output + space + input + space
    });
    if (id === "ON") {
      this.onButtonON();
    }
    if (id === "BACK") {
      console.log(this.state.output)
      this.setState({
        output: this.state.output.slice(0, -1)
      });
      console.log(this.state.output)
    }
    this.calculate(id, operator);
  }
  componentDidMount() {
    this.state.data.map(item => {
      if (item.operator) {
        document.getElementById(item.value).className = "items operators";
      }
      return null;
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <span>Nima's calculator</span>
          <div className="output">
            <span className="output_numbers">{this.state.output}</span>
            <span className="output_total">{this.state.total}</span>
          </div>
          <Buttons
            data={this.state.data}
            onButtonClick={this.onButtonClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
