import { getFeatureFlags } from "../905/601108";
import { getResourceDataOrFallback } from "../905/663269";
import { useSubscription } from "../figma_app/288654";
import { DtmMigrationInfo } from "../figma_app/43951";
export function $$s0(e) {
  let t = useSubscription(DtmMigrationInfo, {}, {
    enabled: getFeatureFlags().dtm_deprecation_post_migration_onboarding
  });
  if (!e || !getFeatureFlags().dtm_deprecation_post_migration_onboarding) return {
    isDraftsToMovePlan: !1,
    dtmMigrationCompleted: !1,
    starterTeamCreated: !1
  };
  let n = getResourceDataOrFallback(t.data?.personalDraftToPlanDraftLocation);
  let s = n?.planParentId === e.key.parentId;
  let l = getResourceDataOrFallback(n?.toDraftsFolder?.team?.trackTags)?.is_auto_created_for_dtm_migration ?? !1;
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