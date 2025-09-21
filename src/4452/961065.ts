import { jsx } from "react/jsx-runtime";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { ResourceStatus } from "../905/663269";
import { Xf } from "../figma_app/153916";
import { useSubscription } from "../figma_app/288654";
import { selectExperimentConfigHook } from "../figma_app/594947";
import { BadgeColor, Badge } from "../figma_app/919079";
import { ErrorBoundaryCrash } from "../905/751457";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { R as _$$R } from "../905/304671";
import { ps, ZY } from "../figma_app/845611";
import { Y } from "../figma_app/515088";
import { ur, uE } from "../figma_app/451028";
import { Y as _$$Y } from "../7021/427161";
import { Jt } from "../figma_app/28323";
import { wrapWithTracking } from "../figma_app/831799";
import { Pn, Yo, oU } from "../figma_app/84966";
import { NJ } from "../figma_app/518077";
import { MX, EQ, Cz, RG } from "../figma_app/684446";
import { FOrganizationLevelType, FDomainVerificationStatusType, FUserRoleType } from "../figma_app/191312";
import { AdminRequestDashOrgInfo, AdminNotificationsCountView, OrgTaxIdView } from "../figma_app/43951";
import { i0, m3, hX, EZ } from "../figma_app/614170";
import { KindEnum } from "../905/129884";
import { A as _$$A } from "../svg/57540";
let R = "admin_notifications_count_badge--yellowIcon--7SC5D";
export function $$k0(e) {
  let {
    getConfig
  } = selectExperimentConfigHook("exp_all_admin_request_dash");
  let a = useSubscription(AdminRequestDashOrgInfo, {
    orgId: e.planId
  }, {
    enabled: e.planType === ps.ORG
  });
  let r = !!("loaded" === a.status && a.data?.org?.bigmaEnabledAt) && getConfig().get("enabled", !1) && !!e.isOrgAdmin;
  let o = ZY({
    isIntendedAudience: !!(e.planType === ps.ORG && "loaded" === a.status && a.data?.org?.bigmaEnabledAt) && !1 === e.isOrgAdmin
  });
  let m = e.isOrgAdmin ? [null, ...(e.managedBillingGroups ?? [])] : e.managedBillingGroups;
  let _ = useSubscription(AdminNotificationsCountView, {
    planType: e.planType,
    planId: e.planId,
    filterParams: r || o ? JSON.stringify({
      billing_group_ids: m
    }) : e.isOrgAdmin ? JSON.stringify({
      billing_group_ids: [null]
    }) : JSON.stringify({
      billing_group_ids: []
    })
  });
  let g = "loaded" === _.status && _.data.adminDashboardRequestsTotalCount.status === ResourceStatus.Loaded && ("loaded" === a.status || e.planType === ps.TEAM) ? _.data.adminDashboardRequestsTotalCount.data?.rowCount : void 0;
  let h = g ?? 0;
  let [v, b] = useAtomValueAndSetter(Y);
  let y = r ? [e.planType, e.planId, !0].toString() : [e.planType, e.planId].toString();
  useEffect(() => {
    if (g) {
      let e = {
        ...v
      };
      e[y] = h;
      b(e);
    }
    return () => {
      let e = {
        ...v
      };
      delete e[y];
      b(e);
    };
  }, [e.isDataLoaded, g, y]);
  let j = (v[y] ?? 0) + (e.billingStatusCount || 0) + (e.taxStatusCount || 0);
  if (j < 1) return null;
  let I = BadgeColor.DEFAULT;
  e.billingStatusCount || e.taxStatusCount ? I = BadgeColor.WARNING : e.isSelected && (I = BadgeColor.LIGHT);
  return void 0 !== g && j > 0 && e.isDataLoaded ? jsx(Badge, {
    text: j.toString(),
    color: I,
    className: I === BadgeColor.DEFAULT ? cssBuilderInstance.mr0.colorText.colorBgSelectedSecondary.$ : cssBuilderInstance.mr0.$,
    dataTestId: "admin-notifications-badge"
  }) : null;
}
function q(e) {
  let t = function (e, t) {
    let a = Xf(e.id);
    let s = _$$R();
    let r = MX();
    let i = useMemo(() => Pn(a.data), [a.data]);
    let l = a.data?.invoices;
    let d = Yo(s && i ? {
      planKey: {
        parentId: e.id,
        type: FOrganizationLevelType.ORG
      },
      nextRenewalDate: i
    } : null);
    return useMemo(() => {
      let e = ur({
        invoices: l ?? [],
        licenseGroups: r,
        renewalConfirmed: d,
        userId: t.user_id,
        renewalAt: i
      });
      return e?.notification ? 1 : 0;
    }, [l, i, d, r, t.user_id]);
  }(e.org, e.orgUser);
  return jsx($$k0, {
    isOrgAdmin: !1,
    isSelected: e.isSelected,
    planId: e.planId,
    planType: e.planType,
    billingStatusCount: t,
    managedBillingGroups: e.groupsUserIsAdminOf ? e.groupsUserIsAdminOf.map(e => e.id) : [],
    taxStatusCount: void 0,
    isDataLoaded: void 0 !== e.invoices
  });
}
function M(e) {
  let t = function (e) {
    let t = Xf(e.id);
    let a = _$$R();
    let s = oU(e);
    let r = useMemo(() => Pn(t.data), [t.data]);
    let i = t.data?.invoices;
    return useMemo(() => {
      if ("loaded" !== t.status || !i || "loading" === s.status) return 0;
      let n = 0;
      s.data?.show && !s.data?.confirmed && n++;
      let l = uE({
        invoices: i,
        org: e,
        campfireRenewalEnabled: a,
        renewalAt: r
      });
      l?.notification && n++;
      return n;
    }, [a, i, e, t.status, s.data, s.status, r]);
  }(e.org);
  let a = _$$R();
  let r = EQ(e.licenseGroups, e.orgUser.user_id, !1).groupsUserIsAdminOf.map(e => e.id);
  let i = e.taxIdVerificationStatus === FDomainVerificationStatusType.UNVERIFIED ? 1 : 0;
  return void 0 !== e.taxIdVerificationStatus && void 0 !== e.invoices ? jsx($$k0, {
    isOrgAdmin: !0,
    isSelected: e.isSelected,
    planId: e.planId,
    planType: e.planType,
    billingStatusCount: t,
    managedBillingGroups: r,
    taxStatusCount: a ? 0 : i,
    isDataLoaded: void 0 !== e.invoices
  }) : null;
}
var O = (e => (e.WARNING = "warning", e.NOTICE = "notice", e))(O || {});
function L(e, t, a, s, n, r) {
  if (!s || !i0(s)) return null;
  if (r) {
    if (!n) return null;
    let {
      groupsUserIsAdminOf
    } = EQ(a, t.user_id, r);
    let {
      groupsToReview
    } = Cz(groupsUserIsAdminOf, s);
    if (0 === groupsToReview.length) return null;
  }
  return {
    tooltipData: "",
    iconStyle: m3(s) ? "admin_notifications_count_badge--redIcon--QvRuX" : R,
    iconType: m3(s) ? "warning" : "notice"
  };
}
function P(e) {
  return e !== FDomainVerificationStatusType.UNVERIFIED ? null : {
    tooltipData: getI18nString("billing_status.tax_id.invalid"),
    iconStyle: R,
    iconType: "notice"
  };
}
export function $$D1(e) {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "OrgAdminBillingStatusBadge",
    fallback: jsx("div", {}),
    children: jsx(B, {
      ...e
    })
  });
}
function F(e) {
  let t = useDispatch();
  let a = MX();
  let i = e.invoices && hX(e.invoices);
  let l = e.org.bigma_enabled && e.orgUser.license_admin && e.orgUser.permission !== FUserRoleType.ADMIN;
  let o = useSubscription(OrgTaxIdView, {
    orgId: e.org.id
  });
  let c = "loaded" === o.status ? o.data.org?.taxIdVerificationStatus : null;
  useEffect(() => {
    i && l && t(Jt({
      forceRefetch: !1
    }));
  }, [t, e.org.id, i, l]);
  let u = (() => {
    switch (e.highlightType) {
      case EZ.BILLING_STATUS:
        return L(e.org, e.orgUser, a, e.invoices, i, l);
      case EZ.TAX_ID_STATUS:
        return P(c);
      default:
        return L(e.org, e.orgUser, a, e.invoices, i, l) || P(c);
    }
  })();
  if (!u) return null;
  let m = `${u.iconStyle} ${e.inlineIcon ? "admin_notifications_count_badge--inline--DETI2" : ""} ${e.alignTop ? "admin_notifications_count_badge--multiLineIcon--6PT9X" : ""}`;
  let p = {};
  e.showTooltip && (p["data-tooltip-type"] = KindEnum.TEXT, p["data-tooltip"] = u.tooltipData, p["data-tooltip-show-below"] = !0, p["data-tooltip-timeout-delay"] = 50, p["data-tooltip-max-width"] = 117);
  let g = jsx(SvgComponent, {
    className: `admin_notifications_count_badge--warningSvg--sbgzs ${m}`,
    svg: _$$A,
    useOriginalSrcFills_DEPRECATED: !0,
    ...p
  });
  let h = e.showTooltip ? jsx(_$$Y, {
    className: m,
    dataTooltipType: p["data-tooltip-type"],
    dataTooltip: p["data-tooltip"],
    dataTooltipShowBelow: p["data-tooltip-show-below"],
    dataTooltipTimeout: p["data-tooltip-timeout-delay"],
    dataTooltipMaxWidth: p["data-tooltip-max-width"]
  }) : jsx(_$$Y, {
    className: m
  });
  let x = "warning" === u.iconType ? g : h;
  return wrapWithTracking(x, "Org Admin Billing Status Badge", {
    orgId: e.org.id,
    isCurrentUserLicenseAndNotOrgAdmin: l
  });
}
function B(e) {
  let t = useDispatch();
  let a = e.orgUser.permission === FUserRoleType.ADMIN;
  let i = RG();
  let l = MX();
  let {
    groupsUserIsAdminOf
  } = EQ(l, e.orgUser.user_id, !a);
  let u = Xf(e.org.id);
  let m = "loaded" === u.status ? u.data?.invoices ?? [] : void 0;
  useEffect(() => {
    t(Jt({
      forceRefetch: !1
    }));
  }, [t, e.org.id]);
  let _ = groupsUserIsAdminOf[0]?.id;
  let p = e.org.bigma_enabled && i && !!_;
  let g = NJ(e.org.id).data ?? [];
  let h = e.org.bigma_enabled && g.length > 0;
  let f = a || p || h;
  let v = ZY({
    isIntendedAudience: e.org.bigma_enabled && !a
  });
  let b = useSubscription(OrgTaxIdView, {
    orgId: e.org.id
  }, {
    enabled: a
  });
  let j = "loaded" === b.status ? b.data.org?.taxIdVerificationStatus : void 0;
  return f ? a ? jsx(M, {
    planType: ps.ORG,
    planId: e.org.id,
    orgUser: e.orgUser,
    licenseGroups: l,
    taxIdVerificationStatus: j,
    invoices: m,
    isSelected: e.isSelected,
    org: e.org
  }) : p ? v ? jsx(q, {
    invoices: m,
    groupsUserIsAdminOf,
    isSelected: e.isSelected,
    planId: e.org.id,
    planType: ps.ORG,
    orgUser: e.orgUser,
    org: e.org
  }) : jsx(F, {
    invoices: m,
    showTooltip: !1,
    org: e.org,
    orgUser: e.orgUser
  }) : null : null;
}
export const e9 = $$k0;
export const Mn = $$D1;