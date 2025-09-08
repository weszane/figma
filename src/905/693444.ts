import _require from "../0c62c2fd/891073";
import { A } from "../905/658244";
import { registerModal, createModalConfig } from "../905/102752";
let n;
export function $$s0() {
  return n ??= registerModal(A.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.RevokeProjectTransferModal), createModalConfig("RevokeProjectTransferModal")));
}
export const d = $$s0;