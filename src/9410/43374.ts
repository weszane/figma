import { jsx } from "react/jsx-runtime";
import { useRef, useCallback, forwardRef, useImperativeHandle } from "react";
import { d4 } from "../vendor/514228";
import { xb } from "../figma_app/465776";
import { nzw, qmM, miS, cfv } from "../figma_app/763686";
import { parsePxInt } from "../figma_app/783094";
import { XN } from "../figma_app/778880";
import { jw } from "../figma_app/327588";
import { lg } from "../figma_app/976749";
import { Ty8 } from "../figma_app/27776";
let h = parsePxInt(Ty8);
export function $$m4() {
  let e = jw();
  let t = d4(({
    mirror: {
      selectionProperties: e,
      sceneGraphSelection: t,
      appModel: i
    }
  }) => 1 === Object.keys(t).length && e.whiteboardNumSelectedByType && 1 === e.whiteboardNumSelectedByType.SECTION && (e.name || i.onCanvasNameEditorInfo.mode === nzw.SECTION_NAME));
  let i = d4(({
    mirror: {
      selectionProperties: e,
      sceneGraphSelection: t
    }
  }) => 1 === Object.keys(t).length && e.whiteboardNumSelectedByType && 1 === e.whiteboardNumSelectedByType.STAMP);
  let r = d4(({
    mirror: {
      selectionProperties: e
    }
  }) => e.nodeSelectedValidForQuickAdd);
  let n = lg();
  return "whiteboard" === n ? t ? 40 : i && XN ? 40 : r ? 20 + h / 2 : qmM?.shouldRenderTableUiForSelection() !== miS.HIDE ? 20 + h / 2 : 16 : "cooper" === n ? e ? 40 : 30 : 8;
}
export function $$f3() {
  return d4((e) => e.mirror.appModel.hyperlinkLocation);
}
export function $$g1(e, t, i, r) {
  switch (r) {
    case cfv.ABOVE:
      return i < e.y ? cfv.ABOVE : cfv.BELOW;
    case cfv.BELOW:
      return i > e.y ? cfv.BELOW : cfv.ABOVE;
    case cfv.LEFT:
      return t < e.x ? cfv.LEFT : cfv.RIGHT;
    case cfv.RIGHT:
      return t > e.x ? cfv.RIGHT : cfv.LEFT;
    default:
      xb(r);
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
    markSelectionChanged: useCallback((e) => {
      Object.keys(t.current.lastSelection).length && (t.current.didSelectionChange = !0, i());
      t.current.lastSelection = e;
    }, [i]),
    markPositionChanged: useCallback((e) => {
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