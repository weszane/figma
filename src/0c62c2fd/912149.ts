import { HB } from "../3973/538504";
import { iZ } from "../905/372672";
export function $$i0({
  rolesToDefaultToOther: e
} = {}) {
  let t = iZ()?.profile.job_title;
  let r = HB(t);
  return e && e.includes(r) ? "other" : r;
}
export const w = $$i0;