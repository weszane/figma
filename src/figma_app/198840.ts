import { baseErrorSeverity } from '../905/44199'
import { ignoreCommandOrShift } from '../905/63728'
import { getI18nString } from '../905/303541'
import { customHistory } from '../905/612521'
import { getCommunityFileUrl } from '../905/612685'
import { TeamOrgType } from '../figma_app/10554'
import { FFileType, FPublicationStatusType, FTemplateCategoryType } from '../figma_app/191312'
import { isValidEmail } from '../figma_app/416935'
import { throwTypeError } from '../figma_app/465776'
import { buildCarouselMedia } from '../figma_app/471982'
import { extractWorkspaceId, getDefaultHubFileAuthor, isWorkspaceMatch, needsToAcceptCommunityTOS, validateCarouselImages } from '../figma_app/599979'
import { PreviewMode } from '../figma_app/707808'
import { defaultTemplate, getValueOrDefault, trimOrEmpty, validatePublisherCount } from '../figma_app/740025'
import { getInitialAutocompleteState } from '../figma_app/761870'
import { PresentationValidationStatus, PrototypingTsApi } from '../figma_app/763686'
import { centsToDollars, isNotInteger, isPriceOutOfRange, MIN_PRICE } from '../figma_app/808294'
import { isValidUrl } from '../figma_app/930338'

// --- Type Definitions ---

interface HubFileVersion {
  id: string
  hub_file_id: string
  fig_file_version_id: string
  name: string
  version: string
  release_notes: string
  description: string
  creator_policy: string
  created_at: string
  valid_prototype: boolean
  thumbnail_guid: string | null
}

interface Creator {
  id: string
  handle: string
  img_url: string
}

interface Publisher {
  is_restricted_by_current_user: boolean
  id: string
  name: string
  img_url: string
  img_urls: Record<string, string>
  profile_handle: string
  primary_user_id: string | null
  current_user_is_following: boolean
  current_user_is_followed: boolean
  location: string | null
  follower_count: number
  following_count: number
  entity_type: TeamOrgType
  badges: string[]
  description: string
}

interface CommunityPublishers {
  accepted: Publisher[]
  pending: Publisher[]
}

interface HubFile {
  id: string
  category_id: string | null
  creator: Creator
  publisher: Publisher
  community_publishers: CommunityPublishers
  versions: Record<string, HubFileVersion>
  current_hub_file_version_id: string
  redirect_canvas_url: string
  thumbnail_url: string
  created_at: string
  unpublished_at: string | null
  duplicate_count: number
  like_count: number
  view_count: number
  comment_count: number
  viewer_mode: FTemplateCategoryType
  scaling_mode: string | null
  realtime_token: string
  client_meta: string
  thumbnail_is_set: boolean
  comments_setting: string | null
  publishing_status: FPublicationStatusType
  badges: string[]
  tags?: string[]
  tags_v2?: Record<string, unknown>
  monetized_resource_metadata?: any
  support_contact?: string
  cover_image_carousel_media_id?: string
}

// --- Constants ---

const defaultHubFileVersion: HubFileVersion = {
  id: '',
  hub_file_id: '',
  fig_file_version_id: '',
  name: '',
  version: '',
  release_notes: '',
  description: '',
  creator_policy: '',
  created_at: '',
  valid_prototype: true,
  thumbnail_guid: null,
}

const defaultHubFile: HubFile = {
  id: '',
  category_id: null,
  creator: {
    id: '',
    handle: '',
    img_url: '',
  },
  publisher: {
    is_restricted_by_current_user: false,
    id: '',
    name: '',
    img_url: '',
    img_urls: {},
    profile_handle: '',
    primary_user_id: null,
    current_user_is_following: false,
    current_user_is_followed: false,
    location: null,
    follower_count: 0,
    following_count: 0,
    entity_type: TeamOrgType.USER,
    badges: [],
    description: '',
  },
  community_publishers: {
    accepted: [],
    pending: [],
  },
  versions: {},
  current_hub_file_version_id: '',
  redirect_canvas_url: '',
  thumbnail_url: '',
  created_at: '',
  unpublished_at: null,
  duplicate_count: 0,
  like_count: 0,
  view_count: 0,
  comment_count: 0,
  viewer_mode: FTemplateCategoryType.CANVAS,
  scaling_mode: null,
  realtime_token: '',
  client_meta: '',
  thumbnail_is_set: false,
  comments_setting: null,
  publishing_status: FPublicationStatusType.APPROVED_PUBLIC,
  badges: [],
}

// --- Enums ---

export const isCommunityDuplicate = {
  KEY: 'is-community-duplicate',
  VALUE: '1',
}

export const FileTypeSwitch = {
  CURRENT_FILE: 'currentFile',
  NEW_FILE: 'newFile',
}

// --- Utility Functions ---

/**
 * Returns the appropriate i18n string for template action based on file type.
 */
export function getTemplateActionLabel(type: string): string {
  switch (type) {
    case FileTypeSwitch.NEW_FILE:
      return getI18nString('browse_templates_modal.use_template')
    case FileTypeSwitch.CURRENT_FILE:
    default:
      return getI18nString('browse_templates_modal.add_template')
  }
}

/**
 * Returns a hub file object, falling back to default if not found.
 */
export function getHubFileOrDefault(file: any, key: string): HubFile {
  return getValueOrDefault(file, key, defaultHubFile)
}

/**
 * Returns a hub file version object, falling back to default if not found.
 */
export function getHubFileVersionOrDefault(hubFile: HubFile, versionId?: string): HubFileVersion {
  const id = versionId || hubFile.current_hub_file_version_id
  return getValueOrDefault(id, hubFile.versions, defaultHubFileVersion)
}

/**
 * Maps FFileType to FTemplateCategoryType.
 */
export function mapFileTypeToCategoryType(fileType: FFileType | undefined): FTemplateCategoryType {
  if (!fileType)
    return FTemplateCategoryType.CANVAS
  switch (fileType) {
    case FFileType.DESIGN:
      return FTemplateCategoryType.CANVAS
    case FFileType.WHITEBOARD:
      return FTemplateCategoryType.WHITEBOARD
    case FFileType.SLIDES:
      return FTemplateCategoryType.SLIDE_TEMPLATE
    case FFileType.SITES:
      return FTemplateCategoryType.SITE_TEMPLATE
    case FFileType.COOPER:
      return FTemplateCategoryType.COOPER_TEMPLATE_FILE
    case FFileType.FIGMAKE:
      return FTemplateCategoryType.FIGMAKE_TEMPLATE
    default:
      throwTypeError(fileType)
  }
}

/**
 * Builds the template publishing payload.
 * Note: This function is complex due to many conditional branches and external dependencies.
 */
export function buildTemplatePublishPayload(
  state: any,
  fileKey: string,
  isReviewMode: boolean,
  isPrototypeMode: boolean,
) {
  let workspaceId: string | undefined
  const publishedFile = state.figFilePublishedAsHubFile[fileKey]
  const hubFile = getHubFileOrDefault(publishedFile, state.hubFiles)
  const hubFileVersion = getHubFileVersionOrDefault(hubFile)
  const templateDefaults = defaultTemplate
  const fileMeta = state.fileByKey[fileKey]

  // Extract workspaceId if needed
  if (
    !isPrototypeMode
    && !isReviewMode
    && (state.authedActiveCommunityProfile?.team_id || state.authedActiveCommunityProfile?.org_id)
  ) {
    workspaceId = extractWorkspaceId(state.authedActiveCommunityProfile)
  }

  // Get author info
  const author = getDefaultHubFileAuthor(hubFile, fileMeta, state, workspaceId)

  // Determine viewer mode
  let viewerMode = isReviewMode ? hubFile.viewer_mode : mapFileTypeToCategoryType(fileMeta.editor_type)

  // Special case for prototype mode
  if (
    !isReviewMode
    && hubFile.viewer_mode === FTemplateCategoryType.PROTOTYPE
    && isPrototypeMode
    && PrototypingTsApi?.firstPagePrototypeStatus() === PresentationValidationStatus.VALID
  ) {
    viewerMode = FTemplateCategoryType.PROTOTYPE
  }

  // Build publishers autocomplete state
  const publisherTokens = (hubFile.community_publishers
    ? [...hubFile.community_publishers.accepted, ...(hubFile.community_publishers.pending || [])]
    : []
  ).reduce((tokens: any[], publisher: Publisher) => {
    const profile = state.authedProfilesById[publisher.id]
    return isWorkspaceMatch(profile, author)
      ? tokens
      : tokens.concat([{ state: baseErrorSeverity.OK, content: publisher }])
  }, [])

  const publishersAutocomplete = {
    ...getInitialAutocompleteState(),
    tokens: publisherTokens,
  }

  return {
    name: hubFileVersion.name || (fileMeta.name === getI18nString('fullscreen.fullscreen_view_selector.untitled') ? '' : fileMeta.name),
    description: hubFileVersion.description || templateDefaults.description,
    categoryId: hubFile.category_id,
    creatorPolicy: hubFileVersion.creator_policy || templateDefaults.creatorPolicy,
    tags: publishedFile && hubFile?.tags ? hubFile.tags : fileMeta?.editor_type === 'whiteboard' ? ['figjam'] : undefined,
    tagsV2: hubFile.tags_v2 && Object.keys(hubFile.tags_v2),
    viewerMode,
    scalingMode: hubFile.scaling_mode,
    author,
    publishers: publishersAutocomplete,
    commentsSetting: hubFile.comments_setting || templateDefaults.commentsSetting,
    blockPublishingOnToS: needsToAcceptCommunityTOS(state),
    price: centsToDollars(hubFile.monetized_resource_metadata),
    isPaid: !!hubFile.monetized_resource_metadata,
    supportContact: hubFile.support_contact || state.user?.email,
    carouselMedia: buildCarouselMedia(hubFile),
    coverImageCarouselMediaId: hubFile.cover_image_carousel_media_id,
  }
}

/**
 * Validates price input for paid resources.
 */
export function validatePrice(isPaid: boolean, price?: number): string | undefined {
  if (!isPaid)
    return undefined
  if (price === undefined) {
    return getI18nString('community.publishing.price_is_required_for_paid_resources')
  }
  if (isPriceOutOfRange(price)) {
    return price < MIN_PRICE
      ? getI18nString('community.seller.paid_resource_minimum_err')
      : getI18nString('community.seller.paid_resource_maximum_err')
  }
  if (isNotInteger(price)) {
    return getI18nString('community.seller.prices_must_follow_format')
  }
  return undefined
}

/**
 * Validates template name.
 */
export function validateTemplateName(name: string): string | undefined {
  const length = trimOrEmpty(name || null).length
  if (length === 0)
    return getI18nString('community.publishing.name_must_not_be_empty')
  if (length < 4)
    return getI18nString('community.publishing.name_must_be_4_characters_long')
  if (length > 100)
    return getI18nString('community.publishing.name_must_be_at_most_100_characters_long')
  return undefined
}

/**
 * Validates template description length.
 */
export function validateTemplateDescription(description: string): string | undefined {
  if (trimOrEmpty(description || null).length > 10000) {
    return getI18nString('community.publishing.description_must_be_at_most_10000_characters_long')
  }
  return undefined
}

/**
 * Validates creator policy length.
 */
export function validateCreatorPolicy(policy: string): string | undefined {
  if (trimOrEmpty(policy || null).length > 10000) {
    return getI18nString('community.publishing.creator_policy_must_be_at_most_10000_characters_long')
  }
  return undefined
}

/**
 * Validates support contact (must be email or URL).
 */
export function validateSupportContact(isPaid: boolean, contact?: string): string | undefined {
  if (isPaid && !contact) {
    return getI18nString('community.publishing.support_contact_must_not_be_empty')
  }
  if (!contact || isValidEmail(contact) || isValidUrl(contact)) {
    return undefined
  }
  return getI18nString('community.publishing.support_contact_must_be_a_valid_email_or_url')
}

/**
 * Validates category selection.
 */
export function validateCategoryId(categoryId: string | null): string | undefined {
  if (!categoryId) {
    return getI18nString('community.publishing.category_cant_be_empty')
  }
  return undefined
}

/**
 * Validates all template publishing fields.
 */
export function validateTemplatePublishFields(fields: {
  name: string
  description: string
  creatorPolicy: string
  publisherIds?: string[]
  carouselMedia: any
  categoryId: string | null
  isPaid?: boolean
  price?: number
  supportContact?: string
}): Record<string, string | undefined> {
  const errors: Record<string, string | undefined> = {
    name: validateTemplateName(fields.name),
    description: validateTemplateDescription(fields.description),
    creatorPolicy: validateCreatorPolicy(fields.creatorPolicy),
  }
  if (fields.publisherIds) {
    errors.publisherIds = validatePublisherCount(fields.publisherIds.length) || undefined
  }
  errors.carouselMedia = validateCarouselImages(fields.carouselMedia)
  errors.categoryId = validateCategoryId(fields.categoryId)
  const isPaid = 'isPaid' in fields && !!fields.isPaid
  errors.price = validatePrice(isPaid, fields.price)
  errors.supportContact = validateSupportContact(isPaid, fields.supportContact)

  // Remove undefined errors
  Object.keys(errors).forEach((key) => {
    if (!errors[key])
      delete errors[key]
  })
  return errors
}

/**
 * Checks if preview mode is fullscreen or fullscreen with comments.
 */
export function isFullscreenPreviewMode(mode: PreviewMode): boolean {
  return mode === PreviewMode.FULLSCREEN || mode === PreviewMode.FULLSCREEN_WITH_COMMENTS
}

/**
 * Checks if a hub file is published (not unpublished).
 */
export function isHubFilePublished(hubFile: HubFile): boolean {
  return !!hubFile && !hubFile.unpublished_at
}

/**
 * Checks if a hub file is approved public.
 */
export function isHubFileApprovedPublic(hubFile: HubFile): boolean {
  return !!hubFile && hubFile.publishing_status === FPublicationStatusType.APPROVED_PUBLIC
}

/**
 * Opens the community file URL in a new tab, ignoring command/shift keys.
 */
export function openCommunityFileUrl(file: any): void {
  const url = getCommunityFileUrl(file)
  ignoreCommandOrShift((event: any) => {
    event?.preventDefault()
    customHistory.redirect(url, '_blank')
  })
}

// --- Exported Aliases (keep original export names for compatibility) ---

export const HF = isHubFilePublished
export const M3 = getHubFileOrDefault
export const RD = FileTypeSwitch
export const Rj = validateCreatorPolicy
export const Ve = getTemplateActionLabel
export const Vz = openCommunityFileUrl
export const a6 = getHubFileVersionOrDefault
export const al = validateSupportContact
export const bH = validateTemplatePublishFields
export const cU = validateCategoryId
export const cp = validatePrice
export const ow = buildTemplatePublishPayload
export const pt = isCommunityDuplicate
export const t0 = isFullscreenPreviewMode
export const vK = validateTemplateDescription
export const x0 = mapFileTypeToCategoryType
export const yS = validateTemplateName
export const zv = isHubFileApprovedPublic
