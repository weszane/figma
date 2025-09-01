import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, forwardRef, PureComponent } from "react";
import a from "classnames";
import { D8, u2 } from "../905/511649";
import { L } from "../905/408237";
import { B } from "../905/714743";
import { jr, W0 } from "../figma_app/896988";
import { Ib } from "../905/129884";
import { v } from "../905/694527";
import { a2, kR, CZ, X0, ht, LE, l$, Zz, co, n1, zU, DS, Z4, O1, PQ, LJ, EA, _Z, fR, Pf, wh, PB } from "../figma_app/973219";
import { A } from "../5724/388041";
import m from "../figma_app/778125";
var s = a;
let g = (e, t) => ({
  ...e,
  className: `${t} ${e.className || ""}`
});
function f(e) {
  let t = useMemo(() => v(e, "ModalPanel"), [e]);
  return jsx(D8, {
    ...g(t, a2),
    "data-non-interactive": !0
  });
}
export function $$E1(e) {
  return jsx(f, {
    ...e
  });
}
export function $$y11(e) {
  return jsx(f, {
    ...e
  });
}
let $$b7 = forwardRef(function (e, t) {
  return jsx(D8, {
    ...v(g(e, "propertiesPanel"), "Panel"),
    forwardedRef: t,
    "data-non-interactive": !0
  });
});
let $$T15 = forwardRef((e, t) => jsx(D8, {
  ...v(g(e, "propertiesPanel"), "Panel"),
  forwardedRef: t,
  "data-non-interactive": !0
}));
let $$I8 = forwardRef(function ({
  selected: e,
  selectedSecondary: t,
  heightMultiplier: r,
  ...i
}, a) {
  let s;
  let l = t ? kR : e ? CZ : null;
  s = 2 === r ? X0 : 1.25 === r ? ht : 1.5 === r ? LE : l$;
  l && (s += " " + l);
  return jsx(D8, {
    ...g(i, s),
    "data-non-interactive": !0,
    forwardedRef: a
  });
});
export function $$S9(e) {
  return jsx(D8, {
    ...g(e, Zz),
    "data-non-interactive": !0
  });
}
export function $$v4(e) {
  let t = g(e, co);
  delete t.title;
  delete t.dataTooltipContentKey;
  delete t.dataTooltipTimeoutDelay;
  return jsxs(D8, {
    ...e,
    "data-non-interactive": !0,
    children: [jsx("div", {
      className: n1,
      children: e.title
    }), jsx(B, {
      className: zU,
      svg: A,
      "data-tooltip-type": Ib.SPECIAL,
      "data-tooltip": e.dataTooltipContentKey,
      "data-tooltip-timeout-delay": e.dataTooltipTimeoutDelay
    })]
  });
}
export function $$A0({
  ...e
}) {
  return jsx("div", {
    ...g(e, DS),
    dir: "auto"
  });
}
function x({
  noLeftBorder: e,
  squareRightBorder: t,
  noBorderOnFocus: r,
  noPlaceholderLine: n,
  softDisabled: i,
  className: a,
  ...o
}) {
  e && (a += ` ${Z4}`);
  t && (a += ` ${O1}`);
  r || (a += ` ${PQ}`);
  n && (a += ` ${LJ}`);
  i && (a += ` ${EA}`);
  return Object.assign(o, {
    className: s()(_Z, a)
  });
}
export let $$N10 = forwardRef(function (e, t) {
  let r = x(e);
  return jsx(u2, {
    autoComplete: "false",
    spellCheck: !1,
    forwardedRef: t,
    ...r
  });
});
export class $$C12 extends PureComponent {
  constructor() {
    super(...arguments);
    this.onKeyDown = e => {
      !jr(e, W0.NO) && this.props.onKeyDown && this.props.onKeyDown(e);
    };
  }
  render() {
    let e = x(this.props);
    return jsx(L, {
      "data-testid": this.props.dataTestId,
      type: "text",
      spellCheck: !1,
      ...e,
      onKeyDown: this.onKeyDown,
      ref: e.innerRef
    });
  }
}
export function $$w2({
  disabled: e,
  ...t
}) {
  return jsx("label", {
    ...g(t, e ? fR : Pf),
    dir: "auto"
  });
}
export function $$O13(e) {
  return jsx("label", {
    ...g(e, fR)
  });
}
export function $$R5(e) {
  return jsx("label", {
    ...g(e, wh)
  });
}
$$C12.displayName = "TextInput";
export let $$L14 = forwardRef((e, t) => {
  let {
    className,
    ...i
  } = x(e);
  return jsx(D8, {
    ...i,
    className: s()(className, PB),
    forwardedRef: t,
    tabIndex: 0
  });
});
export { K0, YW } from "../figma_app/778125";
export const $4 = $$A0;
export const Id = $$E1;
export const JU = $$w2;
export const U8 = $$v4;
export const UZ = $$R5;
export const Zk = $$b7;
export const fI = $$I8;
export const hl = $$S9;
export const jT = $$N10;
export const kg = $$y11;
export const ks = $$C12;
export const nV = $$O13;
export const rp = $$L14;
export const zi = $$T15;