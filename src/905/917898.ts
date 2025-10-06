import { PluginHelpers } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { I as _$$I } from "../905/117966";
import { fetchDynamicConfig } from "../figma_app/594947";
import { isInteractionPathCheck } from "../figma_app/897289";
import { fullscreenValue } from "../figma_app/455680";
import { widgetInteractionTracker } from "../905/223332";
import { setStackInvariantCallback } from "../figma_app/603466";
import { nB, AK } from "../905/642684";
import { Nq } from "../905/266529";
import { n as _$$n } from "../905/347702";
import { isIpadDevice, BrowserInfo } from "../figma_app/778880";
import { v as _$$v } from "../905/516963";
import { ServiceCategories } from "../905/165054";
import { reportError } from "../905/11";
import { PluginError, PluginWrapper, PLUGIN_CLOSED_ERROR } from "../905/572400";
import { n as _$$n2 } from "../905/823050";
import { z as _$$z2 } from "../905/239603";
import { validateWithZSchema, mergeDefaults } from "../905/816730";
import { FigmaSchema } from "../905/125137";
import { createPluginInstance, defineAlertFunction } from "../905/472793";
import { NoOpVm } from "../905/700654";
import K from "../905/536567";
import { FetchPlugin } from "../figma_app/985200";
import { JX } from "../905/104019";
let n;
var r;
var a;
let y = {};
let b = new Set(["arguments", "await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "eval", "export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "new", "null", "package", "", "protected", "public", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"]);
let v = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
class I {
  constructor(e, t, i) {
    this.api = e;
    this.vmWasDestroyed = i;
    this.valuesToHandles = new Map();
    this.getOwnPropertyDescriptors = e.evalCode("Object.getOwnPropertyDescriptors");
    this.hasOwnProperty = e.evalCode("Object.hasOwnProperty");
    this.newMap = e.evalCode("(Map => () => new Map)(Map)");
    this.mapGet = e.evalCode("Map.prototype.get");
    this.mapSet = e.evalCode("Map.prototype.set");
    e.retainHandle(this.getOwnPropertyDescriptors);
    e.retainHandle(this.hasOwnProperty);
    e.retainHandle(this.newMap);
    e.retainHandle(this.mapGet);
    e.retainHandle(this.mapSet);
    let n = e.newObject();
    for (let i in e.setPropStr(e.global, "console", n), t) e.setPropStr(n, i, e.newFunction(i, (...e) => {
      try {
        t[i](...this.cloneArguments(e));
      } catch (e) {
        t.error(e);
        return e;
      }
    }));
  }
  createHandleToValueMap() {
    let e = this.api;
    let t = e.callFunction(this.newMap, e.$$null, []);
    let i = [];
    return {
      get: n => {
        let r = e.callFunction(this.mapGet, t, [n]);
        return e.isNumber(r) ? i[e.getNumber(r)] : y;
      },
      set: (n, r) => {
        let a = i.length;
        e.callFunction(this.mapSet, t, [n, e.newNumber(a)]);
        i.push(r);
      }
    };
  }
  cloneArguments(e) {
    let t = this.createHandleToValueMap();
    let i = [];
    for (let n of e) i.push(this.cloneValue(t, n));
    return i;
  }
  cloneValue(e, t) {
    let i = e.get(t);
    if (i !== y) return i;
    let n = this.api;
    switch (n.$$typeof(t)) {
      case "undefined":
        return;
      case "boolean":
        return n.getBoolean(t);
      case "number":
        return n.getNumber(t);
      case "string":
        return n.getString(t);
      default:
        if (n.isNull(t)) return null;
        if (n.isUint8Array(t)) {
          let i = n.getUint8Array(t);
          e.set(t, i);
          return i;
        }
        if (n.isFunction(t)) {
          var r;
          let i = "";
          try {
            i = n.getString(n.getPropStr(t, "name"));
          } catch (e) { }
          let a = function () { };
          if (r = i, v.test(r) && !b.has(r)) try {
            a = Function(`return function ${i}() {}`)();
          } catch (e) { }
          e.set(t, a);
          return a;
        }
        if (n.isArray(t)) {
          let i = n.getNumber(n.getPropStr(t, "length"));
          let r = [];
          e.set(t, r);
          for (let a = 0; a < i; a++) r.push(this.cloneValue(e, n.getPropStr(t, a.toString())));
          return r;
        }
        return this.cloneObjectWithProperties(e, t);
    }
  }
  cloneObjectWithProperties(e, t) {
    let i = this.api;
    let n = i.callFunction(this.getOwnPropertyDescriptors, i.$$null, [t]);
    let r = {};
    e.set(t, r);
    i.retainHandle(t);
    this.valuesToHandles.set(r, t);
    let a = i.getProto(t);
    for (let s of (Object.setPrototypeOf(r, this.cloneValue(e, a)), i.getOwnKeys(n))) {
      let a = i.getPropStr(n, s);
      let o = i.getBoolean(i.getPropStr(a, "enumerable"));
      let l = i.getPropStr(a, "get");
      let d = i.getPropStr(a, "set");
      let c = !i.isUndefined(l);
      let u = !i.isUndefined(d);
      if (!c && !u) {
        Object.defineProperty(r, s, {
          value: this.cloneValue(e, i.getPropStr(t, s)),
          enumerable: o
        });
        continue;
      }
      let p = {
        enumerable: o
      };
      if (c) {
        i.retainHandle(l);
        let e = this;
        p.get = function () {
          if (e.vmWasDestroyed()) throw Error("(this plugin run has ended)");
          let n = e.valuesToHandles.get(this);
          void 0 === n && (n = t);
          let r = i.callFunction(l, n, []);
          let a = e.createHandleToValueMap();
          return e.cloneValue(a, r);
        };
      }
      u && (p.set = () => { });
      Object.defineProperty(r, s, p);
    }
    return r;
  }
}
let C = ["unknown", "undefined", "boolean", "number", "string", "symbol", "function", "object"];
async function T(e) {
  let t = new Map();
  let i = new Map();
  let n = e.string_to_ptr;
  let r = e.ptr_to_string;
  let a = 1;
  function s(t) {
    if (e._jsvm_didThrow()) {
      let t = e._jsvm_lastThrow();
      let i = r(e._jsvm_toString(t));
      e._jsvm_didThrow() && (i = "Unknown error");
      return new PluginError(i, t);
    }
    return t;
  }
  e.invokeCallback = (e, i, n) => {
    let r = t.get(e);
    if (void 0 === r) throw Error(`Attempted to invoke callback with invalid id ${e}`);
    for (; n.length < r.length;) n.push(d.undefined);
    let a = r.apply(i, n);
    return void 0 === a ? d.undefined : a;
  };
  e.getRegisteredFunctionName = e => i.get(e);
  let o = !1;
  function l() {
    o || (o = !0, Promise.resolve().then(() => {
      o = !1;
      e._jsvm_runMicrotasksAndAutorelease();
    }));
  }
  let d = {
    reset() {
      try {
        a = 1;
        t.clear();
        e._jsvm_reset();
      } catch (e) {
        P();
        reportError(ServiceCategories.EXTENSIBILITY, e);
        return e;
      }
    },
    retainHandle(t) {
      l();
      s(e._jsvm_retainHandle(t));
    },
    releaseHandle(t) {
      l();
      s(e._jsvm_releaseHandle(t));
    },
    get onAbort() {
      return e.onAbort;
    },
    set onAbort(val) {
      e.onAbort = val;
    },
    get null() {
      l();
      return e._jsvm_nullHandle();
    },
    get undefined() {
      l();
      return e._jsvm_undefinedHandle();
    },
    get global() {
      l();
      return e._jsvm_globalHandle();
    },
    typeof: t => (l(), C[e._jsvm_typeof(t)]),
    isNumber: t => (l(), !!e._jsvm_isNumber(t)),
    isBoolean: t => (l(), !!e._jsvm_isBoolean(t)),
    isString: t => (l(), !!e._jsvm_isString(t)),
    isNull: t => (l(), !!e._jsvm_isNull(t)),
    isUndefined: t => (l(), !!e._jsvm_isUndefined(t)),
    isObject: t => (l(), !!e._jsvm_isObject(t)),
    isArray: t => (l(), !!e._jsvm_isArray(t)),
    isArrayBuffer: t => (l(), !!e._jsvm_isArrayBuffer(t)),
    isUint8Array: t => (l(), !!e._jsvm_isUint8Array(t)),
    isFunction: t => (l(), !!e._jsvm_isFunction(t)),
    shallowFreezeObject: t => (l(), e._jsvm_shallowFreezeObject(t)),
    getNumber: t => (l(), s(e._jsvm_getNumber(t))),
    getBoolean: t => (l(), !!s(e._jsvm_getBoolean(t))),
    getString: t => (l(), s(r(e._jsvm_getString(t)))),
    getArrayBuffer: t => (l(), s(e.ptr_to_arraybuffer(e._jsvm_getArrayBuffer(t)))),
    getUint8Array: t => (l(), s(e.ptr_to_uint8array(e._jsvm_getUint8Array(t)))),
    toNumber: t => (l(), s(e._jsvm_toNumber(t))),
    toBoolean: t => (l(), !!s(e._jsvm_toBoolean(t))),
    toString: t => (l(), s(r(e._jsvm_toString(t)))),
    newNumber: t => (l(), e._jsvm_newNumber(t)),
    newBoolean: t => (l(), e._jsvm_newBoolean(t)),
    newString: t => (l(), e._jsvm_newString(n(t))),
    newObject: t => (l(), t) ? s(e._jsvm_newObjectWithProto(t)) : e._jsvm_newObject(),
    newArray: () => (l(), e._jsvm_newArray()),
    newArrayBuffer: t => (l(), e._jsvm_newArrayBuffer(e.arraybuffer_to_ptr(t))),
    newUint8Array: t => (l(), e._jsvm_newUint8Array(e.uint8array_to_ptr(t))),
    newFunction(r, s) {
      l();
      let o = a++;
      t.set(o, s);
      i.set(o, r);
      return e._jsvm_newFunction(n(r), o);
    },
    getProto: t => (l(), e._jsvm_getProto(t)),
    getOwnKeys(t) {
      l();
      let i = [];
      for (let n of e.ptr_to_int_array(e._jsvm_getOwnKeys(t))) i.push(r(n));
      return i;
    },
    getPropStr: (t, i) => (l(), s(e._jsvm_getPropStr(t, n(i)))),
    setPropStr(t, i, r) {
      l();
      s(e._jsvm_setPropStr(t, n(i), r));
    },
    definePropStr(t, i, r) {
      if (l(), ("get" in r || "set" in r) && !("value" in r || "writable" in r)) s(e._jsvm_accessorDefinePropStr(t, n(i), void 0 === r.get ? d.undefined : d.newFunction("get_" + i, r.get), void 0 === r.set ? d.undefined : d.newFunction("set_" + i, r.set), !!r.configurable, !!r.enumerable)); else {
        if ("get" in r || "set" in r) {
          Object.defineProperty({}, i, r);
          return TypeError("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
        }
        s(e._jsvm_dataDefinePropStr(t, n(i), void 0 === r.value ? d.undefined : r.value, !!r.writable, !!r.configurable, !!r.enumerable));
      }
    },
    isEqual: (t, i) => (l(), !!e._jsvm_isEqual(t, i)),
    callFunction: (t, i, n) => (l(), s(e._jsvm_callFunction(t, i, e.int_array_to_ptr(n)))),
    evalCode: t => (l(), s(e._jsvm_evalCode(n(t))))
  };
  return d;
}
let k = null;
let R = null;
async function N() {
  k || (k = new Promise((e, t) => {
    let i = document.createElement("script");
    i.onerror = () => {
      document.head.removeChild(i);
      t(Error("Failed to load plugin sandbox"));
    };
    _$$v.getFeatureGate("ext_jsvm_cpp_upgrade") ? i.onload = async () => {
      let t = await CppVm({
        wasmBinaryFile: Fig.jsvmCppURLs["jsvm-cpp.wasm"],
        locateFile: e => {
          if ("jsvm-cpp.wasm" === e) return Fig.jsvmCppURLs["jsvm-cpp.wasm"];
          throw Error(`This override is only implemented to located jsvm-cpp.wasm, please handle ${e}`);
        }
      });
      CppVm = () => Promise.reject();
      e({
        Module: t
      });
    } : i.onload = () => {
      let t = {
        wasmBinaryFile: Fig.jsvmCppURLs["jsvm-cpp.wasm"],
        locateFile: e => {
          if ("jsvm-cpp.wasm" === e) return Fig.jsvmCppURLs["jsvm-cpp.wasm"];
          throw Error(`This override is only implemented to located jsvm-cpp.wasm, please handle ${e}`);
        },
        postRun() {
          setTimeout(() => {
            e({
              Module: t
            });
          });
        }
      };
      CppVm(t);
      CppVm = () => Promise.reject();
    };
    i.src = Fig.jsvmCppURLs["jsvm-cpp.js"];
    document.head.appendChild(i);
  }).catch(e => {
    k = null;
    return e;
  }));
  let {
    Module
  } = await k;
  R || (R = T(Module));
  return R;
}
function P() {
  k = null;
  R = null;
  CppVm = void 0;
}
let O = /^(.*)\bimport\s*(\(|\/\/|\/\*|<!--|-->)/m;
function D(e) {
  let t = O.exec(e);
  if (t) {
    let e = t[1].split("\n").length;
    throw SyntaxError(`possible import expression rejected around line ${e}`);
  }
}
let F = {};
for (let e of ["log", "error", "assert", "info", "warn", "clear"]) F[e] = console[e].bind(console);
let M = null;
let j = ["window", "document", "indexedDB", "atob", "btoa"];
class U extends PluginWrapper {
  _abortHandler = () => { };
  _errorHandler = () => { };
  constructor() {
    this.vmType = "cppvm";
    this._isDestroyed = !1;
    this._stats = null;
    this._executionDepth = 0;
    if (super(), !n) throw Error("Must await CppVm.load() first");
    if (null !== M) throw Error("Cannot create two CppVm objects at the same time");
    try {
      n.reset();
    } catch (e) {
      n = void 0;
      return e;
    }
    for (let e of (M = this, this._promiseFactory = n.evalCode(`(Promise => () => {
      let resolve, reject, promise = new Promise((res, rej) => {
        resolve = res, reject = rej;
      });
      return {resolve, reject, promise};
    })(Promise)`), n.retainHandle(this._promiseFactory), this._symbolConstructor = n.evalCode("Symbol"), n.retainHandle(this._symbolConstructor), n.evalCode(`
      this.eval = (function() {
        let __figma_scope_factory__ = ((eval, objectCreate, objectDefineProp) => () => {
          let scope = objectCreate(null)
          objectDefineProp(scope, 'eval', {
            get: function() {
              delete this.eval
              return eval
            },
            configurable: true,
          })
          return scope
        })(eval, Object.create, Object.defineProperty)
        return function() {
          with(__figma_scope_factory__()) {
            let __figma_scope_factory__
            return (function() {
              "use strict"
              return eval(arguments[0])
            }).call(this, arguments[0])
          }
        }.bind(arguments[0])
      })(this)
    `), new I(n, F, () => this._isDestroyed), j)) n.definePropStr(n.global, e, {
      value: n.undefined,
      enumerable: !1,
      metricsKey: e
    });
    n.onAbort = () => {
      this._abortHandler(Error().stack || "");
    };
  }
  get null() {
    this._failIfDestroyed();
    return n.$$null;
  }
  get undefined() {
    this._failIfDestroyed();
    return n.undefined;
  }
  get global() {
    this._failIfDestroyed();
    return n.global;
  }
  typeof(e) {
    this._failIfDestroyed();
    return n.$$typeof(e);
  }
  isNumber(e) {
    this._failIfDestroyed();
    return n.isNumber(e);
  }
  isBoolean(e) {
    this._failIfDestroyed();
    return n.isBoolean(e);
  }
  isString(e) {
    this._failIfDestroyed();
    return n.isString(e);
  }
  isNull(e) {
    this._failIfDestroyed();
    return n.isNull(e);
  }
  isUndefined(e) {
    this._failIfDestroyed();
    return n.isUndefined(e);
  }
  isObject(e) {
    this._failIfDestroyed();
    return n.isObject(e);
  }
  isArray(e) {
    this._failIfDestroyed();
    return n.isArray(e);
  }
  isArrayBuffer(e) {
    this._failIfDestroyed();
    return n.isArrayBuffer(e);
  }
  isUint8Array(e) {
    this._failIfDestroyed();
    return n.isUint8Array(e);
  }
  isFunction(e) {
    this._failIfDestroyed();
    return n.isFunction(e);
  }
  shallowFreezeObject(e) {
    this._failIfDestroyed();
    n.shallowFreezeObject(e);
  }
  getNumber(e) {
    this._failIfDestroyed();
    return n.getNumber(e);
  }
  getBoolean(e) {
    this._failIfDestroyed();
    return n.getBoolean(e);
  }
  getString(e) {
    this._failIfDestroyed();
    return n.getString(e);
  }
  getArrayBuffer(e) {
    this._failIfDestroyed();
    return n.getArrayBuffer(e);
  }
  getUint8Array(e) {
    this._failIfDestroyed();
    return n.getUint8Array(e);
  }
  toNumber(e) {
    this._failIfDestroyed();
    return n.toNumber(e);
  }
  toBoolean(e) {
    this._failIfDestroyed();
    return n.toBoolean(e);
  }
  toString(e) {
    this._failIfDestroyed();
    return n.toString(e);
  }
  newNumber(e) {
    if (this._failIfDestroyed(), "number" != typeof e) throw Error("Value is not a number");
    return n.newNumber(e);
  }
  newBoolean(e) {
    if (this._failIfDestroyed(), "boolean" != typeof e) throw Error("Value is not a boolean");
    return n.newBoolean(e);
  }
  newString(e) {
    if (this._failIfDestroyed(), "string" != typeof e) throw Error("Value is not a string");
    return n.newString(e);
  }
  newSymbol(e) {
    if (this._failIfDestroyed(), "string" != typeof e) throw Error("Symbol key is not a string");
    return n.callFunction(this._symbolConstructor, n.$$null, [n.newString(e)]);
  }
  newObject(e) {
    this._failIfDestroyed();
    return n.newObject(e);
  }
  newArray() {
    this._failIfDestroyed();
    return n.newArray();
  }
  newArrayBuffer(e) {
    if (this._failIfDestroyed(), "[object ArrayBuffer]" !== Object.prototype.toString.call(e)) throw Error("Value is not an ArrayBuffer");
    return n.newArrayBuffer(e);
  }
  newUint8Array(e) {
    if (this._failIfDestroyed(), "[object Uint8Array]" === Object.prototype.toString.call(e) && ArrayBuffer.isView(e)) return n.newUint8Array(e);
    throw Error("Value is not an Uint8Array");
  }
  newFunction(e, t) {
    if (this._failIfDestroyed(), "function" != typeof t) throw Error("Value is not a function");
    return n.newFunction(e, t);
  }
  newPrototype(e) {
    let t = this.evalTrustedCode(`(function ${e}() {}).prototype`);
    if ("SUCCESS" !== t.type) throw Error("Internal eval error");
    return t.handle;
  }
  newJsxRenderer(e) {
    this._failIfDestroyed();
    return n.evalCode(_$$n2(e));
  }
  newPromise() {
    this._failIfDestroyed();
    let e = n.callFunction(this._promiseFactory, n.$$null, []);
    let t = n.getPropStr(e, "resolve");
    let i = n.getPropStr(e, "reject");
    let r = !1;
    function a() {
      r || (r = !0, n.releaseHandle(t), n.releaseHandle(i));
    }
    n.retainHandle(t);
    n.retainHandle(i);
    return {
      promise: n.getPropStr(e, "promise"),
      resolve: e => {
        r || (n.callFunction(t, n.$$null, [e]), a());
      },
      reject: e => {
        r || (n.callFunction(i, n.$$null, [e]), a());
      }
    };
  }
  getKeys(e) {
    this._failIfDestroyed();
    return n.getOwnKeys(e);
  }
  getProp(e, t) {
    this._failIfDestroyed();
    return n.getPropStr(e, t);
  }
  setProp(e, t, i) {
    this._failIfDestroyed();
    n.setPropStr(e, t, i);
  }
  defineProp(e, t, i) {
    this._failIfDestroyed();
    this._stats && ("get" in i || "set" in i) && i.metricsKey && (i.get && (i.get = this._stats.metricsWrapper("get " + i.metricsKey, i.get)), i.set && (i.set = this._stats.metricsWrapper("set " + i.metricsKey, i.set)));
    n.definePropStr(e, t, i);
  }
  isEqual(e, t) {
    this._failIfDestroyed();
    return n.isEqual(e, t);
  }
  callFunction(e, t, ...i) {
    this._failIfDestroyed();
    try {
      this._executionDepth++;
      let r = n.callFunction(e, t, i);
      return {
        type: "SUCCESS",
        handle: r
      };
    } catch (e) {
      if (e instanceof PluginError) {
        try {
          F.error(e.message + "\n" + n.toString(n.getPropStr(e.handle, "stack")));
        } catch (t) {
          F.error(e);
        }
        1 === this._executionDepth && this._errorHandler(e);
        return {
          type: "FAILURE",
          error: e
        };
      }
      throw e;
    } finally {
      this._executionDepth--;
    }
  }
  callConstructor(e, ...t) {
    if (this._failIfDestroyed(), !this._constructorHelper) {
      let e = this.evalTrustedCode("(o, ...args) => new o(...args)");
      if ("FAILURE" === e.type) throw Error(`Error creating constructor helper: ${e.error}`);
      this._constructorHelper = e.handle;
      this.retainHandle(this._constructorHelper);
    }
    return this.callFunction(this._constructorHelper, this.undefined, e, ...t);
  }
  evalCodeInternal(e) {
    this._failIfDestroyed();
    try {
      this._executionDepth++;
      let t = n.evalCode(e);
      return {
        type: "SUCCESS",
        handle: t
      };
    } catch (e) {
      if (e instanceof PluginError) {
        try {
          F.error(e.message + "\n" + n.toString(n.getPropStr(e.handle, "stack")));
        } catch (t) {
          F.error(e);
        }
        1 === this._executionDepth && this._errorHandler(e);
        return {
          type: "FAILURE",
          error: e
        };
      }
      throw e;
    } finally {
      this._executionDepth--;
    }
  }
  evalCode(e) {
    D(e);
    return this.evalCodeInternal(`eval(${JSON.stringify(e)})`);
  }
  evalTopLevelCode(e) {
    D(e);
    return this.evalCodeInternal(`(function() { "use strict"; ${e} }).call(this)`);
  }
  evalTrustedCode(e) {
    return this.evalCode(e);
  }
  evalTrustedTopLevelCode(e) {
    return this.evalTopLevelCode(e);
  }
  setAbortHandler(e) {
    this._abortHandler = e;
  }
  setErrorHandler(e) {
    this._errorHandler = e;
  }
  getStats() {
    return this._stats;
  }
  setStats(e) {
    this._stats = e;
  }
  destroy() {
    this._isDestroyed || (M === this && (M = null), n.reset(), (isIpadDevice || BrowserInfo.safari) && (n = void 0, P()), this._isDestroyed = !0);
  }
  isDestroyed() {
    return this._isDestroyed;
  }
  _failIfDestroyed() {
    if (this._isDestroyed) throw Error("This VM has been destroyed");
  }
  retainHandle(e) {
    n.retainHandle(e);
  }
  releaseHandle(e) {
    n.releaseHandle(e);
  }
}
async function B() {
  n || (n = await N());
}
let Y = null;
let q = null;
let $ = URL.createObjectURL(new Blob([K], {
  type: "application/javascript"
}));
let Z = ["log", "error", "assert", "info", "warn", "clear"];
let X = {};
for (let e of Z) X[e] = console[e].bind(console);
let Q = Symbol("internal");
let J = Symbol("wasDestroyed");
let ee = Function.prototype.apply;
function et(e, t) {
  if (e[J]) throw Error(PLUGIN_CLOSED_ERROR);
  if ("object" == typeof t && null !== t && Q in t) throw Error("Wrapping a handle twice!");
  return {
    [Q]: t
  };
}
function ei(e, t) {
  if (e[J]) throw Error(PLUGIN_CLOSED_ERROR);
  if ("object" != typeof t || null === t || !(Q in t)) throw Error("The provided value is not a handle");
  return t[Q];
}
class en extends (a = PluginWrapper, r = J, a) {
  constructor() {
    super();
    this.vmType = "realms";
    this.globalHandle = null;
    this.nullHandle = null;
    this.undefinedHandle = null;
    this[r] = !1;
    this.errorHandler = () => { };
    this.executionDepth = 0;
    let {
      realm,
      iframe
    } = function () {
      if (!q || !q.contentWindow || !q.contentWindow.Realm) throw Error("need to load realm before using it");
      let e = q.contentWindow.document.body.lastChild;
      let t = q.contentWindow.Realm.makeRootRealm();
      let i = q.contentWindow.document.body.lastChild;
      if (e === i || !i || "IFRAME" !== i.nodeName) throw Error("can't find iframe to create plugin environment");
      return {
        realm: t,
        iframe: i
      };
    }();
    this.realm = realm;
    this.iframe = iframe;
    let {
      safeFunctionWrapper,
      objectCreate,
      arrayBufferCopy,
      uint8ArrayCopy,
      emptyObject,
      emptyArray,
      promiseCreate
    } = this.realm.evaluate(`
      ({
        safeFunctionWrapper: (outerRealmUnsafeFunction, functionName) => {
          // This function is safe because it is created here inside the realm.
          const innerRealmSafeFunction = function innerRealmSafeFunction(...innerRealmArgs) {
            try {
              return outerRealmUnsafeFunction(this, ...innerRealmArgs)
            } catch (outerRealmException) {
              let outerMessage = ''
              try {
                // This nested try-catch exists because it's theoretically possible for .message
                // to throw an error from the outer realm if it's a getter or an object whose
                // toString() throws an error.
                if (outerRealmException && outerRealmException.message) {
                  outerMessage =  ": " + outerRealmException.message
                }
              } catch(ignored) {
                throw new Error('API error trying to convert error message -- please contact support')
              }

              // We need to re-throw a new error object created in the inner realm
              // so that it's safe for the plugin to look at
              throw new Error('in ' + functionName + outerMessage)
            }
          }
          return innerRealmSafeFunction
        },
        objectCreate: (() => {
          // Wrap Object.create so it can't be modified and can't be accessed by the plugin
          let objCreate = Object.create
          return (prototype) => {
            return objCreate(prototype)
          }
        })(),
        arrayBufferCopy: (() => {
          // Wrap ArrayBuffer so it can't be modified by the plugin
          let arrayConstructor = ArrayBuffer
          return (outerRealmArray) => {
            return arrayConstructor.prototype.slice.call(outerRealmArray, 0)
          }
        })(),
        uint8ArrayCopy: (() => {
          // Wrap Uint8Array so it can't be modified by the plugin
          let arrayConstructor = Uint8Array
          return (outerRealmArray) => {
            return new arrayConstructor(outerRealmArray)
          }
        })(),
        emptyObject: () => {
          return {}
        },
        emptyArray: () => {
          return []
        },
        promiseCreate: (() => {
          const promiseCtor = Promise
          return () => {
            let resolve
            let reject
            const promise = new promiseCtor((innerResolve, innerReject) => {
              resolve = innerResolve
              reject = innerReject
            })
            return {
              promise,
              resolve,
              reject,
            }
          }
        })(),
      })
    `);
    let c = (e, t, n) => {
      let r = safeFunctionWrapper((e, ...i) => {
        let r = et(this, e);
        let a = n ? i.map(e => et(this, e)) : i;
        if (n) for (; a.length < t.length;) a.push(et(this, void 0));
        let s = t.apply(r, a);
        return void 0 === s ? void 0 : ei(this, s);
      }, e);
      Object.defineProperty(r, "name", {
        value: e,
        writable: !1
      });
      return r;
    };
    this.outerToInnerFunctionTransformer = (e, t) => c(e, t, !0);
    this.objectFactory = objectCreate;
    this.arrayBufferFactory = arrayBufferCopy;
    this.uint8ArrayFactory = uint8ArrayCopy;
    this.emptyObjectFactory = emptyObject;
    this.emptyArrayFactory = emptyArray;
    this.promiseFactory = promiseCreate;
    this.globalHandle = et(this, this.realm.global);
    this.nullHandle = et(this, null);
    this.undefinedHandle = et(this, void 0);
    let u = this.newObject();
    for (let e of (this.setProp(this.global, "console", u), Z)) this.setProp(u, e, et(this, c(e, X[e], !1)));
  }
  get global() {
    if (this.globalHandle) return this.globalHandle;
    throw Error("no global handle");
  }
  get null() {
    if (this.nullHandle) return this.nullHandle;
    throw Error("no null handle");
  }
  get undefined() {
    if (this.undefinedHandle) return this.undefinedHandle;
    throw Error("no undefined handle");
  }
  typeof(e) {
    return typeof ei(this, e);
  }
  isNumber(e) {
    return "number" == typeof ei(this, e);
  }
  isBoolean(e) {
    return "boolean" == typeof ei(this, e);
  }
  isString(e) {
    return "string" == typeof ei(this, e);
  }
  isNull(e) {
    return null === ei(this, e);
  }
  isUndefined(e) {
    return void 0 === ei(this, e);
  }
  isObject(e) {
    let t = ei(this, e);
    return "object" == typeof t && null !== t;
  }
  isArray(e) {
    return Array.isArray(ei(this, e));
  }
  isArrayBuffer(e) {
    let t = ei(this, e);
    return "[object ArrayBuffer]" === Object.prototype.toString.call(t);
  }
  isUint8Array(e) {
    let t = ei(this, e);
    return "[object Uint8Array]" === Object.prototype.toString.call(t) && ArrayBuffer.isView(t);
  }
  isFunction(e) {
    return "function" == typeof ei(this, e);
  }
  shallowFreezeObject(e) {
    Object.freeze(ei(this, e));
  }
  getNumber(e) {
    let t = ei(this, e);
    if ("number" != typeof t) throw Error("Value is not a number");
    return +t;
  }
  getBoolean(e) {
    let t = ei(this, e);
    if ("boolean" != typeof t) throw Error("Value is not a boolean");
    return !!t;
  }
  getString(e) {
    let t = ei(this, e);
    if ("string" != typeof t) throw Error("Value is not a string");
    return "" + t;
  }
  getArrayBuffer(e) {
    let t = ei(this, e);
    if ("[object ArrayBuffer]" !== Object.prototype.toString.call(t)) throw Error("Value is not a ArrayBuffer");
    return ArrayBuffer.prototype.slice.call(t, 0);
  }
  getUint8Array(e) {
    if (!this.isUint8Array(e)) throw Error("Value is not a Uint8Array");
    let t = ei(this, e);
    try {
      let e = +t.byteOffset;
      let i = +t.byteLength;
      let n = ArrayBuffer.prototype.slice.call(t.buffer, e, e + i);
      return new Uint8Array(n);
    } catch (e) {
      throw new PluginError(this, et(this, e));
    }
  }
  toNumber(e) {
    let t = ei(this, e);
    try {
      return +t;
    } catch (e) {
      throw new PluginError(this, et(this, e));
    }
  }
  toBoolean(e) {
    let t = ei(this, e);
    try {
      return !!t;
    } catch (e) {
      throw new PluginError(this, et(this, e));
    }
  }
  toString(e) {
    let t = ei(this, e);
    try {
      return "" + t;
    } catch (e) {
      throw new PluginError(this, et(this, e));
    }
  }
  newNumber(e) {
    if ("number" != typeof e) throw Error("Value is not a number");
    return et(this, e);
  }
  newBoolean(e) {
    if ("boolean" != typeof e) throw Error("Value is not a boolean");
    return et(this, e);
  }
  newString(e) {
    if ("string" != typeof e) throw Error("Value is not a string");
    return et(this, e);
  }
  newSymbol(e) {
    if ("string" != typeof e) throw Error("Value is not a string");
    return et(this, Symbol(e));
  }
  newObject(e) {
    let t;
    if (!e) return et(this, this.emptyObjectFactory());
    let i = ei(this, e);
    try {
      t = this.objectFactory(i);
    } catch (e) {
      throw new PluginError(this, et(this, e));
    }
    return et(this, t);
  }
  newArray() {
    return et(this, this.emptyArrayFactory());
  }
  newArrayBuffer(e) {
    if ("[object ArrayBuffer]" === Object.prototype.toString.call(e)) return et(this, this.arrayBufferFactory(e));
    throw Error("Value is not an ArrayBuffer");
  }
  newUint8Array(e) {
    if ("[object Uint8Array]" === Object.prototype.toString.call(e) && ArrayBuffer.isView(e)) return et(this, this.uint8ArrayFactory(e));
    throw Error("Value is not an Uint8Array");
  }
  newFunction(e, t) {
    if ("function" != typeof t) throw Error("Value is not a function");
    return et(this, this.outerToInnerFunctionTransformer(e, t));
  }
  newPrototype(e) {
    let t = this.evalTrustedCode(`(function ${e}() {}).prototype`);
    if ("SUCCESS" !== t.type) throw Error("Internal eval error");
    return t.handle;
  }
  newJsxRenderer(e) {
    let t = this.evalTrustedCode(_$$n2(e));
    if ("SUCCESS" !== t.type) throw Error("Failed to create JSX renderer");
    return t.handle;
  }
  newPromise() {
    let {
      promise,
      resolve,
      reject
    } = this.promiseFactory();
    return {
      promise: et(this, promise),
      resolve: e => {
        this.callFunction(et(this, resolve), this.$$null, e);
      },
      reject: e => {
        this.callFunction(et(this, reject), this.$$null, e);
      }
    };
  }
  getKeys(e) {
    let t = ei(this, e);
    if ("object" != typeof t) throw Error("not an object");
    return Object.keys(t);
  }
  getProp(e, t) {
    let i;
    let n = ei(this, e);
    try {
      i = n[t];
    } catch (e) {
      throw new PluginError(this, et(this, e));
    }
    return et(this, i);
  }
  setProp(e, t, i) {
    let n = ei(this, e);
    let r = ei(this, i);
    try {
      n[t] = r;
    } catch (e) {
      throw new PluginError(this, et(this, e));
    }
  }
  defineProp(e, t, i) {
    let n = {};
    "configurable" in i && (n.configurable = !!i.configurable);
    "enumerable" in i && (n.enumerable = !!i.enumerable);
    "writable" in i && (n.writable = !!i.writable);
    "value" in i && i.value && (n.value = ei(this, i.value));
    "get" in i && i.get && (n.get = this.outerToInnerFunctionTransformer("get_" + t, i.get));
    "set" in i && i.set && (n.set = this.outerToInnerFunctionTransformer("set_" + t, i.set));
    Object.defineProperty(ei(this, e), t, n);
  }
  isEqual(e, t) {
    return ei(this, e) === ei(this, t);
  }
  callFunction(e, t, ...i) {
    let n = ei(this, e);
    let r = ei(this, t);
    let a = i.map(e => ei(this, e));
    try {
      this.executionDepth++;
      let e = ee.call(n, r, a);
      return {
        type: "SUCCESS",
        handle: et(this, e)
      };
    } catch (t) {
      X.error(t);
      let e = new PluginError(this, et(this, t));
      1 === this.executionDepth && this.errorHandler(e);
      return {
        type: "FAILURE",
        error: e
      };
    } finally {
      this.executionDepth--;
    }
  }
  callConstructor(e, ...t) {
    let i = et(this, (e, ...t) => new e(...t));
    return this.callFunction(i, this.undefined, e, ...t);
  }
  evalCode(e) {
    try {
      this.executionDepth++;
      let t = this.realm.evaluate(e);
      return {
        type: "SUCCESS",
        handle: et(this, t)
      };
    } catch (t) {
      X.error(t);
      let e = new PluginError(this, et(this, t));
      1 === this.executionDepth && this.errorHandler(e);
      return {
        type: "FAILURE",
        error: e
      };
    } finally {
      this.executionDepth--;
    }
  }
  evalTopLevelCode(e) {
    let t = this.evalCode(e);
    "SUCCESS" === t.type && (t.handle = this.undefined);
    return t;
  }
  evalTrustedCode(e) {
    return this.evalCode(e);
  }
  evalTrustedTopLevelCode(e) {
    return this.evalTopLevelCode(e);
  }
  setAbortHandler(e) { }
  setErrorHandler(e) {
    this.errorHandler = e;
  }
  getStats() {
    return null;
  }
  setStats(e) { }
  destroy() {
    this[J] = !0;
    this.iframe.remove();
  }
  isDestroyed() {
    return this[J];
  }
  retainHandle(e) { }
  releaseHandle(e) { }
}
let es = 0;
function eo(e) {
  if (++es > 100) return;
  let {
    message,
    raw_stack,
    apiVersion,
    pluginID
  } = e;
  let a = {
    message,
    ..._$$I(raw_stack),
    pluginID: pluginID || "",
    version: apiVersion
  };
  trackEventAnalytics("plugin_generated_error", a, {
    forwardToDatadog: !0
  });
}
export async function $$el0(e) {
  "cppvm" === e ? await B() : await (Y || (Y = new Promise((e, t) => {
    if ((q = document.createElement("iframe")).style.display = "none", q.onload = () => {
      let i = q.contentDocument;
      let n = i.createElement("script");
      n.src = $;
      n.onload = () => {
        q.contentWindow && q.contentWindow.Realm ? e() : t("failed to load realm");
      };
      i.body.appendChild(n);
    }, document.body.appendChild(q), !q.contentWindow || !q.contentDocument) {
      t("failed to create realm loader");
      return;
    }
  })).catch(() => {
    Y = null;
  }), Y);
}
async function ed(e) {
  return (await $$el0(e), "cppvm" === e) ? new U() : new en();
}
let ec = _$$n(async () => await fetchDynamicConfig("ext_plugindata_limit_exempt_plugins"));
let $$eu1 = _$$n(async e => {
  let t;
  let {
    apiVersion,
    capabilities,
    code,
    command,
    deferRunEvent,
    disableSilenceConsole,
    enablePrivatePluginApi,
    enableProposedApi,
    errorHandler,
    isLocal,
    isWidget,
    name,
    openFileKey,
    parameterValues,
    permissions,
    pluginCounter,
    queryMode,
    securityCheckReporter,
    stats,
    testMessageHandler,
    triggeredFrom,
    userID,
    html,
    incrementalSafeApi,
    allowIncrementalUnsafeApiCalls,
    enableNativeJsx,
    enableResponsiveSetHierarchyMutations
  } = e;
  let M = await ed(e.vmType);
  isWidget && widgetInteractionTracker.didVmStart(window.performance.now());
  let j = await ec();
  M.setErrorHandler(t => {
    let n = "";
    try {
      n = M.toString(t.handle);
    } catch (e) {
      n = "Error: An error was thrown, but couldn't be converted into a string";
    }
    let r = "";
    try {
      r = M.getStringProp(t.handle, "stack");
    } catch (e) {
      r = "Unable to get stack";
    }
    eo({
      message: n,
      raw_stack: r,
      pluginID: e.pluginID,
      apiVersion
    });
    errorHandler && errorHandler(n);
  });
  M.setAbortHandler(n => {
    t({
      message: "Plugin runtime aborted",
      isError: !0
    });
    eo({
      message: "Plugin runtime aborted",
      raw_stack: n,
      pluginID: e.pluginID,
      apiVersion
    });
  });
  M.setStats(stats);
  return {
    runResult: new Promise((A, U) => {
      let B;
      let K = [];
      let Y = async e => {
        let t;
        for (let i of K) try {
          await i(e);
        } catch (e) {
          t || (t = e);
        }
        if (K = [], t) throw t;
      };
      let q = e => {
        K.includes(e) || K.push(e);
      };
      t = async e => {
        let t;
        e && e.isError && (t = Error(e.message));
        try {
          await Y(e?.overriddenBy);
        } catch (e) {
          t = t || e;
          return e;
        } finally {
          t ? U(t) : A(e && e.message);
        }
      };
      disableSilenceConsole || nB();
      B = securityCheckReporter ? {
        type: "SECURITY_CHECK"
      } : isWidget ? {
        type: "WIDGET",
        noOpUI: !1
      } : {
        type: "PLUGIN",
        noOpUI: !1
      };
      let $ = j.get("pluginIds", []);
      let Z = e.pluginID || "";
      let X = createPluginInstance(M, {
        addShutdownAction: getFeatureFlags().plugins_async_on_close_handler ? e => {
          K.includes(e) || K.unshift(e);
        } : q,
        allowedDomains: e.allowedDomains,
        apiMode: B,
        apiVersion,
        capabilities,
        closePlugin: t,
        code,
        command,
        deferRunEvent: deferRunEvent || !1,
        enablePrivatePluginApi,
        enableProposedApi,
        isLocal,
        name,
        openFileKey,
        parameterValues,
        pluginID: Z,
        pluginVersionID: e.pluginVersionID || "",
        queryMode,
        stats,
        titleIconURL: e.titleIconURL || "",
        triggeredFrom,
        userID,
        validatedPermissions: permissions,
        editorType: e.editorType,
        html,
        incrementalSafeApi,
        allowIncrementalUnsafeApiCalls: !!allowIncrementalUnsafeApiCalls,
        enableNativeJsx,
        isPluginExemptFromPluginDataLimits: $.includes(Z),
        enableResponsiveSetHierarchyMutations
      });
      q(() => M.destroy());
      disableSilenceConsole || q(() => AK());
      q(() => fullscreenValue.triggerAction("commit"));
      defineAlertFunction(M, stats, name);
      (function (e, t, i) {
        if (!e.isEqual(e.undefined, e.getProp(e.global, "setTimeout"))) return;
        let n = new Map();
        let r = new Map();
        let a = 1;
        function s(t, i) {
          if (e.isFunction(t)) {
            for (let n of (e.retainHandle(t), i)) e.retainHandle(n);
            let n = !1;
            return {
              release: () => {
                if (!(n || e.isDestroyed())) for (let r of (n = !0, e.releaseHandle(t), i)) e.releaseHandle(r);
              },
              callback: () => {
                n || e.isDestroyed() || e.callFunction(t, e.global, ...i);
              }
            };
          }
          {
            let i = e.toString(t);
            return {
              release: () => { },
              callback: () => e.evalCode(i)
            };
          }
        }
        e.setProp(e.global, "setTimeout", e.newFunction("setTimeout", (i, r, ...o) => {
          null !== t && t.increment("setTimeout");
          let {
            release,
            callback
          } = s(i, o);
          let c = e.toNumber(r);
          let u = a++;
          let p = setTimeout(() => {
            n.$$delete(p);
            callback();
            release();
          }, c);
          n.set(u, {
            release,
            realId: p
          });
          return e.newNumber(u);
        }));
        e.setProp(e.global, "clearTimeout", e.newFunction("clearTimeout", i => {
          null !== t && t.increment("clearTimeout");
          let r = e.toNumber(i);
          let a = n.get(r);
          void 0 !== a && (n.$$delete(r), clearTimeout(a.realId), a.release());
          return e.undefined;
        }));
        e.setProp(e.global, "setInterval", e.newFunction("setInterval", (i, n, ...o) => {
          null !== t && t.increment("setInterval");
          let {
            release,
            callback
          } = s(i, o);
          let c = e.toNumber(n);
          let u = a++;
          let p = setInterval(() => {
            callback();
          }, c);
          r.set(u, {
            release,
            realId: p
          });
          return e.newNumber(u);
        }));
        e.setProp(e.global, "clearInterval", e.newFunction("clearInterval", i => {
          null !== t && t.increment("clearInterval");
          let n = e.toNumber(i);
          let a = r.get(n);
          void 0 !== a && (r.$$delete(n), clearInterval(a.realId), a.release());
          return e.undefined;
        }));
        i(() => {
          for (let {
            realId
          } of n.values()) clearTimeout(realId);
          for (let {
            realId
          } of (n.clear(), r.values())) clearInterval(realId);
          r.clear();
        });
      })(M, stats, q);
      let Q = new FetchPlugin(e.pluginID || "", {
        allowedDomains: e.allowedDomains,
        isLocal
      });
      q(() => Q.destroyIframe());
      (function (e, t, i) {
        e.isEqual(e.undefined, e.getProp(e.global, "fetch")) && e.setProp(e.global, "fetch", e.newFunction("fetch", (n, r) => {
          null !== t && t.increment("fetch");
          let a = validateWithZSchema({
            vm: e,
            handle: n,
            zSchema: _$$z2.string(),
            property: "url"
          });
          let s = validateWithZSchema({
            vm: e,
            handle: r,
            zSchema: FigmaSchema.FetchInitOptions,
            property: "init"
          }) || {};
          let o = mergeDefaults(s, {
            body: null,
            headersObject: {}
          });
          null == o.headers && (o.headers = o.headersObject);
          delete o.headersObject;
          let {
            promise,
            resolve,
            reject
          } = e.newPromise();
          let u = {
            ...o,
            url: a
          };
          e.registerPromise(i.fetch(u)).then(async t => {
            let i = await t._blob.arrayBuffer();
            let n = e.deepWrap({
              headersObject: t.headersObject,
              ok: t.ok,
              redirected: t.redirected,
              status: t.status,
              statusText: t.statusText,
              type: t.type,
              url: t.url
            });
            e.defineFunction(n, "arrayBuffer", "fetchResponse.arrayBuffer", () => {
              let {
                promise,
                resolve
              } = e.newPromise();
              resolve(e.newArrayBuffer(i));
              return promise;
            });
            e.defineFunction(n, "text", "fetchResponse.text", () => {
              let {
                promise,
                resolve
              } = e.newPromise();
              let r = new TextDecoder();
              resolve(e.deepWrap(r.decode(i)));
              return promise;
            });
            e.defineFunction(n, "json", "fetchResponse.json", () => {
              let {
                promise,
                resolve,
                reject
              } = e.newPromise();
              let a = new TextDecoder();
              try {
                let t = a.decode(i);
                let r = JSON.parse(t);
                resolve(e.deepWrap(r));
              } catch (t) {
                reject(t instanceof SyntaxError ? e.deepWrap({
                  message: t.message
                }) : e.deepWrap({
                  message: "Error parsing JSON"
                }));
              }
              return promise;
            });
            e.shallowFreezeObject(n);
            resolve(n);
          }, t => reject(e.deepWrap({
            message: t.message
          })));
          return promise;
        }));
      })(M, stats, Q);
      isInteractionPathCheck() && function (e, t) {
        let i = e.newObject();
        e.setProp(e.global, "__TEST__", i);
        t && (e.defineFunction(i, "sendMessage", null, i => (t.sendMessageToTest(e.toString(i)), e.undefined)), e.defineFunction(i, "onMessage", null, i => {
          if (!e.isFunction(i)) throw Error("onMessage handler must be a function");
          e.retainHandle(i);
          t.sendMessageToPlugin = t => {
            e.isDestroyed() || e.callFunction(i, e.undefined, e.newString(t));
          };
          return e.undefined;
        }), t.ready(() => !e.isDestroyed()));
        e.shallowFreezeObject(i);
      }(M, testMessageHandler);
      securityCheckReporter && M.defineFunction(M.global, "reportSecurityResults", "reportSecurityResults", e => (securityCheckReporter(M.toString(e)), M.undefined));
      let J = new NoOpVm();
      q(() => J.destroy());
      q(JX);
      q(setStackInvariantCallback(e => {
        stats.stackInvariantsEnforced(e);
      }));
      createPluginInstance(J, {
        addShutdownAction: q,
        allowedDomains: e.allowedDomains,
        apiMode: {
          type: "CONSOLE_SHIM",
          uiHandle: X.getUiHandle()
        },
        apiVersion,
        capabilities,
        closePlugin: t,
        command,
        deferRunEvent: deferRunEvent || !1,
        enablePrivatePluginApi,
        enableProposedApi,
        isLocal,
        name,
        openFileKey,
        pluginID: Z,
        pluginVersionID: e.pluginVersionID || "",
        queryMode,
        stats,
        titleIconURL: e.titleIconURL,
        triggeredFrom,
        userID,
        validatedPermissions: permissions,
        editorType: e.editorType,
        html,
        incrementalSafeApi,
        enableNativeJsx,
        isPluginExemptFromPluginDataLimits: $.includes(Z),
        enableResponsiveSetHierarchyMutations
      });
      let ee = code + "\n//# sourceURL=PLUGIN_" + pluginCounter + "_SOURCE\n";
      setTimeout(() => {
        let i;
        if (!securityCheckReporter && Nq() !== pluginCounter) {
          t({
            message: "Plugin already terminated",
            isError: !0
          });
          return;
        }
        securityCheckReporter || (PluginHelpers.prepareToRunPlugin(), q(() => PluginHelpers.finishedRunningPlugin()));
        try {
          if (i = M.evalTopLevelCode(ee), isWidget && isLocal) {
            if (X.hasRegisteredWidget()) testMessageHandler?.widgetRegistered && testMessageHandler.widgetRegistered(); else throw Error("widget missing call to figma.widget.register");
          }
        } catch (i) {
          let e = "Unknown error";
          try {
            e = i + "";
          } catch (e) { }
          t({
            message: e,
            isError: !0
          });
          return;
        } finally {
          stats.markTime("timeToEvalTopLevelCodeMs");
        }
        if (e.isWidget && widgetInteractionTracker.didEvalJSVM(), "FAILURE" === i.type) {
          if (isInteractionPathCheck()) {
            let e = M.toString(i.error.handle);
            t({
              message: e,
              isError: !0
            });
          } else t();
        }
      });
    }),
    closePlugin: t
  };
});
export const a7 = $$el0;
export const ls = $$eu1;
