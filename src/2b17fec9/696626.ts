import { getFeatureFlags } from "../905/601108";
import { atom } from "../figma_app/27355";
import { Yk } from "../2b17fec9/441720";
function s() {
  return [Yk.TEXT, Yk.SECTION, Yk.TABLE, Yk.STAMP, Yk.COMMENTS, ...(getFeatureFlags().figjam_quick_actions_v2 ? [Yk.ACTIONS] : [])];
}
export function $$o0(e) {
  return s().slice(0, e);
}
export function $$l4(e) {
  return s().slice(e);
}
function d() {
  return s().length;
}
export function $$c1() {
  return {
    stage: "FULL",
    thresholdWidth: m(d()),
    numVisibleTools: d()
  };
}
let u = {
  stage: "CUT_OFF",
  thresholdWidth: 0,
  numVisibleTools: 0
};
let $$p3 = atom(u);
export function $$h2(e) {
  let t = [$$c1()];
  let i = d();
  for (let n = i - 1; n >= 0; n -= 1) t.push({
    stage: `MINIMIZED_${n}`,
    thresholdWidth: m(n),
    numVisibleTools: e ? n - 1 : n
  });
  t.push(u);
  return t;
}
function m(e) {
  return 0 === e ? 346 : 346 + 40 * e;
}
export const $R = $$o0;
export const Hu = $$c1;
export const Iq = $$h2;
export const Kj = $$p3;
export const hn = $$l4;