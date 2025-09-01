function i(e) {
  for (r = $$arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1, void 0; i < r; i++) {
    var r;
    var n;
    var i;
    n[i - 1] = $$arguments[i];
  }
  throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function (e) {
    return "'" + e + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function s(e) {
  return !!e && !!e[X];
}
function o(e) {
  var r;
  return !!e && (function (e) {
    if (!e || "object" != typeof e) return !1;
    var r = Object.getPrototypeOf(e);
    if (null === r) return !0;
    var n = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
    return n === Object || "function" == typeof n && Function.toString.call(n) === H;
  }(e) || Array.isArray(e) || !!e[G] || !!e.constructor?.[G] || v(e) || y(e));
}
function a(e, r, n) {
  void 0 === n && (n = !1);
  0 === h(e) ? (n ? Object.keys : K)(e).forEach(function (i) {
    n && "symbol" == typeof i || r(i, e[i], e);
  }) : e.forEach(function (n, i) {
    return r(i, n, e);
  });
}
function h(e) {
  var r = e[X];
  return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(e) ? 1 : v(e) ? 2 : y(e) ? 3 : 0;
}
function d(e, r) {
  return 2 === h(e) ? e.has(r) : Object.prototype.hasOwnProperty.call(e, r);
}
function p(e, r) {
  return 2 === h(e) ? e.get(r) : e[r];
}
function g(e, r, n) {
  var i = h(e);
  2 === i ? e.set(r, n) : 3 === i ? e.add(n) : e[r] = n;
}
function m(e, r) {
  return e === r ? 0 !== e || 1 / e == 1 / r : e != e && r != r;
}
function v(e) {
  return B && e instanceof Map;
}
function y(e) {
  return q && e instanceof Set;
}
function b(e) {
  return e.o || e.t;
}
function O(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var r = J(e);
  delete r[X];
  for (n = K(r), i = 0, void 0; i < n.length; i++) {
    var n;
    var i;
    var s = n[i];
    var o = r[s];
    !1 === o.writable && (o.writable = !0, o.configurable = !0);
    (o.get || o.set) && (r[s] = {
      configurable: !0,
      writable: !0,
      enumerable: o.enumerable,
      value: e[s]
    });
  }
  return Object.create(Object.getPrototypeOf(e), r);
}
function x(e, r) {
  void 0 === r && (r = !1);
  k(e) || s(e) || !o(e) || (h(e) > 1 && (e.set = e.add = e.clear = e.$$delete = w), Object.freeze(e), r && a(e, function (e, r) {
    return x(r, !0);
  }, !0));
  return e;
}
function w() {
  i(2);
}
function k(e) {
  return null == e || "object" != typeof e || Object.isFrozen(e);
}
function _(e) {
  var r = ee[e];
  r || i(18, e);
  return r;
}
function S() {
  return Q;
}
function E(e, r) {
  r && (_("Patches"), e.u = [], e.s = [], e.v = r);
}
function A(e) {
  C(e);
  e.p.forEach(I);
  e.p = null;
}
function C(e) {
  e === Q && (Q = e.l);
}
function T(e) {
  return Q = {
    p: [],
    l: Q,
    h: e,
    m: !0,
    _: 0
  };
}
function I(e) {
  var r = e[X];
  0 === r.i || 1 === r.i ? r.j() : r.g = !0;
}
function P(e, r) {
  r._ = r.p.length;
  var n = r.p[0];
  var s = void 0 !== e && e !== n;
  r.h.O || _("ES5").S(r, e, s);
  s ? (n[X].P && (A(r), i(4)), o(e) && (e = R(r, e), r.l || D(r, e)), r.u && _("Patches").M(n[X].t, e, r.u, r.s)) : e = R(r, n, []);
  A(r);
  r.u && r.v(r.u, r.s);
  return e !== Y ? e : void 0;
}
function R(e, r, n) {
  if (k(r)) return r;
  var i = r[X];
  if (!i) {
    a(r, function (s, o) {
      return M(e, i, r, s, o, n);
    }, !0);
    return r;
  }
  if (i.A !== e) return r;
  if (!i.P) {
    D(e, i.t, !0);
    return i.t;
  }
  if (!i.I) {
    i.I = !0;
    i.A._--;
    var s = 4 === i.i || 5 === i.i ? i.o = O(i.k) : i.o;
    var o = s;
    var h = !1;
    3 === i.i && (o = new Set(s), s.clear(), h = !0);
    a(o, function (r, o) {
      return M(e, i, s, r, o, n, h);
    });
    D(e, s, !1);
    n && e.u && _("Patches").N(i, n, e.u, e.s);
  }
  return i.o;
}
function M(e, r, n, i, a, h, p) {
  if (s(a)) {
    var m = R(e, a, h && r && 3 !== r.i && !d(r.R, i) ? h.concat(i) : void 0);
    if (g(n, i, m), !s(m)) return;
    e.m = !1;
  } else p && n.add(a);
  if (o(a) && !k(a)) {
    if (!e.h.D && e._ < 1) return;
    R(e, a);
    r && r.A.l || D(e, a);
  }
}
function D(e, r, n) {
  void 0 === n && (n = !1);
  !e.l && e.h.D && e.m && x(r, n);
}
function N(e, r) {
  var n = e[X];
  return (n ? b(n) : e)[r];
}
function $(e, r) {
  if (r in e) for (var n = Object.getPrototypeOf(e); n;) {
    var i = Object.getOwnPropertyDescriptor(n, r);
    if (i) return i;
    n = Object.getPrototypeOf(n);
  }
}
function L(e) {
  e.P || (e.P = !0, e.l && L(e.l));
}
function j(e) {
  e.o || (e.o = O(e.t));
}
function z(e, r, n) {
  var i = v(r) ? _("MapSet").F(r, n) : y(r) ? _("MapSet").T(r, n) : e.O ? function (e, r) {
    var n = Array.isArray(e);
    var i = {
      i: n ? 1 : 0,
      A: r ? r.A : S(),
      P: !1,
      I: !1,
      R: {},
      l: r,
      t: e,
      k: null,
      o: null,
      j: null,
      C: !1
    };
    var s = i;
    var o = et;
    n && (s = [i], o = er);
    var a = Proxy.revocable(s, o);
    var h = a.revoke;
    var d = a.proxy;
    i.k = d;
    i.j = h;
    return d;
  }(r, n) : _("ES5").J(r, n);
  (n ? n.A : S()).p.push(i);
  return i;
}
function Z(e) {
  s(e) || i(22, e);
  return function e(r) {
    if (!o(r)) return r;
    var n;
    var i = r[X];
    var s = h(r);
    if (i) {
      if (!i.P && (i.i < 4 || !_("ES5").K(i))) return i.t;
      i.I = !0;
      n = F(r, s);
      i.I = !1;
    } else n = F(r, s);
    a(n, function (r, s) {
      i && p(i.t, r) === s || g(n, r, e(s));
    });
    return 3 === s ? new Set(n) : n;
  }(e);
}
function F(e, r) {
  switch (r) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return O(e);
}
var U;
var Q;
var V = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
var B = "undefined" != typeof Map;
var q = "undefined" != typeof Set;
var W = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
var Y = V ? Symbol.$$for("immer-nothing") : ((U = {})["immer-nothing"] = !0, U);
var G = V ? Symbol.$$for("immer-draftable") : "__$immer_draftable";
var X = V ? Symbol.$$for("immer-state") : "__$immer_state";
"undefined" != typeof Symbol && Symbol.iterator;
var H = "" + Object.prototype.constructor;
var K = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : Object.getOwnPropertyNames;
var J = Object.getOwnPropertyDescriptors || function (e) {
  var r = {};
  K(e).forEach(function (n) {
    r[n] = Object.getOwnPropertyDescriptor(e, n);
  });
  return r;
};
var ee = {};
var et = {
  get: function (e, r) {
    if (r === X) return e;
    var n = b(e);
    if (!d(n, r)) return function (e, r, n) {
      var i;
      var s = $(r, n);
      return s ? "value" in s ? s.value : s.get?.call(e.k) : void 0;
    }(e, n, r);
    var i = n[r];
    return e.I || !o(i) ? i : i === N(e.t, r) ? (j(e), e.o[r] = z(e.A.h, i, e)) : i;
  },
  has: function (e, r) {
    return r in b(e);
  },
  ownKeys: function (e) {
    return Reflect.ownKeys(b(e));
  },
  set: function (e, r, n) {
    var i = $(b(e), r);
    if (i?.set) {
      i.set.call(e.k, n);
      return !0;
    }
    if (!e.P) {
      var s = N(b(e), r);
      var o = s?.[X];
      if (o && o.t === n) {
        e.o[r] = n;
        e.R[r] = !1;
        return !0;
      }
      if (m(n, s) && (void 0 !== n || d(e.t, r))) return !0;
      j(e);
      L(e);
    }
    e.o[r] === n && (void 0 !== n || r in e.o) || Number.isNaN(n) && Number.isNaN(e.o[r]) || (e.o[r] = n, e.R[r] = !0);
    return !0;
  },
  deleteProperty: function (e, r) {
    void 0 !== N(e.t, r) || r in e.t ? (e.R[r] = !1, j(e), L(e)) : delete e.R[r];
    e.o && delete e.o[r];
    return !0;
  },
  getOwnPropertyDescriptor: function (e, r) {
    var n = b(e);
    var i = Reflect.getOwnPropertyDescriptor(n, r);
    return i ? {
      writable: !0,
      configurable: 1 !== e.i || "length" !== r,
      enumerable: i.enumerable,
      value: n[r]
    } : i;
  },
  defineProperty: function () {
    i(11);
  },
  getPrototypeOf: function (e) {
    return Object.getPrototypeOf(e.t);
  },
  setPrototypeOf: function () {
    i(12);
  }
};
var er = {};
a(et, function (e, r) {
  er[e] = function () {
    $$arguments[0] = $$arguments[0][0];
    return r.apply(this, arguments);
  };
});
er.deleteProperty = function (e, r) {
  return er.set.call(this, e, r, void 0);
};
er.set = function (e, r, n) {
  return et.set.call(this, e[0], r, n, e[0]);
};
var en = new (function () {
  function e(e) {
    var r = this;
    this.O = W;
    this.D = !0;
    this.produce = function (e, n, s) {
      if ("function" == typeof e && "function" != typeof n) {
        var a;
        var h = n;
        n = e;
        var d = r;
        return function (e) {
          var r = this;
          void 0 === e && (e = h);
          for (i = $$arguments.length, s = Array(i > 1 ? i - 1 : 0), o = 1, void 0; o < i; o++) {
            var i;
            var s;
            var o;
            s[o - 1] = $$arguments[o];
          }
          return d.produce(e, function (e) {
            var i;
            return (i = n).call.apply(i, [r, e].concat(s));
          });
        };
      }
      if ("function" != typeof n && i(6), void 0 !== s && "function" != typeof s && i(7), o(e)) {
        var p = T(r);
        var g = z(r, e, void 0);
        var m = !0;
        try {
          a = n(g);
          m = !1;
        } finally {
          m ? A(p) : C(p);
        }
        return "undefined" != typeof Promise && a instanceof Promise ? a.then(function (e) {
          E(p, s);
          return P(e, p);
        }, function (e) {
          A(p);
          return e;
        }) : (E(p, s), P(a, p));
      }
      if (!e || "object" != typeof e) {
        if (void 0 === (a = n(e)) && (a = e), a === Y && (a = void 0), r.D && x(a, !0), s) {
          var v = [];
          var y = [];
          _("Patches").M(e, a, v, y);
          s(v, y);
        }
        return a;
      }
      i(21, e);
    };
    this.produceWithPatches = function (e, n) {
      if ("function" == typeof e) return function (n) {
        for (i = $$arguments.length, s = Array(i > 1 ? i - 1 : 0), o = 1, void 0; o < i; o++) {
          var i;
          var s;
          var o;
          s[o - 1] = $$arguments[o];
        }
        return r.produceWithPatches(n, function (r) {
          return e.apply(void 0, [r].concat(s));
        });
      };
      var i;
      var s;
      var o = r.produce(e, n, function (e, r) {
        i = e;
        s = r;
      });
      return "undefined" != typeof Promise && o instanceof Promise ? o.then(function (e) {
        return [e, i, s];
      }) : [o, i, s];
    };
    "boolean" == typeof e?.useProxies && this.setUseProxies(e.useProxies);
    "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze);
  }
  var r = e.prototype;
  r.createDraft = function (e) {
    o(e) || i(8);
    s(e) && (e = Z(e));
    var r = T(this);
    var n = z(this, e, void 0);
    n[X].C = !0;
    C(r);
    return n;
  };
  r.finishDraft = function (e, r) {
    var n = (e && e[X]).A;
    E(n, r);
    return P(void 0, n);
  };
  r.setAutoFreeze = function (e) {
    this.D = e;
  };
  r.setUseProxies = function (e) {
    e && !W && i(20);
    this.O = e;
  };
  r.applyPatches = function (e, r) {
    for (n = r.length - 1; n >= 0; n--) {
      var n;
      var i = r[n];
      if (0 === i.path.length && "replace" === i.op) {
        e = i.value;
        break;
      }
    }
    n > -1 && (r = r.slice(n + 1));
    var o = _("Patches").$;
    return s(e) ? o(e, r) : this.produce(e, function (e) {
      return o(e, r);
    });
  };
  return e;
}())();
var $$ei2 = en.produce;
en.produceWithPatches.bind(en);
var $$es1 = en.setAutoFreeze.bind(en);
en.setUseProxies.bind(en);
en.applyPatches.bind(en);
en.createDraft.bind(en);
en.finishDraft.bind(en);
export let $$eo0 = $$ei2;
export const Ay = $$eo0;
export const ht = $$es1;
export const jM = $$ei2;