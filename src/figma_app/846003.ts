import { getFeatureFlags } from "../905/601108";
import { customHistory } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { trackSidebarClick } from "../905/34809";
import { ViewPathManager } from "../figma_app/422062";
import { getTabTitle } from "../figma_app/471982";
import { updateHubFilePageTitle } from "../figma_app/49598";
import { mergePublishedPlugin } from "../figma_app/559491";
import { hydrateFileBrowser, selectViewAction } from "../905/929976";
import { filePutAction } from "../figma_app/78808";
import { folderPutAction, folderPostAction } from "../figma_app/598926";
import { newFileLoaded } from "../figma_app/91703";
import { putRepoOptimist } from "../905/466026";
import { searchSetParametersAction } from "../905/977218";
import { trackUserEvent } from "../figma_app/314264";
import { getRepoById } from "../905/760074";
import { getReleaseManifestGitCommit, setEditorDocumentTitle, setViewDocumentTitle } from "../905/697795";
import { updateFileInfo } from "../figma_app/682945";
import { isTeamInGracePeriod } from "../figma_app/345997";
import { $Z, mapPathToSelectedView, selectedViewToPath, isResourceOrCommunityHubView } from "../figma_app/193867";
import { w } from "../figma_app/119601";
import { YH, getUserState } from "../figma_app/502247";
import { mapEditorTypeToFileType, mapFileTypeToEditorType } from "../figma_app/53721";
import { NavigationRoutes } from "../905/548208";
import { o0 } from "../905/844131";
import { shouldEnableFullscreenPreload } from "../905/417890";
export function $$w1(e, t) {
  return null == e || null == t ? e !== t : $Z.requireHistoryChange(e, t);
}
let O = (e, t) => $Z.selectedViewHasMissingResources(e, t);
export function $$R2(e) {
  return new ViewPathManager().selectedViewMissingResourceType(e);
}
let L = 0;
let $$P0 = e => t => function (r) {
  let o = e.getState().selectedView;
  t(r);
  let P = e.getState();
  if (hydrateFileBrowser.matches(r)) {
    let t = P.selectedView;
    if (t === o0 && (t = getInitialOptions().selected_view || mapPathToSelectedView(P, customHistory.location.pathname, customHistory.location.search, customHistory.location.hash)), "fullscreen" === t.view && t.fileKey) {
      let {
        fileKey
      } = t;
      let i = e.getState().fileByKey[fileKey];
      i && !r.payload.fromRealtime && mapEditorTypeToFileType(t.editorType) !== i.editor_type && (t.editorType = mapFileTypeToEditorType(i.editor_type ?? "design"));
    }
    if ("abandonedDraftFiles" === t.view || "licenseGroup" === t.view || "orgAdminSettings" === t.view || "orgDomainManagement" === t.view || "orgIdpManagement" === t.view || "seatRequests" === t.view || "teamAdminConsole" === t.view || O(P, t) && (t = {
      view: "resourceUnavailable",
      resourceType: $$R2(t)
    }), "teamUpgrade" === t.view && t.teamId) {
      let e = P.teams[t.teamId];
      e && e.pro_team && !isTeamInGracePeriod(e) && (t = {
        view: "team",
        teamId: t.teamId,
        teamViewTab: NavigationRoutes.SETTINGS
      });
    }
    t !== o0 ? e.dispatch(selectViewAction(t)) : P.user?.drafts_folder_id ? e.dispatch(selectViewAction({
      view: "folder",
      folderId: P.user.drafts_folder_id
    })) : e.dispatch(selectViewAction({
      view: "recentsAndSharing"
    }));
  } else if (newFileLoaded.matches(r)) {
    let e = {
      view: "fullscreen",
      fileKey: r.payload.file.key,
      editorType: r.payload.fullscreenEditorType
    };
    let t = selectedViewToPath(P, e);
    customHistory.replace(t, {
      ...e,
      jsCommitHash: getReleaseManifestGitCommit()
    });
  } else if (selectViewAction.matches(r)) {
    if ("prototype" !== o.view && "prototype" === r.payload.view && shouldEnableFullscreenPreload()) {
      let e = selectedViewToPath(P, r.payload);
      customHistory.redirect(e);
    }
    "fullscreen" === r.payload.view && ("fullscreen" !== o.view || r.payload.editorType !== o.editorType) && updateFileInfo(r.payload.editorType);
    let {
      selectedView
    } = e.getState();
    if (!("inlinePreview" in selectedView && selectedView.inlinePreview) && !r.payload.fromPopstate) {
      let t = selectedViewToPath(P, r.payload);
      customHistory.location.pathname + customHistory.location.search !== t ? (("fullscreen" !== r.payload.view || r.payload.fileKey !== getInitialOptions().editing_file?.key) && !YH && w() && getUserState("fileBrowserHistory middleware selectView").then(t => {
        e.dispatch(hydrateFileBrowser(t.data.meta));
      }), !r.payload.forceReplaceState && (customHistory.location.state || isResourceOrCommunityHubView(o)) && $$w1(o, r.payload) ? customHistory.push(t, {
        ...r.payload,
        previousSelectedView: o,
        jsCommitHash: getReleaseManifestGitCommit()
      }) : customHistory.replace(t, {
        ...r.payload,
        previousSelectedView: o,
        jsCommitHash: getReleaseManifestGitCommit()
      })) : null == customHistory.location.state && customHistory.replace(t, {
        ...r.payload,
        previousSelectedView: o,
        jsCommitHash: getReleaseManifestGitCommit()
      });
      e.getState()?.user?.appData?.loggedOut && "fullscreen" !== r.payload.view && customHistory.reload("User Logged out");
    }
    if ("searchAndBrowse" === r.payload.subView) {
      let e = r.payload.data;
      e && !e.category && setEditorDocumentTitle(getTabTitle(e));
    } else setViewDocumentTitle(P, r.payload);
  } else if (updateHubFilePageTitle.matches(r) && "hubFile" === P.selectedView.subView) setViewDocumentTitle(P, {
    hubFileId: r.payload.hubFileId,
    subView: "hubFile",
    view: "communityHub"
  });else if (mergePublishedPlugin.matches(r)) {
    let t = e.getState().selectedView;
    let n = r.payload.publishedPlugins;
    let a = t && "communityHub" === t.view && "plugin" === t.subView && t.publishedPluginId;
    if (a && n && n.some(e => e.id === a)) {
      if (customHistory) {
        let e = selectedViewToPath(P, t);
        customHistory.replace(e);
      }
      setViewDocumentTitle(P, t);
    }
  } else if (folderPutAction.matches(r)) {
    if (!getFeatureFlags().folder_page_fix_tab_titles) {
      let t = e.getState().selectedView;
      "folder" === t.view && t.folderId === r.payload.folder.id && setViewDocumentTitle(P, t);
    }
  } else if (folderPostAction.matches(r)) {
    let t = e.getState().selectedView;
    if ("folder" === t.view && t.folderId === r.payload.id) {
      getFeatureFlags().folder_page_fix_tab_titles || setViewDocumentTitle(P, t);
      let e = selectedViewToPath(P, t);
      customHistory.replace(e, {
        ...t,
        jsCommitHash: getReleaseManifestGitCommit()
      });
    }
  } else if (putRepoOptimist.matches(r)) {
    let t = e.getState().selectedView;
    if ("fullscreen" === t.view) {
      let e = t.fileKey && P.fileByKey[t.fileKey];
      if (e) {
        let n = getRepoById(e, P.repos);
        if (n && n.id === r.payload.repo.id) {
          setViewDocumentTitle(P, t);
          let e = selectedViewToPath(P, t);
          customHistory && customHistory.replace(e, {
            ...t,
            jsCommitHash: getReleaseManifestGitCommit()
          });
        }
      }
    }
  } else if (filePutAction.matches(r)) {
    let t = e.getState().selectedView;
    if ("fullscreen" === t.view && r.payload.file.key === t.fileKey || "prototype" === t.view && r.payload.file.key === t.file.key) {
      setViewDocumentTitle(P, t);
      let e = selectedViewToPath(P, t);
      customHistory && customHistory.replace(e, {
        ...t,
        jsCommitHash: getReleaseManifestGitCommit()
      });
    }
  } else if (searchSetParametersAction.matches(r)) {
    let t = e.getState().selectedView;
    t?.view === "search" && (customHistory.replace(selectedViewToPath(P, t), {
      ...t,
      jsCommitHash: getReleaseManifestGitCommit()
    }), setViewDocumentTitle(P, t));
  } else trackSidebarClick.matches(r) ? trackUserEvent("File Browser Sidebar Clicked", e.getState(), {
    clickedResourceType: r.payload.clickedResourceType,
    resourceIdOrKey: r.payload.resourceIdOrKey
  }) : 0 === L && (L = setTimeout(function () {
    L = 0;
    null === e.getState().selectedView && e.dispatch(selectViewAction({
      view: "recentsAndSharing"
    }));
  }, 0));
  return r;
};
export const Ay = $$P0;
export const SW = $$w1;
export const vS = $$R2;