import { sortByWithOptions } from "../figma_app/656233";
import { Do, PW } from "../figma_app/633080";
import { lR } from "../figma_app/255679";
let s = /^Examples *\//;
export function $$o0(e, {
  isPreset: t
}) {
  return !!t && s.test(e.name);
}
export function $$l3(e, t) {
  if (Do(e) || !(e.type === PW.COMPONENT || e.type === PW.STATE_GROUP)) return !1;
  let r = lR(e, t);
  return $$o0(e, {
    isPreset: r
  });
}
export function $$d1(e, {
  isPreset: t
}) {
  return !!t && "Examples" === e;
}
export function $$c2(e, {
  sortFn: t,
  priorityFn: r
}) {
  return sortByWithOptions(e, e => {
    let n = t(e);
    return r(e) ? "!!!!!" + n : n;
  });
}
export const Nz = $$o0;
export const dS = $$d1;
export const gO = $$c2;
export const o = $$l3;