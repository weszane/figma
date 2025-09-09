import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useEffect, forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { useSubscription } from "../figma_app/288654";
import { oA } from "../905/723791";
import { s as _$$s } from "../cssbuilder/589278";
import { k as _$$k } from "../figma_app/618031";
import { aN, V4, D3 } from "../4452/846771";
import { n as _$$n } from "../4452/550447";
import { I as _$$I } from "../4452/82228";
import { m as _$$m } from "../4452/688074";
import { I1 } from "../figma_app/990058";
import { m$ } from "../figma_app/240735";
import { ViewAccessTypeEnum } from "../905/513035";
import { d as _$$d } from "../figma_app/603561";
import { FOrganizationLevelType, FUserRoleType } from "../figma_app/191312";
import { OrgUsersByIdView } from "../figma_app/43951";
import { useTeamPlanFeatures } from "../figma_app/465071";
import { useAtomWithSubscription } from "../figma_app/27355";
import { lR, e6 } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { Zu } from "../4452/396452";
import { u as _$$u } from "../905/16237";
import { c as _$$c } from "../905/370443";
import { trackEventAnalytics } from "../905/449184";
import { capitalize, toTitleCase } from "../figma_app/930338";
import { Ak } from "../905/986103";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { G as _$$G } from "../905/750789";
import { sx as _$$sx } from "../905/941192";
import { tI, JT } from "../figma_app/599327";
import { II } from "../figma_app/11182";
import { $n } from "../905/521428";
import { y as _$$y } from "../905/37128";
import { S as _$$S2 } from "../905/794163";
import { Xf } from "../figma_app/153916";
import { E1, BC } from "../figma_app/149367";
import { E as _$$E } from "../905/53857";
import { O as _$$O } from "../905/936515";
import Y from "classnames";
import { H8 } from "../905/590952";
import { Wi } from "../figma_app/162641";
function w({
  onClose: e,
  onApprove: t,
  onDecline: a,
  requestId: n
}) {
  let r = useAtomWithSubscription(aN);
  let i = useAtomWithSubscription(V4);
  let l = !!r || i.has(n);
  let o = _$$u();
  return jsxs("div", {
    className: _$$s.wFull.flex.flexColumn.gap8.$,
    children: [jsx(lR, {
      onClick: () => {
        t();
        e();
      },
      disabled: l,
      trackingProperties: {
        trackingDescriptor: _$$c.APPROVE
      },
      trackingOptions: o,
      children: jsx(Zu, {
        text: getI18nString("admin_dashboard.request_flyout.approve"),
        showSpinner: "approving" === r && i.has(n)
      })
    }), jsx(lR, {
      onClick: () => {
        a();
        e();
      },
      variant: "secondary",
      disabled: l,
      trackingProperties: {
        trackingDescriptor: _$$c.DECLINE
      },
      trackingOptions: o,
      children: jsx(Zu, {
        text: getI18nString("admin_dashboard.request_flyout.decline"),
        showSpinner: "declining" === r && i.has(n)
      })
    })]
  });
}
function G({
  seatType: e,
  seatCostResult: t,
  isProrationBillingEnabled: a,
  planUser: n
}) {
  let i = useDispatch();
  let l = useTeamPlanFeatures().unwrapOr(null);
  let o = t.reason === D3.AVAILABLE_SEAT;
  let d = o ? jsx(_$$y, {}) : jsx(_$$S2, {});
  let c = l?.key.type === FOrganizationLevelType.ORG;
  let m = Xf(l?.key.parentId, l?.key.type !== FOrganizationLevelType.TEAM);
  let _ = useSelector(e => e.teamBilling);
  let p = l?.key.type === FOrganizationLevelType.TEAM ? _.summary.currency : m.data?.currency;
  return jsxs("div", {
    style: _$$sx.flex.itemsCenter.justifyBetween.flexRow.p8.pr16.gap4.wAuto.bRadius5.textBodyMediumStrong.$$if(o, _$$sx.colorBgSelected, _$$sx.colorBgSecondary).$,
    "data-testid": "seat-cost-info",
    children: [jsxs("div", {
      style: _$$sx.flex.flexRow.itemsCenter.justifyBetween.gap4.$,
      children: [d, jsx("div", {
        children: o ? c ? renderI18nText("admin_dashboard.request_flyout.seat_cost.no_cost_for_approval") : renderI18nText("admin_dashboard.request_flyout.seat_cost.this_will_use_available_seat", {
          seatType: tI(e)
        }) : a && t.price ? renderI18nText("admin_dashboard.request_flyout.seat_cost.cost_associated_to_approval", {
          seatType: tI(e),
          seatCost: t.price
        }) : renderI18nText("admin_dashboard.request_flyout.seat_cost.cost_associated_to_approval_no_price", {
          seatType: tI(e)
        })
      })]
    }), !!n.currentSeat && jsx($n, {
      onClick: () => E1({
        currency: p,
        dispatch: i,
        planUser: {
          id: n.id,
          userId: n.user.id,
          name: n.user.name,
          handle: n.user.handle,
          currentSeatType: n.currentSeat
        },
        nextSeatType: e,
        hideFooter: !0
      }),
      variant: "link",
      children: jsx("p", {
        style: _$$sx.textBodyMedium.$,
        children: renderI18nText("admin_dashboard.request_flyout.seat_cost.see_details")
      })
    })]
  });
}
function V({
  label: e,
  value: t,
  onClick: a
}) {
  let n = jsx(_$$G, {
    className: "xh8yej3 xdpxx8g",
    text: t ?? "-"
  });
  return jsxs("div", {
    className: _$$s.flex.flexColumn.overflowBreakWord.textBodyMedium.$,
    children: [jsx("div", {
      className: _$$s.colorTextSecondary.$,
      children: e
    }), a ? jsx(e6, {
      className: "xt0psk2 xh8yej3 x1e9o9zf xt0b8zv",
      onClick: a,
      children: n
    }) : n]
  });
}
function $({
  request: e,
  lastActiveValue: t,
  billingGroupName: a,
  currentSeatValue: n
}) {
  let i;
  let l = useDispatch();
  let o = capitalize(Ak(e.createdAt));
  let d = jsx(V, {
    label: getI18nString("admin_dashboard.request_flyout.body.email"),
    value: e.email,
    onClick: e.email ? t => {
      t.stopPropagation();
      e.email && l(II({
        emailList: [e.email]
      }));
    } : void 0
  });
  let c = jsx(V, {
    label: getI18nString("admin_dashboard.request_flyout.body.role"),
    value: e.jobTitle && toTitleCase(e.jobTitle)
  });
  let u = jsx(V, {
    label: getI18nString("admin_dashboard.request_flyout.body.request_sent"),
    value: o
  });
  let m = jsx(V, {
    label: getI18nString("admin_dashboard.request_flyout.body.current_seat"),
    value: n ? JT(n) : "-"
  });
  let _ = capitalize(Ak(t));
  let p = jsx(V, {
    label: getI18nString("admin_dashboard.request_flyout.body.last_active"),
    value: t ? _ : "-"
  });
  i = a ? [[d, c, p], [jsx(V, {
    label: getI18nString("admin_dashboard.request_flyout.body.billing_group"),
    value: a
  }), m, u]] : [[d, m, u], [c, p]];
  return jsx("div", {
    style: _$$sx.flex.gap24.p16.colorBorder.b1.add({
      borderRadius: "13px"
    }).$,
    children: i.map((e, t) => jsx("div", {
      style: _$$sx.add({
        width: "calc((100% - 56px)/2)"
      }).flex.flexColumn.flex1.gap24.$,
      children: e
    }, `requestInfoColumn${t}`))
  });
}
function W({
  failedToLoadPrices: e
}) {
  return (useEffect(() => {
    e && trackEventAnalytics("seat_purchasing.non_blocking_fetch_error", {
      price_fetch_error: e,
      view: "request_flyout"
    }, {
      forwardToDatadog: !0
    });
  }, [e]), e) ? jsx(_$$_, {
    dataTestId: "pricing-error-banner",
    color: _$$S.WARNING,
    padding: 8,
    text: renderI18nText("admin_dashboard.request_flyout.price_fetching_error")
  }) : null;
}
function z({
  request: e,
  planUser: t,
  billingGroupName: a,
  seatCostResult: n,
  shouldHideSeatCostInfo: r,
  isProrationBillingEnabled: i,
  failedToLoadPrices: l
}) {
  return jsxs("div", {
    className: _$$s.flex.flexColumn.hFull.justifyBetween.gap16.mb8.$,
    "data-testid": "request-flyout-body",
    children: [jsx("div", {
      className: _$$s.flex.flexColumn.gap24.$,
      children: jsx($, {
        request: e,
        billingGroupName: a,
        lastActiveValue: t.lastActive,
        currentSeatValue: t.currentSeat
      })
    }), jsxs("div", {
      children: [!r && !!n && jsx(G, {
        seatType: e.billableProductKey,
        seatCostResult: n,
        isProrationBillingEnabled: i,
        planUser: t
      }), jsx(W, {
        failedToLoadPrices: l
      })]
    })]
  });
}
var K = Y;
let J = "request_flyout--secondaryIcon--lhrXO";
function Z({
  request: e
}) {
  let t = e.name || e.email || getI18nString("admin_dashboard.requests.no_name");
  let a = Ak(e.updatedAt);
  let n = {
    id: e.userId,
    name: t,
    email: e.email ?? "",
    imgUrl: e.imgUrl ?? ""
  };
  return jsxs("div", {
    "data-testid": "request-flyout-header",
    className: _$$s.flex.flexColumn.gap16.$,
    children: [jsxs("div", {
      className: "request_flyout--avatarContainer--S-J9Y",
      children: [jsx(H8, {
        size: 48,
        user: n
      }), e.hasBeenNudged ? jsx("div", {
        className: K()(J, "request_flyout--reminderIcon--YYAB2"),
        "data-testid": "seat-requests-flyout-avatar-reminder",
        children: jsx(_$$O, {
          style: _$$sx.add({
            rotate: "35deg",
            marginLeft: "-2px",
            marginTop: "-2px"
          }).$
        })
      }) : jsx("div", {
        className: K()(J, "request_flyout--planIcon--3ad7j"),
        "data-testid": "seat-requests-flyout-avatar-seat-type",
        children: jsx(BC, {
          type: e.billableProductKey,
          removeBackgroundColor: !0,
          size: "16"
        })
      })]
    }), jsxs("div", {
      className: _$$s.flex.flexColumn.$,
      children: [jsxs("div", {
        className: "x78zum5 x1q0g3np x193iq5w x6s0dn4 xfex06f",
        children: [jsx(_$$G, {
          text: t,
          className: _$$s.textHeadingMedium.fontSemiBold.$
        }), e.orgPermission === FUserRoleType.GUEST && jsx(_$$E, {
          size: "lg",
          variant: "defaultOutline",
          children: renderI18nText("admin_dashboard.requests.badge.guest")
        })]
      }), jsx("div", {
        className: _$$s.textHeadingMedium.fontMedium.$,
        children: renderI18nText("admin_dashboard.request_flyout.requested_a_seat", {
          seatType: tI(e.billableProductKey)
        })
      })]
    }), e.lastNudgedAt && jsx("div", {
      className: "request_flyout--reminder--HX1aD",
      "data-testid": "nudged-request-banner",
      children: renderI18nText("admin_dashboard.requests.reminder_sent", {
        time: a
      })
    }), e.message && jsx("div", {
      style: _$$sx.overflowBreakWord.colorBgSecondary.textBodyMedium.colorTextSecondary.pt8.pb8.pr16.pl16.add({
        borderRadius: "0 13px 13px 13px"
      }).$,
      children: e.message
    })]
  });
}
function et() {
  return jsxs("div", {
    className: _$$s.flex.flexColumn.gap16.$,
    "data-testid": "request-flyout-loading-skeleton-header",
    children: [jsx(Wi, {
      style: _$$sx.w48.h48.bRadiusFull.$
    }), jsx(Wi, {
      style: _$$sx.add({
        width: "20%"
      }).h16.$
    }), jsx(Wi, {
      style: _$$sx.add({
        width: "40%"
      }).h24.$
    })]
  });
}
function ea() {
  return jsxs("div", {
    className: _$$s.flex.flexColumn.gap16.wFull.$,
    "data-testid": "request-flyout-loading-skeleton-body",
    children: [jsx(Wi, {
      className: _$$s.wFull.h32.$
    }), jsx(Wi, {
      className: _$$s.wFull.h200.$
    })]
  });
}
function es() {
  return jsxs("div", {
    className: _$$s.flex.flexColumn.gap8.$,
    "data-testid": "request-flyout-loading-skeleton-footer",
    children: [jsx(Wi, {
      style: _$$sx.wFull.h32.$
    }), jsx(Wi, {
      style: _$$sx.wFull.h32.$
    })]
  });
}
let en = (e, t) => {
  let a = oA(t.data?.org)?.baseOrgUserMembersById;
  if (!a) return;
  let [s] = a;
  let n = e.length > 0 && s ? e.find(e => e.id === s.licenseGroupMember?.licenseGroupId) ?? null : null;
  return n?.name;
};
let er = {
  Root: forwardRef((e, t) => jsx(_$$I, {
    open: e.open,
    trackingName: e.trackingName,
    trackingProperties: e.trackingProperties,
    children: jsx(_$$m.Root, {
      ref: t,
      open: e.open,
      onClose: e.onClose,
      children: e.children
    })
  })),
  Contents: function ({
    request: e,
    billingGroups: t,
    onClose: a,
    onApprove: o,
    onDecline: _
  }) {
    let j;
    let I;
    let E;
    let S;
    let T = useDispatch();
    let A = useTeamPlanFeatures().unwrapOr(null);
    if (!A) throw Error("Missing Plan.");
    let N = A.key.type === FOrganizationLevelType.ORG;
    let R = useSelector(t => {
      let a = t.teamMembersByTeamId[A.key.parentId ?? ""];
      return a ? a[e?.email ?? ""] : void 0;
    });
    let {
      calculateCostForSeatTypeIncrease,
      status
    } = _$$n(A, e);
    let q = calculateCostForSeatTypeIncrease();
    let M = _$$d({
      reportErrorsToTeam: _$$e.SCALE
    });
    let O = _$$k();
    let [L, P] = useState();
    useEffect(() => {
      async function t() {
        await T(m$({
          teamId: A?.key.parentId ?? ""
        }));
      }
      async function a() {
        P(await T(I1({
          orgId: A?.key.parentId ?? "",
          userId: e?.userId ?? ""
        })));
      }
      N && a();
      A?.key.type === FOrganizationLevelType.TEAM && t();
      return () => P(null);
    }, [T, N, A?.key.parentId, A?.key.type, e?.userId]);
    let D = useSubscription(OrgUsersByIdView, {
      orgId: A?.key.parentId ?? "",
      orgUserIds: L ? [L.id] : []
    }, {
      enabled: !!L && t.length > 0
    });
    if (!e) return jsx(Fragment, {});
    S = N ? {
      id: L?.id ?? "",
      user: {
        id: L?.user.id ?? "",
        name: L?.user.name ?? "",
        handle: L?.user.handle ?? ""
      },
      lastActive: L?.last_seen ?? void 0,
      currentSeat: L ? L.active_seat_type?.key ?? ViewAccessTypeEnum.VIEW : void 0
    } : {
      id: R?.team_user?.id ?? "",
      user: {
        id: R?.team_user?.user_id ?? "",
        name: R?.name ?? "",
        handle: R?.team_user?.user?.handle ?? ""
      },
      lastActive: R?.last_active ? new Date(1e3 * R.last_active).toISOString() : void 0,
      currentSeat: R ? R.team_user?.active_seat_type?.key ?? ViewAccessTypeEnum.VIEW : void 0
    };
    let F = !L || "loading" === D.status;
    let B = "errors" === status;
    let U = M || B || D3.MISSING_CURRENCY === q?.reason || D3.COST_MESSAGING_DISABLED === q?.reason;
    if (!S || N && F) {
      j = jsx(et, {});
      I = jsx(ea, {});
      E = jsx(es, {});
    } else {
      let n = en(t, D);
      j = jsx(Z, {
        request: e
      });
      I = jsx(z, {
        request: e,
        planUser: S,
        billingGroupName: n,
        seatCostResult: q,
        shouldHideSeatCostInfo: U,
        failedToLoadPrices: B,
        isProrationBillingEnabled: O
      });
      E = jsx(w, {
        onClose: a,
        onApprove: o,
        onDecline: _,
        requestId: e.id
      });
    }
    return jsx(_$$m.Contents, {
      children: jsxs("div", {
        className: _$$s.flex.flexColumn.justifyBetween.hFull.p24.gap24.$,
        children: [jsx(_$$m.HiddenTitle, {
          children: e.id
        }), j, jsxs("div", {
          className: _$$s.flex.flexColumn.justifyBetween.hFull.gap16.$,
          children: [I, E]
        })]
      })
    });
  }
};
export function $$ei0(e) {
  let {
    request,
    billingGroups,
    open,
    onClose,
    onApprove,
    onDecline,
    trackingName,
    trackingProperties,
    flyoutRef
  } = e;
  return {
    requestFlyout: jsx(er.Root, {
      open,
      onClose,
      trackingName,
      trackingProperties: {
        ...trackingProperties
      },
      ref: flyoutRef,
      children: jsx(er.Contents, {
        request,
        billingGroups,
        onClose,
        onApprove,
        onDecline
      })
    })
  };
}
export const m = $$ei0;