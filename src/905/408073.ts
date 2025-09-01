import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, useContext, forwardRef, useState, useRef, useLayoutEffect, useCallback, useMemo, useEffect, useId } from "react";
import { flushSync } from "../vendor/944059";
import { SV, XF, zR, s3, rm, we, vW, bv, kp, s9, Zx, C1, lY, ph } from "../vendor/516565";
import { ll } from "../vendor/542280";
import { cY, UU, Ej } from "../vendor/343575";
import { A } from "../vendor/723372";
import { o as _$$o } from "../905/821217";
import { Z, q } from "../905/751750";
import { W } from "../905/458642";
import { Uk } from "../905/691059";
import { r as _$$r } from "../905/577641";
import { Dm, s7, yM, Ju } from "../905/955878";
import { Q } from "../905/586361";
function _(e, t) {
  if (e.current) {
    let {
      scrollTop,
      scrollHeight,
      clientHeight
    } = e.current;
    if ("up" === t) return scrollTop >= 10;
    if ("down" === t) return scrollTop <= scrollHeight - clientHeight - 10;
  }
  return !1;
}
export let $$A6 = createContext({
  getTriggerProps: () => ({}),
  setTriggerReference: () => {},
  getContainerProps: () => ({}),
  setContainerReference: () => {},
  getItemProps: () => ({}),
  overflowRef: {
    current: null
  },
  scrollRef: {
    current: null
  },
  allowSelection: !1,
  setOpen: () => {},
  setScrollTop: () => {},
  handleSelect: () => {},
  handleArrowScroll: () => {},
  isOpen: !1,
  isTriggerFocused: !1,
  scrollTop: 0,
  innerOffset: 0,
  selectedIndex: null,
  itemList: [],
  activeIndex: 0,
  fallback: !1,
  floatingContext: {},
  floatingStyles: {}
});
export function $$y8() {
  let {
    itemList,
    selectedIndex,
    isOpen,
    activeIndex
  } = useContext($$A6);
  return {
    itemList,
    selectedItem: null !== selectedIndex ? itemList[selectedIndex] : null,
    isOpen,
    highlightedItem: null !== activeIndex ? itemList[activeIndex] : null
  };
}
export let $$b5 = forwardRef(({
  direction: e,
  children: t,
  className: i,
  ...o
}, l) => {
  let [c, u] = useState(!1);
  let p = useRef(null);
  let m = SV([p, l]);
  let g = useRef("idle");
  let f = useRef(-1);
  let {
    scrollRef,
    floatingContext: {
      isPositioned
    },
    scrollTop,
    handleArrowScroll,
    innerOffset
  } = useContext($$A6);
  useLayoutEffect(() => {
    isPositioned && "active" !== g.current && requestAnimationFrame(() => {
      flushSync(() => u(_(scrollRef, e)));
    });
  }, [isPositioned, innerOffset, scrollTop, scrollRef, e]);
  return jsx("div", {
    className: A("select-primitive__scrollArrow__-uP-4", i),
    "data-fpl-select-direction": e,
    "data-fpl-select-visibility": c || void 0,
    ref: m,
    "aria-hidden": !0,
    onPointerEnter: () => {
      g.current = "active";
      let t = Date.now();
      cancelAnimationFrame(f.current);
      f.current = requestAnimationFrame(function i() {
        if (scrollRef.current) {
          let n = Date.now();
          let r = n - t;
          t = n;
          let a = r / 2;
          let s = "up" === e ? scrollRef.current.scrollTop : scrollRef.current.scrollHeight - scrollRef.current.clientHeight - scrollRef.current.scrollTop;
          let o = "up" === e ? scrollRef.current.scrollTop - a > 0 : scrollRef.current.scrollTop + a < scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
          handleArrowScroll("up" === e ? Math.min(a, s) : Math.max(-a, -s));
          o ? f.current = requestAnimationFrame(i) : u(_(scrollRef, e));
        }
      });
    },
    onPointerLeave: () => {
      g.current = "idle";
      cancelAnimationFrame(f.current);
    },
    ..._$$r,
    ...o,
    children: t
  });
});
$$b5.displayName = "SelectPrimitive.ScrollArrow";
export let $$v0 = forwardRef(({
  children: e,
  className: t,
  htmlAttributes: i,
  DEPRECATED_optionsOnFocusOnly: o,
  ...l
}, u) => {
  let {
    setContainerReference,
    getContainerProps,
    floatingContext,
    floatingStyles,
    scrollRef,
    fallback,
    setScrollTop,
    isOpen,
    isTriggerFocused
  } = useContext($$A6);
  let w = SV([u, scrollRef]);
  let C = useContext(Uk);
  let {
    fpl_popover_fullscreen_events
  } = Q();
  let k = fpl_popover_fullscreen_events ? [Dm, s7, yM] : [];
  let R = jsx(_$$o, {
    display: "contents",
    eventListeners: ["onClick", "onPointerDown", "onMouseDown"],
    children: jsx("div", {
      ref: setContainerReference,
      style: floatingStyles,
      className: A(k),
      children: jsx("ul", {
        ..._$$r,
        ...i,
        className: A("select-primitive__container__hpR3l", t),
        ref: w,
        "data-fpl-fallback": fallback,
        role: "listbox",
        ...getContainerProps({
          onScroll({
            currentTarget: e
          }) {
            flushSync(() => setScrollTop(e.scrollTop));
          }
        }),
        ...l,
        children: e
      })
    })
  });
  return !o || isOpen || isTriggerFocused ? isOpen ? jsx(XF, {
    root: C ?? document.body,
    children: jsx(zR, {
      style: {
        zIndex: "var(--z-index-dropdown)"
      },
      lockScroll: !0,
      children: jsx(s3, {
        context: floatingContext,
        modal: !1,
        children: R
      })
    })
  }) : jsx("div", {
    style: {
      display: "none"
    },
    children: R
  }) : null;
});
$$v0.displayName = "SelectPrimitive.Container";
export let $$I7 = forwardRef(({
  htmlAttributes: e,
  ...t
}, i) => {
  let {
    getTriggerProps,
    setTriggerReference
  } = useContext($$A6);
  let l = SV([setTriggerReference, i]);
  return jsx(_$$o, {
    eventListeners: ["onPointerDown", "onClick", "onMouseDown"],
    display: "contents",
    children: jsx("button", {
      type: "button",
      ref: l,
      ...getTriggerProps(),
      ..._$$r,
      ...e,
      ...t
    })
  });
});
$$I7.displayName = "SelectPrimitive.Trigger";
export let $$E3 = forwardRef(({
  value: e,
  htmlAttributes: t,
  ...i
}, a) => {
  let {
    activeIndex,
    selectedIndex,
    allowSelection,
    getItemProps,
    handleSelect
  } = useContext($$A6);
  let [p, m] = useState("");
  let f = useRef(null);
  let _ = useRef(!1);
  let {
    ref,
    index
  } = rm({
    label: {
      label: p,
      value: e
    }
  });
  let v = SV([ref, a, f]);
  useLayoutEffect(() => {
    f.current && m(f.current.innerText ?? "");
  }, []);
  let I = !i.disabled && index === activeIndex;
  return jsx("li", {
    ..._$$r,
    ...t,
    "aria-selected": index === selectedIndex,
    role: "option",
    tabIndex: I ? 0 : -1,
    "data-fpl-selected": I || void 0,
    "aria-disabled": i.disabled,
    ref: v,
    ...getItemProps({
      onKeyDown: t => {
        (" " === t.key || "Enter" === t.key) && (i.disabled || handleSelect(e, t), Ju(t));
      },
      onClick: t => {
        i.disabled || !allowSelection || _.current || handleSelect(e, t);
        Ju(t);
        _.current = !1;
      },
      onPointerUp: t => {
        0 === t.button && (!i.disabled && allowSelection && (_.current = !0, handleSelect(e, t)), Ju(t));
      },
      onPointerLeave: () => {
        _.current = !1;
      }
    }),
    "data-fpl-select-value": e,
    ...i
  });
});
$$E3.displayName = "SelectPrimitive.Option";
export let $$x2 = forwardRef((e, t) => {
  let i = Z();
  return jsx("li", {
    id: i,
    ref: t,
    role: "presentation",
    ...e
  });
});
$$x2.displayName = "SelectPrimitive.GroupLabel";
export let $$S1 = forwardRef(({
  groupLabel: e,
  children: t,
  htmlAttributes: i,
  ...r
}, a) => {
  let [s, o] = q();
  return jsx(o, {
    value: s,
    children: jsxs("ul", {
      ..._$$r,
      ...i,
      ref: a,
      "aria-labelledby": s,
      role: "group",
      ...r,
      children: [e, t]
    })
  });
});
export function $$w4({
  value: e,
  onChange: t,
  recordingKey: i,
  onSelectionChange: d,
  onOpenChange: c,
  offsetAmount: u = 0,
  children: m,
  padding: h
}) {
  let g = useRef([]);
  let _ = useRef(null);
  let y = useRef(null);
  let b = useRef([]);
  let [v, I] = useState(!1);
  let [E, x] = useState(!1);
  let [S, w] = useState(!1);
  let [C, T] = useState(null);
  let [k, R] = useState(!1);
  let [N, P] = useState(0);
  let [O, D] = useState(0);
  let {
    fpl_select_position_fix
  } = Q();
  let {
    onChange
  } = W({
    onChange: t,
    recordingKey: i
  });
  let M = useCallback((e, t) => {
    onChange(e, {
      info: {
        event: t
      }
    });
    x(!1);
  }, [onChange, x]);
  let j = useMemo(() => {
    if (!b.current) return null;
    let t = b.current.findIndex(t => t?.value === e);
    return -1 !== t ? t : null;
  }, [JSON.stringify(b.current), e]);
  useLayoutEffect(() => {
    E && fpl_select_position_fix && R(!1);
  }, [E, fpl_select_position_fix]);
  useEffect(() => {
    if (E) {
      let e = setTimeout(() => {
        I(!0);
      }, 300);
      return () => {
        clearTimeout(e);
      };
    }
    P(0);
    I(!1);
    R(!1);
  }, [E]);
  let {
    refs,
    floatingStyles,
    context
  } = we({
    placement: "bottom-start",
    open: E,
    onOpenChange: e => {
      x(e);
      c && c(e);
    },
    whileElementsMounted: ll,
    transform: !0,
    middleware: k ? [cY({
      alignmentAxis: -1 * u
    }), UU({
      padding: h
    }), Ej({
      apply({
        rects: e,
        availableWidth: t,
        availableHeight: i,
        elements: n
      }) {
        Object.assign(n.floating.style, {
          minWidth: `${e.reference.width + 2 * u}px`,
          maxWidth: `${t}px`,
          maxHeight: `${i}px`,
          display: "flex",
          flexDirection: "column"
        });
      },
      padding: h
    })] : [UU({
      mainAxis: !1,
      padding: h
    }), vW({
      listRef: g,
      overflowRef: _,
      scrollRef: y,
      index: j ?? 0,
      offset: N,
      padding: h,
      referenceOverflowThreshold: 20,
      onFallbackChange: e => {
        e && R(e);
      },
      minItemsVisible: 4
    }), cY({
      alignmentAxis: -1 * u
    }), Ej({
      apply({
        rects: e,
        availableWidth: t,
        elements: i
      }) {
        Object.assign(i.floating.style, {
          minWidth: `${e.reference.width + 2 * u}px`,
          maxWidth: `${t}px`
        });
      },
      padding: h
    })]
  });
  let G = useCallback(e => {
    d && C !== e && (null === e ? d() : d(b.current[e].value));
    T(e);
  }, [d, b, C]);
  let {
    getReferenceProps,
    getFloatingProps,
    getItemProps
  } = bv([kp(context, {
    event: "mousedown"
  }), s9(context), Zx(context, {
    enabled: !k,
    onChange: P,
    overflowRef: _,
    scrollRef: y
  }), C1(context, {
    listRef: g,
    activeIndex: C,
    selectedIndex: j,
    focusItemOnOpen: !0,
    scrollItemIntoView: {
      block: "center",
      inline: "center"
    },
    onNavigate: G
  }), lY(context, {
    listRef: b,
    activeIndex: C,
    onMatch: E ? G : e => {
      null !== e && M(b.current[e].value, {});
    },
    findMatch: (e, t) => {
      let i = t.toLocaleLowerCase();
      return e.find(e => e.label.toLocaleLowerCase().startsWith(i));
    }
  })]);
  let K = useId();
  let Y = useMemo(() => ({
    getTriggerProps: function () {
      let e = getReferenceProps({
        "aria-controls": K,
        "aria-haspopup": "listbox",
        "aria-expanded": E,
        role: "combobox"
      });
      return {
        ...e,
        onFocus: t => {
          e.onFocus?.(t);
          w(!0);
        },
        onBlur: t => {
          e.onBlur?.(t);
          w(!1);
        }
      };
    },
    setTriggerReference: refs.setReference,
    getContainerProps: function () {
      return getFloatingProps({
        id: K
      });
    },
    setContainerReference: refs.setFloating,
    getItemProps,
    setOpen: x,
    overflowRef: _,
    scrollRef: y,
    setScrollTop: D,
    handleSelect: M,
    handleArrowScroll: function (e) {
      k ? y.current && (y.current.scrollTop -= e, flushSync(() => D(y.current.scrollTop ?? 0))) : flushSync(() => P(t => t - e));
    },
    floatingContext: context,
    floatingStyles,
    isOpen: E,
    isTriggerFocused: S,
    fallback: k,
    itemList: b.current,
    scrollTop: O,
    innerOffset: N,
    activeIndex: C,
    selectedIndex: j,
    allowSelection: v
  }), [refs.setReference, refs.setFloating, getItemProps, M, context, floatingStyles, E, S, k, O, N, C, j, v, getReferenceProps, K, getFloatingProps]);
  return jsx($$A6.Provider, {
    value: Y,
    children: jsx(ph, {
      elementsRef: g,
      labelsRef: b,
      children: m
    })
  });
}
$$S1.displayName = "SelectPrimitive.Group";
$$w4.displayName = "SelectPrimitive.Root";
export const mc = $$v0;
export const YJ = $$S1;
export const WL = $$x2;
export const c$ = $$E3;
export const bL = $$w4;
export const LJ = $$b5;
export const pk = $$A6;
export const l9 = $$I7;
export const WM = $$y8;