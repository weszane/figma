import { Ay } from "../vendor/774611";
import { A as _$$A, X as _$$X } from "../vendor/548698";
import { Gw, b as _$$b, Q1, KI, Uw, ef as _$$ef } from "../vendor/936850";
import { Ay as _$$Ay, lG } from "../vendor/241330";
import { A as _$$A2 } from "../vendor/776110";
let a = Math.PI / 180;
let i = 180 / Math.PI;
let u = 4 / 29;
let o = 6 / 29;
let s = 6 / 29 * 3 * (6 / 29);
let c = 6 / 29 * (6 / 29) * (6 / 29);
function f(e) {
  if (e instanceof h) return new h(e.l, e.a, e.b, e.opacity);
  if (e instanceof b) return x(e);
  e instanceof Gw || (e = _$$b(e));
  var n;
  var t;
  var r = v(e.r);
  var a = v(e.g);
  var i = v(e.b);
  var u = p((.2225045 * r + .7168786 * a + .0606169 * i) / 1);
  r === a && a === i ? n = t = u : (n = p((.4360747 * r + .3850649 * a + .1430804 * i) / .96422), t = p((.0139322 * r + .0971045 * a + .7141733 * i) / .82521));
  return new h(116 * u - 16, 500 * (n - u), 200 * (u - t), e.opacity);
}
function d(e, n, t, r) {
  return 1 == $$arguments.length ? f(e) : new h(e, n, t, r);
}
function h(e, n, t, r) {
  this.l = +e;
  this.a = +n;
  this.b = +t;
  this.opacity = +r;
}
function p(e) {
  return e > c ? Math.pow(e, 1 / 3) : e / s + u;
}
function g(e) {
  return e > o ? e * e * e : s * (e - u);
}
function m(e) {
  return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055);
}
function v(e) {
  return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4);
}
function y(e, n, t, r) {
  return 1 == $$arguments.length ? function (e) {
    if (e instanceof b) return new b(e.h, e.c, e.l, e.opacity);
    if (e instanceof h || (e = f(e)), 0 === e.a && 0 === e.b) return new b(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
    var n = Math.atan2(e.b, e.a) * i;
    return new b(n < 0 ? n + 360 : n, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
  }(e) : new b(e, n, t, r);
}
function b(e, n, t, r) {
  this.h = +e;
  this.c = +n;
  this.l = +t;
  this.opacity = +r;
}
function x(e) {
  if (isNaN(e.h)) return new h(e.l, 0, 0, e.opacity);
  var n = e.h * a;
  return new h(e.l, Math.cos(n) * e.c, Math.sin(n) * e.c, e.opacity);
}
_$$A(h, d, _$$X(Q1, {
  brighter(e) {
    return new h(this.l + 18 * e, this.a, this.b, this.opacity);
  },
  darker(e) {
    return new h(this.l - 18 * e, this.a, this.b, this.opacity);
  },
  rgb() {
    var e = (this.l + 16) / 116;
    var n = isNaN(this.a) ? e : e + this.a / 500;
    var t = isNaN(this.b) ? e : e - this.b / 200;
    n = .96422 * g(n);
    e = 1 * g(e);
    t = .82521 * g(t);
    return new Gw(m(3.1338561 * n - 1.6168667 * e - .4906146 * t), m(-.9787684 * n + 1.9161415 * e + .033454 * t), m(.0719453 * n - .2289914 * e + 1.4052427 * t), this.opacity);
  }
}));
_$$A(b, y, _$$X(Q1, {
  brighter(e) {
    return new b(this.h, this.c, this.l + 18 * e, this.opacity);
  },
  darker(e) {
    return new b(this.h, this.c, this.l - 18 * e, this.opacity);
  },
  rgb() {
    return x(this).rgb();
  }
}));
function S(e) {
  return function (n, t) {
    var r = e((n = y(n)).h, (t = y(t)).h);
    var l = _$$Ay(n.c, t.c);
    var a = _$$Ay(n.l, t.l);
    var i = _$$Ay(n.opacity, t.opacity);
    return function (e) {
      n.h = r(e);
      n.c = l(e);
      n.l = a(e);
      n.opacity = i(e);
      return n + "";
    };
  };
}
let w = S(lG);
var N = S(_$$Ay);
function z(e) {
  return function (n, t) {
    var r = e((n = KI(n)).h, (t = KI(t)).h);
    var a = _$$Ay(n.s, t.s);
    var i = _$$Ay(n.l, t.l);
    var u = _$$Ay(n.opacity, t.opacity);
    return function (e) {
      n.h = r(e);
      n.s = a(e);
      n.l = i(e);
      n.opacity = u(e);
      return n + "";
    };
  };
}
let M = z(lG);
var C = z(_$$Ay);
var E = -1.78277 * .29227 - .1347134789;
function P(e, n, t, r) {
  return 1 == $$arguments.length ? function (e) {
    if (e instanceof T) return new T(e.h, e.s, e.l, e.opacity);
    e instanceof Gw || (e = _$$b(e));
    var n = e.r / 255;
    var t = e.g / 255;
    var r = e.b / 255;
    var a = (E * r + -1.7884503806 * n - 3.5172982438 * t) / (E + -1.7884503806 - 3.5172982438);
    var u = r - a;
    var o = -((1.97294 * (t - a) - -.29227 * u) / .90649);
    var s = Math.sqrt(o * o + u * u) / (1.97294 * a * (1 - a));
    var c = s ? Math.atan2(o, u) * i - 120 : NaN;
    return new T(c < 0 ? c + 360 : c, s, a, e.opacity);
  }(e) : new T(e, n, t, r);
}
function T(e, n, t, r) {
  this.h = +e;
  this.s = +n;
  this.l = +t;
  this.opacity = +r;
}
function _(e) {
  return function n(t) {
    function r(n, r) {
      var l = e((n = P(n)).h, (r = P(r)).h);
      var a = _$$Ay(n.s, r.s);
      var i = _$$Ay(n.l, r.l);
      var u = _$$Ay(n.opacity, r.opacity);
      return function (e) {
        n.h = l(e);
        n.s = a(e);
        n.l = i(Math.pow(e, t));
        n.opacity = u(e);
        return n + "";
      };
    }
    t = +t;
    r.gamma = n;
    return r;
  }(1);
}
_$$A(T, P, _$$X(Q1, {
  brighter(e) {
    e = null == e ? Uw : Math.pow(Uw, e);
    return new T(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    e = null == e ? _$$ef : Math.pow(_$$ef, e);
    return new T(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = isNaN(this.h) ? 0 : (this.h + 120) * a;
    var n = +this.l;
    var t = isNaN(this.s) ? 0 : this.s * n * (1 - n);
    var r = Math.cos(e);
    var i = Math.sin(e);
    return new Gw(255 * (n + t * (-.14861 * r + 1.78277 * i)), 255 * (n + t * (-.29227 * r + -.90649 * i)), 255 * (n + 1.97294 * r * t), this.opacity);
  }
}));
var U = {
  lab: function (e, n) {
    var t = _$$Ay((e = d(e)).l, (n = d(n)).l);
    var r = _$$Ay(e.a, n.a);
    var l = _$$Ay(e.b, n.b);
    var a = _$$Ay(e.opacity, n.opacity);
    return function (n) {
      e.l = t(n);
      e.a = r(n);
      e.b = l(n);
      e.opacity = a(n);
      return e + "";
    };
  },
  hcl: w,
  "hcl-long": N,
  hsl: M,
  "hsl-long": C,
  cubehelix: _(lG),
  "cubehelix-long": _(_$$Ay),
  rgb: Ay
};
let I = new Date();
let $$A = new Date();
function L(e, n, t, r) {
  function l(n) {
    e(n = 0 == $$arguments.length ? new Date() : new Date(+n));
    return n;
  }
  l.floor = n => (e(n = new Date(+n)), n);
  l.ceil = t => (e(t = new Date(t - 1)), n(t, 1), e(t), t);
  l.round = e => {
    let n = l(e);
    let t = l.ceil(e);
    return e - n < t - e ? n : t;
  };
  l.offset = (e, t) => (n(e = new Date(+e), null == t ? 1 : Math.floor(t)), e);
  l.range = (t, r, a) => {
    let i;
    let u = [];
    if (t = l.ceil(t), a = null == a ? 1 : Math.floor(a), !(t < r) || !(a > 0)) return u;
    do {
      u.push(i = new Date(+t));
      n(t, a);
      e(t);
    } while (i < t && t < r);
    return u;
  };
  l.filter = t => L(n => {
    if (n >= n) for (; e(n), !t(n);) n.setTime(n - 1);
  }, (e, r) => {
    if (e >= e) {
      if (r < 0) for (; ++r <= 0;) for (; n(e, -1), !t(e););else for (; --r >= 0;) for (; n(e, 1), !t(e););
    }
  });
  t && (l.count = (n, r) => (I.setTime(+n), $$A.setTime(+r), e(I), e($$A), Math.floor(t(I, $$A))), l.every = e => isFinite(e = Math.floor(e)) && e > 0 ? e > 1 ? l.filter(r ? n => r(n) % e == 0 : n => l.count(0, n) % e == 0) : l : null);
  return l;
}
let R = L(e => e.setHours(0, 0, 0, 0), (e, n) => e.setDate(e.getDate() + n), (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 864e5, e => e.getDate() - 1);
R.range;
let F = L(e => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCDate(e.getUTCDate() + n);
}, (e, n) => (n - e) / 864e5, e => e.getUTCDate() - 1);
F.range;
L(e => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCDate(e.getUTCDate() + n);
}, (e, n) => (n - e) / 864e5, e => Math.floor(e / 864e5)).range;
let D = L(e => {
  e.setTime(e - e.getMilliseconds() - 1e3 * e.getSeconds() - 6e4 * e.getMinutes());
}, (e, n) => {
  e.setTime(+e + 36e5 * n);
}, (e, n) => (n - e) / 36e5, e => e.getHours());
D.range;
let $ = L(e => {
  e.setUTCMinutes(0, 0, 0);
}, (e, n) => {
  e.setTime(+e + 36e5 * n);
}, (e, n) => (n - e) / 36e5, e => e.getUTCHours());
$.range;
let H = L(e => {
  e.setTime(e - e.getMilliseconds() - 1e3 * e.getSeconds());
}, (e, n) => {
  e.setTime(+e + 6e4 * n);
}, (e, n) => (n - e) / 6e4, e => e.getMinutes());
H.range;
let O = L(e => {
  e.setUTCSeconds(0, 0);
}, (e, n) => {
  e.setTime(+e + 6e4 * n);
}, (e, n) => (n - e) / 6e4, e => e.getUTCMinutes());
O.range;
let j = L(e => {
  e.setDate(1);
  e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setMonth(e.getMonth() + n);
}, (e, n) => n.getMonth() - e.getMonth() + (n.getFullYear() - e.getFullYear()) * 12, e => e.getMonth());
j.range;
let Q = L(e => {
  e.setUTCDate(1);
  e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCMonth(e.getUTCMonth() + n);
}, (e, n) => n.getUTCMonth() - e.getUTCMonth() + (n.getUTCFullYear() - e.getUTCFullYear()) * 12, e => e.getUTCMonth());
Q.range;
let B = L(e => {
  e.setTime(e - e.getMilliseconds());
}, (e, n) => {
  e.setTime(+e + 1e3 * n);
}, (e, n) => (n - e) / 1e3, e => e.getUTCSeconds());
function W(e) {
  return L(n => {
    n.setDate(n.getDate() - (n.getDay() + 7 - e) % 7);
    n.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + 7 * n);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 6048e5);
}
B.range;
let q = W(0);
let V = W(1);
let Y = W(2);
let G = W(3);
let X = W(4);
let K = W(5);
let Z = W(6);
function J(e) {
  return L(n => {
    n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - e) % 7);
    n.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + 7 * n);
  }, (e, n) => (n - e) / 6048e5);
}
q.range;
V.range;
Y.range;
G.range;
X.range;
K.range;
Z.range;
let ee = J(0);
let en = J(1);
let et = J(2);
let er = J(3);
let el = J(4);
let ea = J(5);
let ei = J(6);
ee.range;
en.range;
et.range;
er.range;
el.range;
ea.range;
ei.range;
let eu = L(e => {
  e.setMonth(0, 1);
  e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n);
}, (e, n) => n.getFullYear() - e.getFullYear(), e => e.getFullYear());
eu.every = e => isFinite(e = Math.floor(e)) && e > 0 ? L(n => {
  n.setFullYear(Math.floor(n.getFullYear() / e) * e);
  n.setMonth(0, 1);
  n.setHours(0, 0, 0, 0);
}, (n, t) => {
  n.setFullYear(n.getFullYear() + t * e);
}) : null;
eu.range;
let eo = L(e => {
  e.setUTCMonth(0, 1);
  e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n);
}, (e, n) => n.getUTCFullYear() - e.getUTCFullYear(), e => e.getUTCFullYear());
eo.every = e => isFinite(e = Math.floor(e)) && e > 0 ? L(n => {
  n.setUTCFullYear(Math.floor(n.getUTCFullYear() / e) * e);
  n.setUTCMonth(0, 1);
  n.setUTCHours(0, 0, 0, 0);
}, (n, t) => {
  n.setUTCFullYear(n.getUTCFullYear() + t * e);
}) : null;
eo.range;
var es = new Date(Date.UTC(2020, 1, 2, 3, 4, 5));
var ec = {
  day: R,
  hour: D,
  minute: H,
  month: j,
  second: B,
  week: q,
  year: eu
};
var ef = {
  day: F,
  hour: $,
  minute: O,
  month: Q,
  second: B,
  week: ee,
  year: eo
};
var eh = ["domain", "nice", "zero", "interpolate", "round", "range", "reverse", "align", "base", "clamp", "constant", "exponent", "padding", "unknown"];
var ep = {
  domain: function (e, n) {
    n.domain && e.domain(n.domain);
  },
  nice: function (e, n) {
    if ("nice" in n && void 0 !== n.nice && "nice" in e) {
      var t = n.nice;
      if ("boolean" == typeof t) t && e.nice();else if ("number" == typeof t) e.nice(t);else {
        var r = "2020-02-02 03:04" === e.tickFormat(1, "%Y-%m-%d %H:%M")(es);
        if ("string" == typeof t) e.nice(r ? ef[t] : ec[t]);else {
          var l = t.interval;
          var a = t.step;
          var i = (r ? ef[l] : ec[l]).every(a);
          null != i && e.nice(i);
        }
      }
    }
  },
  zero: function (e, n) {
    if ("zero" in n && !0 === n.zero) {
      var t = e.domain();
      var r = t[0];
      var l = t[1];
      var a = l < r;
      var i = a ? [l, r] : [r, l];
      var u = [Math.min(0, i[0]), Math.max(0, i[1])];
      e.domain(a ? u.reverse() : u);
    }
  },
  interpolate: function (e, n) {
    if ("interpolate" in n && "interpolate" in e && void 0 !== n.interpolate) {
      var t = function (e) {
        switch (e) {
          case "lab":
          case "hcl":
          case "hcl-long":
          case "hsl":
          case "hsl-long":
          case "cubehelix":
          case "cubehelix-long":
          case "rgb":
            return U[e];
        }
        var n = e.type;
        var t = e.gamma;
        var r = U[n];
        return void 0 === t ? r : r.gamma(t);
      }(n.interpolate);
      e.interpolate(t);
    }
  },
  round: function (e, n) {
    "round" in n && void 0 !== n.round && (n.round && "interpolate" in n && void 0 !== n.interpolate ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", n) : "round" in e ? e.round(n.round) : "interpolate" in e && n.round && e.interpolate(_$$A2));
  },
  align: function (e, n) {
    "align" in e && "align" in n && void 0 !== n.align && e.align(n.align);
  },
  base: function (e, n) {
    "base" in e && "base" in n && void 0 !== n.base && e.base(n.base);
  },
  clamp: function (e, n) {
    "clamp" in e && "clamp" in n && void 0 !== n.clamp && e.clamp(n.clamp);
  },
  constant: function (e, n) {
    "constant" in e && "constant" in n && void 0 !== n.constant && e.constant(n.constant);
  },
  exponent: function (e, n) {
    "exponent" in e && "exponent" in n && void 0 !== n.exponent && e.exponent(n.exponent);
  },
  padding: function (e, n) {
    "padding" in e && "padding" in n && void 0 !== n.padding && e.padding(n.padding);
    "paddingInner" in e && "paddingInner" in n && void 0 !== n.paddingInner && e.paddingInner(n.paddingInner);
    "paddingOuter" in e && "paddingOuter" in n && void 0 !== n.paddingOuter && e.paddingOuter(n.paddingOuter);
  },
  range: function (e, n) {
    n.range && e.range(n.range);
  },
  reverse: function (e, n) {
    if (n.reverse) {
      var t = e.range().slice().reverse();
      e.range(t);
    }
  },
  unknown: function (e, n) {
    "unknown" in e && "unknown" in n && void 0 !== n.unknown && e.unknown(n.unknown);
  }
};
export function $$eg0() {
  for (e = $$arguments.length, n = Array(e), t = 0, void 0; t < e; t++) {
    var e;
    var n;
    var t;
    n[t] = $$arguments[t];
  }
  var r = new Set(n);
  var l = eh.filter(function (e) {
    return r.has(e);
  });
  return function (e, n) {
    void 0 !== n && l.forEach(function (t) {
      ep[t](e, n);
    });
    return e;
  };
}
export const A = $$eg0;