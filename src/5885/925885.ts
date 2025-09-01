import { ServiceCategories as _$$e } from "../905/165054";
import { sx } from "../905/449184";
import { Ay } from "../905/612521";
import { getPaymentFlowData } from "../figma_app/169182";
import { _H } from "../figma_app/598111";
import { $D } from "../905/11";
import { cn } from "../figma_app/141320";
import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { J } from "../905/231762";
import { H as _$$H } from "../5885/54359";
import { VB } from "../figma_app/361035";
import { _l } from "../figma_app/976345";
import { nF } from "../905/350402";
import { sf } from "../905/929976";
import { to } from "../905/156213";
import { _J } from "../figma_app/314264";
import { P8 } from "../figma_app/475472";
import { fD, Rq, ne } from "../figma_app/345997";
import { R_ } from "../5885/399780";
import { nT } from "../figma_app/53721";
import { tY, tn } from "../figma_app/831101";
import { SC, Sc } from "../figma_app/707808";
import { C as _$$C } from "../5885/53111";
import { I2, Je, Lo, Ay as _$$Ay2, Qg, WG } from "../figma_app/482142";
import { yJ } from "../figma_app/240735";
import { Be } from "../figma_app/920435";
let $$R2 = nF((e, {
  teamId: t,
  teamName: i,
  previousView: a
}) => {
  e.dispatch(sf({
    view: "promoReview",
    teamId: t,
    teamName: i,
    previousView: a
  }));
});
let $$N0 = nF((e, t) => {
  let {
    promoCode,
    teamId,
    teamName,
    onSuccess,
    onError
  } = t;
  XHR.post("/api/teams/redeem_promo", {
    promo_code: promoCode,
    team_id: teamId
  }).then(() => {
    onSuccess();
    e.dispatch(_$$s.flash(_$$t("flash.redeem_promo.success", {
      teamName
    })));
  }).catch(t => {
    onError();
    e.dispatch(_$$s.error(_$$t("flash.redeem_promo.failure")));
  });
});
let $$k1 = nF((e, t) => {
  let {
    teamId,
    surveyResult
  } = t;
  let r = e.getState();
  let n = r.user?.id;
  XHR.post(`/api/teams/${teamId}/pro_trial`).then(() => {
    n ? e.dispatch(_l({
      workspace: {
        userId: n,
        orgId: null,
        teamId
      },
      view: {
        view: "allProjects"
      }
    })) : e.dispatch(sf({
      view: "team",
      teamId
    }));
    e.dispatch(_$$s.flash(_$$t("payments.pro_trial.start_pro_trial_success")));
    R_.trackInitiationSubmit(surveyResult, !0);
  }).catch(t => {
    n ? e.dispatch(_l({
      workspace: {
        userId: n,
        orgId: null,
        teamId
      },
      view: {
        view: "recentsAndSharing"
      }
    })) : e.dispatch(sf({
      view: "recentsAndSharing"
    }));
    e.dispatch(_$$s.error(_$$t("payments.pro_trial.start_pro_trial_error")));
    R_.trackInitiationSubmit(surveyResult, !1);
  });
});
let $$D3 = nF((e, {
  teamName: t,
  invites: i,
  teamId: h,
  selectedCurrency: x,
  hasSelectedStudentTeam: R,
  displayedCostBreakdown: N,
  teamFlowType: k,
  onSuccess: D,
  isCampfireCart: O,
  inStarterTeamLoopholes: U,
  displayedPriceKeys: W
}) => {
  let L;
  let F = e.getState();
  let z = F.user?.id;
  let M = (e, t) => ({
    annual_quantity: fD(e, t),
    monthly_quantity: Rq(e, t)
  });
  let B = ne(F.payment.billingPeriod);
  if (!B) {
    e.dispatch(_$$s.error(_$$t("payments.invalid_billing_interval_error")));
    return;
  }
  let G = null;
  let q = null;
  if (O) {
    let t = F.payment.cartSelections?.selectedUserSeatTypes;
    let i = U ? [z] : Object.values(h ? F.teamUserByTeamId[h] : {}).map(e => e.user_id ?? "");
    if (t && _$$H(t, i)) {
      q = VB(t) ?? null;
      G = F.payment.cartSelections?.countBySeatType ?? null;
    } else {
      e.dispatch(_$$s.error(_$$t("payments.errors.error_processing_upgrade_request")));
      $D(_$$e.MONETIZATION_UPGRADES, Error("Unable to retrieve valid selectedUserSeatTypes while submitting Pro upgrade request"), {
        extra: {
          teamId: h,
          userIds: i,
          selectedUserSeatTypes: t
        }
      });
      e.dispatch(I2({
        submitPending: !1
      }));
      return;
    }
  } else G = {
    design: F.payment.numDesignEditors,
    figjam: F.payment.numWhiteboardEditors
  };
  let V = {
    ...M(F.payment.billingPeriod, F.payment.numDesignEditors),
    annual_whiteboard_quantity: M(F.payment.billingPeriod, F.payment.numWhiteboardEditors).annual_quantity,
    monthly_whiteboard_quantity: M(F.payment.billingPeriod, F.payment.numWhiteboardEditors).monthly_quantity,
    editor_status_changes: F.payment.editorStatusChanges,
    subscription_monthly_quantity_figjam: M(F.payment.billingPeriod, F.payment.numWhiteboardEditors).monthly_quantity,
    subscription_annual_quantity_figjam: M(F.payment.billingPeriod, F.payment.numWhiteboardEditors).annual_quantity,
    vat_gst_id: F.payment.vatGstId || null,
    regional_vat_gst_id: F.payment.regionalVatGstId || null,
    legal_name: F.payment.legalName || null,
    display_name: F.payment.displayName || null,
    selected_user_seat_types: q,
    count_by_billable_product: G,
    billing_interval: B,
    displayed_cost_breakdown: N,
    displayed_price_keys: W
  };
  if (null === h) {
    let e = F.payment.promo;
    let a = !!F.user && cn(F.user);
    if (null != e) L = {
      ...V,
      team_name: t,
      invite_emails: i,
      promo_code: e.code
    }; else if (a && R) L = {
      ...V,
      team_name: t,
      invite_emails: i,
      student_team: !0
    }; else {
      let e = getPaymentFlowData();
      L = {
        ...V,
        team_name: t,
        invite_emails: i,
        subscribe_to_pro: !0,
        address: e?.address,
        payment_method_id: e?.payment_method_id,
        selected_currency: x
      };
    }
  } else L = {
    ...V,
    selected_currency: x
  };
  let $ = h ? `/api/subscriptions-2018-11-08/team/${h}` : "/api/teams/create";
  let X = F.selectedView;
  let H = F.payment.upgradingNewTeam;
  XHR.post($, L).then(({
    data: t
  }) => {
    let a = "team" in t.meta ? t.meta.team : t.meta;
    let o = () => {
      if (z) {
        let t = {
          userId: z,
          teamId: a.id,
          orgId: null
        };
        e.dispatch(_l({
          workspace: t,
          view: {
            view: "allProjects",
            isProUpgrade: !0
          }
        }));
      } else {
        e.dispatch(sf({
          view: "team",
          teamId: a.id
        }));
        e.dispatch(to({
          type: _$$C,
          data: {
            teamId: a.id
          }
        }));
      }
    };
    h || P8(a, e, {
      dontRedirect: !0,
      inviteEmails: i,
      teamFlowType: k
    });
    e.dispatch(I2({
      submitPending: !1
    }));
    e.dispatch(Je({
      editorStatusChanges: {
        upgrade: {
          whiteboard: [],
          design: [],
          slides: [],
          sites: [],
          cooper: [],
          figmake: []
        },
        downgrade: {
          whiteboard: [],
          design: [],
          slides: [],
          sites: [],
          cooper: [],
          figmake: []
        }
      }
    }));
    a && e.dispatch(yJ({
      team: a,
      userInitiated: !1
    }));
    a.student_team && e.dispatch(Lo({
      billingPeriod: tY.UNSPECIFIED
    }));
    F.payment.promo && (_H(), e.dispatch(_$$Ay2({
      promo: null
    })));
    let l = new URLSearchParams(Ay.location.search);
    if (H) {
      if (l.get("onCompleteRedirectFileKey")) {
        let t = decodeURIComponent(l.get("onCompleteRedirectFileKey"));
        let i = decodeURIComponent(l.get("onCompleteRedirectNodeId"));
        let r = {
          view: "fullscreen",
          fileKey: t,
          ...(i ? {
            nodeId: i
          } : {})
        };
        e.dispatch(sf({
          ...r,
          teamToMoveFileToOnNavigate: a.id,
          editorType: nT.Design
        }));
      } else o();
    } else if (e.dispatch(Be({
      teamId: a.id
    })), l.get("onCompleteRedirectFileKey")) {
      let t = decodeURIComponent(l.get("onCompleteRedirectFileKey"));
      let i = decodeURIComponent(l.get("onCompleteRedirectNodeId"));
      let r = {
        view: "fullscreen",
        fileKey: t,
        ...(i ? {
          nodeId: i
        } : {})
      };
      e.dispatch(sf({
        ...r,
        teamToMoveFileToOnNavigate: a.id,
        editorType: nT.Design
      }));
    } else o();
    sx("Pro Team Purchased (GTM)");
    D && D();
  }).catch(t => {
    let i = (t, i = {}) => {
      let a = new URLSearchParams(Ay.location.search);
      let r = a.get("onCompleteRedirectFileKey");
      let o = a.get("onCompleteRedirectNodeId");
      e.dispatch(sf({
        ...X,
        view: "teamUpgrade",
        teamFlowType: t ? SC.UPGRADE_EXISTING_TEAM : SC.CREATE_AND_UPGRADE,
        teamId: t || i.freeTeamId || null,
        paymentStep: tn.PAYMENT_AND_ADDRESS,
        previousView: X.previousView,
        planType: Sc.TEAM,
        ...(r ? {
          searchParams: {
            onCompleteRedirectFileKey: r,
            onCompleteRedirectNodeId: o
          }
        } : {})
      }));
    };
    e.dispatch(I2({
      submitPending: !1
    }));
    let o = t.data?.message || t.message;
    null !== h ? _J("Pro Checkout Error", h, F, {
      error_message: o,
      request_params: JSON.stringify(L)
    }) : sx("Pro Checkout Error");
    $D(_$$e.BILLING_EXPERIENCE, Error(`[Billing] Pro checkout API failed: ${o}`), {
      extra: {
        countByBillableProduct: G,
        selectedUserSeatTypes: q,
        billingInterval: B,
        displayedCostBreakdown: N,
        displayedPriceKeys: W,
        isCampfireCart: O
      }
    });
    ((t, a) => {
      let r = J(t);
      r && ("PROMO_CODE" === t.data.reason ? (e.dispatch(_$$Ay2({
        promo: null
      })), i(a, {}), e.dispatch(Qg({
        error: r
      }))) : "CARD_ERROR" === t.data.reason ? (e.dispatch(WG({
        token: null
      })), i(a, {}), e.dispatch(Qg({
        error: r
      }))) : e.dispatch(_$$s.error(r)));
    })(t, h);
  });
});
export const S_ = $$N0;
export const cw = $$k1;
export const g_ = $$R2;
export const gk = $$D3; 
