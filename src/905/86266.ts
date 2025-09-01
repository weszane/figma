import { useCallback } from "react";
import { Xr, md } from "../figma_app/27355";
import { getInitialOptions } from "../figma_app/169182";
import { a as _$$a } from "../905/425366";
import { oo } from "../905/895600";
import { tU } from "../905/683495";
export function $$d1() {
  let e = Xr(oo);
  return useCallback(t => e(function (e) {
    let t = getInitialOptions().user_data?.id;
    let i = getInitialOptions().user_data?.org_id || null;
    let n = e?.teamId || null;
    let r = null;
    return (tU() && (i ? r = `organization::${i}` : n && (r = `team::${n}`)), t) ? [{
      userId: t,
      teamId: n,
      orgId: i,
      planKey: r
    }] : [];
  }(t)), [e]);
}
export function $$c0() {
  let e = md(_$$a);
  return e?.evaluated_keys?.customIDs;
}
export const kh = $$c0;
export const vb = $$d1;