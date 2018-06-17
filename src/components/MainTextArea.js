import React, { Component } from 'react';
import { firebaseDb } from '../firebase/';
import './MainTextArea.css';

const textRef = firebaseDb.ref('editable-site/textAreaValue');

export default class MainTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: '',
      textAreaHeight: 0,
      isRendered: false
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount() {
    this.textRefListener = textRef.on('value', this.onUpdate);
    this.focusMainTextArea();
  }

  componentWillUnmount() {
    textRef.off(this.textRefListener);
  }

  componentDidUpdate() {
    if (this.mainTextArea.scrollHeight !== this.mainTextArea.clientHeight) {
      this.setState({ textAreaHeight: this.mainTextArea.scrollHeight });
    }
  }

  onUpdate(snapshot) {
    const textAreaValue = snapshot.val() || '';
    this.setState({ textAreaValue: textAreaValue, isRendered: true });
  }

  onChangeText(e) {
    if (this.state.isRendered) {
      this.setState({
        textAreaValue: e.target.value,
        textAreaHeight: e.target.scrollHeight
      });
      textRef.set(e.target.value);
    }
  }

  focusMainTextArea() {
    this.mainTextArea.focus();
  }

  render() {
    return (
      <textarea
        value={this.state.textAreaValue}
        onChange={this.onChangeText}
        ref={mainTextArea => {
          this.mainTextArea = mainTextArea;
        }}
        style={{
          height: this.state.textAreaHeight
        }}
        className="editableTextArea"
      />
    );
  }
}
