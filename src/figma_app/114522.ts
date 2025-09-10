import { useCallback } from "react";
import { AppStateTsApi } from "../figma_app/763686";
import { atom, createLocalStorageAtom, atomStoreManager } from "../figma_app/27355";
import { createTrackedAtom } from "../figma_app/615482";
import { SG, vv, hR, hW } from "../905/508457";
import { getObservableOrFallback } from "../figma_app/84367";
let $$d8 = "code-window-back-to-design";
let $$c17 = atom(null);
let $$u25 = SG(() => AppStateTsApi.codeSelection().selectedCodeNodeIds);
let $$p12 = SG(() => AppStateTsApi.codeSelection().fullscreenCodeNodeIds);
let $$_23 = SG(() => AppStateTsApi.codeSelection().selectedCodeNodeSize);
let $$h22 = SG(() => AppStateTsApi.codeSelection().fullscreenCodeNodeSize);
let $$m11 = SG(() => AppStateTsApi.codeSelection().selectedCodeNodeBreakpoint);
let $$g27 = SG(() => AppStateTsApi.codeSelection().fullscreenCodeNodeBreakpoint);
let $$f6 = SG(() => AppStateTsApi.codeSelection().selectedCodeNodeClipContents);
let $$E21 = SG(() => AppStateTsApi.codeSelection().fullscreenCodeNodeClipContents);
let $$y0 = SG(() => AppStateTsApi.codeSelection().selectedCodeNodeName);
let $$b10 = SG(() => AppStateTsApi.codeSelection().selectedCanvasNodeIds);
let $$T14 = vv(() => AppStateTsApi?.codeSelection()?.showMainComponent, !1);
let $$I24 = createLocalStorageAtom("previouslySelectedInstance", null);
let $$S1 = vv(() => AppStateTsApi?.codeSelection()?.selectedCodeFileNodeId, null);
let $$v5 = vv(() => AppStateTsApi?.codeSelection()?.fullscreenCodeFileNodeId, null);
vv(() => AppStateTsApi?.codeSelection()?.selectedPromptFrames, []);
let $$A18 = vv(() => AppStateTsApi?.codeSelection()?.selectedCodeBehavior, null);
let $$x4 = vv(() => AppStateTsApi?.codeSelection()?.fullscreenCodeBehavior, null);
let $$N19 = createLocalStorageAtom("codeWindowPanelConfiguration", "chat");
let $$C29 = createLocalStorageAtom("codeFullViewPanelConfiguration", "chat");
hR([], {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
let $$w13 = createLocalStorageAtom("scaleLinearly", !0);
let $$O2 = !1;
let $$R28 = createTrackedAtom(null);
export function $$L16(e) {
  return useCallback(() => {
    e && e.backingSourceCodeNodeId && (atomStoreManager.get($$u25).includes(e.guid) ? $$D7() : $$P15(e));
  }, [e]);
}
export function $$P15(e) {
  AppStateTsApi?.openCodeWindowForNode(e.guid);
}
export function $$D7() {
  AppStateTsApi?.closeCodeWindow();
}
export function $$k26(e) {
  AppStateTsApi?.openFullscreenCodeViewForNode(e.guid);
}
export function $$M3(e, t) {
  AppStateTsApi?.openCodeWindowForCodeBehavior(e.guid, t);
}
export function $$F20(e, t) {
  AppStateTsApi?.openFullscreenCodeViewForCodeBehavior(e.guid, t);
}
export function $$j9(e) {
  let t = AppStateTsApi.designToCodeState();
  let r = getObservableOrFallback(t.generating);
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