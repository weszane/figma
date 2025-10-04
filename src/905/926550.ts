import _require from "../0c62c2fd/304711";
import { FileBrowser } from "../905/658244";
import { registerModal, createModalConfig } from "../905/102752";
let n;
export function $$s0() {
  return n ??= registerModal(FileBrowser.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.FolderPermanentlyDeleteConfirmModal), createModalConfig("FolderPermanentlyDeleteConfirmModal")));
}
export const U = $$s0;