import { z } from 'zod'

/**
 * Enum for team creation controls.
 * Original variable: $$i0
 */
export const TeamCreationControls = {
  TEAM_CREATION_CONTROLS_ANYONE: 'team_creation_controls_anyone',
  TEAM_CREATION_CONTROLS_ADMIN_ONLY: 'team_creation_controls_admin_only',
} as const
export type TeamCreationControlsType = keyof typeof TeamCreationControls
const TeamCreationControlsSchema = z.nativeEnum(TeamCreationControls)

/**
 * Enum for upgrade request settings.
 * Original variable: $$s2
 */
export const UpgradeRequestSetting = {
  MEMBERS: 'members',
  ALL_USERS: 'all_users',
  DISABLED: 'disabled',
} as const
export type UpgradeRequestSettingType = keyof typeof UpgradeRequestSetting
const UpgradeRequestSettingSchema = z.nativeEnum(UpgradeRequestSetting)

/**
 * Enum for public link controls setting.
 * Original variable: $$l3
 */
export  enum PublicLinkControlsSetting {
  ALLOWED= 'public_link_controls_setting_allowed',
  PASSWORD_REQUIRED= 'public_link_controls_setting_password_required',
  EXPIRATION_REQUIRED= 'public_link_controls_setting_expiration_required',
  EXP_AND_PWD_REQUIRED= 'public_link_controls_setting_password_and_expiration_required',
  BANNED= 'public_link_controls_setting_banned',
} 
export type PublicLinkControlsSettingType = keyof typeof PublicLinkControlsSetting
const PublicLinkControlsSettingSchema = z.nativeEnum(PublicLinkControlsSetting)

/**
 * Enum for file export setting.
 * Original variable: $$c4
 */
export const FileExportSetting = {
  ALLOWED: 'allowed',
  MEMBERS_ONLY: 'members_only',
  BANNED: 'banned',
} as const
export type FileExportSettingType = keyof typeof FileExportSetting
const FileExportSettingSchema = z.nativeEnum(FileExportSetting)

/**
 * Schema for team settings.
 * Original variable: $$p1
 */
export const TeamSettingsSchema = z.object({
  team_creation_controls: TeamCreationControlsSchema.optional().nullable(),
  external_collaboration_controls: z.boolean(),
  ip_account_restriction: z.boolean().optional(),
  ip_allowlist: z.boolean().optional(),
  idle_timeout_duration_in_secs: z.number().optional().nullable(),
  autogen_password_controls: z.boolean(),
  public_link_controls_setting: PublicLinkControlsSettingSchema.optional().nullable(),
  public_link_controls_max_expiration: z.number().optional().nullable(),
  configured_upgrade_request_setting: UpgradeRequestSettingSchema.optional().nullable(),
  configured_upgrade_request_message: z.string().optional().nullable(),
  file_export_setting: FileExportSettingSchema.optional().nullable(),
})

// Refactored exports for clarity and maintainability
export {
  FileExportSettingSchema,
  PublicLinkControlsSettingSchema,
  TeamCreationControlsSchema,
  UpgradeRequestSettingSchema,
}

export const $q = TeamCreationControls
export const C$ = TeamSettingsSchema
export const Sm = UpgradeRequestSetting
export const w_ = PublicLinkControlsSetting
export const zB = FileExportSetting
