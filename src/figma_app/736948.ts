import { z as _$$z } from '../905/4823'
import { ExperimentAssignmentsSchema } from '../905/13165'
import { N4 } from '../905/158283'
import { fc, z } from '../905/239603'
import { S as _$$S } from '../905/962956'
import { FCostCenterType, FDomainVerificationStatusType, FPlanFeatureType, FPlanNameType } from '../figma_app/191312'
import { TeamSettingsSchema } from '../figma_app/482728'

let c = fc(FCostCenterType)
let u = fc(FPlanFeatureType)
let p = fc(FDomainVerificationStatusType)
export var $$_1 = (e => (e.ANY = 'any', e.GOOGLE = 'google', e.SAML = 'saml', e))($$_1 || {})
let h = z.union([z.literal('AUTO'), z.literal('GOOD'), z.literal('DELINQUENT'), z.literal('SUSPENDED'), z.literal('DEACTIVATED')])
let $$m6 = {
  AUTO: 'AUTO',
  GOOD: 'GOOD',
  DELINQUENT: 'DELINQUENT',
  SUSPENDED: 'SUSPENDED',
  DEACTIVATED: 'DEACTIVATED',
}
export var $$g2 = (e => (e.MANUAL = 'manual', e.DISABLED = 'disabled', e.QUARTERLY = 'quarterly', e.CHARGE_IMMEDIATELY = 'quarterly_auto_charge', e))($$g2 || {})
let f = z.nativeEnum($$g2)
export var $$E3 = (e => (e.REQUIRE_APPROVAL = 'require_approval', e.BANNED = 'banned', e))($$E3 || {})
let y = z.nativeEnum($$E3)
export var $$b4 = (e => (e.US = 'US', e.EU = 'EU', e))($$b4 || {})
let T = z.nativeEnum($$b4)
z.object({
  name: z.string(),
  img_url: z.string().optional(),
  id: z.string(),
})
var $$I5 = (e => (e.Initial = 'Initial', e.ChoosePlan = 'ChoosePlan', e.AddCollaborators = 'AddCollaborators', e.PseudoCreateTeam = 'PseudoCreateTeam', e.CreateTeam = 'CreateTeam', e.TeamSelect = 'TeamSelect', e.SeatSelect = 'SeatSelect', e.Details = 'Details', e.Payment = 'Payment', e.Review = 'Review', e.Confirmation = 'Confirmation', e))($$I5 || {})
var S = (e => (e.DEPROVISION = 'deprovision', e))(S || {})
var $$v0 = (e => (e.GUESTS = 'guests', e.MEMBERS = 'members', e.ALL_USERS = 'all_users', e))($$v0 || {})
let A = z.object({
  scheduled_run_at: z.string().optional().nullable(),
  operation_state: z.string(),
})
ExperimentAssignmentsSchema.extend({
  id: z.string(),
  name: z.string(),
  legal_name: z.string().optional(),
  domain_capture: z.boolean(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  deleted_at: z.string().optional(),
  img_url: z.string().optional(),
  handle: z.string().optional(),
  figjam_disabled_at: z.date().nullable(),
  realtime_token: z.string().optional(),
  standing: h,
  stripe_customer_id: z.string().optional(),
  invite_whitelist_guest_invite_setting: y.nullable(),
  invite_whitelist_member_allowlist_enabled: z.boolean().nullable(),
  ip_ranges: z.array(z.string()),
  past_due_at: z.string().nullable(),
  plugins_whitelist_enforced: z.boolean(),
  widgets_whitelist_enforced: z.boolean(),
  plugin_requests_allowed: z.boolean(),
  widget_requests_allowed: z.boolean(),
  public_plugins_allowed: z.boolean(),
  voice_enabled: z.boolean().optional(),
  billing: f.nullable(),
  google_sso_only: z.boolean(),
  saml_sso_only: z.boolean(),
  featured_scim_metadata: c.nullable(),
  community_profile_id: z.string().optional(),
  community_profile_handle: z.string().optional(),
  template_picker_disabled: z.boolean().optional(),
  experiment_eligible: z.boolean().optional(),
  bigma_enabled: z.boolean().optional(),
  bigma_enabled_at: z.number().optional(),
  file_export_setting: z.string().nullable().optional(),
  mfa_required: z.string().optional(),
  discovery_enabled: z.boolean().optional(),
  workshop_enabled: z.boolean().optional(),
  cursor_chat_disabled: z.boolean().optional(),
  design_default_paid_status: u.optional(),
  whiteboard_default_paid_status: u.optional(),
  k12_google_org: z.boolean(),
  shared_container_setting: TeamSettingsSchema.nullable(),
  vat_gst_id: z.string().optional().nullable(),
  tax_id_verification_status: p.optional(),
  are_custom_templates_allowed: z.boolean(),
  should_auto_renew: z.boolean(),
  has_automatic_upcoming_invoice: z.boolean(),
  target_locality: T.optional(),
  org_domains: N4.optional().nullable(),
  workspaces_count: z.number().optional(),
  cmty_publish_as_user_enabled: z.boolean().optional(),
  license_groups_count: z.number().optional(),
  workspaces_nux_active_at: z.string().optional(),
  ai_features_disabled: z.boolean().optional(),
  ai_features_disabled_at: z.string().optional(),
  ai_data_sharing_enabled: z.boolean().optional(),
  is_dev_mode_opt_in_accepted: z.boolean().optional(),
  has_invalid_upgrades: z.boolean().optional(),
  figma_provided_libraries_disabled: z.boolean().optional(),
  billing_api: _$$z,
  stripe_memo: z.string().optional(),
  self_serve: z.boolean().optional(),
  invoice_currency: z.nativeEnum(_$$S).optional(),
  is_slides_disabled: z.boolean().optional(),
  activity_logs_max_query_duration_in_days: z.number().optional(),
  tier: z.nativeEnum(FPlanNameType),
  billing_tier: z.nativeEnum(FPlanNameType),
  security_add_on_enabled_at: z.number().optional().nullable(),
  all_domains_verified: z.boolean().optional(),
  can_use_multi_idp: z.boolean(),
  is_non_admin_tos_banner_disabled: z.number().optional().nullable(),
  org_downgrade: A.optional().nullable(),
})
export const CT = $$v0
export const Ct = $$_1
export const EZ = $$g2
export const Gv = $$E3
export const OE = $$b4
export const X1 = $$I5
export const ZG = $$m6
