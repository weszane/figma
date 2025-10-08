/**
 * Constant representing the event name for closing global curator requests.
 * Original name: $$n0
 */
export const CURATOR_GLOBAL_REQUEST_CLOSE = "curator_global_request_close"

/**
 * Enum-like object representing FigJam menu open events.
 * Original name: $$i1
 */
export const FigJamMenuEvents = {
  FigJamQuickActionsMenuOpen: "figjam_quick_actions_menu_open",
  FigjamUniversalInsertsMenuOpen: "figjam_universal_inserts_menu_open",
  FigjamDLTSubmenuOpen: "figjam_DLT_submenu_open",
} as const

// Aliases for backward compatibility
export const X = CURATOR_GLOBAL_REQUEST_CLOSE
export const Y = FigJamMenuEvents
