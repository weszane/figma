import { normalizeJobRole } from "../3973/538504";
import { selectCurrentUser } from "../905/372672";
export function $$a0({
  rolesToDefaultToOther: e
} = {}) {
  let t = selectCurrentUser()?.profile.job_title;
  let i = normalizeJobRole(t);
  return e && e.includes(i) ? "other" : i;
}
export const w = $$a0;