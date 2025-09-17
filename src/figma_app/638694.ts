import { jsxs, jsx } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "../905/443068";
import { A as _$$A } from "../905/251970";
import { H } from "../905/222445";
import l from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { _I, PY } from "../905/34809";
import { E as _$$E, J } from "../figma_app/953812";
import { A5, J5 } from "../figma_app/623414";
import { selectViewAction } from "../905/929976";
import { getSelectedView } from "../figma_app/386952";
import { useTeamPlanUser, useIsOrgAdminUser } from "../figma_app/465071";
import { FRequestsStr } from "../905/384551";
import { UserGroupRole } from "../905/441038";
import { O as _$$O } from "../figma_app/809387";
import { DashboardSection, WorkspaceTab } from "../figma_app/650409";
import { OrganizationType } from "../905/833838";
import { DashboardSections } from "../905/548208";
import { DUserRole } from "../figma_app/858344";
var d = l;
export function $$x1() {
  let e = getSelectedView();
  let t = _$$E();
  let r = useTeamPlanUser();
  let n = useIsOrgAdminUser(r).unwrapOr(!1);
  return t || N(e, n);
}
function N(e, t) {
  return "teamAdminConsole" !== e.view && "orgAdminSettings" !== e.view && ("licenseGroup" === e.view && e.subView === UserGroupRole.ADMIN && !!t || "billingGroupDashboard" === e.view && e.selectedTab === FRequestsStr.ALL_REQUESTS || "workspace" === e.view && e.subView === DUserRole.ADMIN && !!t || "orgDomainManagement" === e.view || "orgIdpManagement" === e.view || "abandonedDraftFiles" === e.view || "seatRequests" === e.view);
}
function C(e) {
  let t = useTeamPlanUser();
  return useIsOrgAdminUser(t).unwrapOr(!1) ? jsxs(A5, {
    children: [jsx(J5, {
      text: _$$O(DashboardSection.CONTENT),
      onClick: () => {
        e.dispatch(selectViewAction({
          view: "orgAdminSettings",
          orgAdminSettingsViewTab: DashboardSection.CONTENT
        }));
      },
      hasTrailingDivider: !0
    }), jsx(J5, {
      text: _$$O(DashboardSection.CONTENT, WorkspaceTab.WORKSPACES),
      onClick: () => {
        e.dispatch(selectViewAction({
          view: "orgAdminSettings",
          orgAdminSettingsViewTab: DashboardSection.CONTENT,
          orgAdminSettingsViewSecondaryTab: WorkspaceTab.WORKSPACES
        }));
      },
      hasTrailingDivider: !1
    })]
  }) : null;
}
function w(e) {
  let t = useTeamPlanUser();
  return useIsOrgAdminUser(t).unwrapOr(!1) ? jsx(A5, {
    children: jsx(J5, {
      text: _$$O(DashboardSection.BILLING),
      onClick: () => {
        e.dispatch(selectViewAction({
          view: "orgAdminSettings",
          orgAdminSettingsViewTab: DashboardSection.BILLING
        }));
      },
      hasTrailingDivider: !1
    })
  }) : null;
}
function O(e) {
  return jsx(A5, {
    children: jsx(J5, {
      text: _$$O(DashboardSection.SETTINGS),
      onClick: () => {
        e.dispatch(selectViewAction({
          view: "orgAdminSettings",
          orgAdminSettingsViewTab: DashboardSection.SETTINGS
        }));
      },
      hasTrailingDivider: !1
    })
  });
}
function R(e) {
  return jsx(A5, {
    children: jsx(J5, {
      text: _$$O(DashboardSection.SETTINGS),
      onClick: () => {
        e.dispatch(selectViewAction({
          view: "orgAdminSettings",
          orgAdminSettingsViewTab: DashboardSection.SETTINGS
        }));
      },
      hasTrailingDivider: !1
    })
  });
}
function L(e) {
  return e.selectedView.adminPlanType === OrganizationType.ORG ? jsxs(A5, {
    children: [jsx(J5, {
      text: _$$O(DashboardSection.CONTENT),
      onClick: () => {
        e.dispatch(selectViewAction({
          view: "orgAdminSettings",
          orgAdminSettingsViewTab: DashboardSection.CONTENT
        }));
      },
      hasTrailingDivider: !0
    }), jsx(J5, {
      text: getI18nString("org_admin_tab.abandoned_drafts"),
      onClick: () => {
        e.dispatch(selectViewAction({
          view: "orgAdminSettings",
          orgAdminSettingsViewTab: DashboardSection.CONTENT,
          orgAdminSettingsViewSecondaryTab: WorkspaceTab.ABANDONED_DRAFTS
        }));
      },
      hasTrailingDivider: !1
    })]
  }) : jsx(A5, {
    children: jsx(J5, {
      text: getI18nString("org_admin_tab.abandoned_drafts"),
      onClick: () => {
        e.dispatch(selectViewAction({
          view: "teamAdminConsole",
          teamId: e.selectedView.planId,
          teamAdminConsoleViewTab: DashboardSections.DRAFTS
        }));
      },
      hasTrailingDivider: !1
    })
  });
}
function P(e) {
  return jsx(A5, {
    children: jsx(J5, {
      text: getI18nString("team_view.toolbar.dashboard"),
      onClick: () => {
        e.dispatch(selectViewAction({
          view: "billingGroupDashboard",
          selectedTab: FRequestsStr.REQUESTS
        }));
      },
      hasTrailingDivider: !1
    })
  });
}
function D(e) {
  return jsx(A5, {
    children: jsx(J5, {
      text: getI18nString("team_view.toolbar.dashboard"),
      onClick: () => {
        e.dispatch(selectViewAction(e.selectedView.adminPlanType === OrganizationType.ORG ? {
          view: "orgAdminSettings",
          orgAdminSettingsViewTab: DashboardSection.DASHBOARD
        } : {
          view: "teamAdminConsole",
          teamId: e.selectedView.planId,
          teamAdminConsoleViewTab: DashboardSections.DASHBOARD
        }));
      },
      hasTrailingDivider: !1
    })
  });
}
function k(e) {
  var t = null;
  "workspace" === e.selectedView.view && e.selectedView.subView === DUserRole.ADMIN && (t = jsx(C, {
    dispatch: e.dispatch,
    selectedView: e.selectedView
  }));
  "licenseGroup" === e.selectedView.view && e.selectedView.subView === UserGroupRole.ADMIN && (t = jsx(w, {
    dispatch: e.dispatch,
    selectedView: e.selectedView
  }));
  "billingGroupDashboard" === e.selectedView.view && e.selectedView.selectedTab === FRequestsStr.ALL_REQUESTS && (t = jsx(P, {
    dispatch: e.dispatch
  }));
  "orgDomainManagement" === e.selectedView.view && (t = jsx(O, {
    dispatch: e.dispatch,
    selectedView: e.selectedView
  }));
  "orgIdpManagement" === e.selectedView.view && (t = jsx(R, {
    dispatch: e.dispatch,
    selectedView: e.selectedView
  }));
  "abandonedDraftFiles" === e.selectedView.view && (t = jsx(L, {
    dispatch: e.dispatch,
    selectedView: e.selectedView
  }));
  "seatRequests" === e.selectedView.view && (t = jsx(D, {
    dispatch: e.dispatch,
    selectedView: e.selectedView
  }));
  return jsxs(AutoLayout, {
    direction: "horizontal",
    padding: {
      left: e.showNavigationChevrons ? 20 : 32
    },
    spacing: 8,
    children: [e.showNavigationChevrons && jsx(J, {}), t]
  });
}
function M() {
  let e = useDispatch();
  let t = useSelector(({
    mobileNavShown: e
  }) => e);
  return jsx("div", {
    className: "admin_nav_toolbar--mobileToggleButtonContainer--hZiMX",
    children: jsx(IconButton, {
      onClick: () => {
        t ? e(_I()) : e(PY());
      },
      "aria-label": t ? getI18nString("mobile_tool_bar.hide_navigation") : getI18nString("mobile_tool_bar.show_navigation"),
      children: t ? jsx(_$$A, {}) : jsx(H, {})
    })
  });
}
export function $$F0() {
  let e = useDispatch();
  let t = getSelectedView();
  let r = useTeamPlanUser();
  let a = useIsOrgAdminUser(r).unwrapOr(!1);
  let s = _$$E();
  let o = N(t, a);
  let l = jsxs(AutoLayout, {
    direction: "horizontal",
    spacing: 0,
    padding: {
      right: 32,
      top: 8,
      bottom: 8
    },
    height: 48,
    width: "100%",
    children: [jsx(M, {}), jsx(k, {
      dispatch: e,
      selectedView: t,
      showNavigationChevrons: s
    })]
  });
  return jsx("div", {
    "data-testid": "admin-nav-toolbar",
    className: d()({
      "admin_nav_toolbar--showToolbarOnlyOnMobile--KWSro": !s && !o,
      [_$$s.mb8.$]: o || s
    }),
    children: l
  });
}
export const g = $$F0;
export const I = $$x1;