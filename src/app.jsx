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
      error: false
    };
    setTimeout(() => {
      loadOjichat()
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
  render() {
    if (this.state.loading) {
      return <Loading />;
    } else if (this.state.error) {
      return <ErrorScreen message={this.state.error} />;
    } else {
      return <Main />;
    }
  }
}
