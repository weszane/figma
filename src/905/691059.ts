import { jsx } from "react/jsx-runtime";
import { createContext, useRef, useId, useState, useCallback, forwardRef, useContext } from "react";
import { we, kp, s9, Mk, iB, bv, SV, ie, XF, zR, s3 } from "src/vendor/516565";
import { UE, cY, UU } from "src/vendor/343575";
import { ll } from "src/vendor/542280";
import { DP } from "src/905/158740";
import { J } from "src/905/341359";
import { A as _$$A } from "src/vendor/723372";
import { o as _$$o } from "src/905/821217";
import { useSelectionProvider } from "src/905/751750";
import { EVENT_CAPTURE_CLASS, EVENT_CAPTURE_KEYS_CLASS, WHEEL_EVENT_CAPTURE_CLASS } from "src/905/955878";
import { Q } from "src/905/586361";
import { P } from "src/905/536340";
export let $$f0 = createContext(void 0);
export function $$_4({
  children: e
}) {
  let t = useRef(null);
  return jsx("div", {
    className: P,
    ref: t,
    children: jsx($$f0.Provider, {
      value: t,
      children: e
    })
  });
}
export function $$A1({
  type: e,
  softDismiss: t,
  provideOwnDismiss: i,
  provideOwnClick: n,
  isOpen: l,
  openOnHover: d = !1,
  offset: c = 8,
  arrowPadding: u = 0,
  middleware: p,
  config2025CuratorHacks: m,
  ...h
}) {
  let g = useId();
  let f = useRef(null);
  let [_, A] = useState(g);
  let {
    refs,
    floatingStyles,
    context
  } = we({
    ...h,
    middleware: p ? p?.concat([UE({
      element: f,
      padding: u
    })]) : [cY(c), UU({
      padding: 8,
      fallbackAxisSideDirection: "start"
    }), UE({
      element: f,
      padding: u
    })],
    open: l,
    whileElementsMounted: ll
  });
  let I = void 0 === t ? "listbox" === e || "menu" === e || "tooltip" === e : t;
  let E = kp(context, {
    enabled: "tutorial" !== e && !n
  });
  let x = s9(context, {
    enabled: !i,
    outsidePress: t
  });
  let S = Mk(context, {
    enabled: d,
    move: !1,
    delay: {
      open: 500,
      close: 0
    },
    handleClose: iB({
      requireIntent: !1,
      blockPointerEvents: !0,
      buffer: 1
    })
  });
  let {
    getReferenceProps,
    getFloatingProps
  } = bv([E, x, S]);
  let T = useCallback(({
    style: t,
    ...i
  } = {}) => (i.id && A(i.id), {
    isOpen: l,
    type: e,
    context,
    useSoftDismiss: I,
    id: _,
    ref: refs.setFloating,
    style: {
      ...t,
      ...floatingStyles
    },
    config2025CuratorHacks: m,
    ...i,
    ...getFloatingProps({})
  }), [_, context, I, floatingStyles, getFloatingProps, l, refs.setFloating, e, m]);
  let k = useCallback(() => ({
    ref: f,
    context
  }), [context, f]);
  return {
    getTriggerProps: useCallback((t = {}) => {
      let i = refs.setReference;
      if ("tutorial" === e) {
        let {
          onClick,
          ...t
        } = getReferenceProps({
          ref: i,
          "aria-details": _
        });
        return t;
      }
      return getReferenceProps({
        ...t,
        ref: i,
        "aria-controls": _,
        "aria-haspopup": "tooltip" === e ? "dialog" : e,
        "aria-expanded": l,
        "aria-describedby": "tooltip" === e ? _ : void 0
      });
    }, [_, getReferenceProps, l, refs.setReference, e]),
    getArrowProps: k,
    getContainerProps: T,
    context
  };
}
$$_4.displayName = "PopoverOutlet";
export let $$y2 = forwardRef(({
  fill: e = "var(--color-bg)",
  ...t
}, i) => {
  let s = useRef();
  let o = SV([s, i]);
  return jsx(ie, {
    ref: o,
    tipRadius: 1,
    fill: e,
    ...t
  });
});
$$y2.displayName = "PopoverPrimitive.Arrow";
export let $$b3 = forwardRef(({
  isOpen: e,
  type: t,
  children: i,
  context: s,
  useSoftDismiss: o,
  style: g,
  config2025CuratorHacks: A,
  className: y,
  ...b
}, v) => {
  let I = useContext($$f0);
  let E = "listbox" === t || "menu" === t;
  let [x, S] = useSelectionProvider();
  let {
    version
  } = DP();
  let {
    fpl_popover_fullscreen_events
  } = Q();
  let T = fpl_popover_fullscreen_events ? [EVENT_CAPTURE_CLASS, EVENT_CAPTURE_KEYS_CLASS, WHEEL_EVENT_CAPTURE_CLASS] : [];
  let k = {
    dialog: "var(--z-index-window)",
    grid: "var(--z-index-window)",
    tree: "var(--z-index-window)",
    listbox: "var(--z-index-dropdown)",
    menu: A ? "9" : "var(--z-index-dropdown)",
    tutorial: "var(--z-index-window)",
    tooltip: "var(--z-index-tooltip)"
  };
  return e || "listbox" !== t ? e ? o ? jsx(_$$o, {
    display: "contents",
    eventListeners: E ? ["onKeyDown", "onKeyUp", "onKeyPress"] : [],
    children: jsx(XF, {
      root: I,
      children: jsx(J, {
        disabled: "ui3" !== version,
        children: jsx(zR, {
          style: {
            zIndex: k[t],
            isolation: "isolate"
          },
          lockScroll: !0,
          children: jsx($$_4, {
            children: jsx(s3, {
              context: s,
              modal: E,
              initialFocus: "tooltip" === t ? -1 : 0,
              children: jsx("div", {
                ref: v,
                style: g,
                className: _$$A(y, ...T),
                ...b,
                children: i
              })
            })
          })
        })
      })
    })
  }) : jsx(S, {
    value: x,
    children: jsx(XF, {
      root: I,
      children: jsx($$_4, {
        children: jsx("section", {
          "aria-labelledby": x,
          ref: v,
          ...b,
          style: {
            ...g,
            zIndex: k[t]
          },
          className: _$$A(y, ...T),
          children: i
        })
      })
    })
  }) : null : jsx("div", {
    style: {
      display: "none"
    },
    children: i
  });
});
$$b3.displayName = "PopoverPrimitive.Container";
export const Uk = $$f0;
export const fP = $$A1;
export const i3 = $$y2;
export const mc = $$b3;
export const nK = $$_4;
