import { B6 } from "../vendor/130505";
import { throwTypeError } from "../figma_app/465776";
import { sha1Hex } from "../905/125019";
import { getFeatureFlags } from "../905/601108";
import o from "../vendor/128080";
import { customHistory } from "../905/612521";
import { N as _$$N } from "../figma_app/469468";
import { fs } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { k as _$$k } from "../905/22009";
import { L as _$$L } from "../905/178090";
import { co, $2 } from "../figma_app/701107";
import { vt } from "../figma_app/306946";
import { qL, xn } from "../905/934145";
import { Xu, Uo, UF } from "../figma_app/354658";
import { YW } from "../figma_app/350203";
import { Dm as _$$Dm } from "../figma_app/8833";
import { FTemplateCategoryType, FFileType } from "../figma_app/191312";
import { vt as _$$vt, H0, U, I0, xQ, bD } from "../figma_app/45218";
import { LE } from "../905/71785";
import { o1 } from "../figma_app/10554";
import { createEmptyAddress } from "../figma_app/831101";
import { ManifestEditorType } from "../figma_app/155287";
import { Z4 } from "../figma_app/809727";
import { z4, P5 } from "../figma_app/175992";
import { C as _$$C } from "../905/237873";
import { CS } from "../figma_app/275462";
import { S as _$$S } from "../905/872825";
import { po, iY } from "../figma_app/598412";
import { Vm, Lz, eO, XW } from "../figma_app/427318";
import { communityViewerMaxWidth } from "../figma_app/786175";
var l = o;
let $$k4 = new RegExp(/^[\w.]{0,30}$/);
let $$M8 = new RegExp(/^\w{0,15}$/);
export function $$F0(e) {
  return "current_hub_file_version_id" in e ? e.versions[e.current_hub_file_version_id] : "current_plugin_version_id" in e && e.current_plugin_version_id ? e.versions[e.current_plugin_version_id] : void 0;
}
export function $$j32(e) {
  return $$F0(e);
}
export let $$U25 = () => po(customHistory.location.pathname).remainingPath.split("/").slice(1);
export function $$B36(e) {
  let t = B6(new URL(e).pathname, {
    path: Xu.path
  });
  if (t) return {
    resourceId: t.params.resourceId,
    apiResourceType: t.params.apiResourceType
  };
}
export function $$G9(e) {
  switch (e) {
    case FTemplateCategoryType.SLIDE_TEMPLATE:
      return LE.SLIDES;
    case FTemplateCategoryType.WHITEBOARD:
      return LE.FIGJAM;
    case FTemplateCategoryType.SITE_TEMPLATE:
      return LE.SITES;
    case FTemplateCategoryType.COOPER_TEMPLATE_FILE:
      return LE.COOPER;
    case FTemplateCategoryType.FIGMAKE_TEMPLATE:
      return LE.FIGMAKE;
    case FTemplateCategoryType.CANVAS:
    case FTemplateCategoryType.PROTOTYPE:
    default:
      return LE.FIGMA;
  }
}
export function $$V34(e) {
  switch (e) {
    case FFileType.DESIGN:
      return LE.FIGMA;
    case FFileType.WHITEBOARD:
      return LE.FIGJAM;
    case FFileType.SLIDES:
      return LE.SLIDES;
    case FFileType.SITES:
      return LE.SITES;
    case FFileType.COOPER:
      return null;
    case FFileType.FIGMAKE:
      return LE.FIGMAKE;
    default:
      throwTypeError(e);
  }
}
export function $$H31(e, t) {
  t.resourceType !== _$$L.BrowseResourceTypes.MIXED && (e = e.filter(e => t.resourceType === _$$L.BrowseResourceTypes.FILES ? Vm(e) === _$$vt.HUB_FILE : t.resourceType === _$$L.BrowseResourceTypes.PLUGINS ? Vm(e) === _$$vt.PLUGIN : t.resourceType === _$$L.BrowseResourceTypes.WIDGETS ? Vm(e) === _$$vt.WIDGET : void 0));
  t.price === _$$C.PAID ? e = e.filter(e => H0(e)) : t.price === _$$C.FREE && (e = e.filter(e => !H0(e)));
  t.editor_type && t.editor_type !== _$$k.Editors.ALL && (e = e.filter(e => function (e, t) {
    if ($$W13(e)) return !!(t === _$$k.Editors.FIGMA && $$z26.includes(e.viewer_mode)) || t === _$$k.Editors.FIGJAM && e.viewer_mode === FTemplateCategoryType.WHITEBOARD || t === _$$k.Editors.PROTOTYPE && e.viewer_mode === FTemplateCategoryType.PROTOTYPE || t === _$$k.Editors.SLIDES && e.viewer_mode === FTemplateCategoryType.SLIDE_TEMPLATE || t === _$$k.Editors.SITES && e.viewer_mode === FTemplateCategoryType.SITE_TEMPLATE || t === _$$k.Editors.COOPER && e.viewer_mode === FTemplateCategoryType.COOPER_TEMPLATE_FILE || t === _$$k.Editors.FIGMAKE && e.viewer_mode === FTemplateCategoryType.FIGMAKE_TEMPLATE;
    {
      let r = e.current_plugin_version_id;
      if (!e.versions || !r) return !1;
      let n = e.versions[r];
      if (!n) return !1;
      if (t === _$$k.Editors.DEV_MODE && n.manifest.editorType?.includes(ManifestEditorType.DEV)) return !0;
      let i = _$$S(t, ManifestEditorType);
      return (i && n.manifest.editorType?.includes(i)) ?? !1;
    }
  }(e, t.editor_type)));
  return e;
}
export let $$z26 = [FTemplateCategoryType.CANVAS, FTemplateCategoryType.PROTOTYPE, FTemplateCategoryType.LIBRARY];
export function $$W13(e) {
  return "viewer_mode" in e;
}
export function $$K33(e) {
  return $$W13(e) && e.viewer_mode === FTemplateCategoryType.LIBRARY;
}
export function $$Y24(e) {
  return null !== e && "viewer_mode" in e && e.viewer_mode === FTemplateCategoryType.SLIDE_TEMPLATE;
}
export function $$$6(e) {
  return function (e) {
    switch (e) {
      case _$$vt.HUB_FILE:
        return Uo.FILE;
      case _$$vt.PLUGIN:
        return Uo.PLUGIN;
      case _$$vt.WIDGET:
        return Uo.WIDGET;
    }
  }(Vm(e));
}
export function $$X1(e) {
  switch (e.resource_type) {
    case vt.DESIGN_TEMPLATE:
    case vt.UI_KIT:
    case vt.SLIDE_TEMPLATE:
    case vt.SITE_TEMPLATE:
    case vt.PROTOTYPE:
    case vt.FIGJAM_TEMPLATE:
    case vt.COOPER_TEMPLATE_FILE:
    case vt.COOPER_TEMPLATE_ASSET:
    case vt.FIGMAKE_TEMPLATE:
      return Uo.FILE;
    case vt.PLUGIN:
      return Uo.PLUGIN;
    case vt.WIDGET:
      return Uo.WIDGET;
    default:
      throwTypeError(e.resource_type);
  }
}
export function $$q35(e, {
  plural: t = !1
} = {}) {
  let r = Vm(e);
  switch (r) {
    case _$$vt.HUB_FILE:
      return t ? UF.FILE : Uo.FILE;
    case _$$vt.PLUGIN:
      return t ? UF.PLUGIN : Uo.PLUGIN;
    case _$$vt.WIDGET:
      return t ? UF.WIDGET : Uo.WIDGET;
    default:
      throwTypeError(r);
  }
}
var J = (e => (e.HUB_FILES = "hub_files", e.PLUGINS = "plugins", e.WIDGETS = "widgets", e))(J || {});
export function $$Z19({
  resource: e
}) {
  let t = $$X1(e);
  let r = e.name;
  return function ({
    path: e,
    id: t,
    name: r
  }) {
    let n = fs(r) ?? "";
    return t ? `${iY()}/${e}/${t}${"" === n ? "" : "/"}${n}` : void 0;
  }({
    path: t,
    id: $$B36(e.rdp_url)?.resourceId,
    name: r
  });
}
export function $$Q22({
  resource: e
}) {
  return $$ee17({
    path: $$$6(e),
    id: e.id,
    name: $$F0(e)?.name ?? ""
  });
}
export function $$ee17({
  path: e,
  id: t,
  name: r
}) {
  let n = fs(r) ?? "";
  return `${iY()}/${e}/${t}${"" === n ? "" : "/"}${n}`;
}
export function $$et5(e) {
  return `${location.origin}${$$Q22({
    resource: e
  })}`;
}
export function $$er29(e) {
  var t = document.createElement("input");
  t.style.position = "fixed";
  t.style.top = "-1000px";
  t.value = e;
  t.classList.add(_$$Dm);
  document.body.appendChild(t);
  t.select();
  t.focus();
  document.execCommand("copy");
  t.parentNode.removeChild(t);
}
export let $$en20 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
export function $$ei7(e, t) {
  return t?.entity_type !== o1.USER || t?.id === e;
}
export function $$ea2(e) {
  return e.query ? getI18nString("community.search_results_tab_title", {
    searchQuery: e.query
  }) : getI18nString("community.browser_home_tab_title");
}
export function $$es23(e) {
  return !!e && e?.stripe_account_status && z4(e.stripe_account_status) >= z4(P5.ACCEPTED);
}
export function $$eo28(e) {
  return !!e?.associated_users?.find(e => e.can_sell_on_community);
}
export function $$el18(e) {
  return e?.stripe_account_status && e.stripe_account_status !== P5.NONE && e.stripe_account_status !== P5.ACCEPTED;
}
export function $$ed38(e) {
  return e ? "100%" : Math.min(window.innerWidth, parseInt(communityViewerMaxWidth));
}
export function $$ec37(e) {
  if (Lz(e)) return Z4.EMBED;
  let t = eO(e);
  return t && !t.thumbnail_is_set ? Z4.EMBED : Z4.CURATED_IMAGE;
}
export function $$eu21(e, t, r) {
  return e + co <= t && r > $2;
}
export function $$ep3(e) {
  return l()(e, createEmptyAddress());
}
export function $$e_27() {
  let e = _$$N(`(max-width: ${YW - 1}px)`);
  let t = customHistory.location.pathname.startsWith("/community");
  return e && t;
}
export async function $$eh10(e) {
  try {
    let t = await fetch(e);
    let r = new Uint8Array(await t.arrayBuffer());
    return {
      type: "image",
      url: e,
      sha1: sha1Hex(r),
      buffer: r
    };
  } catch {
    return null;
  }
}
export function $$em12(e) {
  let t = {};
  let r = XW(e) ? e.carousel_media.images : e.carousel_media_urls;
  let n = XW(e) ? e.carousel_media.videos : "carousel_videos" in e && e?.carousel_videos;
  r && Object.entries(r).forEach(([e, r]) => {
    t[e] = {
      ...r,
      type: "image"
    };
  });
  n && Object.entries(n).forEach(([e, r]) => {
    t[e] = {
      ...r,
      type: "video"
    };
  });
  return Object.entries(t).sort(([e], [t]) => parseInt(e) - parseInt(t)).map(([e, t]) => t);
}
export function $$eg16(e) {
  return !!getFeatureFlags().cmty_rdp_creator_nudges && (U(e) && e.viewer_mode !== FTemplateCategoryType.PROTOTYPE ? 1 === Object.keys(e.carousel_media_urls ?? {}).length : !!(I0(e) || xQ(e)) && 0 === Object.keys(e.carousel_videos ?? {}).length);
}
export function $$ef11(e, {
  pluralized: t,
  capitalized: r
} = {}) {
  return function (e, {
    pluralized: t,
    capitalized: r
  } = {}) {
    return ey((() => {
      switch (e) {
        case _$$vt.PLUGIN:
          return "plugin";
        case _$$vt.WIDGET:
          return "widget";
        case "comment":
          return "comment";
        case _$$vt.HUB_FILE:
          return "hub file";
        default:
          throw Error("Unsupported Type");
      }
    })(), {
      pluralized: t,
      capitalized: r
    });
  }(Vm(e), {
    pluralized: t,
    capitalized: r
  });
}
export function $$eE30(e, {
  pluralized: t,
  capitalized: r
} = {}) {
  return e ? ey(bD.WIDGET, {
    pluralized: t,
    capitalized: r
  }) : ey(bD.PLUGIN, {
    pluralized: t,
    capitalized: r
  });
}
function ey(e, {
  pluralized: t,
  capitalized: r
} = {}) {
  e += t ? "s" : "";
  r && void 0 !== e[0] && (e = e[0].toUpperCase() + e.substr(1));
  return e;
}
export function $$eb14(e) {
  let t = e.current_hub_file_version_id ? e.current_hub_file_version_id : e.current_plugin_version_id || "";
  return e.versions[t]?.created_at || "";
}
export function $$eT15(e, t, r, n) {
  let i = CS();
  let a = {
    profileHandle: e
  };
  return t && i && r ? new qL({
    ...r,
    ...a
  }, n) : new xn(a);
}
export const $l = $$F0;
export const A7 = $$X1;
export const Ag = $$ea2;
export const Cg = $$ep3;
export const Co = $$k4;
export const DV = $$et5;
export const Dl = $$$6;
export const Dm = $$ei7;
export const HD = $$M8;
export const JJ = $$G9;
export const KG = $$eh10;
export const KH = $$ef11;
export const N6 = $$em12;
export const Qo = $$W13;
export const Qy = $$eb14;
export const RE = $$eT15;
export const U0 = $$eg16;
export const UI = $$ee17;
export const Uu = $$el18;
export const VJ = $$Z19;
export const ZD = $$en20;
export const _m = $$eu21;
export const _t = $$Q22;
export const af = $$es23;
export const cX = $$Y24;
export const eD = $$U25;
export const iX = $$z26;
export const jl = $$e_27;
export const kf = $$eo28;
export const lW = $$er29;
export const nF = $$eE30;
export const o7 = $$H31;
export const qD = $$j32;
export const r7 = $$K33;
export const rk = $$V34;
export const ss = $$q35;
export const tv = $$B36;
export const z$ = $$ec37;
export const zS = $$ed38;