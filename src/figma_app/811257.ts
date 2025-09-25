import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { getFeatureFlags } from "../905/601108";
import s from "classnames";
import { RecordableDiv } from "../905/511649";
import { SvgComponent } from "../905/714743";
import { conditionalWrapper } from "../905/579635";
import { V } from "../905/460261";
import { Aw } from "../figma_app/459377";
import { $f, Vp, ON, iv, dk, Wy, pK, o7, wm, xx, cN, jz, q1, eK, H_, qv, wH, d1, kW, to, gB, kR, CZ, r_, kc, P6, tp, kI, Qb, iV } from "../905/235035";
import { A } from "../5724/713301";
var o = s;
let $$m6 = forwardRef(function ({
  leftLabel: e,
  leftInput: t,
  rightLabel: r,
  rightInput: i,
  appendedClassName: a,
  icon: s,
  dataTestId: l
}, d) {
  return jsx("div", {
    ref: d,
    children: jsxs("fieldset", {
      className: o()($f, a),
      "data-non-interactive": !0,
      "data-testid": l,
      children: [null != e ? jsx($$N2, {
        useAsLegend: null !== e && null == r,
        children: e
      }) : null, jsx("div", {
        className: Vp,
        "data-non-interactive": !0,
        children: t
      }), null != r ? jsx($$C13, {
        children: r
      }) : null, jsx("div", {
        className: ON,
        "data-non-interactive": !0,
        children: i
      }), jsx($$A10, {
        children: s
      })]
    })
  });
});
let $$g11 = forwardRef(function ({
  label: e,
  leftIcon: t,
  input: r,
  rightIcon: i
}, a) {
  return jsxs("div", {
    className: iv,
    ref: a,
    "data-non-interactive": !0,
    children: [null != e ? jsx($$N2, {
      children: e
    }) : null, jsx("div", {
      className: dk,
      "data-non-interactive": !0,
      children: t
    }), jsx("div", {
      className: Wy,
      "data-non-interactive": !0,
      children: r
    }), jsx("div", {
      className: pK,
      "data-non-interactive": !0,
      children: i
    })]
  });
});
let $$f4 = forwardRef(function ({
  label: e,
  leftIcon: t,
  input: r,
  firstRightIcon: i,
  secondRightIcon: a,
  ...s
}, o) {
  return jsxs("div", {
    className: o7,
    ref: o,
    ...s,
    "data-non-interactive": !0,
    children: [null != e ? jsx($$N2, {
      children: e
    }) : null, jsx("div", {
      className: dk,
      "data-non-interactive": !0,
      children: t
    }), jsx("div", {
      className: Wy,
      "data-non-interactive": !0,
      children: r
    }), jsx("div", {
      className: pK,
      "data-non-interactive": !0,
      children: i
    }), jsx("div", {
      className: wm,
      "data-non-interactive": !0,
      children: a
    })]
  });
});
let $$E1 = forwardRef(function ({
  label: e,
  labelId: t,
  input: r,
  icon: i,
  appendedClassName: a,
  dataTestId: s,
  dataOnboardingKey: l,
  ...d
}, c) {
  let u = o()(xx, a);
  return jsxs("div", {
    className: u,
    ref: c,
    "data-testid": s,
    "data-onboarding-key": l,
    ...d,
    children: [null != e ? jsx($$N2, {
      id: t,
      children: e
    }) : null, jsx("div", {
      className: Vp,
      "data-non-interactive": !0,
      children: r
    }), jsx($$A10, {
      children: i
    })]
  });
});
let $$y0 = forwardRef(function ({
  input: e,
  label: t,
  appendedClassName: r,
  alwaysShowLabel: i
}, a) {
  return jsxs("div", {
    className: o()(cN, r),
    ref: a,
    children: [t ? jsx($$N2, {
      alwaysShowLabel: i,
      children: t
    }) : null, jsx("div", {
      className: Vp,
      "data-non-interactive": !0,
      children: e
    })]
  });
});
let $$b9 = forwardRef(function ({
  input: e,
  leftIcon: t,
  rightIcon: r,
  appendedClassName: i,
  dataTestId: a,
  label: s
}, l) {
  let d = o()(jz, i);
  return jsxs("div", {
    className: d,
    ref: l,
    "data-testid": a,
    children: [null !== s ? jsx($$N2, {
      children: s
    }) : null, jsxs("div", {
      className: q1,
      "data-non-interactive": !0,
      children: [" ", e, " "]
    }), jsxs("div", {
      className: eK,
      "data-non-interactive": !0,
      children: [" ", t, " "]
    }), jsxs("div", {
      className: H_,
      "data-non-interactive": !0,
      children: [" ", r, " "]
    })]
  });
});
let $$T8 = forwardRef(function ({
  input: e,
  children: t,
  appendedClassName: r,
  dataOnboardingKey: i
}, a) {
  let s = o()(qv, r);
  return jsxs("div", {
    className: s,
    ref: a,
    "data-onboarding-key": i,
    children: [jsx("div", {
      className: q1,
      children: e
    }), jsx("div", {
      className: wH,
      children: t
    })]
  });
});
let $$I12 = forwardRef(function ({
  leftLabel: e,
  rightLabel: t,
  topIcon: r,
  bottomIcon: i,
  appendedClassName: a,
  topLeftInput: s,
  bottomLeftInput: l,
  topRightInput: d,
  bottomRightInput: c,
  leftInput: u,
  rightInput: p
}, h) {
  let m = o()(d1, a);
  let g = null != u ? jsx("div", {
    className: kW,
    children: u
  }) : s;
  let f = null != p ? jsx("div", {
    className: kW,
    children: p
  }) : d;
  let E = null != u ? null : jsx("div", {
    children: l
  });
  let y = null != p ? null : jsx("div", {
    children: c
  });
  return jsxs("div", {
    className: m,
    ref: h,
    "data-non-interactive": !0,
    children: [jsx($$N2, {
      children: e
    }), jsx($$C13, {
      children: t
    }), jsx($$S7, {}), g, f, jsx("div", {
      children: r
    }), E, y, jsx("div", {
      children: i
    })]
  });
});
export function $$S7({}) {
  return jsx("div", {
    "data-non-interactive": !0
  });
}
export function $$v3({
  children: e
}) {
  return getFeatureFlags().slides_a11y ? jsx("h2", {
    children: e
  }) : jsx("span", {
    "aria-hidden": "true",
    children: e
  });
}
export function $$A10({
  children: e
}) {
  return e ? jsx("div", {
    className: to,
    "data-non-interactive": !0,
    children: e
  }) : null;
}
export let $$x5 = forwardRef(function ({
  selected: e,
  grabberClassName: t,
  hideGrabber: r,
  showGrabberOnRowHover: i = !1,
  singletonRow: a,
  dragging: s,
  children: c,
  selectedSecondary: u,
  containerClassName: m,
  ...g
}, f) {
  let E = !r && (!a || s);
  let y = e && s ? Aw : gB;
  let b = u ? kR : e ? CZ : "";
  return jsxs(RecordableDiv, {
    ...g,
    forwardedRef: f,
    className: o()(i ? s ? r_ : kc : P6, b, m),
    children: [E && jsx("div", {
      className: o()(t, {
        [tp]: s,
        [kI]: !s
      }),
      "data-testid": "row-grabber",
      children: (!s || e) && jsx(SvgComponent, {
        className: y,
        svg: A
      })
    }), c]
  });
});
export function $$N2({
  id: e,
  children: t,
  alwaysShowLabel: r,
  useAsLegend: i
}) {
  return V() || r ? jsx(conditionalWrapper, {
    condition: !!i,
    wrapper: e => jsx("legend", {
      children: e
    }),
    children: jsx("span", {
      id: e,
      "aria-hidden": !i,
      className: Qb,
      "data-non-interactive": !0,
      children: t
    })
  }) : jsx($$S7, {});
}
export function $$C13({
  children: e
}) {
  return V() ? jsx("span", {
    "aria-hidden": "true",
    className: iV,
    "data-non-interactive": !0,
    children: e
  }) : jsx($$S7, {});
}
export const Ad = $$y0;
export const DE = $$E1;
export const Kg = $$N2;
export const Mw = $$v3;
export const Oe = $$f4;
export const Y9 = $$x5;
export const fn = $$m6;
export const my = $$S7;
export const oO = $$T8;
export const pG = $$b9;
export const rH = $$A10;
export const s2 = $$g11;
export const sY = $$I12;
export const u9 = $$C13;