import { z } from 'zod'
import { ProductSource, ProductStatus } from '../905/54385'
import { SubscriptionMetadataSchema } from '../905/272080'
import { monetizedResourceMetadataSchema } from '../905/344937'
import { CommunityRatingStatsContainerSchema } from '../905/796201'
import { BadgeSchema, BadgeType } from '../905/875063'
import { PublisherInfoSchema, TeamOrgType } from '../figma_app/10554'
import { createContentFilterSchema } from '../figma_app/70618'
import { Ni } from '../figma_app/188152'
import { FFileType, FPublicationStatusType, FPublisherType, FTemplateCategoryType, FUserVerificationStatusType } from '../figma_app/191312'
import * as Ip from '../figma_app/709165'
import { fE, P1 } from '../figma_app/809727'

/**
 * FileTypeEnum - Refactored from $$h2
 * Maps FFileType values to their string representations.
 */
export const FileTypeEnum = {
  FIGMA: FFileType.DESIGN,
  FIGJAM: FFileType.WHITEBOARD,
  SLIDES: FFileType.SLIDES,
  SITES: FFileType.SITES,
  COOPER: FFileType.COOPER,
  FIGMAKE: FFileType.FIGMAKE,
} as const

/**
 * HubFileVersionSchema - Refactored from $$g5
 * Zod schema for a hub file version.
 */
export const HubFileVersionSchema = z.object({
  id: z.string(),
  hub_file_id: z.string(),
  fig_file_version_id: z.string().optional(),
  name: z.string(),
  version: z.string(),
  release_notes: z.string().nullable(),
  creator_policy: z.string().nullable(),
  description: z.string(),
  created_at: z.string(),
  valid_prototype: z.boolean(),
  thumbnail_guid: z.string().nullable(),
})

/**
 * HubFileSchema - Refactored from $$f3
 * Zod schema for a hub file, composed with other schemas.
 */
export const HubFileSchema = z.object({
  id: z.string(),
  versions: z.record(HubFileVersionSchema),
  duplicate_count: z.number(),
  like_count: z.number(),
  view_count: z.number().optional(),
  comment_count: z.number(),
  realtime_token: z.string().optional(),
  created_at: z.string(),
  thumbnail_url: z.string(),
  resized_thumbnail_urls: z.optional(P1),
  carousel_media_urls: z.optional(fE),
  cover_image_carousel_media_id: z.string().optional(),
  redirect_canvas_url: z.string(),
  current_hub_file_version_id: z.string(),
  client_meta: z.string(),
  tags: z.array(z.string()).optional(),
  tags_v2: z.record(z.string()).optional(),
  viewer_mode: z.nativeEnum(FTemplateCategoryType),
  scaling_mode: Ip.ignore(),
  thumbnail_is_set: z.boolean().nullable(),
  comments_setting: z.nativeEnum(Ni).nullable(),
  category_id: z.string().nullable(),
  parent_category_slug: z.string().nullish(),
  category_slug: z.string().nullish(),
  unpublished_at: z.string().nullable(),
  publishing_status: z.nativeEnum(FPublicationStatusType).nullable(),
  score: z.number().optional(),
  recently_duplicated: z.boolean().optional(),
  related_content: createContentFilterSchema(z.lazy(() => Ip.ignore())).optional(),
  verification_status: z.nativeEnum(FUserVerificationStatusType).optional(),
  commenting_is_restricted: z.boolean().optional(),
  monetization_status: z.nativeEnum(ProductSource).nullish(),
  community_resource_payment: SubscriptionMetadataSchema.optional(),
  support_contact: z.string().nullish(),
  published_site_url: z.string().nullish(),
  library_key: z.custom().optional(),
  third_party_m10n_status: z.nativeEnum(ProductStatus).nullish(),
})
  .and(PublisherInfoSchema)
  .and(BadgeSchema)
  .and(monetizedResourceMetadataSchema)
  .and(CommunityRatingStatsContainerSchema)

/**
 * getCurrentHubFileVersionName - Refactored from $$_7
 * Returns the name of the current hub file version.
 * @param file - HubFileSchema type
 * @returns string | null
 */
export function getCurrentHubFileVersionName(file: z.infer<typeof HubFileSchema>): string | null {
  if (!file)
    return null
  const versionId = file.current_hub_file_version_id as string
  if (!versionId)
    return null
  const version = file.versions[versionId]
  return version?.name ?? null
}

/**
 * mapHubFileToProfile - Refactored from $$A0
 * Maps a hub file to a profile object.
 * @param file - HubFileSchema type
 * @returns object | null
 */
export function mapHubFileToProfile(file: z.infer<typeof HubFileSchema>) {
  if (!file)
    return null
  const version = file.versions[file.current_hub_file_version_id as string]
  return {
    id: file.id,
    unpublishedAt: file.unpublished_at ? new Date(file.unpublished_at as number) : null,
    profile: {
      id: file.publisher.id,
      entityType: file.publisher.entity_type,
    },
    verificationStatus: file.verification_status || FUserVerificationStatusType.VERIFIED,
    currentHubFileVersion: {
      id: version.id,
      createdAt: new Date(version.created_at),
    },
    publishingStatus: file.publishing_status,
    libraryKey: file.library_key ?? '',
    publishingStatusUpdatedAt: null,
    publishedByUser: null,
  }
}

/**
 * CanvasSourceEnum - Refactored from $$y6
 * Enum for canvas source types.
 */
export const CanvasSourceEnum = {
  USER_UPLOADED: 0,
  USER_CANVAS: 1,
  DEFAULT_CANVAS: 2,
} as const

/**
 * mapProfileToHubFile - Refactored from $$b1
 * Maps a profile object to a hub file object.
 * @param profile - any
 * @returns object | null
 */
export function mapProfileToHubFile(profile: any) {
  if (!profile)
    return null
  const version = profile.currentHubFileVersion
  const versions: Record<string, any> = {}
  if (version) {
    versions[version.id] = {
      id: version.id,
      hub_file_id: version.hubFileId ?? '',
      name: version.name,
      version: version.version,
      release_notes: version.releaseNotes,
      creator_policy: version.creatorPolicy,
      description: version.description,
      created_at: version.createdAt.toISOString(),
      valid_prototype: version.validPrototype,
      thumbnail_guid: version.thumbnailGuid,
    }
  }
  const monetized = profile.hubFileMonetizedResourceMetadata
  return {
    id: profile.id,
    badges: profile.badges.map((b: any) => mapBadgeType(b.badgeType)),
    publishing_status: profile.publishingStatus,
    verification_status: profile.verificationStatus,
    unpublished_at: profile.unpublishedAt?.toISOString() ?? null,
    current_hub_file_version_id: profile.currentHubFileVersionId ?? '',
    thumbnail_url: profile.thumbnailUrl ?? '',
    viewer_mode: profile.viewerMode,
    community_publishers: mapCommunityPublishers(profile)?.community_publishers ?? { accepted: [] },
    creator: {
      id: profile.publishedByUser?.id ?? '',
      handle: profile.publishedByUser?.handle ?? '',
      img_url: profile.publishedByUser?.imgUrl ?? '',
      description: profile.publishedByUser?.description ?? '',
    },
    view_count: profile.viewCount,
    like_count: profile.likeCount,
    duplicate_count: profile.duplicateCount,
    versions,
    ...(monetized
      ? {
          monetized_resource_metadata: {
            id: monetized.id,
            price: monetized.price,
            is_subscription: monetized.isSubscription ?? false,
          },
        }
      : {}),
  }
}

/**
 * mapCommunityPublishers - Refactored from $$v4
 * Maps community publishers to a structured object.
 * @param file - any
 * @returns object | null
 */
export function mapCommunityPublishers(file: any) {
  if (!file || !file.communityPublishers)
    return null
  const publishers = { accepted: [] as any[], pending: [] as any[] }
  if (
    file.publishingStatus === FPublicationStatusType.DELISTED
    || file.publishingStatus === FPublicationStatusType.DELISTED_CREATOR_STRIPE_DISABLED
  ) {
    // No accepted publishers if delisted
    return { community_publishers: publishers }
  }
  file.communityPublishers.forEach((publisher: any) => {
    if (!publisher.profile)
      return
    const profile = {
      id: publisher.profile.id,
      badges: publisher.profile.badges.map((b: any) => mapBadgeType(b.badgeType)),
      name: publisher.profile.name,
      profile_handle: publisher.profile.profileHandle,
      img_url: publisher.profile.imgUrl ?? undefined,
      img_urls: publisher.profile.imgUrls,
      current_user_is_following: publisher.profile.currentUserIsFollowing,
      current_user_is_followed: publisher.profile.currentUserIsFollowed,
      entity_type: mapEntityType(publisher.profile.entityType),
      primary_user_id: publisher.profile.primaryUserId,
      location: publisher.profile.location,
      follower_count: publisher.profile.followerCount,
      following_count: publisher.profile.followingCount,
      isPending: publisher.isPending,
      description: publisher.profile.description,
      is_restricted_by_current_user: false,
    }
    if (publisher.role === FPublisherType.CREATOR) {
      if (publisher.isPending) {
        publishers.pending = publishers.pending || []
        publishers.pending.push(profile)
      }
      else {
        publishers.accepted.push(profile)
      }
    }
  })
  return { community_publishers: publishers }
}

/**
 * mapBadgeType - Refactored from I
 * Maps badge type string to BadgeType enum.
 * @param badgeType - string
 * @returns BadgeType
 */
function mapBadgeType(badgeType: string): BadgeType {
  switch (badgeType) {
    case 'figma_partner':
      return BadgeType.FIGMA_PARTNER
    case 'trusted':
      return BadgeType.TRUSTED
    case 'creator_fund':
      return BadgeType.CREATOR_FUND
    case 'award_2023':
      return BadgeType.AWARD_2023
    default:
      throw new Error(`Failed to convert string to CommunityBadges enum str:${badgeType}`)
  }
}

/**
 * mapEntityType - Helper for entity type mapping in mapCommunityPublishers
 * @param entityType - string
 * @returns TeamOrgType
 */
function mapEntityType(entityType: string): TeamOrgType {
  switch (entityType) {
    case 'user':
      return TeamOrgType.USER
    case 'team':
      return TeamOrgType.TEAM
    case 'org':
      return TeamOrgType.ORG
    default:
      throw new Error(`Failed to convert string to CommunityProfileEntityType str:${entityType}`)
  }
}

// Exported names refactored for clarity and traceability
export const YJ = mapHubFileToProfile
export const ZD = mapProfileToHubFile
export const LE = FileTypeEnum
export const NS = HubFileSchema
export const Se = mapCommunityPublishers
export const V_ = HubFileVersionSchema
export const mN = CanvasSourceEnum
export const oA = getCurrentHubFileVersionName
