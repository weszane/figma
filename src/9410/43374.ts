import { jsx } from "react/jsx-runtime";
import { useRef, useCallback, forwardRef, useImperativeHandle } from "react";
import { useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { DiagramElementType, InteractionCpp, HideMode, Positioning } from "../figma_app/763686";
import { parsePxInt } from "../figma_app/783094";
import { isIpadDevice } from "../figma_app/778880";
import { jw } from "../figma_app/327588";
import { getCurrentFileType } from "../figma_app/976749";
import { Ty8 } from "../figma_app/27776";
let h = parsePxInt(Ty8);
export function $$m4() {
  let e = jw();
  let t = useSelector(({
    mirror: {
      selectionProperties: e,
      sceneGraphSelection: t,
      appModel: i
    }
  }) => 1 === Object.keys(t).length && e.whiteboardNumSelectedByType && 1 === e.whiteboardNumSelectedByType.SECTION && (e.name || i.onCanvasNameEditorInfo.mode === DiagramElementType.SECTION_NAME));
  let i = useSelector(({
    mirror: {
      selectionProperties: e,
      sceneGraphSelection: t
    }
  }) => 1 === Object.keys(t).length && e.whiteboardNumSelectedByType && 1 === e.whiteboardNumSelectedByType.STAMP);
  let r = useSelector(({
    mirror: {
      selectionProperties: e
    }
  }) => e.nodeSelectedValidForQuickAdd);
  let n = getCurrentFileType();
  return "whiteboard" === n ? t ? 40 : i && isIpadDevice ? 40 : r ? 20 + h / 2 : InteractionCpp?.shouldRenderTableUiForSelection() !== HideMode.HIDE ? 20 + h / 2 : 16 : "cooper" === n ? e ? 40 : 30 : 8;
}
export function $$f3() {
  return useSelector(e => e.mirror.appModel.hyperlinkLocation);
}
export function $$g1(e, t, i, r) {
  switch (r) {
    case Positioning.ABOVE:
      return i < e.y ? Positioning.ABOVE : Positioning.BELOW;
    case Positioning.BELOW:
      return i > e.y ? Positioning.BELOW : Positioning.ABOVE;
    case Positioning.LEFT:
      return t < e.x ? Positioning.LEFT : Positioning.RIGHT;
    case Positioning.RIGHT:
      return t > e.x ? Positioning.RIGHT : Positioning.LEFT;
    default:
      throwTypeError(r);
  }
}
export function $$_2(e) {
  let t = useRef({
    frameHandle: null,
    didMenuMidpointChange: !1,
    didSelectionChange: !1,
    lastMidpoint: {
      x: 0,
      y: 0
    },
    lastSelection: {}
  });
  let i = useCallback(() => {
    let {
      current
    } = t;
    current.didMenuMidpointChange && current.didSelectionChange && e.current?.animate();
    current.frameHandle || (current.frameHandle = setTimeout(() => {
      current.didMenuMidpointChange = !1;
      current.didSelectionChange = !1;
      current.frameHandle = null;
    }, 0));
  }, [e]);
  return {
    markSelectionChanged: useCallback(e => {
      Object.keys(t.current.lastSelection).length && (t.current.didSelectionChange = !0, i());
      t.current.lastSelection = e;
    }, [i]),
    markPositionChanged: useCallback(e => {
      let {
        current
      } = t;
      (e.x !== current.lastMidpoint.x || e.y !== current.lastMidpoint.y) && (current.didMenuMidpointChange = !0, i());
      current.lastMidpoint = e;
    }, [i])
  };
}
export let $$x0 = forwardRef(function ({
  children: e,
  disableAnimation: t = !1
}, i) {
  let a = useRef(null);
  useImperativeHandle(i, () => ({
    animate: () => {
      a.current && !t && (a.current.style.animation = "none", a.current.offsetTop, a.current.style.animation = "");
    }
  }));
  return jsx("div", {
    ref: a,
    className: t ? void 0 : "inline_editor_layer--animationRoot--pX-db",
    children: e
  });
});
export const C_ = $$x0;
export const iv = $$g1;
export const LP = $$_2;
export const JI = $$f3;
export const v2 = $$m4;