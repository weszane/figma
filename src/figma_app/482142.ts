import { createActionCreator } from "../905/73481";
import { A } from "../905/920142";
import { hasDesktopAPI } from "../figma_app/876459";
import { _H } from "../figma_app/598111";
import { XHR } from "../905/910117";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { _l, V3 } from "../figma_app/976345";
import { selectViewAction } from "../905/929976";
import { jL } from "../figma_app/658324";
import { FOrganizationLevelType } from "../figma_app/191312";
import { handleErrorWithToast } from "../figma_app/345997";
import { selectedViewToPath } from "../figma_app/193867";
import { SubscriptionType, mapUpsellModalTypeToSource, UpgradeSteps } from "../figma_app/831101";
import { UpgradeAction, TeamType } from "../figma_app/707808";
import { createOptimistThunk } from "../905/350402";
import { hideModal } from "../905/156213";
import { yJ } from "../figma_app/240735";
import { Be } from "../figma_app/920435";
let $$I15 = createOptimistThunk((e, {
  teamId: t,
  showBreadcrumbs: r,
  onCloseOrComplete: n
}) => {
  e.dispatch(selectViewAction({
    view: "eduReview",
    teamId: t,
    showBreadcrumbs: r,
    onCloseOrComplete: n
  }));
  e.dispatch($$G7({
    billingPeriod: SubscriptionType.STUDENT
  }));
});
let $$S20 = createActionCreator("PAYMENT_RESTORE_SAVED_CART");
let $$v9 = createActionCreator("PAYMENT_SET_CURRENCY");
let $$A16 = createActionCreator("PAYMENT_SET_TOKEN");
let $$x21 = createActionCreator("PAYMENT_SET_TAXES");
let $$N19 = createActionCreator("PAYMENT_SET_PROMO");
let $$C1 = createOptimistThunk((e, t) => {
  t.promo || _H();
  e.dispatch($$N19(t));
});
let $$w0 = createActionCreator("PAYMENT_SET_VAT_GST_ID");
let $$O4 = createActionCreator("PAYMENT_SET_REGIONAL_VAT_GST_ID");
let $$R12 = createActionCreator("PAYMENT_MAKE_STUDENT_TEAM");
let $$L11 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let n = r.user?.id;
  XHR.put(`/api/teams/${t.teamId}/student_team`, {
    student_team: !0
  }).then(() => {
    n ? e.dispatch(_l({
      workspace: {
        userId: n,
        teamId: t.teamId,
        orgId: null
      },
      view: {
        view: "allProjects"
      }
    })) : e.dispatch(selectViewAction({
      view: "team",
      teamId: t.teamId
    }));
    e.dispatch(FlashActions.flash(getI18nString("flash.successfully_upgraded_to_an_education_team")));
    e.dispatch($$M5({
      submitPending: !1
    }));
    t.onCloseOrComplete?.();
  }).catch(t => {
    handleErrorWithToast(t, e.dispatch);
    e.dispatch($$M5({
      submitPending: !1
    }));
  });
  e.dispatch($$R12());
});
let $$P18 = createOptimistThunk((e, {
  teamId: t
}) => {
  let r = e.getState().teams[t];
  r.student_team ? XHR.put(`/api/teams/${t}/student_team`, {
    student_team: !1
  }).then(() => {
    e.dispatch(Be({
      teamId: t
    }));
    e.dispatch(FlashActions.flash(getI18nString("flash.successfully_downgraded_to_a_starter_team")));
  }).catch(t => handleErrorWithToast(t, e.dispatch)) : XHR.del(`/api/subscriptions-2018-11-08/team/${t}`).then(({
    data: n
  }) => {
    let a = n.meta && n.meta.team;
    a && e.dispatch(yJ({
      team: a,
      userInitiated: !1
    }));
    e.dispatch(Be({
      teamId: t
    }));
    jL({
      planType: FOrganizationLevelType.TEAM,
      planId: t
    });
    let {
      annual_subscription,
      monthly_subscription
    } = e.getState().teamBilling.summary;
    let c = annual_subscription?.quantity ? annual_subscription.current_period_end : null;
    let u = monthly_subscription?.quantity ? monthly_subscription.current_period_end : null;
    let h = c && u ? A(c).isAfter(A(u)) ? c : u : c || u;
    e.dispatch(FlashActions.flash(h ? getI18nString("flash.team_will_become_free_starter_team_on_date", {
      teamName: r.name,
      cancelDate: A(h).toDate()
    }) : getI18nString("flash.team_will_be_downgraded_at_the_end_of_the_current_subscription_period", {
      teamName: r.name
    }), 8e3));
  }).catch(t => handleErrorWithToast(t, e.dispatch));
});
let $$D13 = createActionCreator("PAYMENT_SHOW_ERROR");
let $$k25 = createActionCreator("PAYMENT_SET_COMPANY_DETAILS");
let $$M5 = createActionCreator("PAYMENT_SET_SUBMIT_PENDING");
let $$F6 = createActionCreator("PAYMENT_SET_EDITOR_STATUS_CHANGES");
let $$j8 = createActionCreator("PAYMENT_SET_NUM_FIGMA_EMAIL_TEAM_USERS");
let $$U2 = createActionCreator("PAYMENT_SET_NUM_WHITEBOARD_EDITORS");
let $$B22 = createActionCreator("PAYMENT_SET_NUM_EDITORS");
let $$G7 = createActionCreator("PAYMENT_SET_BILLING_PERIOD");
let $$V24 = createActionCreator("PAYMENT_SET_CAMPFIRE_SEATS");
let $$H14 = createActionCreator("PAYMENT_INIT");
let $$z10 = createActionCreator("PAYMENT_START_ORG_UPGRADE_FLOW");
let $$W3 = createOptimistThunk((e, t) => {
  let {
    openInNewTab,
    newTeamProps,
    entryPoint,
    upsellSource
  } = t;
  let o = mapUpsellModalTypeToSource({
    upsellSource,
    fallbackEntryPoint: entryPoint
  });
  if (openInNewTab && !hasDesktopAPI()) {
    let t = e.getState();
    let r = new URL(selectedViewToPath(t, {
      view: "orgSelfServe",
      upsellSource,
      entryPoint: o
    }), document.baseURI).href;
    e.dispatch(V3({
      url: r
    }));
  } else {
    e.dispatch(hideModal());
    e.dispatch(selectViewAction({
      view: "orgSelfServe",
      newTeamProps,
      upsellSource,
      entryPoint: o
    }));
  }
  e.dispatch($$z10({
    currency: t.currency
  }));
});
let $$K23 = createActionCreator("PAYMENT_START_PRO_UPGRADE_FLOW");
let $$Y17 = createOptimistThunk((e, t) => {
  let {
    teamId,
    billingPeriod,
    entryPoint,
    onBillingCompleteRedirectInfo,
    upsellSource
  } = t;
  let l = mapUpsellModalTypeToSource({
    upsellSource,
    fallbackEntryPoint: entryPoint
  });
  let d = {
    view: "teamUpgrade",
    teamFlowType: UpgradeAction.UPGRADE_EXISTING_TEAM,
    teamId,
    paymentStep: UpgradeSteps.CHOOSE_PLAN,
    billingPeriod,
    planType: TeamType.TEAM,
    entryPoint: l,
    ...(onBillingCompleteRedirectInfo ? {
      searchParams: {
        onCompleteRedirectFileKey: onBillingCompleteRedirectInfo.fileKey,
        onCompleteRedirectNodeId: onBillingCompleteRedirectInfo.nodeId
      }
    } : {})
  };
  if (t.openInNewTab && !hasDesktopAPI()) {
    let t = e.getState();
    let r = new URL(selectedViewToPath(t, d), document.baseURI).href;
    e.dispatch(V3({
      url: r
    }));
  } else {
    let r = t.openInNewTab ? void 0 : t.selectedView;
    e.dispatch(hideModal());
    d.previousView = r;
    e.dispatch(selectViewAction(d));
  }
  e.dispatch($$K23({
    newTeam: t.newTeam,
    currency: t.currency
  }));
});
export const $h = $$w0;
export const Ay = $$C1;
export const Az = $$U2;
export const Bq = $$W3;
export const Ef = $$O4;
export const I2 = $$M5;
export const Je = $$F6;
export const Lo = $$G7;
export const M2 = $$j8;
export const MN = $$v9;
export const Mv = $$z10;
export const Nj = $$L11;
export const Qe = $$R12;
export const Qg = $$D13;
export const Ts = $$H14;
export const Vm = $$I15;
export const WG = $$A16;
export const WX = $$Y17;
export const Wc = $$P18;
export const XS = $$N19;
export const eK = $$S20;
export const i = $$x21;
export const js = $$B22;
export const pv = $$K23;
export const qU = $$V24;
export const yy = $$k25;