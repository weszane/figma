import { createModalConfig, registerModal } from "../905/102752"
import { adminSettingsFactory } from "../905/662580"

let n
export function getHandleAssetTransferRequestModal() {
  return n ??= registerModal(adminSettingsFactory.createLazyComponent(() => import("../469e6e40/720458").then(e => e.HandleAssetTransferRequestModal), createModalConfig("HandleAssetTransferRequestModal")))
}
export const S = getHandleAssetTransferRequestModal
