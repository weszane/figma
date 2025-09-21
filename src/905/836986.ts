import { jsx, jsxs } from "react/jsx-runtime";
import { StyleIdHandler, VariableIdHandler, VariableOverrideIdHandler, VariableSetIdCompatHandler, CodeComponentIdHandler, CodeLibraryIdHandler, CodeFileIdHandler, CanvasNodeIdHandler } from "../figma_app/243058";
import { useAtomWithSubscription, Xr } from "../figma_app/27355";
import s from "classnames";
import { copyTextToClipboard } from "../figma_app/623293";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { AutoLayout } from "../905/470281";
import { c1, r4, dB } from "../905/589717";
import { Cc, lX } from "../905/545842";
import { AJ } from "../905/235262";
import { IV } from "../905/154591";
var o = s;
let g = "badge_display--canUnderline--aufN5";
export function $$f8({
  id: e
}) {
  let t = useAtomWithSubscription(Cc);
  let i = useAtomWithSubscription(lX);
  let r = t.getObject(e) ?? i?.getObject(e) ?? null;
  return jsx(P, {
    target: r,
    text: e,
    errorIfMissing: !0
  });
}
export function $$_7({
  guid: e,
  scene: t
}) {
  let i = t.getNodeByGuid(e);
  return jsx(P, {
    target: i,
    errorIfMissing: t.isComplete,
    text: c1.format(e)
  });
}
export function $$A9({
  styleId: e,
  scene: t
}) {
  let i = t.getStyleByStyleId(e);
  return jsx(P, {
    target: i,
    errorIfMissing: t.isComplete,
    text: r4(e, StyleIdHandler),
    fullText: StyleIdHandler.toString(e)
  });
}
export function $$y11({
  variableId: e,
  scene: t
}) {
  let i = t.getVariableByVariableId(e);
  return jsx(P, {
    target: i,
    errorIfMissing: t.isComplete,
    text: r4(e, VariableIdHandler),
    fullText: VariableIdHandler.toString(e)
  });
}
export function $$b12({
  variableOverrideId: e,
  scene: t
}) {
  let i = t.getVariableOverrideByVariableOverrideId(e);
  return jsx(P, {
    target: i,
    errorIfMissing: t.isComplete,
    text: r4(e, VariableOverrideIdHandler),
    fullText: VariableOverrideIdHandler.toString(e)
  });
}
export function $$v10({
  variableCollectionId: e,
  scene: t
}) {
  let i = t.getVariableCollectionByCollectionId(e);
  return jsx(P, {
    target: i,
    errorIfMissing: t.isComplete,
    text: r4(e, VariableSetIdCompatHandler),
    fullText: VariableSetIdCompatHandler.toString(e)
  });
}
export function $$I1({
  codeComponentId: e,
  scene: t
}) {
  let i = t.getCodeComponentById(e);
  return jsx(P, {
    target: i,
    errorIfMissing: t.isComplete,
    text: r4(e, CodeComponentIdHandler),
    fullText: CodeComponentIdHandler.toString(e)
  });
}
export function $$E3({
  codeLibraryId: e,
  scene: t
}) {
  let i = t.getCodeLibraryById(e);
  return jsx(P, {
    target: i,
    errorIfMissing: t.isComplete,
    text: r4(e, CodeLibraryIdHandler),
    fullText: CodeLibraryIdHandler.toString(e)
  });
}
export function $$x2({
  codeFileId: e,
  scene: t
}) {
  let i = t.getCodeFileById(e);
  return jsx(P, {
    target: i,
    errorIfMissing: t.isComplete,
    text: r4(e, CodeFileIdHandler),
    fullText: CodeFileIdHandler.toString(e)
  });
}
export function $$S0({
  canvasNodeId: e,
  scene: t
}) {
  let i = CanvasNodeIdHandler.toGuidStrIfLocal(e);
  let a = i ? t.getNodeByGuid(i) : null;
  return jsx(P, {
    target: a,
    errorIfMissing: t.isComplete,
    text: r4(e, CanvasNodeIdHandler),
    fullText: CanvasNodeIdHandler.toString(e)
  });
}
export function $$w6({
  id: e,
  secondary: t
}) {
  return jsx(O, {
    colorStyle: t ? 2 : 1,
    text: e,
    isValid: !0
  });
}
export function $$C5({
  guid: e
}) {
  return jsx(O, {
    colorStyle: 1,
    text: c1.format(e),
    isValid: c1.isValid(e)
  });
}
export function $$T4({
  guidPath: e
}) {
  return jsx(O, {
    colorStyle: 1,
    text: dB.format(e),
    isValid: dB.isValid(e)
  });
}
var k = (e => (e[e.Invalid = 0] = "Invalid", e[e.Normal = 1] = "Normal", e[e.Seconary = 2] = "Seconary", e[e.Link = 3] = "Link", e))(k || {});
let R = cssBuilderInstance.inlineBlock;
let N = {
  0: R.colorTextDanger.$,
  1: R.colorText.fontSemiBold.$,
  2: R.colorTextSecondary.$,
  3: R.colorTextFigjam.fontSemiBold.$
};
function P({
  target: e,
  text: t,
  errorIfMissing: i,
  fullText: r
}) {
  let s = Xr(AJ);
  return null == e ? jsx(O, {
    colorStyle: i ? 0 : 3,
    text: t,
    copyOnClickText: r,
    isValid: !1
  }) : jsx("span", {
    role: "button",
    className: o()(cssBuilderInstance.inlineBlock.$, "badge_display--guidLink--3Avjv"),
    onClick: () => s(e.id),
    children: jsxs(AutoLayout, {
      spacing: 4,
      children: [jsx(IV, {
        badges: e.displayProperties.leftBadges
      }), jsx("span", {
        className: o()(N[3], g),
        children: t
      }), jsx("span", {
        className: o()(N[3], g, cssBuilderInstance.fontNormal.$),
        children: e.displayProperties.name
      })]
    })
  });
}
function O({
  colorStyle: e,
  text: t,
  copyOnClickText: i,
  isValid: r
}) {
  let a = N[r ? e : 0];
  return null == i ? jsx("span", {
    className: a,
    children: t
  }) : jsx("span", {
    className: a,
    role: "button",
    onClick: () => {
      copyTextToClipboard(i).then(() => window.alert(`Copied ${i} to clipboard`)).catch(() => window.alert(i));
    },
    children: t
  });
}
export const Bc = $$S0;
export const pX = $$I1;
export const KN = $$x2;
export const DA = $$E3;
export const a2 = $$T4;
export const P0 = $$C5;
export const nK = $$w6;
export const W6 = $$_7;
export const aj = $$f8;
export const Iu = $$A9;
export const h8 = $$v10;
export const F6 = $$y11;
export const le = $$b12;