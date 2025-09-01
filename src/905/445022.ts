import { NC } from "../905/17179";
import { nF } from "../905/350402";
import { h } from "../3973/647885";
let $$s0 = NC("UPDATE_SAVE_AS");
let $$o3 = nF((e, t) => {
  if (null != e.getState().saveAsState.startTime) {
    let i = t.totalImages;
    let n = t.pendingImageDownload;
    e.dispatch(h({
      key: "save-as",
      progress: i - n,
      total: i
    }));
  }
  e.dispatch($$s0(t));
});
let $$l4 = NC("BEGIN_SAVE_AS");
let $$d2 = NC("CANCEL_SAVE_AS");
let $$c1 = NC("INITIATE_SAVE_AS");
export const CL = $$s0;
export const Dc = $$c1;
export const Mt = $$d2;
export const VQ = $$o3;
export const hf = $$l4;