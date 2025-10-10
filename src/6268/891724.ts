import { jsx, jsxs } from "react/jsx-runtime";
import { SelectOptionReset, SelectGroupLabel, SelectSeparator, SelectContainer } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { setupThemeContext } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import { getI18nString } from "../905/303541";
import { W } from "../6658/358099";
import { sD } from "../1250/807901";
function _({
  label: e,
  value: n,
  count: o
}) {
  return jsx(SelectOptionReset, {
    value: n,
    children: jsxs("div", {
      className: "component_browser_filters--option--0cVym",
      children: [e, jsx(setupThemeContext, {
        mode: "dark",
        children: jsx("span", {
          className: "component_browser_filters--count--opEnb",
          children: o
        })
      })]
    })
  }, n);
}
function m({
  count: e
}) {
  return jsx("div", {
    className: "component_browser_filters--countItemNumber--Kd8X7",
    children: e
  });
}
export function $$p0({
  dropdownFilter: e,
  setDropdownFilter: n,
  componentCounts: o
}) {
  let i = sD();
  return jsxs(SelectGroupLabel, {
    value: e,
    onChange: e => n(e),
    children: [jsx(SelectSeparator, {
      label: jsx(HiddenLabel, {
        children: getI18nString("dev_handoff.component_browser.filter")
      }),
      children: jsxs("div", {
        className: "component_browser_filters--trigger--tf4CK",
        children: [i[e], jsx(m, {
          count: o[e]
        })]
      })
    }), jsx(SelectContainer, {
      children: Object.entries(W).filter(([e]) => getFeatureFlags().dt_component_browser_bulk_mapping || "suggestionsAvailable" !== e).map(([e, {
        value: n
      }]) => {
        let s = i[n];
        return jsx(_, {
          label: s,
          value: n,
          count: o[n]
        }, e);
      })
    })]
  });
}
export const z = $$p0;