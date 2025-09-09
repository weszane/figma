import { logger } from "../905/651849";
import { N } from "../905/55273";
import { _d, p8, s9, uM, n4, uS, Nj, MM, sH, JX, BS, cA, mW, Nv, LZ } from "../905/259345";
function s(e) {
  return e.join(",");
}
function o(e, t) {
  if (e.from.id !== t.id && e.to.id !== t.id) throw Error("vertex is not in edge!");
  return e.from.id === t.id ? e.to : e.from;
}
function l(e, t) {
  return e.from.id === t.id ? 1 : -1;
}
function d(e, t) {
  let i = 0;
  return 0 != (i = -_d(e.width * e.height, t.width * t.height)) || 0 !== (i = _d(e.x, t.x)) || 0 !== (i = _d(e.y, t.y)) ? i : e.id.localeCompare(t.id);
}
function c(e, t) {
  let i = 0;
  return 0 !== (i = _d(e.spacing, t.spacing, p8, !0)) || 0 !== (i = _d(t.hitCount, e.hitCount)) ? i : i = _d(e.axis, t.axis);
}
function u(e) {
  let t = new Map();
  let i = new Map();
  function n(e, n, r) {
    var s;
    var o;
    if (!n) return;
    let l = (s = e.id) > (o = n.id) ? `${o}-${s}` : `${s}-${o}`;
    if (t.has(l)) {
      let e = t.get(l);
      if (e.axis === r) {
        e.hitCount++;
        return;
      }
    }
    let d = s9(e, r) < s9(n, r) ? e : n;
    let c = s9(e, r) < s9(n, r) ? n : e;
    let u = {
      id: l,
      spacing: uM(e, n, r),
      axis: r,
      hitCount: 1,
      from: d,
      to: c
    };
    t.set(l, u);
    i.has(e.id) || i.set(e.id, []);
    i.has(n.id) || i.set(n.id, []);
    i.get(e.id).push(u);
    i.get(n.id).push(u);
  }
  let r = [...e].sort((e, t) => {
    let i = _d(e.x, t.x);
    return 0 !== i ? i : _d(e.y, t.y);
  });
  let s = [...e].sort((e, t) => {
    let i = _d(e.y, t.y);
    return 0 !== i ? i : _d(e.x, t.x);
  });
  function o(e, t, i) {
    let n = e + i;
    for (; n >= 0 && n < r.length;) {
      let s = r[n];
      if (!n4(s.x, r[e].x) && s.y <= t + p8 && s.y + s.height >= t - p8 && !(n4(s.y + s.height, t, .5) && s.x >= r[e].x && s.x + s.width <= r[e].x + r[e].width) && !(n4(s.y, t, .5) && s.x <= r[e].x && s.x + s.width >= r[e].x + r[e].width)) return s;
      n += i;
    }
  }
  function l(e, t, i) {
    let n = e + i;
    for (; n >= 0 && n < s.length;) {
      let r = s[n];
      if (!n4(r.y, s[e].y) && r.x <= t + p8 && r.x + r.width >= t - p8 && !(r.x + r.width === t && r.y >= s[e].y && r.y + r.height <= s[e].y + s[e].height) && !(r.x === t && r.y <= s[e].y && r.y + r.height >= s[e].y + s[e].height)) return r;
      n += i;
    }
  }
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    {
      let i = o(e, t.y, -1);
      n(t, i, "X");
    }
    {
      let i = o(e, t.y + t.height, -1);
      n(t, i, "X");
    }
    {
      let i = o(e, t.y, 1);
      n(t, i, "X");
    }
    {
      let i = o(e, t.y + t.height, 1);
      n(t, i, "X");
    }
  }
  for (let e = 0; e < s.length; e++) {
    let t = s[e];
    {
      let i = l(e, t.x, -1);
      n(t, i, "Y");
    }
    {
      let i = l(e, t.x, 1);
      n(t, i, "Y");
    }
    {
      let i = l(e, t.x + t.width, -1);
      n(t, i, "Y");
    }
    {
      let i = l(e, t.x + t.width, 1);
      n(t, i, "Y");
    }
  }
  return i;
}
function p(e, t, i) {
  let n = uS([e, t]);
  for (let r of i) {
    if (r.id === e.id || r.id === t.id) continue;
    let i = uS([r]);
    if (Nj(n, i)) return !0;
  }
  return !1;
}
function m(e, t, i, n, r, s) {
  let d = MM(i);
  let c = s.get(e.id).filter(e => e.to.id !== t.id && e.axis === d);
  let u = s.get(t.id).filter(t => t.from.id !== e.id && t.axis === d);
  for (let s of c) {
    let d = o(s, e);
    for (let c of u) {
      let u = o(c, t);
      if (d.id === u.id) continue;
      if (n.indexOf(d) > r || n.indexOf(u) > r) return !0;
      let p = l(s, e);
      let m = l(c, t);
      let h = n4(s.spacing, c.spacing);
      let g = n4(sH(e, d), sH(t, u));
      let f = d.signature === u.signature;
      let _ = p === m;
      if ((h || g) && f && _ && (e.signature !== t.signature || d.signature !== e.signature || s.spacing < uM(e, t, i))) return !0;
    }
  }
  return !1;
}
function h(e, t, i, n, r, a) {
  let s = e.filter(e => {
    let {
      from,
      to,
      axis
    } = e;
    return !(-1 === i.indexOf(from) || -1 === i.indexOf(to) || p(from, to, t) || a && m(from, to, axis, t, n, r));
  });
  if (s.length) return s[0];
}
function g(e) {
  return 0 !== e.length && (e.every(t => t.width === e[0].width) || e.every(t => t.height === e[0].height));
}
function f(e) {
  if (0 === e.length) return;
  let t = e[0];
  let i = e[0];
  let n = uS([t]);
  let r = uS([i]);
  e.forEach(e => {
    let s = uS([e]);
    n.left > s.left && (n = s, t = e);
    r.top > s.top && (r = s, i = e);
  });
  return i.id === t.id ? t : void 0;
}
function _(e, t, i, n, r, s, d, u, p, g, f, _) {
  if (t.axis !== e) return !1;
  let A = l(t, i[0]);
  let y = !1;
  for (let e of [...i]) for (; e && !y && r.has(e.id);) {
    let b = r.get(e.id).filter(r => {
      if (r.axis !== t.axis || r.hitCount < d) return !1;
      let c = o(r, e);
      if (i.indexOf(c) > -1 || s.indexOf(c) >= g || Math.abs(A) !== Math.abs(l(r, e))) return !1;
      if (!n4(r.spacing, t.spacing) && r.spacing < t.spacing + p8 && r.hitCount >= n[n.length - 1].hitCount) {
        y = !0;
        return !1;
      }
      if (!n4(r.spacing, t.spacing)) return !1;
      let m = uS([c]);
      return !(m.left < u - p8) && !(m.right > p + p8);
    }).sort(c);
    if (y) break;
    let v = h(b, s, _, g, r, f);
    if (!v) break;
    let I = o(v, e);
    if (f && m(i[0], I, v.axis, s, g, r)) break;
    i.push(I);
    n.push(v);
    e = I;
  }
  return y;
}
function A(e, t, i, n, s, l, d) {
  let c = "X" === t ? "Y" : "X";
  let u = i.get(e.id);
  let p = [];
  for (let e of u ?? []) e.axis === c && (0 === p.length || n4(p[0].spacing, e.spacing) ? p.push(e) : p.length > 0 && p[0].spacing > e.spacing && (p = [e]));
  let m = p.map(t => ({
    other: o(t, e),
    edge: t
  }));
  let h = [];
  for (let {
    other,
    edge
  } of m) {
    if (edge.spacing > N.WRAP_CANDIDATE_VERTICAL_THRESHOLD) return [];
    if (!n4(other.width, e.width) && !n4(other.height, e.height)) continue;
    let u = [edge];
    if (_(c, edge, [e, other], u, i, n, l, -1 / 0, 1 / 0, s, !1, d)) return [];
    h.push(...u);
  }
  h.sort((e, t) => {
    let i = uS([e.from, e.to]);
    let n = uS([t.from, t.to]);
    return _d(i.top, n.top);
  });
  return h;
}
function y(e, t, i, n, r, s) {
  let d = [];
  let c = -1 / 0;
  let u = 1 / 0;
  let m = new Set();
  for (let h of e) if ("Y" === h.axis) for (let e of [h.from, h.to]) {
    if (m.has(e.id)) continue;
    m.add(e.id);
    let h = function (e, t, i) {
      let n;
      let r;
      for (let i of t.get(e.id) ?? []) {
        if ("Y" === i.axis || 0 > l(i, e)) continue;
        let t = o(i, e);
        let s = function (e) {
          let t = "X" === e.axis ? "Y" : "X";
          let i = uS([e.from]);
          let n = uS([e.to]);
          return "Y" === t ? n4(i.top, n.top) || n4(i.bottom, n.bottom) || n4(i.top + (i.bottom - i.top) / 2, n.top + (n.bottom - n.top) / 2) : n4(i.left, n.left) || n4(i.right, n.right) || n4(i.left + (i.right - i.left) / 2, n.left + (n.right - n.left) / 2);
        }(i);
        (!n || n.spacing) && s && (n = i, r = t);
      }
      if (!(r && p(e, r, i))) return n;
    }(e, t, i);
    if (!h) {
      d.push([e]);
      continue;
    }
    let g = o(h, e);
    let f = [e, g];
    let A = [h];
    if (_("X", h, f, A, t, i, n, c, u, r, !1, s)) {
      d.push([e]);
      break;
    }
    d.push(f);
    let y = uS(f);
    c = Math.max(c, y.left);
    u = Math.min(u, y.right);
  }
  return d;
}
function b(e, t = []) {
  let i = uS([...e, ...t]);
  return {
    type: "FRAME",
    id: t.map(e => e.id).join("-") + "absolute" + e.map(e => e.id).join("-"),
    x: i.left,
    y: i.top,
    width: i.right - i.left,
    height: i.bottom - i.top,
    absolutePositionedChildren: e,
    children: t,
    signature: s(t.map(e => e.signature)) + "absolute" + s(e.map(e => e.signature))
  };
}
function v(e, t, i) {
  let n = {
    maxHitCount: 4,
    enablePivotRule: !0
  };
  t || (t = e);
  {
    let n = new Map();
    let r = i?.height || 1 / 0;
    let o = i?.width || 1 / 0;
    let l = .1 * o;
    let c = .1 * r;
    let u = e.filter(e => e.height > .9 * r && e.width > .9 * o || e.x < -1 * l || e.y < -1 * c || e.x + e.width > o + l || e.y + e.height > r + c);
    if (u.length > 0) {
      let i = b(u);
      e.push(i);
      t.push(i);
      n.set(i.id, !0);
    }
    for (let e of u) n.set(e.id, !0);
    e = e.filter(e => !n.has(e.id));
    t = t.filter(e => !n.has(e.id));
    e.sort(d);
    t.sort(d);
    let p = function (e) {
      let t = [];
      let i = new Set();
      for (let n of e) if (!i.has(n.id)) for (let r of e) {
        if (i.has(r.id) || n.id === r.id) continue;
        let e = uS([n]);
        let s = uS([r]);
        if (Nj(e, s)) {
          t.push([n, r]);
          i.add(n.id);
          i.add(r.id);
          break;
        }
      }
      return t;
    }(e);
    let m = [];
    for (; p.length > 0 && p[0];) {
      let i = p.pop();
      !i || n.get(i[0].id) || n.get(i[1].id) || (!function (e, t, i, n, r) {
        let {
          vertex,
          oldGroupId
        } = function (e) {
          let t = uS(e);
          let i = e.find(e => "GROUP" === e.type);
          if (!i) return {
            vertex: {
              absolutePositionedChildren: [],
              type: "GROUP",
              id: "group-" + e.map(e => e.id).join("-"),
              x: t.left,
              y: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top,
              children: e,
              signature: "group-" + s(e.map(e => e.signature))
            },
            oldGroupId: void 0
          };
          {
            let t = i.children;
            let n = uS([...t, ...e]);
            let r = [...t, ...e.filter(e => e.id !== i.id)];
            return {
              vertex: {
                absolutePositionedChildren: [],
                type: "GROUP",
                id: "group-" + r.map(e => e.id).join("-"),
                x: n.left,
                y: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top,
                children: r,
                signature: "group-" + s(e.map(e => e.signature))
              },
              oldGroupId: i.id
            };
          }
        }([e, t]);
        i.push(vertex);
        r.push(vertex);
        let d = i.find(e => e.id === oldGroupId);
        let c = [e, t, ...(d ? [d] : [])];
        let u = uS([vertex]);
        let p = [];
        for (let r of (i.forEach(i => {
          i.id !== vertex.id && !n.has(i.id) && i.id !== oldGroupId && i.id !== t.id && i.id !== e.id && function (e) {
            let t = e => "NODE" === e.type || "GROUP" === e.type && e.children.every(t);
            return e.every(t);
          }([i]) && Nj(uS([i]), u) && (c.push(i), p.push(i), u = uS([vertex, ...p, i]));
        }), vertex.children.push(...p), vertex.id = vertex.children.map(e => e.id).join("-"), vertex.x = u.left, vertex.y = u.top, vertex.width = u.right - u.left, vertex.height = u.bottom - u.top, vertex.signature = s(vertex.children.map(e => e.signature)), c)) n.set(r.id, !0);
      }(i[0], i[1], e, n, m), e = e.filter(e => !n.has(e.id)).sort(d), t = t.filter(e => !n.has(e.id)).concat(m.filter(e => !n.has(e.id))).sort(d));
    }
    let h = new Map();
    for (let i of m) {
      for (let e of "children" in i ? i?.children : []) JX(e.x, i.x, Math.max(10, .1 * i.width)) && JX(e.y, i.y, Math.max(10, .1 * i.height)) && JX(e.width, i.width, Math.max(10, .1 * i.width)) && JX(e.height, i.height, Math.max(10, .1 * i.height)) && (h.has(i.id) || h.set(i.id, []), h.get(i.id)?.push(e));
      let r = h.get(i.id);
      if (r?.length) {
        let a = function (e, t) {
          let i = [];
          let n = new Set(t.map(e => e.id));
          for (let t of e.children) n.has(t.id) || i.push(t);
          return b(t, i);
        }(i, r);
        n.set(i.id, !0);
        e.push(a);
        t.push(a);
      }
    }
    e = e.filter(e => !n.has(e.id));
    t = t.filter(e => !n.has(e.id)).concat(m.filter(e => !n.has(e.id)));
  }
  for (; t.length > 1 && n.maxHitCount > 0;) {
    let i = !0;
    for (; i;) {
      let {
        vertices,
        verticesSubset
      } = function (e, t, i, n) {
        (e = [...e]).sort(d);
        let r = u(e);
        for (let t of r.keys()) {
          let i = r.get(t);
          let n = i.filter(t => !p(t.from, t.to, e));
          n.length < i.length && r.set(t, n);
        }
        let l = new Map();
        let m = e.length;
        for (let d = 0; d < m; d++) {
          let u;
          let p;
          let b = e[d];
          if (-1 === t.indexOf(b) || l.has(b.id) || !r.has(b.id)) continue;
          let v = h(r.get(b.id).sort(c), e, t, m, r, n);
          if (!v || v.hitCount < i) continue;
          let I = o(v, b);
          if (e.indexOf(I) > m) continue;
          let E = [b, I];
          let x = [v];
          let S = !1;
          if ("X" === v.axis) {
            if (S = _("X", v, E, x, r, e, i, -1 / 0, 1 / 0, m, n, t)) continue;
            if (g(E)) {
              let n = f(E);
              if (n) {
                let a = A(n, "X", r, e, m, i, t);
                let s = y(a, r, e, i, m, t);
                let o = s.flat();
                s.length > 1 && s[0].length > 1 && o.every(e => "NODE" !== e.type || "TEXT" !== e.node.type) && (E = o, u = a[0]?.spacing ?? 0, p = v.spacing);
              }
            }
          } else {
            if (S = _("Y", v, E, x, r, e, i, -1 / 0, 1 / 0, m, n, t)) continue;
            if (g(E)) {
              let n = f(E);
              if (n) {
                let s = A(n, "X", r, e, m, i, t);
                let o = y(s, r, e, i, m, t);
                let l = o.flat();
                o.length > 1 && o[0].length > 1 && l.every(e => "NODE" !== e.type || "TEXT" !== e.node.type) && (E = l, u = s[0]?.spacing ?? 0, p = uM(o[0][0], o[0][1], "X"));
              }
            }
          }
          if (S) continue;
          let w = [...E].sort((e, t) => void 0 !== u ? 0 !== _d(e.y, t.y) ? _d(e.y, t.y) : _d(e.x, t.x) : "X" === v.axis ? _d(e.x, t.x) : _d(e.y, t.y));
          let C = void 0 !== u;
          let T = function (e, t, i, n, r) {
            let o = r ?? BS(t, e);
            let l = uS(t);
            return {
              type: "LIST",
              id: t.map(e => e.id).join("-"),
              x: l.left,
              y: l.top,
              axis: e,
              spacing: o,
              width: l.right - l.left,
              height: l.bottom - l.top,
              children: t,
              wrap: i ?? !1,
              counterSpacing: n ?? 0,
              signature: s(t.map(e => e.signature))
            };
          }(C ? "X" : v.axis, w, C, u, p);
          for (let t of (e.push(T), E)) {
            l.set(t.id, !0);
            let e = r.get(t.id);
            if (e) for (let i of e) {
              let e = o(i, t);
              let n = r.get(e.id);
              n && n.splice(n.indexOf(i), 1);
            }
          }
        }
        let b = e.slice(m);
        return {
          vertices: e.filter(e => !l.has(e.id)),
          verticesSubset: t.filter(e => !l.has(e.id)).concat(b)
        };
      }(e, t, n.maxHitCount, n.enablePivotRule);
      if (i = e.length !== vertices.length, e = vertices, t = verticesSubset, 0 === e.length) throw Error("graph is empty!");
      if (1 === e.length) break;
    }
    n = function (e) {
      let t = {
        ...e
      };
      t.maxHitCount--;
      0 === t.maxHitCount && t.enablePivotRule && (t.maxHitCount = 4, t.enablePivotRule = !1);
      return t;
    }(n);
  }
  return e;
}
function I(e, t = 40) {
  let i = [];
  let n = new Set();
  let r = u(e);
  for (let t of e) {
    let e = function (t) {
      if (!n.has(t.id)) for (let i of (s.push(t), n.add(t.id), (r.get(t.id) || []).filter(e => "X" === e.axis))) e(o(i, t));
    };
    if (n.has(t.id)) continue;
    let s = [];
    e(t);
    i.push({
      vertices: s,
      bbox: uS(s)
    });
  }
  i.sort((e, t) => _d(e.bbox.top, t.bbox.top));
  let s = [];
  let l = new Set();
  let d = 0;
  let c = null;
  i.forEach((e, n) => {
    if (0 === n) {
      l.add(n);
      s.push(e);
      c = e.bbox;
      return;
    }
    if (l.has(n)) return;
    let {
      bbox
    } = e;
    d = 0 === n ? bbox.top : bbox.top - c.bottom;
    let o = {
      vertices: e.vertices,
      bbox
    };
    c = bbox;
    for (let e = n + 1; e < i.length; e++) {
      if (l.has(e)) continue;
      let n = i[e];
      let {
        bbox: _bbox
      } = n;
      let s = _bbox.top - c.bottom;
      if (s > d + p8 || s > t) break;
      o.vertices.push(...n.vertices);
      o.bbox = uS(o.vertices);
      c = o.bbox;
      l.add(e);
    }
    l.add(n);
    s.push(o);
  });
  return s.map(e => e.vertices);
}
export function $$E2(e, t, i = 0) {
  let a = 0 === N.LOG_FILTERS.length || N.LOG_FILTERS.includes(e);
  i >= N.LOG_LEVEL && a && logger.log(`${i} ${e}: ${t}`);
}
export class $$x0 {
  constructor() {
    this.vertexIdToNode = {};
  }
  getNodeForVertexId(e) {
    return this.vertexIdToNode[e];
  }
  setNodeForVertexId(e, t) {
    this.vertexIdToNode[e] = t;
  }
  clearAfterComplete() {
    this.vertexIdToNode = {};
  }
}
class S extends Error {
  constructor(e) {
    super(e);
    this.name = "GraphResolutionError";
  }
}
function w(e, t = [], i, r, s, o) {
  let l = "children" in e ? e.children : [];
  let d = t.map(e => e.id);
  if (0 === (l = l.filter(e => -1 === d.indexOf(e.id) && "CONNECTOR" !== e.type && e.visible)).length) {
    "FRAME" === e.type && C(e);
    return e;
  }
  if ("INSTANCE" === e.type) return e;
  let c = uS(l);
  let u = {};
  if (l.forEach(e => {
    u[e.id] = uS([e]);
  }), 1 === l.length && "FRAME" !== l[0].type) {
    C(e, c);
    return e;
  }
  let p = $$k1(l, i, r, s, {
    noRecurse: o?.recurseOnlySingleLayer || o?.noRecurse
  }, {
    width: e.width,
    height: e.height
  });
  let m = e.width;
  let h = e.height;
  if (!p.layoutMode || "NONE" === p.layoutMode) {
    C(e, c);
    return e;
  }
  if ("INSTANCE" === p.type) return e;
  if (p.id === l[0]?.id) {
    C(e, c);
    return e;
  }
  e.layoutMode = p.layoutMode;
  e.primaryAxisAlignItems = p.primaryAxisAlignItems;
  e.counterAxisAlignItems = p.counterAxisAlignItems;
  e.setSharedPluginData("AAL", "was_auto_auto_layouted_but_existing", "true");
  e.children.forEach(t => {
    if ("layoutPositioning" in t && t.visible) {
      let i = t.x;
      let n = t.y;
      t.layoutPositioning = "ABSOLUTE";
      t.x = i - e.paddingLeft;
      t.y = n - e.paddingTop;
    }
  });
  e.layoutSizingHorizontal = p.layoutSizingHorizontal;
  e.layoutWrap = p.layoutWrap;
  e.itemSpacing = p.itemSpacing;
  p.children.forEach(t => {
    e.appendChild(t);
  });
  p.remove();
  let g = Object.entries(u).filter(e => {
    let t = i.getNodeById(e[0]);
    let n = cA(e[1], c, .1);
    return t && !("layoutPositioning" in t && "ABSOLUTE" === t.layoutPositioning && n);
  }).map(e => e[1]);
  g.length > 0 && (c = mW(g));
  c.left >= 0 ? e.paddingLeft = c.left : logger.log("paddingLeftCandidate is negative", c.left);
  let f = m - c.right;
  f >= 0 ? e.paddingRight = m - c.right : logger.log("paddingRightCandidate is negative", f);
  c.top >= 0 ? e.paddingTop = c.top : logger.log("paddingTopCandidate is negative", c.top);
  h - c.bottom >= 0 ? e.paddingBottom = h - c.bottom : logger.log("paddingBottomCandidate is negative", c.top);
  e.resize(m, h);
  return e;
}
function C(e, t) {
  let i = e.width;
  let r = e.height;
  if (i <= r ? e.layoutMode = "VERTICAL" : e.layoutMode = "HORIZONTAL", e.layoutSizingHorizontal = "FIXED", e.layoutSizingVertical = "FIXED", e.resize(i, r), t) {
    let i = e.width;
    let r = e.height;
    t.left >= 0 ? e.paddingLeft = t.left : logger.log("paddingLeftCandidate is negative", t.left);
    let a = i - t.right;
    a >= 0 ? e.paddingRight = i - t.right : logger.log("paddingRightCandidate is negative", a);
    t.top >= 0 ? e.paddingTop = t.top : logger.log("paddingTopCandidate is negative", t.top);
    r - t.bottom >= 0 ? e.paddingBottom = r - t.bottom : logger.log("paddingBottomCandidate is negative", t.top);
  }
}
function T(e) {
  return ("FRAME" === e.type || "COMPONENT" === e.type) && ("NONE" === e.layoutMode || void 0 === e.layoutMode);
}
export function $$k1(e, t, i, l, d, c, p = !1) {
  let m = e.filter(t => !(!t || t.parent && e.indexOf(t.parent) > -1) && "CONNECTOR" !== t.type && (!("visible" in t) || !!t.visible));
  if (0 === m.length) throw Error("no nodes to stack!");
  let h = m[0].parent;
  let g = 1 / 0;
  let f = h.children.map(e => e.id);
  for (let e = 0; e < m.length; e++) {
    let t = f.indexOf(m[e].id);
    if (t < g && (g = t, 0 === t)) break;
  }
  let _ = m.map(e => {
    let t = uS([e]);
    return {
      type: "NODE",
      id: e.id,
      x: t.left,
      y: t.top,
      width: t.right - t.left,
      height: t.bottom - t.top,
      node: e,
      signature: function e(t) {
        return "FRAME" === t.type || "GROUP" === t.type || "INSTANCE" === t.type || "COMPONENT" === t.type ? 0 === t.children.length ? "FRAME" : s(t.children.map(t => e(t))) : "TEXT" === t.type ? ["number" == typeof t.fontSize ? t.fontSize : "mixed", "object" == typeof t.fontName && "family" in t.fontName ? t.fontName.family : "mixed"].join(",") : t.type;
      }(e)
    };
  });
  let A = uS(_);
  let y = 1 === m.length ? m[0].width : A.right - A.left;
  let b = 1 === m.length ? m[0].height : A.bottom - A.top;
  switch (c && (y = c.width, b = c.height), N.PRE_SEGMENTATION_STRATEGY) {
    case "blobify":
      {
        let e = !0;
        let t = 12;
        for (; e && _.length > 1;) {
          let i = function (e, t) {
            let i = [];
            let n = new Set();
            let r = u(e);
            for (let a of e) {
              let e = function (i) {
                if (!n.has(i.id)) for (let a of (s.push(i), n.add(i.id), (r.get(i.id) || []).filter(e => e.spacing <= t))) e(o(a, i));
              };
              if (n.has(a.id)) continue;
              let s = [];
              e(a);
              i.push(s);
            }
            return i;
          }(_, t);
          let n = _.length;
          for (let e of i) for (let i of I(e, t)) _ = v(_, i, c);
          (e = _.length !== n) || !(t < 80) || (t += 8, e = !0);
        }
        break;
      }
    case "rowify":
      for (let e of I(_)) _ = v(_, e, c);
  }
  if (_.length > 1 && (_ = v(_, _, c)), 1 !== _.length) {
    let e = new S("graph could not resolve: " + _.length + " vertices");
    logger.log(e);
    _.forEach((e, t) => logger.log(t + ": " + function e(t, i) {
      return "NODE" === t.type ? t.node.name : "LIST" === t.type || "GROUP" === t.type ? "\n" + " ".repeat(i ?? 0) + t.type + ": " + t.children.map(t => e(t, i ?? 2)).join(", ") : "";
    }(e, 0) + "\n\n"));
    return e;
  }
  let E = function e(t) {
    if ("LIST" !== t.type || t.wrap) return t;
    let i = [];
    for (let n of t.children) {
      let r = e(n);
      if ("LIST" === r.type && !r.wrap && r.wrap === t.wrap && r.axis === t.axis && n4(r.spacing, t.spacing) && n4(r.counterSpacing, t.counterSpacing)) {
        i.push(...r.children);
        continue;
      }
      i.push(r);
    }
    return {
      ...t,
      children: i
    };
  }(_[0]);
  let x = function e(t, i, r, s, o) {
    if ("LIST" !== t.type && "GROUP" !== t.type && "FRAME" !== t.type) return t.node;
    if ("FRAME" === t.type || "GROUP" === t.type) {
      let n = i.createFrame();
      n.fills = [];
      n.x = t.x;
      n.y = t.y;
      n.name = 1 === s.value ? "Frame" : `Frame ${s.value}`;
      s.value += 1;
      n.resize(t.width, t.height);
      t.absolutePositionedChildren.concat(t.children).map(t => e(t, i, r, s, o)).forEach(e => {
        n.appendChild(e);
        e.x = e.x - t.x;
        e.y = e.y - t.y;
      });
      0 === t.absolutePositionedChildren.length ? function (e) {
        let t = {};
        e.children.forEach(e => {
          t[e.id] = {
            x: e.x,
            y: e.y
          };
        });
        C(e);
        e.children.forEach(e => {
          "layoutPositioning" in e && (e.layoutPositioning = "ABSOLUTE", e.x = t[e.id].x ?? 0, e.y = t[e.id].y ?? 0, "layoutPositioning" in e && "constraints" in e && (e.constraints = {
            horizontal: "MAX",
            vertical: "MIN"
          }));
        });
      }(n) : "FRAME" === (n = w(n, t.absolutePositionedChildren, i, r, s)).type && t.absolutePositionedChildren.forEach(t => {
        (function (t, i, n, r, a, s) {
          let o = e(i, n, r, a, s);
          o.removed || (t.insertChild(0, o), "NONE" !== t.layoutMode && (o.layoutPositioning = "ABSOLUTE"), o.x = 0, o.y = 0);
        })(n, t, i, r, s, o);
      });
      r.setNodeForVertexId(t.id, n);
      return n;
    }
    for (let n of t.children) e(n, i, r, s, o);
    let l = Nv(t.children, uS([t]), t.axis);
    let d = "MIN";
    d = LZ(l);
    let c = i.createFrame();
    c.x = t.x;
    c.y = t.y;
    c.name = 1 === s.value ? "Frame" : `Frame ${s.value}`;
    s.value += 1;
    c.layoutMode = "X" === t.axis ? "HORIZONTAL" : "VERTICAL";
    t.wrap && (c.layoutWrap = t.wrap ? "WRAP" : "NO_WRAP", c.counterAxisSpacing = t.counterSpacing);
    c.setSharedPluginData("AAL", "was_auto_auto_layouted", "true");
    c.itemSpacing = isNaN(t.spacing) ? 0 : t.spacing;
    c.resize(isNaN(t.width) ? c.width : t.width, isNaN(t.height) ? c.height : t.height);
    c.layoutSizingHorizontal = "FIXED";
    c.layoutSizingVertical = "FIXED";
    c.fills = [];
    c.clipsContent = !1;
    t.children.forEach(e => {
      if ("LIST" === e.type || "GROUP" === e.type || "FRAME" === e.type) {
        let i = r.getNodeForVertexId(e.id);
        i ? c.appendChild(i) : logger.log("Could not find vertex in store", t.id);
      } else {
        c.appendChild(e.node);
        let t = e.node;
        "layoutSizingVertical" in t && ("FILL" === t.layoutSizingVertical || "FILL" === t.layoutSizingHorizontal) && (n4(t.height, e.height, .1) || n4(t.width, e.width, .1)) && e.height > .001 && e.width > .001 && t.resize(isNaN(e.width) || e.width < .001 ? t.width : e.width, isNaN(e.height) || e.height < .001 ? t.height : e.height);
      }
    });
    c.primaryAxisAlignItems = "MIN";
    d && (c.counterAxisAlignItems = d);
    "HORIZONTAL" === c.layoutMode && (2 === c.children.length && (c.itemSpacing > .2 * c.width || c.itemSpacing > .1 * c.width && c.children[0].width > .7 * c.width) && (c.primaryAxisAlignItems = "SPACE_BETWEEN"), 3 === c.children.length && (c.itemSpacing > .15 * c.width || c.itemSpacing > .05 * c.width && c.children[1].width > .5 * c.width) && (c.primaryAxisAlignItems = "SPACE_BETWEEN"));
    r.setNodeForVertexId(t.id, c);
    return c;
  }(E, t, i, l, d);
  if (h?.insertChild(g, x), "NODE" === E.type && T(E.node) && !d?.noRecurse) return w(E.node, [], t, i, l, d);
  if ("LIST" === E.type) {
    let e = n => {
      "NODE" === n.type && T(n.node) ? w(n.node, [], t, i, l, d) : "children" in n && n.children.forEach(e);
    };
    d?.noRecurse || E.children.forEach(e);
    (x.parent?.type === "PAGE" || p) && (x.x = A.left, x.y = A.top);
    n4(y, x.width) || x.resize(y, x.height);
    n4(b, x.height) || x.resize(x.width, b);
  }
  return x;
}
export const Oc = $$x0;
export const aJ = $$k1;
export const Rm = $$E2;