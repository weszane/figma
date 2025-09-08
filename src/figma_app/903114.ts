import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect, Suspense } from "react";
import { useDispatch } from "../vendor/514228";
import { isNotNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, nB, wi, jk } from "../figma_app/272243";
import { trackEventAnalytics } from "../905/449184";
import { A as _$$A } from "../905/920142";
import { HB, lb } from "../3973/538504";
import { mI } from "../figma_app/566371";
import { reportError } from "../905/11";
import { tH, H4 } from "../905/751457";
import { h1 } from "../905/986103";
import { s as _$$s } from "../cssbuilder/589278";
import { $z } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { zX } from "../905/576487";
import { Y as _$$Y } from "../905/830372";
import { E as _$$E } from "../905/984674";
import { j as _$$j } from "../905/584270";
import { l as _$$l, m as _$$m } from "../905/602189";
import { JT, Qi, mb } from "../figma_app/847597";
import { k as _$$k } from "../figma_app/618031";
import { N as _$$N } from "../figma_app/28806";
import { Qf } from "../figma_app/80683";
import { u as _$$u } from "../905/16237";
import { tb } from "../905/848667";
import { U2 } from "../figma_app/297957";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { Gu, ud } from "../905/513035";
import { Ye, N_ } from "../905/332483";
import { I as _$$I } from "../905/343211";
import { d as _$$d } from "../figma_app/603561";
import { iZ } from "../905/372672";
import { FOrganizationLevelType, FBillingPeriodType, FSeatAssignmentReasonType, FUpgradeReasonType, FApprovalMethodType } from "../figma_app/191312";
import { vr } from "../figma_app/514043";
import { T5 } from "../figma_app/465071";
import { Ef } from "../figma_app/428858";
import { h as _$$h } from "../figma_app/124713";
import { B as _$$B } from "../figma_app/395012";
import { registerModal } from "../905/102752";
import { N as _$$N2 } from "../905/809096";
import { UL, un, kI } from "../figma_app/457899";
let $$q0 = "https://help.figma.com/hc/articles/360039960434-Manage-seats-in-Figma";
let J = Ye.dict(() => 0);
function $$Z(e) {
  let t = hS(e);
  let r = (e.planUser.handle || e.planUser.name) ?? "";
  let [a, u] = useState(e.nextSeatType ?? null);
  let p = _$$d({
    reportErrorsToTeam: _$$e.SCALE
  });
  let _ = T5("ModifyPlanUserSeatModalInner");
  let [g] = mI(_);
  if ("loaded" !== g.status) {
    let e = Error("disabled" === g.status ? "Plan fetching disabled" : "Error fetching plan");
    reportError(_$$e.SCALE, e);
    return e;
  }
  let f = g.data;
  if (!f) {
    let e = Error("No Plan found");
    reportError(_$$e.SCALE, e);
    return e;
  }
  let y = _$$k();
  let T = _$$I(f);
  let I = UL({
    planType: f.key.type,
    targetPlanUserId: e.planUser.id,
    targetUserId: e.planUser.userId
  });
  let v = I.data?.planUserById ?? {
    currentSeat: null
  };
  let x = !!v.currentSeat;
  let w = v.currentSeat?.billingInterval ?? null;
  let R = un({
    planKey: f.key,
    currentSeatType: e.planUser.currentSeatType,
    enabled: y && !p && !!T.data,
    currentSeatBillingInterval: w
  });
  let [L] = mI(R);
  let P = Qf(f.key.parentId, f.key.type);
  let D = "loaded" === P.status ? Ye.dict(e => P.data[e]?.available ?? 0) : J;
  let B = new vr(e.currency);
  let z = N_.dict(e => {
    let t = L.data?.[e]?.amount ?? 0;
    return {
      amount: t,
      display: B.formatMoney(t, {
        showCents: !1
      })
    };
  });
  let W = "errors" === P.status;
  let K = "disabled" !== L.status && ("errors" === L.status || !e.currency || !L.data);
  let Y = !!a && (a === Gu.VIEW || isNotNullish(D[a]) && D[a] > 0);
  let $ = kI({
    prices: L.data,
    currentSeatType: e.planUser.currentSeatType,
    nextSeatType: a,
    nextSeatAvailable: Y,
    failedToLoadPrices: K
  });
  let q = f.key.type === FOrganizationLevelType.TEAM && !y && w === FBillingPeriodType.YEAR && e.planUser.currentSeatType === ud.EXPERT && a === ud.DEVELOPER && D[ud.DEVELOPER] < 1;
  return jsx(fu, {
    name: "Modify Plan User Seat Modal",
    children: jsx(bL, {
      height: "dynamic",
      manager: t,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(nB, {
          children: jsxs(_$$Y, {
            direction: "vertical",
            spacing: 0,
            padding: {
              horizontal: 8,
              vertical: 16
            },
            children: [jsx(_$$j, {
              user: e.planUser,
              text: null === a ? getI18nString("modify_plan_user_seat_modal.choose_seat", {
                name: r
              }) : a !== Gu.VIEW && Y ? getI18nString("modify_plan_user_seat_modal.move_to_available_seat", {
                name: r,
                seatType: JT(a)
              }) : getI18nString("modify_plan_user_seat_modal.move_to_unavailable_seat", {
                name: r,
                seatType: JT(a)
              })
            }), jsx(er, {
              userName: r,
              lastActiveAt: e.planUser.lastActiveAt,
              upgradeMethod: e.planUser.upgradeMethod,
              upgradeReason: e.planUser.upgradeReason,
              upgradeActorName: e.planUser.upgradeActorName,
              assignedAt: e.planUser.assignedAt,
              currentSeatType: e.planUser.currentSeatType,
              jobTitle: e.planUser.jobTitle
            }), jsx("div", {
              className: _$$s.mb24.$
            }), jsx(Q, {
              billableProductKeyContractPrices: z,
              currentSeatPaidFor: x,
              currentSeatType: e.planUser.currentSeatType,
              displayPricing: y && !!e.currency && null !== L.data && !p && "loading" !== P.status,
              isDiscouragedAnnualSeatSwap: q,
              nextSeatType: a,
              plan: f,
              prorationEnabled: y,
              seatAvailability: p ? J : D,
              setNextSeatType: u,
              userId: e.planUser.userId,
              userName: r
            }), jsx(et, {
              failedToLoadAvailability: W,
              failedToLoadPrices: K
            })]
          })
        }), !!a && !e.hideFooter && jsx(ee, {
          isDiscouragedAnnualSeatSwap: q,
          nextSeatType: a,
          onClose: e.onClose,
          plan: f,
          planUserId: e.planUser.id,
          previousSeatType: e.planUser.currentSeatType,
          previousSeatWillBecomeAvailable: !p && (x && !y || y && !$),
          queueFilterCountsRefetch: e.queueFilterCountsRefetch,
          refetchSeatCounts: P.refetch,
          seatIncreaseAuthorized: !y || a === Gu.VIEW || isNotNullish(D[a]) && D[a] < 1,
          seatSwapIntended: y && $,
          setNextSeatType: u,
          userId: e.planUser.userId,
          userName: r
        })]
      })
    })
  });
}
function Q({
  currentSeatType: e,
  nextSeatType: t,
  setNextSeatType: r,
  billableProductKeyContractPrices: i,
  seatAvailability: a,
  displayPricing: s,
  prorationEnabled: o,
  currentSeatPaidFor: l,
  isDiscouragedAnnualSeatSwap: d,
  plan: c,
  userName: u,
  userId: p
}) {
  return t ? jsx(_$$l, {
    availableSeats: a[t] ?? 0,
    currentSeatPaidFor: l,
    displayPricing: s,
    fromSeatType: e,
    isDiscouragedAnnualSeatSwap: d,
    plan: c,
    pricing: i,
    prorationEnabled: o,
    toSeatType: t,
    userId: p,
    userName: u
  }) : jsx(_$$m, {
    currentSeatType: e,
    setNextSeatType: r,
    availableSeatCounts: a,
    displayPricing: s,
    pricing: i,
    learnMoreLinkHref: $$q0
  });
}
function ee({
  nextSeatType: e,
  onClose: t,
  plan: r,
  planUserId: s,
  seatIncreaseAuthorized: o,
  seatSwapIntended: l,
  setNextSeatType: d,
  userId: u,
  userName: p,
  previousSeatType: _,
  queueFilterCountsRefetch: h,
  previousSeatWillBecomeAvailable: m,
  isDiscouragedAnnualSeatSwap: g,
  refetchSeatCounts: f
}) {
  let E = r.key.parentId;
  let S = r.key.type;
  let v = useDispatch();
  let [A, x] = useState(!1);
  let N = useCallback(() => {
    f();
    x(!1);
  }, [f]);
  let C = useCallback(() => {
    let e = m ? function (e, t) {
      switch (t) {
        case ud.EXPERT:
          return getI18nString("modify_plan_user_seat_modal.visual_bell.message_with_previous_full", {
            userName: e
          });
        case ud.DEVELOPER:
          return getI18nString("modify_plan_user_seat_modal.visual_bell.message_with_previous_dev", {
            userName: e
          });
        case ud.COLLABORATOR:
          return getI18nString("modify_plan_user_seat_modal.visual_bell.message_with_previous_collab", {
            userName: e
          });
        case Gu.VIEW:
        default:
          return getI18nString("modify_plan_user_seat_modal.visual_bell.message_with_previous_view", {
            userName: e
          });
      }
    }(p, _) : getI18nString("modify_plan_user_seat_modal.visual_bell.message_with_previous_view", {
      userName: p
    });
    t();
    v(_$$F.enqueue({
      message: e,
      type: "plan-user-seat-change",
      icon: zX.CHECK_WITH_CIRCLE
    }));
  }, [v, t, p, _, m]);
  let O = _$$N({
    planId: E,
    ...Ef(S, {
      team: {
        entryPoint: _$$B.MEMBERS_TAB
      },
      org: {
        entryPoint: _$$h.MEMBERS_TAB
      }
    }),
    queueFilterCountsRefetch: h,
    onSuccess: C,
    onFailure: N
  });
  let L = iZ();
  let P = _$$u();
  return jsx(wi, {
    children: jsxs(jk, {
      children: [jsx($z, {
        disabled: A,
        onClick: () => d(null),
        variant: "secondary",
        trackingProperties: {
          trackingDescriptor: _$$c.BACK
        },
        children: getI18nString("modify_plan_user_seat_modal.button.back")
      }), jsx($z, {
        disabled: A,
        onClick: () => {
          x(!0);
          O({
            users: [{
              userId: u,
              planUserId: s
            }],
            seatTypeOption: e,
            seatIncreaseAuthorized: o,
            seatSwapIntended: l,
            upgradeReason: S === FOrganizationLevelType.TEAM ? FSeatAssignmentReasonType.ADMIN_UPGRADE : FUpgradeReasonType.ADMIN_UPGRADE,
            upgradeMethod: FApprovalMethodType.ADMIN_INITIATED,
            assignedAt: new Date(),
            upgradeActorName: L?.name || L?.handle || void 0
          });
        },
        variant: "primary",
        trackingProperties: {
          trackingDescriptor: _$$c.CONFIRM,
          isDiscouragedAnnualSeatSwap: g,
          previousSeatType: _,
          nextSeatType: e
        },
        trackingOptions: P,
        children: g ? getI18nString("modify_plan_user_seat_modal.button.add_seat") : getI18nString("modify_plan_user_seat_modal.button.confirm")
      })]
    })
  });
}
function et({
  failedToLoadAvailability: e,
  failedToLoadPrices: t
}) {
  useEffect(() => {
    (e || t) && trackEventAnalytics("seat_purchasing.non_blocking_fetch_error", {
      seat_counts_fetch_error: e,
      price_fetch_error: t,
      view: "modify_plan_user_seat_modal"
    }, {
      forwardToDatadog: !0
    });
  }, [e, t]);
  let r = null;
  return (e && t ? r = getI18nString("modify_plan_user_seat_modal.error.missing_pricing_and_seat_avability") : e ? r = getI18nString("modify_plan_user_seat_modal.error.missing_seat_availability") : t && (r = getI18nString("modify_plan_user_seat_modal.error.missing_pricing")), r) ? jsx("div", {
    "data-testid": "modify-seat-modal-error-message",
    children: jsx(_$$E, {
      color: "danger",
      children: r
    })
  }) : null;
}
function er({
  userName: e,
  lastActiveAt: t,
  upgradeReason: r,
  upgradeMethod: i,
  assignedAt: a,
  upgradeActorName: s,
  currentSeatType: o,
  jobTitle: l
}) {
  if (!U2()()) return null;
  let d = t && 7 >= _$$A().diff(_$$A(t), "days");
  let c = a ? tb(a.toISOString()) : null;
  let u = l && "other" !== HB(l);
  return jsxs(_$$Y, {
    direction: "vertical",
    spacing: 0,
    className: "x15r87gk",
    children: [jsx("div", {
      className: "x78zum5 x6s0dn4",
      children: i && jsxs(Fragment, {
        children: [u && jsxs(Fragment, {
          children: [jsx(_$$E, {
            color: "secondary",
            children: getI18nString("modify_plan_user_seat_modal.role", {
              jobTitle: lb(l)
            })
          }), jsx("div", {
            className: "x2lah0s xuxw1ft xt9pc3i",
            children: jsx(_$$E, {
              color: "secondary",
              "aria-hidden": "true",
              children: " \xb7 "
            })
          })]
        }), jsx("div", {
          "data-tooltip": Qi(e, i ?? null, r ?? null, s, void 0, o),
          "data-tooltip-type": "text",
          "data-tooltip-show-immediately": !0,
          "data-tooltip-hide-immediately": !0,
          className: "xujl8zx xev0dqp xykb3jb x5ek575 x1sxf85j xxk0z11 x78zum5 x6s0dn4 xilkfi8 x1cmmqis x11yfylt xjbqb8w xv2f06h x1ptam9a",
          children: jsx(_$$E, {
            color: "secondary",
            children: mb(i)
          })
        }), c && jsxs(Fragment, {
          children: [jsx(_$$E, {
            color: "secondary",
            "aria-hidden": "true",
            children: " "
          }), jsx(_$$E, {
            color: "secondary",
            children: renderI18nText("members_table.user_upgrade_date", {
              upgradeDate: c
            })
          })]
        })]
      })
    }), d && jsx(_$$E, {
      color: "secondary",
      children: renderI18nText("modify_plan_user_seat_modal.last_active", {
        lastActiveAt: jsx(h1, {
          date: t
        })
      })
    })]
  });
}
export let $$en1 = registerModal(function (e) {
  return jsx(tH, {
    boundaryKey: "ModifyPlanUserSeatModal",
    fallback: H4.DEFAULT_FULL_PAGE,
    hasCustomWASMBuild: !1,
    children: jsx(Suspense, {
      fallback: jsx(_$$N2, {
        hiddenTitle: "Modify Seat Modal",
        estimatedWidth: 480,
        estimatedHeight: 504,
        height: "dynamic"
      }),
      children: jsx($$Z, {
        ...e
      })
    })
  });
});
export const Z = $$q0;
export const bo = $$en1;