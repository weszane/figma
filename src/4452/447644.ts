import { registerModal } from "../905/102752";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useState, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../905/915765";
import { lQ } from "../905/934246";
import { ServiceCategories as _$$e } from "../905/165054";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import c from "classnames";
import { ResourceStatus } from "../905/957591";
import { R as _$$R } from "../905/165069";
import { useSubscription } from "../figma_app/288654";
import { useSprigWithSampling } from "../905/99656";
import { BadgeColor } from "../figma_app/919079";
import { gw, MM, wv } from "../figma_app/236327";
import { SecureLink } from "../figma_app/637027";
import { h1 } from "../905/986103";
import { Wi, JR } from "../figma_app/162641";
import { y2 } from "../figma_app/563413";
import { G as _$$G } from "../905/750789";
import { i as _$$i } from "../905/186077";
import { s as _$$s2 } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { sx } from "../905/941192";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { AutoLayout, Spacer } from "../905/470281";
import { V as _$$V } from "../905/355181";
import { B as _$$B } from "../905/261906";
import { RR } from "../figma_app/307841";
import { k as _$$k } from "../figma_app/618031";
import { tI as _$$tI } from "../figma_app/599327";
import { Y as _$$Y2 } from "../figma_app/515088";
import { aN, V4, Td, kl, Z4, x9, A$, BC, W4 } from "../4452/846771";
import { ps, i5, V7, z7, ZY, Xv, r1, Lv, Bk, MI, L8, OL, Zm, k_ } from "../figma_app/845611";
import { eS as _$$eS, Rj, Zu } from "../4452/396452";
import { E as _$$E } from "../4452/428395";
import { s as _$$s3, u as _$$u } from "../4452/791117";
import { k as _$$k2 } from "../4452/48052";
import { W as _$$W } from "../4452/420937";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { Xf } from "../figma_app/153916";
import { $z, Me } from "../figma_app/617427";
import { getRumLoggingConfig } from "../905/16237";
import { hideModal, showModalHandler } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { TrackingProvider } from "../figma_app/831799";
import { FOrganizationLevelType } from "../figma_app/421473";
import { e0 } from "../905/696396";
import { m as _$$m } from "../4452/114445";
import { xo, OW } from "../figma_app/425283";
import { v as _$$v } from "../4452/562448";
import { b as _$$b } from "../4452/320061";
import { B as _$$B2 } from "../4452/541264";
import { K as _$$K } from "../905/628118";
import { ProductAccessTypeEnum, isValidAccessType, ViewAccessTypeEnum } from "../905/513035";
import { N_ } from "../905/332483";
import { Zx, AG } from "../figma_app/217457";
import { d as _$$d } from "../figma_app/603561";
import { q as _$$q } from "../4452/876838";
import { QL, EM } from "../905/609392";
import { getUserId } from "../905/372672";
import { MX, EQ } from "../figma_app/684446";
import { FUserRoleType } from "../figma_app/191312";
import { AdminRequestDashboardView, AdminRequestDashOrgInfo } from "../figma_app/43951";
import { UpgradeRequestSetting } from "../figma_app/482728";
import { KindEnum } from "../905/129884";
import { w as _$$w } from "../905/281010";
import { az } from "../figma_app/805373";
import { Cj } from "../905/270084";
import { VU } from "../4452/650793";
import { h as _$$h } from "../905/207101";
import { qf } from "../4452/780544";
import { g as _$$g } from "../4452/983384";
import { e as _$$e2 } from "../905/621515";
import { r1 as _$$r } from "../figma_app/545877";
import { rq } from "../905/425180";
import { Clh } from "../figma_app/6204";
import { k as _$$k3 } from "../905/443820";
import { U as _$$U } from "../905/275247";
import { n as _$$n } from "../4452/550447";
import { a as _$$a } from "../905/964520";
import { V as _$$V2 } from "../figma_app/312987";
import { Um } from "../905/848862";
import { x1, U0, cp, Mc, eF as _$$eF, jR, P_, M2, $h, KY, h4 } from "../4452/710166";
import { oi } from "../figma_app/527041";
var u = c;
let ee = registerModal(function (e) {
  let t;
  let a = useModalManager(e);
  let n = useDispatch();
  let i = Xf(e.plan.key.parentId, e.plan.key.type !== FOrganizationLevelType.TEAM);
  let l = useSelector(e => e.teamBilling);
  let o = e.plan.key.type === FOrganizationLevelType.TEAM ? l.summary.currency : i.data?.currency;
  let d = () => n(hideModal());
  t = !o || e.isELA ? renderI18nText("admin_dashboard.seat_requests.approve_all_modal.body.no_cost", {
    numRequests: e.requestsToApprove.length
  }) : renderI18nText("admin_dashboard.seat_requests.bulk_approve_modal.body");
  let c = getRumLoggingConfig();
  return jsx(TrackingProvider, {
    name: e0.BULK_APPROVE_CONFIRMATION_MODAL,
    properties: {
      planType: e.plan.key.type,
      planId: e.plan.key.parentId
    },
    children: jsx(ModalRootComponent, {
      manager: a,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: renderI18nText("admin_dashboard.seat_requests.approve_all_modal.title")
          })
        }), jsx(nB, {
          children: t
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($z, {
              variant: "secondary",
              onClick: d,
              trackingProperties: {
                trackingDescriptor: _$$c.CANCEL
              },
              trackingOptions: c,
              children: renderI18nText("admin_dashboard.seat_requests.approve_all_modal.cancel")
            }), jsx($z, {
              variant: "primary",
              onClick: () => {
                d();
                e.onConfirm();
              },
              trackingProperties: {
                trackingDescriptor: _$$c.APPROVE
              },
              trackingOptions: c,
              children: renderI18nText("admin_dashboard.seat_requests.approve_all_modal.approve_number_of_requests", {
                numRequests: e.requestsToApprove.length
              })
            })]
          })
        })]
      })
    })
  });
}, "BulkApproveConfirmationModal");
function eR(e) {
  let t = _$$r("seen_admin_seat_approval_settings_onboarding");
  let a = useAtomWithSubscription(t);
  let {
    show,
    isShowing,
    complete
  } = _$$e2({
    overlay: Clh,
    priority: _$$g(Clh)
  }, [a]);
  _$$h(() => {
    show({
      canShow: e => !e
    });
  });
  return jsx(rq, {
    clickOutsideToHide: !0,
    description: renderI18nText("admin_dashboard.seat_requests.seat_approval_settings_onboarding_overlay.description"),
    emphasized: !0,
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText("general.got_it"),
      onClick: complete,
      type: "button",
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    targetKey: qf,
    title: renderI18nText("admin_dashboard.seat_requests.seat_approval_settings_onboarding_overlay.title"),
    trackingContextName: "",
    userFlagOnShow: "seen_admin_seat_approval_settings_onboarding"
  });
}
function eM({
  request: e,
  plan: t,
  handleRequests: a,
  isELA: n,
  isProrationBillingEnabled: r
}) {
  let i = useAtomWithSubscription(aN);
  let l = useAtomWithSubscription(V4);
  let {
    calculateCostForSeatTypeIncrease
  } = _$$n(t, e);
  let c = e.billableProductKey;
  let u = calculateCostForSeatTypeIncrease();
  let m = !!i || l.has(e.id);
  let _ = "approving" === i && l.has(e.id);
  let p = getRumLoggingConfig();
  return _ ? jsx("div", {
    className: "x78zum5 x6s0dn4 xe8ttls",
    children: jsx(_$$k3, {
      size: "sm"
    })
  }) : jsx(Me, {
    "aria-label": getI18nString("admin_dashboard.requests.approve"),
    onClick: t => {
      t.stopPropagation();
      a({
        approve: !0,
        selectedRequestIds: [e.id],
        shouldProcessAsSingleRequest: !0
      });
    },
    disabled: m,
    trackingProperties: {
      trackingDescriptor: _$$c.APPROVE
    },
    htmlAttributes: {
      "data-testid": "approve-button-single",
      ...Td(c, u, n, r)
    },
    trackingOptions: p,
    children: jsx(_$$U, {})
  });
}
function eL({
  request: e,
  setHighlightedItemId: t
}) {
  let a = getRumLoggingConfig();
  return jsx(Me, {
    "aria-label": getI18nString("admin_dashboard.requests.details.title"),
    onClick: a => {
      a.stopPropagation();
      t(e.id);
    },
    trackingProperties: {
      trackingDescriptor: _$$c.REQUEST_DETAILS,
      requestId: e.id
    },
    trackingOptions: a,
    children: jsx(_$$a, {})
  });
}
function eB(e) {
  let t = useDispatch();
  let a = Um();
  let n = a?.type === e.type;
  return jsxs(_$$V2, {
    showingDropdown: n,
    type: e.type,
    dispatch: t,
    isRightAligned: !0,
    children: [jsx("div", {
      "data-testid": e.dataTestId,
      children: e.isDefaultFilter ? e.defaultFilterLabel : e.filterLabel
    }), n && jsx(gw, {
      dispatch: t,
      className: x1,
      style: a.data.position,
      children: e.renderFilterOptions()
    })]
  });
}
let eG = "approving-all-requests";
let eV = "RequestFlyout";
export function $$e$0({
  plan: e,
  isOrgAdmin: t,
  defaultAdminEntryPoint: a
}) {
  let c;
  let V = e?.key.type === "team" ? ps.TEAM : ps.ORG;
  let $ = e.key.parentId ?? "";
  let W = _$$B2();
  let z = useRef(null);
  let H = useRef(null);
  let J = _$$k();
  let eI = RR();
  let eE = getRumLoggingConfig();
  let eS = useDispatch();
  let {
    seatAvailability
  } = _$$k2(e);
  let {
    Sprig
  } = useSprigWithSampling();
  let [ew, eN] = useState(!1);
  let [eC, ek] = useState("");
  let [eq, eO] = useState(null);
  let [eP, eD] = useState(i5.NEWEST_FIRST);
  let [e$, eW] = useAtomValueAndSetter(aN);
  let ez = useRef(0);
  let [eH, eQ] = useState(0);
  let eY = useSelector(({
    selectedView: e
  }) => e);
  let eK = a ?? kl;
  let {
    dispatchSuccess,
    dispatchSuccessWithRequesterName,
    dispatchRequestAlreadyHandled,
    dispatchProcessingError,
    dispatchGenericError
  } = _$$s3();
  let [e4, e5] = useAtomValueAndSetter(_$$Y2);
  let [e2, e8] = useAtomValueAndSetter(V4);
  let [e3, e6] = useState(new Set());
  let [e7, e9] = useState(new Set());
  let [te, tt] = useState(null);
  let [ta, ts] = useState(0);
  let [tn, tr] = useState(0);
  let [ti, tl] = useState(V7.ALL_MANAGED_REQUESTS);
  let [to, td] = useState(ti);
  let [tc, tu] = useState(null);
  let tm = MX();
  let t_ = getUserId();
  let tp = V === ps.ORG;
  let tg = useMemo(() => tp ? EQ(tm, t_, !1).groupsUserIsAdminOf : [], [tm, t_, tp]);
  let th = useMemo(() => tg ? tg.map(e => e.id) : [], [tg]);
  let tx = useMemo(() => ti === V7.ALL_MANAGED_REQUESTS ? t ? [null, ...th] : th : null, [ti, th, t]);
  let tf = useMemo(() => {
    switch (to) {
      case V7.ALL_ORG_REQUESTS:
        return null;
      case V7.ALL_MANAGED_REQUESTS:
        return t ? [null, ...th] : th;
      case V7.ALL_UNASSIGNED_REQUESTS:
        return t ? [null] : [];
      default:
        if (!(to in V7)) return [to];
        return null;
    }
  }, [to, th, t]);
  let tv = useMemo(() => JSON.stringify({
    search_query: eC,
    billable_product_key: eq,
    refreshNonce: ta,
    sortTypeNonce: eP,
    billing_group_ids: tf,
    org_user_permission: tc
  }), [eC, eq, ta, eP, tf, tc]);
  let tb = useMemo(() => JSON.stringify({
    billing_group_ids: tx
  }), [tx]);
  let ty = useSubscription(AdminRequestDashboardView({
    planType: V,
    planId: $,
    sortOrder: eP === i5.NEWEST_FIRST ? "desc" : "asc",
    filterParams: tv,
    firstPageSize: 25
  }));
  let tj = z7({
    planType: V,
    planId: $,
    filterParams: tv,
    processedRequestIds: e7
  });
  let tI = z7({
    planType: V,
    planId: $,
    filterParams: JSON.stringify({
      refreshNonce: tv,
      billing_group_ids: tx
    }),
    processedRequestIds: e7
  });
  let tE = useSubscription(AdminRequestDashOrgInfo({
    orgId: $
  }), {
    enabled: tp
  });
  let tS = "loaded" === ty.status;
  let tT = tS && !!ty.data?.adminDashboardRequests?.isLoadingNextPage;
  let tA = tS && !!ty.data?.adminDashboardRequests?.hasNextPage();
  let [tw, tN] = useState({
    loading: !0,
    requestId: void 0,
    request: void 0
  });
  let tR = tp && "loaded" === tE.status && tE.data?.org?.bigmaEnabledAt && t;
  let tC = tp && "loaded" === tE.status && t ? tE.data?.org?.orgSharedSetting?.configuredUpgradeRequestSetting : void 0;
  let tk = ZY({
    isIntendedAudience: tp && "loaded" === tE.status && tE.data?.org?.bigmaEnabledAt !== null && !1 === t
  });
  _$$u(tp, t);
  let tq = _$$d({
    reportErrorsToTeam: _$$e.SCALE
  });
  let tM = !tS || tT || tA || tw.loading;
  let tO = tj?.length ?? 0;
  let tL = tI?.length ?? 0;
  let tP = [V, $].toString();
  let tD = e4[tP];
  let tF = tL ? Math.max(tL, 0) : 0;
  let tB = tI && tD !== tF;
  let tU = tL > 0 || null === tI && !!tD;
  useEffect(() => {
    if (tB) {
      let e = {
        ...e4
      };
      e[tP] = tF;
      e5(e);
    }
  }, [tB, tP, tF]);
  let tG = ew && null === tO;
  useEffect(() => {
    tS && tt(new Date());
  }, [tS]);
  useEffect(() => {
    let e = QL("approvalRequestId");
    e ? tN(t => ({
      ...t,
      requestId: e
    })) : tN(e => ({
      ...e,
      loading: !1
    }));
    EM("approvalRequestId");
  }, []);
  useEffect(() => {
    async function e(e) {
      let t = await _$$q(e, eS);
      t ? tN(e => ({
        ...e,
        request: t,
        loading: !1
      })) : tN(e => ({
        ...e,
        loading: !1
      }));
    }
    tw.requestId && e(tw.requestId);
  }, [tw.requestId, eS]);
  _$$R(() => {
    if (tw.requestId && tw.request) {
      let e = tw.request.requestableOrgUser?.user?.name ?? tw.request.requestableTeamUser?.user?.name ?? "";
      t4({
        approve: !0,
        selectedRequestIds: [tw.requestId],
        shouldProcessAsSingleRequest: !0,
        singleRequestSelectionMethod: Xv.EMAIL,
        successHandler: e ? () => {
          dispatchSuccessWithRequesterName({
            requesterName: e
          });
          tN({
            loading: !1,
            requestId: void 0,
            request: void 0
          });
        } : dispatchSuccess
      });
    }
  }, tM, e => !e);
  let tV = useMemo(() => {
    let e = new Set(e3);
    if (!tS || !ty?.data?.adminDashboardRequests) return [];
    let t = ty.data?.adminDashboardRequests.reduce((t, a) => {
      let s = a.id;
      let n = a.request;
      let r = a.user;
      let i = a.userId;
      if (n.status !== ResourceStatus.Loaded || r.status !== ResourceStatus.Loaded) return t;
      let l = n.data;
      let o = r.data;
      if (!l || !o) {
        e.has(s) || e.add(s);
        return t;
      }
      if (!l.billableProductKey) return t;
      let d = Zx(l.billableProductKey);
      if (e.has(s)) return t;
      if ("pending" !== l.status) {
        e.has(s) || e.add(s);
        return t;
      }
      let c = !!l.lastNudgedAt;
      if (s === tw.requestId) {
        e.has(s) || e.add(s);
        return t;
      }
      let u = l.requestableTeamUser?.currentSeat;
      t.push({
        id: s,
        createdAt: l.createdAt,
        updatedAt: l.updatedAt,
        name: o.name,
        email: o.email,
        imgUrl: o.imgUrl,
        message: l.message && l.message.trim().length > 0 ? l.message : null,
        jobTitle: o.profile?.jobTitle ?? null,
        userId: i,
        hasBeenNudged: c,
        lastNudgedAt: l.lastNudgedAt,
        billableProductKey: d,
        currentSeat: {
          billableProductKey: u?.billableProductKey,
          billingInterval: u?.billingInterval
        },
        orgPermission: l.requestableOrgUser?.permission
      });
      return t;
    }, []);
    e9(t => new Set([...t, ...new Set(e)]));
    return t.sort((e, t) => eP === i5.NEWEST_FIRST ? t.updatedAt.getTime() - e.updatedAt.getTime() : e.updatedAt.getTime() - t.updatedAt.getTime());
  }, [tS, ty.data, tw.requestId, e3, eP]);
  let t$ = useCallback(e => tV.find(t => t.id === e), [tV]);
  let {
    highlightedItem,
    setHighlightedItemId,
    clearHighlightedItemId
  } = _$$v(t$, {
    interactionConfig: [{
      ref: H,
      shouldClearHighlight: !1
    }, {
      ref: z,
      shouldClearHighlight: !1
    }, {
      ref: W,
      shouldClearHighlight: !0
    }],
    onHighlight: () => {
      H.current?.focus();
    },
    onClear: _$$b(eV)
  });
  let tQ = useMemo(() => new Set(tV?.filter(e => [ProductAccessTypeEnum.DEVELOPER, ProductAccessTypeEnum.EXPERT].includes(e.billableProductKey) && e.message?.includes("Dev Mode")).map(e => e.id)), [tV]);
  _$$R(() => {
    let e = QL("viewRequestId");
    e && (tV.find(t => t.id === e) ? setHighlightedItemId(e) : dispatchRequestAlreadyHandled(), EM("viewRequestId"));
  }, tM, e => !e);
  let tY = useMemo(() => debounce(ek, 300), [ek]);
  let tK = e => e === r1.GUESTS ? getI18nString("admin_dashboard.requests.guests") : e === r1.MEMBERS ? getI18nString("admin_dashboard.requests.members") : getI18nString("admin_dashboard.requests.all_users");
  let tX = ti === V7.ALL_ORG_REQUESTS && tm.length > 0;
  let tJ = ti === V7.ALL_MANAGED_REQUESTS && (tg.length > 0 && t || !t && tg.length > 1);
  let tZ = (tR || tk) && (tX || tJ);
  let t0 = useCallback(({
    approve: e,
    requestId: t,
    selectionMethod: a = Xv.SINGLE,
    entryPoint: s = eK,
    successHandler: n = dispatchSuccess
  }) => {
    e8(e => new Set(e).add(t));
    eW(e ? "approving" : "declining");
    let r = e ? _$$w.approveRequests.bind(_$$w) : _$$w.denyRequests.bind(_$$w);
    let i = tV.find(e => e.id === t);
    r({
      plan_id: $,
      plan_type: V,
      included_request_ids: [t],
      selection_method: a,
      entry_point: s,
      is_proration_billing_enabled: J,
      is_seat_increase_authorized: Z4(i ? [i] : [], seatAvailability)
    }).then(t => {
      if (200 !== t.status) {
        dispatchGenericError();
        return;
      }
      if (t.data.meta.failed_attempts > 0) {
        dispatchProcessingError({
          multiple: !1
        });
        return;
      }
      n({
        approve: e,
        numRequests: 1,
        asyncUpdate: !1
      });
    }).catch(() => {
      dispatchGenericError();
    }).$$finally(() => {
      e8(e => {
        let a = new Set(e);
        a.$$delete(t);
        return a;
      });
      eW(!1);
      tr(e => e + 1);
    });
  }, [eK, dispatchGenericError, dispatchProcessingError, dispatchSuccess, J, $, V, tV, seatAvailability, e8, eW]);
  let t1 = useCallback(({
    approve: e,
    selectedRequestIds: t,
    approveAll: a,
    entryPoint: s = eK
  }) => {
    eQ(ez.current);
    eW(a ? "approving_all" : e ? "approving" : "declining");
    a && tL && eS(VisualBellActions.enqueue({
      message: getI18nString("admin_dashboard.requests.selected_count_approving", {
        numSelected: tL
      }),
      type: eG,
      timeoutOverride: 1 / 0,
      icon: VisualBellIcon.SPINNER,
      preventDismissal: !0,
      role: "status"
    }));
    let n = a || ew;
    let r = e && x9(n, t, tp);
    let i = new Set(t);
    let l = tV.filter(e => i.has(e.id));
    let o = {
      plan_id: $,
      plan_type: V,
      entry_point: s,
      async_processing: r,
      is_proration_billing_enabled: J,
      is_seat_increase_authorized: !!a || Z4(l, seatAvailability)
    };
    let d = n ? {
      ...o,
      subtractive: !0,
      excluded_request_ids: a ? [] : tV.map(e => e.id).filter(e => !i.has(e)),
      filter_params: a ? tb : tv,
      timestamp: (te ?? new Date()).toISOString(),
      selection_method: a ? Xv.APPROVE_ALL : Xv.BULK_SELECT
    } : {
      ...o,
      included_request_ids: t,
      selection_method: Xv.BULK_SELECT,
      filter_params: tb
    };
    let c = (t, a, s) => {
      if (200 !== t) {
        dispatchGenericError();
        return;
      }
      if (a > 0) {
        dispatchProcessingError({
          multiple: !0
        });
        return;
      }
      dispatchSuccess({
        approve: e,
        numRequests: s,
        asyncUpdate: r
      });
    };
    let u = () => {
      eW(!1);
      eQ(0);
      n && ts(e => e + 1);
      ew && eN(!1);
    };
    e ? _$$w.approveRequests.bind(_$$w)(d).then(e => {
      if (c(e.status, e.data.meta.failed_attempts, e.data.meta.successful_attempts), r) {
        let t = e.data.meta.processed_request_ids;
        e6(e => new Set([...e, ...new Set(t)]));
      }
      tr(e => e + 1);
    }).catch(() => {
      dispatchGenericError();
    }).$$finally(() => {
      a && eS(VisualBellActions.dequeue({
        matchType: eG
      }));
      u();
    }) : _$$w.denyRequests.bind(_$$w)(d).then(e => {
      c(e.status, e.data.meta.failed_attempts, e.data.meta.successful_attempts);
      tr(e => e + 1);
    }).catch(() => {
      dispatchGenericError();
    }).$$finally(() => {
      u();
    });
  }, [tb, eK, eS, dispatchGenericError, dispatchProcessingError, dispatchSuccess, tv, tp, J, te, $, V, tV, seatAvailability, ew, eW, tL]);
  let t4 = useCallback(({
    approve: e,
    selectedRequestIds: t,
    approveAll: a = !1,
    shouldProcessAsSingleRequest: s = !1,
    singleRequestSelectionMethod: n,
    successHandler: r = dispatchSuccess,
    sprig: i,
    isHandlingInFlyout: l = !1
  }) => {
    let o = l ? A$ : eK;
    let d = "dashDeepLinkEntryPoint" in eY && eY.dashDeepLinkEntryPoint || o;
    (() => {
      if (s) {
        let a = n || Xv.SINGLE;
        t0({
          approve: e,
          requestId: t[0],
          selectionMethod: a,
          entryPoint: d,
          successHandler: r
        });
      } else t1({
        approve: e,
        selectedRequestIds: t,
        approveAll: a
      });
    })();
    i && s && i("track", e ? "admin-dashboard-request-approved" : "admin-dashboard-request-declined");
    i && V === ps.TEAM && !e && t.some(e => tQ.has(e)) && i("track", "admin-dashboard-dev-mode-decline");
  }, [V, dispatchSuccess, eK, t0, t1, tQ, eY]);
  let {
    requestFlyout
  } = _$$m({
    request: highlightedItem,
    billingGroups: tm,
    flyoutRef: H,
    open: !!highlightedItem,
    onClose: clearHighlightedItemId,
    onApprove: () => t4({
      approve: !0,
      selectedRequestIds: highlightedItem ? [highlightedItem.id] : [],
      shouldProcessAsSingleRequest: !0,
      singleRequestSelectionMethod: Xv.SINGLE,
      sprig: Sprig,
      isHandlingInFlyout: !0
    }),
    onDecline: () => t4({
      approve: !1,
      selectedRequestIds: highlightedItem ? [highlightedItem.id] : [],
      shouldProcessAsSingleRequest: !0,
      singleRequestSelectionMethod: Xv.SINGLE,
      sprig: Sprig,
      isHandlingInFlyout: !0
    }),
    trackingName: eV,
    trackingProperties: {
      requestId: highlightedItem?.id
    }
  });
  let t2 = useCallback(e => {
    let t = e.name || e.email || getI18nString("admin_dashboard.requests.no_name");
    return jsx(az, {
      entity: {
        id: e.userId,
        name: t,
        email: e.email ?? void 0,
        imgUrl: e.imgUrl
      },
      badge: e.orgPermission === FUserRoleType.GUEST ? {
        color: BadgeColor.DEFAULT,
        text: getI18nString("admin_dashboard.requests.badge.guest")
      } : void 0,
      size: 24,
      defaultText: Lv,
      includeUserEmailAddress: !0,
      className: U0
    });
  }, []);
  let t8 = useCallback(e => {
    if (!isValidAccessType(e.billableProductKey)) return jsxs(Fragment, {
      children: [" ", _$$tI(e.billableProductKey)]
    });
    {
      let t = e.billableProductKey;
      return jsxs("div", {
        className: _$$s2.flex.gap8.itemsCenter.$,
        children: [jsx(_$$B, {
          type: t,
          size: "24"
        }), _$$tI(e.billableProductKey)]
      });
    }
  }, []);
  let t3 = useCallback(e => jsx("div", {
    className: e.hasBeenNudged ? cp : void 0,
    "data-tooltip-type": e.hasBeenNudged ? KindEnum.TEXT : void 0,
    "data-tooltip": getI18nString("admin_dashboard.requests.sent_you_a_reminder", {
      requesterName: e.name ?? e.email ?? ""
    }),
    children: jsx(h1, {
      capitalize: !0,
      date: e.updatedAt
    })
  }), []);
  let t6 = e => e.updatedAt.getTime();
  let t7 = useMemo(() => [{
    name: getI18nString("admin_dashboard.requests.columns.name"),
    className: Mc,
    cellComponent: t2
  }, {
    name: getI18nString("admin_dashboard.requests.columns.seat_type"),
    className: _$$eF,
    cellComponent: t8
  }, {
    name: getI18nString("admin_dashboard.requests.columns.requested"),
    className: jR,
    cellComponent: t3,
    sorting_key: BC.REQUESTED,
    getSortValue: t6,
    sortNumerically: !0
  }, {
    name: getI18nString("admin_dashboard.requests.columns.note"),
    className: P_,
    cellComponent: e => jsx(_$$G, {
      text: e.message ?? "",
      showTooltip: _$$i.NEVER,
      className: _$$s2.colorTextSecondary.$
    })
  }], [t2, t8, t3]);
  let t9 = e => {
    let a = e ? V7.ALL_MANAGED_REQUESTS : V7.ALL_ORG_REQUESTS;
    let n = e ? xo : OW;
    let r = e ? renderI18nText("admin_dashboard.managed_org_requests.title") : renderI18nText("admin_dashboard.all_org_requests.title", {
      orgName: "loaded" === tE.status ? tE.data?.org?.name : "org"
    });
    return jsxs("div", {
      role: "button",
      tabIndex: 0,
      className: _$$s2.flex.gap8.itemsCenter.font11.fontMedium.lh16.mr8.py4.px8.$$if(ti === a, _$$s2.colorText.bRadius5.colorBgPressed, _$$s2.colorTextSecondary).$,
      onClick: () => {
        tl(a);
        td(a);
        tr(0 === tn ? 1 : 0);
      },
      "data-onboarding-key": n,
      "data-test-id": e ? "your-requests-tab" : "all-org-requests-tab",
      children: [r, jsx(_$$E, {
        isOrgAdmin: !!t,
        managedRequests: e,
        planId: $,
        planType: V,
        processedRequestIds: e7,
        refreshNonce: ta,
        refreshTabCountNonce: tn,
        selectedRequestView: ti,
        showAllOrgRequests: tR ?? !1,
        showBillingGroupAdminRequests: tk,
        viewableBillingGroupIds: t ? [null, ...th] : th
      })]
    });
  };
  let ae = jsxs("div", {
    className: _$$s2.flex.columnGap8.pl16.$,
    children: [tp && t && jsx(_$$eS, {}), (!tp || t) && jsxs(Fragment, {
      children: [jsx(Rj, {
        planId: $,
        planType: V,
        configuredUpgradeRequestSetting: tC
      }), jsx(eR, {})]
    }), tU && jsx(_$$V, {
      variant: "primary",
      onClick: () => {
        if (null === tO || null === tL) return;
        let t = e$ ? lQ : () => t4({
          approve: !0,
          approveAll: !0,
          selectedRequestIds: []
        });
        if (tL === tO && tL < 1) {
          t();
          return;
        }
        eS(showModalHandler({
          type: _$$W,
          data: {
            plan: e,
            numRequestsToApprove: tL,
            filteredRowCount: tO,
            isELA: tq,
            onConfirm: t,
            entryPoint: eK
          }
        }));
      },
      innerText: "Approve all",
      dataTestId: "approve-all-button",
      disabled: null === tL || !!e$,
      trackingProperties: {
        trackingDescriptor: _$$c.APPROVE_ALL
      },
      trackingOptions: eE,
      children: jsx(Zu, {
        text: getI18nString("admin_dashboard.requests.approve_all"),
        showSpinner: "approving_all" === e$
      })
    })]
  });
  let at = jsx("div", {
    className: _$$s2.h32.cursorDefault.selectNone.$,
    children: jsxs(AutoLayout, {
      spacing: 0,
      children: [jsx(AutoLayout, {
        spacing: 0,
        children: [!0, !1].map(e => t9(e))
      }), jsx(Spacer, {}), ae]
    })
  });
  let aa = jsxs(Fragment, {
    children: [!!tR && tm.length > 0 && at, jsxs(AutoLayout, {
      padding: {
        top: 4,
        bottom: 8
      },
      strokeColor: "default",
      strokeWidth: {
        bottom: 1
      },
      children: [jsx(y2, {
        onChange: e => tY(Bk(e)),
        query: eC,
        clearSearch: () => ek(""),
        placeholder: getI18nString("admin_dashboard.requests.search_requests.placeholder"),
        maxInputLength: MI
      }), jsx(Spacer, {}), (tR || tk) && jsx(eB, {
        type: L8,
        dataTestId: "user-type-filter",
        isDefaultFilter: null === tc,
        defaultFilterLabel: renderI18nText("admin_dashboard.requests.filter.user_type_default"),
        filterLabel: renderI18nText("admin_dashboard.requests.filter.user_type", {
          selectedUserTypeFilter: jsx("span", {
            className: _$$s2.fontBold.$,
            children: tK(tc)
          })
        }),
        renderFilterOptions: () => jsxs(Fragment, {
          children: [jsx(MM, {
            checked: null === tc,
            onClick: () => tu(null),
            children: getI18nString("admin_dashboard.requests.all_users")
          }), jsx(wv, {}), Object.values(r1).map(e => jsx(MM, {
            checked: tc === e,
            onClick: () => tu(e),
            children: tK(e)
          }, e))]
        })
      }), jsx(eB, {
        type: "UPGRADE_REQUESTS_SEAT_TYPE_DROPDOWN",
        dataTestId: "seat-type-filter",
        isDefaultFilter: null === eq,
        defaultFilterLabel: renderI18nText("admin_dashboard.requests.filter.seat_type_default"),
        filterLabel: renderI18nText("admin_dashboard.requests.filter.seat_type", {
          selectedSeatTypeFilter: jsx("span", {
            className: _$$s2.fontBold.$,
            children: _$$tI(eq ?? ViewAccessTypeEnum.VIEW)
          })
        }),
        renderFilterOptions: () => jsxs(Fragment, {
          children: [jsx(MM, {
            checked: null === eq,
            onClick: () => eO(null),
            children: getI18nString("admin_dashboard.requests.filter.seats_all_option")
          }), jsx(wv, {}), N_.sort(AG).map(e => jsx(MM, {
            checked: eq === e,
            onClick: () => eO(e),
            children: _$$tI(e)
          }, e))]
        })
      }), tZ && jsx(eB, {
        type: OL,
        dataTestId: "billing-group-filter",
        isDefaultFilter: to === ti,
        defaultFilterLabel: renderI18nText("admin_dashboard.requests.filter.billing_group_default"),
        filterLabel: renderI18nText("admin_dashboard.requests.filter.billing_group", {
          selectedBillingGroupFilter: jsx("span", {
            className: _$$s2.fontBold.$,
            children: to === V7.ALL_ORG_REQUESTS || to === V7.ALL_MANAGED_REQUESTS ? getI18nString("admin_dashboard.requests.from_all") : to === V7.ALL_UNASSIGNED_REQUESTS ? getI18nString("admin_dashboard.requests.from_unassigned") : tm.find(e => e.id === to).name
          })
        }),
        renderFilterOptions: () => {
          let e = ti === V7.ALL_ORG_REQUESTS ? tm : tg;
          let t = [{
            key: ti,
            label: getI18nString("admin_dashboard.requests.from_all")
          }];
          tk || t.push({
            key: V7.ALL_UNASSIGNED_REQUESTS,
            label: getI18nString("admin_dashboard.requests.from_unassigned")
          });
          return jsxs(Fragment, {
            children: [t.map(e => jsx(MM, {
              checked: to === e.key,
              onClick: () => td(e.key),
              children: e.label
            }, e.key)), jsx(wv, {}), jsx(MM, {
              disabled: !0,
              checked: !1,
              onClick: lQ,
              children: renderI18nText(ti === V7.ALL_ORG_REQUESTS ? "admin_dashboard.requests.billing_groups" : "admin_dashboard.requests.your_billing_groups")
            }), e.map(e => jsx(MM, {
              checked: to === e.id,
              onClick: () => td(e.id),
              children: e.name
            }, e.id))]
          });
        }
      })]
    })]
  });
  return jsxs(TrackingProvider, {
    name: e0.UPGRADE_REQUESTS_TABLE,
    properties: {
      adminRequestsDashboard: !0,
      orgId: tp ? $ : void 0,
      teamId: V === ps.TEAM ? $ : void 0,
      entryPoint: "dashDeepLinkEntryPoint" in eY ? eY.dashDeepLinkEntryPoint : "",
      isBillingRemodelEnabled: eI
    },
    trackingOptions: eE,
    children: [jsx(_$$K, {
      title: getI18nString("admin_dashboard.requests.seat_title"),
      rightActions: !tR || tm.length < 1 ? ae : void 0
    }), jsx("div", {
      className: u()(M2, _$$s2.$$if(!tR || 0 === tm.length, _$$s2.pt4, _$$s2.pt12).$),
      children: jsx(Cj, {
        actionBar: "approving_all" === e$ ? void 0 : t => tG ? jsx("div", {
          className: _$$s2.w150.$,
          children: jsx(Wi, {
            className: _$$s2.h12.w150.$,
            animationType: JR.SHIMMER_ON_MENU
          })
        }) : jsx("div", {
          className: $h,
          children: jsxs(AutoLayout, {
            spacing: 8,
            children: [jsx(_$$V, {
              variant: "toolbar-secondary",
              disabled: !!e$,
              onClick: e$ ? lQ : () => t4({
                approve: !1,
                selectedRequestIds: t.map(e => e.id),
                sprig: Sprig
              }),
              innerText: "Decline",
              dataTestId: "decline-button-multiple",
              trackingProperties: {
                trackingDescriptor: _$$c.DECLINE
              },
              trackingOptions: eE,
              children: jsx(Zu, {
                text: getI18nString("admin_dashboard.requests.decline"),
                showSpinner: "declining" === e$
              })
            }), jsx(_$$V, {
              variant: "primary",
              disabled: !!e$,
              onClick: e$ ? lQ : () => eS(showModalHandler({
                type: ee,
                data: {
                  plan: e,
                  requestsToApprove: t,
                  seatAvailability,
                  isELA: tq,
                  calculateCostForSeatTypeBulkIncrease: (e, t) => void 0,
                  onConfirm: () => t4({
                    approve: !0,
                    selectedRequestIds: t.map(e => e.id)
                  })
                }
              })),
              innerText: "Review",
              dataTestId: "approve-button-multiple",
              trackingProperties: {
                trackingDescriptor: _$$c.REVIEW
              },
              trackingOptions: eE,
              children: Zm({
                text: getI18nString("admin_dashboard.requests.multi_select.review"),
                showSpinner: "approving" === e$
              })
            })]
          })
        }),
        actionBarClassName: u()(KY, tG ? void 0 : h4),
        columns: t7,
        disabled: !!e$,
        emptyContent: (c = 0 === eC.length && null === eq && to === ti && null === tc ? jsxs(Fragment, {
          children: [jsx("div", {
            className: _$$s2.fontSemiBold.lh16.cursorDefault.colorTextSecondary.$,
            children: renderI18nText(tC && tk ? "admin_dashboard.requests.empty.configurable_upgrade_requests" : "admin_dashboard.requests.no_requests_to_approve")
          }), jsx("div", {
            style: sx.add({
              maxWidth: "500px"
            }).lh16.cursorDefault.alignCenter.colorTextSecondary.$,
            children: tC ? tC === UpgradeRequestSetting.MEMBERS ? renderI18nText("admin_dashboard.configured_upgrade_request_empty_state.members") : renderI18nText("admin_dashboard.configured_upgrade_request_empty_state.all_users") : renderI18nText("admin_dashboard.requests.when_a_seat_request_needs_to_be_reviewed")
          })]
        }) : eC.length > 0 && null === eq && to === ti && null === tc ? jsx("div", {
          className: _$$s2.lh16.cursorDefault.colorText.$,
          children: renderI18nText("admin_dashboard.requests.empty.no_search_results")
        }) : jsx("div", {
          className: _$$s2.lh16.cursorDefault.colorText.$,
          children: renderI18nText("admin_dashboard.requests.empty.no_filter_results", {
            resetFiltersLink: jsx(SecureLink, {
              trusted: !0,
              onClick: () => {
                eO(null);
                td(ti);
                ek("");
                tu(null);
              },
              children: renderI18nText("admin_dashboard.requests.empty.reset_filters")
            })
          })
        }), jsx(AutoLayout, {
          direction: "vertical",
          spacing: 8,
          padding: {
            top: 60,
            bottom: 28
          },
          horizontalAlignItems: "center",
          children: c
        })),
        getItemKey: e => e.id,
        getTotalSelected: tG ? void 0 : (e, t) => {
          let a;
          a = ew && tO ? Math.max(1, tO - (t.length - e.length)) : e.length;
          ez.current = a;
          return a;
        },
        hasNewScrollContext: !0,
        highlightState: {
          itemKey: highlightedItem?.id ?? null,
          setItemKey: setHighlightedItemId
        },
        isLoading: tM,
        itemTypeContext: {
          itemType: k_,
          getSelectedCountString: e => tG ? "" : "approving" === e$ ? getI18nString("admin_dashboard.requests.selected_count_approving", {
            numSelected: eH
          }) : "declining" === e$ ? getI18nString("admin_dashboard.requests.selected_count_denying", {
            numSelected: eH
          }) : getI18nString("admin_dashboard.requests.selected_count_request", {
            numSelected: e
          })
        },
        items: tV,
        minContentWidth: 928,
        onFetchMore: tA ? () => {
          tS && !tT && tA && ty?.data?.adminDashboardRequests?.loadNext(25);
        } : void 0,
        onRowClick: e => {
          e.id === highlightedItem?.id ? clearHighlightedItemId() : setHighlightedItemId(e.id);
        },
        onSelectedItemsChange: e => {
          0 === e.length && eN(!1);
        },
        onSetSortState: () => eD(e => e === i5.NEWEST_FIRST ? i5.OLDEST_FIRST : i5.NEWEST_FIRST),
        onToggleSelectAll: e => {
          eN(!e);
          clearHighlightedItemId();
        },
        rightActionColumns: [{
          name: "approve-single-column",
          className: oi,
          cellComponent: t => jsx(eM, {
            request: t,
            plan: e,
            numRowsSelected: ez,
            handleRequests: t4,
            isELA: tq,
            isProrationBillingEnabled: J
          })
        }, {
          ...VU,
          cellComponent: e => jsx(eL, {
            request: e,
            setHighlightedItemId
          })
        }],
        scrollBarAlwaysVisible: !0,
        scrollContentRef: z,
        sortState: W4(eP),
        stickyContent: aa,
        unselectableItemKeys: e2
      })
    }), requestFlyout]
  });
}
export const l = $$e$0;