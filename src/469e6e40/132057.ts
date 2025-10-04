import _require from "../0c62c2fd/390613";
import { FileBrowser } from "../905/658244";
import { registerModal, createModalConfig } from "../905/102752";
let n;
export function $$r0() {
  return n ??= registerModal(FileBrowser.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.FolderBatchAbandonedDraftDeleteConfirmModal), createModalConfig("FolderBatchAbandonedDraftDeleteConfirmModal")));
}
export const K = $$r0;