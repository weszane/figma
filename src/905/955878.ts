import { Md, Uo, yA } from "../905/881471";
let $$r0 = "js-fullscreen-prevent-event-capture";
let $$a10 = "js-fullscreen-prevent-event-capture-keys";
let $$s13 = "js-fullscreen-wheel-event-capture";
export function $$o2(e) {
  e.preventDefault();
  e.stopPropagation();
}
export function $$l11(e, t) {
  t?.(e);
  return e.defaultPrevented;
}
export function $$d12(e) {
  e.preventDefault();
}
export function $$c6(e) {
  e.stopPropagation();
}
export function $$u4(e) {
  return 0 === e.clientX && 0 === e.clientY;
}
export function $$p3(e) {
  return e.target === e.currentTarget;
}
export function $$m9(e) {
  return !e.currentTarget.contains(e.target);
}
export function $$h5(e, t, i, n) {
  if (e) {
    e.addEventListener(t, i, n);
    return () => e.removeEventListener(t, i, n);
  }
}
export function $$g14(...e) {
  return () => {
    for (let t of e) t && t();
  };
}
export function $$f8(e) {
  let t = b(e);
  if ((Md || Uo) && t.target instanceof Element) {
    let {
      clientX,
      clientY
    } = t;
    if (!(Number.isInteger(clientX) && Number.isInteger(clientY))) return !1;
    let n = t.target.getBoundingClientRect();
    let r = n.left + n.width / 2;
    let a = n.top + n.height / 2;
    return clientX >= Math.floor(r) && clientX <= Math.ceil(r) && clientY >= Math.floor(a) && clientY <= Math.ceil(a);
  }
  return !yA && 0 === t.width && 0 === t.height || 1 === t.width && 1 === t.height && 0 === t.pressure && 0 === t.detail && "mouse" === t.pointerType;
}
let _ = new WeakSet();
export function $$A7(e) {
  _.add(b(e));
}
export function $$y1(e) {
  return _.has(b(e));
}
function b(e) {
  return "nativeEvent" in e ? e.nativeEvent : e;
}
export const Dm = $$r0;
export const EM = $$y1;
export const Ju = $$o2;
export const NC = $$p3;
export const SK = $$u4;
export const ch = $$h5;
export const dG = $$c6;
export const kB = $$A7;
export const n4 = $$f8;
export const qJ = $$m9;
export const s7 = $$a10;
export const sY = $$l11;
export const wo = $$d12;
export const yM = $$s13;
export const z_ = $$g14;