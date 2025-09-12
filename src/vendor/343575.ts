import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { arrow as arrowCore, flip as baseFlip, offset as baseOffset, shift as baseShift, size as baseSize, computePosition } from '@floating-ui/dom'
import { flushSync } from 'react-dom'

let o = typeof document != 'undefined' ? useLayoutEffect : useEffect
function s(e, t) {
  let n
  let r
  let i
  if (e === t)
    return !0
  if (typeof e != typeof t)
    return !1
  if (typeof e == 'function' && e.toString() === t.toString())
    return !0
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if ((n = e.length) !== t.length)
        return !1
      for (r = n; r-- != 0;) {
        if (!s(e[r], t[r]))
          return !1
      }
      return !0
    }
    if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length)
      return !1
    for (r = n; r-- != 0;) {
      if (!{}.hasOwnProperty.call(t, i[r]))
        return !1
    }
    for (r = n; r-- != 0;) {
      let n = i[r]
      if ((n !== '_owner' || !e.$$typeof) && !s(e[n], t[n]))
        return !1
    }
    return !0
  }
  return e != e && t != t
}
function a(e) {
  return typeof window == 'undefined' ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function l(e, t) {
  let n = a(e)
  return Math.round(t * n) / n
}
function u(e) {
  let t = useRef(e)
  o(() => {
    t.current = e
  })
  return t
}
export function useFloating(e) {
  void 0 === e && (e = {})
  let {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: f,
      floating: d,
    } = {},
    transform = !0,
    whileElementsMounted,
    open,
  } = e
  let [I, E] = useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: !1,
  })
  let [B, m] = useState(middleware)
  s(B, middleware) || m(middleware)
  let [y, _] = useState(null)
  let [Q, D] = useState(null)
  let w = useCallback((e) => {
    e !== x.current && (x.current = e, _(e))
  }, [])
  let b = useCallback((e) => {
    e !== S.current && (S.current = e, D(e))
  }, [])
  let v = f || y
  let k = d || Q
  let x = useRef(null)
  let S = useRef(null)
  let F = useRef(I)
  let N = whileElementsMounted != null
  let T = u(whileElementsMounted)
  let L = u(platform)
  let R = u(open)
  let M = useCallback(() => {
    if (!x.current || !S.current)
      return
    let e = {
      placement,
      strategy,
      middleware: B,
    }
    L.current && (e.platform = L.current)
    computePosition(x.current, S.current, e).then((e) => {
      let t = {
        ...e,
        isPositioned: !1 !== R.current,
      }
      O.current && !s(F.current, t) && (F.current = t, flushSync(() => {
        E(t)
      }))
    })
  }, [B, placement, strategy, L, R])
  o(() => {
    !1 === open && F.current.isPositioned && (F.current.isPositioned = !1, E(e => ({
      ...e,
      isPositioned: !1,
    })))
  }, [open])
  let O = useRef(!1)
  o(() => (O.current = !0, () => {
    O.current = !1
  }), [])
  o(() => {
    if (v && (x.current = v), k && (S.current = k), v && k) {
      if (T.current)
        return T.current(v, k, M)
      M()
    }
  }, [v, k, M, T, N])
  let G = useMemo(() => ({
    reference: x,
    floating: S,
    setReference: w,
    setFloating: b,
  }), [w, b])
  let P = useMemo(() => ({
    reference: v,
    floating: k,
  }), [v, k])
  let U = useMemo(() => {
    let e = {
      position: strategy,
      left: 0,
      top: 0,
    }
    if (!P.floating)
      return e
    let t = l(P.floating, I.x)
    let r = l(P.floating, I.y)
    return transform
      ? {
          ...e,
          transform: `translate(${t}px, ${r}px)`,
          ...(a(P.floating) >= 1.5 && {
            willChange: 'transform',
          }),
        }
      : {
          position: strategy,
          left: t,
          top: r,
        }
  }, [strategy, transform, P.floating, I.x, I.y])
  return useMemo(() => ({
    ...I,
    update: M,
    refs: G,
    elements: P,
    floatingStyles: U,
  }), [I, M, G, P, U])
}
let baseArrow = e => ({
  name: 'arrow',
  options: e,
  fn(t) {
    let {
      element,
      padding,
    } = typeof e == 'function' ? e(t) : e
    return element && {}.hasOwnProperty.call(element, 'current')
      ? element.current != null
        ? arrowCore({
            element: element.current,
            padding,
          }).fn(t)
        : {}
      : element
        ? arrowCore({
            element,
            padding,
          }).fn(t)
        : {}
  },
})
let offset = (e, t) => ({
  ...baseOffset(e),
  options: [e, t],
})
let shift = (e, t) => ({
  ...baseShift(e),
  options: [e, t],
})
let flip = (e, t) => ({
  ...baseFlip(e),
  options: [e, t],
})
let size = (e, t) => ({
  ...baseSize(e),
  options: [e, t],
})
let arrow = (e, t) => ({
  ...baseArrow(e),
  options: [e, t],
})
export const BN = shift
export const Ej = size
export const UE = arrow
export const UU = flip
export const cY = offset
export const we = useFloating
