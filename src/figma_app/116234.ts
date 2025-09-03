import { useCallback, useEffect } from "react";
import { debug } from "../figma_app/465776";
import { k } from "../905/749197";
import { KjJ } from "../figma_app/763686";
import { F0, rV, PA, nO } from "../figma_app/387100";
import { getSingletonSceneGraph } from "../905/700578";
import { fp } from "../figma_app/27355";
import { xx } from "../figma_app/815945";
import { Fj, GY } from "../figma_app/76123";
import { cX, YI, K3 } from "../figma_app/678300";
import { n as _$$n } from "../figma_app/583890";
import { gz } from "../figma_app/605071";
var $$m12 = (e => (e.Object = "OBJECT", e.Webpage = "WEBPAGE", e.CodeComponent = "CODE_COMPONENT", e))($$m12 || {});
export function $$g8(e, t, r, n) {
  return e.top + e.height > n - t && e.top < n + r + t || !!e.fixed;
}
export function $$f4(e, t, r) {
  return $$g8(e, t / 2, t, r);
}
export function $$E9(e, t, r) {
  if (!e.length) return [];
  let n = t => {
    let r;
    let n;
    let a = e.length;
    let s = 0;
    let o = a - 1;
    if (t <= 0) return 0;
    if (t >= e[a - 1].top + e[a - 1].height) return a - 1;
    for (debug(s <= o, "binary search min <= max predicate failed"); s <= o;) if ((n = e[r = (s + o) / 2 | 0]).top + n.height < t) s = r + 1;else if (n.top > t) o = r - 1;else break;
    return r;
  };
  let a = t / 2;
  let s = n(r - a);
  let o = n(r + t + a);
  return e.slice(s, o + 1);
}
function y(e, t, r) {
  let n = e.get(t);
  if (debug(null != n, "node not found in scenegraph"), !(n.isExpanded || n.isTemporarilyExpanded) || 0 === n.uiOrderedChildren.length) return r[t];
  let a = r[t];
  for (let t of (n.fixedChildrenCount > 0 && (a += 2 * _$$n), n.uiOrderedChildren)) a += y(e, t, r);
  return a;
}
export function $$b11(e, t) {
  let r = [];
  let n = t.get(e);
  for (debug(null != n, "node not found in scenegraph"); n && "CANVAS" !== n.type;) {
    let e = n.guid;
    n = n.parentNode;
    debug(null != n, "parent node not found in scenegraph");
    let t = n.uiOrderedChildren.indexOf(e);
    r.push(t);
  }
  r.reverse();
  return r;
}
export function $$T13(e, t, r) {
  let n = e.reduce((e, r) => t.get(e.uiOrderedChildren[r]), t.get(r));
  debug(null != n, "node from path is not found in scenegraph");
  return n.guid;
}
export function $$I0(e, t, r, n, i, a = !1) {
  let s = null;
  let o = null;
  let l = null;
  for (let e in r) {
    let t = r[e];
    let a = t + n[e];
    if (i >= t && i <= a) {
      s = e;
      break;
    }
    (!o || r[e] < r[o]) && (o = e);
    (!l || r[e] > r[l]) && (l = e);
  }
  if (!s && (o && i < r[o] ? s = o : l && i > r[l] + n[l] && (s = l)), s && a) {
    let r = cX(e, t, s);
    if (r) return r.guid;
  }
  return s;
}
let $$S14 = 16;
let v = xx((e, t) => {
  let r = 1 / 0;
  YI(e, t, t => {
    t && (r = Math.min(r, F0(e, t.guid)));
  });
  r === 1 / 0 && (r = 0);
  return r;
});
let A = xx((e, t, r) => null !== t && null === t.guid && t.children.length > 0 && !t.children.some(t => rV(e, t, r)));
let x = xx((e, t) => {
  let r = new Set();
  YI(e, t, e => {
    e && r.add(e.type);
  });
  return r;
});
let N = xx((e, t) => {
  if (!t) return {};
  let r = {};
  t.children.forEach(t => {
    r[t] = F0(e, t);
  });
  return r;
});
let C = xx((e, t, r) => {
  let n = e.get(r);
  if (!n) return null;
  for (; n;) {
    if (null != t[n.guid]) return t[n.guid];
    n = n.parentNode;
  }
  return null;
});
function w(e, t, r, n) {
  if (A(e, r, n)) return !1;
  let i = x(e, t);
  let a = e.get(n);
  if (!a) return !1;
  let s = a.type;
  return ("SLIDE_GRID" !== s || !(i.size > 1) && !!i.has("SLIDE_ROW")) && ("SLIDE_ROW" !== s || !(i.size > 1) && !!i.has("SLIDE")) && (!i.has("SLIDE") || "SLIDE_ROW" === s);
}
function O(e, t, r, n, i, a, s) {
  return t < r.uiOrderedChildren.length ? n[r.uiOrderedChildren[t]] + ("before" === a ? 0 : i[r.uiOrderedChildren[t]]) : n[r.guid] + y(e, r.guid, i) - s;
}
function R(e, t) {
  return e < t.fixedChildrenCount ? KjJ.FIXED : KjJ.SCROLLS;
}
export function $$L1(e, t, r, n, i, a, l) {
  let d;
  let c = e.guid;
  let u = t[c];
  let p = r[c];
  if (e.childCount) {
    let n = e.childrenNodes[e.childCount - 1];
    n.childCount || (d = t[n.guid] + r[n.guid]);
  } else d = u + p;
  if (!d) {
    let r;
    let a = e;
    for (; !r && a.parentNode && "CANVAS" !== a.type;) {
      let e = a.parentNode.uiOrderedChildren.map(e => n.get(e));
      let t = e.findIndex(e => e.guid === a.guid);
      t < e.length - 1 && (r = e[t + 1]);
      a = a.parentNode;
    }
    d = r ? t[r.guid] : i;
  }
  return {
    parentGuid: c,
    index: l,
    section: void 0 !== l ? R(l, e) : KjJ.SCROLLS,
    parentTop: u,
    lineTop: void 0 !== l ? O(n, l, e, t, r, "before", a) : void 0,
    lineIndent: (F0(n, c) + 1) * $$S14,
    isCanvasStackReparenting: !0,
    bottomForCanvasStackReparenting: d
  };
}
function P(e, t, r, n, a, l, d, c, u, p) {
  let _ = a > 0 ? Math.floor(a / $$S14) : Math.ceil(a / $$S14);
  let h = v(e, t) + _;
  let m = O(e, d, l, r, n, c, p);
  let g = d < l.fixedChildrenCount ? KjJ.FIXED : KjJ.SCROLLS;
  let f = l;
  let E = null !== u && null !== u.guid && !rV(e, u.guid, l.guid);
  if (E) {
    let t = e.get(u.guid);
    t && (f = t, d = t.childCount);
  }
  if (!w(e, t, u, l.guid)) return null;
  let y = {
    parent: f,
    index: d + ("before" === c ? 0 : 1),
    section: g
  };
  let b = F0(e, f.guid) + 1;
  for (; !E && b > h;) {
    let r = function (e, t) {
      if ("CANVAS" === t.parent.type || "DOCUMENT" === t.parent.type || t.index !== t.parent.uiOrderedChildren.length || t.section === KjJ.FIXED) return t;
      let r = PA(e, t.parent.guid);
      debug(null != r, "parent node not in scenegraph");
      let n = r.uiOrderedChildren.indexOf(t.parent.guid);
      return {
        parent: r,
        index: n + 1,
        section: R(n, r)
      };
    }(e, y);
    if (!w(e, t, u, r.parent.guid)) break;
    if (r !== y) {
      y = r;
      b--;
    } else break;
  }
  for (; b < h;) {
    let r = function (e, t) {
      if (0 === t.index) return t;
      let r = e.get(t.parent.uiOrderedChildren[t.index - 1]);
      return (debug(null != r, "node not in scenegraph"), nO(r.type) && t.index !== t.parent.fixedChildrenCount && (r.isExpanded || r.isTemporarilyExpanded || !(r.uiOrderedChildren.length > 0))) ? {
        parent: r,
        index: r.uiOrderedChildren.length,
        section: KjJ.SCROLLS
      } : t;
    }(e, y);
    if (!w(e, t, u, r.parent.guid)) break;
    if (r !== y) {
      y = r;
      b++;
    } else break;
  }
  let T = y.parent.guid;
  let I = N(e, u);
  let A = Math.max(0, b - (C(e, I, f.guid) ?? F0(e, f.guid)));
  return {
    parentGuid: T,
    index: y.index,
    section: y.section,
    parentTop: r[T],
    lineTop: m,
    lineIndent: A * $$S14
  };
}
function D(e, t, r, n, a, l, d, c, u, _) {
  let h = e.get(a);
  if (!h) return null;
  let m = r[a];
  let g = n[a];
  let f = PA(e, a);
  debug(null != f, "parent not found");
  let E = f.uiOrderedChildren.indexOf(a);
  let b = nO(h.type) && !$$F15(c);
  let T = (i, a, s) => P(e, t, r, n, l, i, a, s, u, _);
  if (b && K3(t, a)) return T(f, E, d > m + y(e, a, n) / 2 ? "after" : "before");
  if (b) {
    if (d < m + g / 3) return T(f, E, "before");
    if (!(d < m + 2 * g / 3)) return h.isExpanded || h.isTemporarilyExpanded ? T(h, 0, "before") : T(f, E, "after");
    {
      let r = e.get(a);
      return r && w(e, t, u, a) ? {
        parentGuid: a,
        index: r.fixedChildrenCount,
        section: KjJ.SCROLLS,
        parentTop: m
      } : null;
    }
  }
  if (!(d > m + g)) return T(f, E, d > m + g / 2 || $$F15(c) && 0 === m ? "after" : "before");
  {
    let t = h;
    for (; "CANVAS" !== t.type;) {
      let r = null != t.parentGuid ? e.get(t.parentGuid) : null;
      debug(null != r, "node not in scenegraph");
      t = r;
    }
    return T(t, t.uiOrderedChildren.length, "before");
  }
}
export function $$k6(e, t, r, n, a, o, l, d, c, u, _) {
  if (d) {
    let t = e.get(d);
    return t ? {
      parentGuid: d,
      index: t.fixedChildrenCount,
      section: KjJ.SCROLLS,
      parentTop: "sticky"
    } : null;
  }
  {
    let d = function (e, t) {
      let r = null;
      for (let n in e) {
        let i = e[n];
        t >= i.top && t < i.top + i.height && (!r || i.top > r.top) && (r = i);
      }
      return r;
    }(a, l);
    let h = $$I0(e, t, r, n, l, !0);
    let m = null;
    !h && d ? m = function (e, t, r, n, a, o, l, d, c, u) {
      let _ = cX(e, t, a.parentGuid);
      if (_) return D(e, t, r, n, _.guid, o, l, d, c, u);
      {
        var h;
        let l = e.get(a.parentGuid);
        debug(null != l, "parent node not in scenegraph");
        h = a.type === KjJ.FIXED ? 0 : l.fixedChildrenCount;
        return P(e, t, r, n, o, l, h, "before", c, u);
      }
    }(e, t, r, n, d, o, l, c, u, _) : h && (m = D(e, t, r, n, h, o, l, c, u, _));
    m && d && d.parentGuid === m.parentGuid && (m.section = d.type);
    return m;
  }
}
export function $$M2(e, t) {
  return e.childrenDisplayOrder === k.DESIGN ? e.uiOrderedChildren.length - t : t;
}
export function $$F15(e) {
  return "WEBPAGE" === e;
}
export function $$j3({
  getNode: e,
  selection: t
}) {
  let [r, i] = fp(Fj);
  let [a, s] = fp(GY);
  let o = useCallback(() => {
    i(new Set());
    s(new Set());
  }, [i, s]);
  useEffect(() => {
    if (!a.size) return;
    if (!function (e, t, r) {
      let n = Object.keys(e);
      return !!n.length && n.every(e => {
        let n = r(e);
        for (; n && "CANVAS" !== n.type;) {
          if (t.has(n.guid)) return !0;
          n = n.parentNode;
        }
        return !1;
      });
    }(t, a, e)) {
      o();
      return;
    }
    let n = Object.keys(t).filter(e => r.has(e));
    if (!n.length) return;
    if (n.length === r.size) {
      o();
      return;
    }
    let s = new Set(r);
    n.forEach(e => s.$$delete(e));
    i(s);
  }, [e, r, a, o, i, t]);
  return null;
}
export function $$U7() {
  let {
    rowWidthsCache
  } = gz();
  useEffect(() => getSingletonSceneGraph().onDelete(t => {
    t.forEach(t => {
      delete rowWidthsCache[t];
    });
  }), [rowWidthsCache]);
}
export function $$B5(e) {
  return "object" === e.rowType;
}
export function $$G10(e, t) {
  let r = e / t;
  return t * r * r;
}
export const GN = $$I0;
export const Gs = $$L1;
export const Lc = $$M2;
export const M3 = $$j3;
export const Mq = $$f4;
export const N1 = $$B5;
export const OL = $$k6;
export const SV = $$U7;
export const U$ = $$g8;
export const Uw = $$E9;
export const bm = $$G10;
export const eT = $$b11;
export const g$ = $$m12;
export const g2 = $$T13;
export const iy = $$S14;
export const qW = $$F15;