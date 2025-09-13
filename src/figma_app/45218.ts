import { z } from 'zod'
import { ProductStatus } from '../905/54385'
import { CommentSchema } from '../905/380385'
import { Y9 as ShelfContentSchema } from '../figma_app/306946'
import * as Ip from '../figma_app/709165'

/**
 * ResourceType enum (original: $$o14)
 */
export enum ResourceType {
  HUB_FILE = 'hub_file',
  PLUGIN = 'plugin',
  WIDGET = 'widget',
  COMMENT = 'comment',
}

/**
 * PaymentType enum (original: $$l17)
 */
export enum PaymentType {
  SUBSCRIPTION = 'subscription',
  ONE_TIME = 'one_time',
}

/**
 * ShelfViewType enum (original: $$d13)
 */
export enum ShelfViewType {
  DETAIL = 'detail',
  INSERTS = 'inserts',
  QUICK_ACTIONS = 'quick_actions',
  PLUGIN_ROW = 'plugin_row',
  REDESIGNED_PLUGIN_ROW = 'redesigned_plugin_row',
  SEARCH = 'search',
}

/**
 * NoUserProfileStatus enum (original: $$c1)
 */
export enum NoUserProfileStatus {
  NO_USER = 0,
  NO_PROFILE = 1,
}

/**
 * ResourceTypeNoComment enum (original: $$u23)
 */
export enum ResourceTypeNoComment {
  HUB_FILE = 'hub_file',
  PLUGIN = 'plugin',
  WIDGET = 'widget',
}

/**
 * ResourceTypeNoComment2 enum (original: $$p10)
 */
export enum ResourceTypeNoComment2 {
  HUB_FILE = 'hub_file',
  PLUGIN = 'plugin',
  WIDGET = 'widget',
}

/**
 * ExtendedCommentSchema (original: $$_6)
 */
export const ExtendedCommentSchema = CommentSchema.extend({
  author: Ip.ignore(),
  parent_id: z.string().nullable(),
  reply_count: z.number(),
  last_replied_at: z.string().nullable(),
  resource_version_id: z.string(),
  message_meta: z.array(Ip.ignore()),
  rating_value: z.number().optional(),
})

/**
 * ProfileRedirectStatus enum (original: h)
 */
export enum ProfileRedirectStatus {
  SHOW_404 = 0,
  REDIRECT_TO_INTERNAL_PROFILE = 1,
}

/**
 * CommentTabType enum (original: $$m8)
 */
export enum CommentTabType {
  ALL = 'ALL',
  ME = 'ME',
  RATINGS_REVIEWS = 'RATINGS_REVIEWS',
  COMMENTS = 'COMMENTS',
}

/**
 * CommunityPageType enum (original: $$g15)
 */
export enum CommunityPageType {
  COMMUNITY_LANDING = 'community_landing',
  FILE_BROWSER_RECOMMENDED_TEMPLATES = 'file_browser_recommended_templates',
  FIGJAM_TEMPLATES_PICKER = 'figjam_templates_picker',
  BROWSE_PLUGINS_MODAL = 'browse_plugins_modal',
  BROWSE_WIDGETS_MODAL = 'browse_widgets_modal',
  CURATED_PAGE = 'curated_page',
  NA = 'na',
  CONFIG_VOTE = 'config_vote',
  COMMUNITY_WIDGETS_PAGE = 'community_widgets_page',
  FIGJAM_SIMPLE_TEMPLATES_PICKER = 'figjam_simple_templates_picker',
  FIGMA_INSERTS_NUX = 'figma_inserts_nux',
  FILE_BROWSER_TEMPLATES_BAR = 'file_browser_templates_bar',
  COMMUNITY_LIBRARIES_QUICKSTART = 'community_libraries_quickstart',
  FIGJAM_SECTION_PRESET_PICKER = 'figjam_section_preset_picker',
  CATEGORY_PAGE = 'category_page',
  SLIDES_TEMPLATE_MODAL = 'slides_template_modal',
  SITES_TEMPLATE_MODAL = 'sites_template_modal',
  MAKE_PAGE_FEED = 'make_page_feed',
  BUZZ_TEMPLATE_PICKER = 'buzz_template_picker',
}

/**
 * UserRole enum (original: $$f18)
 */
export enum UserRole {
  PM = 'PM',
  DES = 'DES',
  ENG = 'ENG',
  MKT = 'MKT',
  UR = 'UR',
  OTH = 'OTH',
  ALL = 'ALL',
  STARTER = 'STARTER',
}

/**
 * Checks if resource is a widget (original: $$E24)
 * @param resource
 */
export function isWidget(resource: any): boolean {
  return resource != null && 'is_widget' in resource && resource.is_widget
}

/**
 * Checks if resource is a plugin (original: $$y5)
 * @param resource
 */
export function isPlugin(resource: any): boolean {
  return resource != null && 'current_plugin_version_id' in resource && !resource.is_widget
}

/**
 * Checks if resource is either widget or plugin (original: $$b20)
 * @param resource
 */
export function isWidgetOrPlugin(resource: any): boolean {
  return 'is_widget' in resource || 'current_plugin_version_id' in resource
}

/**
 * Checks if resource has client meta (original: $$T9)
 * @param resource
 */
export function hasClientMeta(resource: any): boolean {
  return resource != null && 'client_meta' in resource
}

/**
 * Checks if resource has publishScope (original: $$I3)
 * @param resource
 */
export function hasPublishScope(resource: any): boolean {
  return !!resource && 'publishScope' in resource
}

/**
 * Checks if resource has fig_file_metadata (original: $$S11)
 * @param resource
 */
export function hasFigFileMetadata(resource: any): boolean {
  return 'fig_file_metadata' in resource
}

/**
 * Checks if resource is monetized and has client meta, and is not a whiteboard (original: $$v0)
 * @param resource
 */
export function isMonetizedWithClientMeta(resource: any): boolean {
  return (hasMonetizedResourceMetadata(resource) || isThirdPartyMonetized(resource))
    && hasClientMeta(resource)
    && resource.viewer_mode !== 'whiteboard'
}

/**
 * Checks if resource has monetized_resource_metadata (original: $$A19)
 * @param resource
 */
export function hasMonetizedResourceMetadata(resource: any): boolean {
  return !!resource?.monetized_resource_metadata
}

/**
 * Checks if resource is monetized or third party monetized (original: $$x4)
 * @param resource
 */
export function isMonetizedOrThirdParty(resource: any): boolean {
  return isThirdPartyMonetized(resource) || hasMonetizedResourceMetadata(resource)
}

/**
 * Checks if resource has freemium code (original: $$N7)
 * @param resource
 */
export function hasFreemiumCode(resource: any): boolean {
  return !!resource?.monetized_resource_metadata?.has_freemium_code
}

/**
 * Checks if resource is third party monetized (original: $$C25)
 * @param resource
 */
export function isThirdPartyMonetized(resource: any): boolean {
  return (
    ('third_party_m10n_status' in resource && resource.third_party_m10n_status === ProductStatus.FLAGGED)
    || ('is_3rd_party_monetized' in resource && !!resource.is_3rd_party_monetized)
  )
}

/**
 * Returns resource after checking client meta or widget (original: $$w2)
 * @param resource
 */
export function getResourceWithMeta(resource: any): any {
  hasClientMeta(resource) || isWidget(resource)
  return resource
}

/**
 * ComposerLocation enum (original: $$O12)
 */
export enum ComposerLocation {
  POST_COMPOSER = 'POST_COMPOSER',
  NAVBAR = 'NAVBAR',
  RECENT_FILES_DIRECT_LINK = 'RECENT_FILES_DIRECT_LINK',
  IFRAME = 'IFRAME',
}

/**
 * ResourceStatus enum (original: $$R22)
 */
export enum ResourceStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

/**
 * FileInputType enum (original: $$L16)
 */
export enum FileInputType {
  PASTE = 'paste',
  DROP = 'drop',
  FILE_INPUT = 'file_input',
}

/**
 * TryItOutStatus enum (original: P)
 */
export enum TryItOutStatus {
  TRY_IT_OUT = 0,
  OPEN = 1,
}

/**
 * RatingStatsSchema (anonymous, not exported originally)
 */
export const RatingStatsSchema = z.object({
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
  updatedAt: z.date().nullish(),
})

/**
 * ShelfSchema (original: $$D21)
 */
export const ShelfSchema = z.object({
  id: z.string(),
  updated_at: z.string(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  order: z.number().optional(),
  shelf_meta: z.any(),
  shelf_content: ShelfContentSchema,
  total_shelf_content_count: z.number().optional(),
  url_slug: z.string().nullable(),
  i18n_meta: z.record(z.string()),
})

// Export refactored names
export const BS = isMonetizedWithClientMeta
export const CM = NoUserProfileStatus
export const Ch = getResourceWithMeta
export const Fl = hasPublishScope
export const H0 = isMonetizedOrThirdParty
export const I0 = isPlugin
export const KS = ExtendedCommentSchema
export const PM = hasFreemiumCode
export const Qv = CommentTabType
export const U = hasClientMeta
export const Ug = ResourceTypeNoComment2
export const Uz = hasFigFileMetadata
export const Zm = ComposerLocation
export const aL = ShelfViewType
export const bD = ResourceType
export const cS = CommunityPageType
export const dj = FileInputType
export const hE = PaymentType
export const iF = UserRole
export const m3 = hasMonetizedResourceMetadata
export const mr = isWidgetOrPlugin
export const nn = ShelfSchema
export const po = ResourceStatus
export const vt = ResourceTypeNoComment
export const xQ = isWidget
export const zF = isThirdPartyMonetized
