import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useCallback, useMemo, forwardRef } from "react";
import { createPortal } from "../vendor/944059";
import { E as _$$E } from "../905/632989";
import { Fullscreen, AlignmentPosition, Command } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import c from "classnames";
import { rf } from "../figma_app/806412";
import { W6 } from "../905/125333";
import { B } from "../905/714743";
import { S as _$$S } from "../figma_app/552746";
import { n as _$$n } from "../905/734251";
import { F } from "../905/989956";
import { fullscreenValue } from "../figma_app/455680";
import { Pl } from "../figma_app/62612";
import { Ib } from "../905/129884";
import { Yt } from "../figma_app/955650";
import { zG, C2 } from "../figma_app/47958";
import { Jc, Qd, lx } from "../figma_app/27927";
import { Hf } from "../figma_app/204478";
import { ko, fT, Ac, Zt, CO } from "../figma_app/351862";
import { U_, Kq } from "../9410/757252";
import { k4 } from "../figma_app/357202";
import { Fu, o1, WB, R2, Wf, oF, Y2, $E, g1 } from "../9410/787735";
var u = c;
function L(e) {
  let t = Jc.get(e);
  if (t) return Qd().get(t);
}
export function $$N0({
  shapeType: e,
  color: t,
  strokeStyleType: i,
  addToRecentsBehavior: a,
  toolSetSource: c,
  recordingKey: m,
  size: x = "large",
  disableDragging: j = !1,
  testId: w
}) {
  let N = useRef(null);
  let [k, R] = useAtomValueAndSetter(Hf);
  let M = L(e);
  let D = useCallback(() => {
    ko({
      event: fT.SelectedShape,
      shape: e,
      searchState: k
    });
    R({
      state: "complete"
    });
    Ac(c, M);
  }, [k, R, M, e, c]);
  let P = rf(m, "dblclick", t => {
    if (!t) return;
    let i = Jc.get(e);
    i && Zt(i, a);
  });
  let U = Yt();
  let F = U ? lx.get(U) : null;
  let H = useAtomWithSubscription(W6);
  let B = useMemo(() => e === F && c === H, [F, H, e, c]);
  let V = U_();
  let {
    dragState,
    onInsertableResourcePointerDown
  } = Kq({
    insertAction: t => {
      if (!N.current) return Promise.resolve();
      let i = zG(N.current.getBoundingClientRect());
      let n = C2(t.e);
      permissionScopeHandler.user("drop-shape-on-canvas", () => Fullscreen?.dropDiagramItemOntoCanvas(Jc.get(e), Math.round(i.x), Math.round(i.y), Math.round(n.x), Math.round(n.y), AlignmentPosition.TOP_LEFT, a));
      fullscreenValue.triggerActionEnum(Command.SET_TOOL_DEFAULT);
      return Promise.resolve();
    },
    recordingKey: m
  });
  return M ? jsxs(_$$S.div, {
    children: [jsx(_$$n.div, {
      onPointerDown: j ? void 0 : onInsertableResourcePointerDown,
      "data-testid": `outer-${w}`,
      children: jsx(_$$E, {
        className: u()({
          [Fu]: !B && "large" === x,
          [o1]: !B && "small" === x,
          [WB]: B && "large" === x,
          [R2]: B && "small" === x,
          [Wf]: !!dragState
        }),
        onClick: D,
        "aria-current": B,
        "aria-label": M.name,
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": M.name,
          "data-testid": w,
          onDoubleClick: P,
          onFocus: D,
          onBlur: V
        },
        recordingKey: m,
        children: jsx(A, {
          shapeType: e,
          size: x
        })
      })
    }), !j && jsx(O, {
      dragState,
      color: t,
      shapeType: e,
      strokeStyleType: i,
      ref: N
    })]
  }) : null;
}
function A({
  shapeType: e,
  size: t
}) {
  let i = "MINDMAP_TREE_NUCLEUS" === e;
  return "small" === t ? i ? jsx(B, {
    svg: CO(e),
    className: oF
  }) : jsx(B, {
    svg: CO(e),
    className: Y2
  }) : jsx(B, {
    svg: CO(e),
    className: $E,
    style: i ? {
      filter: "none"
    } : void 0
  });
}
let O = forwardRef(function ({
  dragState: e,
  shapeType: t,
  color: i,
  strokeStyleType: r
}, s) {
  let o = Pl({
    subscribeToUpdates_expensive: !1
  });
  if (!e?.dragPosition) return null;
  let l = L(t);
  if (!l) return null;
  let d = o * (l.canvasToSvgScale || 1);
  let c = l.canvasToSvgScale ? 1 / l.canvasToSvgScale : 1;
  return createPortal(jsx("div", {
    style: {
      left: e.dragPosition.x,
      top: e.dragPosition.y
    },
    className: k4,
    children: jsx("div", {
      className: g1,
      style: {
        transform: `scale(${d})`
      },
      children: jsx(l.Icon, {
        color: F.format(i),
        ref: s,
        shapeStrokeProps: {
          isDragging: !0,
          styleType: r,
          svgToCanvasScale: c
        }
      })
    })
  }), document.getElementById("fullscreen-root"));
});
export const h = $$N0;