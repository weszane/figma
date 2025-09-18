import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { ButtonPrimitive } from "../905/632989";
import { ColorSpaceEnum } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { colorCSSManipulatorInstance } from "../905/989956";
import { TI } from "../905/713722";
import { getVisibleTheme, useThemeContext } from "../905/640017";
import { createColorDataUri } from "../905/248569";
import { Ep } from "../figma_app/504823";
import { shouldUsePolyfill } from "../figma_app/622881";
import { getThemeBorderStyle } from "../905/187165";
import { b4 } from "../905/767147";
import { f$, lo } from "../figma_app/492929";
export let $$f1 = forwardRef(function ({
  color: e,
  hideBorderShadow: t,
  forceNonInteractive: r,
  ...i
}, o) {
  let d = getVisibleTheme();
  let f = useThemeContext();
  let y = Ep();
  let b = {
    ...e,
    a: 1
  };
  let T = colorCSSManipulatorInstance.format(b);
  let I = 1 !== e.a || t ? void 0 : getThemeBorderStyle(f, T, d);
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
  let A = (y ?? ColorSpaceEnum.SRGB) === ColorSpaceEnum.DISPLAY_P3 ? shouldUsePolyfill() ? {
    backgroundImage: `url(${createColorDataUri(b, ColorSpaceEnum.DISPLAY_P3)})`
  } : {
    backgroundColor: colorCSSManipulatorInstance.format(b, "display-p3")
  } : {
    backgroundColor: colorCSSManipulatorInstance.format(b)
  };
  return S ? jsx(ButtonPrimitive, {
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