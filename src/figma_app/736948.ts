import { nativeEnum, z } from 'zod'
import { stripeCustomerSchema } from '../905/4823'
import { ExperimentAssignmentsSchema } from '../905/13165'
import { domainsStateSchema } from '../905/158283'
import { CurrencyEnum } from '../905/962956'
import { FCostCenterType, FDomainVerificationStatusType, FPlanFeatureType, FPlanNameType } from '../figma_app/191312'
import { TeamSettingsSchema } from '../figma_app/482728'
/**
 * Enum for authentication types ($$_1)
 */
export enum AuthTypeEnum {
  ANY = 'any',
  GOOGLE = 'google',
  SAML = 'saml',
}

/**
 * Enum for billing status ($$m6)
 */
export enum BillingStatusEnum {
  AUTO = 'AUTO',
  GOOD = 'GOOD',
  DELINQUENT = 'DELINQUENT',
  SUSPENDED = 'SUSPENDED',
  DEACTIVATED = 'DEACTIVATED',
}

/**
 * Enum for billing settings ($$g2)
 */
export enum BillingSettingEnum {
  MANUAL = 'manual',
  DISABLED = 'disabled',
  QUARTERLY = 'quarterly',
  CHARGE_IMMEDIATELY = 'quarterly_auto_charge',
}

/**
 * Enum for approval status ($$E3)
 */
export enum ApprovalStatusEnum {
  REQUIRE_APPROVAL = 'require_approval',
  BANNED = 'banned',
}

/**
 * Enum for region ($$b4)
 */
export enum USEURegionEnum {
  US = 'US',
  EU = 'EU',
}

/**
 * Enum for onboarding steps ($$I5)
 */
export enum OnboardingStepEnum {
  Initial = 'Initial',
  ChoosePlan = 'ChoosePlan',
  AddCollaborators = 'AddCollaborators',
  PseudoCreateTeam = 'PseudoCreateTeam',
  CreateTeam = 'CreateTeam',
  TeamSelect = 'TeamSelect',
  SeatSelect = 'SeatSelect',
  Details = 'Details',
  Payment = 'Payment',
  Review = 'Review',
  Confirmation = 'Confirmation',
}

/**
 * Enum for deprovision action (S)
 */
export enum DeprovisionActionEnum {
  DEPROVISION = 'deprovision',
}

/**
 * Enum for user types ($$v0)
 */
export enum UserTypeEnum {
  GUESTS = 'guests',
  MEMBERS = 'members',
  ALL_USERS = 'all_users',
}

/**
 * Schema for operation state (A)
 */
export const OperationStateSchema = z.object({
  scheduled_run_at: z.string().optional().nullable(),
  operation_state: z.string(),
})

/**
 * Schema for standing status (h)
 */
export const StandingStatusSchema = z.union([
  z.literal(BillingStatusEnum.AUTO),
  z.literal(BillingStatusEnum.GOOD),
  z.literal(BillingStatusEnum.DELINQUENT),
  z.literal(BillingStatusEnum.SUSPENDED),
  z.literal(BillingStatusEnum.DEACTIVATED),
])

/**
 * Main extended ExperimentAssignmentsSchema
 */
export const ExtendedExperimentAssignmentsSchema = ExperimentAssignmentsSchema.extend({
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
  standing: StandingStatusSchema,
  stripe_customer_id: z.string().optional(),
  invite_whitelist_guest_invite_setting: z.nativeEnum(ApprovalStatusEnum).nullable(),
  invite_whitelist_member_allowlist_enabled: z.boolean().nullable(),
  ip_ranges: z.array(z.string()),
  past_due_at: z.string().nullable(),
  plugins_whitelist_enforced: z.boolean(),
  widgets_whitelist_enforced: z.boolean(),
  plugin_requests_allowed: z.boolean(),
  widget_requests_allowed: z.boolean(),
  public_plugins_allowed: z.boolean(),
  voice_enabled: z.boolean().optional(),
  billing: z.nativeEnum(BillingSettingEnum).nullable(),
  google_sso_only: z.boolean(),
  saml_sso_only: z.boolean(),
  featured_scim_metadata: z.nativeEnum(FCostCenterType).nullable(),
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
  design_default_paid_status: z.nativeEnum(FPlanFeatureType).optional(),
  whiteboard_default_paid_status: z.nativeEnum(FPlanFeatureType).optional(),
  k12_google_org: z.boolean(),
  shared_container_setting: TeamSettingsSchema.nullable(),
  vat_gst_id: z.string().optional().nullable(),
  tax_id_verification_status: z.nativeEnum(FDomainVerificationStatusType).optional(),
  are_custom_templates_allowed: z.boolean(),
  should_auto_renew: z.boolean(),
  has_automatic_upcoming_invoice: z.boolean(),
  target_locality: z.nativeEnum(USEURegionEnum).optional(),
  org_domains: domainsStateSchema.optional().nullable(),
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
  billing_api: stripeCustomerSchema,
  stripe_memo: z.string().optional(),
  self_serve: z.boolean().optional(),
  invoice_currency: z.nativeEnum(CurrencyEnum).optional(),
  is_slides_disabled: z.boolean().optional(),
  activity_logs_max_query_duration_in_days: z.number().optional(),
  tier: z.nativeEnum(FPlanNameType),
  billing_tier: z.nativeEnum(FPlanNameType),
  security_add_on_enabled_at: z.number().optional().nullable(),
  all_domains_verified: z.boolean().optional(),
  can_use_multi_idp: z.boolean(),
  is_non_admin_tos_banner_disabled: z.number().optional().nullable(),
  org_downgrade: OperationStateSchema.optional().nullable(),
})

/**
 * Export original variable names mapped to new enums/schemas for compatibility
 */
export const CT = UserTypeEnum // $$v0
export const Ct = AuthTypeEnum // $$_1
export const EZ = BillingSettingEnum // $$g2
export const Gv = ApprovalStatusEnum // $$E3
export const OE = USEURegionEnum // $$b4
export const X1 = OnboardingStepEnum // $$I5
export const ZG = BillingStatusEnum // $$m6
