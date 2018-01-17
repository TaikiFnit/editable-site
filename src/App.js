import React, { Component } from 'react';
import logo from './logo.svg';
import { firebaseDb } from './firebase/'
import './App.css'

const textRef = firebaseDb.ref('editable-site/textAreaValue')

class App extends Component {
  constructor(props) {
    super(props);
    this.onClickView = this.onClickView.bind(this);
  }

  onClickView(e) {
    this.refs.mainTextArea.focusMainTextArea()
  }

  render() {
    return (
      <div className="container" onClick={this.onClickView}>
        <FnitArt />
        <MainTextArea ref='mainTextArea' />
      </div>
    );
  }
}

function FnitArt(props) {
  return <header><pre>
  {`
/$$$$$$$$        /$$   /$$                               /$$   /$$              
| $$_____/       |__/  | $$                              |__/  | $$              
| $$    /$$$$$$$  /$$ /$$$$$$                    /$$$$$$$ /$$ /$$$$$$    /$$$$$$ 
| $$$$$| $$__  $$| $$|_  $$_/                   /$$_____/| $$|_  $$_/   /$$__  $$
| $$__/| $$  \\ $$| $$  | $$                    |  $$$$$$ | $$  | $$    | $$$$$$$$
| $$   | $$  | $$| $$  | $$ /$$                 \\____  $$| $$  | $$ /$$| $$_____/
| $$   | $$  | $$| $$  |  $$$$/       /$$       /$$$$$$$/| $$  |  $$$$/|  $$$$$$$
|__/   |__/  |__/|__/   \\___/        |__/      |_______/ |__/   \\___/   \\_______/`}
  </pre></header>
}

class MainTextArea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {textAreaValue: "", textAreaHeight: 0, isRendered: false}
    this.onChangeText = this.onChangeText.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount() {
    this.textRefListener = textRef.on('value', this.onUpdate);
    this.focusMainTextArea()
  }

  componentWillUnmount() {
    textRef.off(this.textRefListener)
  }

  componentDidUpdate(prevProps, prevState){
    if (this.mainTextArea.scrollHeight != this.mainTextArea.clientHeight) {
      this.setState({textAreaHeight: this.mainTextArea.scrollHeight})
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.textAreaValue !== nextState.textAreaValue) {
      return true
    }

    return false
  }

  onUpdate(snapshot) {
      const textAreaValue = snapshot.val() || ""
      this.setState({textAreaValue: textAreaValue, isRendered: true})
  }

  onChangeText(e) {
    if (this.state.isRendered) { 
      this.setState({textAreaValue: e.target.value, textAreaHeight: e.target.scrollHeight});
      textRef.set( e.target.value)
    }
  }

  focusMainTextArea() {
    this.mainTextArea.focus();
  }

  render() {
    return (
        <textarea value={this.state.textAreaValue} onChange={this.onChangeText} ref={(mainTextArea) => {this.mainTextArea = mainTextArea;}} style={{height: this.state.textAreaHeight}}/>
    );
  }
}

export default App;