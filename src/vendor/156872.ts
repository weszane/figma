import { A } from "../vendor/96885";
var f = function () {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var r = {
  INIT: "@@redux/INIT" + f(),
  REPLACE: "@@redux/REPLACE" + f(),
  PROBE_UNKNOWN_ACTION: function () {
    return "@@redux/PROBE_UNKNOWN_ACTION" + f();
  }
};
export function createStore(e, n, i) {
  if ("function" == typeof n && "function" == typeof i || "function" == typeof i && "function" == typeof $$arguments[3]) throw Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
  if ("function" == typeof n && void 0 === i && (i = n, n = void 0), void 0 !== i) {
    if ("function" != typeof i) throw Error("Expected the enhancer to be a function.");
    return i(createStore)(e, n);
  }
  if ("function" != typeof e) throw Error("Expected the reducer to be a function.");
  var f;
  var o = e;
  var u = n;
  var l = [];
  var d = l;
  var s = !1;
  function c() {
    d === l && (d = l.slice());
  }
  function h() {
    if (s) throw Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return u;
  }
  function p(e) {
    if ("function" != typeof e) throw Error("Expected the listener to be a function.");
    if (s) throw Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
    var n = !0;
    c();
    d.push(e);
    return function () {
      if (n) {
        if (s) throw Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
        n = !1;
        c();
        var i = d.indexOf(e);
        d.splice(i, 1);
      }
    };
  }
  function g(e) {
    if (!function (e) {
      if ("object" != typeof e || null === e) return !1;
      for (var n = e; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
      return Object.getPrototypeOf(e) === n;
    }(e)) throw Error("Actions must be plain objects. Use custom middleware for async actions.");
    if (void 0 === e.type) throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
    if (s) throw Error("Reducers may not dispatch actions.");
    try {
      s = !0;
      u = o(u, e);
    } finally {
      s = !1;
    }
    for (n = l = d, i = 0, void 0; i < n.length; i++) {
      var n;
      var i;
      n[i]();
    }
    return e;
  }
  g({
    type: r.INIT
  });
  (f = {
    dispatch: g,
    subscribe: p,
    getState: h,
    replaceReducer: function (e) {
      if ("function" != typeof e) throw Error("Expected the nextReducer to be a function.");
      o = e;
      g({
        type: r.REPLACE
      });
    }
  })[A] = function () {
    var e;
    (e = {
      subscribe: function (e) {
        if ("object" != typeof e || null === e) throw TypeError("Expected the observer to be an object.");
        function n() {
          e.next && e.next(h());
        }
        n();
        return {
          unsubscribe: p(n)
        };
      }
    })[A] = function () {
      return this;
    };
    return e;
  };
  return f;
}
export function combineReducers(e) {
  for (i = Object.keys(e), t = {}, f = 0, void 0; f < i.length; f++) {
    var n;
    var i;
    var t;
    var f;
    var a = i[f];
    "function" == typeof e[a] && (t[a] = e[a]);
  }
  var o = Object.keys(t);
  try {
    !function (e) {
      Object.keys(e).forEach(function (n) {
        var i = e[n];
        if (void 0 === i(void 0, {
          type: r.INIT
        })) throw Error('Reducer "' + n + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
        if (void 0 === i(void 0, {
          type: r.PROBE_UNKNOWN_ACTION()
        })) throw Error('Reducer "' + n + "\" returned undefined when probed with a random type. Don't try to handle " + r.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
      });
    }(t);
  } catch (e) {
    n = e;
  }
  return function (e, i) {
    if (void 0 === e && (e = {}), n) throw n;
    for (f = !1, r = {}, a = 0, void 0; a < o.length; a++) {
      var f;
      var r;
      var a;
      var u = o[a];
      var l = t[u];
      var d = e[u];
      var s = l(d, i);
      if (void 0 === s) throw Error(function (e, n) {
        var i = n && n.type;
        return "Given " + (i && 'action "' + String(i) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
      }(u, i));
      r[u] = s;
      f = f || s !== d;
    }
    return f ? r : e;
  };
}
function u(e, n) {
  var i = Object.keys(e);
  Object.getOwnPropertySymbols && i.push.apply(i, Object.getOwnPropertySymbols(e));
  n && (i = i.filter(function (n) {
    return Object.getOwnPropertyDescriptor(e, n).enumerable;
  }));
  return i;
}
export function compose() {
  for (e = $$arguments.length, n = Array(e), i = 0, void 0; i < e; i++) {
    var e;
    var n;
    var i;
    n[i] = $$arguments[i];
  }
  return 0 === n.length ? function (e) {
    return e;
  } : 1 === n.length ? n[0] : n.reduce(function (e, n) {
    return function () {
      return e(n.apply(void 0, arguments));
    };
  });
}
export function applyMiddleware() {
  for (e = $$arguments.length, n = Array(e), i = 0, void 0; i < e; i++) {
    var e;
    var n;
    var i;
    n[i] = $$arguments[i];
  }
  return function (e) {
    return function () {
      var i = e.apply(void 0, arguments);
      var t = function () {
        throw Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      };
      var f = {
        getState: i.getState,
        dispatch: function () {
          return t.apply(void 0, arguments);
        }
      };
      var r = n.map(function (e) {
        return e(f);
      });
      t = compose.apply(void 0, r)(i.dispatch);
      return function (e) {
        for (var n = 1; n < $$arguments.length; n++) {
          var i = null != $$arguments[n] ? $$arguments[n] : {};
          n % 2 ? u(i, !0).forEach(function (n) {
            var t;
            t = i[n];
            n in e ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[n] = t;
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : u(i).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
          });
        }
        return e;
      }({}, i, {
        dispatch: t
      });
    };
  };
}
export const HY = combineReducers;
export const Tw = applyMiddleware;
export const Zz = compose;
export const y$ = createStore;
