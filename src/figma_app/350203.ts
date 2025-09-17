/**
 * @fileoverview Refactored constants and enums for Figma Community App.
 * Original variable names are preserved in comments for traceability.
 */

/**
 * Resource types in the community hub.
 * @see $$n14
 */
export enum FigmaResourceType {
  USERS = 'users',
  TEAMS = 'teams',
  ORGS = 'orgs',
  PLUGINS = 'plugins',
  WIDGETS = 'widgets',
  HUB_FILES = 'hub_files',
  PROFILES = 'profiles',
  CATEGORIES = 'community_categories',
}

/**
 * Community hub event types.
 * @see $$i4
 */
export enum HubEventType {
  HUB_FILE_DUPLICATED = 'Hub File Duplicated',
  PLUGIN_INSTALLED = 'Hub Plugin Installed',
  PLUGIN_UNINSTALLED = 'Hub Plugin Uninstalled',
  WIDGET_INSTALLED = 'Hub Widget Installed',
  WIDGET_UNINSTALLED = 'Hub Widget Uninstalled',
  SLIDE_TEMPLATE_USED = 'slide_template_used',
  RESOURCE_LIKE = 'resource_like',
  RESOURCE_UNLIKE = 'resource_unlike',
  SEARCH_QUERY_RESULT = 'cmty_search_query_result',
  EDITOR_TYPE_FILTER_CHANGED = 'editor_type_filter_changed',
  TEMPLATE_PICKER_SEARCH_QUERY_RESULT = 'template_picker_search_query_result',
}

/**
 * Community hub actions.
 * @see $$a22
 */
export enum HubAction {
  PLUGIN_INSTALL = 'community_hub_plugin_install',
  PLUGIN_UNINSTALL = 'community_hub_plugin_uninstall',
  PROFILE_FOLLOW = 'community_hub_follow',
  PROFILE_UNFOLLOW = 'community_hub_unfollow',
  HUB_FILE_LIKE = 'community_hub_file_like',
  HUB_FILE_UNLIKE = 'community_hub_file_unlike',
  PLUGIN_LIKE = 'community_plugin_like',
  PLUGIN_UNLIKE = 'community_plugin_unlike',
  WIDGET_LIKE = 'community_widget_like',
  WIDGET_UNLIKE = 'community_widget_unlike',
  SHARE_TWITTER = 'community_hub_share_twitter',
  LANDING_PAGE_TO_CURATED_PAGE_BUTTON = 'landing_page_to_curated_page_button',
  SHARE_FACEBOOK = 'community_hub_share_facebook',
  SHARE_LINK = 'community_hub_share_link',
  CREATE_PROFILE = 'community_hub_create_profile',
  COMMUNITY_OPT_IN = 'community_hub_opt_in',
  UPDATE_PROFILE_HANDLE = 'community_hub_update_handle',
  PLUGIN_INSTALL_CONFIRMATION_MODAL_SHOWN = 'community_hub_plugin_install_warning_shown',
  PLUGIN_INSTALL_CONFIRMATION_MODAL_CANCEL = 'community_hub_plugin_install_warning_cancel',
  SEE_MORE_IN_COMMUNITY = 'see_more_in_community',
  FIND_MORE_PLUGINS = 'find_more_plugins',
  MAKE_BANNER_CLICK = 'make_banner_click',
  MAKE_SOMETHING_NEW = 'make_something_new',
  FEATURED_RESOURCES_TAB_CLICK = 'featured_resources_tab_click',
}

/**
 * Community admin menu events.
 * @see $$s10
 */
export enum AdminMenuEvent {
  PROFILE_ADMIN_MENU_OPEN = 'Community browse menu opened',
}

/**
 * Community hub resource categories.
 * @see $$o11
 */
export enum HubResourceCategory {
  PLUGINS = 'plugins',
  FILES = 'files',
  CREATORS = 'creators',
  FIGJAM_PLUGINS = 'figjam_plugins',
  FIGMA_DESIGN_PLUGINS = 'figma_design_plugins',
  WIDGETS = 'widgets',
  FIGJAM_WIDGETS = 'figjam_widgets',
  FIGMA_DESIGN_WIDGETS = 'figma_design_widgets',
}

/**
 * Sort options for resources.
 * @see l
 */
export enum ResourceSortOption {
  POPULAR = 'popular',
  CREATED_AT = 'created_at',
  FOLLOWING_FEED = 'feed',
  INSTALLS_DESC = 'installs',
  RUNS_DESC = 'runs',
  LAST_UPDATED_DESC = 'updated_at',
  INSTALLS_ASC = 'installs_asc',
  RUNS_ASC = 'runs_asc',
  LAST_UPDATED_ASC = 'updated_at_asc',
}

/**
 * License URLs for resources.
 * @see $$d17
 */
export enum ResourceLicenseUrl {
  FREE_HUB_FILE_LICENSE = 'https://creativecommons.org/licenses/by/4.0/',
  FREE_PLUGIN_LICENSE = 'https://www.figma.com/community-resource-license/',
  FREE_RESOURCE_LICENSE = 'https://www.figma.com/community-free-resource-license/',
  PAID_RESOURCE_LICENSE = 'https://www.figma.com/community-paid-resource-license/',
}

/**
 * Publish modal states.
 * @see $$S9
 */
export enum PublishModalState {
  OPENED = 'opened',
  EDIT_NAME = 'edit_name',
  EDIT_DESCRIPTION = 'edit_description',
  DETAILS = 'details',
  ERROR = 'error',
  PUBLISH = 'publish',
  SUCCESS = 'success',
  CLOSED = 'closed',
  ADD_CAROUSEL_MEDIA = 'add_carousel_media',
  DELETE_CAROUSEL_MEDIA = 'delete_carousel_media',
  ADD_CUSTOM_THUMBNAIL = 'add_custom_thumbnail',
  UPLOAD_ICON = 'upload_icon',
}

/**
 * File input types.
 * @see $$v25
 */
export enum FileInputDropType {
  FILE_INPUT = 'file_input',
  DROP = 'drop',
}

/**
 * Publish source types.
 * @see $$A5
 */
export enum PublishSourceType {
  INTERNAL = 'internal',
  COMMUNITY = 'community',
}

// Numeric and string constants (original names preserved in comments)
/** @see $$c24 */
export const COMMUNITY_WIDTH = 906
/** @see $$u1 */
export const COMMUNITY_HEIGHT = 769
/** @see $$p12 */
export const COMMUNITY_MIN_WIDTH = 645
/** @see $$_7 */
export const CHECKOUT_ROUTE = 'checkout'
/** @see $$h16 */
export const FREEMIUM_PREVIEW = 'freemium_preview'
/** @see $$m0 */
export const COMMUNITY_VERSION = '1'
/** @see $$g26 */
export const COMMUNITY_TIMEOUT = 60
/** @see $$f8 */
export const COMMUNITY_MODAL_WIDTH = 640
/** @see $$E18 */
export const COMMUNITY_MODAL_HEIGHT = 300
/** @see $$y2 */
export const ALLOWED_HTML_TAGS = [
  'a',
  'span',
  'sub',
  'sup',
  'p',
  'b',
  'i',
  'pre',
  'div',
  'code',
  'em',
  'strike',
  'strong',
  'h1',
  'h2',
  'h3',
  'ul',
  'ol',
  'li',
  'hr',
  'br',
]
/** @see $$b6 */
export const INTERNAL_PUBLISH_MODAL = 'internal_publish_modal'
/** @see $$T19 */
export const COMMUNITY_PUBLISH_MODAL = 'community_publish_modal'
/** @see $$I21 */
export const STREAMLINED_PUBLISH_INITIATED = 'cmty_streamlined_publish_initiated'
/** @see $$x20 */
export const MAX_CAROUSEL_MEDIA = 5
/** @see $$N13 */
export const MAX_TAGS = 8
/** @see $$C23 */
export const MAX_DESCRIPTION_LENGTH = 24
/** @see $$w15 */
export const MAX_BANNER_CLICKS = 5
/** @see $$O3 */
export const MAX_WIDGETS = 6

// Export aliases for compatibility with original imports
export const E2 = COMMUNITY_VERSION
export const EX = COMMUNITY_HEIGHT
export const Ep = ALLOWED_HTML_TAGS
export const Fx = MAX_WIDGETS
export const M5 = HubEventType
export const N$ = PublishSourceType
export const SS = INTERNAL_PUBLISH_MODAL
export const Tb = CHECKOUT_ROUTE
export const Un = COMMUNITY_MODAL_WIDTH
export const WX = PublishModalState
export const W_ = AdminMenuEvent
export const XG = HubResourceCategory
export const YW = COMMUNITY_MIN_WIDTH
export const Yn = MAX_TAGS
export const ZO = FigmaResourceType
export const Z_ = MAX_BANNER_CLICKS
export const _O = FREEMIUM_PREVIEW
export const aY = ResourceLicenseUrl
export const dz = COMMUNITY_MODAL_HEIGHT
export const _$$in = COMMUNITY_PUBLISH_MODAL
export const l_ = MAX_CAROUSEL_MEDIA
export const mv = STREAMLINED_PUBLISH_INITIATED
export const s0 = HubAction
export const u8 = MAX_DESCRIPTION_LENGTH
export const w3 = COMMUNITY_WIDTH
export const xP = FileInputDropType
export const zn = COMMUNITY_TIMEOUT
