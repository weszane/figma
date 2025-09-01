import { nF } from "../905/350402";
import { F } from "../905/302958";
import { XU } from "../905/576487";
export let $$a0 = nF((e, t) => {
  if (!t.fromFileModal) return;
  if (t.onFinishCallback) {
    t.onFinishCallback(t.folderName);
    return;
  }
  let i = e.getState();
  let a = "" === t.folderName ? "Drafts" : t.folderName;
  let s = i.modalShown;
  if (!s || !t.fromFileModal) {
    e.dispatch(F.enqueue({
      type: "file-moved",
      i18n: {
        id: XU.FILE_MOVE_FOLDER_BELL_ID,
        params: {
          text: a
        }
      }
    }));
    return;
  }
  let o = s.data.afterFileMove;
  o?.handlesVisualBell || e.dispatch(F.enqueue({
    type: "file-moved",
    i18n: {
      id: XU.FILE_MOVE_FOLDER_BELL_ID,
      params: {
        text: a
      }
    }
  }));
  o?.callback(a);
});
export const f = $$a0;