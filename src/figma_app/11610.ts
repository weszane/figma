import { debug, assert } from "../figma_app/465776";
import { xN, qE } from "../figma_app/492908";
import { mKm } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { X } from "../905/797503";
export async function $$d1(e, t, r, n) {
  let i = l7.testSetup("sites-compare-layout", () => {
    let r = g(X(e));
    let n = t.width;
    let i = r.stackVerticalLayoutSize === mKm.HUG_CONTENT ? r.size.y : t.height;
    (r.size.x !== n || r.size.y !== i) && r.resizeWithConstraints(n, i);
    return r;
  });
  try {
    return await r(i);
  } finally {
    l7.testSetup("sites-compare-layout", () => {
      n?.keepClone ? i.name = `cloned: ${i.name}` : i?.removeSelfAndChildren();
    });
  }
}
export async function $$c3(e, t, r, i = {}) {
  let a;
  await document.fonts.ready;
  let l = e ? getSingletonSceneGraph().get(e.id) : void 0;
  if (!l) throw Error("node not found");
  i = {
    ...i,
    debugOutlines: !0
  };
  let p = r.width;
  if (debug(void 0 !== p, "Expect site preview window size to be defined"), l.isResponsiveSet) {
    let e = l.childrenNodes.sort((e, t) => e.size.x - t.size.x);
    let t = e[0].size.x;
    for (let r of (l = e[0], e)) {
      let e = r.size.x;
      e <= p && e > t && (t = e, l = r);
    }
  }
  if (!l) throw Error("node not found");
  await $$d1(l, t.rect, e => {
    l7.testSetup("sites-compare-layout", () => {
      a = [...$$u0(e, t), ...$$m6(e, t, i).differences];
    });
  }, i);
  return a;
}
export function $$u0(e, t) {
  let r = E(e);
  let n = [];
  b((e, t) => {
    if (!e || !t) return;
    let {
      node
    } = e;
    "TEXT" === node.type && ("HEIGHT" === node.textAutoResize ? (xN(e.rect.height, t.rect.height, .1 * e.rect.height) || n.push(p("textsize", e, t)), node.textAutoResize = "NONE", node.resizeWithConstraints(node.size.x, t.rect.height)) : "WIDTH_AND_HEIGHT" === node.textAutoResize && (xN(e.rect.width, t.rect.width, .1 * e.rect.width) && xN(e.rect.height, t.rect.height, .1 * e.rect.height) || n.push(p("textsize", e, t)), node.textAutoResize = "NONE", node.resizeWithConstraints(t.rect.width, t.rect.height)));
  }, r, t);
  return n;
}
function p(e, t, r) {
  return {
    type: e,
    node: t,
    element: r
  };
}
export function $$_5(e, t = !1) {
  let r = [];
  for (let {
    type,
    element
  } of e) element && ("position" === type ? r.push({
    id: element.id,
    prop: "outline",
    value: "dashed rgba(255, 156, 0, 0.75) 1px"
  }) : "size" === type ? r.push({
    id: element.id,
    prop: "outline",
    value: "dashed red 1px"
  }) : "textsize" === type && t && r.push({
    id: element.id,
    prop: "outline",
    value: "dashed blue"
  }));
  return r;
}
export function $$h4(e, t, r) {
  let n = E(e);
  return t ? xN(n.rect.height, t.rect.height, r.threshold) ? [] : [p("size", n, t)] : [p("missing", n, t)];
}
export function $$m6(e, t, r) {
  let n = E(e);
  let {
    threshold
  } = r;
  let s = [];
  let o = 0;
  let l = 0;
  b((e, t, r) => {
    if (!e || !t) {
      s.push(p("missing", e, t));
      return;
    }
    if ("VECTOR" === e.node.type || t.isDisplayContents) return;
    let n = e.rect.x + e.rect.width;
    let d = e.rect.y + e.rect.height;
    let c = t.rect.x + t.rect.width;
    let u = t.rect.y + t.rect.height;
    let _ = !!r?.skipPosition || (xN(e.rect.x, t.rect.x, threshold) || xN(n, c, threshold)) && (xN(e.rect.y, t.rect.y, threshold) || xN(d, u, threshold));
    let h = xN(e.rect.width, t.rect.width, threshold) && xN(e.rect.height, t.rect.height, threshold);
    let m = e.rect.width * e.rect.height;
    let g = function (e, t) {
      let r = Math.min(e.x, t.x);
      let n = Math.min(e.y, t.y);
      let i = Math.max(e.x + e.width, t.x + t.width) - r;
      let a = Math.max(e.y + e.height, t.y + t.height) - n;
      return {
        x: r,
        y: n,
        width: i,
        height: a
      };
    }(e.rect, t.rect);
    let f = g.width * g.height;
    let E = function (e, t) {
      let r = qE(e.x, t.x, t.x + t.width);
      let n = qE(e.x + e.width, t.x, t.x + t.width) - r;
      let a = qE(e.y, t.y, t.y + t.height);
      let s = qE(e.y + e.height, t.y, t.y + t.height) - a;
      return {
        x: r,
        y: a,
        width: n,
        height: s
      };
    }(e.rect, t.rect);
    let y = Math.min(1, (f - E.width * E.height) / m) * (e?.areaFraction ?? 0);
    _ || s.push(p("position", e, t));
    h || (s.push(p("size", e, t)), l += y);
    h && _ || (o += y);
    return {
      hasSamePosition: _
    };
  }, n, t);
  return {
    differences: s,
    layoutDifferenceScore: o,
    sizeDifferenceScore: l
  };
}
function g(e) {
  "INSTANCE" === e.type && (e = getSingletonSceneGraph().get(e.detachInstance()));
  e.childrenNodes?.map(g);
  return e;
}
function f(e) {
  var t;
  return (t = e).id && (t.id.match(/^node-(.*)[0-9]+_[0-9]+$/) || t.id.match(/;node-[0-9]+_[0-9]+$/)) ? [e] : [...e.children].map(f).flat();
}
function E(e) {
  let t = e.absoluteBoundingBox;
  assert(null !== e.absoluteRenderBounds, "Node being compared should not be clipped.");
  return function e(t, r, n, i) {
    let a = t.childrenNodes.filter(e => e.visible);
    let s = function (e, t) {
      let {
        x,
        y,
        width,
        height
      } = e;
      return {
        x: x - t.x,
        y: y - t.y,
        width,
        height
      };
    }(function (e) {
      let {
        x,
        y,
        w,
        h
      } = e;
      return {
        x,
        y,
        width: w,
        height: h
      };
    }(function (e, t) {
      if (!e.parentNode?.bordersTakeSpace || !e.strokePaints.data.length) return t;
      let {
        x,
        y: _y,
        w,
        h: _h
      } = t;
      let s = "OUTSIDE" === e.strokeAlign ? 1 : "CENTER" === e.strokeAlign ? .5 : 0;
      let o = t => (e.borderStrokeWeightsIndependent ? t : e.strokeWeight) * s;
      let l = o(e.borderLeftWeight);
      let d = o(e.borderRightWeight);
      let c = o(e.borderTopWeight);
      let u = o(e.borderBottomWeight);
      let p = e.relativeTransform;
      let _ = e => ({
        x: e.x * p.m00 + e.y * p.m01,
        y: e.x * p.m10 + e.y * p.m11
      });
      let h = _({
        x: -l,
        y: -c
      });
      let m = _({
        x: d,
        y: -c
      });
      let g = _({
        x: -l,
        y: u
      });
      let f = _({
        x: d,
        y: u
      });
      let E = Math.min(h.x, m.x, g.x, f.x);
      let y = Math.max(h.x, m.x, g.x, f.x);
      let b = Math.min(h.y, m.y, g.y, f.y);
      return {
        x: x + E,
        y: _y + b,
        w: w - E + y,
        h: _h - b + Math.max(h.y, m.y, g.y, f.y)
      };
    }(t, t.absoluteBoundingBox)), r);
    let o = y(t);
    for (let e of a) o += y(e);
    let l = e => i * (0 === o ? 0 : y(e) / o);
    let d = [...n, t.name];
    return {
      id: t.guid,
      name: d.join(" > "),
      node: t,
      children: a.map(t => e(t, r, d, l(t))),
      rect: s,
      areaFraction: l(t)
    };
  }(e, t, [], 1);
}
function y(e) {
  return (e.absoluteRenderBounds?.w ?? 0) * (e.absoluteRenderBounds?.h ?? 0);
}
function b(e, t, r, n) {
  let i = e(t, r, n);
  if (!t || !r) return;
  let a = r.isFlattenedToImage ? [] : t.children;
  let s = !!i && "object" == typeof i && "hasSamePosition" in i && !i.hasSamePosition;
  for (let t = 0; t < Math.max(r.children.length, a.length); t++) b(e, a[t], r.children[t], {
    skipPosition: s
  });
}
export async function $$T2(e, t, r) {
  let n = l7.testSetup("sites-compare-layout", () => g(X(e)));
  try {
    return await t(n);
  } finally {
    l7.testSetup("sites-compare-layout", () => {
      r?.keepClone ? n.name = `cloned: ${n.name}` : n?.removeSelfAndChildren();
    });
  }
}
export const BW = $$u0;
export const WD = $$d1;
export const YZ = $$T2;
export const _p = $$c3;
export const hv = $$h4;
export const q5 = $$_5;
export const z_ = $$m6;