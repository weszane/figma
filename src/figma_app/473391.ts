import { Gj, Av } from "../figma_app/646357";
import { Do, PW } from "../figma_app/633080";
export function $$a0(e) {
  return Do(e) ? "LOCAL" === e.subscriptionStatus ? e.keyForPublish : e.key : e.isLocal ? Gj(e) : Av(e) ?? Gj(e);
}
export function $$s1(e) {
  switch (e) {
    case PW.COMPONENT:
    case PW.STATE_GROUP:
    case PW.MODULE:
      return e;
    default:
      return;
  }
}
export const V = $$a0;
export const q = $$s1;