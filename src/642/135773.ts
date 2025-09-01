import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { Ay } from "@stylexjs/stylex";
import { hS } from "../905/216495";
import { lJ } from "../905/275640";
import { J } from "../905/225412";
let d = {
  chit: {
    width: "x6jxa94",
    height: "x1v9usgg",
    borderRadius: "x1cum3z5",
    $$css: !0
  },
  transparentBorder: {
    border: "xxh8tns",
    $$css: !0
  }
};
let c = {
  type: "SOLID",
  color: {
    r: 1,
    g: 1,
    b: 1,
    a: 1
  },
  opacity: 1,
  blendMode: "NORMAL"
};
export function $$u0(e) {
  let [t] = lJ("dividedSwatchColors");
  return useMemo(() => hS(e) && e && e.color ? [e.color] : Array.isArray(t) && t.length > 1 ? t : [{
    r: 1,
    g: 1,
    b: 1,
    a: 1
  }], [t, e]);
}
export function $$p1({
  colors: e,
  paint: t,
  showTransparentBorder: s = !1,
  forceNonInteractive: n = !1
}) {
  if (!(e.length > 1)) return jsx(J, {
    ...Ay.props(d.chit, s ? d.transparentBorder : null),
    hideBorderShadow: s,
    paint: t ?? c,
    allowMouseDownPropagation: !0,
    forceNonInteractive: n
  });
  {
    let t = {
      type: "SOLID",
      color: e[0],
      opacity: 1,
      blendMode: "NORMAL"
    };
    let s = {
      type: "SOLID",
      color: e[1],
      opacity: 1,
      blendMode: "NORMAL"
    };
    return jsxs("div", {
      className: "x1n2onr6 x1kky2od xlup9mm",
      tabIndex: n ? -1 : void 0,
      children: [jsx("span", {
        className: "x10l6tqk x1kky2od xlup9mm xu96u03 x13vifvy x1f869rl",
        children: jsx(J, {
          className: "x6jxa94 x1v9usgg x1cum3z5",
          paint: t,
          allowMouseDownPropagation: !0,
          forceNonInteractive: n
        })
      }), jsx("span", {
        className: "x10l6tqk x1kky2od xlup9mm xu96u03 x13vifvy x103kmln",
        children: jsx(J, {
          className: "x6jxa94 x1v9usgg x1cum3z5",
          paint: s,
          allowMouseDownPropagation: !0,
          forceNonInteractive: n
        })
      })]
    });
  }
}
export const e = $$u0;
export const v = $$p1;