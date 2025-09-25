import _require from '../0c62c2fd/847117'
import { Jb, JK, Ud } from '../905/81459'
import { createModalConfig, registerModal } from '../905/102752'
import { showModalHandler } from '../905/156213'
import { kI, Y5 } from '../905/163189'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { fileImporter } from '../905/642505'
import { A } from '../905/658244'
import { D } from '../905/758526'
import { atomStoreManager } from '../figma_app/27355'

let n
function d() {
  return n ??= registerModal(A.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.FileImportModal), createModalConfig('FileImportModal')))
}
export let $$f0 = createOptimistThunk((e, t) => {
  if (!fileImporter)
    return
  let i = kI(t.name)
  if (i && atomStoreManager.get(D)) {
    e.dispatch(VisualBellActions.enqueue({
      type: 'pdf_import_failed_because_pdf_importing_is_disabled',
      message: getI18nString('fullscreen.file_import.import_pdf_blocked'),
      error: !0,
    }))
    return
  }
  e.dispatch(Ud([t]))
  i && e.getState().fileImport.step === Y5.START && e.dispatch(JK())
  e.getState().modalShown?.type !== d().type && e.dispatch(showModalHandler({
    type: d(),
  }))
  fileImporter.hasCanceled() || e.dispatch(Jb())
})
export const z = $$f0
