import { throwTypeError } from "../figma_app/465776";
import { unsetSymbol } from "../905/17894";
import { editorUtilities } from "../905/22009";
import { nT } from "../905/448740";
import { allCategoriesQuery } from "../figma_app/188671";
import { FTemplateCategoryType, FFileType } from "../figma_app/191312";
import { liveStoreInstance } from "../905/713695";
import { isWidgetOrPlugin } from "../figma_app/45218";
import { ManifestEditorType } from "../figma_app/155287";
export function $$p3(e, t) {
  if (t) switch (t) {
    case FTemplateCategoryType.CANVAS:
      return editorUtilities.Editors.FIGMA;
    case FTemplateCategoryType.PROTOTYPE:
      return editorUtilities.Editors.PROTOTYPE;
    case FTemplateCategoryType.WHITEBOARD:
      return editorUtilities.Editors.FIGJAM;
    case FTemplateCategoryType.SLIDE_TEMPLATE:
      return editorUtilities.Editors.SLIDES;
    case FTemplateCategoryType.SITE_TEMPLATE:
      return editorUtilities.Editors.SITES;
    case FTemplateCategoryType.COOPER_TEMPLATE_FILE:
      return editorUtilities.Editors.COOPER;
    case FTemplateCategoryType.FIGMAKE_TEMPLATE:
      return editorUtilities.Editors.FIGMAKE;
    case FTemplateCategoryType.LIBRARY:
      return;
    case FTemplateCategoryType.FIGMAKE_TEMPLATE:
      return editorUtilities.Editors.FIGMAKE;
    default:
      throwTypeError(t);
  }
  if (e) switch (e) {
    case FFileType.DESIGN:
    case ManifestEditorType.FIGMA:
      return editorUtilities.Editors.FIGMA;
    case FFileType.WHITEBOARD:
    case ManifestEditorType.FIGJAM:
      return editorUtilities.Editors.FIGJAM;
    case FFileType.SLIDES:
    case ManifestEditorType.SLIDES:
      return editorUtilities.Editors.SLIDES;
    case FFileType.SITES:
    case ManifestEditorType.SITES:
      return editorUtilities.Editors.SITES;
    case ManifestEditorType.INSPECT:
    case ManifestEditorType.DEV:
      return editorUtilities.Editors.DEV_MODE;
    case FFileType.COOPER:
      return editorUtilities.Editors.COOPER;
    case FFileType.FIGMAKE:
      return editorUtilities.Editors.FIGMAKE;
    case ManifestEditorType.BUZZ:
      return editorUtilities.Editors.COOPER;
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
  let l = existingResourceContent && isWidgetOrPlugin(existingResourceContent) ? existingResourceContent : void 0;
  (localExtension || l) && (t = nT(localExtension, l)?.[0]);
  let d = figFile?.editor_type ?? void 0;
  return allCategoriesQuery($$p3(d || t, currentViewerMode));
}
export async function $$h1(...e) {
  return await liveStoreInstance.fetch($$m0(...e));
}
let $$g2 = {
  displayName: "CategoryField",
  fetchInitialValue: async ({
    figFile: e,
    existingResourceContent: t,
    viewerModeField: i,
    localExtension: n
  }) => {
    if (t?.category_id) return i?.currentValue === unsetSymbol ? unsetSymbol : (await $$h1({
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
    if (t?.currentValue === unsetSymbol) return;
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
  }) => t?.currentValue === unsetSymbol ? unsetSymbol : (await $$h1({
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