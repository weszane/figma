import { useMemo } from "react";
import { Rs } from "../figma_app/288654";
import { gB } from "../905/723791";
import { MX, EQ } from "../figma_app/684446";
import { TaT } from "../figma_app/43951";
import { D6, j_ } from "../figma_app/465071";
export function $$d0(e, t) {
  let a = Rs(TaT, {
    id: e
  }, t);
  return useMemo(() => "loaded" === a.status ? gB(a.data.licenseGroup?.licenseGroupMemberCounts) : a, [a]);
}
export function $$c1() {
  let e = MX();
  let t = D6("useLicenseGroupsSplit");
  let a = j_(t).unwrapOr(!1);
  let s = t.unwrapOr(null)?.userId;
  return useMemo(() => EQ(e, s ?? "", !a), [a, e, s]);
}
export const _ = $$d0;
export const x = $$c1;