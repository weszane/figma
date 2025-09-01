import o from "react";
let r;
var i;
let {
  createElement,
  createContext,
  createRef,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} = i || (i = require.t(o, 2));
let v = (i || (i = require.t(o, 2)))[`useId${Math.random()}`.slice(0, 5)];
let y = createContext(null);
y.displayName = "PanelGroupContext";
let C = "function" == typeof v ? v : () => null;
let b = 0;
function w(e = null) {
  let t = C();
  let n = useRef(e || t || null);
  null === n.current && (n.current = "" + b++);
  return null != e ? e : n.current;
}
function E({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: i,
  forwardedRef: o,
  id: s,
  maxSize: l,
  minSize: u,
  onCollapse: c,
  onExpand: h,
  onResize: g,
  order: _,
  style: v,
  tagName: C = "div",
  ...b
}) {
  let E = useContext(y);
  if (null === E) throw Error("Panel components must be rendered within a PanelGroup container");
  let {
    collapsePanel,
    expandPanel,
    getPanelSize,
    getPanelStyle,
    groupId,
    isPanelCollapsed,
    reevaluatePanelConstraints,
    registerPanel,
    resizePanel,
    unregisterPanel
  } = E;
  let P = w(s);
  let D = useRef({
    callbacks: {
      onCollapse: c,
      onExpand: h,
      onResize: g
    },
    constraints: {
      collapsedSize: n,
      collapsible: r,
      defaultSize: i,
      maxSize: l,
      minSize: u
    },
    id: P,
    idIsFromProps: void 0 !== s,
    order: _
  });
  useRef({
    didLogMissingDefaultSizeWarning: !1
  });
  useLayoutEffect(() => {
    let {
      callbacks,
      constraints
    } = D.current;
    let o = {
      ...constraints
    };
    D.current.id = P;
    D.current.idIsFromProps = void 0 !== s;
    D.current.order = _;
    callbacks.onCollapse = c;
    callbacks.onExpand = h;
    callbacks.onResize = g;
    constraints.collapsedSize = n;
    constraints.collapsible = r;
    constraints.defaultSize = i;
    constraints.maxSize = l;
    constraints.minSize = u;
    (o.collapsedSize !== constraints.collapsedSize || o.collapsible !== constraints.collapsible || o.maxSize !== constraints.maxSize || o.minSize !== constraints.minSize) && reevaluatePanelConstraints(D.current, o);
  });
  useLayoutEffect(() => {
    let e = D.current;
    registerPanel(e);
    return () => {
      unregisterPanel(e);
    };
  }, [_, P, registerPanel, unregisterPanel]);
  useImperativeHandle(o, () => ({
    collapse: () => {
      collapsePanel(D.current);
    },
    expand: e => {
      expandPanel(D.current, e);
    },
    getId: () => P,
    getSize: () => getPanelSize(D.current),
    isCollapsed: () => isPanelCollapsed(D.current),
    isExpanded: () => !isPanelCollapsed(D.current),
    resize: e => {
      resizePanel(D.current, e);
    }
  }), [collapsePanel, expandPanel, getPanelSize, isPanelCollapsed, P, resizePanel]);
  let T = getPanelStyle(D.current, i);
  return createElement(C, {
    ...b,
    children: e,
    className: t,
    id: s,
    style: {
      ...T,
      ...v
    },
    "data-panel": "",
    "data-panel-collapsible": r || void 0,
    "data-panel-group-id": groupId,
    "data-panel-id": P,
    "data-panel-size": parseFloat("" + T.flexGrow).toFixed(1)
  });
}
export let $$S2 = forwardRef((e, t) => createElement(E, {
  ...e,
  forwardedRef: t
}));
E.displayName = "Panel";
$$S2.displayName = "forwardRef(Panel)";
let A = null;
let L = null;
function R(e, t) {
  let n = function (e, t) {
    if (t) {
      let e = (t & N) != 0;
      let n = (t & F) != 0;
      let r = (t & j) != 0;
      let i = (t & $) != 0;
      if (e) return r ? "se-resize" : i ? "ne-resize" : "e-resize";
      if (n) return r ? "sw-resize" : i ? "nw-resize" : "w-resize";
      if (r) return "s-resize";
      if (i) return "n-resize";
    }
    switch (e) {
      case "horizontal":
        return "ew-resize";
      case "intersection":
        return "move";
      case "vertical":
        return "ns-resize";
    }
  }(e, t);
  A !== n && (A = n, null === L && (L = document.createElement("style"), r && L.setAttribute("nonce", r), document.head.appendChild(L)), L.innerHTML = `*{cursor: ${n}!important;}`);
}
function k(e) {
  return "keydown" === e.type;
}
function x(e) {
  return e.type.startsWith("pointer");
}
function O(e) {
  return e.type.startsWith("mouse");
}
function M(e) {
  if (x(e)) {
    if (e.isPrimary) return {
      x: e.clientX,
      y: e.clientY
    };
  } else if (O(e)) return {
    x: e.clientX,
    y: e.clientY
  };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
let I = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function z(e) {
  let t = e.length;
  for (; t--;) {
    let n = e[t];
    if (ee(n, "Missing node"), function (e) {
      let t = getComputedStyle(e);
      return !!("fixed" === t.position || "auto" !== t.zIndex && ("static" !== t.position || function (e) {
        var t;
        let n = getComputedStyle(null !== (t = T(e)) && void 0 !== t ? t : e).display;
        return "flex" === n || "inline-flex" === n;
      }(e)) || 1 > +t.opacity || "transform" in t && "none" !== t.transform || "webkitTransform" in t && "none" !== t.webkitTransform || "mixBlendMode" in t && "normal" !== t.mixBlendMode || "filter" in t && "none" !== t.filter || "webkitFilter" in t && "none" !== t.webkitFilter || "isolation" in t && "isolate" === t.isolation || I.test(t.willChange)) || "touch" === t.webkitOverflowScrolling;
    }(n)) return n;
  }
  return null;
}
function P(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function D(e) {
  let t = [];
  for (; e;) {
    t.push(e);
    e = T(e);
  }
  return t;
}
function T(e) {
  let {
    parentNode
  } = e;
  return parentNode && parentNode instanceof ShadowRoot ? parentNode.host : parentNode;
}
let N = 1;
let F = 2;
let j = 4;
let $ = 8;
let U = "coarse" === function () {
  if ("function" == typeof matchMedia) return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}();
let B = [];
let G = !1;
let W = new Map();
let q = new Map();
let H = new Set();
function K(e) {
  let {
    target
  } = e;
  let {
    x,
    y
  } = M(e);
  G = !0;
  V({
    target,
    x,
    y
  });
  Z();
  B.length > 0 && (X("down", e), e.preventDefault(), e.stopPropagation());
}
function J(e) {
  let {
    x,
    y
  } = M(e);
  if (G && 0 === e.buttons && (G = !1, X("up", e)), !G) {
    let {
      target
    } = e;
    V({
      target,
      x,
      y
    });
  }
  X("move", e);
  Y();
  B.length > 0 && e.preventDefault();
}
function Q(e) {
  let {
    target
  } = e;
  let {
    x,
    y
  } = M(e);
  q.clear();
  G = !1;
  B.length > 0 && e.preventDefault();
  X("up", e);
  V({
    target,
    x,
    y
  });
  Y();
  Z();
}
function V({
  target: e,
  x: t,
  y: n
}) {
  B.splice(0);
  let r = null;
  (e instanceof HTMLElement || e instanceof SVGElement) && (r = e);
  H.forEach(e => {
    let {
      element,
      hitAreaMargins
    } = e;
    let a = element.getBoundingClientRect();
    let {
      bottom,
      left,
      right,
      top
    } = a;
    let d = U ? hitAreaMargins.coarse : hitAreaMargins.fine;
    if (t >= left - d && t <= right + d && n >= top - d && n <= bottom + d) {
      if (null !== r && document.contains(r) && element !== r && !element.contains(r) && !r.contains(element) && function (e, t) {
        let n;
        if (e === t) throw Error("Cannot compare node with itself");
        let r = {
          a: D(e),
          b: D(t)
        };
        for (; r.a.at(-1) === r.b.at(-1);) {
          e = r.a.pop();
          t = r.b.pop();
          n = e;
        }
        ee(n, "Stacking order can only be calculated for elements with a common ancestor");
        let i = {
          a: P(z(r.a)),
          b: P(z(r.b))
        };
        if (i.a === i.b) {
          let e = n.childNodes;
          let t = {
            a: r.a.at(-1),
            b: r.b.at(-1)
          };
          let i = e.length;
          for (; i--;) {
            let n = e[i];
            if (n === t.a) return 1;
            if (n === t.b) return -1;
          }
        }
        return Math.sign(i.a - i.b);
      }(r, element) > 0) {
        let e = r;
        let t = !1;
        for (; e && !e.contains(element);) {
          var h;
          if ((h = e.getBoundingClientRect()).x < a.x + a.width && h.x + h.width > a.x && h.y < a.y + a.height && h.y + h.height > a.y) {
            t = !0;
            break;
          }
          e = e.parentElement;
        }
        if (t) return;
      }
      B.push(e);
    }
  });
}
function Y() {
  let e = !1;
  let t = !1;
  B.forEach(n => {
    let {
      direction
    } = n;
    "horizontal" === direction ? e = !0 : t = !0;
  });
  let n = 0;
  q.forEach(e => {
    n |= e;
  });
  e && t ? R("intersection", n) : e ? R("horizontal", n) : t ? R("vertical", n) : null !== L && (document.head.removeChild(L), A = null, L = null);
}
function Z() {
  W.forEach((e, t) => {
    let {
      body
    } = t;
    body.removeEventListener("contextmenu", Q);
    body.removeEventListener("pointerdown", K);
    body.removeEventListener("pointerleave", J);
    body.removeEventListener("pointermove", J);
  });
  window.removeEventListener("pointerup", Q);
  window.removeEventListener("pointercancel", Q);
  H.size > 0 && (G ? (B.length > 0 && W.forEach((e, t) => {
    let {
      body
    } = t;
    e > 0 && (body.addEventListener("contextmenu", Q), body.addEventListener("pointerleave", J), body.addEventListener("pointermove", J));
  }), window.addEventListener("pointerup", Q), window.addEventListener("pointercancel", Q)) : W.forEach((e, t) => {
    let {
      body
    } = t;
    e > 0 && (body.addEventListener("pointerdown", K, {
      capture: !0
    }), body.addEventListener("pointermove", J));
  }));
}
function X(e, t) {
  H.forEach(n => {
    let {
      setResizeHandlerState
    } = n;
    setResizeHandlerState(e, B.includes(n), t);
  });
}
function ee(e, t) {
  if (!e) {
    console.error(t);
    return Error(t);
  }
}
function et(e, t, n = 10) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function en(e, t, n = 10) {
  return 0 === et(e, t, n);
}
function er(e, t, n) {
  return 0 === et(e, t, n);
}
function ei({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  let r = e[t];
  ee(null != r, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize = 0,
    collapsible,
    maxSize = 100,
    minSize = 0
  } = r;
  0 > et(n, minSize) && (n = collapsible && 0 > et(n, (collapsedSize + minSize) / 2) ? collapsedSize : minSize);
  return n = parseFloat((n = Math.min(maxSize, n)).toFixed(10));
}
function eo({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: i,
  trigger: o
}) {
  if (er(e, 0)) return t;
  let a = [...t];
  let [s, l] = r;
  ee(null != s, "Invalid first pivot index");
  ee(null != l, "Invalid second pivot index");
  let u = 0;
  if ("keyboard" === o) {
    {
      let r = e < 0 ? l : s;
      let i = n[r];
      ee(i, `Panel constraints not found for index ${r}`);
      let {
        collapsedSize = 0,
        collapsible,
        minSize = 0
      } = i;
      if (collapsible) {
        let n = t[r];
        if (ee(null != n, `Previous layout not found for panel index ${r}`), er(n, collapsedSize)) {
          let t = minSize - n;
          et(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
        }
      }
    }
    {
      let r = e < 0 ? s : l;
      let i = n[r];
      ee(i, `No panel constraints found for index ${r}`);
      let {
        collapsedSize = 0,
        collapsible,
        minSize = 0
      } = i;
      if (collapsible) {
        let n = t[r];
        if (ee(null != n, `Previous layout not found for panel index ${r}`), er(n, minSize)) {
          let t = n - collapsedSize;
          et(t, Math.abs(e)) > 0 && (e = e < 0 ? 0 - t : t);
        }
      }
    }
  }
  {
    let r = e < 0 ? 1 : -1;
    let i = e < 0 ? l : s;
    let o = 0;
    for (;;) {
      let e = t[i];
      if (ee(null != e, `Previous layout not found for panel index ${i}`), o += ei({
        panelConstraints: n,
        panelIndex: i,
        size: 100
      }) - e, (i += r) < 0 || i >= n.length) break;
    }
    let a = Math.min(Math.abs(e), Math.abs(o));
    e = e < 0 ? 0 - a : a;
  }
  {
    let r = e < 0 ? s : l;
    for (; r >= 0 && r < n.length;) {
      let i = Math.abs(e) - Math.abs(u);
      let o = t[r];
      ee(null != o, `Previous layout not found for panel index ${r}`);
      let s = ei({
        panelConstraints: n,
        panelIndex: r,
        size: o - i
      });
      if (!er(o, s) && (u += o - s, a[r] = s, u.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0)) break;
      e < 0 ? r-- : r++;
    }
  }
  if (function (e, t, n) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!er(e[n], t[n], void 0)) return !1;
    return !0;
  }(i, a)) return i;
  {
    let r = e < 0 ? l : s;
    let i = t[r];
    ee(null != i, `Previous layout not found for panel index ${r}`);
    let o = i + u;
    let c = ei({
      panelConstraints: n,
      panelIndex: r,
      size: o
    });
    if (a[r] = c, !er(c, o)) {
      let t = o - c;
      let r = e < 0 ? l : s;
      for (; r >= 0 && r < n.length;) {
        let i = a[r];
        ee(null != i, `Previous layout not found for panel index ${r}`);
        let o = ei({
          panelConstraints: n,
          panelIndex: r,
          size: i + t
        });
        if (er(i, o) || (t -= o - i, a[r] = o), er(t, 0)) break;
        e > 0 ? r-- : r++;
      }
    }
  }
  return er(a.reduce((e, t) => t + e, 0), 100) ? a : i;
}
function ea(e, t = document) {
  return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`));
}
function es(e, t, n = document) {
  let r = ea(e, n).findIndex(e => e.getAttribute("data-panel-resize-handle-id") === t);
  return null != r ? r : null;
}
function el(e, t, n) {
  let r = es(e, t, n);
  return null != r ? [r, r + 1] : [-1, -1];
}
function eu(e, t = document) {
  var n;
  return t instanceof HTMLElement && t?.dataset?.panelGroupId == e ? t : t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`) || null;
}
function ec(e, t = document) {
  return t.querySelector(`[data-panel-resize-handle-id="${e}"]`) || null;
}
function ed(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function eh(e, t) {
  let {
    x,
    y
  } = M(t);
  return "horizontal" === e ? x : y;
}
function ef(e, t, n) {
  t.forEach((t, r) => {
    let i = e[r];
    ee(i, `Panel data not found for index ${r}`);
    let {
      callbacks,
      constraints,
      id
    } = i;
    let {
      collapsedSize = 0,
      collapsible
    } = a;
    let c = n[id];
    if (null == c || t !== c) {
      n[id] = t;
      let {
        onCollapse,
        onExpand,
        onResize
      } = callbacks;
      onResize && onResize(t, c);
      collapsible && (onCollapse || onExpand) && (onExpand && (null == c || en(c, collapsedSize)) && !en(t, collapsedSize) && onExpand(), onCollapse && (null == c || !en(c, collapsedSize)) && en(t, collapsedSize) && onCollapse());
    }
  });
}
function ep(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] != t[n]) return !1;
  return !0;
}
function eg(e) {
  try {
    if ("undefined" != typeof localStorage) {
      e.getItem = e => localStorage.getItem(e);
      e.setItem = (e, t) => {
        localStorage.setItem(e, t);
      };
    } else throw Error("localStorage not supported in this environment");
  } catch (t) {
    console.error(t);
    e.getItem = () => null;
    e.setItem = () => {};
  }
}
function em(e) {
  return `react-resizable-panels:${e}`;
}
function e_(e) {
  return e.map(e => {
    let {
      constraints,
      id,
      idIsFromProps,
      order
    } = e;
    return idIsFromProps ? id : order ? `${order}:${JSON.stringify(constraints)}` : JSON.stringify(constraints);
  }).sort((e, t) => e.localeCompare(t)).join(",");
}
function ev(e, t) {
  try {
    let n = em(e);
    let r = t.getItem(n);
    if (r) {
      let e = JSON.parse(r);
      if ("object" == typeof e && null != e) return e;
    }
  } catch (e) {}
  return null;
}
function ey(e, t, n, r, i) {
  var o;
  let a = em(e);
  let s = e_(t);
  let l = null !== (o = ev(e, i)) && void 0 !== o ? o : {};
  l[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    i.setItem(a, JSON.stringify(l));
  } catch (e) {
    console.error(e);
  }
}
function eC({
  layout: e,
  panelConstraints: t
}) {
  let n = [...e];
  let r = n.reduce((e, t) => e + t, 0);
  if (n.length !== t.length) throw Error(`Invalid ${t.length} panel layout: ${n.map(e => `${e}%`).join(", ")}`);
  if (!er(r, 100) && n.length > 0) for (let e = 0; e < t.length; e++) {
    let t = n[e];
    ee(null != t, `No layout data found for index ${e}`);
    let i = 100 / r * t;
    n[e] = i;
  }
  let i = 0;
  for (let e = 0; e < t.length; e++) {
    let r = n[e];
    ee(null != r, `No layout data found for index ${e}`);
    let o = ei({
      panelConstraints: t,
      panelIndex: e,
      size: r
    });
    r != o && (i += r - o, n[e] = o);
  }
  if (!er(i, 0)) for (let e = 0; e < t.length; e++) {
    let r = n[e];
    ee(null != r, `No layout data found for index ${e}`);
    let o = ei({
      panelConstraints: t,
      panelIndex: e,
      size: r + i
    });
    if (r !== o && (i -= o - r, n[e] = o, er(i, 0))) break;
  }
  return n;
}
let eb = {
  getItem: e => (eg(eb), eb.getItem(e)),
  setItem: (e, t) => {
    eg(eb);
    eb.setItem(e, t);
  }
};
let ew = {};
function eE({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: i,
  id: o = null,
  onLayout: s = null,
  keyboardResizeBy: l = null,
  storage: u = eb,
  style: d,
  tagName: v = "div",
  ...C
}) {
  let b = w(o);
  let E = useRef(null);
  let [S, A] = useState(null);
  let [L, R] = useState([]);
  let M = function () {
    let [e, t] = useState(0);
    return useCallback(() => t(e => e + 1), []);
  }();
  let I = useRef({});
  let z = useRef(new Map());
  let P = useRef(0);
  let D = useRef({
    autoSaveId: e,
    direction: r,
    dragState: S,
    id: b,
    keyboardResizeBy: l,
    onLayout: s,
    storage: u
  });
  let T = useRef({
    layout: L,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  useRef({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  });
  useImperativeHandle(i, () => ({
    getId: () => D.current.id,
    getLayout: () => {
      let {
        layout
      } = T.current;
      return layout;
    },
    setLayout: e => {
      let {
        onLayout
      } = D.current;
      let {
        layout,
        panelDataArray
      } = T.current;
      let i = eC({
        layout: e,
        panelConstraints: panelDataArray.map(e => e.constraints)
      });
      ed(layout, i) || (R(i), T.current.layout = i, onLayout && onLayout(i), ef(panelDataArray, i, I.current));
    }
  }), []);
  useLayoutEffect(() => {
    D.current.autoSaveId = e;
    D.current.direction = r;
    D.current.dragState = S;
    D.current.id = b;
    D.current.onLayout = s;
    D.current.storage = u;
  });
  (function ({
    committedValuesRef: e,
    eagerValuesRef: t,
    groupId: n,
    layout: r,
    panelDataArray: i,
    panelGroupElement: o,
    setLayout: a
  }) {
    useRef({
      didWarnAboutMissingResizeHandle: !1
    });
    useLayoutEffect(() => {
      if (!o) return;
      let e = ea(n, o);
      for (let t = 0; t < i.length - 1; t++) {
        let {
          valueMax,
          valueMin,
          valueNow
        } = function ({
          layout: e,
          panelsArray: t,
          pivotIndices: n
        }) {
          let r = 0;
          let i = 100;
          let o = 0;
          let a = 0;
          let s = n[0];
          ee(null != s, "No pivot index found");
          t.forEach((e, t) => {
            let {
              constraints
            } = e;
            let {
              maxSize = 100,
              minSize = 0
            } = n;
            t === s ? (r = minSize, i = maxSize) : (o += minSize, a += maxSize);
          });
          return {
            valueMax: Math.min(i, 100 - o),
            valueMin: Math.max(r, 100 - a),
            valueNow: e[s]
          };
        }({
          layout: r,
          panelsArray: i,
          pivotIndices: [t, t + 1]
        });
        let s = e[t];
        if (null == s) ;else {
          let e = i[t];
          ee(e, `No panel data found for index "${t}"`);
          s.setAttribute("aria-controls", e.id);
          s.setAttribute("aria-valuemax", "" + Math.round(valueMax));
          s.setAttribute("aria-valuemin", "" + Math.round(valueMin));
          s.setAttribute("aria-valuenow", null != valueNow ? "" + Math.round(valueNow) : "");
        }
      }
      return () => {
        e.forEach((e, t) => {
          e.removeAttribute("aria-controls");
          e.removeAttribute("aria-valuemax");
          e.removeAttribute("aria-valuemin");
          e.removeAttribute("aria-valuenow");
        });
      };
    }, [n, r, i, o]);
    useEffect(() => {
      if (!o) return;
      let e = t.current;
      ee(e, "Eager values not found");
      let {
        panelDataArray
      } = e;
      ee(null != eu(n, o), `No group found for id "${n}"`);
      let s = ea(n, o);
      ee(s, `No resize handles found for group id "${n}"`);
      let l = s.map(e => {
        let t = e.getAttribute("data-panel-resize-handle-id");
        ee(t, "Resize handle element has no handle id attribute");
        let [s, l] = function (e, t, n, r = document) {
          var i;
          var o;
          var a;
          var s;
          let l = ec(t, r);
          let u = ea(e, r);
          let c = l ? u.indexOf(l) : -1;
          return [null !== (i = n[c]?.id) && void 0 !== i ? i : null, null !== (a = n[c + 1]?.id) && void 0 !== a ? a : null];
        }(n, t, panelDataArray, o);
        if (null == s || null == l) return () => {};
        let u = e => {
          if (!e.defaultPrevented && "Enter" === e.key) {
            e.preventDefault();
            let l = panelDataArray.findIndex(e => e.id === s);
            if (l >= 0) {
              let e = panelDataArray[l];
              ee(e, `No panel data found for index ${l}`);
              let s = r[l];
              let {
                collapsedSize = 0,
                collapsible,
                minSize = 0
              } = e.constraints;
              if (null != s && collapsible) {
                let e = eo({
                  delta: er(s, collapsedSize) ? minSize - collapsedSize : collapsedSize - s,
                  initialLayout: r,
                  panelConstraints: panelDataArray.map(e => e.constraints),
                  pivotIndices: el(n, t, o),
                  prevLayout: r,
                  trigger: "keyboard"
                });
                r !== e && a(e);
              }
            }
          }
        };
        e.addEventListener("keydown", u);
        return () => {
          e.removeEventListener("keydown", u);
        };
      });
      return () => {
        l.forEach(e => e());
      };
    }, [o, e, t, n, r, i, a]);
  })({
    committedValuesRef: D,
    eagerValuesRef: T,
    groupId: b,
    layout: L,
    panelDataArray: T.current.panelDataArray,
    setLayout: R,
    panelGroupElement: E.current
  });
  useEffect(() => {
    let {
      panelDataArray
    } = T.current;
    if (e) {
      if (0 === L.length || L.length !== panelDataArray.length) return;
      let n = ew[e];
      null == n && (n = function (e, t = 10) {
        let n = null;
        return (...r) => {
          null !== n && clearTimeout(n);
          n = setTimeout(() => {
            e(...r);
          }, t);
        };
      }(ey, 100), ew[e] = n);
      n(e, [...panelDataArray], new Map(z.current), L, u);
    }
  }, [e, L, u]);
  useEffect(() => {});
  let U = useCallback(e => {
    let {
      onLayout
    } = D.current;
    let {
      layout,
      panelDataArray
    } = T.current;
    if (e.constraints.collapsible) {
      let i = panelDataArray.map(e => e.constraints);
      let {
        collapsedSize = 0,
        panelSize,
        pivotIndices
      } = eL(panelDataArray, e, layout);
      if (ee(null != panelSize, `Panel size not found for panel "${e.id}"`), !en(panelSize, collapsedSize)) {
        z.current.set(e.id, panelSize);
        let l = eo({
          delta: eA(panelDataArray, e) === panelDataArray.length - 1 ? panelSize - collapsedSize : collapsedSize - panelSize,
          initialLayout: layout,
          panelConstraints: i,
          pivotIndices,
          prevLayout: layout,
          trigger: "imperative-api"
        });
        ep(layout, l) || (R(l), T.current.layout = l, onLayout && onLayout(l), ef(panelDataArray, l, I.current));
      }
    }
  }, []);
  let B = useCallback((e, t) => {
    let {
      onLayout
    } = D.current;
    let {
      layout,
      panelDataArray
    } = T.current;
    if (e.constraints.collapsible) {
      let o = panelDataArray.map(e => e.constraints);
      let {
        collapsedSize = 0,
        panelSize = 0,
        minSize = 0,
        pivotIndices
      } = eL(panelDataArray, e, layout);
      let c = null != t ? t : minSize;
      if (en(panelSize, collapsedSize)) {
        let t = z.current.get(e.id);
        let a = null != t && t >= c ? t : c;
        let l = eo({
          delta: eA(panelDataArray, e) === panelDataArray.length - 1 ? panelSize - a : a - panelSize,
          initialLayout: layout,
          panelConstraints: o,
          pivotIndices,
          prevLayout: layout,
          trigger: "imperative-api"
        });
        ep(layout, l) || (R(l), T.current.layout = l, onLayout && onLayout(l), ef(panelDataArray, l, I.current));
      }
    }
  }, []);
  let G = useCallback(e => {
    let {
      layout,
      panelDataArray
    } = T.current;
    let {
      panelSize
    } = eL(panelDataArray, e, layout);
    ee(null != panelSize, `Panel size not found for panel "${e.id}"`);
    return panelSize;
  }, []);
  let W = useCallback((e, t) => {
    let {
      panelDataArray
    } = T.current;
    let r = eA(panelDataArray, e);
    return function ({
      defaultSize: e,
      dragState: t,
      layout: n,
      panelData: r,
      panelIndex: i,
      precision: o = 3
    }) {
      let a = n[i];
      return {
        flexBasis: 0,
        flexGrow: null == a ? void 0 != e ? e.toPrecision(o) : "1" : 1 === r.length ? "1" : a.toPrecision(o),
        flexShrink: 1,
        overflow: "hidden",
        pointerEvents: null !== t ? "none" : void 0
      };
    }({
      defaultSize: t,
      dragState: S,
      layout: L,
      panelData: panelDataArray,
      panelIndex: r
    });
  }, [S, L]);
  let H = useCallback(e => {
    let {
      layout,
      panelDataArray
    } = T.current;
    let {
      collapsedSize = 0,
      collapsible,
      panelSize
    } = eL(panelDataArray, e, layout);
    ee(null != panelSize, `Panel size not found for panel "${e.id}"`);
    return !0 === collapsible && en(panelSize, collapsedSize);
  }, []);
  let K = useCallback(e => {
    let {
      layout,
      panelDataArray
    } = T.current;
    let {
      collapsedSize = 0,
      collapsible,
      panelSize
    } = eL(panelDataArray, e, layout);
    ee(null != panelSize, `Panel size not found for panel "${e.id}"`);
    return !collapsible || et(panelSize, collapsedSize) > 0;
  }, []);
  let J = useCallback(e => {
    let {
      panelDataArray
    } = T.current;
    panelDataArray.push(e);
    panelDataArray.sort((e, t) => {
      let n = e.order;
      let r = t.order;
      return null == n && null == r ? 0 : null == n ? -1 : null == r ? 1 : n - r;
    });
    T.current.panelDataArrayChanged = !0;
    M();
  }, [M]);
  useLayoutEffect(() => {
    if (T.current.panelDataArrayChanged) {
      T.current.panelDataArrayChanged = !1;
      let {
        autoSaveId,
        onLayout,
        storage
      } = D.current;
      let {
        layout,
        panelDataArray
      } = T.current;
      let s = null;
      if (autoSaveId) {
        var e;
        var t;
        let r = null !== (t = (null !== (e = ev(autoSaveId, storage)) && void 0 !== e ? e : {})[e_(panelDataArray)]) && void 0 !== t ? t : null;
        r && (z.current = new Map(Object.entries(r.expandToSizes)), s = r.layout);
      }
      null == s && (s = function ({
        panelDataArray: e
      }) {
        let t = Array(e.length);
        let n = e.map(e => e.constraints);
        let r = 0;
        let i = 100;
        for (let o = 0; o < e.length; o++) {
          let e = n[o];
          ee(e, `Panel constraints not found for index ${o}`);
          let {
            defaultSize
          } = e;
          null != defaultSize && (r++, t[o] = defaultSize, i -= defaultSize);
        }
        for (let o = 0; o < e.length; o++) {
          let a = n[o];
          ee(a, `Panel constraints not found for index ${o}`);
          let {
            defaultSize
          } = a;
          if (null != defaultSize) continue;
          let l = i / (e.length - r);
          r++;
          t[o] = l;
          i -= l;
        }
        return t;
      }({
        panelDataArray
      }));
      let l = eC({
        layout: s,
        panelConstraints: panelDataArray.map(e => e.constraints)
      });
      ed(layout, l) || (R(l), T.current.layout = l, onLayout && onLayout(l), ef(panelDataArray, l, I.current));
    }
  });
  useLayoutEffect(() => {
    let e = T.current;
    return () => {
      e.layout = [];
    };
  }, []);
  let Q = useCallback(e => {
    let t = !1;
    let n = E.current;
    n && "rtl" === window.getComputedStyle(n, null).getPropertyValue("direction") && (t = !0);
    return function (n) {
      n.preventDefault();
      let r = E.current;
      if (!r) return () => null;
      let {
        direction,
        dragState,
        id,
        keyboardResizeBy,
        onLayout
      } = D.current;
      let {
        layout,
        panelDataArray
      } = T.current;
      let {
        initialLayout
      } = null != dragState ? dragState : {};
      let h = el(id, e, r);
      let f = function (e, t, n, r, i, o) {
        if (k(e)) {
          let t = "horizontal" === n;
          let r = 0;
          r = e.shiftKey ? 100 : null != i ? i : 10;
          let o = 0;
          switch (e.key) {
            case "ArrowDown":
              o = t ? 0 : r;
              break;
            case "ArrowLeft":
              o = t ? -r : 0;
              break;
            case "ArrowRight":
              o = t ? r : 0;
              break;
            case "ArrowUp":
              o = t ? 0 : -r;
              break;
            case "End":
              o = 100;
              break;
            case "Home":
              o = -100;
          }
          return o;
        }
        return null == r ? 0 : function (e, t, n, r, i) {
          let o = "horizontal" === n;
          let a = ec(t, i);
          ee(a, `No resize handle element found for id "${t}"`);
          let s = a.getAttribute("data-panel-group-id");
          ee(s, "Resize handle element has no group id attribute");
          let {
            initialCursorPosition
          } = r;
          let u = eh(n, e);
          let c = eu(s, i);
          ee(c, `No group element found for id "${s}"`);
          let d = c.getBoundingClientRect();
          return (u - initialCursorPosition) / (o ? d.width : d.height) * 100;
        }(e, t, n, r, o);
      }(n, e, direction, dragState, keyboardResizeBy, r);
      let p = "horizontal" === direction;
      p && t && (f = -f);
      let g = eo({
        delta: f,
        initialLayout: null != initialLayout ? initialLayout : layout,
        panelConstraints: panelDataArray.map(e => e.constraints),
        pivotIndices: h,
        prevLayout: layout,
        trigger: k(n) ? "keyboard" : "mouse-or-touch"
      });
      let m = !ep(layout, g);
      if ((x(n) || O(n)) && P.current != f) {
        var _;
        var v;
        (P.current = f, m || 0 === f) ? q.set(e, 0) : p ? (_ = f < 0 ? N : F, q.set(e, _)) : (v = f < 0 ? j : $, q.set(e, v));
      }
      m && (R(g), T.current.layout = g, onLayout && onLayout(g), ef(panelDataArray, g, I.current));
    };
  }, []);
  let V = useCallback((e, t) => {
    let {
      onLayout
    } = D.current;
    let {
      layout,
      panelDataArray
    } = T.current;
    let o = panelDataArray.map(e => e.constraints);
    let {
      panelSize,
      pivotIndices
    } = eL(panelDataArray, e, layout);
    ee(null != panelSize, `Panel size not found for panel "${e.id}"`);
    let l = eo({
      delta: eA(panelDataArray, e) === panelDataArray.length - 1 ? panelSize - t : t - panelSize,
      initialLayout: layout,
      panelConstraints: o,
      pivotIndices,
      prevLayout: layout,
      trigger: "imperative-api"
    });
    ep(layout, l) || (R(l), T.current.layout = l, onLayout && onLayout(l), ef(panelDataArray, l, I.current));
  }, []);
  let Y = useCallback((e, t) => {
    let {
      layout,
      panelDataArray
    } = T.current;
    let {
      collapsedSize = 0,
      collapsible
    } = t;
    let {
      collapsedSize: _collapsedSize = 0,
      collapsible: _collapsible,
      maxSize = 100,
      minSize = 0
    } = e.constraints;
    let {
      panelSize
    } = eL(panelDataArray, e, layout);
    null != panelSize && (collapsible && _collapsible && en(panelSize, collapsedSize) ? en(collapsedSize, _collapsedSize) || V(e, _collapsedSize) : panelSize < minSize ? V(e, minSize) : panelSize > maxSize && V(e, maxSize));
  }, [V]);
  let Z = useCallback((e, t) => {
    let {
      direction
    } = D.current;
    let {
      layout
    } = T.current;
    if (!E.current) return;
    let i = ec(e, E.current);
    ee(i, `Drag handle element not found for id "${e}"`);
    let o = eh(direction, t);
    A({
      dragHandleId: e,
      dragHandleRect: i.getBoundingClientRect(),
      initialCursorPosition: o,
      initialLayout: layout
    });
  }, []);
  let X = useCallback(() => {
    A(null);
  }, []);
  let ei = useCallback(e => {
    let {
      panelDataArray
    } = T.current;
    let n = eA(panelDataArray, e);
    n >= 0 && (panelDataArray.splice(n, 1), delete I.current[e.id], T.current.panelDataArrayChanged = !0, M());
  }, [M]);
  let es = useMemo(() => ({
    collapsePanel: U,
    direction: r,
    dragState: S,
    expandPanel: B,
    getPanelSize: G,
    getPanelStyle: W,
    groupId: b,
    isPanelCollapsed: H,
    isPanelExpanded: K,
    reevaluatePanelConstraints: Y,
    registerPanel: J,
    registerResizeHandle: Q,
    resizePanel: V,
    startDragging: Z,
    stopDragging: X,
    unregisterPanel: ei,
    panelGroupElement: E.current
  }), [U, S, r, B, G, W, b, H, K, Y, J, Q, V, Z, X, ei]);
  return createElement(y.Provider, {
    value: es
  }, createElement(v, {
    ...C,
    children: t,
    className: n,
    id: o,
    ref: E,
    style: {
      display: "flex",
      flexDirection: "horizontal" === r ? "row" : "column",
      height: "100%",
      overflow: "hidden",
      width: "100%",
      ...d
    },
    "data-panel-group": "",
    "data-panel-group-direction": r,
    "data-panel-group-id": b
  }));
}
export let $$eS1 = forwardRef((e, t) => createElement(eE, {
  ...e,
  forwardedRef: t
}));
function eA(e, t) {
  return e.findIndex(e => e === t || e.id === t.id);
}
function eL(e, t, n) {
  let r = eA(e, t);
  let i = r === e.length - 1;
  let o = n[r];
  return {
    ...t.constraints,
    panelSize: o,
    pivotIndices: i ? [r - 1, r] : [r, r + 1]
  };
}
export function $$eR0({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: i,
  onBlur: o,
  onDragging: s,
  onFocus: l,
  style: u = {},
  tabIndex: c = 0,
  tagName: f = "div",
  ...g
}) {
  var v;
  var C;
  let b = useRef(null);
  let E = useRef({
    onDragging: s
  });
  useEffect(() => {
    E.current.onDragging = s;
  });
  let S = useContext(y);
  if (null === S) throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  let {
    direction,
    groupId,
    registerResizeHandle,
    startDragging,
    stopDragging,
    panelGroupElement
  } = S;
  let M = w(i);
  let [I, z] = useState("inactive");
  let [P, D] = useState(!1);
  let [T, N] = useState(null);
  let F = useRef({
    state: I
  });
  useLayoutEffect(() => {
    F.current.state = I;
  });
  useEffect(() => {
    if (n) N(null);else {
      let e = registerResizeHandle(M);
      N(() => e);
    }
  }, [n, M, registerResizeHandle]);
  let j = null !== (v = r?.coarse) && void 0 !== v ? v : 15;
  let $ = null !== (C = r?.fine) && void 0 !== C ? C : 5;
  useEffect(() => {
    if (n || null == T) return;
    let e = b.current;
    ee(e, "Element ref not attached");
    return function (e, t, n, r, i) {
      var o;
      let {
        ownerDocument
      } = t;
      let s = {
        direction: n,
        element: t,
        hitAreaMargins: r,
        setResizeHandlerState: i
      };
      let l = null !== (o = W.get(ownerDocument)) && void 0 !== o ? o : 0;
      W.set(ownerDocument, l + 1);
      H.add(s);
      Z();
      return function () {
        var t;
        q.$$delete(e);
        H.$$delete(s);
        let n = null !== (t = W.get(ownerDocument)) && void 0 !== t ? t : 1;
        if (W.set(ownerDocument, n - 1), Z(), 1 === n && W.$$delete(ownerDocument), B.includes(s)) {
          let e = B.indexOf(s);
          e >= 0 && B.splice(e, 1);
          Y();
          i("up", !0, null);
        }
      };
    }(M, e, direction, {
      coarse: j,
      fine: $
    }, (e, t, n) => {
      if (t) switch (e) {
        case "down":
          {
            z("drag");
            ee(n, 'Expected event to be defined for "down" action');
            startDragging(M, n);
            let {
              onDragging
            } = E.current;
            onDragging && onDragging(!0);
            break;
          }
        case "move":
          {
            let {
              state
            } = F.current;
            "drag" !== state && z("hover");
            ee(n, 'Expected event to be defined for "move" action');
            T(n);
            break;
          }
        case "up":
          {
            z("hover");
            stopDragging();
            let {
              onDragging
            } = E.current;
            onDragging && onDragging(!1);
          }
      } else z("inactive");
    });
  }, [j, direction, n, $, registerResizeHandle, M, T, startDragging, stopDragging]);
  !function ({
    disabled: e,
    handleId: t,
    resizeHandler: n,
    panelGroupElement: r
  }) {
    useEffect(() => {
      if (e || null == n || null == r) return;
      let i = ec(t, r);
      if (null == i) return;
      let o = e => {
        if (!e.defaultPrevented) switch (e.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home":
            e.preventDefault();
            n(e);
            break;
          case "F6":
            {
              e.preventDefault();
              let n = i.getAttribute("data-panel-group-id");
              ee(n, `No group element found for id "${n}"`);
              let o = ea(n, r);
              let a = es(n, t, r);
              ee(null !== a, `No resize element found for id "${t}"`);
              let s = e.shiftKey ? a > 0 ? a - 1 : o.length - 1 : a + 1 < o.length ? a + 1 : 0;
              o[s].focus();
            }
        }
      };
      i.addEventListener("keydown", o);
      return () => {
        i.removeEventListener("keydown", o);
      };
    }, [r, e, t, n]);
  }({
    disabled: n,
    handleId: M,
    resizeHandler: T,
    panelGroupElement
  });
  return createElement(f, {
    ...g,
    children: e,
    className: t,
    id: i,
    onBlur: () => {
      D(!1);
      o?.();
    },
    onFocus: () => {
      D(!0);
      l?.();
    },
    ref: b,
    role: "separator",
    style: {
      touchAction: "none",
      userSelect: "none",
      ...u
    },
    tabIndex: c,
    "data-panel-group-direction": direction,
    "data-panel-group-id": groupId,
    "data-resize-handle": "",
    "data-resize-handle-active": "drag" === I ? "pointer" : P ? "keyboard" : void 0,
    "data-resize-handle-state": I,
    "data-panel-resize-handle-enabled": !n,
    "data-panel-resize-handle-id": M
  });
}
eE.displayName = "PanelGroup";
$$eS1.displayName = "forwardRef(PanelGroup)";
$$eR0.displayName = "PanelResizeHandle";
export const TW = $$eR0;
export const YZ = $$eS1;
export const Zk = $$S2;