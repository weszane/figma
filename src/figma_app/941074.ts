import { z } from "../vendor/835909";
export function $$i1(e) {
  if (!e) return null;
  if ("transparent" === e) return {
    r: 0,
    g: 0,
    b: 0,
    a: 0
  };
  e = e.replace(/^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, (e, t, r, n, i) => "#" + t + t + r + r + n + n + (i ? i + i : ""));
  let t = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);
  if (t) return {
    r: parseInt(t[1], 16) / 255,
    g: parseInt(t[2], 16) / 255,
    b: parseInt(t[3], 16) / 255,
    a: void 0 === t[4] ? 1 : parseInt(t[4], 16) / 255
  };
  let r = /^rgba\(\s*([0-9.]+),\s*([0-9.]+),\s*([0-9.]+),\s*([0-9.]+)\s*\)$/i.exec(e);
  return r ? {
    r: parseFloat(r[1]) || 0,
    g: parseFloat(r[2]) || 0,
    b: parseFloat(r[3]) || 0,
    a: parseFloat(r[4]) || 0
  } : null;
}
z.object({
  r: z.number().min(0).max(1),
  g: z.number().min(0).max(1),
  b: z.number().min(0).max(1),
  a: z.number().min(0).max(1)
}).describe("@name(RGBA)");
let a = e => ("00" + Math.round(255 * e).toString(16).toUpperCase()).substr(-2);
let s = e => `${a(e.r)}${a(e.g)}${a(e.b)}`;
let o = (e, t = 1) => `${a(e.r)}${a(e.g)}${a(e.b)}${a(e.a * t)}`;
export function $$l2(e, t = 1) {
  if (1 === e.a && 1 === t) {
    let t = s(e);
    return t[0] === t[1] && t[2] === t[3] && t[4] === t[5] ? `#${t[0]}${t[2]}${t[4]}` : `#${t}`;
  }
  {
    let r = o(e, t);
    return r[0] === r[1] && r[2] === r[3] && r[4] === r[5] && r[6] === r[7] ? `#${r[0]}${r[2]}${r[4]}${r[6]}` : `#${r}`;
  }
}
export function $$d0(e) {
  return /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(e);
}
export const Lo = $$d0;
export const QW = $$i1;
export const si = $$l2;