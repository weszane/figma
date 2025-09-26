import _require from "../469e6e40/194055";
import { adminSettingsFactory } from "../905/662580";
import { registerModal, createModalConfig } from "../905/102752";
let s;
export function $$o0() {
  return s ??= registerModal(adminSettingsFactory.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.ExtensionAllowlistModal), createModalConfig("ExtensionAllowlistModal")));
}
export const W = $$o0;