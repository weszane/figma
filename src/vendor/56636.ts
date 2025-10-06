var i = function (e, r) {
  return (i = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, r) {
    e.__proto__ = r;
  } || function (e, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  })(e, r);
};
export function $$s15(e, r) {
  if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");
  function n() {
    this.constructor = e;
  }
  i(e, r);
  e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
}
export var $$o1 = function () {
  return ($$o1 = Object.assign || function (e) {
    for (n = 1, i = $$arguments.length, void 0; n < i; n++) {
      var r;
      var n;
      var i;
      for (var s in r = $$arguments[n]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }).apply(this, arguments);
};
export function $$a24(e, r) {
  var n = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > r.indexOf(i) && (n[i] = e[i]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) for (s = 0, i = Object.getOwnPropertySymbols(e), void 0; s < i.length; s++) {
    var s;
    var i;
    0 > r.indexOf(i[s]) && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (n[i[s]] = e[i[s]]);
  }
  return n;
}
export function $$h11(e, r, n, i) {
  var s;
  var o = $$arguments.length;
  var a = o < 3 ? r : i;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, r, n, i); else for (var h = e.length - 1; h >= 0; h--) (s = e[h]) && (a = (o < 3 ? s(a) : o > 3 ? s(r, n, a) : s(r, n)) || a);
  o > 3 && a && Object.defineProperty(r, n, a);
  return a;
}
export function $$d21(e, r) {
  return function (n, i) {
    r(n, i, e);
  };
}
export function $$p13(e, r, n, i, s, o) {
  function a(e) {
    if (void 0 !== e && "function" != typeof e) throw TypeError("Function expected");
    return e;
  }
  for (d = i.kind, p = "getter" === d ? "get" : "setter" === d ? "set" : "value", g = !r && e ? i.$$static ? e : e.prototype : null, m = r || (g ? Object.getOwnPropertyDescriptor(g, i.name) : {}), v = !1, y = n.length - 1, void 0; y >= 0; y--) {
    var h;
    var d;
    var p;
    var g;
    var m;
    var v;
    var y;
    var b = {};
    for (var O in i) b[O] = "access" === O ? {} : i[O];
    for (var O in i.access) b.access[O] = i.access[O];
    b.addInitializer = function (e) {
      if (v) throw TypeError("Cannot add initializers after decoration has completed");
      o.push(a(e || null));
    };
    var x = n[y]("accessor" === d ? {
      get: m.get,
      set: m.set
    } : m[p], b);
    if ("accessor" === d) {
      if (void 0 === x) continue;
      if (null === x || "object" != typeof x) throw TypeError("Object expected");
      (h = a(x.get)) && (m.get = h);
      (h = a(x.set)) && (m.set = h);
      (h = a(x.init)) && s.unshift(h);
    } else (h = a(x)) && ("field" === d ? s.unshift(h) : m[p] = h);
  }
  g && Object.defineProperty(g, i.name, m);
  v = !0;
}
export function $$g26(e, r, n) {
  for (i = $$arguments.length > 2, s = 0, void 0; s < r.length; s++) {
    var i;
    var s;
    n = i ? r[s].call(e, n) : r[s].call(e);
  }
  return i ? n : void 0;
}
export function $$m22(e) {
  return "symbol" == typeof e ? e : "".concat(e);
}
export function $$v27(e, r, n) {
  "symbol" == typeof r && (r = r.description ? "[".concat(r.description, "]") : "");
  return Object.defineProperty(e, "name", {
    configurable: !0,
    value: n ? "".concat(n, " ", r) : r
  });
}
export function $$y20(e, r) {
  if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, r);
}
export function $$b6(e, r, n, i) {
  function s(e) {
    return e instanceof n ? e : new n(function (r) {
      r(e);
    });
  }
  return new (n || (n = Promise))(function (n, o) {
    function a(e) {
      try {
        d(i.next(e));
      } catch (e) {
        o(e);
      }
    }
    function h(e) {
      try {
        d(i.$$throw(e));
      } catch (e) {
        o(e);
      }
    }
    function d(e) {
      e.done ? n(e.value) : s(e.value).then(a, h);
    }
    d((i = i.apply(e, r || [])).next());
  });
}
export function $$O16(e, r) {
  var n;
  var i;
  var s;
  var o = {
    label: 0,
    sent: function () {
      if (1 & s[0]) throw s[1];
      return s[1];
    },
    trys: [],
    ops: []
  };
  var a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
  a.next = h(0);
  a.$$throw = h(1);
  a.$$return = h(2);
  "function" == typeof Symbol && (a[Symbol.iterator] = function () {
    return this;
  });
  return a;
  function h(e) {
    return function (r) {
      return d([e, r]);
    };
  }
  function d(h) {
    if (n) throw TypeError("Generator is already executing.");
    for (; a && (a = 0, h[0] && (o = 0)), o;) try {
      if (n = 1, i && (s = 2 & h[0] ? i.$$return : h[0] ? i.$$throw || ((s = i.$$return) && s.call(i), 0) : i.next) && !(s = s.call(i, h[1])).done) return s;
      switch (i = 0, s && (h = [2 & h[0], s.value]), h[0]) {
        case 0:
        case 1:
          s = h;
          break;
        case 4:
          o.label++;
          return {
            value: h[1],
            done: !1
          };
        case 5:
          o.label++;
          i = h[1];
          h = [0];
          continue;
        case 7:
          h = o.ops.pop();
          o.trys.pop();
          continue;
        default:
          if (!(s = (s = o.trys).length > 0 && s[s.length - 1]) && (6 === h[0] || 2 === h[0])) {
            o = 0;
            continue;
          }
          if (3 === h[0] && (!s || h[1] > s[0] && h[1] < s[3])) {
            o.label = h[1];
            break;
          }
          if (6 === h[0] && o.label < s[1]) {
            o.label = s[1];
            s = h;
            break;
          }
          if (s && o.label < s[2]) {
            o.label = s[2];
            o.ops.push(h);
            break;
          }
          s[2] && o.ops.pop();
          o.trys.pop();
          continue;
      }
      h = r.call(e, o);
    } catch (e) {
      h = [6, e];
      i = 0;
    } finally {
        n = s = 0;
      }
    if (5 & h[0]) throw h[1];
    return {
      value: h[0] ? h[1] : void 0,
      done: !0
    };
  }
}
export var $$x10 = Object.create ? function (e, r, n, i) {
  void 0 === i && (i = n);
  var s = Object.getOwnPropertyDescriptor(r, n);
  (!s || ("get" in s ? !r.__esModule : s.writable || s.configurable)) && (s = {
    enumerable: !0,
    get: function () {
      return r[n];
    }
  });
  Object.defineProperty(e, i, s);
} : function (e, r, n, i) {
  void 0 === i && (i = n);
  e[i] = r[n];
};
export function $$w14(e, r) {
  for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(r, n) || $$x10(r, e, n);
}
export function $$k31(e) {
  var r = "function" == typeof Symbol && Symbol.iterator;
  var n = r && e[r];
  var i = 0;
  if (n) return n.call(e);
  if (e && "number" == typeof e.length) return {
    next: function () {
      e && i >= e.length && (e = void 0);
      return {
        value: e && e[i++],
        done: !e
      };
    }
  };
  throw TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
export function $$_23(e, r) {
  var n = "function" == typeof Symbol && e[Symbol.iterator];
  if (!n) return e;
  var i;
  var s;
  var o = n.call(e);
  var a = [];
  try {
    for (; (void 0 === r || r-- > 0) && !(i = o.next()).done;) a.push(i.value);
  } catch (e) {
    s = {
      error: e
    };
  } finally {
    try {
      i && !i.done && (n = o.$$return) && n.call(o);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
export function $$S28() {
  for (e = [], r = 0, void 0; r < $$arguments.length; r++) {
    var e;
    var r;
    e = e.concat($$_23($$arguments[r]));
  }
  return e;
}
export function $$E30() {
  for (e = 0, r = 0, n = $$arguments.length, void 0; r < n; r++) {
    var e;
    var r;
    var n;
    e += $$arguments[r].length;
  }
  for (i = Array(e), s = 0, r = 0, void 0; r < n; r++) {
    var i;
    var s;
    var r;
    for (o = $$arguments[r], a = 0, h = o.length, void 0; a < h; a++, s++) {
      var o;
      var a;
      var h;
      i[s] = o[a];
    }
  }
  return i;
}
export function $$A29(e, r, n) {
  if (n || 2 == $$arguments.length) for (s = 0, o = r.length, void 0; s < o; s++) {
    var i;
    var s;
    var o;
    !i && s in r || (i || (i = Array.prototype.slice.call(r, 0, s)), i[s] = r[s]);
  }
  return e.concat(i || Array.prototype.slice.call(r));
}
export function $$C5(e) {
  return this instanceof $$C5 ? (this.v = e, this) : new $$C5(e);
}
export function $$T3(e, r, n) {
  if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
  var i;
  var s = n.apply(e, r || []);
  var o = [];
  i = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype);
  h("next");
  h("throw");
  h("return", a);
  i[Symbol.asyncIterator] = function () {
    return this;
  };
  return i;
  function a(e) {
    return function (r) {
      return Promise.resolve(r).then(e, m);
    };
  }
  function h(e, r) {
    s[e] && (i[e] = function (r) {
      return new Promise(function (n, i) {
        o.push([e, r, n, i]) > 1 || d(e, r);
      });
    }, r && (i[e] = r(i[e])));
  }
  function d(e, r) {
    try {
      p(s[e](r));
    } catch (e) {
      v(o[0][3], e);
    }
  }
  function p(e) {
    e.value instanceof $$C5 ? Promise.resolve(e.value.v).then(g, m) : v(o[0][2], e);
  }
  function g(e) {
    d("next", e);
  }
  function m(e) {
    d("throw", e);
  }
  function v(e, r) {
    e(r);
    o.shift();
    o.length && d(o[0][0], o[0][1]);
  }
}
export function $$I2(e) {
  var r;
  var n;
  r = {};
  i("next");
  i("throw", function (e) {
    throw e;
  });
  i("return");
  r[Symbol.iterator] = function () {
    return this;
  };
  return r;
  function i(i, s) {
    r[i] = e[i] ? function (r) {
      return (n = !n) ? {
        value: $$C5(e[i](r)),
        done: !1
      } : s ? s(r) : r;
    } : s;
  }
}
export function $$P4(e) {
  if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
  var r;
  var n = e[Symbol.asyncIterator];
  return n ? n.call(e) : (e = $$k31(e), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function () {
    return this;
  }, r);
  function i(n) {
    r[n] = e[n] && function (r) {
      return new Promise(function (i, o) {
        s(i, o, (r = e[n](r)).done, r.value);
      });
    };
  }
  function s(e, r, n, i) {
    Promise.resolve(i).then(function (r) {
      e({
        value: r,
        done: n
      });
    }, r);
  }
}
export function $$R19(e, r) {
  Object.defineProperty ? Object.defineProperty(e, "raw", {
    value: r
  }) : e.raw = r;
  return e;
}
var M = Object.create ? function (e, r) {
  Object.defineProperty(e, "default", {
    enumerable: !0,
    value: r
  });
} : function (e, r) {
  e.$$default = r;
};
var D = function (e) {
  return (D = Object.getOwnPropertyNames || function (e) {
    var r = [];
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[r.length] = n);
    return r;
  })(e);
};
export function $$N18(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (null != e) for (n = D(e), i = 0, void 0; i < n.length; i++) {
    var n;
    var i;
    "default" !== n[i] && $$x10(r, e, n[i]);
  }
  M(r, e);
  return r;
}
export function $$$17(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}
export function $$L7(e, r, n, i) {
  if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
  if ("function" == typeof r ? e !== r || !i : !r.has(e)) throw TypeError("Cannot read  member from an object whose class did not declare it");
  return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : r.get(e);
}
export function $$j9(e, r, n, i, s) {
  if ("m" === i) throw TypeError("Private method is not writable");
  if ("a" === i && !s) throw TypeError("Private accessor was defined without a setter");
  if ("function" == typeof r ? e !== r || !s : !r.has(e)) throw TypeError("Cannot write  member to an object whose class did not declare it");
  "a" === i ? s.call(e, n) : s ? s.value = n : r.set(e, n);
  return n;
}
export function $$z8(e, r) {
  if (null === r || "object" != typeof r && "function" != typeof r) throw TypeError("Cannot use 'in' operator on non-object");
  return "function" == typeof e ? r === e : e.has(r);
}
export function $$Z0(e, r, n) {
  if (null != r) {
    var i;
    var s;
    if ("object" != typeof r && "function" != typeof r) throw TypeError("Object expected.");
    if (n) {
      if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
      i = r[Symbol.asyncDispose];
    }
    if (void 0 === i) {
      if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
      i = r[Symbol.dispose];
      n && (s = i);
    }
    if ("function" != typeof i) throw TypeError("Object not disposable.");
    s && (i = function () {
      try {
        s.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    });
    e.stack.push({
      value: r,
      dispose: i,
      async: n
    });
  } else n && e.stack.push({
    async: !0
  });
  return r;
}
var F = "function" == typeof SuppressedError ? SuppressedError : function (e, r, n) {
  var i = Error(n);
  i.name = "SuppressedError";
  i.error = e;
  i.suppressed = r;
  return i;
};
export function $$U12(e) {
  function r(r) {
    e.error = e.hasError ? new F(r, e.error, "An error was suppressed during disposal.") : r;
    e.hasError = !0;
  }
  var n;
  var i = 0;
  function s() {
    for (; n = e.stack.pop();) try {
      if (!n.async && 1 === i) {
        i = 0;
        e.stack.push(n);
        return Promise.resolve().then(s);
      }
      if (n.dispose) {
        var o = n.dispose.call(n.value);
        if (n.async) {
          i |= 2;
          return Promise.resolve(o).then(s, function (e) {
            r(e);
            return s();
          });
        }
      } else i |= 1;
    } catch (e) {
      r(e);
    }
    if (1 === i) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return s();
}
export function $$Q25(e, r) {
  return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (e, n, i, s, o) {
    return n ? r ? ".jsx" : ".js" : !i || s && o ? i + s + "." + o.toLowerCase() + "js" : e;
  }) : e;
}
export let $$V32 = {
  __extends: $$s15,
  __assign: $$o1,
  __rest: $$a24,
  __decorate: $$h11,
  __param: $$d21,
  __esDecorate: $$p13,
  __runInitializers: $$g26,
  __propKey: $$m22,
  __setFunctionName: $$v27,
  __metadata: $$y20,
  __awaiter: $$b6,
  __generator: $$O16,
  __createBinding: $$x10,
  __exportStar: $$w14,
  __values: $$k31,
  __read: $$_23,
  __spread: $$S28,
  __spreadArrays: $$E30,
  __spreadArray: $$A29,
  __await: $$C5,
  __asyncGenerator: $$T3,
  __asyncDelegator: $$I2,
  __asyncValues: $$P4,
  __makeTemplateObject: $$R19,
  __importStar: $$N18,
  __importDefault: $$$17,
  __classPrivateFieldGet: $$L7,
  __classPrivateFieldSet: $$j9,
  __classPrivateFieldIn: $$z8,
  __addDisposableResource: $$Z0,
  __disposeResources: $$U12,
  __rewriteRelativeImportExtension: $$Q25
};
export const __addDisposableResource = $$Z0;
export const __assign = $$o1;
export const __asyncDelegator = $$I2;
export const __asyncGenerator = $$T3;
export const __asyncValues = $$P4;
export const __await = $$C5;
export const __awaiter = $$b6;
export const __classPrivateFieldGet = $$L7;
export const __classPrivateFieldIn = $$z8;
export const __classPrivateFieldSet = $$j9;
export const __createBinding = $$x10;
export const __decorate = $$h11;
export const __disposeResources = $$U12;
export const __esDecorate = $$p13;
export const __exportStar = $$w14;
export const __extends = $$s15;
export const __generator = $$O16;
export const __importDefault = $$$17;
export const __importStar = $$N18;
export const __makeTemplateObject = $$R19;
export const __metadata = $$y20;
export const __param = $$d21;
export const __propKey = $$m22;
export const __read = $$_23;
export const __rest = $$a24;
export const __rewriteRelativeImportExtension = $$Q25;
export const __runInitializers = $$g26;
export const __setFunctionName = $$v27;
export const __spread = $$S28;
export const __spreadArray = $$A29;
export const __spreadArrays = $$E30;
export const __values = $$k31;
export const _$$default = $$V32;
