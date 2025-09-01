import { useMemo } from "react";
import { xb } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { r as _$$r } from "../905/620668";
import { FFileType, FProductAccessType } from "../figma_app/191312";
import { GX } from "../figma_app/300692";
import { nT, wN } from "../figma_app/53721";
import { Pe, FW } from "../figma_app/155287";
let _ = _$$r();
export function $$g0(e, t, n, i) {
  if (!getFeatureFlags().ext_fix_try_editor_types) return function (e, t, n) {
    let i = e.manifest.editorType;
    if (e.playground_fig_file?.editor_type) {
      let t = e.playground_fig_file?.editor_type;
      return t === FFileType.DESIGN && Pe(i) ? nT.DevHandoff : wN(t);
    }
    let l = _ ? wN(_) : null;
    return l && i?.includes(GX(l)) ? l : Pe(i) ? nT.DevHandoff : i?.includes(FW.FIGMA) ? nT.Design : i?.includes(FW.SLIDES) ? nT.Slides : i?.includes(FW.BUZZ) ? nT.Cooper : i?.includes(FW.FIGMA) && i?.includes(FW.FIGJAM) ? (t ? nT.Design : n) ?? wN(_) : i?.includes(FW.FIGJAM) ? nT.Whiteboard : nT.Design;
  }(n, t?.figjamDisabledAt != null, i);
  let r = n.manifest.editorType ?? [];
  if (n.playground_fig_file?.editor_type) {
    let t = n.playground_fig_file?.editor_type;
    switch (t) {
      case FFileType.DESIGN:
        if (Pe(r) && e?.licenseTypes?.includes(FProductAccessType.DEV_MODE)) return nT.DevHandoff;
        if (r.includes(FW.FIGMA) && e?.licenseTypes?.includes(FProductAccessType.DESIGN)) return nT.Design;
        break;
      case FFileType.WHITEBOARD:
        if (r.includes(FW.FIGJAM) && e?.licenseTypes?.includes(FProductAccessType.WHITEBOARD)) return nT.Whiteboard;
        break;
      case FFileType.SLIDES:
        if (r.includes(FW.SLIDES) && e?.licenseTypes?.includes(FProductAccessType.SLIDES)) return nT.Slides;
        break;
      case FFileType.SITES:
        break;
      case FFileType.COOPER:
        if (r.includes(FW.BUZZ) && e?.licenseTypes?.includes(FProductAccessType.COOPER)) return nT.Cooper;
        break;
      case FFileType.FIGMAKE:
        break;
      default:
        xb(t);
    }
  }
  let g = _ ? wN(_) : null;
  return g && r?.includes(GX(g)) ? g : Pe(r) && e?.licenseTypes?.includes(FProductAccessType.DEV_MODE) ? nT.DevHandoff : r?.includes(FW.FIGMA) && e?.licenseTypes?.includes(FProductAccessType.DESIGN) ? nT.Design : r?.includes(FW.SLIDES) && e?.licenseTypes?.includes(FProductAccessType.SLIDES) ? nT.Slides : r?.includes(FW.FIGJAM) && e?.licenseTypes?.includes(FProductAccessType.WHITEBOARD) ? nT.Whiteboard : r?.includes(FW.BUZZ) && e?.licenseTypes?.includes(FProductAccessType.COOPER) ? nT.Cooper : i ?? wN(_);
}
export function $$p1(e, t, n, l) {
  return useMemo(() => $$g0(e, t, n, l), [n, e, t, l]);
}
export const H = $$g0;
export const o = $$p1;