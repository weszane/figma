import { throwTypeError, returnSecond } from "../figma_app/465776";
import i from "../vendor/197638";
import { trackEventAnalytics } from "../905/449184";
import { renderI18nText } from "../905/303541";
import { k } from "../905/22009";
import { L } from "../905/178090";
import { vt, U$, Dm, GT } from "../figma_app/306946";
import { FTemplateCategoryType, FPublicationStatusType } from "../figma_app/191312";
import { hasClientMeta, isPlugin, isWidget } from "../figma_app/45218";
import { SpaceAccessType } from "../figma_app/162807";
import { qD } from "../figma_app/471982";
import { l$ } from "../figma_app/275462";
import { XW, Gl } from "../figma_app/427318";
var a = i;
export function $$f16(e) {
  return XW(e) ? e.description || null : qD(e)?.description;
}
export function $$E2(e) {
  return Gl(e) ? qD(e)?.name : e.name;
}
export function $$y6(e, t) {
  switch (e) {
    case vt.WIDGET:
    case vt.PLUGIN:
      if (t) return renderI18nText("community.using.try_in");
      return renderI18nText("community.using.open_in");
    case vt.FIGJAM_TEMPLATE:
      return renderI18nText("community.duplicate.open_in_figjam");
    case vt.SLIDE_TEMPLATE:
    case vt.SITE_TEMPLATE:
    case vt.COOPER_TEMPLATE_FILE:
    case vt.COOPER_TEMPLATE_ASSET:
      return renderI18nText("community.duplicate.use_template");
    case vt.FIGMAKE_TEMPLATE:
      return renderI18nText("community.duplicate.remix");
    case vt.UI_KIT:
    case vt.DESIGN_TEMPLATE:
    case vt.PROTOTYPE:
      return renderI18nText("community.duplicate.open_in_figma");
    default:
      throwTypeError(e);
  }
}
function b(e) {
  let t = document.createElement("div");
  t.innerHTML = a().sanitize(e);
  return t.innerText;
}
export function $$T1(e, t, r) {
  if (e.tagline) return e.tagline;
  if (!e.description) return "";
  let n = (t = t || b)(e.description);
  return r ? function (e) {
    let t = e?.match(/[^.!?\r\n]+[.!?\r\n]+/);
    return t ? t[0].trim() : e ?? "";
  }(n) : n;
}
export function $$I12(e) {
  return "user_count" in e ? e.user_count ?? 0 : "unique_run_count" in e ? e.unique_run_count : "duplicate_count" in e ? e.duplicate_count : 0;
}
export function $$S8(e) {
  if (XW(e)) switch (e.resource_type) {
    case vt.FIGJAM_TEMPLATE:
      return renderI18nText("community.detail_view.figjam_board");
    case vt.UI_KIT:
    case vt.DESIGN_TEMPLATE:
      return renderI18nText("community.detail_view.design_file");
    case vt.PROTOTYPE:
      return renderI18nText("community.detail_view.prototype");
    case vt.SLIDE_TEMPLATE:
      return renderI18nText("community.detail_view.slide_template");
    case vt.WIDGET:
      return renderI18nText("community.detail_view.widget");
    case vt.PLUGIN:
      return renderI18nText("community.detail_view.plugin");
    case vt.SITE_TEMPLATE:
      return renderI18nText("community.detail_view.site_template");
    case vt.COOPER_TEMPLATE_FILE:
    case vt.COOPER_TEMPLATE_ASSET:
      return renderI18nText("community.detail_view.buzz_template");
    case vt.FIGMAKE_TEMPLATE:
      return renderI18nText("community.detail_view.figmake_template");
    default:
      return returnSecond(e.resource_type, "");
  } else {
    if (hasClientMeta(e)) switch (e.viewer_mode) {
      case FTemplateCategoryType.WHITEBOARD:
        return renderI18nText("community.detail_view.figjam_board");
      case FTemplateCategoryType.CANVAS:
      case FTemplateCategoryType.LIBRARY:
        return renderI18nText("community.detail_view.design_file");
      case FTemplateCategoryType.PROTOTYPE:
        return renderI18nText("community.detail_view.prototype");
      case FTemplateCategoryType.SLIDE_TEMPLATE:
        return renderI18nText("community.detail_view.slide_template");
      case FTemplateCategoryType.SITE_TEMPLATE:
        return renderI18nText("community.detail_view.site_template");
      case FTemplateCategoryType.COOPER_TEMPLATE_FILE:
        return renderI18nText("community.detail_view.buzz_template");
      case FTemplateCategoryType.FIGMAKE_TEMPLATE:
        return renderI18nText("community.detail_view.figmake_template");
      default:
        return returnSecond(e.viewer_mode, "");
    }
    return isPlugin(e) ? renderI18nText("community.detail_view.plugin") : isWidget(e) ? renderI18nText("community.detail_view.widget") : renderI18nText("community.detail_view.design_file");
  }
}
export function $$v0(e) {
  return !!e.publishing_status && [FPublicationStatusType.PENDING_PUBLIC, FPublicationStatusType.PENDING_USER_VISUAL_COMPLIANCE, FPublicationStatusType.ORG_PRIVATE_PENDING_PUBLIC].includes(e.publishing_status);
}
export function $$A7(e) {
  return !!e.publishing_status && [FPublicationStatusType.PENDING_PUBLIC, FPublicationStatusType.PENDING_USER_VISUAL_COMPLIANCE].includes(e.publishing_status);
}
export function $$x4(e) {
  return e.publishing_status === FPublicationStatusType.APPROVED_PUBLIC;
}
export function $$N3(e) {
  return !!e.publishing_status && [FPublicationStatusType.DELISTED, FPublicationStatusType.DELISTED_CREATOR_STRIPE_DISABLED].includes(e.publishing_status);
}
export function $$C10(e) {
  return e.publishing_status === FPublicationStatusType.BLOCKED;
}
export function $$w5(e, t) {
  return (t.community_publishers?.accepted ?? []).some(t => t.id === e);
}
export function $$O11(e) {
  return e.community_publishers.accepted.some(e => "apple" === e.profile_handle.toLowerCase());
}
export function $$R14(e) {
  return e.community_publishers.accepted.some(e => "figma" === e.profile_handle.toLowerCase());
}
export function $$L13(e, t, r, n, i, a = "feed") {
  return {
    trackingEventName: "Community Resource Clicked",
    trackingProperties: {
      resource_type: e,
      community_resource_id: t,
      subView: a,
      scope: SpaceAccessType.COMMUNITY,
      index: r,
      searchSessionId: n,
      search_query_id: i
    }
  };
}
export function $$P9(...e) {
  let {
    trackingEventName,
    trackingProperties
  } = $$L13(...e);
  trackEventAnalytics(trackingEventName, trackingProperties);
}
export function $$D15(e, t) {
  if (t === k.Editors.PROTOTYPE) return [vt.PROTOTYPE];
  let r = Array.from(U$);
  l$() && r.push(vt.FIGMAKE_TEMPLATE);
  let i = Dm;
  let a = GT;
  switch (e) {
    case void 0:
    case L.BrowseResourceTypes.MIXED:
      return [...r, ...i, ...a];
    case L.BrowseResourceTypes.FILES:
      return r;
    case L.BrowseResourceTypes.PLUGINS:
      return i;
    case L.BrowseResourceTypes.WIDGETS:
      return a;
    default:
      return returnSecond(e, []);
  }
}
export const AC = $$v0;
export const G8 = $$T1;
export const K2 = $$E2;
export const Pg = $$N3;
export const Ul = $$x4;
export const XU = $$w5;
export const X_ = $$y6;
export const Y5 = $$A7;
export const c8 = $$S8;
export const cB = $$P9;
export const lT = $$C10;
export const mA = $$O11;
export const mk = $$I12;
export const rZ = $$L13;
export const sB = $$R14;
export const yl = $$D15;
export const zY = $$f16;