import _require from "../0c62c2fd/797841";
import { A } from "../905/658244";
import { registerModal, createModalConfig } from "../905/102752";
let n;
export function $$s0() {
  return n ??= registerModal(A.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.FileRestoreFromVersionModal), createModalConfig("FileRestoreFromVersionModal")));
}
export const G = $$s0;