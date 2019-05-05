import './App.css';
import React, { Component } from 'react';
import Buttons from './Buttons'

export class App extends Component {
  state = {
    data: [
      {
          value: 'ON',operator: true
      }, {
          value: 'BACK',operator: true
      }, {
          value: '%',operator: true
      }, {
          value: '/',operator:true
      }, {
          value: '7',operator: false
      }, {
          value: '8',operator: false
      }, {
          value: '9', operator: false
      }, {
          value: 'X', operator: true
      }, {
          value: '4',operator: false
      }, {
          value: '5',operator: false
      }, {
          value: '6',operator: false
      }, {
          value: '-',
          operator: true
      }, {
          value: '1', operator: false
      }, {
          value: '2',operator: false
      }, {
          value: '3',operator: false
      }, {
          value: '+',operator: true
      }, {
          value: '0', operator: false
      },
      {
          value: '.',operator: false
      }, {
          value: '=', operator: true
      }],
    total: '',
    output:''
  }
  onButtonON() {
    this.setState({
    output:''
  })
  }

  onButtonClick(id, operator) {
    this.setState({
      total: this.state.output
    })
    let space = '';
    let input = id;
    if (operator) {
      space = ' ';
      if (id === 'BACK'|| id === 'ON'|| id === '=') {
        // console.log('operator');
        input = '';
        space=''
      }

    }
    this.setState({
      output: this.state.output + space  + input + space
    })
    if (id === 'ON') {
      this.onButtonON();
    }
    if (id === 'BACK') {
      this.setState({
        output: this.state.output.slice(0, -1)
      })
    }
  }

  render() {
    return (
      <div className="App">
      <div className="container">
        <div className="output">
            <span className='output_numbers' >{this.state.output}</span>
            <span style={{
              display: 'block',
              padding: '5px',
              marginTop: '25px'
            }}>{this.state.total}</span>
        </div>
          < Buttons data={this.state.data} onButtonClick={this.onButtonClick.bind(this)}/>
      </div>

    </div>
    )
  }
}

export default App
