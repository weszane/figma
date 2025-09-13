import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { forwardRef, useRef, Children, useMemo, useContext, createContext, useCallback } from "react";
import { fI, V6 } from "../905/201252";
import { fh } from "../905/127493";
import { b, bL, mc } from "../figma_app/860955";
import { SV } from "../figma_app/272902";
import d from "classnames";
import { SvgComponent } from "../905/714743";
import { e as _$$e } from "../905/579635";
import { Rv, _v, es, Wy, PU, Kk, hF, PO, wH, eK, nB, E3, q0, H_, KW, yr, cB, Vb, Pv, Hq, cd, ig, by, o as _$$o, yU, Sk, tp, kI, gB } from "../905/454970";
import { A } from "../5724/713301";
var c = d;
let $$m2 = forwardRef(function ({
  appendedClassName: e,
  input: t,
  selected: r,
  hasFocus: o,
  recordingKey: d,
  htmlAttributes: u,
  ...p
}, h) {
  let m = useRef(null);
  let g = SV(m, h);
  return jsxs(fI, {
    ref: g,
    className: c()(Rv, {
      [_v]: o,
      [es]: p.hideGrabber
    }, e),
    htmlAttributes: u,
    selected: r,
    recordingKey: d,
    children: [jsx(S, {
      ...p,
      rowRef: m
    }), jsx(fh, {
      className: Wy,
      children: t
    })]
  });
});
let $$g1 = forwardRef(function ({
  appendedClassName: e,
  leftIcon: t,
  input: r,
  children: o,
  cellHasCustomFocusRingTarget: d,
  hasFocus: u,
  htmlAttributes: p,
  recordingKey: h,
  selected: m,
  ...g
}, f) {
  let E = useRef(null);
  let y = SV(E, f);
  return jsxs(fI, {
    ref: y,
    className: c()(PU, {
      [_v]: u,
      [es]: g.hideGrabber
    }, e),
    htmlAttributes: p,
    recordingKey: h,
    selected: m,
    children: [jsx(S, {
      ...g,
      rowRef: E
    }), jsx(fh, {
      className: Kk,
      children: t
    }), jsx(fh, {
      className: c()({
        [hF]: !0,
        [PO]: d
      }),
      children: r
    }), Children.count(o) > 0 && jsx("div", {
      className: wH,
      children: Children.map(o, e => jsx(fh, {
        className: eK,
        children: e
      }))
    })]
  });
});
let $$f0 = forwardRef(function ({
  appendedClassName: e,
  cellHasCustomFocusRingTarget: t,
  children: r,
  hasFocus: o,
  htmlAttributes: d,
  input: u,
  recordingKey: p,
  selected: h,
  ...m
}, g) {
  let f = useRef(null);
  let E = SV(f, g);
  let y = useMemo(() => Children.map(r, e => null !== e ? 1 : 0)?.reduce((e, t) => e + t, 0) || 0, [r]);
  return jsxs(fI, {
    ref: E,
    className: c()(nB, {
      [_v]: o,
      [es]: m.hideGrabber
    }, e),
    htmlAttributes: d,
    recordingKey: p,
    selected: h,
    children: [jsx(S, {
      ...m,
      rowRef: f
    }), jsx(fh, {
      className: c()({
        [hF]: !0,
        [PO]: t
      }),
      children: u
    }), Children.count(r) > 0 && jsx("div", {
      className: E3,
      style: {
        "--visible-icons": y
      },
      children: Children.map(r, e => jsx(fh, {
        className: eK,
        children: e
      }))
    })]
  });
});
let $$E10 = forwardRef(function ({
  input: e,
  leftIcon: t,
  rightIcon: r,
  htmlAttributes: o,
  selected: d,
  hasFocus: u,
  appendedClassName: p,
  cellHasCustomFocusRingTarget: h,
  recordingKey: m,
  ...g
}, f) {
  let E = useRef(null);
  let y = SV(E, f);
  return jsxs(fI, {
    ref: y,
    className: c()(q0, {
      [_v]: u,
      [es]: g.hideGrabber
    }, p),
    htmlAttributes: o,
    selected: d,
    recordingKey: m,
    children: [jsx(S, {
      ...g,
      rowRef: E
    }), jsx(fh, {
      className: c()({
        [hF]: !0,
        [PO]: h
      }),
      children: e
    }), jsx(fh, {
      className: eK,
      ...(t?.interactable && {
        tabIndex: -1
      }),
      children: t?.icon
    }), jsx(fh, {
      className: H_,
      ...(r?.interactable && {
        tabIndex: -1
      }),
      children: r?.icon
    })]
  });
});
let $$y7 = forwardRef(function ({
  input: e,
  icon: t,
  htmlAttributes: r,
  cellHtmlAttributes: o,
  selected: d,
  hasFocus: u,
  shouldIconAppearOnHover: p,
  appendedClassName: h,
  cellHasCustomFocusRingTarget: m,
  recordingKey: g,
  ...f
}, E) {
  let y = useRef(null);
  let b = SV(y, E);
  let {
    isDragging
  } = useContext($$v9);
  return jsxs(fI, {
    ref: b,
    className: c()(p ? KW : yr, {
      [_v]: u,
      [es]: f.hideGrabber,
      [cB]: p && isDragging
    }, h),
    htmlAttributes: r,
    selected: d,
    recordingKey: g,
    children: [jsx(S, {
      ...f,
      rowRef: y
    }), jsx(fh, {
      className: c()({
        [hF]: !0,
        [PO]: m
      }),
      htmlAttributes: o,
      children: e
    }), jsx(fh, {
      className: Kk,
      children: t
    })]
  });
});
let $$b8 = forwardRef(function ({
  appendedClassName: e,
  cellHasCustomFocusRingTarget: t,
  firstRightIcon: r,
  hasFocus: o,
  htmlAttributes: d,
  input: u,
  leftIcon: p,
  recordingKey: h,
  secondRightIcon: m,
  selected: g,
  ...f
}, E) {
  let y = useRef(null);
  let b = SV(y, E);
  return jsxs(fI, {
    ref: b,
    className: c()(Vb, {
      [_v]: o,
      [es]: f.hideGrabber
    }, e),
    htmlAttributes: d,
    selected: g,
    recordingKey: h,
    children: [jsx(S, {
      ...f,
      rowRef: y
    }), jsx(fh, {
      className: Kk,
      children: p
    }), jsx(fh, {
      className: c()({
        [hF]: !0,
        [PO]: t
      }),
      children: u
    }), jsx(fh, {
      className: Pv,
      children: r
    }), jsx(fh, {
      className: Hq,
      children: m
    })]
  });
});
let $$T3 = forwardRef(function ({
  cellHasCustomFocusRingTarget: e,
  hasFocus: t,
  htmlAttributes: r,
  icon: o,
  leftInput: d,
  recordingKey: u,
  rightInput: p,
  selected: h,
  ...m
}, g) {
  let f = useRef(null);
  let E = SV(f, g);
  return jsxs(fI, {
    ref: E,
    className: c()(cd, {
      [_v]: t,
      [es]: m.hideGrabber
    }),
    htmlAttributes: r,
    recordingKey: u,
    selected: h,
    children: [jsx(S, {
      ...m,
      rowRef: f
    }), jsx(fh, {
      className: c()({
        [ig]: !0,
        [PO]: e
      }),
      children: d
    }), jsx(fh, {
      className: c()({
        [by]: !0,
        [PO]: e
      }),
      children: p
    }), o && jsx(fh, {
      className: Kk,
      children: o
    })]
  });
});
let $$I6 = forwardRef(function ({
  cellHasCustomFocusRingTarget: e,
  hasFocus: t,
  htmlAttributes: r,
  firstRightIcon: o,
  secondRightIcon: d,
  leftInput: u,
  recordingKey: p,
  rightInput: h,
  selected: m,
  ...g
}, f) {
  let E = useRef(null);
  let y = SV(E, f);
  return jsxs(fI, {
    ref: y,
    className: c()(_$$o, {
      [_v]: t
    }),
    htmlAttributes: r,
    recordingKey: p,
    selected: m,
    children: [jsx(S, {
      ...g,
      rowRef: E
    }), jsx(fh, {
      className: c()({
        [ig]: !0,
        [PO]: e
      }),
      children: u
    }), jsx(fh, {
      className: c()({
        [by]: !0,
        [PO]: e
      }),
      children: h
    }), o && jsx(fh, {
      className: yU,
      children: o
    }), d && jsx(fh, {
      className: Sk,
      children: d
    })]
  });
});
function S({
  hideGrabber: e,
  singletonRow: t,
  rowRef: r
}) {
  let {
    menuItems,
    getMenuContainerProps
  } = V6(r);
  let {
    manager,
    getContextMenuTriggerProps
  } = b();
  let {
    isDragging
  } = useContext($$v9);
  return e || t && !isDragging ? null : jsx(_$$e, {
    condition: menuItems.length > 0,
    wrapper: e => jsxs(Fragment, {
      children: [jsx(bL, {
        manager,
        children: jsxs(mc, {
          ...getMenuContainerProps(),
          children: [...menuItems]
        })
      }), e]
    }),
    children: jsx("div", {
      className: c()({
        [tp]: isDragging,
        [kI]: !isDragging
      }),
      "data-testid": "row-grabber",
      ...getContextMenuTriggerProps(),
      children: jsx(SvgComponent, {
        className: gB,
        svg: A
      })
    })
  });
}
let $$v9 = createContext({
  isDragging: !1
});
let $$A5 = createContext({
  useGrid: !1
});
export function $$x4() {
  let {
    useGrid
  } = useContext($$A5);
  return useCallback(t => {
    if (useGrid) {
      if (t.altKey && ("ArrowUp" === t.key || "ArrowDown" === t.key)) {
        t.preventDefault();
        return;
      }
      ("ArrowUp" === t.key || "ArrowDown" === t.key || "ArrowLeft" === t.key || "ArrowRight" === t.key) && t.stopPropagation();
    }
  }, [useGrid]);
}
export const DD = $$f0;
export const Gi = $$g1;
export const IV = $$m2;
export const Jg = $$T3;
export const Qu = $$x4;
export const dD = $$A5;
export const dp = $$I6;
export const lt = $$y7;
export const o7 = $$b8;
export const xp = $$v9;
export const z$ = $$E10;