import { jsxs, jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useCallback, useRef, useState, useEffect } from "react";
import { setupDragHandler } from "../905/97346";
import { d as _$$d } from "../vendor/456530";
import { P as _$$P } from "../vendor/348225";
import { M as _$$M } from "../figma_app/548779";
import { useHandlePointerEvent } from "../figma_app/878298";
import { useStorageEventSync } from "../905/657224";
import { xk } from "@stylexjs/stylex";
let p = {
  handle: {
    position: "x10l6tqk",
    zIndex: "xl4d90n",
    backgroundColor: "xjbqb8w",
    $$css: !0
  },
  horizontalHandle: {
    width: "x1v4s8kt",
    height: "x5yr21d",
    cursor: "x7eptgl",
    top: "x13vifvy",
    $$css: !0
  },
  verticalHandle: {
    width: "xh8yej3",
    height: "xols6we",
    cursor: "x1e5i8e3",
    $$css: !0
  },
  left: {
    left: "x1iazeee",
    insetInlineStart: null,
    insetInlineEnd: null,
    $$css: !0
  },
  right: {
    right: "xkkrawi",
    insetInlineStart: null,
    insetInlineEnd: null,
    $$css: !0
  },
  bottom: {
    bottom: "x48lskh",
    $$css: !0
  },
  top: {
    top: "x1e0gzzx",
    $$css: !0
  }
};
let _ = "panel_is_resizing";
let h = createContext(() => null);
let $$m0 = forwardRef(function ({
  disableResizing: e,
  unsetSizeWhenDisabled: t,
  onSizeChange__SLOW: r,
  defaultSize: a,
  minSize: d,
  maxSize: u,
  doubleClickDefaultSize: p,
  onInitialSizeChange: m,
  onDragStart: f,
  onDragEnd: E,
  side: y,
  children: b,
  recordingKey: T,
  style: I,
  shouldDeferCanvasUpdateOnPanelResize: S,
  ...v
}, A) {
  let x = _$$M(A);
  let N = useCallback(() => x.current, [x]);
  let C = _$$d(a ?? d);
  let w = useRef(0);
  let O = "left" === y || "top" === y ? -1 : 1;
  let R = e && t ? void 0 : C;
  let L = "left" === y || "right" === y ? R : void 0;
  let P = "bottom" === y || "top" === y ? R : void 0;
  let D = I ? {
    ...I,
    width: L ?? I.width,
    height: P ?? I.height
  } : {
    width: L,
    height: P
  };
  let k = _$$d(!1);
  let M = _$$d(!1);
  let [F, j] = useState(!1);
  useStorageEventSync({
    onSync: e => j("true" === e),
    shouldSyncValue: e => e.key === _
  });
  let U = e => {
    k.set(e);
    localStorage.setItem(_, String(e));
  };
  let [B, G] = useState(void 0);
  useEffect(() => {
    void 0 !== B && a === B && (U(!1), G(void 0));
  }, [B, a, U]);
  useEffect(() => {
    S && F || k || void 0 === a || a === C.get() || C.set(a);
  }, [k, a, C, F]);
  C.on("change", e => {
    r?.(e);
    M.get() && !k.get() && (U(!0), m?.(e));
  });
  return jsxs(_$$P.div, {
    ...v,
    style: D,
    ref: x,
    children: [jsx(h.Provider, {
      value: N,
      children: b
    }), e ? null : jsx(g, {
      recordingKey: T,
      side: y,
      onDragStart: e => {
        M.set(!0);
        w.current = C.get();
        f?.(e);
      },
      onDrag: e => {
        let t = "bottom" === y || "top" === y ? e.delta.y : e.delta.x;
        let r = Math.floor(Math.max(d, Math.min(u ?? 1 / 0, w.current + t * O)));
        C.set(r);
      },
      onDragEnd: e => {
        let t = "bottom" === y || "top" === y ? e.delta.y : e.delta.x;
        let r = Math.floor(Math.max(d, Math.min(u ?? 1 / 0, w.current + t * O)));
        E?.(r);
        G(r);
        M.set(!1);
      },
      onDoubleClick: () => {
        let e = p ?? d;
        C.set(e);
        E?.(e);
      }
    })]
  });
});
function g({
  side: e,
  onDoubleClick: t,
  onDragStart: r,
  onDragEnd: i,
  onDrag: s,
  recordingKey: o
}) {
  let [, l] = setupDragHandler({
    onDragStart: r,
    onDrag: s,
    onDragEnd: i
  });
  let c = l({
    className: xk(p.handle, "left" === e || "right" === e ? p.horizontalHandle : p.verticalHandle, p[e]).className,
    onDoubleClick: t
  });
  let _ = {
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
  let h = {
    onPointerDown: useHandlePointerEvent(o, "pointerdown", e => {
      e && c.onPointerDown?.(e);
    }, _),
    onPointerMove: useHandlePointerEvent(o, "pointermove", e => {
      e && c.onPointerMove?.(e);
    }, _),
    onPointerUp: useHandlePointerEvent(o, "pointerup", e => {
      e && c.onPointerUp?.(e);
    }, _)
  };
  return jsx("div", {
    "data-testid": o,
    role: "separator",
    "aria-hidden": !0,
    ...c,
    ...h
  });
}
export const G = $$m0;