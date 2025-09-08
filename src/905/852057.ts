import { createOptimistThunk } from "../905/350402";
import { NC } from "../905/17179";
import { Q } from "../905/573154";
import { getI18nString } from "../905/303541";
import { maybeCreateSavepoint } from "../905/294113";
let $$o1 = createOptimistThunk((e, t) => {
  let i = maybeCreateSavepoint(t.fileKey, t.label, t.description, e.dispatch);
  e.dispatch(Q({
    promise: i,
    fallbackError: getI18nString("file_browser.file_browser_actions.must_be_online_to_save_version")
  }));
});
let $$l0 = NC("FILE_UPDATE_SAVEPOINT");
export const D = $$l0;
export const m = $$o1;