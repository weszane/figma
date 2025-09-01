import { z } from "../vendor/206180";
import a from "../vendor/812650";
(function (A) {
  A.NODE = "NODE";
  A.WEB = "WEB";
})($$D0 || ($$D0 = {}));
let g = () => {};
let $$Q6 = (...A) => g(...A);
let $$C1 = A => g = A;
let E = (A, I) => {
  let B = {
    ...A,
    __asm_module_isInitialized__: !1,
    onRuntimeInitialized: null,
    initializeRuntime: null
  };
  I && ($$Q6("constructModule: binaryRemoteEndpoint found, override locateFile function"), B.locateFile = A => `${I}/${A}`);
  B.initializeRuntime = (A = 3e3) => B.__asm_module_isInitialized__ ? Promise.resolve(!0) : new Promise((I, g) => {
    let C = setTimeout(() => I(!1), A);
    B.onAbort = A => {
      if (!B.__asm_module_isInitialized__) {
        clearTimeout(C);
        $$Q6("initializeRuntime: failed to initialize module", A);
        return A instanceof Error ? A : Error(A);
      }
    };
    B.onRuntimeInitialized = () => {
      clearTimeout(C);
      B.__asm_module_isInitialized__ = !0;
      $$Q6("initializeRuntime: successfully initialized module");
      I(!0);
    };
  });
  return B;
};
let $$i2 = (A, I, B, {
  timeout: g,
  binaryRemoteEndpoint: C
} = {}) => async () => {
  let i = E(B || {}, C);
  $$Q6("loadModule: constructed module object for runtime");
  try {
    let B = I(i);
    if (!(await B.initializeRuntime(g))) {
      $$Q6("loadModule: failed to initialize runtime in time");
      return Error("Timeout to initialize runtime");
    }
    $$Q6("loadModule: initialized wasm binary Runtime");
    return A(B);
  } catch (A) {
    $$Q6("loadModule: failed to initialize wasm binary runtime");
    return A;
  }
};
var $$D0;
let $$w4 = () => {
  let A = z.process;
  return !!A && "object" == typeof A && !!A.versions && "object" == typeof A.versions && void 0 !== A.versions.node;
};
let $$s5 = () => !!z.WebAssembly && !!z.WebAssembly.compile && !!z.WebAssembly.instantiate;
let $$t3 = (A, I, B) => {
  try {
    let g = A.stat(I);
    let C = "dir" === B ? A.isDir : A.isFile;
    if (g && C(g.mode)) {
      $$Q6(`isMounted: ${I} is mounted`);
      return !0;
    }
  } catch (A) {
    "ENOENT" !== A.code && $$Q6("isMounted check failed", A);
  }
  return !1;
};
let $$y7 = (A, I) => {
  I.split("/").filter(A => !!A).reduce((A, I) => (A.push(`${A.length > 0 ? A[A.length - 1] : ""}/${I}`), A), []).forEach(I => {
    try {
      A.mkdir(I);
    } catch (A) {
      if (17 != A.errno) throw A;
    }
  });
};
let $$F8 = (A, I) => (B, g) => {
  let C = g || a(45);
  let E = `${I}/${C}`;
  $$t3(A, E, "file") ? $$Q6("mountTypedArrayFile: file is already mounted, return it") : A.writeFile(E, B, {
    encoding: "binary"
  });
  return E;
};
let $$R9 = () => {
  throw Error("not supported");
};
let $$L10 = (A, I) => B => {
  if ($$t3(A, B, "file") && B.indexOf(I) > -1) {
    $$Q6(`unmount: ${B} is typedArrayFile, unlink from memory`);
    A.unlink(B);
    return;
  }
  if ($$t3(A, B, "dir")) {
    $$Q6(`unmount: ${B} is directory, unmount`);
    A.unmount(B);
    A.rmdir(B);
    return;
  }
};
export const ENVIRONMENT = $$D0;
export const enableLogger = $$C1;
export const getModuleLoader = $$i2;
export const isMounted = $$t3;
export const isNode = $$w4;
export const isWasmEnabled = $$s5;
export const log = $$Q6;
export const mkdirTree = $$y7;
export const mountBuffer = $$F8;
export const mountDirectory = $$R9;
export const unmount = $$L10;