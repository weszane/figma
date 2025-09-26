import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456";
import { handleOptimistTransaction } from "../905/842794";
import { createActionCreator } from "../905/73481";
import { customHistory } from "../905/612521";
import { sendWithRetry } from "../905/910117";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { selectViewAction } from "../905/929976";
import { yJ } from "../905/466026";
import { b4 } from "../figma_app/937413";
import { f as _$$f } from "../905/509236";
let $$f3 = createActionCreator("REPO_MOVE");
let $$_5 = createOptimistThunk(async (e, {
  repos: t,
  folderId: i,
  folderName: n,
  fromFileModal: a,
  onFinishCallback: s,
  isMultiMove: u,
  restoreFiles: p
}) => {
  if (0 === t.length) return;
  let h = t.map(e => ({
    id: e.id,
    folder_id: i
  }));
  let _ = {};
  for (let {
    id,
    folder_id
  } of t) _[id] = folder_id;
  let A = sendWithRetry.put("/api/repos_batch", {
    repos: h,
    is_multi_move: u,
    restore_files: p
  });
  await handleOptimistTransaction(A, e.dispatch, $$f3({
    repos: t,
    folderId: i
  })).then(({
    data: r
  }) => {
    let o = r.meta?.success || {};
    for (let t in o) e.dispatch(yJ({
      repo: o[t]
    }));
    e.dispatch(_$$f({
      folderId: i,
      folderName: n,
      name: t[0].name,
      fromFileModal: a,
      onFinishCallback: s
    }));
  }).catch(t => {
    e.dispatch(VisualBellActions.enqueue({
      message: resolveMessage(t, t.data?.message || getI18nString("collaboration.branching.an_error_occurred_while_updating_this_file")),
      error: !0
    }));
  });
});
let A = (e, t, i, r, a, s = []) => {
  a && sendWithRetry.del("/api/repos_batch", {
    repo_ids: t,
    trash_repos: !i
  }).then(() => {
    let a = i ? getI18nString("collaboration.branching.files_permanently_deleted") : getI18nString("collaboration.branching.files_trashed");
    e.dispatch(createOptimistCommitAction(r));
    e.dispatch(VisualBellActions.enqueue({
      message: a,
      button: i ? void 0 : {
        text: getI18nString("collaboration.branching.undo_delete"),
        action: () => {
          e.dispatch(b4({
            repoIds: t,
            fileKeys: s
          }));
          e.dispatch(VisualBellActions.dequeue({}));
        }
      }
    }));
  }).catch(t => {
    e.dispatch(createOptimistRevertAction(r));
    e.dispatch(VisualBellActions.enqueue({
      message: resolveMessage(t, t.data?.message || getI18nString("collaboration.branching.an_error_occurred_while_deleting_these_files")),
      error: !0
    }));
  });
};
let $$y1 = createActionCreator("REPO_DELETE");
let $$b4 = createOptimistThunk((e, {
  reposById: t,
  userInitiated: i,
  fileKeys: n
}) => {
  let {
    optimistId
  } = e.optimisticDispatch($$y1({
    reposById: t,
    userInitiated: i,
    fileKeys: n
  }));
  A(e, Object.keys(t), !1, optimistId, i, n || []);
  let a = e.getState();
  if (a.user) {
    let i = a.openFile;
    i && i.fileRepoId && t[i.fileRepoId] && e.dispatch(selectViewAction({
      view: "recentsAndSharing"
    }));
  } else customHistory.reload("Repo deleted");
});
let $$v0 = createActionCreator("REPO_DELETE_FOREVER");
let $$I2 = createOptimistThunk((e, {
  repoIds: t,
  userInitiated: i
}) => {
  let {
    optimistId
  } = e.optimisticDispatch($$v0({
    repoIds: t,
    userInitiated: i
  }));
  A(e, t, !0, optimistId, i);
});
export const $B = $$v0;
export const Y4 = $$y1;
export const YM = $$I2;
export const aL = $$f3;
export const hT = $$b4;
export const mE = $$_5;
