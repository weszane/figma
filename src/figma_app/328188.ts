import { useEffect, useMemo, useState } from "react";
import { bUL } from "../figma_app/822011";
import { getFeatureFlags } from "../905/601108";
import { useLatestRef } from "../figma_app/922077";
import { useSubscription } from "../figma_app/288654";
import { r as _$$r } from "../905/520829";
import { serializeQuery } from "../905/634134";
import { K } from "../figma_app/748328";
import { dq } from "../905/845253";
import { FStudentTeamStatusType } from "../figma_app/191312";
import { OrgTeamsInAdminView, OrgTeamView } from "../figma_app/43951";
import { Ef } from "../905/81982";
import { dy } from "../figma_app/967319";
import { ig } from "../figma_app/713624";
import { teamVisibilityEnum } from "../figma_app/630077";
import { UNASSIGNED } from "../905/247093";
import { S } from "../905/335273";
import { R } from "../905/192963";
let T = new Ef([], {
  threshold: .1,
  matchAllTokens: !0,
  tokenize: !1,
  distance: 300,
  keys: [{
    name: "name",
    weight: 1
  }, {
    name: "owner.handle",
    weight: 1
  }, {
    name: "owner.email",
    weight: 1
  }]
});
export function $$I0({
  searchQuery: e,
  filters: t,
  sortConfig: r,
  enabled: i = !0,
  membersMap: a,
  firstPageSize: s,
  isEndUserSurface: o,
  orgId: d,
  isUnassignedTeamsModal: u = !1
}) {
  let {
    optimisticIds,
    addOptimisticIds,
    setServerData
  } = K();
  let {
    subscription,
    status
  } = v({
    searchQuery: e,
    filters: t,
    sortConfig: r,
    enabled: i,
    firstPageSize: s,
    extraTeamIds: optimisticIds,
    isEndUserSurface: o,
    isUnassignedTeamsModal: u,
    orgId: d
  });
  let f = status === _$$r.SUCCESS && !subscription.data?.orgTeams?.isLoadingNextPage;
  let E = f && subscription.data?.orgTeams && subscription.data.orgTeams.hasNextPage() ? () => {
    subscription.data.orgTeams.loadNext(s || 25);
  } : void 0;
  useEffect(() => {
    status === _$$r.SUCCESS && setServerData((subscription.data?.orgTeams || []).filter(e => !!e.teamId).map(e => ({
      id: e.teamId
    })));
  }, [status, subscription.data, setServerData]);
  let b = useMemo(() => subscription.data ? N(subscription.data, a, t) : [], [subscription.data, a, t]);
  let I = useMemo(() => subscription.data ? function (e, t, r, n) {
    let i = e.org;
    let a = (i && i.teamsByIdInAdmin ? (i.teamsByIdInAdmin || []).map(e => e.team) : e.org?.teamsById || []).map(e => x(e, t)).filter(e => A(e, r));
    return n ? (T.set(a), T.search(n)) : a;
  }(subscription.data, a, t, e) : [], [subscription.data, a, t, e]);
  let {
    trackPerformanceEvent
  } = S("teams_table_fetch_performance", "livegraph");
  useEffect(() => {
    trackPerformanceEvent("fetch_end");
  }, [trackPerformanceEvent, b.length]);
  useEffect(() => {
    status === _$$r.FAILURE && trackPerformanceEvent("fetch_error");
  }, [trackPerformanceEvent, status]);
  useEffect(() => {
    trackPerformanceEvent("fetch_start");
  }, [trackPerformanceEvent]);
  return {
    status,
    teams: b,
    optimisticTeams: I,
    fetchMore: E,
    allTeamsFetched: f && !E,
    addOptimisticIds
  };
}
export function $$S1({
  searchQuery: e,
  filters: t,
  sortConfig: r,
  optimisticIds: i,
  firstPageSize: a,
  selectedAll: o,
  isUnassignedTeamsModal: d = !1
}) {
  let [c, u] = useState({});
  let p = useLatestRef(e);
  let _ = useLatestRef(t);
  let h = useLatestRef(r);
  let m = useLatestRef(o);
  let g = p !== e || t?.orgAccessFilter !== _?.orgAccessFilter || t?.discoverabilityFilter !== _?.discoverabilityFilter || t?.orphanedTeamFilter !== _?.orphanedTeamFilter || t?.teamMembershipFilter !== _?.teamMembershipFilter || t?.workspaceFilter !== _?.workspaceFilter || r?.columnName !== h?.columnName || r?.isReversed !== h?.isReversed || !m && o;
  let f = !o;
  useEffect(() => {
    g && u({});
  }, [g]);
  let {
    subscription,
    status
  } = v({
    searchQuery: e,
    filters: t,
    sortConfig: r,
    firstPageSize: a,
    enabled: !f,
    isEndUserSurface: !1,
    isUnassignedTeamsModal: d
  });
  if (useEffect(() => {
    if (status !== _$$r.SUCCESS) return;
    let e = subscription.data ? N(subscription.data, {}, t) : [];
    u(t => {
      let r = g ? {} : {
        ...t
      };
      e.forEach(e => r[e.id] = e);
      return r;
    });
    subscription.data?.orgTeams?.hasNextPage() && subscription.data.orgTeams.loadNext(a || 400);
  }, [status, subscription.data, g, a, t]), f) return {
    status: _$$r.INIT,
    teams: [],
    totalSelectable: null
  };
  let b = status === _$$r.SUCCESS && subscription.data?.orgTeams && !subscription.data.orgTeams.hasNextPage();
  let T = null;
  b && (T = Object.keys(c).length + (i || []).filter(e => !c[e]).length);
  return {
    status: b ? _$$r.SUCCESS : status === _$$r.SUCCESS ? _$$r.LOADING : status,
    teams: Object.values(c),
    totalSelectable: T
  };
}
function v({
  searchQuery: e,
  filters: t,
  sortConfig: r,
  enabled: n = !0,
  firstPageSize: i,
  extraTeamIds: s = [],
  isEndUserSurface: d,
  isUnassignedTeamsModal: c,
  orgId: p
}) {
  let h = !d && getFeatureFlags().org_teams_in_admin_lg_view && !c;
  let m = dq();
  let g = useSubscription(h ? OrgTeamsInAdminView : OrgTeamView, {
    orgId: p ?? m,
    firstPageSize: i || 25,
    queryParams: $$C2(e, t, r, d),
    extraTeamIds: s
  }, {
    enabled: n
  });
  let f = _$$r.LOADING;
  "loaded" === g.status ? f = _$$r.SUCCESS : "errors" === g.status && (f = _$$r.FAILURE);
  return {
    subscription: g,
    status: f
  };
}
function A(e, t) {
  return !(t?.orphanedTeamFilter && e.owner || t?.teamMembershipFilter && t.teamMembershipFilter !== e.userTeamMembership || t?.orgAccessFilter && t.orgAccessFilter !== e.org_access || t?.discoverabilityFilter && (t.discoverabilityFilter === teamVisibilityEnum.ORG_BROWSABLE && e.org_access !== bUL.PRIVATE || t.discoverabilityFilter === teamVisibilityEnum.HIDDEN && e.org_access !== bUL.SECRET) || t?.workspaceFilter && (t.workspaceFilter === UNASSIGNED && null !== e.workspace_id || t.workspaceFilter !== UNASSIGNED && t.workspaceFilter !== e.workspace_id));
}
function x(e, t, r) {
  let n = t[e.id] ?? 0;
  let i = e.ownerRole?.user ?? null;
  return {
    ...e,
    id: e.id,
    created_at: e.createdAt?.toISOString(),
    img_url: e.imgUrl || void 0,
    org_id: e.orgId,
    name: e.name,
    description: e.description || "",
    hidden: e.hidden,
    org_browsable: e.orgBrowsable,
    license_group_id: e.licenseGroupId,
    workspace_id: e.workspaceId,
    org_access: e.orgAccess || null,
    projects: Number(e.projectsCount) || 0,
    editors: Number(e.editorsCount) || 0,
    restrictions_list: e.restrictionsList || null,
    subscription: e.subscription || null,
    subscription_raw: e._subscriptionRaw || null,
    stripe_customer_id: e.stripeCustomerId || null,
    student_team_at: e.studentTeamAt?.toISOString() || null,
    student_team_state: e.studentTeamState || FStudentTeamStatusType.STUDENT_TEAM_NULL,
    student_autoverifying_team_at: e.studentAutoverifyingTeamAt?.toISOString() || null,
    student_team: !!e.studentTeamAt,
    pro_team: !1,
    org_team: !0,
    starter_team: e.isStarterTeam || !1,
    grace_period_end: e.gracePeriodEnd?.toISOString() || null,
    grace_period_type: e.gracePeriodType || null,
    last_upgraded_at: null,
    deleted_at: e.deletedAt?.toISOString() || null,
    license_group: null,
    default_permission: e.defaultPermission,
    vat_gst_id: e.vatGstId || void 0,
    tax_id_verification_status: e.taxIdVerificationStatus || void 0,
    ai_features_disabled: !!e.aiFeaturesDisabledAt,
    legal_name: e.legalName || null,
    sharing_audience_control: e.sharingAudienceControlComputed || void 0,
    orphaned: !i,
    member_count: "number" == typeof r ? Math.max(r + n, 0) : void 0,
    owner: i && {
      id: i.id,
      name: i.name || void 0,
      handle: i.handle || "",
      img_url: i.imgUrl || "",
      email: i.email || void 0,
      description: i.description,
      org_id: e.orgId || void 0
    },
    experiment_assignments: [],
    userTeamMembership: null === e.roleOnObjectTeamForUser ? ig.NOT_JOINED : ig.JOINED,
    sanctioned_at: e.sanctionedAt?.toISOString() || null
  };
}
function N(e, t, r) {
  return (e.orgTeams || []).filter(e => !!e.team).map(e => x(e.team, t, e.memberCount ? Number(e.memberCount) : null)).filter(e => A(e, r));
}
export function $$C2(e, t, r, n) {
  let i = R(t?.orgAccessFilter, t?.discoverabilityFilter);
  return String(serializeQuery({
    ...(r && {
      sort_by: r.columnName
    }),
    ...(r && {
      order_by: r.isReversed ? dy.DESC : dy.ASC
    }),
    ...(e && {
      search_query: e
    }),
    ...(i && {
      org_access: i
    }),
    ...(t?.orphanedTeamFilter && {
      teams_without_owners: t.orphanedTeamFilter
    }),
    ...(t?.teamMembershipFilter && {
      member_of_filter: null !== t.teamMembershipFilter
    }),
    ...(t?.teamMembershipFilter && {
      teams_member_of: t.teamMembershipFilter === ig.JOINED
    }),
    ...(t?.workspaceFilter && {
      workspace_id: t.workspaceFilter
    }),
    ...(n && {
      is_end_user_surface: n
    })
  }));
}
export const Ki = $$I0;
export const _q = $$S1;
export const f9 = $$C2;