import { xb, S9 } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { $D } from "../905/11";
import { L } from "../905/178090";
import { vt } from "../figma_app/306946";
import { Uo } from "../figma_app/354658";
import { TX } from "../figma_app/255679";
import { FTemplateCategoryType, FPublicationStatusType, FFileType } from "../figma_app/191312";
import { n as _$$n } from "../905/79930";
import { U, vt as _$$vt, xQ, I0, m3 } from "../figma_app/45218";
import { LE as _$$LE } from "../905/71785";
import { l$ } from "../figma_app/275462";
export function $$m15(e) {
  return $$L32(e) || $$P4(e) ? e.resource_type : U(e) ? _$$vt.HUB_FILE : xQ(e) ? _$$vt.WIDGET : I0(e) ? _$$vt.PLUGIN : void xb(e);
}
export function $$g20(e) {
  return U(e) ? $$W25(e.viewer_mode) : xQ(e) ? vt.WIDGET : I0(e) ? vt.PLUGIN : void xb(e);
}
export function $$f3(e) {
  return $$D16(e) ? e.resource_type === vt.UI_KIT && TX(e.content.hub_file?.id) : U(e) && e.viewer_mode === FTemplateCategoryType.LIBRARY && TX(e.id);
}
export function $$E22(e) {
  return $$D16(e) ? e.resource_type === vt.SLIDE_TEMPLATE : U(e) && e.viewer_mode === FTemplateCategoryType.SLIDE_TEMPLATE;
}
export function $$y10(e) {
  return $$D16(e) ? e.resource_type === vt.PROTOTYPE : U(e) && e.viewer_mode === FTemplateCategoryType.PROTOTYPE;
}
export function $$b9(e) {
  return e.resource_type === vt.COOPER_TEMPLATE_ASSET;
}
export function $$T31(e) {
  return $$L32(e) ? e.resource_type === vt.COOPER_TEMPLATE_FILE : U(e) && e.viewer_mode === FTemplateCategoryType.COOPER_TEMPLATE_FILE;
}
export function $$I0(e) {
  return $$L32(e) ? e.resource_type === vt.WIDGET : xQ(e);
}
export function $$S17(e) {
  return $$D16(e) ? e.resource_type === vt.PLUGIN : I0(e);
}
export function $$v24(e) {
  return $$S17(e) || $$I0(e);
}
export function $$A29(e) {
  if (!$$v24(e)) return !1;
  let t = $$B1(e);
  return !!t && !!t.publishing_status && [FPublicationStatusType.ORG_PRIVATE, FPublicationStatusType.ORG_PRIVATE_PENDING_PUBLIC].includes(t.publishing_status);
}
export function $$x18(e) {
  return $$D16(e) ? e.resource_type === vt.SITE_TEMPLATE : U(e) && e.viewer_mode === FTemplateCategoryType.SITE_TEMPLATE;
}
export function $$N34(e) {
  return $$D16(e) ? e.resource_type === vt.FIGMAKE_TEMPLATE : U(e) && e.viewer_mode === FTemplateCategoryType.FIGMAKE_TEMPLATE;
}
export function $$C12(e) {
  return void 0 !== $$F23(e);
}
export function $$w11(e, t) {
  return $$D16(e) ? e.resource_type === vt.FIGJAM_TEMPLATE && m3(t) : U(e) && e.viewer_mode === FTemplateCategoryType.WHITEBOARD && m3(e);
}
function O(e) {
  return !!e.publishing_status && [FPublicationStatusType.ORG_PRIVATE, FPublicationStatusType.ORG_PRIVATE_PENDING_PUBLIC].includes(e.publishing_status);
}
export function $$R5(e) {
  return !("resource_type" in e);
}
export function $$L32(e) {
  return "resource_type" in e;
}
export function $$P4(e) {
  return "resource_type" in e && O(e);
}
export function $$D16(e) {
  return "content" in e;
}
export function $$k14(e) {
  return "content" in e && O(e);
}
export function $$M28(e) {
  return e.content.hub_file ? e.content.hub_file : e.content.plugin ? e.content.plugin : e.content.widget ? e.content.widget : void $D(_$$e.COMMUNITY, Error("Resource has no content"), {
    extra: {
      resourceId: e.id
    }
  });
}
export function $$F23(e) {
  return null == e ? void 0 : $$D16(e) ? e.content.hub_file : U(e) ? e : void 0;
}
export function $$j21(e) {
  return $$D16(e) ? e.content.plugin : I0(e) ? e : void 0;
}
export function $$U30(e) {
  return $$D16(e) ? e.content.widget : xQ(e) ? e : void 0;
}
export function $$B1(e) {
  return $$S17(e) ? $$j21(e) : $$I0(e) ? $$U30(e) : void 0;
}
export function $$G2(e) {
  return e.content.template;
}
export function $$V27(e) {
  return "libraryKey" in e;
}
export function $$H7(e) {
  switch (e) {
    case vt.FIGJAM_TEMPLATE:
      return FFileType.WHITEBOARD;
    case vt.SLIDE_TEMPLATE:
      return FFileType.SLIDES;
    case vt.COOPER_TEMPLATE_FILE:
      return FFileType.COOPER;
    case vt.SITE_TEMPLATE:
      return FFileType.SITES;
    case vt.FIGMAKE_TEMPLATE:
      return FFileType.FIGMAKE;
    case vt.DESIGN_TEMPLATE:
      return FFileType.DESIGN;
    case vt.PLUGIN:
    case vt.WIDGET:
    case vt.COOPER_TEMPLATE_ASSET:
    case vt.PROTOTYPE:
    case vt.UI_KIT:
      return null;
    default:
      return S9(e, null);
  }
}
export function $$z26(e) {
  switch (e) {
    case vt.FIGJAM_TEMPLATE:
      return _$$LE.FIGJAM;
    case vt.SLIDE_TEMPLATE:
      return _$$LE.SLIDES;
    case vt.SITE_TEMPLATE:
    case vt.SITE_TEMPLATE:
      return _$$LE.SITES;
    case vt.COOPER_TEMPLATE_FILE:
      return _$$LE.COOPER;
    case vt.FIGMAKE_TEMPLATE:
      return _$$LE.FIGMAKE;
    case vt.PROTOTYPE:
    case vt.DESIGN_TEMPLATE:
    case vt.UI_KIT:
    default:
      return _$$LE.FIGMA;
  }
}
export function $$W25(e) {
  switch (e) {
    case FTemplateCategoryType.WHITEBOARD:
      return vt.FIGJAM_TEMPLATE;
    case FTemplateCategoryType.CANVAS:
      return vt.DESIGN_TEMPLATE;
    case FTemplateCategoryType.PROTOTYPE:
      return vt.PROTOTYPE;
    case FTemplateCategoryType.SLIDE_TEMPLATE:
      return vt.SLIDE_TEMPLATE;
    case FTemplateCategoryType.LIBRARY:
      return vt.UI_KIT;
    case FTemplateCategoryType.SITE_TEMPLATE:
      return vt.SITE_TEMPLATE;
    case FTemplateCategoryType.COOPER_TEMPLATE_FILE:
      return vt.COOPER_TEMPLATE_FILE;
    case FTemplateCategoryType.FIGMAKE_TEMPLATE:
      return vt.FIGMAKE_TEMPLATE;
    default:
      xb(e);
  }
}
export function $$K13(e) {
  switch (e.editorType) {
    case FFileType.COOPER:
      return vt.COOPER_TEMPLATE_FILE;
    case FFileType.WHITEBOARD:
      return vt.FIGJAM_TEMPLATE;
    case FFileType.SLIDES:
      return vt.SLIDE_TEMPLATE;
    case FFileType.SITES:
      return vt.SITE_TEMPLATE;
    case FFileType.FIGMAKE:
      return vt.FIGMAKE_TEMPLATE;
    case null:
    case FFileType.DESIGN:
      return vt.DESIGN_TEMPLATE;
    default:
      return S9(e.editorType, vt.DESIGN_TEMPLATE);
  }
}
export function $$Y8(e) {
  if ($$D16(e) && $$T31(e)) {
    let t = e.content.template;
    if (t) {
      let r = {
        id: t.id,
        fileKey: t.file_key,
        description: t.description,
        name: t.name,
        coverImagePath: null,
        thumbnailUrl: e.thumbnail_url ?? "",
        hasCustomThumbnail: "USER_UPLOADED" === t.thumbnail_guid,
        publishedByUserNullable: {
          handle: e.creator.handle,
          imgUrl: e.creator.img_url
        },
        file: {
          signedThumbnailUrl: e.thumbnail_url ?? null,
          checkpointClientMeta: null,
          editorType: FFileType.COOPER
        },
        libraryKey: t.library_key,
        signedThumbnailUrl: e.thumbnail_url ?? null,
        checkpointClientMeta: null,
        editorType: FFileType.COOPER
      };
      return {
        type: _$$n.TeamTemplateLg,
        template: r
      };
    }
  }
}
export let $$$19 = {
  [_$$vt.HUB_FILE]: Uo.FILE,
  [_$$vt.PLUGIN]: Uo.PLUGIN,
  [_$$vt.WIDGET]: Uo.WIDGET
};
export function $$X33() {
  return function () {
    let e = [vt.DESIGN_TEMPLATE, vt.FIGJAM_TEMPLATE, vt.PLUGIN, vt.WIDGET, vt.UI_KIT, vt.SLIDE_TEMPLATE, vt.PROTOTYPE, vt.SITE_TEMPLATE, vt.COOPER_TEMPLATE_FILE, vt.COOPER_TEMPLATE_ASSET];
    l$() && e.push(vt.FIGMAKE_TEMPLATE);
    return e;
  }().filter(e => e !== vt.COOPER_TEMPLATE_ASSET);
}
export function $$q6(e) {
  switch (e) {
    case vt.PLUGIN:
      return L.BrowseResourceTypes.PLUGINS;
    case vt.WIDGET:
      return L.BrowseResourceTypes.WIDGETS;
    default:
      return L.BrowseResourceTypes.FILES;
  }
}
export const $3 = $$I0;
export const $9 = $$B1;
export const B2 = $$G2;
export const BQ = $$f3;
export const Gk = $$P4;
export const Gl = $$R5;
export const HX = $$q6;
export const J2 = $$H7;
export const Ky = $$Y8;
export const LE = $$b9;
export const Lz = $$y10;
export const PI = $$w11;
export const Qc = $$C12;
export const Qd = $$K13;
export const Tv = $$k14;
export const Vm = $$m15;
export const XW = $$D16;
export const YI = $$S17;
export const ZA = $$x18;
export const Zl = $$$19;
export const bc = $$g20;
export const cD = $$j21;
export const cX = $$E22;
export const eO = $$F23;
export const g0 = $$v24;
export const jB = $$W25;
export const kz = $$z26;
export const o_ = $$V27;
export const qY = $$M28;
export const rZ = $$A29;
export const rg = $$U30;
export const tv = $$T31;
export const ws = $$L32;
export const yX = $$X33;
export const zL = $$N34;