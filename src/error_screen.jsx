import React from "react";

export default class ErrorScreen extends React.Component {
  constructor(opts) {
    super();
    this.state = { message: opts.message };
  }

  render() {
    return (
      <div>
        <img
          src={require("./assets/error.svg")}
          style={{
            width: "200px",
            height: "200px",
            margin: "auto",
            display: "block",
            "align-self": "center"
          }}
        ></img>
        <p style={{ "text-align": "center", width: "100%" }}>{this.state.message}</p>
        <p style={{ "text-align": "center", width: "100%" }}>ページを更新してやり直してください</p>
      </div>
    );
  }
}
