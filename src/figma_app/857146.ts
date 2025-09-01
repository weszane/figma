import { l7 } from "../905/189185";
import { UN } from "../905/700578";
import { DA } from "../figma_app/191804";
import { Ne, jF } from "../figma_app/702372";
function o(e, t) {
  return Math.round(e / t) * t;
}
export function $$l2(e, t, r, n) {
  let i = Math.min(t, Math.max(e.size.x / 2, e.size.y / 2));
  let a = Math.max(22, i);
  return o(Math.max(0, Math.min(r < n ? i / n * r : (a - i) / (Ne - n) * r + a - Ne * ((22 - i) / (Ne - n)), a)), 2);
}
export function $$d7(e, t, r) {
  let a = UN();
  for (let i in e) {
    let s = a.get(i);
    s && function (e, t, r, i) {
      l7.user("first-draft-theme-modal-adjust-radius", () => {
        switch (e.type) {
          case "FRAME":
          case "INSTANCE":
          case "SYMBOL":
          case "RECTANGLE":
            e.rectangleCornerRadiiIndependent ? (e.rectangleTopLeftCornerRadius = $$l2(e, r.rectangleTopLeftCornerRadius, t, i), e.rectangleTopRightCornerRadius = $$l2(e, r.rectangleTopRightCornerRadius, t, i), e.rectangleBottomLeftCornerRadius = $$l2(e, r.rectangleBottomLeftCornerRadius, t, i), e.rectangleBottomRightCornerRadius = $$l2(e, r.rectangleBottomRightCornerRadius, t, i)) : e.cornerRadius = $$l2(e, r.cornerRadius, t, i);
        }
      });
    }(s, t, e[s.guid], r);
  }
}
export function $$c0(e) {
  let t = {};
  if (!e || !e.isAlive || void 0 === e.size) return t;
  for (let r of function e(t, r, n) {
    let i = [];
    if (!t) return i;
    switch (t.type) {
      case "FRAME":
      case "INSTANCE":
      case "SYMBOL":
      case "RECTANGLE":
        let s = t.strokePaints.data.length > 0;
        let o = 1 === t.fills.length && "SOLID" === t.fills[0].type && t.fills[0].visible && t.fills[0].color || void 0;
        let l = t.fills && t.fills.length > 0 && t.fills.some(e => e.visible);
        let d = !l || !!o && n && DA(o, n);
        void 0 !== n && t.size.x < r && (s || !d || t.cornerRadius > 0 || t.rectangleTopLeftCornerRadius > 0 || t.rectangleTopRightCornerRadius > 0 || t.rectangleBottomLeftCornerRadius > 0 || t.rectangleBottomRightCornerRadius > 0) && i.push(t);
        !o || n && DA(o, n) ? !o && l && (n = {
          r: -1,
          g: -1,
          b: -1,
          a: 1
        }, r = t.size.x) : (n = o, r = t.size.x);
    }
    if ("childrenNodes" in t) for (let a of t.childrenNodes) i.push(...e(a, r, n));
    return i;
  }(e, e.size?.x, e.fills[0]?.color)) switch (r.type) {
    case "FRAME":
    case "INSTANCE":
    case "SYMBOL":
    case "RECTANGLE":
      t[r.guid] = {
        rectangleTopLeftCornerRadius: r.rectangleTopLeftCornerRadius,
        rectangleTopRightCornerRadius: r.rectangleTopRightCornerRadius,
        rectangleBottomLeftCornerRadius: r.rectangleBottomLeftCornerRadius,
        rectangleBottomRightCornerRadius: r.rectangleBottomRightCornerRadius,
        cornerRadius: r.cornerRadius,
        rectangleCornerRadiiIndependent: r.rectangleCornerRadiiIndependent
      };
  }
  return t;
}
export function $$u5(e) {
  if (0 === e.length) return Ne / 2;
  let t = [];
  for (let r of e) {
    let e = Math.max(0, Math.min(22, r));
    t.push(e / 22);
  }
  return y(t.reduce((e, t) => e + t, 0) / t.length * Ne, jF);
}
export function $$p4(e, t, r) {
  let n;
  let {
    value,
    rangeSize
  } = e;
  if (null === rangeSize) return value;
  let l = g.get(rangeSize);
  return l ? (n = t < r ? (value - l.min) / r * t + l.min : (l.max - value) / (Ne - r) * t + l.max - Ne * ((l.max - value) / (Ne - r)), o(n = Math.max(l.min, Math.min(n, l.max)), 2)) : value;
}
export function $$_1(e, t, r) {
  let a = UN();
  for (let [i, s] of e) {
    let e = a.get(i);
    e && function (e, t, r, i) {
      l7.user("first-draft-theme-modal-adjust-spacing", () => {
        switch (e.type) {
          case "FRAME":
          case "INSTANCE":
          case "SYMBOL":
            e.stackTopPadding = $$p4(i.stackTopPadding, t, r);
            e.stackRightPadding = $$p4(i.stackRightPadding, t, r);
            e.stackBottomPadding = $$p4(i.stackBottomPadding, t, r);
            e.stackLeftPadding = $$p4(i.stackLeftPadding, t, r);
            e.stackSpacing = $$p4(i.stackSpacing, t, r);
        }
      });
    }(e, t, r, s);
  }
}
export function $$h8(e) {
  let t = new Map();
  if (!e || !e.isAlive) return t;
  let r = [e];
  for (; r.length > 0;) {
    let n = r.pop();
    if (n) {
      switch (n.type) {
        case "FRAME":
        case "INSTANCE":
        case "SYMBOL":
          if ("VERTICAL" !== e.stackMode && "HORIZONTAL" !== e.stackMode) break;
          t.set(n.guid, {
            stackTopPadding: n.stackTopPadding,
            stackRightPadding: n.stackRightPadding,
            stackBottomPadding: n.stackBottomPadding,
            stackLeftPadding: n.stackLeftPadding,
            stackSpacing: n.stackSpacing
          });
      }
      if ("childrenNodes" in n) for (let e of n.childrenNodes) r.push(e);
    }
  }
  return t;
}
var m = (e => (e[e.XXXS = 4] = "XXXS", e[e.XXS = 8] = "XXS", e[e.XS = 12] = "XS", e[e.S = 16] = "S", e[e.M = 24] = "M", e[e.L = 32] = "L", e[e.XL = 48] = "XL", e[e.XXL = 64] = "XXL", e[e.XXXL = 96] = "XXXL", e))(m || {});
let g = new Map([[4, {
  min: 4,
  max: 6
}], [8, {
  min: 6,
  max: 12
}], [12, {
  min: 8,
  max: 16
}], [16, {
  min: 12,
  max: 24
}], [24, {
  min: 16,
  max: 40
}], [32, {
  min: 24,
  max: 48
}], [48, {
  min: 32,
  max: 56
}], [64, {
  min: 56,
  max: 72
}], [96, {
  min: 72,
  max: 96
}]]);
export function $$f6(e) {
  return e < 4 || e > 96 ? null : Object.values(m).filter(e => "number" == typeof e).reduce((t, r) => Math.abs(r - e) < Math.abs(t - e) ? r : t);
}
export function $$E3(e) {
  let t = [];
  for (let r of e.values()) for (let e of Object.values(r)) {
    let {
      rangeSize,
      value
    } = e;
    if (null === rangeSize) continue;
    let i = g.get(rangeSize);
    i && (value === i.min ? t.push(0) : value === i.max ? t.push(1) : value === rangeSize ? t.push(.5) : value < rangeSize ? t.push((value - i.min) / (rangeSize - i.min) * .5) : value > rangeSize && t.push(.5 + (value - rangeSize) / (i.max - rangeSize) * .5));
  }
  return 0 === t.length ? Ne / 2 : y(t.reduce((e, t) => e + t, 0) / t.length * Ne, jF);
}
function y(e, t) {
  let r = 1 / t;
  return Math.round(e * r) / r;
}
export const $L = $$c0;
export const HS = $$_1;
export const UO = $$l2;
export const YB = $$E3;
export const nV = $$p4;
export const nd = $$u5;
export const o$ = $$f6;
export const oP = $$d7;
export const uq = $$h8;