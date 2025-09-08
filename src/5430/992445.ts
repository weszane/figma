import { useMemo } from "react";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { r } from "../905/620668";
import { FFileType, FProductAccessType } from "../figma_app/191312";
import { convertEditorTypeToFileType } from "../figma_app/300692";
import { FEditorType, mapFileTypeToEditorType } from "../figma_app/53721";
import { isDevOrInspect, ManifestEditorType } from "../figma_app/155287";
let u = r();
export function $$m0(e, t, r, s) {
  if (!getFeatureFlags().ext_fix_try_editor_types) return function (e, t, r) {
    let s = e.manifest.editorType;
    if (e.playground_fig_file?.editor_type) {
      let t = e.playground_fig_file?.editor_type;
      return t === FFileType.DESIGN && isDevOrInspect(s) ? FEditorType.DevHandoff : mapFileTypeToEditorType(t);
    }
    let i = u ? mapFileTypeToEditorType(u) : null;
    return i && s?.includes(convertEditorTypeToFileType(i)) ? i : isDevOrInspect(s) ? FEditorType.DevHandoff : s?.includes(ManifestEditorType.FIGMA) ? FEditorType.Design : s?.includes(ManifestEditorType.SLIDES) ? FEditorType.Slides : s?.includes(ManifestEditorType.BUZZ) ? FEditorType.Cooper : s?.includes(ManifestEditorType.FIGMA) && s?.includes(ManifestEditorType.FIGJAM) ? (t ? FEditorType.Design : r) ?? mapFileTypeToEditorType(u) : s?.includes(ManifestEditorType.FIGJAM) ? FEditorType.Whiteboard : FEditorType.Design;
  }(r, t?.figjamDisabledAt != null, s);
  let o = r.manifest.editorType ?? [];
  if (r.playground_fig_file?.editor_type) {
    let t = r.playground_fig_file?.editor_type;
    switch (t) {
      case FFileType.DESIGN:
        if (isDevOrInspect(o) && e?.licenseTypes?.includes(FProductAccessType.DEV_MODE)) return FEditorType.DevHandoff;
        if (o.includes(ManifestEditorType.FIGMA) && e?.licenseTypes?.includes(FProductAccessType.DESIGN)) return FEditorType.Design;
        break;
      case FFileType.WHITEBOARD:
        if (o.includes(ManifestEditorType.FIGJAM) && e?.licenseTypes?.includes(FProductAccessType.WHITEBOARD)) return FEditorType.Whiteboard;
        break;
      case FFileType.SLIDES:
        if (o.includes(ManifestEditorType.SLIDES) && e?.licenseTypes?.includes(FProductAccessType.SLIDES)) return FEditorType.Slides;
        break;
      case FFileType.SITES:
        break;
      case FFileType.COOPER:
        if (o.includes(ManifestEditorType.BUZZ) && e?.licenseTypes?.includes(FProductAccessType.COOPER)) return FEditorType.Cooper;
        break;
      case FFileType.FIGMAKE:
        break;
      default:
        throwTypeError(t);
    }
  }
  let m = u ? mapFileTypeToEditorType(u) : null;
  return m && o?.includes(convertEditorTypeToFileType(m)) ? m : isDevOrInspect(o) && e?.licenseTypes?.includes(FProductAccessType.DEV_MODE) ? FEditorType.DevHandoff : o?.includes(ManifestEditorType.FIGMA) && e?.licenseTypes?.includes(FProductAccessType.DESIGN) ? FEditorType.Design : o?.includes(ManifestEditorType.SLIDES) && e?.licenseTypes?.includes(FProductAccessType.SLIDES) ? FEditorType.Slides : o?.includes(ManifestEditorType.FIGJAM) && e?.licenseTypes?.includes(FProductAccessType.WHITEBOARD) ? FEditorType.Whiteboard : o?.includes(ManifestEditorType.BUZZ) && e?.licenseTypes?.includes(FProductAccessType.COOPER) ? FEditorType.Cooper : s ?? mapFileTypeToEditorType(u);
}
export function $$_1(e, t, r, i) {
  return useMemo(() => $$m0(e, t, r, i), [r, e, t, i]);
}
export const H = $$m0;
export const o = $$_1;