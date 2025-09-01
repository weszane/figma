import { cL, hZ, Ox, pf, g } from "../905/748726";
import { d } from "../905/44199";
export function $$a0(e, t) {
  let r = !!(e.tokens && e.tokens.length || e.inputValue && e.inputValue.length);
  e.tokens.some(e => e.state === d.ERROR) && (r = !1);
  e.inputValue && e.inputValue.length && t(e.inputValue).state === d.ERROR && (r = !1);
  return r;
}
export function $$s5(e) {
  let t = [];
  for (let r of e.tokens) t.push(r.content.toLowerCase());
  e.inputValue && t.push(e.inputValue.trim().toLowerCase());
  return t;
}
export function $$o1(e) {
  let t = [];
  for (let r of e.tokens) t.push(r.content.toLowerCase());
  return t;
}
export function $$l3(e) {
  let t = [];
  for (let r of e.tokens) {
    let e = "string" == typeof r.content ? r.content : r.content.email;
    t.push(e.toLowerCase());
  }
  e.inputValue && t.push(e.inputValue.trim().toLowerCase());
  return t;
}
export function $$d2() {
  return {
    inputValue: "",
    tokens: [],
    errorMessage: ""
  };
}
export function $$c4(e = $$d2(), t) {
  return cL.matches(t) ? $$d2() : hZ.matches(t) ? {
    ...t.payload
  } : Ox.matches(t) ? {
    ...e,
    tokens: e.tokens.concat(t.payload),
    inputValue: ""
  } : pf.matches(t) ? {
    ...e,
    inputValue: t.payload
  } : g.matches(t) ? {
    ...e,
    errorMessage: t.payload
  } : e;
}
export const F5 = $$a0;
export const N$ = $$o1;
export const Rs = $$d2;
export const Z = $$l3;
export const nx = $$c4;
export const um = $$s5;