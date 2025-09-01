import { oA } from "../905/663269";
import { Rs } from "../figma_app/288654";
import { O } from "../905/655700";
import { hA } from "../figma_app/88239";
import { q5 } from "../figma_app/516028";
import { sZ } from "../905/845253";
import { HdA } from "../figma_app/43951";
import { px, No } from "../figma_app/465071";
import { cD } from "../figma_app/598018";
export function $$p0() {
  let e = px();
  let t = No();
  let i = cD();
  let p = sZ()?.id;
  let m = O();
  let h = hA() ? "focus_view" : "dev_mode";
  let g = q5();
  let f = Rs(HdA, {
    key: g?.key || ""
  }, {
    enabled: !!g?.key
  });
  let _ = oA(g?.trackTags?.isDuplicatedFromDevModeDemoFile);
  let A = f?.data?.file?.hasPermission;
  return {
    teamId: i,
    orgId: p,
    currentPlan: m,
    permission: e?.unwrapOr(null)?.permission,
    tier: t?.unwrapOr(null)?.tier,
    gracePeriod: A,
    paywallType: h,
    isDuplicatedFromDevModeDemoFile: _
  };
}
export const W = $$p0;