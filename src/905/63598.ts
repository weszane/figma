import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { createOptimistThunk } from "../905/350402";
import { h, I } from "../3973/647885";
let l = "library-update";
let d = "library-update";
function c(e) {
  e(F.enqueue({
    type: l,
    message: getI18nString("design_systems.update_actions.updating_assets"),
    icon: zX.PROGRESS,
    progressKey: d
  }));
}
function u(e) {
  return e.getState().progress[d] ?? {
    progress: 0,
    total: 0
  };
}
let $$p2 = createOptimistThunk((e, t) => {
  e.dispatch(h({
    key: d,
    progress: 0,
    total: t.total
  }));
  c(e.dispatch);
});
let $$m3 = createOptimistThunk((e, t) => {
  let i = u(e);
  i.progress + t.delta >= i.total ? e.dispatch($$h1()) : (e.dispatch(h({
    key: d,
    progress: i.progress + t.delta,
    total: i.total
  })), c(e.dispatch));
});
let $$h1 = createOptimistThunk(e => {
  let t = u(e);
  e.dispatch(h({
    key: d,
    progress: t.total,
    total: t.total
  }));
  e.dispatch(F.dequeue({
    matchType: l
  }));
  e.dispatch(F.enqueue({
    type: l,
    message: getI18nString("design_systems.update_actions.update_success"),
    icon: zX.CHECK
  }));
});
let $$g0 = createOptimistThunk(e => {
  e.dispatch(I({
    key: d
  }));
  e.dispatch(F.dequeue({
    matchType: l
  }));
  e.dispatch(F.enqueue({
    type: l,
    message: getI18nString("design_systems.update_actions.update_failure"),
    icon: zX.EXCLAMATION
  }));
});
export const V2 = $$g0;
export const kX = $$h1;
export const ni = $$p2;
export const qB = $$m3;