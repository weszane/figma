import { parsePxNumber } from "../figma_app/783094";
import { to } from "../figma_app/828186";
import { h as _$$h } from "../9410/60125";
import { iT } from "../figma_app/74165";
import { qw, dP, Bv, lK } from "../figma_app/740163";
import { Ye } from "../figma_app/32128";
import { T_r } from "../figma_app/27776";
export function $$c0() {
  let e = qw();
  let {
    isPropertiesPanelCollapsed
  } = iT();
  let i = Ye();
  let c = dP();
  let u = Bv();
  let p = (i ? 0 : c) + (lK() ? parsePxNumber(T_r) : 0) + u;
  let h = to();
  let {
    leftOffset,
    rightOffset
  } = _$$h();
  return h ? [leftOffset, rightOffset] : [p, isPropertiesPanelCollapsed ? 0 : e];
}
export const d = $$c0;