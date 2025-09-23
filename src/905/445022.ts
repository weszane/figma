import { createActionCreator } from "../905/73481";
import { createOptimistThunk } from "../905/350402";
import { progressSetAction } from "../3973/647885";
let $$s0 = createActionCreator("UPDATE_SAVE_AS");
let $$o3 = createOptimistThunk((e, t) => {
  if (null != e.getState().saveAsState.startTime) {
    let i = t.totalImages;
    let n = t.pendingImageDownload;
    e.dispatch(progressSetAction({
      key: "save-as",
      progress: i - n,
      total: i
    }));
  }
  e.dispatch($$s0(t));
});
let $$l4 = createActionCreator("BEGIN_SAVE_AS");
let $$d2 = createActionCreator("CANCEL_SAVE_AS");
let $$c1 = createActionCreator("INITIATE_SAVE_AS");
export const CL = $$s0;
export const Dc = $$c1;
export const Mt = $$d2;
export const VQ = $$o3;
export const hf = $$l4;