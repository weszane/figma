import { isEqual } from 'lodash-es';
import { reportError } from '../905/11';
import { ServiceCategories as _$$e } from '../905/165054';
import { UNASSIGNED } from '../905/247093';
import { getI18nString } from '../905/303541';
import { FRequestsStr } from '../905/384551';
import { GroupType, UserRole } from '../905/441038';
import { NavigationRoutes, MemberSections, DashboardSections, BillingSections } from '../905/548208';
import { isAppShellEnabled } from '../905/561581';
import { mL, UC } from '../905/563637';
import { getFeatureFlags } from '../905/601108';
import { Ay } from '../905/612521';
import { parseQuery, parseQuerySimple, serializeQuery } from '../905/634134';
import { K } from '../905/807535';
import { g as _$$g } from '../905/817247';
import { O as _$$O2 } from '../905/833838';
import { i as _$$i } from '../905/890459';
import { o as _$$o } from '../905/895626';
import { E as _$$E, n as _$$n } from '../905/902560';
import { Rx } from '../figma_app/162807';
import { u5, vQ } from '../figma_app/173467';
import { FProductAccessType } from '../figma_app/191312';
import { kA, wA } from '../figma_app/336853';
import { w5 } from '../figma_app/345997';
import { A5, HZ } from '../figma_app/391338';
import { debug, throwTypeError } from '../figma_app/465776';
import { G } from '../figma_app/471068';
import { CI } from '../figma_app/528509';
import { OA, rT } from '../figma_app/585126';
import { canAdminTeam, getPermissionsStateMemoized } from '../figma_app/642025';
import { G_ as _$$G_, _d, J7, M7, SN } from '../figma_app/650409';
import { bb, ck, Ft, jX, SC, Sc } from '../figma_app/707808';
import { UpgradeSteps } from '../figma_app/831101';
import { dN, Fi, m2, rj, V0 } from '../figma_app/858344';
import { sy } from '../figma_app/930338';
import { xw } from '../figma_app/951233';
import { J0, Od, oU } from '../figma_app/967319';
export function $$G6({
  isAdminOrg: e,
  permissions: t,
  teams: r,
  view: n
}) {
  if (n.adminPlanType !== _$$O2.ORG) return !(n.planId in r);
  {
    let r = wA(t);
    let n = xw(t);
    return !r || !n || !e;
  }
}
export function $$V0({
  isAdminOrg: e,
  permissions: t,
  view: r
}) {
  let n = wA(t);
  let i = xw(t);
  return !n || !i || !n.bigma_enabled || r.subView === UserRole.ADMIN && !e && !i.license_admin;
}
export function $$H4({
  isAdminOrg: e,
  permissions: t,
  orgAdminSettingsViewTab: r,
  orgAdminSettingsViewSecondaryTab: n
}) {
  let i = wA(t);
  let a = xw(t);
  let s = t.currentUserOrgId && kA(t.orgById[t.currentUserOrgId]);
  return !(i && a && (r !== J7.WORKSPACES && n !== SN.WORKSPACES || !t.currentUserOrgId || s) && (e || a.license_admin || a.workspace_users?.some(e => e.permission === 'admin'))) || r === J7.BILLING && n === _$$G_.BILLING_GROUPS && !s;
}
export function $$z3({
  isAdminTeam: e,
  teamAdminConsoleViewTab: t,
  teamId: r,
  teams: n
}) {
  return (t === DashboardSections.BILLING || t === DashboardSections.DASHBOARD) && (!e || !n[r] || n[r].student_team || !w5(n[r]));
}
let W = {
  feed: {
    slug: 'feed',
    i18nName: () => getI18nString('view_selectors.file_browser.feed'),
    hasMissingResource: () => !1
  },
  resourceUnavailable: {
    slug: 'resourceUnavailable',
    i18nName: () => getI18nString('view_selectors.file_browser.resource_unavailable'),
    hasMissingResource: () => !1,
    isNonUrlAddressable: !0
  },
  deletedFiles: {
    slug: 'trashed',
    i18nName: () => getI18nString('view_selectors.file_browser.trash'),
    hasMissingResource: () => !1
  },
  trashedFolders: {
    slug: 'trashed-projects',
    i18nName: () => getI18nString('view_selectors.file_browser.trash'),
    hasMissingResource: () => !1
  },
  teamCreation: {
    slug: 'create-team',
    i18nName: () => getI18nString('view_selectors.file_browser.create_new_team'),
    hasMissingResource: () => !1,
    skipBrowserHistory: () => !0
  },
  folder: {
    slug: 'project',
    hasMissingResource: () => !1
  },
  team: {
    slug: 'team',
    hasMissingResource: (e, t) => {
      let {
        teamId
      } = t;
      let n = t.teamViewTab === NavigationRoutes.BILLING && (!canAdminTeam(teamId, e) || !e.teams[teamId] || !e.teams[teamId].pro_team);
      return HZ({
        label: A5.fileBrowserConfig.teamHasMissingResource,
        oldValue: n,
        newValue: !1,
        maxReports: 5
      });
    },
    missingResourceType: Ft.TEAM,
    areDifferent: (e, t) => e.teamId !== t.teamId
  },
  allProjects: {
    slug: 'all-projects',
    hasMissingResource: (e, t) => !(e.currentTeamId && e.teams[e.currentTeamId]),
    missingResourceType: Ft.TEAM
  },
  limitedTeamSharedProjects: {
    slug: 'shared-projects',
    i18nName: () => getI18nString('sidebar.all_shared_projects'),
    hasMissingResource: () => !1
  },
  teamAdminConsole: {
    slug: 'team-admin-console',
    hasMissingResource: () => !1,
    areDifferent: (e, t) => e.teamId !== t.teamId || e.teamAdminConsoleViewTab !== t.teamAdminConsoleViewTab || e.teamAdminConsoleViewSecondaryTab !== t.teamAdminConsoleViewSecondaryTab
  },
  addCollaborators: {
    slug: 'add-collaborators',
    i18nName: () => getI18nString('view_selectors.file_browser.add_collaborators'),
    hasMissingResource: () => !1
  },
  teamUpgrade: {
    slug: 'upgrade-team',
    hasMissingResource: (e, t) => !getFeatureFlags().redirect_starter_team_loophole && t.teamId === null && jX(t.teamFlowType) || !!t.teamId && !(t.teamId in e.teams),
    missingResourceType: Ft.TEAM,
    areDifferent: (e, t) => e.teamId !== t.teamId || e.paymentStep !== t.paymentStep,
    skipBrowserHistory: e => e.paymentStep === UpgradeSteps.CONFIRM_PAY
  },
  promoReview: {
    slug: 'promo-review',
    hasMissingResource: (e, t) => !(t.teamId in e.teams),
    missingResourceType: Ft.TEAM,
    areDifferent: (e, t) => e.teamId !== t.teamId,
    skipBrowserHistory: () => !0
  },
  eduReview: {
    slug: 'edu-review',
    hasMissingResource: (e, t) => !(t.teamId in e.teams),
    missingResourceType: Ft.TEAM,
    areDifferent: (e, t) => e.teamId !== t.teamId,
    skipBrowserHistory: () => !0
  },
  teamFeed: {
    slug: 'feed-posts',
    i18nName: () => getI18nString('view_selectors.file_browser.feed'),
    hasMissingResource: () => !1,
    areDifferent: (e, t) => e.postUuid !== t.postUuid
  },
  litmus: {
    slug: 'litmus',
    hasMissingResource: () => !1
  },
  componentBrowserLibrary: {
    slug: 'library',
    hasMissingResource: () => !1
  },
  seatRequests: {
    slug: 'seat-requests',
    i18nName: () => getI18nString('admin_dashboard.requests.seat_title'),
    hasMissingResource: () => !1
  },
  workspace: {
    slug: 'workspace',
    missingResourceType: Ft.WORKSPACE,
    hasMissingResource: (e, t) => {
      let r = getPermissionsStateMemoized(e);
      let n = wA(r);
      let i = xw(r);
      if (!n || !i || !n.bigma_enabled) return !0;
      switch (t.subView) {
        case V0.DIRECTORY:
        case V0.ADMIN:
        default:
          return !1;
      }
    },
    areDifferent: (e, t) => e.subView !== t.subView || e.workspaceId !== t.workspaceId || e.selectedTab !== t.selectedTab
  },
  licenseGroup: {
    slug: 'billing-group',
    hasMissingResource: () => !1,
    areDifferent: (e, t) => e.subView !== t.subView || e.licenseGroupId !== t.licenseGroupId || e.selectedTab !== t.selectedTab
  },
  billingGroupDashboard: {
    slug: 'billing-group-dashboard',
    hasMissingResource: (e, t) => {
      let r = getPermissionsStateMemoized(e);
      let n = wA(r);
      let i = xw(r);
      return !n || !i || !n.bigma_enabled;
    },
    areDifferent: (e, t) => e !== t
  },
  orgDomainManagement: {
    slug: 'domains',
    i18nName: () => getI18nString('view_selectors.file_browser.org_domain_management'),
    hasMissingResource: () => !1
  },
  orgIdpManagement: {
    slug: 'idps',
    i18nName: () => getI18nString('view_selectors.file_browser.org_idp_management'),
    hasMissingResource: () => !1
  },
  abandonedDraftFiles: {
    slug: 'abandoned_draft_files',
    i18nName: () => getI18nString('org_admin_tab.abandoned_drafts'),
    hasMissingResource: () => !1
  },
  orgAdminSettings: {
    slug: 'admin',
    i18nName: () => getI18nString('view_selectors.file_browser.org_admin'),
    hasMissingResource: () => !1,
    areDifferent: (e, t) => e.orgAdminSettingsViewTab !== t.orgAdminSettingsViewTab || e.orgAdminSettingsViewSecondaryTab !== t.orgAdminSettingsViewSecondaryTab || !isEqual(e.orgAdminMembersTabFilters, t.orgAdminMembersTabFilters) || !isEqual(e.orgAdminMembersTabSort, t.orgAdminMembersTabSort)
  },
  search: {
    slug: 'search',
    hasMissingResource: () => !1,
    areDifferent: (e, t) => e.entryPoint !== t.entryPoint,
    stripFuidParam: e => e.entryPoint === 'community'
  },
  user: {
    slug: 'user',
    i18nName: () => getI18nString('view_selectors.file_browser.user'),
    hasMissingResource: () => !1,
    areDifferent: (e, t) => e.userViewTab !== t.userViewTab || e.userId !== t.userId
  },
  recentsAndSharing: {
    slug: 'recents-and-sharing',
    i18nName: () => getI18nString('view_selectors.file_browser.recents_and_sharing'),
    hasMissingResource: () => !1
  },
  draftsToMove: {
    slug: 'drafts-to-move',
    i18nName: () => getI18nString('view_selectors.file_browser.drafts_to_move'),
    hasMissingResource: () => !1
  },
  resourceHub: {
    slug: 'resources',
    i18nName: () => getI18nString('view_selectors.file_browser.templates_and_tools'),
    hasMissingResource: () => !1
  }
};
let $$K2 = Object.keys(W);
let $$Y5 = Object.values(W).map(e => e.slug);
let $ = e => !!e && /^\d+$/.test(e);
function X({
  resourceType: e,
  matchingViewName: t,
  extra: r
}) {
  reportError(_$$e.WAYFINDING, new Error(`Invalid ${e} ID while parsing selected view ${t} from path`), {
    extra: {
      matchingViewName: t,
      ...r
    }
  });
}
export class $$q1 {
  pathToSelectedView(e, t, r, n) {
    if (t[1] === 'my_plugins' && e.user) {
      return {
        view: 'user',
        userId: e.user.id,
        userViewTab: _$$o.PLUGINS
      };
    }
    if (t[1] !== 'files') return null;
    if (t[2] === 'drafts') {
      return {
        view: 'folder',
        folderId: e.user?.drafts_folder_id
      };
    }
    if (t[2] === 'recent') {
      return {
        view: 'recentsAndSharing'
      };
    }
    let o = $$K2.find(e => W[e].slug === t[2]);
    if (!o) return null;
    switch (o) {
      case 'folder':
        {
          let e = t[3];
          if (!$(e)) {
            X({
              resourceType: 'folder',
              matchingViewName: o,
              extra: {
                folderId: e
              }
            });
            return null;
          }
          if (!e) {
            return {
              view: 'resourceUnavailable',
              resourceType: Ft.PROJECT
            };
          }
          let n = !1;
          r && parseQuery(r).renameProject != null && (n = parseQuery(r).renameProject === 'true');
          return {
            view: o,
            folderId: e,
            shouldShowRenameModal: n
          };
        }
      case 'allProjects':
      case 'team':
        {
          let n;
          let a;
          let s;
          let l;
          let d;
          let c = NavigationRoutes.HOME;
          if (t.length === 4) {
            let e = K(NavigationRoutes, t[t.length - 1]);
            e && e !== NavigationRoutes.PROFILE && (c = e);
          }
          if (t.length === 5 || t.length === 6) {
            if (t[5] === 'restore') return null;
            let e = K(NavigationRoutes, t[t.length - 1]);
            e && e !== NavigationRoutes.PROFILE && (c = e);
          }
          if (!$(d = e.currentTeamId ? e.currentTeamId : t[3])) {
            void 0 !== d && X({
              resourceType: 'team',
              matchingViewName: o,
              extra: {
                'teamId': d,
                '!!state.currentTeamId': !!e.currentTeamId,
                '!!state.currentUserOrgId': !!e.currentUserOrgId,
                'parts.length': t.length
              }
            });
            return null;
          }
          let p = d && e.teams[d];
          if (p && r) {
            let e = new URLSearchParams(r).get('upgrade_type');
            e && (l = K(FProductAccessType, e));
          }
          r && parseQuerySimple(r).rciid != null && (n = parseQuerySimple(r).rciid);
          p && r && parseQuery(r).proUpgrade != null && (a = parseQuery(r).proUpgrade === 'true');
          r && parseQuery(r).assetTransferRequest != null && (s = parseQuery(r).assetTransferRequest);
          return {
            view: 'team',
            teamId: d,
            teamViewTab: c,
            upgradeModalType: l,
            isProUpgrade: a,
            assetTransferRequestId: s,
            showResourceConnectionInviteModal: n
          };
        }
      case 'teamAdminConsole':
        {
          let n;
          let a;
          if (!e.currentTeamId) return null;
          let s = null;
          let l = null;
          if (t.length >= 4) {
            let e = K(DashboardSections, t[3]);
            if (e && (s = e), e && t.length >= 5) {
              let r = t[4];
              switch (e) {
                case DashboardSections.CONTENT:
                  n = K(MemberSections, r);
                  break;
                case DashboardSections.BILLING:
                  n = K(BillingSections, r);
              }
            }
          }
          if (!$(l = e.currentTeamId)) {
            X({
              resourceType: 'team',
              matchingViewName: o,
              extra: {
                currentTeamId: l
              }
            });
            return null;
          }
          let d = !!e.teams[l]?.pro_team;
          s || (s = d ? DashboardSections.DASHBOARD : DashboardSections.MEMBERS);
          let c = '';
          d && r && parseQuery(r).dashEntryPoint && (s = DashboardSections.DASHBOARD, c = parseQuery(r).dashEntryPoint);
          s === DashboardSections.CONTENT && n === MemberSections.CONNECTED_PROJECTS && r && parseQuerySimple(r).rciid != null && (a = parseQuerySimple(r).rciid);
          return {
            view: o,
            teamId: l,
            teamAdminConsoleViewTab: s,
            teamAdminConsoleViewSecondaryTab: n,
            isProTeam: d,
            dashDeepLinkEntryPoint: c,
            showResourceConnectionInviteModal: a
          };
        }
      case 'limitedTeamSharedProjects':
        {
          let t;
          if (getFeatureFlags().limited_plan_spaces && e.currentTeamId && (t = e.currentTeamId), !t) return null;
          return {
            view: 'limitedTeamSharedProjects'
          };
        }
      case 'addCollaborators':
        return {
          view: o,
          teamId: t[3]
        };
      case 'teamUpgrade':
        {
          let e = new URLSearchParams(r);
          let n = !!getFeatureFlags().redirect_starter_team_loophole && !getFeatureFlags().close_starter_team_loophole_v2;
          let i = Object.values(SC).includes(t[4]) ? t[4] : SC.UPGRADE_EXISTING_TEAM;
          if (n && i !== SC.UPGRADE_EXISTING_TEAM) {
            reportError(_$$e.MONETIZATION_UPGRADES, new Error('Invalid team flow type while parsing selected view from path'), {
              extra: {
                matchingViewName: o,
                parts: t
              }
            });
            return {
              view: 'teamCreation',
              fromNewTab: !0
            };
          }
          let l = Object.values(UpgradeSteps).includes(t[4]) ? t[4] : UpgradeSteps.CHOOSE_PLAN;
          let d = t[5] || l;
          let c = e.get('planType') ? parseInt(e.get('planType')) : i === SC.UPGRADE_EXISTING_TEAM ? Sc.TEAM : void 0;
          let u = ck(i, d) ? void 0 : c;
          let _ = t[3];
          if (_ === 'n') {
            if (_ = null, n) {
              reportError(_$$e.MONETIZATION_UPGRADES, new Error('Null team ID while parsing selected view from path'), {
                extra: {
                  matchingViewName: o,
                  parts: t
                }
              });
              return {
                view: 'teamCreation',
                fromNewTab: !0
              };
            }
          } else if (!$(_)) {
            X({
              resourceType: 'team',
              matchingViewName: o,
              extra: {
                teamId: _
              }
            });
            return null;
          }
          return {
            view: o,
            teamFlowType: i,
            teamId: _,
            paymentStep: d,
            ...(e.get('entryPoint') ? {
              entryPoint: parseInt(e.get('entryPoint'))
            } : {}),
            ...(e.get('billingPeriod') ? {
              billingPeriod: parseInt(e.get('billingPeriod'))
            } : {}),
            ...(e.get('onCompleteRedirectFileKey') ? {
              searchParams: {
                onCompleteRedirectFileKey: e.get('onCompleteRedirectFileKey'),
                onCompleteRedirectNodeId: e.get('onCompleteRedirectNodeId')
              }
            } : {}),
            ...(u ? {
              planType: u
            } : {})
          };
        }
      case 'promoReview':
        {
          let e = t[3];
          if (!$(e)) {
            X({
              resourceType: 'team',
              matchingViewName: o,
              extra: {
                teamId: e
              }
            });
            return null;
          }
          return {
            view: o,
            teamId: t[3],
            teamName: t[4]
          };
        }
      case 'eduReview':
        {
          let e = t[3];
          if (!$(e)) {
            X({
              resourceType: 'team',
              matchingViewName: o,
              extra: {
                teamId: e
              }
            });
            return null;
          }
          return {
            view: o,
            teamId: e
          };
        }
      case 'licenseGroup':
        {
          let e;
          let n = _$$g(t[5]);
          let i = _$$E(r);
          n === GroupType.MEMBERS && (e = i ?? oU);
          let a = new URLSearchParams(Ay.location.search).get(u5);
          let s = a ? vQ(a) : void 0;
          let l = t[3];
          if (!$(l)) {
            X({
              resourceType: 'license group',
              matchingViewName: o,
              extra: {
                licenseGroupId: l
              }
            });
            return null;
          }
          return {
            view: o,
            subView: UserRole.ADMIN,
            licenseGroupId: l,
            selectedTab: n,
            orgAdminMembersTabSort: e,
            orgAdminOriginTab: s
          };
        }
      case 'billingGroupDashboard':
        return {
          view: o,
          selectedTab: K(FRequestsStr, t[3] ?? '') ?? FRequestsStr.REQUESTS
        };
      case 'seatRequests':
        if (e.currentUserOrgId === null) {
          return {
            view: o,
            adminPlanType: _$$O2.TEAM,
            planId: e.currentTeamId ?? ''
          };
        }
        return {
          view: o,
          adminPlanType: _$$O2.ORG,
          planId: e.currentUserOrgId
        };
      case 'workspace':
        {
          let e = t[3];
          if ((K(V0, t[4]) || V0.DIRECTORY) === V0.ADMIN) {
            let n;
            let a = K(m2, t[5]) || rj[0];
            let s = _$$E(r);
            if (a === m2.MEMBERS && (n = s ?? oU), !$(e)) {
              X({
                resourceType: 'workspace',
                matchingViewName: o,
                extra: {
                  workspaceId: e
                }
              });
              return null;
            }
            return {
              view: o,
              subView: V0.ADMIN,
              workspaceId: e,
              selectedTab: a,
              orgAdminMembersTabSort: n
            };
          }
          {
            let r = e;
            if (e === UNASSIGNED) {
              r = null;
            } else if (!$(e)) {
              X({
                resourceType: 'workspace',
                matchingViewName: o,
                extra: {
                  workspaceId: e
                }
              });
              return null;
            }
            return {
              view: o,
              subView: V0.DIRECTORY,
              workspaceId: r,
              selectedTab: K(dN, t[5]) || Fi[0]
            };
          }
        }
      case 'orgAdminSettings':
        {
          let n;
          let a;
          if (t.length >= 4 && (n = K(J7, t[3])) && t.length >= 5) {
            let e = t[4];
            switch (n) {
              case J7.RESOURCES:
                a = K(_d, e);
                break;
              case J7.CONTENT:
                a = K(SN, e);
                break;
              case J7.BILLING:
                a = K(_$$G_, e ?? '');
                break;
              case J7.MEMBERS:
                a = K(M7, e ?? '');
            }
          }
          n === J7.WORKSPACES ? (n = J7.CONTENT, a = SN.WORKSPACES) : n === J7.TEAMS && (n = J7.CONTENT, a = SN.TEAMS);
          let s = {
            view: 'orgAdminSettings',
            orgAdminSettingsViewTab: n = n ?? J7.DASHBOARD,
            orgAdminSettingsViewSecondaryTab: a,
            orgAdminMembersTabFilters: J0,
            orgAdminMembersTabSort: oU
          };
          n === J7.DASHBOARD && r && parseQuery(r).dashEntryPoint != null && (s.dashDeepLinkEntryPoint = parseQuery(r).dashEntryPoint);
          let o = rT(r, e.licenseGroups);
          n === J7.MEMBERS && o && (s.orgAdminMembersTabFilters = o);
          let l = _$$E(r);
          if (n === J7.MEMBERS && r && parseQuery(r).initialSort === 'date-upgraded' ? s.orgAdminMembersTabSort = {
            columnName: Od.DESIGN_ROLE,
            isReversed: !0
          } : n === J7.MEMBERS && l && (s.orgAdminMembersTabSort = l), n === J7.MEMBERS && r && parseQuery(r).orgJoinRequest != null && (s.membersTabOrgJoinRequest = parseQuery(r).orgJoinRequest), r && parseQuery(r).assetTransferRequest != null && (s.teamsTabAssetTransferRequest = parseQuery(r).assetTransferRequest), n === J7.RESOURCES && r && (a === _d.APPROVED_PLUGINS || a === _d.APPROVED_WIDGETS)) {
            let e = parseQuery(r).eid;
            s.selectedExtensionId = e;
          }
          n === J7.CONTENT && a === SN.CONNECTED_PROJECTS && r && parseQuerySimple(r).rciid != null && (s.showResourceConnectionInviteModal = parseQuerySimple(r).rciid);
          return s;
        }
      case 'search':
        return {
          view: 'search',
          entryPoint: 'url:internal',
          previousView: {
            view: 'recentsAndSharing'
          }
        };
      case 'user':
        {
          if (t.length < 4 || !e.user) return null;
          let i = t[3];
          let a = _$$o.INTERNAL_PROFILE;
          if (t[t.length - 1] === 'settings' && i === e.user.id) {
            let e = r && parseQuery(r).tab;
            let t = n ? n.slice(1) : void 0;
            return {
              view: 'recentsAndSharing',
              accountModalTab: e || bb.ACCOUNT,
              accountModalTabSection: t
            };
          }
          if (t[t.length - 1] === 'plugins') {
            return {
              view: 'recentsAndSharing',
              accountModalTab: bb.PLUGINS
            };
          }
          if (t[t.length - 1] === 'email_unsubscribe' && i === e.user.id) {
            let e = r && parseQuery(r).policy;
            if (e) {
              return {
                view: 'recentsAndSharing',
                emailPolicyToUnsubscribeFrom: e
              };
            }
            return {
              view: 'recentsAndSharing',
              accountModalTab: bb.NOTIFICATIONS
            };
          }
          getFeatureFlags().xr_debounce_threshold && t[t.length - 1] === 'posts' && (a = _$$o.INTERNAL_PROFILE_POSTS);
          return {
            view: 'user',
            userId: i,
            userViewTab: a
          };
        }
      case 'feed':
        if (r) {
          let e = parseQuery(r);
          if (e.quickReplyFileKey && e.quickReplyThreadId) {
            return {
              view: 'feed',
              quickReplyInfo: {
                fileKey: e.quickReplyFileKey,
                threadId: e.quickReplyThreadId
              }
            };
          }
        }
        return {
          view: 'feed'
        };
      case 'teamFeed':
        {
          if (e.currentUserOrgId === null || !getFeatureFlags().xr_debounce_threshold) return null;
          let r = new URLSearchParams(Ay.location.search);
          return {
            view: 'teamFeed',
            postUuid: t[3],
            creatorId: r.get('creator_id') ?? void 0
          };
        }
      case 'recentsAndSharing':
        {
          let e;
          if (t.length >= 4 && (e = K(G, t[t.length - 1])), !e) {
            return {
              view: 'recentsAndSharing'
            };
          }
          return {
            view: 'recentsAndSharing',
            tab: e
          };
        }
      case 'teamCreation':
        return {
          view: o,
          fromNewTab: !0
        };
      case 'abandonedDraftFiles':
        if (e.currentUserOrgId === null) {
          return {
            view: o,
            abandonedDraftFolderId: t[t.length - 1],
            adminPlanType: _$$O2.TEAM,
            planId: e.currentTeamId ?? ''
          };
        }
        return {
          view: o,
          abandonedDraftFolderId: t[t.length - 1],
          adminPlanType: _$$O2.ORG,
          planId: e.currentUserOrgId
        };
      case 'componentBrowserLibrary':
        {
          if (!getFeatureFlags().dt_component_browser_file_browser) return null;
          let e = t[3];
          if (!e) return null;
          return {
            view: 'componentBrowserLibrary',
            libraryKey: e,
            componentKey: t[5]
          };
        }
      case 'litmus':
        return null;
      case 'resourceHub':
        if (!getFeatureFlags().cmty_resource_hub) return null;
        return {
          view: 'resourceHub'
        };
      default:
        return {
          view: o
        };
    }
  }
  requireHistoryChange(e, t) {
    let r = $$K2.find(t => t === e.view);
    let i = $$K2.find(e => e === t.view);
    if (!r && !i) return !1;
    let a = r && W[r].skipBrowserHistory;
    if (a && a(e)) return !1;
    if (r !== i) return !0;
    if (r && r === i) {
      let n = W[r].areDifferent;
      return !!n && n(e, t);
    }
    debug(!1, 'view selector code which should be unreachable was reached');
  }
  selectedViewToPath(e, t) {
    let r = $$K2.find(t => t === e.view);
    if (!r) return null;
    let i = W[r];
    if (i.isNonUrlAddressable) return null;
    let a = {};
    let o = i.slug;
    e.view === 'folder' && t.user?.drafts_folder_id === e.folderId && (o = 'drafts');
    let l = '';
    l = _$$i(t);
    let p = `/files${l}/${o}`;
    switch (e.view) {
      case 'folder':
        if (o === 'drafts') break;
        p += `/${e.folderId}`;
        let h = this.selectedViewName(e, t);
        h && (p += `/${sy(h)}`);
        break;
      case 'team':
        let g = this.selectedViewName(e, t) || 'Team';
        t.currentTeamId ? p = `/files${l}/all-projects` : (p += `/${e.teamId}/${sy(g)}`, e.teamViewTab && (p += `/${e.teamViewTab}`));
        break;
      case 'allProjects':
        e.isProUpgrade && (a = {
          ...a,
          proUpgrade: e.isProUpgrade
        });
        break;
      case 'componentBrowserLibrary':
        if (!getFeatureFlags().dt_component_browser) break;
        p += `/${e.libraryKey}`;
        e.componentKey ? p += `/component/${e.componentKey}/Component` : p += '/Library';
        break;
      case 'teamAdminConsole':
        e.teamAdminConsoleViewTab && (p += `/${e.teamAdminConsoleViewTab}`);
        e.teamAdminConsoleViewSecondaryTab && (p += `/${e.teamAdminConsoleViewSecondaryTab}`);
        this.appendQueryParams(a, [mL, UC]);
        break;
      case 'addCollaborators':
      case 'eduReview':
        p += `/${e.teamId}`;
        break;
      case 'teamUpgrade':
        e.teamId === null ? p += '/n' : p += `/${e.teamId}`;
        e.teamFlowType && (p += `/${e.teamFlowType}`);
        e.paymentStep && (p += `/${e.paymentStep}`);
        let f = new URLSearchParams(Ay.location.search);
        (e.searchParams || f) && (a = {
          ...a,
          ...(f.get('onCompleteRedirectFileKey') ? {
            onCompleteRedirectFileKey: f.get('onCompleteRedirectFileKey')
          } : {}),
          ...(f.get('onCompleteRedirectNodeId') ? {
            onCompleteRedirectNodeId: f.get('onCompleteRedirectNodeId')
          } : {}),
          ...e.searchParams
        });
        e.billingPeriod && (a = {
          ...a,
          billingPeriod: e.billingPeriod
        });
        e.entryPoint && (a = {
          ...a,
          entryPoint: e.entryPoint
        });
        let y = e.planType || Sc.UNDETERMINED;
        y && (a = {
          ...a,
          planType: y
        });
        break;
      case 'promoReview':
        p += `/${e.teamId}/${e.teamName}`;
        break;
      case 'abandonedDraftFiles':
        p += `/${e.abandonedDraftFolderId}`;
        break;
      case 'orgAdminSettings':
        e.orgAdminSettingsViewTab && (p += `/${e.orgAdminSettingsViewTab}`, e.orgAdminSettingsViewTab === 'members' && (e.orgAdminMembersTabFilters && (a = {
          ...a,
          ...OA(e.orgAdminMembersTabFilters, t.licenseGroups)
        }), e.orgAdminMembersTabSort && (a = {
          ...a,
          ..._$$n(e.orgAdminMembersTabSort)
        })), e.orgAdminSettingsViewSecondaryTab && (p += `/${e.orgAdminSettingsViewSecondaryTab}`), this.appendQueryParams(a, [mL, UC]));
        break;
      case 'licenseGroup':
        p += `/${e.licenseGroupId}/${e.subView}/${e.selectedTab}`;
        e.selectedTab === GroupType.MEMBERS && e.orgAdminMembersTabSort && (a = {
          ...a,
          ..._$$n(e.orgAdminMembersTabSort)
        });
        e.orgAdminOriginTab && (a = {
          ...a,
          [u5]: e.orgAdminOriginTab
        });
        break;
      case 'billingGroupDashboard':
        e.selectedTab === FRequestsStr.ALL_REQUESTS && (p += `/${e.selectedTab}`);
        break;
      case 'workspace':
        switch (e.subView) {
          case V0.ADMIN:
            p += `/${e.workspaceId}/${e.subView}/${e.selectedTab}`;
            e.selectedTab === m2.MEMBERS && e.orgAdminMembersTabSort && (a = {
              ...a,
              ..._$$n(e.orgAdminMembersTabSort)
            });
            break;
          case V0.DIRECTORY:
            p += `/${e.workspaceId ?? UNASSIGNED}/${e.subView}/${e.selectedTab}`;
        }
        break;
      case 'search':
        let b = t.search.parameters;
        switch (a = {
          model_type: b.searchModelType,
          ...(b.query && {
            q: b.query
          }),
          ...(b.fileTypeFilter && {
            file_type: b.fileTypeFilter
          })
        }, b.searchScope) {
          case Rx.ORG:
          case Rx.ORG_GUEST:
          case Rx.PERSONAL:
            break;
          case Rx.COMMUNITY:
            p = '/community/search';
            break;
          default:
            throwTypeError(b.searchScope);
        }
        break;
      case 'user':
        let S = this.selectedViewName(e, t);
        let v = S ? `/${sy(S)}` : '';
        e.userViewTab === _$$o.INTERNAL_PROFILE ? p += `/${e.userId}${v}` : e.userViewTab === _$$o.INTERNAL_PROFILE_POSTS ? p += `/${e.userId}/posts` : e.userViewTab === _$$o.PLUGINS && (p += `/${e.userId}/plugins`);
        break;
      case 'teamFeed':
        e.postUuid && (p += `/${e.postUuid}`);
        e.creatorId && (a = {
          ...a,
          creator_id: e.creatorId
        });
        break;
      case 'recentsAndSharing':
        e.tab && (p += `/${e.tab}`);
        break;
      case 'resourceHub':
        p = Ay.location.pathname;
        new URLSearchParams(Ay.location.search).forEach((e, t) => {
          t !== 'fuid' && (a[t] = e);
        });
        break;
      case 'litmus':
        e.subView === 'feed' && (p += `/${e.projectId}`);
    }
    let A = !i.stripFuidParam || !i.stripFuidParam(e);
    return (t.user && A && (a.fuid = t.user.id), isAppShellEnabled() && (a._app_shell = '1'), Object.keys(a).length !== 0) ? `${p}?${serializeQuery(a)}` : p;
  }
  selectedViewName(e, t) {
    let r = $$K2.find(t => t === e.view);
    if (!r) return null;
    switch (e.view) {
      case 'folder':
        if (getFeatureFlags().folder_page_fix_tab_titles && t.user?.drafts_folder_id === e.folderId) return getI18nString('sidebar.drafts');
        let n = t.folders[e.folderId];
        if (!n) return null;
        return CI(n);
      case 'team':
        return t.teams[e.teamId]?.name ?? getI18nString('view_selectors.file_browser.team');
      case 'teamAdminConsole':
        let i = t.teams[e.teamId]?.name;
        return getI18nString('view_selectors.file_browser.team_admin_console_with_name', {
          adminTeamName: i
        }) ?? getI18nString('view_selectors.file_browser.team_admin_console_generic');
      case 'teamUpgrade':
        if (e.teamFlowType === SC.CREATE_AND_UPGRADE || e.teamId === null) return getI18nString('view_selectors.file_browser.create_new_team');
        let a = t.teams[e.teamId]?.name;
        if (a) {
          return getI18nString('view_selectors.file_browser.team_upgrade_with_name', {
            teamName: a
          });
        }
        return getI18nString('view_selectors.file_browser.team_upgrade_generic');
      case 'search':
        let {
          query
        } = t.search.parameters;
        return query ? getI18nString('view_selectors.file_browser.search_results_with_query', {
          query
        }) : getI18nString('view_selectors.file_browser.search_results_generic');
      case 'user':
        let {
          orgUsersByOrgId,
          currentUserOrgId
        } = t;
        let c = currentUserOrgId && orgUsersByOrgId[currentUserOrgId] || {};
        if (e.userViewTab === _$$o.INTERNAL_PROFILE || e.userViewTab === _$$o.INTERNAL_PROFILE_POSTS) {
          let t = c[e.userId];
          return t ? t.user.handle : '';
        }
        if (e.userViewTab === _$$o.PLUGINS) return getI18nString('view_selectors.file_browser.plugins');
        return 'User';
      case 'licenseGroup':
        return getI18nString('view_selectors.file_browser.billing_admin');
      case 'workspace':
        if (e.subView === V0.ADMIN) return getI18nString('view_selectors.file_browser.workspace_admin');
        if (!e.workspaceId) return getI18nString('view_selectors.file_browser.other_teams');
        return getI18nString('view_selectors.file_browser.workspace');
      default:
        if (W[r].i18nName) return W[r].i18nName();
        return null;
    }
  }
  selectedViewHasMissingResources(e, t) {
    let r = $$K2.find(e => e === t.view);
    return !!r && W[r].hasMissingResource(e, t);
  }
  selectedViewMissingResourceType(e) {
    let t = $$K2.find(t => t === e.view);
    if (t) return W[t].missingResourceType;
  }
  appendQueryParams(e, t) {
    let r = new URLSearchParams(Ay.location.search);
    t.forEach(t => {
      r.has(t) && (e[t] = r.get(t));
    });
  }
}
export const $N = $$V0;
export const $T = $$q1;
export const g5 = $$K2;
export const gb = $$z3;
export const nb = $$H4;
export const nw = $$Y5;
export const pO = $$G6;