import { px } from "../905/893109";
import { n$, qE as _$$qE } from "../905/875826";
export let $$a13 = {
  x: 0,
  y: 0
};
export function $$s18(e, t) {
  return {
    x: e,
    y: t
  };
}
export function $$o2(e, t) {
  return e.x === t.x && e.y === t.y;
}
export function $$l6(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
}
export function $$d7(e) {
  return {
    x: e.movementX,
    y: e.movementY
  };
}
export function $$c10() {
  return {
    x: window.innerWidth,
    y: window.innerHeight
  };
}
export function $$u8(e) {
  let t = e.getBoundingClientRect();
  return {
    x: t.x,
    y: t.y
  };
}
export function $$p0(e) {
  return `translate(${e.x}px, ${e.y}px)`;
}
export function $$m14(e) {
  return {
    top: px(e.y),
    left: px(e.x)
  };
}
export function $$h3(e) {
  return {
    x: Math.round(e.x),
    y: Math.round(e.y)
  };
}
export function $$g16(e) {
  let t = 1 / (window.devicePixelRatio || 1);
  return {
    x: n$(e.x, t),
    y: n$(e.y, t)
  };
}
export function $$f11(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
export function $$_4(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
export function $$A9(e) {
  return Math.hypot(e.x, e.y);
}
export function $$y1(e, t) {
  return $$A9($$_4(e, t));
}
function b(e, t) {
  return (e.x - t.x) ** 2 + (e.y - t.y) ** 2;
}
export function $$v15(e, t) {
  return "number" == typeof t ? {
    x: e.x * t,
    y: e.y * t
  } : {
    x: e.x * t.x,
    y: e.y * t.y
  };
}
export function $$I5(e, t = 1) {
  return $$v15(e, t / $$A9(e));
}
export function $$E17(e, t, i) {
  return {
    x: _$$qE(e.x, t.x, i.x),
    y: _$$qE(e.y, t.y, i.y)
  };
}
export function $$x12(e, t, i) {
  if (!S(e, i) || S(t, i)) return null;
  let n = t.x - e.x;
  let r = t.y - e.y;
  let a = n >= 0 ? i.right : i.left;
  let s = r >= 0 ? i.bottom : i.top;
  if (0 === n) return {
    x: e.x,
    y: s
  };
  if (0 === r) return {
    x: a,
    y: e.y
  };
  let o = r / n;
  let l = e.y - o * e.x;
  let d = {
    x: a,
    y: o * a + l
  };
  let c = {
    x: (s - l) / o,
    y: s
  };
  return b(d, e) < b(c, e) ? d : c;
}
function S(e, t) {
  return e.x > t.left && e.x < t.right && e.y > t.top && e.y < t.bottom;
}
export const BB = $$p0;
export const Io = $$y1;
export const LC = $$o2;
export const LI = $$h3;
export const Re = $$_4;
export const S8 = $$I5;
export const TX = $$l6;
export const T_ = $$d7;
export const VN = $$u8;
export const VO = $$A9;
export const Vu = $$c10;
export const WQ = $$f11;
export const bl = $$x12;
export const f2 = $$a13;
export const gU = $$m14;
export const hs = $$v15;
export const i_ = $$g16;
export const qE = $$E17;
export const t6 = $$s18;