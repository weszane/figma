import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import r from "../vendor/523035";
import { customHistory } from "../905/612521";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { V } from "../905/355181";
import { aO, vn } from "../figma_app/109538";
import { k } from "../figma_app/618031";
import { R } from "../905/304671";
import { showModalHandler } from "../905/156213";
import { hs, G6, j2 } from "../figma_app/84966";
import { useCurrentUserOrg } from "../905/845253";
import { FOrganizationLevelType } from "../figma_app/191312";
import { useCurrentPrivilegedPlan } from "../figma_app/465071";
import { aD, Sn, EC } from "../469e6e40/875985";
import { tQ } from "../469e6e40/878707";
import { A } from "../svg/330858";
var l = r;
if (443 == require.j) {}
if (443 == require.j) {}
export var $$k0 = (e => (e.FILE_BROWSER = "file_browser", e.BILLING = "billing", e))($$k0 || {});
export function $$E1(e) {
  let t = useCurrentPrivilegedPlan("AdminRenewalBanner").unwrapOr(null);
  if (!R() || !t?.key.parentId) return null;
  switch (t.key.type) {
    case FOrganizationLevelType.TEAM:
      return jsx(S, {
        teamId: t.key.parentId,
        entryPoint: e.entryPoint
      });
    case FOrganizationLevelType.ORG:
      return jsx(C, {
        orgId: t.key.parentId,
        entryPoint: e.entryPoint
      });
    default:
      t.key.type;
      return null;
  }
}
function C(e) {
  let t = useCurrentUserOrg();
  let a = hs(t);
  if (!a.data?.show || !t) return null;
  let s = a.data.totalFloorSeatCount;
  let i = a.data.confirmedRenewalSeatCounts;
  let r = a.data.currentSeatCount;
  let o = a.data.currentAssignedSeatCount ?? 0;
  let d = s || (i ? l()(Object.values(i.surplus)) + o : r);
  return jsx(N, {
    nextRenewalDate: a.data.nextRenewalDate,
    currentSeatCount: d,
    confirmed: a.data.renewalConfirmed,
    planId: e.orgId,
    planType: FOrganizationLevelType.ORG,
    shouldAutoRenew: t.should_auto_renew,
    entryPoint: e.entryPoint,
    onTrial: !1,
    hasNonAdjustableRenewalSeats: !!s
  });
}
function S(e) {
  let t = G6(e.teamId).unwrapOr({
    show: !1
  });
  if (!t.show) return null;
  let a = t.confirmedRenewalSeatCounts;
  let s = a ? l()(Object.values(a.total)) : t.currentSeatCount;
  return jsx(N, {
    nextRenewalDate: t.nextRenewalDate,
    confirmed: t.renewalConfirmed,
    currentSeatCount: s,
    planId: e.teamId,
    planType: FOrganizationLevelType.TEAM,
    entryPoint: e.entryPoint,
    shouldAutoRenew: !0,
    onTrial: t.inTrial,
    hasNonAdjustableRenewalSeats: !1
  });
}
function N(e) {
  let t = useDispatch();
  let a = k();
  let r = useCallback(() => {
    switch (e.planType) {
      case FOrganizationLevelType.ORG:
        t(showModalHandler({
          type: aO,
          data: {
            renewalDate: e.nextRenewalDate
          }
        }));
        break;
      case FOrganizationLevelType.TEAM:
        t(showModalHandler({
          type: vn,
          data: {
            renewalDate: e.nextRenewalDate
          }
        }));
    }
  }, [t, e.planType, e.nextRenewalDate]);
  return e.confirmed && "file_browser" === e.entryPoint || !e.confirmed && "billing" === e.entryPoint ? null : jsx(aD, {
    color: Sn.LIGHT_BLUE,
    removeNegativeMargin: !0,
    dataTestId: "admin-renewal-banner",
    isResponsive: !0,
    roundedCorner: "billing" === e.entryPoint,
    customClassName: tQ,
    children: jsx(EC, {
      title: e.onTrial ? renderI18nText("org_admin_settings.banners.renewal.header.trial", {
        date: e.nextRenewalDate
      }) : e.shouldAutoRenew ? a ? renderI18nText("org_admin_settings.banners.renewal.header", {
        date: e.nextRenewalDate,
        seatCount: e.currentSeatCount
      }) : renderI18nText("org_admin_settings.banners.renewal.header.legacy", {
        date: e.nextRenewalDate,
        seatCount: e.currentSeatCount
      }) : a ? renderI18nText("org_admin_settings.banners.renewal.header.non_auto", {
        date: e.nextRenewalDate
      }) : renderI18nText("org_admin_settings.banners.renewal.header.non_auto.legacy", {
        date: e.nextRenewalDate
      }),
      secondaryText: e.onTrial ? renderI18nText("org_admin_settings.banners.renewal.body.trial", {
        seatCount: e.currentSeatCount
      }) : e.shouldAutoRenew ? a ? renderI18nText("org_admin_settings.banners.renewal.body", {
        date: e.nextRenewalDate
      }) : renderI18nText("org_admin_settings.banners.renewal.body.legacy") : renderI18nText("org_admin_settings.banners.renewal.body.non_auto"),
      icon: jsx(SvgComponent, {
        svg: A,
        className: _$$s.p8.$
      }),
      button: jsxs(Fragment, {
        children: [!a && jsx(V, {
          innerText: "Learn More",
          onClick: () => {
            customHistory.unsafeRedirect("https://help.figma.com/hc/articles/27468498501527-Updates-to-Figma-s-pricing-seats-and-billing-experience", "_blank");
          },
          variant: "secondary",
          children: jsx("span", {
            className: _$$s.fontMedium.$,
            "data-testid": "admin-renewal-banner-learn-more",
            children: renderI18nText("general.learn_more")
          })
        }), j2({
          shouldAutoRenew: e.shouldAutoRenew,
          onTrial: e.onTrial,
          hasNonAdjustableRenewalSeats: e.hasNonAdjustableRenewalSeats
        }) && jsx(V, {
          innerText: "Review Seats",
          onClick: r,
          variant: "inverse",
          children: jsx("span", {
            className: _$$s.fontMedium.$,
            "data-testid": "admin-renewal-banner-cta",
            children: renderI18nText("org_admin_settings.banners.renewal.cta")
          })
        })]
      })
    })
  });
}
export const Y = $$k0;
export const _ = $$E1;