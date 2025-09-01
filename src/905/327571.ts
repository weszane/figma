import { getFeatureFlags } from "../905/601108";
import { debugState } from "../905/407919";
import { FW } from "../figma_app/155287";
import { yb } from "../figma_app/455620";
export function $$o3(e) {
  switch (e) {
    case "design":
    case "design_and_whiteboard":
    case "figma":
    case "sites":
    default:
      return FW.FIGMA;
    case "whiteboard":
    case "figjam":
      return FW.FIGJAM;
    case "design_and_inspect":
    case "inspect":
    case "dev":
      return FW.DEV;
    case "slides":
      return FW.SLIDES;
    case "buzz":
      return getFeatureFlags().buzz_plugins_publishing ? FW.BUZZ : FW.FIGMA;
  }
}
export function $$l0(e) {
  let t;
  let i = e["try-plugin-id"];
  if (i && "string" == typeof i && $$c2(i)) {
    try {
      let i = e["try-plugin-params"];
      let n = decodeURI(i);
      (!(t = JSON.parse(n ?? "{}")) || "object" != typeof t || Array.isArray(t)) && (t = void 0);
    } catch {}
    return t;
  }
}
export function $$d1(e) {
  if (!$$c2(e)) return;
  let t = debugState.getState();
  if (!t || "fullscreen" !== t.selectedView.view) return;
  let {
    tryPluginParams,
    tryPluginId
  } = t.selectedView;
  if (tryPluginId === e) return tryPluginParams;
}
export function $$c2(e) {
  return yb(e);
}
export const Ex = $$l0;
export const TP = $$d1;
export const qW = $$c2;
export const zO = $$o3;