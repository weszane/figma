import { nativeEnum, z } from 'zod'
import { OrganizationUserAssignmentSchema } from '../905/334042'
import { orgSamlConfigSchema } from '../905/499884'
import { CollaboratorTypeSchema } from '../905/513035'
import { fileActivitySchema } from '../905/769341'
import { UserOrgSchema } from '../figma_app/175992'
import { FPlanFeatureType, FProductAccessType, FUserRoleType } from '../figma_app/191312'
import { throwTypeError } from '../figma_app/465776'
import { UpgradeRequestSchema } from '../figma_app/565016'
import { AccessLevelSchema } from '../figma_app/576636'

/**
 * Enum for Plan Feature Types (FPlanFeatureType)
 */
export const PlanFeatureTypeEnum = nativeEnum(FPlanFeatureType)

/**
 * Enum for User Role Types (FUserRoleType)
 */
export const UserRoleTypeEnum = nativeEnum(FUserRoleType)

/**
 * Enum for License Group Update Reason (kc)
 */
export const LicenseGroupUpdateReasonEnum = (() => {
  const e: Record<string, string> = {}
  e.SELF_SELECTED = 'self'
  e.SELF_SELECTED_NOT_LISTED = 'not listed'
  e.SELF_SELECTED_DONT_KNOW = "don't know"
  e.SCIM_GROUP = 'scim_group'
  e.MOVED_BY_ADMIN = 'moved'
  e.AUTO_ASSIGNED = 'auto'
  return e
})()

/**
 * Zod schema for License Group Update Reason (kc)
 */
export const LicenseGroupUpdateReasonSchema = z.nativeEnum(LicenseGroupUpdateReasonEnum)

/**
 * Zod schema for License Group Member (license_group_member)
 */
export const LicenseGroupMemberSchema = z.object({
  id: z.string(),
  license_group_id: z.string().nullable(),
  org_user_id: z.string(),
  assigned_at: z.string(),
  created_at: z.string(),
  actor_user_id: z.string().nullable(),
  update_reason: LicenseGroupUpdateReasonSchema,
  updated_at: z.string(),
  idp_group: orgSamlConfigSchema.nullable().optional(),
  idp_group_uuid: z.string().nullish(),
})

/**
 * Zod schema for License Group Admin (license_group_admins)
 */
export const LicenseGroupAdminSchema = z.object({
  id: z.string(),
  license_group_id: z.string().nullable(),
  org_user_id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
})

/**
 * Enum for Organization User Role (jh)
 */
export enum OrgUserRoleEnum {
  "GUEST" = 0,
  "MEMBER" = 2,
  "ADMIN" = 3
}


/**
 * Enum for Account Type (Wd)
 */
export enum AccountTypeEnum {
  "ORG_USER" = 'org_user',
  "IDP_USER" = 'idp_user',
  "ORG_INVITE" = 'org_invite'
}



/**
 * Zod schema for Organization User (Ru, WU)
 */
export const OrganizationUserSchema = z.object({
  design_paid_status: PlanFeatureTypeEnum,
  whiteboard_paid_status: PlanFeatureTypeEnum,
  dev_mode_paid_status: PlanFeatureTypeEnum,
  id: z.string(),
  org_id: z.string(),
  user_id: z.string(),
  user: UserOrgSchema,
  permission: UserRoleTypeEnum,
  description: z.string().nullish(),
  drafts_folder_id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  disabled_at: z.string().nullish(),
  account_type: z.string().optional(),
  account_type_changed_at: z.string().optional(),
  last_edit: z.string().nullish(),
  last_seen: z.string().nullish(),
  last_design_edit: z.union([z.string(), fileActivitySchema]).nullish(),
  last_whiteboard_edit: z.union([z.string(), fileActivitySchema]).nullish(),
  last_design_seen: z.union([z.string(), fileActivitySchema]).nullish(),
  last_whiteboard_seen: z.union([z.string(), fileActivitySchema]).nullish(),
  last_dev_mode_seen: z.union([z.string(), fileActivitySchema]).nullish(),
  scim_account_type: z.string().nullish(),
  scim_whiteboard_paid_status: z.string().nullish(),
  scim_dev_mode_paid_status: z.string().nullish(),
  scim_is_admin: z.boolean().nullish(),
  scim_seat_type: AccessLevelSchema.nullish(),
  user_state_changed_at: z.string().optional(),
  design_upgrade_reason: UpgradeRequestSchema.nullish(),
  whiteboard_upgrade_reason: UpgradeRequestSchema.nullish(),
  dev_mode_upgrade_reason: UpgradeRequestSchema.nullish(),
  scim_metadata: z.record(z.string().nullish()).nullish(),
  agreed_to_community_tos_at: z.string().nullish(),
  license_group_member: LicenseGroupMemberSchema.nullish(),
  license_group_admins: z.array(LicenseGroupAdminSchema).optional(),
  license_admin: z.boolean().optional(),
  is_email_validated: z.boolean().optional().nullable(),
  show_figjam_user_onboarding: z.boolean().nullable(),
  has_shown_figjam_admin_onboarding: z.boolean().nullable(),
  has_shown_figjam_admin_launch_onboarding: z.boolean().nullable(),
  ecc_upgrading_locked: z.boolean().nullish(),
  type: z.literal('org_user').default('org_user'),
  workspace_users: z.array(OrganizationUserAssignmentSchema).optional(),
  is_dev_mode_beta_user: z.boolean().optional(),
  active_seat_type: CollaboratorTypeSchema.nullish(),
  active_seat_upgrade_date: z.string().optional(),
  active_seat_upgrade_method: UpgradeRequestSchema.nullish(),
  job_title: z.string().optional(),
})

/**
 * Alias for OrganizationUserSchema (WU)
 */
export const OrganizationUserSchemaAlias = OrganizationUserSchema

/**
 * Get paid status for a product type (S)
 * @param user Organization user object
 * @param productType Product access type
 * @returns Paid status for the product
 */
function getPaidStatusByProductType(user: z.infer<typeof OrganizationUserSchema>, productType: FProductAccessType) {
  switch (productType) {
    case FProductAccessType.DESIGN:
      return user.design_paid_status
    case FProductAccessType.WHITEBOARD:
      return user.whiteboard_paid_status
    case FProductAccessType.DEV_MODE:
      return user.dev_mode_paid_status
    default:
      throwTypeError(productType)
  }
}

/**
 * Get paid status with dev mode logic (x0, $$v5)
 * @param user Organization user object
 * @param productType Product access type
 * @returns Paid status for the product, with dev mode logic
 */
export function getPaidStatus(user: z.infer<typeof OrganizationUserSchema>, productType: FProductAccessType) {
  switch (productType) {
    case FProductAccessType.DESIGN:
    case FProductAccessType.WHITEBOARD:
      return getPaidStatusByProductType(user, productType)
    case FProductAccessType.DEV_MODE:
      return getPaidStatusByProductType(user, FProductAccessType.DESIGN) === FPlanFeatureType.FULL
        ? FPlanFeatureType.FULL
        : getPaidStatusByProductType(user, productType)
    default:
      throwTypeError(productType)
  }
}

// Exported variables with refactored names
export const Ru = OrganizationUserSchema
export const WU = OrganizationUserSchemaAlias
export const Wd = AccountTypeEnum
export const jh = OrgUserRoleEnum
export const kc = LicenseGroupUpdateReasonEnum
export const x0 = getPaidStatus
