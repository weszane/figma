import { ServiceCategories } from "../905/165054";
import { WorkspaceType, Fullscreen, SchemaJoinStatus, AutosaveEventType, ViewType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { parseAndNormalizeQuery } from "../905/634134";
import { reportError } from "../905/11";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { switchAccountAndNavigate } from "../figma_app/976345";
import { canAccessDevModeWithOrg } from "../905/898378";
import { InspectState } from "../905/560959";
import { $ as _$$$ } from "../905/532878";
import { createOptimistThunk } from "../905/350402";
import { $ as _$$$2 } from "../905/489647";
import { selectViewAction } from "../905/929976";
import { kq } from "../905/292918";
import { Ad } from "../905/300250";
import { updateLocalLibraryItemsThunk } from "../figma_app/864378";
import { showModalHandler } from "../905/156213";
import { searchThunk } from "../905/977218";
import { setTeamOptimistThunk } from "../figma_app/240735";
import { Xg } from "../figma_app/199513";
import { fullscreenValue, fullscreenPromise } from "../figma_app/455680";
import { subscribeToContainingPage } from "../figma_app/582924";
import { waitForJoinStatus } from "../905/346794";
import { Lp } from "../905/309846";
import { usedComponentsPromise, findLibraryNameForAsset } from "../figma_app/646357";
import { fetchTeamRoles } from "../905/672897";
import { FEditorType } from "../figma_app/53721";
import { SelectorType } from "../figma_app/707808";
import { teamAPIClient } from "../905/834575";
import { fullscreenRestoreModal } from "../905/26554";
import { emptyFunction } from "../figma_app/292324";
import { filesByLibraryKeyAtom } from "../905/977779";
import { getFullscreenViewFile } from "../figma_app/516028";
import { mapToEditorType } from "../figma_app/300692";
import { parseSearchParams } from "../905/792802";
import { mapPathToSelectedView } from "../figma_app/193867";
import { mapViewTypeToMainfestEditorType, parsePluginParams } from "../905/327571";
import { setActiveVersion, enterVersionHistoryMode } from "../figma_app/841351";
let $$H = createOptimistThunk((e, t, {
  liveStore: i
}) => {
  let f = e.getState();
  if (f.openFile) {
    let E = parseAndNormalizeQuery(t.params || "");
    let F = t.hash;
    let B = E.fuid;
    B && B !== f.user?.id && e.dispatch(switchAccountAndNavigate({
      workspace: {
        userId: B,
        orgId: f.openFile.parentOrgId
      },
      view: f.selectedView
    }));
    let V = E.mode || E.m || "auto";
    let H = f.selectedView;
    let W = "inspect" === V || "dev" === V;
    H.editorType === FEditorType.Design && W ? fullscreenValue.requestEditorType(WorkspaceType.DEV_HANDOFF) : H.editorType !== FEditorType.DevHandoff || W || "auto" === V || fullscreenValue.requestEditorType(WorkspaceType.DESIGN);
    E["version-id"] && (e.dispatch(setActiveVersion({
      id: E["version-id"]
    })), e.dispatch(enterVersionHistoryMode()));
    let K = !1;
    let Y = canAccessDevModeWithOrg(f);
    if ("1" === E.vars) {
      atomStoreManager.set(_$$$, InspectState.DirectUrl);
      e.dispatch(selectViewAction({
        ...H,
        showDevModeVariablesTable: !0,
        devModeVariablesTableSelectedVariable: E["var-id"]
      }));
    } else if (Y) {
      let t = e.getState().selectedView;
      if ("1" === E["ready-for-dev"]) e.dispatch(selectViewAction({
        ...t,
        showOverview: !0,
        devModeFocusId: void 0
      }));else if (W && E["focus-id"]) {
        K = !0;
        e.dispatch(selectViewAction({
          ...t,
          showOverview: !1,
          devModeFocusId: E["focus-id"]
        }));
      } else if ("1" === E["component-browser"]) {
        let i = SelectorType.NONE;
        "repo" === E["gh-settings"] ? i = SelectorType.REPO_SELECTOR : "dirs" === E["gh-settings"] ? i = SelectorType.DIRECTORY_SELECTOR : "1" === E["gh-repo-selector"] && (i = SelectorType.REPO_SELECTOR);
        e.dispatch(selectViewAction({
          ...t,
          showDevModeComponentBrowser: !0,
          componentKey: E["component-key"] || void 0,
          githubRepositorySelectorMode: i
        }));
      }
    }
    "1" !== E.vars && atomStoreManager.set(_$$$, null);
    f.user && E["try-plugin-id"] && permissionScopeHandler.user("try-plugin-desktop", () => {
      e.dispatch(_$$$2({
        tryPluginId: E["try-plugin-id"],
        tryPluginName: E["try-plugin-name"],
        tryPluginVersionId: E["try-plugin-version-id"],
        isWidget: "1" === E["is-widget"],
        fullscreenEditorType: mapToEditorType(mapViewTypeToMainfestEditorType(E["try-plugin-editor-type"] ?? "")),
        isPlaygroundFile: "1" === E["is-playground-file"],
        tryPluginParams: parsePluginParams(E),
        fileKey: E["try-plugin-file-key"]
      }));
    });
    let q = t => {
      let i = t.guid;
      let n = "NONE" !== t.styleType;
      let a = "SYMBOL" === t.type;
      let s = t.parentNode;
      if (n) Fullscreen.selectStyleByGuid(i);else if (a && s && "CANVAS" === s.type && !s.visible) usedComponentsPromise.then(async () => {
        let t = atomStoreManager.get(filesByLibraryKeyAtom);
        let n = findLibraryNameForAsset(i, f.library.movedLibraryItems.local, f.library.publishedByLibraryKey.components, t) || void 0;
        let r = await getFullscreenViewFile(e);
        r?.canEdit ? e.dispatch(showModalHandler({
          type: fullscreenRestoreModal,
          data: {
            nodeId: i,
            movedToFile: n
          }
        })) : e.dispatch(VisualBellActions.enqueue({
          message: n ? getI18nString("visual_bell.main_component_moved", {
            movedToFile: n
          }) : getI18nString("visual_bell.main_component_deleted")
        }));
      });else {
        if (K) return;
        Fullscreen.panToNode(i, !0);
      }
    };
    let $ = E["node-id"];
    let Z = $ ? f.mirror.sceneGraph.get($) : null;
    if (null != Z ? q(Z) : null != $ && "fullscreen" === H.view && (async () => {
      await fullscreenPromise;
      await fullscreenValue.onReady();
      await waitForJoinStatus(SchemaJoinStatus.JOINED);
      await subscribeToContainingPage($, AutosaveEventType.PAGE_INITIAL_LOAD);
      getSingletonSceneGraph().setCurrentPageFromNodeAsync($);
      let e = $ ? f.mirror.sceneGraph.get($) : null;
      e && q(e);
    })(), F) {
      let t = F.slice(1);
      "fullscreen" === f.selectedView.view && f.mirror.appModel.topLevelMode !== ViewType.BRANCHING && "commentPreferences" !== t && f.selectedView?.commentThreadId !== t && e.dispatch(selectViewAction({
        ...f.selectedView,
        commentThreadId: t
      }));
    }
    if (E["merge-branch-key"] && E["merge-source-key"] && E["merge-direction"]) {
      let {
        selectedView
      } = e.getState();
      if ("fullscreen" === selectedView.view) {
        let t = {
          branchKey: E["merge-branch-key"],
          sourceKey: E["merge-source-key"],
          direction: E["merge-direction"]
        };
        if (E["merge-to-checkpoint-key"] && E["merge-from-checkpoint-key"] && (t.toCheckpointKey = E["merge-to-checkpoint-key"], t.fromCheckpointKey = E["merge-from-checkpoint-key"]), E["merge-back-key"] && (t.backFileKey = E["merge-back-key"]), E["merge-on-file-open"]) {
          t.mergeOnFileOpen = !0;
          let i = f.openFile;
          if (!i) return;
          E["checkpoint-diff-url"] && (t.checkpointDiffURL = E["checkpoint-diff-url"]);
          e.dispatch(Ad({
            mergeParams: t,
            editingFile: {
              key: i.key,
              file_repo_id: i.fileRepoId
            },
            migrationVersion: f.fileVersion,
            user: f.user
          }));
          e.dispatch(updateLocalLibraryItemsThunk());
        } else e.dispatch(kq(t));
      }
    }
    (async () => {
      try {
        let {
          teams,
          user,
          openFile
        } = f;
        let a = E.teamToMoveFileToOnNavigate;
        if (a && openFile) {
          let s = null;
          if (0 === Object.keys(teams).length) {
            let {
              data
            } = await teamAPIClient.getTeam({
              teamId: a
            });
            s = data.meta;
            e.dispatch(setTeamOptimistThunk({
              team: data.meta,
              userInitiated: !1
            }));
            await fetchTeamRoles(a, e);
          } else s = a ? teams[a] : null;
          if (!s) return;
          let o = (await i.fetch(Xg({
            teamId: a
          }), {
            policy: "networkOnly"
          }))[0] || null;
          Lp(s, o, user, e, {
            ...openFile,
            editor_type: openFile.editorType,
            folder_id: openFile.folderId,
            team_id: openFile.teamId
          });
        }
      } catch (e) {
        reportError(ServiceCategories.DESKTOP, e);
      }
    })();
  }
});
let W = createOptimistThunk((e, t) => {
  let {
    selectedView
  } = e.getState();
  if ("prototype" === selectedView.view) {
    let n = selectedView.isPresenterView ? "presenter" : "slides" === selectedView.file.editor_type ? "deck" : "proto";
    let r = mapPathToSelectedView(e.getState(), `/${n}/${selectedView.file.key}`, t.params, t.hash);
    r && (r.nodeId !== selectedView.nodeId || r.startingPointNodeId !== selectedView.startingPointNodeId) && (emptyFunction(), e.dispatch(selectViewAction(r)));
  }
});
let K = createOptimistThunk((e, t) => {
  if (!t.params) return;
  let i = e.getState();
  if ("search" === i.selectedView.view) {
    let {
      query,
      searchModelType,
      searchScope
    } = parseSearchParams(t.params, i, i.selectedView);
    query && e.dispatch(searchThunk({
      searchModelType,
      query,
      searchScope,
      debounce: !1
    }));
  }
});
let $$Y0 = createOptimistThunk((e, t) => {
  let i = new URL(window.location.href).searchParams;
  let n = new URLSearchParams(t.params);
  let r = Array.from(n.entries()).every(([e, t]) => "node-id" === e ? i.get(e)?.replace("-", ":") === t.replace("-", ":") : i.get(e) === t);
  let a = null != i.get("m") && null == n.get("m");
  let s = null != i.get("version-id") && null == n.get("version-id");
  (!r || a || s || new URL(window.location.href).hash !== t.hash) && (e.dispatch($$H(t)), e.dispatch(W(t)), e.dispatch(K(t)));
});
export const H = $$Y0;