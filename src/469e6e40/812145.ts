import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import i from "classnames";
import { A as _$$A } from "../905/920142";
import { zN } from "../figma_app/416935";
import { toTitleCase } from "../figma_app/930338";
import { bv } from "../figma_app/421401";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { Y } from "../905/830372";
import { E as _$$E } from "../905/984674";
import { B as _$$B } from "../905/261906";
import { JT, mb } from "../figma_app/847597";
import { Zq } from "../figma_app/433422";
import { E as _$$E2 } from "../905/162070";
import { n as _$$n } from "../469e6e40/721568";
import { e6 } from "../figma_app/425283";
import { fB, lJ } from "../469e6e40/336481";
import { Z5 } from "../figma_app/297957";
import { ViewAccessTypeEnum } from "../905/513035";
import { Ye } from "../905/332483";
import { KS } from "../figma_app/217457";
import { bC } from "../figma_app/951233";
import { FOrganizationLevelType } from "../figma_app/421473";
import { Od } from "../figma_app/967319";
import { A as _$$A2 } from "../3850/566892";
var r = i;
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
function T(e) {
  return toTitleCase(zN(e ?? "") ?? "");
}
function A({
  columnClassName: e,
  selectorOuterClassName: t,
  selectorInnerClassName: a,
  planType: s,
  currency: i,
  queueFilterCountsRefetch: r,
  hideTooltip: l
}) {
  return {
    name: getI18nString("members_table.column_header.seat_type"),
    className: e,
    sortNumerically: !0,
    sortReversed: !0,
    getSortValue: e => e ? KS(e) : 0,
    cellComponent: (e, o) => jsx(M, {
      ...e,
      outerClassName: t,
      innerClassName: a,
      planType: s,
      currency: i,
      queueFilterCountsRefetch: r,
      hideTooltip: l,
      areDropdownsDisabled: o
    })
  };
}
export function $$R0(e) {
  let t = A({
    ...e,
    planType: FOrganizationLevelType.TEAM
  });
  return [{
    ...t,
    getSortValue: ({
      member: e
    }) => {
      let a = Zq(e);
      return t.getSortValue(a.seatTypeKey);
    },
    getSecondarySortValue: ({
      member: e
    }) => e.assigned_at ? _$$A(e.assigned_at).unix() : 0,
    sortSecondaryReversed: !0,
    cellComponent: ({
      member: a,
      teamId: n
    }, s) => {
      let {
        email,
        name,
        upgrade_reason,
        upgrade_method,
        assigned_at,
        team_user,
        upgrade_actor_name,
        ecc_upgrading_locked,
        last_active,
        job_title
      } = a;
      let g = team_user?.user_id;
      return t.cellComponent({
        ...Zq(a),
        forceHidePendingSeats: e.forceHidePendingSeats,
        assigned_at: assigned_at ? new Date(assigned_at) : void 0,
        upgrade_reason,
        upgrade_method,
        upgrade_actor_name,
        userId: g,
        planUserId: team_user?.id,
        planId: n,
        isScimSeat: !1,
        eccLockedDomain: ecc_upgrading_locked ? T(email) : null,
        imgUrl: "img_url" in a ? a.img_url : "",
        name: name ?? "",
        handle: name ?? "",
        lastActiveAt: last_active ? new Date(1e3 * last_active) : void 0,
        jobTitle: job_title
      }, s);
    }
  }];
}
function O(e) {
  return "orgUser" in e && e.orgUser.id ? {
    seatTypeKey: e.orgUser.active_seat_type?.key,
    isPendingSeat: !1
  } : {
    seatTypeKey: "orgUser" in e ? null : e.idpUser.seat_type_key,
    isPendingSeat: !0
  };
}
export function $$L1(e) {
  let t = A({
    ...e,
    planType: FOrganizationLevelType.ORG
  });
  return [{
    ...t,
    getSortValue: e => {
      let a = O(e);
      return t.getSortValue(a.seatTypeKey);
    },
    cellComponent: (e, a) => {
      let n = ("orgUser" in e ? e.orgUser.user.name : e.idpUser.name) ?? "";
      let s = "orgUser" in e ? e.orgUser.user.handle : e.idpUser.email;
      let i = "orgUser" in e ? e.orgUser.user.img_url : "";
      let r = "orgUser" in e ? e.orgUser.job_title : void 0;
      return t.cellComponent({
        ...O(e),
        upgrade_reason: "orgUser" in e ? e.orgUser.active_seat_upgrade_method?.reason : void 0,
        upgrade_method: "orgUser" in e ? e.orgUser.active_seat_upgrade_method?.upgrade_method : void 0,
        assigned_at: "orgUser" in e && e.orgUser.active_seat_upgrade_date ? new Date(e.orgUser.active_seat_upgrade_date) : void 0,
        upgrade_actor_name: "orgUser" in e ? e.orgUser.active_seat_upgrade_method?.actor_name : void 0,
        userId: "orgUser" in e ? e.orgUser.user_id : void 0,
        planUserId: "orgUser" in e ? e.orgUser.id : void 0,
        planId: e.org.id,
        isScimSeat: bC("orgUser" in e ? e.orgUser : e.idpUser),
        handle: s,
        name: n,
        imgUrl: i,
        jobTitle: r,
        eccLockedDomain: "orgUser" in e && e.orgUser.ecc_upgrading_locked ? T(e.orgUser.user.email) : null,
        lastActiveAt: "orgUser" in e && e.orgUser.last_seen ? e.orgUser.last_seen : void 0
      }, a);
    },
    sorting_key: Od.BILLABLE_PRODUCT_SEAT
  }];
}
export function $$D2({
  dispatch: e,
  dropdownShown: t,
  filters: a,
  filterCounts: s,
  onFilter: i
}) {
  return jsx(bv, {
    label: getI18nString("members_table.column_header.seat_type"),
    dispatch: e,
    dropdownShown: t,
    dropdownType: "FILTER_BILLING_PRODUCT_SEAT",
    values: Ye.toArray(),
    selectedValue: a.seatTypeFilter ?? null,
    getCount: e => s.seatTypeKey ? s.seatTypeKey[e] ?? 0 : 0,
    getDisplayText: e => JT(e),
    updateFilter: e => i({
      seatTypeFilter: e ?? void 0
    })
  });
}
function M({
  outerClassName: e,
  innerClassName: t,
  seatTypeKey: a,
  isPendingSeat: i,
  forceHidePendingSeats: l,
  upgrade_reason: o,
  upgrade_method: d,
  assigned_at: c,
  upgrade_actor_name: x,
  userId: k,
  planUserId: E,
  planType: C,
  isScimSeat: N,
  imgUrl: T,
  name: A,
  handle: R,
  currency: O,
  eccLockedDomain: L,
  queueFilterCountsRefetch: D,
  hideTooltip: M,
  areDropdownsDisabled: P,
  lastActiveAt: U,
  jobTitle: F
}) {
  let q = useDispatch();
  let $ = a ?? ViewAccessTypeEnum.VIEW;
  let B = JT($);
  let G = Z5({
    disableExposureLogging: !0
  });
  if (i) {
    if (!l && G({
      isPlanAdmin: !0
    })) return jsx(fB, {
      seatType: $,
      isScimSeat: N
    });
    if (!N) return jsx("span", {
      "data-testid": "empty-seat-type-cell",
      className: _$$s.pl8.$,
      children: "\u2013"
    });
  }
  if (N || L) {
    let e = L ? getI18nString("external_collaboration_restricted.members.tooltip.v2", {
      eccDomain: L
    }) : getI18nString("members_table.role_idp_tooltip.seat_rename");
    return jsx("div", {
      children: jsxs(Y, {
        direction: "horizontal",
        verticalAlignItems: "center",
        children: [jsx("div", {
          children: jsx(_$$B, {
            type: $,
            size: "24"
          })
        }), jsx(lJ, {
          label: B,
          icon: _$$A2,
          tooltipText: e
        })]
      })
    });
  }
  return jsx("div", {
    ...(M ? {} : function (e, t, a) {
      if (!e) return null;
      let n = mb(t);
      return n && a ? {
        "data-tooltip": getI18nString("admin_settings.people_tab.user_upgrade_date", {
          upgradeReason: n,
          upgradeDate: a
        }),
        "data-tooltip-type": "text"
      } : null;
    }(a, d, c)),
    "data-testid": "billable-product-seat-cell-outer",
    className: r()(e, _$$s.wFull.$),
    children: jsx("div", {
      className: r()(_$$s.wFull.$, {
        [t]: C === FOrganizationLevelType.ORG
      }),
      "data-testid": "billable-product-seat-cell",
      children: jsx(_$$n, {
        hideChevron: !0,
        disabled: P,
        onClick: e => {
          e.stopPropagation();
          _$$E2({
            currency: O,
            dispatch: q,
            planUser: {
              currentSeatType: $,
              name: A,
              handle: R,
              userId: k ?? "",
              id: E ?? "",
              imgUrl: T,
              lastActiveAt: U,
              upgradeReason: o,
              upgradeMethod: d ?? void 0,
              assignedAt: c,
              upgradeActorName: x ?? void 0,
              jobTitle: F
            },
            queueFilterCountsRefetch: D
          });
        },
        children: jsxs("div", {
          className: _$$s.flex.itemsCenter.gap8.$,
          "data-onboarding-key": C === FOrganizationLevelType.ORG && E ? `${e6}-${E}` : void 0,
          children: [jsx(_$$B, {
            type: $,
            size: "24"
          }), jsx(_$$E, {
            children: B
          })]
        })
      })
    })
  });
}
export const Js = $$R0;
export const mC = $$L1;
export const yG = $$D2;