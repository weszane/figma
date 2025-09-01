import { A as _$$A } from "../vendor/179604";
import { createContext, Component, createElement, Children, isValidElement, cloneElement, useContext } from "react";
import A from "../vendor/223108";
import { yJ, Fu } from "../vendor/488412";
import { A as _$$A2 } from "../vendor/258635";
import { A as _$$A3 } from "../vendor/710480";
import u from "../vendor/353719";
var o = A;
var $$g = u;
var c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== require.g ? require.g : {};
var f = createContext || function (e, t) {
  var n;
  var A;
  var s;
  var a = "__create-react-context-" + (c[n = "__global_unique_id__"] = (c[n] || 0) + 1) + "__";
  var l = function (e) {
    function n() {
      for (i = $$arguments.length, A = Array(i), o = 0, void 0; o < i; o++) {
        var t;
        var n;
        var r;
        var i;
        var A;
        var o;
        A[o] = $$arguments[o];
      }
      (t = e.call.apply(e, [this].concat(A)) || this).emitter = (n = t.props.value, r = [], {
        on: function (e) {
          r.push(e);
        },
        off: function (e) {
          r = r.filter(function (t) {
            return t !== e;
          });
        },
        get: function () {
          return n;
        },
        set: function (e, t) {
          n = e;
          r.forEach(function (e) {
            return e(n, t);
          });
        }
      });
      return t;
    }
    _$$A(n, e);
    var i = n.prototype;
    i.getChildContext = function () {
      var e;
      (e = {})[a] = this.emitter;
      return e;
    };
    i.componentWillReceiveProps = function (e) {
      if (this.props.value !== e.value) {
        var n;
        var r = this.props.value;
        var i = e.value;
        (r === i ? 0 !== r || 1 / r == 1 / i : r != r && i != i) ? n = 0 : 0 != (n = ("function" == typeof t ? t(r, i) : 0x3fffffff) | 0) && this.emitter.set(e.value, n);
      }
    };
    i.render = function () {
      return this.props.children;
    };
    return n;
  }(Component);
  l.childContextTypes = ((A = {})[a] = o().object.isRequired, A);
  var u = function (t) {
    function n() {
      for (n = $$arguments.length, r = Array(n), i = 0, void 0; i < n; i++) {
        var e;
        var n;
        var r;
        var i;
        r[i] = $$arguments[i];
      }
      (e = t.call.apply(t, [this].concat(r)) || this).observedBits = void 0;
      e.state = {
        value: e.getValue()
      };
      e.onUpdate = function (t, n) {
        ((0 | e.observedBits) & n) != 0 && e.setState({
          value: e.getValue()
        });
      };
      return e;
    }
    _$$A(n, t);
    var i = n.prototype;
    i.componentWillReceiveProps = function (e) {
      var t = e.observedBits;
      this.observedBits = t;
    };
    i.componentDidMount = function () {
      this.context[a] && this.context[a].on(this.onUpdate);
      var e = this.props.observedBits;
      this.observedBits = e;
    };
    i.componentWillUnmount = function () {
      this.context[a] && this.context[a].off(this.onUpdate);
    };
    i.getValue = function () {
      return this.context[a] ? this.context[a].get() : e;
    };
    i.render = function () {
      var e;
      return (Array.isArray(e = this.props.children) ? e[0] : e)(this.state.value);
    };
    return n;
  }(Component);
  u.contextTypes = ((s = {})[a] = o().object, s);
  return {
    Provider: l,
    Consumer: u
  };
};
var d = function (e) {
  var t = f();
  t.displayName = e;
  return t;
};
var h = d("Router-History");
var $$p3 = d("Router");
var $$C1 = function (e) {
  function t(t) {
    var n;
    (n = e.call(this, t) || this).state = {
      location: t.history.location
    };
    n._isMounted = !1;
    n._pendingLocation = null;
    t.staticContext || (n.unlisten = t.history.listen(function (e) {
      n._pendingLocation = e;
    }));
    return n;
  }
  _$$A(t, e);
  t.computeRootMatch = function (e) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: "/" === e
    };
  };
  var n = t.prototype;
  n.componentDidMount = function () {
    var e = this;
    this._isMounted = !0;
    this.unlisten && this.unlisten();
    this.props.staticContext || (this.unlisten = this.props.history.listen(function (t) {
      e._isMounted && e.setState({
        location: t
      });
    }));
    this._pendingLocation && this.setState({
      location: this._pendingLocation
    });
  };
  n.componentWillUnmount = function () {
    this.unlisten && (this.unlisten(), this._isMounted = !1, this._pendingLocation = null);
  };
  n.render = function () {
    return createElement($$p3.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: t.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, createElement(h.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };
  return t;
}(Component);
Component;
var I = function (e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  _$$A(t, e);
  var n = t.prototype;
  n.componentDidMount = function () {
    this.props.onMount && this.props.onMount.call(this, this);
  };
  n.componentDidUpdate = function (e) {
    this.props.onUpdate && this.props.onUpdate.call(this, this, e);
  };
  n.componentWillUnmount = function () {
    this.props.onUnmount && this.props.onUnmount.call(this, this);
  };
  n.render = function () {
    return null;
  };
  return t;
}(Component);
var E = {};
var B = 0;
export function $$m8(e, t) {
  void 0 === e && (e = "/");
  void 0 === t && (t = {});
  return "/" === e ? e : function (e) {
    if (E[e]) return E[e];
    var t = $$g().compile(e);
    B < 1e4 && (E[e] = t, B++);
    return t;
  }(e)(t, {
    pretty: !0
  });
}
export function $$y7(e) {
  var t = e.computedMatch;
  var n = e.to;
  var r = e.push;
  var A = void 0 !== r && r;
  return createElement($$p3.Consumer, null, function (e) {
    e || _$$A2(!1);
    var r = e.history;
    var o = e.staticContext;
    var u = A ? r.push : r.replace;
    var g = yJ(t ? "string" == typeof n ? $$m8(n, t.params) : _$$A3({}, n, {
      pathname: $$m8(n.pathname, t.params)
    }) : n);
    return o ? (u(g), null) : createElement(I, {
      onMount: function () {
        u(g);
      },
      onUpdate: function (e, t) {
        var n = yJ(t.to);
        Fu(n, _$$A3({}, g, {
          key: n.key
        })) || u(g);
      },
      to: n
    });
  });
}
var _ = {};
var Q = 0;
export function $$D0(e, t) {
  void 0 === t && (t = {});
  ("string" == typeof t || Array.isArray(t)) && (t = {
    path: t
  });
  var n = t;
  var r = n.path;
  var i = n.exact;
  var A = void 0 !== i && i;
  var o = n.strict;
  var s = void 0 !== o && o;
  var a = n.sensitive;
  var l = void 0 !== a && a;
  return [].concat(r).reduce(function (t, n) {
    if (!n && "" !== n) return null;
    if (t) return t;
    var r = function (e, t) {
      var n = "" + t.end + t.strict + t.sensitive;
      var r = _[n] || (_[n] = {});
      if (r[e]) return r[e];
      var i = [];
      var A = {
        regexp: $$g()(e, i, t),
        keys: i
      };
      Q < 1e4 && (r[e] = A, Q++);
      return A;
    }(n, {
      end: A,
      strict: s,
      sensitive: l
    });
    var i = r.regexp;
    var o = r.keys;
    var a = i.exec(e);
    if (!a) return null;
    var u = a[0];
    var c = a.slice(1);
    var f = e === u;
    return A && !f ? null : {
      path: n,
      url: "/" === n && "" === u ? "/" : u,
      isExact: f,
      params: o.reduce(function (e, t, n) {
        e[t.name] = c[n];
        return e;
      }, {})
    };
  }, null);
}
export var $$w6 = function (e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  _$$A(t, e);
  t.prototype.render = function () {
    var e = this;
    return createElement($$p3.Consumer, null, function (t) {
      t || _$$A2(!1);
      var n;
      var r = e.props.location || t.location;
      var A = e.props.computedMatch ? e.props.computedMatch : e.props.path ? $$D0(r.pathname, e.props) : t.match;
      var o = _$$A3({}, t, {
        location: r,
        match: A
      });
      var s = e.props;
      var u = s.children;
      var g = s.component;
      var c = s.render;
      Array.isArray(u) && (n = u, 0 === Children.count(n)) && (u = null);
      return createElement($$p3.Provider, {
        value: o
      }, o.match ? u ? "function" == typeof u ? u(o) : u : g ? createElement(g, o) : c ? c(o) : null : "function" == typeof u ? u(o) : null);
    });
  };
  return t;
}(Component);
Component;
var $$b4 = function (e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  _$$A(t, e);
  t.prototype.render = function () {
    var e = this;
    return createElement($$p3.Consumer, null, function (t) {
      t || _$$A2(!1);
      var n;
      var r;
      var A = e.props.location || t.location;
      Children.forEach(e.props.children, function (e) {
        if (null == r && isValidElement(e)) {
          n = e;
          var o = e.props.path || e.props.from;
          r = o ? $$D0(A.pathname, _$$A3({}, e.props, {
            path: o
          })) : t.match;
        }
      });
      return r ? cloneElement(n, {
        location: A,
        computedMatch: r
      }) : null;
    });
  };
  return t;
}(Component);
var v = useContext;
export function $$k9() {
  return v($$p3).location;
}
export function $$x5() {
  var e = v($$p3).match;
  return e ? e.params : {};
}
export function $$S2(e) {
  var t = $$k9();
  var n = v($$p3).match;
  return e ? $$D0(t.pathname, e) : n;
}
export const B6 = $$D0;
export const Ix = $$C1;
export const W5 = $$S2;
export const XZ = $$p3;
export const dO = $$b4;
export const g = $$x5;
export const qh = $$w6;
export const rd = $$y7;
export const tW = $$m8;
export const zy = $$k9;