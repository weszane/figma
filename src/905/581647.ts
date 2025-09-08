import { logError } from "../905/714362";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { RK } from "../figma_app/815170";
import { N } from "../905/696711";
import { C } from "../905/180";
export let $$c0 = createOptimistThunk((e, t, {
  loadingKey: i
}) => {
  let s = C.getBuyerPortal({
    returnUrl: window.location.href
  });
  N(s, e, i);
  s.then(({
    data: i
  }) => {
    e.dispatch(RK({
      rawInput: i.meta
    }));
    t.onSuccess?.();
  }).catch(t => {
    logError("community", "Failed to get buyer portal", {
      reason: t
    });
    e.dispatch(F.enqueue({
      message: getI18nString("community.actions.an_error_occured_while_trying_to_purchase_please_contact_support"),
      error: !0
    }));
  });
}, () => "M10N_STRIPE_MANAGE_SUBSCRIPTION");
export const v = $$c0;