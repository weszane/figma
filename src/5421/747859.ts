import { U1 } from "../figma_app/617606";
import { ChatMessageType } from "../figma_app/763686";
import { AIScopeHandler } from "../905/189185";
import { qV } from "../figma_app/165623";
import { fullscreenValue } from "../figma_app/455680";
import { q5 } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { E } from "../figma_app/626557";
import { IO } from "../1156/751255";
import { oA } from "../figma_app/812915";
import { p3 } from "../figma_app/588582";
export function $$$$m0() {
  let e = q5();
  let t = e?.key;
  let n = iZ();
  let m = e?.trackTags;
  let x = m?.isDuplicatedFromSupabaseConnectedFile;
  let g = x?.status === "loaded" && x.data;
  let {
    codeLibraryInstance
  } = oA();
  let f = E(codeLibraryInstance) || [];
  p3() && t && codeLibraryInstance && (async () => {
    let e = await qV(t);
    let s = f.some(t => {
      if (t.type !== ChatMessageType.SYSTEM_MESSAGE) return !1;
      let n = U1(t.textContent);
      return n?.type === "duplicated_file" && n.fileKeyHash === e;
    });
    if (g && !s && e && n) {
      let t = IO(n, e);
      AIScopeHandler.ai("add-duplicated-file-system-message", () => {
        codeLibraryInstance.chatMessages = [...f, t];
        fullscreenValue.commit();
      });
    }
  })();
}
export const m = $$$$m0;