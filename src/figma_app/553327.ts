import { LayoutTabType } from "../figma_app/763686";
import { selectWithShallowEqual } from "../905/103090";
import { uQ } from "../figma_app/311375";
import { useIsFullscreenOverview } from "../figma_app/88239";
import { Ku } from "../figma_app/678782";
import { useDeepEqualSceneValue } from "../figma_app/167249";
export function $$d1(e = !0) {
  let t = Ku(["add-selection-ready-status", "remove-selection-status"]);
  return t["add-selection-ready-status"] || t["remove-selection-status"] && !e;
}
export function $$c0(e) {
  let t = uQ();
  let r = e ?? t;
  let {
    nodeType,
    isSymbol
  } = useDeepEqualSceneValue((e, t) => {
    let r = e?.get(t ?? "");
    return {
      nodeType: r?.type,
      isSymbol: r?.type === "SYMBOL" || r?.isStateGroup || r?.type === "INSTANCE"
    };
  }, r);
  let c = selectWithShallowEqual(e => e.mirror.appModel.activeCanvasEditModeType);
  let u = useIsFullscreenOverview();
  return !!r && (c === LayoutTabType.DEV_HANDOFF || c === LayoutTabType.DEV_HANDOFF_HISTORY || u) && ("FRAME" === nodeType || isSymbol || "SECTION" === nodeType);
}
export const i = $$c0;
export const s = $$d1;