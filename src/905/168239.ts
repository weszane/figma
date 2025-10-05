import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useCallback, Fragment } from "react";
import { useDispatch } from "react-redux";
import { Tabs } from "../905/150656";
import { getFeatureFlags } from "../905/601108";
import l from "../vendor/116389";
import { AutoLayout, Spacer } from "../905/470281";
import { q } from "../905/749058";
import { s as _$$s } from "../905/645504";
import { useSingleEffect } from "../905/791079";
import { renderI18nText } from "../905/303541";
import { cF, fF, BZ } from "../figma_app/425283";
import { UpgradeAction } from "../905/370443";
import { e } from "../905/621515";
import { N as _$$N } from "../figma_app/268271";
import { OnboardingModal } from "../905/425180";
import { PositioningStrategy } from "../905/858282";
import { hoH } from "../figma_app/6204";
import { selectViewAction } from "../905/929976";
import { b as _$$b } from "../905/388233";
import { FPlanNameType, FOrganizationLevelType } from "../figma_app/191312";
import { useCurrentPublicPlan } from "../figma_app/465071";
import { getOrgAdminTabMessage } from "../figma_app/809387";
import { DashboardSection, FigResourceType, WorkspaceTab, BillingSectionEnum, MemberView } from "../figma_app/650409";
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
  useSingleEffect(() => {
    show();
  });
  return jsx(OnboardingModal, {
    clickOutsideToHide: !0,
    description: renderI18nText("org_admin_onboarding.billing_tab.tooltip.billing_groups_secondary_tab.description"),
    emphasized: !0,
    isShowing,
    onClose: complete,
    onTargetLost: complete,
    primaryCta: {
      label: renderI18nText("general.got_it"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    shouldCenterArrow: PositioningStrategy.BEST_EFFORT,
    targetKey: cF,
    title: renderI18nText("org_admin_onboarding.billing_tab.tooltip.billing_groups_secondary_tab.title"),
    trackingContextName: `${fF} - billing groups tab`
  });
}
export function $$O0({
  tab: e,
  selectedSecondaryTab: t,
  rightActions: i
}) {
  let s = useDispatch();
  let l = useCurrentPublicPlan("OrgAdminSettingsSecondaryTabs").unwrapOr(null);
  let m = l?.tier === FPlanNameType.ENTERPRISE;
  let h = _$$b(l?.tier);
  let f = getFeatureFlags().ff_a11y_page_tab_fix;
  let _ = useMemo(() => function (e, t) {
    switch (e) {
      case DashboardSection.RESOURCES:
        return [FigResourceType.LIBRARIES, FigResourceType.SHARED_FONTS, FigResourceType.APPROVED_PLUGINS, FigResourceType.APPROVED_WIDGETS];
      case DashboardSection.CONTENT:
        let i = t.isEnterpriseOrg ? [WorkspaceTab.WORKSPACES, WorkspaceTab.TEAMS, WorkspaceTab.ABANDONED_DRAFTS, WorkspaceTab.CONNECTED_PROJECTS] : [WorkspaceTab.TEAMS, WorkspaceTab.ABANDONED_DRAFTS, WorkspaceTab.CONNECTED_PROJECTS];
        getFeatureFlags().org_admin_file_list_report_beta && i.push(WorkspaceTab.FILE_LIST_BETA);
        getFeatureFlags().org_admin_access_insight && i.push(WorkspaceTab.ACCESS_INSIGHT);
        return i;
      case DashboardSection.BILLING:
        return d()([BillingSectionEnum.OVERVIEW, t.isEnterpriseOrg && BillingSectionEnum.BILLING_GROUPS, BillingSectionEnum.INVOICES]);
      case DashboardSection.MEMBERS:
        if (getFeatureFlags().user_groups) return [MemberView.ALL_MEMBERS, MemberView.USER_GROUPS];
        return [];
      default:
        return [];
    }
  }(e, {
    isEnterpriseOrg: m
  }) || [], [e, m]);
  let A = q(nj, !0);
  let y = useCallback(t => {
    (t === FigResourceType.SHARED_FONTS || t === FigResourceType.APPROVED_PLUGINS || t === FigResourceType.APPROVED_WIDGETS) && A();
    s(selectViewAction({
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
            children: t === BillingSectionEnum.OVERVIEW && jsx(_$$s, {
              planType: FOrganizationLevelType.ORG
            })
          }), jsx(_$$p, {
            children: t === BillingSectionEnum.BILLING_GROUPS && jsx(I, {})
          }), jsx(_$$r, {
            tab: t,
            isSelected: i,
            onClick: y,
            tabName: getOrgAdminTabMessage(e, t),
            dataOnboardingKey: BZ[t],
            "data-testid": i ? "org-admin-settings-secondary-tab-selected" : "org-admin-settings-secondary-tab"
          }, t), h && jsx(Q, {})]
        }, t);
      })
    });
    return jsxs(AutoLayout, {
      padding: {
        horizontal: 32,
        vertical: 16
      },
      height: "hug-contents",
      dataTestId: "org-admin-settings-secondary-tabs",
      children: [t, jsx(Spacer, {}), i]
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
  let [d, u, m] = Tabs.useManagedTabs(l, i, a);
  return jsxs(AutoLayout, {
    padding: {
      horizontal: 32,
      vertical: 16
    },
    height: "hug-contents",
    dataTestId: "org-admin-settings-secondary-tabs",
    children: [jsx(Tabs.TabStrip, {
      manager: m,
      children: t.map(t => {
        let a = d[t];
        return a ? jsxs(Fragment, {
          children: [jsxs(_$$p, {
            children: [t === BillingSectionEnum.OVERVIEW && jsx(_$$s, {
              planType: FOrganizationLevelType.ORG
            }), t === BillingSectionEnum.BILLING_GROUPS && jsx(I, {})]
          }), jsx(Tabs.Tab, {
            ...a,
            "data-onboarding-key": BZ[t],
            "data-testid": t === i ? "org-admin-settings-secondary-tab-selected" : "org-admin-settings-secondary-tab",
            children: getOrgAdminTabMessage(e, t)
          })]
        }, t) : null;
      })
    }), jsx(Spacer, {}), o]
  });
}
export const b = $$O0;