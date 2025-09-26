import { nativeEnum, z } from 'zod'
import { ExperimentAssignmentsSchema } from '../905/13165'
import { createPrimaryKeySchema, describeNormalized } from '../905/67898'
import { W } from '../905/82276'
import { FAccessLevelType, FBasicPermissionType, FDomainVerificationStatusType, FPaymentHealthStatusType, FPermissionLevelType, FPlanFeatureType, FPlanLimitationType, FStudentTeamStatusType, FTrialType } from '../figma_app/191312'

// Enum schemas for various types (l, d, c, u, p, _, h, m, g)
export const trialTypeSchema = nativeEnum(FTrialType) // l
export const permissionLevelSchema = nativeEnum(FPermissionLevelType) // d
export const accessLevelSchema = nativeEnum(FAccessLevelType) // c
export const planFeatureSchema = nativeEnum(FPlanFeatureType) // u
export const studentTeamStatusSchema = nativeEnum(FStudentTeamStatusType) // p
export const paymentHealthStatusSchema = nativeEnum(FPaymentHealthStatusType) // _
export const domainVerificationStatusSchema = nativeEnum(FDomainVerificationStatusType) // h
export const basicPermissionSchema = nativeEnum(FBasicPermissionType) // m
export const planLimitationSchema = nativeEnum(FPlanLimitationType) // g

/** Constant value for internal use (original: $$f8) */
export const teamConstant = 118 // $$f8

/**
 * Enum for payment action requirements (original: $$E7)
 * @enum {string}
 */
export enum paymentActionRequirementEnum {
  REQUIRES_SOURCE_ACTION = 'requires_source_action',
  REQUIRES_ACTION = 'requires_action',
}

/**
 * Enum for team visibility (original: $$y0)
 * @enum {string}
 */
export enum teamVisibilityEnum {
  ORG_BROWSABLE = 'org_browsable',
  HIDDEN = 'hidden',
}

/**
 * Team schema definition (original: $$b5)
 */
export const TeamSchema = describeNormalized('Team', ExperimentAssignmentsSchema.extend({
  created_at: z.string(),
  id: createPrimaryKeySchema(),
  img_url: z.string().optional(),
  org_id: z.string().nullable(),
  name: z.string(),
  description: z.string(),
  projects: z.number().nullish(),
  editors: z.number().nullish(),
  realtime_token: z.string().optional(),
  restrictions_list: z.array(planLimitationSchema).nullable(),
  subscription: paymentHealthStatusSchema.nullable(),
  subscription_raw: paymentHealthStatusSchema.nullable(),
  org_access: accessLevelSchema.nullable(),
  stripe_customer_id: z.string().nullable(),
  student_team_at: z.string().nullable(),
  student_team_state: studentTeamStatusSchema,
  student_autoverifying_team_at: z.string().nullable(),
  student_team: z.boolean(),
  pro_team: z.boolean(),
  org_team: z.boolean(),
  starter_team: z.boolean(),
  grace_period_end: z.string().nullable(),
  grace_period_type: trialTypeSchema.nullable(),
  last_upgraded_at: z.string().nullable(),
  updated_at: z.string().nullable().optional(),
  deleted_at: z.string().nullable(),
  community_profile_id: z.string().optional(),
  community_profile_handle: z.string().optional(),
  license_group_id: z.string().nullable(),
  license_group: W.nullable(),
  workspace_id: z.string().nullable(),
  default_permission: basicPermissionSchema.optional().nullable(),
  is_favorited: z.boolean().optional(),
  vat_gst_id: z.string().optional(),
  tax_id_verification_status: domainVerificationStatusSchema.optional(),
  cmty_publish_as_user_enabled: z.boolean().optional(),
  ai_features_disabled: z.boolean().optional(),
  figma_provided_libraries_disabled: z.boolean().optional(),
  legal_name: z.string().nullable(),
  design_default_paid_status: planFeatureSchema.optional(),
  whiteboard_default_paid_status: planFeatureSchema.optional(),
  sanctioned_at: z.string().nullable(),
  sharing_audience_control: permissionLevelSchema.optional(),
  org_browsable: z.boolean().optional(),
  hidden: z.boolean().optional(),
}))

/**
 * Generates a team URL based on team/project IDs (original: $$T4)
 * @param {string} teamId
 * @param {string} [projectId]
 * @returns {string}
 */
export function getTeamUrl(teamId: string, projectId?: string): string {
  return projectId ? `${location.origin}/files/${projectId}/team/${teamId}` : `${location.origin}/files/team/${teamId}/all-projects`
}

/**
 * Determines if a team is a personal team (original: $$I1)
 * @param {object} team
 * @returns {boolean}
 */
export function isTeamEligibleForUpgrade(team: {
  org_id?: string | null
  subscription?: FPaymentHealthStatusType
  student_team?: boolean
}): boolean {
  return !team.org_id && (!!team.subscription && team.subscription !== FPaymentHealthStatusType.INCOMPLETE || team.student_team)
}

/**
 * Enum for file actions (original: $$S2)
 * @enum {string}
 */
export const fileActionEnum = {
  MOVE_FILES: 'move_files',
  DUPLICATE_FILES: 'duplicate_files',
  RESTORE_FILES: 'restore_files',
  MOVE_FOLDER: 'move_folder',
  IMPORT_FILES: 'import_files',
  CREATE_FILE: 'create_file',
  CREATE_FOLDER: 'create_folder',
  CREATE_FILE_FROM_TEMPLATE: 'create_file_from_template',
  CREATE_PAGE: 'create_page',
  DUPLICATE_PAGE: 'duplicate_page',
  CREATE_MORE_VARIABLE_MODES: 'create_more_variable_modes',
  PUBLISH_MORE_VARIABLE_MODES: 'publish_more_variable_modes',
  CREATE_FILE_FROM_DROPDOWN: 'create_file_from_dropdown',
  INSERT_ADVANCED_SHAPE: 'insert_advanced_shape',
  ACCEPT_PROJECT_CONNECTION_INVITE: 'accept_project_connection_invite',
  ENABLE_MCP: 'enable_mcp',
  CONNECT_DOMAIN: 'connect_domain',
} as const

/**
 * Enum for project permissions (original: $$v6)
 * @enum {string}
 */
export const projectPermissionEnum = {
  PUBLISH_COMPONENTS: 'publish_components',
  USE_AUDIO: 'use_audio',
  VIEW_ONLY_PROJECT: 'view_only_project',
  INVITE_ONLY_PROJECT: 'invite_only_project',
} as const

/**
 * Normalizes team data for output (original: $$A3)
 * @param {object} team
 * @returns {object}
 */
export function normalizeTeamData(team: {
  id: string
  name: string
  restrictionsList?: any
  subscription?: any
  studentTeamAt?: Date | string | null
  gracePeriodEnd?: Date | null
}): {
  id: string
  name: string
  restrictions_list?: any
  subscription?: any
  student_team: boolean
  grace_period_end: string | null
} {
  return {
    id: team.id,
    name: team.name,
    restrictions_list: team.restrictionsList,
    subscription: team.subscription,
    student_team: !!team.studentTeamAt,
    grace_period_end: team.gracePeriodEnd ? team.gracePeriodEnd instanceof Date ? team.gracePeriodEnd.toISOString() : team.gracePeriodEnd : null,
  }
}

// Export refactored enums and constants with original export names
export const Fb = teamVisibilityEnum
export const OI = isTeamEligibleForUpgrade
export const ZN = fileActionEnum
export const Z_ = normalizeTeamData
export const bL = getTeamUrl
export const kE = TeamSchema
export const pE = projectPermissionEnum
export const pk = paymentActionRequirementEnum
export const qg = teamConstant
