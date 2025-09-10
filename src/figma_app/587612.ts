import { useMemo, useContext, useCallback } from "react";
import { n3, VariableStyleId } from "../905/859698";
import { rgbToNormalized } from "../figma_app/273493";
import { Fullscreen, ItemType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { defaultSessionLocalIDString } from "../905/871411";
import { blackColor } from "../figma_app/191804";
import { F } from "../905/989956";
import { yM } from "../905/640017";
import { lk } from "../905/182453";
import { GV } from "../figma_app/159296";
import { sd } from "../figma_app/509285";
export function $$m0() {
  let e = yM().colorText;
  return useMemo(() => {
    if (e) {
      let t = F.parse(e);
      if (t.a > 0) return rgbToNormalized(t);
    }
    return rgbToNormalized(blackColor);
  }, [e]);
}
export function $$g1(e) {
  let t = useContext(lk);
  return useCallback(() => {
    if (e?.current) {
      permissionScopeHandler.user("slides-create-style", () => {
        Fullscreen?.applyStyleToSelection("inheritTextStyleKey", defaultSessionLocalIDString, !0);
        Fullscreen?.selectStyle(n3.INVALID, VariableStyleId.INVALID);
      });
      let r = e.current.getBoundingClientRect();
      t({
        styleType: "TEXT",
        inheritStyleKeyField: "inheritTextStyleKey",
        rowLeft: r.left,
        rowTop: r.top
      });
    } else console.warn("expected containerRef to be non-null");
  }, [e, t]);
}
export function $$f2() {
  let e = sd();
  let t = GV();
  let r = t[ItemType.TYPE_ITEM] || t[ItemType.SLIDE_NUMBER];
  return !!(e && r);
}
export const it = $$m0;
export const oD = $$g1;
export const vK = $$f2;