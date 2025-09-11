import { AppStateTsApi } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { browserCapabilities } from "../905/409121";
export let $$n1;
class o {
  isUI3() {
    return AppStateTsApi?.uiState().isUI3.getCopy() ?? !1;
  }
  showUI3Colors() {
    return AppStateTsApi?.uiState().showUI3Colors.getCopy() ?? !1;
  }
  showUI3ColorsInitialValue() {
    browserCapabilities.isIpad();
    return !!getFeatureFlags().figjam_ui3_color_palette;
  }
}
export function $$l0() {
  $$n1 = new o();
}
export const fT = $$l0;
export const rG = $$n1;