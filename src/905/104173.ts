import { throwTypeError } from "../figma_app/465776";
import { A } from "../905/17894";
import { k } from "../905/22009";
import { nT } from "../905/448740";
import { iB } from "../figma_app/188671";
import { FTemplateCategoryType, FFileType } from "../figma_app/191312";
import { M4 } from "../905/713695";
import { mr } from "../figma_app/45218";
import { FW } from "../figma_app/155287";
export function $$p3(e, t) {
  if (t) switch (t) {
    case FTemplateCategoryType.CANVAS:
      return k.Editors.FIGMA;
    case FTemplateCategoryType.PROTOTYPE:
      return k.Editors.PROTOTYPE;
    case FTemplateCategoryType.WHITEBOARD:
      return k.Editors.FIGJAM;
    case FTemplateCategoryType.SLIDE_TEMPLATE:
      return k.Editors.SLIDES;
    case FTemplateCategoryType.SITE_TEMPLATE:
      return k.Editors.SITES;
    case FTemplateCategoryType.COOPER_TEMPLATE_FILE:
      return k.Editors.COOPER;
    case FTemplateCategoryType.FIGMAKE_TEMPLATE:
      return k.Editors.FIGMAKE;
    case FTemplateCategoryType.LIBRARY:
      return;
    case FTemplateCategoryType.FIGMAKE_TEMPLATE:
      return k.Editors.FIGMAKE;
    default:
      throwTypeError(t);
  }
  if (e) switch (e) {
    case FFileType.DESIGN:
    case FW.FIGMA:
      return k.Editors.FIGMA;
    case FFileType.WHITEBOARD:
    case FW.FIGJAM:
      return k.Editors.FIGJAM;
    case FFileType.SLIDES:
    case FW.SLIDES:
      return k.Editors.SLIDES;
    case FFileType.SITES:
    case FW.SITES:
      return k.Editors.SITES;
    case FW.INSPECT:
    case FW.DEV:
      return k.Editors.DEV_MODE;
    case FFileType.COOPER:
      return k.Editors.COOPER;
    case FFileType.FIGMAKE:
      return k.Editors.FIGMAKE;
    case FW.BUZZ:
      return k.Editors.COOPER;
    default:
      throwTypeError(e);
  }
}
export function $$m0(e) {
  let t;
  let {
    figFile,
    currentViewerMode,
    existingResourceContent,
    localExtension
  } = e;
  let l = existingResourceContent && mr(existingResourceContent) ? existingResourceContent : void 0;
  (localExtension || l) && (t = nT(localExtension, l)?.[0]);
  let d = figFile?.editor_type ?? void 0;
  return iB($$p3(d || t, currentViewerMode));
}
export async function $$h1(...e) {
  return await M4.fetch($$m0(...e));
}
let $$g2 = {
  displayName: "CategoryField",
  fetchInitialValue: async ({
    figFile: e,
    existingResourceContent: t,
    viewerModeField: i,
    localExtension: n
  }) => {
    if (t?.category_id) return i?.currentValue === A ? A : (await $$h1({
      figFile: e,
      currentViewerMode: i && i.currentValue,
      existingResourceContent: t,
      localExtension: n
    })).find(e => e.id === t.category_id);
  },
  validate: async ({
    figFile: e,
    viewerModeField: t,
    existingResourceContent: i,
    localExtension: n
  }, a) => {
    if (!a) return [{
      key: "MISSING_CATEGORY",
      data: {}
    }];
    if (t?.currentValue === A) return;
    let s = await $$h1({
      figFile: e,
      currentViewerMode: t && t.currentValue,
      existingResourceContent: i,
      localExtension: n
    });
    return s.some(e => e.id === a.id) ? s.some(e => e.parent_category_id === a.id) ? [{
      key: "CATEGORY_WITH_SUBCATEGORIES",
      data: {
        category: a
      }
    }] : void 0 : [{
      key: "INVALID_CATEGORY",
      data: {
        category: a
      }
    }];
  },
  canSet: () => !0,
  isEqual: (e, t) => e?.id === t?.id
};
let $$f4 = {
  ...$$g2,
  displayName: "HardcodedCategoryField",
  fetchInitialValue: async ({
    urlSlug: e,
    viewerModeField: t
  }) => t?.currentValue === A ? A : (await $$h1({
    figFile: void 0,
    existingResourceContent: void 0,
    currentViewerMode: t && t.currentValue,
    localExtension: void 0
  })).find(t => t.url_slug === e),
  canSet: () => !1
};
export const LK = $$m0;
export const Tn = $$h1;
export const Z9 = $$g2;
export const gH = $$p3;
export const zX = $$f4;