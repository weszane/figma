import { throwTypeError } from "../figma_app/465776";
import { PrototypingTsApi, PresentationValidationStatus } from "../figma_app/763686";
import { xf } from "../figma_app/416935";
import { customHistory } from "../905/612521";
import { Gc } from "../905/63728";
import { isValidUrl } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { N6 } from "../figma_app/471982";
import { vf, Yp, mZ, F8 } from "../figma_app/808294";
import { Tn, gO, Ii, xw, vC } from "../figma_app/599979";
import { FTemplateCategoryType, FPublicationStatusType, FFileType } from "../figma_app/191312";
import { d as _$$d } from "../905/44199";
import { o1 } from "../figma_app/10554";
import { PreviewMode } from "../figma_app/707808";
import { Rs } from "../figma_app/761870";
import { Hc, b as _$$b, Yp as _$$Yp, IZ } from "../figma_app/740025";
import { X$ } from "../905/612685";
let b = {
  id: "",
  hub_file_id: "",
  fig_file_version_id: "",
  name: "",
  version: "",
  release_notes: "",
  description: "",
  creator_policy: "",
  created_at: "",
  valid_prototype: !0,
  thumbnail_guid: null
};
let T = {
  id: "",
  category_id: null,
  creator: {
    id: "",
    handle: "",
    img_url: ""
  },
  publisher: {
    is_restricted_by_current_user: !1,
    id: "",
    name: "",
    img_url: "",
    img_urls: {},
    profile_handle: "",
    primary_user_id: null,
    current_user_is_following: !1,
    current_user_is_followed: !1,
    location: null,
    follower_count: 0,
    following_count: 0,
    entity_type: o1.USER,
    badges: [],
    description: ""
  },
  community_publishers: {
    accepted: [],
    pending: []
  },
  versions: {},
  current_hub_file_version_id: "",
  redirect_canvas_url: "",
  thumbnail_url: "",
  created_at: "",
  unpublished_at: null,
  duplicate_count: 0,
  like_count: 0,
  view_count: 0,
  comment_count: 0,
  viewer_mode: FTemplateCategoryType.CANVAS,
  scaling_mode: null,
  realtime_token: "",
  client_meta: "",
  thumbnail_is_set: !1,
  comments_setting: null,
  publishing_status: FPublicationStatusType.APPROVED_PUBLIC,
  badges: []
};
var $$I12 = (e => (e.KEY = "is-community-duplicate", e.VALUE = "1", e))($$I12 || {});
var $$S2 = (e => (e.CURRENT_FILE = "currentFile", e.NEW_FILE = "newFile", e))($$S2 || {});
export function $$v4(e) {
  switch (e) {
    case "currentFile":
    default:
      return getI18nString("browse_templates_modal.add_template");
    case "newFile":
      return getI18nString("browse_templates_modal.use_template");
  }
}
export function $$A1(e, t) {
  return Hc(e, t, T);
}
export function $$x6(e, t) {
  let r = t || e.current_hub_file_version_id;
  return Hc(r, e.versions, b);
}
export function $$N15(e) {
  if (!e) return FTemplateCategoryType.CANVAS;
  switch (e) {
    case FFileType.DESIGN:
      return FTemplateCategoryType.CANVAS;
    case FFileType.WHITEBOARD:
      return FTemplateCategoryType.WHITEBOARD;
    case FFileType.SLIDES:
      return FTemplateCategoryType.SLIDE_TEMPLATE;
    case FFileType.SITES:
      return FTemplateCategoryType.SITE_TEMPLATE;
    case FFileType.COOPER:
      return FTemplateCategoryType.COOPER_TEMPLATE_FILE;
    case FFileType.FIGMAKE:
      return FTemplateCategoryType.FIGMAKE_TEMPLATE;
    default:
      throwTypeError(e);
  }
}
export function $$C11(e, t, r, n) {
  let a;
  let s = e.figFilePublishedAsHubFile[t];
  let o = $$A1(s, e.hubFiles);
  let l = $$x6(o);
  let m = _$$b;
  let g = e.fileByKey[t];
  !n && !r && (e.authedActiveCommunityProfile?.team_id || e.authedActiveCommunityProfile?.org_id) && (a = Tn(e.authedActiveCommunityProfile));
  let y = gO(o, g, e, a);
  let b = r ? o.viewer_mode : $$N15(g.editor_type);
  !r && o.viewer_mode === FTemplateCategoryType.PROTOTYPE && n && PrototypingTsApi?.firstPagePrototypeStatus() === PresentationValidationStatus.VALID && (b = FTemplateCategoryType.PROTOTYPE);
  let T = {
    ...Rs(),
    tokens: (o.community_publishers ? [...o.community_publishers.accepted, ...(o.community_publishers.pending || [])] : []).reduce((t, r) => {
      let n = e.authedProfilesById[r.id];
      return Ii(n, y) ? t : t.concat([{
        state: _$$d.OK,
        content: r
      }]);
    }, [])
  };
  return {
    name: l.name || (g.name === getI18nString("fullscreen.fullscreen_view_selector.untitled") ? "" : g.name),
    description: l.description || m.description,
    categoryId: o.category_id,
    creatorPolicy: l.creator_policy || m.creatorPolicy,
    tags: s && o?.tags ? o.tags : g?.editor_type === "whiteboard" ? ["figjam"] : void 0,
    tagsV2: o.tags_v2 && Object.keys(o.tags_v2),
    viewerMode: b,
    scalingMode: o.scaling_mode,
    author: y,
    publishers: T,
    commentsSetting: o.comments_setting || m.commentsSetting,
    blockPublishingOnToS: xw(e),
    price: vf(o.monetized_resource_metadata),
    isPaid: !!o.monetized_resource_metadata,
    supportContact: o.support_contact || e.user?.email,
    carouselMedia: N6(o),
    coverImageCarouselMediaId: o.cover_image_carousel_media_id
  };
}
export function $$w10(e, t) {
  return e ? t ? Yp(t) ? t < mZ ? getI18nString("community.seller.paid_resource_minimum_err") : getI18nString("community.seller.paid_resource_maximum_err") : F8(t) ? getI18nString("community.seller.prices_must_follow_format") : void 0 : getI18nString("community.publishing.price_is_required_for_paid_resources") : void 0;
}
export function $$O16(e) {
  let t = _$$Yp(e || null).length;
  return 0 === t ? getI18nString("community.publishing.name_must_not_be_empty") : t < 4 ? getI18nString("community.publishing.name_must_be_4_characters_long") : t > 100 ? getI18nString("community.publishing.name_must_be_at_most_100_characters_long") : void 0;
}
export function $$R14(e) {
  if (_$$Yp(e || null).length > 1e4) return getI18nString("community.publishing.description_must_be_at_most_10000_characters_long");
}
export function $$L3(e) {
  if (_$$Yp(e || null).length > 1e4) return getI18nString("community.publishing.creator_policy_must_be_at_most_10000_characters_long");
}
export function $$P7(e, t) {
  return e && !t ? getI18nString("community.publishing.support_contact_must_not_be_empty") : !t || xf(t) || isValidUrl(t) ? void 0 : getI18nString("community.publishing.support_contact_must_be_a_valid_email_or_url");
}
export function $$D9(e) {
  if (!e) return getI18nString("community.publishing.category_cant_be_empty");
}
export function $$k8(e) {
  let t = {
    name: $$O16(e.name),
    description: $$R14(e.description),
    creatorPolicy: $$L3(e.creatorPolicy)
  };
  e.publisherIds && (t.publisherIds = IZ(e.publisherIds.length) || void 0);
  t.carouselMedia = vC(e.carouselMedia);
  t.categoryId = $$D9(e.categoryId);
  let r = "isPaid" in e && !!e.isPaid;
  t.price = $$w10(r, e.price);
  t.supportContact = $$P7(r, e.supportContact);
  Object.keys(t).forEach(e => !t[e] && delete t[e]);
  return t;
}
export function $$M13(e) {
  return e === PreviewMode.FULLSCREEN || e === PreviewMode.FULLSCREEN_WITH_COMMENTS;
}
export function $$F0(e) {
  return !!e && !e.unpublished_at;
}
export function $$j17(e) {
  return !!e && e.publishing_status === FPublicationStatusType.APPROVED_PUBLIC;
}
export function $$U5(e) {
  let t = X$(e);
  return Gc(e => {
    e?.preventDefault();
    customHistory.redirect(t, "_blank");
  });
}
export const HF = $$F0;
export const M3 = $$A1;
export const RD = $$S2;
export const Rj = $$L3;
export const Ve = $$v4;
export const Vz = $$U5;
export const a6 = $$x6;
export const al = $$P7;
export const bH = $$k8;
export const cU = $$D9;
export const cp = $$w10;
export const ow = $$C11;
export const pt = $$I12;
export const t0 = $$M13;
export const vK = $$R14;
export const x0 = $$N15;
export const yS = $$O16;
export const zv = $$j17;
