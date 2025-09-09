import { useMemo, useState, useCallback, useEffect, useRef } from "react";
import { useSelector, useStore } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { lQ } from "../905/934246";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import { A as _$$A } from "../vendor/90566";
import { selectWithShallowEqual } from "../905/103090";
import { Rs } from "../figma_app/288654";
import { IT } from "../figma_app/566371";
import { ye, Gi as _$$Gi } from "../figma_app/528509";
import { q5 } from "../figma_app/516028";
import { sZ } from "../905/845253";
import { FOrganizationLevelType, FPlanNameType, FFileType } from "../figma_app/191312";
import { PaginatedTemplatesByOrgWorkspace, PaginatedTemplatesByOrg, PaginatedTemplatesByTeam, BrowseTemplatesView, PaginatedTemplatesSearch } from "../figma_app/43951";
import { M4 } from "../905/713695";
import { G7 } from "../figma_app/336853";
import { D6, T5, X$ } from "../figma_app/465071";
import { AC, tz } from "../figma_app/803787";
import { ol } from "../figma_app/598018";
import { ke } from "../figma_app/841351";
import { n as _$$n } from "../905/79930";
import { s as _$$s } from "../905/82276";
import { UNASSIGNED } from "../905/247093";
import { q as _$$q } from "../figma_app/446378";
import { lg } from "../figma_app/976749";
import { ar } from "../figma_app/741211";
import { j } from "../905/521149";
var $$R13 = (e => (e.NOT_ENABLED = "NOT_ENABLED", e.CAN_PUBLISH = "CAN_PUBLISH", e.FILE_IN_DRAFTS = "FILE_IN_DRAFTS", e.FILE_IN_DRAFTS_CANNOT_MOVE = "FILE_IN_DRAFTS_CANNOT_MOVE", e.DISABLED_IN_SETTINGS = "DISABLED_IN_SETTINGS", e.CANNOT_PUBLISH = "CANNOT_PUBLISH", e))($$R13 || {});
function L() {
  let e = lg();
  let t = D6("useCustomTemplatesAllowed").unwrapOr(null);
  let r = T5("useCustomTemplatesAllowed").unwrapOr(null);
  return useMemo(() => r?.key.type === FOrganizationLevelType.ORG ? ar(!!r?.customTemplatesAllowed, !!t) : r?.key.type === FOrganizationLevelType.TEAM && !!r && !!e && r.tier !== FPlanNameType.STARTER && (e === FFileType.SLIDES || (e === FFileType.WHITEBOARD ? !!getFeatureFlags().pro_templates_figjam : e === FFileType.COOPER || e === FFileType.FIGMAKE)), [t, r, e]);
}
export function $$P2() {
  let e = sZ();
  let t = ol();
  if (L()) {
    if (e) return {
      type: "org",
      entity: e,
      name: e.name
    };
    if (t) return {
      type: "team",
      entity: t,
      name: t.name
    };
  }
  return null;
}
export function $$D18() {
  return !!$$P2();
}
export function $$k15(e) {
  let t = L();
  return !!e && t;
}
export function $$M3() {
  let e = q5();
  let t = function () {
    let e = $$P2();
    let t = q5();
    return useSelector(r => !!t && !!t.folderId && (e?.type === "team" ? ye(r.folders[t.folderId]) : e?.type === "org" && _$$Gi(r.folders[t.folderId])));
  }();
  let r = X$("usePublishTemplateStatus").unwrapOr(null);
  let n = r?.key.type;
  let a = L();
  let s = !!e?.canPublishTemplate;
  let o = !!e?.canEdit;
  return (n === FOrganizationLevelType.ORG || a) && e?.editorType !== FFileType.DESIGN ? s ? "CAN_PUBLISH" : o ? n !== FOrganizationLevelType.ORG || a ? t ? e?.canDelete ? "FILE_IN_DRAFTS" : "FILE_IN_DRAFTS_CANNOT_MOVE" : "CANNOT_PUBLISH" : "DISABLED_IN_SETTINGS" : "CANNOT_PUBLISH" : "NOT_ENABLED";
}
export function $$F4(e) {
  switch (e) {
    case "CAN_PUBLISH":
    case "FILE_IN_DRAFTS":
      return !0;
    case "DISABLED_IN_SETTINGS":
    case "NOT_ENABLED":
    case "CANNOT_PUBLISH":
    case "FILE_IN_DRAFTS_CANNOT_MOVE":
      return !1;
    default:
      throwTypeError(e);
  }
}
export function $$j8({
  fileCanEdit: e,
  editor_type: t,
  team_id: r,
  state: n
}) {
  let i = n.currentUserOrgId && n.orgById[n.currentUserOrgId];
  return !!(i && e && t === FFileType.WHITEBOARD && i.are_custom_templates_allowed && r);
}
export function $$U12() {
  let e = q5();
  let t = $$B0(e);
  return e?.template && t ? e?.template : null;
}
export function $$B0(e) {
  let t = $$k15(e);
  return !!e && !!e.template && !e.template.unpublishedAt && t;
}
export function $$G16(e) {
  return e.id === _$$s;
}
export function $$V1(e, t) {
  let [r, i] = useState(null);
  let [a, s] = useState(!1);
  let [l, c] = useState([]);
  let [u, p] = useState([]);
  let [_, h] = useState(0);
  let [m, g] = useState(!0);
  let f = G7(e);
  let E = getFeatureFlags().pro_templates_lg;
  let b = useCallback(({
    ids: r,
    myTeamsOnly: n,
    offset: i = 0
  }) => {
    e && !E && _$$q.getFilteredTeamTemplates({
      orgId: e.id,
      from: i,
      size: 5,
      template_type: t,
      ...(f ? {
        my_teams_only: n,
        workspace_ids: r
      } : {
        team_ids: r
      })
    }).then(({
      data: e
    }) => {
      p("filterable_workspaces" in e.meta ? e.meta.filterable_workspaces : e.meta.filterable_teams);
      c(t => 0 === i ? e.meta.templates_by_team : [...t, ...e.meta.templates_by_team]);
      h(e.meta.templates_by_team.length);
      g(!1);
    });
  }, [e, t, f, E]);
  useEffect(() => {
    b({
      ids: null,
      myTeamsOnly: !1
    });
  }, [b]);
  let T = _$$A(b, 300);
  let I = useCallback(t => {
    e && (S.current = {}, g(!0), i(t.ids), s(t.myTeamsOnly), T(t));
  }, [e, T]);
  let S = useRef({});
  let A = useCallback(() => {
    5 === _ && b({
      ids: r,
      myTeamsOnly: a,
      offset: l.length
    });
  }, [r, a, l, _, b]);
  let x = useCallback(r => {
    if (E) return;
    let n = l.find(e => e.team_id === r);
    if (e?.id && n && n.templates.length < n.total) {
      let i = n.templates.length;
      if ((S.current[r] || 0) >= i) return;
      S.current[r] = i;
      _$$q.getTeamBrowsePaginated({
        orgId: e.id,
        teamId: r,
        from: i,
        size: 10,
        templateType: t
      }).then(({
        data: e
      }) => {
        c(t => t.map(t => t.team_id === r ? {
          ...t,
          templates: [...t.templates, ...e.meta.templates]
        } : t));
      });
    }
  }, [e?.id, l, t, E]);
  return {
    selectedTeamOrWorkspaceOrLicenseGroupIds: r,
    isMyTeamsOnly: a,
    onFilterChange: I,
    userTeamOrWorkspaceIds: X(e),
    templatesByTeam: l.map(e => {
      let t = e.templates.map(e => ({
        type: _$$n.TeamTemplate,
        template: e
      }));
      return {
        teamId: e.team_id,
        teamName: e.team_name,
        workspaceName: e.workspace_name,
        workspaceId: null,
        totalTemplatesByTeam: e.total,
        templates: t
      };
    }),
    filterOptions: u,
    requestLoadMore: A,
    requestLoadMoreForTeam: x,
    isLoadingTeamTemplates: m
  };
}
function H(e) {
  if (!e.template) return null;
  let t = e.template.file;
  return {
    ...e.template,
    libraryKey: e.libraryKeyToFile?.libraryKey,
    signedThumbnailUrl: e.template.hasCustomThumbnail ? e.template.thumbnailUrl : t.signedThumbnailUrl,
    checkpointClientMeta: t.checkpointClientMeta,
    editorType: t.editorType
  };
}
export function $$z5({
  areWorkspacesEnabled: e,
  editorType: t,
  numTemplatesPerTeam: r,
  revalidateOnMount: i
}) {
  let a = sZ();
  let s = a?.id ?? null;
  let [o, l] = useState(null);
  let [c, u] = useState(!1);
  let {
    teamTemplates,
    requestLoadMoreForOrg,
    isLoading
  } = $$W11({
    orgId: s,
    areWorkspacesEnabled: e,
    editorType: t,
    numTemplatesPerTeam: r,
    filterByIds: o ? o.map(e => e === UNASSIGNED ? "0" : e) : null,
    includeMyTeamsOnly: c,
    revalidateOnMount: i,
    pageSize: 20
  });
  let [g, f] = useState([]);
  let [E, y] = useState([]);
  useEffect(() => {
    e || y(e => {
      let t = [];
      let r = new Set();
      let n = new Set(e.map(e => e.id));
      teamTemplates.forEach(e => {
        !(n.has(e.teamId) || r.has(e.teamId)) && e.teamId && e.teamName && (t.push({
          id: e.teamId,
          name: e.teamName
        }), r.add(e.teamId));
      });
      return [...e, ...t];
    });
  }, [e, teamTemplates]);
  useEffect(() => {
    e && f(e => {
      let t = [];
      let r = new Set();
      let n = new Set(e.map(e => e.id));
      teamTemplates.forEach(e => {
        let i = e.workspaceId ?? UNASSIGNED;
        n.has(i) || r.has(i) || (i === UNASSIGNED ? t.push({
          id: UNASSIGNED
        }) : e.workspaceId && e.workspaceName && t.push({
          id: e.workspaceId,
          name: e.workspaceName
        }), r.add(i));
      });
      return [...e, ...t];
    });
  }, [e, teamTemplates]);
  let b = useMemo(() => Array.from(e ? g.map(e => e.id) : E.map(e => e.id)), [e, E, g]);
  let T = e ? g : E;
  let I = useCallback(e => {
    l(e.ids);
    u(e.myTeamsOnly);
  }, []);
  let S = _$$A(I, 300);
  return {
    teamTemplates,
    requestLoadMoreForOrg,
    isLoading,
    selectedIds: o || b,
    userTeamOrWorkspaceIds: X(a),
    isMyTeamsOnly: c,
    filterOptions: T,
    onFilterChange: S
  };
}
export function $$W11({
  orgId: e,
  areWorkspacesEnabled: t,
  editorType: r,
  numTemplatesPerTeam: i,
  pageSize: a = 10,
  revalidateOnMount: s = !0,
  filterByIds: l,
  includeMyTeamsOnly: d = !1,
  enabled: c = !0
}) {
  let u = getFeatureFlags().pro_templates_lg && !!e && c;
  let _ = !!e && t;
  let [h] = IT(PaginatedTemplatesByOrgWorkspace({
    orgId: e,
    editorType: r,
    filterByWorkspaceIds: l,
    includeMyTeamsOnly: d,
    numTemplatesPerTeam: i,
    firstPageSize: a
  }), {
    enabled: u && _,
    revalidateOnMount: s
  });
  let [m] = IT(PaginatedTemplatesByOrg({
    orgId: e,
    editorType: r,
    filterByTeamIds: l,
    numTemplatesPerTeam: i,
    firstPageSize: a
  }), {
    enabled: u && !_,
    revalidateOnMount: s
  });
  let {
    teamTemplates,
    isDoneInitialProcessing
  } = function (e) {
    let [t, r] = useState([]);
    let [i, a] = useState([]);
    let [s, o] = useState(!1);
    useEffect(() => {
      if (!e) return;
      o(!0);
      let n = "templatesByOrg" in e ? e.templatesByOrg : e.templatesByOrgWorkspaces;
      if (!n) return;
      let s = n.filter(e => !t.includes(e.teamId));
      if (0 === s.length) return;
      let l = [];
      s.sort((e, t) => e.sortOrder - t.sortOrder).map(e => {
        let t = H(e);
        if (!t) return;
        let r = e.teamLimitedInfo?.status === "loaded" ? e.teamLimitedInfo.data?.name : e.team?.name;
        if (!r) return;
        let n = {
          type: _$$n.TeamTemplateLg,
          template: t
        };
        let a = {
          teamId: e.teamId,
          teamName: r,
          workspaceName: e.team?.workspace?.name,
          workspaceId: e.team?.workspace?.id,
          totalTemplatesByTeam: e.totalTemplatesByTeam,
          templates: [n]
        };
        let s = i.find(e => e.teamId === a.teamId);
        s ? s.templates.push(n) : i.push(a);
      });
      let d = s.map(e => e.teamId);
      a(e => [...e, ...l]);
      r(e => [...e, ...d]);
    }, [e, i, t]);
    return {
      teamTemplates: i,
      isDoneInitialProcessing: s
    };
  }(t ? h?.data : m?.data);
  return {
    requestLoadMoreForOrg: useCallback(() => {
      if (t && h?.data) {
        let e = h.data;
        e && e.templatesByOrgWorkspaces && e.templatesByOrgWorkspaces.hasNextPage() && !e.templatesByOrgWorkspaces.isLoadingNextPage && e.templatesByOrgWorkspaces.loadNext(a);
      } else if (m?.data) {
        let e = m.data;
        e && e.templatesByOrg && e.templatesByOrg.hasNextPage() && !e.templatesByOrg.isLoadingNextPage && e.templatesByOrg.loadNext(a);
      }
    }, [t, m.data, h.data, a]),
    teamTemplates,
    isLoading: ("loading" === (_ ? h.status : m.status) || !isDoneInitialProcessing) && c
  };
}
export var $$K6 = (e => (e.ORG_PLUS = "org_plus", e.PRO_OR_STUDENT_TEAM = "pro_or_student_team", e))($$K6 || {});
export function $$Y7({
  plan: e,
  areWorkspacesEnabled: t,
  editorType: r,
  numTemplatesPerTeam: n,
  pageSize: i = 10,
  revalidateOnMount: a = !0,
  filterByIds: o,
  includeMyTeamsOnly: l = !1
}) {
  let d = e.key.parentId;
  let c = j() && !!d;
  let u = c && e.type === FOrganizationLevelType.ORG;
  let p = c && e.type === FOrganizationLevelType.TEAM;
  let {
    teamTemplates,
    isLoading,
    requestLoadMoreForOrg
  } = $$W11({
    orgId: d ?? "",
    areWorkspacesEnabled: t,
    editorType: r,
    numTemplatesPerTeam: n,
    pageSize: i,
    revalidateOnMount: a,
    filterByIds: o,
    includeMyTeamsOnly: l,
    enabled: u
  });
  let {
    templatesByTeam,
    isLoading: _isLoading,
    requestLoadMoreForTeam
  } = $$$14({
    teamId: d ?? "",
    editorType: r,
    pageSize: i,
    enabled: p
  });
  return u ? {
    templates: {
      type: "org_plus",
      data: teamTemplates
    },
    isLoading,
    requestLoadMoreTemplates: requestLoadMoreForOrg
  } : p ? {
    templates: {
      type: "pro_or_student_team",
      data: templatesByTeam
    },
    isLoading: _isLoading,
    requestLoadMoreTemplates: requestLoadMoreForTeam
  } : {
    templates: void 0,
    isLoading: !1,
    requestLoadMoreTemplates: lQ
  };
}
export function $$$14({
  teamId: e,
  editorType: t,
  pageSize: r = 20,
  enabled: n = !0
}) {
  let [{
    status: i,
    data: a
  }] = IT(PaginatedTemplatesByTeam({
    teamId: e,
    editorType: t,
    firstPageSize: r
  }), {
    enabled: n && !!e
  });
  return {
    requestLoadMoreForTeam: () => {
      let e = a?.templatesByTeam;
      e && e.hasNextPage() && !e?.isLoadingNextPage && e.loadNext(r);
    },
    templatesByTeam: function (e) {
      let t;
      if (e && e.templatesByTeam) {
        e.templatesByTeam.sort((e, t) => e.sortOrder - t.sortOrder).map(e => {
          let r = H(e);
          r && (t ? t.templates.push(r) : t = {
            teamId: e.teamId,
            totalTemplatesByTeam: e.totalTemplatesByTeam,
            teamName: e.team?.name,
            workspaceName: e.team?.workspace?.name,
            workspaceId: e.team?.workspace?.id,
            templates: [r]
          });
        });
        return t;
      }
    }(a),
    isLoading: "loading" === i,
    status: i
  };
}
let X = e => {
  let t = G7(e);
  let r = Rs(BrowseTemplatesView, {
    currentOrgId: e?.id || ""
  }, {
    enabled: !!e
  });
  if ("loaded" !== r.status || !e) return null;
  if (t) {
    let e = r.data.currentUser.privilegedOrgUser?.workspaceUsers.find(e => e.isMainWorkspace);
    return e ? [e.workspaceId] : null;
  }
  return r.data.currentUser.orgAwareTeamRoles.reduce((e, t) => t.team ? [...e, t.team.id] : e, []);
};
let q = M4.Query({
  fetch: async ({
    orgId: e,
    count: t,
    editorType: r,
    enabled: n = !0
  }) => e && n ? await _$$q.getSearchPaginated({
    orgId: e,
    size: t,
    from: 0,
    templateType: r
  }).then(e => e.data.meta.templates) : []
});
let J = atom(null);
export function $$Z19(e, t = 2, r = !0) {
  let i;
  let [a, s] = useAtomValueAndSetter(J);
  let d = r && (!a || a.editorType !== e || a.count < t);
  let c = $$P2();
  let u = getFeatureFlags().pro_templates_lg;
  let {
    teamTemplates,
    status
  } = $$et17("", e, t, !0, u && d);
  let {
    templatesByTeam,
    status: _status
  } = $$$14({
    teamId: c?.type === "team" ? c.entity.id : null,
    editorType: e,
    pageSize: t,
    enabled: c?.type === "team" && d
  });
  let [{
    data: f,
    status: E
  }] = IT(q({
    orgId: c?.type === "org" ? c.entity.id : "",
    count: t,
    editorType: e,
    enabled: !u && d
  }));
  if (d && c) switch (c.type) {
    case "org":
      i = u ? teamTemplates : f?.map(e => ({
        type: _$$n.TeamTemplate,
        template: e
      })) ?? [];
      break;
    case "team":
      i = templatesByTeam?.templates.map(e => ({
        type: _$$n.TeamTemplateLg,
        template: e
      })) ?? [];
  } else i = a?.templates;
  let y = c ? "org" === c.type ? u ? status : E : _status : null;
  useEffect(() => {
    d && "loaded" === y && i && s({
      templates: i,
      count: t,
      editorType: e
    });
  }, [e, i, d, t, a, s, y]);
  return {
    teamTemplates: a?.editorType === e ? i?.slice(0, t) : void 0,
    isLoading: "loading" === y,
    numTemplatesForTeam: c?.type === "team" ? templatesByTeam?.totalTemplatesByTeam : void 0
  };
}
export let $$Q10 = atom(null);
export function $$ee9() {
  let e = $$U12()?.fileVersionId ?? "";
  let t = useStore();
  let [r, a] = useAtomValueAndSetter($$Q10);
  let s = lg();
  let o = selectWithShallowEqual(e => s === FFileType.SLIDES ? AC(e) : []);
  let d = selectWithShallowEqual(e => s === FFileType.COOPER ? tz(e) : []);
  let u = o.length;
  let p = d.length;
  useEffect(() => {
    if (s === FFileType.SLIDES) {
      a(u > 0);
      return;
    }
    if (s === FFileType.COOPER) {
      a(p > 0);
      return;
    }
    if (s === FFileType.FIGMAKE) {
      a(!1);
      return;
    }
    e && null === r && ke(e, t).then(({
      numPagesWithChanges: e
    }) => {
      a(e > 0);
    }).catch(() => a(!1));
  }, [e, t, r, a, s, o.length, o, d.length, d, u, p]);
  return r;
}
export function $$et17(e, t, r = 10, n = !1, i = !0) {
  let a = $$P2();
  let s = Rs(PaginatedTemplatesSearch, {
    teamId: a?.type === "team" ? a.entity.id : null,
    orgId: a?.type === "org" ? a.entity.id : null,
    query: e,
    editorType: t,
    firstPageSize: r
  }, {
    enabled: (!!e || n) && !!a && i
  });
  let o = [];
  s.data?.templatesSearch?.forEach(e => {
    if (!e.template) return;
    let r = e.template.file;
    let n = {
      ...e.template,
      libraryKey: e.libraryKeyToFile?.libraryKey,
      signedThumbnailUrl: "cooper" === t && e.template.hasCustomThumbnail ? e.template.thumbnailUrl : r.signedThumbnailUrl,
      checkpointClientMeta: r.checkpointClientMeta,
      editorType: r.editorType
    };
    o.push({
      type: _$$n.TeamTemplateLg,
      template: n
    });
  });
  return {
    requestLoadMore: () => {
      let e = s.data?.templatesSearch;
      return !!e && (!e.isLoadingNextPage && e.hasNextPage() && e.loadNext(r), "loaded" !== s.status || e?.hasNextPage());
    },
    teamTemplates: o,
    total: s.data?.templatesSearch?.length ? s.data?.templatesSearch[0].totalSearchResults : 0,
    status: s.status
  };
}
export const Et = $$B0;
export const GR = $$V1;
export const Gi = $$P2;
export const J3 = $$M3;
export const JU = $$F4;
export const L_ = $$z5;
export const O$ = $$K6;
export const RD = $$Y7;
export const UF = $$j8;
export const ac = $$ee9;
export const b2 = $$Q10;
export const e2 = $$W11;
export const kD = $$U12;
export const kN = $$R13;
export const li = $$$14;
export const mZ = $$k15;
export const qI = $$G16;
export const qY = $$et17;
export const tS = $$D18;
export const wv = $$Z19;