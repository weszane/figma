import { nativeEnum } from 'zod'
import { createDataMapper, processAdditionalConfig } from '../905/508958'
import { FPermissionLevelType, FPlanFeatureType } from '../figma_app/191312'
import { TeamExtendedSchema } from '../figma_app/713624'

/**
 * Refactored TeamExtendedDataMapper
 * Original variable: $$d0
 */
const PlanFeatureTypeEnum = nativeEnum(FPlanFeatureType)
const PermissionLevelTypeEnum = nativeEnum(FPermissionLevelType)

/**
 * Maps TeamExtendedSchema fields to desired formats for LiveGraph and Sinatra.
 * @param e - Data mapper utility
 * @returns Mapped team extended object
 */
export const TeamExtendedDataMapper = createDataMapper(TeamExtendedSchema, e => ({
  // created_at
  created_at: e.camel().stringToDate(),

  // default_permission
  default_permission: e.camel().custom({
    toLiveGraph: val => val ?? null,
    toSinatra: val => val,
  }),

  // deleted_at
  deleted_at: e.stringToDateNullable().camel(),

  // description
  description: e.custom({
    toLiveGraph: val => val,
    toSinatra: val => val || '',
  }).camel(),

  // design_default_paid_status
  design_default_paid_status: e.custom({
    toLiveGraph: val => val ?? null,
    toSinatra: val => PlanFeatureTypeEnum.parse(val),
  }).camel(),

  // grace_period_end
  grace_period_end: e.stringToDateNullable().camel(),

  // grace_period_type
  grace_period_type: e.camel(),

  // hidden
  hidden: e.custom({
    toLiveGraph: val => !!val,
    toSinatra: val => val,
  }).camel(),

  // id
  id: e.camel(),

  // img_url
  img_url: e.custom({
    toLiveGraph: val => val ?? null,
    toSinatra: val => val || void 0,
  }).camel(),

  // legal_name
  legal_name: e.camel(),

  // license_group_id
  license_group_id: e.camel(),

  // name
  name: e.camel(),

  // org_access
  org_access: e.camel(),

  // org_browsable
  org_browsable: e.custom({
    toLiveGraph: val => !!val,
    toSinatra: val => val,
  }).camel(),

  // org_id
  org_id: e.camel(),

  // restrictions_list
  restrictions_list: e.custom({
    toLiveGraph: val => val ?? [],
    toSinatra: val => val,
  }).camel(),

  // sharing_audience_control
  sharing_audience_control: e.custom({
    toLiveGraph: val => PermissionLevelTypeEnum.parse(val),
    toSinatra: val => val,
  }).rename('sharingAudienceControlComputed'),

  // starter_team
  starter_team: e.rename('isStarterTeam'),

  // stripe_customer_id
  stripe_customer_id: e.camel(),

  // student_autoverifying_team_at
  student_autoverifying_team_at: e.stringToDateNullable().camel(),

  // student_team_at
  student_team_at: e.stringToDateNullable().camel(),

  // student_team_state
  student_team_state: e.camel(),

  // subscription
  subscription: e.camel(),

  // subscription_raw
  subscription_raw: e.rename('_subscriptionRaw'),

  // tax_id_verification_status
  tax_id_verification_status: e.custom({
    toLiveGraph: val => val ?? null,
    toSinatra: val => val ?? void 0,
  }).camel(),

  // updated_at
  updated_at: e.custom({
    toLiveGraph: val => new Date(val ?? 0),
    toSinatra: val => val.toISOString(),
  }).camel(),

  // vat_gst_id
  vat_gst_id: e.custom({
    toLiveGraph: val => val ?? null,
    toSinatra: val => val || void 0,
  }).camel(),

  // whiteboard_default_paid_status
  whiteboard_default_paid_status: e.custom({
    toLiveGraph: val => val ?? null,
    toSinatra: val => PlanFeatureTypeEnum.parse(val),
  }).camel(),

  // workspace_id
  workspace_id: e.camel(),

  // student_team
  student_team: e.rename('isStudentTeam'),

  // editors
  editors: e.rename('editorsCount'),

  // projects
  projects: e.rename('projectsCount'),

  // sanctioned_at
  sanctioned_at: e.stringToDateNullable().camel(),

  // orphaned
  orphaned: e.rename('isOrphaned'),

  // ai_features_disabled
  ai_features_disabled: e.custom({
    toLiveGraph: () => null,
    toSinatra: val => !!val,
  }).rename('aiFeaturesDisabledAt'),

  // Dropped fields
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
  team_id: e.drop(),
}))

/** Export for usage elsewhere (original export: w) */
export const w = TeamExtendedDataMapper
