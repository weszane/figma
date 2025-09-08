import { getGlobalThis } from "../905/841449";
import { initializeAppBindings } from "../figma_app/763686";
let a = {};
export function $$s2() {
  return a;
}
export function $$o0({
  isProduction: e,
  executeEmscriptenJS: t
}) {
  let r;
  let i;
  let s = getGlobalThis();
  (a = {}).instantiateWasm = function (e, t) {
    r = e;
    i = t;
    return {};
  };
  s.Module = a;
  let o = !1;
  e || Object.defineProperty(a, "wasmOffsetData", {
    get: () => (o = !0, {
      offset_map: {},
      func_starts: [],
      name_map: {},
      import_functions: 0
    }),
    set: () => {}
  });
  try {
    t();
    o && (a.emscripten_realloc_buffer ?? a.growMemory)(0x60000000);
  } finally {
    delete s.Module;
  }
  if (void 0 === r) throw Error('Expected WebAssembly code to set "imports"');
  if (void 0 === i) throw Error('Expected WebAssembly code to set "receiveInstance"');
  return {
    imports: r,
    receiveInstance: i,
    getReservedHeapSize: () => a.HEAPU8.buffer.byteLength
  };
}
export function $$l1() {
  let e = getGlobalThis();
  let t = e.executeFullscreenEmscriptenCode;
  delete e.executeFullscreenEmscriptenCode;
  return t;
}
export function $$d3({
  callMain: e,
  tsApisForCpp: t,
  registerRefreshCallback: r,
  leakBindings: s
}) {
  let o = getGlobalThis();
  try {
    o.tsapi_init = (e, t) => {
      initializeAppBindings(e);
      r?.(t);
    };
    o.tsApisForCpp = t;
    a.jsHelpers = t.jsHelpers;
    e();
  } finally {
    s || (delete o.tsapi_init, delete o.tsApisForCpp);
  }
}
export const N4 = $$o0;
export const eS = $$l1;
export const iL = $$s2;
export const jS = $$d3;