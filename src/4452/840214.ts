import _require from "../469e6e40/863161";
import { adminSettingsFactory } from "../905/662580";
import { registerModal, createModalConfig } from "../905/102752";
let s;
export function $$i0() {
  return s ??= registerModal(adminSettingsFactory.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.UpdateTeamDescriptionModal), createModalConfig("UpdateTeamDescriptionModal")));
}
export const r = $$i0;