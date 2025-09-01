import { N } from "../figma_app/268271";
import { rRT, TaD, Clh, Msu, LPt } from "../figma_app/6204";
let r = [rRT, TaD, Clh, Msu, LPt];
export function $$i0(e) {
  let t = r.indexOf(e);
  if (-1 === t) {
    console.warn("Add overlay to ADMIN_DEFAULT_PLUS_OVERLAYS to set relative priority", e);
    return N.DEFAULT_MODAL;
  }
  let a = r.length;
  return N.DEFAULT_MODAL + (a - t) / a;
}
export const g = $$i0;