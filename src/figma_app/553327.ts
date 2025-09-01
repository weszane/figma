import { m1T } from "../figma_app/763686";
import { R } from "../905/103090";
import { uQ } from "../figma_app/311375";
import { l7 } from "../figma_app/88239";
import { Ku } from "../figma_app/678782";
import { Fk } from "../figma_app/167249";
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
  } = Fk((e, t) => {
    let r = e?.get(t ?? "");
    return {
      nodeType: r?.type,
      isSymbol: r?.type === "SYMBOL" || r?.isStateGroup || r?.type === "INSTANCE"
    };
  }, r);
  let c = R(e => e.mirror.appModel.activeCanvasEditModeType);
  let u = l7();
  return !!r && (c === m1T.DEV_HANDOFF || c === m1T.DEV_HANDOFF_HISTORY || u) && ("FRAME" === nodeType || isSymbol || "SECTION" === nodeType);
}
export const i = $$c0;
export const s = $$d1;