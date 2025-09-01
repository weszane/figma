import { createElement, Fragment } from "react";
import l from "../vendor/503698";
import { A as _$$A } from "../vendor/355231";
import { A as _$$A2 } from "../vendor/49372";
import { A as _$$A3 } from "../vendor/413406";
var a = l;
var i = Array.prototype.slice;
function u(e) {
  return function () {
    return e;
  };
}
function o(e, n) {
  if ((l = e.length) > 1) for (a = 1, i = e[n[0]], u = i.length, void 0; a < l; ++a) {
    var t;
    var r;
    var l;
    var a;
    var i;
    var u;
    for (r = i, i = e[n[a]], t = 0; t < u; ++t) i[t][1] += i[t][0] = isNaN(r[t][1]) ? r[t][0] : r[t][1];
  }
}
function s(e) {
  for (n = e.length, t = Array(n), void 0; --n >= 0;) {
    var n;
    var t;
    t[n] = n;
  }
  return t;
}
function c(e, n) {
  return e[n];
}
function d(e) {
  return e?.[0];
}
function h(e) {
  return e?.[1];
}
function g(e) {
  var n = e.map(m);
  return s(e).sort(function (e, t) {
    return n[e] - n[t];
  });
}
function m(e) {
  for (t = 0, r = -1, l = e.length, void 0; ++r < l;) {
    var n;
    var t;
    var r;
    var l;
    (n = +e[r][1]) && (t += n);
  }
  return t;
}
function v(e) {
  for (t = -1, r = 0, l = e.length, a = -1 / 0, void 0; ++t < l;) {
    var n;
    var t;
    var r;
    var l;
    var a;
    (n = +e[t][1]) > a && (a = n, r = t);
  }
  return r;
}
var y = {
  ascending: g,
  descending: function (e) {
    return g(e).reverse();
  },
  insideout: function (e) {
    var n;
    var t;
    var r;
    var l = e.length;
    var a = e.map(m);
    n = e.map(v);
    var i = s(e).sort(function (e, t) {
      return n[e] - n[t];
    });
    var u = 0;
    var o = 0;
    var c = [];
    var f = [];
    for (t = 0; t < l; ++t) {
      r = i[t];
      u < o ? (u += a[r], c.push(r)) : (o += a[r], f.push(r));
    }
    return f.reverse().concat(c);
  },
  none: s,
  reverse: function (e) {
    return s(e).reverse();
  }
};
Object.keys(y);
var b = {
  expand: function (e, n) {
    if ((r = e.length) > 0) {
      for (a = 0, i = e[0].length, void 0; a < i; ++a) {
        var t;
        var r;
        var l;
        var a;
        var i;
        for (l = t = 0; t < r; ++t) l += e[t][a][1] || 0;
        if (l) for (t = 0; t < r; ++t) e[t][a][1] /= l;
      }
      o(e, n);
    }
  },
  diverging: function (e, n) {
    if ((u = e.length) > 0) for (o = 0, s = e[n[0]].length, void 0; o < s; ++o) {
      var t;
      var r;
      var l;
      var a;
      var i;
      var u;
      var o;
      var s;
      for (a = i = 0, t = 0; t < u; ++t) (l = (r = e[n[t]][o])[1] - r[0]) > 0 ? (r[0] = a, r[1] = a += l) : l < 0 ? (r[1] = i, r[0] = i += l) : (r[0] = 0, r[1] = l);
    }
  },
  none: o,
  silhouette: function (e, n) {
    if ((t = e.length) > 0) {
      for (r = 0, l = e[n[0]], a = l.length, void 0; r < a; ++r) {
        var t;
        var r;
        var l;
        var a;
        for (i = 0, u = 0, void 0; i < t; ++i) {
          var i;
          var u;
          u += e[i][r][1] || 0;
        }
        l[r][1] += l[r][0] = -u / 2;
      }
      o(e, n);
    }
  },
  wiggle: function (e, n) {
    if ((l = e.length) > 0 && (r = (t = e[n[0]]).length) > 0) {
      for (a = 0, i = 1, void 0; i < r; ++i) {
        var t;
        var r;
        var l;
        var a;
        var i;
        for (u = 0, s = 0, c = 0, void 0; u < l; ++u) {
          var u;
          var s;
          var c;
          for (f = e[n[u]], d = f[i][1] || 0, h = (d - (f[i - 1][1] || 0)) / 2, p = 0, void 0; p < u; ++p) {
            var f;
            var d;
            var h;
            var p;
            var g = e[n[p]];
            h += (g[i][1] || 0) - (g[i - 1][1] || 0);
          }
          s += d;
          c += h * d;
        }
        t[i - 1][1] += t[i - 1][0] = a;
        s && (a -= c / s);
      }
      t[i - 1][1] += t[i - 1][0] = a;
      o(e, n);
    }
  }
};
Object.keys(b);
var k = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function S() {
  return (S = Object.assign ? Object.assign.bind() : function (e) {
    for (var n = 1; n < $$arguments.length; n++) {
      var t = $$arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
export function $$w0(e) {
  var n = e.data;
  var t = e.className;
  var l = e.top;
  var g = e.left;
  var m = e.x;
  var v = e.y0;
  var w = void 0 === v ? d : v;
  var N = e.y1;
  var z = void 0 === N ? h : N;
  var M = e.xScale;
  var C = e.yScale;
  var E = e.color;
  var P = e.keys;
  var T = e.value;
  var _ = e.order;
  var U = e.offset;
  var I = e.children;
  var A = function (e, n) {
    if (null == e) return {};
    var t;
    var r;
    var l = {};
    var a = Object.keys(e);
    for (r = 0; r < a.length; r++) {
      t = a[r];
      n.indexOf(t) >= 0 || (l[t] = e[t]);
    }
    return l;
  }(e, k);
  var L = function () {
    var e = u([]);
    var n = s;
    var t = o;
    var r = c;
    function l(l) {
      var a;
      var i;
      var u = e.apply(this, arguments);
      var o = l.length;
      var s = u.length;
      var c = Array(s);
      for (a = 0; a < s; ++a) {
        for (d = u[a], h = c[a] = Array(o), p = 0, void 0; p < o; ++p) {
          var f;
          var d;
          var h;
          var p;
          h[p] = f = [0, +r(l[p], d, p, l)];
          f.data = l[p];
        }
        h.key = d;
      }
      for (a = 0, i = n(c); a < s; ++a) c[i[a]].index = a;
      t(c, i);
      return c;
    }
    l.keys = function (n) {
      return $$arguments.length ? (e = "function" == typeof n ? n : u(i.call(n)), l) : e;
    };
    l.value = function (e) {
      return $$arguments.length ? (r = "function" == typeof e ? e : u(+e), l) : r;
    };
    l.order = function (e) {
      return $$arguments.length ? (n = null == e ? s : "function" == typeof e ? e : u(i.call(e)), l) : n;
    };
    l.offset = function (e) {
      return $$arguments.length ? (t = e, l) : t;
    };
    return l;
  }();
  P && L.keys(P);
  T && L.value(T);
  _ && L.order(_ && y[_] || y.none);
  U && L.offset(U && b[U] || b.none);
  var R = L(n);
  var F = _$$A2(M);
  var D = R.map(function (e, n) {
    var t = e.key;
    return {
      index: n,
      key: t,
      bars: e.map(function (n, r) {
        var l = (C(w(n)) || 0) - (C(z(n)) || 0);
        var a = C(z(n));
        var i = "bandwidth" in M ? M(m(n.data)) : Math.max((M(m(n.data)) || 0) - F / 2);
        return {
          bar: n,
          key: t,
          index: r,
          height: l,
          width: F,
          x: i || 0,
          y: a || 0,
          color: E(e.key, r)
        };
      })
    };
  });
  return I ? createElement(Fragment, null, I(D)) : createElement(_$$A, {
    className: a()("visx-bar-stack", t),
    top: l,
    left: g
  }, D.map(function (e) {
    return e.bars.map(function (n) {
      return createElement(_$$A3, S({
        key: "bar-stack-" + e.index + "-" + n.index,
        x: n.x,
        y: n.y,
        height: n.height,
        width: n.width,
        fill: n.color
      }, A));
    });
  }));
}
export const A = $$w0;