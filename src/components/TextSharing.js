import React, { Component } from 'react';
import MainTextArea from './MainTextArea';
import './TextSharing.css';

class TextSharing extends Component {
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
        <MainTextArea ref="mainTextArea" />
      </div>
    );
  }
}

export default TextSharing;
