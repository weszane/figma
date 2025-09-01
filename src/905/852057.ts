import { nF } from "../905/350402";
import { NC } from "../905/17179";
import { Q } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { m as _$$m } from "../905/294113";
let $$o1 = nF((e, t) => {
  let i = _$$m(t.fileKey, t.label, t.description, e.dispatch);
  e.dispatch(Q({
    promise: i,
    fallbackError: _$$t("file_browser.file_browser_actions.must_be_online_to_save_version")
  }));
});
let $$l0 = NC("FILE_UPDATE_SAVEPOINT");
export const D = $$l0;
export const m = $$o1;