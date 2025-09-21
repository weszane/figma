import { z } from 'zod'
import { PluginRunEventSchema } from '../figma_app/155287'

/**
 * Enum for file browser locations
 */
export enum FileBrowserLocation {
  FILE_BROWSER_SIDEBAR_RECENTS = 'file_browser_sidebar_recents',
  FILE_BROWSER_SIDEBAR_DRAFTS = 'file_browser_sidebar_drafts',
  FILE_BROWSER_TOPBAR_RECENTS = 'file_browser_topbar_recents',
  FILE_BROWSER_TOPBAR_FOLDER = 'file_browser_topbar_folder',
  FILE_BROWSER_TOPBAR_DRAFTS = 'file_browser_topbar_drafts',
  FILE_BROWSER_FOLDER_EMPTY_TILE = 'file_browser_folder_empty_tile',
  FILE_BROWSER_CONNECT_FOLDER_EMPTY_PAGE = 'file_browser_connect_folder_empty_page',
  FILE_BROWSER_NUX = 'file_browser_nux',
  FILE_BROWSER_TEMPLATES_BAR = 'file_browser_templates_bar',
  FULLSCREEN_FILE_DRAWER = 'fullscreen_file_drawer',
  CURSOR_BOT_END_MODAL = 'cursor_bot_end_modal',
  DESIGN_TOOLTIPS_PLUS_OUTRO_MODAL = 'design_tooltips_plus_outro_modal',
  DESKTOP_NEW_TAB_BUTTON = 'desktop_new_tab_button',
  FIGJAM_WHATS_NEW_MODAL = 'figjam_whats_new_modal',
  COMMUNITY_COLLECTIONS_PAGE = 'community_collections_page',
  COMMUNITY_MAKE_PAGE = 'community_make_page',
  FIGJAM_MAKE_SOMETHING_POPUP = 'figjam_make_something_popup',
  FIGMAKE_LAUNCH_BANNER = 'figmake_launch_banner',
  FIGMAKE_PROMO_MODAL = 'figmake_promo_modal',
  FIGMAKE_SIDEBAR_PROMO = 'figmake_sidebar_promo',
  FIGMAKE_PROTOTYPE_ANNOUNCEMENT = 'figmake_prototype_announcement',
  FIGMAKE_POPOUT_UPSELL_IN_DESIGN_EDITOR = 'figmake_popout_upsell_in_design_editor',
  DESIGN_TO_SLIDES_ENTRYPOINT = 'design_to_slides_entrypoint',
  DESIGN_TO_SITES_ENTRYPOINT = 'design_to_sites_entrypoint',
  DESIGN_COPY_TO_SITES_ENTRYPOINT = 'design_copy_to_sites_entrypoint',
  DESIGN_TO_BUZZ_ENTRYPOINT = 'design_to_buzz_entrypoint',
  RESOURCE_HUB_FEW_TEMPLATES_UPSELL = 'resource_hub_few_templates_upsell',
  RESOURCE_HUB_NO_RESOURCES_UPSELL = 'resource_hub_no_resources_upsell',
  EDITOR_MENU = 'editor_menu',
  EDITOR_QUICK_ACTIONS = 'editor_quick_actions',
  LIBRARY_EXTRACT_TOAST = 'library_extract_toast',
  EDITOR_GLASS_ONBOARDING_MODAL = 'editor_glass_onboarding_modal',
  SEND_TO_MAKE_FROM_DESIGN_CONTEXT_MENU = 'send_to_make_from_design_context_menu',
  SEND_TO_MAKE_FROM_DESIGN_QA_V2_MENU = 'send_to_make_from_design_qa_v2_menu',
  SEND_SELECTION_TO_BUZZ_FROM_DESIGN_CONTEXT_MENU = 'send_to_buzz_from_design_context_menu',
  SEND_TO_BUZZ_FROM_DESIGN_QA_V2_MENU = 'send_to_buzz_from_design_qa_v2_menu',
}

/**
 * Enum for tab opening behavior
 */
export enum TabOpenBehavior {
  NEW_TAB = 'new_tab',
  SAME_TAB = 'same_tab',
}

/**
 * Multiplayer user state change event name
 */
export const MULTIPLAYER_USER_STATE_CHANGE = 'multiplayer_user_state_change'

/**
 * Enum for plugin run context
 */
export enum PluginRunForContext {
  NONE = 0,
  FOR_OPEN = 1,
  FOR_MENU = 2,
}

// Schema for extension information
const ExtensionInfoSchema = z.object({
  extensionId: z.string(),
  extensionType: z.enum(['plugin', 'widget']),
  currentExtensionVersionId: z.string().nullable(),
  localFileId: z.number().nullable(),
})

// Schema for plugin run parameters
const PluginRunParamsSchema = z.object({
  parameterValues: z.record(z.string()).optional().nullable(),
})

// Schema for plugin run event
const PluginRunEventBaseSchema = z.object({
  displayName: z.string(),
  runPluginArgs: PluginRunEventSchema.optional(),
  extensionInfo: ExtensionInfoSchema.optional().nullable(),
})

// Extended schema with selected run plugin arguments
const PluginRunEventExtendedSchema = PluginRunEventBaseSchema.omit({
  runPluginArgs: true,
}).extend({
  selectedRunPluginArgs: PluginRunParamsSchema.optional().nullable(),
})

/**
 * Enum for loading states
 */
export enum LoadingBarStatus {
  BAR = 0,
  SPINNER = 1,
}

/**
 * Class representing tab state information
 */
export class TabState {
  tabCloseText: string
  unsaved: {
    hasAutosaveChanges: boolean
    hasMultiplayerChanges: boolean
  }

  error: any
  hasUnsavedChanges: boolean
  hasAutosaveChanges: boolean
  hasMultiplayerChanges: boolean

  constructor(tabCloseText: string, unsaved: { hasAutosaveChanges: boolean, hasMultiplayerChanges: boolean }, error: any) {
    this.tabCloseText = tabCloseText
    this.unsaved = unsaved
    this.error = error

    this.hasUnsavedChanges = unsaved.hasAutosaveChanges || unsaved.hasMultiplayerChanges
    this.hasAutosaveChanges = unsaved.hasAutosaveChanges
    this.hasMultiplayerChanges = unsaved.hasMultiplayerChanges
  }

  /**
   * Compares this tab state with another for equality
   * @param other - The other tab state to compare with
   * @returns True if the tab states are equal, false otherwise
   */
  equals(other: TabState | null): boolean {
    if (!other)
      return false
    return (
      this.tabCloseText === other.tabCloseText
      && this.unsaved.hasAutosaveChanges === other.unsaved.hasAutosaveChanges
      && this.unsaved.hasMultiplayerChanges === other.unsaved.hasMultiplayerChanges
      && this.error === other.error
    )
  }
}

/**
 * Enum for clipboard operations
 */
export enum ClipboardOperation {
  CUT = 0,
  COPY = 1,
  PASTE = 2,
}

// Export schemas and constants with meaningful names
export const CN = PluginRunEventExtendedSchema
export const M8 = MULTIPLAYER_USER_STATE_CHANGE
export const ai = TabOpenBehavior
export const av = TabState
export const f6 = FileBrowserLocation
export const kF = PluginRunForContext
export const lF = LoadingBarStatus
export const zy = ClipboardOperation
