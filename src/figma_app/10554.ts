import { z } from "src/905/239603";
import { n as _$$n } from "src/905/875063";
import { UserOrgSchema } from "src/figma_app/175992";
var $$s3 = (e => (e.RESOURCE_PAGE = "resource_page", e.EDITOR = "editor", e.UNIVERSAL_POSTING = "universal_posting", e.ADMIN = "admin", e.SITES_PUBLISH_MODAL = "sites_publish_modal", e))($$s3 || {});
var $$o1 = (e => (e[e.EDIT = 0] = "EDIT", e[e.UPLOADING = 1] = "UPLOADING", e[e.SUCCESS = 2] = "SUCCESS", e[e.FAILURE = 3] = "FAILURE", e))($$o1 || {});
let l = z.object({
  "500_500": z.string().optional(),
  "120_120": z.string().optional()
});
export var $$d5 = (e => (e.USER = "user", e.TEAM = "team", e.ORG = "org", e))($$d5 || {});
let c = z.object({
  email: z.string().optional(),
  user_id: z.string(),
  is_primary_user: z.boolean(),
  can_sell_on_community: z.boolean().optional()
});
let $$u2 = _$$n.and(z.object({
  id: z.string(),
  name: z.string(),
  profile_handle: z.string(),
  img_url: z.coerce.string().optional(),
  img_urls: l,
  current_user_is_following: z.coerce.boolean(),
  current_user_is_followed: z.coerce.boolean(),
  is_restricted_by_current_user: z.coerce.boolean(),
  entity_type: z.nativeEnum($$d5),
  primary_user_id: z.string().nullable(),
  location: z.string().nullable(),
  follower_count: z.number(),
  following_count: z.number(),
  isPending: z.boolean().optional(),
  associated_users: z.array(c).optional(),
  has_published: z.boolean().optional(),
  description: z.string().nullish()
}));
let p = z.object({
  accepted: z.array($$u2),
  pending: z.array($$u2).optional()
});
let $$_6 = z.object({
  creator: UserOrgSchema,
  publisher: $$u2,
  community_publishers: p
});
let h = UserOrgSchema.pick({
  id: !0,
  email: !0
});
let $$m0 = z.object({
  accepted: z.array(UserOrgSchema),
  pending: z.array(h).optional()
});
export var $$g4 = (e => (e.OWNER = "owner", e.PUBLISHER = "publisher", e.NONE = "none", e))($$g4 || {});
export const I7 = $$m0;
export const aP = $$o1;
export const bo = $$u2;
export const k2 = $$s3;
export const kM = $$g4;
export const o1 = $$d5;
export const xK = $$_6;
