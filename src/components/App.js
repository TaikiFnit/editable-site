import React, { Component } from 'react';
import MainTextArea from './MainTextArea';
import FnitArt from './FnitArt';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.onClickView = this.onClickView.bind(this);
  }

  onClickView() {
    this.refs.mainTextArea.focusMainTextArea();
  }

  render() {
    return (
      <div className="container" onClick={this.onClickView}>
        <FnitArt />
        <MainTextArea ref="mainTextArea" />
      </div>
    );
  }
}

export default App;
