import { d4 } from "../vendor/514228";
import { fi } from "../figma_app/913823";
import { q5 } from "../figma_app/516028";
import { D2, oh } from "../905/18797";
import { yD } from "../905/92359";
export function $$l0() {
  let e = d4(e => e.fileVersion);
  let t = d4(e => e.loadingState);
  let i = q5();
  let l = i && null != e && yD(i.key) || null;
  let d = !(null != l && D2(t, l));
  let c = oh(fi);
  return d || c;
}
export const D = $$l0;