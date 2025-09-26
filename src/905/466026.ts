import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456";
import { createActionCreator } from "../905/73481";
import { isDevEnvironment } from "../figma_app/169182";
import { WB } from "../905/761735";
import { sendWithRetry } from "../905/910117";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk, createOptimistAction } from "../905/350402";
import { mapFileAndRepoProperties, mapFileLinkExpirationConfig, mapFileLinkExpirationConfigOptimistic } from "../figma_app/349248";
let $$m6 = createActionCreator("REPO_SET_SELECTED_BRANCH");
let $$h2 = createOptimistThunk((e, {
  repo: t,
  name: i
}) => {
  e.dispatch($$_12({
    repo: {
      id: t.id,
      name: i
    },
    userInitiated: !0
  }));
});
let $$g10 = createOptimistThunk((e, {
  repo: t,
  onError: i,
  onSuccess: n,
  linkExpirationConfigId: r,
  currentUser: d
}) => {
  let u = sendWithRetry.put(`/api/repo/${t.id}`, t).then(() => {
    n?.();
  }).catch(t => {
    if (i?.(), e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("collaboration.branching.an_error_occurred_while_updating_this_file"),
      error: !0
    })), isDevEnvironment()) throw t;
  });
  let m = {
    ...mapFileAndRepoProperties(t),
    ...mapFileLinkExpirationConfig(t, r, d)
  };
  let h = mapFileLinkExpirationConfigOptimistic(t, r, d);
  Object.keys(m).length > 0 && WB().optimisticallyUpdate(m, u);
  h && WB().optimisticallyCreate(h, u);
});
let $$f0 = createActionCreator("REPO_PERMISSIONS_PUT");
let $$_12 = createOptimistAction("REPO_PUT", async (e, {
  repo: t,
  userInitiated: i
}, {
  optimistId: r
}) => {
  i && (await sendWithRetry.put(`/api/repo/${t.id}`, t).then(t => {
    e.dispatch(createOptimistCommitAction(r));
  }).catch(t => {
    e.dispatch(createOptimistRevertAction(r));
    e.dispatch(VisualBellActions.enqueue({
      message: resolveMessage(t, t.data?.message || getI18nString("collaboration.branching.an_error_occurred_while_updating_this_file")),
      error: !0
    }));
  }));
});
let $$A11 = createActionCreator("REPO_BATCH_PUT");
let $$y9 = createActionCreator("REPO_BATCH_PUT_IN_SAME_FOLDER");
let $$b3 = createActionCreator("REPO_POST");
let $$v1 = createActionCreator("RECENT_BRANCH_POST");
let $$I4 = createActionCreator("RECENT_REPOS_DELETE");
let $$E8 = createActionCreator("RECENT_REPO_PUT");
let $$x7 = createActionCreator("RECENT_REPOS_INIT");
let $$S5 = createActionCreator("RECENT_REPO_POST");
export const CN = $$f0;
export const ER = $$v1;
export const NN = $$h2;
export const bE = $$b3;
export const iC = $$I4;
export const iE = $$S5;
export const kE = $$m6;
export const nF = $$x7;
export const nK = $$E8;
export const nX = $$y9;
export const og = $$g10;
export const uo = $$A11;
export const yJ = $$_12;
