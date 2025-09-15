import { z } from 'zod'
import { BadgeSchema } from '../905/875063'
import { UserOrgSchema } from '../figma_app/175992'
/**
 * Enum for page types (original: $$s3)
 */
export enum PageTypeEnum {
  RESOURCE_PAGE = 'resource_page',
  EDITOR = 'editor',
  UNIVERSAL_POSTING = 'universal_posting',
  ADMIN = 'admin',
  SITES_PUBLISH_MODAL = 'sites_publish_modal',
}

/**
 * Enum for upload status (original: $$o1)
 */
export enum UploadStatusEnum {
  EDIT = 0,
  UPLOADING = 1,
  SUCCESS = 2,
  FAILURE = 3,
}

/**
 * Schema for image URLs (original: l)
 */
const ImageUrlsSchema = z.object({
  '500_500': z.string().optional(),
  '120_120': z.string().optional(),
})

/**
 * Enum for entity types (original: $$d5)
 */
export enum TeamOrgType {
  USER = 'user',
  TEAM = 'team',
  ORG = 'org',
}

/**
 * Schema for associated user (original: c)
 */
const AssociatedUserSchema = z.object({
  email: z.string().optional(),
  user_id: z.string(),
  is_primary_user: z.boolean(),
  can_sell_on_community: z.boolean().optional(),
})

/**
 * Schema for publisher badge (original: $$u2)
 */
export const PublisherBadgeSchema = BadgeSchema.and(z.object({
  id: z.string(),
  name: z.string(),
  profile_handle: z.string(),
  img_url: z.coerce.string().optional(),
  img_urls: ImageUrlsSchema,
  current_user_is_following: z.coerce.boolean(),
  current_user_is_followed: z.coerce.boolean(),
  is_restricted_by_current_user: z.coerce.boolean(),
  entity_type: z.nativeEnum(TeamOrgType),
  primary_user_id: z.string().nullable(),
  location: z.string().nullable(),
  follower_count: z.number(),
  following_count: z.number(),
  isPending: z.boolean().optional(),
  associated_users: z.array(AssociatedUserSchema).optional(),
  has_published: z.boolean().optional(),
  description: z.string().nullish(),
}))

/**
 * Schema for community publishers (original: p)
 */
const CommunityPublishersSchema = z.object({
  accepted: z.array(PublisherBadgeSchema),
  pending: z.array(PublisherBadgeSchema).optional(),
})

/**
 * Schema for publisher info (original: $$_6)
 */
export const PublisherInfoSchema = z.object({
  creator: UserOrgSchema,
  publisher: PublisherBadgeSchema,
  community_publishers: CommunityPublishersSchema,
})

/**
 * Schema for minimal user info (original: h)
 */
const MinimalUserInfoSchema = UserOrgSchema.pick({
  id: true,
  email: true,
})

/**
 * Schema for accepted/pending users (original: $$m0)
 */
export const AcceptedPendingUsersSchema = z.object({
  accepted: z.array(UserOrgSchema),
  pending: z.array(MinimalUserInfoSchema).optional(),
})

/**
 * Enum for publisher roles (original: $$g4)
 */
export enum PublisherRole {
  OWNER = 'owner',
  PUBLISHER = 'publisher',
  NONE = 'none',
}

// Export refactored variables with original names for compatibility
export const I7 = AcceptedPendingUsersSchema
export const aP = UploadStatusEnum
export const bo = PublisherBadgeSchema
export const k2 = PageTypeEnum
export const kM = PublisherRole
export const o1 = TeamOrgType
export const xK = PublisherInfoSchema
