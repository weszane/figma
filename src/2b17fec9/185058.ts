import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useMemo, useCallback, forwardRef } from "react";
import { createPortal } from "../vendor/944059";
import { E as _$$E } from "../905/632989";
import { DesignGraphElements, Fullscreen, AlignmentPosition, ConfirmationLevel, Command } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import c from "classnames";
import { wp, SK } from "../905/125333";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { n as _$$n } from "../905/734251";
import { F } from "../905/989956";
import { AW } from "../figma_app/451499";
import { fullscreenValue } from "../figma_app/455680";
import { Pl } from "../figma_app/62612";
import { Ib } from "../905/129884";
import { zG, C2, P } from "../figma_app/47958";
import { Hf } from "../figma_app/204478";
import { X5, F_ } from "../figma_app/240545";
import { ko, fT, Zt } from "../figma_app/351862";
import { U_, Kq } from "../9410/757252";
import { Nb } from "../figma_app/357202";
import { Fu, o1, WB, R2, Wf, vl, hD } from "../9410/787735";
var u = c;
let I = new AW();
export function $$L0({
  setConnectorTool: e,
  isSelected: t,
  connectorStyle: i,
  recordingKey: a,
  size: c = "large",
  disableDragging: m = !1,
  testId: _
}) {
  let x = useRef(null);
  let j = useMemo(() => X5.get(i), [i]);
  let S = useMemo(() => F_.get(i), [i]);
  let L = useMemo(() => I.format(i), [i]);
  let A = useAtomWithSubscription(wp);
  let O = useAtomWithSubscription(SK).connectorToolLineStyle;
  let [k, R] = useAtomValueAndSetter(Hf);
  let M = useCallback(() => {
    ko({
      event: fT.SelectedShape,
      shape: i,
      searchState: k
    });
    R({
      state: "complete"
    });
    e(i);
  }, [k, R, e, i]);
  let D = U_();
  let P = "ELBOWED" === O ? DesignGraphElements.CONNECTOR_ELBOWED : "CURVED" === O ? DesignGraphElements.CONNECTOR_CURVED : DesignGraphElements.CONNECTOR_STRAIGHT;
  let {
    dragState,
    onInsertableResourcePointerDown
  } = Kq({
    insertAction: e => {
      if (!x.current) return Promise.resolve();
      let t = zG(x.current.getBoundingClientRect());
      let i = C2(e.e);
      permissionScopeHandler.user("drop-connector-on-canvas", () => Fullscreen?.dropDiagramItemOntoCanvas(P, Math.round(t.x), Math.round(t.y), Math.round(i.x), Math.round(i.y), AlignmentPosition.TOP_LEFT, ConfirmationLevel.NO));
      fullscreenValue.triggerActionEnum(Command.SET_TOOL_DEFAULT);
      return Promise.resolve();
    },
    recordingKey: a
  });
  let H = useCallback(() => Zt(P, ConfirmationLevel.NO), [P]);
  return j ? jsxs(Fragment, {
    children: [jsx(_$$n.div, {
      onPointerDown: m ? void 0 : onInsertableResourcePointerDown,
      "data-testid": `outer-${_}`,
      children: jsx(_$$E, {
        className: u()({
          [Fu]: !t && "large" === c,
          [o1]: !t && "small" === c,
          [WB]: t && "large" === c,
          [R2]: t && "small" === c,
          [Wf]: !!dragState
        }),
        recordingKey: a,
        "aria-current": t,
        "aria-label": L,
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": L,
          "data-testid": _,
          onDoubleClick: H,
          onFocus: M,
          onBlur: D
        },
        children: jsx(B, {
          svg: j,
          className: "small" === c ? vl : void 0,
          style: {
            filter: "none"
          }
        })
      })
    }), !m && jsx(N, {
      dragState,
      color: A,
      Icon: S,
      ref: x
    })]
  }) : null;
}
let N = forwardRef(function ({
  dragState: e,
  color: t,
  Icon: i
}, r) {
  let s = Pl({
    subscribeToUpdates_expensive: !1
  });
  if (!e?.dragPosition || !i) return null;
  let o = s * P;
  let l = F.format(t);
  return createPortal(jsx("div", {
    style: {
      left: e.dragPosition.x,
      top: e.dragPosition.y,
      transform: `scale(${o})`
    },
    className: u()(_$$s.relative.$, hD, Nb),
    children: jsx(i, {
      color: l,
      ref: r
    })
  }), document.getElementById("fullscreen-root"));
});
export const W = $$L0;