import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { throwError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { isValidEmail } from "../figma_app/416935";
import { customHistory } from "../905/612521";
import { h as _$$h } from "../905/207101";
import { useLatestRef } from "../figma_app/922077";
import { getPaymentFlowData, clearPaymentFlowData } from "../figma_app/169182";
import { handleSuspenseRetainRelease, setupResourceAtomHandler } from "../figma_app/566371";
import { _H } from "../figma_app/598111";
import { isStudentValidated } from "../figma_app/141320";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { FlashActions } from "../905/573154";
import { Ph } from "../905/160095";
import { renderI18nText, getI18nString } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { Vh } from "../figma_app/692987";
import { s$, ZY, GL, vm } from "../figma_app/361035";
import { R9, Jh, Tj, gS } from "../figma_app/441925";
import { dR } from "../figma_app/109538";
import { I as _$$I } from "../905/641938";
import { j as _$$j } from "../c5e2cae0/282622";
import { z as _$$z } from "../c5e2cae0/580036";
import { y as _$$y, I as _$$I2 } from "../c5e2cae0/74041";
import { f as _$$f } from "../c5e2cae0/279252";
import { kR, vU } from "../c5e2cae0/894125";
import { Spacing, BigTextInput, linkWithTracking, ButtonBasePrimaryTracked, clickableBaseLinkTracked } from "../figma_app/637027";
import { Fb, b0 } from "../figma_app/81441";
import { W as _$$W } from "../c5e2cae0/300137";
import { U as _$$U } from "../905/815805";
import { f as _$$f2 } from "../905/950641";
import { L as _$$L } from "../905/61587";
import { FPlanNameType, FMemberRoleType, FAccessLevelType } from "../figma_app/191312";
import { hK } from "../figma_app/211706";
import { UR } from "../figma_app/307841";
import { getRumLoggingConfig } from "../905/16237";
import { switchAccountAndNavigate } from "../figma_app/976345";
import { q as _$$q } from "../figma_app/712384";
import { selectViewAction } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { MN, Lo, Je, I2, Vm, Bq, Nj, Ay as _$$Ay, qU } from "../figma_app/482142";
import { S_, gk } from "../5885/925885";
import { postUserFlag } from "../905/985254";
import { hasStarterTeamLoopholeAccess, useSeparateBillingShippingExperiment, useCartSeatSelectionClarityExperiment } from "../figma_app/297957";
import { UpgradeAction } from "../905/370443";
import { withTrackedInput, TrackingProvider } from "../figma_app/831799";
import { jv, vu } from "../905/84777";
import { lo, wn, dl } from "../9420/795870";
import { isCollaboratorType, ViewAccessTypeEnum, ProductAccessTypeEnum } from "../905/513035";
import { collaboratorSet } from "../905/332483";
import { kt, pI, Al, lX, dT } from "../9420/394825";
import { KQ } from "../figma_app/475472";
import { y4 } from "../figma_app/298277";
import { selectPermissionsState } from "../figma_app/212807";
import { selectCurrentUser } from "../905/372672";
import { LM, z4 } from "../figma_app/518077";
import { liveStoreInstance } from "../905/713695";
import { getUserCurrency, getUserIsoCodeIfNonUsd } from "../figma_app/514043";
import { getEditableTeamsWithoutPaidAccess, getBillingCycleFromSubscriptionType, getSubscriptionTypeFromBillingCycle } from "../figma_app/345997";
import { Ud, OI } from "../c5e2cae0/2942";
import { isOrgUserExternallyRestrictedFromState } from "../figma_app/642025";
import { useCurrentPlanUser } from "../figma_app/465071";
import { selectedViewToPath } from "../figma_app/193867";
import { UpsellModalType } from "../905/165519";
import { Ju } from "../905/712921";
import { UpgradeSteps, BillingCycle, SubscriptionType } from "../figma_app/831101";
import { CreateUpgradeAction, TeamType, isCreateOrUpgrade } from "../figma_app/707808";
import { e0 } from "../905/696396";
import { V as _$$V } from "../905/223084";
import { Q as _$$Q } from "../figma_app/113686";
import { Label } from "../905/270045";
import { Checkbox } from "../905/274480";
import { SvgComponent } from "../905/714743";
import { x as _$$x } from "../c5e2cae0/907085";
import { PopulationStatus } from "../figma_app/314264";
import { lB } from "../905/148137";
import { S as _$$S3 } from "../9420/724099";
import { ri } from "../905/190597";
import { A as _$$A } from "../6828/364616";
import { isNotNullish } from "../figma_app/95419";
import { G as _$$G } from "../905/142901";
import { md, Ed, MZ, n5 } from "../c5e2cae0/705272";
import { T as _$$T } from "../c5e2cae0/45116";
function D({
  disableInviteButton: e,
  collaborators: t,
  setCollaborators: a,
  willSendInvites: r,
  skipInviteStep: i
}) {
  let l = (e, s) => {
    s >= t.length || a(t.map((t, a) => a === s ? e : t));
  };
  return jsxs(Fragment, {
    children: [jsx("h1", {
      className: Fb,
      children: renderI18nText("pro_cart.add_collaborators.add_collaborators_to_your_team")
    }), jsx(Spacing, {
      multiple: .5
    }), jsx("h2", {
      className: b0,
      children: renderI18nText("pro_cart.add_collaborators.well_add_them_to_your_team")
    }), jsx(Spacing, {
      multiple: 4
    }), jsxs("div", {
      style: styleBuilderInstance.flex.flexColumn.add({
        maxWidth: "400px"
      }).mlAuto.mrAuto.gap12.$,
      children: [t.map((e, t) => jsx(BigTextInput, {
        value: e,
        onChange: e => l(e.target.value, t),
        placeholder: getI18nString("pro_cart.add_collaborators.email")
      }, `collaborator-email-input-${t}`)), jsx(linkWithTracking, {
        onClick: () => {
          a([...t, ""]);
        },
        trusted: !0,
        style: styleBuilderInstance.alignLeft.font14.fontMedium.$,
        children: renderI18nText("pro_cart.add_collaborators.add_another")
      })]
    }), jsxs("div", {
      style: styleBuilderInstance.flex.flexColumn.itemsCenter.mlAuto.mrAuto.mt24.gap24.fontMedium.font14.$,
      children: [jsx(ButtonBasePrimaryTracked, {
        disabled: !!e,
        style: styleBuilderInstance.font14.add({
          height: "44px",
          width: "110px"
        }).$,
        onClick: r,
        children: renderI18nText("pro_cart.add_collaborators.sent_invites")
      }), jsx(clickableBaseLinkTracked, {
        trusted: !0,
        onClick: i,
        style: styleBuilderInstance.colorTextSecondary.alignCenter.$,
        children: renderI18nText("pro_cart.add_collaborators.skip_for_now")
      })]
    })]
  });
}
function F({
  chooseStarterPlan: e,
  chooseEduPlan: t,
  chooseProPlan: a,
  chooseOrgPlan: r,
  currency: i,
  updateCurrency: l,
  upgradeExistingTeam: n
}) {
  let d = _$$U(i);
  return jsxs("div", {
    style: styleBuilderInstance.grid.gap16.p36.pb24.selectNone.mxAuto.add({
      width: "945px",
      maxWidth: "1049px"
    }).$,
    children: [jsx(_$$f2, {
      currency: i,
      chooseStarterPlan: e,
      chooseEduPlan: t,
      chooseProPlan: a,
      chooseOrgPlan: r,
      updateCurrency: l,
      withUpgradeExistingTeamOption: n,
      prices: d,
      teamPlan: FPlanNameType.STARTER
    }), jsx(hK, {
      height: 8
    }), jsx(_$$L, {})]
  });
}
let eO = withTrackedInput(e => {
  let {
    dataTestId,
    children,
    ...r
  } = e;
  return jsx("select", {
    ...r,
    "data-testid": dataTestId,
    children
  });
});
function eD(e) {
  let t = e.paymentMethods.filter(e => e.type === lB.CARD || e.type === lB.SEPA);
  return jsx(Fragment, {
    children: t.map(e => {
      let t = function (e) {
        if (e.type === lB.CARD) return function (e) {
          let t = e.display_brand in e$ ? e$[e.display_brand] : getI18nString("checkout.other");
          return `${t} \u2022\u2022\u2022\u2022 ${e.last4}`;
        }(e.object);
        if (e.type === lB.SEPA) return function (e) {
          let t = e.country ? e.country.toUpperCase() : getI18nString("checkout.other");
          return `SEPA ${t} \u2022\u2022\u2022\u2022 ${e.last4}`;
        }(e.object);
        throw Error(`Unknown payment method type: ${e.type}`);
      }(e);
      let a = function (e) {
        if (!e) return "";
        let t = [];
        e.line1 && t.push(e.line1);
        let a = [];
        e.city && a.push(e.city);
        e.state && a.push(e.state);
        e.postal_code && a.push(e.postal_code);
        a.length > 0 && t.push(a.join(" "));
        e.country && t.push(e.country);
        return t.join(", ");
      }(e.address);
      return jsxs("option", {
        className: cssBuilderInstance.flex.justifyBetween.gap2.$,
        value: e.id,
        children: [jsx("span", {
          className: cssBuilderInstance.font13.$,
          children: t
        }), a && jsx("span", {
          className: cssBuilderInstance.colorTextSecondary.font13.$,
          children: ` - ${a}`
        })]
      }, e.id);
    })
  });
}
function eB(e) {
  return jsx("div", {
    className: ri,
    children: jsxs("div", {
      className: cssBuilderInstance.flex.relative.wFull.itemsCenter.$,
      children: [jsx(eO, {
        name: "selected_saved_payment_method",
        trackingFieldName: "SelectExistingPaymentMethod",
        trackingPopulationLevel: e.selectedPaymentMethod?.id && e.enableSavedPaymentMethods ? PopulationStatus.POPULATED_COMPLETE : PopulationStatus.NOT_POPULATED,
        onChange: t => {
          let a = t.target.value;
          let s = e.paymentMethods.find(e => e.id === a);
          s && e.setSelectedPaymentMethod(s);
        },
        value: e.selectedPaymentMethod?.id,
        children: jsx(eD, {
          paymentMethods: e.paymentMethods
        })
      }), jsx(SvgComponent, {
        style: styleBuilderInstance.add({
          position: "absolute",
          right: "16px",
          pointerEvents: "none",
          color: "var(--color-icon)",
          fill: "var(--color-icon)"
        }).$,
        svg: _$$A
      })]
    })
  });
}
function eL(e) {
  let {
    enableSavedPaymentMethods,
    setEnableSavedPaymentMethods
  } = e;
  let r = jsx(Label, {
    children: jsx("span", {
      className: cssBuilderInstance.font13.$,
      children: getI18nString("checkout.use_saved_payment_method")
    })
  });
  return jsx("div", {
    className: cssBuilderInstance.mb6.$$if(!enableSavedPaymentMethods, cssBuilderInstance.mb0).$,
    children: jsx(Checkbox, {
      label: r,
      onChange: e => {
        setEnableSavedPaymentMethods(e);
      },
      checked: enableSavedPaymentMethods
    })
  });
}
function eV(e) {
  let {
    paymentMethods,
    setSelectedPaymentMethod,
    setEnableSavedPaymentMethods,
    enableSavedPaymentMethods,
    selectedPaymentMethod
  } = e;
  let {
    error,
    errorCode
  } = useSelector(e => e.payment);
  let c = !!error && null === errorCode;
  return jsxs(_$$x, {
    title: getI18nString("checkout.payment_details"),
    children: [paymentMethods.length > 0 && jsxs("div", {
      className: cssBuilderInstance.alignLeft.$,
      children: [jsx(eL, {
        enableSavedPaymentMethods,
        setEnableSavedPaymentMethods
      }), enableSavedPaymentMethods && jsx(eB, {
        selectedPaymentMethod,
        enableSavedPaymentMethods,
        setSelectedPaymentMethod,
        paymentMethods
      })]
    }), jsx("div", {
      className: cssBuilderInstance.alignLeft.$,
      children: jsx(_$$S3, {
        billingAddress: e.billingAddress,
        canSeeBillingAddressExp: e.canSeeBillingAddressExp,
        createPaymentElement: e.createPaymentElement,
        error: e.error,
        hide: e.enableSavedPaymentMethods,
        isCampfireCart: e.isCampfireCart,
        legalCompanyName: e.legalCompanyName,
        nameOnPaymentMethod: e.nameOnPaymentMethod,
        onRegionalVatGstIdChange: e.onRegionalVatGstIdChange,
        onVatGstIdChange: e.onVatGstIdChange,
        paymentError: c ? error : void 0,
        paymentFlow: e.paymentFlow,
        paymentMethodType: e.paymentMethodType,
        regionalVatGstId: e.regionalVatGstId,
        shippingAddress: e.shippingAddress,
        unmountPaymentElement: e.unmountPaymentElement,
        updateBillingAddress: e.updateBillingAddress,
        updateLegalCompanyName: e.updateLegalCompanyName,
        updateNameOnPaymentMethod: e.updateNameOnPaymentMethod,
        updateShippingAddress: e.updateShippingAddress,
        vatGstId: e.vatGstId
      })
    })]
  });
}
let e$ = {
  american_express: "American Express",
  cartes_bancaires: "Cartes Bancaires",
  diners_club: "Diners Club",
  discover: "Discover",
  eftpos_australia: "Eftpos Australia",
  interac: "Interac",
  jcb: "JCB",
  mastercard: "Mastercard",
  union_pay: "Union Pay",
  visa: "Visa"
};
function eH(e) {
  let t = {
    ...e.additionalSeatCounts
  };
  Object.values(e.selectedUserSeatTypes).forEach(e => {
    isCollaboratorType(e) && e in t && t[e]++;
  });
  return {
    countBySeatType: t,
    selectedUserSeatTypes: e.selectedUserSeatTypes
  };
}
let eX = (e, t, a, s) => {
  let [i, l] = useState(() => {
    let r = function (e, t, a) {
      let s;
      let {
        countBySeatType,
        selectedUserSeatTypes
      } = e || {
        countBySeatType: {},
        selectedUserSeatTypes: {}
      };
      let l = t.map(e => e.user.id);
      let n = md(selectedUserSeatTypes, l);
      t.forEach(e => {
        let t = e.user.id;
        n[t] || (n[t] = e.recommended_seat_type?.key ?? ViewAccessTypeEnum.VIEW);
      });
      s = Ed(countBySeatType) ? {
        ...countBySeatType
      } : {
        developer: 0,
        collaborator: 0,
        expert: 0
      };
      Object.values(n).forEach(e => {
        "view" !== e && isNotNullish(s[e]) && s[e] > 0 && s[e]--;
      });
      return MZ(a, n, s);
    }(a, t, e);
    s(eH(r));
    return r;
  });
  let n = useCallback(e => {
    try {
      l(t => {
        let a = function (e, t) {
          let a = n5(e, t);
          switch (a.type) {
            case "success":
              return a.value;
            case "validation":
              throw Error("failed validation");
            case "error":
              throw Error("sent error");
          }
        }(t, e);
        s(eH(a));
        return a;
      });
    } catch (e) {}
  }, [s]);
  return {
    changeUserSeatType: useCallback((e, t) => {
      n({
        type: "changeSeatType",
        userId: e,
        seatType: t
      });
    }, [n]),
    setAdditionalSeats: e => n({
      type: "setAdditionalSeats",
      additionalSeatCounts: e
    }),
    selectSeatsState: i
  };
};
function eW({
  teamId: e,
  currency: t,
  renewalTerm: a,
  eligibleTeamUsers: r,
  initCampfireSeats: i,
  onUpdateCampfireSeats: l
}) {
  let n = _$$G({
    currency: t,
    tier: Ju.PRO,
    renewalTerm: a,
    showCents: !1
  });
  let [d] = handleSuspenseRetainRelease(n);
  if (null === d.data) throw Error("Seat types data is null");
  let o = d.data;
  let {
    changeUserSeatType,
    selectSeatsState,
    setAdditionalSeats
  } = eX(e, r, i, l);
  let u = r.map(e => {
    let t = e.user;
    return {
      id: t.id,
      img_url: t.img_url,
      handle: t.handle,
      email: t.email
    };
  });
  return jsx(_$$T, {
    users: u,
    seatTypes: o,
    changeUserSeatType,
    selectSeatsState,
    setAdditionalSeats,
    tier: Ju.PRO
  });
}
let eJ = liveStoreInstance.Query({
  fetch: async e => (await _$$V.getEligibleUpgradeData(e)).data.meta,
  stalenessPolicy: "never"
});
function eY(e) {
  let t;
  let a = selectCurrentUser();
  let l = a?.id;
  let n = getPaymentFlowData();
  let x = useSelector(e => e.payment);
  let j = useSelector(e => e.teams);
  let R = e.selectedView.paymentStep;
  let O = useSelector(e => e.roles.byTeamId);
  let B = useCurrentPlanUser("TeamUpgradeCart");
  let L = B.data?.permission === FMemberRoleType.ADMIN;
  let [V, $] = useState(n?.team_name ?? "");
  let [z, G] = useState(kt);
  let ee = getEditableTeamsWithoutPaidAccess(selectPermissionsState());
  let ed = hasStarterTeamLoopholeAccess({
    userId: l,
    teams: Object.values(j),
    rolesByTeamId: O
  });
  let [e_, eN] = useState(!1);
  let [eC, ew] = useState(n?.currency || x.currency || getUserCurrency());
  let eE = e => {
    ew(e);
    to(MN({
      currency: e
    }));
  };
  let eA = x.billingPeriod;
  let {
    editorStatusChanges
  } = x;
  let {
    ignoreCurrentPlan
  } = e.selectedView;
  let eP = e.selectedView.teamId;
  let eM = useSelector(t => selectedViewToPath(t, {
    ...e.selectedView,
    paymentStep: UpgradeSteps.CONFIRM_PAY
  }));
  let eR = useSelector(t => selectedViewToPath(t, {
    ...e.selectedView,
    paymentStep: UpgradeSteps.PAYMENT_AND_ADDRESS
  }));
  let eO = useSeparateBillingShippingExperiment();
  let eD = void 0 === x.cartSelections;
  let eB = useLatestRef(eD);
  let eL = collaboratorSet.dict(e => x.cartSelections?.countBySeatType?.[e] || 0);
  let e$ = eA && getBillingCycleFromSubscriptionType(eA) || BillingCycle.YEAR;
  let eU = jv({
    billableProductKeys: collaboratorSet,
    baseQuery: {
      currency: eC,
      tier: Ju.PRO,
      renewalTerm: e$,
      unit: e$
    }
  });
  let [ez] = handleSuspenseRetainRelease(eU);
  let eF = vu(ez);
  if (null === eF.data) throw Error("Price data is null");
  let eG = eF.data;
  let eH = s$(eG);
  let eX = Vh(eL, eH);
  let [eY, eK] = useState([]);
  let [eq, eQ] = useState(null);
  let {
    createPaymentElement,
    unmountPaymentElement,
    savePayment,
    saveWithPaymentMethod,
    billingAddress,
    updateBillingAddress,
    shippingAddress,
    updateShippingAddress,
    customerLegalName,
    setCustomerLegalName,
    nameOnPaymentMethod,
    setNameOnPaymentMethod,
    vatGstId,
    setVatGstId,
    regionalVatGstId,
    setRegionalVatGstId,
    paymentMethodType,
    error
  } = lo({
    setupIntentParams: {
      redirect_url: eM,
      error_redirect_url: eR,
      subtotal_estimate: eX,
      currency: eC,
      teamId: eP ?? void 0
    },
    setPaymentMethods: eK,
    customerInfo: {
      teamId: eP
    },
    paymentFlowSource: wn.PRO_UPGRADE,
    currency: eC,
    billingPeriod: eA,
    defaultCountry: getUserIsoCodeIfNonUsd(),
    initialBillingAddress: n?.billing_address,
    initialNameOnPaymentMethod: n?.name_on_payment_method,
    initialShippingAddress: n?.shipping_address,
    initialCustomerLegalName: n?.customer_legal_name,
    initialVatGstId: n?.vat_gst_id,
    initialRegionalVatGstId: n?.regional_vat_gst_id,
    teamName: n?.team_name || V,
    canSeeBillingAddressExp: eO,
    isCheckout: !0,
    isCampfireCart: !0
  });
  let td = error?.code === dl.UNINITIALIZED_STRIPE_ELEMENTS_ERROR;
  let to = useDispatch();
  let tc = Ud({
    teamId: eP,
    canSeeBillingAddressExp: eO
  });
  let [tm] = setupResourceAtomHandler(eJ({
    teamId: eP
  }), {
    enabled: !!eP
  });
  let t_ = "loaded" !== tm.status;
  let tu = {
    user: {
      id: l,
      img_url: a.img_url,
      handle: a.handle,
      email: a.email
    },
    id: "",
    team_id: eP,
    recommended_seat_type: {
      key: ProductAccessTypeEnum.EXPERT,
      license_types: []
    }
  };
  useEffect(() => {
    "loaded" === tm.status && R9({
      eligibleTeamIds: [eP],
      eligibleTeamUsers: tm.data.eligible_team_users,
      tier: Ju.PRO,
      step: R
    });
  }, [tm]);
  let tp = td || x.submitPending;
  let th = useCallback(() => {
    to(selectViewAction({
      ...e.selectedView,
      paymentStep: UpgradeSteps.CHOOSE_PLAN,
      previousView: e.selectedView.previousView,
      ignoreCurrentPlan,
      billingPeriod: eA
    }));
  }, [to, e.selectedView, ignoreCurrentPlan, eA]);
  let tg = eP ? j[eP]?.name : V;
  let tx = x.displayName || tg;
  pI({
    loadingPaidEditors: tc,
    teamId: eP,
    teamName: eP ? void 0 : V,
    setTeamName: eP ? void 0 : $,
    collaborators: eP || e.selectedView.teamFlowType !== UpgradeAction.CREATE ? void 0 : z,
    setCollaborators: eP || e.selectedView.teamFlowType !== UpgradeAction.CREATE ? void 0 : G
  });
  let tf = useSelector(e => e.currentUserOrgId);
  let tv = ignoreCurrentPlan ? null : tf;
  let ty = useSelector(e => tv ? e.orgById[tv] : null);
  let tj = _$$Q({
    currentOrgId: tv,
    currentTeamId: null
  });
  let tS = tj.data?.currentUser?.baseOrgUser?.workspaceUsers;
  let tT = tS?.find(e => e?.isMainWorkspace)?.workspaceId;
  let {
    cannotCreateTeamReason
  } = LM(ty, tT ?? null);
  let tb = useSelector(e => isOrgUserExternallyRestrictedFromState(e));
  _$$h(() => {
    to(postUserFlag({
      entered_pro_cart_flow: !0
    }));
  });
  _$$h(() => {
    let e = document.createElement("div");
    e.style.position = "fixed";
    e.style.inset = "0";
    e.style.background = "var(--color-bg-secondary)";
    e.style.zIndex = "-1";
    document.body.appendChild(e);
    return () => {
      document.body.removeChild(e);
    };
  });
  let [tC, tw] = useState(!1);
  useEffect(() => {
    R === UpgradeSteps.PAYMENT_AND_ADDRESS && td && th();
  });
  useEffect(() => {
    R === UpgradeSteps.CONFIRM_PAY && !tc && eD && trackEventAnalytics("pro_cart_selections_undefined_on_review_step", {
      teamId: eP,
      userId: l
    });
  }, [eD, tc, R, l, eP]);
  useEffect(() => {
    R === UpgradeSteps.CONFIRM_PAY && eB && !eD && trackEventAnalytics("monetization_upgrades.hydrated_pro_cart_selections", {
      teamId: eP,
      loadingPaidEditors: tc
    });
  }, [eD, eB, tc, R, eP]);
  let tE = useSelector(e => !!e.user && isStudentValidated(e.user));
  useEffect(() => {
    tE && e.selectedView.isEduTeam ? to(Lo({
      billingPeriod: SubscriptionType.STUDENT
    })) : e.selectedView.isEduTeam && to(Lo({
      billingPeriod: SubscriptionType.UNSPECIFIED
    }));
  }, [to, e.selectedView.isEduTeam, tE]);
  useEffect(() => {
    e.selectedView.teamFlowType === UpgradeAction.CREATE_AND_UPGRADE && (tb || cannotCreateTeamReason === z4.TEAM_CREATION_CONTROL) && (customHistory.redirect("/"), to(FlashActions.error(getI18nString("team_creation.missing_team_creation_controls"))));
  }, [e.selectedView.teamFlowType, tb, cannotCreateTeamReason, to]);
  let tA = x.currencyToSwitch;
  useEffect(() => {
    tA && ew(tA);
  }, [ew, tA]);
  useEffect(() => {
    eY[0] && (eQ(eY[0]), eN(!0));
  }, [eY, eQ, eN]);
  let tI = eA === SubscriptionType.STUDENT;
  let tk = z.filter(e => e && e.trim()).map(e => e.trim());
  let tP = tk.filter(e => !isValidEmail(e));
  let tM = !!a && tk.filter(e => e === a.email).length > 0;
  let tR = async t => {
    t.preventDefault();
    let a = new URL(window.location.href).searchParams;
    let s = a.get("onCompleteRedirectFileKey");
    let r = a.get("onCompleteRedirectNodeId");
    t.currentTarget && t.currentTarget.blur();
    let i = kR(e.selectedView.paymentStep, e.selectedView.teamFlowType, eA, x.promo, e.selectedView.planType || TeamType.UNDETERMINED);
    R === UpgradeSteps.CREATE_TEAM && ($(V.trim()), to(selectViewAction({
      ...e.selectedView,
      teamId: null,
      paymentStep: i,
      ignoreCurrentPlan,
      billingPeriod: eA
    })));
    R === UpgradeSteps.ADD_COLLABORATORS && (tP.length ? to(FlashActions.error(getI18nString("pro_cart.add_collaborators.error.email_is_invalid", {
      string: tP[0]
    }))) : tM ? to(FlashActions.error(getI18nString("team_view.team_permissions_modal.youre_not_able_to_send_an_invite_to_yourself"))) : to(selectViewAction({
      ...e.selectedView,
      paymentStep: i,
      ignoreCurrentPlan,
      billingPeriod: eA
    })));
    R === UpgradeSteps.CHOOSE_PLAN ? tI ? to(selectViewAction({
      ...e.selectedView,
      paymentStep: i,
      billingPeriod: SubscriptionType.STUDENT,
      ignoreCurrentPlan
    })) : (to(Je({
      editorStatusChanges
    })), to(selectViewAction({
      ...e.selectedView,
      paymentStep: i,
      billingPeriod: x.billingPeriod,
      ...(s ? {
        searchParams: {
          onCompleteRedirectFileKey: s,
          onCompleteRedirectNodeId: r
        }
      } : {}),
      ignoreCurrentPlan
    }))) : R === UpgradeSteps.PAYMENT_AND_ADDRESS && (to(I2({
      submitPending: !0
    })), e_ && eq ? await saveWithPaymentMethod(eq) : await savePayment(), to(I2({
      submitPending: !1
    })));
  };
  let tO = e.selectedView.teamFlowType === UpgradeAction.CREATE ? () => {
    to(KQ({
      teamName: V,
      orgAccess: FAccessLevelType.PUBLIC,
      inviteEmails: tk,
      teamFlowType: e.selectedView.teamFlowType,
      onSuccess: () => {
        Al(a?.id);
      },
      ignoreCurrentPlan
    }));
  } : void 0;
  [UpgradeAction.CREATE_AND_UPGRADE, UpgradeAction.UPGRADE_EXISTING_TEAM].includes(e.selectedView.teamFlowType) && (1 === ee.length ? t = t => {
    t = t || e.selectedView.billingPeriod;
    let a = UpgradeAction.UPGRADE_EXISTING_TEAM;
    to(selectViewAction({
      ...e.selectedView,
      teamFlowType: a,
      teamId: ee[0].id,
      paymentStep: kR(e.selectedView.paymentStep, a, t || null, x.promo, TeamType.TEAM, UpgradeSteps.CHOOSE_PLAN),
      planType: TeamType.UNDETERMINED,
      billingPeriod: t,
      ignoreCurrentPlan
    }));
  } : ee.length > 1 && (t = e => {
    e && to(Lo({
      billingPeriod: e
    }));
    to(showModalHandler({
      type: dR,
      data: {
        plan: _$$I.PRO,
        upsellSource: UpsellModalType.UPGRADE_EXISTING_FROM_TEAM_CREATION
      }
    }));
  }));
  let tD = a && lX({
    teamId: eP,
    userId: a.id
  })?.is3DS;
  return e.selectedView.teamFlowType === UpgradeAction.CREATE_AND_UPGRADE && (tb || cannotCreateTeamReason === z4.TEAM_CREATION_CONTROL) ? jsx(Fragment, {}) : jsx(TrackingProvider, {
    name: e0.TEAM_CHECKOUT_FLOW,
    properties: {
      teamId: e.selectedView.teamId,
      planType: e.selectedView.planType,
      entryPoint: e.selectedView.entryPoint,
      step: R,
      currency: eC,
      renewalTerm: e$,
      prices: Jh(eG)
    },
    enabled: !(tc || t_),
    trackingOptions: getRumLoggingConfig(),
    children: jsxs("div", {
      "data-testid": "team-upgrade-billing-remodel",
      className: cssBuilderInstance.selectNone.$,
      children: [jsx(vU, {
        selectedView: e.selectedView,
        isCampfireCart: !0
      }), jsxs("div", {
        style: styleBuilderInstance.mxAuto.add({
          padding: "98px 48px 48px",
          maxWidth: "1400px"
        }).$,
        children: [R !== UpgradeSteps.CREATE_TEAM && jsx(eZ, {
          step: R,
          teamName: tg ?? "",
          renewalTerm: e$
        }), R === UpgradeSteps.PLAN_COMPARISON && jsx(F, {
          chooseStarterPlan: t ? void 0 : tO,
          chooseEduPlan: () => {
            eP ? to(Vm({
              teamId: eP
            })) : to(showModalHandler({
              type: _$$q
            }));
          },
          chooseProPlan: t => {
            to(Lo({
              billingPeriod: t
            }));
            let a = isCreateOrUpgrade(e.selectedView.teamFlowType) ? e.selectedView.teamFlowType : UpgradeAction.CREATE_AND_UPGRADE;
            to(selectViewAction({
              ...e.selectedView,
              teamFlowType: a,
              paymentStep: kR(e.selectedView.paymentStep, a, t, x.promo, TeamType.TEAM),
              billingPeriod: t,
              planType: TeamType.TEAM,
              openInNewTab: !1,
              ignoreCurrentPlan
            }));
          },
          chooseOrgPlan: () => {
            to(Bq({
              currency: eC,
              newTeamProps: {
                teamFlowType: e.selectedView.teamFlowType,
                newTeamName: V,
                inviteEmails: tk,
                previousView: e.selectedView
              },
              upsellSource: UpsellModalType.UPGRADE_NEW_TEAM_V2
            }));
          },
          currency: eC,
          updateCurrency: eE,
          upgradeExistingTeam: t
        }), R === UpgradeSteps.CREATE_TEAM && jsx(_$$y, {
          type: e.selectedView.teamFlowType === UpgradeAction.CREATE ? _$$I2.STARTER : _$$I2.PRO,
          teamName: V,
          setTeamName: $,
          onNext: tR,
          upgradeExistingTeam: t ? () => t?.(eA) : void 0,
          promo: x.promo
        }), R === UpgradeSteps.ADD_COLLABORATORS && jsx(D, {
          disableInviteButton: !tk.length,
          collaborators: z,
          setCollaborators: G,
          willSendInvites: tR,
          skipInviteStep: () => {
            if (G(kt), l) {
              let e = lX({
                teamId: null,
                userId: l
              });
              e && dT(l, {
                ...e,
                newCollaborators: kt
              });
            }
            to(selectViewAction({
              ...e.selectedView,
              paymentStep: UpgradeSteps.PLAN_COMPARISON,
              ignoreCurrentPlan
            }));
          }
        }), R === UpgradeSteps.CONFIRM_PAY ? jsxs(Fragment, {
          children: [tD && jsx("div", {
            className: cssBuilderInstance.mxAuto.alignLeft.mb16.$,
            children: jsx(_$$_, {
              color: _$$S.INFORMATION,
              text: getI18nString("pro_cart.review.extra_validation")
            })
          }), tc || eD ? jsx(_$$f, {}) : jsx(_$$j, {
            billingAddress,
            billingInterval: e$,
            countByBillableProductKey: eL,
            currency: eC,
            displayName: tx ?? "",
            hasUpgradeSucceeded: tC,
            isRequestPending: x.submitPending,
            legalName: x.legalName,
            navigateToEditDetails: () => {
              to(selectViewAction({
                ...e.selectedView,
                paymentStep: UpgradeSteps.PAYMENT_AND_ADDRESS,
                previousView: e.selectedView.previousView,
                ignoreCurrentPlan,
                billingPeriod: eA
              }));
            },
            onSubmit: () => {
              let t = () => {
                tw(!0);
                clearPaymentFlowData();
                OI(to);
                isCreateOrUpgrade(e.selectedView.teamFlowType) && null === eP && Al(l);
              };
              if (e.selectedView.teamId && tI) to(Nj({
                teamId: e.selectedView.teamId
              }));else if (e.selectedView.teamId && x.promo) {
                let a = e.selectedView.teamId;
                to(S_({
                  teamId: a,
                  teamName: j[a].name,
                  promoCode: x.promo?.code || "",
                  onSuccess: () => {
                    t();
                    _H();
                    to(_$$Ay({
                      promo: null
                    }));
                    l ? e.selectedView.previousView ? selectViewAction(e.selectedView.previousView) : switchAccountAndNavigate({
                      workspace: {
                        userId: l,
                        orgId: null,
                        teamId: a
                      },
                      view: {
                        view: "allProjects"
                      }
                    }) : to(selectViewAction(e.selectedView.previousView || {
                      view: "team",
                      teamId: a
                    }));
                  },
                  onError: () => {
                    _H();
                    to(_$$Ay({
                      promo: null
                    }));
                    to(selectViewAction({
                      ...e.selectedView,
                      paymentStep: UpgradeSteps.PLAN_COMPARISON,
                      ignoreCurrentPlan
                    }));
                  }
                }));
              } else {
                to(postUserFlag({
                  completed_pro_cart_flow: !0
                }));
                let {
                  subtotal,
                  taxTotal,
                  total
                } = ZY({
                  countBySeatType: eL,
                  applicablePrices: eH,
                  taxPercent: x.taxes?.tax_percent ?? 0
                });
                let i = GL({
                  subtotal,
                  taxTotal,
                  total
                });
                to(I2({
                  submitPending: !0
                }));
                to(gk({
                  teamId: e.selectedView.teamId,
                  selectedCurrency: eC,
                  teamName: V,
                  teamFlowType: e.selectedView.teamFlowType,
                  invites: tk,
                  hasSelectedStudentTeam: tI,
                  onSuccess: t,
                  displayedCostBreakdown: i,
                  isCampfireCart: !0,
                  inStarterTeamLoopholes: ed,
                  displayedPriceKeys: vm(eG)
                }));
              }
            },
            onSubmitTrackingProperties: {
              selectedUserSeatTypes: Tj(x.cartSelections?.selectedUserSeatTypes),
              countBySeatType: gS(eL),
              isTeamAdmin: L,
              ...ZY({
                countBySeatType: eL,
                applicablePrices: eH,
                taxPercent: x.taxes?.tax_percent ?? 0
              })
            },
            shippingAddress,
            taxPercent: x.taxes?.tax_percent,
            tier: Ju.PRO,
            title: getI18nString("checkout.upgrade_to_a_professional_plan"),
            userEmail: a?.email || ""
          })]
        }) : jsxs("div", {
          style: styleBuilderInstance.grid.add({
            gridTemplateColumns: "1fr 280px",
            gap: "48px"
          }).$,
          children: [R === UpgradeSteps.CHOOSE_PLAN && (tc || t_ && !ed ? jsx(_$$f, {}) : jsx(eW, {
            teamId: e.selectedView.teamId ?? "",
            currency: eC,
            renewalTerm: e$,
            eligibleTeamUsers: tm.data?.eligible_team_users ?? [tu],
            initCampfireSeats: x.cartSelections,
            onUpdateCampfireSeats: e => to(qU({
              cartSelections: e
            }))
          })), R === UpgradeSteps.PAYMENT_AND_ADDRESS && jsx(eV, {
            billingAddress,
            canSeeBillingAddressExp: eO,
            createPaymentElement,
            enableSavedPaymentMethods: e_,
            error,
            isCampfireCart: !0,
            legalCompanyName: customerLegalName,
            nameOnPaymentMethod,
            onRegionalVatGstIdChange: setRegionalVatGstId,
            onVatGstIdChange: setVatGstId,
            paymentFlow: wn.PRO_UPGRADE,
            paymentMethodType,
            paymentMethods: eY,
            regionalVatGstId,
            selectedPaymentMethod: eq,
            setEnableSavedPaymentMethods: eN,
            setSelectedPaymentMethod: eQ,
            shippingAddress,
            unmountPaymentElement,
            updateBillingAddress,
            updateLegalCompanyName: setCustomerLegalName,
            updateNameOnPaymentMethod: setNameOnPaymentMethod,
            updateShippingAddress,
            vatGstId
          }), [UpgradeSteps.CHOOSE_PLAN, UpgradeSteps.PAYMENT_AND_ADDRESS].includes(R) && jsx(_$$z, {
            billingInterval: e$,
            buttonText: R === UpgradeSteps.PAYMENT_AND_ADDRESS ? getI18nString("pro_cart.sidebar.next_review") : getI18nString("pro_cart.sidebar.next_payment_information"),
            canEnforcePaidSeatMinimum: R === UpgradeSteps.CHOOSE_PLAN,
            countByBillableProductKey: eL,
            currency: eC,
            isButtonDisabled: tp,
            isLoading: x.submitPending,
            onClickNext: tR,
            onSwitchBillingInterval: e => {
              analyticsEventManager.trackDefinedEvent("monetization_upgrades.checkout_change_renewal_term", {
                teamId: eP ?? void 0,
                renewalTerm: e
              });
              to(Lo({
                billingPeriod: getSubscriptionTypeFromBillingCycle(e)
              }));
            },
            onSwitchCurrency: eE,
            tier: Ju.PRO,
            title: getI18nString("checkout.your_professional_plan"),
            trackingProperties: {
              selectedUserSeatTypes: Tj(x.cartSelections?.selectedUserSeatTypes),
              countBySeatType: gS(eL),
              savedPaymentMethodId: e_ ? eq?.id : void 0
            }
          })]
        })]
      })]
    })
  });
}
export function $$eK0(e) {
  return jsx(ErrorBoundaryCrash, {
    team: _$$e.MONETIZATION_UPGRADES,
    boundaryKey: "TeamUpgradeBillingRemodel",
    fallback: errorBoundaryFallbackTypes.DEFAULT_FULL_PAGE,
    hasCustomWASMBuild: y4,
    children: jsx(eY, {
      ...e
    })
  });
}
function eZ({
  step: e,
  teamName: t,
  renewalTerm: a
}) {
  let r = useCartSeatSelectionClarityExperiment();
  let i = jsx(Ph, {
    href: "/pricing",
    trackingProperties: {
      trackingDescriptor: UpgradeAction.LEARN_MORE_ABOUT_SEATS
    },
    newTab: !0,
    trusted: !0,
    children: renderI18nText("checkout.learn_more_about_seats")
  });
  return jsxs("div", {
    className: cssBuilderInstance.mb32.$,
    "data-testid": "cart-pro-header",
    children: [jsx("h2", {
      className: cssBuilderInstance.font15.lh24.fontMedium.$,
      children: function (e, t, a) {
        switch (t = t || getI18nString("checkout.select_seats_header.your_team"), e) {
          case UpgradeSteps.PLAN_COMPARISON:
            return renderI18nText("pro_cart.choose_plan.choose_a_plan_for_your_new_team");
          case UpgradeSteps.CHOOSE_PLAN:
            if (a) return renderI18nText("checkout.select_seats_header_exp", {
              teamName: t
            });
            return renderI18nText("checkout.select_seats_header", {
              teamName: t
            });
          case UpgradeSteps.PAYMENT_AND_ADDRESS:
            return renderI18nText("checkout.enter_your_payment_details");
          case UpgradeSteps.CONFIRM_PAY:
            return renderI18nText("checkout.everything_look_good");
          default:
            throwError(e);
        }
      }(e, t, r())
    }), e === UpgradeSteps.CHOOSE_PLAN && jsx("p", {
      className: cssBuilderInstance.colorTextSecondary.font13.mt8.$,
      children: renderI18nText("checkout.select_seats_table.seat_types_have_been_suggested", {
        learnMoreAboutSeatsLink: i
      })
    }), e === UpgradeSteps.CONFIRM_PAY && jsx("p", {
      className: cssBuilderInstance.colorTextSecondary.font13.mt8.$,
      children: renderI18nText("checkout.confirm_your_plan_seats_and_payment_details_then_you_re_all_set")
    }), UR() && jsx(_$$W, {
      billingPeriod: getSubscriptionTypeFromBillingCycle(a) ?? void 0,
      isCampfireCart: !0
    })]
  });
}
export const TeamUpgradePageBillingRemodel = $$eK0;