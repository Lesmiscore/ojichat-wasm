import React from "react";

import { loadOjichat } from "./ojichat_loader";

import Loading from "./loading";
import ErrorScreen from "./error_screen";
import Main from "./main";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: false,
      loadingTotal: 0,
      loadingProgress: 0,
      loadingStage: 0
    };
    setTimeout(() => {
      loadOjichat(this.loadProgress.bind(this))
        .then(() => {
          this.setState({
            loading: false
          });
        })
        .catch(err => {
          this.setState({
            loading: false,
            error: `${err}`
          });
        });
    }, 0);
  }
  loadProgress(loadingTotal, loadingProgress, loadingStage) {
    this.setState({ loadingTotal, loadingProgress, loadingStage });
  }
  render() {
    let inner;
    if (this.state.loading) {
      inner = (
        <Loading
          loadingTotal={this.state.loadingTotal}
          loadingProgress={this.state.loadingProgress}
          loadingStage={this.state.loadingStage}
        />
      );
    } else if (this.state.error) {
      inner = <ErrorScreen message={this.state.error} />;
    } else {
      inner = <Main />;
    }
    return (
      <div>
        <h1 class="center_text">ojichat in WASM</h1>
        {inner}
        <p class="center_text">
          <a href="https://github.com/nao20010128nao/ojichat-wasm">GitHub</a>
          {" | "}
          <a href="https://github.com/greymd/ojichat">偉大なる元ネタ</a>
        </p>
      </div>
    );
  }
}
