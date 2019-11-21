import React from "react";

export default class Loading extends React.Component {
  constructor(opts) {
    super(opts);
    this.state = { message: opts.message };
  }

  render() {
    return (
      <div
        style={{ margin: "auto", display: "block", "align-self": "center", width: "min-content" }}
      >
        <img
          src={require("./assets/thinking_face.svg")}
          style={{ width: "200px", height: "200px" }}
        ></img>
        {this.state.message ? (
          <p style={{ "text-align": "center", width: "100%" }}>{this.state.message}</p>
        ) : null}
        <p style={{ "text-align": "center", width: "100%" }}>読み込み中</p>
      </div>
    );
  }
}
