import { createContext, Component, createElement } from "react";
import { n_ } from "../vendor/235095";
import o from "../vendor/208296";
import h from "../vendor/833871";
var a = o;
var d = h;
let p = {
  useCamelCaseFlagKeys: !0,
  sendEventsOnFlagRead: !0
};
let {
  Provider,
  Consumer
} = createContext({
  flags: {},
  flagKeyMap: {},
  ldClient: void 0
});
let v = e => {
  var r;
  return null != (r = e.context) ? r : e.user;
};
let y = e => {
  let r = {};
  for (let n in e) 0 !== n.indexOf("$") && (r[a()(n)] = e[n]);
  return r;
};
let b = (e, r) => {
  let n = {};
  for (let i in e) r && void 0 === r[i] || (n[i] = e[i].current);
  return n;
};
let O = (e, r) => {
  let n = e.allFlags();
  return r ? Object.keys(r).reduce((e, i) => (e[i] = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : r[i], e), {}) : n;
};
y.camelCaseKeys = y;
var x = Object.defineProperty;
var w = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty;
var _ = Object.prototype.propertyIsEnumerable;
var S = (e, r, n) => r in e ? x(e, r, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[r] = n;
var E = (e, r) => {
  for (var n in r || (r = {})) k.call(r, n) && S(e, n, r[n]);
  if (w) for (var n of w(r)) _.call(r, n) && S(e, n, r[n]);
  return e;
};
let A = {
  wrapperName: "react-client-sdk",
  wrapperVersion: "3.0.10",
  sendEventsOnlyForVariation: !0
};
let C = (e, ...r) => {
  var n;
  var i;
  var o;
  n = void 0;
  i = [e, ...r];
  o = function* (e, r = {
    anonymous: !0,
    kind: "user"
  }, n, i) {
    let o = n_(e, r, E(E({}, A), n));
    return new Promise(e => {
      function r() {
        o.off("ready", s);
        o.off("failed", n);
      }
      function n(n) {
        r();
        e({
          flags: {},
          ldClient: o,
          error: n
        });
      }
      function s() {
        r();
        e({
          flags: O(o, i),
          ldClient: o
        });
      }
      o.on("failed", n);
      o.on("ready", s);
    });
  };
  return new Promise((e, r) => {
    var s = e => {
      try {
        h(o.next(e));
      } catch (e) {
        r(e);
      }
    };
    var a = e => {
      try {
        h(o.$$throw(e));
      } catch (e) {
        r(e);
      }
    };
    var h = r => r.done ? e(r.value) : Promise.resolve(r.value).then(s, a);
    h((o = o.apply(n, i)).next());
  });
};
function T(e, r, n = p, i) {
  let s = function (e, r) {
    return void 0 === r ? e : Object.keys(r).reduce((r, n) => (I(e, n) && (r[n] = e[n]), r), {});
  }(r, i);
  let {
    useCamelCaseFlagKeys = !0
  } = n;
  let [h, d = {}] = useCamelCaseFlagKeys ? function (e) {
    let r = {};
    let n = {};
    for (let i in e) {
      if (0 === i.indexOf("$")) continue;
      let s = a()(i);
      r[s] = e[i];
      n[s] = i;
    }
    return [r, n];
  }(s) : [s];
  return {
    flags: n.sendEventsOnFlagRead ? P(e, h, d, useCamelCaseFlagKeys) : h,
    flagKeyMap: d
  };
}
function I(e, r) {
  return Object.prototype.hasOwnProperty.call(e, r);
}
function P(e, r, n, i) {
  return new Proxy(r, {
    get(r, s, o) {
      let a = Reflect.get(r, s, o);
      let h = i && I(n, s) || I(r, s);
      if ("symbol" == typeof s || !h) return a;
      if (void 0 === a) return;
      let d = i ? n[s] : s;
      return e.variation(d, a);
    }
  });
}
var R = Object.defineProperty;
var M = Object.defineProperties;
var D = Object.getOwnPropertyDescriptors;
var N = Object.getOwnPropertySymbols;
var $ = Object.prototype.hasOwnProperty;
var L = Object.prototype.propertyIsEnumerable;
var j = (e, r, n) => r in e ? R(e, r, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[r] = n;
var z = (e, r) => {
  for (var n in r || (r = {})) $.call(r, n) && j(e, n, r[n]);
  if (N) for (var n of N(r)) L.call(r, n) && j(e, n, r[n]);
  return e;
};
var Z = (e, r, n) => (j(e, "symbol" != typeof r ? r + "" : r, n), n);
var F = (e, r, n) => new Promise((i, s) => {
  var o = e => {
    try {
      h(n.next(e));
    } catch (e) {
      s(e);
    }
  };
  var a = e => {
    try {
      h(n.$$throw(e));
    } catch (e) {
      s(e);
    }
  };
  var h = e => e.done ? i(e.value) : Promise.resolve(e.value).then(o, a);
  h((n = n.apply(e, r)).next());
});
class U extends Component {
  constructor(e) {
    this.state = {
      flags: {},
      unproxiedFlags: {},
      flagKeyMap: {},
      ldClient: void 0
    };
    super(e);
    Z(this, "state");
    Z(this, "getReactOptions", () => z(z({}, p), this.props.reactOptions));
    Z(this, "subscribeToChanges", e => {
      let {
        flags
      } = this.props;
      e.on("change", n => {
        let i = this.getReactOptions();
        let s = b(n, flags);
        let o = z(z({}, this.state.unproxiedFlags), s);
        Object.keys(s).length > 0 && this.setState(z({
          unproxiedFlags: o
        }, T(e, o, i, flags)));
      });
    });
    Z(this, "initLDClient", () => F(this, null, function* () {
      let {
        clientSideID,
        flags,
        options
      } = this.props;
      let i = yield this.props.ldClient;
      let s = this.getReactOptions();
      let o;
      let a = this.state.unproxiedFlags;
      if (i) a = O(i, flags);else {
        let s = yield C(clientSideID, v(this.props), options, flags);
        (o = s.error) || (a = s.flags);
        i = s.ldClient;
      }
      this.setState(M(z({
        unproxiedFlags: a
      }, T(i, a, s, flags)), D({
        ldClient: i,
        error: o
      })));
      this.subscribeToChanges(i);
    }));
    let {
      options
    } = e;
    if (options) {
      let {
        bootstrap
      } = options;
      if (bootstrap && "localStorage" !== bootstrap) {
        let {
          useCamelCaseFlagKeys
        } = this.getReactOptions();
        this.state = {
          flags: useCamelCaseFlagKeys ? y(bootstrap) : bootstrap,
          unproxiedFlags: bootstrap,
          flagKeyMap: {},
          ldClient: void 0
        };
      }
    }
  }
  componentDidMount() {
    return F(this, null, function* () {
      let {
        deferInitialization
      } = this.props;
      deferInitialization && !v(this.props) || (yield this.initLDClient());
    });
  }
  componentDidUpdate(e) {
    return F(this, null, function* () {
      let {
        deferInitialization
      } = this.props;
      let n = !v(e) && v(this.props);
      deferInitialization && n && (yield this.initLDClient());
    });
  }
  render() {
    let {
      flags,
      flagKeyMap,
      ldClient,
      error
    } = this.state;
    return createElement(Provider, {
      value: {
        flags,
        flagKeyMap,
        ldClient,
        error
      }
    }, this.props.children);
  }
}
var Q = Object.defineProperty;
var V = Object.defineProperties;
var B = Object.getOwnPropertyDescriptors;
var q = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty;
var Y = Object.prototype.propertyIsEnumerable;
var G = (e, r, n) => r in e ? Q(e, r, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[r] = n;
var X = (e, r) => {
  for (var n in r || (r = {})) W.call(r, n) && G(e, n, r[n]);
  if (q) for (var n of q(r)) Y.call(r, n) && G(e, n, r[n]);
  return e;
};
export function $$H0(e) {
  return function (r) {
    let {
      reactOptions
    } = e;
    let s = X(X({}, p), reactOptions);
    let o = V(X({}, e), B({
      reactOptions: s
    }));
    function a(e) {
      return createElement(U, X({}, o), createElement(r, X({}, e)));
    }
    d()(a, r);
    return a;
  };
}
var K = Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
var J = Object.defineProperty;
Object.getOwnPropertySymbols;
Object.prototype.hasOwnProperty;
Object.prototype.propertyIsEnumerable;
export const GS = $$H0;