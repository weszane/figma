import { l } from "../vendor/616758";
export function $$$$s1(e, r, n) {
  if ("object" != typeof e || null === e) return JSON.stringify(e);
  let i = $$o0(Object.prototype);
  let s = $$o0(Array.prototype);
  let a = $$o0(Object.getPrototypeOf(e));
  let h = $$o0(e);
  try {
    return JSON.stringify(e, r, n);
  } catch (e) {
    return "<error: unable to serialize object>";
  } finally {
    i();
    s();
    a();
    h();
  }
}
export function $$o0(e) {
  let r = e;
  let n = r.toJSON;
  return n ? (delete r.toJSON, () => {
    r.toJSON = n;
  }) : l;
}
export const M = $$o0;
export const s = $$$$s1;