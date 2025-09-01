import { UN } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { CK } from "../figma_app/97020";
export function $$s2(e) {
  return e && "CANVAS" === e.type ? e.childrenNodes.filter(e => e.isResponsiveSetOrWebpage) : [];
}
export function $$o0(e) {
  let t = $$s2(e);
  let r = e?.defaultResponsiveSetId;
  return t.reverse().sort((e, t) => r === e.guid ? -1 : r === t.guid ? 1 : 0);
}
export async function $$l1(e) {
  if (!e || !getFeatureFlags().dakota_preview) return await Promise.resolve({});
  let t = $$s2(UN().get(e));
  return await CK(t);
}
export const JZ = $$o0;
export const nl = $$l1;
export const wk = $$s2;