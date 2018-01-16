import React, { Component } from 'react';
import logo from './logo.svg';
import { firebaseDb } from './firebase/'
import './App.css'

const textRef = firebaseDb.ref('editable-site/textAreaValue')

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
    this.state = {textAreaValue: "", isRendered: false}
    this.onChangeText = this.onChangeText.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount() {
    this.textRefListener = textRef.on('value', this.onUpdate);
  }

  componentWillUnmount() {
    textRef.off(this.textRefListener)
  }

  onUpdate(snapshot) {
      const textAreaValue = snapshot.val() || ""
      this.setState({textAreaValue: textAreaValue, isRendered: true})
  }

  onChangeText(e) {
    if (this.state.isRendered) { 
      this.setState({textAreaValue: e.target.value});
      textRef.set( e.target.value)
    }
  }

  render() {
    return (
      <div>
        <header>
        <pre>
        {`
 /$$$$$$$$        /$$   /$$                               /$$   /$$              
 | $$_____/       |__/  | $$                              |__/  | $$              
 | $$    /$$$$$$$  /$$ /$$$$$$                    /$$$$$$$ /$$ /$$$$$$    /$$$$$$ 
 | $$$$$| $$__  $$| $$|_  $$_/                   /$$_____/| $$|_  $$_/   /$$__  $$
 | $$__/| $$  \\ $$| $$  | $$                    |  $$$$$$ | $$  | $$    | $$$$$$$$
 | $$   | $$  | $$| $$  | $$ /$$                 \\____  $$| $$  | $$ /$$| $$_____/
 | $$   | $$  | $$| $$  |  $$$$/       /$$       /$$$$$$$/| $$  |  $$$$/|  $$$$$$$
 |__/   |__/  |__/|__/   \\___/        |__/      |_______/ |__/   \\___/   \\_______/`}
        </pre>
        </header>
        <textarea value={this.state.textAreaValue} onChange={this.onChangeText} />
      </div>
    );
  }
}

export default App;