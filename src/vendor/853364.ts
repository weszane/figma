let $$i1 = 1024;
let $$s2 = 1048576;
let o = /[^\u0000-\u007F]/;
export function $$a0(e) {
  return o.test(e) ? void 0 !== window.TextEncoder ? new TextEncoder().encode(e).length : new Blob([e]).size : e.length;
}
export function $$h3(e) {
  let r = new Uint8Array(e.reduce((e, r) => e + r.length, 0));
  let n = 0;
  for (let i of e) {
    r.set(i, n);
    n += i.length;
  }
  return r;
}
export const WW = $$a0;
export const _m = $$i1;
export const iH = $$s2;
export const wh = $$h3;