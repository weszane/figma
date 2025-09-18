let i = 'NOT_FOUND'
function s(e) {
  let r
  return {
    get(n) {
      return r && e(r.key, n) ? r.value : i
    },
    put(e, n) {
      r = {
        key: e,
        value: n,
      }
    },
    getEntries() {
      return r ? [r] : []
    },
    clear() {
      r = void 0
    },
  }
}
function o(e, r) {
  let n = []
  function s(e) {
    let s = n.findIndex((n) => {
      return r(e, n.key)
    })
    if (s > -1) {
      let o = n[s]
      s > 0 && (n.splice(s, 1), n.unshift(o))
      return o.value
    }
    return i
  }
  function o(r, o) {
    s(r) === i && (n.unshift({
      key: r,
      value: o,
    }), n.length > e && n.pop())
  }
  return {
    get: s,
    put: o,
    getEntries() {
      return n
    },
    clear() {
      n = []
    },
  }
}
let a = function (e, r) {
  return e === r
}
function h(e) {
  return function (r, n) {
    if (r === null || n === null || r.length !== n.length)
      return !1
    for (i = r.length, s = 0, void 0; s < i; s++) {
      var i
      var s
      if (!e(r[s], n[s]))
        return !1
    }
    return !0
  }
}
export function weakMapMemoize(e, r) {
  let n = typeof r == 'object'
    ? r
    : {
        equalityCheck: r,
      }
  let d = n.equalityCheck
  let p = void 0 === d ? a : d
  let g = n.maxSize
  let m = void 0 === g ? 1 : g
  let v = n.resultEqualityCheck
  let y = h(p)
  let b = m === 1 ? s(y) : o(m, y)
  function O() {
    let r = b.get(arguments)
    if (r === i) {
      if (r = e.apply(null, arguments), v) {
        let n = b.getEntries().find((e) => {
          return v(e.value, r)
        })
        n && (r = n.value)
      }
      b.put(arguments, r)
    }
    return r
  }
  O.clearCache = function () {
    return b.clear()
  }
  return O
}
export const UI = weakMapMemoize
