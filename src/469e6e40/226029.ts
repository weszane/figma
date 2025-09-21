import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { AutoLayout } from "../905/470281";
import { useMemo, useCallback, useState, memo, useRef, useEffect } from "react";
import { h as _$$h } from "../905/207101";
import { renderI18nText, getI18nString } from "../905/303541";
import { tg, KB, lR } from "../4452/780544";
import { g as _$$g } from "../4452/983384";
import { e as _$$e } from "../905/621515";
import { useCurrentPrivilegedPlan, useTeamPlanFeatures, useCurrentPlanUser, checkOrgUserPermission, useCurrentPublicPlan } from "../figma_app/465071";
import { WZ } from "../905/893645";
import { F_, EL } from "../905/858282";
import { rRT, LPt } from "../figma_app/6204";
import { useDispatch, useSelector } from "react-redux";
import { ButtonPrimitive } from "../905/632989";
import { bL, Y9, JU, UC } from "../figma_app/57171";
import { O as _$$O } from "../905/487602";
import { J as _$$J } from "../905/125993";
import { w as _$$w } from "../905/770105";
import { N as _$$N } from "../vendor/930821";
import { P as _$$P } from "../vendor/348225";
import { P as _$$P2 } from "../905/347284";
import { TextWithTruncation } from "../905/984674";
import { SidebarRow } from "../451de8f0/94979";
import { selectViewAction } from "../905/929976";
import { a9 } from "../figma_app/741211";
import { sortByPropertyWithOptions } from "../figma_app/656233";
import { useSubscription } from "../figma_app/288654";
import { Xm, gB } from "../905/723791";
import { MX, RG, EQ, EO } from "../figma_app/684446";
import { FMemberRoleType, FOrganizationRoleType, FPlanNameType, FOrganizationLevelType } from "../figma_app/191312";
import { AdminSettingsSelectorView } from "../figma_app/43951";
import { isBigmaEnabledSimple } from "../figma_app/336853";
import { selectPermissionsState } from "../figma_app/212807";
import { useCurrentUserOrg } from "../905/845253";
import { getSelectedView } from "../figma_app/386952";
import { useIsLoading } from "../905/18797";
import { UserGroupRole, GroupType } from "../905/441038";
import { DUserRole, SectionType } from "../figma_app/858344";
import { z6 } from "../figma_app/805373";
import { lQ } from "../905/934246";
import { _ as _$$_ } from "../7021/243271";
import { S as _$$S } from "../905/794163";
import { e as _$$e2 } from "../905/295932";
import { l as _$$l } from "../905/509505";
import { d as _$$d } from "../469e6e40/727017";
import { A as _$$A } from "../905/891805";
import { U as _$$U } from "../905/275247";
import { Xf, SM } from "../figma_app/153916";
import { s as _$$s } from "../cssbuilder/589278";
import { handleAtomEvent } from "../905/502364";
import { o as _$$o } from "../469e6e40/744116";
import { Ii } from "../figma_app/425283";
import { useAtomWithSubscription } from "../figma_app/27355";
import { UpgradeAction } from "../905/370443";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { rq } from "../905/425180";
import { Rb, qW, ZW, eC as _$$eC } from "../figma_app/982327";
import { ps } from "../figma_app/845611";
import { trackSidebarClick } from "../905/34809";
import { Mn, e9 } from "../4452/961065";
import { fetchTeamMembersThunk } from "../figma_app/240735";
import { Be } from "../figma_app/920435";
import { FRequestsStr } from "../905/384551";
import { DashboardSection } from "../figma_app/650409";
import { DashboardSections } from "../905/548208";
import { IconButton } from "../905/443068";
import { t as _$$t2 } from "../905/117577";
import { Wi } from "../figma_app/162641";
import { Xg } from "../1556/751556";
function g(e) {
  let t = useCurrentPrivilegedPlan("AdminNavigationOnboardingOverlay");
  let a = useMemo(() => t.transform(e => e.name), [t]);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: rRT,
    priority: _$$g(rRT)
  }, [a]);
  _$$h(() => {
    show({
      canShow: e => !!e
    });
  });
  return jsx(WZ, {
    isShowing,
    steps: [{
      title: renderI18nText("admin_settings.sidebar.onboarding.welcome_to_admin", {
        planName: a.data
      }),
      description: renderI18nText("admin_settings.sidebar.onboarding.you_can_now_manage_admin_settings_separately"),
      arrowPosition: F_.LEFT_TITLE,
      emphasized: !0,
      trackingContextName: `${tg} First tooltip`,
      targetKey: KB,
      disableHighlight: !0
    }, {
      title: renderI18nText("admin_settings.sidebar.onboarding.quickly_get_back_to_your_files"),
      description: renderI18nText("admin_settings.sidebar.onboarding.when_youre_done_with_admin_tasks"),
      emphasized: !0,
      trackingContextName: `${tg} Second tooltip`,
      targetKey: lR,
      primaryCtaLabel: renderI18nText("general.got_it")
    }],
    onComplete: complete
  });
}
let el = "seen_team_admin_manage_unassigned_drafts_onboarding";
let eo = userFlagExistsAtomFamily(el);
function ex(e) {
  return jsx("div", {
    className: _$$s.h24.w24.$,
    children: e.children
  });
}
function eb(e) {
  return jsx(Fragment, {
    children: e.rowProps.filter(({
      disabled: e
    }) => !e).map(({
      id: e,
      icon: t,
      onboardingKey: a,
      text: s,
      selectViewArgs: i,
      preNavAction: r,
      badge: l,
      webEventId: o
    }) => jsx(ey, {
      icon: t,
      text: s,
      onboardingKey: a,
      preNavAction: r,
      selectViewArgs: i,
      badge: l,
      webEventId: o
    }, e))
  });
}
function ev(e) {
  let {
    orgId,
    isEnterprise
  } = e;
  let s = Xf(orgId);
  let r = s.data?.invoices || [];
  let o = SM(orgId);
  let d = r.length ? o : lQ;
  let c = !isEnterprise && "loaded" === s.status && 0 === r.length;
  let _ = useMemo(() => function (e, t, a) {
    let s = "orgAdminSettings";
    return [{
      icon: jsx(_$$_, {}),
      id: 2,
      text: renderI18nText("org_admin_tab.people"),
      selectViewArgs: {
        view: s,
        orgAdminSettingsViewTab: DashboardSection.MEMBERS
      },
      onboardingKey: Ii[DashboardSection.MEMBERS]
    }, {
      icon: jsx(_$$S, {}),
      id: 3,
      text: renderI18nText("org_admin_tab.billing"),
      selectViewArgs: {
        view: s,
        orgAdminSettingsViewTab: DashboardSection.BILLING
      },
      preNavAction: t,
      onboardingKey: Ii[DashboardSection.BILLING],
      disabled: a
    }, {
      icon: jsx(_$$e2, {}),
      id: 4,
      text: renderI18nText("org_admin_tab.content"),
      selectViewArgs: {
        view: s,
        orgAdminSettingsViewTab: DashboardSection.CONTENT
      },
      onboardingKey: Ii[DashboardSection.CONTENT]
    }, {
      icon: jsx(_$$l, {}),
      id: 7,
      text: renderI18nText("org_admin_tab.resources"),
      selectViewArgs: {
        view: s,
        orgAdminSettingsViewTab: DashboardSection.RESOURCES
      },
      onboardingKey: Ii[DashboardSection.RESOURCES]
    }, {
      icon: jsx(_$$d, {}),
      id: 8,
      text: renderI18nText("org_admin_tab.activity"),
      selectViewArgs: {
        view: s,
        orgAdminSettingsViewTab: DashboardSection.ACTIVITY
      },
      onboardingKey: Ii[DashboardSection.ACTIVITY]
    }, {
      icon: jsx(_$$A, {}),
      id: 9,
      text: renderI18nText("org_admin_tab.settings"),
      selectViewArgs: {
        view: s,
        orgAdminSettingsViewTab: DashboardSection.SETTINGS
      },
      onboardingKey: Ii[DashboardSection.SETTINGS],
      webEventId: _$$o
    }];
  }(0, d, c), [isEnterprise, d, c]);
  return jsx(eb, {
    rowProps: _
  });
}
function ef(e) {
  let t = useDispatch();
  let a = "orgAdminSettings" === e.selectedView.view && e.selectedView.orgAdminSettingsViewTab === DashboardSection.DASHBOARD;
  let s = "billingGroupDashboard" === e.selectedView.view && e.selectedView.selectedTab === FRequestsStr.REQUESTS;
  let i = a || s;
  return jsx(SidebarRow, {
    icon: jsx(ex, {
      children: jsx(_$$U, {})
    }),
    onClick: () => {
      if (e.isOrgAdmin) {
        let e = DashboardSection.DASHBOARD;
        t(selectViewAction({
          view: "orgAdminSettings",
          orgAdminSettingsViewTab: e
        }));
        t(trackSidebarClick({
          clickedResourceType: "orgAdminSettings"
        }));
      } else {
        t(selectViewAction({
          view: "billingGroupDashboard",
          selectedTab: FRequestsStr.REQUESTS
        }));
        t(trackSidebarClick({
          clickedResourceType: "licenseGroupAdminSettings"
        }));
      }
    },
    text: jsx(TextWithTruncation, {
      truncate: !0,
      children: renderI18nText("org_admin_tab.dashboard")
    }),
    isSelected: i,
    badge: jsx(Mn, {
      org: e.org,
      orgUser: e.orgUser,
      selectedView: e.selectedView,
      isSelected: i
    }),
    wrapInListItem: !1
  });
}
let ej = {
  [Rb]: function () {
    let e = useAtomWithSubscription(eo);
    let {
      show,
      isShowing,
      complete
    } = _$$e({
      overlay: LPt,
      priority: _$$g(LPt)
    }, [e]);
    _$$h(() => {
      show({
        canShow: e => !e
      });
    });
    return jsx(rq, {
      arrowPosition: F_.LEFT_TITLE,
      clickOutsideToHide: !0,
      description: renderI18nText("team_admin.onboarding.manage_unassigned_drafts.team_description"),
      isShowing,
      onClose: complete,
      primaryCta: {
        label: renderI18nText("general.got_it"),
        type: "button",
        onClick: complete,
        ctaTrackingDescriptor: UpgradeAction.DONE
      },
      shouldCenterArrow: EL.FALLBACK,
      targetKey: Rb,
      title: renderI18nText("team_admin.onboarding.manage_unassigned_drafts.title"),
      trackingContextName: qW,
      userFlagOnShow: el
    });
  }
};
function ey(e) {
  let {
    icon,
    onboardingKey,
    preNavAction,
    selectViewArgs,
    text,
    webEventId
  } = e;
  let d = useDispatch();
  let c = getSelectedView();
  let _ = "workspace" !== c.view && "licenseGroup" !== c.view && c.view === e.selectViewArgs.view && ("orgAdminSettings" === c.view && "orgAdminSettings" === e.selectViewArgs.view ? c.orgAdminSettingsViewTab === e.selectViewArgs.orgAdminSettingsViewTab : "teamAdminConsole" === c.view && "teamAdminConsole" === e.selectViewArgs.view ? c.teamAdminConsoleViewTab === e.selectViewArgs.teamAdminConsoleViewTab : void 0);
  let u = useCallback(() => {
    !_ && (preNavAction && preNavAction(), d(selectViewAction(selectViewArgs)), webEventId && handleAtomEvent({
      id: webEventId
    }));
  }, [_, d, preNavAction, selectViewArgs, webEventId]);
  let m = onboardingKey ? ej[onboardingKey] : null;
  return jsxs(Fragment, {
    children: [m && jsx(m, {}), jsx(SidebarRow, {
      onClick: u,
      isSelected: _,
      icon: jsx(ex, {
        children: icon
      }),
      "data-onboarding-key": onboardingKey,
      text: jsx(TextWithTruncation, {
        truncate: !0,
        children: jsx("span", {
          "data-onboarding-key": onboardingKey,
          children: text
        })
      }),
      badge: e.badge,
      wrapInListItem: !1
    })]
  });
}
function eC() {
  let e = useDispatch();
  let t = useCallback(() => {
    e(selectViewAction({
      view: "recentsAndSharing"
    }));
  }, [e]);
  let a = getI18nString("admin_settings.sidebar.back_to_files");
  return jsx("span", {
    "data-onboarding-key": lR,
    children: jsx(IconButton, {
      onClick: t,
      htmlAttributes: {
        "data-tooltip": a,
        "data-tooltip-type": "text"
      },
      "aria-label": a,
      children: jsx(_$$t2, {})
    })
  });
}
function eS() {
  let e = useTeamPlanFeatures().unwrapOr(null);
  let t = e?.name;
  return jsxs("div", {
    className: "x78zum5 x1q0g3np xrupf6j xemv814 xkezfkh x6s0dn4 x1nfngrj xuxw1ft",
    "data-testid": "admin-sidebar-plan-information",
    "data-onboarding-key": KB,
    children: [jsx(eC, {}), t ? renderI18nText("admin_settings.sidebar.plan_name", {
      planName: jsx("span", {
        title: t,
        className: "xb3r6kr xuxw1ft xlyipyv",
        children: t
      })
    }) : jsx(Wi, {})]
  });
}
let eN = {
  "--color-icon": "var(--color-icon-secondary)"
};
function eI(e) {
  let [t, a] = useState(!1);
  let s = t ? e.rows.length : 10;
  let r = e.rows.slice(0, s);
  let o = e.rows.length > 10;
  let d = jsxs(Fragment, {
    children: [jsx("ul", {
      children: r.map(t => jsx("li", {
        children: e.renderFn(t)
      }, t.id))
    }), o && jsxs(ButtonPrimitive, {
      "aria-label": t ? e.seeLessAriaLabel : e.seeMoreAriaLabel,
      "aria-live": "polite",
      className: "x78zum5 x6s0dn4 x1nfngrj xh8yej3 x8rdmch x1gskr33 x1ihwiht xe0qb83 x12tve8b x1icplyp",
      onClick: () => a(e => !e),
      children: [t ? jsx(ex, {
        children: jsx(_$$O, {
          "aria-hidden": "true",
          style: eN
        })
      }) : jsx(ex, {
        children: jsx(_$$J, {
          "aria-hidden": "true",
          style: eN
        })
      }), jsx(TextWithTruncation, {
        color: "secondary",
        children: t ? getI18nString("sidebar.see_less") : getI18nString("sidebar.see_all")
      })]
    })]
  });
  return e.label ? jsx("div", {
    className: "x7hzu26",
    children: jsxs(bL, {
      defaultOpen: !0,
      children: [jsx(Y9, {
        variant: "leftPanel",
        children: jsx(JU, {
          children: jsx("h3", {
            children: e.label
          })
        })
      }), jsx(UC, {
        children: d
      })]
    })
  }) : d;
}
function eT(e) {
  let t = useDispatch();
  let a = getSelectedView();
  let s = useCallback(e => {
    t(selectViewAction({
      view: "licenseGroup",
      licenseGroupId: e,
      subView: UserGroupRole.ADMIN,
      selectedTab: GroupType.MEMBERS
    }));
  }, [t]);
  let r = useCallback(e => jsx(SidebarRow, {
    onClick: () => {
      s(e.id);
    },
    icon: jsx(ex, {
      children: jsx(_$$w, {})
    }),
    text: jsx(TextWithTruncation, {
      truncate: !0,
      children: e.name
    }),
    isSelected: "licenseGroup" === a.view && a.licenseGroupId === e.id,
    wrapInListItem: !1
  }, e.id), [s, a]);
  return jsx(eI, {
    renderFn: r,
    label: e.renderLabel ? renderI18nText("admin_dashboard.requests.billing_groups") : null,
    rows: e.licenseGroups,
    seeMoreAriaLabel: getI18nString("sidebar.see_all_billing_groups_aria_label"),
    seeLessAriaLabel: getI18nString("sidebar.see_less_billing_groups_aria_label")
  });
}
function eA(e) {
  let t = useDispatch();
  let a = getSelectedView();
  let s = useCallback(e => {
    t(selectViewAction({
      view: "workspace",
      workspaceId: e,
      subView: DUserRole.ADMIN,
      selectedTab: SectionType.MEMBERS
    }));
  }, [t]);
  let r = useCallback(e => jsx(SidebarRow, {
    isSelected: "workspace" === a.view && a.workspaceId === e.id,
    onClick: () => {
      s(e.id);
    },
    icon: jsx(z6, {
      size: 16,
      entity: e
    }),
    text: jsx(TextWithTruncation, {
      truncate: !0,
      children: e.name
    }),
    wrapInListItem: !1
  }, e.id), [s, a]);
  return jsx(eI, {
    renderFn: r,
    label: e.renderLabel ? renderI18nText("sidebar.workspaces") : null,
    rows: e.workspaces,
    seeMoreAriaLabel: getI18nString("sidebar.see_all_workspaces_aria_label"),
    seeLessAriaLabel: getI18nString("sidebar.see_less_workspaces_aria_label")
  });
}
let eR = ["fb-width-60", "fb-width-70", "fb-width-80", "fb-width-100", "fb-width-105", "fb-width-120"];
let eO = memo(() => jsx(Fragment, {
  children: [...Array(7)].map((e, t) => jsxs("div", {
    className: "fb-sidebar-row",
    children: [jsx("div", {
      className: "fb-rectangle-16 fb-width-16 fb-shrink-0"
    }), jsx("div", {
      className: `fb-rectangle-16 ${eR[Math.floor(Math.random() * eR.length)]}`
    })]
  }, t))
}));
function eL() {
  let e = useCurrentUserOrg();
  let t = a9();
  let a = getSelectedView();
  let s = useRef(!1);
  let {
    isOrgAdmin,
    licenseGroups,
    workspaces
  } = function () {
    let e = selectPermissionsState();
    let t = e.orgById[e.currentUserOrgId];
    let a = useCurrentPlanUser("useCurrentAdminSettingsViews").unwrapOr(null);
    let n = !!(a && checkOrgUserPermission(a, FMemberRoleType.ADMIN));
    let s = MX();
    let r = RG();
    let {
      groupsUserIsAdminOf
    } = EQ(s, e.user?.id, !n);
    let o = useMemo(() => r ? groupsUserIsAdminOf : [], [r, groupsUserIsAdminOf]);
    let d = useSubscription(AdminSettingsSelectorView, {
      orgId: t.id
    }, {
      enabled: isBigmaEnabledSimple(t)
    });
    let c = useMemo(() => {
      let e = (d.data?.currentUser?.baseOrgUser?.workspaceUsers ?? []).filter(e => e.permission === FOrganizationRoleType.ADMIN).map(e => e.workspace);
      sortByPropertyWithOptions(e, "name");
      return e;
    }, [d.data]);
    return {
      isOrgAdmin: !!n,
      licenseGroups: o,
      workspaces: "loading" === d.status || "disabled" === d.status ? Xm() : gB(c)
    };
  }();
  let d = useIsLoading(EO(e?.id ?? "")) && !s.current;
  let c = workspaces.data ?? [];
  if (useEffect(() => {
    d || s.current || (s.current = !0);
  }, [d]), !e || !t) return null;
  let u = e.tier === FPlanNameType.ENTERPRISE;
  let m = d || "loading" === workspaces.status;
  let p = licenseGroups[0]?.id;
  let g = isOrgAdmin || !!p;
  return jsx(_$$N, {
    mode: "popLayout",
    initial: !1,
    children: jsx(_$$P.div, {
      transition: {
        type: "ease-in-out",
        duration: .4,
        reducedMotion: "user"
      },
      exit: {
        opacity: 0
      },
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      children: u && m ? jsx(eO, {}) : jsxs(Fragment, {
        children: [g && jsx(ef, {
          org: e,
          isOrgAdmin,
          orgUser: t,
          selectedView: a
        }), isOrgAdmin && jsx(ev, {
          orgId: e.id,
          isEnterprise: u
        }), licenseGroups.length > 0 && jsx(eT, {
          renderLabel: c.length > 0 || isOrgAdmin,
          licenseGroups
        }), c.length > 0 && jsx(eA, {
          renderLabel: licenseGroups.length > 0 || isOrgAdmin,
          workspaces: c
        })]
      })
    }, m ? "skeleton" : "nav")
  });
}
function eD(e) {
  let t = useDispatch();
  let a = useSelector(t => t.teams[e.id]);
  let s = !!(!a?.student_team && a?.pro_team);
  let r = useMemo(() => function (e, t, a) {
    let s = "teamAdminConsole";
    return [{
      icon: jsx(_$$U, {}),
      id: 1,
      text: renderI18nText("org_admin_tab.dashboard"),
      disabled: !t,
      selectViewArgs: {
        view: s,
        teamId: e,
        isProTeam: t,
        teamAdminConsoleViewTab: DashboardSections.DASHBOARD
      },
      badge: t ? jsx(e9, {
        planType: ps.TEAM,
        planId: e,
        isOrgAdmin: !1,
        isDataLoaded: !0
      }) : void 0
    }, {
      icon: jsx(_$$_, {}),
      id: 2,
      text: renderI18nText("org_admin_tab.people"),
      onboardingKey: ZW,
      selectViewArgs: {
        view: s,
        isProTeam: t,
        teamId: e,
        teamAdminConsoleViewTab: DashboardSections.MEMBERS
      },
      preNavAction: () => {
        a(fetchTeamMembersThunk({
          teamId: e
        }));
      }
    }, {
      icon: jsx(_$$S, {}),
      id: 3,
      text: renderI18nText("org_admin_tab.billing"),
      selectViewArgs: {
        view: s,
        teamAdminConsoleViewTab: DashboardSections.BILLING,
        teamId: e,
        isProTeam: t
      },
      disabled: !t,
      preNavAction: () => {
        a(Be({
          teamId: e
        }));
      }
    }, {
      icon: jsx(_$$e2, {}),
      id: 4,
      text: renderI18nText("org_admin_tab.abandoned_drafts"),
      onboardingKey: Rb,
      selectViewArgs: {
        view: s,
        isProTeam: t,
        teamAdminConsoleViewTab: DashboardSections.DRAFTS,
        teamId: e
      },
      disabled: t
    }, {
      icon: jsx(_$$e2, {}),
      id: 4,
      text: renderI18nText("org_admin_tab.content"),
      selectViewArgs: {
        view: s,
        isProTeam: t,
        teamAdminConsoleViewTab: DashboardSections.CONTENT,
        teamId: e
      },
      disabled: !t
    }, {
      icon: jsx(_$$A, {}),
      id: 5,
      text: renderI18nText("org_admin_tab.settings"),
      onboardingKey: _$$eC,
      selectViewArgs: {
        view: s,
        isProTeam: t,
        teamAdminConsoleViewTab: DashboardSections.SETTINGS,
        teamId: e
      },
      preNavAction: () => a(Be({
        teamId: e
      })),
      webEventId: _$$o
    }];
  }(e.id, s, t), [t, s, e.id]);
  return jsx(eb, {
    rowProps: r
  });
}
function eM() {
  let e = useCurrentPublicPlan("Navigation").unwrapOr(null);
  let t = e?.key.type;
  let a = e?.key.parentId;
  return e ? jsx("div", {
    className: "xh8yej3 x5yr21d x78zum5 xdt5ytf xt0e3qv x1qughib",
    children: jsxs(_$$P2, {
      className: "x1a34yqq",
      children: [jsx(eS, {}), t === FOrganizationLevelType.ORG ? jsx(eL, {}) : jsx(eD, {
        id: a
      })]
    })
  }) : null;
}
function eU() {
  let e = useSelector(({
    mobileNavShown: e
  }) => e);
  return jsx("div", {
    "data-test-id": "admin-sidebar-user-information",
    className: _$$s.bb1.bSolid.wFull.colorBorder.$$if(e, _$$s.bt1).$,
    children: jsx(Xg, {})
  });
}
export function $$eF0() {
  return jsxs(AutoLayout, {
    direction: "vertical",
    spacing: 0,
    children: [jsx(eU, {}), jsx(eM, {}), jsx(g, {})]
  });
}
export const AdminSidebar = $$eF0;