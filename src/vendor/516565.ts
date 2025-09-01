import s, { useMemo, useRef, useCallback, useLayoutEffect, useEffect, createContext, useState, createElement, useContext, forwardRef, Fragment } from "react";
import a, { Ng, sb, L9, vq, mq, eu as _$$eu, $4, Tc, v9 } from "../vendor/535641";
import { RI, _3, T9, LI, jk } from "../vendor/759447";
import { Kr, AO } from "../vendor/111975";
import { createPortal, flushSync } from "../vendor/944059";
import { we as _$$we, cY } from "../vendor/343575";
import { __ } from "../vendor/542280";
let i;
var o = require.t(s, 2);
function h(e) {
  let r = e.activeElement;
  for (; (r?.shadowRoot || n.shadowRoot || n.activeElement) != null;) {
    var n;
    r = r.shadowRoot.activeElement;
  }
  return r;
}
function d(e, r) {
  if (!e || !r) return !1;
  let n = r.getRootNode?.();
  if (e.contains(r)) return !0;
  if (n && Ng(n)) {
    let n = r;
    for (; n;) {
      if (e === n) return !0;
      n = n.parentNode || n.host;
    }
  }
  return !1;
}
function p() {
  let e = navigator.userAgentData;
  return null != e && e.platform ? e.platform : navigator.platform;
}
function g() {
  let e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map(e => {
    let {
      brand,
      version
    } = e;
    return brand + "/" + version;
  }).join(" ") : navigator.userAgent;
}
function m(e) {
  return 0 === e.mozInputSource && !!e.isTrusted || (b() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
}
function v(e) {
  return !x() && (!b() && 0 === e.width && 0 === e.height || b() && 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType || e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail && "touch" === e.pointerType);
}
function y() {
  return /apple/i.test(navigator.vendor);
}
function b() {
  let e = /android/i;
  return e.test(p()) || e.test(g());
}
function O() {
  return p().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function x() {
  return g().includes("jsdom/");
}
function w(e, r) {
  let n = ["mouse", "pen"];
  r || n.push("", void 0);
  return n.includes(e);
}
function k(e) {
  return "nativeEvent" in e;
}
function _(e) {
  return e.matches("html,body");
}
function S(e) {
  return e?.ownerDocument || document;
}
function E(e, r) {
  if (null == r) return !1;
  if ("composedPath" in e) return e.composedPath().includes(r);
  let n = e;
  return null != n.target && r.contains(n.target);
}
function A(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
let C = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function T(e) {
  return sb(e) && e.matches(C);
}
function I(e) {
  e.preventDefault();
  e.stopPropagation();
}
function P(e) {
  return !!e && "combobox" === e.getAttribute("role") && T(e);
}
export function $$L20(e) {
  return useMemo(() => e.every(e => null == e) ? null : r => {
    e.forEach(e => {
      "function" == typeof e ? e(r) : null != e && (e.current = r);
    });
  }, e);
}
let j = {
  ...o
};
let z = j.useInsertionEffect || (e => e());
function Z(e) {
  let r = useRef(() => {});
  z(() => {
    r.current = e;
  });
  return useCallback(function () {
    for (e = $$arguments.length, n = Array(e), i = 0, void 0; i < e; i++) {
      var e;
      var n;
      var i;
      n[i] = $$arguments[i];
    }
    return r.current?.(...n);
  }, []);
}
let F = "ArrowUp";
let U = "ArrowDown";
let Q = "ArrowLeft";
let V = "ArrowRight";
function B(e, r, n) {
  return Math.floor(e / r) !== n;
}
function q(e, r) {
  return r < 0 || r >= e.current.length;
}
function W(e, r) {
  return G(e, {
    disabledIndices: r
  });
}
function Y(e, r) {
  return G(e, {
    decrement: !0,
    startingIndex: e.current.length,
    disabledIndices: r
  });
}
function G(e, r) {
  let {
    startingIndex = -1,
    decrement = !1,
    disabledIndices,
    amount = 1
  } = void 0 === r ? {} : r;
  let a = e.current;
  let h = n;
  do h += decrement ? -amount : amount; while (h >= 0 && h <= a.length - 1 && ee(a, h, disabledIndices));
  return h;
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
    stopEvent = !1
  } = r;
  let v = g;
  if (event.key === F) {
    if (stopEvent && I(event), -1 === prevIndex) v = maxIndex;else if (v = G(e, {
      startingIndex: v,
      amount: cols,
      decrement: !0,
      disabledIndices
    }), loop && (prevIndex - cols < minIndex || v < 0)) {
      let e = prevIndex % cols;
      let r = maxIndex % cols;
      let n = maxIndex - (r - e);
      v = r === e ? maxIndex : r > e ? n : n - cols;
    }
    q(e, v) && (v = prevIndex);
  }
  if (event.key === U && (stopEvent && I(event), -1 === prevIndex ? v = minIndex : (v = G(e, {
    startingIndex: prevIndex,
    amount: cols,
    disabledIndices
  }), loop && prevIndex + cols > maxIndex && (v = G(e, {
    startingIndex: prevIndex % cols - cols,
    amount: cols,
    disabledIndices
  }))), q(e, v) && (v = prevIndex)), "both" === orientation) {
    let r = RI(prevIndex / cols);
    event.key === (rtl ? Q : V) && (stopEvent && I(event), prevIndex % cols != cols - 1 ? (v = G(e, {
      startingIndex: prevIndex,
      disabledIndices
    }), loop && B(v, cols, r) && (v = G(e, {
      startingIndex: prevIndex - prevIndex % cols - 1,
      disabledIndices
    }))) : loop && (v = G(e, {
      startingIndex: prevIndex - prevIndex % cols - 1,
      disabledIndices
    })), B(v, cols, r) && (v = prevIndex));
    event.key === (rtl ? V : Q) && (stopEvent && I(event), prevIndex % cols != 0 ? (v = G(e, {
      startingIndex: prevIndex,
      decrement: !0,
      disabledIndices
    }), loop && B(v, cols, r) && (v = G(e, {
      startingIndex: prevIndex + (cols - prevIndex % cols),
      decrement: !0,
      disabledIndices
    }))) : loop && (v = G(e, {
      startingIndex: prevIndex + (cols - prevIndex % cols),
      decrement: !0,
      disabledIndices
    })), B(v, cols, r) && (v = prevIndex));
    let i = RI(maxIndex / cols) === r;
    q(e, v) && (v = loop && i ? event.key === (rtl ? V : Q) ? maxIndex : G(e, {
      startingIndex: prevIndex - prevIndex % cols - 1,
      disabledIndices
    }) : prevIndex);
  }
  return v;
}
function H(e, r, n) {
  let i = [];
  let s = 0;
  e.forEach((e, o) => {
    let {
      width,
      height
    } = e;
    let d = !1;
    for (n && (s = 0); !d;) {
      let e = [];
      for (let n = 0; n < width; n++) for (let i = 0; i < height; i++) e.push(s + n + i * r);
      s % r + width <= r && e.every(e => null == i[e]) ? (e.forEach(e => {
        i[e] = o;
      }), d = !0) : s++;
    }
  });
  return [...i];
}
function K(e, r, n, i, s) {
  if (-1 === e) return -1;
  let o = n.indexOf(e);
  let a = r[e];
  switch (s) {
    case "tl":
      return o;
    case "tr":
      if (!a) return o;
      return o + a.width - 1;
    case "bl":
      if (!a) return o;
      return o + (a.height - 1) * i;
    case "br":
      return n.lastIndexOf(e);
  }
}
function J(e, r) {
  return r.flatMap((r, n) => e.includes(r) ? [n] : []);
}
function ee(e, r, n) {
  if (n) return n.includes(r);
  let i = e[r];
  return i?.hasAttribute("disabled") || "true" === i.getAttribute("aria-disabled");
}
var et = "undefined" != typeof document ? useLayoutEffect : useEffect;
function er(e, r) {
  let n = e.compareDocumentPosition(r);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function en(e, r) {
  if (e.size !== r.size) return !1;
  for (let [n, i] of e.entries()) if (i !== r.get(n)) return !1;
  return !0;
}
let ei = createContext({
  register: () => {},
  unregister: () => {},
  map: new Map(),
  elementsRef: {
    current: []
  }
});
export function $$es2(e) {
  let {
    children,
    elementsRef,
    labelsRef
  } = e;
  let [o, a] = useState(() => new Map());
  let h = useCallback(e => {
    a(r => new Map(r).set(e, null));
  }, []);
  let d = useCallback(e => {
    a(r => {
      let n = new Map(r);
      n.$$delete(e);
      return n;
    });
  }, []);
  et(() => {
    let e = new Map(o);
    Array.from(e.keys()).sort(er).forEach((r, n) => {
      e.set(r, n);
    });
    en(o, e) || a(e);
  }, [o]);
  return createElement(ei.Provider, {
    value: useMemo(() => ({
      register: h,
      unregister: d,
      map: o,
      elementsRef,
      labelsRef
    }), [h, d, o, elementsRef, labelsRef])
  }, children);
}
export function $$eo18(e) {
  void 0 === e && (e = {});
  let {
    label
  } = e;
  let {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = useContext(ei);
  let [d, p] = useState(null);
  let g = useRef(null);
  let m = useCallback(e => {
    if (g.current = e, null !== d && (elementsRef.current[d] = e, labelsRef)) {
      var n;
      let i = void 0 !== label;
      labelsRef.current[d] = i ? label : null != (n = e?.textContent) ? n : null;
    }
  }, [d, elementsRef, labelsRef, label]);
  et(() => {
    let e = g.current;
    if (e) {
      register(e);
      return () => {
        unregister(e);
      };
    }
  }, [register, unregister]);
  et(() => {
    let e = g.current ? map.get(g.current) : null;
    null != e && p(e);
  }, [map]);
  return useMemo(() => ({
    ref: m,
    index: d
  }), [d, m]);
}
function ea() {
  return (ea = Object.assign ? Object.assign.bind() : function (e) {
    for (var r = 1; r < $$arguments.length; r++) {
      var n = $$arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }).apply(this, arguments);
}
let el = !1;
let eu = 0;
let ec = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + eu++;
function eh() {
  let [e, r] = useState(() => el ? ec() : void 0);
  et(() => {
    null == e && r(ec());
  }, []);
  useEffect(() => {
    el = !0;
  }, []);
  return e;
}
let ed = j.useId || eh;
let $$ef0 = forwardRef(function (e, r) {
  let {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow,
        shift
      }
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
  } = e;
  let k = ed();
  let [_, S] = useState(!1);
  if (et(() => {
    floating && "rtl" === L9(floating).direction && S(!0);
  }, [floating]), !floating) return null;
  let [E, A] = placement.split("-");
  let C = "top" === E || "bottom" === E;
  let T = v;
  (C && null != shift && shift.x || !C && null != shift && shift.y) && (T = null);
  let I = 2 * strokeWidth;
  let P = I / 2;
  let R = width / 2 * (-(tipRadius / 8) + 1);
  let M = height / 2 * tipRadius / 4;
  let D = !!_d;
  let N = T && "end" === A ? "bottom" : "top";
  let $ = T && "end" === A ? "right" : "left";
  T && _ && ($ = "end" === A ? "left" : "right");
  let L = arrow?.x != null ? T || arrow.x : "";
  let j = arrow?.y != null ? T || arrow.y : "";
  let z = _d || "M0,0 H" + width + " L" + (width - R) + "," + (height - M) + (" Q" + width / 2 + "," + height + " ") + R + "," + (height - M) + " Z";
  let Z = {
    top: D ? "rotate(180deg)" : "",
    left: D ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: D ? "" : "rotate(180deg)",
    right: D ? "rotate(-90deg)" : "rotate(90deg)"
  }[E];
  return createElement("svg", ea({}, w, {
    "aria-hidden": !0,
    ref: r,
    width: D ? width : width + I,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [$]: L,
      [N]: j,
      [E]: C || D ? "100%" : "calc(100% - " + I / 2 + "px)",
      transform: [Z, O].filter(e => !!e).join(" "),
      ...x
    }
  }), I > 0 && createElement("path", {
    clipPath: "url(#" + k + ")",
    fill: "none",
    stroke,
    strokeWidth: I + (_d ? 0 : 1),
    d: z
  }), createElement("path", {
    stroke: I && !_d ? w.fill : "none",
    d: z
  }), createElement("clipPath", {
    id: k
  }, createElement("rect", {
    x: -P,
    y: P * (D ? -1 : 1),
    width: width + I,
    height: width
  })));
});
function ep() {
  let e = new Map();
  return {
    emit(r, n) {
      var i;
      e.get(r) || i.forEach(e => e(n));
    },
    on(r, n) {
      e.set(r, [...(e.get(r) || []), n]);
    },
    off(r, n) {
      var i;
      e.set(r, (null == (i = e.get(r)) ? void 0 : i.filter(e => e !== n)) || []);
    }
  };
}
let eg = createContext(null);
let em = createContext(null);
let $$ev13 = () => {
  var e;
  return (null == (e = useContext(eg)) ? void 0 : e.id) || null;
};
let $$ey14 = () => useContext(em);
export function $$eb12(e) {
  let r = ed();
  let n = $$ey14();
  let i = $$ev13();
  let s = e || i;
  et(() => {
    let e = {
      id: r,
      parentId: s
    };
    n?.addNode(e);
    return () => {
      n?.removeNode(e);
    };
  }, [n, r, s]);
  return r;
}
export function $$eO3(e) {
  let {
    children,
    id
  } = e;
  let i = $$ev13();
  return createElement(eg.Provider, {
    value: useMemo(() => ({
      id,
      parentId: i
    }), [id, i])
  }, children);
}
export function $$ex6(e) {
  let {
    children
  } = e;
  let n = useRef([]);
  let i = useCallback(e => {
    n.current = [...n.current, e];
  }, []);
  let o = useCallback(e => {
    n.current = n.current.filter(r => r !== e);
  }, []);
  let a = useState(() => ep())[0];
  return createElement(em.Provider, {
    value: useMemo(() => ({
      nodesRef: n,
      addNode: i,
      removeNode: o,
      events: a
    }), [i, o, a])
  }, children);
}
function ew(e) {
  return "data-floating-ui-" + e;
}
function ek(e) {
  let r = useRef(e);
  et(() => {
    r.current = e;
  });
  return r;
}
let e_ = ew("safe-polygon");
function eS(e, r, n) {
  return n && !w(n) ? 0 : "number" == typeof e ? e : e?.[r];
}
export function $$eE15(e, r) {
  void 0 === r && (r = {});
  let {
    open,
    onOpenChange,
    dataRef,
    events,
    elements
  } = e;
  let {
    enabled = !0,
    delay = 0,
    handleClose = null,
    mouseOnly = !1,
    restMs = 0,
    move = !0
  } = r;
  let x = $$ey14();
  let k = $$ev13();
  let _ = ek(handleClose);
  let E = ek(delay);
  let A = ek(open);
  let C = useRef();
  let T = useRef(-1);
  let I = useRef();
  let P = useRef(-1);
  let R = useRef(!0);
  let M = useRef(!1);
  let D = useRef(() => {});
  let N = useRef(!1);
  let $ = useCallback(() => {
    var e;
    let r = null == (e = dataRef.current.openEvent) ? void 0 : e.type;
    return r?.includes("mouse") && "mousedown" !== r;
  }, [dataRef]);
  useEffect(() => {
    if (enabled) {
      events.on("openchange", e);
      return () => {
        events.off("openchange", e);
      };
    }
    function e(e) {
      let {
        open
      } = e;
      open || (clearTimeout(T.current), clearTimeout(P.current), R.current = !0, N.current = !1);
    }
  }, [enabled, events]);
  useEffect(() => {
    if (!enabled || !_.current || !open) return;
    function e(e) {
      $() && onOpenChange(!1, e, "hover");
    }
    let r = S(elements.floating).documentElement;
    r.addEventListener("mouseleave", e);
    return () => {
      r.removeEventListener("mouseleave", e);
    };
  }, [elements.floating, open, onOpenChange, enabled, _, $]);
  let L = useCallback(function (e, r, n) {
    void 0 === r && (r = !0);
    void 0 === n && (n = "hover");
    let s = eS(E.current, "close", C.current);
    s && !I.current ? (clearTimeout(T.current), T.current = window.setTimeout(() => onOpenChange(!1, e, n), s)) : r && (clearTimeout(T.current), onOpenChange(!1, e, n));
  }, [E, onOpenChange]);
  let j = Z(() => {
    D.current();
    I.current = void 0;
  });
  let z = Z(() => {
    if (M.current) {
      let e = S(elements.floating).body;
      e.style.pointerEvents = "";
      e.removeAttribute(e_);
      M.current = !1;
    }
  });
  let F = Z(() => !!dataRef.current.openEvent && ["click", "mousedown"].includes(dataRef.current.openEvent.type));
  useEffect(() => {
    if (enabled && vq(elements.domReference)) {
      var e;
      let i = elements.domReference;
      open && i.addEventListener("mouseleave", h);
      elements.floating || e.addEventListener("mouseleave", h);
      move && i.addEventListener("mousemove", r, {
        once: !0
      });
      i.addEventListener("mouseenter", r);
      i.addEventListener("mouseleave", s);
      return () => {
        var e;
        open && i.removeEventListener("mouseleave", h);
        elements.floating || e.removeEventListener("mouseleave", h);
        move && i.removeEventListener("mousemove", r);
        i.removeEventListener("mouseenter", r);
        i.removeEventListener("mouseleave", s);
      };
    }
    function r(e) {
      if (clearTimeout(T.current), R.current = !1, mouseOnly && !w(C.current) || restMs > 0 && !eS(E.current, "open")) return;
      let r = eS(E.current, "open", C.current);
      r ? T.current = window.setTimeout(() => {
        A.current || onOpenChange(!0, e, "hover");
      }, r) : open || onOpenChange(!0, e, "hover");
    }
    function s(e) {
      if (F()) return;
      D.current();
      let r = S(elements.floating);
      if (clearTimeout(P.current), N.current = !1, _.current && dataRef.current.floatingContext) {
        open || clearTimeout(T.current);
        I.current = _.current({
          ...dataRef.current.floatingContext,
          tree: x,
          x: e.clientX,
          y: e.clientY,
          onClose() {
            z();
            j();
            F() || L(e, !0, "safe-polygon");
          }
        });
        let i = I.current;
        r.addEventListener("mousemove", i);
        D.current = () => {
          r.removeEventListener("mousemove", i);
        };
        return;
      }
      "touch" === C.current && d(elements.floating, e.relatedTarget) || L(e);
    }
    function h(e) {
      !F() && dataRef.current.floatingContext && (null == _.current || _.current({
        ...dataRef.current.floatingContext,
        tree: x,
        x: e.clientX,
        y: e.clientY,
        onClose() {
          z();
          j();
          F() || L(e);
        }
      })(e));
    }
  }, [elements, enabled, e, mouseOnly, restMs, move, L, j, z, onOpenChange, open, A, x, E, _, dataRef, F]);
  et(() => {
    var e;
    var r;
    if (enabled && open && null != (e = _.current) && e.__options.blockPointerEvents && $()) {
      M.current = !0;
      let e = elements.floating;
      if (vq(elements.domReference) && e) {
        let n = S(elements.floating).body;
        n.setAttribute(e_, "");
        let i = elements.domReference;
        let s = x?.nodesRef.current.find(e => e.id === k)?.context || x.nodesRef.current.find(e => e.id === k)?.context || r.context || r.elements.floating;
        s && (s.style.pointerEvents = "");
        n.style.pointerEvents = "none";
        i.style.pointerEvents = "auto";
        e.style.pointerEvents = "auto";
        return () => {
          n.style.pointerEvents = "";
          i.style.pointerEvents = "";
          e.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open, k, elements, x, _, $]);
  et(() => {
    open || (C.current = void 0, N.current = !1, j(), z());
  }, [open, j, z]);
  useEffect(() => () => {
    j();
    clearTimeout(T.current);
    clearTimeout(P.current);
    z();
  }, [enabled, elements.domReference, j, z]);
  let U = useMemo(() => {
    function e(e) {
      C.current = e.pointerType;
    }
    return {
      onPointerDown: e,
      onPointerEnter: e,
      onMouseMove(e) {
        let {
          nativeEvent
        } = e;
        function s() {
          R.current || A.current || onOpenChange(!0, nativeEvent, "hover");
        }
        !(!mouseOnly || w(C.current)) || open || 0 === restMs || N.current && e.movementX ** 2 + e.movementY ** 2 < 2 || (clearTimeout(P.current), "touch" === C.current ? s() : (N.current = !0, P.current = window.setTimeout(s, restMs)));
      }
    };
  }, [mouseOnly, onOpenChange, open, A, restMs]);
  let Q = useMemo(() => ({
    onMouseEnter() {
      clearTimeout(T.current);
    },
    onMouseLeave(e) {
      F() || L(e.nativeEvent, !1);
    }
  }), [L, F]);
  return useMemo(() => enabled ? {
    reference: U,
    floating: Q
  } : {}, [enabled, U, Q]);
}
let eA = () => {};
let eC = 0;
function eT(e, r) {
  void 0 === r && (r = {});
  let {
    preventScroll = !1,
    cancelPrevious = !0,
    sync = !1
  } = r;
  cancelPrevious && cancelAnimationFrame(eC);
  let o = () => e?.focus({
    preventScroll
  });
  sync ? o() : eC = requestAnimationFrame(o);
}
function eI(e, r) {
  var n;
  let i = [];
  let s = null == (n = e.find(e => e.id === r)) ? void 0 : n.parentId;
  for (; s;) {
    let r = e.find(e => e.id === s);
    s = r?.parentId;
    r && (i = i.concat(r));
  }
  return i;
}
function eP(e, r) {
  let n = e.filter(e => {
    var n;
    return e.parentId === r && (null == (n = e.context) ? void 0 : n.open);
  });
  let i = n;
  for (; i.length;) {
    i = e.filter(e => {
      var r;
      return null == (r = i) ? void 0 : r.some(r => {
        var n;
        return e.parentId === r.id && (null == (n = e.context) ? void 0 : n.open);
      });
    });
    n = n.concat(i);
  }
  return n;
}
function eR(e, r) {
  let n;
  let i = -1;
  function s(r, o) {
    o > i && (n = r, i = o);
    eP(e, r).forEach(e => {
      s(e.id, o + 1);
    });
  }
  s(r, 0);
  return e.find(e => e.id === n);
}
let eM = new WeakMap();
let eD = new WeakSet();
let eN = {};
let e$ = 0;
let eL = () => "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype;
let ej = e => e && (e.host || ej(e.parentNode));
let ez = (e, r) => r.map(r => {
  if (e.contains(r)) return r;
  let n = ej(r);
  return e.contains(n) ? n : null;
}).filter(e => null != e);
function eZ(e, r, n, i) {
  let s = "data-floating-ui-inert";
  let o = i ? "inert" : n ? "aria-hidden" : null;
  let h = ez(r, e);
  let d = new Set();
  let p = new Set(h);
  let g = [];
  eN[s] || (eN[s] = new WeakMap());
  let m = eN[s];
  function v(e) {
    !(!e || d.has(e)) && (d.add(e), e.parentNode && v(e.parentNode));
  }
  function y(e) {
    !e || p.has(e) || [].forEach.call(e.children, e => {
      if ("script" !== mq(e)) {
        if (d.has(e)) y(e);else {
          let r = o ? e.getAttribute(o) : null;
          let n = null !== r && "false" !== r;
          let i = (eM.get(e) || 0) + 1;
          let a = (m.get(e) || 0) + 1;
          eM.set(e, i);
          m.set(e, a);
          g.push(e);
          1 === i && n && eD.add(e);
          1 === a && e.setAttribute(s, "");
          !n && o && e.setAttribute(o, "true");
        }
      }
    });
  }
  h.forEach(v);
  y(r);
  d.clear();
  e$++;
  return () => {
    g.forEach(e => {
      let r = (eM.get(e) || 0) - 1;
      let n = (m.get(e) || 0) - 1;
      eM.set(e, r);
      m.set(e, n);
      r || (!eD.has(e) && o && e.removeAttribute(o), eD.$$delete(e));
      n || e.removeAttribute(s);
    });
    --e$ || (eM = new WeakMap(), eM = new WeakMap(), eD = new WeakSet(), eN = {});
  };
}
function eF(e, r, n) {
  void 0 === r && (r = !1);
  void 0 === n && (n = !1);
  let i = S(e[0]).body;
  return eZ(e.concat(Array.from(i.querySelectorAll("[aria-live]"))), i, r, n);
}
let eU = () => ({
  getShadowRoot: !0,
  displayCheck: "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});
function eQ(e, r) {
  let n = Kr(e, eU());
  "prev" === r && n.reverse();
  let i = n.indexOf(h(S(e)));
  return n.slice(i + 1)[0];
}
function eV() {
  return eQ(document.body, "next");
}
function eB() {
  return eQ(document.body, "prev");
}
function eq(e, r) {
  let n = r || e.currentTarget;
  let i = e.relatedTarget;
  return !i || !d(n, i);
}
function eW(e) {
  Kr(e, eU()).forEach(e => {
    e.dataset.tabindex = e.getAttribute("tabindex") || "";
    e.setAttribute("tabindex", "-1");
  });
}
function eY(e) {
  e.querySelectorAll("[data-tabindex]").forEach(e => {
    let r = e.dataset.tabindex;
    delete e.dataset.tabindex;
    r ? e.setAttribute("tabindex", r) : e.removeAttribute("tabindex");
  });
}
let eG = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
function eX(e) {
  "Tab" === e.key && (e.target, clearTimeout(i));
}
let eH = forwardRef(function (e, r) {
  let [n, i] = useState();
  et(() => (y() && i("button"), document.addEventListener("keydown", eX), () => {
    document.removeEventListener("keydown", eX);
  }), []);
  let o = {
    ref: r,
    tabIndex: 0,
    role: n,
    "aria-hidden": !n || void 0,
    [ew("focus-guard")]: "",
    style: eG
  };
  return createElement("span", ea({}, e, o));
});
let eK = createContext(null);
let eJ = ew("portal");
function e0(e) {
  void 0 === e && (e = {});
  let {
    id,
    root
  } = e;
  let i = ed();
  let o = e2();
  let [h, d] = useState(null);
  let p = useRef(null);
  et(() => () => {
    h?.remove();
    queueMicrotask(() => {
      p.current = null;
    });
  }, [h]);
  et(() => {
    if (!i || p.current) return;
    let e = id ? document.getElementById(id) : null;
    if (!e) return;
    let n = document.createElement("div");
    n.id = i;
    n.setAttribute(eJ, "");
    e.appendChild(n);
    p.current = n;
    d(n);
  }, [id, i]);
  et(() => {
    if (null === root || !i || p.current) return;
    let e = root || o?.portalNode;
    e && !vq(e) && (e = e.current);
    e = e || document.body;
    let s = null;
    id && ((s = document.createElement("div")).id = id, e.appendChild(s));
    let h = document.createElement("div");
    h.id = i;
    h.setAttribute(eJ, "");
    (e = s || e).appendChild(h);
    p.current = h;
    d(h);
  }, [id, root, i, o]);
  return h;
}
export function $$e15(e) {
  let {
    children,
    id,
    root,
    preserveTabOrder = !0
  } = e;
  let a = e0({
    id,
    root
  });
  let [h, d] = useState(null);
  let p = useRef(null);
  let g = useRef(null);
  let m = useRef(null);
  let v = useRef(null);
  let y = h?.modal;
  let b = h?.open;
  let O = !!h && !h.modal && h.open && preserveTabOrder && !!(root || a);
  useEffect(() => {
    if (a && preserveTabOrder && !y) {
      a.addEventListener("focusin", e, !0);
      a.addEventListener("focusout", e, !0);
      return () => {
        a.removeEventListener("focusin", e, !0);
        a.removeEventListener("focusout", e, !0);
      };
    }
    function e(e) {
      a && eq(e) && ("focusin" === e.type ? eY : eW)(a);
    }
  }, [a, preserveTabOrder, y]);
  useEffect(() => {
    a && (b || eY(a));
  }, [b, a]);
  return createElement(eK.Provider, {
    value: useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef: p,
      afterOutsideRef: g,
      beforeInsideRef: m,
      afterInsideRef: v,
      portalNode: a,
      setFocusManagerState: d
    }), [preserveTabOrder, a])
  }, O && a && createElement(eH, {
    "data-type": "outside",
    ref: p,
    onFocus: e => {
      if (eq(e, a)) {
        var r;
        m.current || r.focus();
      } else {
        let e = eB() || h?.refs.domReference.current;
        e?.focus();
      }
    }
  }), O && a && createElement("span", {
    "aria-owns": a.id,
    style: eG
  }), a && createPortal(children, a), O && a && createElement(eH, {
    "data-type": "outside",
    ref: g,
    onFocus: e => {
      if (eq(e, a)) {
        var r;
        v.current || r.focus();
      } else {
        let r = eV() || h?.refs.domReference.current;
        r?.focus();
        h?.closeOnFocusOut && h?.onOpenChange(!1, e.nativeEvent, "focus-out");
      }
    }
  }));
}
let e2 = () => useContext(eK);
let e5 = "data-floating-ui-focusable";
function e3(e) {
  return e ? e.hasAttribute(e5) ? e : e.querySelector("[" + e5 + "]") || e : null;
}
let e6 = 20;
let e4 = [];
function e8(e) {
  e4 = e4.filter(e => e.isConnected);
  let r = e;
  if (r && "body" !== mq(r)) {
    if (!AO(r, eU())) {
      let e = Kr(r, eU())[0];
      e && (r = e);
    }
    e4.push(r);
    e4.length > e6 && (e4 = e4.slice(-e6));
  }
}
function e7() {
  return e4.slice().reverse().find(e => e.isConnected);
}
let e9 = forwardRef(function (e, r) {
  return createElement("button", ea({}, e, {
    type: "button",
    ref: r,
    tabIndex: -1,
    style: eG
  }));
});
export function $$te1(e) {
  let {
    context,
    children,
    disabled = !1,
    order = ["content"],
    guards = !0,
    initialFocus = 0,
    returnFocus = !0,
    restoreFocus = !1,
    modal = !0,
    visuallyHiddenDismiss = !1,
    closeOnFocusOut = !0
  } = e;
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
      floating
    }
  } = r;
  let L = "number" == typeof initialFocus && initialFocus < 0;
  let j = P(domReference) && L;
  let z = !eL() || guards;
  let F = ek(order);
  let U = ek(initialFocus);
  let Q = ek(returnFocus);
  let V = $$ey14();
  let B = e2();
  let q = useRef(null);
  let W = useRef(null);
  let Y = useRef(!1);
  let G = useRef(!1);
  let X = useRef(-1);
  let H = null != B;
  let K = e3(floating);
  let J = Z(function (e) {
    void 0 === e && (e = K);
    return e ? Kr(e, eU()) : [];
  });
  let ee = Z(e => {
    let r = J(e);
    return F.current.map(e => domReference && "reference" === e ? domReference : K && "floating" === e ? K : r).filter(Boolean).flat();
  });
  function er(e) {
    return !disabled && visuallyHiddenDismiss && modal ? createElement(e9, {
      ref: "start" === e ? q : W,
      onClick: e => onOpenChange(!1, e.nativeEvent)
    }, "string" == typeof visuallyHiddenDismiss ? visuallyHiddenDismiss : "Dismiss") : null;
  }
  useEffect(() => {
    if (disabled || !modal) return;
    function e(e) {
      if ("Tab" === e.key) {
        d(K, h(S(K))) && 0 === J().length && !j && I(e);
        let r = ee();
        let n = A(e);
        "reference" === F.current[0] && n === domReference && (I(e), e.shiftKey ? eT(r[r.length - 1]) : eT(r[1]));
        "floating" === F.current[1] && n === K && e.shiftKey && (I(e), eT(r[0]));
      }
    }
    let r = S(K);
    r.addEventListener("keydown", e);
    return () => {
      r.removeEventListener("keydown", e);
    };
  }, [disabled, domReference, K, modal, F, j, J, ee]);
  useEffect(() => {
    if (!disabled && floating) {
      floating.addEventListener("focusin", e);
      return () => {
        floating.removeEventListener("focusin", e);
      };
    }
    function e(e) {
      let r = A(e);
      let n = J().indexOf(r);
      -1 !== n && (X.current = n);
    }
  }, [disabled, floating, J]);
  useEffect(() => {
    if (!disabled && closeOnFocusOut && floating && sb(domReference)) {
      domReference.addEventListener("focusout", r);
      domReference.addEventListener("pointerdown", e);
      floating.addEventListener("focusout", r);
      return () => {
        domReference.removeEventListener("focusout", r);
        domReference.removeEventListener("pointerdown", e);
        floating.removeEventListener("focusout", r);
      };
    }
    function e() {
      G.current = !0;
      setTimeout(() => {
        G.current = !1;
      });
    }
    function r(e) {
      let r = e.relatedTarget;
      queueMicrotask(() => {
        let n = !(d(domReference, r) || d(floating, r) || d(r, floating) || d(B?.portalNode, r) || null != r && r.hasAttribute(ew("focus-guard")) || V && (eP(V.nodesRef.current, nodeId).find(e => {
          var n;
          var i;
          return d(null == (n = e.context) ? void 0 : n.elements.floating, r) || d(null == (i = e.context) ? void 0 : i.elements.domReference, r);
        }) || eI(V.nodesRef.current, nodeId).find(e => {
          var n;
          var i;
          return (null == (n = e.context) ? void 0 : n.elements.floating) === r || (null == (i = e.context) ? void 0 : i.elements.domReference) === r;
        })));
        if (restoreFocus && n && h(S(K)) === S(K).body) {
          sb(K) && K.focus();
          let e = X.current;
          let r = J();
          let n = r[e] || r[r.length - 1] || K;
          sb(n) && n.focus();
        }
        (j || !modal) && r && n && !G.current && r !== e7() && (Y.current = !0, onOpenChange(!1, e, "focus-out"));
      });
    }
  }, [disabled, domReference, floating, K, modal, nodeId, V, B, onOpenChange, closeOnFocusOut, restoreFocus, J, j]);
  useEffect(() => {
    var e;
    if (disabled) return;
    let r = Array.from(B?.portalNode || B.portalNode || e.querySelectorAll("[" + ew("portal") + "]") || []);
    if (floating) {
      let e = [floating, ...r, q.current, W.current, F.current.includes("reference") || j ? domReference : null].filter(e => null != e);
      let n = modal || j ? eF(e, z, !z) : eF(e);
      return () => {
        n();
      };
    }
  }, [disabled, domReference, floating, modal, F, B, j, z]);
  et(() => {
    if (disabled || !sb(K)) return;
    let e = h(S(K));
    queueMicrotask(() => {
      let r = ee(K);
      let n = U.current;
      let i = ("number" == typeof n ? r[n] : n.current) || K;
      let s = d(K, e);
      L || s || !open || eT(i, {
        preventScroll: i === K
      });
    });
  }, [disabled, open, K, L, ee, U]);
  et(() => {
    if (disabled || !K) return;
    let e = !1;
    let r = S(K);
    let n = h(r);
    let s = dataRef.current.openEvent;
    function o(r) {
      let {
        open,
        reason,
        event,
        nested
      } = r;
      open && (s = event);
      "escape-key" === reason && refs.domReference.current && e8(refs.domReference.current);
      "hover" === reason && "mouseleave" === event.type && (Y.current = !0);
      "outside-press" === reason && (nested ? (Y.current = !1, e = !0) : Y.current = !(m(event) || v(event)));
    }
    e8(n);
    events.on("openchange", o);
    let p = r.createElement("span");
    function g() {
      return "boolean" == typeof Q.current ? e7() || p : Q.current.current || p;
    }
    p.setAttribute("tabindex", "-1");
    p.setAttribute("aria-hidden", "true");
    Object.assign(p.style, eG);
    H && domReference && domReference.insertAdjacentElement("afterend", p);
    return () => {
      events.off("openchange", o);
      let n = h(r);
      let i = d(floating, n) || V && eP(V.nodesRef.current, nodeId).some(e => {
        var r;
        return d(null == (r = e.context) ? void 0 : r.elements.floating, n);
      });
      (i || s && ["click", "mousedown"].includes(s.type)) && refs.domReference.current && e8(refs.domReference.current);
      let m = g();
      queueMicrotask(() => {
        Q.current && !Y.current && sb(m) && (m === n || n === r.body || i) && m.focus({
          preventScroll: e
        });
        p.remove();
      });
    };
  }, [disabled, floating, K, Q, dataRef, refs, events, V, nodeId, H, domReference]);
  useEffect(() => {
    queueMicrotask(() => {
      Y.current = !1;
    });
  }, [disabled]);
  et(() => {
    if (!disabled && B) {
      B.setFocusManagerState({
        modal,
        closeOnFocusOut,
        open,
        onOpenChange,
        refs
      });
      return () => {
        B.setFocusManagerState(null);
      };
    }
  }, [disabled, B, modal, open, onOpenChange, refs, closeOnFocusOut]);
  et(() => {
    if (disabled || !K || "function" != typeof MutationObserver || L) return;
    let e = () => {
      let e = K.getAttribute("tabindex");
      let r = J();
      let n = h(S(floating));
      let i = r.indexOf(n);
      -1 !== i && (X.current = i);
      F.current.includes("floating") || n !== refs.domReference.current && 0 === r.length ? "0" !== e && K.setAttribute("tabindex", "0") : "-1" !== e && K.setAttribute("tabindex", "-1");
    };
    e();
    let r = new MutationObserver(e);
    r.observe(K, {
      childList: !0,
      subtree: !0,
      attributes: !0
    });
    return () => {
      r.disconnect();
    };
  }, [disabled, floating, K, refs, F, J, L]);
  let en = !disabled && z && (!modal || !j) && (H || modal);
  return createElement(Fragment, null, en && createElement(eH, {
    "data-type": "inside",
    ref: B?.beforeInsideRef,
    onFocus: e => {
      if (modal) {
        let e = ee();
        eT("reference" === order[0] ? e[0] : e[e.length - 1]);
      } else if (null != B && B.preserveTabOrder && B.portalNode) {
        if (Y.current = !1, eq(e, B.portalNode)) {
          let e = eV() || domReference;
          e?.focus();
        } else {
          var r;
          B.beforeOutsideRef.current || r.focus();
        }
      }
    }
  }), !j && er("start"), children, er("end"), en && createElement(eH, {
    "data-type": "inside",
    ref: B?.afterInsideRef,
    onFocus: e => {
      if (modal) eT(ee()[0]);else if (null != B && B.preserveTabOrder && B.portalNode) {
        if (closeOnFocusOut && (Y.current = !0), eq(e, B.portalNode)) {
          let e = eB() || domReference;
          e?.focus();
        } else {
          var r;
          B.afterOutsideRef.current || r.focus();
        }
      }
    }
  }));
}
let tt = 0;
function tr() {
  let e = /iP(hone|ad|od)|iOS/.test(p());
  let r = document.body.style;
  let n = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight";
  let i = window.innerWidth - document.documentElement.clientWidth;
  let s = r.left ? parseFloat(r.left) : window.scrollX;
  let o = r.top ? parseFloat(r.top) : window.scrollY;
  if (r.overflow = "hidden", i && (r[n] = i + "px"), e) {
    var a;
    var h;
    let e = (null == (a = window.visualViewport) ? void 0 : a.offsetLeft) || 0;
    Object.assign(r, {
      position: "fixed",
      top: -(o - Math.floor((null == (h = window.visualViewport) ? void 0 : h.offsetTop) || 0)) + "px",
      left: -(s - Math.floor(e)) + "px",
      right: "0"
    });
  }
  return () => {
    Object.assign(r, {
      overflow: "",
      [n]: ""
    });
    e && (Object.assign(r, {
      position: "",
      top: "",
      left: "",
      right: ""
    }), window.scrollTo(s, o));
  };
}
let tn = () => {};
let $$ti4 = forwardRef(function (e, r) {
  let {
    lockScroll = !1,
    ...i
  } = e;
  et(() => {
    if (lockScroll) {
      1 == ++tt && (tn = tr());
      return () => {
        0 == --tt && tn();
      };
    }
  }, [lockScroll]);
  return createElement("div", ea({
    ref: r
  }, i, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...i.style
    }
  }));
});
function ts(e) {
  return sb(e.target) && "BUTTON" === e.target.tagName;
}
function to(e) {
  return T(e);
}
export function $$ta9(e, r) {
  void 0 === r && (r = {});
  let {
    open,
    onOpenChange,
    dataRef,
    elements: {
      domReference
    }
  } = e;
  let {
    enabled = !0,
    event = "click",
    toggle = !0,
    ignoreMouse = !1,
    keyboardHandlers = !0,
    stickIfOpen = !0
  } = r;
  let y = useRef();
  let b = useRef(!1);
  let O = useMemo(() => ({
    onPointerDown(e) {
      y.current = e.pointerType;
    },
    onMouseDown(e) {
      let r = y.current;
      0 === e.button && "click" !== event && (w(r, !0) && ignoreMouse || (open && toggle && (!dataRef.current.openEvent || !stickIfOpen || "mousedown" === dataRef.current.openEvent.type) ? onOpenChange(!1, e.nativeEvent, "click") : (e.preventDefault(), onOpenChange(!0, e.nativeEvent, "click"))));
    },
    onClick(e) {
      let r = y.current;
      if ("mousedown" === event && y.current) {
        y.current = void 0;
        return;
      }
      w(r, !0) && ignoreMouse || (open && toggle && (!dataRef.current.openEvent || !stickIfOpen || "click" === dataRef.current.openEvent.type) ? onOpenChange(!1, e.nativeEvent, "click") : onOpenChange(!0, e.nativeEvent, "click"));
    },
    onKeyDown(e) {
      y.current = void 0;
      e.defaultPrevented || !keyboardHandlers || ts(e) || (" " !== e.key || to(domReference) || (e.preventDefault(), b.current = !0), "Enter" === e.key && (open && toggle ? onOpenChange(!1, e.nativeEvent, "click") : onOpenChange(!0, e.nativeEvent, "click")));
    },
    onKeyUp(e) {
      !(e.defaultPrevented || !keyboardHandlers || ts(e) || to(domReference)) && " " === e.key && b.current && (b.current = !1, open && toggle ? onOpenChange(!1, e.nativeEvent, "click") : onOpenChange(!0, e.nativeEvent, "click"));
    }
  }), [dataRef, domReference, event, ignoreMouse, keyboardHandlers, onOpenChange, open, stickIfOpen, toggle]);
  return useMemo(() => enabled ? {
    reference: O
  } : {}, [enabled, O]);
}
let tl = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
};
let tu = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
};
let tc = e => {
  var r;
  var n;
  return {
    escapeKey: "boolean" == typeof e ? e : null != (r = e?.escapeKey) && r,
    outsidePress: "boolean" == typeof e ? e : null == (n = e?.outsidePress) || n
  };
};
export function $$th10(e, r) {
  void 0 === r && (r = {});
  let {
    open,
    onOpenChange,
    elements,
    dataRef
  } = e;
  let {
    enabled = !0,
    escapeKey = !0,
    outsidePress = !0,
    outsidePressEvent = "pointerdown",
    referencePress = !1,
    referencePressEvent = "pointerdown",
    ancestorScroll = !1,
    bubbles,
    capture
  } = r;
  let C = $$ey14();
  let T = Z("function" == typeof outsidePress ? outsidePress : () => !1);
  let I = "function" == typeof outsidePress ? T : outsidePress;
  let P = useRef(!1);
  let R = useRef(!1);
  let {
    escapeKey: _escapeKey,
    outsidePress: _outsidePress
  } = tc(bubbles);
  let {
    escapeKey: _escapeKey2,
    outsidePress: _outsidePress2
  } = tc(capture);
  let L = useRef(!1);
  let j = Z(e => {
    var r;
    if (!open || !enabled || !escapeKey || "Escape" !== e.key || L.current) return;
    let s = null == (r = dataRef.current.floatingContext) ? void 0 : r.nodeId;
    let o = C ? eP(C.nodesRef.current, s) : [];
    if (!_escapeKey && (e.stopPropagation(), o.length > 0)) {
      let e = !0;
      if (o.forEach(r => {
        var n;
        if (null != (n = r.context) && n.open && !r.context.dataRef.current.__escapeKeyBubbles) {
          e = !1;
          return;
        }
      }), !e) return;
    }
    onOpenChange(!1, k(e) ? e.nativeEvent : e, "escape-key");
  });
  let z = Z(e => {
    var r;
    let n = () => {
      var r;
      j(e);
      A(e) || r.removeEventListener("keydown", n);
    };
    A(e) || r.addEventListener("keydown", n);
  });
  let F = Z(e => {
    var r;
    let n = P.current;
    P.current = !1;
    let s = R.current;
    if (R.current = !1, "click" === outsidePressEvent && s || n || "function" == typeof I && !I(e)) return;
    let p = A(e);
    let g = "[" + ew("inert") + "]";
    let m = S(elements.floating).querySelectorAll(g);
    let y = vq(p) ? p : null;
    for (; y && !_$$eu(y);) {
      let e = $4(y);
      if (_$$eu(e) || !vq(e)) break;
      y = e;
    }
    if (m.length && vq(p) && !_(p) && !d(p, elements.floating) && Array.from(m).every(e => !d(y, e))) return;
    if (sb(p) && V) {
      let r = p.clientWidth > 0 && p.scrollWidth > p.clientWidth;
      let n = p.clientHeight > 0 && p.scrollHeight > p.clientHeight;
      let i = n && e.offsetX > p.clientWidth;
      if (n && "rtl" === L9(p).direction && (i = e.offsetX <= p.offsetWidth - p.clientWidth), i || r && e.offsetY > p.clientHeight) return;
    }
    let b = null == (r = dataRef.current.floatingContext) ? void 0 : r.nodeId;
    let O = C && eP(C.nodesRef.current, b).some(r => {
      var n;
      return E(e, null == (n = r.context) ? void 0 : n.elements.floating);
    });
    if (E(e, elements.floating) || E(e, elements.domReference) || O) return;
    let x = C ? eP(C.nodesRef.current, b) : [];
    if (x.length > 0) {
      let e = !0;
      if (x.forEach(r => {
        var n;
        if (null != (n = r.context) && n.open && !r.context.dataRef.current.__outsidePressBubbles) {
          e = !1;
          return;
        }
      }), !e) return;
    }
    onOpenChange(!1, e, "outside-press");
  });
  let U = Z(e => {
    var r;
    let n = () => {
      var r;
      F(e);
      A(e) || r.removeEventListener(outsidePressEvent, n);
    };
    A(e) || r.addEventListener(outsidePressEvent, n);
  });
  useEffect(() => {
    if (!open || !enabled) return;
    dataRef.current.__escapeKeyBubbles = _escapeKey;
    dataRef.current.__outsidePressBubbles = _outsidePress;
    let e = -1;
    function r(e) {
      onOpenChange(!1, e, "ancestor-scroll");
    }
    function s() {
      window.clearTimeout(e);
      L.current = !0;
    }
    function d() {
      e = window.setTimeout(() => {
        L.current = !1;
      }, Tc() ? 5 : 0);
    }
    let m = S(elements.floating);
    escapeKey && (m.addEventListener("keydown", _escapeKey2 ? z : j, _escapeKey2), m.addEventListener("compositionstart", s), m.addEventListener("compositionend", d));
    I && m.addEventListener(outsidePressEvent, _outsidePress2 ? U : F, _outsidePress2);
    let y = [];
    ancestorScroll && (vq(elements.domReference) && (y = v9(elements.domReference)), vq(elements.floating) && (y = y.concat(v9(elements.floating))), !vq(elements.reference) && elements.reference && elements.reference.contextElement && (y = y.concat(v9(elements.reference.contextElement))));
    (y = y.filter(e => {
      var r;
      return e !== (null == (r = m.defaultView) ? void 0 : r.visualViewport);
    })).forEach(e => {
      e.addEventListener("scroll", r, {
        passive: !0
      });
    });
    return () => {
      escapeKey && (m.removeEventListener("keydown", _escapeKey2 ? z : j, _escapeKey2), m.removeEventListener("compositionstart", s), m.removeEventListener("compositionend", d));
      I && m.removeEventListener(outsidePressEvent, _outsidePress2 ? U : F, _outsidePress2);
      y.forEach(e => {
        e.removeEventListener("scroll", r);
      });
      window.clearTimeout(e);
    };
  }, [dataRef, elements, escapeKey, I, outsidePressEvent, open, onOpenChange, ancestorScroll, enabled, _escapeKey, _outsidePress, j, _escapeKey2, z, F, _outsidePress2, U]);
  useEffect(() => {
    P.current = !1;
  }, [I, outsidePressEvent]);
  let Q = useMemo(() => ({
    onKeyDown: j,
    [tl[referencePressEvent]]: e => {
      referencePress && onOpenChange(!1, e.nativeEvent, "reference-press");
    }
  }), [j, onOpenChange, referencePress, referencePressEvent]);
  let V = useMemo(() => ({
    onKeyDown: j,
    onMouseDown() {
      R.current = !0;
    },
    onMouseUp() {
      R.current = !0;
    },
    [tu[outsidePressEvent]]: () => {
      P.current = !0;
    }
  }), [j, outsidePressEvent]);
  return useMemo(() => enabled ? {
    reference: Q,
    floating: V
  } : {}, [enabled, Q, V]);
}
function td(e) {
  let {
    open = !1,
    onOpenChange,
    elements
  } = e;
  let o = ed();
  let a = useRef({});
  let [h] = useState(() => ep());
  let d = null != $$ev13();
  let [p, g] = useState(elements.reference);
  let m = Z((e, r, i) => {
    a.current.openEvent = e ? r : void 0;
    h.emit("openchange", {
      open: e,
      event: r,
      reason: i,
      nested: d
    });
    onOpenChange?.(e, r, i);
  });
  let v = useMemo(() => ({
    setPositionReference: g
  }), []);
  let y = useMemo(() => ({
    reference: p || elements.reference || null,
    floating: elements.floating || null,
    domReference: elements.reference
  }), [p, elements.reference, elements.floating]);
  return useMemo(() => ({
    dataRef: a,
    open,
    onOpenChange: m,
    elements: y,
    events: h,
    floatingId: o,
    refs: v
  }), [open, m, y, h, o, v]);
}
export function $$tf11(e) {
  void 0 === e && (e = {});
  let {
    nodeId
  } = e;
  let n = td({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  });
  let i = e.rootContext || n;
  let o = i.elements;
  let [h, d] = useState(null);
  let [p, g] = useState(null);
  let m = o?.domReference || h;
  let v = useRef(null);
  let y = $$ey14();
  et(() => {
    m && (v.current = m);
  }, [m]);
  let b = _$$we({
    ...e,
    elements: {
      ...o,
      ...(p && {
        reference: p
      })
    }
  });
  let O = useCallback(e => {
    let r = vq(e) ? {
      getBoundingClientRect: () => e.getBoundingClientRect(),
      contextElement: e
    } : e;
    g(r);
    b.refs.setReference(r);
  }, [b.refs]);
  let x = useCallback(e => {
    (vq(e) || null === e) && (v.current = e, d(e));
    (vq(b.refs.reference.current) || null === b.refs.reference.current || null !== e && !vq(e)) && b.refs.setReference(e);
  }, [b.refs]);
  let w = useMemo(() => ({
    ...b.refs,
    setReference: x,
    setPositionReference: O,
    domReference: v
  }), [b.refs, x, O]);
  let k = useMemo(() => ({
    ...b.elements,
    domReference: m
  }), [b.elements, m]);
  let _ = useMemo(() => ({
    ...b,
    ...i,
    refs: w,
    elements: k,
    nodeId
  }), [b, w, k, nodeId, i]);
  et(() => {
    i.dataRef.current.floatingContext = _;
    let e = y?.nodesRef.current.find(e => e.id === nodeId);
    e && (e.context = _);
  });
  return useMemo(() => ({
    ...b,
    context: _,
    refs: w,
    elements: k
  }), [b, w, k, _]);
}
let tp = "active";
let tg = "selected";
function tm(e, r, n) {
  let i = new Map();
  let s = "item" === n;
  let o = e;
  if (s && e) {
    let {
      [tp]: tp,
      [tg]: tg,
      ...i
    } = e;
    o = i;
  }
  return {
    ...("floating" === n && {
      tabIndex: -1,
      [e5]: ""
    }),
    ...o,
    ...r.map(r => {
      let i = r ? r[n] : null;
      return "function" == typeof i ? e ? i(e) : null : i;
    }).concat(e).reduce((e, r) => (r && Object.entries(r).forEach(r => {
      let [n, o] = r;
      if (!(s && [tp, tg].includes(n))) {
        if (0 === n.indexOf("on")) {
          if (i.has(n) || i.set(n, []), "function" == typeof o) {
            var a;
            i.get(n) || a.push(o);
            e[n] = function () {
              for (r = $$arguments.length, s = Array(r), o = 0, void 0; o < r; o++) {
                var e;
                var r;
                var s;
                var o;
                s[o] = $$arguments[o];
              }
              return null == (e = i.get(n)) ? void 0 : e.map(e => e(...s)).find(e => void 0 !== e);
            };
          }
        } else e[n] = o;
      }
    }), e), {})
  };
}
export function $$tv17(e) {
  void 0 === e && (e = []);
  let r = e.map(e => e?.reference);
  let n = e.map(e => e?.floating);
  let i = e.map(e => e?.item);
  let o = useCallback(r => tm(r, e, "reference"), r);
  let a = useCallback(r => tm(r, e, "floating"), n);
  let h = useCallback(r => tm(r, e, "item"), i);
  return useMemo(() => ({
    getReferenceProps: o,
    getFloatingProps: a,
    getItemProps: h
  }), [o, a, h]);
}
let ty = !1;
function tb(e, r, n) {
  switch (e) {
    case "vertical":
      return r;
    case "horizontal":
      return n;
    default:
      return r || n;
  }
}
function tO(e, r) {
  return tb(r, e === F || e === U, e === Q || e === V);
}
function tx(e, r, n) {
  return tb(r, e === U, n ? e === Q : e === V) || "Enter" === e || " " === e || "" === e;
}
function tw(e, r, n) {
  return tb(r, n ? e === Q : e === V, e === U);
}
function tk(e, r, n) {
  return tb(r, n ? e === V : e === Q, e === F);
}
export function $$t_19(e, r) {
  let {
    open,
    onOpenChange,
    elements
  } = e;
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
    focusItemOnOpen = "auto",
    focusItemOnHover = !0,
    openOnArrowKeyDown = !0,
    disabledIndices,
    orientation = "vertical",
    cols = 1,
    scrollItemIntoView = !0,
    virtualItemRef,
    itemSizes,
    dense = !1
  } = r;
  let B = ek(e3(elements.floating));
  let er = $$ev13();
  let en = $$ey14();
  let ei = Z(onNavigate);
  let es = P(elements.domReference);
  let eo = useRef(focusItemOnOpen);
  let ea = useRef(null != selectedIndex ? selectedIndex : -1);
  let el = useRef(null);
  let eu = useRef(!0);
  let ec = useRef(ei);
  let eh = useRef(!!elements.floating);
  let ed = useRef(open);
  let ef = useRef(!1);
  let ep = useRef(!1);
  let eg = ek(disabledIndices);
  let em = ek(open);
  let eb = ek(scrollItemIntoView);
  let eO = ek(selectedIndex);
  let [ex, ew] = useState();
  let [e_, eS] = useState();
  let eE = Z(function (e, r, n) {
    function i(e) {
      virtual ? (ew(e.id), en?.events.emit("virtualfocus", e), virtualItemRef && (virtualItemRef.current = e)) : eT(e, {
        preventScroll: !0,
        sync: !!(O() && y()) && (ty || ef.current)
      });
    }
    void 0 === n && (n = !1);
    let s = e.current[r.current];
    s && i(s);
    requestAnimationFrame(() => {
      let o = e.current[r.current] || s;
      if (!o) return;
      s || i(o);
      let a = eb.current;
      a && eC && (n || !eu.current) && (null == o.scrollIntoView || o.scrollIntoView("boolean" == typeof a ? {
        block: "nearest",
        inline: "nearest"
      } : a));
    });
  });
  et(() => {
    document.createElement("div").focus({
      get preventScroll() {
        ty = !0;
        return !1;
      }
    });
  }, []);
  et(() => {
    enabled && (open && elements.floating ? eo.current && null != selectedIndex && (ep.current = !0, ea.current = selectedIndex, ei(selectedIndex)) : eh.current && (ea.current = -1, ec.current(null)));
  }, [enabled, open, elements.floating, selectedIndex, ei]);
  et(() => {
    if (enabled && open && elements.floating) {
      if (null == activeIndex) {
        if (ef.current = !1, null == eO.current && (eh.current && (ea.current = -1, eE(listRef, ea)), (!ed.current || !eh.current) && eo.current && (null != el.current || !0 === eo.current && null == el.current))) {
          let e = 0;
          let r = () => {
            null == listRef.current[0] ? (e < 2 && (e ? requestAnimationFrame : queueMicrotask)(r), e++) : (ea.current = null == el.current || tx(el.current, orientation, rtl) || nested ? W(listRef, eg.current) : Y(listRef, eg.current), el.current = null, ei(ea.current));
          };
          r();
        }
      } else q(listRef, activeIndex) || (ea.current = activeIndex, eE(listRef, ea, ep.current), ep.current = !1);
    }
  }, [enabled, open, elements.floating, activeIndex, eO, nested, listRef, orientation, rtl, ei, eE, eg]);
  et(() => {
    var e;
    if (!enabled || elements.floating || !en || virtual || !eh.current) return;
    let r = en.nodesRef.current;
    let n = r.find(e => e.id === er)?.context || e.context || e.elements.floating;
    let i = h(S(elements.floating));
    let s = r.some(e => e.context && d(e.context.elements.floating, i));
    n && !s && eu.current && n.focus({
      preventScroll: !0
    });
  }, [enabled, elements.floating, en, er, virtual]);
  et(() => {
    if (enabled && en && virtual && !er) {
      en.events.on("virtualfocus", e);
      return () => {
        en.events.off("virtualfocus", e);
      };
    }
    function e(e) {
      eS(e.id);
      virtualItemRef && (virtualItemRef.current = e);
    }
  }, [enabled, en, virtual, er, virtualItemRef]);
  et(() => {
    ec.current = ei;
    eh.current = !!elements.floating;
  });
  et(() => {
    open || (el.current = null);
  }, [open]);
  et(() => {
    ed.current = open;
  }, [open]);
  let eA = null != activeIndex;
  let eC = useMemo(() => {
    function e(e) {
      if (!open) return;
      let r = listRef.current.indexOf(e);
      -1 !== r && ei(r);
    }
    return {
      onFocus(r) {
        let {
          currentTarget
        } = r;
        e(currentTarget);
      },
      onClick: e => {
        let {
          currentTarget
        } = e;
        return currentTarget.focus({
          preventScroll: !0
        });
      },
      ...(focusItemOnHover && {
        onMouseMove(r) {
          let {
            currentTarget
          } = r;
          e(currentTarget);
        },
        onPointerLeave(e) {
          let {
            pointerType
          } = e;
          eu.current && "touch" !== pointerType && (ea.current = -1, eE(listRef, ea), ei(null), virtual || eT(B.current, {
            preventScroll: !0
          }));
        }
      })
    };
  }, [open, B, eE, focusItemOnHover, listRef, ei, virtual]);
  let eI = Z(e => {
    if (eu.current = !1, ef.current = !0, 229 === e.which || !em.current && e.currentTarget === B.current) return;
    if (nested && tk(e.key, orientation, rtl)) {
      I(e);
      onOpenChange(!1, e.nativeEvent, "list-navigation");
      sb(elements.domReference) && (virtual ? en?.events.emit("virtualfocus", elements.domReference) : elements.domReference.focus());
      return;
    }
    let r = ea.current;
    let s = W(listRef, disabledIndices);
    let d = Y(listRef, disabledIndices);
    if (es || ("Home" === e.key && (I(e), ea.current = s, ei(ea.current)), "End" === e.key && (I(e), ea.current = d, ei(ea.current))), cols > 1) {
      let r = itemSizes || Array.from({
        length: listRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      let n = H(r, cols, dense);
      let i = n.findIndex(e => null != e && !ee(listRef.current, e, disabledIndices));
      let o = n.reduce((e, r, n) => null == r || ee(listRef.current, r, disabledIndices) ? e : n, -1);
      let a = n[X({
        current: n.map(e => null != e ? listRef.current[e] : null)
      }, {
        event: e,
        orientation,
        loop,
        rtl,
        cols,
        disabledIndices: J([...(disabledIndices || listRef.current.map((e, r) => ee(listRef.current, r) ? r : void 0)), void 0], n),
        minIndex: i,
        maxIndex: o,
        prevIndex: K(ea.current > d ? s : ea.current, r, n, cols, e.key === U ? "bl" : e.key === (rtl ? Q : V) ? "tr" : "tl"),
        stopEvent: !0
      })];
      if (null != a && (ea.current = a, ei(ea.current)), "both" === orientation) return;
    }
    if (tO(e.key, orientation)) {
      if (I(e), open && !virtual && h(e.currentTarget.ownerDocument) === e.currentTarget) {
        ea.current = tx(e.key, orientation, rtl) ? s : d;
        ei(ea.current);
        return;
      }
      tx(e.key, orientation, rtl) ? loop ? ea.current = r >= d ? allowEscape && r !== listRef.current.length ? -1 : s : G(listRef, {
        startingIndex: r,
        disabledIndices
      }) : ea.current = Math.min(d, G(listRef, {
        startingIndex: r,
        disabledIndices
      })) : loop ? ea.current = r <= s ? allowEscape && -1 !== r ? listRef.current.length : d : G(listRef, {
        startingIndex: r,
        decrement: !0,
        disabledIndices
      }) : ea.current = Math.max(s, G(listRef, {
        startingIndex: r,
        decrement: !0,
        disabledIndices
      }));
      q(listRef, ea.current) ? ei(null) : ei(ea.current);
    }
  });
  let eP = useMemo(() => virtual && open && eA && {
    "aria-activedescendant": e_ || ex
  }, [virtual, open, eA, e_, ex]);
  let eM = useMemo(() => ({
    "aria-orientation": "both" === orientation ? void 0 : orientation,
    ...(!P(elements.domReference) && eP),
    onKeyDown: eI,
    onPointerMove() {
      eu.current = !0;
    }
  }), [eP, eI, elements.domReference, orientation]);
  let eD = useMemo(() => {
    function e(e) {
      "auto" === focusItemOnOpen && m(e.nativeEvent) && (eo.current = !0);
    }
    function r(e) {
      eo.current = focusItemOnOpen;
      "auto" === focusItemOnOpen && v(e.nativeEvent) && (eo.current = !0);
    }
    return {
      ...eP,
      onKeyDown(e) {
        eu.current = !1;
        let r = e.key.startsWith("Arrow");
        let s = ["Home", "End"].includes(e.key);
        let o = r || s;
        let a = tw(e.key, orientation, rtl);
        let h = tk(e.key, orientation, rtl);
        let d = tO(e.key, orientation);
        let g = (nested ? a : d) || "Enter" === e.key || "" === e.key.trim();
        if (virtual && open) {
          let r = en?.nodesRef.current.find(e => null == e.parentId);
          let n = en && r ? eR(en.nodesRef.current, r.id) : null;
          if (o && n && virtualItemRef) {
            var m;
            var v;
            var y;
            let r = new KeyboardEvent("keydown", {
              key: e.key,
              bubbles: !0
            });
            if (a || h) {
              let i = (null == (m = n.context) ? void 0 : m.elements.domReference) === e.currentTarget;
              let s = h && !i ? null == (v = n.context) ? void 0 : v.elements.domReference : a ? listRef.current.find(e => e?.id === ex) : null;
              s && (I(e), s.dispatchEvent(r), eS(void 0));
            }
            if ((d || s) && n.context && n.context.open && n.parentId && e.currentTarget !== n.context.elements.domReference) {
              I(e);
              n.context.elements.domReference || y.dispatchEvent(r);
              return;
            }
          }
          return eI(e);
        }
        if (open || openOnArrowKeyDown || !r) {
          if (g && (el.current = nested && d ? null : e.key), nested) {
            a && (I(e), open ? (ea.current = W(listRef, eg.current), ei(ea.current)) : onOpenChange(!0, e.nativeEvent, "list-navigation"));
            return;
          }
          d && (null != selectedIndex && (ea.current = selectedIndex), I(e), !open && openOnArrowKeyDown ? onOpenChange(!0, e.nativeEvent, "list-navigation") : eI(e), open && ei(ea.current));
        }
      },
      onFocus() {
        open && !virtual && ei(null);
      },
      onPointerDown: r,
      onMouseDown: e,
      onClick: e
    };
  }, [ex, eP, eI, eg, focusItemOnOpen, listRef, nested, ei, onOpenChange, open, openOnArrowKeyDown, orientation, rtl, selectedIndex, en, virtual, virtualItemRef]);
  return useMemo(() => enabled ? {
    reference: eD,
    floating: eM,
    item: eC
  } : {}, [enabled, eD, eM, eC]);
}
let tS = new Map([["select", "listbox"], ["combobox", "listbox"], ["label", !1]]);
export function $$tE21(e, r) {
  var n;
  void 0 === r && (r = {});
  let {
    open,
    floatingId
  } = e;
  let {
    enabled = !0,
    role = "dialog"
  } = r;
  let d = null != (n = tS.get(role)) ? n : role;
  let p = ed();
  let g = null != $$ev13();
  let m = useMemo(() => "tooltip" === d || "label" === role ? {
    ["aria-" + ("label" === role ? "labelledby" : "describedby")]: open ? floatingId : void 0
  } : {
    "aria-expanded": open ? "true" : "false",
    "aria-haspopup": "alertdialog" === d ? "dialog" : d,
    "aria-controls": open ? floatingId : void 0,
    ...("listbox" === d && {
      role: "combobox"
    }),
    ...("menu" === d && {
      id: p
    }),
    ...("menu" === d && g && {
      role: "menuitem"
    }),
    ...("select" === role && {
      "aria-autocomplete": "none"
    }),
    ...("combobox" === role && {
      "aria-autocomplete": "list"
    })
  }, [d, floatingId, g, open, p, role]);
  let v = useMemo(() => {
    let e = {
      id: floatingId,
      ...(d && {
        role: d
      })
    };
    return "tooltip" === d || "label" === role ? e : {
      ...e,
      ...("menu" === d && {
        "aria-labelledby": p
      })
    };
  }, [d, floatingId, p, role]);
  let y = useCallback(e => {
    let {
      active,
      selected
    } = e;
    let i = {
      role: "option",
      ...(active && {
        id: floatingId + "-option"
      })
    };
    switch (role) {
      case "select":
        return {
          ...i,
          "aria-selected": active && selected
        };
      case "combobox":
        return {
          ...i,
          ...(active && {
            "aria-selected": !0
          })
        };
    }
    return {};
  }, [floatingId, role]);
  return useMemo(() => enabled ? {
    reference: m,
    floating: v,
    item: y
  } : {}, [enabled, m, v, y]);
}
export function $$tA22(e, r) {
  var n;
  let {
    open,
    dataRef
  } = e;
  let {
    listRef,
    activeIndex,
    onMatch,
    onTypingChange,
    enabled = !0,
    findMatch = null,
    resetMs = 750,
    ignoreKeys = [],
    selectedIndex = null
  } = r;
  let O = useRef();
  let x = useRef("");
  let w = useRef(null != (n = null != selectedIndex ? selectedIndex : activeIndex) ? n : -1);
  let k = useRef(null);
  let _ = Z(onMatch);
  let S = Z(onTypingChange);
  let E = ek(findMatch);
  let A = ek(ignoreKeys);
  et(() => {
    open && (clearTimeout(O.current), k.current = null, x.current = "");
  }, [open]);
  et(() => {
    if (open && "" === x.current) {
      var e;
      w.current = null != (e = null != selectedIndex ? selectedIndex : activeIndex) ? e : -1;
    }
  }, [open, selectedIndex, activeIndex]);
  let C = Z(e => {
    e ? dataRef.current.typing || (dataRef.current.typing = e, S(e)) : dataRef.current.typing && (dataRef.current.typing = e, S(e));
  });
  let T = Z(e => {
    function r(e, r, n) {
      let i = E.current ? E.current(r, n) : r.find(e => e?.toLocaleLowerCase().indexOf(n.toLocaleLowerCase()) === 0);
      return i ? e.indexOf(i) : -1;
    }
    let n = listRef.current;
    if (x.current.length > 0 && " " !== x.current[0] && (-1 === r(n, n, x.current) ? C(!1) : " " === e.key && I(e)), null == n || A.current.includes(e.key) || 1 !== e.key.length || e.ctrlKey || e.metaKey || e.altKey) return;
    open && " " !== e.key && (I(e), C(!0));
    n.every(e => {
      var r;
      var n;
      return !e || (null == (r = e[0]) ? void 0 : r.toLocaleLowerCase()) !== (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase());
    }) && x.current === e.key && (x.current = "", w.current = k.current);
    x.current += e.key;
    clearTimeout(O.current);
    O.current = setTimeout(() => {
      x.current = "";
      w.current = k.current;
      C(!1);
    }, resetMs);
    let s = w.current;
    let o = r(n, [...n.slice((s || 0) + 1), ...n.slice(0, (s || 0) + 1)], x.current);
    -1 !== o ? (_(o), k.current = o) : " " !== e.key && (x.current = "", C(!1));
  });
  let P = useMemo(() => ({
    onKeyDown: T
  }), [T]);
  let R = useMemo(() => ({
    onKeyDown: T,
    onKeyUp(e) {
      " " === e.key && C(!1);
    }
  }), [T, C]);
  return useMemo(() => enabled ? {
    reference: P,
    floating: R
  } : {}, [enabled, P, R]);
}
function tC(e, r) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: r
      }
    }
  };
}
export let $$tT7 = e => ({
  name: "inner",
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
    } = _3(e, r);
    let {
      rects,
      elements: {
        floating
      }
    } = r;
    let y = listRef.current[index];
    let b = scrollRef?.current || floating;
    let O = floating.clientTop || b.clientTop;
    let x = 0 !== floating.clientTop;
    let w = 0 !== b.clientTop;
    let k = floating === b;
    if (!y) return {};
    let _ = {
      ...r,
      ...(await cY(-y.offsetTop - floating.clientTop - rects.reference.height / 2 - y.offsetHeight / 2 - offset).fn(r))
    };
    let S = await __(tC(_, b.scrollHeight + O + floating.clientTop), g);
    let E = await __(_, {
      ...g,
      elementContext: "reference"
    });
    let A = T9(0, S.top);
    let C = _.y + A;
    let T = (b.scrollHeight > b.clientHeight ? e => e : LI)(T9(0, b.scrollHeight + (x && k || w ? 2 * O : 0) - A - T9(0, S.bottom)));
    if (b.style.maxHeight = T + "px", b.scrollTop = A, onFallbackChange) {
      let e = b.offsetHeight < y.offsetHeight * jk(minItemsVisible, listRef.current.length) - 1 || E.top >= -referenceOverflowThreshold || E.bottom >= -referenceOverflowThreshold;
      flushSync(() => onFallbackChange(e));
    }
    overflowRef && (overflowRef.current = await __(tC({
      ..._,
      y: C
    }, b.offsetHeight + O + floating.clientTop), g));
    return {
      y: C
    };
  }
});
export function $$tI16(e, r) {
  let {
    open,
    elements
  } = e;
  let {
    enabled = !0,
    overflowRef,
    scrollRef,
    onChange
  } = r;
  let p = Z(onChange);
  let m = useRef(!1);
  let v = useRef(null);
  let y = useRef(null);
  useEffect(() => {
    if (!enabled) return;
    function e(e) {
      if (e.ctrlKey || !r || null == overflowRef.current) return;
      let n = e.deltaY;
      let i = overflowRef.current.top >= -.5;
      let s = overflowRef.current.bottom >= -.5;
      let o = r.scrollHeight - r.clientHeight;
      let h = n < 0 ? -1 : 1;
      let d = n < 0 ? "max" : "min";
      !(r.scrollHeight <= r.clientHeight) && (!i && n > 0 || !s && n < 0 ? (e.preventDefault(), flushSync(() => {
        p(e => e + Math[d](n, o * h));
      })) : /firefox/i.test(g()) && (r.scrollTop += n));
    }
    let r = scrollRef?.current || elements.floating;
    if (open && r) {
      r.addEventListener("wheel", e);
      requestAnimationFrame(() => {
        v.current = r.scrollTop;
        null != overflowRef.current && (y.current = {
          ...overflowRef.current
        });
      });
      return () => {
        v.current = null;
        y.current = null;
        r.removeEventListener("wheel", e);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, p]);
  let b = useMemo(() => ({
    onKeyDown() {
      m.current = !0;
    },
    onWheel() {
      m.current = !1;
    },
    onPointerMove() {
      m.current = !1;
    },
    onScroll() {
      let e = scrollRef?.current || elements.floating;
      if (overflowRef.current && e && m.current) {
        if (null !== v.current) {
          let r = e.scrollTop - v.current;
          (overflowRef.current.bottom < -.5 && r < -1 || overflowRef.current.top < -.5 && r > 1) && flushSync(() => p(e => e + r));
        }
        requestAnimationFrame(() => {
          v.current = e.scrollTop;
        });
      }
    }
  }), [elements.floating, p, overflowRef, scrollRef]);
  return useMemo(() => enabled ? {
    floating: b
  } : {}, [enabled, b]);
}
function tP(e, r) {
  let [n, i] = e;
  let s = !1;
  let o = r.length;
  for (function () {
    let e = 0;
    let a = o - 1;
  }(); e < o; a = e++) {
    let [o, h] = r[e] || [0, 0];
    let [d, p] = r[a] || [0, 0];
    h >= i != p >= i && n <= (d - o) * (i - h) / (p - h) + o && (s = !s);
  }
  return s;
}
function tR(e, r) {
  return e[0] >= r.x && e[0] <= r.x + r.width && e[1] >= r.y && e[1] <= r.y + r.height;
}
export function $$tM8(e) {
  let r;
  void 0 === e && (e = {});
  let {
    buffer = .5,
    blockPointerEvents = !1,
    requireIntent = !0
  } = e;
  let o = !1;
  let h = null;
  let p = null;
  let g = performance.now();
  function m(e, r) {
    let n = performance.now();
    let i = n - g;
    if (null === h || null === p || 0 === i) {
      h = e;
      p = r;
      g = n;
      return null;
    }
    let s = e - h;
    let o = r - p;
    let a = Math.sqrt(s * s + o * o) / i;
    h = e;
    p = r;
    g = n;
    return a;
  }
  let v = e => {
    let {
      x,
      y: _y,
      placement,
      elements,
      onClose,
      nodeId,
      tree
    } = e;
    return function (e) {
      function O() {
        clearTimeout(r);
        onClose();
      }
      if (clearTimeout(r), !elements.domReference || !elements.floating || null == placement || null == x || null == _y) return;
      let {
        clientX,
        clientY
      } = e;
      let k = [clientX, clientY];
      let _ = A(e);
      let S = "mouseleave" === e.type;
      let E = d(elements.floating, _);
      let C = d(elements.domReference, _);
      let T = elements.domReference.getBoundingClientRect();
      let I = elements.floating.getBoundingClientRect();
      let P = placement.split("-")[0];
      let R = x > I.right - I.width / 2;
      let M = _y > I.bottom - I.height / 2;
      let D = tR(k, T);
      let N = I.width > T.width;
      let $ = I.height > T.height;
      let L = (N ? T : I).left;
      let j = (N ? T : I).right;
      let z = ($ ? T : I).top;
      let Z = ($ ? T : I).bottom;
      if (E && (o = !0, !S)) return;
      if (C && (o = !1), C && !S) {
        o = !0;
        return;
      }
      if (S && vq(e.relatedTarget) && d(elements.floating, e.relatedTarget) || tree && eP(tree.nodesRef.current, nodeId).some(e => {
        let {
          context
        } = e;
        return context?.open;
      })) return;
      if ("top" === P && _y >= T.bottom - 1 || "bottom" === P && _y <= T.top + 1 || "left" === P && x >= T.right - 1 || "right" === P && x <= T.left + 1) return O();
      let F = [];
      switch (P) {
        case "top":
          F = [[L, T.top + 1], [L, I.bottom - 1], [j, I.bottom - 1], [j, T.top + 1]];
          break;
        case "bottom":
          F = [[L, I.top + 1], [L, T.bottom - 1], [j, T.bottom - 1], [j, I.top + 1]];
          break;
        case "left":
          F = [[I.right - 1, Z], [I.right - 1, z], [T.left + 1, z], [T.left + 1, Z]];
          break;
        case "right":
          F = [[T.right - 1, Z], [T.right - 1, z], [I.left + 1, z], [I.left + 1, Z]];
      }
      function U(e) {
        let [r, i] = e;
        switch (P) {
          case "top":
            return [[N ? r + buffer / 2 : R ? r + 4 * buffer : r - 4 * buffer, i + buffer + 1], [N ? r - buffer / 2 : R ? r + 4 * buffer : r - 4 * buffer, i + buffer + 1], [I.left, R ? I.bottom - buffer : N ? I.bottom - buffer : I.top], [I.right, R ? N ? I.bottom - buffer : I.top : I.bottom - buffer]];
          case "bottom":
            return [[N ? r + buffer / 2 : R ? r + 4 * buffer : r - 4 * buffer, i - buffer], [N ? r - buffer / 2 : R ? r + 4 * buffer : r - 4 * buffer, i - buffer], [I.left, R ? I.top + buffer : N ? I.top + buffer : I.bottom], [I.right, R ? N ? I.top + buffer : I.bottom : I.top + buffer]];
          case "left":
            {
              let e = [r + buffer + 1, $ ? i + buffer / 2 : M ? i + 4 * buffer : i - 4 * buffer];
              let s = [r + buffer + 1, $ ? i - buffer / 2 : M ? i + 4 * buffer : i - 4 * buffer];
              return [[M ? I.right - buffer : $ ? I.right - buffer : I.left, I.top], [M ? $ ? I.right - buffer : I.left : I.right - buffer, I.bottom], e, s];
            }
          case "right":
            return [[r - buffer, $ ? i + buffer / 2 : M ? i + 4 * buffer : i - 4 * buffer], [r - buffer, $ ? i - buffer / 2 : M ? i + 4 * buffer : i - 4 * buffer], [M ? I.left + buffer : $ ? I.left + buffer : I.right, I.top], [M ? $ ? I.left + buffer : I.right : I.left + buffer, I.bottom]];
        }
      }
      if (!tP([clientX, clientY], F)) {
        if (o && !D) return O();
        if (!S && requireIntent) {
          let r = m(e.clientX, e.clientY);
          let n = .1;
          if (null !== r && r < n) return O();
        }
        tP([clientX, clientY], U([x, _y])) ? !o && requireIntent && (r = window.setTimeout(O, 40)) : O();
      }
    };
  };
  v.__options = {
    blockPointerEvents
  };
  return v;
}
export const ie = $$ef0;
export const s3 = $$te1;
export const ph = $$es2;
export const $c = $$eO3;
export const zR = $$ti4;
export const XF = $$e15;
export const P6 = $$ex6;
export const vW = $$tT7;
export const iB = $$tM8;
export const kp = $$ta9;
export const s9 = $$th10;
export const we = $$tf11;
export const fI = $$eb12;
export const R1 = $$ev13;
export const cq = $$ey14;
export const Mk = $$eE15;
export const Zx = $$tI16;
export const bv = $$tv17;
export const rm = $$eo18;
export const C1 = $$t_19;
export const SV = $$L20;
export const It = $$tE21;
export const lY = $$tA22;