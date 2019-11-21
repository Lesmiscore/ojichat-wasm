import React from "react";

import FieldGroup from "./formfield";
import Alert from "./alert.jsx";
import { Form } from "react-bootstrap";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      targetName: "",
      emojiNum: 4,
      punctuationLevel: 0,
      result: "",
      error: ""
    };
  }

  handleTargetName(event) {
    this.setState({ targetName: event.target.value });
  }
  handleEmojiNum(event) {
    this.setState({ emojiNum: parseInt(event.target.value) });
  }
  handlePunctuationLevel(event) {
    this.setState({ punctuationLevel: parseInt(event.target.value) });
  }
  handleRun() {
    try {
      this.setState(Object.assign({ error: "" }, ojichat(this.state)));
    } catch (e) {
      this.setState({ result: "", error: `${e}` });
    }
  }

  render() {
    return (
      <Form>
        <FieldGroup
          type="text"
          value={this.state.targetName}
          onChange={this.handleTargetName.bind(this)}
          label="名前 (空白にするとランダム)"
          placeholder="名前を入力"
        />
        <FieldGroup
          type="number"
          min="0"
          step="1"
          value={isNaN(this.state.emojiNum) ? 4 : this.state.emojiNum}
          onChange={this.handleEmojiNum.bind(this)}
          label="絵文字/顔文字の最大連続数"
          placeholder="数値"
        />
        <FieldGroup
          type="number"
          min="0"
          max="3"
          step="1"
          value={isNaN(this.state.punctuationLevel) ? 0 : this.state.punctuationLevel}
          onChange={this.handlePunctuationLevel.bind(this)}
          label="句読点挿入頻度レベル"
          placeholder="数値"
        />
        <FieldGroup type="button" value="実行" onClick={this.handleRun.bind(this)} />
        <FieldGroup
          type="textarea"
          value={this.state.result}
          label="出力"
          placeholder="結果が表示されます"
        />
        {this.state.error && <Alert message={this.state.error} />}
      </Form>
    );
  }
}
