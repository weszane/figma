import { A } from "../905/17894";
export function $$r0(e) {
  let t = Object.keys(e.fields);
  let i = Object.entries(e.fieldToDeps).reduce((e, [t, i]) => (Object.values(i).forEach(i => {
    "otherField" === i.type && e[t].add(i.source);
  }), e), Object.fromEntries(t.map(e => [e, new Set()])));
  let n = [];
  for (; n.length < t.length;) {
    let e = Object.entries(i).find(([e, t]) => 0 === t.size);
    if (!e) throw Error("Circular dependency detected in form fields");
    let t = e[0];
    delete i[t];
    Object.entries(i).forEach(([e, i]) => {
      i.$$delete(t);
    });
    n.push(t);
  }
  return n;
}
export function $$a5(e) {
  return e.currentValue !== A && "validated" === e.status;
}
export function $$s4(e) {
  if (!$$a5(e)) throw Error(`Expected field ${e.fieldDisplayName} to be ready when it's not`);
  return e;
}
export function $$o3(e) {
  return e.currentValue !== A && !!e.setValue;
}
export function $$l1(e, t) {
  return e.currentValue === A ? t : e.currentValue;
}
export function $$d2(e) {
  return ("validated" === e.status || "error" === e.status) && Object.values(e.fieldStates).every(e => "validated" === e.status || "error" === e.status);
}
export const B7 = $$r0;
export const Lz = $$l1;
export const MQ = $$d2;
export const Zc = $$o3;
export const c_ = $$s4;
export const i_ = $$a5;