import _require from "../0c62c2fd/146061";
import { A } from "../905/658244";
import { createModalConfig, registerModal, ModalSupportsBackground } from "../905/102752";
let a = A.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.FolderMoveModal), createModalConfig("FolderMoveModal"));
let $$s0 = registerModal(a, "FOLDER_MOVE_MODAL", ModalSupportsBackground.YES);
export const J = $$s0;