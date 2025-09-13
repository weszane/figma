import { getResourceDataOrFallback } from "../905/663269";
import { useSubscription } from "../figma_app/288654";
import { O } from "../905/655700";
import { hA } from "../figma_app/88239";
import { selectCurrentFile } from "../figma_app/516028";
import { useCurrentUserOrg } from "../905/845253";
import { FileIsEligibleForDevModeTrial } from "../figma_app/43951";
import { useTeamPlanUser, useTeamPlanPublicInfo } from "../figma_app/465071";
import { cD } from "../figma_app/598018";
export function $$p0() {
  let e = useTeamPlanUser();
  let t = useTeamPlanPublicInfo();
  let i = cD();
  let p = useCurrentUserOrg()?.id;
  let m = O();
  let h = hA() ? "focus_view" : "dev_mode";
  let g = selectCurrentFile();
  let f = useSubscription(FileIsEligibleForDevModeTrial, {
    key: g?.key || ""
  }, {
    enabled: !!g?.key
  });
  let _ = getResourceDataOrFallback(g?.trackTags?.isDuplicatedFromDevModeDemoFile);
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