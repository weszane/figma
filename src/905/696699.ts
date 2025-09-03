import { assertNotNullish } from "../figma_app/465776";
import { A } from "../905/284190";
import { TF, vf, kz } from "../905/18922";
import { sH } from "../905/871411";
import { yX, bW, iZ } from "../905/642476";
import { dC, wv } from "../905/850029";
import { getSingletonSceneGraph } from "../905/700578";
function c(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
export function $$u1(e) {
  let t = e.vectorDataInfo;
  assertNotNullish(t?.data.vectorNetworkBlob, "Figma Internal Error: vector is missing data");
  let i = {
    strokeCap: e.strokeCap,
    strokeJoin: e.strokeJoin,
    cornerRadius: e.cornerRadius,
    handleMirroring: e.handleMirroring
  };
  let r = {
    fillPaints: {
      data: e.fills,
      blobs: []
    },
    fillStyleRef: e.inheritedFillStyle
  };
  let a = e.overriddenInheritedFillStyles;
  let s = new Map();
  let o = new Map();
  for (let e of (s.set(0, i), o.set(0, r), t.data.styleOverrideTable || [])) {
    assertNotNullish(e.styleID, "Figma Internal Error: missing styleID when decoding vector network");
    s.set(e.styleID, {
      strokeCap: "strokeCap" in e ? e.strokeCap : i.strokeCap,
      strokeJoin: "strokeJoin" in e ? e.strokeJoin : i.strokeJoin,
      cornerRadius: "cornerRadius" in e ? e.cornerRadius : i.cornerRadius,
      handleMirroring: "handleMirroring" in e ? e.handleMirroring : i.handleMirroring
    });
    let t = {};
    let l = a[e.styleID];
    l ? t.fillStyleRef = l : t.fillStyleRef = "fillPaints" in e ? null : r.fillStyleRef;
    l?.fills ? t.fillPaints = l.fills : l ? t.fillPaints = {
      data: [],
      blobs: []
    } : t.fillPaints = "fillPaints" in e ? {
      data: e.fillPaints ?? [],
      blobs: []
    } : r.fillPaints;
    o.set(e.styleID, t);
  }
  let l = function (e, t, i) {
    let n = [];
    let r = [];
    let a = [];
    if (e.length < 3) return {
      vertices: n,
      segments: r,
      regions: a
    };
    let s = new Int32Array(e.buffer);
    let o = new Float32Array(s.buffer);
    let l = 0;
    let d = s[l++];
    let c = s[l++];
    let u = s[l++];
    if ("number" != typeof d || "number" != typeof c || "number" != typeof u) throw Error("Failed to retrieve vector network, network data is invalid");
    for (let e = 0; e < d; e++) {
      let e = s[l++];
      let i = t.get(e) || t.get(0);
      n.push({
        x: o[l++],
        y: o[l++],
        ...i
      });
    }
    for (let e = 0; e < c; e++) {
      l++;
      r.push({
        start: s[l++],
        tangentStart: {
          x: o[l++],
          y: o[l++]
        },
        end: s[l++],
        tangentEnd: {
          x: o[l++],
          y: o[l++]
        }
      });
    }
    for (let e = 0; e < u; e++) {
      let e = s[l++];
      let t = s[l++];
      let n = e >> 1;
      let r = {
        windingRule: 1 & e ? "NONZERO" : "EVENODD",
        loops: [],
        ...(i.get(n) || i.get(0))
      };
      for (let e = 0; e < t; e++) {
        let e = s[l++];
        let t = [];
        for (let i = 0; i < e; i++) t.push(s[l++]);
        r.loops.push(t);
      }
      a.push(r);
    }
    if (l !== s.length) throw Error("Failed to retrieve vector network, network data is invalid");
    return {
      vertices: n,
      segments: r,
      regions: a
    };
  }(t.blobs[t.data.vectorNetworkBlob].bytes, s, o);
  let d = e.size;
  let c = t.data.normalizedSize ?? {
    x: 1,
    y: 1
  };
  return function (e, t) {
    let i = e?.vertices ?? [];
    let n = e?.segments ?? [];
    let r = e?.regions ?? [];
    let a = {
      m00: t.x,
      m01: 0,
      m02: 0,
      m10: 0,
      m11: t.y,
      m12: 0
    };
    return {
      regions: m(r),
      segments: n.map(e => ({
        start: e.start,
        end: e.end,
        tangentStart: p(a, e.tangentStart),
        tangentEnd: p(a, e.tangentEnd)
      })),
      vertices: i.map(e => ({
        ...p(a, e),
        strokeCap: e.strokeCap,
        strokeJoin: e.strokeJoin,
        cornerRadius: e.cornerRadius,
        handleMirroring: e.handleMirroring
      }))
    };
  }(l, {
    x: d.x / (c.x || 1),
    y: d.y / (c.y || 1)
  });
}
function p(e, t) {
  return {
    x: e.m00 * t.x + e.m01 * t.y + e.m02,
    y: e.m10 * t.x + e.m11 * t.y + e.m12
  };
}
function m(e) {
  let t = [];
  e && e.forEach(e => {
    t.push({
      windingRule: e.windingRule,
      loops: e.loops.map(e => e.slice()),
      fillPaints: A(e.fillPaints),
      fillStyleRef: e.fillStyleRef
    });
  });
  return t;
}
export function $$h3(e, t, i = getSingletonSceneGraph()) {
  let n = $$u1(e);
  if (n.regions.length > 0) {
    let t = n.regions[0];
    e.fills = t.fillPaints.data;
    e.inheritedFillStyle = t.fillStyleRef ?? null;
  }
  let r = function (e) {
    let t = e?.vertices ?? [];
    let i = e?.segments ?? [];
    let n = {
      x: 1 / 0,
      y: 1 / 0,
      width: -1 / 0,
      height: -1 / 0
    };
    for (let e of i) {
      let i = t[e.start];
      let r = t[e.end];
      n = yX(n, bW(i, r));
    }
    for (let e of i) {
      if (0 === e.tangentStart.x && 0 === e.tangentStart.y && 0 === e.tangentEnd.x && 0 === e.tangentEnd.y) continue;
      let i = t[e.start];
      let r = {
        x: i.x + e.tangentStart.x,
        y: i.y + e.tangentStart.y
      };
      let a = t[e.end];
      let s = {
        x: a.x + e.tangentEnd.x,
        y: a.y + e.tangentEnd.y
      };
      iZ(n, r) && iZ(n, s) || (n = yX(n, function (e, t, i, n) {
        let r = bW(e, n);
        if (iZ(r, t) && iZ(r, i)) return r;
        let a = [0, 0, 0, 0];
        let s = [0, 0, 0, 0];
        let l = [0, 0, 0, 0];
        let d = [0, 0, 0, 0];
        let c = 0;
        let u = 0;
        a[0] = 0;
        s[0] = 0;
        c = 1 + f(e.x, t.x, i.x, n.x, a, 1);
        u = 1 + f(e.y, t.y, i.y, n.y, s, 1);
        a[c++] = 1;
        s[u++] = 1;
        l[0] = e.x;
        d[0] = e.y;
        for (let r = 1; r + 1 < c; r++) l[r] = g(e.x, t.x, i.x, n.x, a[r]);
        for (let r = 1; r + 1 < u; r++) d[r] = g(e.y, t.y, i.y, n.y, s[r]);
        l[c - 1] = n.x;
        d[u - 1] = n.y;
        let p = {
          x: e.x,
          y: e.y
        };
        let m = {
          x: e.x,
          y: e.y
        };
        for (let e = 0; e < c; e++) {
          p.x = Math.min(p.x, l[e]);
          m.x = Math.max(m.x, l[e]);
        }
        for (let e = 0; e < u; e++) {
          p.y = Math.min(p.y, d[e]);
          m.y = Math.max(m.y, d[e]);
        }
        return {
          x: p.x,
          y: p.y,
          width: m.x - p.x,
          height: m.y - p.y
        };
      }(i, r, s, a)));
    }
    return isFinite(n.x) && isFinite(n.y) && isFinite(n.width) && isFinite(n.height) ? n : {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }(t);
  let a = function (e, t) {
    let i = e?.vertices ?? [];
    let n = e?.segments ?? [];
    let r = e?.regions ?? [];
    let a = {
      m00: 1,
      m01: 0,
      m02: t.x,
      m10: 0,
      m11: 1,
      m12: t.y
    };
    return {
      regions: m(r),
      segments: function (e) {
        let t = [];
        e && e.forEach(e => {
          t.push({
            start: e.start,
            tangentStart: {
              ...e.tangentStart
            },
            end: e.end,
            tangentEnd: {
              ...e.tangentEnd
            }
          });
        });
        return t;
      }(n),
      vertices: i.map(e => ({
        ...p(a, e),
        strokeCap: e.strokeCap,
        strokeJoin: e.strokeJoin,
        cornerRadius: e.cornerRadius,
        handleMirroring: e.handleMirroring
      }))
    };
  }(t, {
    x: -r.x,
    y: -r.y
  });
  let l = {
    strokeCap: "NONE",
    strokeJoin: "MITER",
    cornerRadius: 0,
    handleMirroring: "NONE"
  };
  let c = [];
  let _ = new Map();
  let A = a.vertices.map(e => {
    let t = function (e, t) {
      let i = {
        ...e
      };
      for (let e in t) e in i && void 0 === i[e] && delete i[e];
      return {
        ...t,
        ...i
      };
    }(e, l);
    let i = `${t.strokeCap}|${t.strokeJoin}|${t.cornerRadius}|${t.handleMirroring}`;
    let n = _.get(i);
    void 0 === n && (n = c.length + 1, c.push({
      styleID: n,
      strokeCap: t.strokeCap,
      strokeJoin: t.strokeJoin,
      cornerRadius: t.cornerRadius,
      handleMirroring: t.handleMirroring
    }), _.set(i, n));
    return n;
  });
  let y = a.regions.map(e => {
    let t = c.length + 1;
    if (e.fillStyleRef) {
      let n = i.getStyleNodeByRef(e.fillStyleRef);
      if (!n) return 0;
      let r = {
        styleID: t
      };
      let a = n.styleId;
      let o = a.guid && sH(a.guid);
      if (o) r.styleIdForFill = {
        guid: o
      };else if (a.ref) r.styleIdForFill = {
        assetRef: a.ref
      };else throw Error(`Invalid StyleId ${JSON.stringify(a)}`);
      c.push(r);
      return t;
    }
    return e.fillPaints ? (c.push({
      styleID: t,
      fillPaints: e.fillPaints.data
    }), t) : 0;
  });
  let b = function (e, t, i) {
    let n = e && e.vertices || [];
    let r = e && e.segments || [];
    let a = e && e.regions || [];
    let s = [n.length, r.length, a.length];
    let o = new Float32Array(1);
    let l = new Int32Array(o.buffer);
    function d(e) {
      o[0] = e;
      return l[0];
    }
    for (let e = 0; e < n.length; e++) {
      let i = n[e];
      s.push(t[e], d(i.x), d(i.y));
    }
    for (let e = 0; e < r.length; e++) {
      let t = r[e];
      s.push(0, t.start, d(t.tangentStart.x), d(t.tangentStart.y), t.end, d(t.tangentEnd.x), d(t.tangentEnd.y));
    }
    for (let e = 0; e < a.length; e++) {
      let t = a[e];
      let n = t.loops;
      if ("NONZERO" !== t.windingRule && "EVENODD" !== t.windingRule) throw Error("Invalid network has invalid winding rule " + JSON.stringify(t.windingRule));
      s.push(i[e] << 1 | ("NONZERO" === t.windingRule ? 1 : 0), n.length);
      for (let e = 0; e < n.length; e++) {
        let t = n[e];
        s.push(t.length);
        for (let e = 0; e < t.length; e++) s.push(t[e]);
      }
    }
    return new Uint8Array(new Int32Array(s).buffer);
  }(a, A, y);
  let v = {
    x: r.width,
    y: r.height
  };
  let I = {
    x: r.x,
    y: r.y
  };
  e.vectorDataInfo = {
    data: {
      vectorNetworkBlob: 0,
      normalizedSize: v,
      styleOverrideTable: c
    },
    blobs: [{
      bytes: b
    }]
  };
  let E = e.relativeTransform;
  let x = p(E, I);
  e.size = v;
  e.relativeTransform = {
    ...E,
    m02: x.x,
    m12: x.y
  };
}
function g(e, t, i, n, r) {
  let a = 1 - r;
  return a * (a * (a * e + 3 * r * t) + 3 * r * r * i) + r * r * r * n;
}
function f(e, t, i, n, r, a) {
  let s = 3 * (3 * t + n - (e + 3 * i));
  let o = 6 * (e + i - 2 * t);
  let l = 3 * (t - e);
  let d = a;
  if (1e-12 > Math.abs(s) && (s = 0), 1e-12 > Math.abs(o) && (o = 0), 0 !== s) {
    let e = o * o - 4 * l * s;
    if (e >= 0) {
      let t = -o / (2 * s);
      let i = Math.sqrt(e) / Math.abs(2 * s);
      let n = t - i;
      let a = t + i;
      0 < n && n < 1 && (r[d++] = n);
      e > 0 && 0 < a && a < 1 && (r[d++] = a);
    }
  } else if (0 !== o) {
    let e = -l / o;
    0 < e && e < 1 && (r[d++] = e);
  }
  return d - a;
}
export function $$_4(e) {
  new E(e).checkValid();
}
export function $$A0(e) {
  let t = new E(e);
  let i = Array(e.segments.length).fill(!1);
  let n = [];
  if (t.isEmpty()) return [];
  for (let e of t.regions) {
    let r = new TF(e.windingRule);
    for (let n of e.loops) {
      let e = null;
      for (let {
        segment,
        segmentIndex
      } of t.getOrderedLoop(n)) {
        i[segmentIndex] = !0;
        let n = t.getVertex(segment.start);
        let o = t.getVertex(segment.end);
        null === e && (r.moveTo(n), e = n);
        v(segment) ? r.lineTo(o) : r.curveTo(dC(n, segment.tangentStart), dC(o, segment.tangentEnd), o);
      }
      wv(r.lastPosition, e) && r.closePath();
    }
    n.push(r);
  }
  let r = [];
  for (let e = 0; e < t.vertices.length; e++) r[e] = [];
  for (let e = 0; e < t.segments.length; e++) i[e] || (r[t.segments[e].start].push(e), r[t.segments[e].end].push(e));
  let s = [];
  for (let e = 0; e < 2; e++) for (let n = 0; n < t.vertices.length; n++) if (0 !== e || 2 !== r[n].length) for (let e of r[n]) {
    if (i[e]) continue;
    let a = n;
    let o = e;
    let l = {
      segments: [],
      isClosed: !1,
      startingVertex: a
    };
    for (s.push(l); !i[o];) {
      i[o] = !0;
      a = I(t.segments[o], a);
      l.segments.push(o);
      let e = r[a];
      if (2 === e.length) o = e[0] === o ? e[1] : e[0];else break;
    }
    a === n && (l.isClosed = !0);
  }
  if (s.length > 0) {
    let e = new TF("NONE");
    for (let i of (n.push(e), s)) {
      let n = i.startingVertex;
      let r = t.vertices[n];
      for (let a of (e.moveTo(r), i.segments)) {
        let i = t.segments[a];
        n = i.start === n ? i.end : i.start;
        let s = t.vertices[n];
        v(i) ? e.lineTo(s) : n === i.end ? e.curveTo(dC(r, i.tangentStart), dC(s, i.tangentEnd), s) : e.curveTo(dC(r, i.tangentEnd), dC(s, i.tangentStart), s);
        r = s;
      }
      i.isClosed && e.closePath();
    }
  }
  return n.map(e => e.toVectorPath());
}
export function $$y2(e) {
  let t = [];
  let i = [];
  let n = [];
  let r = {};
  let s = {};
  let o = [];
  let l = {
    x: 0,
    y: 0
  };
  let d = null;
  function c(e) {
    let i = b(e);
    i in r || (r[i] = t.length, t.push(e));
    return r[i];
  }
  function u(e) {
    let t = e.start < e.end || e.start === e.end && (e.tangentStart.x < e.tangentEnd.x || e.tangentStart.x === e.tangentEnd.x && e.tangentStart.y < e.tangentEnd.y) ? `${e.start} ${e.tangentStart.x} ${e.tangentStart.y} ${e.end} ${e.tangentEnd.x} ${e.tangentEnd.y}` : `${e.end} ${e.tangentEnd.x} ${e.tangentEnd.y} ${e.start} ${e.tangentStart.x} ${e.tangentStart.y}`;
    t in s || (s[t] = i.length, i.push(e));
    return s[t];
  }
  function p() {
    null === d && (d = {
      startingVertex: c(l),
      loop: []
    });
  }
  function m(e) {
    if (null !== d && d.loop.length) {
      let t = r[b(l)];
      let i = d.startingVertex;
      if (e && t !== i) {
        let e = u({
          start: t,
          end: i,
          tangentStart: {
            x: 0,
            y: 0
          },
          tangentEnd: {
            x: 0,
            y: 0
          }
        });
        d.loop.push(e);
      }
      o.push(d.loop);
    }
    d = null;
  }
  for (let t of e) {
    let e = vf(t);
    let i = e.length;
    let s = 0;
    for (; s < i;) {
      let t = e[s++];
      let n = kz(t);
      if (void 0 === n || s + n > i) throw Error("Failed to convert path to network, invalid commands data");
      switch (t) {
        case "M":
          d = null;
          l = {
            x: e[s++],
            y: e[s++]
          };
          break;
        case "L":
          {
            p();
            let t = u({
              start: r[b(l)],
              end: c(l = {
                x: e[s++],
                y: e[s++]
              }),
              tangentStart: {
                x: 0,
                y: 0
              },
              tangentEnd: {
                x: 0,
                y: 0
              }
            });
            d.loop.push(t);
            break;
          }
        case "Q":
          {
            p();
            let t = l;
            let i = r[b(t)];
            let n = {
              x: e[s++],
              y: e[s++]
            };
            let a = u({
              start: i,
              end: c(l = {
                x: e[s++],
                y: e[s++]
              }),
              tangentStart: {
                x: (n.x - t.x) * 2 / 3,
                y: (n.y - t.y) * 2 / 3
              },
              tangentEnd: {
                x: (n.x - l.x) * 2 / 3,
                y: (n.y - l.y) * 2 / 3
              }
            });
            d.loop.push(a);
            break;
          }
        case "C":
          {
            p();
            let t = l;
            let i = r[b(t)];
            let n = {
              x: e[s++],
              y: e[s++]
            };
            let a = {
              x: e[s++],
              y: e[s++]
            };
            let o = u({
              start: i,
              end: c(l = {
                x: e[s++],
                y: e[s++]
              }),
              tangentStart: {
                x: n.x - t.x,
                y: n.y - t.y
              },
              tangentEnd: {
                x: a.x - l.x,
                y: a.y - l.y
              }
            });
            d.loop.push(o);
            break;
          }
        case "Z":
          m(!0);
      }
    }
    "NONE" !== t.windingRule && (m(!1), o.length > 0 && n.push({
      windingRule: t.windingRule,
      loops: o
    }));
    d = null;
  }
  return {
    vertices: t,
    segments: i,
    regions: n
  };
}
function b(e) {
  return `${e.x} ${e.y}`;
}
function v(e) {
  return 0 === e.tangentStart.x && 0 === e.tangentStart.y && 0 === e.tangentEnd.x && 0 === e.tangentEnd.y;
}
function I(e, t) {
  if (t === e.start) return e.end;
  if (t === e.end) return e.start;
  throw Error(`Unknown vertex (${t}) for segment (${e.start},${e.end})`);
}
let E = class {
  isEmpty() {
    return 0 === this.vertices.length;
  }
  hasVertex(e, t) {
    return e.start === t || e.end === t;
  }
  startingVertex(e) {
    if (1 === e.length) return this.segments[e[0]].start;
    let t = this.segments[e[0]];
    let i = this.segments[e[1]];
    let n = this.hasVertex(i, t.end);
    let r = this.hasVertex(i, t.start);
    if (n && r && e.length > 2) {
      let i = this.segments[e[2]];
      n = this.hasVertex(i, t.start);
    }
    if (n) return t.start;
    if (!r) throw Error("Network: invalid starting vertex");
    return t.end;
  }
  getOrderedLoop(e) {
    if (0 === e.length) return [];
    let t = [];
    let i = this.startingVertex(e);
    for (let n of e) {
      let e = this.segments[n];
      let r = e.start === i;
      if (!(e.start === i || e.end === i)) throw Error("Network: invalid loop");
      r ? (t.push({
        segmentIndex: n,
        segment: {
          start: e.start,
          end: e.end,
          tangentStart: e.tangentStart,
          tangentEnd: e.tangentEnd
        }
      }), i = e.end) : (t.push({
        segmentIndex: n,
        segment: {
          start: e.end,
          end: e.start,
          tangentStart: e.tangentEnd,
          tangentEnd: e.tangentStart
        }
      }), i = e.start);
    }
    return t;
  }
  getVertex(e) {
    return this.vertices[e];
  }
  checkValid() {
    for (let [e, t] of this.segments.entries()) {
      if (t.start >= this.vertices.length) throw Error(`vectorNetwork.segments[${e}].start does not refer to a valid vertex. For more info see https://www.figma.com/plugin-docs/api/VectorNetwork/`);
      if (t.end >= this.vertices.length) throw Error(`vectorNetwork.segments[${e}].end does not refer to a valid vertex. For more info see https://www.figma.com/plugin-docs/api/VectorNetwork/`);
    }
    for (let [e, t] of this.regions.entries()) {
      if (0 === t.loops.length) throw Error(`vectorNetwork.regions[${e}].loops must have at least one loop. For more info see https://www.figma.com/plugin-docs/api/VectorNetwork/`);
      for (let [i, n] of t.loops.entries()) {
        if (0 === n.length) throw Error(`vectorNetwork.regions[${e}].loops[${i}] must have at least one segment. For more info see https://www.figma.com/plugin-docs/api/VectorNetwork/`);
        for (let [t, r] of n.entries()) if (r >= this.segments.length) throw Error(`vectorNetwork.regions[${e}].loops[${i}][${t}] does not refer to a valid segment. For more info see https://www.figma.com/plugin-docs/api/VectorNetwork/`);
        let t = this.startingVertex(n);
        for (let [r, a] of n.entries()) {
          let n = this.segments[a];
          if (t != n.start && t != n.end) throw Error(`vectorNetwork.regions[${e}].loops[${i}][${r}] does not connect properly with previous segment. For more info see https://www.figma.com/plugin-docs/api/VectorNetwork/`);
          t = I(n, t);
        }
      }
    }
  }
  constructor(e) {
    c(this, "regions", []);
    c(this, "segments", []);
    c(this, "vertices", []);
    e && (this.regions = e.regions, this.segments = e.segments, this.vertices = e.vertices);
  }
};
export const Hn = $$A0;
export const Kx = $$u1;
export const VS = $$y2;
export const iN = $$h3;
export const ur = $$_4;