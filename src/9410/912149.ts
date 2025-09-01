import { HB } from "../3973/538504";
import { iZ } from "../905/372672";
export function $$a0({
  rolesToDefaultToOther: e
} = {}) {
  let t = iZ()?.profile.job_title;
  let i = HB(t);
  return e && e.includes(i) ? "other" : i;
}
export const w = $$a0;