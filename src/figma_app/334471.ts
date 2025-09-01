import { useMemo } from "react";
import { d6 } from "../figma_app/687776";
import { HH } from "../figma_app/828186";
import { FFileType } from "../figma_app/191312";
import { oz } from "../905/561485";
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
    }), HH()) {
      let t = FFileType.COOPER;
      n.push({
        editorType: t,
        canCreate: u(e, t)
      });
    }
    if (oz() && t) {
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
  return !!e && d6(e, t);
}
export const h = $$c0;