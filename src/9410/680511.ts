import { jsx } from "react/jsx-runtime";
import { useCallback, useRef } from "react";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import { $ } from "../figma_app/938538";
import { s as _$$s } from "../cssbuilder/589278";
import { Tc } from "../905/797478";
import { fullscreenValue } from "../figma_app/455680";
import { Y } from "../905/1768";
import { qM } from "../9410/607036";
let $$p1 = atom(-1);
let $$h2 = "slide-insert-shape-modal-button";
export function $$m0({
  activateTool: e,
  activeToolId: t,
  areAnyShapesActive: i,
  shapes: m
}) {
  let [f, g] = useAtomValueAndSetter($$p1);
  let _ = useCallback((e = !1) => {
    e && fullscreenValue.triggerAction("set-tool-default", null);
    g(-1);
  }, [g]);
  let x = useRef(null);
  Y(() => _(!i), {
    closeOnEsc: !0,
    ignore: [x, Tc($$h2)]
  });
  return jsx(qM, {
    closeWidow: _,
    ref: x,
    minWidth: 152,
    center: f,
    children: jsx("div", {
      className: _$$s.flex.flexWrap.p8.itemsCenter.contentCenter.gap8.$,
      style: {
        width: 152
      },
      children: m.map(i => jsx($, {
        tooltipText: i.text,
        tooltipShortcut: i.shortcutText,
        isActive: t === i.toolId,
        onMouseDown: () => e(i.toolId),
        recordingKey: `slides-shape-${i.toolId}`,
        children: i.icon
      }, i.toolId))
    })
  });
}
export const Ix = $$m0;
export const bs = $$p1;
export const zF = $$h2;