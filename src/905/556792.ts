import _require from "../0c62c2fd/216477";
import { FileBrowser } from "../905/658244";
import { registerModal, createModalConfig } from "../905/102752";
let n;
export function $$s0() {
  return n ??= registerModal(FileBrowser.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.BlockConnectedFileMoveModal), createModalConfig("BlockConnectedFileMoveModal")));
}
export const v = $$s0;