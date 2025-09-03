import { glU } from "../figma_app/763686";
import { UN } from "../905/700578";
import { lV, Li, Us, VH } from "../figma_app/617606";
import { RM, Hg, o9, mJ, F$ } from "../figma_app/304955";
import { Hq } from "../905/189185";
import { assert } from "../figma_app/465776";
import { Ur } from "../figma_app/735943";
import { J } from "../figma_app/710077";
export function $$u0(e, t, n, u, x, m, h) {
  let g = x === lV.FIGMAKE ? "" : m.multi_file_code_layers || m.bake_canvas ? RM(t.codeFileFullPathWithoutScheme) : "";
  let p = x === lV.FIGMAKE ? Hg(h.swapCacheWithFiles) : (m.multi_file_code_layers || m.bake_canvas) && t.codeFilePath ? Hg(h.swapCacheWithFiles, g) : o9(t, h.swapCacheWithFiles);
  let f = Li(e);
  let y = t.chatMessages || [];
  let _ = [...y, ...f];
  if (Hq.ai("update-source-code-and-chat-messages", () => {
    for (let [e, i] of (assert(void 0 !== glU, "Fullscreen must be defined"), t.chatMessages = _, Object.entries(n))) {
      let n = mJ(g, e);
      let {
        codeFile
      } = Ur(p, n, i, h.trackSystemEditedSession);
      codeFile && (codeFile.sourceCode = i, h.setCodeLastEditedBy(t.guid));
    }
    glU.commit();
  }), u && Object.keys(n).length > 0) {
    let e = {
      ...Object.fromEntries(Object.entries(p).map(([e, t]) => [F$(g, e), t.sourceCode])),
      ...Object.fromEntries(Object.entries(n).map(([e, t]) => [e, t]))
    };
    Us({
      messages: f,
      codeFiles: e,
      fileKey: u,
      clientDependencies: {
        createCodeSnapshot: h.createCodeSnapshot
      }
    }).then(e => {
      Hq.ai("enrich-exchange-messages-with-code-snapshots", () => {
        let n = [...y, ...e];
        t.chatMessages = n;
      });
    }).catch(e => {
      h.reportErrorToSentry(Error(`Failed to generate code snapshot: ${e}`));
    });
  }
  if (x === lV.FIGMAKE) {
    h.regenerateAttributions(_);
    let e = UN();
    let t = VH(e);
    J(t);
  }
}
export const E = $$u0;