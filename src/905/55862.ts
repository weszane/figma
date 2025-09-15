import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortByProperty } from "../figma_app/656233";
import { ServiceCategories as _$$e } from "../905/165054";
import { l as _$$l } from "../905/716947";
import { trackEventAnalytics } from "../905/449184";
import { useSubscription } from "../figma_app/288654";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { reportError } from "../905/11";
import { getI18nString } from "../905/303541";
import { Qv } from "../905/929976";
import { n1 } from "../figma_app/657017";
import { compareWithKey } from "../905/760074";
import { NX, k9 } from "../figma_app/777207";
import { selectCurrentFile } from "../figma_app/516028";
import { useCurrentUserOrg } from "../905/845253";
import { FC } from "../figma_app/212807";
import { eO } from "../figma_app/518077";
import { gi, r9, fc } from "../figma_app/646357";
import { PG, Q_ } from "../905/570707";
import { LibrariesViewFilterStatesView } from "../figma_app/43951";
import { liveStoreInstance } from "../905/713695";
import { useCurrentPlanUser, useIsOrgMemberOrAdminUser } from "../figma_app/465071";
import { _X, YH } from "../figma_app/502247";
import { NO_TEAM } from "../figma_app/633080";
import { ZO } from "../905/691188";
export function $$k0({
  libraryFiles: e,
  currentLibrariesViewFilterState: t,
  hideUnsubscribedFiles: i,
  showingDefaultSubscriptionsForTeamId: a,
  showingDefaultSubscriptionsForUser: s,
  hideLibrariesNotAddedToConnectedProject: o,
  mapFromLibraryKeyToSharingGroupData: l
}) {
  let d = useSelector(({
    teams: e
  }) => Object.keys(e));
  let c = $$P6({
    libraryFiles: e
  });
  let u = D({
    libraryFiles: e,
    teamId: a,
    user: s
  });
  let p = a || s;
  let m = useMemo(() => {
    let e = [];
    if (t && e.push(e => {
      let i = !!(e.team_id && d.includes(e.team_id));
      return !!function (e, t, i) {
        switch (t.type) {
          case "currentFile":
            return !1;
          case "joinedTeams":
            return i;
          case "nonJoinedTeams":
            return !i;
          case "workspace":
            return e.workspace_id === t.id;
          case "org":
            return !0;
          case "presetLibraries":
            return "COMMUNITY_LIBRARY_FILE" === e.type;
          case "unassigned":
            return !e.workspace_id && !!e.team_id;
          case "drafts":
            return !e.team_id;
        }
      }(e, t, i);
    }), i) {
      let t = new Set(p ? u : c);
      e.push(e => t.has(e.library_key));
    }
    o && l && e.push(e => !!l[e.library_key]?.sharingGroupId);
    return e;
  }, [t, u, i, p, c, d, o, l]);
  return useMemo(() => e.filter(e => m.every(t => t(e))), [e, m]);
}
export function $$R5({
  libraryFiles: e,
  showingDefaultSubscriptionsForTeamId: t,
  sortState: i,
  approvedLibraryKeysByResourceType: r = {
    workspaceApprovedLibraryKeys: new Set(),
    orgApprovedLibraryKeys: new Set()
  }
}) {
  let s = selectCurrentFile();
  let o = FC();
  let {
    fileByKey
  } = o;
  let d = $$P6({
    libraryFiles: e
  });
  let c = D({
    libraryFiles: e,
    teamId: t
  });
  let u = useMemo(() => {
    var e;
    let i = [];
    s && i.push((e = {
      key: s.key,
      file_repo_id: s.fileRepoId,
      source_file_key: s.sourceFileKey
    }, (t, i) => t.library_file_key !== e.key && !compareWithKey(e, i)));
    t ? i.push(function (e, t) {
      let i = new Set(t);
      return (t, n) => n.team_id === e || !!n.org_browsable || i.has(t.library_key);
    }(t, c)) : i.push((e, t) => {
      let i = t.folder_id === o.user?.drafts_folder_id;
      let n = !!t.team_id;
      return i || n || !!t.org_browsable;
    });
    return i;
  }, [s, t, o, c]);
  let p = useMemo(() => {
    var e;
    var t;
    return "alpha" === i.sortBy ? NX(r) ? e => k9({
      libraries: e,
      approvedLibraryKeysByResourceType: r,
      currentTeamId: s?.teamId,
      shouldSortByTeam: !0
    }) : function (e, t) {
      let i = e ? e.teamId : NO_TEAM;
      return e => gi(e, i, {
        isDescending: t
      });
    }(s, i.isDescending) : "search" === i.sortBy ? function (e, t) {
      let i = e ? e.teamId : NO_TEAM;
      let n = new Set(t);
      return t => t.sort((t, r) => {
        if (e) {
          let e = n.has(t.library_key);
          let i = n.has(r.library_key);
          if (e && !i) return -1;
          if (!e && i) return 1;
        }
        return t.team_id !== r.team_id ? r9(t, r, i) : t.max_search_score > r.max_search_score ? -1 : 1;
      });
    }(s, d) : (e = (() => {
      switch (i.sortBy) {
        case "components":
        case "teams":
          return "num_components";
        case "styles":
          return "num_styles";
        case "variables":
          return "num_variables";
        case "inserts":
          return "num_weekly_insertions";
        default:
          i.sortBy;
          return "num_components";
      }
    })(), t = i.isDescending, i => sortByProperty(i, e, t));
  }, [s, i.isDescending, i.sortBy, d, r]);
  return useMemo(() => {
    let t = e.filter(e => {
      let t = fileByKey[e.library_file_key];
      return !!t && u.every(i => i(e, t));
    });
    p(t);
    return t;
  }, [e, fileByKey, u, p]);
}
export function $$N2(e) {
  let {
    searchQuery,
    debouncedSearchQuery,
    setSearchQuery
  } = PG();
  let [a] = setupResourceAtomHandler(Q_(debouncedSearchQuery));
  let s = useMemo(() => {
    if ("loading" === a.status) return [];
    if (!searchQuery || !a.data) return e;
    let i = [];
    let n = {};
    let r = a.data.components.filteredByTeamId;
    let s = a.data.styles.filteredByTeamId;
    let l = a.data.stateGroups.filteredByTeamId;
    for (let e of [r, s, l, a.data.variableSets?.filteredByTeamId ?? {}, a.data.variables?.filteredByTeamId ?? {}]) for (let t in e) for (let i in e[t]) n[i] = t;
    for (let t in n) {
      let n = e.find(e => e.library_key === t);
      if (!n) continue;
      let r = _$$l(t);
      i.push({
        ...n,
        max_search_score: Math.max(a.data.components.maxScorePerLibrary[r] || -1 / 0, a.data.styles.maxScorePerLibrary[r] || -1 / 0)
      });
    }
    return i;
  }, [e, searchQuery, a]);
  return {
    searchQuery,
    debouncedSearchQuery,
    isSearching: !!searchQuery,
    isSearchLoading: "loading" === a.status,
    libraryFiles: s,
    onSearchQueryChange: setSearchQuery
  };
}
export function $$P6({
  libraryFiles: e
}) {
  let t = fc();
  return useMemo(() => e.map(e => e.library_key).filter(e => t(e)), [e, t]);
}
let O = Error("useLibrariesViewFilterStates: no filters with presets enabled");
function D({
  libraryFiles: e,
  teamId: t,
  user: i
}) {
  let r = ZO(t ?? null, i ?? !1);
  return useMemo(() => t || i ? e.filter(e => {
    let t = r(e.library_key);
    return !!t?.design || !!t?.figjam;
  }).map(e => e.library_key) : [], [e, t, i, r]);
}
export function $$L3(e, t = !1) {
  let i = [];
  let a = useDispatch();
  let o = useCurrentUserOrg();
  let c = useCurrentPlanUser("useLibrariesViewFilterStates");
  let p = useIsOrgMemberOrAdminUser(c).unwrapOr(!1);
  let g = !!o?.workspaces_count;
  useEffect(() => {
    async function e() {
      try {
        let e = await _X("useLibrariesViewFilterStates");
        a(Qv(e.data.meta));
      } catch (e) {}
    }
    YH || !p || g || (trackEventAnalytics("file-browser-hydrate", {
      location: "useLIbrariesViewFilterStates"
    }), e());
  });
  let f = n1() && !t;
  let _ = useSubscription(LibrariesViewFilterStatesView, {
    orgId: o?.id ?? null
  });
  let y = useSelector(({
    openFile: e
  }) => e);
  let v = liveStoreInstance.Team.useValue(e).data;
  let I = useMemo(() => {
    let t;
    let i = _.data?.org?.workspaces ?? [];
    return (y && (t = y.team?.workspaceId), e && (t = v?.workspace_id), t || (t = _.transform(e => eO(e.currentUser)).unwrapOr(null)), t) ? i.find(e => e.id === t) : null;
  }, [y, _, e, v]);
  return p || f ? (y && i.push({
    type: "currentFile"
  }), g && (I && i.push({
    type: "workspace",
    id: I.id,
    name: I.name
  }), i.push({
    type: "org"
  })), (p && !g || !p && f) && (i.push({
    type: "joinedTeams"
  }), i.push({
    type: "nonJoinedTeams"
  })), i.length) ? (f && i.push({
    type: "presetLibraries"
  }), i) : (f && reportError(_$$e.DESIGN_SYSTEMS_ECOSYSTEM, O, {
    tags: {
      orgId: o?.id,
      hasOpenFile: !!y,
      hasWorkspace: !!I,
      showingDefaultSubscriptionsForTeamId: e,
      canMemberOrg: p,
      showWorkspaceTabs: g
    }
  }), null) : null;
}
export function $$F1(e, t) {
  switch (e.type) {
    case "currentFile":
      return getI18nString("design_systems.libraries_modal.current_file");
    case "joinedTeams":
      return getI18nString("design_systems.libraries_modal.your_teams");
    case "nonJoinedTeams":
      return getI18nString("design_systems.libraries_modal.other_teams");
    case "workspace":
      return e.name;
    case "org":
      if (!t) {
        console.error("org filter, but org not in state");
        return "";
      }
      return t;
    case "drafts":
      return getI18nString("design_systems.libraries_modal.draft_libraries");
    case "unassigned":
      return getI18nString("design_systems.libraries_modal.other_libraries");
    case "presetLibraries":
      return getI18nString("design_systems.libraries_modal.ui_kits");
    default:
      console.error("invalid filter type in library filter tab component");
      return "";
  }
}
export function $$M4(e, t, i) {
  useEffect(() => {
    t?.type !== "presetLibraries" || e?.some(e => "presetLibraries" === e.type) || i(e?.[0] ?? null);
  }, [e]);
}
export const CK = $$k0;
export const SF = $$F1;
export const TW = $$N2;
export const Yy = $$L3;
export const is = $$M4;
export const mJ = $$R5;
export const mo = $$P6;