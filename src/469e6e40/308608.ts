import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useRef, useLayoutEffect, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../905/915765";
import { noop } from 'lodash-es';
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import d from "classnames";
import { ResourceStatus } from "../905/957591";
import { parsePxNumber } from "../figma_app/783094";
import { customHistory } from "../905/612521";
import { h as _$$h } from "../905/207101";
import { R as _$$R } from "../905/165069";
import { useSubscription } from "../figma_app/288654";
import { useSprigWithSampling } from "../905/99656";
import { selectExperimentConfigHook } from "../figma_app/594947";
import { bv } from "../figma_app/421401";
import { gw, MM, wv } from "../figma_app/236327";
import { V as _$$V } from "../figma_app/312987";
import { SecureLink } from "../figma_app/637027";
import { z as _$$z } from "../905/284530";
import { Wi, JR } from "../figma_app/162641";
import { y2 } from "../figma_app/563413";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { AutoLayout, Spacer } from "../905/470281";
import { $ as _$$$, V as _$$V2 } from "../905/355181";
import { In } from "../905/672640";
import { TextWithTruncation } from "../905/984674";
import { Y as _$$Y2 } from "../figma_app/515088";
import { x9 } from "../4452/846771";
import { Lv, ps, yz, i5, uH, V7, z7, ZY, Xv, r1, OL, L8, Bk, MI, YC, dC, lJ, Zm, k_ } from "../figma_app/845611";
import { E as _$$E2 } from "../4452/428395";
import { xo, OW } from "../figma_app/425283";
import { isMobileUA } from "../figma_app/778880";
import { UpgradeAction } from "../905/370443";
import { E as _$$E3 } from "../905/453826";
import { e as _$$e } from "../905/621515";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { rn, zl } from "../figma_app/903573";
import { N as _$$N } from "../figma_app/268271";
import { R as _$$R2 } from "../905/298004";
import { rq } from "../905/425180";
import { WZ } from "../905/893645";
import { ONe } from "../figma_app/6204";
import { hideModal, showModalHandler } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { isCoreProductAccessType, ProductAccessMap } from "../figma_app/765689";
import { q as _$$q } from "../4452/876838";
import { QL, EM } from "../905/609392";
import { Um } from "../905/848862";
import { getUserId } from "../905/372672";
import { MX, EQ } from "../figma_app/684446";
import { OrgUsersByIdView, AdminRequestDashboardView, AdminRequestDashOrgInfo } from "../figma_app/43951";
import { $ as _$$$2 } from "../figma_app/126651";
import { UpgradeRequestSetting } from "../figma_app/482728";
import { e0 as _$$e2 } from "../905/696396";
import { accountTypeRequestHandler } from "../905/281010";
import { az } from "../figma_app/805373";
import { p as _$$p } from "../figma_app/353099";
import { Cj } from "../905/270084";
import { CloseButton } from "../905/17223";
import { registerModal } from "../905/102752";
import { ModalContainer } from "../figma_app/918700";
import { getJobRoleDisplay } from "../3973/538504";
import { getResourceDataOrFallback } from "../905/723791";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { LoadingOverlay } from "../figma_app/858013";
import { I1 } from "../figma_app/990058";
import { r as _$$r2 } from "../469e6e40/505264";
import { B6G, XMZ } from "../figma_app/27776";
import { A as _$$A2 } from "../5724/663128";
var c = d;
let X = "seen_org_admin_request_dashboard_onboarding";
let Q = rn("org_admin_request_dashboard_onboarding", _$$R2(ONe));
function Z(e) {
  let t = userFlagExistsAtomFamily(X);
  let a = useAtomWithSubscription(t);
  let {
    isShowing,
    show,
    complete,
    uniqueId
  } = _$$e({
    overlay: ONe,
    priority: _$$N.DEFAULT_MODAL
  }, [a]);
  let d = zl(Q);
  _$$h(() => {
    "reset" === d.currentState ? show() : show({
      canShow: e => !e && !isMobileUA
    });
  });
  _$$E3(uniqueId, "Reset Onboarding", () => show());
  let c = [{
    title: renderI18nText("org_admin_onboarding.request_dashboard.tooltip.manage_upgrades_title"),
    description: e.hasBillingGroups ? renderI18nText("org_admin_onboarding.request_dashboard.tooltip.manage_billing_group_upgrade_requests_description") : renderI18nText("org_admin_onboarding.request_dashboard.tooltip.manage_upgrades_description"),
    trackingContextName: "Org admin request dashboard onboarding - manage requests",
    targetKey: xo,
    emphasized: !0
  }];
  e.hasBillingGroups && c.push({
    title: renderI18nText("org_admin_onboarding.request_dashboard.tooltip.see_all_org_requests_title"),
    description: renderI18nText("org_admin_onboarding.request_dashboard.tooltip.see_all_org_requests_description", {
      orgName: e.orgName
    }),
    trackingContextName: "Org admin request dashboard onboarding - see all requests",
    targetKey: OW,
    emphasized: !0
  });
  return 1 === c.length ? jsx(rq, {
    isShowing,
    userFlagOnShow: X,
    onClose: complete,
    primaryCta: {
      label: renderI18nText("general.done"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.DONE
    },
    ...c[0]
  }) : jsx(Fragment, {
    children: jsx(WZ, {
      isShowing,
      userFlagOnShow: X,
      steps: c,
      onComplete: complete
    })
  });
}
let ev = registerModal(function ({
  onConfirm: e,
  totalRequestCount: t,
  filteredRequestCount: a
}) {
  let s = useDispatch();
  let r = () => {
    s(hideModal());
  };
  let l = t !== a;
  let o = l ? renderI18nText("admin_dashboard.requests.approve_all_modal.body_filtered", {
    numTotalRequests: t,
    numHiddenRequests: t - a
  }) : renderI18nText("admin_dashboard.requests.approve_all_modal.body", {
    numRequests: jsx(TextWithTruncation, {
      fontWeight: "semi-bold",
      children: t
    })
  });
  let d = l ? renderI18nText("admin_dashboard.requests.approve_all_modal.title_filtered") : renderI18nText("admin_dashboard.requests.approve_all_modal.title");
  let c = l ? renderI18nText("admin_dashboard.requests.approve_all_modal.confirm_filtered", {
    numRequests: t
  }) : renderI18nText("admin_dashboard.requests.approve_all_modal.confirm");
  return jsxs(ModalContainer, {
    className: cssBuilderInstance.cursorDefault.selectNone.$,
    title: "",
    size: 360,
    padding: 0,
    children: [jsxs(AutoLayout, {
      padding: {
        left: 16,
        right: 8,
        top: 8,
        bottom: 0
      },
      spacing: 8,
      children: [jsx("div", {
        className: cssBuilderInstance.fontSemiBold.lh16.colorText.$,
        children: d
      }), jsx(Spacer, {}), jsx(CloseButton, {
        onClick: r
      })]
    }), jsx("div", {
      className: cssBuilderInstance.p16.$,
      children: jsx(TextWithTruncation, {
        children: o
      })
    }), jsxs(AutoLayout, {
      direction: "horizontal",
      padding: {
        left: 16,
        right: 16,
        bottom: 16,
        top: 0
      },
      horizontalAlignItems: "end",
      children: [jsx(_$$$, {
        variant: "secondary",
        onClick: r,
        children: renderI18nText("general.cancel")
      }), jsx(_$$$, {
        variant: "destructive",
        onClick: () => {
          r();
          e();
        },
        children: c
      })]
    })]
  });
}, "ApproveAllUpgradeRequestsConfirmationModal");
function ef({
  text: e,
  linkText: t,
  onClickLink: a,
  textMaxWidth: i,
  textClassName: r
}) {
  let [l, o] = useState(!1);
  let d = useRef(null);
  let c = () => {
    let e = d.current;
    e && o(e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight);
  };
  useLayoutEffect(() => {
    c();
  }, [e]);
  return jsxs("div", {
    className: cssBuilderInstance.flex.flexRow.$,
    children: [jsx("div", {
      className: r ?? void 0,
      style: styleBuilderInstance.noWrap.overflowHidden.ellipsis.add({
        maxWidth: `${i}px`
      }).$,
      ref: d,
      children: e
    }), l && jsx(SecureLink, {
      trusted: !0,
      onClick: e => {
        e.stopPropagation();
        a();
      },
      children: t ?? renderI18nText("admin_dashboard.requests.truncated_text_more")
    })]
  });
}
function eS({
  label: e,
  contents: t
}) {
  return jsxs(AutoLayout, {
    direction: "horizontal",
    spacing: 16,
    verticalAlignItems: "start",
    children: [jsx("div", {
      style: styleBuilderInstance.add({
        minWidth: "80px",
        maxWidth: "80px"
      }).colorText.fontSemiBold.lh16.$,
      children: e
    }), t ? jsx("div", {
      style: styleBuilderInstance.add({
        maxWidth: "275px"
      }).$,
      children: t
    }) : jsx("div", {
      className: cssBuilderInstance.colorTextTertiary.$,
      children: Lv
    })]
  });
}
function eN({
  requesterName: e
}) {
  return jsx(_$$_, {
    dataTestId: "nudged-request-banner",
    color: _$$S.WARNING,
    rounded: !1,
    text: jsx("p", {
      className: cssBuilderInstance.fontMedium.$,
      children: renderI18nText("admin_dashboard.requests.details.reminder_banner", {
        requesterName: e
      })
    })
  });
}
let eI = registerModal(function ({
  request: e,
  planId: t,
  planType: a,
  shouldShowBillingGroup: r,
  billingGroups: l,
  onApprove: o,
  onDeny: d,
  entryPoint: c
}) {
  let _ = useDispatch();
  let [u, m] = useState(null);
  let [p, g] = useState(!0);
  useMemo(() => {
    r && l.length > 0 ? _(I1({
      orgId: t,
      userId: e.userId
    })).then(e => {
      e && m(e.id);
    }).catch(() => {
      g(!1);
    }).finally(() => g(!1)) : g(!1);
  }, [_, t, e.userId, r, l]);
  let x = useSubscription(OrgUsersByIdView, {
    orgId: t,
    orgUserIds: u ? [u] : []
  }, {
    enabled: null !== u && l.length > 0 && r
  });
  let b = "loaded" === x.status;
  let v = "disabled" === x.status;
  let f = b ? getResourceDataOrFallback(x.data?.org)?.baseOrgUserMembersById ?? [] : null;
  let j = l.length > 0 && f ? l.find(e => e.id === f[0]?.licenseGroupMember?.licenseGroupId) ?? null : null;
  let y = () => {
    _(hideModal());
  };
  return r && (p || !(b || v)) ? jsx(ModalContainer, {
    className: cssBuilderInstance.cursorDefault.selectNone.$,
    title: "",
    size: 400,
    padding: 0,
    height: 400,
    children: jsx(LoadingOverlay, {
      size: "medium"
    })
  }) : jsx(TrackingProvider, {
    name: _$$e2.UPGRADE_REQUESTS_DETAIL_MODAL,
    properties: {
      adminRequestsDashboard: !0,
      accountTypeRequestId: e.id,
      orgId: a === ps.ORG ? t : void 0,
      teamId: a === ps.TEAM ? t : void 0,
      entryPoint: c || void 0
    },
    children: jsxs(ModalContainer, {
      className: cssBuilderInstance.cursorDefault.selectNone.$,
      title: "",
      size: 400,
      padding: 0,
      children: [jsxs(AutoLayout, {
        padding: {
          left: 16,
          right: 4,
          top: 4,
          bottom: 4
        },
        children: [jsx("div", {
          className: cssBuilderInstance.fontSemiBold.lh16.colorText.$,
          children: renderI18nText("admin_dashboard.requests.details.title")
        }), jsx(Spacer, {}), jsx(CloseButton, {
          onClick: y,
          innerText: "X"
        })]
      }), e.hasBeenNudged && !!e.name && jsx(eN, {
        requesterName: e.name
      }), jsxs(AutoLayout, {
        direction: "vertical",
        padding: {
          left: 16,
          right: 24,
          top: 24,
          bottom: 24
        },
        spacing: 24,
        strokeColor: "default",
        children: [jsx(eS, {
          label: getI18nString("admin_dashboard.requests.details.name"),
          contents: jsx(_$$r2, {
            dispatch: _,
            entity: {
              id: e.userId,
              name: e.name ?? void 0,
              email: e.email ?? void 0,
              imgUrl: e.imgUrl
            },
            size: 24,
            defaultText: Lv
          })
        }), j && r && jsx(eS, {
          label: getI18nString("admin_dashboard.requests.details.billing_groups"),
          contents: j ? jsx("div", {
            children: j.name
          }) : null
        }), jsx(eS, {
          label: getI18nString("admin_dashboard.requests.details.job_title"),
          contents: e.jobTitle ? jsx("div", {
            children: getJobRoleDisplay(e.jobTitle)
          }) : null
        }), jsx(eS, {
          label: getI18nString("admin_dashboard.requests.details.license_type"),
          contents: jsx(yz, {
            licenseType: e.licenseType
          })
        }), jsx(eS, {
          label: getI18nString("admin_dashboard.requests.details.date"),
          contents: jsx("div", {
            children: renderI18nText("admin_dashboard.requests.details.display_date", {
              dateObject: e.createdAt
            })
          })
        }), jsx(eS, {
          label: getI18nString("admin_dashboard.requests.details.note"),
          contents: e.message ? jsx("div", {
            children: `\u201C${e.message}\u201D`
          }) : null
        })]
      }), jsxs(AutoLayout, {
        direction: "horizontal",
        padding: 16,
        horizontalAlignItems: "end",
        children: [jsx(_$$V2, {
          variant: "secondary",
          onClick: () => {
            y();
            d();
          },
          innerText: "Decline",
          children: renderI18nText("admin_dashboard.requests.decline")
        }), jsx(_$$V2, {
          variant: "primary",
          onClick: () => {
            y();
            o();
          },
          innerText: "Approve",
          children: renderI18nText("admin_dashboard.requests.approve")
        })]
      })]
    })
  });
}, "UpgradeRequestsDetailModal");
let eA = "upgrade_requests_table--dropdownScrollClip--iP8RS";
let eO = "approving-all-requests";
let eL = "admin_dashboard_table";
export function $$eD0({
  supportedLicenses: e,
  planType: t,
  planId: a,
  configuredUpgradeRequestSetting: d,
  onClickViewHistory: q,
  isOrgAdmin: $,
  defaultAdminEntryPoint: B
}) {
  let G;
  let z = useDispatch();
  let V = Um();
  let [W, H] = useState(!1);
  let [Y, J] = useState("");
  let [K, X] = useState(null);
  let [Q, eh] = useState(i5.NEWEST_FIRST);
  let [ex, eb] = useState(!1);
  let ej = useRef(0);
  let [ey, ew] = useState(0);
  let [ek, eE] = useState(window.innerHeight);
  let eC = useSelector(({
    selectedView: e
  }) => e);
  let eS = B ?? uH;
  _$$h(() => {
    let e = () => {
      eE(window.innerHeight);
    };
    window.addEventListener("resize", e);
    return () => window.removeEventListener("resize", e);
  });
  let [eN, eD] = useAtomValueAndSetter(_$$Y2);
  let [eM, eP] = useState(new Set());
  let [eU, eF] = useState(new Set());
  let [eq, e$] = useState(new Set());
  let [eB, eG] = useState(null);
  let [ez, eV] = useState(0);
  let [eW, eH] = useState(0);
  let [eY, eJ] = useState(void 0);
  let [eK, eX] = useState(V7.ALL_MANAGED_REQUESTS);
  let [eQ, eZ] = useState(eK);
  let [e0, e1] = useState(null);
  let e2 = MX();
  let e4 = getUserId();
  let e5 = t === ps.ORG;
  let e3 = useMemo(() => e5 ? EQ(e2, e4, !1).groupsUserIsAdminOf : [], [e2, e4, e5]);
  let e8 = useMemo(() => e3 ? e3.map(e => e.id) : [], [e3]);
  let e6 = useMemo(() => eK === V7.ALL_MANAGED_REQUESTS ? $ ? [null, ...e8] : e8 : null, [eK, e8, $]);
  let e7 = useMemo(() => {
    switch (eQ) {
      case V7.ALL_ORG_REQUESTS:
        return null;
      case V7.ALL_MANAGED_REQUESTS:
        return $ ? [null, ...e8] : e8;
      case V7.ALL_UNASSIGNED_REQUESTS:
        return $ ? [null] : [];
      default:
        if (!(eQ in V7)) return [eQ];
        return null;
    }
  }, [eQ, e8, $]);
  let e9 = useMemo(() => JSON.stringify({
    editor_type: K,
    search_query: Y,
    refreshNonce: ez,
    sortTypeNonce: Q,
    billing_group_ids: e7,
    org_user_permission: e0
  }), [K, Y, ez, Q, e7, e0]);
  let te = useMemo(() => JSON.stringify({
    billing_group_ids: e6
  }), [e6]);
  let tt = useSubscription(AdminRequestDashboardView({
    planType: t,
    planId: a,
    sortOrder: Q === i5.NEWEST_FIRST ? "desc" : "asc",
    filterParams: e9,
    firstPageSize: 25
  }));
  let ta = z7({
    planType: t,
    planId: a,
    filterParams: e9,
    processedRequestIds: eq
  });
  let tn = z7({
    planType: t,
    planId: a,
    filterParams: JSON.stringify({
      refreshNonce: e9,
      billing_group_ids: e6
    }),
    processedRequestIds: eq
  });
  let ts = useSubscription(AdminRequestDashOrgInfo({
    orgId: a
  }), {
    enabled: e5
  });
  let ti = "loaded" === tt.status;
  let tr = ti && !!tt.data?.adminDashboardRequests?.isLoadingNextPage;
  let tl = ti && !!tt.data?.adminDashboardRequests?.hasNextPage();
  let [to, td] = useState({
    loading: !0,
    requestId: void 0,
    request: void 0
  });
  let tc = selectExperimentConfigHook("exp_all_admin_request_dash");
  let t_ = e5 && "loaded" === ts.status && ts.data?.org?.bigmaEnabledAt && tc.getConfig().get("enabled", !1) && $;
  let tu = ZY({
    isIntendedAudience: e5 && "loaded" === ts.status && ts.data?.org?.bigmaEnabledAt !== null && !1 === $
  });
  let tm = !ti || tr || tl || to.loading;
  let tp = ta?.length ?? 0;
  let tg = tn?.length ?? 0;
  let th = [t, a].toString();
  let tx = eN[th];
  let tb = tg ? Math.max(tg, 0) : 0;
  let tv = tn && tx !== tb;
  useEffect(() => {
    if (tv) {
      let e = {
        ...eN
      };
      e[th] = tb;
      eD(e);
    }
  }, [tv, th, tb]);
  let tf = W && null === tp;
  useEffect(() => {
    ti && eG(new Date());
  }, [ti]);
  useEffect(() => {
    let e = QL("approvalRequestId");
    e ? td(t => ({
      ...t,
      requestId: e
    })) : td(e => ({
      ...e,
      loading: !1
    }));
    EM("approvalRequestId");
  }, []);
  useEffect(() => {
    async function e(e) {
      let t = await _$$q(e, z);
      t ? td(e => ({
        ...e,
        request: t,
        loading: !1
      })) : td(e => ({
        ...e,
        loading: !1
      }));
    }
    to.requestId && e(to.requestId);
  }, [to.requestId, z]);
  _$$R(() => {
    if (to.requestId && to.request) {
      let e = to.request.requestableOrgUser?.user?.name ?? to.request.requestableTeamUser?.user?.name ?? "";
      tP({
        approve: !0,
        selectedRequestIds: [to.requestId],
        shouldProcessAsSingleRequest: !0,
        singleRequestSelectionMethod: Xv.EMAIL,
        successHandler: e ? () => {
          tD({
            requesterName: e
          });
          td({
            loading: !1,
            requestId: void 0,
            request: void 0
          });
        } : tL
      });
    }
  }, tm, e => !e);
  let tj = useMemo(() => {
    let t = new Set(eU);
    if (!ti || !tt?.data?.adminDashboardRequests) return [];
    let a = tt.data?.adminDashboardRequests.reduce((a, n) => {
      let s = n.id;
      let i = n.request;
      let r = n.user;
      let l = n.userId;
      if (i.status !== ResourceStatus.Loaded || r.status !== ResourceStatus.Loaded) return a;
      let o = i.data;
      let d = r.data;
      if (!o || !d) {
        t.has(s) || t.add(s);
        return a;
      }
      if (!o.licenseType || !isCoreProductAccessType(o.licenseType) || !e.includes(o.licenseType) || t.has(s)) return a;
      if ("pending" !== o.status) {
        t.has(s) || t.add(s);
        return a;
      }
      let c = !!o.lastNudgedAt;
      s === to.requestId ? t.has(s) || t.add(s) : a.push({
        id: s,
        createdAt: o.createdAt,
        updatedAt: o.updatedAt,
        name: d.name,
        email: d.email,
        licenseType: o.licenseType,
        imgUrl: d.imgUrl,
        message: o.message && o.message.trim().length > 0 ? o.message : null,
        jobTitle: d.profile?.jobTitle ?? null,
        userId: l,
        hasBeenNudged: c
      });
      return a;
    }, []);
    e$(e => new Set([...e, ...new Set(t)]));
    return a.sort((e, t) => Q === i5.NEWEST_FIRST ? t.updatedAt.getTime() - e.updatedAt.getTime() : e.updatedAt.getTime() - t.updatedAt.getTime());
  }, [ti, tt.data, Q, e, to.requestId, eU]);
  let ty = useMemo(() => new Set(tj?.filter(e => e.licenseType === ProductAccessMap.DESIGN && e.message?.includes("Dev Mode")).map(e => e.id)), [tj]);
  _$$R(() => {
    let e = QL("viewRequestId");
    let t = QL("dashEntryPoint");
    if (!e) return;
    let a = tj.find(t => t.id === e);
    a ? tB(a, Xv.DEEPLINK, t) : tM();
    EM("viewRequestId");
  }, tm, e => !e);
  let tw = useMemo(() => {
    if (0 === tj.length) return null;
    let e = tj.length * parsePxNumber(B6G) + 99 + 3 * parsePxNumber(B6G) / 4;
    let t = ek - parsePxNumber(XMZ) - 2 - 48 - 24 - 24;
    return e < t ? e : t;
  }, [tj.length, ek]);
  let tk = useMemo(() => debounce(J, 300), [J]);
  let tE = e => e === r1.GUESTS ? getI18nString("admin_dashboard.requests.guests") : e === r1.MEMBERS ? getI18nString("admin_dashboard.requests.members") : getI18nString("admin_dashboard.requests.all_users");
  let tC = V?.type === OL;
  let tS = V?.type === L8;
  let tN = eK === V7.ALL_ORG_REQUESTS && e2.length > 0;
  let tI = eK === V7.ALL_MANAGED_REQUESTS && (e3.length > 0 && $ || !$ && e3.length > 1);
  let tT = (t_ || tu) && (tN || tI);
  let tA = jsxs(AutoLayout, {
    padding: {
      vertical: 8
    },
    strokeColor: "default",
    strokeWidth: {
      top: 1,
      bottom: 1
    },
    children: [jsx(y2, {
      onChange: e => tk(Bk(e)),
      query: Y,
      clearSearch: () => J(""),
      placeholder: getI18nString("admin_dashboard.requests.search.placeholder"),
      maxInputLength: MI
    }), jsx(Spacer, {}), e.length > 1 && jsx(bv, {
      label: getI18nString("admin_dashboard.requests.filter.type"),
      dispatch: z,
      dropdownShown: V,
      dropdownType: YC,
      values: e,
      selectedValue: K,
      getDisplayText: e => _$$$2(e),
      updateFilter: X
    }), jsx(bv, {
      label: getI18nString("admin_dashboard.requests.filter.sort"),
      dispatch: z,
      dropdownShown: V,
      dropdownType: dC,
      values: [i5.NEWEST_FIRST, i5.OLDEST_FIRST],
      selectedValue: Q,
      getDisplayText: e => lJ[e](),
      updateFilter: eh,
      hideDefaultOption: !0
    }), (t_ || tu) && jsxs(_$$V, {
      showingDropdown: tS,
      type: L8,
      dispatch: z,
      isRightAligned: !0,
      children: [jsx("div", {
        "data-testid": "user-type-filter",
        children: renderI18nText("admin_dashboard.requests.filter.user_type", {
          selectedUserTypeFilter: tE(e0)
        })
      }), tS && jsx(gw, {
        dispatch: z,
        className: eA,
        style: V.data.position,
        children: jsxs(Fragment, {
          children: [jsx(MM, {
            checked: null === e0,
            onClick: () => e1(null),
            children: getI18nString("admin_dashboard.requests.all_users")
          }), jsx(wv, {}), Object.values(r1).map(e => jsx(MM, {
            checked: e0 === e,
            onClick: () => e1(e),
            children: tE(e)
          }, e))]
        })
      })]
    }), tT && jsxs(_$$V, {
      showingDropdown: tC,
      type: OL,
      dispatch: z,
      isRightAligned: !0,
      children: [renderI18nText("admin_dashboard.requests.filter.from", {
        selectedBillingGroupFilter: eQ === V7.ALL_ORG_REQUESTS || eQ === V7.ALL_MANAGED_REQUESTS ? getI18nString("admin_dashboard.requests.from_all") : eQ === V7.ALL_UNASSIGNED_REQUESTS ? getI18nString("admin_dashboard.requests.from_unassigned") : e2.find(e => e.id === eQ).name
      }), tC && jsx(gw, {
        dispatch: z,
        className: eA,
        style: V.data.position,
        children: (() => {
          let e = eK === V7.ALL_ORG_REQUESTS ? e2 : e3;
          let t = [{
            key: eK,
            label: getI18nString("admin_dashboard.requests.from_all")
          }];
          tu || t.push({
            key: V7.ALL_UNASSIGNED_REQUESTS,
            label: getI18nString("admin_dashboard.requests.from_unassigned")
          });
          return jsxs(Fragment, {
            children: [t.map(e => jsx(MM, {
              checked: eQ === e.key,
              onClick: () => eZ(e.key),
              children: e.label
            }, e.key)), jsx(wv, {}), jsx(MM, {
              disabled: !0,
              checked: !1,
              onClick: noop,
              children: renderI18nText(eK === V7.ALL_ORG_REQUESTS ? "admin_dashboard.requests.billing_groups" : "admin_dashboard.requests.your_billing_groups")
            }), e.map(e => jsx(MM, {
              checked: eQ === e.id,
              onClick: () => eZ(e.id),
              children: e.name
            }, e.id))]
          });
        })()
      })]
    })]
  });
  let tR = () => {
    z(VisualBellActions.enqueue({
      message: getI18nString("admin_dashboard.requests.error_generic"),
      error: !0,
      button: {
        text: getI18nString("admin_dashboard.requests.error_reload"),
        action: () => {
          customHistory.reload("Admin requests dashboard error");
        }
      }
    }));
  };
  let tO = ({
    multiple: e
  }) => {
    z(VisualBellActions.enqueue({
      message: e ? getI18nString("admin_dashboard.requests.error_multiple") : getI18nString("admin_dashboard.requests.error_single"),
      error: !0,
      button: {
        text: getI18nString("admin_dashboard.requests.error_reload"),
        action: () => {
          customHistory.reload("Admin requests dashboard error");
        }
      }
    }));
  };
  let tL = ({
    approve: e,
    numRequests: t,
    asyncUpdate: a
  }) => {
    let n = e ? getI18nString("admin_dashboard.requests.success_approve_multiple", {
      numRequests: t
    }) : getI18nString("admin_dashboard.requests.success_deny_multiple", {
      numRequests: t
    });
    e && a && (n = getI18nString("admin_dashboard.requests.success_approve_multiple_async", {
      numRequests: t
    }));
    z(VisualBellActions.enqueue({
      message: n,
      type: e ? "requests-approved" : "requests-denied"
    }));
  };
  let tD = ({
    requesterName: e
  }) => {
    z(VisualBellActions.enqueue({
      message: getI18nString("admin_dashboard.requests.success_approve_with_name", {
        requesterName: e
      }),
      type: "requests-approved"
    }));
  };
  let tM = () => {
    z(VisualBellActions.enqueue({
      message: getI18nString("admin_dashboard.requests.this_request_has_already_been_handled"),
      type: "requests-approved"
    }));
  };
  let tP = ({
    approve: e,
    selectedRequestIds: a,
    approveAll: n = !1,
    shouldProcessAsSingleRequest: s = !1,
    singleRequestSelectionMethod: i,
    successHandler: r = tL,
    sprig: l
  }) => {
    let o = "dashDeepLinkEntryPoint" in eC && eC.dashDeepLinkEntryPoint || eS;
    (() => {
      if (s) {
        let t = i || Xv.SINGLE;
        tU({
          approve: e,
          requestId: a[0],
          selectionMethod: t,
          entryPoint: o,
          successHandler: r
        });
      } else tF({
        approve: e,
        selectedRequestIds: a,
        approveAll: n
      });
    })();
    l && t === ps.TEAM && !e && a.some(e => ty.has(e)) && l("track", "admin-dashboard-dev-mode-decline");
  };
  let tU = ({
    approve: e,
    requestId: n,
    selectionMethod: s = Xv.SINGLE,
    entryPoint: i = eS,
    successHandler: r = tL
  }) => {
    eP(e => new Set(e).add(n));
    (e ? accountTypeRequestHandler.approveRequests.bind(accountTypeRequestHandler) : accountTypeRequestHandler.denyRequests.bind(accountTypeRequestHandler))({
      plan_id: a,
      plan_type: t,
      included_request_ids: [n],
      selection_method: s,
      entry_point: i
    }).then(t => {
      if (200 !== t.status) {
        tR();
        return;
      }
      if (t.data.meta.failed_attempts > 0) {
        tO({
          multiple: !1
        });
        return;
      }
      r({
        approve: e,
        numRequests: 1,
        asyncUpdate: !1
      });
    }).catch(() => {
      tR();
    }).finally(() => {
      eP(e => {
        let t = new Set(e);
        t.$$delete(n);
        return t;
      });
      eH(e => e + 1);
    });
  };
  let tF = ({
    approve: e,
    selectedRequestIds: n,
    approveAll: s,
    entryPoint: i = eS
  }) => {
    ew(ej.current);
    eb(s ? "approving_all_button" : e ? "approving" : "denying");
    s && tg && z(VisualBellActions.enqueue({
      message: getI18nString("admin_dashboard.requests.selected_count_approving", {
        numSelected: tg
      }),
      type: eO,
      timeoutOverride: 1 / 0,
      icon: VisualBellIcon.SPINNER,
      preventDismissal: !0,
      role: "status"
    }));
    let r = s || W;
    let l = e && x9(r, n, e5);
    let o = new Set(n);
    let d = r ? {
      plan_id: a,
      plan_type: t,
      subtractive: !0,
      excluded_request_ids: s ? [] : tj.map(e => e.id).filter(e => !o.has(e)),
      filter_params: s ? te : e9,
      timestamp: (eB ?? new Date()).toISOString(),
      selection_method: s ? Xv.APPROVE_ALL : Xv.BULK_SELECT,
      entry_point: i,
      async_processing: l
    } : {
      plan_id: a,
      plan_type: t,
      included_request_ids: n,
      selection_method: Xv.BULK_SELECT,
      filter_params: te,
      entry_point: i,
      async_processing: l
    };
    let c = (t, a, n) => {
      if (200 !== t) {
        tR();
        return;
      }
      if (a > 0) {
        tO({
          multiple: !0
        });
        return;
      }
      tL({
        approve: e,
        numRequests: n,
        asyncUpdate: l
      });
    };
    let _ = () => {
      eb(!1);
      ew(0);
      r && eV(e => e + 1);
      W && H(!1);
    };
    e ? accountTypeRequestHandler.approveRequests.bind(accountTypeRequestHandler)(d).then(e => {
      if (c(e.status, e.data.meta.failed_attempts, e.data.meta.successful_attempts), l) {
        let t = e.data.meta.processed_request_ids;
        eF(e => new Set([...e, ...new Set(t)]));
      }
      eH(e => e + 1);
    }).catch(() => {
      tR();
    }).finally(() => {
      s && z(VisualBellActions.dequeue({
        matchType: eO
      }));
      _();
    }) : accountTypeRequestHandler.denyRequests.bind(accountTypeRequestHandler)(d).then(e => {
      c(e.status, e.data.meta.failed_attempts, e.data.meta.successful_attempts);
    }).catch(() => {
      tR();
    }).finally(() => {
      _();
    });
  };
  let {
    Sprig
  } = useSprigWithSampling();
  let t$ = t_ || tu;
  let tB = (e, n = Xv.SINGLE, s = eL) => {
    z(showModalHandler({
      type: eI,
      data: {
        request: e,
        planId: a,
        planType: t,
        shouldShowBillingGroup: t$ ?? !1,
        billingGroups: t$ ? e2 : [],
        entryPoint: s,
        onApprove: () => tP({
          approve: !0,
          selectedRequestIds: [e.id],
          shouldProcessAsSingleRequest: !0,
          singleRequestSelectionMethod: n
        }),
        onDeny: () => tP({
          approve: !1,
          selectedRequestIds: [e.id],
          shouldProcessAsSingleRequest: !0,
          singleRequestSelectionMethod: n,
          sprig: Sprig
        })
      }
    }));
  };
  let tG = [{
    name: getI18nString("admin_dashboard.requests.columns.name"),
    className: "upgrade_requests_table--avatarColumn--kQUYF upgrade_requests_table--column--o-mlT admin_settings_page--membersColumn--E3seT table--column--974RA",
    cellComponent: ({
      name: e,
      email: t,
      imgUrl: a,
      userId: s
    }) => {
      let i = e || t || getI18nString("admin_dashboard.requests.no_name");
      return jsx(az, {
        entity: {
          id: s,
          name: i,
          imgUrl: a
        },
        size: 24,
        defaultText: Lv
      });
    }
  }, {
    name: getI18nString("admin_dashboard.requests.columns.request"),
    className: "upgrade_requests_table--requestColumn--PkVGt upgrade_requests_table--column--o-mlT admin_settings_page--membersColumn--E3seT table--column--974RA",
    cellComponent: e => jsx(yz, {
      licenseType: e.licenseType
    })
  }, {
    name: getI18nString("admin_dashboard.requests.columns.note"),
    className: "upgrade_requests_table--noteColumn--SysRF upgrade_requests_table--column--o-mlT admin_settings_page--membersColumn--E3seT table--column--974RA",
    cellComponent: e => {
      let t = !!ex || eM.has(e.id);
      let a = c()(cssBuilderInstance.mr8.bgTransparent.$, e.hasBeenNudged ? "" : "upgrade_requests_table--rowDetailButton--lCxCS");
      return jsxs(AutoLayout, {
        spacing: 8,
        children: [jsx(ef, {
          text: e.message ?? Lv,
          textClassName: null === e.message ? cssBuilderInstance.colorTextTertiary.$ : void 0,
          textMaxWidth: 200,
          onClickLink: () => {
            tB(e);
          }
        }), jsx(Spacer, {}), 0 === ej.current && "approving_all_button" !== ex && jsxs(Fragment, {
          children: [jsx(_$$V2, {
            variant: "secondary",
            disabled: t,
            onClick: t => {
              t.stopPropagation();
              tP({
                approve: !0,
                selectedRequestIds: [e.id],
                shouldProcessAsSingleRequest: !0
              });
            },
            innerText: "Approve",
            dataTestId: "approve-button-single",
            trackingProperties: {
              accountTypeRequestId: e.id
            },
            children: Zm({
              text: getI18nString("admin_dashboard.requests.approve"),
              showSpinner: t
            })
          }), jsx("button", {
            className: a,
            onClick: t => {
              t.stopPropagation();
              tB(e);
            },
            children: jsx(In, {
              icon: "chevron-right-32"
            })
          })]
        })]
      });
    }
  }];
  let tz = e => {
    switch (d) {
      case UpgradeRequestSetting.MEMBERS:
        return renderI18nText(e ? "admin_dashboard.configured_upgrade_request_banner.members" : "admin_dashboard.configured_upgrade_request_empty_state.members");
      case UpgradeRequestSetting.ALL_USERS:
        return renderI18nText(e ? "admin_dashboard.configured_upgrade_request_banner.all_users" : "admin_dashboard.configured_upgrade_request_empty_state.all_users");
      default:
        return null;
    }
  };
  let tV = jsxs("div", {
    className: cssBuilderInstance.mx24.mb12.cursorDefault.selectNone.$,
    children: [t_ && jsx(_$$p, {
      children: jsx(Z, {
        hasBillingGroups: !!e2.length,
        orgName: "loaded" === ts.status ? ts.data?.org?.name ?? "org" : "org"
      })
    }), jsxs(AutoLayout, {
      spacing: 0,
      children: [jsxs(AutoLayout, {
        spacing: 0,
        width: t_ && e2.length > 0 ? 150 : "hug-contents",
        children: [jsx("div", {
          role: "button",
          tabIndex: 0,
          className: eK === V7.ALL_MANAGED_REQUESTS || eY === V7.ALL_MANAGED_REQUESTS ? cssBuilderInstance.font13.fontMedium.lh24.colorText.mr8.py4.$ : cssBuilderInstance.font13.fontMedium.lh24.colorTextSecondary.mr8.py4.$,
          onClick: () => {
            eX(V7.ALL_MANAGED_REQUESTS);
            eZ(V7.ALL_MANAGED_REQUESTS);
            eH(0 === eW ? 1 : 0);
          },
          onMouseEnter: () => {
            eJ(V7.ALL_MANAGED_REQUESTS);
          },
          onMouseLeave: () => eJ(void 0),
          "data-testid": "your-requests-tab",
          "data-onboarding-key": xo,
          children: t_ && e2.length > 0 ? renderI18nText("admin_dashboard.managed_org_requests.title") : renderI18nText("admin_dashboard.requests.title")
        }), jsx(_$$E2, {
          isOrgAdmin: $,
          managedRequests: !0,
          planId: a,
          planType: t,
          processedRequestIds: eq,
          refreshNonce: ez,
          refreshTabCountNonce: eW,
          selectedRequestView: eK,
          showAllOrgRequests: t_ ?? !1,
          showBillingGroupAdminRequests: tu,
          viewableBillingGroupIds: $ ? [null, ...e8] : e8
        })]
      }), t_ && e2.length > 0 && jsx("div", {
        role: "button",
        tabIndex: 0,
        className: eK === V7.ALL_ORG_REQUESTS || eY === V7.ALL_ORG_REQUESTS ? cssBuilderInstance.font13.fontMedium.lh24.colorText.mr8.py4.$ : cssBuilderInstance.font13.fontMedium.lh24.colorTextSecondary.mr8.py4.$,
        onClick: () => {
          eX(V7.ALL_ORG_REQUESTS);
          eZ(V7.ALL_ORG_REQUESTS);
          eH(0 === eW ? 1 : 0);
        },
        onMouseEnter: () => {
          eJ(V7.ALL_ORG_REQUESTS);
        },
        onMouseLeave: () => eJ(void 0),
        "data-testid": "all-org-requests-tab",
        "data-onboarding-key": OW,
        children: renderI18nText("admin_dashboard.all_org_requests.title", {
          orgName: "loaded" === ts.status ? ts.data?.org?.name : "org"
        })
      }), t_ && e2.length > 0 && jsx(_$$E2, {
        isOrgAdmin: $,
        managedRequests: !1,
        planId: a,
        planType: t,
        processedRequestIds: eq,
        refreshNonce: ez,
        refreshTabCountNonce: eW,
        selectedRequestView: eK,
        showAllOrgRequests: t_ ?? !1,
        showBillingGroupAdminRequests: tu,
        viewableBillingGroupIds: $ ? [null, ...e8] : e8
      }), jsx(Spacer, {}), q && jsx(SecureLink, {
        trusted: !0,
        onClick: q,
        className: cssBuilderInstance.fontMedium.$,
        children: jsx(TextWithTruncation, {
          children: renderI18nText("admin_dashboard.requests.view_history")
        })
      }), tg > 0 && jsx("div", {
        className: cssBuilderInstance.pl16.$,
        children: jsx(_$$V2, {
          variant: "primary",
          onClick: () => {
            if (null === tp || null === tg) return;
            let e = ex ? noop : () => tP({
              approve: !0,
              approveAll: !0,
              selectedRequestIds: []
            });
            if (tg === tp && tg < 10) {
              e();
              return;
            }
            z(showModalHandler({
              type: ev,
              data: {
                onConfirm: e,
                totalRequestCount: tg,
                filteredRequestCount: tp
              }
            }));
          },
          innerText: "Approve all",
          dataTestId: "approve-all-button",
          disabled: null === tg,
          children: Zm({
            text: getI18nString("admin_dashboard.requests.approve_all"),
            showSpinner: "approving_all_button" === ex
          })
        })
      })]
    }), !!d && tj.length > 0 && jsx("div", {
      style: styleBuilderInstance.add({
        maxWidth: "760px"
      }).mt16.mb16.$,
      children: jsx(_$$z, {
        orientation: "vertical",
        iconSrc: _$$A2,
        variant: "gray",
        children: jsx("div", {
          className: cssBuilderInstance.pr16.$,
          children: tz(!0)
        })
      })
    })]
  });
  return jsx(TrackingProvider, {
    name: _$$e2.UPGRADE_REQUESTS_TABLE,
    properties: {
      adminRequestsDashboard: !0,
      orgId: e5 ? a : void 0,
      teamId: t === ps.TEAM ? a : void 0,
      entryPoint: "dashDeepLinkEntryPoint" in eC ? eC.dashDeepLinkEntryPoint : ""
    },
    children: jsxs("div", {
      className: c()("upgrade_requests_table--fontSmoothing---uY3Z", cssBuilderInstance.pt16.bRadius6.b1.colorBorder.$),
      children: [tV, jsx("div", {
        style: styleBuilderInstance.add({
          width: "780px",
          height: tw ? `${tw}px` : void 0
        }).$,
        children: jsx(Cj, {
          actionBar: "approving_all_button" === ex ? void 0 : e => tf ? jsx("div", {
            className: cssBuilderInstance.w150.$,
            children: jsx(Wi, {
              className: cssBuilderInstance.h12.w150.$,
              animationType: JR.SHIMMER_ON_MENU
            })
          }) : jsx("div", {
            className: "upgrade_requests_table--actionBarButtons--TsqDX",
            children: jsxs(AutoLayout, {
              spacing: 8,
              children: [jsx(_$$V2, {
                variant: "toolbar-secondary",
                disabled: !!ex,
                onClick: ex ? noop : () => tP({
                  approve: !1,
                  selectedRequestIds: e.map(e => e.id),
                  sprig: Sprig
                }),
                innerText: "Decline",
                dataTestId: "decline-button-multiple",
                children: Zm({
                  text: getI18nString("admin_dashboard.requests.decline"),
                  showSpinner: "denying" === ex
                })
              }), jsx(_$$V2, {
                variant: "primary",
                disabled: !!ex,
                onClick: ex ? noop : () => tP({
                  approve: !0,
                  selectedRequestIds: e.map(e => e.id)
                }),
                innerText: "Approve",
                dataTestId: "approve-button-multiple",
                children: Zm({
                  text: getI18nString("admin_dashboard.requests.approve"),
                  showSpinner: "approving" === ex
                })
              })]
            })
          }),
          actionBarClassName: c()("upgrade_requests_table--actionBar--j2w7t", tf ? void 0 : "upgrade_requests_table--actionBarHasContent--NoxVR"),
          columns: tG,
          disabled: !!ex,
          emptyContent: (G = 0 === Y.length && null === K && eQ === eK && null === e0 ? jsxs(Fragment, {
            children: [jsx("div", {
              className: cssBuilderInstance.fontSemiBold.lh16.cursorDefault.colorTextSecondary.$,
              children: renderI18nText(d && tu ? "admin_dashboard.requests.empty.configurable_upgrade_requests" : "admin_dashboard.requests.empty.primary_text")
            }), jsx("div", {
              style: styleBuilderInstance.add({
                maxWidth: "500px"
              }).lh16.cursorDefault.alignCenter.colorTextSecondary.$,
              children: d ? tz(!1) : renderI18nText("admin_dashboard.requests.empty.secondary_text")
            })]
          }) : Y.length > 0 && null === K && eQ === eK && null === e0 ? jsx("div", {
            className: cssBuilderInstance.lh16.cursorDefault.colorText.$,
            children: renderI18nText("admin_dashboard.requests.empty.no_search_results")
          }) : jsx("div", {
            className: cssBuilderInstance.lh16.cursorDefault.colorText.$,
            children: renderI18nText("admin_dashboard.requests.empty.no_filter_results", {
              resetFiltersLink: jsx(SecureLink, {
                trusted: !0,
                onClick: () => {
                  X(null);
                  eZ(eK);
                  J("");
                  e1(null);
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
            children: G
          })),
          getItemKey: e => e.id,
          getTotalSelected: tf ? void 0 : (e, t) => {
            let a;
            a = W && tp ? Math.max(1, tp - (t.length - e.length)) : e.length;
            ej.current = a;
            return a;
          },
          hasNewScrollContext: !0,
          isLoading: tm,
          itemBasedStyleOverride: e => e.hasBeenNudged ? {
            row: "upgrade_requests_table--nudgedRequestRow--Wwvk1"
          } : null,
          itemTypeContext: {
            itemType: k_,
            getSelectedCountString: e => tf ? "" : "approving" === ex ? getI18nString("admin_dashboard.requests.selected_count_approving", {
              numSelected: ey
            }) : "denying" === ex ? getI18nString("admin_dashboard.requests.selected_count_denying", {
              numSelected: ey
            }) : getI18nString("admin_dashboard.requests.selected_count_request", {
              numSelected: e
            })
          },
          items: tj,
          minContentWidth: 780,
          onFetchMore: tl ? () => {
            ti && !tr && tl && tt?.data?.adminDashboardRequests?.loadNext(25);
          } : void 0,
          onSelectedItemsChange: e => {
            0 === e.length && H(!1);
          },
          onSetSortState: noop,
          onToggleSelectAll: e => {
            H(!e);
          },
          scrollBarAlwaysVisible: !0,
          scrollContainerInnerClassName: "upgrade_requests_table--tableScrollContainer--hVmic",
          sortState: {
            columnName: "",
            isReversed: !1
          },
          stickyContent: tA,
          unselectableItemKeys: eM
        })
      })]
    })
  });
}
export const F = $$eD0;