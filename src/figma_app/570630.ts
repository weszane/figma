import { Wh } from "../figma_app/615482";
import { eU, zl } from "../figma_app/27355";
export let $$i1 = Wh(() => eU({}));
function a(e) {
  zl.set($$i1, e);
}
export function $$s0(e) {
  let t = zl.get($$i1);
  t[e.codeFileFullPathWithoutScheme] = e;
  a(t);
}
export function $$o2(e) {
  let t = zl.get($$i1);
  for (let r of e) t[r.codeFileFullPathWithoutScheme] = r;
  a(t);
}
export const NJ = $$s0;
export const nM = $$i1;
export const nc = $$o2;