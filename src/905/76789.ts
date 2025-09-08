import _require from "../469e6e40/825764";
import { A } from "../905/662580";
import { registerModal, createModalConfig } from "../905/102752";
let n;
export function $$s0() {
  return n ??= registerModal(A.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.FolderRenameModal), createModalConfig("FolderRenameModal")));
}
export const y = $$s0;