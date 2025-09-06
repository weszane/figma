import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
export function $$a0(e, t, i = {}, s = {}) {
  trackEventAnalytics("Auth Actions", {
    eventSubtype: e,
    origin: t,
    googleFedCmEnabled: getFeatureFlags().google_federated_cm ?? !1,
    cookiesAllowed: !!navigator.cookieEnabled,
    ...i
  }, {
    batchRequest: !1,
    ...s
  });
}
export const g = $$a0;