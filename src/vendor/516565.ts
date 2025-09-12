import s, { createContext, createElement, forwardRef, Fragment, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { AO, Kr } from '../vendor/111975'
import { offset, useFloating } from '@floating-ui/react-dom'
import a, { $4, eu as _$$eu, L9, mq, Ng, sb, Tc, v9, vq } from '../vendor/535641'
import { detectOverflow } from '@floating-ui/dom'
import { _3, jk, LI, RI, T9 } from '../vendor/759447'
import { createPortal, flushSync } from 'react-dom'

let i
let o = require.t(s, 2)
function h(e) {
  let r = e.activeElement
  for (; (r?.shadowRoot || n.shadowRoot || n.activeElement) != null;) {
    var n
    r = r.shadowRoot.activeElement
  }
  return r
}
function d(e, r) {
  if (!e || !r)
    return !1
  let n = r.getRootNode?.()
  if (e.contains(r))
    return !0
  if (n && Ng(n)) {
    let n = r
    for (; n;) {
      if (e === n)
        return !0
      n = n.parentNode || n.host
    }
  }
  return !1
}
function p() {
  let e = navigator.userAgentData
  return e != null && e.platform ? e.platform : navigator.platform
}
function g() {
  let e = navigator.userAgentData
  return e && Array.isArray(e.brands)
    ? e.brands.map((e) => {
        let {
          brand,
          version,
        } = e
        return `${brand}/${version}`
      }).join(' ')
    : navigator.userAgent
}
function m(e) {
  return e.mozInputSource === 0 && !!e.isTrusted || (b() && e.pointerType ? e.type === 'click' && e.buttons === 1 : e.detail === 0 && !e.pointerType)
}
function v(e) {
  return !x() && (!b() && e.width === 0 && e.height === 0 || b() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === 'mouse' || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === 'touch')
}
function y() {
  return /apple/i.test(navigator.vendor)
}
function b() {
  let e = /android/i
  return e.test(p()) || e.test(g())
}
function O() {
  return p().toLowerCase().startsWith('mac') && !navigator.maxTouchPoints
}
function x() {
  return g().includes('jsdom/')
}
function w(e, r) {
  let n = ['mouse', 'pen']
  r || n.push('', void 0)
  return n.includes(e)
}
function k(e) {
  return 'nativeEvent' in e
}
function _(e) {
  return e.matches('html,body')
}
function S(e) {
  return e?.ownerDocument || document
}
function E(e, r) {
  if (r == null)
    return !1
  if ('composedPath' in e)
    return e.composedPath().includes(r)
  let n = e
  return n.target != null && r.contains(n.target)
}
function A(e) {
  return 'composedPath' in e ? e.composedPath()[0] : e.target
}
let C = 'input:not([type=\'hidden\']):not([disabled]),[contenteditable]:not([contenteditable=\'false\']),textarea:not([disabled])'
function T(e) {
  return sb(e) && e.matches(C)
}
function I(e) {
  e.preventDefault()
  e.stopPropagation()
}
function P(e) {
  return !!e && e.getAttribute('role') === 'combobox' && T(e)
}
export function useMergeRefs(e) {
  return useMemo(() => e.every(e => e == null)
    ? null
    : (r) => {
        e.forEach((e) => {
          typeof e == 'function' ? e(r) : e != null && (e.current = r)
        })
      }, e)
}
let j = {
  ...o,
}
let z = j.useInsertionEffect || (e => e())
function Z(e) {
  let r = useRef(() => {})
  z(() => {
    r.current = e
  })
  return useCallback(() => {
    for (e = $$arguments.length, n = new Array(e), i = 0, void 0; i < e; i++) {
      var e
      var n
      var i
      n[i] = $$arguments[i]
    }
    return r.current?.(...n)
  }, [])
}
let F = 'ArrowUp'
let U = 'ArrowDown'
let Q = 'ArrowLeft'
let V = 'ArrowRight'
function B(e, r, n) {
  return Math.floor(e / r) !== n
}
function q(e, r) {
  return r < 0 || r >= e.current.length
}
function W(e, r) {
  return G(e, {
    disabledIndices: r,
  })
}
function Y(e, r) {
  return G(e, {
    decrement: !0,
    startingIndex: e.current.length,
    disabledIndices: r,
  })
}
function G(e, r) {
  let {
    startingIndex = -1,
    decrement = !1,
    disabledIndices,
    amount = 1,
  } = void 0 === r ? {} : r
  let a = e.current
  let h = n
  do h += decrement ? -amount : amount; while (h >= 0 && h <= a.length - 1 && ee(a, h, disabledIndices))
  return h
}
function X(e, r) {
  let {
    event,
    orientation,
    loop,
    rtl,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent = !1,
  } = r
  let v = g
  if (event.key === F) {
    if (stopEvent && I(event), prevIndex === -1) {
      v = maxIndex
    }
    else if (v = G(e, {
      startingIndex: v,
      amount: cols,
      decrement: !0,
      disabledIndices,
    }), loop && (prevIndex - cols < minIndex || v < 0)) {
      let e = prevIndex % cols
      let r = maxIndex % cols
      let n = maxIndex - (r - e)
      v = r === e ? maxIndex : r > e ? n : n - cols
    }
    q(e, v) && (v = prevIndex)
  }
  if (event.key === U && (stopEvent && I(event), prevIndex === -1
    ? v = minIndex
    : (v = G(e, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices,
      }), loop && prevIndex + cols > maxIndex && (v = G(e, {
        startingIndex: prevIndex % cols - cols,
        amount: cols,
        disabledIndices,
      }))), q(e, v) && (v = prevIndex)), orientation === 'both') {
    let r = RI(prevIndex / cols)
    event.key === (rtl ? Q : V) && (stopEvent && I(event), prevIndex % cols != cols - 1
      ? (v = G(e, {
          startingIndex: prevIndex,
          disabledIndices,
        }), loop && B(v, cols, r) && (v = G(e, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices,
        })))
      : loop && (v = G(e, {
        startingIndex: prevIndex - prevIndex % cols - 1,
        disabledIndices,
      })), B(v, cols, r) && (v = prevIndex))
    event.key === (rtl ? V : Q) && (stopEvent && I(event), prevIndex % cols != 0
      ? (v = G(e, {
          startingIndex: prevIndex,
          decrement: !0,
          disabledIndices,
        }), loop && B(v, cols, r) && (v = G(e, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: !0,
          disabledIndices,
        })))
      : loop && (v = G(e, {
        startingIndex: prevIndex + (cols - prevIndex % cols),
        decrement: !0,
        disabledIndices,
      })), B(v, cols, r) && (v = prevIndex))
    let i = RI(maxIndex / cols) === r
    q(e, v) && (v = loop && i
      ? event.key === (rtl ? V : Q)
        ? maxIndex
        : G(e, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices,
          })
      : prevIndex)
  }
  return v
}
function H(e, r, n) {
  let i = []
  let s = 0
  e.forEach((e, o) => {
    let {
      width,
      height,
    } = e
    let d = !1
    for (n && (s = 0); !d;) {
      let e = []
      for (let n = 0; n < width; n++) {
        for (let i = 0; i < height; i++) e.push(s + n + i * r)
      }
      s % r + width <= r && e.every(e => i[e] == null)
        ? (e.forEach((e) => {
            i[e] = o
          }), d = !0)
        : s++
    }
  })
  return [...i]
}
function K(e, r, n, i, s) {
  if (e === -1)
    return -1
  let o = n.indexOf(e)
  let a = r[e]
  switch (s) {
    case 'tl':
      return o
    case 'tr':
      if (!a)
        return o
      return o + a.width - 1
    case 'bl':
      if (!a)
        return o
      return o + (a.height - 1) * i
    case 'br':
      return n.lastIndexOf(e)
  }
}
function J(e, r) {
  return r.flatMap((r, n) => e.includes(r) ? [n] : [])
}
function ee(e, r, n) {
  if (n)
    return n.includes(r)
  let i = e[r]
  return i?.hasAttribute('disabled') || i.getAttribute('aria-disabled') === 'true'
}
let et = typeof document != 'undefined' ? useLayoutEffect : useEffect
function er(e, r) {
  let n = e.compareDocumentPosition(r)
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0
}
function en(e, r) {
  if (e.size !== r.size)
    return !1
  for (let [n, i] of e.entries()) {
    if (i !== r.get(n))
      return !1
  }
  return !0
}
let ei = createContext({
  register: () => {},
  unregister: () => {},
  map: new Map(),
  elementsRef: {
    current: [],
  },
})
export function FloatingList(e) {
  let {
    children,
    elementsRef,
    labelsRef,
  } = e
  let [o, a] = useState(() => new Map())
  let h = useCallback((e) => {
    a(r => new Map(r).set(e, null))
  }, [])
  let d = useCallback((e) => {
    a((r) => {
      let n = new Map(r)
      n.$$delete(e)
      return n
    })
  }, [])
  et(() => {
    let e = new Map(o)
    Array.from(e.keys()).sort(er).forEach((r, n) => {
      e.set(r, n)
    })
    en(o, e) || a(e)
  }, [o])
  return createElement(ei.Provider, {
    value: useMemo(() => ({
      register: h,
      unregister: d,
      map: o,
      elementsRef,
      labelsRef,
    }), [h, d, o, elementsRef, labelsRef]),
  }, children)
}
export function useListItem(e) {
  void 0 === e && (e = {})
  let {
    label,
  } = e
  let {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef,
  } = useContext(ei)
  let [d, p] = useState(null)
  let g = useRef(null)
  let m = useCallback((e) => {
    if (g.current = e, d !== null && (elementsRef.current[d] = e, labelsRef)) {
      let n
      let i = void 0 !== label
      labelsRef.current[d] = i ? label : (n = e?.textContent) != null ? n : null
    }
  }, [d, elementsRef, labelsRef, label])
  et(() => {
    let e = g.current
    if (e) {
      register(e)
      return () => {
        unregister(e)
      }
    }
  }, [register, unregister])
  et(() => {
    let e = g.current ? map.get(g.current) : null
    e != null && p(e)
  }, [map])
  return useMemo(() => ({
    ref: m,
    index: d,
  }), [d, m])
}
function ea() {
  return (ea = Object.assign
    ? Object.assign.bind()
    : function (e) {
      for (let r = 1; r < $$arguments.length; r++) {
        let n = $$arguments[r]
        for (let i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
      }
      return e
    }).apply(this, arguments)
}
let el = !1
let eu = 0
let ec = () => `floating-ui-${Math.random().toString(36).slice(2, 6)}${eu++}`
function eh() {
  let [e, r] = useState(() => el ? ec() : void 0)
  et(() => {
    e == null && r(ec())
  }, [])
  useEffect(() => {
    el = !0
  }, [])
  return e
}
let ed = j.useId || eh
let FloatingArrow = forwardRef((e, r) => {
  let {
    context: {
      placement,
      elements: {
        floating,
      },
      middlewareData: {
        arrow,
        shift,
      },
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d: _d,
    style: {
      transform: O,
      ...x
    } = {},
    ...w
  } = e
  let k = ed()
  let [_, S] = useState(!1)
  if (et(() => {
    floating && L9(floating).direction === 'rtl' && S(!0)
  }, [floating]), !floating) {
    return null
  }
  let [E, A] = placement.split('-')
  let C = E === 'top' || E === 'bottom'
  let T = v;
  (C && shift != null && shift.x || !C && shift != null && shift.y) && (T = null)
  let I = 2 * strokeWidth
  let P = I / 2
  let R = width / 2 * (-(tipRadius / 8) + 1)
  let M = height / 2 * tipRadius / 4
  let D = !!_d
  let N = T && A === 'end' ? 'bottom' : 'top'
  let $ = T && A === 'end' ? 'right' : 'left'
  T && _ && ($ = A === 'end' ? 'left' : 'right')
  let L = arrow?.x != null ? T || arrow.x : ''
  let j = arrow?.y != null ? T || arrow.y : ''
  let z = _d || `M0,0 H${width} L${width - R},${height - M} Q${width / 2},${height} ${R},${height - M} Z`
  let Z = {
    top: D ? 'rotate(180deg)' : '',
    left: D ? 'rotate(90deg)' : 'rotate(-90deg)',
    bottom: D ? '' : 'rotate(180deg)',
    right: D ? 'rotate(-90deg)' : 'rotate(90deg)',
  }[E]
  return createElement('svg', ea({}, w, {
    'aria-hidden': !0,
    'ref': r,
    'width': D ? width : width + I,
    'height': width,
    'viewBox': `0 0 ${width} ${height > width ? height : width}`,
    'style': {
      position: 'absolute',
      pointerEvents: 'none',
      [$]: L,
      [N]: j,
      [E]: C || D ? '100%' : `calc(100% - ${I / 2}px)`,
      transform: [Z, O].filter(e => !!e).join(' '),
      ...x,
    },
  }), I > 0 && createElement('path', {
    clipPath: `url(#${k})`,
    fill: 'none',
    stroke,
    strokeWidth: I + (_d ? 0 : 1),
    d: z,
  }), createElement('path', {
    stroke: I && !_d ? w.fill : 'none',
    d: z,
  }), createElement('clipPath', {
    id: k,
  }, createElement('rect', {
    x: -P,
    y: P * (D ? -1 : 1),
    width: width + I,
    height: width,
  })))
})
function ep() {
  let e = new Map()
  return {
    emit(r, n) {
      let i
      e.get(r) || i.forEach(e => e(n))
    },
    on(r, n) {
      e.set(r, [...(e.get(r) || []), n])
    },
    off(r, n) {
      let i
      e.set(r, ((i = e.get(r)) == null ? void 0 : i.filter(e => e !== n)) || [])
    },
  }
}
let FloatingNodeContext = createContext(null)
let FloatingTreeContext = createContext(null)
let useFloatingParentNodeId = () => {
  let e
  return ((e = useContext(FloatingNodeContext)) == null ? void 0 : e.id) || null
}
let useFloatingTree = () => useContext(FloatingTreeContext)
export function useFloatingNodeId(e) {
  let r = ed()
  let n = useFloatingTree()
  let i = useFloatingParentNodeId()
  let s = e || i
  et(() => {
    let e = {
      id: r,
      parentId: s,
    }
    n?.addNode(e)
    return () => {
      n?.removeNode(e)
    }
  }, [n, r, s])
  return r
}
export function FloatingNode(e) {
  let {
    children,
    id,
  } = e
  let i = useFloatingParentNodeId()
  return createElement(FloatingNodeContext.Provider, {
    value: useMemo(() => ({
      id,
      parentId: i,
    }), [id, i]),
  }, children)
}
export function FloatingTree(e) {
  let {
    children,
  } = e
  let n = useRef([])
  let i = useCallback((e) => {
    n.current = [...n.current, e]
  }, [])
  let o = useCallback((e) => {
    n.current = n.current.filter(r => r !== e)
  }, [])
  let a = useState(() => ep())[0]
  return createElement(FloatingTreeContext.Provider, {
    value: useMemo(() => ({
      nodesRef: n,
      addNode: i,
      removeNode: o,
      events: a,
    }), [i, o, a]),
  }, children)
}
function ew(e) {
  return `data-floating-ui-${e}`
}
function ek(e) {
  let r = useRef(e)
  et(() => {
    r.current = e
  })
  return r
}
let e_ = ew('safe-polygon')
function eS(e, r, n) {
  return n && !w(n) ? 0 : typeof e == 'number' ? e : e?.[r]
}
export function useHover(e, r) {
  void 0 === r && (r = {})
  let {
    open,
    onOpenChange,
    dataRef,
    events,
    elements,
  } = e
  let {
    enabled = !0,
    delay = 0,
    handleClose = null,
    mouseOnly = !1,
    restMs = 0,
    move = !0,
  } = r
  let x = useFloatingTree()
  let k = useFloatingParentNodeId()
  let _ = ek(handleClose)
  let E = ek(delay)
  let A = ek(open)
  let C = useRef()
  let T = useRef(-1)
  let I = useRef()
  let P = useRef(-1)
  let R = useRef(!0)
  let M = useRef(!1)
  let D = useRef(() => {})
  let N = useRef(!1)
  let $ = useCallback(() => {
    let e
    let r = (e = dataRef.current.openEvent) == null ? void 0 : e.type
    return r?.includes('mouse') && r !== 'mousedown'
  }, [dataRef])
  useEffect(() => {
    if (enabled) {
      events.on('openchange', e)
      return () => {
        events.off('openchange', e)
      }
    }
    function e(e) {
      let {
        open,
      } = e
      open || (clearTimeout(T.current), clearTimeout(P.current), R.current = !0, N.current = !1)
    }
  }, [enabled, events])
  useEffect(() => {
    if (!enabled || !_.current || !open)
      return
    function e(e) {
      $() && onOpenChange(!1, e, 'hover')
    }
    let r = S(elements.floating).documentElement
    r.addEventListener('mouseleave', e)
    return () => {
      r.removeEventListener('mouseleave', e)
    }
  }, [elements.floating, open, onOpenChange, enabled, _, $])
  let L = useCallback((e, r, n) => {
    void 0 === r && (r = !0)
    void 0 === n && (n = 'hover')
    let s = eS(E.current, 'close', C.current)
    s && !I.current ? (clearTimeout(T.current), T.current = window.setTimeout(() => onOpenChange(!1, e, n), s)) : r && (clearTimeout(T.current), onOpenChange(!1, e, n))
  }, [E, onOpenChange])
  let j = Z(() => {
    D.current()
    I.current = void 0
  })
  let z = Z(() => {
    if (M.current) {
      let e = S(elements.floating).body
      e.style.pointerEvents = ''
      e.removeAttribute(e_)
      M.current = !1
    }
  })
  let F = Z(() => !!dataRef.current.openEvent && ['click', 'mousedown'].includes(dataRef.current.openEvent.type))
  useEffect(() => {
    if (enabled && vq(elements.domReference)) {
      let e
      let i = elements.domReference
      open && i.addEventListener('mouseleave', h)
      elements.floating || e.addEventListener('mouseleave', h)
      move && i.addEventListener('mousemove', r, {
        once: !0,
      })
      i.addEventListener('mouseenter', r)
      i.addEventListener('mouseleave', s)
      return () => {
        let e
        open && i.removeEventListener('mouseleave', h)
        elements.floating || e.removeEventListener('mouseleave', h)
        move && i.removeEventListener('mousemove', r)
        i.removeEventListener('mouseenter', r)
        i.removeEventListener('mouseleave', s)
      }
    }
    function r(e) {
      if (clearTimeout(T.current), R.current = !1, mouseOnly && !w(C.current) || restMs > 0 && !eS(E.current, 'open'))
        return
      let r = eS(E.current, 'open', C.current)
      r
        ? T.current = window.setTimeout(() => {
          A.current || onOpenChange(!0, e, 'hover')
        }, r)
        : open || onOpenChange(!0, e, 'hover')
    }
    function s(e) {
      if (F())
        return
      D.current()
      let r = S(elements.floating)
      if (clearTimeout(P.current), N.current = !1, _.current && dataRef.current.floatingContext) {
        open || clearTimeout(T.current)
        I.current = _.current({
          ...dataRef.current.floatingContext,
          tree: x,
          x: e.clientX,
          y: e.clientY,
          onClose() {
            z()
            j()
            F() || L(e, !0, 'safe-polygon')
          },
        })
        let i = I.current
        r.addEventListener('mousemove', i)
        D.current = () => {
          r.removeEventListener('mousemove', i)
        }
        return
      }
      C.current === 'touch' && d(elements.floating, e.relatedTarget) || L(e)
    }
    function h(e) {
      !F() && dataRef.current.floatingContext && (_.current == null || _.current({
        ...dataRef.current.floatingContext,
        tree: x,
        x: e.clientX,
        y: e.clientY,
        onClose() {
          z()
          j()
          F() || L(e)
        },
      })(e))
    }
  }, [elements, enabled, e, mouseOnly, restMs, move, L, j, z, onOpenChange, open, A, x, E, _, dataRef, F])
  et(() => {
    let e
    let r
    if (enabled && open && (e = _.current) != null && e.__options.blockPointerEvents && $()) {
      M.current = !0
      let e = elements.floating
      if (vq(elements.domReference) && e) {
        let n = S(elements.floating).body
        n.setAttribute(e_, '')
        let i = elements.domReference
        let s = x?.nodesRef.current.find(e => e.id === k)?.context || x.nodesRef.current.find(e => e.id === k)?.context || r.context || r.elements.floating
        s && (s.style.pointerEvents = '')
        n.style.pointerEvents = 'none'
        i.style.pointerEvents = 'auto'
        e.style.pointerEvents = 'auto'
        return () => {
          n.style.pointerEvents = ''
          i.style.pointerEvents = ''
          e.style.pointerEvents = ''
        }
      }
    }
  }, [enabled, open, k, elements, x, _, $])
  et(() => {
    open || (C.current = void 0, N.current = !1, j(), z())
  }, [open, j, z])
  useEffect(() => () => {
    j()
    clearTimeout(T.current)
    clearTimeout(P.current)
    z()
  }, [enabled, elements.domReference, j, z])
  let U = useMemo(() => {
    function e(e) {
      C.current = e.pointerType
    }
    return {
      onPointerDown: e,
      onPointerEnter: e,
      onMouseMove(e) {
        let {
          nativeEvent,
        } = e
        function s() {
          R.current || A.current || onOpenChange(!0, nativeEvent, 'hover')
        }
        !(!mouseOnly || w(C.current)) || open || restMs === 0 || N.current && e.movementX ** 2 + e.movementY ** 2 < 2 || (clearTimeout(P.current), C.current === 'touch' ? s() : (N.current = !0, P.current = window.setTimeout(s, restMs)))
      },
    }
  }, [mouseOnly, onOpenChange, open, A, restMs])
  let Q = useMemo(() => ({
    onMouseEnter() {
      clearTimeout(T.current)
    },
    onMouseLeave(e) {
      F() || L(e.nativeEvent, !1)
    },
  }), [L, F])
  return useMemo(() => enabled
    ? {
        reference: U,
        floating: Q,
      }
    : {}, [enabled, U, Q])
}
let eA = () => {}
let eC = 0
function eT(e, r) {
  void 0 === r && (r = {})
  let {
    preventScroll = !1,
    cancelPrevious = !0,
    sync = !1,
  } = r
  cancelPrevious && cancelAnimationFrame(eC)
  let o = () => e?.focus({
    preventScroll,
  })
  sync ? o() : eC = requestAnimationFrame(o)
}
function eI(e, r) {
  let n
  let i = []
  let s = (n = e.find(e => e.id === r)) == null ? void 0 : n.parentId
  for (; s;) {
    let r = e.find(e => e.id === s)
    s = r?.parentId
    r && (i = i.concat(r))
  }
  return i
}
function eP(e, r) {
  let n = e.filter((e) => {
    let n
    return e.parentId === r && ((n = e.context) == null ? void 0 : n.open)
  })
  let i = n
  for (; i.length;) {
    i = e.filter((e) => {
      let r
      return (r = i) == null
        ? void 0
        : r.some((r) => {
            let n
            return e.parentId === r.id && ((n = e.context) == null ? void 0 : n.open)
          })
    })
    n = n.concat(i)
  }
  return n
}
function eR(e, r) {
  let n
  let i = -1
  function s(r, o) {
    o > i && (n = r, i = o)
    eP(e, r).forEach((e) => {
      s(e.id, o + 1)
    })
  }
  s(r, 0)
  return e.find(e => e.id === n)
}
let eM = new WeakMap()
let eD = new WeakSet()
let eN = {}
let e$ = 0
let eL = () => typeof HTMLElement != 'undefined' && 'inert' in HTMLElement.prototype
let ej = e => e && (e.host || ej(e.parentNode))
let ez = (e, r) => r.map((r) => {
  if (e.contains(r))
    return r
  let n = ej(r)
  return e.contains(n) ? n : null
}).filter(e => e != null)
function eZ(e, r, n, i) {
  let s = 'data-floating-ui-inert'
  let o = i ? 'inert' : n ? 'aria-hidden' : null
  let h = ez(r, e)
  let d = new Set()
  let p = new Set(h)
  let g = []
  eN[s] || (eN[s] = new WeakMap())
  let m = eN[s]
  function v(e) {
    !(!e || d.has(e)) && (d.add(e), e.parentNode && v(e.parentNode))
  }
  function y(e) {
    !e || p.has(e) || [].forEach.call(e.children, (e) => {
      if (mq(e) !== 'script') {
        if (d.has(e)) {
          y(e)
        }
        else {
          let r = o ? e.getAttribute(o) : null
          let n = r !== null && r !== 'false'
          let i = (eM.get(e) || 0) + 1
          let a = (m.get(e) || 0) + 1
          eM.set(e, i)
          m.set(e, a)
          g.push(e)
          i === 1 && n && eD.add(e)
          a === 1 && e.setAttribute(s, '')
          !n && o && e.setAttribute(o, 'true')
        }
      }
    })
  }
  h.forEach(v)
  y(r)
  d.clear()
  e$++
  return () => {
    g.forEach((e) => {
      let r = (eM.get(e) || 0) - 1
      let n = (m.get(e) || 0) - 1
      eM.set(e, r)
      m.set(e, n)
      r || (!eD.has(e) && o && e.removeAttribute(o), eD.$$delete(e))
      n || e.removeAttribute(s)
    })
    --e$ || (eM = new WeakMap(), eM = new WeakMap(), eD = new WeakSet(), eN = {})
  }
}
function eF(e, r, n) {
  void 0 === r && (r = !1)
  void 0 === n && (n = !1)
  let i = S(e[0]).body
  return eZ(e.concat(Array.from(i.querySelectorAll('[aria-live]'))), i, r, n)
}
let eU = () => ({
  getShadowRoot: !0,
  displayCheck: typeof ResizeObserver == 'function' && ResizeObserver.toString().includes('[native code]') ? 'full' : 'none',
})
function eQ(e, r) {
  let n = Kr(e, eU())
  r === 'prev' && n.reverse()
  let i = n.indexOf(h(S(e)))
  return n.slice(i + 1)[0]
}
function eV() {
  return eQ(document.body, 'next')
}
function eB() {
  return eQ(document.body, 'prev')
}
function eq(e, r) {
  let n = r || e.currentTarget
  let i = e.relatedTarget
  return !i || !d(n, i)
}
function eW(e) {
  Kr(e, eU()).forEach((e) => {
    e.dataset.tabindex = e.getAttribute('tabindex') || ''
    e.setAttribute('tabindex', '-1')
  })
}
function eY(e) {
  e.querySelectorAll('[data-tabindex]').forEach((e) => {
    let r = e.dataset.tabindex
    delete e.dataset.tabindex
    r ? e.setAttribute('tabindex', r) : e.removeAttribute('tabindex')
  })
}
let eG = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'fixed',
  whiteSpace: 'nowrap',
  width: '1px',
  top: 0,
  left: 0,
}
function eX(e) {
  e.key === 'Tab' && (e.target, clearTimeout(i))
}
let eH = forwardRef((e, r) => {
  let [n, i] = useState()
  et(() => (y() && i('button'), document.addEventListener('keydown', eX), () => {
    document.removeEventListener('keydown', eX)
  }), [])
  let o = {
    'ref': r,
    'tabIndex': 0,
    'role': n,
    'aria-hidden': !n || void 0,
    [ew('focus-guard')]: '',
    'style': eG,
  }
  return createElement('span', ea({}, e, o))
})
let PortalContext = createContext(null)
let eJ = ew('portal')
function useFloatingPortalNode(e) {
  void 0 === e && (e = {})
  let {
    id,
    root,
  } = e
  let i = ed()
  let o = e2()
  let [h, d] = useState(null)
  let p = useRef(null)
  et(() => () => {
    h?.remove()
    queueMicrotask(() => {
      p.current = null
    })
  }, [h])
  et(() => {
    if (!i || p.current)
      return
    let e = id ? document.getElementById(id) : null
    if (!e)
      return
    let n = document.createElement('div')
    n.id = i
    n.setAttribute(eJ, '')
    e.appendChild(n)
    p.current = n
    d(n)
  }, [id, i])
  et(() => {
    if (root === null || !i || p.current)
      return
    let e = root || o?.portalNode
    e && !vq(e) && (e = e.current)
    e = e || document.body
    let s = null
    id && ((s = document.createElement('div')).id = id, e.appendChild(s))
    let h = document.createElement('div')
    h.id = i
    h.setAttribute(eJ, '');
    (e = s || e).appendChild(h)
    p.current = h
    d(h)
  }, [id, root, i, o])
  return h
}
export function FloatingPortal(e) {
  let {
    children,
    id,
    root,
    preserveTabOrder = !0,
  } = e
  let a = useFloatingPortalNode({
    id,
    root,
  })
  let [h, d] = useState(null)
  let p = useRef(null)
  let g = useRef(null)
  let m = useRef(null)
  let v = useRef(null)
  let y = h?.modal
  let b = h?.open
  let O = !!h && !h.modal && h.open && preserveTabOrder && !!(root || a)
  useEffect(() => {
    if (a && preserveTabOrder && !y) {
      a.addEventListener('focusin', e, !0)
      a.addEventListener('focusout', e, !0)
      return () => {
        a.removeEventListener('focusin', e, !0)
        a.removeEventListener('focusout', e, !0)
      }
    }
    function e(e) {
      a && eq(e) && (e.type === 'focusin' ? eY : eW)(a)
    }
  }, [a, preserveTabOrder, y])
  useEffect(() => {
    a && (b || eY(a))
  }, [b, a])
  return createElement(PortalContext.Provider, {
    value: useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef: p,
      afterOutsideRef: g,
      beforeInsideRef: m,
      afterInsideRef: v,
      portalNode: a,
      setFocusManagerState: d,
    }), [preserveTabOrder, a]),
  }, O && a && createElement(eH, {
    'data-type': 'outside',
    'ref': p,
    'onFocus': (e) => {
      if (eq(e, a)) {
        let r
        m.current || r.focus()
      }
      else {
        let e = eB() || h?.refs.domReference.current
        e?.focus()
      }
    },
  }), O && a && createElement('span', {
    'aria-owns': a.id,
    'style': eG,
  }), a && createPortal(children, a), O && a && createElement(eH, {
    'data-type': 'outside',
    'ref': g,
    'onFocus': (e) => {
      if (eq(e, a)) {
        let r
        v.current || r.focus()
      }
      else {
        let r = eV() || h?.refs.domReference.current
        r?.focus()
        h?.closeOnFocusOut && h?.onOpenChange(!1, e.nativeEvent, 'focus-out')
      }
    },
  }))
}
let e2 = () => useContext(PortalContext)
let e5 = 'data-floating-ui-focusable'
function e3(e) {
  return e ? e.hasAttribute(e5) ? e : e.querySelector(`[${e5}]`) || e : null
}
let e6 = 20
let e4 = []
function e8(e) {
  e4 = e4.filter(e => e.isConnected)
  let r = e
  if (r && mq(r) !== 'body') {
    if (!AO(r, eU())) {
      let e = Kr(r, eU())[0]
      e && (r = e)
    }
    e4.push(r)
    e4.length > e6 && (e4 = e4.slice(-e6))
  }
}
function e7() {
  return e4.slice().reverse().find(e => e.isConnected)
}
let e9 = forwardRef((e, r) => {
  return createElement('button', ea({}, e, {
    type: 'button',
    ref: r,
    tabIndex: -1,
    style: eG,
  }))
})
export function FloatingFocusManager(e) {
  let {
    context,
    children,
    disabled = !1,
    order = ['content'],
    guards = !0,
    initialFocus = 0,
    returnFocus = !0,
    restoreFocus = !1,
    modal = !0,
    visuallyHiddenDismiss = !1,
    closeOnFocusOut = !0,
  } = e
  let {
    open,
    refs,
    nodeId,
    onOpenChange,
    events,
    dataRef,
    floatingId,
    elements: {
      domReference,
      floating,
    },
  } = r
  let L = typeof initialFocus == 'number' && initialFocus < 0
  let j = P(domReference) && L
  let z = !eL() || guards
  let F = ek(order)
  let U = ek(initialFocus)
  let Q = ek(returnFocus)
  let V = useFloatingTree()
  let B = e2()
  let q = useRef(null)
  let W = useRef(null)
  let Y = useRef(!1)
  let G = useRef(!1)
  let X = useRef(-1)
  let H = B != null
  let K = e3(floating)
  let J = Z((e) => {
    void 0 === e && (e = K)
    return e ? Kr(e, eU()) : []
  })
  let ee = Z((e) => {
    let r = J(e)
    return F.current.map(e => domReference && e === 'reference' ? domReference : K && e === 'floating' ? K : r).filter(Boolean).flat()
  })
  function er(e) {
    return !disabled && visuallyHiddenDismiss && modal
      ? createElement(e9, {
          ref: e === 'start' ? q : W,
          onClick: e => onOpenChange(!1, e.nativeEvent),
        }, typeof visuallyHiddenDismiss == 'string' ? visuallyHiddenDismiss : 'Dismiss')
      : null
  }
  useEffect(() => {
    if (disabled || !modal)
      return
    function e(e) {
      if (e.key === 'Tab') {
        d(K, h(S(K))) && J().length === 0 && !j && I(e)
        let r = ee()
        let n = A(e)
        F.current[0] === 'reference' && n === domReference && (I(e), e.shiftKey ? eT(r[r.length - 1]) : eT(r[1]))
        F.current[1] === 'floating' && n === K && e.shiftKey && (I(e), eT(r[0]))
      }
    }
    let r = S(K)
    r.addEventListener('keydown', e)
    return () => {
      r.removeEventListener('keydown', e)
    }
  }, [disabled, domReference, K, modal, F, j, J, ee])
  useEffect(() => {
    if (!disabled && floating) {
      floating.addEventListener('focusin', e)
      return () => {
        floating.removeEventListener('focusin', e)
      }
    }
    function e(e) {
      let r = A(e)
      let n = J().indexOf(r)
      n !== -1 && (X.current = n)
    }
  }, [disabled, floating, J])
  useEffect(() => {
    if (!disabled && closeOnFocusOut && floating && sb(domReference)) {
      domReference.addEventListener('focusout', r)
      domReference.addEventListener('pointerdown', e)
      floating.addEventListener('focusout', r)
      return () => {
        domReference.removeEventListener('focusout', r)
        domReference.removeEventListener('pointerdown', e)
        floating.removeEventListener('focusout', r)
      }
    }
    function e() {
      G.current = !0
      setTimeout(() => {
        G.current = !1
      })
    }
    function r(e) {
      let r = e.relatedTarget
      queueMicrotask(() => {
        let n = !(d(domReference, r) || d(floating, r) || d(r, floating) || d(B?.portalNode, r) || r != null && r.hasAttribute(ew('focus-guard')) || V && (eP(V.nodesRef.current, nodeId).find((e) => {
          let n
          let i
          return d((n = e.context) == null ? void 0 : n.elements.floating, r) || d((i = e.context) == null ? void 0 : i.elements.domReference, r)
        }) || eI(V.nodesRef.current, nodeId).find((e) => {
          let n
          let i
          return ((n = e.context) == null ? void 0 : n.elements.floating) === r || ((i = e.context) == null ? void 0 : i.elements.domReference) === r
        })))
        if (restoreFocus && n && h(S(K)) === S(K).body) {
          sb(K) && K.focus()
          let e = X.current
          let r = J()
          let n = r[e] || r[r.length - 1] || K
          sb(n) && n.focus()
        }
        (j || !modal) && r && n && !G.current && r !== e7() && (Y.current = !0, onOpenChange(!1, e, 'focus-out'))
      })
    }
  }, [disabled, domReference, floating, K, modal, nodeId, V, B, onOpenChange, closeOnFocusOut, restoreFocus, J, j])
  useEffect(() => {
    let e
    if (disabled)
      return
    let r = Array.from(B?.portalNode || B.portalNode || e.querySelectorAll(`[${ew('portal')}]`) || [])
    if (floating) {
      let e = [floating, ...r, q.current, W.current, F.current.includes('reference') || j ? domReference : null].filter(e => e != null)
      let n = modal || j ? eF(e, z, !z) : eF(e)
      return () => {
        n()
      }
    }
  }, [disabled, domReference, floating, modal, F, B, j, z])
  et(() => {
    if (disabled || !sb(K))
      return
    let e = h(S(K))
    queueMicrotask(() => {
      let r = ee(K)
      let n = U.current
      let i = (typeof n == 'number' ? r[n] : n.current) || K
      let s = d(K, e)
      L || s || !open || eT(i, {
        preventScroll: i === K,
      })
    })
  }, [disabled, open, K, L, ee, U])
  et(() => {
    if (disabled || !K)
      return
    let e = !1
    let r = S(K)
    let n = h(r)
    let s = dataRef.current.openEvent
    function o(r) {
      let {
        open,
        reason,
        event,
        nested,
      } = r
      open && (s = event)
      reason === 'escape-key' && refs.domReference.current && e8(refs.domReference.current)
      reason === 'hover' && event.type === 'mouseleave' && (Y.current = !0)
      reason === 'outside-press' && (nested ? (Y.current = !1, e = !0) : Y.current = !(m(event) || v(event)))
    }
    e8(n)
    events.on('openchange', o)
    let p = r.createElement('span')
    function g() {
      return typeof Q.current == 'boolean' ? e7() || p : Q.current.current || p
    }
    p.setAttribute('tabindex', '-1')
    p.setAttribute('aria-hidden', 'true')
    Object.assign(p.style, eG)
    H && domReference && domReference.insertAdjacentElement('afterend', p)
    return () => {
      events.off('openchange', o)
      let n = h(r)
      let i = d(floating, n) || V && eP(V.nodesRef.current, nodeId).some((e) => {
        let r
        return d((r = e.context) == null ? void 0 : r.elements.floating, n)
      });
      (i || s && ['click', 'mousedown'].includes(s.type)) && refs.domReference.current && e8(refs.domReference.current)
      let m = g()
      queueMicrotask(() => {
        Q.current && !Y.current && sb(m) && (m === n || n === r.body || i) && m.focus({
          preventScroll: e,
        })
        p.remove()
      })
    }
  }, [disabled, floating, K, Q, dataRef, refs, events, V, nodeId, H, domReference])
  useEffect(() => {
    queueMicrotask(() => {
      Y.current = !1
    })
  }, [disabled])
  et(() => {
    if (!disabled && B) {
      B.setFocusManagerState({
        modal,
        closeOnFocusOut,
        open,
        onOpenChange,
        refs,
      })
      return () => {
        B.setFocusManagerState(null)
      }
    }
  }, [disabled, B, modal, open, onOpenChange, refs, closeOnFocusOut])
  et(() => {
    if (disabled || !K || typeof MutationObserver != 'function' || L)
      return
    let e = () => {
      let e = K.getAttribute('tabindex')
      let r = J()
      let n = h(S(floating))
      let i = r.indexOf(n)
      i !== -1 && (X.current = i)
      F.current.includes('floating') || n !== refs.domReference.current && r.length === 0 ? e !== '0' && K.setAttribute('tabindex', '0') : e !== '-1' && K.setAttribute('tabindex', '-1')
    }
    e()
    let r = new MutationObserver(e)
    r.observe(K, {
      childList: !0,
      subtree: !0,
      attributes: !0,
    })
    return () => {
      r.disconnect()
    }
  }, [disabled, floating, K, refs, F, J, L])
  let en = !disabled && z && (!modal || !j) && (H || modal)
  return createElement(Fragment, null, en && createElement(eH, {
    'data-type': 'inside',
    'ref': B?.beforeInsideRef,
    'onFocus': (e) => {
      if (modal) {
        let e = ee()
        eT(order[0] === 'reference' ? e[0] : e[e.length - 1])
      }
      else if (B != null && B.preserveTabOrder && B.portalNode) {
        if (Y.current = !1, eq(e, B.portalNode)) {
          let e = eV() || domReference
          e?.focus()
        }
        else {
          let r
          B.beforeOutsideRef.current || r.focus()
        }
      }
    },
  }), !j && er('start'), children, er('end'), en && createElement(eH, {
    'data-type': 'inside',
    'ref': B?.afterInsideRef,
    'onFocus': (e) => {
      if (modal) {
        eT(ee()[0])
      }
      else if (B != null && B.preserveTabOrder && B.portalNode) {
        if (closeOnFocusOut && (Y.current = !0), eq(e, B.portalNode)) {
          let e = eB() || domReference
          e?.focus()
        }
        else {
          let r
          B.afterOutsideRef.current || r.focus()
        }
      }
    },
  }))
}
let tt = 0
function tr() {
  let e = /iP(hone|ad|od)|iOS/.test(p())
  let r = document.body.style
  let n = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? 'paddingLeft' : 'paddingRight'
  let i = window.innerWidth - document.documentElement.clientWidth
  let s = r.left ? parseFloat(r.left) : window.scrollX
  let o = r.top ? parseFloat(r.top) : window.scrollY
  if (r.overflow = 'hidden', i && (r[n] = `${i}px`), e) {
    let a
    let h
    let e = ((a = window.visualViewport) == null ? void 0 : a.offsetLeft) || 0
    Object.assign(r, {
      position: 'fixed',
      top: `${-(o - Math.floor(((h = window.visualViewport) == null ? void 0 : h.offsetTop) || 0))}px`,
      left: `${-(s - Math.floor(e))}px`,
      right: '0',
    })
  }
  return () => {
    Object.assign(r, {
      overflow: '',
      [n]: '',
    })
    e && (Object.assign(r, {
      position: '',
      top: '',
      left: '',
      right: '',
    }), window.scrollTo(s, o))
  }
}
let tn = () => {}
let FloatingOverlay = forwardRef((e, r) => {
  let {
    lockScroll = !1,
    ...i
  } = e
  et(() => {
    if (lockScroll) {
      ++tt == 1 && (tn = tr())
      return () => {
        --tt == 0 && tn()
      }
    }
  }, [lockScroll])
  return createElement('div', ea({
    ref: r,
  }, i, {
    style: {
      position: 'fixed',
      overflow: 'auto',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...i.style,
    },
  }))
})
function ts(e) {
  return sb(e.target) && e.target.tagName === 'BUTTON'
}
function to(e) {
  return T(e)
}
export function useClick(e, r) {
  void 0 === r && (r = {})
  let {
    open,
    onOpenChange,
    dataRef,
    elements: {
      domReference,
    },
  } = e
  let {
    enabled = !0,
    event = 'click',
    toggle = !0,
    ignoreMouse = !1,
    keyboardHandlers = !0,
    stickIfOpen = !0,
  } = r
  let y = useRef()
  let b = useRef(!1)
  let O = useMemo(() => ({
    onPointerDown(e) {
      y.current = e.pointerType
    },
    onMouseDown(e) {
      let r = y.current
      e.button === 0 && event !== 'click' && (w(r, !0) && ignoreMouse || (open && toggle && (!dataRef.current.openEvent || !stickIfOpen || dataRef.current.openEvent.type === 'mousedown') ? onOpenChange(!1, e.nativeEvent, 'click') : (e.preventDefault(), onOpenChange(!0, e.nativeEvent, 'click'))))
    },
    onClick(e) {
      let r = y.current
      if (event === 'mousedown' && y.current) {
        y.current = void 0
        return
      }
      w(r, !0) && ignoreMouse || (open && toggle && (!dataRef.current.openEvent || !stickIfOpen || dataRef.current.openEvent.type === 'click') ? onOpenChange(!1, e.nativeEvent, 'click') : onOpenChange(!0, e.nativeEvent, 'click'))
    },
    onKeyDown(e) {
      y.current = void 0
      e.defaultPrevented || !keyboardHandlers || ts(e) || (e.key !== ' ' || to(domReference) || (e.preventDefault(), b.current = !0), e.key === 'Enter' && (open && toggle ? onOpenChange(!1, e.nativeEvent, 'click') : onOpenChange(!0, e.nativeEvent, 'click')))
    },
    onKeyUp(e) {
      !(e.defaultPrevented || !keyboardHandlers || ts(e) || to(domReference)) && e.key === ' ' && b.current && (b.current = !1, open && toggle ? onOpenChange(!1, e.nativeEvent, 'click') : onOpenChange(!0, e.nativeEvent, 'click'))
    },
  }), [dataRef, domReference, event, ignoreMouse, keyboardHandlers, onOpenChange, open, stickIfOpen, toggle])
  return useMemo(() => enabled
    ? {
        reference: O,
      }
    : {}, [enabled, O])
}
let tl = {
  pointerdown: 'onPointerDown',
  mousedown: 'onMouseDown',
  click: 'onClick',
}
let tu = {
  pointerdown: 'onPointerDownCapture',
  mousedown: 'onMouseDownCapture',
  click: 'onClickCapture',
}
let tc = (e) => {
  let r
  let n
  return {
    escapeKey: typeof e == 'boolean' ? e : (r = e?.escapeKey) != null && r,
    outsidePress: typeof e == 'boolean' ? e : (n = e?.outsidePress) == null || n,
  }
}
export function useDismiss(e, r) {
  void 0 === r && (r = {})
  let {
    open,
    onOpenChange,
    elements,
    dataRef,
  } = e
  let {
    enabled = !0,
    escapeKey = !0,
    outsidePress = !0,
    outsidePressEvent = 'pointerdown',
    referencePress = !1,
    referencePressEvent = 'pointerdown',
    ancestorScroll = !1,
    bubbles,
    capture,
  } = r
  let C = useFloatingTree()
  let T = Z(typeof outsidePress == 'function' ? outsidePress : () => !1)
  let I = typeof outsidePress == 'function' ? T : outsidePress
  let P = useRef(!1)
  let R = useRef(!1)
  let {
    escapeKey: _escapeKey,
    outsidePress: _outsidePress,
  } = tc(bubbles)
  let {
    escapeKey: _escapeKey2,
    outsidePress: _outsidePress2,
  } = tc(capture)
  let L = useRef(!1)
  let j = Z((e) => {
    let r
    if (!open || !enabled || !escapeKey || e.key !== 'Escape' || L.current)
      return
    let s = (r = dataRef.current.floatingContext) == null ? void 0 : r.nodeId
    let o = C ? eP(C.nodesRef.current, s) : []
    if (!_escapeKey && (e.stopPropagation(), o.length > 0)) {
      let e = !0
      if (o.forEach((r) => {
        let n
        if ((n = r.context) != null && n.open && !r.context.dataRef.current.__escapeKeyBubbles) {
          e = !1
        }
      }), !e) {
        return
      }
    }
    onOpenChange(!1, k(e) ? e.nativeEvent : e, 'escape-key')
  })
  let z = Z((e) => {
    let r
    let n = () => {
      let r
      j(e)
      A(e) || r.removeEventListener('keydown', n)
    }
    A(e) || r.addEventListener('keydown', n)
  })
  let F = Z((e) => {
    let r
    let n = P.current
    P.current = !1
    let s = R.current
    if (R.current = !1, outsidePressEvent === 'click' && s || n || typeof I == 'function' && !I(e))
      return
    let p = A(e)
    let g = `[${ew('inert')}]`
    let m = S(elements.floating).querySelectorAll(g)
    let y = vq(p) ? p : null
    for (; y && !_$$eu(y);) {
      let e = $4(y)
      if (_$$eu(e) || !vq(e))
        break
      y = e
    }
    if (m.length && vq(p) && !_(p) && !d(p, elements.floating) && Array.from(m).every(e => !d(y, e)))
      return
    if (sb(p) && V) {
      let r = p.clientWidth > 0 && p.scrollWidth > p.clientWidth
      let n = p.clientHeight > 0 && p.scrollHeight > p.clientHeight
      let i = n && e.offsetX > p.clientWidth
      if (n && L9(p).direction === 'rtl' && (i = e.offsetX <= p.offsetWidth - p.clientWidth), i || r && e.offsetY > p.clientHeight)
        return
    }
    let b = (r = dataRef.current.floatingContext) == null ? void 0 : r.nodeId
    let O = C && eP(C.nodesRef.current, b).some((r) => {
      let n
      return E(e, (n = r.context) == null ? void 0 : n.elements.floating)
    })
    if (E(e, elements.floating) || E(e, elements.domReference) || O)
      return
    let x = C ? eP(C.nodesRef.current, b) : []
    if (x.length > 0) {
      let e = !0
      if (x.forEach((r) => {
        let n
        if ((n = r.context) != null && n.open && !r.context.dataRef.current.__outsidePressBubbles) {
          e = !1
        }
      }), !e) {
        return
      }
    }
    onOpenChange(!1, e, 'outside-press')
  })
  let U = Z((e) => {
    let r
    let n = () => {
      let r
      F(e)
      A(e) || r.removeEventListener(outsidePressEvent, n)
    }
    A(e) || r.addEventListener(outsidePressEvent, n)
  })
  useEffect(() => {
    if (!open || !enabled)
      return
    dataRef.current.__escapeKeyBubbles = _escapeKey
    dataRef.current.__outsidePressBubbles = _outsidePress
    let e = -1
    function r(e) {
      onOpenChange(!1, e, 'ancestor-scroll')
    }
    function s() {
      window.clearTimeout(e)
      L.current = !0
    }
    function d() {
      e = window.setTimeout(() => {
        L.current = !1
      }, Tc() ? 5 : 0)
    }
    let m = S(elements.floating)
    escapeKey && (m.addEventListener('keydown', _escapeKey2 ? z : j, _escapeKey2), m.addEventListener('compositionstart', s), m.addEventListener('compositionend', d))
    I && m.addEventListener(outsidePressEvent, _outsidePress2 ? U : F, _outsidePress2)
    let y = []
    ancestorScroll && (vq(elements.domReference) && (y = v9(elements.domReference)), vq(elements.floating) && (y = y.concat(v9(elements.floating))), !vq(elements.reference) && elements.reference && elements.reference.contextElement && (y = y.concat(v9(elements.reference.contextElement))));
    (y = y.filter((e) => {
      let r
      return e !== ((r = m.defaultView) == null ? void 0 : r.visualViewport)
    })).forEach((e) => {
      e.addEventListener('scroll', r, {
        passive: !0,
      })
    })
    return () => {
      escapeKey && (m.removeEventListener('keydown', _escapeKey2 ? z : j, _escapeKey2), m.removeEventListener('compositionstart', s), m.removeEventListener('compositionend', d))
      I && m.removeEventListener(outsidePressEvent, _outsidePress2 ? U : F, _outsidePress2)
      y.forEach((e) => {
        e.removeEventListener('scroll', r)
      })
      window.clearTimeout(e)
    }
  }, [dataRef, elements, escapeKey, I, outsidePressEvent, open, onOpenChange, ancestorScroll, enabled, _escapeKey, _outsidePress, j, _escapeKey2, z, F, _outsidePress2, U])
  useEffect(() => {
    P.current = !1
  }, [I, outsidePressEvent])
  let Q = useMemo(() => ({
    onKeyDown: j,
    [tl[referencePressEvent]]: (e) => {
      referencePress && onOpenChange(!1, e.nativeEvent, 'reference-press')
    },
  }), [j, onOpenChange, referencePress, referencePressEvent])
  let V = useMemo(() => ({
    onKeyDown: j,
    onMouseDown() {
      R.current = !0
    },
    onMouseUp() {
      R.current = !0
    },
    [tu[outsidePressEvent]]: () => {
      P.current = !0
    },
  }), [j, outsidePressEvent])
  return useMemo(() => enabled
    ? {
        reference: Q,
        floating: V,
      }
    : {}, [enabled, Q, V])
}
function td(e) {
  let {
    open = !1,
    onOpenChange,
    elements,
  } = e
  let o = ed()
  let a = useRef({})
  let [h] = useState(() => ep())
  let d = useFloatingParentNodeId() != null
  let [p, g] = useState(elements.reference)
  let m = Z((e, r, i) => {
    a.current.openEvent = e ? r : void 0
    h.emit('openchange', {
      open: e,
      event: r,
      reason: i,
      nested: d,
    })
    onOpenChange?.(e, r, i)
  })
  let v = useMemo(() => ({
    setPositionReference: g,
  }), [])
  let y = useMemo(() => ({
    reference: p || elements.reference || null,
    floating: elements.floating || null,
    domReference: elements.reference,
  }), [p, elements.reference, elements.floating])
  return useMemo(() => ({
    dataRef: a,
    open,
    onOpenChange: m,
    elements: y,
    events: h,
    floatingId: o,
    refs: v,
  }), [open, m, y, h, o, v])
}
export function useFloating(e) {
  void 0 === e && (e = {})
  let {
    nodeId,
  } = e
  let n = td({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements,
    },
  })
  let i = e.rootContext || n
  let o = i.elements
  let [h, d] = useState(null)
  let [p, g] = useState(null)
  let m = o?.domReference || h
  let v = useRef(null)
  let y = useFloatingTree()
  et(() => {
    m && (v.current = m)
  }, [m])
  let b = useFloating({
    ...e,
    elements: {
      ...o,
      ...(p && {
        reference: p,
      }),
    },
  })
  let O = useCallback((e) => {
    let r = vq(e)
      ? {
          getBoundingClientRect: () => e.getBoundingClientRect(),
          contextElement: e,
        }
      : e
    g(r)
    b.refs.setReference(r)
  }, [b.refs])
  let x = useCallback((e) => {
    (vq(e) || e === null) && (v.current = e, d(e));
    (vq(b.refs.reference.current) || b.refs.reference.current === null || e !== null && !vq(e)) && b.refs.setReference(e)
  }, [b.refs])
  let w = useMemo(() => ({
    ...b.refs,
    setReference: x,
    setPositionReference: O,
    domReference: v,
  }), [b.refs, x, O])
  let k = useMemo(() => ({
    ...b.elements,
    domReference: m,
  }), [b.elements, m])
  let _ = useMemo(() => ({
    ...b,
    ...i,
    refs: w,
    elements: k,
    nodeId,
  }), [b, w, k, nodeId, i])
  et(() => {
    i.dataRef.current.floatingContext = _
    let e = y?.nodesRef.current.find(e => e.id === nodeId)
    e && (e.context = _)
  })
  return useMemo(() => ({
    ...b,
    context: _,
    refs: w,
    elements: k,
  }), [b, w, k, _])
}
let tp = 'active'
let tg = 'selected'
function tm(e, r, n) {
  let i = new Map()
  let s = n === 'item'
  let o = e
  if (s && e) {
    let {
      [tp]: tp,
      [tg]: tg,
      ...i
    } = e
    o = i
  }
  return {
    ...(n === 'floating' && {
      tabIndex: -1,
      [e5]: '',
    }),
    ...o,
    ...r.map((r) => {
      let i = r ? r[n] : null
      return typeof i == 'function' ? e ? i(e) : null : i
    }).concat(e).reduce((e, r) => (r && Object.entries(r).forEach((r) => {
      let [n, o] = r
      if (!(s && [tp, tg].includes(n))) {
        if (n.indexOf('on') === 0) {
          if (i.has(n) || i.set(n, []), typeof o == 'function') {
            let a
            i.get(n) || a.push(o)
            e[n] = function () {
              for (r = $$arguments.length, s = new Array(r), o = 0, void 0; o < r; o++) {
                var e
                var r
                var s
                var o
                s[o] = $$arguments[o]
              }
              return (e = i.get(n)) == null ? void 0 : e.map(e => e(...s)).find(e => void 0 !== e)
            }
          }
        }
        else {
          e[n] = o
        }
      }
    }), e), {}),
  }
}
export function useInteractions(e) {
  void 0 === e && (e = [])
  let r = e.map(e => e?.reference)
  let n = e.map(e => e?.floating)
  let i = e.map(e => e?.item)
  let o = useCallback(r => tm(r, e, 'reference'), r)
  let a = useCallback(r => tm(r, e, 'floating'), n)
  let h = useCallback(r => tm(r, e, 'item'), i)
  return useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: a,
    getItemProps: h,
  }), [o, a, h])
}
let ty = !1
function tb(e, r, n) {
  switch (e) {
    case 'vertical':
      return r
    case 'horizontal':
      return n
    default:
      return r || n
  }
}
function tO(e, r) {
  return tb(r, e === F || e === U, e === Q || e === V)
}
function tx(e, r, n) {
  return tb(r, e === U, n ? e === Q : e === V) || e === 'Enter' || e === ' ' || e === ''
}
function tw(e, r, n) {
  return tb(r, n ? e === Q : e === V, e === U)
}
function tk(e, r, n) {
  return tb(r, n ? e === V : e === Q, e === F)
}
export function useListNavigation(e, r) {
  let {
    open,
    onOpenChange,
    elements,
  } = e
  let {
    listRef,
    activeIndex,
    onNavigate = () => {},
    enabled = !0,
    selectedIndex = null,
    allowEscape = !1,
    loop = !1,
    nested = !1,
    rtl = !1,
    virtual = !1,
    focusItemOnOpen = 'auto',
    focusItemOnHover = !0,
    openOnArrowKeyDown = !0,
    disabledIndices,
    orientation = 'vertical',
    cols = 1,
    scrollItemIntoView = !0,
    virtualItemRef,
    itemSizes,
    dense = !1,
  } = r
  let B = ek(e3(elements.floating))
  let er = useFloatingParentNodeId()
  let en = useFloatingTree()
  let ei = Z(onNavigate)
  let es = P(elements.domReference)
  let eo = useRef(focusItemOnOpen)
  let ea = useRef(selectedIndex != null ? selectedIndex : -1)
  let el = useRef(null)
  let eu = useRef(!0)
  let ec = useRef(ei)
  let eh = useRef(!!elements.floating)
  let ed = useRef(open)
  let ef = useRef(!1)
  let ep = useRef(!1)
  let eg = ek(disabledIndices)
  let em = ek(open)
  let eb = ek(scrollItemIntoView)
  let eO = ek(selectedIndex)
  let [ex, ew] = useState()
  let [e_, eS] = useState()
  let eE = Z((e, r, n) => {
    function i(e) {
      virtual
        ? (ew(e.id), en?.events.emit('virtualfocus', e), virtualItemRef && (virtualItemRef.current = e))
        : eT(e, {
            preventScroll: !0,
            sync: !!(O() && y()) && (ty || ef.current),
          })
    }
    void 0 === n && (n = !1)
    let s = e.current[r.current]
    s && i(s)
    requestAnimationFrame(() => {
      let o = e.current[r.current] || s
      if (!o)
        return
      s || i(o)
      let a = eb.current
      a && eC && (n || !eu.current) && (o.scrollIntoView == null || o.scrollIntoView(typeof a == 'boolean'
        ? {
            block: 'nearest',
            inline: 'nearest',
          }
        : a))
    })
  })
  et(() => {
    document.createElement('div').focus({
      get preventScroll() {
        ty = !0
        return !1
      },
    })
  }, [])
  et(() => {
    enabled && (open && elements.floating ? eo.current && selectedIndex != null && (ep.current = !0, ea.current = selectedIndex, ei(selectedIndex)) : eh.current && (ea.current = -1, ec.current(null)))
  }, [enabled, open, elements.floating, selectedIndex, ei])
  et(() => {
    if (enabled && open && elements.floating) {
      if (activeIndex == null) {
        if (ef.current = !1, eO.current == null && (eh.current && (ea.current = -1, eE(listRef, ea)), (!ed.current || !eh.current) && eo.current && (el.current != null || !0 === eo.current && el.current == null))) {
          let e = 0
          let r = () => {
            listRef.current[0] == null ? (e < 2 && (e ? requestAnimationFrame : queueMicrotask)(r), e++) : (ea.current = el.current == null || tx(el.current, orientation, rtl) || nested ? W(listRef, eg.current) : Y(listRef, eg.current), el.current = null, ei(ea.current))
          }
          r()
        }
      }
      else {
        q(listRef, activeIndex) || (ea.current = activeIndex, eE(listRef, ea, ep.current), ep.current = !1)
      }
    }
  }, [enabled, open, elements.floating, activeIndex, eO, nested, listRef, orientation, rtl, ei, eE, eg])
  et(() => {
    let e
    if (!enabled || elements.floating || !en || virtual || !eh.current)
      return
    let r = en.nodesRef.current
    let n = r.find(e => e.id === er)?.context || e.context || e.elements.floating
    let i = h(S(elements.floating))
    let s = r.some(e => e.context && d(e.context.elements.floating, i))
    n && !s && eu.current && n.focus({
      preventScroll: !0,
    })
  }, [enabled, elements.floating, en, er, virtual])
  et(() => {
    if (enabled && en && virtual && !er) {
      en.events.on('virtualfocus', e)
      return () => {
        en.events.off('virtualfocus', e)
      }
    }
    function e(e) {
      eS(e.id)
      virtualItemRef && (virtualItemRef.current = e)
    }
  }, [enabled, en, virtual, er, virtualItemRef])
  et(() => {
    ec.current = ei
    eh.current = !!elements.floating
  })
  et(() => {
    open || (el.current = null)
  }, [open])
  et(() => {
    ed.current = open
  }, [open])
  let eA = activeIndex != null
  let eC = useMemo(() => {
    function e(e) {
      if (!open)
        return
      let r = listRef.current.indexOf(e)
      r !== -1 && ei(r)
    }
    return {
      onFocus(r) {
        let {
          currentTarget,
        } = r
        e(currentTarget)
      },
      onClick: (e) => {
        let {
          currentTarget,
        } = e
        return currentTarget.focus({
          preventScroll: !0,
        })
      },
      ...(focusItemOnHover && {
        onMouseMove(r) {
          let {
            currentTarget,
          } = r
          e(currentTarget)
        },
        onPointerLeave(e) {
          let {
            pointerType,
          } = e
          eu.current && pointerType !== 'touch' && (ea.current = -1, eE(listRef, ea), ei(null), virtual || eT(B.current, {
            preventScroll: !0,
          }))
        },
      }),
    }
  }, [open, B, eE, focusItemOnHover, listRef, ei, virtual])
  let eI = Z((e) => {
    if (eu.current = !1, ef.current = !0, e.which === 229 || !em.current && e.currentTarget === B.current)
      return
    if (nested && tk(e.key, orientation, rtl)) {
      I(e)
      onOpenChange(!1, e.nativeEvent, 'list-navigation')
      sb(elements.domReference) && (virtual ? en?.events.emit('virtualfocus', elements.domReference) : elements.domReference.focus())
      return
    }
    let r = ea.current
    let s = W(listRef, disabledIndices)
    let d = Y(listRef, disabledIndices)
    if (es || (e.key === 'Home' && (I(e), ea.current = s, ei(ea.current)), e.key === 'End' && (I(e), ea.current = d, ei(ea.current))), cols > 1) {
      let r = itemSizes || Array.from({
        length: listRef.current.length,
      }, () => ({
        width: 1,
        height: 1,
      }))
      let n = H(r, cols, dense)
      let i = n.findIndex(e => e != null && !ee(listRef.current, e, disabledIndices))
      let o = n.reduce((e, r, n) => r == null || ee(listRef.current, r, disabledIndices) ? e : n, -1)
      let a = n[X({
        current: n.map(e => e != null ? listRef.current[e] : null),
      }, {
        event: e,
        orientation,
        loop,
        rtl,
        cols,
        disabledIndices: J([...(disabledIndices || listRef.current.map((e, r) => ee(listRef.current, r) ? r : void 0)), void 0], n),
        minIndex: i,
        maxIndex: o,
        prevIndex: K(ea.current > d ? s : ea.current, r, n, cols, e.key === U ? 'bl' : e.key === (rtl ? Q : V) ? 'tr' : 'tl'),
        stopEvent: !0,
      })]
      if (a != null && (ea.current = a, ei(ea.current)), orientation === 'both')
        return
    }
    if (tO(e.key, orientation)) {
      if (I(e), open && !virtual && h(e.currentTarget.ownerDocument) === e.currentTarget) {
        ea.current = tx(e.key, orientation, rtl) ? s : d
        ei(ea.current)
        return
      }
      tx(e.key, orientation, rtl)
        ? loop
          ? ea.current = r >= d
            ? allowEscape && r !== listRef.current.length ? -1 : s
            : G(listRef, {
                startingIndex: r,
                disabledIndices,
              })
          : ea.current = Math.min(d, G(listRef, {
            startingIndex: r,
            disabledIndices,
          }))
        : loop
          ? ea.current = r <= s
            ? allowEscape && r !== -1 ? listRef.current.length : d
            : G(listRef, {
                startingIndex: r,
                decrement: !0,
                disabledIndices,
              })
          : ea.current = Math.max(s, G(listRef, {
            startingIndex: r,
            decrement: !0,
            disabledIndices,
          }))
      q(listRef, ea.current) ? ei(null) : ei(ea.current)
    }
  })
  let eP = useMemo(() => virtual && open && eA && {
    'aria-activedescendant': e_ || ex,
  }, [virtual, open, eA, e_, ex])
  let eM = useMemo(() => ({
    'aria-orientation': orientation === 'both' ? void 0 : orientation,
    ...(!P(elements.domReference) && eP),
    'onKeyDown': eI,
    onPointerMove() {
      eu.current = !0
    },
  }), [eP, eI, elements.domReference, orientation])
  let eD = useMemo(() => {
    function e(e) {
      focusItemOnOpen === 'auto' && m(e.nativeEvent) && (eo.current = !0)
    }
    function r(e) {
      eo.current = focusItemOnOpen
      focusItemOnOpen === 'auto' && v(e.nativeEvent) && (eo.current = !0)
    }
    return {
      ...eP,
      onKeyDown(e) {
        eu.current = !1
        let r = e.key.startsWith('Arrow')
        let s = ['Home', 'End'].includes(e.key)
        let o = r || s
        let a = tw(e.key, orientation, rtl)
        let h = tk(e.key, orientation, rtl)
        let d = tO(e.key, orientation)
        let g = (nested ? a : d) || e.key === 'Enter' || e.key.trim() === ''
        if (virtual && open) {
          let r = en?.nodesRef.current.find(e => e.parentId == null)
          let n = en && r ? eR(en.nodesRef.current, r.id) : null
          if (o && n && virtualItemRef) {
            let m
            let v
            let y
            let r = new KeyboardEvent('keydown', {
              key: e.key,
              bubbles: !0,
            })
            if (a || h) {
              let i = ((m = n.context) == null ? void 0 : m.elements.domReference) === e.currentTarget
              let s = h && !i ? (v = n.context) == null ? void 0 : v.elements.domReference : a ? listRef.current.find(e => e?.id === ex) : null
              s && (I(e), s.dispatchEvent(r), eS(void 0))
            }
            if ((d || s) && n.context && n.context.open && n.parentId && e.currentTarget !== n.context.elements.domReference) {
              I(e)
              n.context.elements.domReference || y.dispatchEvent(r)
              return
            }
          }
          return eI(e)
        }
        if (open || openOnArrowKeyDown || !r) {
          if (g && (el.current = nested && d ? null : e.key), nested) {
            a && (I(e), open ? (ea.current = W(listRef, eg.current), ei(ea.current)) : onOpenChange(!0, e.nativeEvent, 'list-navigation'))
            return
          }
          d && (selectedIndex != null && (ea.current = selectedIndex), I(e), !open && openOnArrowKeyDown ? onOpenChange(!0, e.nativeEvent, 'list-navigation') : eI(e), open && ei(ea.current))
        }
      },
      onFocus() {
        open && !virtual && ei(null)
      },
      onPointerDown: r,
      onMouseDown: e,
      onClick: e,
    }
  }, [ex, eP, eI, eg, focusItemOnOpen, listRef, nested, ei, onOpenChange, open, openOnArrowKeyDown, orientation, rtl, selectedIndex, en, virtual, virtualItemRef])
  return useMemo(() => enabled
    ? {
        reference: eD,
        floating: eM,
        item: eC,
      }
    : {}, [enabled, eD, eM, eC])
}
let tS = new Map([['select', 'listbox'], ['combobox', 'listbox'], ['label', !1]])
export function useRole(e, r) {
  let n
  void 0 === r && (r = {})
  let {
    open,
    floatingId,
  } = e
  let {
    enabled = !0,
    role = 'dialog',
  } = r
  let d = (n = tS.get(role)) != null ? n : role
  let p = ed()
  let g = useFloatingParentNodeId() != null
  let m = useMemo(() => d === 'tooltip' || role === 'label'
    ? {
        [`aria-${role === 'label' ? 'labelledby' : 'describedby'}`]: open ? floatingId : void 0,
      }
    : {
        'aria-expanded': open ? 'true' : 'false',
        'aria-haspopup': d === 'alertdialog' ? 'dialog' : d,
        'aria-controls': open ? floatingId : void 0,
        ...(d === 'listbox' && {
          role: 'combobox',
        }),
        ...(d === 'menu' && {
          id: p,
        }),
        ...(d === 'menu' && g && {
          role: 'menuitem',
        }),
        ...(role === 'select' && {
          'aria-autocomplete': 'none',
        }),
        ...(role === 'combobox' && {
          'aria-autocomplete': 'list',
        }),
      }, [d, floatingId, g, open, p, role])
  let v = useMemo(() => {
    let e = {
      id: floatingId,
      ...(d && {
        role: d,
      }),
    }
    return d === 'tooltip' || role === 'label'
      ? e
      : {
          ...e,
          ...(d === 'menu' && {
            'aria-labelledby': p,
          }),
        }
  }, [d, floatingId, p, role])
  let y = useCallback((e) => {
    let {
      active,
      selected,
    } = e
    let i = {
      role: 'option',
      ...(active && {
        id: `${floatingId}-option`,
      }),
    }
    switch (role) {
      case 'select':
        return {
          ...i,
          'aria-selected': active && selected,
        }
      case 'combobox':
        return {
          ...i,
          ...(active && {
            'aria-selected': !0,
          }),
        }
    }
    return {}
  }, [floatingId, role])
  return useMemo(() => enabled
    ? {
        reference: m,
        floating: v,
        item: y,
      }
    : {}, [enabled, m, v, y])
}
export function useTypeahead(e, r) {
  let n
  let {
    open,
    dataRef,
  } = e
  let {
    listRef,
    activeIndex,
    onMatch,
    onTypingChange,
    enabled = !0,
    findMatch = null,
    resetMs = 750,
    ignoreKeys = [],
    selectedIndex = null,
  } = r
  let O = useRef()
  let x = useRef('')
  let w = useRef((n = selectedIndex != null ? selectedIndex : activeIndex) != null ? n : -1)
  let k = useRef(null)
  let _ = Z(onMatch)
  let S = Z(onTypingChange)
  let E = ek(findMatch)
  let A = ek(ignoreKeys)
  et(() => {
    open && (clearTimeout(O.current), k.current = null, x.current = '')
  }, [open])
  et(() => {
    if (open && x.current === '') {
      let e
      w.current = (e = selectedIndex != null ? selectedIndex : activeIndex) != null ? e : -1
    }
  }, [open, selectedIndex, activeIndex])
  let C = Z((e) => {
    e ? dataRef.current.typing || (dataRef.current.typing = e, S(e)) : dataRef.current.typing && (dataRef.current.typing = e, S(e))
  })
  let T = Z((e) => {
    function r(e, r, n) {
      let i = E.current ? E.current(r, n) : r.find(e => e?.toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) === 0)
      return i ? e.indexOf(i) : -1
    }
    let n = listRef.current
    if (x.current.length > 0 && x.current[0] !== ' ' && (r(n, n, x.current) === -1 ? C(!1) : e.key === ' ' && I(e)), n == null || A.current.includes(e.key) || e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey)
      return
    open && e.key !== ' ' && (I(e), C(!0))
    n.every((e) => {
      let r
      let n
      return !e || ((r = e[0]) == null ? void 0 : r.toLocaleLowerCase()) !== ((n = e[1]) == null ? void 0 : n.toLocaleLowerCase())
    }) && x.current === e.key && (x.current = '', w.current = k.current)
    x.current += e.key
    clearTimeout(O.current)
    O.current = setTimeout(() => {
      x.current = ''
      w.current = k.current
      C(!1)
    }, resetMs)
    let s = w.current
    let o = r(n, [...n.slice((s || 0) + 1), ...n.slice(0, (s || 0) + 1)], x.current)
    o !== -1 ? (_(o), k.current = o) : e.key !== ' ' && (x.current = '', C(!1))
  })
  let P = useMemo(() => ({
    onKeyDown: T,
  }), [T])
  let R = useMemo(() => ({
    onKeyDown: T,
    onKeyUp(e) {
      e.key === ' ' && C(!1)
    },
  }), [T, C])
  return useMemo(() => enabled
    ? {
        reference: P,
        floating: R,
      }
    : {}, [enabled, P, R])
}
function tC(e, r) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: r,
      },
    },
  }
}
export let inner = e => ({
  name: 'inner',
  options: e,
  async fn(r) {
    let {
      listRef,
      overflowRef,
      onFallbackChange,
      offset = 0,
      index = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...g
    } = _3(e, r)
    let {
      rects,
      elements: {
        floating,
      },
    } = r
    let y = listRef.current[index]
    let b = scrollRef?.current || floating
    let O = floating.clientTop || b.clientTop
    let x = floating.clientTop !== 0
    let w = b.clientTop !== 0
    let k = floating === b
    if (!y)
      return {}
    let _ = {
      ...r,
      ...(await offset(-y.offsetTop - floating.clientTop - rects.reference.height / 2 - y.offsetHeight / 2 - offset).fn(r)),
    }
    let S = await detectOverflow(tC(_, b.scrollHeight + O + floating.clientTop), g)
    let E = await detectOverflow(_, {
      ...g,
      elementContext: 'reference',
    })
    let A = T9(0, S.top)
    let C = _.y + A
    let T = (b.scrollHeight > b.clientHeight ? e => e : LI)(T9(0, b.scrollHeight + (x && k || w ? 2 * O : 0) - A - T9(0, S.bottom)))
    if (b.style.maxHeight = `${T}px`, b.scrollTop = A, onFallbackChange) {
      let e = b.offsetHeight < y.offsetHeight * jk(minItemsVisible, listRef.current.length) - 1 || E.top >= -referenceOverflowThreshold || E.bottom >= -referenceOverflowThreshold
      flushSync(() => onFallbackChange(e))
    }
    overflowRef && (overflowRef.current = await detectOverflow(tC({
      ..._,
      y: C,
    }, b.offsetHeight + O + floating.clientTop), g))
    return {
      y: C,
    }
  },
})
export function useInnerOffset(e, r) {
  let {
    open,
    elements,
  } = e
  let {
    enabled = !0,
    overflowRef,
    scrollRef,
    onChange,
  } = r
  let p = Z(onChange)
  let m = useRef(!1)
  let v = useRef(null)
  let y = useRef(null)
  useEffect(() => {
    if (!enabled)
      return
    function e(e) {
      if (e.ctrlKey || !r || overflowRef.current == null)
        return
      let n = e.deltaY
      let i = overflowRef.current.top >= -0.5
      let s = overflowRef.current.bottom >= -0.5
      let o = r.scrollHeight - r.clientHeight
      let h = n < 0 ? -1 : 1
      let d = n < 0 ? 'max' : 'min'
      !(r.scrollHeight <= r.clientHeight) && (!i && n > 0 || !s && n < 0
        ? (e.preventDefault(), flushSync(() => {
            p(e => e + Math[d](n, o * h))
          }))
        : /firefox/i.test(g()) && (r.scrollTop += n))
    }
    let r = scrollRef?.current || elements.floating
    if (open && r) {
      r.addEventListener('wheel', e)
      requestAnimationFrame(() => {
        v.current = r.scrollTop
        overflowRef.current != null && (y.current = {
          ...overflowRef.current,
        })
      })
      return () => {
        v.current = null
        y.current = null
        r.removeEventListener('wheel', e)
      }
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, p])
  let b = useMemo(() => ({
    onKeyDown() {
      m.current = !0
    },
    onWheel() {
      m.current = !1
    },
    onPointerMove() {
      m.current = !1
    },
    onScroll() {
      let e = scrollRef?.current || elements.floating
      if (overflowRef.current && e && m.current) {
        if (v.current !== null) {
          let r = e.scrollTop - v.current;
          (overflowRef.current.bottom < -0.5 && r < -1 || overflowRef.current.top < -0.5 && r > 1) && flushSync(() => p(e => e + r))
        }
        requestAnimationFrame(() => {
          v.current = e.scrollTop
        })
      }
    },
  }), [elements.floating, p, overflowRef, scrollRef])
  return useMemo(() => enabled
    ? {
        floating: b,
      }
    : {}, [enabled, b])
}
function tP(e, r) {
  let [n, i] = e
  let s = !1
  let o = r.length
  for ((function () {
    let e = 0
    let a = o - 1
  }()); e < o; a = e++) {
    let [o, h] = r[e] || [0, 0]
    let [d, p] = r[a] || [0, 0]
    h >= i != p >= i && n <= (d - o) * (i - h) / (p - h) + o && (s = !s)
  }
  return s
}
function tR(e, r) {
  return e[0] >= r.x && e[0] <= r.x + r.width && e[1] >= r.y && e[1] <= r.y + r.height
}
export function safePolygon(e) {
  let r
  void 0 === e && (e = {})
  let {
    buffer = 0.5,
    blockPointerEvents = !1,
    requireIntent = !0,
  } = e
  let o = !1
  let h = null
  let p = null
  let g = performance.now()
  function m(e, r) {
    let n = performance.now()
    let i = n - g
    if (h === null || p === null || i === 0) {
      h = e
      p = r
      g = n
      return null
    }
    let s = e - h
    let o = r - p
    let a = Math.sqrt(s * s + o * o) / i
    h = e
    p = r
    g = n
    return a
  }
  let v = (e) => {
    let {
      x,
      y: _y,
      placement,
      elements,
      onClose,
      nodeId,
      tree,
    } = e
    return function (e) {
      function O() {
        clearTimeout(r)
        onClose()
      }
      if (clearTimeout(r), !elements.domReference || !elements.floating || placement == null || x == null || _y == null)
        return
      let {
        clientX,
        clientY,
      } = e
      let k = [clientX, clientY]
      let _ = A(e)
      let S = e.type === 'mouseleave'
      let E = d(elements.floating, _)
      let C = d(elements.domReference, _)
      let T = elements.domReference.getBoundingClientRect()
      let I = elements.floating.getBoundingClientRect()
      let P = placement.split('-')[0]
      let R = x > I.right - I.width / 2
      let M = _y > I.bottom - I.height / 2
      let D = tR(k, T)
      let N = I.width > T.width
      let $ = I.height > T.height
      let L = (N ? T : I).left
      let j = (N ? T : I).right
      let z = ($ ? T : I).top
      let Z = ($ ? T : I).bottom
      if (E && (o = !0, !S))
        return
      if (C && (o = !1), C && !S) {
        o = !0
        return
      }
      if (S && vq(e.relatedTarget) && d(elements.floating, e.relatedTarget) || tree && eP(tree.nodesRef.current, nodeId).some((e) => {
        let {
          context,
        } = e
        return context?.open
      })) {
        return
      }
      if (P === 'top' && _y >= T.bottom - 1 || P === 'bottom' && _y <= T.top + 1 || P === 'left' && x >= T.right - 1 || P === 'right' && x <= T.left + 1)
        return O()
      let F = []
      switch (P) {
        case 'top':
          F = [[L, T.top + 1], [L, I.bottom - 1], [j, I.bottom - 1], [j, T.top + 1]]
          break
        case 'bottom':
          F = [[L, I.top + 1], [L, T.bottom - 1], [j, T.bottom - 1], [j, I.top + 1]]
          break
        case 'left':
          F = [[I.right - 1, Z], [I.right - 1, z], [T.left + 1, z], [T.left + 1, Z]]
          break
        case 'right':
          F = [[T.right - 1, Z], [T.right - 1, z], [I.left + 1, z], [I.left + 1, Z]]
      }
      function U(e) {
        let [r, i] = e
        switch (P) {
          case 'top':
            return [[N ? r + buffer / 2 : R ? r + 4 * buffer : r - 4 * buffer, i + buffer + 1], [N ? r - buffer / 2 : R ? r + 4 * buffer : r - 4 * buffer, i + buffer + 1], [I.left, R ? I.bottom - buffer : N ? I.bottom - buffer : I.top], [I.right, R ? N ? I.bottom - buffer : I.top : I.bottom - buffer]]
          case 'bottom':
            return [[N ? r + buffer / 2 : R ? r + 4 * buffer : r - 4 * buffer, i - buffer], [N ? r - buffer / 2 : R ? r + 4 * buffer : r - 4 * buffer, i - buffer], [I.left, R ? I.top + buffer : N ? I.top + buffer : I.bottom], [I.right, R ? N ? I.top + buffer : I.bottom : I.top + buffer]]
          case 'left':
          {
            let e = [r + buffer + 1, $ ? i + buffer / 2 : M ? i + 4 * buffer : i - 4 * buffer]
            let s = [r + buffer + 1, $ ? i - buffer / 2 : M ? i + 4 * buffer : i - 4 * buffer]
            return [[M ? I.right - buffer : $ ? I.right - buffer : I.left, I.top], [M ? $ ? I.right - buffer : I.left : I.right - buffer, I.bottom], e, s]
          }
          case 'right':
            return [[r - buffer, $ ? i + buffer / 2 : M ? i + 4 * buffer : i - 4 * buffer], [r - buffer, $ ? i - buffer / 2 : M ? i + 4 * buffer : i - 4 * buffer], [M ? I.left + buffer : $ ? I.left + buffer : I.right, I.top], [M ? $ ? I.left + buffer : I.right : I.left + buffer, I.bottom]]
        }
      }
      if (!tP([clientX, clientY], F)) {
        if (o && !D)
          return O()
        if (!S && requireIntent) {
          let r = m(e.clientX, e.clientY)
          let n = 0.1
          if (r !== null && r < n)
            return O()
        }
        tP([clientX, clientY], U([x, _y])) ? !o && requireIntent && (r = window.setTimeout(O, 40)) : O()
      }
    }
  }
  v.__options = {
    blockPointerEvents,
  }
  return v
}
export const ie = FloatingArrow
export const s3 = FloatingFocusManager
export const ph = FloatingList
export const $c = FloatingNode
export const zR = FloatingOverlay
export const XF = FloatingPortal
export const P6 = FloatingTree
export const vW = inner
export const iB = safePolygon
export const kp = useClick
export const s9 = useDismiss
export const we = useFloating
export const fI = useFloatingNodeId
export const R1 = useFloatingParentNodeId
export const cq = useFloatingTree
export const Mk = useHover
export const Zx = useInnerOffset
export const bv = useInteractions
export const rm = useListItem
export const C1 = useListNavigation
export const SV = useMergeRefs
export const It = useRole
export const lY = useTypeahead
