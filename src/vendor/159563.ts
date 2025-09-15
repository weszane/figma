function i(e) {
  for (r = $$arguments.length, n = Array.from({ length: r > 1 ? r - 1 : 0 }), i = 1, void 0; i < r; i++) {
    var r
    var n
    var i
    n[i - 1] = $$arguments[i]
  }
  throw new Error(`[Immer] minified error nr: ${e}${n.length
    ? ` ${n.map((e) => {
      return `'${e}'`
    }).join(',')}`
    : ''}. Find the full error at: https://bit.ly/3cXEKWf`)
}
function s(e) {
  return !!e && !!e[X]
}
function o(e) {
  let r
  return !!e && ((function (e) {
    if (!e || typeof e != 'object')
      return !1
    let r = Object.getPrototypeOf(e)
    if (r === null)
      return !0
    let n = Object.hasOwnProperty.call(r, 'constructor') && r.constructor
    return n === Object || typeof n == 'function' && Function.toString.call(n) === H
  }(e)) || Array.isArray(e) || !!e[G] || !!e.constructor?.[G] || v(e) || y(e))
}
function a(e, r, n) {
  void 0 === n && (n = !1)
  h(e) === 0
    ? (n ? Object.keys : K)(e).forEach((i) => {
        n && typeof i == 'symbol' || r(i, e[i], e)
      })
    : e.forEach((n, i) => {
        return r(i, n, e)
      })
}
function h(e) {
  let r = e[X]
  return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(e) ? 1 : v(e) ? 2 : y(e) ? 3 : 0
}
function d(e, r) {
  return h(e) === 2 ? e.has(r) : Object.prototype.hasOwnProperty.call(e, r)
}
function p(e, r) {
  return h(e) === 2 ? e.get(r) : e[r]
}
function g(e, r, n) {
  let i = h(e)
  i === 2 ? e.set(r, n) : i === 3 ? e.add(n) : e[r] = n
}
function m(e, r) {
  return e === r ? e !== 0 || 1 / e == 1 / r : e != e && r != r
}
function v(e) {
  return B && e instanceof Map
}
function y(e) {
  return q && e instanceof Set
}
function b(e) {
  return e.o || e.t
}
function O(e) {
  if (Array.isArray(e))
    return Array.prototype.slice.call(e)
  let r = J(e)
  delete r[X]
  for (n = K(r), i = 0, void 0; i < n.length; i++) {
    var n
    var i
    let s = n[i]
    let o = r[s]
    !1 === o.writable && (o.writable = !0, o.configurable = !0);
    (o.get || o.set) && (r[s] = {
      configurable: !0,
      writable: !0,
      enumerable: o.enumerable,
      value: e[s],
    })
  }
  return Object.create(Object.getPrototypeOf(e), r)
}
function x(e, r) {
  void 0 === r && (r = !1)
  k(e) || s(e) || !o(e) || (h(e) > 1 && (e.set = e.add = e.clear = e.$$delete = w), Object.freeze(e), r && a(e, (e, r) => {
    return x(r, !0)
  }, !0))
  return e
}
function w() {
  i(2)
}
function k(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e)
}
function _(e) {
  let r = ee[e]
  r || i(18, e)
  return r
}
function S() {
  return Q
}
function E(e, r) {
  r && (_('Patches'), e.u = [], e.s = [], e.v = r)
}
function A(e) {
  C(e)
  e.p.forEach(I)
  e.p = null
}
function C(e) {
  e === Q && (Q = e.l)
}
function T(e) {
  return Q = {
    p: [],
    l: Q,
    h: e,
    m: !0,
    _: 0,
  }
}
function I(e) {
  let r = e[X]
  r.i === 0 || r.i === 1 ? r.j() : r.g = !0
}
function P(e, r) {
  r._ = r.p.length
  let n = r.p[0]
  let s = void 0 !== e && e !== n
  r.h.O || _('ES5').S(r, e, s)
  s ? (n[X].P && (A(r), i(4)), o(e) && (e = R(r, e), r.l || D(r, e)), r.u && _('Patches').M(n[X].t, e, r.u, r.s)) : e = R(r, n, [])
  A(r)
  r.u && r.v(r.u, r.s)
  return e !== Y ? e : void 0
}
function R(e, r, n) {
  if (k(r))
    return r
  let i = r[X]
  if (!i) {
    a(r, (s, o) => {
      return M(e, i, r, s, o, n)
    }, !0)
    return r
  }
  if (i.A !== e)
    return r
  if (!i.P) {
    D(e, i.t, !0)
    return i.t
  }
  if (!i.I) {
    i.I = !0
    i.A._--
    let s = i.i === 4 || i.i === 5 ? i.o = O(i.k) : i.o
    let o = s
    let h = !1
    i.i === 3 && (o = new Set(s), s.clear(), h = !0)
    a(o, (r, o) => {
      return M(e, i, s, r, o, n, h)
    })
    D(e, s, !1)
    n && e.u && _('Patches').N(i, n, e.u, e.s)
  }
  return i.o
}
function M(e, r, n, i, a, h, p) {
  if (s(a)) {
    let m = R(e, a, h && r && r.i !== 3 && !d(r.R, i) ? h.concat(i) : void 0)
    if (g(n, i, m), !s(m))
      return
    e.m = !1
  }
  else {
    p && n.add(a)
  }
  if (o(a) && !k(a)) {
    if (!e.h.D && e._ < 1)
      return
    R(e, a)
    r && r.A.l || D(e, a)
  }
}
function D(e, r, n) {
  void 0 === n && (n = !1)
  !e.l && e.h.D && e.m && x(r, n)
}
function N(e, r) {
  let n = e[X]
  return (n ? b(n) : e)[r]
}
function $(e, r) {
  if (r in e) {
    for (let n = Object.getPrototypeOf(e); n;) {
      let i = Object.getOwnPropertyDescriptor(n, r)
      if (i)
        return i
      n = Object.getPrototypeOf(n)
    }
  }
}
function L(e) {
  e.P || (e.P = !0, e.l && L(e.l))
}
function j(e) {
  e.o || (e.o = O(e.t))
}
function z(e, r, n) {
  let i = v(r)
    ? _('MapSet').F(r, n)
    : y(r)
      ? _('MapSet').T(r, n)
      : e.O
        ? (function (e, r) {
            let n = Array.isArray(e)
            let i = {
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
              C: !1,
            }
            let s = i
            let o = et
            n && (s = [i], o = er)
            let a = Proxy.revocable(s, o)
            let h = a.revoke
            let d = a.proxy
            i.k = d
            i.j = h
            return d
          }(r, n))
        : _('ES5').J(r, n);
  (n ? n.A : S()).p.push(i)
  return i
}
function Z(e) {
  s(e) || i(22, e)
  return (function e(r) {
    if (!o(r))
      return r
    let n
    let i = r[X]
    let s = h(r)
    if (i) {
      if (!i.P && (i.i < 4 || !_('ES5').K(i)))
        return i.t
      i.I = !0
      n = F(r, s)
      i.I = !1
    }
    else {
      n = F(r, s)
    }
    a(n, (r, s) => {
      i && p(i.t, r) === s || g(n, r, e(s))
    })
    return s === 3 ? new Set(n) : n
  }(e))
}
function F(e, r) {
  switch (r) {
    case 2:
      return new Map(e)
    case 3:
      return Array.from(e)
  }
  return O(e)
}
let U
let Q
let V = typeof Symbol != 'undefined' && typeof Symbol('x') == 'symbol'
var B = typeof Map != 'undefined'
var q = typeof Set != 'undefined'
let W = typeof Proxy != 'undefined' && void 0 !== Proxy.revocable && typeof Reflect != 'undefined'
var Y = V ? Symbol.$$for('immer-nothing') : ((U = {})['immer-nothing'] = !0, U)
var G = V ? Symbol.$$for('immer-draftable') : '__$immer_draftable'
var X = V ? Symbol.$$for('immer-state') : '__$immer_state'
typeof Symbol != 'undefined' && Symbol.iterator
var H = `${Object.prototype.constructor}`
var K = typeof Reflect != 'undefined' && Reflect.ownKeys
  ? Reflect.ownKeys
  : void 0 !== Object.getOwnPropertySymbols
    ? function (e) {
      return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    }
    : Object.getOwnPropertyNames
var J = Object.getOwnPropertyDescriptors || function (e) {
  let r = {}
  K(e).forEach((n) => {
    r[n] = Object.getOwnPropertyDescriptor(e, n)
  })
  return r
}
var ee = {}
var et = {
  get(e, r) {
    if (r === X)
      return e
    let n = b(e)
    if (!d(n, r)) {
      return (function (e, r, n) {
        let i
        let s = $(r, n)
        return s ? 'value' in s ? s.value : s.get?.call(e.k) : void 0
      }(e, n, r))
    }
    let i = n[r]
    return e.I || !o(i) ? i : i === N(e.t, r) ? (j(e), e.o[r] = z(e.A.h, i, e)) : i
  },
  has(e, r) {
    return r in b(e)
  },
  ownKeys(e) {
    return Reflect.ownKeys(b(e))
  },
  set(e, r, n) {
    let i = $(b(e), r)
    if (i?.set) {
      i.set.call(e.k, n)
      return !0
    }
    if (!e.P) {
      let s = N(b(e), r)
      let o = s?.[X]
      if (o && o.t === n) {
        e.o[r] = n
        e.R[r] = !1
        return !0
      }
      if (m(n, s) && (void 0 !== n || d(e.t, r)))
        return !0
      j(e)
      L(e)
    }
    e.o[r] === n && (void 0 !== n || r in e.o) || Number.isNaN(n) && Number.isNaN(e.o[r]) || (e.o[r] = n, e.R[r] = !0)
    return !0
  },
  deleteProperty(e, r) {
    void 0 !== N(e.t, r) || r in e.t ? (e.R[r] = !1, j(e), L(e)) : delete e.R[r]
    e.o && delete e.o[r]
    return !0
  },
  getOwnPropertyDescriptor(e, r) {
    let n = b(e)
    let i = Reflect.getOwnPropertyDescriptor(n, r)
    return i
      ? {
          writable: !0,
          configurable: e.i !== 1 || r !== 'length',
          enumerable: i.enumerable,
          value: n[r],
        }
      : i
  },
  defineProperty() {
    i(11)
  },
  getPrototypeOf(e) {
    return Object.getPrototypeOf(e.t)
  },
  setPrototypeOf() {
    i(12)
  },
}
var er = {}
a(et, (e, r) => {
  er[e] = function () {
    $$arguments[0] = $$arguments[0][0]
    return r.apply(this, arguments)
  }
})
er.deleteProperty = function (e, r) {
  return er.set.call(this, e, r, void 0)
}
er.set = function (e, r, n) {
  return et.set.call(this, e[0], r, n, e[0])
}
let en = new (function () {
  function e(e) {
    let r = this
    this.O = W
    this.D = !0
    this.produce = function (e, n, s) {
      if (typeof e == 'function' && typeof n != 'function') {
        var a
        let h = n
        n = e
        let d = r
        return function (e) {
          let r = this
          void 0 === e && (e = h)
          for (i = $$arguments.length, s = Array.from({ length: i > 1 ? i - 1 : 0 }), o = 1, void 0; o < i; o++) {
            var i
            var s
            var o
            s[o - 1] = $$arguments[o]
          }
          return d.produce(e, (e) => {
            let i
            return (i = n).call.apply(i, [r, e].concat(s))
          })
        }
      }
      if (typeof n != 'function' && i(6), void 0 !== s && typeof s != 'function' && i(7), o(e)) {
        let p = T(r)
        let g = z(r, e, void 0)
        let m = !0
        try {
          a = n(g)
          m = !1
        }
        finally {
          m ? A(p) : C(p)
        }
        return typeof Promise != 'undefined' && a instanceof Promise
          ? a.then((e) => {
              E(p, s)
              return P(e, p)
            }, (e) => {
              A(p)
              return e
            })
          : (E(p, s), P(a, p))
      }
      if (!e || typeof e != 'object') {
        if (void 0 === (a = n(e)) && (a = e), a === Y && (a = void 0), r.D && x(a, !0), s) {
          let v = []
          let y = []
          _('Patches').M(e, a, v, y)
          s(v, y)
        }
        return a
      }
      i(21, e)
    }
    this.produceWithPatches = function (e, n) {
      if (typeof e == 'function') {
        return function (n) {
          for (i = $$arguments.length, s = Array.from({ length: i > 1 ? i - 1 : 0 }), o = 1, void 0; o < i; o++) {
            var i
            var s
            var o
            s[o - 1] = $$arguments[o]
          }
          return r.produceWithPatches(n, (r) => {
            return e.apply(void 0, [r].concat(s))
          })
        }
      }
      let i
      let s
      let o = r.produce(e, n, (e, r) => {
        i = e
        s = r
      })
      return typeof Promise != 'undefined' && o instanceof Promise
        ? o.then((e) => {
            return [e, i, s]
          })
        : [o, i, s]
    }
    typeof e?.useProxies == 'boolean' && this.setUseProxies(e.useProxies)
    typeof e?.autoFreeze == 'boolean' && this.setAutoFreeze(e.autoFreeze)
  }
  let r = e.prototype
  r.createDraft = function (e) {
    o(e) || i(8)
    s(e) && (e = Z(e))
    let r = T(this)
    let n = z(this, e, void 0)
    n[X].C = !0
    C(r)
    return n
  }
  r.finishDraft = function (e, r) {
    let n = (e && e[X]).A
    E(n, r)
    return P(void 0, n)
  }
  r.setAutoFreeze = function (e) {
    this.D = e
  }
  r.setUseProxies = function (e) {
    e && !W && i(20)
    this.O = e
  }
  r.applyPatches = function (e, r) {
    for (n = r.length - 1; n >= 0; n--) {
      var n
      let i = r[n]
      if (i.path.length === 0 && i.op === 'replace') {
        e = i.value
        break
      }
    }
    n > -1 && (r = r.slice(n + 1))
    let o = _('Patches').$
    return s(e)
      ? o(e, r)
      : this.produce(e, (e) => {
          return o(e, r)
        })
  }
  return e
}())()
let produce = en.produce
en.produceWithPatches.bind(en)
let setAutoFreeze = en.setAutoFreeze.bind(en)
en.setUseProxies.bind(en)
en.applyPatches.bind(en)
en.createDraft.bind(en)
en.finishDraft.bind(en)
export let $$eo0 = produce
export const Ay = produce
export const ht = setAutoFreeze
export const jM = produce
