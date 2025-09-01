import { getFeatureFlags } from "../905/601108";
import { parsePxNumber } from "../figma_app/783094";
import { Hvv, RQv } from "../figma_app/27776";
export let $$s0 = getFeatureFlags().file_browser_sidebar_row_ui ? parsePxNumber(Hvv) : parsePxNumber(RQv);
export const g = $$s0;