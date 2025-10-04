import { getCurrentLiveGraphClient } from "../905/761735";
import { handleOptimistTransactionWithError } from "../905/150006";
import { sendWithRetry } from "../905/910117";
import { getI18nString } from "../905/303541";
import { createOptimistThunk } from "../905/350402";
import { Q$ } from "../figma_app/934707";
import { J } from "../figma_app/941287";
export let $$c3 = "-1";
export function $$u2(e, t) {
  return e.length > t ? e.slice(0, t - 3) + "..." : e;
}
export function $$p1(e, t, r) {
  let i = t == J ? null : t;
  let s = `${r}:${t}`;
  return getCurrentLiveGraphClient().optimisticallyUpdate({
    UserNotificationBell2: {
      [s]: {
        bell: e
      }
    }
  }, sendWithRetry.put("/api/user_notifications_bell", {
    bell: e,
    current_org_id: i
  }));
}
export let $$_0 = createOptimistThunk((e, t) => {
  if (!t.userInitiated) {
    e.dispatch(Q$(t));
    return;
  }
  return handleOptimistTransactionWithError({
    requestPromise: sendWithRetry.put("/api/user_notifications_bell/community/clear"),
    fallbackError: getI18nString("user_notification.an_error_occurred_marking_all_as_read"),
    store: e,
    next: e.dispatch,
    action: Q$(t)
  });
});
export const X2 = $$_0;
export const Zo = $$p1;
export const gN = $$u2;
export const td = $$c3;