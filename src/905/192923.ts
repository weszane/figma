import { I } from "../905/83107";
function r(e, t) {
  return (t || (t = I(e)), t) ? {
    x: e.x - t.x,
    y: e.y - t.y
  } : {
    x: -1,
    y: -1
  };
}
export function $$a2(e, t) {
  let i = r(e);
  return i.x < t.w / 3 && i.y < t.h / 10;
}
export function $$s5(e, t) {
  return r(e).y + e.h >= .9 * t.h;
}
export function $$o4(e, t) {
  return r(e).y <= .1 * t.h;
}
export function $$l9(e, t) {
  return r(e).x <= .1 * t.w;
}
export function $$d1(e, t) {
  return r(e, t).x / t.w;
}
export function $$c0(e, t) {
  return r(e, t).y / t.h;
}
export function $$u7(e) {
  return e.h < 200;
}
export function $$p6(e, t) {
  return e.w > .9 * t.w;
}
export function $$m8(e) {
  let t = e.parentNode;
  return t && 0 !== t.x ? e.x - t.x : -1;
}
export function $$h3(e) {
  let t = e.parentNode;
  return t && 0 !== t.y ? e.y - t.y : -1;
}
export const Du = $$c0;
export const E8 = $$d1;
export const GB = $$a2;
export const Iw = $$h3;
export const fW = $$o4;
export const nO = $$s5;
export const sy = $$p6;
export const tc = $$u7;
export const vl = $$m8;
export const xw = $$l9;