import { desktopAPIInstance } from "../figma_app/876459";
import { isInteractionOrEvalMode } from "../figma_app/897289";
import { selectViewAction } from "../905/929976";
import { getFullscreenPreloadTiming } from "../figma_app/298277";
export function $$o0() {
  return !(desktopAPIInstance || isInteractionOrEvalMode()) && "never" !== getFullscreenPreloadTiming();
}
export let $$l1 = e => t => function (i) {
  let n = e.getState();
  if (selectViewAction.matches(i)) {
    if ("prototype" !== n.selectedView.view && "prototype" === i.payload.view && $$o0()) return;
    t(i);
    return;
  }
  return t(i);
};
export const q = $$o0;
export const v = $$l1;