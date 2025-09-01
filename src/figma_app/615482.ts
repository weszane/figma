import { Iz, eU, zl } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { ze } from "../figma_app/516028";
let s = {
  preserveValue: !1
};
export function $$o1(e, t = s) {
  let r = Iz(e);
  return eU((e) => {
    let n = debugState ? e(ze) : "FILE_KEY";
    t.preserveValue || r.setShouldRemove((e, t) => t !== n);
    return e(r(n));
  }, (e, t, ...n) => t(r(e(ze)), ...n));
}
let l = [];
export function $$d2(e) {
  let t = eU(e);
  l.push({
    atomRef: new WeakRef(t),
    initialValue: e
  });
  return t;
}
export function $$c0() {
  for (let e = l.length - 1; e >= 0; e--) {
    let {
      atomRef,
      initialValue
    } = l[e];
    let i = atomRef.deref();
    i ? zl.set(i, initialValue) : l.splice(e, 1);
  }
}
export const Bc = $$c0;
export const Wh = $$o1;
export const rt = $$d2;