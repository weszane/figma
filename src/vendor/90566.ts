import { useEffect, useMemo, useRef } from 'react'

export function useDebouncedCallback(e, r, n) {
  let s = this
  let o = useRef(null)
  let a = useRef(0)
  let h = useRef(null)
  let d = useRef([])
  let p = useRef()
  let g = useRef()
  let m = useRef(e)
  let v = useRef(!0)
  m.current = e
  let y = !r && r !== 0 && typeof window != 'undefined'
  if (typeof e != 'function')
    throw new TypeError('Expected a function')
  r = +r || 0
  let b = !!(n = n || {}).leading
  let O = !('trailing' in n) || !!n.trailing
  let x = 'maxWait' in n
  let w = x ? Math.max(+n.maxWait || 0, r) : null
  useEffect(() => {
    v.current = !0
    return function () {
      v.current = !1
    }
  }, [])
  return useMemo(() => {
    let e = function (e) {
      let r = d.current
      let n = p.current
      d.current = p.current = null
      a.current = e
      return g.current = m.current.apply(n, r)
    }
    let n = function (e, r) {
      y && cancelAnimationFrame(h.current)
      h.current = y ? requestAnimationFrame(e) : setTimeout(e, r)
    }
    let i = function (e) {
      if (!v.current)
        return !1
      let n = e - o.current
      let i = e - a.current
      return !o.current || n >= r || n < 0 || x && i >= w
    }
    let k = function (r) {
      return (h.current = null, O && d.current) ? e(r) : (d.current = p.current = null, g.current)
    }
    let _ = function () {
      let e = Date.now()
      if (i(e))
        return k(e)
      if (v.current) {
        let s = e - o.current
        let h = e - a.current
        let d = r - s
        n(_, x ? Math.min(d, w - h) : d)
      }
    }
    let S = function () {
      for (m = [], y = 0, void 0; y < $$arguments.length; y++) {
        var m
        var y
        m[y] = $$arguments[y]
      }
      let O = Date.now()
      let w = i(O)
      if (d.current = m, p.current = s, o.current = O, w) {
        if (!h.current && v.current) {
          a.current = o.current
          n(_, r)
          return b ? e(o.current) : g.current
        }
        if (x) {
          n(_, r)
          return e(o.current)
        }
      }
      h.current || n(_, r)
      return g.current
    }
    S.cancel = function () {
      h.current && (y ? cancelAnimationFrame(h.current) : clearTimeout(h.current))
      a.current = 0
      d.current = o.current = p.current = h.current = null
    }
    S.isPending = function () {
      return !!h.current
    }
    S.flush = function () {
      return h.current ? k(Date.now()) : g.current
    }
    return S
  }, [b, x, r, w, O, y])
}
export const A = useDebouncedCallback
