import { useMemo } from "react";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { r } from "../905/620668";
import { FFileType, FProductAccessType } from "../figma_app/191312";
import { GX } from "../figma_app/300692";
import { nT, wN } from "../figma_app/53721";
import { Pe, FW } from "../figma_app/155287";
let u = r();
export function $$m0(e, t, r, s) {
  if (!getFeatureFlags().ext_fix_try_editor_types) return function (e, t, r) {
    let s = e.manifest.editorType;
    if (e.playground_fig_file?.editor_type) {
      let t = e.playground_fig_file?.editor_type;
      return t === FFileType.DESIGN && Pe(s) ? nT.DevHandoff : wN(t);
    }
    let i = u ? wN(u) : null;
    return i && s?.includes(GX(i)) ? i : Pe(s) ? nT.DevHandoff : s?.includes(FW.FIGMA) ? nT.Design : s?.includes(FW.SLIDES) ? nT.Slides : s?.includes(FW.BUZZ) ? nT.Cooper : s?.includes(FW.FIGMA) && s?.includes(FW.FIGJAM) ? (t ? nT.Design : r) ?? wN(u) : s?.includes(FW.FIGJAM) ? nT.Whiteboard : nT.Design;
  }(r, t?.figjamDisabledAt != null, s);
  let o = r.manifest.editorType ?? [];
  if (r.playground_fig_file?.editor_type) {
    let t = r.playground_fig_file?.editor_type;
    switch (t) {
      case FFileType.DESIGN:
        if (Pe(o) && e?.licenseTypes?.includes(FProductAccessType.DEV_MODE)) return nT.DevHandoff;
        if (o.includes(FW.FIGMA) && e?.licenseTypes?.includes(FProductAccessType.DESIGN)) return nT.Design;
        break;
      case FFileType.WHITEBOARD:
        if (o.includes(FW.FIGJAM) && e?.licenseTypes?.includes(FProductAccessType.WHITEBOARD)) return nT.Whiteboard;
        break;
      case FFileType.SLIDES:
        if (o.includes(FW.SLIDES) && e?.licenseTypes?.includes(FProductAccessType.SLIDES)) return nT.Slides;
        break;
      case FFileType.SITES:
        break;
      case FFileType.COOPER:
        if (o.includes(FW.BUZZ) && e?.licenseTypes?.includes(FProductAccessType.COOPER)) return nT.Cooper;
        break;
      case FFileType.FIGMAKE:
        break;
      default:
        throwTypeError(t);
    }
  }
  let m = u ? wN(u) : null;
  return m && o?.includes(GX(m)) ? m : Pe(o) && e?.licenseTypes?.includes(FProductAccessType.DEV_MODE) ? nT.DevHandoff : o?.includes(FW.FIGMA) && e?.licenseTypes?.includes(FProductAccessType.DESIGN) ? nT.Design : o?.includes(FW.SLIDES) && e?.licenseTypes?.includes(FProductAccessType.SLIDES) ? nT.Slides : o?.includes(FW.FIGJAM) && e?.licenseTypes?.includes(FProductAccessType.WHITEBOARD) ? nT.Whiteboard : o?.includes(FW.BUZZ) && e?.licenseTypes?.includes(FProductAccessType.COOPER) ? nT.Cooper : s ?? wN(u);
}
export function $$_1(e, t, r, i) {
  return useMemo(() => $$m0(e, t, r, i), [r, e, t, i]);
}
export const H = $$m0;
export const o = $$_1;