import { A as _$$A } from "../vendor/768613";
import { Ay } from "../vendor/936850";
import { Ay as _$$Ay } from "../vendor/774611";
import { A as _$$A2 } from "../vendor/65441";
import { A as _$$A3 } from "../vendor/776110";
import { C as _$$C } from "../vendor/575983";
let r = Math.sqrt(50);
let l = Math.sqrt(10);
let a = Math.sqrt(2);
function i(e, n, t) {
  let u;
  let o;
  let s;
  let c = (n - e) / Math.max(0, t);
  let f = Math.floor(Math.log10(c));
  let d = c / Math.pow(10, f);
  let h = d >= r ? 10 : d >= l ? 5 : d >= a ? 2 : 1;
  return (f < 0 ? (u = Math.round(e * (s = Math.pow(10, -f) / h)), o = Math.round(n * s), u / s < e && ++u, o / s > n && --o, s = -s) : (u = Math.round(e / (s = Math.pow(10, f) * h)), o = Math.round(n / s), u * s < e && ++u, o * s > n && --o), o < u && .5 <= t && t < 2) ? i(e, n, 2 * t) : [u, o, s];
}
function u(e, n, t) {
  return i(e = +e, n = +n, t = +t)[2];
}
function o(e, n) {
  return null == e || null == n ? NaN : e < n ? -1 : e > n ? 1 : e >= n ? 0 : NaN;
}
function s(e, n) {
  return null == e || null == n ? NaN : n < e ? -1 : n > e ? 1 : n >= e ? 0 : NaN;
}
function c(e) {
  let n;
  let t;
  let r;
  function l(e, r, a = 0, i = e.length) {
    if (a < i) {
      if (0 !== n(r, r)) return i;
      do {
        let n = a + i >>> 1;
        0 > t(e[n], r) ? a = n + 1 : i = n;
      } while (a < i);
    }
    return a;
  }
  2 !== e.length ? (n = o, t = (n, t) => o(e(n), t), r = (n, t) => e(n) - t) : (n = e === o || e === s ? e : f, t = e, r = e);
  return {
    left: l,
    center: function (e, n, t = 0, a = e.length) {
      let i = l(e, n, t, a - 1);
      return i > t && r(e[i - 1], n) > -r(e[i], n) ? i - 1 : i;
    },
    right: function (e, r, l = 0, a = e.length) {
      if (l < a) {
        if (0 !== n(r, r)) return a;
        do {
          let n = l + a >>> 1;
          0 >= t(e[n], r) ? l = n + 1 : a = n;
        } while (l < a);
      }
      return l;
    }
  };
}
function f() {
  return 0;
}
let d = c(o);
let h = d.right;
d.left;
c(function (e) {
  return null === e ? NaN : +e;
}).center;
var p;
var g;
var m;
var v;
function x(e, n) {
  e = +e;
  n = +n;
  return function (t) {
    return e * (1 - t) + n * t;
  };
}
var k = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var S = RegExp(k.source, "g");
function z(e) {
  return +e;
}
var M = [0, 1];
function C(e) {
  return e;
}
function E(e, n) {
  var t;
  return (n -= e = +e) ? function (t) {
    return (t - e) / n;
  } : (t = isNaN(n) ? NaN : .5, function () {
    return t;
  });
}
function P(e, n, t) {
  var r = e[0];
  var l = e[1];
  var a = n[0];
  var i = n[1];
  l < r ? (r = E(l, r), a = t(i, a)) : (r = E(r, l), a = t(a, i));
  return function (e) {
    return a(r(e));
  };
}
function T(e, n, t) {
  var r = Math.min(e.length, n.length) - 1;
  var l = Array(r);
  var a = Array(r);
  var i = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), n = n.slice().reverse()); ++i < r;) {
    l[i] = E(e[i], e[i + 1]);
    a[i] = t(n[i], n[i + 1]);
  }
  return function (n) {
    var t = h(e, n, 1, r) - 1;
    return a[t](l[t](n));
  };
}
var U = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function I(e) {
  var n;
  if (!(n = U.exec(e))) throw Error("invalid format: " + e);
  return new $$A({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
function $$A(e) {
  this.fill = void 0 === e.fill ? " " : e.fill + "";
  this.align = void 0 === e.align ? ">" : e.align + "";
  this.sign = void 0 === e.sign ? "-" : e.sign + "";
  this.symbol = void 0 === e.symbol ? "" : e.symbol + "";
  this.zero = !!e.zero;
  this.width = void 0 === e.width ? void 0 : +e.width;
  this.comma = !!e.comma;
  this.precision = void 0 === e.precision ? void 0 : +e.precision;
  this.trim = !!e.trim;
  this.type = void 0 === e.type ? "" : e.type + "";
}
function L(e, n) {
  if ((t = (e = n ? e.toExponential(n - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var t;
  var r = e.slice(0, t);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(t + 1)];
}
function R(e) {
  return (e = L(Math.abs(e))) ? e[1] : NaN;
}
function F(e, n) {
  var t = L(e, n);
  if (!t) return e + "";
  var r = t[0];
  var l = t[1];
  return l < 0 ? "0." + Array(-l).join("0") + r : r.length > l + 1 ? r.slice(0, l + 1) + "." + r.slice(l + 1) : r + Array(l - r.length + 2).join("0");
}
I.prototype = $$A.prototype;
$$A.prototype.toString = function () {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
};
let D = {
  "%": (e, n) => (100 * e).toFixed(n),
  b: e => Math.round(e).toString(2),
  c: e => e + "",
  d: function (e) {
    return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
  },
  e: (e, n) => e.toExponential(n),
  f: (e, n) => e.toFixed(n),
  g: (e, n) => e.toPrecision(n),
  o: e => Math.round(e).toString(8),
  p: (e, n) => F(100 * e, n),
  r: F,
  s: function (e, n) {
    var t = L(e, n);
    if (!t) return e + "";
    var r = t[0];
    var l = t[1];
    var a = l - (p = 3 * Math.max(-8, Math.min(8, Math.floor(l / 3)))) + 1;
    var i = r.length;
    return a === i ? r : a > i ? r + Array(a - i + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + L(e, Math.max(0, n + a - 1))[0];
  },
  X: e => Math.round(e).toString(16).toUpperCase(),
  x: e => Math.round(e).toString(16)
};
function $(e) {
  return e;
}
var H = Array.prototype.map;
var O = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
m = (g = function (e) {
  var n;
  var t;
  var r;
  var l = void 0 === e.grouping || void 0 === e.thousands ? $ : (n = H.call(e.grouping, Number), t = e.thousands + "", function (e, r) {
    for (l = e.length, a = [], i = 0, u = n[0], o = 0, void 0; l > 0 && u > 0 && (o + u + 1 > r && (u = Math.max(1, r - o)), a.push(e.substring(l -= u, l + u)), !((o += u + 1) > r));) {
      var l;
      var a;
      var i;
      var u;
      var o;
      u = n[i = (i + 1) % n.length];
    }
    return a.reverse().join(t);
  });
  var a = void 0 === e.currency ? "" : e.currency[0] + "";
  var i = void 0 === e.currency ? "" : e.currency[1] + "";
  var u = void 0 === e.decimal ? "." : e.decimal + "";
  var o = void 0 === e.numerals ? $ : (r = H.call(e.numerals, String), function (e) {
    return e.replace(/[0-9]/g, function (e) {
      return r[+e];
    });
  });
  var s = void 0 === e.percent ? "%" : e.percent + "";
  var c = void 0 === e.minus ? "\u2212" : e.minus + "";
  var f = void 0 === e.nan ? "NaN" : e.nan + "";
  function d(e) {
    var n = (e = I(e)).fill;
    var t = e.align;
    var r = e.sign;
    var d = e.symbol;
    var h = e.zero;
    var g = e.width;
    var m = e.comma;
    var v = e.precision;
    var y = e.trim;
    var b = e.type;
    "n" === b ? (m = !0, b = "g") : D[b] || (void 0 === v && (v = 12), y = !0, b = "g");
    (h || "0" === n && "=" === t) && (h = !0, n = "0", t = "=");
    var x = "$" === d ? a : "#" === d && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "";
    var k = "$" === d ? i : /[%p]/.test(b) ? s : "";
    var S = D[b];
    var w = /[defgprs%]/.test(b);
    function N(e) {
      var a;
      var i;
      var s;
      var d = x;
      var N = k;
      if ("c" === b) {
        N = S(e) + N;
        e = "";
      } else {
        var z = (e = +e) < 0 || 1 / e < 0;
        if (e = isNaN(e) ? f : S(Math.abs(e), v), y && (e = function (e) {
          e: for (t = e.length, r = 1, l = -1, void 0; r < t; ++r) {
            var n;
            var t;
            var r;
            var l;
            switch (e[r]) {
              case ".":
                l = n = r;
                break;
              case "0":
                0 === l && (l = r);
                n = r;
                break;
              default:
                if (!+e[r]) break e;
                l > 0 && (l = 0);
            }
          }
          return l > 0 ? e.slice(0, l) + e.slice(n + 1) : e;
        }(e)), z && 0 == +e && "+" !== r && (z = !1), d = (z ? "(" === r ? r : c : "-" === r || "(" === r ? "" : r) + d, N = ("s" === b ? O[8 + p / 3] : "") + N + (z && "(" === r ? ")" : ""), w) {
          for (a = -1, i = e.length; ++a < i;) if (48 > (s = e.charCodeAt(a)) || s > 57) {
            N = (46 === s ? u + e.slice(a + 1) : e.slice(a)) + N;
            e = e.slice(0, a);
            break;
          }
        }
      }
      m && !h && (e = l(e, 1 / 0));
      var M = d.length + e.length + N.length;
      var C = M < g ? Array(g - M + 1).join(n) : "";
      switch (m && h && (e = l(C + e, C.length ? g - N.length : 1 / 0), C = ""), t) {
        case "<":
          e = d + e + N + C;
          break;
        case "=":
          e = d + C + e + N;
          break;
        case "^":
          e = C.slice(0, M = C.length >> 1) + d + e + N + C.slice(M);
          break;
        default:
          e = C + d + e + N;
      }
      return o(e);
    }
    v = void 0 === v ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v));
    N.toString = function () {
      return e + "";
    };
    return N;
  }
  return {
    format: d,
    formatPrefix: function (e, n) {
      var t = d(((e = I(e)).type = "f", e));
      var r = 3 * Math.max(-8, Math.min(8, Math.floor(R(n) / 3)));
      var l = Math.pow(10, -r);
      var a = O[8 + r / 3];
      return function (e) {
        return t(l * e) + a;
      };
    }
  };
}({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
})).format;
v = g.formatPrefix;
var j = _$$A("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
export function $$Q0(e) {
  return j(function e() {
    var n;
    var t = function () {
      var e;
      var n;
      var t;
      var r;
      var l;
      var a;
      var i = M;
      var u = M;
      var o = function e(n, t) {
        var r;
        var l;
        var a = typeof t;
        return null == t || "boolean" === a ? _$$A2(t) : ("number" === a ? x : "string" === a ? (l = Ay(t)) ? (t = l, _$$Ay) : function (e, n) {
          var t;
          var r;
          var l;
          var a;
          var i;
          var u = k.lastIndex = S.lastIndex = 0;
          var o = -1;
          var s = [];
          var c = [];
          for (e += "", n += ""; (l = k.exec(e)) && (a = S.exec(n));) {
            (i = a.index) > u && (i = n.slice(u, i), s[o] ? s[o] += i : s[++o] = i);
            (l = l[0]) === (a = a[0]) ? s[o] ? s[o] += a : s[++o] = a : (s[++o] = null, c.push({
              i: o,
              x: x(l, a)
            }));
            u = S.lastIndex;
          }
          u < n.length && (i = n.slice(u), s[o] ? s[o] += i : s[++o] = i);
          return s.length < 2 ? c[0] ? (t = c[0].x, function (e) {
            return t(e) + "";
          }) : (r = n, function () {
            return r;
          }) : (n = c.length, function (e) {
            for (r = 0, void 0; r < n; ++r) {
              var t;
              var r;
              s[(t = c[r]).i] = t.x(e);
            }
            return s.join("");
          });
        } : t instanceof Ay ? _$$Ay : t instanceof Date ? function (e, n) {
          var t = new Date();
          e = +e;
          n = +n;
          return function (r) {
            t.setTime(e * (1 - r) + n * r);
            return t;
          };
        } : !ArrayBuffer.isView(r = t) || r instanceof DataView ? Array.isArray(t) ? function (n, t) {
          var r;
          var l = t ? t.length : 0;
          var a = n ? Math.min(l, n.length) : 0;
          var i = Array(a);
          var u = Array(l);
          for (r = 0; r < a; ++r) i[r] = e(n[r], t[r]);
          for (; r < l; ++r) u[r] = t[r];
          return function (e) {
            for (r = 0; r < a; ++r) u[r] = i[r](e);
            return u;
          };
        } : "function" != typeof t.valueOf && "function" != typeof t.toString || isNaN(t) ? function (n, t) {
          var r;
          var l = {};
          var a = {};
          for (r in (null === n || "object" != typeof n) && (n = {}), (null === t || "object" != typeof t) && (t = {}), t) r in n ? l[r] = e(n[r], t[r]) : a[r] = t[r];
          return function (e) {
            for (r in l) a[r] = l[r](e);
            return a;
          };
        } : x : function (e, n) {
          n || (n = []);
          var t;
          var r = e ? Math.min(n.length, e.length) : 0;
          var l = n.slice();
          return function (a) {
            for (t = 0; t < r; ++t) l[t] = e[t] * (1 - a) + n[t] * a;
            return l;
          };
        })(n, t);
      };
      var s = C;
      function c() {
        var e;
        var n;
        var t;
        var o = Math.min(i.length, u.length);
        s !== C && (e = i[0], n = i[o - 1], e > n && (t = e, e = n, n = t), s = function (t) {
          return Math.max(e, Math.min(n, t));
        });
        r = o > 2 ? T : P;
        l = a = null;
        return f;
      }
      function f(n) {
        return null == n || isNaN(n = +n) ? t : (l || (l = r(i.map(e), u, o)))(e(s(n)));
      }
      f.invert = function (t) {
        return s(n((a || (a = r(u, i.map(e), x)))(t)));
      };
      f.domain = function (e) {
        return $$arguments.length ? (i = Array.from(e, z), c()) : i.slice();
      };
      f.range = function (e) {
        return $$arguments.length ? (u = Array.from(e), c()) : u.slice();
      };
      f.rangeRound = function (e) {
        u = Array.from(e);
        o = _$$A3;
        return c();
      };
      f.clamp = function (e) {
        return $$arguments.length ? (s = !!e || C, c()) : s !== C;
      };
      f.interpolate = function (e) {
        return $$arguments.length ? (o = e, c()) : o;
      };
      f.unknown = function (e) {
        return $$arguments.length ? (t = e, f) : t;
      };
      return function (t, r) {
        e = t;
        n = r;
        return c();
      };
    }()(C, C);
    t.copy = function () {
      return e().domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
    };
    _$$C.apply(t, arguments);
    n = t.domain;
    t.ticks = function (e) {
      var t = n();
      return function (e, n, t) {
        if (n = +n, e = +e, !((t = +t) > 0)) return [];
        if (e === n) return [e];
        let r = n < e;
        let [l, a, u] = r ? i(n, e, t) : i(e, n, t);
        if (!(a >= l)) return [];
        let o = a - l + 1;
        let s = Array(o);
        if (r) {
          if (u < 0) for (let e = 0; e < o; ++e) s[e] = -((a - e) / u);else for (let e = 0; e < o; ++e) s[e] = (a - e) * u;
        } else if (u < 0) for (let e = 0; e < o; ++e) s[e] = -((l + e) / u);else for (let e = 0; e < o; ++e) s[e] = (l + e) * u;
        return s;
      }(t[0], t[t.length - 1], e);
    };
    t.tickFormat = function (e, t) {
      var r = n();
      return function (e, n, t, r) {
        var l;
        var a;
        var i = function (e, n, t) {
          n = +n;
          e = +e;
          t = +t;
          let r = n < e;
          let l = r ? u(n, e, t) : u(e, n, t);
          return (r ? -1 : 1) * (l < 0 ? -(1 / l) : l);
        }(e, n, t);
        switch ((r = I(r)).type) {
          case "s":
            var o = Math.max(Math.abs(e), Math.abs(n));
            null != r.precision || isNaN(a = Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(R(o) / 3))) - R(Math.abs(i)))) || (r.precision = a);
            return v(r, o);
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != r.precision || isNaN(a = Math.max(0, R(Math.abs(Math.max(Math.abs(e), Math.abs(n))) - (l = Math.abs(l = i))) - R(l)) + 1) || (r.precision = a - ("e" === r.type));
            break;
          case "f":
          case "%":
            null != r.precision || isNaN(a = Math.max(0, -R(Math.abs(i)))) || (r.precision = a - ("%" === r.type) * 2);
        }
        return m(r);
      }(r[0], r[r.length - 1], e, t);
    };
    t.nice = function (e) {
      null == e && (e = 10);
      var r;
      var l;
      var a = n();
      var i = 0;
      var o = a.length - 1;
      var s = a[i];
      var c = a[o];
      var f = 10;
      for (c < s && (l = s, s = c, c = l, l = i, i = o, o = l); f-- > 0;) {
        if ((l = u(s, c, e)) === r) {
          a[i] = s;
          a[o] = c;
          return n(a);
        }
        if (l > 0) {
          s = Math.floor(s / l) * l;
          c = Math.ceil(c / l) * l;
        } else if (l < 0) {
          s = Math.ceil(s * l) / l;
          c = Math.floor(c * l) / l;
        } else break;
        r = l;
      }
      return t;
    };
    return t;
  }(), e);
}
export const A = $$Q0;