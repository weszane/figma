import { useCallback } from "react";
import { Ez5 } from "../figma_app/763686";
import { eU, E3, zl as _$$zl } from "../figma_app/27355";
import { rt } from "../figma_app/615482";
import { SG, vv, hR, hW } from "../905/508457";
import { J2 } from "../figma_app/84367";
let $$d8 = "code-window-back-to-design";
let $$c17 = eU(null);
let $$u25 = SG(() => Ez5.codeSelection().selectedCodeNodeIds);
let $$p12 = SG(() => Ez5.codeSelection().fullscreenCodeNodeIds);
let $$_23 = SG(() => Ez5.codeSelection().selectedCodeNodeSize);
let $$h22 = SG(() => Ez5.codeSelection().fullscreenCodeNodeSize);
let $$m11 = SG(() => Ez5.codeSelection().selectedCodeNodeBreakpoint);
let $$g27 = SG(() => Ez5.codeSelection().fullscreenCodeNodeBreakpoint);
let $$f6 = SG(() => Ez5.codeSelection().selectedCodeNodeClipContents);
let $$E21 = SG(() => Ez5.codeSelection().fullscreenCodeNodeClipContents);
let $$y0 = SG(() => Ez5.codeSelection().selectedCodeNodeName);
let $$b10 = SG(() => Ez5.codeSelection().selectedCanvasNodeIds);
let $$T14 = vv(() => Ez5?.codeSelection()?.showMainComponent, !1);
let $$I24 = E3("previouslySelectedInstance", null);
let $$S1 = vv(() => Ez5?.codeSelection()?.selectedCodeFileNodeId, null);
let $$v5 = vv(() => Ez5?.codeSelection()?.fullscreenCodeFileNodeId, null);
vv(() => Ez5?.codeSelection()?.selectedPromptFrames, []);
let $$A18 = vv(() => Ez5?.codeSelection()?.selectedCodeBehavior, null);
let $$x4 = vv(() => Ez5?.codeSelection()?.fullscreenCodeBehavior, null);
let $$N19 = E3("codeWindowPanelConfiguration", "chat");
let $$C29 = E3("codeFullViewPanelConfiguration", "chat");
hR([], {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
let $$w13 = E3("scaleLinearly", !0);
let $$O2 = !1;
let $$R28 = rt(null);
export function $$L16(e) {
  return useCallback(() => {
    e && e.backingSourceCodeNodeId && (_$$zl.get($$u25).includes(e.guid) ? $$D7() : $$P15(e));
  }, [e]);
}
export function $$P15(e) {
  Ez5?.openCodeWindowForNode(e.guid);
}
export function $$D7() {
  Ez5?.closeCodeWindow();
}
export function $$k26(e) {
  Ez5?.openFullscreenCodeViewForNode(e.guid);
}
export function $$M3(e, t) {
  Ez5?.openCodeWindowForCodeBehavior(e.guid, t);
}
export function $$F20(e, t) {
  Ez5?.openFullscreenCodeViewForCodeBehavior(e.guid, t);
}
export function $$j9(e) {
  let t = Ez5.designToCodeState();
  let r = J2(t.generating);
  return !!e && r.has(e);
}
export const DW = $$y0;
export const Jl = $$S1;
export const LS = $$O2;
export const OY = $$M3;
export const Qe = $$x4;
export const T_ = $$v5;
export const UL = $$f6;
export const UM = $$D7;
export const US = $$d8;
export const Wn = $$j9;
export const Xq = $$b10;
export const Xs = $$m11;
export const Y3 = $$p12;
export const Y_ = $$w13;
export const ZY = $$T14;
export const Zr = $$P15;
export const Zy = $$L16;
export const b5 = $$c17;
export const cI = $$A18;
export const hi = $$N19;
export const iI = $$F20;
export const iK = $$E21;
export const l6 = $$h22;
export const p_ = $$_23;
export const qQ = $$I24;
export const wh = $$u25;
export const xB = $$k26;
export const xJ = $$g27;
export const yq = $$R28;
export const zl = $$C29;