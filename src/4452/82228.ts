import { jsx } from "react/jsx-runtime";
import { ServiceCategories as _$$e } from "../905/165054";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { TrackingProvider } from "../figma_app/831799";
export function $$l0(e) {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: e.trackingName,
    team: e.team ?? _$$e.SCALE,
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    children: jsx(TrackingProvider, {
      name: e.trackingName,
      enabled: e.open,
      properties: e.trackingProperties,
      children: e.children
    })
  });
}
export const I = $$l0;