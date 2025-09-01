import { fc } from "../905/239603";
import { FPlanFeatureType, FPermissionLevelType } from "../figma_app/191312";
import { hJ } from "../figma_app/713624";
import { createDataMapper, processAdditionalConfig } from "../905/508958";
let o = fc(FPlanFeatureType);
let l = fc(FPermissionLevelType);
let $$d0 = createDataMapper(hJ, e => ({
  created_at: e.camel().stringToDate(),
  default_permission: e.camel().custom({
    toLiveGraph: e => e ?? null,
    toSinatra: e => e
  }),
  deleted_at: e.stringToDateNullable().camel(),
  description: e.custom({
    toLiveGraph: e => e,
    toSinatra: e => e || ""
  }).camel(),
  design_default_paid_status: e.custom({
    toLiveGraph: e => e ?? null,
    toSinatra: e => o.parse(e)
  }).camel(),
  grace_period_end: e.stringToDateNullable().camel(),
  grace_period_type: e.camel(),
  hidden: e.custom({
    toLiveGraph: e => !!e,
    toSinatra: e => e
  }).camel(),
  id: e.camel(),
  img_url: e.custom({
    toLiveGraph: e => e ?? null,
    toSinatra: e => e || void 0
  }).camel(),
  legal_name: e.camel(),
  license_group_id: e.camel(),
  name: e.camel(),
  org_access: e.camel(),
  org_browsable: e.custom({
    toLiveGraph: e => !!e,
    toSinatra: e => e
  }).camel(),
  org_id: e.camel(),
  restrictions_list: e.custom({
    toLiveGraph: e => e ?? [],
    toSinatra: e => e
  }).camel(),
  sharing_audience_control: e.custom({
    toLiveGraph: e => l.parse(e),
    toSinatra: e => e
  }).rename("sharingAudienceControlComputed"),
  starter_team: e.rename("isStarterTeam"),
  stripe_customer_id: e.camel(),
  student_autoverifying_team_at: e.stringToDateNullable().camel(),
  student_team_at: e.stringToDateNullable().camel(),
  student_team_state: e.camel(),
  subscription: e.camel(),
  subscription_raw: e.rename("_subscriptionRaw"),
  tax_id_verification_status: e.custom({
    toLiveGraph: e => e ?? null,
    toSinatra: e => e ?? void 0
  }).camel(),
  updated_at: e.custom({
    toLiveGraph: e => new Date(e ?? 0),
    toSinatra: e => e.toISOString()
  }).camel(),
  vat_gst_id: e.custom({
    toLiveGraph: e => e ?? null,
    toSinatra: e => e || void 0
  }).camel(),
  whiteboard_default_paid_status: e.custom({
    toLiveGraph: e => e ?? null,
    toSinatra: e => o.parse(e)
  }).camel(),
  workspace_id: e.camel(),
  student_team: e.rename("isStudentTeam"),
  editors: e.rename("editorsCount"),
  projects: e.rename("projectsCount"),
  sanctioned_at: e.stringToDateNullable().camel(),
  orphaned: e.rename("isOrphaned"),
  ai_features_disabled: e.custom({
    toLiveGraph: e => null,
    toSinatra: e => !!e
  }).rename("aiFeaturesDisabledAt"),
  figma_provided_libraries_disabled: e.drop(),
  org_team: e.drop(),
  pro_team: e.drop(),
  member_count: e.drop(),
  community_profile_id: e.drop(),
  experiment_assignments: e.drop(),
  community_profile_handle: e.drop(),
  cmty_publish_as_user_enabled: e.drop(),
  is_favorited: e.drop(),
  last_upgraded_at: e.drop(),
  license_group: e.drop(),
  realtime_token: e.drop(),
  team_id: e.drop()
}));
processAdditionalConfig((e, t, i) => [e()($$d0), t($$d0)(), i($$d0)()]);
processAdditionalConfig((e, t, i) => [e()($$d0), t($$d0)(), i($$d0)()]);
export const w = $$d0;