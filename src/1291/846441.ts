import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDebounce } from 'use-debounce';
import { trackEventAnalytics } from "../905/449184";
import { selectWithShallowEqual } from "../905/103090";
import { getInitialOptions } from "../figma_app/169182";
import { editorUtilities as _$$k } from "../905/22009";
import { yQ, nl, I5, SG } from "../figma_app/844435";
import { tS } from "../figma_app/622574";
import { Ou } from "../figma_app/106207";
import { A as _$$A2 } from "../1291/23528";
import { FUSE_CONFIG_PROFILE } from "../figma_app/740025";
import { useCurrentFileKey } from "../figma_app/516028";
import { a6 } from "../figma_app/198840";
import { I as _$$I } from "../905/342732";
import { Cn } from "../905/225265";
import { FFileType } from "../figma_app/191312";
import { Ef } from "../905/81982";
import { Rt } from "../figma_app/979658";
import { CommunityPageType } from "../figma_app/45218";
import { p as _$$p } from "../905/42189";
import { j6, m_, G0, fQ, vh, l7 } from "../9410/335206";
import { e } from "../1291/352115";
import { F5 } from "../905/192343";
import { cX } from "../figma_app/920333";
import { H_ } from "../1291/326519";
import { d0 } from "../9410/353422";
let i;
let k = new Ef([], {
  keys: ["name"]
});
let L = new Ef([], FUSE_CONFIG_PROFILE);
let A = new Ef([], FUSE_CONFIG_PROFILE);
let B = new Ef([], {
  threshold: .1,
  matchAllTokens: !0,
  tokenize: !1,
  distance: 300,
  keys: [{
    name: "name",
    weight: 1
  }, {
    name: "tags",
    weight: .5
  }]
});
let P = ["upload", "media", "file", "gif", "jpeg", "jpg", "png", "mov", "mp4", "movie", "video", "webm"];
let R = e => [{
  name: "Code block",
  tags: ["snippet", "syntax", "highlight", "program", "`"],
  component: j6
}, {
  name: "Timer",
  tags: ["countdown", "stopwatch", "pomodoro", "start", "hourglass", "clock"],
  component: m_
}, {
  name: "Images",
  tags: P,
  component: G0
}, {
  name: "Links",
  tags: ["media", "across", "web", "url", "site", "embed"],
  component: fQ
}, ...(e ? [{
  name: "Faces",
  tags: ["face", "stamps", "team"],
  component: H_
}] : []), {
  name: "Table",
  tags: ["table", "chart", "spreadsheet", "list", "figure", "diagram", "grid", "worksheet", "database"],
  component: vh
}, {
  name: "Mind map",
  tags: ["mindmap", "mind", "map", "diagram", "brainstorm"],
  component: l7
}];
let M = "";
export function $$F1() {
  let [e, t] = useState(M);
  let s = useSelector(e => e.universalInsertModal);
  let [r, o] = useState(s.previewResource);
  useEffect(() => {
    i?.type === Rt.ORG_FACE_STAMPS && o({
      id: "FACE_STAMPS",
      type: Rt.ORG_FACE_STAMPS
    });
  }, []);
  useEffect(() => {
    M = e;
    i = r;
  }, [r, e]);
  return {
    searchQuery: e,
    setSearchQuery: t,
    previewResource: r,
    setPreviewResource: o
  };
}
export function $$z0() {
  let {
    tabManager,
    searchQuery
  } = cX();
  let [s] = useDebounce(searchQuery, 200);
  let i = F5();
  let {
    setQuery
  } = _$$I(Cn.FigJam);
  let j = useDispatch();
  let S = useCurrentFileKey();
  let {
    shelves,
    hubFiles
  } = selectWithShallowEqual(e => ({
    shelves: e.communityHub.shelves[CommunityPageType.FIGJAM_TEMPLATES_PICKER],
    hubFiles: e.hubFiles,
    initialTab: e.universalInsertModal.initialTab
  }));
  let P = useMemo(() => (shelves || []).reduce((e, t) => ({
    ...e,
    [t.title]: t.shelf_content.map(e => e.id)
  }), {}), [shelves]);
  let M = getInitialOptions().user_data?.id;
  let F = yQ();
  let z = nl();
  let {
    pluginServerSideSearch,
    pluginSearchIsLoading,
    pluginSearchHasResolved,
    setLastPluginSearchQuery,
    lastPluginSearchQuery
  } = I5(_$$k.Editors.FIGJAM);
  let {
    widgetServerSideSearch,
    widgetSearchIsLoading,
    widgetSearchHasResolved,
    setLastWidgetSearchQuery,
    lastWidgetSearchQuery
  } = SG(_$$k.Editors.FIGJAM);
  let V = d0();
  let Y = tS();
  let {
    templates,
    total,
    requestLoadMore,
    isLoading
  } = Ou(s, Y, FFileType.WHITEBOARD);
  let {
    faceStampServerSideSearch,
    faceStampSearchIsLoading,
    faceStampSearchHasResolved,
    lastFaceStampSearchQuery,
    setLastFaceStampSearchQuery
  } = _$$A2({
    maxResults: 20
  });
  let [eo, el] = useState({
    [e]: []
  });
  let [ed, ec] = useState([]);
  let [eu, em] = useState([]);
  let [e_, eg] = useState([]);
  let [ep, ex] = useState([]);
  let [eh, ef] = useState([]);
  let [eb, ey] = useState([]);
  let [ej, eS] = useState([]);
  let [ev, ew] = useState([]);
  let [eN, eT] = useState([]);
  useEffect(() => {
    let e = Object.keys(P).reduce((e, t) => [...e, ...P[t]], []).map(e => a6(hubFiles[e]));
    k.set(e);
  }, [P, hubFiles]);
  useEffect(() => {
    L.set(Object.values(z));
  }, [z, j]);
  useEffect(() => {
    A.set(Object.values(F));
  }, [F, j]);
  useEffect(() => {
    B.set(R(V));
  }, [V]);
  useEffect(() => {
    let t;
    let a = tabManager.activeTab;
    (a === _$$p.TEMPLATES || a === _$$p.ALL) && ("" === s.trim() ? el({
      [e]: []
    }) : (t = [...new Set(t = k.search(s).map(e => e.hub_file_id))], el({
      [e]: t
    })));
    (a === _$$p.ALL || a === _$$p.MORE) && ("" === s.trim() ? setLastFaceStampSearchQuery(null) : faceStampServerSideSearch(s));
    (a === _$$p.PLUGINS || a === _$$p.ALL) && ("" === s.trim() ? (em([]), ef([]), eg([]), ex([]), setLastPluginSearchQuery(null)) : (ef(L.search(s).map(e => e.localFileId)), pluginServerSideSearch(s, eg, ex, em)));
    (a === _$$p.WIDGETS || a === _$$p.ALL) && ("" === s.trim() ? (ey([]), eT([]), eS([]), ew([]), setLastWidgetSearchQuery(null)) : (eT(A.search(s).map(e => e.localFileId)), widgetServerSideSearch(s, eS, ew, ey)));
    (a === _$$p.STICKERS_AND_COMPONENTS || a === _$$p.ALL) && setQuery(s);
    (a === _$$p.MORE || a === _$$p.ALL) && ec(B.search(s).map(e => e.component));
    trackEventAnalytics("search_query_result", {
      query: s,
      selectedTab: a,
      entry_point: "figjam",
      scope: "figjam inserts modal",
      context: "search",
      ...i,
      files: 0,
      hub_files: 0,
      projects: 0,
      teams: 0,
      users: 0
    });
  }, [s, M, S, tabManager.activeTab]);
  return {
    searchTemplatesResult: eo,
    moreResult: ed,
    pluginSavedSearchResultIds: eu,
    pluginCommunitySearchResultIds: e_,
    pluginOrgSearchResultIds: ep,
    pluginDevelopmentSearchResultIds: eh,
    pluginSearchIsLoading: pluginSearchIsLoading || searchQuery !== s,
    pluginSearchHasResolved,
    widgetSavedSearchResultIds: eb,
    widgetCommunitySearchResultIds: ej,
    widgetOrgSearchResultIds: ev,
    widgetDevelopmentSearchResultIds: eN,
    widgetSearchIsLoading: widgetSearchIsLoading || searchQuery !== s,
    widgetSearchHasResolved,
    faceStampSearchIsLoading: faceStampSearchIsLoading || searchQuery !== s,
    faceStampSearchHasResolved,
    debouncedSearchQuery: s,
    lastPluginSearchQuery,
    lastWidgetSearchQuery,
    lastFaceStampSearchQuery,
    teamTemplatesFromSearch: templates,
    totalNumTeamTemplatesFromSearch: total,
    teamTemplatesFromSearchIsLoading: isLoading,
    requestLoadMoreTeamTemplatesFromSearch: requestLoadMore
  };
}
export const Ib = $$z0;
export const Rz = $$F1;