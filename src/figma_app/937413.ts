import { Ed } from "../figma_app/562352";
import { getFeatureFlags } from "../905/601108";
import a from "../vendor/239910";
import { subscribeMultipleAndAwaitAll } from "../905/553831";
import { serializeQuery } from "../905/634134";
import { XHR } from "../905/910117";
import { canCreateFileType } from "../figma_app/687776";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { selectViewAction } from "../905/929976";
import { Rh } from "../905/844322";
import { showModalHandler } from "../905/156213";
import { i as _$$i } from "../905/182187";
import { an } from "../905/81009";
import { trackFileCopied } from "../figma_app/314264";
import { F as _$$F2 } from "../905/224";
import { extractValuesByKey } from "../905/439650";
import { _ as _$$_ } from "../905/780571";
import { FFileType } from "../figma_app/191312";
import { FileOperationsView } from "../figma_app/43951";
import { liveStoreInstance } from "../905/713695";
import { R5, mx } from "../figma_app/598018";
import { UpsellModalType } from "../905/165519";
import { Bi, vL } from "../905/652992";
import { mapFileTypeToEditorType } from "../figma_app/53721";
import { fileActionEnum } from "../figma_app/630077";
import { F as _$$F3 } from "../905/915030";
import { DV } from "../905/739964";
import { W } from "../905/442612";
import { i as _$$i2 } from "../figma_app/43065";
import { M as _$$M } from "../figma_app/854365";
var s = a;
export let $$F1 = createOptimistThunk(async (e, t) => {
  let {
    fileKeys,
    repoIds
  } = t;
  if (fileKeys.length > 0) {
    let t = e.getState();
    let [n, ...a] = await Promise.all([R5(fileKeys), ...fileKeys.map(e => liveStoreInstance.fetchFile(e))]);
    if (n) {
      let s = t.teams[n];
      let o = new Set(a.map(e => e.editor_type));
      let l = o.size > 1 ? null : o.has(FFileType.WHITEBOARD) ? FFileType.WHITEBOARD : FFileType.DESIGN;
      o.has(FFileType.SITES) && _$$M && !getFeatureFlags().sts_starter_enabled ? e.dispatch(showModalHandler({
        type: _$$M,
        data: {
          team: s
        }
      })) : o.has(FFileType.FIGMAKE) && W() ? e.dispatch(showModalHandler({
        type: _$$i2,
        data: {
          team: s
        }
      })) : e.dispatch(showModalHandler({
        type: DV,
        data: {
          team: s,
          action: fileActionEnum.RESTORE_FILES,
          editorType: o.has(FFileType.FIGMAKE) ? FFileType.FIGMAKE : l,
          resource: o.has(FFileType.FIGMAKE) && !getFeatureFlags().bake_starter_limit ? Bi.FIGMAKE : vL.FILE,
          multipleResources: fileKeys.length > 1,
          currentPlan: _$$F2.Plan.STARTER,
          upsellPlan: _$$F2.Plan.PRO,
          upsellSource: UpsellModalType.CREATE_NEW_FILE
        }
      }));
    } else e.dispatch(Rh({
      fileKeys: s()(a, "key"),
      userInitiated: !0
    }));
  }
  if (repoIds && repoIds.length > 0) {
    let t = await Promise.all(repoIds.map(e => liveStoreInstance.fetchRepo(e)));
    e.dispatch(_$$i({
      reposById: s()(t, "id"),
      userInitiated: !0
    }));
  }
  e.dispatch(an());
});
async function j({
  selectedFileKeys: e,
  currentSpaceDraftsFolderId: t,
  currentUserId: r,
  state: n,
  toDraft: i
}) {
  let a = await subscribeMultipleAndAwaitAll(FileOperationsView, e.map(e => ({
    fileKey: e
  })));
  let s = [];
  let l = new Set();
  a.forEach(({
    result: {
      data: e
    }
  }) => {
    let a;
    let {
      file
    } = e ?? {};
    if (!file) return;
    let {
      project,
      editorType,
      key
    } = file;
    if (null != editorType && l.add(editorType), file.parentOrgId) {
      let e = r && n.orgUsersByOrgId[file.parentOrgId]?.[r];
      a = e ? e.drafts_folder_id : t;
    } else if (file.teamId) {
      let e = n.roles.byTeamId[file.teamId];
      let i = r && e && n.teamUserByTeamId[file.teamId]?.[r];
      a = i ? i.drafts_folder_id : t;
    } else a = t;
    let _ = (a || project?.id) ?? "";
    let h = !i && project && canCreateFileType(project, editorType ?? FFileType.DESIGN) ? project.id : _;
    s.push({
      key,
      folderId: h
    });
  });
  return {
    copyFiles: s,
    editorTypes: l
  };
}
let $$U3 = createOptimistThunk(async (e, t) => {
  let r = e.getState();
  let a = r.user?.id;
  let s = r.user?.personal_drafts_folder_id;
  let o = r.user?.drafts_folder_id;
  let c = [s];
  a && (c.push(...extractValuesByKey(r.orgUsersByOrgId, a).map(e => e.drafts_folder_id)), c.push(..._$$_(r.teamUserByTeamId, a).map(e => e.drafts_folder_id || void 0)));
  let h = Object.keys(r.tileSelect && r.tileSelect[_$$F3.FILES] || {}).concat(Object.keys(r.tileSelect && r.tileSelect[_$$F3.PINNED_FILES] || {}));
  let g = Object.keys(r.tileSelect && r.tileSelect[_$$F3.REPOS] || {});
  (await Promise.all(g.map(e => liveStoreInstance.fetchRepo(e)))).forEach(e => {
    let t = e.default_file_key;
    t && h.push(t);
  });
  let {
    copyFiles,
    editorTypes
  } = await j({
    selectedFileKeys: h,
    currentSpaceDraftsFolderId: o,
    currentUserId: a,
    state: r,
    toDraft: t.toDraft
  });
  let A = await mx(copyFiles);
  if (A) {
    let t = r.teams[A];
    let n = editorTypes.size > 1 ? null : editorTypes.has(FFileType.WHITEBOARD) ? FFileType.WHITEBOARD : FFileType.DESIGN;
    editorTypes.has(FFileType.SITES) && _$$M && !getFeatureFlags().sts_starter_enabled ? e.dispatch(showModalHandler({
      type: _$$M,
      data: {
        team: t
      }
    })) : editorTypes.has(FFileType.FIGMAKE) && W() ? e.dispatch(showModalHandler({
      type: _$$i2,
      data: {
        team: t
      }
    })) : e.dispatch(showModalHandler({
      type: DV,
      data: {
        team: t,
        action: fileActionEnum.DUPLICATE_FILES,
        editorType: n,
        resource: editorTypes.has(FFileType.FIGMAKE) && !getFeatureFlags().bake_starter_limit ? Bi.FIGMAKE : vL.FILE,
        multipleResources: copyFiles.length > 1,
        currentPlan: _$$F2.Plan.STARTER,
        upsellPlan: _$$F2.Plan.PRO,
        upsellSource: UpsellModalType.CREATE_NEW_FILE
      }
    }));
    return;
  }
  let F = copyFiles.map(({
    key: t,
    folderId: r
  }) => () => {
    let n = XHR.post(`/api/multiplayer/${t}/copy?${serializeQuery({
      folder_id: r
    })}`);
    n.catch(({
      data: t
    }) => {
      t && t.message ? e.dispatch(FlashActions.error(t.message)) : e.dispatch(FlashActions.error(getI18nString("file_browser.file_browser_actions.duplicate_file_error")));
    });
    return n;
  });
  Ed(F, 8).then(t => {
    if (!t.some(e => "reject" === e.type)) {
      let n = copyFiles.filter(e => !!e.folderId && c.includes(e.folderId)).length;
      let i = t => t && t.editor_type ? {
        text: getI18nString("general.open"),
        action: () => {
          e.dispatch(selectViewAction({
            view: "fullscreen",
            fileKey: t.key,
            editorType: mapFileTypeToEditorType(t.editor_type)
          }));
          e.dispatch(VisualBellActions.dequeue({}));
        }
      } : void 0;
      if (n > 0 && ("folder" !== r.selectedView.view || r.selectedView.folderId !== o)) {
        let r;
        let a = "";
        let s = 1 === copyFiles.length;
        a = s ? getI18nString("user_view.file_duplicated_to_your_drafts") : n === copyFiles.length ? getI18nString("user_view.files_duplicated_to_your_drafts", {
          intArg: n
        }) : getI18nString("user_view.some_files_duplicated_to_your_drafts");
        r = s ? i(t[0].resolve?.data?.meta) : {
          text: getI18nString("general.show"),
          action: () => {
            o && e.dispatch(selectViewAction({
              view: "folder",
              folderId: o
            }));
            e.dispatch(VisualBellActions.dequeue({}));
          }
        };
        e.dispatch(VisualBellActions.enqueue({
          type: "file_duplicated",
          message: a,
          button: r
        }));
      } else if ("folder" === r.selectedView.view) {
        let r = i(1 === copyFiles.length ? t[0].resolve?.data?.meta : void 0);
        e.dispatch(VisualBellActions.enqueue({
          type: "file_duplicated",
          message: 1 === copyFiles.length ? getI18nString("user_view.file_duplicated") : getI18nString("user_view.files_duplicated", {
            intArg: copyFiles.length
          }),
          button: r
        }));
      }
      let a = t.map(e => null != e.resolve ? e.resolve.data.meta : null).filter(e => null != e).map(e => e);
      trackFileCopied(copyFiles, a, e.getState());
    }
  });
});
let $$B2 = createOptimistThunk(e => {
  e.dispatch($$U3({
    toDraft: !0
  }));
});
let $$G0 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let n = r.user?.drafts_folder_id;
  return XHR.post(`/api/multiplayer/${t.file.key}/copy?${serializeQuery({
    folder_id: n
  })}`).then(() => {
    e.dispatch(FlashActions.flash(getI18nString("user_view.file_duplicated_to_your_drafts")));
  }).catch(({
    data: t
  }) => {
    t && t.message ? e.dispatch(FlashActions.error(t.message)) : e.dispatch(FlashActions.error(getI18nString("file_browser.file_browser_actions.duplicate_file_error")));
  });
});
export const W6 = $$G0;
export const b4 = $$F1;
export const g4 = $$B2;
export const n_ = $$U3;