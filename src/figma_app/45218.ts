import { Ip, z } from "../905/239603";
import { Y9 } from "../figma_app/306946";
import { iG } from "../905/380385";
import { PN } from "../905/54385";
var $$o14 = (e => (e.HUB_FILE = "hub_file", e.PLUGIN = "plugin", e.WIDGET = "widget", e.COMMENT = "comment", e))($$o14 || {});
var $$l17 = (e => (e.SUBSCRIPTION = "subscription", e.ONE_TIME = "one_time", e))($$l17 || {});
var $$d13 = (e => (e.DETAIL = "detail", e.INSERTS = "inserts", e.QUICK_ACTIONS = "quick_actions", e.PLUGIN_ROW = "plugin_row", e.REDESIGNED_PLUGIN_ROW = "redesigned_plugin_row", e.SEARCH = "search", e))($$d13 || {});
var $$c1 = (e => (e[e.NO_USER = 0] = "NO_USER", e[e.NO_PROFILE = 1] = "NO_PROFILE", e))($$c1 || {});
var $$u23 = (e => (e.HUB_FILE = "hub_file", e.PLUGIN = "plugin", e.WIDGET = "widget", e))($$u23 || {});
var $$p10 = (e => (e.HUB_FILE = "hub_file", e.PLUGIN = "plugin", e.WIDGET = "widget", e))($$p10 || {});
export let $$_6 = iG.extend({
  author: Ip.ignore(),
  parent_id: z.string().nullable(),
  reply_count: z.number(),
  last_replied_at: z.string().nullable(),
  resource_version_id: z.string(),
  message_meta: z.array(Ip.ignore()),
  rating_value: z.number().optional()
});
z.object({
  plugin: Ip.ignore().nullish(),
  plugin_install: Ip.ignore().nullish(),
  whitelisted_plugin: Ip.ignore().nullish(),
  hub_file: Ip.ignore().nullish(),
  profile: Ip.ignore().nullish(),
  community_comment: Ip.ignore().nullish(),
  widget: Ip.ignore().nullish(),
  community_resource_payment: Ip.ignore().nullish()
});
var h = (e => (e[e.SHOW_404 = 0] = "SHOW_404", e[e.REDIRECT_TO_INTERNAL_PROFILE = 1] = "REDIRECT_TO_INTERNAL_PROFILE", e))(h || {});
var $$m8 = (e => (e.ALL = "ALL", e.ME = "ME", e.RATINGS_REVIEWS = "RATINGS_REVIEWS", e.COMMENTS = "COMMENTS", e))($$m8 || {});
var $$g15 = (e => (e.COMMUNITY_LANDING = "community_landing", e.FILE_BROWSER_RECOMMENDED_TEMPLATES = "file_browser_recommended_templates", e.FIGJAM_TEMPLATES_PICKER = "figjam_templates_picker", e.BROWSE_PLUGINS_MODAL = "browse_plugins_modal", e.BROWSE_WIDGETS_MODAL = "browse_widgets_modal", e.CURATED_PAGE = "curated_page", e.NA = "na", e.CONFIG_VOTE = "config_vote", e.COMMUNITY_WIDGETS_PAGE = "community_widgets_page", e.FIGJAM_SIMPLE_TEMPLATES_PICKER = "figjam_simple_templates_picker", e.FIGMA_INSERTS_NUX = "figma_inserts_nux", e.FILE_BROWSER_TEMPLATES_BAR = "file_browser_templates_bar", e.COMMUNITY_LIBRARIES_QUICKSTART = "community_libraries_quickstart", e.FIGJAM_SECTION_PRESET_PICKER = "figjam_section_preset_picker", e.CATEGORY_PAGE = "category_page", e.SLIDES_TEMPLATE_MODAL = "slides_template_modal", e.SITES_TEMPLATE_MODAL = "sites_template_modal", e.MAKE_PAGE_FEED = "make_page_feed", e.BUZZ_TEMPLATE_PICKER = "buzz_template_picker", e))($$g15 || {});
var $$f18 = (e => (e.PM = "PM", e.DES = "DES", e.ENG = "ENG", e.MKT = "MKT", e.UR = "UR", e.OTH = "OTH", e.ALL = "ALL", e.STARTER = "STARTER", e))($$f18 || {});
export function $$E24(e) {
  return null != e && "is_widget" in e && e.is_widget;
}
export function $$y5(e) {
  return null != e && "current_plugin_version_id" in e && !e.is_widget;
}
export function $$b20(e) {
  return "is_widget" in e || "current_plugin_version_id" in e;
}
export function $$T9(e) {
  return null != e && "client_meta" in e;
}
export function $$I3(e) {
  return !!e && "publishScope" in e;
}
export function $$S11(e) {
  return "fig_file_metadata" in e;
}
export function $$v0(e) {
  return ($$A19(e) || $$C25(e)) && $$T9(e) && "whiteboard" !== e.viewer_mode;
}
export function $$A19(e) {
  return !!e?.monetized_resource_metadata;
}
export function $$x4(e) {
  return $$C25(e) || $$A19(e);
}
export function $$N7(e) {
  return !!e?.monetized_resource_metadata?.has_freemium_code;
}
export function $$C25(e) {
  return "third_party_m10n_status" in e && e.third_party_m10n_status === PN.FLAGGED || "is_3rd_party_monetized" in e && !!e.is_3rd_party_monetized;
}
export function $$w2(e) {
  $$T9(e) || $$E24(e);
  return e;
}
var $$O12 = (e => (e.POST_COMPOSER = "POST_COMPOSER", e.NAVBAR = "NAVBAR", e.RECENT_FILES_DIRECT_LINK = "RECENT_FILES_DIRECT_LINK", e.IFRAME = "IFRAME", e))($$O12 || {});
var $$R22 = (e => (e.ACTIVE = "active", e.INACTIVE = "inactive", e))($$R22 || {});
var $$L16 = (e => (e.PASTE = "paste", e.DROP = "drop", e.FILE_INPUT = "file_input", e))($$L16 || {});
var P = (e => (e[e.TRY_IT_OUT = 0] = "TRY_IT_OUT", e[e.OPEN = 1] = "OPEN", e))(P || {});
z.object({
  id: z.string().nullish(),
  hubFileId: z.string().nullish(),
  pluginId: z.string().nullish(),
  widgetId: z.string().nullish(),
  oneStars: z.number(),
  twoStars: z.number(),
  threeStars: z.number(),
  fourStars: z.number(),
  fiveStars: z.number(),
  totalRatings: z.number(),
  avgRating: z.number().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish()
});
export let $$D21 = z.object({
  id: z.string(),
  updated_at: z.string(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  order: z.number().optional(),
  shelf_meta: z.any(),
  shelf_content: Y9,
  total_shelf_content_count: z.number().optional(),
  url_slug: z.string().nullable(),
  i18n_meta: z.record(z.string())
});
export const BS = $$v0;
export const CM = $$c1;
export const Ch = $$w2;
export const Fl = $$I3;
export const H0 = $$x4;
export const I0 = $$y5;
export const KS = $$_6;
export const PM = $$N7;
export const Qv = $$m8;
export const U = $$T9;
export const Ug = $$p10;
export const Uz = $$S11;
export const Zm = $$O12;
export const aL = $$d13;
export const bD = $$o14;
export const cS = $$g15;
export const dj = $$L16;
export const hE = $$l17;
export const iF = $$f18;
export const m3 = $$A19;
export const mr = $$b20;
export const nn = $$D21;
export const po = $$R22;
export const vt = $$u23;
export const xQ = $$E24;
export const zF = $$C25;
