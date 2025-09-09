import { UIVisibilitySetting } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { NC } from "../905/17179";
import { desktopAPIInstance } from "../figma_app/876459";
import { s as _$$s } from "../905/573154";
import { getI18nString } from "../905/303541";
import { J } from "../905/231762";
import { $ } from "../905/489647";
import { sf } from "../905/929976";
import { Z, kq } from "../905/292918";
import { Ad } from "../905/300250";
import { Y6 } from "../figma_app/91703";
import { Nf } from "../figma_app/864378";
import { isBranchAlt } from "../905/760074";
import { rJ } from "../905/327855";
import { Dd } from "../figma_app/682945";
import { _b, yH, vF } from "../figma_app/841351";
import { SourceDirection } from "../905/535806";
import { W } from "../905/985740";
import { h as _$$h } from "../905/438683";
import { createOptimistThunk } from "../905/350402";
let $$x1 = NC("FULLSCREEN_DOCUMENT_LOADED");
let $$S0 = createOptimistThunk(e => {
  if (desktopAPIInstance) {
    let t = e.getState().selectedView;
    !desktopAPIInstance.isFileBrowserTab() && ("fullscreen" !== t.view || t.fileKey) && desktopAPIInstance.setLoading(!1);
  }
  let t = e.getState();
  let i = t.selectedView;
  t.openFile && Dd(t.openFile.key, i.editorType);
  i.fileKey && i.versionId && W.getVersion({
    fileKey: i.fileKey,
    versionId: i.versionId
  }).then(i => {
    e.dispatch(_b());
    e.dispatch(yH({
      version: i.data.meta.version,
      fetchedPageIds: new Set(),
      currentPageNodeId: t.mirror.appModel.currentPage,
      eventType: "LOAD_NEW_VERSION"
    }));
  }).catch(t => {
    e.dispatch(_b());
    let i = "missing_authentication" === t.data.reason ? getI18nString("collaboration.feedback.version_history_authentication_error") : getI18nString("collaboration.feedback.version_history_error");
    e.dispatch(_$$s.error(J(t, i)));
    e.dispatch(Y6({
      mode: UIVisibilitySetting.OFF
    }));
  });
  i.fileKey && i.compareVersionId && (e.dispatch(_b()), e.dispatch(vF({
    fromVersionId: i.compareVersionId
  })));
  i && i.fileKey && i.showCommentPreferencesPicker && _$$h();
  let a = t.openFile;
  let E = i.reviewNumber;
  if (i && i.framePresetName) {
    let t = i.framePresetName;
    e.dispatch(sf({
      ...i,
      framePresetName: void 0
    }));
    rJ(t);
  }
  if (t.user && a && isBranchAlt(a) && (e.dispatch(Z({
    branchFileKey: a.key
  })), E && !isNaN(E) || i.openReview)) {
    let t = {
      branchKey: a.key,
      sourceKey: a.sourceFileKey,
      direction: SourceDirection.TO_SOURCE
    };
    e.dispatch(kq(t));
  }
  if (i.mergeParams) {
    if (e.dispatch(sf({
      ...i,
      mergeParams: void 0,
      framePresetName: void 0
    })), i.mergeParams.mergeOnFileOpen) {
      let n = t.openFile;
      if (!n) return;
      e.dispatch(Ad({
        mergeParams: i.mergeParams,
        editingFile: {
          key: n.key,
          file_repo_id: n.fileRepoId
        },
        migrationVersion: t.fileVersion,
        user: t.user,
        branchModalTrackingId: i.mergeParams.branchModalTrackingId
      }));
      e.dispatch(Nf());
    } else e.dispatch(kq(i.mergeParams));
  }
  let {
    tryPluginId,
    tryPluginName,
    tryPluginVersionId,
    isWidget,
    editorType,
    isPlaygroundFile,
    fileKey,
    tryPluginParams
  } = i;
  t.user && tryPluginId && tryPluginName && tryPluginVersionId && fileKey && editorType && permissionScopeHandler.user("try-plugin", () => {
    e.dispatch($({
      tryPluginId,
      tryPluginName,
      tryPluginVersionId,
      isWidget: !!isWidget,
      fullscreenEditorType: editorType,
      isPlaygroundFile: !!isPlaygroundFile,
      fileKey,
      tryPluginParams
    }));
  });
  e.dispatch($$x1());
});
export const X = $$S0;
export const o = $$x1;