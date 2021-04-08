import React from "react";
import thinkingFace from "./assets/thinking_face.svg";

export default class Loading extends React.Component {
  constructor(opts) {
    super(opts);
    const { loadingTotal, loadingProgress, loadingStage, message } = opts;
    this.state = { loadingTotal, loadingProgress, loadingStage, message };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loadingProgress !== this.state.loadingProgress) {
      const { loadingTotal, loadingProgress, loadingStage, message } = nextProps;
      this.setState({ loadingTotal, loadingProgress, loadingStage, message });
    }
  }

  render() {
    return (
      <div>
        <img
          src={thinkingFace}
          style={{
            width: "200px",
            height: "200px",
            margin: "auto",
            display: "block",
            "align-self": "center"
          }}
          class="rotating"
        ></img>
        {this.state.message ? <p class="center_text">{this.state.message}</p> : null}
        <p class="center_text">
          読み込み中
          {this.state.loadingTotal !== 0
            ? [
                <br />,
                " (",
                Math.floor((this.state.loadingProgress * 100) / this.state.loadingTotal),
                "%, ",
                this.state.loadingProgress,
                " bytes of ",
                this.state.loadingTotal,
                " bytes)"
              ]
            : null}
        </p>
      </div>
    );
  }
}
