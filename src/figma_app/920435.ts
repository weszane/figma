import { createActionCreator } from "../905/73481";
import { sendWithRetry } from "../905/910117";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { s as _$$s2 } from "../905/381752";
import { Y } from "../figma_app/887000";
import { createOptimistThunk } from "../905/350402";
import { showModalHandler } from "../905/156213";
import { Be as _$$Be } from "../figma_app/920435";
import { jL } from "../figma_app/658324";
import { FOrganizationLevelType } from "../figma_app/191312";
import { getUserIsoCodeIfNonUsd } from "../figma_app/514043";
import { setupLoadingStateHandler } from "../905/696711";
import { T } from "../905/696189";
export function $$E0(e) {
  let {
    teamId,
    dispatch,
    email
  } = e;
  return sendWithRetry.put(`/api/subscriptions/team/${teamId}/billing_contact`, {
    email
  }).then(e => {
    dispatch($$T5({
      summary: {
        billing_contact: e.data.meta
      }
    }));
    dispatch(VisualBellActions.enqueue({
      message: getI18nString("visual_bell.team_billing_contact_updated"),
      type: "team-billing-contact-changed"
    }));
  }).catch(e => {
    dispatch(FlashActions.error(e.data?.message || getI18nString("payments.change_billing_contact_error"), 5e3));
    return e;
  });
}
let $$y1 = createOptimistThunk((e, {
  teamId: t
}, {
  loadingKey: r
}) => {
  let n = T.getTeamSummary({
    teamId: t
  });
  setupLoadingStateHandler(n, e, r);
  n.then(({
    data: t
  }) => {
    e.dispatch($$b6({
      summary: t.meta
    }));
  }).catch(() => {
    e.dispatch(FlashActions.error(getI18nString("flash.team_billing_summary_fetching_error")));
  });
}, e => `TEAM_ADMIN_FETCH_BILLING_SUMMARY::teamId::${e.teamId}`);
let $$b6 = createActionCreator("TEAM_ADMIN_SET_SUMMARY");
let $$T5 = createActionCreator("TEAM_ADMIN_UPDATE_INVOICE_RECEIVER");
export function $$I2(e) {
  let {
    team,
    dispatch,
    cancelling,
    monthlySub,
    annualSub,
    currency,
    canSeeBillingAddressExp
  } = e;
  dispatch(showModalHandler({
    type: _$$s2(),
    data: {
      currency,
      defaultCountry: getUserIsoCodeIfNonUsd(),
      monthlySub,
      annualSub,
      customerInfo: {
        teamId: team.id
      },
      isReactivating: cancelling,
      canSeeBillingAddressExp
    }
  }));
}
export function $$S3(e) {
  let {
    teamId,
    dispatch,
    annualSeatCounts,
    onSuccess,
    onFailure
  } = e;
  return sendWithRetry.post(`/api/subscriptions/team/${teamId}/annual_subscription`, {
    count_by_billable_product: annualSeatCounts
  }).then(async () => {
    dispatch(_$$Be({
      teamId
    }));
    dispatch(VisualBellActions.enqueue({
      message: getI18nString("billing_modals.renewal.toast.success"),
      type: "team-billing-renewal"
    }));
    await jL({
      planType: FOrganizationLevelType.TEAM,
      planId: teamId
    });
    onSuccess();
  }).catch(e => {
    dispatch(FlashActions.error(e.data?.message || getI18nString("billing_modals.renewal.toast.failure"), 5e3));
    onFailure();
    return e;
  });
}
export function $$v7(e) {
  let {
    teamId,
    dispatch,
    annualSeatCounts,
    onSuccess,
    onFailure
  } = e;
  return sendWithRetry.put(`/api/subscriptions/team/${teamId}/coterm_annual_seats`, {
    count_by_billable_product: annualSeatCounts
  }).then(async () => {
    dispatch(_$$Be({
      teamId
    }));
    dispatch(VisualBellActions.enqueue({
      message: getI18nString("billing_modals.renewal.toast.success"),
      type: "team-billing-renewal"
    }));
    await jL({
      planType: FOrganizationLevelType.TEAM,
      planId: teamId
    });
    onSuccess();
  }).catch(e => {
    dispatch(FlashActions.error(e.data?.message || getI18nString("billing_modals.renewal.toast.failure"), 5e3));
    onFailure();
    return e;
  });
}
export function $$A4(e) {
  let {
    team,
    dispatch
  } = e;
  let n = async (e, r, n) => {
    let a = !1;
    await sendWithRetry.put(`/api/subscriptions/team/${team.id}/vat_gst`, {
      vat_gst_id: e,
      regional_vat_gst_id: n
    }).then(() => {
      a = !0;
    }).catch(e => {
      r(e.toString());
    });
    return a;
  };
  dispatch(showModalHandler({
    type: Y(),
    data: {
      team,
      updateVatGstId: n
    }
  }));
}
export const BO = $$E0;
export const Be = $$y1;
export const C8 = $$I2;
export const H3 = $$S3;
export const Hq = $$A4;
export const OP = $$T5;
export const l0 = $$b6;
export const wn = $$v7;
