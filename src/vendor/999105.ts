import { useLayoutEffect, useEffect, useState, useReducer, useRef, useCallback, useMemo } from "react";
var i;
function o() {
  return (o = Object.assign || function (e) {
    for (var r = 1; r < $$arguments.length; r++) {
      var n = $$arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }).apply(this, arguments);
}
function a(e, r) {
  if (null == e) return {};
  var n;
  var i;
  var s = {};
  var o = Object.keys(e);
  for (i = 0; i < o.length; i++) {
    n = o[i];
    r.indexOf(n) >= 0 || (s[n] = e[n]);
  }
  return s;
}
var h = ["bottom", "height", "left", "right", "top", "width"];
var d = function (e, r) {
  void 0 === e && (e = {});
  void 0 === r && (r = {});
  return h.some(function (n) {
    return e[n] !== r[n];
  });
};
var p = new Map();
var g = function e() {
  var r = [];
  p.forEach(function (e, n) {
    var i = n.getBoundingClientRect();
    d(i, e.rect) && (e.rect = i, r.push(e));
  });
  r.forEach(function (e) {
    e.callbacks.forEach(function (r) {
      return r(e.rect);
    });
  });
  i = window.requestAnimationFrame(e);
};
function m(e, r) {
  return {
    observe: function () {
      var n = 0 === p.size;
      p.has(e) ? p.get(e).callbacks.push(r) : p.set(e, {
        rect: void 0,
        hasRectChanged: !1,
        callbacks: [r]
      });
      n && g();
    },
    unobserve: function () {
      var n = p.get(e);
      if (n) {
        var s = n.callbacks.indexOf(r);
        s >= 0 && n.callbacks.splice(s, 1);
        n.callbacks.length || p.$$delete(e);
        p.size || cancelAnimationFrame(i);
      }
    }
  };
}
var v = "undefined" != typeof window ? useLayoutEffect : useEffect;
function y(e, r) {
  void 0 === r && (r = {
    width: 0,
    height: 0
  });
  var n = useState(e.current);
  var i = n[0];
  var o = n[1];
  var a = useReducer(b, r);
  var h = a[0];
  var d = a[1];
  var p = useRef(!1);
  v(function () {
    e.current !== i && o(e.current);
  });
  v(function () {
    i && !p.current && (p.current = !0, d({
      rect: i.getBoundingClientRect()
    }));
  }, [i]);
  useEffect(function () {
    if (i) {
      var e = m(i, function (e) {
        d({
          rect: e
        });
      });
      e.observe();
      return function () {
        e.unobserve();
      };
    }
  }, [i]);
  return h;
}
function b(e, r) {
  var n = r.rect;
  return e.height !== n.height || e.width !== n.width ? n : e;
}
var O = function () {
  return 50;
};
var x = function (e) {
  return e;
};
var w = function (e, r) {
  return e[r ? "offsetWidth" : "offsetHeight"];
};
var k = function (e) {
  for (r = Math.max(e.start - e.overscan, 0), n = Math.min(e.end + e.overscan, e.size - 1), i = [], s = r, void 0; s <= n; s++) {
    var r;
    var n;
    var i;
    var s;
    i.push(s);
  }
  return i;
};
export function $$_0(e) {
  var r;
  var n = e.size;
  var i = void 0 === n ? 0 : n;
  var h = e.estimateSize;
  var d = void 0 === h ? O : h;
  var p = e.overscan;
  var g = void 0 === p ? 1 : p;
  var m = e.paddingStart;
  var b = void 0 === m ? 0 : m;
  var _ = e.paddingEnd;
  var S = void 0 === _ ? 0 : _;
  var A = e.parentRef;
  var C = e.horizontal;
  var T = e.scrollToFn;
  var I = e.useObserver;
  var P = e.initialRect;
  var R = e.onScrollElement;
  var M = e.scrollOffsetFn;
  var D = e.keyExtractor;
  var N = void 0 === D ? x : D;
  var $ = e.measureSize;
  var L = void 0 === $ ? w : $;
  var j = e.rangeExtractor;
  var z = void 0 === j ? k : j;
  var Z = C ? "width" : "height";
  var F = C ? "scrollLeft" : "scrollTop";
  var U = useRef({
    scrollOffset: 0,
    measurements: []
  });
  var Q = useState(0);
  var V = Q[0];
  var B = Q[1];
  U.current.scrollOffset = V;
  var q = (I || y)(A, P)[Z];
  U.current.outerSize = q;
  var W = useCallback(function (e) {
    A.current && (A.current[F] = e);
  }, [A, F]);
  var Y = T || W;
  T = useCallback(function (e) {
    Y(e, W);
  }, [W, Y]);
  var G = useState({});
  var X = G[0];
  var H = G[1];
  var K = useCallback(function () {
    return H({});
  }, []);
  var J = useRef([]);
  var ee = useMemo(function () {
    var e = J.current.length > 0 ? Math.min.apply(Math, J.current) : 0;
    J.current = [];
    for (r = U.current.measurements.slice(0, e), n = e, void 0; n < i; n++) {
      var r;
      var n;
      var s = N(n);
      var o = X[s];
      var a = r[n - 1] ? r[n - 1].end : b;
      var h = "number" == typeof o ? o : d(n);
      var p = a + h;
      r[n] = {
        index: n,
        start: a,
        size: h,
        end: p,
        key: s
      };
    }
    return r;
  }, [d, X, b, i, N]);
  var et = ((null == (r = ee[i - 1]) ? void 0 : r.end) || b) + S;
  U.current.measurements = ee;
  U.current.totalSize = et;
  var er = R ? R.current : A.current;
  var en = useRef(M);
  en.current = M;
  v(function () {
    if (!er) {
      B(0);
      return;
    }
    var e = function (e) {
      B(en.current ? en.current(e) : er[F]);
    };
    e();
    er.addEventListener("scroll", e, {
      capture: !1,
      passive: !0
    });
    return function () {
      er.removeEventListener("scroll", e);
    };
  }, [er, F]);
  var ei = E(U.current);
  var es = ei.start;
  var eo = ei.end;
  var ea = useMemo(function () {
    return z({
      start: es,
      end: eo,
      overscan: g,
      size: ee.length
    });
  }, [es, eo, g, ee.length, z]);
  var el = useRef(L);
  el.current = L;
  var eu = useMemo(function () {
    for (e = [], r = function (r, n) {
      var i = ea[r];
      var s = ee[i];
      var a = o(o({}, s), {}, {
        measureRef: function (e) {
          if (e) {
            var r = el.current(e, C);
            if (r !== a.size) {
              var n = U.current.scrollOffset;
              a.start < n && W(n + (r - a.size));
              J.current.push(i);
              H(function (e) {
                var n;
                return o(o({}, e), {}, ((n = {})[a.key] = r, n));
              });
            }
          }
        }
      });
      e.push(a);
    }, n = 0, i = ea.length, void 0; n < i; n++) {
      var e;
      var r;
      var n;
      var i;
      r(n);
    }
    return e;
  }, [ea, W, C, ee]);
  var ec = useRef(!1);
  v(function () {
    ec.current && H({});
    ec.current = !0;
  }, [d]);
  var eh = useCallback(function (e, r) {
    var n = (void 0 === r ? {} : r).align;
    var i = void 0 === n ? "start" : n;
    var s = U.current;
    var o = s.scrollOffset;
    var a = s.outerSize;
    "auto" === i && (i = e <= o ? "start" : e >= o + a ? "end" : "start");
    "start" === i ? T(e) : "end" === i ? T(e - a) : "center" === i && T(e - a / 2);
  }, [T]);
  var ed = useCallback(function (e, r) {
    var n = void 0 === r ? {} : r;
    var s = n.align;
    var h = void 0 === s ? "auto" : s;
    var d = a(n, ["align"]);
    var p = U.current;
    var g = p.measurements;
    var m = p.scrollOffset;
    var v = p.outerSize;
    var y = g[Math.max(0, Math.min(e, i - 1))];
    if (y) {
      if ("auto" === h) {
        if (y.end >= m + v) h = "end";else {
          if (!(y.start <= m)) return;
          h = "start";
        }
      }
      eh("center" === h ? y.start + y.size / 2 : "end" === h ? y.end : y.start, o({
        align: h
      }, d));
    }
  }, [eh, i]);
  return {
    virtualItems: eu,
    totalSize: et,
    scrollToOffset: eh,
    scrollToIndex: useCallback(function () {
      for (e = $$arguments.length, r = Array(e), n = 0, void 0; n < e; n++) {
        var e;
        var r;
        var n;
        r[n] = $$arguments[n];
      }
      ed.apply(void 0, r);
      requestAnimationFrame(function () {
        ed.apply(void 0, r);
      });
    }, [ed]),
    measure: K
  };
}
var S = function (e, r, n, i) {
  for (; e <= r;) {
    var s = (e + r) / 2 | 0;
    var o = n(s);
    if (o < i) e = s + 1;else {
      if (!(o > i)) return s;
      r = s - 1;
    }
  }
  return e > 0 ? e - 1 : 0;
};
function E(e) {
  for (r = e.measurements, n = e.outerSize, i = e.scrollOffset, s = r.length - 1, o = S(0, s, function (e) {
    return r[e].start;
  }, i), a = o, void 0; a < s && r[a].end < i + n;) {
    var r;
    var n;
    var i;
    var s;
    var o;
    var a;
    a++;
  }
  return {
    start: o,
    end: a
  };
}
export const z = $$_0;