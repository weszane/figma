import { jsx } from "react/jsx-runtime";
import { ServiceCategories as _$$e } from "../905/165054";
import { tH, H4 } from "../905/751457";
import { TrackingProvider } from "../figma_app/831799";
export function $$l0(e) {
  return jsx(tH, {
    boundaryKey: e.trackingName,
    team: e.team ?? _$$e.SCALE,
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    children: jsx(TrackingProvider, {
      name: e.trackingName,
      enabled: e.open,
      properties: e.trackingProperties,
      children: e.children
    })
  });
}
export const I = $$l0;