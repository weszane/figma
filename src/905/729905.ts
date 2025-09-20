import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo, useEffect, useCallback } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useMemoShallow, useStableMemo } from "../905/19536";
import l from "../vendor/656470";
import { analyticsEventManager } from "../905/449184";
import { useFigmaLibrariesEnabled } from "../figma_app/657017";
import { Fl } from "../figma_app/236178";
import { useCurrentFileKey } from "../figma_app/516028";
import { getParentOrgId } from "../905/872904";
import { useSubscribedLibraries, useUntransformedSubscribedLibraries } from "../figma_app/155728";
import { getCurrentTeam } from "../figma_app/598018";
import { isPublishedTeamLibrary, isTeamLibrary, isCommunityLibrary } from "../figma_app/633080";
import { L } from "../905/773253";
import { er, sz, zm } from "../905/753512";
import { S as _$$S } from "../905/612212";
import { mG, PW, LI, Px } from "../905/825399";
import { Q } from "../905/616985";
var $$n0;
var d = l;
(e => {
  let t = createContext(void 0);
  function i({
    path: e,
    children: i
  }) {
    let n = useContext(t);
    let s = useMemo(() => n?.path ? [...n.path, ...e] : e, [e, n?.path]);
    let l = useMemoShallow(() => ({
      path: s
    }), [s]);
    return jsx(t.Provider, {
      value: l,
      children: i
    });
  }
  function n() {
    let e = useContext(t);
    return useMemo(() => e?.path ?? [], [e?.path]);
  }
  function l({
    metadata: e,
    pageName: t,
    emptyState: i,
    loading: r
  } = {}) {
    let o = er();
    let d = L();
    let u = o && !d && !r;
    let p = n();
    let m = E(p, t);
    let h = useAtomWithSubscription(_$$S.lastActionAtom);
    let g = function () {
      let {
        hasProAccess,
        hasOrgAccess,
        hasEntAccess
      } = mG();
      return hasEntAccess ? "ent" : hasOrgAccess ? "org" : hasProAccess ? "pro" : "starter";
    }();
    let f = sz();
    let _ = f?.sessionId;
    let I = x();
    useEffect(function () {
      u && analyticsEventManager.trackDefinedEvent("library_modal.page_opened", {
        ...I,
        planType: g,
        libraryModalSessionId: _,
        path: m,
        pageName: t ?? p[p.length - 1] ?? void 0,
        action: h,
        emptyState: i ?? !1,
        metadata: JSON.stringify(function (e) {
          if (e) return "function" == typeof e ? e() : e;
        }(e))
      });
    }, [u, r]);
  }
  function E(e, t) {
    return [...e, t].filter(e => !!e).join(" > ");
  }
  function x() {
    let e = getCurrentTeam() ?? void 0;
    let t = getParentOrgId() ?? void 0;
    return {
      fileKey: useCurrentFileKey() ?? void 0,
      teamId: e?.id,
      workspaceId: e?.workspace_id ?? void 0,
      orgId: t
    };
  }
  function S(e) {
    let {
      workspaceApprovedLibraryKeys,
      orgApprovedLibraryKeys
    } = Fl();
    let n = useSubscribedLibraries();
    let r = useUntransformedSubscribedLibraries();
    let s = useFigmaLibrariesEnabled();
    return useCallback(() => {
      let a = new Set([...workspaceApprovedLibraryKeys, ...orgApprovedLibraryKeys]);
      let o = PW(a, e.filter(isPublishedTeamLibrary));
      let l = LI(r.data?.file?.libraryOrgSubscriptions ?? [], e, s);
      let d = LI(r.data?.file?.computedWorkspacePublicInfo?.workspace?.librarySubscriptions ?? [], e, s);
      let c = LI(r.data?.file?.libraryTeamSubscriptions ?? [], e, s);
      let u = l.concat(d).concat(c);
      let p = e.filter(e => n.data?.some(t => t.libraryKey === e.library_key));
      return {
        n_libraries: e.length,
        n_approved_libraries: o.length,
        n_default_libraries: u.length,
        n_added_libraries: p.length
      };
    }, [s, e, orgApprovedLibraryKeys, n.data, r.data?.file?.libraryOrgSubscriptions, r.data?.file?.libraryTeamSubscriptions, r.data?.file?.computedWorkspacePublicInfo?.workspace?.librarySubscriptions, workspaceApprovedLibraryKeys]);
  }
  function w(e) {
    let t = useUntransformedSubscribedLibraries();
    let {
      workspaceApprovedLibraryKeys,
      orgApprovedLibraryKeys
    } = Fl();
    let {
      searchSessionId,
      queryId
    } = sz() ?? {};
    let o = useFigmaLibrariesEnabled();
    let l = getParentOrgId();
    let d = Px(e);
    return useCallback(() => {
      let a = new Set([...workspaceApprovedLibraryKeys, ...orgApprovedLibraryKeys]);
      let c = LI(t.data?.file?.libraryOrgSubscriptions ?? [], [e], o);
      let u = LI(t.data?.file?.computedWorkspacePublicInfo?.workspace?.librarySubscriptions ?? [], [e], o);
      let p = LI(t.data?.file?.libraryTeamSubscriptions ?? [], [e], o);
      let m = null;
      c.length > 0 || orgApprovedLibraryKeys.has(e.library_key) ? m = "org" : u.length > 0 || workspaceApprovedLibraryKeys.has(e.library_key) ? m = "workspace" : p.length > 0 && (m = "team");
      let {
        num_components,
        num_styles,
        num_variables
      } = e;
      return {
        library_file_key: isTeamLibrary(e) && e.library_file_key || void 0,
        library_key: e.library_key,
        library_workspace_id: isTeamLibrary(e) ? e.workspace_id ?? void 0 : void 0,
        library_team_id: isTeamLibrary(e) ? e.team_id ?? void 0 : void 0,
        library_org_id: isTeamLibrary(e) ? l ?? void 0 : void 0,
        added: d,
        approved: a.has(e.library_key),
        default_level: m,
        search_session_id: searchSessionId,
        query_id: queryId,
        n_assets: num_components + num_styles + num_variables,
        n_components: num_components,
        n_styles: num_styles,
        n_variables: num_variables,
        ui_kit: isCommunityLibrary(e)
      };
    }, [d, o, e, orgApprovedLibraryKeys, l, queryId, searchSessionId, t.data?.file, workspaceApprovedLibraryKeys]);
  }
  e.Page = function ({
    name: e,
    exclude: i,
    children: n
  }) {
    let s = useContext(t);
    let l = useMemo(() => s?.path ? !i && e ? [...s.path, e] : s.path : e ? [e] : [], [i, e, s?.path]);
    let d = useMemoShallow(() => ({
      path: l
    }), [l]);
    return jsx(t.Provider, {
      value: d,
      children: n
    });
  };
  e.PageWithTracking = function ({
    name: e,
    metadata: i,
    emptyState: n,
    children: s,
    loading: d
  }) {
    let c = useContext(t);
    let u = useMemo(() => c ? [...c.path, e] : [e], [c, e]);
    let p = useMemoShallow(() => ({
      path: u
    }), [u]);
    l({
      metadata: i,
      pageName: e,
      emptyState: n,
      loading: d
    });
    return jsx(t.Provider, {
      value: p,
      children: s
    });
  };
  e.usePath = n;
  e.PageViewTracker = function (e) {
    l(e);
    return null;
  };
  e.useLogPageView = l;
  e.buildPathString = E;
  e.useFileMetadata = x;
  e.useMetadataForLibraries = S;
  e.useMetadataForTeamsWithLibraries = function (e, t) {
    let i = S(useMemo(() => e.flatMap(e => e.libraries.slice(0, 3)).concat(t.slice(0, 3)).filter(isPublishedTeamLibrary), [t, e]));
    return useCallback(() => ({
      ...i(),
      n_draft_libraries: t.length
    }), [t.length, i]);
  };
  e.useMetadataForLibrary = w;
  e.useMetadataForSubscribeEvent = function (e, {
    libraryPosition: t,
    teamPosition: i,
    workspacePosition: r,
    entrypoint: s
  }) {
    let o = w(e);
    let {
      sessionId,
      searchSessionId,
      queryId
    } = zm();
    let u = n();
    return useCallback(() => {
      let {
        approved,
        default_level,
        library_team_id,
        library_workspace_id
      } = o();
      return {
        approved,
        defaultLevel: default_level,
        libraryModalSessionId: sessionId,
        searchSessionId,
        queryId,
        libraryPosition: t,
        teamPosition: i,
        workspacePosition: r,
        libraryModalEntrypoint: s,
        path: E(u),
        libraryTeamId: library_team_id,
        libraryWorkspaceId: library_workspace_id
      };
    }, [s, o, t, u, queryId, searchSessionId, sessionId, i, r]);
  };
  e.PushContainerWithPaths = function (e) {
    let {
      paths,
      children,
      ...s
    } = e;
    let l = useStableMemo(paths);
    let c = useMemo(() => children.flat().filter(e => !!e), [children]);
    let u = useMemo(() => c.map((e, t) => function (e, t) {
      let n = d()(l.slice(0, t + 1));
      return jsx(i, {
        path: n,
        children: e
      }, t);
    }(e, t)), [c, l]);
    return jsx(Q, {
      ...s,
      children: u
    });
  };
  let C = createContext({
    workspacePosition: void 0,
    teamPosition: void 0,
    section: void 0
  });
  e.usePositionDataForLogging = function () {
    return useContext(C);
  };
  e.PositionDataProvider = function ({
    workspacePosition: e,
    teamPosition: t,
    section: i,
    children: n
  }) {
    return jsx(C.Provider, {
      value: {
        workspacePosition: e,
        teamPosition: t,
        section: i
      },
      children: n
    });
  };
})($$n0 || ($$n0 = {}));
export const W = $$n0;