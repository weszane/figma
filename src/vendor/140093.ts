/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var i = Symbol.$$for("react.element");
var t = Symbol.$$for("react.portal");
var f = Symbol.$$for("react.fragment");
var r = Symbol.$$for("react.strict_mode");
var a = Symbol.$$for("react.profiler");
var o = Symbol.$$for("react.provider");
var u = Symbol.$$for("react.context");
var l = Symbol.$$for("react.forward_ref");
var d = Symbol.$$for("react.suspense");
var s = Symbol.$$for("react.memo");
var c = Symbol.$$for("react.lazy");
var h = Symbol.iterator;
var p = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () { },
  enqueueReplaceState: function () { },
  enqueueSetState: function () { }
};
var g = Object.assign;
var getDefaultFrameProps = {};
function _(e, n, i) {
  this.props = e;
  this.context = n;
  this.refs = getDefaultFrameProps;
  this.updater = i || p;
}
function b() { }
function y(e, n, i) {
  this.props = e;
  this.context = n;
  this.refs = getDefaultFrameProps;
  this.updater = i || p;
}
_.prototype.isReactComponent = {};
_.prototype.setState = function (e, n) {
  if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
_.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
b.prototype = _.prototype;
var v = y.prototype = new b();
v.constructor = y;
g(v, _.prototype);
v.isPureReactComponent = !0;
var w = Array.isArray;
var k = Object.prototype.hasOwnProperty;
var S = {
  current: null
};
var E = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function x(e, n, t) {
  var f;
  var r = {};
  var a = null;
  var o = null;
  if (null != n) for (f in void 0 !== n.ref && (o = n.ref), void 0 !== n.key && (a = "" + n.key), n) k.call(n, f) && !E.hasOwnProperty(f) && (r[f] = n[f]);
  var u = $$arguments.length - 2;
  if (1 === u) r.children = t; else if (1 < u) {
    for (l = Array(u), d = 0, void 0; d < u; d++) {
      var l;
      var d;
      l[d] = $$arguments[d + 2];
    }
    r.children = l;
  }
  if (e && e.defaultProps) for (f in u = e.defaultProps) void 0 === r[f] && (r[f] = u[f]);
  return {
    $$typeof: i,
    type: e,
    key: a,
    ref: o,
    props: r,
    _owner: S.current
  };
}
function C(e) {
  return "object" == typeof e && null !== e && e.$$typeof === i;
}
var T = /\/+/g;
function P(e, n) {
  var i;
  var t;
  return "object" == typeof e && null !== e && null != e.key ? (i = "" + e.key, t = {
    "=": "=0",
    ":": "=2"
  }, "$" + i.replace(/[=:]/g, function (e) {
    return t[e];
  })) : n.toString(36);
}
function L(e, n, f) {
  if (null == e) return e;
  var r = [];
  var a = 0;
  !function e(n, f, r, a, o) {
    var u;
    var l;
    var d;
    var s = typeof n;
    ("undefined" === s || "boolean" === s) && (n = null);
    var c = !1;
    if (null === n) c = !0; else switch (s) {
      case "string":
      case "number":
        c = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case i:
          case t:
            c = !0;
        }
    }
    if (c) {
      o = o(c = n);
      n = "" === a ? "." + P(c, 0) : a;
      w(o) ? (r = "", null != n && (r = n.replace(T, "$&/") + "/"), e(o, f, r, "", function (e) {
        return e;
      })) : null != o && (C(o) && (u = o, l = r + (!o.key || c && c.key === o.key ? "" : ("" + o.key).replace(T, "$&/") + "/") + n, o = {
        $$typeof: i,
        type: u.type,
        key: l,
        ref: u.ref,
        props: u.props,
        _owner: u._owner
      }), f.push(o));
      return 1;
    }
    if (c = 0, a = "" === a ? "." : a + ":", w(n)) for (var p = 0; p < n.length; p++) {
      var g = a + P(s = n[p], p);
      c += e(s, f, r, g, o);
    } else if ("function" == typeof (g = n || "object" != typeof d ? null : "function" == typeof (d = h && d[h] || d["@@iterator"]) ? d : null)) for (n = g.call(n), p = 0; !(s = n.next()).done;) {
      g = a + P(s = s.value, p++);
      c += e(s, f, r, g, o);
    } else if ("object" === s) throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (f = String(n)) ? "object with keys {" + Object.keys(n).join(", ") + "}" : f) + "). If you meant to render a collection of children, use an array instead.");
    return c;
  }(e, r, "", "", function (e) {
    return n.call(f, e, a++);
  });
  return r;
}
function N(e) {
  if (-1 === e._status) {
    var n = e._result;
    (n = n()).then(function (n) {
      (0 === e._status || -1 === e._status) && (e._status = 1, e._result = n);
    }, function (n) {
      (0 === e._status || -1 === e._status) && (e._status = 2, e._result = n);
    });
    -1 === e._status && (e._status = 0, e._result = n);
  }
  if (1 === e._status) return e._result.$$default;
  throw e._result;
}
var O = {
  current: null
};
var ImageDownloadQueue = {
  transition: null
};
function M() {
  throw Error("act(...) is not supported in production builds of React.");
}
exports.Children = {
  map: L,
  forEach: function (e, n, i) {
    L(e, function () {
      n.apply(this, arguments);
    }, i);
  },
  count: function (e) {
    var n = 0;
    L(e, function () {
      n++;
    });
    return n;
  },
  toArray: function (e) {
    return L(e, function (e) {
      return e;
    }) || [];
  },
  only: function (e) {
    if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  }
};
exports.Component = _;
exports.Fragment = f;
exports.Profiler = a;
exports.PureComponent = y;
exports.StrictMode = r;
exports.Suspense = d;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
  ReactCurrentDispatcher: O,
  ReactCurrentBatchConfig: ImageDownloadQueue,
  ReactCurrentOwner: S
};
exports.act = M;
exports.cloneElement = function (e, n, t) {
  if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var f = g({}, e.props);
  var r = e.key;
  var a = e.ref;
  var o = e._owner;
  if (null != n) {
    if (void 0 !== n.ref && (a = n.ref, o = S.current), void 0 !== n.key && (r = "" + n.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (l in n) k.call(n, l) && !E.hasOwnProperty(l) && (f[l] = void 0 === n[l] && void 0 !== u ? u[l] : n[l]);
  }
  var l = $$arguments.length - 2;
  if (1 === l) f.children = t; else if (1 < l) {
    u = Array(l);
    for (var d = 0; d < l; d++) u[d] = $$arguments[d + 2];
    f.children = u;
  }
  return {
    $$typeof: i,
    type: e.type,
    key: r,
    ref: a,
    props: f,
    _owner: o
  };
};
exports.createContext = function (e) {
  (e = {
    $$typeof: ExpiringCache,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }).Provider = {
    $$typeof: o,
    _context: e
  };
  return e.Consumer = e;
};
exports.createElement = x;
exports.createFactory = function (e) {
  var n = x.bind(null, e);
  n.type = e;
  return n;
};
exports.createRef = function () {
  return {
    current: null
  };
};
exports.forwardRef = function (e) {
  return {
    $$typeof: l,
    render: e
  };
};
exports.isValidElement = C;
exports.lazy = function (e) {
  return {
    $$typeof: c,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: N
  };
};
exports.memo = function (e, n) {
  return {
    $$typeof: s,
    type: e,
    compare: void 0 === n ? null : n
  };
};
exports.startTransition = function (e) {
  var n = ImageDownloadQueue.transition;
  ImageDownloadQueue.transition = {};
  try {
    e();
  } finally {
    ImageDownloadQueue.transition = n;
  }
};
exports.unstable_act = M;
exports.useCallback = function (e, n) {
  return O.current.useCallback(e, n);
};
exports.useContext = function (e) {
  return O.current.useContext(e);
};
exports.useDebugValue = function () { };
exports.useDeferredValue = function (e) {
  return O.current.useDeferredValue(e);
};
exports.useEffect = function (e, n) {
  return O.current.useEffect(e, n);
};
exports.useId = function () {
  return O.current.useId();
};
exports.useImperativeHandle = function (e, n, i) {
  return O.current.useImperativeHandle(e, n, i);
};
exports.useInsertionEffect = function (e, n) {
  return O.current.useInsertionEffect(e, n);
};
exports.useLayoutEffect = function (e, n) {
  return O.current.useLayoutEffect(e, n);
};
exports.useMemo = function (e, n) {
  return O.current.useMemo(e, n);
};
exports.useReducer = function (e, n, i) {
  return O.current.useReducer(e, n, i);
};
exports.useRef = function (e) {
  return O.current.useRef(e);
};
exports.useState = function (e) {
  return O.current.useState(e);
};
exports.useSyncExternalStore = function (e, n, i) {
  return O.current.useSyncExternalStore(e, n, i);
};
exports.useTransition = function () {
  return O.current.useTransition();
};
exports.version = "18.3.1";
