import _require from "../0c62c2fd/847117";
import { atomStoreManager } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { A } from "../905/658244";
import { Ju, Ij } from "../905/102752";
import { nF } from "../905/350402";
import { to } from "../905/156213";
import { F as _$$F } from "../905/642505";
import { Ud, JK, Jb } from "../905/81459";
import { kI, Y5 } from "../905/163189";
import { D } from "../905/758526";
let n;
function d() {
  return n ??= Ju(A.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.FileImportModal), Ij("FileImportModal")));
}
export let $$f0 = nF((e, t) => {
  if (!_$$F) return;
  let i = kI(t.name);
  if (i && atomStoreManager.get(D)) {
    e.dispatch(F.enqueue({
      type: "pdf_import_failed_because_pdf_importing_is_disabled",
      message: getI18nString("fullscreen.file_import.import_pdf_blocked"),
      error: !0
    }));
    return;
  }
  e.dispatch(Ud([t]));
  i && e.getState().fileImport.step === Y5.START && e.dispatch(JK());
  e.getState().modalShown?.type !== d().type && e.dispatch(to({
    type: d()
  }));
  _$$F.hasCanceled() || e.dispatch(Jb());
});
export const z = $$f0;