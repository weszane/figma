var r;
var i;
i = function (e) {
  var t = ["N", "E", "A", "D"];
  function n(e, t) {
    e.super_ = t;
    e.prototype = Object.create(t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
  }
  function r(e, t) {
    Object.defineProperty(this, "kind", {
      value: e,
      enumerable: !0
    });
    t && t.length && Object.defineProperty(this, "path", {
      value: t,
      enumerable: !0
    });
  }
  function i(e, t, n) {
    i.super_.call(this, "E", e);
    Object.defineProperty(this, "lhs", {
      value: t,
      enumerable: !0
    });
    Object.defineProperty(this, "rhs", {
      value: n,
      enumerable: !0
    });
  }
  function A(e, t) {
    A.super_.call(this, "N", e);
    Object.defineProperty(this, "rhs", {
      value: t,
      enumerable: !0
    });
  }
  function o(e, t) {
    o.super_.call(this, "D", e);
    Object.defineProperty(this, "lhs", {
      value: t,
      enumerable: !0
    });
  }
  function s(e, t, n) {
    s.super_.call(this, "A", e);
    Object.defineProperty(this, "index", {
      value: t,
      enumerable: !0
    });
    Object.defineProperty(this, "item", {
      value: n,
      enumerable: !0
    });
  }
  function a(e, t, n) {
    var r = e.slice((n || t) + 1 || e.length);
    e.length = t < 0 ? e.length + t : t;
    e.push.apply(e, r);
    return e;
  }
  function l(e) {
    var t = typeof e;
    return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
  }
  function u(e) {
    var t = 0;
    if (0 === e.length) return t;
    for (var n = 0; n < e.length; n++) {
      t = (t << 5) - t + e.charCodeAt(n);
      t &= t;
    }
    return t;
  }
  function g(e) {
    var t = 0;
    var n = l(e);
    if ("array" === n) {
      e.forEach(function (e) {
        t += g(e);
      });
      var r = "[type: array, hash: " + t + "]";
      return t + u(r);
    }
    if ("object" === n) {
      for (var i in e) if (e.hasOwnProperty(i)) {
        var A = "[ type: object, key: " + i + ", value hash: " + g(e[i]) + "]";
        t += u(A);
      }
      return t;
    }
    return t + u("[ type: " + n + " ; value: " + e + "]");
  }
  function c(e, t, n, r, a, u, f, d) {
    n = n || [];
    f = f || [];
    var h;
    var p;
    var C;
    var I;
    var E = (a = a || []).slice(0);
    if (null != u) {
      if (r) {
        if ("function" == typeof r && r(E, u)) return;
        if ("object" == typeof r) {
          if (r.prefilter && r.prefilter(E, u)) return;
          if (r.normalize) {
            var B = r.normalize(E, u, e, t);
            B && (e = B[0], t = B[1]);
          }
        }
      }
      E.push(u);
    }
    "regexp" === l(e) && "regexp" === l(t) && (e = e.toString(), t = t.toString());
    var m = typeof e;
    var y = typeof t;
    var _ = "undefined" !== m || f && f.length > 0 && f[f.length - 1].lhs && Object.getOwnPropertyDescriptor(f[f.length - 1].lhs, u);
    var Q = "undefined" !== y || f && f.length > 0 && f[f.length - 1].rhs && Object.getOwnPropertyDescriptor(f[f.length - 1].rhs, u);
    if (!_ && Q) n.push(new A(E, t));else if (!Q && _) n.push(new o(E, e));else if (l(e) !== l(t)) n.push(new i(E, e, t));else if ("date" === l(e) && e - t != 0) n.push(new i(E, e, t));else if ("object" === m && null !== e && null !== t) {
      for (h = f.length - 1; h > -1; --h) if (f[h].lhs === e) {
        I = !0;
        break;
      }
      if (I) e !== t && n.push(new i(E, e, t));else {
        if (f.push({
          lhs: e,
          rhs: t
        }), Array.isArray(e)) {
          for (d && (e.sort(function (e, t) {
            return g(e) - g(t);
          }), t.sort(function (e, t) {
            return g(e) - g(t);
          })), h = t.length - 1, p = e.length - 1; h > p;) n.push(new s(E, h, new A(void 0, t[h--])));
          for (; p > h;) n.push(new s(E, p, new o(void 0, e[p--])));
          for (; h >= 0; --h) c(e[h], t[h], n, r, E, h, f, d);
        } else {
          var D = Object.keys(e);
          var w = Object.keys(t);
          for (h = 0; h < D.length; ++h) {
            C = D[h];
            (I = w.indexOf(C)) >= 0 ? (c(e[C], t[C], n, r, E, C, f, d), w[I] = null) : c(e[C], void 0, n, r, E, C, f, d);
          }
          for (h = 0; h < w.length; ++h) (C = w[h]) && c(void 0, t[C], n, r, E, C, f, d);
        }
        f.length = f.length - 1;
      }
    } else e === t || "number" === m && isNaN(e) && isNaN(t) || n.push(new i(E, e, t));
  }
  function f(e, t, n, r, i) {
    var A = [];
    if (c(e, t, A, r, null, null, null, i), n) for (var o = 0; o < A.length; ++o) n(A[o]);
    return A;
  }
  function d(e, t, n, r) {
    var i = f(e, t, r ? function (e) {
      e && r.push(e);
    } : void 0, n);
    return r || (i.length ? i : void 0);
  }
  function h(e, n, r) {
    if (void 0 === r && n && ~t.indexOf(n.kind) && (r = n), e && r && r.kind) {
      for (i = e, A = -1, o = r.path ? r.path.length - 1 : 0, void 0; ++A < o;) {
        var i;
        var A;
        var o;
        void 0 === i[r.path[A]] && (i[r.path[A]] = void 0 !== r.path[A + 1] && "number" == typeof r.path[A + 1] ? [] : {});
        i = i[r.path[A]];
      }
      switch (r.kind) {
        case "A":
          r.path && void 0 === i[r.path[A]] && (i[r.path[A]] = []);
          (function e(t, n, r) {
            if (r.path && r.path.length) {
              var i;
              var A = t[n];
              var o = r.path.length - 1;
              for (i = 0; i < o; i++) A = A[r.path[i]];
              switch (r.kind) {
                case "A":
                  e(A[r.path[i]], r.index, r.item);
                  break;
                case "D":
                  delete A[r.path[i]];
                  break;
                case "E":
                case "N":
                  A[r.path[i]] = r.rhs;
              }
            } else switch (r.kind) {
              case "A":
                e(t[n], r.index, r.item);
                break;
              case "D":
                t = a(t, n);
                break;
              case "E":
              case "N":
                t[n] = r.rhs;
            }
            return t;
          })(r.path ? i[r.path[A]] : i, r.index, r.item);
          break;
        case "D":
          delete i[r.path[A]];
          break;
        case "E":
        case "N":
          i[r.path[A]] = r.rhs;
      }
    }
  }
  n(i, r);
  n(A, r);
  n(o, r);
  n(s, r);
  Object.defineProperties(d, {
    diff: {
      value: d,
      enumerable: !0
    },
    orderIndependentDiff: {
      value: function (e, t, n, r) {
        var i = f(e, t, r ? function (e) {
          e && r.push(e);
        } : void 0, n, !0);
        return r || (i.length ? i : void 0);
      },
      enumerable: !0
    },
    observableDiff: {
      value: f,
      enumerable: !0
    },
    orderIndependentObservableDiff: {
      value: function (e, t, n, r, i, A, o) {
        return c(e, t, n, r, i, A, o, !0);
      },
      enumerable: !0
    },
    orderIndepHash: {
      value: g,
      enumerable: !0
    },
    applyDiff: {
      value: function (e, t, n) {
        e && t && f(e, t, function (r) {
          (!n || n(e, t, r)) && h(e, t, r);
        });
      },
      enumerable: !0
    },
    applyChange: {
      value: h,
      enumerable: !0
    },
    revertChange: {
      value: function (e, t, n) {
        if (e && t && n && n.kind) {
          var r;
          var i;
          var A = e;
          for (r = 0, i = n.path.length - 1; r < i; r++) {
            void 0 === A[n.path[r]] && (A[n.path[r]] = {});
            A = A[n.path[r]];
          }
          switch (n.kind) {
            case "A":
              !function e(t, n, r) {
                if (r.path && r.path.length) {
                  var i;
                  var A = t[n];
                  var o = r.path.length - 1;
                  for (i = 0; i < o; i++) A = A[r.path[i]];
                  switch (r.kind) {
                    case "A":
                      e(A[r.path[i]], r.index, r.item);
                      break;
                    case "D":
                    case "E":
                      A[r.path[i]] = r.lhs;
                      break;
                    case "N":
                      delete A[r.path[i]];
                  }
                } else switch (r.kind) {
                  case "A":
                    e(t[n], r.index, r.item);
                    break;
                  case "D":
                  case "E":
                    t[n] = r.lhs;
                    break;
                  case "N":
                    t = a(t, n);
                }
                return t;
              }(A[n.path[r]], n.index, n.item);
              break;
            case "D":
            case "E":
              A[n.path[r]] = n.lhs;
              break;
            case "N":
              delete A[n.path[r]];
          }
        }
      },
      enumerable: !0
    },
    isConflict: {
      value: function () {
        return "undefined" != typeof $conflict;
      },
      enumerable: !0
    }
  });
  d.DeepDiff = d;
  e && (e.DeepDiff = d);
  return d;
}(this);
void 0 !== (r = function () {
  return i;
}.call(exports, require, exports, module)) && (module.exports = r);