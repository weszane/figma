import { trackEventAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { Ay } from "../905/612521";
import { XHR } from "../905/910117";
import { createOptimistThunk } from "../905/350402";
import { RK } from "../figma_app/815170";
import { N } from "../905/696711";
import { P5 } from "../figma_app/175992";
export let $$u0 = createOptimistThunk(async (e, t, {
  loadingKey: r
}) => {
  let a = t.user.stripe_account_status === P5.STARTED_ONBOARDING ? "stripe_onboarding_continue" : "stripe_onboarding_start";
  trackEventAnalytics(a, {
    userId: t.user.id,
    entrypoint: t.selectedView.subView
  });
  try {
    let s = XHR.post("/api/community/seller/onboard", {
      accepted_seller_tos: !0,
      is_desktop: !!desktopAPIInstance,
      first_name: t.firstName,
      last_name: t.lastName,
      address: t.address,
      vat_id: t.vatId
    });
    N(s, e, r);
    let a = await s;
    if (!a?.data?.meta) {
      t.callback(!1);
      return;
    }
    let d = a.data.meta;
    desktopAPIInstance ? e.dispatch(RK({
      rawInput: d
    })) : Ay.unsafeRedirect(d);
    setTimeout(() => {
      t.callback(!0);
    }, 1e3);
  } catch (e) {
    t.callback(!1);
  }
});
export const j = $$u0;