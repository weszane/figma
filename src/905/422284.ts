import { ServiceCategories as _$$e } from "../905/165054";
import { _YF, glU, kul, dPJ, lyf } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { parseAndNormalizeQuery } from "../905/634134";
import { reportError } from "../905/11";
import { getI18nString } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { _l } from "../figma_app/976345";
import { b as _$$b } from "../905/898378";
import { Nh } from "../905/560959";
import { $ as _$$$ } from "../905/532878";
import { nF } from "../905/350402";
import { $ as _$$$2 } from "../905/489647";
import { sf } from "../905/929976";
import { kq } from "../905/292918";
import { Ad } from "../905/300250";
import { Nf } from "../figma_app/864378";
import { to } from "../905/156213";
import { PI } from "../905/977218";
import { yJ } from "../figma_app/240735";
import { Xg } from "../figma_app/199513";
import { Y5, lQ } from "../figma_app/455680";
import { IL } from "../figma_app/582924";
import { oJ } from "../905/346794";
import { Lp } from "../905/309846";
import { QO, VO } from "../figma_app/646357";
import { xN } from "../905/672897";
import { FEditorType } from "../figma_app/53721";
import { e6 } from "../figma_app/707808";
import { $ as _$$$3 } from "../905/834575";
import { l as _$$l } from "../905/26554";
import { on } from "../figma_app/292324";
import { qp } from "../905/977779";
import { Dz } from "../figma_app/516028";
import { Df } from "../figma_app/300692";
import { jr } from "../905/792802";
import { vU } from "../figma_app/193867";
import { zO, Ex } from "../905/327571";
import { Nb, _b } from "../figma_app/841351";
let $$H = nF((e, t, {
  liveStore: i
}) => {
  let f = e.getState();
  if (f.openFile) {
    let E = parseAndNormalizeQuery(t.params || "");
    let F = t.hash;
    let B = E.fuid;
    B && B !== f.user?.id && e.dispatch(_l({
      workspace: {
        userId: B,
        orgId: f.openFile.parentOrgId
      },
      view: f.selectedView
    }));
    let V = E.mode || E.m || "auto";
    let H = f.selectedView;
    let W = "inspect" === V || "dev" === V;
    H.editorType === FEditorType.Design && W ? Y5.requestEditorType(_YF.DEV_HANDOFF) : H.editorType !== FEditorType.DevHandoff || W || "auto" === V || Y5.requestEditorType(_YF.DESIGN);
    E["version-id"] && (e.dispatch(Nb({
      id: E["version-id"]
    })), e.dispatch(_b()));
    let K = !1;
    let Y = _$$b(f);
    if ("1" === E.vars) {
      atomStoreManager.set(_$$$, Nh.DirectUrl);
      e.dispatch(sf({
        ...H,
        showDevModeVariablesTable: !0,
        devModeVariablesTableSelectedVariable: E["var-id"]
      }));
    } else if (Y) {
      let t = e.getState().selectedView;
      if ("1" === E["ready-for-dev"]) e.dispatch(sf({
        ...t,
        showOverview: !0,
        devModeFocusId: void 0
      }));else if (W && E["focus-id"]) {
        K = !0;
        e.dispatch(sf({
          ...t,
          showOverview: !1,
          devModeFocusId: E["focus-id"]
        }));
      } else if ("1" === E["component-browser"]) {
        let i = e6.NONE;
        "repo" === E["gh-settings"] ? i = e6.REPO_SELECTOR : "dirs" === E["gh-settings"] ? i = e6.DIRECTORY_SELECTOR : "1" === E["gh-repo-selector"] && (i = e6.REPO_SELECTOR);
        e.dispatch(sf({
          ...t,
          showDevModeComponentBrowser: !0,
          componentKey: E["component-key"] || void 0,
          githubRepositorySelectorMode: i
        }));
      }
    }
    "1" !== E.vars && atomStoreManager.set(_$$$, null);
    f.user && E["try-plugin-id"] && l7.user("try-plugin-desktop", () => {
      e.dispatch(_$$$2({
        tryPluginId: E["try-plugin-id"],
        tryPluginName: E["try-plugin-name"],
        tryPluginVersionId: E["try-plugin-version-id"],
        isWidget: "1" === E["is-widget"],
        fullscreenEditorType: Df(zO(E["try-plugin-editor-type"] ?? "")),
        isPlaygroundFile: "1" === E["is-playground-file"],
        tryPluginParams: Ex(E),
        fileKey: E["try-plugin-file-key"]
      }));
    });
    let q = t => {
      let i = t.guid;
      let n = "NONE" !== t.styleType;
      let a = "SYMBOL" === t.type;
      let s = t.parentNode;
      if (n) glU.selectStyleByGuid(i);else if (a && s && "CANVAS" === s.type && !s.visible) QO.then(async () => {
        let t = atomStoreManager.get(qp);
        let n = VO(i, f.library.movedLibraryItems.local, f.library.publishedByLibraryKey.components, t) || void 0;
        let r = await Dz(e);
        r?.canEdit ? e.dispatch(to({
          type: _$$l,
          data: {
            nodeId: i,
            movedToFile: n
          }
        })) : e.dispatch(_$$F.enqueue({
          message: n ? getI18nString("visual_bell.main_component_moved", {
            movedToFile: n
          }) : getI18nString("visual_bell.main_component_deleted")
        }));
      });else {
        if (K) return;
        glU.panToNode(i, !0);
      }
    };
    let $ = E["node-id"];
    let Z = $ ? f.mirror.sceneGraph.get($) : null;
    if (null != Z ? q(Z) : null != $ && "fullscreen" === H.view && (async () => {
      await lQ;
      await Y5.onReady();
      await oJ(kul.JOINED);
      await IL($, dPJ.PAGE_INITIAL_LOAD);
      getSingletonSceneGraph().setCurrentPageFromNodeAsync($);
      let e = $ ? f.mirror.sceneGraph.get($) : null;
      e && q(e);
    })(), F) {
      let t = F.slice(1);
      "fullscreen" === f.selectedView.view && f.mirror.appModel.topLevelMode !== lyf.BRANCHING && "commentPreferences" !== t && f.selectedView?.commentThreadId !== t && e.dispatch(sf({
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
          e.dispatch(Nf());
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
            } = await _$$$3.getTeam({
              teamId: a
            });
            s = data.meta;
            e.dispatch(yJ({
              team: data.meta,
              userInitiated: !1
            }));
            await xN(a, e);
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
        reportError(_$$e.DESKTOP, e);
      }
    })();
  }
});
let W = nF((e, t) => {
  let {
    selectedView
  } = e.getState();
  if ("prototype" === selectedView.view) {
    let n = selectedView.isPresenterView ? "presenter" : "slides" === selectedView.file.editor_type ? "deck" : "proto";
    let r = vU(e.getState(), `/${n}/${selectedView.file.key}`, t.params, t.hash);
    r && (r.nodeId !== selectedView.nodeId || r.startingPointNodeId !== selectedView.startingPointNodeId) && (on(), e.dispatch(sf(r)));
  }
});
let K = nF((e, t) => {
  if (!t.params) return;
  let i = e.getState();
  if ("search" === i.selectedView.view) {
    let {
      query,
      searchModelType,
      searchScope
    } = jr(t.params, i, i.selectedView);
    query && e.dispatch(PI({
      searchModelType,
      query,
      searchScope,
      debounce: !1
    }));
  }
});
let $$Y0 = nF((e, t) => {
  let i = new URL(window.location.href).searchParams;
  let n = new URLSearchParams(t.params);
  let r = Array.from(n.entries()).every(([e, t]) => "node-id" === e ? i.get(e)?.replace("-", ":") === t.replace("-", ":") : i.get(e) === t);
  let a = null != i.get("m") && null == n.get("m");
  let s = null != i.get("version-id") && null == n.get("version-id");
  (!r || a || s || new URL(window.location.href).hash !== t.hash) && (e.dispatch($$H(t)), e.dispatch(W(t)), e.dispatch(K(t)));
});
export const H = $$Y0;