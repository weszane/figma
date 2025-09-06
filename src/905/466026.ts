import { c as _$$c, r as _$$r } from "../905/676456";
import { NC } from "../905/17179";
import { isDevEnvironment } from "../figma_app/169182";
import { WB } from "../905/761735";
import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { J } from "../905/231762";
import { F } from "../905/302958";
import { nF as _$$nF, MM } from "../905/350402";
import { WW, yT, TP } from "../figma_app/349248";
let $$m6 = NC("REPO_SET_SELECTED_BRANCH");
let $$h2 = _$$nF((e, {
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
let $$g10 = _$$nF((e, {
  repo: t,
  onError: i,
  onSuccess: n,
  linkExpirationConfigId: r,
  currentUser: d
}) => {
  let u = XHR.put(`/api/repo/${t.id}`, t).then(() => {
    n?.();
  }).catch(t => {
    if (i?.(), e.dispatch(F.enqueue({
      message: getI18nString("collaboration.branching.an_error_occurred_while_updating_this_file"),
      error: !0
    })), isDevEnvironment()) throw t;
  });
  let m = {
    ...WW(t),
    ...yT(t, r, d)
  };
  let h = TP(t, r, d);
  Object.keys(m).length > 0 && WB().optimisticallyUpdate(m, u);
  h && WB().optimisticallyCreate(h, u);
});
let $$f0 = NC("REPO_PERMISSIONS_PUT");
let $$_12 = MM("REPO_PUT", async (e, {
  repo: t,
  userInitiated: i
}, {
  optimistId: r
}) => {
  i && (await XHR.put(`/api/repo/${t.id}`, t).then(t => {
    e.dispatch(_$$c(r));
  }).catch(t => {
    e.dispatch(_$$r(r));
    e.dispatch(F.enqueue({
      message: J(t, t.data?.message || getI18nString("collaboration.branching.an_error_occurred_while_updating_this_file")),
      error: !0
    }));
  }));
});
let $$A11 = NC("REPO_BATCH_PUT");
let $$y9 = NC("REPO_BATCH_PUT_IN_SAME_FOLDER");
let $$b3 = NC("REPO_POST");
let $$v1 = NC("RECENT_BRANCH_POST");
let $$I4 = NC("RECENT_REPOS_DELETE");
let $$E8 = NC("RECENT_REPO_PUT");
let $$x7 = NC("RECENT_REPOS_INIT");
let $$S5 = NC("RECENT_REPO_POST");
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