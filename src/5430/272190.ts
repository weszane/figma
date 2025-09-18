import { trackEventAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { XHR } from "../905/910117";
import { createOptimistThunk } from "../905/350402";
import { setupHyperlinkHandler } from "../figma_app/815170";
import { setupLoadingStateHandler } from "../905/696711";
import { StatusType } from "../figma_app/175992";
export let $$u0 = createOptimistThunk(async (e, t, {
  loadingKey: r
}) => {
  let a = t.user.stripe_account_status === StatusType.STARTED_ONBOARDING ? "stripe_onboarding_continue" : "stripe_onboarding_start";
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
    setupLoadingStateHandler(s, e, r);
    let a = await s;
    if (!a?.data?.meta) {
      t.callback(!1);
      return;
    }
    let d = a.data.meta;
    desktopAPIInstance ? e.dispatch(setupHyperlinkHandler({
      rawInput: d
    })) : customHistory.unsafeRedirect(d);
    setTimeout(() => {
      t.callback(!0);
    }, 1e3);
  } catch (e) {
    t.callback(!1);
  }
});
export const j = $$u0;