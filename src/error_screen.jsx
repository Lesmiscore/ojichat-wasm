import React from "react";
import errorImage from "./assets/error.svg";

export default class ErrorScreen extends React.Component {
  constructor(opts) {
    super();
    this.state = { message: opts.message };
    console.log(errorImage);
  }

  render() {
    return (
      <div>
        <img
          src={errorImage}
          style={{
            width: "200px",
            height: "200px",
            margin: "auto",
            display: "block",
            "align-self": "center"
          }}
        ></img>
        <p class="center_text">{this.state.message}</p>
        <p class="center_text">ページを更新してやり直してください</p>
      </div>
    );
  }
}
