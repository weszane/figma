import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, useRef, useMemo, forwardRef, useContext } from "react";
import { G } from "../905/289770";
import { DP } from "../905/158740";
import { A } from "../vendor/723372";
import { K } from "../905/443068";
import { J } from "../905/799737";
import { S as _$$S } from "../905/823680";
import { L } from "../905/704296";
import { C } from "../905/520159";
import { P } from "../905/143421";
import { Lh } from "../figma_app/415899";
import { r } from "../905/840133";
import { M8 } from "../905/893109";
import { Q } from "../905/586361";
import { g as _$$g } from "../905/749786";
import { C as _$$C } from "../905/780985";
import { Q as _$$Q } from "../905/737752";
import { gy } from "../905/183218";
import { s as _$$s } from "../905/536340";
import { contents, allowOverflow, customContents, arrow, e as _$$e, header, close, closeButtonLight, closeButtonDark, title, tabStripRoot, tabStripScroll, tabStripContent, body, bodyNoScroll, bodyScrollContainer, bodyInner, scroller, footer, customFooter, actionStrip } from "../905/511376";
let v = createContext(null);
export function $$A11({
  className: e,
  allowOverflow: t,
  htmlAttributes: r,
  ...a
}) {
  let s = useRef(null);
  let l = useRef(null);
  let d = useRef(null);
  let c = useMemo(() => ({
    bodyRef: l,
    scrollRef: d
  }), []);
  let u = _$$C(s, l, d);
  let p = Q().fpl_window_scroll_container;
  return jsx(v.Provider, {
    value: c,
    children: jsx("div", {
      ...r,
      ref: s,
      "data-body-scrolls": !p && u || void 0,
      className: A(contents, e, {
        [allowOverflow]: t
      }),
      ...a
    })
  });
}
export function $$x2({
  className: e,
  htmlAttributes: t,
  ...r
}) {
  return jsx("div", {
    ...t,
    className: A(customContents, e),
    ...r
  });
}
export function $$N5({
  position: e,
  offset: t
}) {
  let r = G();
  return jsxs("svg", {
    className: A(arrow, _$$e),
    width: "12",
    height: "6",
    viewBox: "0 0 12 6",
    fill: "none",
    style: {
      ["top" === e || "bottom" === e ? "left" : "top"]: t
    },
    children: [jsx("path", {
      d: "M6 0L0 6L12 6Z",
      fill: "var(--color-bg)"
    }), "dark" === r.color && jsx("path", {
      d: "M0 6L6 0L12 6",
      stroke: "var(--color-border)"
    })]
  });
}
$$A11.displayName = "Dialog.Contents";
$$x2.displayName = "Dialog.CustomContents";
$$N5.displayName = "Dialog.Arrow";
export let $$C3 = forwardRef((e, t) => jsx("div", {
  className: header,
  "data-fpl-header": !0,
  ref: t,
  children: e.children
}));
export function $$w0(e) {
  let {
    version
  } = DP();
  let r = _$$g();
  let i = Lh("close");
  return jsx("div", {
    "data-fpl-close": !0,
    className: A(close, {
      [closeButtonLight]: "light" === e.overrideColor,
      [closeButtonDark]: "dark" === e.overrideColor
    }),
    children: jsx(K, {
      onClick: () => r({
        source: "button"
      }),
      "aria-label": i,
      children: "ui2" === version ? jsx(O, {}) : jsx(L, {})
    })
  });
}
function O() {
  return jsx("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "nonzero",
      d: "m6 5.293 4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z"
    })
  });
}
export function $$R4(e) {
  return jsx(J, {
    className: title,
    ...e
  });
}
export function $$L10(e) {
  return jsx(J, {
    className: _$$s,
    ...e
  });
}
export function $$P8({
  onClick: e
}) {
  let t = Lh("back");
  return jsx(K, {
    onClick: e,
    "aria-label": t,
    children: jsx(C, {})
  });
}
export function $$D9(e) {
  return jsx(P, {
    scroll: "x",
    fill: !0,
    theme: {
      root: tabStripRoot,
      scroll: tabStripScroll,
      content: tabStripContent
    },
    "data-houdini-fallback": !M8 || void 0,
    children: jsx(r, {
      ...e,
      className: gy
    })
  });
}
$$C3.displayName = "Dialog.Header";
$$w0.displayName = "Dialog.CloseButton";
$$R4.displayName = "Dialog.Title";
$$L10.displayName = "Dialog.HiddenTitle";
$$P8.displayName = "Dialog.BackButton";
$$D9.displayName = "Dialog.TabStrip";
export let $$k7 = Object.assign(forwardRef(({
  children: e,
  className: t,
  style: r,
  padding: a,
  scrolling: s,
  htmlAttributes: l,
  ...d
}, u) => {
  let p = useContext(v);
  let h = _$$S(u, p?.bodyRef);
  return Q().fpl_window_scroll_container ? "none" === s ? jsx("div", {
    ...l,
    ...d,
    ref: h,
    className: A(body, bodyNoScroll),
    style: _$$Q(a),
    children: e
  }) : jsx(P, {
    ...l,
    ...d,
    ref: h,
    fill: !0,
    theme: {
      root: bodyScrollContainer,
      content: A(bodyInner, t),
      contentStyle: {
        ..._$$Q(a),
        ...r
      }
    },
    children: e
  }) : jsx("div", {
    ...l,
    ...d,
    ref: h,
    className: A(body, t, {
      [bodyNoScroll]: "none" === s
    }),
    style: {
      ...r,
      ..._$$Q(a)
    },
    children: "none" === s || "custom" === s ? e : jsx("div", {
      ref: p?.scrollRef,
      className: scroller,
      children: e
    })
  });
}), {
  useScrollRef: function () {
    let e = useContext(v);
    return e?.scrollRef;
  }
});
export function $$M12({
  children: e
}) {
  return jsx("div", {
    className: footer,
    children: e
  });
}
export function $$F1({
  className: e,
  ...t
}) {
  return jsx("div", {
    className: A(customFooter, e),
    ...t
  });
}
export function $$j6({
  children: e
}) {
  return jsx("div", {
    className: actionStrip,
    children: e
  });
}
$$k7.displayName = "Dialog.Body";
$$M12.displayName = "Dialog.Footer";
$$F1.displayName = "Dialog.CustomFooter";
$$j6.displayName = "Dialog.ActionStrip";
export const Jn = $$w0;
export const Pt = $$F1;
export const Wk = $$x2;
export const Y9 = $$C3;
export const hE = $$R4;
export const i3 = $$N5;
export const jk = $$j6;
export const nB = $$k7;
export const oq = $$P8;
export const qj = $$D9;
export const r1 = $$L10;
export const vo = $$A11;
export const wi = $$M12;