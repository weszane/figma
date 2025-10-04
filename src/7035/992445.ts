import { useMemo } from "react";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { getLastUsedEditorType } from "../905/620668";
import { FFileType, FProductAccessType } from "../figma_app/191312";
import { convertEditorTypeToFileType } from "../figma_app/300692";
import { FEditorType, mapFileTypeToEditorType } from "../figma_app/53721";
import { isDevOrInspect, ManifestEditorType } from "../figma_app/155287";
let _ = getLastUsedEditorType();
export function $$g0(e, t, n, i) {
  if (!getFeatureFlags().ext_fix_try_editor_types) return function (e, t, n) {
    let i = e.manifest.editorType;
    if (e.playground_fig_file?.editor_type) {
      let t = e.playground_fig_file?.editor_type;
      return t === FFileType.DESIGN && isDevOrInspect(i) ? FEditorType.DevHandoff : mapFileTypeToEditorType(t);
    }
    let l = _ ? mapFileTypeToEditorType(_) : null;
    return l && i?.includes(convertEditorTypeToFileType(l)) ? l : isDevOrInspect(i) ? FEditorType.DevHandoff : i?.includes(ManifestEditorType.FIGMA) ? FEditorType.Design : i?.includes(ManifestEditorType.SLIDES) ? FEditorType.Slides : i?.includes(ManifestEditorType.BUZZ) ? FEditorType.Cooper : i?.includes(ManifestEditorType.FIGMA) && i?.includes(ManifestEditorType.FIGJAM) ? (t ? FEditorType.Design : n) ?? mapFileTypeToEditorType(_) : i?.includes(ManifestEditorType.FIGJAM) ? FEditorType.Whiteboard : FEditorType.Design;
  }(n, t?.figjamDisabledAt != null, i);
  let r = n.manifest.editorType ?? [];
  if (n.playground_fig_file?.editor_type) {
    let t = n.playground_fig_file?.editor_type;
    switch (t) {
      case FFileType.DESIGN:
        if (isDevOrInspect(r) && e?.licenseTypes?.includes(FProductAccessType.DEV_MODE)) return FEditorType.DevHandoff;
        if (r.includes(ManifestEditorType.FIGMA) && e?.licenseTypes?.includes(FProductAccessType.DESIGN)) return FEditorType.Design;
        break;
      case FFileType.WHITEBOARD:
        if (r.includes(ManifestEditorType.FIGJAM) && e?.licenseTypes?.includes(FProductAccessType.WHITEBOARD)) return FEditorType.Whiteboard;
        break;
      case FFileType.SLIDES:
        if (r.includes(ManifestEditorType.SLIDES) && e?.licenseTypes?.includes(FProductAccessType.SLIDES)) return FEditorType.Slides;
        break;
      case FFileType.SITES:
        break;
      case FFileType.COOPER:
        if (r.includes(ManifestEditorType.BUZZ) && e?.licenseTypes?.includes(FProductAccessType.COOPER)) return FEditorType.Cooper;
        break;
      case FFileType.FIGMAKE:
        break;
      default:
        throwTypeError(t);
    }
  }
  let g = _ ? mapFileTypeToEditorType(_) : null;
  return g && r?.includes(convertEditorTypeToFileType(g)) ? g : isDevOrInspect(r) && e?.licenseTypes?.includes(FProductAccessType.DEV_MODE) ? FEditorType.DevHandoff : r?.includes(ManifestEditorType.FIGMA) && e?.licenseTypes?.includes(FProductAccessType.DESIGN) ? FEditorType.Design : r?.includes(ManifestEditorType.SLIDES) && e?.licenseTypes?.includes(FProductAccessType.SLIDES) ? FEditorType.Slides : r?.includes(ManifestEditorType.FIGJAM) && e?.licenseTypes?.includes(FProductAccessType.WHITEBOARD) ? FEditorType.Whiteboard : r?.includes(ManifestEditorType.BUZZ) && e?.licenseTypes?.includes(FProductAccessType.COOPER) ? FEditorType.Cooper : i ?? mapFileTypeToEditorType(_);
}
export function $$p1(e, t, n, l) {
  return useMemo(() => $$g0(e, t, n, l), [n, e, t, l]);
}
export const H = $$g0;
export const o = $$p1;