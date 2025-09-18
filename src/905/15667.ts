/**
 * Enum for various deep link types.
 * Original variable: $$n3
 */
export enum DeepLinkType {
  ASK_TO_EDIT = 'ask_to_edit_button',
  ASK_TO_EDIT_ONE_CLICK = 'ask_to_edit_one_click',
  DOWNGRADE_EMAIL = 'downgrade_email',
  SHARE_DRAFTS = 'share_drafts',
  RESTRICTED_DRAFT_SHARED_EMAIL = 'restricted_draft_shared_email',
  CREATE_FILE_PROJECT_VIEW = 'create-file-project-view',
  IN_EDITOR_RESTRICTED_DRAFT = 'in_editor_restricted_draft',
  CREATE_FILE_EMPTY_CONNECTED_PROJECT = 'create-file-empty-connected-project',
  NUX = 'nux',
  PUBLISH_SITES = 'publish_sites',
  USER_SETTINGS = 'user_settings',
  CODE_CHAT_LIMIT = 'code_chat_limit',
  UNKNOWN_DEEP_LINK = 'unknown_deep_link',
  LIFECYCLE_REUPGRADE_EMAIL = 'lifecycle_reupgrade_email',
  SITE_SETTINGS = 'site_settings',
}

/**
 * Enum for plugin actions.
 * Original variable: $$r1
 */
export enum PluginAction {
  RUN_PLUGIN = 'run_plugin',
  RUN_WIDGET = 'run_widget',
  MANAGE_EXTENSIONS = 'manage_plugin',
}

/**
 * Enum for project view actions.
 * Original variable: a
 */
export enum ProjectViewAction {
  CREATE_FILE_PROJECT_VIEW = 'create-file-project-view',
  DEPRECATED_VR_SHARE_MODAL = 'vr_share_modal',
}

/**
 * Enum for UI sections.
 * Original variable: $$s0
 */
export enum UISection {
  Teams = 'teams',
  CreateBranch = 'create-branch',
  Settings = 'settings',
  CreateFile = 'create-file',
  CreateFileProjectView = 'create-file-project-view',
  FileMoveUpsell = 'file-move-upsell',
  CurfProvisionalAccessBanner = 'curf-provisional-access-banner',
  DEPRECATED_RequestToEditNudge = 'request-to-edit-nudge',
  DEPRECATED_Plugin = 'plugin',
  DEPRECATED_RequestToEdit = 'request-to-edit',
  DEPRECATED_Drafts = 'drafts',
  DEPRECATED_Recents = 'recents',
}

/**
 * Enum for Dev Mode UI elements.
 * Original variable: $$o2
 */
export enum DevModeUI {
  DevMode = 'dev_mode',
  BlockingModal = 'dev_mode_blocking_modal',
  DowngradeEmail = 'dev_mode_downgrade_email',
  Upsell = 'dev_mode_upsell',
}

// Refactored exports to match original names
export const tc = DeepLinkType
export const Q7 = PluginAction
export const PE = UISection
export const i$ = DevModeUI
