import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { setupThemeContext } from "../905/614223";
import { s as _$$s } from "../cssbuilder/589278";
import { AutoLayout } from "../905/470281";
import { j } from "../905/261906";
import { FProductAccessType } from "../figma_app/191312";
import { HD, YT } from "../figma_app/217457";
import { o as _$$o } from "../905/584964";
function u({
  licenseType: e,
  colorStyle: t,
  spacing: r,
  forceDarkThemeForFigmakeIcon: d
}) {
  let u = jsx(j, {
    type: e,
    size: "16",
    colorStyle: t
  });
  return jsxs(AutoLayout, {
    direction: "horizontal",
    spacing: r,
    children: [e === FProductAccessType.FIGMAKE && d ? jsx(setupThemeContext, {
      mode: "dark",
      children: u
    }) : u, jsx("div", {
      className: _$$s.textBodyMedium.$,
      children: _$$o(e)
    })]
  });
}
export function $$p0(e) {
  let t = HD(e.seatType, {
    visibility: YT.SEAT_DESCRIPTION
  });
  return jsx(Fragment, {
    children: t.map(t => jsx(u, {
      licenseType: t,
      colorStyle: e.colorStyle,
      spacing: e.spacing,
      forceDarkThemeForFigmakeIcon: e.forceDarkThemeForFigmakeIcon
    }, t))
  });
}
export const i = $$p0;