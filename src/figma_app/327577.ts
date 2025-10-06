import { debounce } from "../905/915765";
import { createActionCreator } from "../905/73481";
import { trackEventAnalytics } from "../905/449184";
import { isChromebookTabbed } from "../figma_app/347146";
import { desktopAPIInstance } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { findCurrentPlan } from "../905/539306";
import { selectViewAction } from "../905/929976";
import { createAndOpenFile } from "../905/738636";
import { getNewFileConfig } from "../905/766303";
import { getAutosaveManagerInstance } from "../figma_app/840917";
import { FFileType } from "../figma_app/191312";
import { mapFileSummary } from "../figma_app/349248";
import { getPermissionsStateMemoized, canMemberOrg } from "../figma_app/642025";
import { getSelectedViewUrl } from "../figma_app/193867";
import { getBackgroundColorForTheme } from "../905/187165";
import { mapFileTypeToEditorType } from "../figma_app/53721";
import { TabOpenBehavior, FileBrowserLocation } from "../figma_app/915202";
import { PublicModelType, SpaceAccessType } from "../figma_app/162807";
import { SearchAnalytics } from "../905/574958";
import { isIncludedView, isOrgView } from "../figma_app/707808";
import { createOptimistThunk } from "../905/350402";
import { searchSetParametersAction, searchSessionEnteredSearchViewAction, searchEndSessionAction } from "../905/977218";
let x = createOptimistThunk((e, {
  viewport: t
}) => {
  let {
    selectedView
  } = e.getState();
  if ("fullscreen" === selectedView.view) {
    e.dispatch(selectViewAction({
      ...selectedView,
      viewport: t
    }));
    let n = getAutosaveManagerInstance()?.fileKey || selectedView.fileKey;
    n && desktopAPIInstance?.updateViewport(n, t);
  }
});
let $$N6 = createOptimistThunk(e => {
  let t = e.getState();
  let r = $$k5(t);
  e.dispatch(searchSetParametersAction({
    query: t.desktopNewTab.searchQuery,
    searchScope: r,
    searchModelType: PublicModelType.FILES
  }));
  e.dispatch(searchSessionEnteredSearchViewAction({
    entryPoint: "desktop_new_tab"
  }));
  t = e.getState();
  let n = getSelectedViewUrl(t, {
    view: "search",
    entryPoint: "desktop_new_tab",
    previousView: t.selectedView && (isIncludedView(t.selectedView) || isOrgView(t.selectedView)) ? t.selectedView : void 0
  });
  customHistory.redirect(n);
});
let $$C8 = createActionCreator("DESKTOP_NEW_TAB_SET_LOADING_BACKGROUND_COLOR");
let $$w7 = createActionCreator("DESKTOP_NEW_TAB_SET_IS_SEARCH_BAR_FOCUSED");
let $$O3 = createActionCreator("DESKTOP_NEW_TAB_SET_SEARCH_QUERY");
let $$R0 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let n = t.result;
  let i = n.model;
  let a = {
    position: t.index,
    resource_id: i.key,
    resource_type: n.search_model_type.toString(),
    matched_queries: n.matched_queries,
    result: n
  };
  let s = {
    plan: findCurrentPlan(r)
  };
  new SearchAnalytics.Analytics(r.search, a, s).click(n.search_model_type, r.selectedView, {
    action: t.clickAction
  });
  e.dispatch(searchEndSessionAction());
  e.dispatch(selectViewAction({
    view: "fullscreen",
    fileKey: i.key,
    editorType: mapFileTypeToEditorType(i.editor_type ?? FFileType.DESIGN)
  }));
});
let $$L2 = createOptimistThunk(async (e, t, {
  liveStore: r
}) => {
  let n = await r.fetchFile(t.fileKey);
  trackEventAnalytics("Desktop New Tab Open Recent", {
    itemType: "prototype",
    fileKey: n.key
  });
  e.dispatch(selectViewAction({
    view: "prototype",
    file: mapFileSummary(n),
    nodeId: t.pageId,
    pageId: t.pageId
  }));
});
let $$P1 = createOptimistThunk(async (e, t, {
  liveStore: r
}) => {
  let n = await r.fetchFile(t.fileKey);
  trackEventAnalytics("Desktop New Tab Open Recent", {
    itemType: "file",
    fileKey: n.key
  });
  e.dispatch(selectViewAction({
    view: "fullscreen",
    fileKey: n.key,
    editorType: mapFileTypeToEditorType(n.editor_type ?? FFileType.DESIGN)
  }));
});
let $$D10 = createOptimistThunk((e, t) => {
  let r = e.getState();
  if (!r.desktopNewTab.isCreatingFile) {
    let n = isChromebookTabbed() ? TabOpenBehavior.SAME_TAB : TabOpenBehavior.NEW_TAB;
    let i = getNewFileConfig({
      state: e.getState(),
      openNewFileIn: n,
      folderOverride: t.projectId ? {
        folderId: t.projectId
      } : "drafts",
      trackingInfo: {
        from: FileBrowserLocation.DESKTOP_NEW_TAB_BUTTON,
        selectedView: r.selectedView
      },
      editorType: t.editorType
    });
    e.dispatch(createAndOpenFile(i));
  }
});
export function $$k5(e) {
  let t = getPermissionsStateMemoized(e);
  return t.currentUserOrgId ? canMemberOrg(t.currentUserOrgId, t) ? SpaceAccessType.ORG : SpaceAccessType.ORG_GUEST : SpaceAccessType.PERSONAL;
}
export function $$M9(e, t) {
  return null == t ? "#00000000" : "whiteboard" === t ? "#ffffff" : `#${getBackgroundColorForTheme(e)}`;
}
export let $$F4 = debounce((e, t) => {
  e.dispatch(x({
    viewport: t
  }));
}, 1e3);
export const Gb = $$R0;
export const I$ = $$P1;
export const Mx = $$L2;
export const Ri = $$O3;
export const c3 = $$F4;
export const gt = $$k5;
export const ht = $$N6;
export const j3 = $$w7;
export const mg = $$C8;
export const on = $$M9;
export const x3 = $$D10;