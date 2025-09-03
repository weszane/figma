import { useEffect } from "react";
import { MoD, FDn, glU, Ez5 } from "../figma_app/763686";
import { l7, Hq } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { zl } from "../figma_app/27355";
import { az } from "../905/449184";
import { ZC } from "../figma_app/39751";
import { Jr } from "../figma_app/624361";
import { eY } from "../figma_app/722362";
import { yV } from "../figma_app/516028";
import { J2 } from "../figma_app/84367";
import { A } from "../905/202425";
import { n0 } from "../figma_app/259678";
import { Ah, ak, hH, NC, Zz, _9 } from "../figma_app/119420";
async function f(e, t) {
  let n;
  if (l7.ai("figmake", () => {
    let t = e.createCodeLayerFromDesign("paste", !0, n0);
    if (1 !== t.length) throw Error("Expected exactly one code layer to be created");
    n = t[0];
  }), n) await Jr().loadAllImagesUnder(n, MoD.ALL, "rev-image-paste");else {
    let n = zl.get(Ah).find(t => ak(t, e.guid));
    t(t => t.filter(t => !ak(t, e.guid)));
    Hq.system("figmake", () => {
      let t = getSingletonSceneGraph().get(e.guid);
      t && t.removeSelfAndChildren();
    });
    let r = n?.designToCodeErrors;
    r && r[0] ? hH(r[0]) : hH(FDn.DESIGN_2_REACT_OTHER);
  }
}
export async function $$y0(e, t, n, r, a) {
  if (!e) return;
  let c = t.get(e);
  if (!c) return;
  let d = A(c) ? "IMAGE" : "FIGMA_NODE";
  if ("FIGMA_NODE" === d && "TEXT" === c.type) {
    r(c.characters);
    l7.system("clean-up-chat-box-pasted-text-node", () => {
      c.removeSelfAndChildren();
    });
    n(e => {
      let t = e.find(e => "pending" === e.status);
      return t ? e.filter(e => e.uniqueId !== t.uniqueId) : e;
    });
    return;
  }
  let u = a(e);
  try {
    "FIGMA_NODE" === d ? await f(c, n) : function (e, t, n) {
      let r = NC(e);
      let s = Zz(e);
      if (glU?.addImageNodeAsImageImport(e.id), r) {
        let i = {
          status: "success",
          nodeGuid: e.guid,
          image: r,
          imageHash: s,
          type: "IMAGE",
          uniqueId: t
        };
        n(t => t.map(t => ak(t, e.guid) ? i : t));
      }
    }(c, u, n);
    az.trackDefinedEvent("ai_for_production.chat_attachment_added", {
      attachmentType: d,
      fileKey: zl.get(yV)?.key ?? void 0
    });
  } catch (t) {
    n(t => t.map(t => ak(t, e) ? {
      ...t,
      status: "error"
    } : t));
  }
}
export function $$_1(e, t) {
  let n = eY();
  let s = Ez5.figmakeState();
  let a = J2(s.pastedNodeGuid);
  let l = ZC(a);
  let {
    attachments,
    setAttachments,
    claimAPendingAttachmentOrMakeOne
  } = _9(e);
  useEffect(() => {
    a !== l && $$y0(a, n, setAttachments, t, claimAPendingAttachmentOrMakeOne);
  }, [n, setAttachments, l, attachments, a, t, claimAPendingAttachmentOrMakeOne]);
}
export const E = $$y0;
export const p = $$_1;