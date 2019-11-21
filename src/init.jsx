import React from "react";
import { render } from "react-dom";
import App from "./app";

function onLoad(func) {
  if (window.addEventListener) window.addEventListener("load", func, false);
  else if (window.attachEvent) window.attachEvent("onload", func);
  else window.onload = func;
}

onLoad(() => {
  render(<App />, document.querySelector("#root"));
});
