import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { E as _$$E } from "../905/632989";
import { RYP } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { F } from "../905/989956";
import { TI } from "../905/713722";
import { DP, yM } from "../905/640017";
import { rl } from "../905/248569";
import { Ep } from "../figma_app/504823";
import { p3 } from "../figma_app/622881";
import { pw } from "../905/187165";
import { b4 } from "../905/767147";
import { f$, lo } from "../figma_app/492929";
export let $$f1 = forwardRef(function ({
  color: e,
  hideBorderShadow: t,
  forceNonInteractive: r,
  ...i
}, o) {
  let d = DP();
  let f = yM();
  let y = Ep();
  let b = {
    ...e,
    a: 1
  };
  let T = F.format(b);
  let I = 1 !== e.a || t ? void 0 : pw(f, T, d);
  let S = !r && b4(i);
  let v = jsxs(Fragment, {
    children: [jsx("div", {
      className: f$,
      style: {
        opacity: 1 - (e.a || 0)
      }
    }), I && jsx("div", {
      className: lo,
      style: {
        boxShadow: I
      }
    })]
  });
  let A = (y ?? RYP.SRGB) === RYP.DISPLAY_P3 ? p3() ? {
    backgroundImage: `url(${rl(b, RYP.DISPLAY_P3)})`
  } : {
    backgroundColor: F.format(b, "display-p3")
  } : {
    backgroundColor: F.format(b)
  };
  return S ? jsx(_$$E, {
    style: A,
    "aria-label": $$$$E0(e),
    ref: o,
    ...i,
    children: v
  }) : jsx("div", {
    style: A,
    ...i,
    tabIndex: -1,
    children: v
  });
});
export function $$$$E0(e) {
  let t = TI.format(e);
  return getI18nString("fullscreen.accessibility.chit_solid", {
    hexValue: t
  });
}
export const E = $$$$E0;
export const m = $$f1;