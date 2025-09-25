import { useContext } from "react";
import { x } from "../905/179739";
import { ExtensionFeatureKey, AssetTabType } from "../905/946805";
import { wg, ZD, Qx } from "../905/742325";
export function $$o1() {
  let {
    activeTabId
  } = useContext(wg);
  let {
    activeSearchTag
  } = useContext(ZD);
  return $$l0(activeTabId, activeSearchTag);
}
export function $$l0(e, t) {
  if (e === Qx.COMMUNITY) return e;
  if (e === Qx.PLAN_FILE_ASSETS) return t || e;
  let i = x();
  return i === ExtensionFeatureKey.ASSETS_TAB_DETAIL_VIEW ? i : i === AssetTabType.ASSETS ? "Consolidated Assets Tab" : "";
}
export const D = $$l0;
export const m = $$o1;