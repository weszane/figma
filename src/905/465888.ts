import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, createContext, useState, useRef, useLayoutEffect, useMemo, useContext, useEffect } from "react";
import { flushSync } from "../vendor/944059";
import { fI, R1, bv, Mk, iB, kp, s9, It, lY, C1, rm, SV, $c, cq, ph, P6 } from "../vendor/516565";
import { cY, UU, Ej } from "../vendor/343575";
import { A as _$$A } from "../vendor/723372";
import { o as _$$o } from "../905/821217";
import { Z, q } from "../905/751750";
import { iM, If } from "../905/472756";
import { Qv } from "../905/959312";
import { $ } from "../905/61417";
import { _ as _$$_ } from "../figma_app/496441";
import { fP, mc as _$$mc } from "../905/691059";
import { Lh } from "../figma_app/415899";
import { R } from "../905/457273";
import { r as _$$r } from "../905/577641";
import { Ju } from "../905/955878";
import { Q } from "../905/586361";
import { E as _$$E } from "../905/172252";
import { Os, Uw, Ym } from "../905/743079";
let E = forwardRef(({
  onClick: e,
  children: t,
  disabled: i,
  recordingKey: r,
  htmlAttributes: a,
  ...s
}, o) => {
  let l = iM(["description"]);
  let d = Qv(e, {
    eventName: "click",
    recordingKey: r
  }, [e, i]);
  let c = Os({
    forwardedRef: o,
    action: d,
    disabled: i,
    closeOnClick: !0
  });
  return jsx("li", {
    role: "menuitem",
    ...l,
    ...c,
    ...s,
    ...a,
    children: t
  });
});
E.displayName = "Menu.Item";
export let $$x2 = If(E);
$$x2.displayName = "MenuPrimitive.Item";
export let $$S3 = forwardRef(({
  href: e,
  htmlAttributes: t,
  ...i
}, r) => {
  let a = Os({
    forwardedRef: r,
    action: e => {
      e.currentTarget.click();
    },
    disabled: !1,
    closeOnClick: !0,
    isLink: !0
  });
  return jsx(_$$_, {
    href: e,
    htmlAttributes: {
      role: "menuitem",
      ...t
    },
    ...a,
    ...i
  });
});
$$S3.displayName = "MenuPrimitve.Link";
let w = createContext({
  activeIndex: null,
  setActiveIndex: () => {},
  listLength: 0
});
function C(e) {
  let t = e.target;
  return t instanceof HTMLElement && null === t.closest("#curator-portal-target");
}
export function $$T10(e) {
  let [t, i] = useState(!1);
  let [n, l] = useState(null);
  let [d, c] = useState(0);
  let [u, p] = useState(!0);
  let [m, h] = useState(0);
  let [f, _] = useState(!1);
  let A = fI();
  let [v, E] = useState(null);
  let x = R1();
  let S = Q().fpl_menu_initial_focus;
  let w = useRef(null);
  let T = useRef([]);
  let k = useRef([]);
  let R = useRef(null);
  let N = useRef(null);
  let P = null !== x;
  let {
    getTriggerProps,
    getContainerProps,
    context
  } = fP({
    isOpen: t,
    type: "menu",
    provideOwnDismiss: !0,
    provideOwnClick: !0,
    middleware: [cY(e?.offset), UU(), Ej({
      padding: {
        top: 12,
        bottom: 12,
        left: 8,
        right: 8
      },
      apply({
        availableWidth: e,
        availableHeight: t,
        elements: i
      }) {
        Object.assign(i.floating.style, {
          maxWidth: `${Math.max(0, e)}px`,
          maxHeight: `${Math.max(0, t)}px`
        });
      }
    })],
    onOpenChange: i,
    nodeId: A,
    placement: P ? "right-start" : e?.initialPosition ?? "bottom-start",
    config2025CuratorHacks: e?.config2025CuratorHacks
  });
  let F = e?.config2025CuratorHacks ? {
    outsidePress: C
  } : {};
  let {
    getReferenceProps,
    getFloatingProps,
    getItemProps
  } = bv([Mk(context, {
    enabled: P,
    delay: {
      open: 75
    },
    handleClose: iB({
      blockPointerEvents: !0,
      buffer: 8
    })
  }), kp(context, {
    toggle: !P,
    ignoreMouse: P,
    event: "mousedown"
  }), s9(context, {
    bubbles: {
      outsidePress: !0,
      escapeKey: !0
    },
    ...F
  }), It(context, {
    role: "menu"
  }), lY(context, {
    listRef: T,
    activeIndex: n,
    onMatch: l,
    findMatch: (e, t) => {
      let i = t.toLocaleLowerCase();
      return e.find(e => e?.toLocaleLowerCase().startsWith(i));
    }
  }), C1(context, {
    listRef: k,
    activeIndex: n,
    focusItemOnOpen: !S || void 0,
    nested: P,
    scrollItemIntoView: {
      block: "center",
      inline: "center"
    },
    onNavigate: l,
    disabledIndices: []
  })]);
  useLayoutEffect(() => {
    if (!context.isPositioned && f) _(!1);else if (!context.isPositioned) return;
    let e = Array.from(document.querySelectorAll("[data-fpl-menu-container]")).map(e => e.getBoundingClientRect());
    for (let t = 0; t < e.length - 1; t++) for (let i = t + 1; i < e.length; i++) if (Uw(e[t], e[i])) {
      _(!0);
      return;
    }
    _(!1);
  }, [context.isPositioned]);
  return useMemo(() => {
    function e(e, t) {
      context.refs.setPositionReference({
        getBoundingClientRect: () => ({
          width: 0,
          height: 0,
          x: e,
          y: t,
          top: t,
          right: e,
          bottom: t,
          left: e
        })
      });
      i(!0);
    }
    let r = e => ({
      ...getTriggerProps(),
      ...getReferenceProps({
        onMouseDown: e?.onClick,
        ...e
      })
    });
    return {
      manager: {
        getItemProps,
        getContainerProps,
        getFloatingProps,
        getTriggerProps: r,
        overflowRef: R,
        scrollRef: N,
        listRef: k,
        itemRef: T,
        context,
        setScrollTop: h,
        setSelectionLock: p,
        setOpen: i,
        handleArrowScroll: function (e) {
          flushSync(() => c(t => t - e));
        },
        allowSelection: u,
        nodeId: A,
        isOpen: t,
        hasOverlap: f,
        scrollTop: m,
        innerOffset: d,
        activeIndex: n,
        setActiveIndex: l
      },
      getContextMenuTriggerProps: () => ({
        onContextMenu: t => {
          t.shiftKey || (Ju(t), e(t.clientX, t.clientY));
        },
        onTouchStart: ({
          touches: t
        }) => {
          if (t.length > 1) {
            w.current && clearTimeout(w.current);
            return;
          }
          let {
            clientX,
            clientY
          } = t[0];
          E({
            x: clientX,
            y: clientY
          });
          w.current = window.setTimeout(() => {
            e(clientX, clientY);
          }, 600);
        },
        onTouchMove: e => {
          let t = e.touches[0];
          if (w.current && v) {
            let e = Math.abs(t.clientX - v.x);
            let i = Math.abs(t.clientY - v.y);
            (e > 10 || i > 10) && clearTimeout(w.current);
          }
        },
        onTouchCancel: () => {
          w.current && clearTimeout(w.current);
        },
        onTouchEnd: () => {
          w.current && clearTimeout(w.current);
        }
      }),
      getTriggerProps: r,
      openControlledPosition: e
    };
  }, [n, u, context, getContainerProps, getFloatingProps, getItemProps, getReferenceProps, getTriggerProps, f, d, t, A, v, m]);
}
export function $$k7({
  children: e,
  offset: t = 0
}) {
  let {
    manager
  } = $$T10({
    offset: t
  });
  return jsx(Ym.Provider, {
    value: manager,
    children: e
  });
}
$$k7.displayName = "MenuPrimitive.SubMenu";
export let $$R8 = forwardRef(({
  disabled: e,
  children: t,
  hasChecked: i,
  htmlAttributes: a,
  recordingKey: o,
  ...l
}, d) => {
  let c = Lh("hasChecked");
  let {
    activeIndex,
    setActiveIndex,
    listLength
  } = useContext(w);
  let {
    getTriggerProps,
    setOpen
  } = $(Ym, "SubTrigger", "SubMenu");
  let [E, x] = useState("");
  let {
    ref,
    index
  } = rm({
    label: E
  });
  let T = useRef(null);
  let k = R(setActiveIndex);
  let {
    ref: _ref,
    ...N
  } = getTriggerProps({
    onKeyDown: e => k(listLength, activeIndex, e)
  });
  let P = SV([ref, T, _ref, d]);
  let O = activeIndex === index;
  let D = () => setOpen(!0);
  let L = Qv(D, {
    eventName: "click",
    recordingKey: o
  }, [D, e]);
  useLayoutEffect(() => {
    T.current && x(T.current.innerText ?? "");
  }, []);
  return jsxs("li", {
    role: "menuitem",
    "data-fpl-selected": O || N["aria-expanded"] || void 0,
    "data-fpl-nested-selection": i,
    "aria-disabled": e,
    tabIndex: O ? 0 : -1,
    ...N,
    ..._$$r,
    ref: P,
    ...l,
    ...a,
    onClick: L,
    children: [t, " ", i && jsx(_$$E, {
      children: c
    })]
  });
});
$$R8.displayName = "MenuPrimitive.SubTrigger";
export let $$N6 = forwardRef((e, t) => {
  let {
    nodeId,
    hasOverlap
  } = $(Ym, "SubContainer", "SubMenu");
  return jsx($c, {
    id: nodeId,
    children: jsx($$P0, {
      "data-fpl-menu-overlap": hasOverlap || void 0,
      ref: t,
      ...e
    })
  });
});
$$N6.displayName = "MenuPrimitive.SubContainer";
export let $$P0 = forwardRef(({
  children: e,
  htmlAttributes: t,
  className: i,
  ...o
}, d) => {
  let c = cq();
  let {
    getContainerProps,
    nodeId,
    setOpen,
    context,
    scrollRef,
    listRef,
    itemRef,
    innerOffset,
    getFloatingProps,
    setScrollTop,
    setActiveIndex,
    activeIndex
  } = $(Ym, "Container", "Root");
  let T = SV([d, scrollRef]);
  useEffect(() => {
    if (c) {
      c.events.on("click", e);
      return () => {
        c.events.off("click", e);
      };
    }
    function e() {
      setOpen(!1);
    }
  }, [c, setOpen]);
  let k = context.refs.floating ?? {
    current: null
  };
  useEffect(() => {
    k?.current && k.current.scrollTo({
      top: innerOffset,
      behavior: "instant"
    });
  }, [k, innerOffset]);
  return jsx($c, {
    id: nodeId,
    children: jsx(w.Provider, {
      value: {
        activeIndex,
        setActiveIndex,
        listLength: listRef.current.length
      },
      children: jsx(_$$mc, {
        ...getContainerProps({
          onScroll({
            currentTarget: e
          }) {
            flushSync(() => setScrollTop(e.scrollTop));
          }
        }),
        className: _$$A("menu-primitive__container__5lt-5", i),
        "data-fpl-menu-container": !0,
        ..._$$r,
        ...o,
        ...t,
        children: jsx(ph, {
          elementsRef: listRef,
          labelsRef: itemRef,
          children: jsx("ul", {
            className: "menu-primitive__list__i3VRn",
            ref: T,
            ...getFloatingProps({}),
            children: e
          })
        })
      })
    })
  });
});
export function $$O4({
  manager: e,
  children: t
}) {
  return jsx(P6, {
    children: jsx(Ym.Provider, {
      value: e,
      children: jsx(_$$o, {
        display: "contents",
        eventListeners: ["onClick", "onPointerDown", "onMouseDown"],
        children: t
      })
    })
  });
}
$$P0.displayName = "MenuPrimitive.Container";
$$O4.displayName = "MenuPrimitive.Root";
export let $$D9 = forwardRef(({
  htmlAttributes: e,
  ...t
}, i) => {
  let r = Z();
  return jsx("li", {
    ref: i,
    id: r,
    role: "none",
    ...e,
    ..._$$r,
    ...t
  });
});
$$D9.displayName = "MenuPrimitive.Title";
export let $$L1 = forwardRef(({
  children: e,
  title: t,
  htmlAttributes: i,
  ...r
}, a) => {
  let [s, o] = q();
  return t ? jsx(o, {
    value: s,
    children: jsxs("ul", {
      ref: a,
      "aria-labelledby": s,
      role: "group",
      ...i,
      ..._$$r,
      ...r,
      children: [t, e]
    })
  }) : jsx("ul", {
    role: "none",
    ...i,
    ..._$$r,
    ...r,
    children: e
  });
});
function F(e, t, i) {
  if (e.current && i.current) {
    let {
      scrollTop,
      scrollHeight,
      clientHeight
    } = e.current;
    if ("up" === t) return scrollTop >= M;
    if ("down" === t) return scrollHeight > clientHeight + scrollTop + M;
  }
  return !1;
}
$$L1.displayName = "MenuPrimitive.Group";
let M = 10;
let $$j5 = forwardRef(({
  direction: e,
  children: t,
  className: i,
  ...o
}, d) => {
  let [c, u] = useState(!1);
  let p = useRef(null);
  let h = SV([p, d]);
  let g = useRef("idle");
  let f = useRef(-1);
  let {
    context: {
      isPositioned,
      refs
    },
    scrollTop,
    scrollRef,
    handleArrowScroll,
    innerOffset
  } = $(Ym, "ScrollArrow", "Root");
  let S = refs.floating ?? {
    current: null
  };
  useLayoutEffect(() => {
    isPositioned && "active" !== g.current && requestAnimationFrame(() => {
      flushSync(() => u(F(S, e, scrollRef)));
    });
  }, [isPositioned, innerOffset, scrollTop, S, e, scrollRef]);
  return jsx("div", {
    className: _$$A("menu-primitive__scrollArrow__Om355", i),
    "data-fpl-select-direction": e,
    "data-fpl-select-visibility": c || void 0,
    ref: h,
    "aria-hidden": !0,
    onPointerEnter: () => {
      g.current = "active";
      let t = Date.now();
      cancelAnimationFrame(f.current);
      f.current = requestAnimationFrame(function i() {
        if (S.current) {
          let n = Date.now();
          let r = n - t;
          t = n;
          let a = r / 2;
          let s = "up" === e ? S.current.scrollTop : S.current.scrollHeight - S.current.clientHeight - S.current.scrollTop;
          let o = "up" === e ? S.current.scrollTop - a > 0 : S.current.scrollTop + a < S.current.scrollHeight - S.current.clientHeight;
          handleArrowScroll("up" === e ? Math.min(a, s) : Math.max(-a, -s));
          o ? f.current = requestAnimationFrame(i) : u(F(S, e, scrollRef));
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
$$j5.displayName = "SelectPrimitive.ScrollArrow";
export const mc = $$P0;
export const YJ = $$L1;
export const q7 = $$x2;
export const N_ = $$S3;
export const bL = $$O4;
export const LJ = $$j5;
export const MJ = $$N6;
export const g8 = $$k7;
export const ZP = $$R8;
export const hE = $$D9;
export const b = $$T10;