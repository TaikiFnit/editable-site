import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MainTextAreaw />
    );
  }
}

class MainTextAreaw extends React.Component {

  constructor(props) {
    super(props);
    this.state = {textAreaValue: ""}
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(e) {
    this.setState({textAreaValue: e.target.value});
    console.log(e.target.value)
  }

  onClick() {
    this.setState({textAreaValue: this.refs.textArea.getDOMNode().value});
  }

  render() {
    return (
        <textarea value={this.state.textAreaValue} onChange={this.onChangeText} />
    );
  }
}

export default App;
