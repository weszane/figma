import { getFeatureFlags } from "../905/601108";
import { oA } from "../905/663269";
import { Rs } from "../figma_app/288654";
import { InN } from "../figma_app/43951";
export function $$s0(e) {
  let t = Rs(InN, {}, {
    enabled: getFeatureFlags().dtm_deprecation_post_migration_onboarding
  });
  if (!e || !getFeatureFlags().dtm_deprecation_post_migration_onboarding) return {
    isDraftsToMovePlan: !1,
    dtmMigrationCompleted: !1,
    starterTeamCreated: !1
  };
  let n = oA(t.data?.personalDraftToPlanDraftLocation);
  let s = n?.planParentId === e.key.parentId;
  let l = oA(n?.toDraftsFolder?.team?.trackTags)?.is_auto_created_for_dtm_migration ?? !1;
  let d = n?.toDraftsFolder?.plan?.name;
  let c = n?.planParentType;
  let _ = n?.planParentId;
  return {
    isDraftsToMovePlan: s,
    dtmMigrationCompleted: n?.status === "complete",
    starterTeamCreated: l,
    dtmMigrationPlanName: d,
    dtmPlanParentId: _,
    dtmPlanParentType: c
  };
}
export const V = $$s0;