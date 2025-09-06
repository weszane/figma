import { jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { NLJ } from "../figma_app/763686";
import o from "classnames";
import { selectWithShallowEqual } from "../905/103090";
import { Pt } from "../figma_app/806412";
import { z5 } from "../905/713722";
import { S7, sX } from "../figma_app/259578";
import { nm, Gu } from "../figma_app/90441";
import { A } from "../905/139173";
import { n1, z, N6 } from "../905/698732";
var l = o;
let g = {
  right: nm,
  center: void 0,
  left: Gu
};
export function $$f1({
  color: e,
  onColorChange: t,
  theme: r,
  hexInputRef: i,
  onOpacityChange: o,
  dropperDisabled: d,
  showOpacity: u,
  analytics: _,
  recordingKey: h,
  currentTool: g,
  dropdownShown: f
}) {
  let E = useDispatch();
  return jsx("div", {
    className: l()(n1, {
      [z]: "light" === r,
      [N6]: "dark" === r
    }),
    "data-testid": "whiteboard-custom-color-popover",
    children: jsx(S7, {
      analytics: _,
      canAcceptStyles: !1,
      canAcceptVariables: !1,
      color: e,
      colorFormat: 0,
      currentTool: g ?? NLJ.NONE,
      dispatch: E,
      displayType: sX.WHITEBOARD,
      dropdownShown: f,
      dropperDisabled: d,
      hexInputRef: i,
      hideOpacity: !u,
      onColorChange: t,
      onOpacityChange: o,
      recordingKey: Pt(h, "colorControls"),
      theme: r
    })
  });
}
export function $$E0({
  color: e,
  target: t,
  isOpen: r,
  onColorChange: a,
  onOpacityChange: o,
  onClose: l,
  theme: c,
  analytics: p,
  alignment: _ = "center",
  positionX: m,
  positionY: E,
  dropperDisabled: y,
  showOpacity: b,
  shouldCloseOnEscape: T,
  portalNode: I,
  recordingKey: S
}) {
  let {
    currentTool,
    dropdownShown
  } = selectWithShallowEqual(e => ({
    currentTool: e.mirror.appModel.currentTool,
    dropdownShown: e.dropdownShown
  }));
  let x = useRef(null);
  useEffect(() => {
    if (T) {
      let e = e => {
        "Escape" === e.key && l();
      };
      document.addEventListener("keydown", e);
      return () => {
        document.removeEventListener("keydown", e);
      };
    }
  }, [T, l]);
  return jsx(A, {
    target: t,
    onClose: () => {
      if (currentTool !== NLJ.DROPPER_COLOR) {
        let t = x.current?.value ?? "";
        if (z5.format(e) !== t) try {
          let r = z5.parse(t, e);
          a(r);
        } catch (t) {
          a(e);
        }
        l();
      }
    },
    positionX: m ?? g[_],
    positionY: E,
    renderPopoverContents: () => jsx($$f1, {
      analytics: p,
      color: e,
      theme: c,
      currentTool,
      dropdownShown,
      hexInputRef: x,
      onColorChange: a,
      onOpacityChange: o,
      dropperDisabled: y,
      showOpacity: b,
      recordingKey: S
    }),
    isOpen: r,
    portalNode: I
  });
}
export const v = $$E0;
export const w = $$f1;