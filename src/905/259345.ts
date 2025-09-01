import { N } from "../905/55273";
export let $$r10 = 2.001;
export function $$a9(e, t, i = $$r10) {
  return Math.abs(e - t) < i;
}
export function $$s1(e, t, i = $$r10) {
  return $$a9(e, t, i) || e > t;
}
export function $$o6(e, t, i, n = !1) {
  return null != i && Math.abs(Number(e) - Number(t)) < i ? 0 : n ? Math.abs(Number(e)) > Math.abs(Number(t)) ? 1 : Math.abs(Number(e)) < Math.abs(Number(t)) ? -1 : 0 : e > t ? 1 : e < t ? -1 : 0;
}
export function $$l3(e) {
  return "X" === e ? "Y" : "X";
}
function d(e, t) {
  return {
    x: e.m00 * t.x + e.m01 * t.y,
    y: e.m10 * t.x + e.m11 * t.y
  };
}
export function $$c8(e) {
  let t = 1 / 0;
  let i = 1 / 0;
  let n = -1 / 0;
  let r = -1 / 0;
  for (let a of e) {
    t = Math.min(t, a.left);
    i = Math.min(i, a.top);
    n = Math.max(n, a.right);
    r = Math.max(r, a.bottom);
  }
  return {
    left: t,
    top: i,
    right: n,
    bottom: r
  };
}
export function $$u14(e) {
  let t = 1 / 0;
  let i = 1 / 0;
  let n = -1 / 0;
  let r = -1 / 0;
  for (let a of e) {
    let e = "x" in a && "relativeTransform" in a ? function (e, t) {
      let i = function (e, t) {
        let i = {
          x: 0,
          y: 0
        };
        for (let n of [{
          x: -1,
          y: 1
        }, {
          x: 1,
          y: 1
        }]) i = {
          x: Math.max(i.x, Math.abs(d(t, {
            x: e.x * n.x,
            y: e.y * n.y
          }).x)),
          y: Math.max(i.y, Math.abs(d(t, {
            x: e.x * n.x,
            y: e.y * n.y
          }).y))
        };
        return i;
      }(e, t);
      let n = {
        x: t.m02,
        y: t.m12
      };
      n.x += d(t, {
        x: e.x / 2,
        y: e.y / 2
      }).x;
      n.y += d(t, {
        x: e.x / 2,
        y: e.y / 2
      }).y;
      n.x -= i.x / 2;
      n.y -= i.y / 2;
      return {
        x: n.x,
        y: n.y,
        width: i.x,
        height: i.y
      };
    }({
      x: a.width,
      y: a.height
    }, {
      m00: a.relativeTransform[0][0],
      m01: a.relativeTransform[0][1],
      m02: a.relativeTransform[0][2],
      m10: a.relativeTransform[1][0],
      m11: a.relativeTransform[1][1],
      m12: a.relativeTransform[1][2]
    }) : a;
    e.x < t && (t = e.x);
    e.y < i && (i = e.y);
    e.x + e.width > n && (n = e.x + e.width);
    e.y + e.height > r && (r = e.y + e.height);
  }
  return {
    left: t,
    top: i,
    right: n,
    bottom: r
  };
}
function p(e, t, i, n = 0) {
  if ("X" === i) {
    let i = e;
    let r = t;
    e.left > t.left && (i = t, r = e);
    return i.left < r.right + n && i.right > r.left - n;
  }
  {
    let i = e;
    let r = t;
    e.top > t.top && (i = t, r = e);
    return i.top < r.bottom + n && i.bottom > r.top - n;
  }
}
export function $$m4(e, t) {
  let i = e.right - e.left;
  let r = t.right - t.left;
  let a = -1 * Math.min(N.HORIZONTAL_AXIS_OVERLAP_PX, .35 * i, .35 * r);
  let s = e.bottom - e.top;
  let o = t.bottom - t.top;
  let l = -1 * Math.min(N.VERTICAL_AXIS_OVERLAP_PX, .35 * s, .35 * o);
  return p(e, t, "X", a) && p(e, t, "Y", l);
}
export function $$h7(e, t, i = $$r10) {
  return $$a9(e.left, t.left, i) && $$a9(e.top, t.top, i) && $$a9(e.right, t.right, i) && $$a9(e.bottom, t.bottom, i);
}
export function $$g11(e, t) {
  return e["X" === t ? "x" : "y"];
}
export function $$f13(e, t, i) {
  return $$g11(t, i) < $$g11(e, i) ? $$f13(t, e, i) : $$g11(t, i) - $$g11(e, i) - ("X" === i ? e.width : e.height);
}
export function $$_0(e, t) {
  let i = function (e, t) {
    let i = [];
    if (e.length < 2) return i;
    for (let n = 0; n + 1 < e.length; n++) i.push($$f13(e[n], e[n + 1], t));
    return i;
  }(e, t);
  return i.reduce((e, t) => e + t, 0) / i.length;
}
export function $$A2(e) {
  switch (e) {
    case "left":
      return "MIN";
    case "right":
      return "MAX";
    default:
      return "CENTER";
  }
}
export function $$y5(e, t, i) {
  if (!e.length) return "left";
  let n = {
    left: 0,
    center: 0,
    right: 0,
    defer: 0
  };
  for (let r of e) {
    let e = function (e, t, i, n) {
      let r = "Y" === i ? "left" : "top";
      let a = "Y" === i ? "right" : "bottom";
      let s = Math.abs(t[r] - e[r]);
      let o = Math.max(0, t[a] - e[a]);
      return s < 1 && o < 1 ? "defer" : s > 5 * o + 5 ? "right" : 5 * s + 5 < o ? "left" : Math.abs(o - s) <= (t[a] - t[r]) * .33 && 0 !== s && 0 !== o ? "center" : s > o ? "right" : "left";
    }($$u14([r]), t, i, 0);
    e && n[e]++;
  }
  if ("X" === i && e.every(t => t.height === e[0].height)) return "center";
  let r = 0;
  let a = !1;
  let s = "X" === i ? "center" : "left";
  for (let e of ["left", "center", "right"]) {
    let t = n[e];
    t > r ? (r = t, s = e, a = !1) : t && t === r && (a = !0);
  }
  return a ? n.left > n.right ? "left" : n.right > n.left ? "right" : "center" : s;
}
export function $$b12(e, t) {
  let i = e.x + e.width / 2;
  let n = e.y + e.height / 2;
  return Math.sqrt(Math.pow(i - (t.x + t.width / 2), 2) + Math.pow(n - (t.y + t.height / 2), 2));
}
export const BS = $$_0;
export const JX = $$s1;
export const LZ = $$A2;
export const MM = $$l3;
export const Nj = $$m4;
export const Nv = $$y5;
export const _d = $$o6;
export const cA = $$h7;
export const mW = $$c8;
export const n4 = $$a9;
export const p8 = $$r10;
export const s9 = $$g11;
export const sH = $$b12;
export const uM = $$f13;
export const uS = $$u14;