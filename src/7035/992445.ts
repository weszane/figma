import { useMemo } from "react";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { r as _$$r } from "../905/620668";
import { FFileType, FProductAccessType } from "../figma_app/191312";
import { GX } from "../figma_app/300692";
import { FEditorType, mapFileTypeToEditorType } from "../figma_app/53721";
import { Pe, FW } from "../figma_app/155287";
let _ = _$$r();
export function $$g0(e, t, n, i) {
  if (!getFeatureFlags().ext_fix_try_editor_types) return function (e, t, n) {
    let i = e.manifest.editorType;
    if (e.playground_fig_file?.editor_type) {
      let t = e.playground_fig_file?.editor_type;
      return t === FFileType.DESIGN && Pe(i) ? FEditorType.DevHandoff : mapFileTypeToEditorType(t);
    }
    let l = _ ? mapFileTypeToEditorType(_) : null;
    return l && i?.includes(GX(l)) ? l : Pe(i) ? FEditorType.DevHandoff : i?.includes(FW.FIGMA) ? FEditorType.Design : i?.includes(FW.SLIDES) ? FEditorType.Slides : i?.includes(FW.BUZZ) ? FEditorType.Cooper : i?.includes(FW.FIGMA) && i?.includes(FW.FIGJAM) ? (t ? FEditorType.Design : n) ?? mapFileTypeToEditorType(_) : i?.includes(FW.FIGJAM) ? FEditorType.Whiteboard : FEditorType.Design;
  }(n, t?.figjamDisabledAt != null, i);
  let r = n.manifest.editorType ?? [];
  if (n.playground_fig_file?.editor_type) {
    let t = n.playground_fig_file?.editor_type;
    switch (t) {
      case FFileType.DESIGN:
        if (Pe(r) && e?.licenseTypes?.includes(FProductAccessType.DEV_MODE)) return FEditorType.DevHandoff;
        if (r.includes(FW.FIGMA) && e?.licenseTypes?.includes(FProductAccessType.DESIGN)) return FEditorType.Design;
        break;
      case FFileType.WHITEBOARD:
        if (r.includes(FW.FIGJAM) && e?.licenseTypes?.includes(FProductAccessType.WHITEBOARD)) return FEditorType.Whiteboard;
        break;
      case FFileType.SLIDES:
        if (r.includes(FW.SLIDES) && e?.licenseTypes?.includes(FProductAccessType.SLIDES)) return FEditorType.Slides;
        break;
      case FFileType.SITES:
        break;
      case FFileType.COOPER:
        if (r.includes(FW.BUZZ) && e?.licenseTypes?.includes(FProductAccessType.COOPER)) return FEditorType.Cooper;
        break;
      case FFileType.FIGMAKE:
        break;
      default:
        throwTypeError(t);
    }
  }
  let g = _ ? mapFileTypeToEditorType(_) : null;
  return g && r?.includes(GX(g)) ? g : Pe(r) && e?.licenseTypes?.includes(FProductAccessType.DEV_MODE) ? FEditorType.DevHandoff : r?.includes(FW.FIGMA) && e?.licenseTypes?.includes(FProductAccessType.DESIGN) ? FEditorType.Design : r?.includes(FW.SLIDES) && e?.licenseTypes?.includes(FProductAccessType.SLIDES) ? FEditorType.Slides : r?.includes(FW.FIGJAM) && e?.licenseTypes?.includes(FProductAccessType.WHITEBOARD) ? FEditorType.Whiteboard : r?.includes(FW.BUZZ) && e?.licenseTypes?.includes(FProductAccessType.COOPER) ? FEditorType.Cooper : i ?? mapFileTypeToEditorType(_);
}
export function $$p1(e, t, n, l) {
  return useMemo(() => $$g0(e, t, n, l), [n, e, t, l]);
}
export const H = $$g0;
export const o = $$p1;