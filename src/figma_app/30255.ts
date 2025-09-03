import { jsx } from "react/jsx-runtime";
import { memo, useContext, useState, useRef, useEffect } from "react";
import { wA } from "../vendor/514228";
import { debug } from "../figma_app/465776";
import { oB } from "../figma_app/273493";
import { glU, KWd, xbm } from "../figma_app/763686";
import d from "classnames";
import { d as _$$d } from "../vendor/456530";
import { N as _$$N } from "../vendor/930821";
import { P as _$$P } from "../vendor/348225";
import { aH } from "../figma_app/806412";
import { D8 } from "../905/511649";
import { jD } from "../905/765855";
import { F as _$$F } from "../905/989956";
import { oW } from "../figma_app/247611";
import { Pl } from "../figma_app/62612";
import { hx } from "../figma_app/630194";
import { nS } from "../figma_app/274383";
import { T as _$$T } from "../905/355691";
import { fK } from "../figma_app/300024";
import { zG, C2 } from "../figma_app/47958";
import { bz, ke, zO, bj, kl } from "../figma_app/731560";
var c = d;
export let $$x0 = memo(function ({
  toolType: e,
  color: t,
  isSelected: r,
  onTap: d,
  onDragEnd: x,
  onDragStart: N,
  Icon: C,
  IconNoRef: w,
  toolbarIconScale: O,
  canvasToSvgScale: R,
  isDrawingSubmenuTool: L,
  isDragReversing: P,
  stickyAnimationState: D,
  isHovered: k,
  hoverOffsetAmount: M = "DEFAULT",
  shapeStrokeStyleType: F,
  forIllustration: j = !1
}) {
  let {
    state,
    dispatch
  } = useContext(nS);
  let G = wA();
  let V = state.draggedTool === e;
  let H = state.draggedToolCanCancel;
  let [z, W] = useState(!1);
  let [K, Y] = useState(!1);
  let [$, X] = useState(0);
  let q = useRef(!1);
  useEffect(() => {
    let e = e => {
      "Escape" === e.key && V && (dispatch({
        type: "end drag"
      }), q.current = !0, W(!1), X($ + 1));
    };
    document.addEventListener("keydown", e);
    return () => {
      document.removeEventListener("keydown", e);
    };
  }, [$, V, e, dispatch]);
  useEffect(() => {
    let e = () => {
      W(!1);
    };
    document.addEventListener("pointerup", e);
    return () => {
      document.removeEventListener("pointerup", e);
    };
  }, [W]);
  useEffect(() => (V ? document.body.classList.add(bz) : document.body.classList.remove(bz), () => {
    document.body.classList.remove(bz);
  }), [V]);
  let J = useRef(null);
  let Z = Pl({
    subscribeToUpdates_expensive: V
  });
  let Q = function (e) {
    switch (e) {
      case "NONE":
        return 0;
      case "STICKY":
        return -20;
      case "DRAWING":
        return -22;
      case "DRAWING_SUBMENU":
      case "DEFAULT":
        return -24;
      case "ILLUSTRATION_DRAWING":
        return -8;
    }
  }(M);
  let ee = j ? 1 : .93;
  let et = useRef(null);
  let er = _$$d(.5);
  let en = _$$d(.5);
  let [ei, ea] = useState();
  let es = V ? H ? "whileDragShouldCancel" : "whileDrag" : "pencil" === e && r && !j ? "hiddenPencil" : z ? "whileTap" : L && r ? "selectedSubmenuTool" : k ? "whileHovering" : "initial";
  if ("connector" === e && !V) {
    let e = oB(_$$F.parse(t));
    e.l > .9 && (t = _$$F.formatHSLA({
      h: e.h,
      s: e.s,
      l: .9,
      a: e.a
    }));
  }
  return jsx(D8, {
    recordingKey: hx(`${e}.animatedIcon`),
    className: c()(ke, {
      [zO]: r,
      [bj]: k
    }),
    onPointerDown: () => {
      if (W(!0), !_$$T.RECORD_DETAILED_EVENTS) return aH;
    },
    onPointerUp: () => {
      if (W(!1), !_$$T.RECORD_DETAILED_EVENTS) return aH;
    },
    onTouchStart: e => {
      e.preventDefault();
    },
    onTouchEnd: e => {
      e.preventDefault();
      !K && state.shouldFinishClick && d();
      Y(!1);
    },
    onContextMenu: e => {
      e.preventDefault();
    },
    children: jsx(_$$N, {
      children: jsx(_$$P.div, {
        ref: et,
        animate: es,
        "data-test-animate-state": es,
        "data-testid": _$$T.getMotionDivId(e),
        drag: !!x,
        dragConstraints: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        },
        dragElastic: 1,
        onDrag: (e, t) => {
          var r;
          ei && ((r = t.point).x >= ei.x && r.x <= ei.x + ei.width && r.y >= ei.y || r.y > ei.y + ei.height) !== H && dispatch({
            type: "toggle drag cancellable"
          });
        },
        onDragEnd: (e, t) => {
          if (Y(!0), er.set(.5), en.set(.5), H) {
            dispatch({
              type: "cancel drag"
            });
            W(!1);
            return;
          }
          let r = J.current;
          if (r) {
            if (q.current) return;
            let t = zG(r.getBoundingClientRect());
            let n = C2(e);
            x && x(t, n);
            dispatch({
              type: "end drag"
            });
            W(!1);
            X($ + 1);
          } else debug(!1, "Delightful tool is missing the toolref!");
        },
        onDragStart: (t, r) => {
          dispatch({
            type: "start drag",
            tool: e
          });
          q.current = !1;
          glU?.triggerActionInUserEditScope("set-tool-default", {
            source: fK
          });
          oW.trigger("action", KWd.CLEAR);
          G(jD());
          let n = et.current;
          if (n) {
            let e = n.getBoundingClientRect();
            er.set((r.point.x - e.x) / e.width);
            en.set((r.point.y - e.y) / e.height);
          }
          let i = J.current;
          if (i) {
            let e = i.closest("." + kl);
            debug(!!e, "Delightful tool can't find containing toolbar!");
            ea(e.getBoundingClientRect());
            N && N();
          }
        },
        style: {
          originX: er,
          originY: en
        },
        transformTemplate: (e, t) => "translate3d(0px, 0px, 0) scale(1, 1)" === t ? "none" : t,
        transition: {
          duration: .1,
          ease: [.12, .23, .5, 1]
        },
        variants: {
          initial: {
            scale: 1,
            y: 0
          },
          selectedSubmenuTool: {
            y: Q + (j ? -4 : 0)
          },
          whileTap: {
            y: Q,
            scale: ee
          },
          whileDragShouldCancel: {
            y: Q,
            scale: ee
          },
          whileDrag: {
            y: Q,
            scale: Z * (R || 1)
          },
          whileHovering: {
            y: Q
          },
          hiddenPencil: {
            y: 72
          }
        },
        children: C ? jsx(C, {
          color: t,
          toolbarIconScale: O,
          ref: J,
          isBeingDraggedForPlacement: V,
          shouldAnimate: V,
          isReversing: P,
          stickyAnimationState: D,
          shapeStrokeProps: {
            isDragging: V,
            styleType: void 0 !== F ? F : xbm.NONE,
            svgToCanvasScale: R && O ? 1 / (R * O) : 1
          }
        }) : w
      })
    }, String($))
  });
});
export const s = $$x0;