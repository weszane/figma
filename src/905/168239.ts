import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useCallback, Fragment } from "react";
import { useDispatch } from "../vendor/514228";
import { t as _$$t } from "../905/150656";
import { getFeatureFlags } from "../905/601108";
import l from "../vendor/116389";
import { Y, M } from "../905/830372";
import { q } from "../905/749058";
import { s as _$$s } from "../905/645504";
import { h as _$$h } from "../905/207101";
import { tx } from "../905/303541";
import { cF, fF, BZ } from "../figma_app/425283";
import { c as _$$c } from "../905/370443";
import { e } from "../905/621515";
import { N as _$$N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { EL } from "../905/858282";
import { hoH } from "../figma_app/6204";
import { sf } from "../905/929976";
import { b as _$$b } from "../905/388233";
import { FPlanNameType, FOrganizationLevelType } from "../figma_app/191312";
import { X$ } from "../figma_app/465071";
import { O } from "../figma_app/809387";
import { J7, _d, SN, G_, M7 } from "../figma_app/650409";
import { p as _$$p } from "../figma_app/353099";
import { Q } from "../figma_app/527200";
import { f as _$$f, r as _$$r } from "../905/136283";
import { nj } from "../figma_app/481749";
var d = l;
function I() {
  let {
    isShowing,
    show,
    complete
  } = e({
    overlay: hoH,
    priority: _$$N.DEFAULT_MODAL
  });
  _$$h(() => {
    show();
  });
  return jsx(rq, {
    clickOutsideToHide: !0,
    description: tx("org_admin_onboarding.billing_tab.tooltip.billing_groups_secondary_tab.description"),
    emphasized: !0,
    isShowing,
    onClose: complete,
    onTargetLost: complete,
    primaryCta: {
      label: tx("general.got_it"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    shouldCenterArrow: EL.BEST_EFFORT,
    targetKey: cF,
    title: tx("org_admin_onboarding.billing_tab.tooltip.billing_groups_secondary_tab.title"),
    trackingContextName: `${fF} - billing groups tab`
  });
}
export function $$O0({
  tab: e,
  selectedSecondaryTab: t,
  rightActions: i
}) {
  let s = useDispatch();
  let l = X$("OrgAdminSettingsSecondaryTabs").unwrapOr(null);
  let m = l?.tier === FPlanNameType.ENTERPRISE;
  let h = _$$b(l?.tier);
  let f = getFeatureFlags().ff_a11y_page_tab_fix;
  let _ = useMemo(() => function (e, t) {
    switch (e) {
      case J7.RESOURCES:
        return [_d.LIBRARIES, _d.SHARED_FONTS, _d.APPROVED_PLUGINS, _d.APPROVED_WIDGETS];
      case J7.CONTENT:
        let i = t.isEnterpriseOrg ? [SN.WORKSPACES, SN.TEAMS, SN.ABANDONED_DRAFTS, SN.CONNECTED_PROJECTS] : [SN.TEAMS, SN.ABANDONED_DRAFTS, SN.CONNECTED_PROJECTS];
        getFeatureFlags().org_admin_file_list_report_beta && i.push(SN.FILE_LIST_BETA);
        getFeatureFlags().org_admin_access_insight && i.push(SN.ACCESS_INSIGHT);
        return i;
      case J7.BILLING:
        return d()([G_.OVERVIEW, t.isEnterpriseOrg && G_.BILLING_GROUPS, G_.INVOICES]);
      case J7.MEMBERS:
        if (getFeatureFlags().user_groups) return [M7.ALL_MEMBERS, M7.USER_GROUPS];
        return [];
      default:
        return [];
    }
  }(e, {
    isEnterpriseOrg: m
  }) || [], [e, m]);
  let A = q(nj, !0);
  let y = useCallback(t => {
    (t === _d.SHARED_FONTS || t === _d.APPROVED_PLUGINS || t === _d.APPROVED_WIDGETS) && A();
    s(sf({
      view: "orgAdminSettings",
      orgAdminSettingsViewTab: e,
      orgAdminSettingsViewSecondaryTab: t
    }));
  }, [s, e, A]);
  let b = t || _[0];
  if (!b) return null;
  if (f) return jsx(D, {
    tab: e,
    selectedTab: b,
    secondaryTabs: _,
    onSecondaryTabClick: y,
    rightActions: i
  });
  {
    let t = jsx(_$$f, {
      tabs: _.map(t => {
        let i = b === t;
        return jsxs(Fragment, {
          children: [jsx(_$$p, {
            children: t === G_.OVERVIEW && jsx(_$$s, {
              planType: FOrganizationLevelType.ORG
            })
          }), jsx(_$$p, {
            children: t === G_.BILLING_GROUPS && jsx(I, {})
          }), jsx(_$$r, {
            tab: t,
            isSelected: i,
            onClick: y,
            tabName: O(e, t),
            dataOnboardingKey: BZ[t],
            "data-testid": i ? "org-admin-settings-secondary-tab-selected" : "org-admin-settings-secondary-tab"
          }, t), h && jsx(Q, {})]
        }, t);
      })
    });
    return jsxs(Y, {
      padding: {
        horizontal: 32,
        vertical: 16
      },
      height: "hug-contents",
      dataTestId: "org-admin-settings-secondary-tabs",
      children: [t, jsx(M, {}), i]
    });
  }
}
function D({
  tab: e,
  secondaryTabs: t,
  selectedTab: i,
  onSecondaryTabClick: a,
  rightActions: o
}) {
  let l = useMemo(() => t.reduce((e, t) => ({
    ...e,
    [t]: !0
  }), {}), [t]);
  let [d, u, m] = _$$t.useManagedTabs(l, i, a);
  return jsxs(Y, {
    padding: {
      horizontal: 32,
      vertical: 16
    },
    height: "hug-contents",
    dataTestId: "org-admin-settings-secondary-tabs",
    children: [jsx(_$$t.TabStrip, {
      manager: m,
      children: t.map(t => {
        let a = d[t];
        return a ? jsxs(Fragment, {
          children: [jsxs(_$$p, {
            children: [t === G_.OVERVIEW && jsx(_$$s, {
              planType: FOrganizationLevelType.ORG
            }), t === G_.BILLING_GROUPS && jsx(I, {})]
          }), jsx(_$$t.Tab, {
            ...a,
            "data-onboarding-key": BZ[t],
            "data-testid": t === i ? "org-admin-settings-secondary-tab-selected" : "org-admin-settings-secondary-tab",
            children: O(e, t)
          })]
        }, t) : null;
      })
    }), jsx(M, {}), o]
  });
}
export const b = $$O0;