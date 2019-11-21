require("../golang/wasm_exec");
require("./wasm_exec_correction");

const Buffer = require("safe-buffer").Buffer;

export async function loadOjichat(progressCallback) {
  const go = new Go();
  const response = await fetch(require("../golang/main.wasm"));
  const contentLength = response.headers.get("Content-Length");
  const reader = response.body.getReader();
  let receivedLength = 0;
  progressCallback(contentLength, 0, 0);
  const chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    chunks.push(value);
    receivedLength += value.length;
    progressCallback(contentLength, receivedLength, 0);
  }

  const full = Buffer.alloc(receivedLength);
  let position = 0;
  for (let chunk of chunks) {
    full.set(chunk, position);
    position += chunk.length;
  }

  const wasm = await WebAssembly.instantiate(full, go.importObject);
  go.run(wasm.instance);
  return await new Promise(r => {
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
