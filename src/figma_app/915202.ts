import { z } from "../905/239603";
import { PluginRunEventSchema } from "../figma_app/155287";
var $$a4 = (e => (e.FILE_BROWSER_SIDEBAR_RECENTS = "file_browser_sidebar_recents", e.FILE_BROWSER_SIDEBAR_DRAFTS = "file_browser_sidebar_drafts", e.FILE_BROWSER_TOPBAR_RECENTS = "file_browser_topbar_recents", e.FILE_BROWSER_TOPBAR_FOLDER = "file_browser_topbar_folder", e.FILE_BROWSER_TOPBAR_DRAFTS = "file_browser_topbar_drafts", e.FILE_BROWSER_FOLDER_EMPTY_TILE = "file_browser_folder_empty_tile", e.FILE_BROWSER_CONNECT_FOLDER_EMPTY_PAGE = "file_browser_connect_folder_empty_page", e.FILE_BROWSER_NUX = "file_browser_nux", e.FILE_BROWSER_TEMPLATES_BAR = "file_browser_templates_bar", e.FULLSCREEN_FILE_DRAWER = "fullscreen_file_drawer", e.CURSOR_BOT_END_MODAL = "cursor_bot_end_modal", e.DESIGN_TOOLTIPS_PLUS_OUTRO_MODAL = "design_tooltips_plus_outro_modal", e.DESKTOP_NEW_TAB_BUTTON = "desktop_new_tab_button", e.FIGJAM_WHATS_NEW_MODAL = "figjam_whats_new_modal", e.COMMUNITY_COLLECTIONS_PAGE = "community_collections_page", e.COMMUNITY_MAKE_PAGE = "community_make_page", e.FIGJAM_MAKE_SOMETHING_POPUP = "figjam_make_something_popup", e.FIGMAKE_LAUNCH_BANNER = "figmake_launch_banner", e.FIGMAKE_PROMO_MODAL = "figmake_promo_modal", e.FIGMAKE_SIDEBAR_PROMO = "figmake_sidebar_promo", e.FIGMAKE_PROTOTYPE_ANNOUNCEMENT = "figmake_prototype_announcement", e.FIGMAKE_POPOUT_UPSELL_IN_DESIGN_EDITOR = "figmake_popout_upsell_in_design_editor", e.DESIGN_TO_SLIDES_ENTRYPOINT = "design_to_slides_entrypoint", e.DESIGN_TO_SITES_ENTRYPOINT = "design_to_sites_entrypoint", e.DESIGN_COPY_TO_SITES_ENTRYPOINT = "design_copy_to_sites_entrypoint", e.DESIGN_TO_BUZZ_ENTRYPOINT = "design_to_buzz_entrypoint", e.RESOURCE_HUB_FEW_TEMPLATES_UPSELL = "resource_hub_few_templates_upsell", e.RESOURCE_HUB_NO_RESOURCES_UPSELL = "resource_hub_no_resources_upsell", e.EDITOR_MENU = "editor_menu", e.EDITOR_QUICK_ACTIONS = "editor_quick_actions", e.LIBRARY_EXTRACT_TOAST = "library_extract_toast", e.EDITOR_GLASS_ONBOARDING_MODAL = "editor_glass_onboarding_modal", e.SEND_TO_MAKE_FROM_DESIGN_CONTEXT_MENU = "send_to_make_from_design_context_menu", e.SEND_TO_MAKE_FROM_DESIGN_QA_V2_MENU = "send_to_make_from_design_qa_v2_menu", e.SEND_SELECTION_TO_BUZZ_FROM_DESIGN_CONTEXT_MENU = "send_to_buzz_from_design_context_menu", e.SEND_TO_BUZZ_FROM_DESIGN_QA_V2_MENU = "send_to_buzz_from_design_qa_v2_menu", e))($$a4 || {});
var $$s2 = (e => (e.NEW_TAB = "new_tab", e.SAME_TAB = "same_tab", e))($$s2 || {});
export let $$o1 = "multiplayer_user_state_change";
export var $$l5 = (e => (e[e.NONE = 0] = "NONE", e[e.FOR_OPEN = 1] = "FOR_OPEN", e[e.FOR_MENU = 2] = "FOR_MENU", e))($$l5 || {});
let d = z.object({
  extensionId: z.string(),
  extensionType: z.enum(["plugin", "widget"]),
  currentExtensionVersionId: z.string().nullable(),
  localFileId: z.number().nullable()
});
let c = z.object({
  displayName: z.string(),
  runPluginArgs: PluginRunEventSchema.optional(),
  extensionInfo: d.optional().nullable()
});
let u = z.object({
  parameterValues: z.record(z.string()).optional().nullable()
});
let $$p0 = c.omit({
  runPluginArgs: !0
}).extend({
  selectedRunPluginArgs: u.optional().nullable()
});
var $$_6 = (e => (e[e.BAR = 0] = "BAR", e[e.SPINNER = 1] = "SPINNER", e))($$_6 || {});
var h = (e => (e[e.NEW_FILE = 0] = "NEW_FILE", e[e.EXISTING_FILE = 1] = "EXISTING_FILE", e[e.WAITING = 2] = "WAITING", e[e.FINISHED_WAITING = 3] = "FINISHED_WAITING", e))(h || {});
export class $$m3 {
  constructor(e, t, r) {
    this.tabCloseText = e;
    this.unsaved = t;
    this.error = r;
    this.hasUnsavedChanges = !1;
    this.hasAutosaveChanges = !1;
    this.hasMultiplayerChanges = !1;
    this.hasUnsavedChanges = t.hasAutosaveChanges || t.hasMultiplayerChanges;
    this.hasAutosaveChanges = t.hasAutosaveChanges;
    this.hasMultiplayerChanges = t.hasMultiplayerChanges;
  }
  equals(e) {
    return e && this.tabCloseText === e.tabCloseText && this.unsaved.hasAutosaveChanges === e.unsaved.hasAutosaveChanges && this.unsaved.hasMultiplayerChanges === e.unsaved.hasMultiplayerChanges && this.error === e.error;
  }
}
export var $$g7 = (e => (e[e.CUT = 0] = "CUT", e[e.COPY = 1] = "COPY", e[e.PASTE = 2] = "PASTE", e))($$g7 || {});
export const CN = $$p0;
export const M8 = $$o1;
export const ai = $$s2;
export const av = $$m3;
export const f6 = $$a4;
export const kF = $$l5;
export const lF = $$_6;
export const zy = $$g7;