import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { ServiceCategories as _$$e } from "../905/165054";
import { kt } from "../figma_app/858013";
import { t as _$$t, tx } from "../905/303541";
import { Y } from "../905/830372";
import { useState } from "react";
import { fP, mc, i3 } from "../905/691059";
import { E as _$$E } from "../905/632989";
import { E as _$$E2 } from "../905/172252";
import { x as _$$x } from "../905/811596";
import { _ as _$$_ } from "../469e6e40/422718";
import { A as _$$A } from "../vendor/850789";
import { az } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { Ex, vj, zE } from "../figma_app/919079";
import { s as _$$s } from "../cssbuilder/589278";
import { sx } from "../905/941192";
import { E as _$$E3 } from "../905/984674";
import { B } from "../905/261906";
import { tI } from "../figma_app/847597";
import { Gu } from "../905/513035";
import { FBillingPeriodType, FOrganizationLevelType } from "../figma_app/191312";
import { hY, ww, Vt, II } from "../figma_app/80683";
import { C3 } from "../figma_app/297957";
import { Ye } from "../905/332483";
import { d as _$$d } from "../figma_app/603561";
let E = sx.flex.flexRow.justifyBetween.gap16.p4.add({
  width: "calc(100% - 8px)"
}).$;
function C(e) {
  let [t, a] = useState(!1);
  let {
    getTriggerProps,
    getContainerProps,
    getArrowProps
  } = fP({
    isOpen: t,
    onOpenChange: a,
    type: "dialog",
    openOnHover: !0,
    placement: "bottom",
    softDismiss: !0
  });
  let _ = e.seatCountByBillingInterval ? Object.values(e.seatCountByBillingInterval).reduce((e, t) => e + t.assigned, 0) : e.seatCount.assigned;
  let u = e.seatCountByBillingInterval ? Object.values(e.seatCountByBillingInterval).reduce((e, t) => e + t.total, 0) : e.seatCount.total;
  let m = e.isELA ? _ : u;
  let [g] = _$$A(m, 1e3, {
    trailing: !0
  });
  return jsxs(Fragment, {
    children: [jsx(_$$E, {
      "aria-label": _$$t("admin_settings.people_tab.seat_counts.popover_aria_label", {
        totalSeats: g,
        seatType: tI(e.seatType)
      }),
      htmlAttributes: {
        "data-testid": "seat-count-button"
      },
      ...getTriggerProps(),
      className: "x9f619 xfj9a5l x17fksa9 x186i4p8",
      children: jsxs("div", {
        className: _$$s.flex.itemsCenter.gap4.$,
        children: [jsx(Ex, {
          text: g.toLocaleString(),
          size: vj.LARGE,
          color: zE.DEFAULT
        }), jsx(B, {
          removeBackgroundColor: !0,
          type: e.seatType,
          size: "24"
        })]
      })
    }, e.seatType), jsxs(mc, {
      ...getContainerProps({
        style: {
          boxShadow: "var(--elevation-500)",
          borderRadius: "var(--radius-large, 0.8125rem)",
          backgroundColor: "var(--color-bg)",
          fontFamily: "var(--text-body-medium-font-family, Inter)",
          fontSize: "var(--text-body-medium-font-size, 11px)",
          lineHeight: "var(--text-body-medium-line-height, 16px)",
          color: "var(--color-text-secondary, var(--fallback-color-text-secondary))"
        }
      }),
      children: [jsx(i3, {
        ...getArrowProps()
      }), jsx(S, {
        totalSeats: g,
        ...e
      })]
    })]
  });
}
function S(e) {
  _$$h(() => {
    az.trackDefinedEvent("admin.seat_count_viewed", {
      seatType: e.seatType
    });
  });
  let t = e.seatCountByBillingInterval ? [FBillingPeriodType.YEAR, FBillingPeriodType.MONTH].map(t => {
    let a = e.seatCountByBillingInterval?.[t];
    return a ? jsx(N, {
      seatType: e.seatType,
      seatCount: a,
      billingInterval: t
    }, t) : null;
  }) : [jsx(N, {
    seatType: e.seatType,
    seatCount: e.seatCount
  }, "no_interval_seat_count")];
  let a = `${_$$t("admin_settings.people_tab.seat_counts.total_seats", {
    seatType: tI(e.seatType)
  })}: ${e.totalSeats.toLocaleString()}`;
  return jsx("div", {
    style: sx.py8.px12.fpl__textBodyMediumFontWeight.add({
      minWidth: "185px"
    }).$,
    children: jsxs(Y, {
      direction: "vertical",
      spacing: 0,
      children: [jsx(_$$E2, {
        children: a
      }), jsxs("div", {
        "aria-hidden": !0,
        style: E,
        "data-testid": "seat-count-total-seats",
        children: [jsx("span", {
          children: jsx(_$$E3, {
            color: "default",
            children: _$$t("admin_settings.people_tab.seat_counts.total_seats", {
              seatType: tI(e.seatType)
            })
          })
        }), jsx("span", {
          children: jsx(_$$E3, {
            color: "default",
            children: e.totalSeats.toLocaleString()
          })
        })]
      }), e.forLicenseGroup && jsx("div", {
        style: E,
        children: jsx(_$$E3, {
          color: "secondary",
          children: _$$t("admin_settings.people_tab.seat_counts.in_this_billing_group")
        })
      }), e.seatType !== Gu.VIEW && !e.forLicenseGroup && !e.isELA && t]
    })
  });
}
function N(e) {
  return jsxs(Fragment, {
    children: [e.billingInterval && jsx("div", {
      style: E,
      children: jsx(_$$E3, {
        color: "secondary",
        children: e.billingInterval === FBillingPeriodType.MONTH ? _$$t("admin_settings.people_tab.seat_counts.billing_interval.month") : _$$t("admin_settings.people_tab.seat_counts.billing_interval.annual")
      })
    }), jsx(I, {
      type: "assigned",
      icon: _$$x,
      count: e.seatCount.assigned,
      labelKey: _$$t("admin_settings.people_tab.seat_counts.assigned_seats"),
      billingInterval: e.billingInterval
    }), jsx(I, {
      type: "available",
      icon: _$$_,
      count: e.seatCount.available,
      labelKey: _$$t("admin_settings.people_tab.seat_counts.available_seats"),
      billingInterval: e.billingInterval
    })]
  });
}
function I({
  type: e,
  icon: t,
  count: a,
  labelKey: s,
  billingInterval: i
}) {
  let r = i ? `-${i}` : "";
  return jsxs("div", {
    style: E,
    "data-testid": `seat-count-${e}-seats${r}`,
    children: [jsx(_$$E2, {
      children: `${s}: ${a.toLocaleString()}`
    }), jsx("span", {
      "aria-hidden": !0,
      children: jsxs(Y, {
        direction: "horizontal",
        spacing: 4,
        children: [jsx(t, {
          style: "assigned" === e ? {
            "--color-icon": "var(--color-icon-secondary)"
          } : void 0
        }), jsx(_$$E3, {
          color: "secondary",
          children: s
        })]
      })
    }), jsx("span", {
      "aria-hidden": !0,
      children: jsx(_$$E3, {
        color: "secondary",
        children: a.toLocaleString()
      })
    })]
  });
}
export function $$L1(e) {
  let t = hY(e.planParentId, e.planType);
  let a = C3();
  let s = ww(e.planType === FOrganizationLevelType.TEAM && a(e.isActiveAnnualPlan ?? !1) ? {
    teamId: e.planParentId
  } : null);
  return jsx(M, {
    seatCounts: t,
    seatCountsByBillingInterval: s
  });
}
export function $$D0(e) {
  let t = Vt({
    licenseGroupId: e.licenseGroupId
  });
  return jsx(M, {
    seatCounts: t,
    forLicenseGroup: !0
  });
}
function M(e) {
  let t = _$$d({
    reportErrorsToTeam: _$$e.SCALE
  });
  if (e.seatCountsByBillingInterval?.status === "loading" || "loading" === e.seatCounts.status) return jsx(kt, {});
  if (e.seatCountsByBillingInterval?.status === "loaded" && "loaded" === e.seatCounts.status) {
    let a = II(e.seatCountsByBillingInterval.data, e.seatCounts.data);
    return jsx(Y, {
      direction: "horizontal",
      spacing: 16,
      children: Ye.map(s => jsx(C, {
        seatType: s,
        seatCount: {
          total: 0,
          assigned: 0,
          available: 0
        },
        seatCountByBillingInterval: a && a[s] ? a[s] : void 0,
        isELA: t,
        forLicenseGroup: e.forLicenseGroup
      }, s))
    });
  }
  if ("disabled" === e.seatCounts.status) return null;
  if ("errors" === e.seatCounts.status) return jsx("div", {
    children: tx("shared_fonts.upload_error_modal.error")
  });
  let a = e.seatCounts.data;
  return jsx(Y, {
    direction: "horizontal",
    spacing: 16,
    children: Ye.map(s => jsx(C, {
      seatType: s,
      seatCount: a[s] ?? {
        total: 0,
        assigned: 0,
        available: 0
      },
      isELA: t,
      forLicenseGroup: e.forLicenseGroup
    }, s))
  });
}
export const dK = $$D0;
export const yE = $$L1;