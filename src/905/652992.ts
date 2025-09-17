/**
 * @fileoverview
 * Refactored enums for file types, feature flags, and team creation speed bump.
 * Original variable names: $$n2, $$r0, $$a1
 */

/**
 * Enum representing different file types.
 * Original variable name: $$n2
 */
export enum PageFolderFile {
  FILE = 'file',
  FOLDER = 'folder',
  PAGE = 'page',
}

/**
 * Enum representing various feature flags.
 * Original variable name: $$r0
 */
export enum FeatureFlag {
  TEAM_LIBRARY = 'team_library',
  AUDIO = 'audio',
  VIEW_ONLY_PROJECT = 'view_only_project',
  INVITE_ONLY_PROJECT = 'invite_only_project',
  VOTING = 'voting',
  PUBLISH_STYLES = 'publish_styles',
  PROTOTYPING_MULTIPLE_ACTIONS = 'prototyping_multiple_actions',
  PROTOTYPING_VARIABLES = 'prototyping_variables',
  PROTOTYPING_CONDITIONAL_ACTIONS = 'prototyping_conditional_actions',
  VARIABLES_MODES = 'variables_modes',
  OPEN_SESSION = 'open_session',
  PROJECT_TRANSFER = 'project_transfer',
  PROTOTYPE_SHARING = 'prototype_sharing',
  PASSWORD_PROTECTION = 'password_protection',
  VERSION_HISTORY = 'version_history',
  VIDEOS_IN_PROTOTYPES = 'videos_in_prototypes',
  VIDEOS_IN_SLIDES = 'videos_in_slides',
  VIDEOS_IN_WHITEBOARD = 'videos_in_whiteboard',
  VIDEOS_IN_BUZZ = 'videos_in_buzz',
  PLUGIN_ANALYTICS = 'plugin_analytics',
  WIDGET_ANALYTICS = 'widget_analytics',
  SHARED_FONTS = 'shared_fonts',
  DEV_MODE = 'dev_mode',
  DEV_MODE_ADMIN_SETTINGS = 'dev_mode_admin_settings',
  CONNECTED_PROJECTS = 'connected_projects',
  ADVANCED_SHAPES = 'advanced_shapes',
  ORG = 'org',
  FIGMAKE = 'figmake',
  PROMPT_LIMIT = 'prompt_limit',
  PUBLISH_SITE = 'publish_site',
  MCP = 'mcp',
  CODE_CHAT_LIBRARY_IMPORT = 'code_chat_library_import',
  CONNECT_DOMAIN = 'connect_domain',
}

/**
 * Enum for team creation speed bump feature.
 * Original variable name: $$a1
 */
export enum TeamCreationSpeedBump {
  TEAM_CREATION_SPEED_BUMP = 'team_creation_speed_bump',
}

// Refactored exports to match new names
export const vL = PageFolderFile
export const Bi = FeatureFlag
export const Pj = TeamCreationSpeedBump
