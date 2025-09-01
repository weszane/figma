import { A as _$$A } from "../vendor/710480";
import { A as _$$A2 } from "../vendor/861193";
import { A as _$$A3 } from "../vendor/987701";
import { A as _$$A4 } from "../vendor/258635";
function s(e) {
  return "/" === e.charAt(0) ? e : "/" + e;
}
function a(e) {
  return "/" === e.charAt(0) ? e.substr(1) : e;
}
function l(e, t) {
  return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length)) ? e.substr(t.length) : e;
}
function u(e) {
  return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
}
export function $$g0(e) {
  var t = e.pathname;
  var n = e.search;
  var r = e.hash;
  var i = t || "/";
  n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n);
  r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r);
  return i;
}
export function $$c4(e, t, n, A) {
  var o;
  var s;
  var a;
  var l;
  var u;
  var g;
  "string" == typeof e ? (a = "", l = "", -1 !== (u = (s = e || "/").indexOf("#")) && (l = s.substr(u), s = s.substr(0, u)), -1 !== (g = s.indexOf("?")) && (a = s.substr(g), s = s.substr(0, g)), (o = {
    pathname: s,
    search: "?" === a ? "" : a,
    hash: "#" === l ? "" : l
  }).state = t) : (void 0 === (o = _$$A({}, e)).pathname && (o.pathname = ""), o.search ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search) : o.search = "", o.hash ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash) : o.hash = "", void 0 !== t && void 0 === o.state && (o.state = t));
  n && (o.key = n);
  A ? o.pathname ? "/" !== o.pathname.charAt(0) && (o.pathname = _$$A2(o.pathname, A.pathname)) : o.pathname = A.pathname : o.pathname || (o.pathname = "/");
  return o;
}
export function $$f1(e, t) {
  return e.pathname === t.pathname && e.search === t.search && e.hash === t.hash && e.key === t.key && _$$A3(e.state, t.state);
}
function d() {
  var e = null;
  var t = [];
  return {
    setPrompt: function (t) {
      e = t;
      return function () {
        e === t && (e = null);
      };
    },
    confirmTransitionTo: function (t, n, r, i) {
      if (null != e) {
        var A = "function" == typeof e ? e(t, n) : e;
        "string" == typeof A ? "function" == typeof r ? r(A, i) : i(!0) : i(!1 !== A);
      } else i(!0);
    },
    appendListener: function (e) {
      var n = !0;
      function r() {
        n && e.apply(void 0, arguments);
      }
      t.push(r);
      return function () {
        n = !1;
        t = t.filter(function (e) {
          return e !== r;
        });
      };
    },
    notifyListeners: function () {
      for (e = $$arguments.length, n = Array(e), r = 0, void 0; r < e; r++) {
        var e;
        var n;
        var r;
        n[r] = $$arguments[r];
      }
      t.forEach(function (e) {
        return e.apply(void 0, n);
      });
    }
  };
}
var h = !!("undefined" != typeof window && window.document && window.document.createElement);
function p(e, t) {
  t(window.confirm(e));
}
var C = "popstate";
var I = "hashchange";
function E() {
  try {
    return window.history.state || {};
  } catch (e) {
    return {};
  }
}
export function $$B5(e) {
  void 0 === e && (e = {});
  h || _$$A4(!1);
  var t;
  var n = window.history;
  var i = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history;
  var A = -1 !== window.navigator.userAgent.indexOf("Trident");
  var a = e;
  var f = a.forceRefresh;
  var B = void 0 !== f && f;
  var m = a.getUserConfirmation;
  var y = void 0 === m ? p : m;
  var _ = a.keyLength;
  var Q = void 0 === _ ? 6 : _;
  var D = e.basename ? u(s(e.basename)) : "";
  function w(e) {
    var t = e || {};
    var n = t.key;
    var r = t.state;
    var i = window.location;
    var A = i.pathname + i.search + i.hash;
    D && (A = l(A, D));
    return $$c4(A, r, n);
  }
  function b() {
    return Math.random().toString(36).substr(2, Q);
  }
  var v = d();
  function k(e) {
    _$$A(U, e);
    U.length = n.length;
    v.notifyListeners(U.location, U.action);
  }
  function x(e) {
    void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS") || N(w(e.state));
  }
  function S() {
    N(w(E()));
  }
  var F = !1;
  function N(e) {
    F ? (F = !1, k()) : v.confirmTransitionTo(e, "POP", y, function (t) {
      var n;
      var r;
      var i;
      var A;
      t ? k({
        action: "POP",
        location: e
      }) : (n = U.location, -1 === (r = L.indexOf(n.key)) && (r = 0), -1 === (i = L.indexOf(e.key)) && (i = 0), (A = r - i) && (F = !0, M(A)));
    });
  }
  var T = w(E());
  var L = [T.key];
  function R(e) {
    return D + $$g0(e);
  }
  function M(e) {
    n.go(e);
  }
  var O = 0;
  function G(e) {
    1 === (O += e) && 1 === e ? (window.addEventListener(C, x), A && window.addEventListener(I, S)) : 0 === O && (window.removeEventListener(C, x), A && window.removeEventListener(I, S));
  }
  var P = !1;
  var U = {
    length: n.length,
    action: "POP",
    location: T,
    createHref: R,
    push: function (e, t) {
      var r = "PUSH";
      var A = $$c4(e, t, b(), U.location);
      v.confirmTransitionTo(A, r, y, function (e) {
        if (e) {
          var t = R(A);
          var o = A.key;
          var s = A.state;
          if (i) {
            if (n.pushState({
              key: o,
              state: s
            }, null, t), B) window.location.href = t;else {
              var a = L.indexOf(U.location.key);
              var l = L.slice(0, a + 1);
              l.push(A.key);
              L = l;
              k({
                action: r,
                location: A
              });
            }
          } else window.location.href = t;
        }
      });
    },
    replace: function (e, t) {
      var r = "REPLACE";
      var A = $$c4(e, t, b(), U.location);
      v.confirmTransitionTo(A, r, y, function (e) {
        if (e) {
          var t = R(A);
          var o = A.key;
          var s = A.state;
          if (i) {
            if (n.replaceState({
              key: o,
              state: s
            }, null, t), B) window.location.replace(t);else {
              var a = L.indexOf(U.location.key);
              -1 !== a && (L[a] = A.key);
              k({
                action: r,
                location: A
              });
            }
          } else window.location.replace(t);
        }
      });
    },
    go: M,
    goBack: function () {
      M(-1);
    },
    goForward: function () {
      M(1);
    },
    block: function (e) {
      void 0 === e && (e = !1);
      var t = v.setPrompt(e);
      P || (G(1), P = !0);
      return function () {
        P && (P = !1, G(-1));
        return t();
      };
    },
    listen: function (e) {
      var t = v.appendListener(e);
      G(1);
      return function () {
        G(-1);
        t();
      };
    }
  };
  return U;
}
var m = "hashchange";
var y = {
  hashbang: {
    encodePath: function (e) {
      return "!" === e.charAt(0) ? e : "!/" + a(e);
    },
    decodePath: function (e) {
      return "!" === e.charAt(0) ? e.substr(1) : e;
    }
  },
  noslash: {
    encodePath: a,
    decodePath: s
  },
  slash: {
    encodePath: s,
    decodePath: s
  }
};
function _(e) {
  var t = e.indexOf("#");
  return -1 === t ? e : e.slice(0, t);
}
function Q() {
  var e = window.location.href;
  var t = e.indexOf("#");
  return -1 === t ? "" : e.substring(t + 1);
}
function D(e) {
  window.location.replace(_(window.location.href) + "#" + e);
}
export function $$w2(e) {
  void 0 === e && (e = {});
  h || _$$A4(!1);
  var t = window.history;
  window.navigator.userAgent.indexOf("Firefox");
  var n = e;
  var i = n.getUserConfirmation;
  var A = void 0 === i ? p : i;
  var a = n.hashType;
  var f = e.basename ? u(s(e.basename)) : "";
  var C = y[void 0 === a ? "slash" : a];
  var I = C.encodePath;
  var E = C.decodePath;
  function B() {
    var e = E(Q());
    f && (e = l(e, f));
    return $$c4(e);
  }
  var w = d();
  function b(e) {
    _$$A(G, e);
    G.length = t.length;
    w.notifyListeners(G.location, G.action);
  }
  var v = !1;
  var k = null;
  function x() {
    var e = Q();
    var t = I(e);
    if (e !== t) D(t);else {
      var n = B();
      var r = G.location;
      if (!v && r.pathname === n.pathname && r.search === n.search && r.hash === n.hash || k === $$g0(n)) return;
      k = null;
      v ? (v = !1, b()) : w.confirmTransitionTo(n, "POP", A, function (e) {
        var t;
        var r;
        var i;
        var A;
        e ? b({
          action: "POP",
          location: n
        }) : (t = G.location, -1 === (r = T.lastIndexOf($$g0(t))) && (r = 0), -1 === (i = T.lastIndexOf($$g0(n))) && (i = 0), (A = r - i) && (v = !0, L(A)));
      });
    }
  }
  var S = Q();
  var F = I(S);
  S !== F && D(F);
  var N = B();
  var T = [$$g0(N)];
  function L(e) {
    t.go(e);
  }
  var R = 0;
  function M(e) {
    1 === (R += e) && 1 === e ? window.addEventListener(m, x) : 0 === R && window.removeEventListener(m, x);
  }
  var O = !1;
  var G = {
    length: t.length,
    action: "POP",
    location: N,
    createHref: function (e) {
      var t = document.querySelector("base");
      var n = "";
      t && t.getAttribute("href") && (n = _(window.location.href));
      return n + "#" + I(f + $$g0(e));
    },
    push: function (e, t) {
      var n = "PUSH";
      var r = $$c4(e, void 0, void 0, G.location);
      w.confirmTransitionTo(r, n, A, function (e) {
        if (e) {
          var t = $$g0(r);
          var i = I(f + t);
          if (Q() !== i) {
            k = t;
            window.location.hash = i;
            var A = T.lastIndexOf($$g0(G.location));
            var o = T.slice(0, A + 1);
            o.push(t);
            T = o;
            b({
              action: n,
              location: r
            });
          } else b();
        }
      });
    },
    replace: function (e, t) {
      var n = "REPLACE";
      var r = $$c4(e, void 0, void 0, G.location);
      w.confirmTransitionTo(r, n, A, function (e) {
        if (e) {
          var t = $$g0(r);
          var i = I(f + t);
          Q() !== i && (k = t, D(i));
          var A = T.indexOf($$g0(G.location));
          -1 !== A && (T[A] = t);
          b({
            action: n,
            location: r
          });
        }
      });
    },
    go: L,
    goBack: function () {
      L(-1);
    },
    goForward: function () {
      L(1);
    },
    block: function (e) {
      void 0 === e && (e = !1);
      var t = w.setPrompt(e);
      O || (M(1), O = !0);
      return function () {
        O && (O = !1, M(-1));
        return t();
      };
    },
    listen: function (e) {
      var t = w.appendListener(e);
      M(1);
      return function () {
        M(-1);
        t();
      };
    }
  };
  return G;
}
function b(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
export function $$v3(e) {
  void 0 === e && (e = {});
  var t = e;
  var n = t.getUserConfirmation;
  var i = t.initialEntries;
  var A = void 0 === i ? ["/"] : i;
  var o = t.initialIndex;
  var s = t.keyLength;
  var a = void 0 === s ? 6 : s;
  var l = d();
  function u(e) {
    _$$A(I, e);
    I.length = I.entries.length;
    l.notifyListeners(I.location, I.action);
  }
  function f() {
    return Math.random().toString(36).substr(2, a);
  }
  var h = b(void 0 === o ? 0 : o, 0, A.length - 1);
  var p = A.map(function (e) {
    return "string" == typeof e ? $$c4(e, void 0, f()) : $$c4(e, void 0, e.key || f());
  });
  function C(e) {
    var t = b(I.index + e, 0, I.entries.length - 1);
    var r = I.entries[t];
    l.confirmTransitionTo(r, "POP", n, function (e) {
      e ? u({
        action: "POP",
        location: r,
        index: t
      }) : u();
    });
  }
  var I = {
    length: p.length,
    action: "POP",
    location: p[h],
    index: h,
    entries: p,
    createHref: $$g0,
    push: function (e, t) {
      var r = "PUSH";
      var i = $$c4(e, t, f(), I.location);
      l.confirmTransitionTo(i, r, n, function (e) {
        if (e) {
          var t = I.index + 1;
          var n = I.entries.slice(0);
          n.length > t ? n.splice(t, n.length - t, i) : n.push(i);
          u({
            action: r,
            location: i,
            index: t,
            entries: n
          });
        }
      });
    },
    replace: function (e, t) {
      var r = "REPLACE";
      var i = $$c4(e, t, f(), I.location);
      l.confirmTransitionTo(i, r, n, function (e) {
        e && (I.entries[I.index] = i, u({
          action: r,
          location: i
        }));
      });
    },
    go: C,
    goBack: function () {
      C(-1);
    },
    goForward: function () {
      C(1);
    },
    canGo: function (e) {
      var t = I.index + e;
      return t >= 0 && t < I.entries.length;
    },
    block: function (e) {
      void 0 === e && (e = !1);
      return l.setPrompt(e);
    },
    listen: function (e) {
      return l.appendListener(e);
    }
  };
  return I;
}
export const AO = $$g0;
export const Fu = $$f1;
export const TM = $$w2;
export const sC = $$v3;
export const yJ = $$c4;
export const zR = $$B5;