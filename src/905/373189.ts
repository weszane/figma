import _require from "../469e6e40/720458";
import { adminSettingsFactory } from "../905/662580";
import { registerModal, createModalConfig } from "../905/102752";
let n;
export function $$s0() {
  return n ??= registerModal(adminSettingsFactory.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.HandleAssetTransferRequestModal), createModalConfig("HandleAssetTransferRequestModal")));
}
export const S = $$s0;