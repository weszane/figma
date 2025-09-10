import { z, Ip } from "../905/239603";
import { M } from "../figma_app/70618";
import { Ni } from "../figma_app/188152";
import { FFileType, FTemplateCategoryType, FPublicationStatusType, FUserVerificationStatusType, FPublisherType } from "../figma_app/191312";
import { xK, o1 } from "../figma_app/10554";
import { n as _$$n, s as _$$s } from "../905/875063";
import { q } from "../905/796201";
import { Y } from "../905/344937";
import { fe } from "../905/272080";
import { UC, PN } from "../905/54385";
import { P1, fE } from "../figma_app/809727";
var $$h2 = (e => (e[e.FIGMA = FFileType.DESIGN] = "FIGMA", e[e.FIGJAM = FFileType.WHITEBOARD] = "FIGJAM", e[e.SLIDES = FFileType.SLIDES] = "SLIDES", e[e.SITES = FFileType.SITES] = "SITES", e[e.COOPER = FFileType.COOPER] = "COOPER", e[e.FIGMAKE = FFileType.FIGMAKE] = "FIGMAKE", e))($$h2 || {});
let $$g5 = z.object({
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
  thumbnail_guid: z.string().nullable()
});
let $$f3 = z.object({
  id: z.string(),
  versions: z.record($$g5),
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
  related_content: M(z.lazy(() => Ip.ignore($$f3))).optional(),
  verification_status: z.nativeEnum(FUserVerificationStatusType).optional(),
  commenting_is_restricted: z.boolean().optional(),
  monetization_status: z.nativeEnum(UC).nullish(),
  community_resource_payment: fe.optional(),
  support_contact: z.string().nullish(),
  published_site_url: z.string().nullish(),
  library_key: z.custom().optional(),
  third_party_m10n_status: z.nativeEnum(PN).nullish()
}).and(xK).and(_$$n).and(Y).and(q);
export function $$_7(e) {
  if (!e) return null;
  let t = e.current_hub_file_version_id;
  if (!e.current_hub_file_version_id) return null;
  let i = e.versions[t];
  return i?.name ?? null;
}
export function $$A0(e) {
  if (!e) return null;
  let t = e.versions[e.current_hub_file_version_id];
  return {
    id: e.id,
    unpublishedAt: e.unpublished_at ? new Date(e.unpublished_at) : null,
    profile: {
      id: e.publisher.id,
      entityType: e.publisher.entity_type
    },
    verificationStatus: e.verification_status || FUserVerificationStatusType.VERIFIED,
    currentHubFileVersion: {
      id: t.id,
      createdAt: new Date(t.created_at)
    },
    publishingStatus: e.publishing_status,
    libraryKey: e.library_key ?? "",
    publishingStatusUpdatedAt: null,
    publishedByUser: null
  };
}
export var $$y6 = (e => (e[e.USER_UPLOADED = 0] = "USER_UPLOADED", e[e.USER_CANVAS = 1] = "USER_CANVAS", e[e.DEFAULT_CANVAS = 2] = "DEFAULT_CANVAS", e))($$y6 || {});
export function $$b1(e) {
  if (!e) return null;
  let t = e.currentHubFileVersion;
  let i = {};
  t && (i[t.id] = {
    id: t.id,
    hub_file_id: t.hubFileId ?? "",
    name: t.name,
    version: t.version,
    release_notes: t.releaseNotes,
    creator_policy: t.creatorPolicy,
    description: t.description,
    created_at: t.createdAt.toISOString(),
    valid_prototype: t.validPrototype,
    thumbnail_guid: t.thumbnailGuid
  });
  let n = e.hubFileMonetizedResourceMetadata;
  return {
    id: e.id,
    badges: e.badges.map(e => I(e.badgeType)),
    publishing_status: e.publishingStatus,
    verification_status: e.verificationStatus,
    unpublished_at: e.unpublishedAt?.toISOString() ?? null,
    current_hub_file_version_id: e.currentHubFileVersionId ?? "",
    thumbnail_url: e.thumbnailUrl ?? "",
    viewer_mode: e.viewerMode,
    community_publishers: $$v4(e)?.community_publishers ?? {
      accepted: []
    },
    creator: {
      id: e.publishedByUser?.id ?? "",
      handle: e.publishedByUser?.handle ?? "",
      img_url: e.publishedByUser?.imgUrl ?? "",
      description: e.publishedByUser?.description ?? ""
    },
    view_count: e.viewCount,
    like_count: e.likeCount,
    duplicate_count: e.duplicateCount,
    versions: i,
    ...(n ? {
      monetized_resource_metadata: {
        id: n.id,
        price: n.price,
        is_subscription: n.isSubscription ?? !1
      }
    } : {})
  };
}
export function $$v4(e) {
  if (!e || !e.communityPublishers) return null;
  let t = {
    accepted: []
  };
  e.publishingStatus === FPublicationStatusType.DELISTED || e.publishingStatus === FPublicationStatusType.DELISTED_CREATOR_STRIPE_DISABLED || e.communityPublishers.forEach(e => {
    if (!e.profile) return;
    let i = {
      id: e.profile.id,
      badges: e.profile.badges.map(e => I(e.badgeType)),
      name: e.profile.name,
      profile_handle: e.profile.profileHandle,
      img_url: e.profile.imgUrl ?? void 0,
      img_urls: e.profile.imgUrls,
      current_user_is_following: e.profile.currentUserIsFollowing,
      current_user_is_followed: e.profile.currentUserIsFollowed,
      entity_type: function (e) {
        switch (e) {
          case "user":
            return o1.USER;
          case "team":
            return o1.TEAM;
          case "org":
            return o1.ORG;
          default:
            throw Error(`Failed to convert string to CommunityProfileEntityType str:${e}`);
        }
      }(e.profile.entityType),
      primary_user_id: e.profile.primaryUserId,
      location: e.profile.location,
      follower_count: e.profile.followerCount,
      following_count: e.profile.followingCount,
      isPending: e.isPending,
      description: e.profile.description,
      is_restricted_by_current_user: !1
    };
    e.role === FPublisherType.CREATOR && (e.isPending ? (t.pending || (t.pending = []), t.pending.push(i)) : t.accepted.push(i));
  });
  return {
    community_publishers: t
  };
}
function I(e) {
  switch (e) {
    case "figma_partner":
      return _$$s.FIGMA_PARTNER;
    case "trusted":
      return _$$s.TRUSTED;
    case "creator_fund":
      return _$$s.CREATOR_FUND;
    case "award_2023":
      return _$$s.AWARD_2023;
    default:
      throw Error(`Failed to convert string to CommunityBadges enum str:${e}`);
  }
}
export const B4 = $$A0;
export const Jd = $$b1;
export const LE = $$h2;
export const NS = $$f3;
export const Se = $$v4;
export const V_ = $$g5;
export const mN = $$y6;
export const oA = $$_7; 
