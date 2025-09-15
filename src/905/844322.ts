import { WB } from "../905/761735";
import { createAtomSetter } from "../figma_app/566371";
import { Q } from "../905/150006";
import { XHR } from "../905/910117";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { sf } from "../905/929976";
import { filePutAction, moveFileAction } from "../figma_app/78808";
import { yJ as _$$yJ } from "../figma_app/240735";
import { trackFileCopyEvent, trackMultipleFileEvent } from "../figma_app/314264";
import { isBranch } from "../905/760074";
import { f as _$$f } from "../905/509236";
import { sR } from "../905/862913";
import { mapFileProperties } from "../figma_app/349248";
import { liveStoreInstance } from "../905/713695";
import { getDraftsSidebarString } from "../figma_app/633080";
import { xY } from "../905/70982";
import { YF, Ip } from "../905/880488";
let $$E2 = createOptimistThunk((e, t) => {
  if (!t.userInitiated) {
    e.dispatch(YF(t));
    return;
  }
  let i = e.getState();
  let r = Object.keys(t.fileKeys);
  let a = XHR.post("/api/files_batch/restore", {
    files: r.map(e => ({
      key: e
    })),
    batch_fail_on_file_limit: !0
  });
  let c = !1;
  if (1 === r.length) {
    let e = r[0];
    let i = t.fileKeys[e];
    i && isBranch(i) && (c = !0);
  }
  let p = Object.keys(t.fileKeys);
  trackFileCopyEvent("File Restored", p, e.getState());
  let m = e.optimisticDispatch(YF(t));
  a.then(t => {
    if (207 === t.status) {
      m.revert();
      try {
        let i = JSON.parse(t.response);
        let n = Object.keys(i.meta.success);
        let r = sR(n, e.getState());
        e.dispatch($$x1({
          fileKeys: r,
          userInitiated: !1
        }));
        e.dispatch(FlashActions.error(i.message));
      } catch (t) {
        c ? e.dispatch(FlashActions.error(getI18nString("collaboration.branching.error_restoring_branches", {
          branchCount: 1
        }))) : e.dispatch(FlashActions.error(getI18nString("file_browser.file_browser_actions.file_restore_error")));
      }
    } else {
      let t;
      let s;
      t = c ? getI18nString("file_browser.file_browser_actions.branch_restored") : getI18nString("file_browser.file_browser_actions.files_restored_success", {
        numFiles: r.length
      });
      let o = null;
      let p = !0;
      for (let e of r) if (null === o) o = i.fileByKey[e].folder_id;else if (o !== i.fileByKey[e].folder_id) {
        p = !1;
        break;
      }
      if (p && !c) {
        let t = e.getState().selectedView;
        t && "folder" === t.view && t.folderId === o || (s = {
          text: `Show in ${i.user?.drafts_folder_id === o ? getDraftsSidebarString() : "project"}`,
          action: () => {
            null != o && e.dispatch(sf({
              view: "folder",
              folderId: o
            }));
            e.dispatch(VisualBellActions.dequeue({}));
          }
        });
      }
      e.dispatch(VisualBellActions.enqueue({
        type: "file_restored",
        message: t,
        button: s
      }));
      let h = r.reduce((e, t) => ({
        File: {
          ...e.File,
          [t]: {
            isTrashed: !1,
            trashedAt: null
          }
        }
      }), {
        File: {}
      });
      m.commit();
      WB()?.optimisticallyUpdate(h, a);
    }
  }).catch(({
    response: t
  }) => {
    try {
      t = JSON.parse(t);
      e.dispatch(FlashActions.error(t.message));
    } catch (t) {
      e.dispatch(FlashActions.error(getI18nString("file_browser.file_browser_actions.file_restore_error")));
    }
    m.revert();
  });
  return a;
});
let $$x1 = createOptimistThunk((e, t) => {
  createAtomSetter(Ip)(t);
  e.dispatch(xY({
    fileKeys: Object.keys(t.fileKeys)
  }));
});
let S = liveStoreInstance.Mutation((e, {
  objects: t,
  livegraphClient: i
}) => {
  let {
    files,
    folderId,
    isDraftsToMove,
    isMultiMove,
    restoreFiles
  } = e;
  files.forEach(e => {
    t.File.update(e.key, e => {
      e.folder_id = folderId;
    });
  });
  let d = XHR.put("/api/files_batch", {
    files: files.map(e => ({
      key: e.key,
      folder_id: folderId,
      drafts_to_move: isDraftsToMove,
      is_multi_move: isMultiMove,
      restore_files: restoreFiles
    }))
  });
  let c = files.reduce((e, t) => {
    let i = mapFileProperties({
      ...t,
      folder_id: folderId
    }, t.key);
    i && (e.File = {
      ...e.File,
      ...i.File
    });
    return e;
  }, {
    File: {}
  });
  i.optimisticallyUpdate(c, d);
  return d;
});
let $$w0 = createOptimistThunk(async (e, t) => {
  let {
    files
  } = t;
  if (0 === files.length) return;
  let n = t.folderId;
  let s = {
    newFileFolderId: [n],
    newFileTeamId: [e.getState().folders[n]?.team_id]
  };
  trackMultipleFileEvent("File Moved", files, s);
  let o = createAtomSetter(S)({
    files,
    isDraftsToMove: t.isDraftsToMove,
    isMultiMove: t.isMultiMove,
    folderId: n,
    restoreFiles: t.restoreFiles
  });
  o.then(({
    data: i
  }) => {
    let n = i && i.meta && i.meta.success || {};
    for (let t in n) e.dispatch(filePutAction({
      file: n[t]
    }));
    let r = i?.meta?.team;
    r && e.dispatch(_$$yJ({
      team: r,
      userInitiated: !1
    }));
    e.dispatch(_$$f({
      folderId: t.folderId,
      name: t.files[0].name,
      folderName: t.folderName,
      fromFileModal: t.fromFileModal,
      onFinishCallback: t.onFinishCallback
    }));
  });
  let d = moveFileAction(t);
  return await Q({
    requestPromise: o,
    fallbackError: getI18nString("file_browser.file_browser_actions.file_processing_error"),
    store: e,
    next: e.dispatch,
    action: d
  });
});
export const Cy = $$w0;
export const Rh = $$x1;
export const xy = $$E2;