import { jsx } from "react/jsx-runtime";
import { K } from "../905/443068";
import { U } from "../905/708285";
import { getI18nString } from "../905/303541";
import { u as _$$u, BQ } from "../figma_app/852050";
import { KindEnum } from "../905/129884";
import { DE } from "../figma_app/811257";
import { u3 } from "../figma_app/152690";
import { eF } from "../figma_app/394327";
import { P } from "../figma_app/120873";
import { $V } from "../figma_app/755783";
export function $$$$m0() {
  let {
    consumedVariable,
    clearVariableConsumption
  } = u3(["VISIBLE"]);
  let s = $V();
  let m = _$$u(s);
  let g = m?.name;
  let f = !!consumedVariable && !!m;
  let x = BQ(s);
  return f ? jsx(DE, {
    appendedClassName: "component_bound_vibisility_row--row--Pss97",
    input: jsx(P, {
      value: g || getI18nString("fullscreen.mixed"),
      variableId: s,
      isStandalone: !0,
      classNameOverride: "component_bound_vibisility_row--pillCover--q5iKl",
      styleOverride: {
        width: "auto"
      },
      isDeleted: !!m && eF(m),
      fullWidth: !0,
      variablePillContainerClassName: "component_bound_vibisility_row--ui3RowVariablePillContainer--ocnP8",
      thumbnailValue: "MIXED" !== x ? x : void 0
    }),
    icon: jsx("div", {
      className: "component_bound_vibisility_row--detachVisibilityIcon--FcjEN",
      children: jsx(K, {
        onClick: () => clearVariableConsumption(),
        "aria-label": getI18nString("variables.binding_ui.detach_variable_tooltip"),
        recordingKey: "detachVisibilityVariable",
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("variables.binding_ui.detach_variable_tooltip")
        },
        children: jsx(U, {})
      })
    }),
    label: null
  }) : null;
}
export const m = $$$$m0;