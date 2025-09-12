import { $4, _m, CP, ep, eu, gJ, L9, Lv, mq, sb, sQ, Tc, Tf, v9, vq, zk, ZU } from '../vendor/535641'
import r, { _3, B1, bV, C0, Dz, jk, Jx, LI, lP, nI, PG, qE, RI, Sg, sq, T9, TV, w7, WJ } from '../vendor/759447'

function i(e, t, n) {
  let i
  let {
    reference,
    floating,
  } = e
  let s = TV(t)
  let a = Dz(t)
  let l = sq(a)
  let u = C0(t)
  let g = s === 'y'
  let c = reference.x + reference.width / 2 - floating.width / 2
  let f = reference.y + reference.height / 2 - floating.height / 2
  let d = reference[l] / 2 - floating[l] / 2
  switch (u) {
    case 'top':
      i = {
        x: c,
        y: reference.y - floating.height,
      }
      break
    case 'bottom':
      i = {
        x: c,
        y: reference.y + reference.height,
      }
      break
    case 'right':
      i = {
        x: reference.x + reference.width,
        y: f,
      }
      break
    case 'left':
      i = {
        x: reference.x - floating.width,
        y: f,
      }
      break
    default:
      i = {
        x: reference.x,
        y: reference.y,
      }
  }
  switch (Sg(t)) {
    case 'start':
      i[a] -= d * (n && g ? -1 : 1)
      break
    case 'end':
      i[a] += d * (n && g ? -1 : 1)
  }
  return i
}
let A = async (e, t, n) => {
  let {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
  } = n
  let a = middleware.filter(Boolean)
  let l = await platform.isRTL?.(t)
  let u = await platform.getElementRects({
    reference: e,
    floating: t,
    strategy,
  })
  let {
    x,
    y,
  } = i(u, placement, l)
  let f = r
  let d = {}
  let h = 0
  for (let n = 0; n < a.length; n++) {
    let {
      name,
      fn,
    } = a[n]
    let {
      x,
      y,
      data,
      reset,
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: f,
      strategy,
      middlewareData: d,
      rects: u,
      platform,
      elements: {
        reference: e,
        floating: t,
      },
    })
    g = x != null ? x : x
    c = y != null ? y : y
    d = {
      ...d,
      [name]: {
        ...d[name],
        ...data,
      },
    }
    reset && h <= 50 && (h++, typeof reset == 'object' && (reset.placement && (f = reset.placement), reset.rects && (u = !0 === reset.rects
      ? await platform.getElementRects({
          reference: e,
          floating: t,
          strategy,
        })
      : reset.rects), {
      x: g,
      y: c,
    } = i(u, f, l)), n = -1)
  }
  return {
    x,
    y,
    placement: f,
    strategy,
    middlewareData: d,
  }
}
async function detectOverflow(e, t) {
  let n
  void 0 === t && (t = {})
  let {
    x,
    y,
    platform,
    rects,
    elements,
    strategy,
  } = e
  let {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = !1,
    padding = 0,
  } = _3(t, e)
  let h = nI(padding)
  let p = elements[altBoundary ? elementContext === 'floating' ? 'reference' : 'floating' : elementContext]
  let C = B1(await platform.getClippingRect({
    element: (n = await platform.isElement?.(p)) == null || n ? p : p.contextElement || (await platform.getDocumentElement?.(elements.floating)),
    boundary,
    rootBoundary,
    strategy,
  }))
  let I = elementContext === 'floating'
    ? {
        ...rects.floating,
        x,
        y,
      }
    : rects.reference
  let E = await platform.getOffsetParent?.(elements.floating)
  let B = (await platform.isElement?.(E)) && (await platform.getScale?.(E)) || {
    x: 1,
    y: 1,
  }
  let m = B1(platform.convertOffsetParentRelativeRectToViewportRelativeRect
    ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect: I,
        offsetParent: E,
        strategy,
      })
    : I)
  return {
    top: (C.top - m.top + h.top) / B.y,
    bottom: (m.bottom - C.bottom + h.bottom) / B.y,
    left: (C.left - m.left + h.left) / B.x,
    right: (m.right - C.right + h.right) / B.x,
  }
}
async function s(e, t) {
  let {
    placement,
    platform,
    elements,
  } = e
  let o = await platform.isRTL?.(elements.floating)
  let s = C0(placement)
  let a = Sg(placement)
  let l = TV(placement) === 'y'
  let u = ['left', 'top'].includes(s) ? -1 : 1
  let g = o && l ? -1 : 1
  let c = _3(t, e)
  let {
    mainAxis,
    crossAxis,
    alignmentAxis,
  } = typeof c == 'number'
    ? {
        mainAxis: c,
        crossAxis: 0,
        alignmentAxis: null,
      }
    : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...c,
      }
  a && typeof alignmentAxis == 'number' && (d = a === 'end' ? -1 * alignmentAxis : alignmentAxis)
  return l
    ? {
        x: crossAxis * g,
        y: mainAxis * u,
      }
    : {
        x: mainAxis * u,
        y: crossAxis * g,
      }
}
function l(e) {
  let t = L9(e)
  let n = parseFloat(t.width) || 0
  let i = parseFloat(t.height) || 0
  let A = sb(e)
  let o = A ? e.offsetWidth : n
  let s = A ? e.offsetHeight : i
  let l = LI(n) !== o || LI(i) !== s
  l && (n = o, i = s)
  return {
    width: n,
    height: i,
    $: l,
  }
}
function u(e) {
  return vq(e) ? e : e.contextElement
}
function g(e) {
  let t = u(e)
  if (!sb(t))
    return Jx(1)
  let n = t.getBoundingClientRect()
  let {
    width,
    height,
    $,
  } = l(t)
  let s = ($ ? LI(n.width) : n.width) / width
  let g = ($ ? LI(n.height) : n.height) / height
  s && Number.isFinite(s) || (s = 1)
  g && Number.isFinite(g) || (g = 1)
  return {
    x: s,
    y: g,
  }
}
let c = Jx(0)
function f(e) {
  let t = zk(e)
  return Tc() && t.visualViewport
    ? {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop,
      }
    : c
}
function d(e, t, n, i) {
  let A
  void 0 === t && (t = !1)
  void 0 === n && (n = !1)
  let o = e.getBoundingClientRect()
  let s = u(e)
  let l = Jx(1)
  t && (i ? vq(i) && (l = g(i)) : l = g(e))
  let c = (void 0 === (A = n) && (A = !1), i && (!A || i === zk(s)) && A) ? f(s) : Jx(0)
  let d = (o.left + c.x) / l.x
  let h = (o.top + c.y) / l.y
  let p = o.width / l.x
  let C = o.height / l.y
  if (s) {
    let e = zk(s)
    let t = i && vq(i) ? zk(i) : i
    let n = e
    let r = _m(n)
    for (; r && i && t !== n;) {
      let e = g(r)
      let t = r.getBoundingClientRect()
      let i = L9(r)
      let A = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x
      let o = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y
      d *= e.x
      h *= e.y
      p *= e.x
      C *= e.y
      d += A
      h += o
      n = zk(r)
      r = _m(n)
    }
  }
  return B1({
    width: p,
    height: C,
    x: d,
    y: h,
  })
}
function h(e, t) {
  let n = CP(e).scrollLeft
  return t ? t.left + n : d(ep(e)).left + n
}
function p(e, t, n) {
  void 0 === n && (n = !1)
  let r = e.getBoundingClientRect()
  return {
    x: r.left + t.scrollLeft - (n ? 0 : h(e, r)),
    y: r.top + t.scrollTop,
  }
}
function C(e, t, n) {
  let i
  if (t === 'viewport') {
    i = (function (e, t) {
      let n = zk(e)
      let r = ep(e)
      let i = n.visualViewport
      let A = r.clientWidth
      let o = r.clientHeight
      let s = 0
      let l = 0
      if (i) {
        A = i.width
        o = i.height
        let e = Tc();
        (!e || e && t === 'fixed') && (s = i.offsetLeft, l = i.offsetTop)
      }
      return {
        width: A,
        height: o,
        x: s,
        y: l,
      }
    }(e, n))
  }
  else if (t === 'document') {
    i = (function (e) {
      let t = ep(e)
      let n = CP(e)
      let i = e.ownerDocument.body
      let A = T9(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth)
      let o = T9(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight)
      let s = -n.scrollLeft + h(e)
      let l = -n.scrollTop
      L9(i).direction === 'rtl' && (s += T9(t.clientWidth, i.clientWidth) - A)
      return {
        width: A,
        height: o,
        x: s,
        y: l,
      }
    }(ep(e)))
  }
  else if (vq(t)) {
    i = (function (e, t) {
      let n = d(e, !0, t === 'fixed')
      let i = n.top + e.clientTop
      let A = n.left + e.clientLeft
      let o = sb(e) ? g(e) : Jx(1)
      let s = e.clientWidth * o.x
      return {
        width: s,
        height: e.clientHeight * o.y,
        x: A * o.x,
        y: i * o.y,
      }
    }(t, n))
  }
  else {
    let n = f(e)
    i = {
      x: t.x - n.x,
      y: t.y - n.y,
      width: t.width,
      height: t.height,
    }
  }
  return B1(i)
}
function I(e) {
  return L9(e).position === 'static'
}
function E(e, t) {
  if (!sb(e) || L9(e).position === 'fixed')
    return null
  if (t)
    return t(e)
  let n = e.offsetParent
  ep(e) === n && (n = n.ownerDocument.body)
  return n
}
function B(e, t) {
  let n = zk(e)
  if (Tf(e))
    return n
  if (!sb(e)) {
    let t = $4(e)
    for (; t && !eu(t);) {
      if (vq(t) && !I(t))
        return t
      t = $4(t)
    }
    return n
  }
  let r = E(e, t)
  for (; r && Lv(r) && I(r);) r = E(r, t)
  return r && eu(r) && I(r) && !sQ(r) ? n : r || gJ(e) || n
}
let m = async function (e) {
  let t = this.getOffsetParent || B
  let n = this.getDimensions
  let i = await n(e.floating)
  return {
    reference: (function (e, t, n) {
      let i = sb(t)
      let A = ep(t)
      let o = n === 'fixed'
      let s = d(e, !0, o, t)
      let l = {
        scrollLeft: 0,
        scrollTop: 0,
      }
      let u = Jx(0)
      if (i || !i && !o) {
        if ((mq(t) !== 'body' || ZU(A)) && (l = CP(t)), i) {
          let e = d(t, !0, o, t)
          u.x = e.x + t.clientLeft
          u.y = e.y + t.clientTop
        }
        else {
          A && (u.x = h(A))
        }
      }
      let g = !A || i || o ? Jx(0) : p(A, l)
      return {
        x: s.left + l.scrollLeft - u.x - g.x,
        y: s.top + l.scrollTop - u.y - g.y,
        width: s.width,
        height: s.height,
      }
    }(e.reference, await t(e.floating), e.strategy)),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height,
    },
  }
}
let y = {
  convertOffsetParentRelativeRectToViewportRelativeRect(e) {
    let {
      elements,
      rect,
      offsetParent,
      strategy,
    } = e
    let o = strategy === 'fixed'
    let s = ep(offsetParent)
    let l = !!elements && Tf(elements.floating)
    if (offsetParent === s || l && o)
      return rect
    let u = {
      scrollLeft: 0,
      scrollTop: 0,
    }
    let c = Jx(1)
    let f = Jx(0)
    let h = sb(offsetParent)
    if ((h || !h && !o) && ((mq(offsetParent) !== 'body' || ZU(s)) && (u = CP(offsetParent)), sb(offsetParent))) {
      let e = d(offsetParent)
      c = g(offsetParent)
      f.x = e.x + offsetParent.clientLeft
      f.y = e.y + offsetParent.clientTop
    }
    let C = !s || h || o ? Jx(0) : p(s, u, !0)
    return {
      width: rect.width * c.x,
      height: rect.height * c.y,
      x: rect.x * c.x - u.scrollLeft * c.x + f.x + C.x,
      y: rect.y * c.y - u.scrollTop * c.y + f.y + C.y,
    }
  },
  getDocumentElement: ep,
  getClippingRect(e) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy,
    } = e
    let o = [...(boundary === 'clippingAncestors'
      ? Tf(element)
        ? []
        : (function (e, t) {
            let n = t.get(e)
            if (n)
              return n
            let r = v9(e, [], !1).filter(e => vq(e) && mq(e) !== 'body')
            let i = null
            let A = L9(e).position === 'fixed'
            let o = A ? $4(e) : e
            for (; vq(o) && !eu(o);) {
              let t = L9(o)
              let n = sQ(o)
              n || t.position !== 'fixed' || (i = null);
              (A
                ? !n && !i
                : !n && t.position === 'static' && !!i && ['absolute', 'fixed'].includes(i.position) || ZU(o) && !n && (function e(t, n) {
                    let r = $4(t)
                    return !(r === n || !vq(r) || eu(r)) && (L9(r).position === 'fixed' || e(r, n))
                  }(e, o)))
                ? r = r.filter(e => e !== o)
                : i = t
              o = $4(o)
            }
            t.set(e, r)
            return r
          }(element, this._c))
      : [].concat(boundary)), rootBoundary]
    let s = o[0]
    let l = o.reduce((e, n) => {
      let i = C(element, n, strategy)
      e.top = T9(i.top, e.top)
      e.right = jk(i.right, e.right)
      e.bottom = jk(i.bottom, e.bottom)
      e.left = T9(i.left, e.left)
      return e
    }, C(element, s, strategy))
    return {
      width: l.right - l.left,
      height: l.bottom - l.top,
      x: l.left,
      y: l.top,
    }
  },
  getOffsetParent: B,
  getElementRects: m,
  getClientRects(e) {
    return Array.from(e.getClientRects())
  },
  getDimensions(e) {
    let {
      width,
      height,
    } = l(e)
    return {
      width,
      height,
    }
  },
  getScale: g,
  isElement: vq,
  isRTL(e) {
    return L9(e).direction === 'rtl'
  },
}
export function autoUpdate(e, t, n, i) {
  let A
  void 0 === i && (i = {})
  let {
    ancestorScroll = !0,
    ancestorResize = !0,
    elementResize = typeof ResizeObserver == 'function',
    layoutShift = typeof IntersectionObserver == 'function',
    animationFrame = !1,
  } = i
  let f = u(e)
  let h = ancestorScroll || ancestorResize ? [...(f ? v9(f) : []), ...v9(t)] : []
  h.forEach((e) => {
    ancestorScroll && e.addEventListener('scroll', n, {
      passive: !0,
    })
    ancestorResize && e.addEventListener('resize', n)
  })
  let p = f && layoutShift
    ? (function (e, t) {
        let n
        let i = null
        let A = ep(e)
        function o() {
          let e
          clearTimeout(n)
          i || e.disconnect()
          i = null
        }
        !(function s(a, l) {
          void 0 === a && (a = !1)
          void 0 === l && (l = 1)
          o()
          let {
            left,
            top,
            width,
            height,
          } = e.getBoundingClientRect()
          if (a || t(), !width || !height)
            return
          let d = RI(top)
          let h = RI(A.clientWidth - (left + width))
          let p = {
            rootMargin: `${-d}px ${-h}px ${-RI(A.clientHeight - (top + height))}px ${-RI(left)}px`,
            threshold: T9(0, jk(1, l)) || 1,
          }
          let C = !0
          function I(e) {
            let t = e[0].intersectionRatio
            if (t !== l) {
              if (!C)
                return s()
              t
                ? s(!1, t)
                : n = setTimeout(() => {
                  s(!1, 1e-7)
                }, 1e3)
            }
            C = !1
          }
          try {
            i = new IntersectionObserver(I, {
              ...p,
              root: A.ownerDocument,
            })
          }
          catch (e) {
            i = new IntersectionObserver(I, p)
          }
          i.observe(e)
        }(!0))
        return o
      }(f, n))
    : null
  let C = -1
  let I = null
  elementResize && (I = new ResizeObserver((e) => {
    let [r] = e
    r && r.target === f && I && (I.unobserve(t), cancelAnimationFrame(C), C = requestAnimationFrame(() => {
      let e
      I || e.observe(t)
    }))
    n()
  }), f && !animationFrame && I.observe(f), I.observe(t))
  let E = animationFrame ? d(e) : null
  animationFrame && (function t() {
    let r = d(e)
    E && (r.x !== E.x || r.y !== E.y || r.width !== E.width || r.height !== E.height) && n()
    E = r
    A = requestAnimationFrame(t)
  }())
  n()
  return () => {
    let e
    h.forEach((e) => {
      ancestorScroll && e.removeEventListener('scroll', n)
      ancestorResize && e.removeEventListener('resize', n)
    })
    p?.()
    I || e.disconnect()
    I = null
    animationFrame && cancelAnimationFrame(A)
  }
}

let offset = function (e) {
  void 0 === e && (e = 0)
  return {
    name: 'offset',
    options: e,
    async fn(t) {
      let n
      let r
      let {
        x,
        y,
        placement,
        middlewareData,
      } = t
      let l = await s(t, e)
      return placement === ((n = middlewareData.offset) == null ? void 0 : n.placement) && (r = middlewareData.arrow) != null && r.alignmentOffset
        ? {}
        : {
            x: x + l.x,
            y: y + l.y,
            data: {
              ...l,
              placement,
            },
          }
    },
  }
}
let shift = function (e) {
  void 0 === e && (e = {})
  return {
    name: 'shift',
    options: e,
    async fn(t) {
      let {
        x,
        y,
        placement,
      } = t
      let {
        mainAxis = !0,
        crossAxis = !1,
        limiter = {
          fn: (e) => {
            let {
              x: _x,
              y: _y,
            } = e
            return {
              x: _x,
              y: _y,
            }
          },
        },
        ...u
      } = _3(e, t)
      let g = {
        x,
        y,
      }
      let c = await detectOverflow(t, u)
      let f = TV(C0(placement))
      let d = PG(f)
      let h = g[d]
      let p = g[f]
      if (mainAxis) {
        let e = d === 'y' ? 'top' : 'left'
        let t = d === 'y' ? 'bottom' : 'right'
        let n = h + c[e]
        let i = h - c[t]
        h = qE(n, h, i)
      }
      if (crossAxis) {
        let e = f === 'y' ? 'top' : 'left'
        let t = f === 'y' ? 'bottom' : 'right'
        let n = p + c[e]
        let i = p - c[t]
        p = qE(n, p, i)
      }
      let C = limiter.fn({
        ...t,
        [d]: h,
        [f]: p,
      })
      return {
        ...C,
        data: {
          x: C.x - x,
          y: C.y - y,
        },
      }
    },
  }
}
let flip = function (e) {
  void 0 === e && (e = {})
  return {
    name: 'flip',
    options: e,
    async fn(t) {
      let n
      let i
      let A
      let s
      let a
      let {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements,
      } = t
      let {
        mainAxis = !0,
        crossAxis = !0,
        fallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = !0,
        ...m
      } = _3(e, t)
      if ((n = middlewareData.arrow) != null && n.alignmentOffset)
        return {}
      let y = C0(placement)
      let _ = C0(initialPlacement) === initialPlacement
      let Q = await platform.isRTL?.(elements.floating)
      let D = fallbackPlacements || (_ || !flipAlignment ? [bV(initialPlacement)] : WJ(initialPlacement))
      fallbackPlacements || fallbackAxisSideDirection === 'none' || D.push(...lP(initialPlacement, flipAlignment, fallbackAxisSideDirection, Q))
      let w = [initialPlacement, ...D]
      let b = await detectOverflow(t, m)
      let v = []
      let k = ((i = middlewareData.flip) == null ? void 0 : i.overflows) || []
      if (mainAxis && v.push(b[y]), crossAxis) {
        let e = w7(placement, rects, Q)
        v.push(b[e[0]], b[e[1]])
      }
      if (k = [...k, {
        placement,
        overflows: v,
      }], !v.every(e => e <= 0)) {
        let e = (((A = middlewareData.flip) == null ? void 0 : A.index) || 0) + 1
        let t = w[e]
        if (t) {
          return {
            data: {
              index: e,
              overflows: k,
            },
            reset: {
              placement: t,
            },
          }
        }
        let n = (s = k.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) == null ? void 0 : s.placement
        if (!n) {
          switch (fallbackStrategy) {
            case 'bestFit':
            {
              let e = (a = k.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) == null ? void 0 : a[0]
              e && (n = e)
              break
            }
            case 'initialPlacement':
              n = initialPlacement
          }
        }
        if (placement !== n) {
          return {
            reset: {
              placement: n,
            },
          }
        }
      }
      return {}
    },
  }
}
let size = function (e) {
  void 0 === e && (e = {})
  return {
    name: 'size',
    options: e,
    async fn(t) {
      let n
      let i
      let {
        placement,
        rects,
        platform,
        elements,
      } = t
      let {
        apply = () => {},
        ...g
      } = _3(e, t)
      let c = await detectOverflow(t, g)
      let f = C0(placement)
      let d = Sg(placement)
      let h = TV(placement) === 'y'
      let {
        width,
        height,
      } = rects.floating
      f === 'top' || f === 'bottom' ? (n = f, i = d === ((await platform.isRTL?.(elements.floating)) ? 'start' : 'end') ? 'left' : 'right') : (i = f, n = d === 'end' ? 'top' : 'bottom')
      let I = height - c[n]
      let E = width - c[i]
      let B = !t.middlewareData.shift
      let m = I
      let y = E
      if (h) {
        let e = width - c.left - c.right
        y = d || B ? jk(E, e) : e
      }
      else {
        let e = height - c.top - c.bottom
        m = d || B ? jk(I, e) : e
      }
      if (B && !d) {
        let e = T9(c.left, 0)
        let t = T9(c.right, 0)
        let n = T9(c.top, 0)
        let i = T9(c.bottom, 0)
        h ? y = width - 2 * (e !== 0 || t !== 0 ? e + t : T9(c.left, c.right)) : m = height - 2 * (n !== 0 || i !== 0 ? n + i : T9(c.top, c.bottom))
      }
      await apply({
        ...t,
        availableWidth: y,
        availableHeight: m,
      })
      let _ = await platform.getDimensions(elements.floating)
      return width !== _.width || height !== _.height
        ? {
            reset: {
              rects: !0,
            },
          }
        : {}
    },
  }
}
let arrow = e => ({
  name: 'arrow',
  options: e,
  async fn(t) {
    let {
      x: _x2,
      y: _y2,
      placement,
      rects,
      platform,
      elements,
      middlewareData,
    } = t
    let {
      element,
      padding = 0,
    } = _3(e, t) || {}
    if (element == null)
      return {}
    let c = nI(padding)
    let f = {
      x: _x2,
      y: _y2,
    }
    let d = Dz(placement)
    let h = sq(d)
    let p = await platform.getDimensions(element)
    let C = d === 'y'
    let I = C ? 'clientHeight' : 'clientWidth'
    let E = rects.reference[h] + rects.reference[d] - f[d] - rects.floating[h]
    let B = f[d] - rects.reference[d]
    let m = await platform.getOffsetParent?.(element)
    let y = m ? m[I] : 0
    y && (await platform.isElement?.(m)) || (y = elements.floating[I] || rects.floating[h])
    let _ = y / 2 - p[h] / 2 - 1
    let Q = jk(c[C ? 'top' : 'left'], _)
    let D = jk(c[C ? 'bottom' : 'right'], _)
    let w = y - p[h] - D
    let b = y / 2 - p[h] / 2 + (E / 2 - B / 2)
    let v = qE(Q, b, w)
    let k = !middlewareData.arrow && Sg(placement) != null && b !== v && rects.reference[h] / 2 - (b < Q ? Q : D) - p[h] / 2 < 0
    let x = k ? b < Q ? b - Q : b - w : 0
    return {
      [d]: f[d] + x,
      data: {
        [d]: v,
        centerOffset: b - v - x,
        ...(k && {
          alignmentOffset: x,
        }),
      },
      reset: k,
    }
  },
})
let computePosition = (e, t, n) => {
  let r = new Map()
  let i = {
    platform: y,
    ...n,
  }
  let o = {
    ...i.platform,
    _c: r,
  }
  return A(e, t, {
    ...i,
    platform: o,
  })
}
export const UE = arrow
export const ll = autoUpdate
export const rD = computePosition
export const __ = detectOverflow
export const UU = flip
export const cY = offset
export const BN = shift
export const Ej = size
