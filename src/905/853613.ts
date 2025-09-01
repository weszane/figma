import { zl } from "../figma_app/27355";
import { o } from "../figma_app/633080";
import { V9 } from "../905/72677";
export function $$s0(e) {
  if (null == e) return;
  let t = zl.get(V9);
  return t[e]?.partner_type ?? void 0;
}
export function $$o1(e) {
  switch (e) {
    case o.LIBRARY:
      return "library";
    case o.HUBFILE:
      return "hubFile";
  }
}
export const X = $$s0;
export const z = $$o1;