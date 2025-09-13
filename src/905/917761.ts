import { useRef, useCallback } from "react";
import { ResourceStatus } from "../905/663269";
import { analyticsEventManager } from "../905/449184";
import { useSubscription } from "../figma_app/288654";
import { I7 } from "../figma_app/594947";
import { kh } from "../905/86266";
import { selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { FPlanNameType } from "../figma_app/191312";
import { OrgSharedSettingView } from "../figma_app/43951";
import { useTeamPlanPublicInfo, getParentOrgIdIfOrgLevel } from "../figma_app/465071";
import { UpgradeRequestSetting } from "../figma_app/482728";
import { c as _$$c } from "../905/606579";
let f = e => {
  let t = useSubscription(OrgSharedSettingView({
    orgId: e ?? null
  }), {
    enabled: !!e
  }).unwrapOr(null);
  if (!t) return !1;
  let i = t?.org?.orgSharedSetting?.configuredUpgradeRequestSetting?.status === ResourceStatus.Loaded ? t?.org?.orgSharedSetting?.configuredUpgradeRequestSetting?.data : null;
  return i === UpgradeRequestSetting.ALL_USERS || i === UpgradeRequestSetting.MEMBERS;
};
export function $$_0(e, t) {
  let i = [FPlanNameType.STARTER, FPlanNameType.STUDENT];
  let r = useTeamPlanPublicInfo();
  let s = getParentOrgIdIfOrgLevel(r.data);
  let p = f(s);
  let {
    getConfig
  } = I7(e.teamXP);
  let {
    getConfig: _getConfig
  } = I7(e.orgXP);
  let A = _$$c();
  let y = kh();
  let b = selectCurrentFile();
  let v = selectCurrentUser();
  let I = useRef(!1);
  let E = y?.orgID ? _getConfig : getConfig;
  let x = useCallback(() => {
    let e = E();
    I.current || (analyticsEventManager.trackDefinedEvent("activation.experiment_exposure_for_user", {
      userId: v?.id,
      fileKey: b?.key,
      orgId: y?.orgID,
      teamId: y?.teamID,
      ruleId: e.getRuleID(),
      experimentName: e.getName(),
      orgIdFromPlan: s,
      teamIdFromPlan: s ? void 0 : r?.data?.key.parentId
    }), I.current = !0);
    return e;
  }, [v?.id, b?.key, y?.orgID, y?.teamID, s, r.data?.key.parentId, E]);
  return !y || !y?.planKey || "loading" === r.status || !t.allowStarterPlans && r?.data?.tier && i.includes(r?.data?.tier) || !t.allowCurfPlans && p || !t.allowFigmaConnectPlans && A ? null : x;
}
export const w = $$_0;