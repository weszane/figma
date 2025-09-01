import { QD } from "../figma_app/153916";
import { s as _$$s } from "../905/573154";
import { nF } from "../905/350402";
import { sf } from "../905/929976";
import { J7 } from "../figma_app/650409";
export let $$o0 = nF((e, t, {
  liveStore: a
}) => {
  let i = e.getState().currentUserOrgId;
  i && a.getMutation(QD)({
    orgId: i,
    licenseQuantities: t.licenseQuantities,
    planInvoiceId: t.planInvoiceId,
    onRejected: t => {
      e.dispatch(_$$s.error(t.data?.message || "An error occurred while locking your invoice.", 5e3));
      console.error(t);
    }
  }).then(() => {
    e.dispatch(sf({
      view: "orgAdminSettings",
      orgAdminSettingsViewTab: J7.BILLING,
      shouldShowLockedBanner: !0
    }));
  }).catch(e => {
    console.error(e);
  });
});
export const Z = $$o0; 
