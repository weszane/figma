/**
 * Enum representing different UI contexts for sharing or copying links.
 * Original name: $$n1
 */
export enum ShareContext {
  BROWSER_ADDRESS_BAR = 'BROWSER_ADDRESS_BAR',
  SHARE_MODAL = 'SHARE_MODAL',
  SHARE_MODAL_HIERARCHY_SETTINGS_TAB = 'SHARE_MODAL_HIERARCHY_SETTINGS_TAB',
  SIMPLE_SHARING_COPY_LINK_BUTTON = 'SIMPLE_SHARING_COPY_LINK_BUTTON',
  FULLSCREEN_CONTEXT_MENU = 'FULLSCREEN_CONTEXT_MENU',
  FULLSCREEN_BRANCH = 'FULLSCREEN_BRANCH',
  FILE_TILE_CONTEXT_MENU = 'FILE_TILE_CONTEXT_MENU',
  FAVORITED_FILE_CONTEXT_MENU = 'FAVORITED_FILE_CONTEXT_MENU',
  PROTOTYPE_HIDE_UI_VISUAL_BELL = 'PROTOTYPE_HIDE_UI_VISUAL_BELL',
  PROTOTYPE_FLOW_CONTEXT_MENU = 'PROTOTYPE_FLOW_CONTEXT_MENU',
  WORKSHOP_VISUAL_BELL = 'WORKSHOP_VISUAL_BELL',
  DESKTOP_KEYBOARD_SHORTCUT = 'DESKTOP_KEYBOARD_SHORTCUT',
  DESKTOP_FILE_TAB_CONTEXT_MENU = 'DESKTOP_FILE_TAB_CONTEXT_MENU',
  STATUS_DROPDOWN_MENU = 'STATUS_DROPDOWN_MENU',
  AI_SUMMARY_COPY_LINK_BUTTON = 'AI_SUMMARY_COPY_LINK_BUTTON',
  SHARE_MODAL_COPY_DEV_ROW = 'SHARE_MODAL_COPY_DEV_ROW',
  SHARE_MODAL_COPY_PROTO_ROW = 'SHARE_MODAL_COPY_PROTO_ROW',
  SHARE_MODAL_COPY_PRESENTATION_ROW = 'SHARE_MODAL_COPY_PRESENTATION_ROW',
  ANNOTATION_CONTEXT_MENU = 'ANNOTATION_CONTEXT_MENU',
  SHARE_ON_READY_FOR_DEV = 'SHARE_ON_READY_FOR_DEV',
}

/**
 * Combines two string values with a hyphen, or returns null if the first is falsy.
 * Original name: $$r0
 * @param prefix - The first string value.
 * @param suffix - The second string value.
 * @returns The combined string or null.
 */
export function combineWithHyphen(prefix: string | null | undefined, suffix: string): string | null {
  if (!prefix)
    return null
  return `${prefix}-${suffix}`
}

// Exported variables renamed for clarity and traceability
export const b = combineWithHyphen // Original: b = $$r0
export const d = ShareContext // Original: d = $$n1
