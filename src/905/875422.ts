import _require from '../0c62c2fd/847117';
import { processNextFileImport, showImportPdfConfirmation, addFileImportToQueue } from '../905/81459';
import { createModalConfig, registerModal } from '../905/102752';
import { showModalHandler } from '../905/156213';
import { isPdfFile, ImportEventType } from '../905/163189';
import { VisualBellActions } from '../905/302958';
import { getI18nString } from '../905/303541';
import { createOptimistThunk } from '../905/350402';
import { fileImporter } from '../905/642505';
import { FileBrowser } from '../905/658244';
import { isAllowedOrgAtom } from '../905/758526';
import { atomStoreManager } from '../figma_app/27355';
let n;
function d() {
  return n ??= registerModal(FileBrowser.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.FileImportModal), createModalConfig('FileImportModal')));
}
export let $$f0 = createOptimistThunk((e, t) => {
  if (!fileImporter) return;
  let i = isPdfFile(t.name);
  if (i && atomStoreManager.get(isAllowedOrgAtom)) {
    e.dispatch(VisualBellActions.enqueue({
      type: 'pdf_import_failed_because_pdf_importing_is_disabled',
      message: getI18nString('fullscreen.file_import.import_pdf_blocked'),
      error: !0
    }));
    return;
  }
  e.dispatch(addFileImportToQueue([t]));
  i && e.getState().fileImport.step === ImportEventType.START && e.dispatch(showImportPdfConfirmation());
  e.getState().modalShown?.type !== d().type && e.dispatch(showModalHandler({
    type: d()
  }));
  fileImporter.hasCanceled() || e.dispatch(processNextFileImport());
});
export const z = $$f0;