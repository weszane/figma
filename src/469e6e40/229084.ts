import _require from "../469e6e40/51951";
import { adminSettingsFactory } from "../905/662580";
import { registerModal, createModalConfig } from "../905/102752";
let n;
export function $$r0() {
  return n ??= registerModal(adminSettingsFactory.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.ProvisioningApiTokenModal), createModalConfig("ProvisioningApiTokenModal")), "PROVISIONING_API_TOKEN_MODAL");
}
export const l = $$r0;