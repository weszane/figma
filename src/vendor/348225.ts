import { createContext, useContext, useRef, useEffect, useCallback, useMemo, Component, createElement, forwardRef } from "react";
import { Q as _$$Q } from "../vendor/408965";
import { t } from "../vendor/987444";
import { E as _$$E } from "../vendor/476615";
import { B as _$$B } from "../vendor/794981";
import { M as _$$M } from "../vendor/644572";
import { L as _$$L } from "../vendor/204524";
import { f, U as _$$U } from "../vendor/647631";
import { S as _$$S } from "../vendor/777323";
import { W as _$$W } from "../vendor/48930";
import { J as _$$J } from "../vendor/778607";
import { px, KN } from "../vendor/512366";
import { I as _$$I } from "../vendor/605155";
import { a as _$$a } from "../vendor/930286";
import { B as _$$B2 } from "../vendor/708026";
import { l } from "../vendor/177458";
import { F as _$$F } from "../vendor/696990";
import { xQ } from "../vendor/222851";
import { p as _$$p } from "../vendor/304103";
import { _0 } from "../vendor/271535";
import { K as _$$K } from "../vendor/873234";
import { V as _$$V } from "../vendor/524215";
import { OH, eO as _$$eO, qX } from "../vendor/537916";
import { f as _$$f } from "../vendor/87558";
import { u } from "../vendor/600452";
import { q as _$$q } from "../vendor/358723";
import { j as _$$j } from "../vendor/150960";
import { q as _$$q2 } from "../vendor/82231";
import { O as _$$O } from "../vendor/313656";
import { D as _$$D } from "../vendor/893648";
import { $z, TM } from "../vendor/187488";
import { n as _$$n } from "../vendor/572888";
import { ai } from "../vendor/459595";
import { v as _$$v } from "../vendor/347763";
import { O as _$$O2 } from "../vendor/122594";
import { k as _$$k } from "../vendor/549752";
import { f as _$$f2 } from "../vendor/615177";
import { i as _$$i } from "../vendor/753650";
import { yT } from "../vendor/807427";
import { l as _$$l } from "../vendor/155802";
import { rU as _$$rU } from "../vendor/47013";
import { Kq, Ai } from "../vendor/224885";
import { c } from "../vendor/937967";
var i;
var s;
let h = createContext({});
function d() {
  return useContext(h).visualElement;
}
let m = createContext({
  strict: !1
});
function v(e, r, n, i) {
  let s = d();
  let h = useContext(m);
  let v = useContext(t);
  let y = useContext(_$$Q).reducedMotion;
  let b = useRef();
  i = i || h.renderer;
  !b.current && i && (b.current = i(e, {
    visualState: r,
    parent: s,
    props: n,
    presenceId: v ? v.id : void 0,
    blockInitialAnimation: !!v && !1 === v.initial,
    reducedMotionConfig: y
  }));
  let O = b.current;
  _$$E(() => {
    O && O.render();
  });
  (window.HandoffAppearAnimations ? _$$E : useEffect)(() => {
    O && O.animationState && O.animationState.animateChanges();
  });
  return O;
}
function y(e) {
  return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current");
}
function b(e, r, n) {
  return useCallback(i => {
    i && e.mount && e.mount(i);
    r && (i ? r.mount(i) : r.unmount());
    n && ("function" == typeof n ? n(i) : y(n) && (n.current = i));
  }, [r]);
}
function O(e) {
  return "string" == typeof e || Array.isArray(e);
}
function x(e) {
  return "object" == typeof e && "function" == typeof e.start;
}
let w = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];
function k(e) {
  return x(e.animate) || w.some(r => O(e[r]));
}
function _(e) {
  return !!(k(e) || e.variants);
}
function S(e, r) {
  if (k(e)) {
    let {
      initial,
      animate
    } = e;
    return {
      initial: !1 === initial || O(initial) ? initial : void 0,
      animate: O(animate) ? animate : void 0
    };
  }
  return !1 !== e.inherit ? r : {};
}
function E(e) {
  let {
    initial,
    animate
  } = S(e, useContext(h));
  return useMemo(() => ({
    initial,
    animate
  }), [A(initial), A(animate)]);
}
function A(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
let C = e => ({
  isEnabled: r => e.some(e => !!r[e])
});
let T = {
  measureLayout: C(["layout", "layoutId", "drag"]),
  animation: C(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
  exit: C(["exit"]),
  drag: C(["drag", "dragControls"]),
  focus: C(["whileFocus"]),
  hover: C(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: C(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: C(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
  inView: C(["whileInView", "onViewportEnter", "onViewportLeave"])
};
function I(e) {
  for (let r in e) "projectionNodeConstructor" === r ? T.projectionNodeConstructor = e[r] : T[r].Component = e[r];
}
let M = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
};
let D = 1;
function N() {
  return _$$M(() => {
    if (M.hasEverUpdated) return D++;
  });
}
class L extends Component {
  getSnapshotBeforeUpdate() {
    let {
      visualElement,
      props
    } = this.props;
    visualElement && visualElement.setProps(props);
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
let j = createContext({});
let z = Symbol.$$for("motionComponentSymbol");
function Z({
  preloadedFeatures: e,
  createVisualElement: r,
  projectionNodeConstructor: n,
  useRender: i,
  useVisualState: s,
  Component: d
}) {
  function p(p, g) {
    let y = {
      ...useContext(_$$Q),
      ...p,
      layoutId: F(p)
    };
    let {
      isStatic
    } = y;
    let x = null;
    let w = E(p);
    let k = isStatic ? void 0 : N();
    let _ = s(p, isStatic);
    if (!isStatic && _$$B) {
      w.visualElement = v(d, _, y, r);
      let i = useContext(m).strict;
      let s = useContext(j);
      w.visualElement && (x = w.visualElement.loadFeatures(y, i, e, k, n || T.projectionNodeConstructor, s));
    }
    return createElement(L, {
      visualElement: w.visualElement,
      props: y
    }, x, createElement(h.Provider, {
      value: w
    }, i(d, p, k, b(_, w.visualElement, g), _, isStatic, w.visualElement)));
  }
  e && I(e);
  let g = forwardRef(p);
  g[z] = d;
  return g;
}
function F({
  layoutId: e
}) {
  let r = useContext(_$$L).id;
  return r && void 0 !== e ? r + "-" + e : e;
}
function U(e) {
  function r(n, i = {}) {
    return Z(e(n, i));
  }
  if ("undefined" == typeof Proxy) return r;
  let n = new Map();
  return new Proxy(r, {
    get: (e, i) => (n.has(i) || n.set(i, r(i)), n.get(i))
  });
}
let Q = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function V(e) {
  if ("string" != typeof e || e.includes("-")) ;else if (Q.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
  return !1;
}
let B = {};
function q(e) {
  Object.assign(B, e);
}
function Y(e, {
  layout: r,
  layoutId: n
}) {
  return f.has(e) || e.startsWith("origin") || (r || void 0 !== n) && (!!B[e] || "opacity" === e);
}
let X = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
let H = (e, r) => _$$U.indexOf(e) - _$$U.indexOf(r);
function K({
  transform: e,
  transformKeys: r
}, {
  enableHardwareAcceleration: n = !0,
  allowTransformNone: i = !0
}, s, o) {
  let a = "";
  for (let n of (r.sort(H), r)) a += `${X[n] || n}(${e[n]}) `;
  n && !e.z && (a += "translateZ(0)");
  a = a.trim();
  o ? a = o(e, s ? "" : a) : i && s && (a = "none");
  return a;
}
function J(e) {
  return e.startsWith("--");
}
let ee = (e, r) => r && "number" == typeof e ? r.transform(e) : e;
function er(e, r, n, i) {
  let {
    style,
    vars,
    transform,
    transformKeys,
    transformOrigin
  } = e;
  transformKeys.length = 0;
  let p = !1;
  let g = !1;
  let m = !0;
  for (let e in r) {
    let n = r[e];
    if (J(e)) {
      vars[e] = n;
      continue;
    }
    let i = _$$W[e];
    let v = ee(n, i);
    if (f.has(e)) {
      if (p = !0, transform[e] = v, transformKeys.push(e), !m) continue;
      n !== (i.$$default || 0) && (m = !1);
    } else e.startsWith("origin") ? (g = !0, transformOrigin[e] = v) : style[e] = v;
  }
  if (!r.transform && (p || i ? style.transform = K(e, n, m, i) : style.transform && (style.transform = "none")), g) {
    let {
      originX = "50%",
      originY = "50%",
      originZ = 0
    } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}
let en = () => ({
  style: {},
  transform: {},
  transformKeys: [],
  transformOrigin: {},
  vars: {}
});
function ei(e, r, n) {
  for (let i in r) _$$S(r[i]) || Y(i, n) || (e[i] = r[i]);
}
function es({
  transformTemplate: e
}, r, n) {
  return useMemo(() => {
    let i = en();
    er(i, r, {
      enableHardwareAcceleration: !n
    }, e);
    return Object.assign({}, i.vars, i.style);
  }, [r]);
}
function eo(e, r, n) {
  let i = e.style || {};
  let s = {};
  ei(s, i, e);
  Object.assign(s, es(e, r, n));
  return e.transformValues ? e.transformValues(s) : s;
}
function ea(e, r, n) {
  let i = {};
  let s = eo(e, r, n);
  e.drag && !1 !== e.dragListener && (i.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`);
  i.style = s;
  return i;
}
function ec(e, r, n) {
  return "string" == typeof e ? e : px.transform(r + n * e);
}
function eh(e, r, n) {
  let i = ec(r, e.x, e.width);
  let s = ec(n, e.y, e.height);
  return `${i} ${s}`;
}
let ed = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
let ef = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ep(e, r, n = 1, i = 0, s = !0) {
  e.pathLength = 1;
  let o = s ? ed : ef;
  e[o.offset] = px.transform(-i);
  let a = px.transform(r);
  let h = px.transform(n);
  e[o.array] = `${a} ${h}`;
}
function eg(e, {
  attrX: r,
  attrY: n,
  originX: i,
  originY: s,
  pathLength: o,
  pathSpacing: a = 1,
  pathOffset: h = 0,
  ...d
}, p, g, m) {
  if (er(e, d, p, m), g) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style;
  e.style = {};
  let {
    attrs,
    style,
    dimensions
  } = e;
  attrs.transform && (dimensions && (style.transform = attrs.transform), delete attrs.transform);
  dimensions && (void 0 !== i || void 0 !== s || style.transform) && (style.transformOrigin = eh(dimensions, void 0 !== i ? i : .5, void 0 !== s ? s : .5));
  void 0 !== r && (attrs.x = r);
  void 0 !== n && (attrs.y = n);
  void 0 !== o && ep(attrs, o, a, h, !1);
}
let em = () => ({
  ...en(),
  attrs: {}
});
let ev = e => "string" == typeof e && "svg" === e.toLowerCase();
function ey(e, r, n, i) {
  let s = useMemo(() => {
    let n = em();
    eg(n, r, {
      enableHardwareAcceleration: !1
    }, ev(i), e.transformTemplate);
    return {
      ...n.attrs,
      style: {
        ...n.style
      }
    };
  }, [r]);
  if (e.style) {
    let r = {};
    ei(r, e.style, e);
    s.style = {
      ...r,
      ...s.style
    };
  }
  return s;
}
function eb(e = !1) {
  return (r, n, i, s, {
    latestValues: a
  }, h) => {
    let d = (V(r) ? ey : ea)(n, a, h, r);
    let p = {
      ..._$$J(n, "string" == typeof r, e),
      ...d,
      ref: s
    };
    let {
      children
    } = n;
    let m = useMemo(() => _$$S(children) ? children.get() : children, [children]);
    i && (p["data-projection-id"] = i);
    return createElement(r, {
      ...p,
      children: m
    });
  };
}
function ex(e, {
  style: r,
  vars: n
}, i, s) {
  for (let o in Object.assign(e.style, r, s && s.getProjectionStyles(i)), n) e.style.setProperty(o, n[o]);
}
let ew = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function ek(e, r, n, i) {
  for (let n in ex(e, r, void 0, i), r.attrs) e.setAttribute(ew.has(n) ? n : _$$I(n), r.attrs[n]);
}
function e_(e, r) {
  let {
    style
  } = e;
  let i = {};
  for (let s in style) (_$$S(style[s]) || r.style && _$$S(r.style[s]) || Y(s, e)) && (i[s] = style[s]);
  return i;
}
function eS(e, r) {
  let n = e_(e, r);
  for (let i in e) (_$$S(e[i]) || _$$S(r[i])) && (n["x" === i || "y" === i ? "attr" + i.toUpperCase() : i] = e[i]);
  return n;
}
function eC(e) {
  let r = _$$S(e) ? e.get() : e;
  return _$$B2(r) ? r.toValue() : r;
}
function eT({
  scrapeMotionValuesFromProps: e,
  createRenderState: r,
  onMount: n
}, i, s, o) {
  let a = {
    latestValues: eP(i, s, o, e),
    renderState: r()
  };
  n && (a.mount = e => n(i, e, a));
  return a;
}
let eI = e => (r, n) => {
  let i = useContext(h);
  let s = useContext(t);
  let a = () => eT(e, r, i, s);
  return n ? a() : _$$M(a);
};
function eP(e, r, n, i) {
  let s = {};
  let o = i(e, {});
  for (let e in o) s[e] = eC(o[e]);
  let {
    initial,
    animate
  } = e;
  let d = k(e);
  let p = _(e);
  r && p && !d && !1 !== e.inherit && (void 0 === initial && (a = r.initial), void 0 === animate && (h = r.animate));
  let g = !!n && !1 === n.initial;
  let m = (g = g || !1 === initial) ? animate : initial;
  m && "boolean" != typeof m && !x(m) && (Array.isArray(m) ? m : [m]).forEach(r => {
    let n = _$$a(e, r);
    if (!n) return;
    let {
      transitionEnd,
      transition,
      ...a
    } = n;
    for (let e in a) {
      let r = a[e];
      if (Array.isArray(r)) {
        let e = g ? r.length - 1 : 0;
        r = r[e];
      }
      null !== r && (s[e] = r);
    }
    for (let e in transitionEnd) s[e] = transitionEnd[e];
  });
  return s;
}
let eR = {
  useVisualState: eI({
    scrapeMotionValuesFromProps: eS,
    createRenderState: em,
    onMount: (e, r, {
      renderState: n,
      latestValues: i
    }) => {
      try {
        n.dimensions = "function" == typeof r.getBBox ? r.getBBox() : r.getBoundingClientRect();
      } catch (e) {
        n.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      eg(n, i, {
        enableHardwareAcceleration: !1
      }, ev(r.tagName), e.transformTemplate);
      ek(r, n);
    }
  })
};
let eM = {
  useVisualState: eI({
    scrapeMotionValuesFromProps: e_,
    createRenderState: en
  })
};
function eD(e, {
  forwardMotionProps: r = !1
}, n, i, s) {
  return {
    ...(V(e) ? eR : eM),
    preloadedFeatures: n,
    useRender: eb(r),
    createVisualElement: i,
    projectionNodeConstructor: s,
    Component: e
  };
}
function eN(e, r, n, i = {
  passive: !0
}) {
  e.addEventListener(r, n, i);
  return () => e.removeEventListener(r, n);
}
function e$(e, r, n, i) {
  useEffect(() => {
    let s = e.current;
    if (n && s) return eN(s, r, n, i);
  }, [e, r, n, i]);
}
function eL({
  whileFocus: e,
  visualElement: r
}) {
  let {
    animationState
  } = r;
  let s = useCallback(() => {
    animationState && animationState.setActive(i.Focus, !0);
  }, [animationState]);
  let a = useCallback(() => {
    animationState && animationState.setActive(i.Focus, !1);
  }, [animationState]);
  e$(r, "focus", e ? s : void 0);
  e$(r, "blur", e ? a : void 0);
}
!function (e) {
  e.Animate = "animate";
  e.Hover = "whileHover";
  e.Tap = "whileTap";
  e.Drag = "whileDrag";
  e.Focus = "whileFocus";
  e.InView = "whileInView";
  e.Exit = "exit";
}(i || (i = {}));
let ej = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;
function ez(e, r = "page") {
  return {
    point: {
      x: e[r + "X"],
      y: e[r + "Y"]
    }
  };
}
let eZ = e => r => ej(r) && e(r, ez(r));
function eF(e, r, n, i) {
  return eN(e, r, eZ(n), i);
}
function eU(e, r, n, i) {
  return e$(e, r, n && eZ(n), i);
}
function eQ(e) {
  let r = null;
  return () => {
    let n = () => {
      r = null;
    };
    return null === r && (r = e, n);
  };
}
let eV = eQ("dragHorizontal");
let eB = eQ("dragVertical");
function eq(e) {
  let r = !1;
  if ("y" === e) r = eB();else if ("x" === e) r = eV();else {
    let e = eV();
    let n = eB();
    e && n ? r = () => {
      e();
      n();
    } : (e && e(), n && n());
  }
  return r;
}
function eW() {
  let e = eq(!0);
  return !e || (e(), !1);
}
function eY(e, r, n, s) {
  return (o, a) => {
    !("touch" === o.type || eW()) && (n && e.animationState && e.animationState.setActive(i.Hover, r), s && s(o, a));
  };
}
function eG({
  onHoverStart: e,
  onHoverEnd: r,
  whileHover: n,
  visualElement: i
}) {
  eU(i, "pointerenter", useMemo(() => e || n ? eY(i, !0, !!n, e) : void 0, [e, !!n, i]), {
    passive: !e
  });
  eU(i, "pointerleave", useMemo(() => r || n ? eY(i, !1, !!n, r) : void 0, [e, !!n, i]), {
    passive: !r
  });
}
let eX = (e, r) => !!r && (e === r || eX(e, r.parentElement));
function eJ({
  onTap: e,
  onTapStart: r,
  onTapCancel: n,
  whileTap: s,
  visualElement: a,
  ...h
}) {
  let d = e || r || n || s;
  let p = useRef(!1);
  let g = useRef(null);
  let m = {
    passive: !(r || e || n || h.onPointerDown)
  };
  function v() {
    g.current && g.current();
    g.current = null;
  }
  function y() {
    v();
    p.current = !1;
    a.getProps().whileTap && a.animationState && a.animationState.setActive(i.Tap, !1);
    return !eW();
  }
  function b(e, r) {
    var n;
    var i;
    var s;
    var o;
    y() && (eX(a.current, e.target) ? null === (o = (s = a.getProps()).onTap) || void 0 === o || o.call(s, e, r) : null === (i = (n = a.getProps()).onTapCancel) || void 0 === i || i.call(n, e, r));
  }
  function O(e, r) {
    var n;
    var i;
    y() && (null === (i = (n = a.getProps()).onTapCancel) || void 0 === i || i.call(n, e, r));
  }
  let x = useCallback((e, r) => {
    var n;
    if (v(), p.current) return;
    p.current = !0;
    g.current = _$$F(eF(window, "pointerup", b, m), eF(window, "pointercancel", O, m));
    let s = a.getProps();
    s.whileTap && a.animationState && a.animationState.setActive(i.Tap, !0);
    s.onTapStart?.call(s, e, r);
  }, [!!r, a]);
  eU(a, "pointerdown", d ? x : void 0, m);
  l(v);
}
let e0 = new WeakMap();
let e1 = new WeakMap();
let e2 = e => {
  let r = e0.get(e.target);
  r && r(e);
};
let e5 = e => {
  e.forEach(e2);
};
function e3({
  root: e,
  ...r
}) {
  let n = e || document;
  e1.has(n) || e1.set(n, {});
  let i = e1.get(n);
  let s = JSON.stringify(r);
  i[s] || (i[s] = new IntersectionObserver(e5, {
    root: e,
    ...r
  }));
  return i[s];
}
function e6(e, r, n) {
  let i = e3(r);
  e0.set(e, n);
  i.observe(e);
  return () => {
    e0.$$delete(e);
    i.unobserve(e);
  };
}
let e4 = {
  some: 0,
  all: 1
};
function e8(e, r, n, {
  root: s,
  margin: a,
  amount: h = "some",
  once: d
}) {
  useEffect(() => {
    if (!e || !n.current) return;
    let o = {
      root: s?.current,
      rootMargin: a,
      threshold: "number" == typeof h ? h : e4[h]
    };
    let p = e => {
      let {
        isIntersecting
      } = e;
      if (r.isInView === isIntersecting || (r.isInView = isIntersecting, d && !isIntersecting && r.hasEnteredView)) return;
      isIntersecting && (r.hasEnteredView = !0);
      n.animationState && n.animationState.setActive(i.InView, isIntersecting);
      let o = n.getProps();
      let a = isIntersecting ? o.onViewportEnter : o.onViewportLeave;
      a && a(e);
    };
    return e6(n.current, o, p);
  }, [e, s, a, h]);
}
function e7(e, r, n, {
  fallback: s = !0
}) {
  useEffect(() => {
    e && s && requestAnimationFrame(() => {
      r.hasEnteredView = !0;
      let {
        onViewportEnter
      } = n.getProps();
      onViewportEnter && onViewportEnter(null);
      n.animationState && n.animationState.setActive(i.InView, !0);
    });
  }, [e]);
}
let e9 = e => r => (e(r), null);
let te = {
  inView: e9(function ({
    visualElement: e,
    whileInView: r,
    onViewportEnter: n,
    onViewportLeave: i,
    viewport: s = {}
  }) {
    let a = useRef({
      hasEnteredView: !1,
      isInView: !1
    });
    let h = !!(r || n || i);
    s.once && a.current.hasEnteredView && (h = !1);
    ("undefined" == typeof IntersectionObserver ? e7 : e8)(h, a.current, e, s);
  }),
  tap: e9(eJ),
  focus: e9(eL),
  hover: e9(eG)
};
function tn(e, r) {
  if (!Array.isArray(r)) return !1;
  let n = r.length;
  if (n !== e.length) return !1;
  for (let i = 0; i < n; i++) if (r[i] !== e[i]) return !1;
  return !0;
}
let to = [i.Animate, i.InView, i.Focus, i.Hover, i.Tap, i.Drag, i.Exit];
let ta = [...to].reverse();
let tl = to.length;
function tu(e) {
  return r => Promise.all(r.map(({
    animation: r,
    options: n
  }) => _0(e, r, n)));
}
function tc(e) {
  let r = tu(e);
  let n = tf();
  let i = !0;
  let s = (r, n) => {
    let i = _$$K(e, n);
    if (i) {
      let {
        transition,
        transitionEnd,
        ...s
      } = i;
      r = {
        ...r,
        ...s,
        ...transitionEnd
      };
    }
    return r;
  };
  function o(o, a) {
    let h = e.getProps();
    let d = e.getVariantContext(!0) || {};
    let p = [];
    let g = new Set();
    let m = {};
    let v = 1 / 0;
    for (let r = 0; r < tl; r++) {
      let y = ta[r];
      let b = n[y];
      let w = void 0 !== h[y] ? h[y] : d[y];
      let k = O(w);
      let _ = y === a ? b.isActive : null;
      !1 === _ && (v = r);
      let S = w === d[y] && w !== h[y] && k;
      if (S && i && e.manuallyAnimateOnMount && (S = !1), b.protectedKeys = {
        ...m
      }, !b.isActive && null === _ || !w && !b.prevProp || x(w) || "boolean" == typeof w) continue;
      let E = th(b.prevProp, w);
      let A = E || y === a && b.isActive && !S && k || r > v && k;
      let C = Array.isArray(w) ? w : [w];
      let T = C.reduce(s, {});
      !1 === _ && (T = {});
      let {
        prevResolvedValues = {}
      } = b;
      let P = {
        ...prevResolvedValues,
        ...T
      };
      let R = e => {
        A = !0;
        g.$$delete(e);
        b.needsAnimating[e] = !0;
      };
      for (let e in P) {
        let r = T[e];
        let n = prevResolvedValues[e];
        m.hasOwnProperty(e) || (r !== n ? _$$p(r) && _$$p(n) ? !tn(r, n) || E ? R(e) : b.protectedKeys[e] = !0 : void 0 !== r ? R(e) : g.add(e) : void 0 !== r && g.has(e) ? R(e) : b.protectedKeys[e] = !0);
      }
      b.prevProp = w;
      b.prevResolvedValues = T;
      b.isActive && (m = {
        ...m,
        ...T
      });
      i && e.blockInitialAnimation && (A = !1);
      A && !S && p.push(...C.map(e => ({
        animation: e,
        options: {
          type: y,
          ...o
        }
      })));
    }
    if (g.size) {
      let r = {};
      g.forEach(n => {
        let i = e.getBaseTarget(n);
        void 0 !== i && (r[n] = i);
      });
      p.push({
        animation: r
      });
    }
    let y = !!p.length;
    i && !1 === h.initial && !e.manuallyAnimateOnMount && (y = !1);
    i = !1;
    return y ? r(p) : Promise.resolve();
  }
  function a(r, i, s) {
    var a;
    if (n[r].isActive === i) return Promise.resolve();
    e.variantChildren?.forEach(e => {
      var n;
      return e.animationState?.setActive(r, i);
    });
    n[r].isActive = i;
    let h = o(s, r);
    for (let e in n) n[e].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: function (n) {
      r = n(e);
    },
    getState: () => n
  };
}
function th(e, r) {
  return "string" == typeof r ? r !== e : !!Array.isArray(r) && !tn(r, e);
}
function td(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function tf() {
  return {
    [i.Animate]: td(!0),
    [i.InView]: td(),
    [i.Hover]: td(),
    [i.Tap]: td(),
    [i.Drag]: td(),
    [i.Focus]: td(),
    [i.Exit]: td()
  };
}
let tp = {
  animation: e9(({
    visualElement: e,
    animate: r
  }) => {
    e.animationState || (e.animationState = tc(e));
    x(r) && useEffect(() => r.subscribe(e), [r]);
  }),
  exit: e9(e => {
    let {
      custom,
      visualElement
    } = e;
    let [s, a] = xQ();
    let h = useContext(t);
    useEffect(() => {
      visualElement.isPresent = s;
      let e = visualElement.animationState && visualElement.animationState.setActive(i.Exit, !s, {
        custom: h && h.custom || custom
      });
      e && !s && e.then(a);
    }, [s]);
  })
};
let ty = (e, r) => Math.abs(e - r);
function tb(e, r) {
  return Math.sqrt(ty(e.x, r.x) ** 2 + ty(e.y, r.y) ** 2);
}
class tx {
  updatePoint = () => {
    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
    let e = t_(this.lastMoveEventInfo, this.history);
    let r = null !== this.startEvent;
    let n = tb(e.offset, {
      x: 0,
      y: 0
    }) >= 3;
    if (!r && !n) return;
    let {
      point
    } = e;
    let {
      timestamp
    } = u;
    this.history.push({
      ...point,
      timestamp
    });
    let {
      onStart,
      onMove
    } = this.handlers;
    r || (onStart && onStart(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent);
    onMove && onMove(this.lastMoveEvent, e);
  };
  handlePointerMove = (e, r) => {
    this.lastMoveEvent = e;
    this.lastMoveEventInfo = tw(r, this.transformPagePoint);
    OH.update(this.updatePoint, !0);
  };
  handlePointerUp = (e, r) => {
    if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
    let {
      onEnd,
      onSessionEnd
    } = this.handlers;
    let s = t_("pointercancel" === e.type ? this.lastMoveEventInfo : tw(r, this.transformPagePoint), this.history);
    this.startEvent && onEnd && onEnd(e, s);
    onSessionEnd && onSessionEnd(e, s);
  };
  constructor(e, r, {
    transformPagePoint: n
  } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    if (!ej(e)) return;
    this.handlers = r;
    this.transformPagePoint = n;
    let i = tw(ez(e), this.transformPagePoint);
    let {
      point
    } = i;
    let {
      timestamp
    } = u;
    this.history = [{
      ...point,
      timestamp
    }];
    let {
      onSessionStart
    } = r;
    onSessionStart && onSessionStart(e, t_(i, this.history));
    this.removeListeners = _$$F(eF(window, "pointermove", this.handlePointerMove), eF(window, "pointerup", this.handlePointerUp), eF(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners();
    _$$eO.update(this.updatePoint);
  }
}
function tw(e, r) {
  return r ? {
    point: r(e.point)
  } : e;
}
function tk(e, r) {
  return {
    x: e.x - r.x,
    y: e.y - r.y
  };
}
function t_({
  point: e
}, r) {
  return {
    point: e,
    delta: tk(e, tE(r)),
    offset: tk(e, tS(r)),
    velocity: tA(r, .1)
  };
}
function tS(e) {
  return e[0];
}
function tE(e) {
  return e[e.length - 1];
}
function tA(e, r) {
  if (e.length < 2) return {
    x: 0,
    y: 0
  };
  let n = e.length - 1;
  let i = null;
  let s = tE(e);
  for (; n >= 0 && (i = e[n], !(s.timestamp - i.timestamp > _$$f(r)));) n--;
  if (!i) return {
    x: 0,
    y: 0
  };
  let o = (s.timestamp - i.timestamp) / 1e3;
  if (0 === o) return {
    x: 0,
    y: 0
  };
  let a = {
    x: (s.x - i.x) / o,
    y: (s.y - i.y) / o
  };
  a.x === 1 / 0 && (a.x = 0);
  a.y === 1 / 0 && (a.y = 0);
  return a;
}
function tI(e) {
  return e.max - e.min;
}
function tP(e, r = 0, n = .01) {
  return Math.abs(e - r) <= n;
}
function tR(e, r, n, i = .5) {
  e.origin = i;
  e.originPoint = _$$j(r.min, r.max, e.origin);
  e.scale = tI(n) / tI(r);
  (tP(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1);
  e.translate = _$$j(n.min, n.max, e.origin) - e.originPoint;
  (tP(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function tM(e, r, n, i) {
  tR(e.x, r.x, n.x, i?.originX);
  tR(e.y, r.y, n.y, i?.originY);
}
function tD(e, r, n) {
  e.min = n.min + r.min;
  e.max = e.min + tI(r);
}
function tN(e, r, n) {
  tD(e.x, r.x, n.x);
  tD(e.y, r.y, n.y);
}
function t$(e, r, n) {
  e.min = r.min - n.min;
  e.max = e.min + tI(r);
}
function tL(e, r, n) {
  t$(e.x, r.x, n.x);
  t$(e.y, r.y, n.y);
}
function tz(e, {
  min: r,
  max: n
}, i) {
  void 0 !== r && e < r ? e = i ? _$$j(r, e, i.min) : Math.max(e, r) : void 0 !== n && e > n && (e = i ? _$$j(n, e, i.max) : Math.min(e, n));
  return e;
}
function tZ(e, r, n) {
  return {
    min: void 0 !== r ? e.min + r : void 0,
    max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
  };
}
function tF(e, {
  top: r,
  left: n,
  bottom: i,
  right: s
}) {
  return {
    x: tZ(e.x, n, s),
    y: tZ(e.y, r, i)
  };
}
function tU(e, r) {
  let n = r.min - e.min;
  let i = r.max - e.max;
  r.max - r.min < e.max - e.min && ([n, i] = [i, n]);
  return {
    min: n,
    max: i
  };
}
function tQ(e, r) {
  return {
    x: tU(e.x, r.x),
    y: tU(e.y, r.y)
  };
}
function tV(e, r) {
  let n = .5;
  let i = tI(e);
  let s = tI(r);
  s > i ? n = _$$q(r.min, r.max - i, e.min) : i > s && (n = _$$q(e.min, e.max - s, r.min));
  return _$$q2(0, 1, n);
}
function tB(e, r) {
  let n = {};
  void 0 !== r.min && (n.min = r.min - e.min);
  void 0 !== r.max && (n.max = r.max - e.min);
  return n;
}
let tq = .35;
function tW(e = tq) {
  !1 === e ? e = 0 : !0 === e && (e = tq);
  return {
    x: tY(e, "left", "right"),
    y: tY(e, "top", "bottom")
  };
}
function tY(e, r, n) {
  return {
    min: tG(e, r),
    max: tG(e, n)
  };
}
function tG(e, r) {
  return "number" == typeof e ? e : e[r] || 0;
}
let tX = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
let tH = () => ({
  x: tX(),
  y: tX()
});
let tK = () => ({
  min: 0,
  max: 0
});
let tJ = () => ({
  x: tK(),
  y: tK()
});
function t0(e) {
  return [e("x"), e("y")];
}
function t1({
  top: e,
  left: r,
  right: n,
  bottom: i
}) {
  return {
    x: {
      min: r,
      max: n
    },
    y: {
      min: e,
      max: i
    }
  };
}
function t2({
  x: e,
  y: r
}) {
  return {
    top: r.min,
    right: e.max,
    bottom: r.max,
    left: e.min
  };
}
function t5(e, r) {
  if (!r) return e;
  let n = r({
    x: e.left,
    y: e.top
  });
  let i = r({
    x: e.right,
    y: e.bottom
  });
  return {
    top: n.y,
    left: n.x,
    bottom: i.y,
    right: i.x
  };
}
function t3(e) {
  return void 0 === e || 1 === e;
}
function t6({
  scale: e,
  scaleX: r,
  scaleY: n
}) {
  return !t3(e) || !t3(r) || !t3(n);
}
function t4(e) {
  return t6(e) || t8(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function t8(e) {
  return t7(e.x) || t7(e.y);
}
function t7(e) {
  return e && "0%" !== e;
}
function t9(e, r, n) {
  let i = r * (e - n);
  return n + i;
}
function re(e, r, n, i, s) {
  void 0 !== s && (e = t9(e, s, i));
  return t9(e, n, i) + r;
}
function rt(e, r = 0, n = 1, i, s) {
  e.min = re(e.min, r, n, i, s);
  e.max = re(e.max, r, n, i, s);
}
function rr(e, {
  x: r,
  y: n
}) {
  rt(e.x, r.translate, r.scale, r.originPoint);
  rt(e.y, n.translate, n.scale, n.originPoint);
}
function rn(e, r, n, i = !1) {
  var s;
  var o;
  let a;
  let h;
  let d = n.length;
  if (d) {
    r.x = r.y = 1;
    for (let p = 0; p < d; p++) {
      h = (a = n[p]).projectionDelta;
      a.instance?.style?.display !== "contents" && (i && a.options.layoutScroll && a.scroll && a !== a.root && ru(e, {
        x: -a.scroll.offset.x,
        y: -a.scroll.offset.y
      }), h && (r.x *= h.x.scale, r.y *= h.y.scale, rr(e, h)), i && t4(a.latestValues) && ru(e, a.latestValues));
    }
    r.x = ri(r.x);
    r.y = ri(r.y);
  }
}
function ri(e) {
  return Number.isInteger(e) ? e : e > 1.0000000000001 || e < .999999999999 ? e : 1;
}
function rs(e, r) {
  e.min = e.min + r;
  e.max = e.max + r;
}
function ro(e, r, [n, i, s]) {
  let o = void 0 !== r[s] ? r[s] : .5;
  let a = _$$j(e.min, e.max, o);
  rt(e, r[n], r[i], a, r.scale);
}
let ra = ["x", "scaleX", "originX"];
let rl = ["y", "scaleY", "originY"];
function ru(e, r) {
  ro(e.x, r, ra);
  ro(e.y, r, rl);
}
function rc(e, r) {
  return t1(t5(e.getBoundingClientRect(), r));
}
function rh(e, r, n) {
  let i = rc(e, n);
  let {
    scroll
  } = r;
  scroll && (rs(i.x, scroll.offset.x), rs(i.y, scroll.offset.y));
  return i;
}
let rf = new WeakMap();
class rp {
  constructor(e) {
    this.openGlobalLock = null;
    this.isDragging = !1;
    this.currentDirection = null;
    this.originPoint = {
      x: 0,
      y: 0
    };
    this.constraints = !1;
    this.hasMutatedConstraints = !1;
    this.elastic = tJ();
    this.visualElement = e;
  }
  start(e, {
    snapToCursor: r = !1
  } = {}) {
    if (!1 === this.visualElement.isPresent) return;
    let n = e => {
      this.stopAnimation();
      r && this.snapToCursor(ez(e, "page").point);
    };
    let s = (e, r) => {
      var n;
      let {
        drag,
        dragPropagation,
        onDragStart
      } = this.getProps();
      (!drag || dragPropagation || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = eq(drag), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), t0(e => {
        var r;
        var n;
        let i = this.getAxisMotionValue(e).get() || 0;
        if (KN.test(i)) {
          let s = this.visualElement.projection?.layout?.layoutBox[e];
          s && (i = tI(s) * (parseFloat(i) / 100));
        }
        this.originPoint[e] = i;
      }), onDragStart?.(e, r), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(i.Drag, !0));
    };
    let o = (e, r) => {
      let {
        dragPropagation,
        dragDirectionLock,
        onDirectionLock,
        onDrag
      } = this.getProps();
      if (!dragPropagation && !this.openGlobalLock) return;
      let {
        offset
      } = r;
      if (dragDirectionLock && null === this.currentDirection) {
        this.currentDirection = rm(offset);
        null !== this.currentDirection && onDirectionLock?.(this.currentDirection);
        return;
      }
      this.updateAxis("x", r.point, offset);
      this.updateAxis("y", r.point, offset);
      this.visualElement.render();
      onDrag?.(e, r);
    };
    let a = (e, r) => this.stop(e, r);
    this.panSession = new tx(e, {
      onSessionStart: n,
      onStart: s,
      onMove: o,
      onSessionEnd: a
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint()
    });
  }
  stop(e, r) {
    let n = this.isDragging;
    if (this.cancel(), !n) return;
    let {
      velocity
    } = r;
    this.startAnimation(velocity);
    let {
      onDragEnd
    } = this.getProps();
    onDragEnd?.(e, r);
  }
  cancel() {
    var e;
    var r;
    this.isDragging = !1;
    this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1);
    null === (e = this.panSession) || void 0 === e || e.end();
    this.panSession = void 0;
    let {
      dragPropagation
    } = this.getProps();
    !dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null);
    null === (r = this.visualElement.animationState) || void 0 === r || r.setActive(i.Drag, !1);
  }
  updateAxis(e, r, n) {
    let {
      drag
    } = this.getProps();
    if (!n || !rg(e, drag, this.currentDirection)) return;
    let s = this.getAxisMotionValue(e);
    let o = this.originPoint[e] + n[e];
    this.constraints && this.constraints[e] && (o = tz(o, this.constraints[e], this.elastic[e]));
    s.set(o);
  }
  resolveConstraints() {
    let {
      dragConstraints,
      dragElastic
    } = this.getProps();
    let {
      layout
    } = this.visualElement.projection || {};
    let i = this.constraints;
    dragConstraints && y(dragConstraints) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : dragConstraints && layout ? this.constraints = tF(layout.layoutBox, dragConstraints) : this.constraints = !1;
    this.elastic = tW(dragElastic);
    i !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints && t0(e => {
      this.getAxisMotionValue(e) && (this.constraints[e] = tB(layout.layoutBox[e], this.constraints[e]));
    });
  }
  resolveRefConstraints() {
    let {
      dragConstraints,
      onMeasureDragConstraints
    } = this.getProps();
    if (!dragConstraints || !y(dragConstraints)) return !1;
    let n = dragConstraints.current;
    _$$V(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    let {
      projection
    } = this.visualElement;
    if (!projection || !projection.layout) return !1;
    let s = rh(n, projection.root, this.visualElement.getTransformPagePoint());
    let o = tQ(projection.layout.layoutBox, s);
    if (onMeasureDragConstraints) {
      let e = onMeasureDragConstraints(t2(o));
      this.hasMutatedConstraints = !!e;
      e && (o = t1(e));
    }
    return o;
  }
  startAnimation(e) {
    let {
      drag,
      dragMomentum,
      dragElastic,
      dragTransition,
      dragSnapToOrigin,
      onDragTransitionEnd
    } = this.getProps();
    let h = this.constraints || {};
    return Promise.all(t0(a => {
      if (!rg(a, drag, this.currentDirection)) return;
      let d = h?.[a] || {};
      dragSnapToOrigin && (d = {
        min: 0,
        max: 0
      });
      let p = dragElastic ? 200 : 1e6;
      let g = dragElastic ? 40 : 1e7;
      let m = {
        type: "inertia",
        velocity: dragMomentum ? e[a] : 0,
        bounceStiffness: p,
        bounceDamping: g,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...dragTransition,
        ...d
      };
      return this.startAxisValueAnimation(a, m);
    })).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(e, r) {
    let n = this.getAxisMotionValue(e);
    return n.start(_$$O(e, n, 0, r));
  }
  stopAnimation() {
    t0(e => this.getAxisMotionValue(e).stop());
  }
  getAxisMotionValue(e) {
    var r;
    let n = "_drag" + e.toUpperCase();
    return this.visualElement.getProps()[n] || this.visualElement.getValue(e, this.visualElement.getProps().initial?.[e] || 0);
  }
  snapToCursor(e) {
    t0(r => {
      let {
        drag
      } = this.getProps();
      if (!rg(r, drag, this.currentDirection)) return;
      let {
        projection
      } = this.visualElement;
      let s = this.getAxisMotionValue(r);
      if (projection && projection.layout) {
        let {
          min,
          max
        } = projection.layout.layoutBox[r];
        s.set(e[r] - _$$j(min, max, .5));
      }
    });
  }
  scalePositionWithinConstraints() {
    var e;
    if (!this.visualElement.current) return;
    let {
      drag,
      dragConstraints
    } = this.getProps();
    let {
      projection
    } = this.visualElement;
    if (!y(dragConstraints) || !projection || !this.constraints) return;
    this.stopAnimation();
    let s = {
      x: 0,
      y: 0
    };
    t0(e => {
      let r = this.getAxisMotionValue(e);
      if (r) {
        let n = r.get();
        s[e] = tV({
          min: n,
          max: n
        }, this.constraints[e]);
      }
    });
    let {
      transformTemplate
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    projection.root?.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    t0(e => {
      if (!rg(e, drag, null)) return;
      let n = this.getAxisMotionValue(e);
      let {
        min,
        max
      } = this.constraints[e];
      n.set(_$$j(min, max, s[e]));
    });
  }
  addListeners() {
    var e;
    if (!this.visualElement.current) return;
    rf.set(this.visualElement, this);
    let r = eF(this.visualElement.current, "pointerdown", e => {
      let {
        drag,
        dragListener = !0
      } = this.getProps();
      drag && dragListener && this.start(e);
    });
    let n = () => {
      let {
        dragConstraints
      } = this.getProps();
      y(dragConstraints) && (this.constraints = this.resolveRefConstraints());
    };
    let {
      projection
    } = this.visualElement;
    let s = projection.addEventListener("measure", n);
    projection && !projection.layout && (projection.root?.updateScroll(), projection.updateLayout());
    n();
    let o = eN(window, "resize", () => this.scalePositionWithinConstraints());
    let a = projection.addEventListener("didUpdate", ({
      delta: e,
      hasLayoutChanged: r
    }) => {
      this.isDragging && r && (t0(r => {
        let n = this.getAxisMotionValue(r);
        n && (this.originPoint[r] += e[r].translate, n.set(n.get() + e[r].translate));
      }), this.visualElement.render());
    });
    return () => {
      o();
      r();
      s();
      a?.();
    };
  }
  getProps() {
    let e = this.visualElement.getProps();
    let {
      drag = !1,
      dragDirectionLock = !1,
      dragPropagation = !1,
      dragConstraints = !1,
      dragElastic = tq,
      dragMomentum = !0
    } = e;
    return {
      ...e,
      drag,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    };
  }
}
function rg(e, r, n) {
  return (!0 === r || r === e) && (null === n || n === e);
}
function rm(e, r = 10) {
  let n = null;
  Math.abs(e.y) > r ? n = "y" : Math.abs(e.x) > r && (n = "x");
  return n;
}
function rv(e) {
  let {
    dragControls,
    visualElement
  } = e;
  let i = _$$M(() => new rp(visualElement));
  useEffect(() => dragControls && dragControls.subscribe(i), [i, dragControls]);
  useEffect(() => i.addListeners(), [i]);
}
let ry = {
  pan: e9(function ({
    onPan: e,
    onPanStart: r,
    onPanEnd: n,
    onPanSessionStart: i,
    visualElement: s
  }) {
    let h = e || r || n || i;
    let d = useRef(null);
    let {
      transformPagePoint
    } = useContext(_$$Q);
    let g = {
      onSessionStart: i,
      onStart: r,
      onMove: e,
      onEnd: (e, r) => {
        d.current = null;
        n && n(e, r);
      }
    };
    function m(e) {
      d.current = new tx(e, g, {
        transformPagePoint
      });
    }
    useEffect(() => {
      null !== d.current && d.current.updateHandlers(g);
    });
    eU(s, "pointerdown", h && m);
    l(() => d.current && d.current.end());
  }),
  drag: e9(rv)
};
function rx(e) {
  return "string" == typeof e && e.startsWith("var(--");
}
let rw = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function rk(e) {
  let r = rw.exec(e);
  if (!r) return [,];
  let [, n, i] = r;
  return [n, i];
}
let r_ = 4;
function rS(e, r, n = 1) {
  _$$V(n <= r_, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  let [i, s] = rk(e);
  if (!i) return;
  let o = window.getComputedStyle(r).getPropertyValue(i);
  return o ? o.trim() : rx(s) ? rS(s, r, n + 1) : s;
}
function rE(e, {
  ...r
}, n) {
  let i = e.current;
  if (!(i instanceof Element)) return {
    target: r,
    transitionEnd: n
  };
  for (let s in n && (n = {
    ...n
  }), e.values.forEach(e => {
    let r = e.get();
    if (!rx(r)) return;
    let n = rS(r, i);
    n && e.set(n);
  }), r) {
    let e = r[s];
    if (!rx(e)) continue;
    let o = rS(e, i);
    o && (r[s] = o, n && void 0 === n[s] && (n[s] = e));
  }
  return {
    target: r,
    transitionEnd: n
  };
}
let rT = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]);
let rI = e => rT.has(e);
let rP = e => Object.keys(e).some(rI);
let rR = e => e === ai || e === px;
!function (e) {
  e.width = "width";
  e.height = "height";
  e.left = "left";
  e.right = "right";
  e.top = "top";
  e.bottom = "bottom";
}(s || (s = {}));
let rM = (e, r) => parseFloat(e.split(", ")[r]);
let rD = (e, r) => (n, {
  transform: i
}) => {
  if ("none" === i || !i) return 0;
  let s = i.match(/^matrix3d\((.+)\)$/);
  if (s) return rM(s[1], r);
  {
    let r = i.match(/^matrix\((.+)\)$/);
    return r ? rM(r[1], e) : 0;
  }
};
let rN = new Set(["x", "y", "z"]);
let r$ = _$$U.filter(e => !rN.has(e));
function rL(e) {
  let r = [];
  r$.forEach(n => {
    let i = e.getValue(n);
    void 0 !== i && (r.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0));
  });
  r.length && e.render();
  return r;
}
let rj = {
  width: ({
    x: e
  }, {
    paddingLeft: r = "0",
    paddingRight: n = "0"
  }) => e.max - e.min - parseFloat(r) - parseFloat(n),
  height: ({
    y: e
  }, {
    paddingTop: r = "0",
    paddingBottom: n = "0"
  }) => e.max - e.min - parseFloat(r) - parseFloat(n),
  top: (e, {
    top: r
  }) => parseFloat(r),
  left: (e, {
    left: r
  }) => parseFloat(r),
  bottom: ({
    y: e
  }, {
    top: r
  }) => parseFloat(r) + (e.max - e.min),
  right: ({
    x: e
  }, {
    left: r
  }) => parseFloat(r) + (e.max - e.min),
  x: rD(4, 13),
  y: rD(5, 14)
};
let rz = (e, r, n) => {
  let i = r.measureViewportBox();
  let s = getComputedStyle(r.current);
  let {
    display
  } = s;
  let a = {};
  "none" === display && r.setStaticValue("display", e.display || "block");
  n.forEach(e => {
    a[e] = rj[e](i, s);
  });
  r.render();
  let h = r.measureViewportBox();
  n.forEach(n => {
    let i = r.getValue(n);
    i && i.jump(a[n]);
    e[n] = rj[n](h, s);
  });
  return e;
};
let rZ = (e, r, n = {}, i = {}) => {
  r = {
    ...r
  };
  i = {
    ...i
  };
  let s = Object.keys(r).filter(rI);
  let o = [];
  let a = !1;
  let h = [];
  if (s.forEach(s => {
    let d;
    let p = e.getValue(s);
    if (!e.hasValue(s)) return;
    let g = n[s];
    let m = _$$n(g);
    let v = r[s];
    if (_$$p(v)) {
      let e = v.length;
      let r = null === v[0] ? 1 : 0;
      g = v[r];
      m = _$$n(g);
      for (let n = r; n < e; n++) d ? _$$V(_$$n(v[n]) === d, "All keyframes must be of the same type") : (d = _$$n(v[n]), _$$V(d === m || rR(m) && rR(d), "Keyframes must be of the same dimension as the current value"));
    } else d = _$$n(v);
    if (m !== d) {
      if (rR(m) && rR(d)) {
        let e = p.get();
        "string" == typeof e && p.set(parseFloat(e));
        "string" == typeof v ? r[s] = parseFloat(v) : Array.isArray(v) && d === px && (r[s] = v.map(parseFloat));
      } else m?.transform && d?.transform && (0 === g || 0 === v) ? 0 === g ? p.set(d.transform(g)) : r[s] = m.transform(v) : (a || (o = rL(e), a = !0), h.push(s), i[s] = void 0 !== i[s] ? i[s] : r[s], p.jump(v));
    }
  }), !h.length) return {
    target: r,
    transitionEnd: i
  };
  {
    let n = h.indexOf("height") >= 0 ? window.pageYOffset : null;
    let s = rz(r, e, h);
    o.length && o.forEach(([r, n]) => {
      e.getValue(r).set(n);
    });
    e.render();
    _$$B && null !== n && window.scrollTo({
      top: n
    });
    return {
      target: s,
      transitionEnd: i
    };
  }
};
function rF(e, r, n, i) {
  return rP(r) ? rZ(e, r, n, i) : {
    target: r,
    transitionEnd: i
  };
}
let rU = (e, r, n, i) => {
  let s = rE(e, r, i);
  return rF(e, r = s.target, n, i = s.transitionEnd);
};
let rQ = {
  current: null
};
let rV = {
  current: !1
};
function rB() {
  if (rV.current = !0, _$$B) {
    if (window.matchMedia) {
      let e = window.matchMedia("(prefers-reduced-motion)");
      let r = () => rQ.current = e.matches;
      e.addListener(r);
      r();
    } else rQ.current = !1;
  }
}
function rG(e, r, n) {
  let {
    willChange
  } = r;
  for (let s in r) {
    let o = r[s];
    let a = n[s];
    if (_$$S(o)) {
      e.addValue(s, o);
      _$$k(willChange) && willChange.add(s);
    } else if (_$$S(a)) {
      e.addValue(s, _$$O2(o, {
        owner: e
      }));
      _$$k(willChange) && willChange.remove(s);
    } else if (a !== o) {
      if (e.hasValue(s)) {
        let r = e.getValue(s);
        r.hasAnimated || r.set(o);
      } else {
        let r = e.getStaticValue(s);
        e.addValue(s, _$$O2(void 0 !== r ? r : o, {
          owner: e
        }));
      }
    }
  }
  for (let i in n) void 0 === r[i] && e.removeValue(i);
  return r;
}
let rX = Object.keys(T);
let rH = rX.length;
let rK = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class rJ {
  constructor({
    parent: e,
    props: r,
    reducedMotionConfig: n,
    visualState: i
  }, s = {}) {
    this.current = null;
    this.children = new Set();
    this.isVariantNode = !1;
    this.isControllingVariants = !1;
    this.shouldReduceMotion = null;
    this.values = new Map();
    this.isPresent = !0;
    this.valueSubscriptions = new Map();
    this.prevMotionValues = {};
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    };
    this.scheduleRender = () => OH.render(this.render, !1, !0);
    let {
      latestValues,
      renderState
    } = i;
    this.latestValues = latestValues;
    this.baseTarget = {
      ...latestValues
    };
    this.initialValues = r.initial ? {
      ...latestValues
    } : {};
    this.renderState = renderState;
    this.parent = e;
    this.props = r;
    this.depth = e ? e.depth + 1 : 0;
    this.reducedMotionConfig = n;
    this.options = s;
    this.isControllingVariants = k(r);
    this.isVariantNode = _(r);
    this.isVariantNode && (this.variantChildren = new Set());
    this.manuallyAnimateOnMount = !!(e && e.current);
    let {
      willChange,
      ...d
    } = this.scrapeMotionValuesFromProps(r, {});
    for (let e in d) {
      let r = d[e];
      void 0 !== latestValues[e] && _$$S(r) && (r.set(latestValues[e], !1), _$$k(willChange) && willChange.add(e));
    }
  }
  scrapeMotionValuesFromProps(e, r) {
    return {};
  }
  mount(e) {
    var r;
    this.current = e;
    this.projection && this.projection.mount(e);
    this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent?.addVariantChild(this));
    this.values.forEach((e, r) => this.bindToMotionValue(r, e));
    rV.current || rB();
    this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || rQ.current);
    this.parent && this.parent.children.add(this);
    this.setProps(this.props);
  }
  unmount() {
    var e;
    var r;
    var n;
    for (let i in null === (e = this.projection) || void 0 === e || e.unmount(), _$$eO.update(this.notifyUpdate), _$$eO.render(this.render), this.valueSubscriptions.forEach(e => e()), null === (r = this.removeFromVariantTree) || void 0 === r || r.call(this), null === (n = this.parent) || void 0 === n || n.children.$$delete(this), this.events) this.events[i].clear();
    this.current = null;
  }
  bindToMotionValue(e, r) {
    let n = f.has(e);
    let i = r.on("change", r => {
      this.latestValues[e] = r;
      this.props.onUpdate && OH.update(this.notifyUpdate, !1, !0);
      n && this.projection && (this.projection.isTransformDirty = !0);
    });
    let s = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      i();
      s();
    });
  }
  sortNodePosition(e) {
    return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0;
  }
  loadFeatures({
    children: e,
    ...r
  }, n, i, s, a, h) {
    let d = [];
    for (let e = 0; e < rH; e++) {
      let n = rX[e];
      let {
        isEnabled,
        Component
      } = T[n];
      isEnabled(r) && Component && d.push(createElement(Component, {
        key: n,
        ...r,
        visualElement: this
      }));
    }
    if (!this.projection && a) {
      this.projection = new a(s, this.latestValues, this.parent && this.parent.projection);
      let {
        layoutId,
        layout,
        drag,
        dragConstraints,
        layoutScroll,
        layoutRoot
      } = r;
      this.projection.setOptions({
        layoutId,
        layout,
        alwaysMeasureLayout: !!drag || dragConstraints && y(dragConstraints),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: "string" == typeof layout ? layout : "both",
        initialPromotionConfig: h,
        layoutScroll,
        layoutRoot
      });
    }
    return d;
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : tJ();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, r) {
    this.latestValues[e] = r;
  }
  makeTargetAnimatable(e, r = !0) {
    return this.makeTargetAnimatableFromInstance(e, this.props, r);
  }
  setProps(e) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender();
    let r = this.props;
    this.props = e;
    for (let r = 0; r < rK.length; r++) {
      let n = rK[r];
      this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
      let i = e["on" + n];
      i && (this.propEventSubscriptions[n] = this.on(n, i));
    }
    this.prevMotionValues = rG(this, this.scrapeMotionValuesFromProps(e, r), this.prevMotionValues);
    this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    var r;
    return this.props.variants?.[e];
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    var e;
    return this.isVariantNode ? this : this.parent?.getClosestVariantNode();
  }
  getVariantContext(e = !1) {
    var r;
    var n;
    if (e) return this.parent?.getVariantContext();
    if (!this.isControllingVariants) {
      let e = this.parent?.getVariantContext() || {};
      void 0 !== this.props.initial && (e.initial = this.props.initial);
      return e;
    }
    let i = {};
    for (let e = 0; e < r1; e++) {
      let r = r0[e];
      let n = this.props[r];
      (O(n) || !1 === n) && (i[r] = n);
    }
    return i;
  }
  addVariantChild(e) {
    var r;
    let n = this.getClosestVariantNode();
    if (n) {
      n.variantChildren?.add(e);
      return () => n.variantChildren.$$delete(e);
    }
  }
  addValue(e, r) {
    r !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, r));
    this.values.set(e, r);
    this.latestValues[e] = r.get();
  }
  removeValue(e) {
    var r;
    this.values.$$delete(e);
    null === (r = this.valueSubscriptions.get(e)) || void 0 === r || r();
    this.valueSubscriptions.$$delete(e);
    delete this.latestValues[e];
    this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, r) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let n = this.values.get(e);
    void 0 === n && void 0 !== r && (n = _$$O2(r, {
      owner: this
    }), this.addValue(e, n));
    return n;
  }
  readValue(e) {
    return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
  }
  setBaseTarget(e, r) {
    this.baseTarget[e] = r;
  }
  getBaseTarget(e) {
    var r;
    let {
      initial
    } = this.props;
    let i = "string" == typeof initial || "object" == typeof initial ? _$$a(this.props, initial)?.[e] : void 0;
    if (initial && void 0 !== i) return i;
    let s = this.getBaseTargetFromProps(this.props, e);
    return void 0 === s || _$$S(s) ? void 0 !== this.initialValues[e] && void 0 === i ? void 0 : this.baseTarget[e] : s;
  }
  on(e, r) {
    this.events[e] || (this.events[e] = new _$$v());
    return this.events[e].add(r);
  }
  notify(e, ...r) {
    var n;
    null === (n = this.events[e]) || void 0 === n || n.notify(...r);
  }
}
let r0 = ["initial", ...to];
let r1 = r0.length;
class r2 extends rJ {
  sortInstanceNodePosition(e, r) {
    return 2 & e.compareDocumentPosition(r) ? 1 : -1;
  }
  getBaseTargetFromProps(e, r) {
    var n;
    return e.style?.[r];
  }
  removeValueFromRenderState(e, {
    vars: r,
    style: n
  }) {
    delete r[e];
    delete n[e];
  }
  makeTargetAnimatableFromInstance({
    transition: e,
    transitionEnd: r,
    ...n
  }, {
    transformValues: i
  }, s) {
    let o = $z(n, e || {}, this);
    if (i && (r && (r = i(r)), n && (n = i(n)), o && (o = i(o))), s) {
      TM(this, n, o);
      let e = rU(this, n, o, r);
      r = e.transitionEnd;
      n = e.target;
    }
    return {
      transition: e,
      transitionEnd: r,
      ...n
    };
  }
}
function r5(e) {
  return window.getComputedStyle(e);
}
class r3 extends r2 {
  readValueFromInstance(e, r) {
    if (f.has(r)) {
      let e = _$$D(r);
      return e && e.$$default || 0;
    }
    {
      let n = r5(e);
      let i = (J(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return "string" == typeof i ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, {
    transformPagePoint: r
  }) {
    return rc(e, r);
  }
  build(e, r, n, i) {
    er(e, r, n, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, r) {
    return e_(e, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    let {
      children
    } = this.props;
    _$$S(children) && (this.childSubscription = children.on("change", e => {
      this.current && (this.current.textContent = `${e}`);
    }));
  }
  renderInstance(e, r, n, i) {
    ex(e, r, n, i);
  }
}
class r6 extends r2 {
  constructor() {
    super(...arguments);
    this.isSVGTag = !1;
  }
  getBaseTargetFromProps(e, r) {
    return e[r];
  }
  readValueFromInstance(e, r) {
    var n;
    return f.has(r) ? _$$D(r)?.$$default || 0 : (r = ew.has(r) ? r : _$$I(r), e.getAttribute(r));
  }
  measureInstanceViewportBox() {
    return tJ();
  }
  scrapeMotionValuesFromProps(e, r) {
    return eS(e, r);
  }
  build(e, r, n, i) {
    eg(e, r, n, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(e, r, n, i) {
    ek(e, r, n, i);
  }
  mount(e) {
    this.isSVGTag = ev(e.tagName);
    super.mount(e);
  }
}
let r4 = (e, r) => V(e) ? new r6(r, {
  enableHardwareAcceleration: !1
}) : new r3(r, {
  enableHardwareAcceleration: !0
});
function r8(e, r) {
  return r.max === r.min ? 0 : e / (r.max - r.min) * 100;
}
let r7 = {
  correct: (e, r) => {
    if (!r.target) return e;
    if ("string" == typeof e) {
      if (!px.test(e)) return e;
      e = parseFloat(e);
    }
    let n = r8(e, r.target.x);
    let i = r8(e, r.target.y);
    return `${n}% ${i}%`;
  }
};
let ne = "_$css";
let nt = {
  correct: (e, {
    treeScale: r,
    projectionDelta: n
  }) => {
    let i = e;
    let s = e.includes("var(");
    let o = [];
    s && (e = e.replace(rw, e => (o.push(e), ne)));
    let a = _$$f2.parse(e);
    if (a.length > 5) return i;
    let h = _$$f2.createTransformer(e);
    let d = "number" != typeof a[0] ? 1 : 0;
    let p = n.x.scale * r.x;
    let g = n.y.scale * r.y;
    a[0 + d] /= p;
    a[1 + d] /= g;
    let m = _$$j(p, g, .5);
    "number" == typeof a[2 + d] && (a[2 + d] /= m);
    "number" == typeof a[3 + d] && (a[3 + d] /= m);
    let v = h(a);
    if (s) {
      let e = 0;
      v = v.replace(ne, () => {
        let r = o[e];
        e++;
        return r;
      });
    }
    return v;
  }
};
class nr extends Component {
  componentDidMount() {
    let {
      visualElement,
      layoutGroup,
      switchLayoutGroup,
      layoutId
    } = this.props;
    let {
      projection
    } = e;
    q(ni);
    projection && (layoutGroup.group && layoutGroup.group.add(projection), switchLayoutGroup && switchLayoutGroup.register && layoutId && switchLayoutGroup.register(projection), projection.root.didUpdate(), projection.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), projection.setOptions({
      ...projection.options,
      onExitComplete: () => this.safeToRemove()
    }));
    M.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    let {
      layoutDependency,
      visualElement,
      drag,
      isPresent
    } = this.props;
    let o = visualElement.projection;
    o && (o.isPresent = isPresent, drag || e.layoutDependency !== layoutDependency || void 0 === layoutDependency ? o.willUpdate() : this.safeToRemove(), e.isPresent === isPresent || (isPresent ? o.promote() : o.relegate() || OH.postRender(() => {
      var e;
      o.getStack()?.members.length || this.safeToRemove();
    })));
    return null;
  }
  componentDidUpdate() {
    let {
      projection
    } = this.props.visualElement;
    projection && (projection.root.didUpdate(), !projection.currentAnimation && projection.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    let {
      visualElement,
      layoutGroup,
      switchLayoutGroup
    } = this.props;
    let {
      projection
    } = e;
    projection && (projection.scheduleCheckAfterUnmount(), layoutGroup?.group && layoutGroup.group.remove(projection), switchLayoutGroup?.deregister && switchLayoutGroup.deregister(projection));
  }
  safeToRemove() {
    let {
      safeToRemove
    } = this.props;
    safeToRemove?.();
  }
  render() {
    return null;
  }
}
function nn(e) {
  let [r, n] = xQ();
  let i = useContext(_$$L);
  return createElement(nr, {
    ...e,
    layoutGroup: i,
    switchLayoutGroup: useContext(j),
    isPresent: r,
    safeToRemove: n
  });
}
let ni = {
  borderRadius: {
    ...r7,
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  },
  borderTopLeftRadius: r7,
  borderTopRightRadius: r7,
  borderBottomLeftRadius: r7,
  borderBottomRightRadius: r7,
  boxShadow: nt
};
let ns = {
  measureLayout: nn
};
let nu = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
let nc = nu.length;
let nh = e => "string" == typeof e ? parseFloat(e) : e;
let nd = e => "number" == typeof e || px.test(e);
function nf(e, r, n, i, s, o) {
  s ? (e.opacity = _$$j(0, void 0 !== n.opacity ? n.opacity : 1, ng(i)), e.opacityExit = _$$j(void 0 !== r.opacity ? r.opacity : 1, 0, nm(i))) : o && (e.opacity = _$$j(void 0 !== r.opacity ? r.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
  for (let s = 0; s < nc; s++) {
    let o = `border${nu[s]}Radius`;
    let a = np(r, o);
    let h = np(n, o);
    (void 0 !== a || void 0 !== h) && (a || (a = 0), h || (h = 0), 0 === a || 0 === h || nd(a) === nd(h) ? (e[o] = Math.max(_$$j(nh(a), nh(h), i), 0), (KN.test(h) || KN.test(a)) && (e[o] += "%")) : e[o] = h);
  }
  (r.rotate || n.rotate) && (e.rotate = _$$j(r.rotate || 0, n.rotate || 0, i));
}
function np(e, r) {
  return void 0 !== e[r] ? e[r] : e.borderRadius;
}
let ng = nv(0, .5, yT);
let nm = nv(.5, .95, _$$l);
function nv(e, r, n) {
  return i => i < e ? 0 : i > r ? 1 : n(_$$q(e, r, i));
}
function ny(e, r) {
  e.min = r.min;
  e.max = r.max;
}
function nb(e, r) {
  ny(e.x, r.x);
  ny(e.y, r.y);
}
function nO(e, r, n, i, s) {
  e -= r;
  e = t9(e, 1 / n, i);
  void 0 !== s && (e = t9(e, 1 / s, i));
  return e;
}
function nx(e, r = 0, n = 1, i = .5, s, o = e, a = e) {
  if (KN.test(r) && (r = parseFloat(r), r = _$$j(a.min, a.max, r / 100) - a.min), "number" != typeof r) return;
  let h = _$$j(o.min, o.max, i);
  e === o && (h -= r);
  e.min = nO(e.min, r, n, h, s);
  e.max = nO(e.max, r, n, h, s);
}
function nw(e, r, [n, i, s], o, a) {
  nx(e, r[n], r[i], r[s], r.scale, o, a);
}
let nk = ["x", "scaleX", "originX"];
let n_ = ["y", "scaleY", "originY"];
function nS(e, r, n, i) {
  nw(e.x, r, nk, n?.x, i?.x);
  nw(e.y, r, n_, n?.y, i?.y);
}
function nA(e) {
  return 0 === e.translate && 1 === e.scale;
}
function nC(e) {
  return nA(e.x) && nA(e.y);
}
function nT(e, r) {
  return e.x.min === r.x.min && e.x.max === r.x.max && e.y.min === r.y.min && e.y.max === r.y.max;
}
function nI(e) {
  return tI(e.x) / tI(e.y);
}
class nR {
  constructor() {
    this.members = [];
  }
  add(e) {
    Kq(this.members, e);
    e.scheduleRender();
  }
  remove(e) {
    if (Ai(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      let e = this.members[this.members.length - 1];
      e && this.promote(e);
    }
  }
  relegate(e) {
    let r;
    let n = this.members.findIndex(r => e === r);
    if (0 === n) return !1;
    for (let e = n; e >= 0; e--) {
      let n = this.members[e];
      if (!1 !== n.isPresent) {
        r = n;
        break;
      }
    }
    return !!r && (this.promote(r), !0);
  }
  promote(e, r) {
    var n;
    let i = this.lead;
    if (e !== i && (this.prevLead = i, this.lead = e, e.show(), i)) {
      i.instance && i.scheduleRender();
      e.scheduleRender();
      e.resumeFrom = i;
      r && (e.resumeFrom.preserveOpacity = !0);
      i.snapshot && (e.snapshot = i.snapshot, e.snapshot.latestValues = i.animationValues || i.latestValues);
      e.root?.isUpdating && (e.isLayoutDirty = !0);
      let {
        crossfade
      } = e.options;
      !1 === crossfade && i.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach(e => {
      var r;
      var n;
      var i;
      var s;
      var o;
      null === (n = (r = e.options).onExitComplete) || void 0 === n || n.call(r);
      null === (o = e.resumingFrom || (s = i.options).onExitComplete) || void 0 === o || o.call(s);
    });
  }
  scheduleRender() {
    this.members.forEach(e => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function nM(e, r, n) {
  let i = "";
  let s = e.x.translate / r.x;
  let o = e.y.translate / r.y;
  if ((s || o) && (i = `translate3d(${s}px, ${o}px, 0) `), (1 !== r.x || 1 !== r.y) && (i += `scale(${1 / r.x}, ${1 / r.y}) `), n) {
    let {
      rotate,
      rotateX,
      rotateY
    } = n;
    rotate && (i += `rotate(${rotate}deg) `);
    rotateX && (i += `rotateX(${rotateX}deg) `);
    rotateY && (i += `rotateY(${rotateY}deg) `);
  }
  let a = e.x.scale * r.x;
  let h = e.y.scale * r.y;
  (1 !== a || 1 !== h) && (i += `scale(${a}, ${h})`);
  return i || "none";
}
let nD = (e, r) => e.depth - r.depth;
class nN {
  constructor() {
    this.children = [];
    this.isDirty = !1;
  }
  add(e) {
    Kq(this.children, e);
    this.isDirty = !0;
  }
  remove(e) {
    Ai(this.children, e);
    this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(nD);
    this.isDirty = !1;
    this.children.forEach(e);
  }
}
let nL = ["", "X", "Y", "Z"];
let nj = 1e3;
let nz = 0;
function nZ({
  attachResizeListener: e,
  defaultParent: r,
  measureScroll: n,
  checkIsScrollRoot: i,
  resetTransform: s
}) {
  return class {
    constructor(e, n = {}, i = r?.()) {
      this.id = nz++;
      this.animationId = 0;
      this.children = new Set();
      this.options = {};
      this.isTreeAnimating = !1;
      this.isAnimationBlocked = !1;
      this.isLayoutDirty = !1;
      this.isTransformDirty = !1;
      this.isProjectionDirty = !1;
      this.updateManuallyBlocked = !1;
      this.updateBlockedByResize = !1;
      this.isUpdating = !1;
      this.isSVG = !1;
      this.needsReset = !1;
      this.shouldResetTransform = !1;
      this.treeScale = {
        x: 1,
        y: 1
      };
      this.eventHandlers = new Map();
      this.potentialNodes = new Map();
      this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      };
      this.updateProjection = () => {
        this.nodes.forEach(nQ);
        this.nodes.forEach(nY);
        this.nodes.forEach(nG);
      };
      this.hasProjected = !1;
      this.isVisible = !0;
      this.animationProgress = 0;
      this.sharedNodes = new Map();
      this.elementId = e;
      this.latestValues = n;
      this.root = i ? i.root || i : this;
      this.path = i ? [...i.path, i] : [];
      this.parent = i;
      this.depth = i ? i.depth + 1 : 0;
      e && this.root.registerPotentialNode(e, this);
      for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new nN());
    }
    addEventListener(e, r) {
      this.eventHandlers.has(e) || this.eventHandlers.set(e, new _$$v());
      return this.eventHandlers.get(e).add(r);
    }
    notifyListeners(e, ...r) {
      let n = this.eventHandlers.get(e);
      n?.notify(...r);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    registerPotentialNode(e, r) {
      this.potentialNodes.set(e, r);
    }
    mount(r, n = !1) {
      var i;
      if (this.instance) return;
      this.isSVG = r instanceof SVGElement && "svg" !== r.tagName;
      this.instance = r;
      let {
        layoutId,
        layout,
        visualElement
      } = this.options;
      if (visualElement && !visualElement.current && visualElement.mount(r), this.root.nodes.add(this), null === (i = this.parent) || void 0 === i || i.children.add(this), this.elementId && this.root.potentialNodes.$$delete(this.elementId), n && (layout || layoutId) && (this.isLayoutDirty = !0), e) {
        let n;
        let i = () => this.root.updateBlockedByResize = !1;
        e(r, () => {
          this.root.updateBlockedByResize = !0;
          n && n();
          n = c(i, 250);
          M.hasAnimatedSinceResize && (M.hasAnimatedSinceResize = !1, this.nodes.forEach(nW));
        });
      }
      layoutId && this.root.registerSharedNode(layoutId, this);
      !1 !== this.options.animate && visualElement && (layoutId || layout) && this.addEventListener("didUpdate", ({
        delta: e,
        hasLayoutChanged: r,
        hasRelativeTargetChanged: n,
        layout: i
      }) => {
        var s;
        var o;
        var h;
        var d;
        var p;
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0;
          this.relativeTarget = void 0;
          return;
        }
        let g = null !== (o = null !== (s = this.options.transition) && void 0 !== s ? s : visualElement.getDefaultTransition()) && void 0 !== o ? o : n2;
        let {
          onLayoutAnimationStart,
          onLayoutAnimationComplete
        } = visualElement.getProps();
        let y = !this.targetLayout || !nT(this.targetLayout, i) || n;
        let b = !r && n;
        if (this.options.layoutRoot || this.resumeFrom?.instance || b || r && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          this.setAnimationOrigin(e, b);
          let r = {
            ..._$$rU(g, "layout"),
            onPlay: onLayoutAnimationStart,
            onComplete: onLayoutAnimationComplete
          };
          (visualElement.shouldReduceMotion || this.options.layoutRoot) && (r.delay = 0, r.type = !1);
          this.startAnimation(r);
        } else {
          r || 0 !== this.animationProgress || nW(this);
          this.isLead() && (null === (p = (d = this.options).onExitComplete) || void 0 === p || p.call(d));
        }
        this.targetLayout = i;
      });
    }
    unmount() {
      var e;
      var r;
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      null === (e = this.getStack()) || void 0 === e || e.remove(this);
      null === (r = this.parent) || void 0 === r || r.children.$$delete(this);
      this.instance = void 0;
      _$$eO.preRender(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      var e;
      return this.isAnimationBlocked || this.parent?.isTreeAnimationBlocked() || !1;
    }
    startUpdate() {
      var e;
      !this.isUpdateBlocked() && (this.isUpdating = !0, null === (e = this.nodes) || void 0 === e || e.forEach(nX), this.animationId++);
    }
    getTransformTemplate() {
      var e;
      return this.options.visualElement?.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      var r;
      var n;
      var i;
      if (this.root.isUpdateBlocked()) {
        null === (n = (r = this.options).onExitComplete) || void 0 === n || n.call(r);
        return;
      }
      if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let r = this.path[e];
        r.shouldResetTransform = !0;
        r.updateScroll("snapshot");
        r.options.layoutRoot && r.willUpdate(!1);
      }
      let {
        layoutId,
        layout
      } = this.options;
      (void 0 !== layoutId || layout) && (this.prevTransformTemplateValue = this.getTransformTemplate()?.(this.latestValues, ""), this.updateSnapshot(), e && this.notifyListeners("willUpdate"));
    }
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(nB);
        return;
      }
      this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(n5), this.potentialNodes.clear()), this.nodes.forEach(nq), this.nodes.forEach(nF), this.nodes.forEach(nU), this.clearAllSnapshots(), qX.update(), qX.preRender(), qX.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(nV);
      this.sharedNodes.forEach(nH);
    }
    scheduleUpdateProjection() {
      OH.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      OH.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      !this.snapshot && this.instance && (this.snapshot = this.measure());
    }
    updateLayout() {
      var e;
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let r = this.layout;
      this.layout = this.measure(!1);
      this.layoutCorrected = tJ();
      this.isLayoutDirty = !1;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      null === (e = this.options.visualElement) || void 0 === e || e.notify("LayoutMeasure", this.layout.layoutBox, r?.layoutBox);
    }
    updateScroll(e = "measure") {
      let r = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (r = !1);
      r && (this.scroll = {
        animationId: this.root.animationId,
        phase: e,
        isRoot: i(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      var e;
      if (!s) return;
      let r = this.isLayoutDirty || this.shouldResetTransform;
      let n = this.projectionDelta && !nC(this.projectionDelta);
      let i = this.getTransformTemplate()?.(this.latestValues, "");
      let o = i !== this.prevTransformTemplateValue;
      r && (n || t4(this.latestValues) || o) && (s(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(e = !0) {
      let r = this.measurePageBox();
      let n = this.removeElementScroll(r);
      e && (n = this.removeTransform(n));
      n6(n);
      return {
        animationId: this.root.animationId,
        measuredBox: r,
        layoutBox: n,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      let {
        visualElement
      } = this.options;
      if (!visualElement) return tJ();
      let r = visualElement.measureViewportBox();
      let {
        scroll
      } = this.root;
      scroll && (rs(r.x, scroll.offset.x), rs(r.y, scroll.offset.y));
      return r;
    }
    removeElementScroll(e) {
      let r = tJ();
      nb(r, e);
      for (let n = 0; n < this.path.length; n++) {
        let i = this.path[n];
        let {
          scroll,
          options
        } = i;
        if (i !== this.root && scroll && options.layoutScroll) {
          if (scroll.isRoot) {
            nb(r, e);
            let {
              scroll
            } = this.root;
            scroll && (rs(r.x, -scroll.offset.x), rs(r.y, -scroll.offset.y));
          }
          rs(r.x, scroll.offset.x);
          rs(r.y, scroll.offset.y);
        }
      }
      return r;
    }
    applyTransform(e, r = !1) {
      let n = tJ();
      nb(n, e);
      for (let e = 0; e < this.path.length; e++) {
        let i = this.path[e];
        !r && i.options.layoutScroll && i.scroll && i !== i.root && ru(n, {
          x: -i.scroll.offset.x,
          y: -i.scroll.offset.y
        });
        t4(i.latestValues) && ru(n, i.latestValues);
      }
      t4(this.latestValues) && ru(n, this.latestValues);
      return n;
    }
    removeTransform(e) {
      var r;
      let n = tJ();
      nb(n, e);
      for (let e = 0; e < this.path.length; e++) {
        let i = this.path[e];
        if (!i.instance || !t4(i.latestValues)) continue;
        t6(i.latestValues) && i.updateSnapshot();
        let s = tJ();
        nb(s, i.measurePageBox());
        nS(n, i.latestValues, i.snapshot?.layoutBox, s);
      }
      t4(this.latestValues) && nS(n, this.latestValues);
      return n;
    }
    setTargetDelta(e) {
      this.targetDelta = e;
      this.isProjectionDirty = !0;
      this.root.scheduleUpdateProjection();
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: void 0 === e.crossfade || e.crossfade
      };
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = !1;
    }
    resolveTargetDelta() {
      var e;
      let r = this.getLead();
      if (this.isProjectionDirty || (this.isProjectionDirty = r.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = r.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
      let {
        layout,
        layoutId
      } = this.options;
      if (this.layout && (layout || layoutId)) {
        if (!this.targetDelta && !this.relativeTarget) {
          let e = this.getClosestProjectingParent();
          e && e.layout ? (this.relativeParent = e, this.relativeTarget = tJ(), this.relativeTargetOrigin = tJ(), tL(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), nb(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = tJ(), this.targetWithTransforms = tJ()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent?.target ? tN(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nb(this.target, this.layout.layoutBox), rr(this.target, this.targetDelta)) : nb(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          let e = this.getClosestProjectingParent();
          e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target ? (this.relativeParent = e, this.relativeTarget = tJ(), this.relativeTargetOrigin = tJ(), tL(this.relativeTargetOrigin, this.target, e.target), nb(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      return !this.parent || t6(this.parent.latestValues) || t8(this.parent.latestValues) ? void 0 : (this.parent.relativeTarget || this.parent.targetDelta || this.parent.options.layoutRoot) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
    }
    calcProjection() {
      var e;
      let {
        isProjectionDirty,
        isTransformDirty
      } = this;
      this.isProjectionDirty = this.isTransformDirty = !1;
      let i = this.getLead();
      let s = !!this.resumingFrom || this !== i;
      let o = !0;
      if (isProjectionDirty && (o = !1), s && isTransformDirty && (o = !1), o) return;
      let {
        layout,
        layoutId
      } = this.options;
      if (this.isTreeAnimating = !!(this.parent?.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(layout || layoutId)) return;
      nb(this.layoutCorrected, this.layout.layoutBox);
      rn(this.layoutCorrected, this.treeScale, this.path, s);
      let {
        target
      } = i;
      if (!target) return;
      this.projectionDelta || (this.projectionDelta = tH(), this.projectionDeltaWithTransform = tH());
      let p = this.treeScale.x;
      let g = this.treeScale.y;
      let m = this.projectionTransform;
      tM(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = nM(this.projectionDelta, this.treeScale);
      (this.projectionTransform !== m || this.treeScale.x !== p || this.treeScale.y !== g) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", target));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      var r;
      var n;
      var i;
      null === (n = (r = this.options).scheduleRender) || void 0 === n || n.call(r);
      e && (null === (i = this.getStack()) || void 0 === i || i.scheduleRender());
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(e, r = !1) {
      var n;
      var i;
      let s = this.snapshot;
      let o = s?.latestValues || {};
      let a = {
        ...this.latestValues
      };
      let h = tH();
      this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0);
      this.attemptToResolveRelativeTarget = !r;
      let d = tJ();
      let p = s?.source !== this.layout?.source;
      let g = 1 >= (this.getStack()?.members.length || 0);
      let m = !!(p && !g && !0 === this.options.crossfade && !this.path.some(n1));
      this.animationProgress = 0;
      this.mixTargetDelta = r => {
        var n;
        let i = r / 1e3;
        nK(h.x, e.x, i);
        nK(h.y, e.y, i);
        this.setTargetDelta(h);
        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent?.layout && (tL(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), n0(this.relativeTarget, this.relativeTargetOrigin, d, i));
        p && (this.animationValues = a, nf(a, o, this.latestValues, i, m, g));
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = i;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(e) {
      var r;
      var n;
      this.notifyListeners("animationStart");
      null === (r = this.currentAnimation) || void 0 === r || r.stop();
      this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop());
      this.pendingAnimation && (_$$eO.update(this.pendingAnimation), this.pendingAnimation = void 0);
      this.pendingAnimation = OH.update(() => {
        M.hasAnimatedSinceResize = !0;
        this.currentAnimation = _$$i(0, nj, {
          ...e,
          onUpdate: r => {
            var n;
            this.mixTargetDelta(r);
            e.onUpdate?.call(e, r);
          },
          onComplete: () => {
            var r;
            e.onComplete?.call(e);
            this.completeAnimation();
          }
        });
        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation);
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      var e;
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      var e;
      this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, nj), this.currentAnimation.stop());
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      let e = this.getLead();
      let {
        targetWithTransforms,
        target,
        layout,
        latestValues
      } = e;
      if (targetWithTransforms && target && layout) {
        if (this !== e && this.layout && layout && n4(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
          n = this.target || tJ();
          let r = tI(this.layout.layoutBox.x);
          target.x.min = e.target.x.min;
          target.x.max = target.x.min + r;
          let i = tI(this.layout.layoutBox.y);
          target.y.min = e.target.y.min;
          target.y.max = target.y.min + i;
        }
        nb(targetWithTransforms, target);
        ru(targetWithTransforms, latestValues);
        tM(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
      }
    }
    registerSharedNode(e, r) {
      var n;
      var i;
      var s;
      this.sharedNodes.has(e) || this.sharedNodes.set(e, new nR());
      this.sharedNodes.get(e).add(r);
      r.promote({
        transition: r.options.initialPromotionConfig?.transition,
        preserveFollowOpacity: r.options.initialPromotionConfig?.shouldPreserveFollowOpacity?.call(i, r)
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      var e;
      let {
        layoutId
      } = this.options;
      return layoutId && this.getStack()?.lead || this;
    }
    getPrevLead() {
      var e;
      let {
        layoutId
      } = this.options;
      return layoutId ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let {
        layoutId
      } = this.options;
      if (layoutId) return this.root.sharedNodes.get(layoutId);
    }
    promote({
      needsReset: e,
      transition: r,
      preserveFollowOpacity: n
    } = {}) {
      let i = this.getStack();
      i && i.promote(this, n);
      e && (this.projectionDelta = void 0, this.needsReset = !0);
      r && this.setOptions({
        transition: r
      });
    }
    relegate() {
      let e = this.getStack();
      return !!e && e.relegate(this);
    }
    resetRotation() {
      let {
        visualElement
      } = this.options;
      if (!visualElement) return;
      let r = !1;
      let {
        latestValues
      } = visualElement;
      if ((latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ) && (r = !0), !r) return;
      let i = {};
      for (let r = 0; r < nL.length; r++) {
        let s = "rotate" + nL[r];
        latestValues[s] && (i[s] = latestValues[s], visualElement.setStaticValue(s, 0));
      }
      for (let r in visualElement?.render(), i) visualElement.setStaticValue(r, i[r]);
      visualElement.scheduleRender();
    }
    getProjectionStyles(e = {}) {
      var r;
      var n;
      let i = {};
      if (!this.instance || this.isSVG) return i;
      if (!this.isVisible) return {
        visibility: "hidden"
      };
      i.visibility = "";
      let s = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1;
        i.opacity = "";
        i.pointerEvents = eC(e.pointerEvents) || "";
        i.transform = s ? s(this.latestValues, "") : "none";
        return i;
      }
      let o = this.getLead();
      if (!this.projectionDelta || !this.layout || !o.target) {
        let r = {};
        this.options.layoutId && (r.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, r.pointerEvents = eC(e.pointerEvents) || "");
        this.hasProjected && !t4(this.latestValues) && (r.transform = s ? s({}, "") : "none", this.hasProjected = !1);
        return r;
      }
      let a = o.animationValues || o.latestValues;
      this.applyTransformsToTarget();
      i.transform = nM(this.projectionDeltaWithTransform, this.treeScale, a);
      s && (i.transform = s(a, i.transform));
      let {
        x,
        y
      } = this.projectionDelta;
      for (let e in i.transformOrigin = `${100 * x.origin}% ${100 * y.origin}% 0`, o.animationValues ? i.opacity = o === this ? null !== (n = null !== (r = a.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : i.opacity = o === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0, B) {
        if (void 0 === a[e]) continue;
        let {
          correct,
          applyTo
        } = B[e];
        let s = "none" === i.transform ? a[e] : correct(a[e], o);
        if (applyTo) {
          let e = applyTo.length;
          for (let r = 0; r < e; r++) i[applyTo[r]] = s;
        } else i[e] = s;
      }
      this.options.layoutId && (i.pointerEvents = o === this ? eC(e.pointerEvents) || "" : "none");
      return i;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach(e => {
        var r;
        return e.currentAnimation?.stop();
      });
      this.root.nodes.forEach(nB);
      this.root.sharedNodes.clear();
    }
  };
}
function nF(e) {
  e.updateLayout();
}
function nU(e) {
  var r;
  var n;
  var i;
  let s = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && s && e.hasListeners("didUpdate")) {
    let {
      layoutBox,
      measuredBox
    } = e.layout;
    let {
      animationType
    } = e.options;
    let o = s.source !== e.layout.source;
    "size" === animationType ? t0(e => {
      let n = o ? s.measuredBox[e] : s.layoutBox[e];
      let i = tI(n);
      n.min = layoutBox[e].min;
      n.max = n.min + i;
    }) : n4(animationType, s.layoutBox, layoutBox) && t0(e => {
      let n = o ? s.measuredBox[e] : s.layoutBox[e];
      let i = tI(layoutBox[e]);
      n.max = n.min + i;
    });
    let a = tH();
    tM(a, layoutBox, s.layoutBox);
    let h = tH();
    o ? tM(h, e.applyTransform(measuredBox, !0), s.measuredBox) : tM(h, layoutBox, s.layoutBox);
    let d = !nC(a);
    let p = !1;
    if (!e.resumeFrom) {
      let n = e.getClosestProjectingParent();
      if (n && !n.resumeFrom) {
        let {
          snapshot,
          layout
        } = n;
        if (snapshot && layout) {
          let a = tJ();
          tL(a, s.layoutBox, snapshot.layoutBox);
          let h = tJ();
          tL(h, layoutBox, layout.layoutBox);
          nT(a, h) || (p = !0);
          n.options.layoutRoot && (e.relativeTarget = h, e.relativeTargetOrigin = a, e.relativeParent = n);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: layoutBox,
      snapshot: s,
      delta: h,
      layoutDelta: a,
      hasLayoutChanged: d,
      hasRelativeTargetChanged: p
    });
  } else e.isLead() && (null === (i = (n = e.options).onExitComplete) || void 0 === i || i.call(n));
  e.options.transition = void 0;
}
function nQ(e) {
  e.isProjectionDirty || (e.isProjectionDirty = !!(e.parent && e.parent.isProjectionDirty));
  e.isTransformDirty || (e.isTransformDirty = !!(e.parent && e.parent.isTransformDirty));
}
function nV(e) {
  e.clearSnapshot();
}
function nB(e) {
  e.clearMeasurements();
}
function nq(e) {
  let {
    visualElement
  } = e.options;
  visualElement?.getProps().onBeforeLayoutMeasure && visualElement.notify("BeforeLayoutMeasure");
  e.resetTransform();
}
function nW(e) {
  e.finishAnimation();
  e.targetDelta = e.relativeTarget = e.target = void 0;
}
function nY(e) {
  e.resolveTargetDelta();
}
function nG(e) {
  e.calcProjection();
}
function nX(e) {
  e.resetRotation();
}
function nH(e) {
  e.removeLeadSnapshot();
}
function nK(e, r, n) {
  e.translate = _$$j(r.translate, 0, n);
  e.scale = _$$j(r.scale, 1, n);
  e.origin = r.origin;
  e.originPoint = r.originPoint;
}
function nJ(e, r, n, i) {
  e.min = _$$j(r.min, n.min, i);
  e.max = _$$j(r.max, n.max, i);
}
function n0(e, r, n, i) {
  nJ(e.x, r.x, n.x, i);
  nJ(e.y, r.y, n.y, i);
}
function n1(e) {
  return e.animationValues && void 0 !== e.animationValues.opacityExit;
}
let n2 = {
  duration: .45,
  ease: [.4, 0, .1, 1]
};
function n5(e, r) {
  let n = e.root;
  for (let r = e.path.length - 1; r >= 0; r--) if (e.path[r].instance) {
    n = e.path[r];
    break;
  }
  let i = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${r}"]`);
  i && e.mount(i, !0);
}
function n3(e) {
  e.min = Math.round(e.min);
  e.max = Math.round(e.max);
}
function n6(e) {
  n3(e.x);
  n3(e.y);
}
function n4(e, r, n) {
  return "position" === e || "preserve-aspect" === e && !tP(nI(r), nI(n), .2);
}
let n8 = nZ({
  attachResizeListener: (e, r) => eN(e, "resize", r),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
});
let n7 = {
  current: void 0
};
let n9 = nZ({
  measureScroll: e => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!n7.current) {
      let e = new n8(0, {});
      e.mount(window);
      e.setOptions({
        layoutScroll: !0
      });
      n7.current = e;
    }
    return n7.current;
  },
  resetTransform: (e, r) => {
    e.style.transform = void 0 !== r ? r : "none";
  },
  checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
});
let ie = {
  ...tp,
  ...te,
  ...ry,
  ...ns
};
let $$it0 = U((e, r) => eD(e, r, ie, r4, n9));
export const P = $$it0;