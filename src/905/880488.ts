import { createActionCreator } from "../905/73481";
import { createOptimistThunk } from "../905/350402";
import { liveStoreInstance } from "../905/713695";
import { xy } from "../905/844322";
import { sM } from "../905/70982";
let $$l0 = liveStoreInstance.Mutation((e, {
  objects: t,
  reduxStore: i
}) => {
  let n = Object.keys(e.fileKeys);
  let r = i.dispatch(xy(e));
  n.forEach(e => {
    t.File.update(e, e => {
      e.trashed_at = null;
    });
  });
  return r;
});
let $$d3 = createActionCreator("RESTORE_TRASHED_FILES");
let $$c4 = createActionCreator("DELETE_FILES_PERMANENTLY");
let $$u1 = createActionCreator("DELETE_FILES");
let $$p2 = createOptimistThunk((e, t) => {
  e.dispatch($$u1(t));
  e.dispatch(sM({
    fileKeys: Object.keys(t.fileKeys)
  }));
});
export const Ip = $$l0;
export const P6 = $$u1;
export const VK = $$p2;
export const YF = $$d3;
export const YK = $$c4;