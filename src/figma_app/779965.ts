import { jsxs, jsx } from "react/jsx-runtime";
import { createContext, useContext, forwardRef, useCallback, useRef } from "react";
import { noop } from 'lodash-es';
import { setupDragHandler } from "../905/97346";
import { useHandlePointerEvent } from "../figma_app/878298";
import l from "classnames";
import { P } from "../vendor/348225";
import { M } from "../figma_app/648761";
import { horizontalHandle, verticalHandle, e as _$$e } from "../905/841479";
var d = l;
let _ = createContext(() => null);
export function $$h1() {
  return useContext(_);
}
let $$m2 = forwardRef(function ({
  size: e,
  defaultSize: t,
  animation: r,
  disableResizing: a,
  unsetSizeWhenDisabled: s,
  onResize: o,
  onDragStart: l,
  onDragEnd: d,
  side: p,
  children: h,
  recordingKey: m,
  style: g,
  ...E
}, y) {
  let b = M(y);
  let T = useCallback(() => b.current, [b]);
  let I = useRef(0);
  let S = useRef(0);
  let v = "left" === p || "top" === p ? -1 : 1;
  let A = jsxs(_.Provider, {
    value: T,
    children: [h, a ? null : jsx(f, {
      recordingKey: m,
      side: p,
      onDragStart: () => {
        void 0 === e || (S.current = e, I.current || (I.current = e));
        l?.();
      },
      onDrag: e => {
        let t = "bottom" === p || "top" === p ? e.delta.y : e.delta.x;
        o(S.current + t * v);
      },
      onDragEnd: () => {
        d?.();
      },
      onDoubleClick: () => {
        o(t ?? I.current);
      }
    })]
  });
  let x = a && s ? void 0 : e;
  let N = "left" === p || "right" === p ? x : void 0;
  let C = "bottom" === p || "top" === p ? x : void 0;
  let w = g ? {
    ...g,
    width: N,
    height: C
  } : {
    width: N,
    height: C
  };
  return r ? jsx(P.div, {
    style: w,
    ...E,
    ref: b,
    ...r,
    children: A
  }) : jsx("div", {
    style: w,
    ...E,
    ref: b,
    children: A
  });
});
let $$g0 = forwardRef(function (e, t) {
  return jsx($$m2, {
    ...e,
    ref: t
  });
});
function f({
  side: e,
  onDoubleClick: t,
  onDragStart: r,
  onDrag: i,
  onDragEnd: l,
  recordingKey: c
}) {
  let [, u] = setupDragHandler({
    onDragStart: r,
    onDrag: i,
    onDragEnd: l
  });
  let _ = u({
    className: d()({
      [horizontalHandle]: "left" === e || "right" === e,
      [verticalHandle]: "bottom" === e || "top" === e,
      [_$$e]: !0
    }),
    onDoubleClick: t
  });
  let h = {
    includeTarget: !0,
    recordMetadata: e => ({
      clientX: e.clientX,
      clientY: e.clientY
    }),
    playbackMetadata: e => ({
      clientX: e.clientX,
      clientY: e.clientY
    })
  };
  let m = {
    onPointerDown: useHandlePointerEvent(c, "pointerdown", _.onPointerDown ?? noop, h),
    onPointerMove: useHandlePointerEvent(c, "pointermove", _.onPointerMove ?? noop, h),
    onPointerUp: useHandlePointerEvent(c, "pointerup", _.onPointerUp ?? noop, h)
  };
  return jsx("div", {
    "data-testid": c,
    role: "separator",
    "aria-hidden": !0,
    ..._,
    ...m
  });
}
export const lY = $$g0;
export const p1 = $$h1;
export const wV = $$m2;
