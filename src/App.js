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
    output: "0"
  };
  onReset() {
    this.setState({
      output: "0",
      total:'0'
    });
  }
  onBackspace() {
    console.log('backspace is about to change output')
    this.setState({
      output: this.state.output.slice(0, -1)
    });
    console.log('backspace has changed output')

  }

  calculate = () => {
    if (this.lastCharIsOperator()) {
      this.setState({
        total: '= ' + math.eval(this.state.output.substr(0,this.state.output.length -1))
      })
    }else
      this.setState({
        total: '= ' + math.eval(this.state.output)
      })
    }

  addTodisplay(input) {
    console.log('backspace passed inside adddisplay')
    if (this.state.output.length === 1 && this.state.output === '0') {
      this.setState({
        output:input
      })

    }else
        this.setState({
      output: this.state.output +  input
    });

  }
  lastCharIsOperator() {

    const lenghtOfOtput = this.state.output.length;
    let lastCharacter = this.state.output.charAt(lenghtOfOtput - 1);
    const indexOfLastChar = this.state.data.findIndex((data) =>
    {
      if (lastCharacter === '*') {
        lastCharacter = 'X';
      }
      return data.value === lastCharacter;
    })

    const lasCharacterArray = this.state.data[indexOfLastChar];
    return lasCharacterArray.operator
  }
  onButtonClicked(id, operator) {

    if (id === 'X') {
      id = '*';
    }

    switch (id) {
      case '=':
        this.calculate();
        break;
      case 'ON':
        this.onReset();
        break;
      case 'BACK':
        this.onBackspace();
        break;
      default:

        if (operator && this.lastCharIsOperator()) {
         this.setState({
             output: this.state.output.slice(0, -1)+ id
         })
        }
        else

          this.addTodisplay(id)
        
    }
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
            onButtonClick={this.onButtonClicked.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
