import { useSelector } from "../vendor/514228";
import { filterNotNullish } from "../figma_app/656233";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { xx } from "../figma_app/815945";
import { subscribeAndAwaitData } from "../905/553831";
import { Wk, oA } from "../905/723791";
import { getI18nString } from "../905/303541";
import { DQ, Pw } from "../figma_app/121751";
import { HZ, A5 } from "../figma_app/391338";
import { FPlanLimitationType, FFileType, FPaymentHealthStatusType } from "../figma_app/191312";
import { Aqu, yU5 } from "../figma_app/43951";
import { XX, WW } from "../figma_app/345997";
import { canAdminTeam } from "../figma_app/642025";
import { t as _$$t2 } from "../905/504360";
import { e6 } from "../905/557142";
import { d as _$$d } from "../figma_app/135698";
import { DashboardSections, MemberSections, BillingSections } from "../905/548208";
import { D as _$$D } from "../905/347702";
import { ye } from "../figma_app/528509";
import { Z } from "../905/515860";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { M4 } from "../905/713695";
export async function $$x10(e) {
  let t = [];
  let r = {};
  await Promise.all(e.map(async e => {
    let n = await M4.fetchFile(e);
    if (!n?.trashed_at || !n?.team_id) return;
    t.push(n);
    let i = (await subscribeAndAwaitData(Aqu, {
      teamId: n.team_id
    })).team;
    i?.id && (r[i.id] = i);
  }));
  return await w(t, r);
}
export let $$N3 = Object.freeze({
  designFileCount: 0,
  whiteboardFileCount: 0,
  slideFileCount: "0",
  sitesFileCount: "0",
  totalFileCount: Wk(0)
});
export async function $$C19(e) {
  let t = [];
  let r = {};
  await Promise.all(e.map(async e => {
    let n = {
      ...(await M4.fetchFile(e.key)),
      folder_id: e.folderId
    };
    if (n && t.push(n), !e.folderId) return;
    let i = await subscribeAndAwaitData(yU5, {
      projectId: e.folderId
    });
    let a = i.project?.team;
    a?.id && (r[a.id] = a);
  }));
  return await w(t, r);
}
let w = _$$D(async (e, t) => {
  let r = {};
  let n = {};
  for (let t of e) {
    let {
      folder_id,
      team_id,
      editor_type
    } = t;
    if (!folder_id || !team_id || !editor_type) continue;
    let s = n[folder_id] ?? (await M4.fetchFolder(folder_id));
    n[folder_id] = s;
    r[team_id] = r[team_id] ?? {};
    r[team_id][editor_type] = r[team_id][editor_type] ?? {
      draft: 0,
      nonDraft: 0
    };
    ye(s) ? r[team_id][editor_type].draft += 1 : r[team_id][editor_type].nonDraft += 1;
  }
  let i = Object.entries(r).find(([e, r]) => {
    let n = t[e];
    return !!n && Object.entries(r).some(([e, t]) => !$$M14(n, {
      type: 3,
      editorType: e,
      teamFileCounts: n.teamFileCounts || $$N3,
      nNonDraftFilesToAdd: t.nonDraft
    }));
  });
  return i?.[0];
});
export function $$O0(e) {
  return !!(e.team_role || (e?.edit_roles?.design_files?.length || 0) > 0 || (e?.edit_roles?.whiteboard_files?.length || 0) > 0 || (e?.edit_roles?.folders?.length || 0) > 0 || (e?.view_roles?.file_count || 0) > 0 || (e?.view_roles?.folder_count || 0) > 0);
}
let $$R26 = e => !!e?.restrictions_list?.includes(FPlanLimitationType.FILES_LIMITED_LEGACY);
let $$L16 = e => !!e?.restrictions_list?.includes(FPlanLimitationType.WHITEBOARD_FILES_LIMITED_BETA);
var $$P25 = (e => (e[e.ADD_PROJECT = 0] = "ADD_PROJECT", e[e.ADD_EDITOR = 1] = "ADD_EDITOR", e[e.ADD_FILE = 2] = "ADD_FILE", e[e.ADD_N_FILES = 3] = "ADD_N_FILES", e))($$P25 || {});
var D = (e => (e.NO_RESTRICTIONS = "noRestrictions", e.FULLY_RESTRICTED = "fullyRestricted", e.FILE_COUNT_LIMIT = "fileCountLimit", e))(D || {});
function k(e) {
  switch (e) {
    case FFileType.DESIGN:
      return {
        starterRestrictionType: "fileCountLimit",
        teamRestrictions: new Set([FPlanLimitationType.FILES_LIMITED_LEGACY, FPlanLimitationType.FILES_LIMITED, FPlanLimitationType.GLOBAL_FILES_LIMITED, FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY]),
        teamFileCountsKey: "designFileCount"
      };
    case FFileType.WHITEBOARD:
      return {
        starterRestrictionType: "fileCountLimit",
        teamRestrictions: new Set([FPlanLimitationType.WHITEBOARD_FILES_LIMITED_BETA, FPlanLimitationType.WHITEBOARD_FILES_LIMITED, FPlanLimitationType.GLOBAL_FILES_LIMITED, FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY]),
        teamFileCountsKey: "whiteboardFileCount"
      };
    case FFileType.SLIDES:
      return {
        starterRestrictionType: "fileCountLimit",
        teamRestrictions: new Set([FPlanLimitationType.SLIDE_FILES_LIMITED_BETA, FPlanLimitationType.SLIDE_FILES_LIMITED, FPlanLimitationType.GLOBAL_FILES_LIMITED, FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY]),
        teamFileCountsKey: "slideFileCount"
      };
    case FFileType.SITES:
      if (!getFeatureFlags().sts_starter_enabled) return {
        starterRestrictionType: "fullyRestricted"
      };
      if (getFeatureFlags().sites_design_starter_combined_file_limit) return {
        starterRestrictionType: "fileCountLimit",
        teamRestrictions: new Set([FPlanLimitationType.FILES_LIMITED_LEGACY, FPlanLimitationType.FILES_LIMITED, FPlanLimitationType.GLOBAL_FILES_LIMITED, FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY]),
        teamFileCountsKey: "sitesFileCount"
      };
      return {
        starterRestrictionType: "fileCountLimit",
        teamRestrictions: new Set([FPlanLimitationType.GLOBAL_FILES_LIMITED, FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY]),
        teamFileCountsKey: "totalFileCount"
      };
    case FFileType.COOPER:
      return getFeatureFlags().cooper ? {
        starterRestrictionType: "fileCountLimit",
        teamRestrictions: new Set([FPlanLimitationType.GLOBAL_FILES_LIMITED, FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY]),
        teamFileCountsKey: "totalFileCount"
      } : {
        starterRestrictionType: "fullyRestricted"
      };
    case FFileType.FIGMAKE:
      return getFeatureFlags().bake_starter_limit ? {
        starterRestrictionType: "fileCountLimit",
        teamRestrictions: new Set([FPlanLimitationType.GLOBAL_FILES_LIMITED, FPlanLimitationType.GLOBAL_FILES_LIMITED_LEGACY]),
        teamFileCountsKey: "totalFileCount"
      } : {
        starterRestrictionType: "fullyRestricted"
      };
    default:
      throwTypeError(e);
  }
}
export function $$M14(e, t) {
  if (!e || e.restrictionsList?.includes(FPlanLimitationType.LOCKED)) return !1;
  if (XX(e)) return !0;
  switch (t.type) {
    case 0:
      return !e.restrictionsList?.includes(FPlanLimitationType.PROJECTS_LIMITED) && !e.restrictionsList?.includes(FPlanLimitationType.PROJECTS_LIMITED_LEGACY);
    case 1:
      return !e.restrictionsList?.includes(FPlanLimitationType.EDITORS_LIMITED);
    case 2:
      {
        let r = k(t.editorType);
        switch (r.starterRestrictionType) {
          case "fullyRestricted":
            return !1;
          case "noRestrictions":
            return !0;
          case "fileCountLimit":
            if (t.isDestinationTeamDrafts) return !0;
            if (e.restrictionsList?.some(e => r.teamRestrictions.has(e)) || FPlanLimitationType.GLOBAL_FILES_MUST_CHECK && e.restrictionsList?.includes(FPlanLimitationType.GLOBAL_FILES_MUST_CHECK) && t.teamFileCounts && (oA(t.teamFileCounts.totalFileCount) ?? 0) >= WW) return !1;
            if (t.teamFileCounts) {
              let e = Number(t.teamFileCounts[r.teamFileCountsKey]);
              if (getFeatureFlags().sites_design_starter_combined_file_limit && (t.editorType === FFileType.DESIGN ? e += Number(t.teamFileCounts.sitesFileCount ?? 0) : t.editorType === FFileType.SITES && (e += Number(t.teamFileCounts.designFileCount ?? 0))), e >= WW) return !1;
            }
            return !0;
          default:
            throwTypeError(r);
        }
      }
    case 3:
      {
        let r = k(t.editorType);
        switch (r.starterRestrictionType) {
          case "fullyRestricted":
            return !1;
          case "noRestrictions":
            return !0;
          case "fileCountLimit":
            {
              if (0 === t.nNonDraftFilesToAdd) return !0;
              if (e.restrictionsList?.some(e => r.teamRestrictions.has(e)) || FPlanLimitationType.GLOBAL_FILES_MUST_CHECK && e.restrictionsList?.includes(FPlanLimitationType.GLOBAL_FILES_MUST_CHECK) && t.teamFileCounts && (oA(t.teamFileCounts.totalFileCount) ?? 0) >= WW) return !1;
              let n = Number(t.teamFileCounts[r.teamFileCountsKey]);
              if (getFeatureFlags().sites_design_starter_combined_file_limit && (t.editorType === FFileType.DESIGN ? n += Number(t.teamFileCounts.sitesFileCount ?? 0) : t.editorType === FFileType.SITES && (n += Number(t.teamFileCounts.designFileCount ?? 0))), n + t.nNonDraftFilesToAdd > WW) return !1;
              return !0;
            }
          default:
            throwTypeError(r);
        }
      }
    default:
      throwTypeError(t);
  }
}
export function $$F24(e, t) {
  return $$M14({
    subscription: e.subscription,
    restrictionsList: e.restrictions_list || [],
    studentTeamAt: e.student_team ? new Date() : null,
    gracePeriodEnd: e.grace_period_end ? new Date(e.grace_period_end) : null
  }, t);
}
export function $$j5(e, t) {
  if (!e.teams || !e.authedTeamsById) return null;
  let r = Object.values(e.teams);
  let n = Object.values(e.authedTeamsById);
  if (HZ({
    oldValue: 1 === r.length && canAdminTeam(r[0].id, e),
    newValue: t?.canAdmin,
    label: A5.gen0OnboardingOnlyTeam.canAdmin,
    enableFullRead: DQ(Pw.GROUP_7),
    maxReports: 1,
    contextArgs: {
      currentTeamId: t?.id,
      userId: e.user?.id,
      teams: String(r.map(e => e.id))
    }
  })) return HZ({
    oldValue: r[0],
    newValue: r.find(e => e.id === t?.id) || null,
    label: A5.gen0OnboardingOnlyTeam.currentTeamFromState,
    enableFullRead: DQ(Pw.GROUP_7),
    maxReports: 1,
    contextArgs: {
      currentTeamId: t?.id,
      userId: e.user?.id,
      teams: String(r.map(e => e.id))
    }
  });
  if (0 === r.length && 1 === n.length) {
    let t = e.user?.id;
    if (t) return e.teamAdminRolesForAuthedUsers && e.teamAdminRolesForAuthedUsers[t].find(e => e.team_id === n[0].id) ? n[0] : null;
  }
  return null;
}
export function $$U9(e) {
  return !!e.student_team || !!e && !!e.subscription && [FPaymentHealthStatusType.OK, FPaymentHealthStatusType.GRACE_PERIOD].includes(e.subscription);
}
export function $$B12(e) {
  let t = e.user?.id;
  let r = e.openFile?.key;
  if (!t || !r) return null;
  let n = e.fileByKey?.[r]?.team_id;
  return n ? e.teamUserByTeamId?.[n]?.[t] : null;
}
export function $$G11(e) {
  switch (e) {
    case _$$d.NAME:
      return getI18nString("team_view.team_members_table_column.name");
    case _$$d.ACTIVE_AT:
      return getI18nString("team_view.team_members_table_column.active_at");
    case _$$d.DESIGN_PAID_STATUS:
      return getI18nString("team_view.team_members_table_column.design_role.seat_rename");
    case _$$d.FIGJAM_PAID_STATUS:
      return getI18nString("team_view.team_members_table_column.figjam_role.seat_rename");
    case _$$d.BILLING_INTERVAL:
      return getI18nString("team_view.team_members_table_column.billing_interval");
  }
}
export function $$V23(e, t) {
  switch (e) {
    case DashboardSections.DASHBOARD:
      return getI18nString("team_view.toolbar.dashboard");
    case DashboardSections.MEMBERS:
      return getI18nString("team_view.toolbar.members");
    case DashboardSections.DRAFTS:
      return getI18nString("team_view.toolbar.drafts");
    case DashboardSections.CONTENT:
      switch (t) {
        case MemberSections.ABANDONED_DRAFTS:
          return getI18nString("team_view.toolbar.drafts");
        case MemberSections.CONNECTED_PROJECTS:
          return getI18nString("team_view.toolbar.connected_projects");
        default:
          return getI18nString("team_view.toolbar.content");
      }
    case DashboardSections.SETTINGS:
      return getI18nString("team_view.toolbar.settings");
    case DashboardSections.BILLING:
      switch (t) {
        case BillingSections.OVERVIEW:
          return getI18nString("team_view.toolbar.billing.overview");
        case BillingSections.INVOICES:
          return getI18nString("team_view.toolbar.billing.invoices");
        default:
          return getI18nString("team_view.toolbar.billing");
      }
    default:
      throwTypeError(e);
  }
}
let H = new RegExp(/[https?:?\/\/]?[a-z.]*figma[\-.\da-z:]*\/files\/([A-z0-9]*)\/team\/(\d+)/);
let z = new RegExp(/[https?:?\/\/]?[a-z.]*figma[\-.\da-z:]*\/files\/team\/(\d+)/);
export function $$W7(e) {
  return H.test(e);
}
export function $$K1(e) {
  return z.test(e);
}
export function $$Y4(e) {
  let t = new URL(e).pathname.match("team/([A-z0-9]*)");
  return t ? t[1] : null;
}
export function $$$15() {
  return useSelector(e => Z(e)) || "";
}
export function $$X21() {
  return useSelector(e => {
    let t = Z(e);
    return "" === t || null == e.teams ? null : e.teams[t];
  }) || null;
}
export let $$q8 = createReduxSubscriptionAtomWithState(e => e.teams[Z(e)] || null);
export function $$J6(e) {
  return e.teams[Z(e)] || null;
}
export function $$Z13(e, t, r) {
  return e ? Object.keys(_$$t2(t.byTeamId, e.id)).filter(e => r[e]) : [];
}
export let $$Q17 = xx(function (e, t, r) {
  return e ? $$Z13(e, t, r).map(e => r[e]) : [];
});
export function $$ee20(e, t) {
  let r = [];
  let n = {};
  for (let t of e) t && (n[t.id] = t, r.push(t.id));
  e.sort((e, r) => {
    let n = t.indexOf(e.id);
    let i = t.indexOf(r.id);
    return -1 === n && -1 === i ? e.createdAt < r.createdAt ? 1 : -1 : n - i;
  });
  return e.map(e => e.id);
}
export function $$et22(e, t) {
  let r = e.byTeamId[t] || {};
  return filterNotNullish(Object.keys(r).map(e => {
    let t = r[e];
    return t ? !0 === t.pending ? null : t.user : null;
  }));
}
export function $$er2(e, t, r) {
  let n = 0;
  let i = {};
  for (let a of (t.forEach(e => i[e.id] = e), Object.keys(r))) {
    let t = i[a];
    let s = r[a][e];
    if (t && s) {
      if (t.pro_team || t.org_access || t.student_team) return !1;
      s.level === e6.OWNER && n++;
    }
  }
  return n > 1;
}
export function $$en18(e) {
  return !!e && !!e.match(/^[0-9]+$/);
}
export const BU = $$O0;
export const Cl = $$K1;
export const Ct = $$er2;
export const Cz = $$N3;
export const Eq = $$Y4;
export const FQ = $$j5;
export const H7 = $$J6;
export const HE = $$W7;
export const Me = $$q8;
export const PS = $$U9;
export const R5 = $$x10;
export const Rq = $$G11;
export const UQ = $$B12;
export const _L = $$Z13;
export const aW = $$M14;
export const cD = $$$15;
export const cU = $$L16;
export const dE = $$Q17;
export const jv = $$en18;
export const mx = $$C19;
export const n$ = $$ee20;
export const ol = $$X21;
export const pG = $$et22;
export const pe = $$V23;
export const rR = $$F24;
export const sK = $$P25;
export const zs = $$R26;