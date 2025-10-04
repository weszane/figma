import _require from "../0c62c2fd/213092";
import { FileBrowser } from "../905/658244";
import { createModalConfig, registerModal } from "../905/102752";
let a = FileBrowser.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.EduUpgradeModal), createModalConfig("EduUpgradeModal"));
let $$s0 = registerModal(a, "EDU_UPGRADE_MODAL");
export const q = $$s0;