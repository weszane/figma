import { createActionCreator } from "../905/73481";
import { createOptimistThunk } from "../905/350402";
import { s } from "../905/506024";
let $$s2 = createActionCreator("ADD_TEMPLATE_TO_RECENTS_WITH_USER_ID");
let $$o0 = createOptimistThunk((e, t) => {
  let i = e.getState();
  let n = s(i);
  e.dispatch($$s2({
    ...t,
    userId: n
  }));
});
let $$l1 = createActionCreator("SET_RECENT_TEMPLATES");
export const Hx = $$o0;
export const nM = $$l1;
export const pj = $$s2;