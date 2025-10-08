import { createModalConfig, registerModal } from "../905/102752"
import { FileBrowser } from "../905/658244"

let n
export function getContainingAssetPanel() {
  return n ??= registerModal(FileBrowser.createLazyComponent(() => import('../0c62c2fd/872565').then(e => e.FileMoveModalComponent), createModalConfig("containing_assets_panel--componentName--Lwkmx")))
}
export const J = getContainingAssetPanel
