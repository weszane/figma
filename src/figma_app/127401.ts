import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { setupThemeContext } from "../905/614223";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { AutoLayout } from "../905/470281";
import { j } from "../905/261906";
import { FProductAccessType } from "../figma_app/191312";
import { useLicenseTypesForSeatTypeMemoized, SeatDescriptionVisibility } from "../figma_app/217457";
import { getDisplayProductName } from "../905/584964";
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
      className: cssBuilderInstance.textBodyMedium.$,
      children: getDisplayProductName(e)
    })]
  });
}
export function $$p0(e) {
  let t = useLicenseTypesForSeatTypeMemoized(e.seatType, {
    visibility: SeatDescriptionVisibility.SEAT_DESCRIPTION
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