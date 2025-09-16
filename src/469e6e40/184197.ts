import { QD } from "../figma_app/153916";
import { FlashActions } from "../905/573154";
import { createOptimistThunk } from "../905/350402";
import { selectViewAction } from "../905/929976";
import { DashboardSection } from "../figma_app/650409";
export let $$o0 = createOptimistThunk((e, t, {
  liveStore: a
}) => {
  let i = e.getState().currentUserOrgId;
  i && a.getMutation(QD)({
    orgId: i,
    licenseQuantities: t.licenseQuantities,
    planInvoiceId: t.planInvoiceId,
    onRejected: t => {
      e.dispatch(FlashActions.error(t.data?.message || "An error occurred while locking your invoice.", 5e3));
      console.error(t);
    }
  }).then(() => {
    e.dispatch(selectViewAction({
      view: "orgAdminSettings",
      orgAdminSettingsViewTab: DashboardSection.BILLING,
      shouldShowLockedBanner: !0
    }));
  }).catch(e => {
    console.error(e);
  });
});
export const Z = $$o0;