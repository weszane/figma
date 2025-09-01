import { _C } from "../vendor/678925";
let f = [];
function r(e, n) {
  let {
    buildId,
    debugFile
  } = function (e) {
    let n = WebAssembly.Module.customSections(e, "build_id");
    let i = null;
    let t = null;
    let f = n[0];
    f && (i = Array.from(new Uint8Array(f)).reduce((e, n) => e + n.toString(16).padStart(2, "0"), ""));
    let r = WebAssembly.Module.customSections(e, "external_debug_info")[0];
    if (r) {
      let e = new Uint8Array(r);
      t = new TextDecoder("utf-8").decode(e);
    }
    return {
      buildId: i,
      debugFile: t
    };
  }(e);
  if (buildId) {
    let e = a(n);
    e >= 0 && f.splice(e, 1);
    let r = null;
    if (debugFile) try {
      r = new URL(debugFile, n).href;
    } catch (e) {}
    f.push({
      type: "wasm",
      code_id: buildId,
      code_file: n,
      debug_file: r,
      debug_id: `${buildId.padEnd(32, "0").slice(0, 32)}0`
    });
  }
}
function a(e) {
  return f.findIndex(n => "wasm" === n.type && n.code_file === e);
}
export let $$o0 = _C(() => ({
  name: "Wasm",
  setupOnce() {
    !function () {
      if ("instantiateStreaming" in WebAssembly) {
        let e = WebAssembly.instantiateStreaming;
        WebAssembly.instantiateStreaming = function (n, i) {
          return Promise.resolve(n).then(n => e(n, i).then(e => (n.url && r(e.module, n.url), e)));
        };
      }
      if ("compileStreaming" in WebAssembly) {
        let e = WebAssembly.compileStreaming;
        WebAssembly.compileStreaming = function (n) {
          return Promise.resolve(n).then(n => e(n).then(e => (n.url && r(e, n.url), e)));
        };
      }
    }();
  },
  processEvent(e) {
    let n = !1;
    e.exception && e.exception.values && e.exception.values.forEach(e => {
      var i;
      let t;
      e.stacktrace && e.stacktrace.frames && (n = n || (i = e.stacktrace.frames, t = !1, i.forEach(e => {
        if (!e.filename) return;
        let n = e.filename.match(/^(.*?):wasm-function\[\d+\]:(0x[a-fA-F0-9]+)$/);
        if (n) {
          let i = a(n[1]);
          e.instruction_addr = n[2];
          e.filename = n[1];
          e.platform = "native";
          i >= 0 && (e.addr_mode = `rel:${i}`, t = !0);
        }
      }), t));
    });
    n && (e.debug_meta = e.debug_meta || {}, e.debug_meta.images = [...(e.debug_meta.images || []), ...f]);
    return e;
  }
}));
export const F = $$o0;