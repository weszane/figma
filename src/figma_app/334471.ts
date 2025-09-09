import { useMemo } from "react";
import { canCreateFileType } from "../figma_app/687776";
import { isCooperFeatureEnabled } from "../figma_app/828186";
import { FFileType } from "../figma_app/191312";
import { isSitesFeatureEnabled } from "../905/561485";
import { s as _$$s } from "../905/761565";
import { k } from "../figma_app/831857";
export function $$c0(e) {
  let t = _$$s();
  let r = k(e?.canCreateFigmakeFileWithReasons ?? null);
  return useMemo(() => {
    let n = [{
      editorType: FFileType.DESIGN,
      canCreate: u(e, FFileType.DESIGN)
    }];
    if (n.push({
      editorType: FFileType.WHITEBOARD,
      canCreate: u(e, FFileType.WHITEBOARD)
    }), n.push({
      editorType: FFileType.SLIDES,
      canCreate: u(e, FFileType.SLIDES)
    }), isCooperFeatureEnabled()) {
      let t = FFileType.COOPER;
      n.push({
        editorType: t,
        canCreate: u(e, t)
      });
    }
    if (isSitesFeatureEnabled() && t) {
      let t = FFileType.SITES;
      n.push({
        editorType: t,
        canCreate: u(e, t)
      });
    }
    if (r) {
      let t = FFileType.FIGMAKE;
      n.push({
        editorType: t,
        canCreate: u(e, t)
      });
    }
    return n;
  }, [e, t, r]);
}
function u(e, t) {
  return !!e && canCreateFileType(e, t);
}
export const h = $$c0;