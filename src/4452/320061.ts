import { useCallback } from "react";
import { trackEventAnalytics } from "../905/449184";
import { getRumLoggingConfig } from "../905/16237";
import { j6 } from "../figma_app/831799";
export function $$l0(e) {
  let {
    properties
  } = j6();
  let a = getRumLoggingConfig();
  return useCallback(s => {
    trackEventAnalytics("admin_flyout_closed", {
      ...properties,
      flyout_id: e,
      reason: s
    }, a);
  }, [properties, e, a]);
}
export const b = $$l0;