require("../golang/wasm_exec");
require("./wasm_exec_correction");

export function loadOjichat() {
  return new Promise(async r => {
    const go = new Go();
    const wasm = await WebAssembly.instantiateStreaming(
      fetch(require("../golang/main.wasm")),
      go.importObject
    );
    go.run(wasm.instance);
    function waitOjichat() {
      if (global.ojichat) {
        r(global.ojichat);
      } else {
        setTimeout(waitOjichat, 0);
      }
    }
    waitOjichat();
  });
}
