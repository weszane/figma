import { aalSettingsConfig } from "../905/55273"
import { areBoxesApproximatelyEqual, calculateAverageSpacing, calculateBoundingBox, calculateCenterDistance, calculateSpacingBetweenBoxes, calculateTransformedBoundingBox, compareWithTolerance, determineDominantAlignment, doBoxesOverlap, EPSILON, getCoordinateForAxis, getOppositeAxis, isApproximatelyEqual, isApproximatelyEqualOrGreater, mapAlignmentToConstraintType } from "../905/259345"
import { logger } from "../905/651849"

function s(e) {
  return e.join(",")
}
function o(e, t) {
  if (e.from.id !== t.id && e.to.id !== t.id)
    throw new Error("vertex is not in edge!")
  return e.from.id === t.id ? e.to : e.from
}
function l(e, t) {
  return e.from.id === t.id ? 1 : -1
}
function d(e, t) {
  let i = 0
  return (i = -compareWithTolerance(e.width * e.height, t.width * t.height)) != 0 || (i = compareWithTolerance(e.x, t.x)) !== 0 || (i = compareWithTolerance(e.y, t.y)) !== 0 ? i : e.id.localeCompare(t.id)
}
function c(e, t) {
  let i = 0
  return (i = compareWithTolerance(e.spacing, t.spacing, EPSILON, !0)) !== 0 || (i = compareWithTolerance(t.hitCount, e.hitCount)) !== 0 ? i : i = compareWithTolerance(e.axis, t.axis)
}
function u(e) {
  let t = new Map()
  let i = new Map()
  function n(e, n, r) {
    let s
    let o
    if (!n)
      return
    let l = (s = e.id) > (o = n.id) ? `${o}-${s}` : `${s}-${o}`
    if (t.has(l)) {
      let e = t.get(l)
      if (e.axis === r) {
        e.hitCount++
        return
      }
    }
    let d = getCoordinateForAxis(e, r) < getCoordinateForAxis(n, r) ? e : n
    let c = getCoordinateForAxis(e, r) < getCoordinateForAxis(n, r) ? n : e
    let u = {
      id: l,
      spacing: calculateSpacingBetweenBoxes(e, n, r),
      axis: r,
      hitCount: 1,
      from: d,
      to: c,
    }
    t.set(l, u)
    i.has(e.id) || i.set(e.id, [])
    i.has(n.id) || i.set(n.id, [])
    i.get(e.id).push(u)
    i.get(n.id).push(u)
  }
  let r = [...e].sort((e, t) => {
    let i = compareWithTolerance(e.x, t.x)
    return i !== 0 ? i : compareWithTolerance(e.y, t.y)
  })
  let s = [...e].sort((e, t) => {
    let i = compareWithTolerance(e.y, t.y)
    return i !== 0 ? i : compareWithTolerance(e.x, t.x)
  })
  function o(e, t, i) {
    let n = e + i
    for (; n >= 0 && n < r.length;) {
      let s = r[n]
      if (!isApproximatelyEqual(s.x, r[e].x) && s.y <= t + EPSILON && s.y + s.height >= t - EPSILON && !(isApproximatelyEqual(s.y + s.height, t, 0.5) && s.x >= r[e].x && s.x + s.width <= r[e].x + r[e].width) && !(isApproximatelyEqual(s.y, t, 0.5) && s.x <= r[e].x && s.x + s.width >= r[e].x + r[e].width))
        return s
      n += i
    }
  }
  function l(e, t, i) {
    let n = e + i
    for (; n >= 0 && n < s.length;) {
      let r = s[n]
      if (!isApproximatelyEqual(r.y, s[e].y) && r.x <= t + EPSILON && r.x + r.width >= t - EPSILON && !(r.x + r.width === t && r.y >= s[e].y && r.y + r.height <= s[e].y + s[e].height) && !(r.x === t && r.y <= s[e].y && r.y + r.height >= s[e].y + s[e].height))
        return r
      n += i
    }
  }
  for (let e = 0; e < r.length; e++) {
    let t = r[e]
    {
      let i = o(e, t.y, -1)
      n(t, i, "X")
    }
    {
      let i = o(e, t.y + t.height, -1)
      n(t, i, "X")
    }
    {
      let i = o(e, t.y, 1)
      n(t, i, "X")
    }
    {
      let i = o(e, t.y + t.height, 1)
      n(t, i, "X")
    }
  }
  for (let e = 0; e < s.length; e++) {
    let t = s[e]
    {
      let i = l(e, t.x, -1)
      n(t, i, "Y")
    }
    {
      let i = l(e, t.x, 1)
      n(t, i, "Y")
    }
    {
      let i = l(e, t.x + t.width, -1)
      n(t, i, "Y")
    }
    {
      let i = l(e, t.x + t.width, 1)
      n(t, i, "Y")
    }
  }
  return i
}
function p(e, t, i) {
  let n = calculateTransformedBoundingBox([e, t])
  for (let r of i) {
    if (r.id === e.id || r.id === t.id)
      continue
    let i = calculateTransformedBoundingBox([r])
    if (doBoxesOverlap(n, i))
      return !0
  }
  return !1
}
function m(e, t, i, n, r, s) {
  let d = getOppositeAxis(i)
  let c = s.get(e.id).filter(e => e.to.id !== t.id && e.axis === d)
  let u = s.get(t.id).filter(t => t.from.id !== e.id && t.axis === d)
  for (let s of c) {
    let d = o(s, e)
    for (let c of u) {
      let u = o(c, t)
      if (d.id === u.id)
        continue
      if (n.indexOf(d) > r || n.indexOf(u) > r)
        return !0
      let p = l(s, e)
      let m = l(c, t)
      let h = isApproximatelyEqual(s.spacing, c.spacing)
      let g = isApproximatelyEqual(calculateCenterDistance(e, d), calculateCenterDistance(t, u))
      let f = d.signature === u.signature
      let _ = p === m
      if ((h || g) && f && _ && (e.signature !== t.signature || d.signature !== e.signature || s.spacing < calculateSpacingBetweenBoxes(e, t, i)))
        return !0
    }
  }
  return !1
}
function h(e, t, i, n, r, a) {
  let s = e.filter((e) => {
    let {
      from,
      to,
      axis,
    } = e
    return !(!i.includes(from) || !i.includes(to) || p(from, to, t) || a && m(from, to, axis, t, n, r))
  })
  if (s.length)
    return s[0]
}
function g(e) {
  return e.length !== 0 && (e.every(t => t.width === e[0].width) || e.every(t => t.height === e[0].height))
}
function f(e) {
  if (e.length === 0)
    return
  let t = e[0]
  let i = e[0]
  let n = calculateTransformedBoundingBox([t])
  let r = calculateTransformedBoundingBox([i])
  e.forEach((e) => {
    let s = calculateTransformedBoundingBox([e])
    n.left > s.left && (n = s, t = e)
    r.top > s.top && (r = s, i = e)
  })
  return i.id === t.id ? t : void 0
}
function _(e, t, i, n, r, s, d, u, p, g, f, _) {
  if (t.axis !== e)
    return !1
  let A = l(t, i[0])
  let y = !1
  for (let e of [...i]) {
    for (; e && !y && r.has(e.id);) {
      let b = r.get(e.id).filter((r) => {
        if (r.axis !== t.axis || r.hitCount < d)
          return !1
        let c = o(r, e)
        if (i.includes(c) || s.indexOf(c) >= g || Math.abs(A) !== Math.abs(l(r, e)))
          return !1
        if (!isApproximatelyEqual(r.spacing, t.spacing) && r.spacing < t.spacing + EPSILON && r.hitCount >= n[n.length - 1].hitCount) {
          y = !0
          return !1
        }
        if (!isApproximatelyEqual(r.spacing, t.spacing))
          return !1
        let m = calculateTransformedBoundingBox([c])
        return !(m.left < u - EPSILON) && !(m.right > p + EPSILON)
      }).sort(c)
      if (y)
        break
      let v = h(b, s, _, g, r, f)
      if (!v)
        break
      let I = o(v, e)
      if (f && m(i[0], I, v.axis, s, g, r))
        break
      i.push(I)
      n.push(v)
      e = I
    }
  }
  return y
}
function A(e, t, i, n, s, l, d) {
  let c = t === "X" ? "Y" : "X"
  let u = i.get(e.id)
  let p = []
  for (let e of u ?? []) e.axis === c && (p.length === 0 || isApproximatelyEqual(p[0].spacing, e.spacing) ? p.push(e) : p.length > 0 && p[0].spacing > e.spacing && (p = [e]))
  let m = p.map(t => ({
    other: o(t, e),
    edge: t,
  }))
  let h = []
  for (let {
    other,
    edge,
  } of m) {
    if (edge.spacing > aalSettingsConfig.WRAP_CANDIDATE_VERTICAL_THRESHOLD)
      return []
    if (!isApproximatelyEqual(other.width, e.width) && !isApproximatelyEqual(other.height, e.height))
      continue
    let u = [edge]
    if (_(c, edge, [e, other], u, i, n, l, -1 / 0, 1 / 0, s, !1, d))
      return []
    h.push(...u)
  }
  h.sort((e, t) => {
    let i = calculateTransformedBoundingBox([e.from, e.to])
    let n = calculateTransformedBoundingBox([t.from, t.to])
    return compareWithTolerance(i.top, n.top)
  })
  return h
}
function y(e, t, i, n, r, s) {
  let d = []
  let c = -1 / 0
  let u = 1 / 0
  let m = new Set()
  for (let h of e) {
    if (h.axis === "Y") {
      for (let e of [h.from, h.to]) {
        if (m.has(e.id))
          continue
        m.add(e.id)
        let h = (function (e, t, i) {
          let n
          let r
          for (let i of t.get(e.id) ?? []) {
            if (i.axis === "Y" || l(i, e) < 0)
              continue
            let t = o(i, e)
            let s = (function (e) {
              let t = e.axis === "X" ? "Y" : "X"
              let i = calculateTransformedBoundingBox([e.from])
              let n = calculateTransformedBoundingBox([e.to])
              return t === "Y" ? isApproximatelyEqual(i.top, n.top) || isApproximatelyEqual(i.bottom, n.bottom) || isApproximatelyEqual(i.top + (i.bottom - i.top) / 2, n.top + (n.bottom - n.top) / 2) : isApproximatelyEqual(i.left, n.left) || isApproximatelyEqual(i.right, n.right) || isApproximatelyEqual(i.left + (i.right - i.left) / 2, n.left + (n.right - n.left) / 2)
            }(i));
            (!n || n.spacing) && s && (n = i, r = t)
          }
          if (!(r && p(e, r, i)))
            return n
        }(e, t, i))
        if (!h) {
          d.push([e])
          continue
        }
        let g = o(h, e)
        let f = [e, g]
        let A = [h]
        if (_("X", h, f, A, t, i, n, c, u, r, !1, s)) {
          d.push([e])
          break
        }
        d.push(f)
        let y = calculateTransformedBoundingBox(f)
        c = Math.max(c, y.left)
        u = Math.min(u, y.right)
      }
    }
  }
  return d
}
function b(e, t = []) {
  let i = calculateTransformedBoundingBox([...e, ...t])
  return {
    type: "FRAME",
    id: `${t.map(e => e.id).join("-")}absolute${e.map(e => e.id).join("-")}`,
    x: i.left,
    y: i.top,
    width: i.right - i.left,
    height: i.bottom - i.top,
    absolutePositionedChildren: e,
    children: t,
    signature: `${s(t.map(e => e.signature))}absolute${s(e.map(e => e.signature))}`,
  }
}
function v(e, t, i) {
  let n = {
    maxHitCount: 4,
    enablePivotRule: !0,
  }
  t || (t = e)
  {
    let n = new Map()
    let r = i?.height || 1 / 0
    let o = i?.width || 1 / 0
    let l = 0.1 * o
    let c = 0.1 * r
    let u = e.filter(e => e.height > 0.9 * r && e.width > 0.9 * o || e.x < -1 * l || e.y < -1 * c || e.x + e.width > o + l || e.y + e.height > r + c)
    if (u.length > 0) {
      let i = b(u)
      e.push(i)
      t.push(i)
      n.set(i.id, !0)
    }
    for (let e of u) n.set(e.id, !0)
    e = e.filter(e => !n.has(e.id))
    t = t.filter(e => !n.has(e.id))
    e.sort(d)
    t.sort(d)
    let p = (function (e) {
      let t = []
      let i = new Set()
      for (let n of e) {
        if (!i.has(n.id)) {
          for (let r of e) {
            if (i.has(r.id) || n.id === r.id)
              continue
            let e = calculateTransformedBoundingBox([n])
            let s = calculateTransformedBoundingBox([r])
            if (doBoxesOverlap(e, s)) {
              t.push([n, r])
              i.add(n.id)
              i.add(r.id)
              break
            }
          }
        }
      }
      return t
    }(e))
    let m = []
    for (; p.length > 0 && p[0];) {
      let i = p.pop()
      !i || n.get(i[0].id) || n.get(i[1].id) || (!(function (e, t, i, n, r) {
        let {
          vertex,
          oldGroupId,
        } = (function (e) {
          let t = calculateTransformedBoundingBox(e)
          let i = e.find(e => e.type === "GROUP")
          if (!i) {
            return {
              vertex: {
                absolutePositionedChildren: [],
                type: "GROUP",
                id: `group-${e.map(e => e.id).join("-")}`,
                x: t.left,
                y: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top,
                children: e,
                signature: `group-${s(e.map(e => e.signature))}`,
              },
              oldGroupId: void 0,
            }
          }
          {
            let t = i.children
            let n = calculateTransformedBoundingBox([...t, ...e])
            let r = [...t, ...e.filter(e => e.id !== i.id)]
            return {
              vertex: {
                absolutePositionedChildren: [],
                type: "GROUP",
                id: `group-${r.map(e => e.id).join("-")}`,
                x: n.left,
                y: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top,
                children: r,
                signature: `group-${s(e.map(e => e.signature))}`,
              },
              oldGroupId: i.id,
            }
          }
        }([e, t]))
        i.push(vertex)
        r.push(vertex)
        let d = i.find(e => e.id === oldGroupId)
        let c = [e, t, ...(d ? [d] : [])]
        let u = calculateTransformedBoundingBox([vertex])
        let p = []
        for (let r of (i.forEach((i) => {
          i.id !== vertex.id && !n.has(i.id) && i.id !== oldGroupId && i.id !== t.id && i.id !== e.id && (function (e) {
            let t = e => e.type === "NODE" || e.type === "GROUP" && e.children.every(t)
            return e.every(t)
          }([i])) && doBoxesOverlap(calculateTransformedBoundingBox([i]), u) && (c.push(i), p.push(i), u = calculateTransformedBoundingBox([vertex, ...p, i]))
        }), vertex.children.push(...p), vertex.id = vertex.children.map(e => e.id).join("-"), vertex.x = u.left, vertex.y = u.top, vertex.width = u.right - u.left, vertex.height = u.bottom - u.top, vertex.signature = s(vertex.children.map(e => e.signature)), c)) n.set(r.id, !0)
      }(i[0], i[1], e, n, m)), e = e.filter(e => !n.has(e.id)).sort(d), t = t.filter(e => !n.has(e.id)).concat(m.filter(e => !n.has(e.id))).sort(d))
    }
    let h = new Map()
    for (let i of m) {
      for (let e of "children" in i ? i?.children : []) isApproximatelyEqualOrGreater(e.x, i.x, Math.max(10, 0.1 * i.width)) && isApproximatelyEqualOrGreater(e.y, i.y, Math.max(10, 0.1 * i.height)) && isApproximatelyEqualOrGreater(e.width, i.width, Math.max(10, 0.1 * i.width)) && isApproximatelyEqualOrGreater(e.height, i.height, Math.max(10, 0.1 * i.height)) && (h.has(i.id) || h.set(i.id, []), h.get(i.id)?.push(e))
      let r = h.get(i.id)
      if (r?.length) {
        let a = (function (e, t) {
          let i = []
          let n = new Set(t.map(e => e.id))
          for (let t of e.children) n.has(t.id) || i.push(t)
          return b(t, i)
        }(i, r))
        n.set(i.id, !0)
        e.push(a)
        t.push(a)
      }
    }
    e = e.filter(e => !n.has(e.id))
    t = t.filter(e => !n.has(e.id)).concat(m.filter(e => !n.has(e.id)))
  }
  for (; t.length > 1 && n.maxHitCount > 0;) {
    let i = !0
    for (; i;) {
      let {
        vertices,
        verticesSubset,
      } = (function (e, t, i, n) {
        (e = [...e]).sort(d)
        let r = u(e)
        for (let t of r.keys()) {
          let i = r.get(t)
          let n = i.filter(t => !p(t.from, t.to, e))
          n.length < i.length && r.set(t, n)
        }
        let l = new Map()
        let m = e.length
        for (let d = 0; d < m; d++) {
          let u
          let p
          let b = e[d]
          if (!t.includes(b) || l.has(b.id) || !r.has(b.id))
            continue
          let v = h(r.get(b.id).sort(c), e, t, m, r, n)
          if (!v || v.hitCount < i)
            continue
          let I = o(v, b)
          if (e.indexOf(I) > m)
            continue
          let E = [b, I]
          let x = [v]
          let S = !1
          if (v.axis === "X") {
            if (S = _("X", v, E, x, r, e, i, -1 / 0, 1 / 0, m, n, t))
              continue
            if (g(E)) {
              let n = f(E)
              if (n) {
                let a = A(n, "X", r, e, m, i, t)
                let s = y(a, r, e, i, m, t)
                let o = s.flat()
                s.length > 1 && s[0].length > 1 && o.every(e => e.type !== "NODE" || e.node.type !== "TEXT") && (E = o, u = a[0]?.spacing ?? 0, p = v.spacing)
              }
            }
          }
          else {
            if (S = _("Y", v, E, x, r, e, i, -1 / 0, 1 / 0, m, n, t))
              continue
            if (g(E)) {
              let n = f(E)
              if (n) {
                let s = A(n, "X", r, e, m, i, t)
                let o = y(s, r, e, i, m, t)
                let l = o.flat()
                o.length > 1 && o[0].length > 1 && l.every(e => e.type !== "NODE" || e.node.type !== "TEXT") && (E = l, u = s[0]?.spacing ?? 0, p = calculateSpacingBetweenBoxes(o[0][0], o[0][1], "X"))
              }
            }
          }
          if (S)
            continue
          let w = [...E].sort((e, t) => void 0 !== u ? compareWithTolerance(e.y, t.y) !== 0 ? compareWithTolerance(e.y, t.y) : compareWithTolerance(e.x, t.x) : v.axis === "X" ? compareWithTolerance(e.x, t.x) : compareWithTolerance(e.y, t.y))
          let C = void 0 !== u
          let T = (function (e, t, i, n, r) {
            let o = r ?? calculateAverageSpacing(t, e)
            let l = calculateTransformedBoundingBox(t)
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
              signature: s(t.map(e => e.signature)),
            }
          }(C ? "X" : v.axis, w, C, u, p))
          for (let t of (e.push(T), E)) {
            l.set(t.id, !0)
            let e = r.get(t.id)
            if (e) {
              for (let i of e) {
                let e = o(i, t)
                let n = r.get(e.id)
                n && n.splice(n.indexOf(i), 1)
              }
            }
          }
        }
        let b = e.slice(m)
        return {
          vertices: e.filter(e => !l.has(e.id)),
          verticesSubset: t.filter(e => !l.has(e.id)).concat(b),
        }
      }(e, t, n.maxHitCount, n.enablePivotRule))
      if (i = e.length !== vertices.length, e = vertices, t = verticesSubset, e.length === 0)
        throw new Error("graph is empty!")
      if (e.length === 1)
        break
    }
    n = (function (e) {
      let t = {
        ...e,
      }
      t.maxHitCount--
      t.maxHitCount === 0 && t.enablePivotRule && (t.maxHitCount = 4, t.enablePivotRule = !1)
      return t
    }(n))
  }
  return e
}
function I(e, t = 40) {
  let i = []
  let n = new Set()
  let r = u(e)
  for (let t of e) {
    let e = function (t) {
      if (!n.has(t.id)) {
        for (let i of (s.push(t), n.add(t.id), (r.get(t.id) || []).filter(e => e.axis === "X"))) e(o(i, t))
      }
    }
    if (n.has(t.id))
      continue
    let s = []
    e(t)
    i.push({
      vertices: s,
      bbox: calculateTransformedBoundingBox(s),
    })
  }
  i.sort((e, t) => compareWithTolerance(e.bbox.top, t.bbox.top))
  let s = []
  let l = new Set()
  let d = 0
  let c = null
  i.forEach((e, n) => {
    if (n === 0) {
      l.add(n)
      s.push(e)
      c = e.bbox
      return
    }
    if (l.has(n))
      return
    let {
      bbox,
    } = e
    d = n === 0 ? bbox.top : bbox.top - c.bottom
    let o = {
      vertices: e.vertices,
      bbox,
    }
    c = bbox
    for (let e = n + 1; e < i.length; e++) {
      if (l.has(e))
        continue
      let n = i[e]
      let {
        bbox: _bbox,
      } = n
      let s = _bbox.top - c.bottom
      if (s > d + EPSILON || s > t)
        break
      o.vertices.push(...n.vertices)
      o.bbox = calculateTransformedBoundingBox(o.vertices)
      c = o.bbox
      l.add(e)
    }
    l.add(n)
    s.push(o)
  })
  return s.map(e => e.vertices)
}
export function $$E2(e, t, i = 0) {
  let a = aalSettingsConfig.LOG_FILTERS.length === 0 || aalSettingsConfig.LOG_FILTERS.includes(e)
  i >= aalSettingsConfig.LOG_LEVEL && a && logger.log(`${i} ${e}: ${t}`)
}
export class $$x0 {
  constructor() {
    this.vertexIdToNode = {}
  }

  getNodeForVertexId(e) {
    return this.vertexIdToNode[e]
  }

  setNodeForVertexId(e, t) {
    this.vertexIdToNode[e] = t
  }

  clearAfterComplete() {
    this.vertexIdToNode = {}
  }
}
class S extends Error {
  constructor(e) {
    super(e)
    this.name = "GraphResolutionError"
  }
}
function w(e, t = [], i, r, s, o) {
  let l = "children" in e ? e.children : []
  let d = t.map(e => e.id)
  if ((l = l.filter(e => !d.includes(e.id) && e.type !== "CONNECTOR" && e.visible)).length === 0) {
    e.type === "FRAME" && C(e)
    return e
  }
  if (e.type === "INSTANCE")
    return e
  let c = calculateTransformedBoundingBox(l)
  let u = {}
  if (l.forEach((e) => {
    u[e.id] = calculateTransformedBoundingBox([e])
  }), l.length === 1 && l[0].type !== "FRAME") {
    C(e, c)
    return e
  }
  let p = $$k1(l, i, r, s, {
    noRecurse: o?.recurseOnlySingleLayer || o?.noRecurse,
  }, {
    width: e.width,
    height: e.height,
  })
  let m = e.width
  let h = e.height
  if (!p.layoutMode || p.layoutMode === "NONE") {
    C(e, c)
    return e
  }
  if (p.type === "INSTANCE")
    return e
  if (p.id === l[0]?.id) {
    C(e, c)
    return e
  }
  e.layoutMode = p.layoutMode
  e.primaryAxisAlignItems = p.primaryAxisAlignItems
  e.counterAxisAlignItems = p.counterAxisAlignItems
  e.setSharedPluginData("AAL", "was_auto_auto_layouted_but_existing", "true")
  e.children.forEach((t) => {
    if ("layoutPositioning" in t && t.visible) {
      let i = t.x
      let n = t.y
      t.layoutPositioning = "ABSOLUTE"
      t.x = i - e.paddingLeft
      t.y = n - e.paddingTop
    }
  })
  e.layoutSizingHorizontal = p.layoutSizingHorizontal
  e.layoutWrap = p.layoutWrap
  e.itemSpacing = p.itemSpacing
  p.children.forEach((t) => {
    e.appendChild(t)
  })
  p.remove()
  let g = Object.entries(u).filter((e) => {
    let t = i.getNodeById(e[0])
    let n = areBoxesApproximatelyEqual(e[1], c, 0.1)
    return t && !("layoutPositioning" in t && t.layoutPositioning === "ABSOLUTE" && n)
  }).map(e => e[1])
  g.length > 0 && (c = calculateBoundingBox(g))
  c.left >= 0 ? e.paddingLeft = c.left : logger.log("paddingLeftCandidate is negative", c.left)
  let f = m - c.right
  f >= 0 ? e.paddingRight = m - c.right : logger.log("paddingRightCandidate is negative", f)
  c.top >= 0 ? e.paddingTop = c.top : logger.log("paddingTopCandidate is negative", c.top)
  h - c.bottom >= 0 ? e.paddingBottom = h - c.bottom : logger.log("paddingBottomCandidate is negative", c.top)
  e.resize(m, h)
  return e
}
function C(e, t) {
  let i = e.width
  let r = e.height
  if (i <= r ? e.layoutMode = "VERTICAL" : e.layoutMode = "HORIZONTAL", e.layoutSizingHorizontal = "FIXED", e.layoutSizingVertical = "FIXED", e.resize(i, r), t) {
    let i = e.width
    let r = e.height
    t.left >= 0 ? e.paddingLeft = t.left : logger.log("paddingLeftCandidate is negative", t.left)
    let a = i - t.right
    a >= 0 ? e.paddingRight = i - t.right : logger.log("paddingRightCandidate is negative", a)
    t.top >= 0 ? e.paddingTop = t.top : logger.log("paddingTopCandidate is negative", t.top)
    r - t.bottom >= 0 ? e.paddingBottom = r - t.bottom : logger.log("paddingBottomCandidate is negative", t.top)
  }
}
function T(e) {
  return (e.type === "FRAME" || e.type === "COMPONENT") && (e.layoutMode === "NONE" || void 0 === e.layoutMode)
}
export function $$k1(e, t, i, l, d, c, p = !1) {
  let m = e.filter(t => !(!t || t.parent && e.includes(t.parent)) && t.type !== "CONNECTOR" && (!("visible" in t) || !!t.visible))
  if (m.length === 0)
    throw new Error("no nodes to stack!")
  let h = m[0].parent
  let g = 1 / 0
  let f = h.children.map(e => e.id)
  for (let e = 0; e < m.length; e++) {
    let t = f.indexOf(m[e].id)
    if (t < g && (g = t, t === 0))
      break
  }
  let _ = m.map((e) => {
    let t = calculateTransformedBoundingBox([e])
    return {
      type: "NODE",
      id: e.id,
      x: t.left,
      y: t.top,
      width: t.right - t.left,
      height: t.bottom - t.top,
      node: e,
      signature: (function e(t) {
        return t.type === "FRAME" || t.type === "GROUP" || t.type === "INSTANCE" || t.type === "COMPONENT" ? t.children.length === 0 ? "FRAME" : s(t.children.map(t => e(t))) : t.type === "TEXT" ? [typeof t.fontSize == "number" ? t.fontSize : "mixed", typeof t.fontName == "object" && "family" in t.fontName ? t.fontName.family : "mixed"].join(",") : t.type
      }(e)),
    }
  })
  let A = calculateTransformedBoundingBox(_)
  let y = m.length === 1 ? m[0].width : A.right - A.left
  let b = m.length === 1 ? m[0].height : A.bottom - A.top
  switch (c && (y = c.width, b = c.height), aalSettingsConfig.PRE_SEGMENTATION_STRATEGY) {
    case "blobify":
    {
      let e = !0
      let t = 12
      for (; e && _.length > 1;) {
        let i = (function (e, t) {
          let i = []
          let n = new Set()
          let r = u(e)
          for (let a of e) {
            let e = function (i) {
              if (!n.has(i.id)) {
                for (let a of (s.push(i), n.add(i.id), (r.get(i.id) || []).filter(e => e.spacing <= t))) e(o(a, i))
              }
            }
            if (n.has(a.id))
              continue
            let s = []
            e(a)
            i.push(s)
          }
          return i
        }(_, t))
        let n = _.length
        for (let e of i) {
          for (let i of I(e, t)) _ = v(_, i, c)
        }
        (e = _.length !== n) || !(t < 80) || (t += 8, e = !0)
      }
      break
    }
    case "rowify":
      for (let e of I(_)) _ = v(_, e, c)
  }
  if (_.length > 1 && (_ = v(_, _, c)), _.length !== 1) {
    let e = new S(`graph could not resolve: ${_.length} vertices`)
    logger.log(e)
    _.forEach((e, t) => logger.log(`${t}: ${(function e(t, i) {
      return t.type === "NODE" ? t.node.name : t.type === "LIST" || t.type === "GROUP" ? `\n${" ".repeat(i ?? 0)}${t.type}: ${t.children.map(t => e(t, i ?? 2)).join(", ")}` : ""
    }(e, 0))}\n\n`))
    return e
  }
  let E = (function e(t) {
    if (t.type !== "LIST" || t.wrap)
      return t
    let i = []
    for (let n of t.children) {
      let r = e(n)
      if (r.type === "LIST" && !r.wrap && r.wrap === t.wrap && r.axis === t.axis && isApproximatelyEqual(r.spacing, t.spacing) && isApproximatelyEqual(r.counterSpacing, t.counterSpacing)) {
        i.push(...r.children)
        continue
      }
      i.push(r)
    }
    return {
      ...t,
      children: i,
    }
  }(_[0]))
  let x = (function e(t, i, r, s, o) {
    if (t.type !== "LIST" && t.type !== "GROUP" && t.type !== "FRAME")
      return t.node
    if (t.type === "FRAME" || t.type === "GROUP") {
      let n = i.createFrame()
      n.fills = []
      n.x = t.x
      n.y = t.y
      n.name = s.value === 1 ? "Frame" : `Frame ${s.value}`
      s.value += 1
      n.resize(t.width, t.height)
      t.absolutePositionedChildren.concat(t.children).map(t => e(t, i, r, s, o)).forEach((e) => {
        n.appendChild(e)
        e.x = e.x - t.x
        e.y = e.y - t.y
      })
      t.absolutePositionedChildren.length === 0
        ? (function (e) {
            let t = {}
            e.children.forEach((e) => {
              t[e.id] = {
                x: e.x,
                y: e.y,
              }
            })
            C(e)
            e.children.forEach((e) => {
              "layoutPositioning" in e && (e.layoutPositioning = "ABSOLUTE", e.x = t[e.id].x ?? 0, e.y = t[e.id].y ?? 0, "layoutPositioning" in e && "constraints" in e && (e.constraints = {
                horizontal: "MAX",
                vertical: "MIN",
              }))
            })
          }(n))
        : (n = w(n, t.absolutePositionedChildren, i, r, s)).type === "FRAME" && t.absolutePositionedChildren.forEach((t) => {
            (function (t, i, n, r, a, s) {
              let o = e(i, n, r, a, s)
              o.removed || (t.insertChild(0, o), t.layoutMode !== "NONE" && (o.layoutPositioning = "ABSOLUTE"), o.x = 0, o.y = 0)
            })(n, t, i, r, s, o)
          })
      r.setNodeForVertexId(t.id, n)
      return n
    }
    for (let n of t.children) e(n, i, r, s, o)
    let l = determineDominantAlignment(t.children, calculateTransformedBoundingBox([t]), t.axis)
    let d = "MIN"
    d = mapAlignmentToConstraintType(l)
    let c = i.createFrame()
    c.x = t.x
    c.y = t.y
    c.name = s.value === 1 ? "Frame" : `Frame ${s.value}`
    s.value += 1
    c.layoutMode = t.axis === "X" ? "HORIZONTAL" : "VERTICAL"
    t.wrap && (c.layoutWrap = t.wrap ? "WRAP" : "NO_WRAP", c.counterAxisSpacing = t.counterSpacing)
    c.setSharedPluginData("AAL", "was_auto_auto_layouted", "true")
    c.itemSpacing = isNaN(t.spacing) ? 0 : t.spacing
    c.resize(isNaN(t.width) ? c.width : t.width, isNaN(t.height) ? c.height : t.height)
    c.layoutSizingHorizontal = "FIXED"
    c.layoutSizingVertical = "FIXED"
    c.fills = []
    c.clipsContent = !1
    t.children.forEach((e) => {
      if (e.type === "LIST" || e.type === "GROUP" || e.type === "FRAME") {
        let i = r.getNodeForVertexId(e.id)
        i ? c.appendChild(i) : logger.log("Could not find vertex in store", t.id)
      }
      else {
        c.appendChild(e.node)
        let t = e.node
        "layoutSizingVertical" in t && (t.layoutSizingVertical === "FILL" || t.layoutSizingHorizontal === "FILL") && (isApproximatelyEqual(t.height, e.height, 0.1) || isApproximatelyEqual(t.width, e.width, 0.1)) && e.height > 0.001 && e.width > 0.001 && t.resize(isNaN(e.width) || e.width < 0.001 ? t.width : e.width, isNaN(e.height) || e.height < 0.001 ? t.height : e.height)
      }
    })
    c.primaryAxisAlignItems = "MIN"
    d && (c.counterAxisAlignItems = d)
    c.layoutMode === "HORIZONTAL" && (c.children.length === 2 && (c.itemSpacing > 0.2 * c.width || c.itemSpacing > 0.1 * c.width && c.children[0].width > 0.7 * c.width) && (c.primaryAxisAlignItems = "SPACE_BETWEEN"), c.children.length === 3 && (c.itemSpacing > 0.15 * c.width || c.itemSpacing > 0.05 * c.width && c.children[1].width > 0.5 * c.width) && (c.primaryAxisAlignItems = "SPACE_BETWEEN"))
    r.setNodeForVertexId(t.id, c)
    return c
  }(E, t, i, l, d))
  if (h?.insertChild(g, x), E.type === "NODE" && T(E.node) && !d?.noRecurse)
    return w(E.node, [], t, i, l, d)
  if (E.type === "LIST") {
    let e = (n) => {
      n.type === "NODE" && T(n.node) ? w(n.node, [], t, i, l, d) : "children" in n && n.children.forEach(e)
    }
    d?.noRecurse || E.children.forEach(e);
    (x.parent?.type === "PAGE" || p) && (x.x = A.left, x.y = A.top)
    isApproximatelyEqual(y, x.width) || x.resize(y, x.height)
    isApproximatelyEqual(b, x.height) || x.resize(x.width, b)
  }
  return x
}
export const Oc = $$x0
export const aJ = $$k1
export const Rm = $$E2
