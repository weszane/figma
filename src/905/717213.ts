import { jsx } from "react/jsx-runtime";
import { getFeatureFlags } from "../905/601108";
import { getI18nString } from "../905/303541";
export function $$s0({
  numComponents: e,
  numStateGroups: t,
  numStyles: i,
  numVariables: s,
  numVariableCollections: o
}) {
  let l = e + t;
  let d = [];
  return (l > 0 && d.push(getI18nString("design_systems.libraries_modal.plural.num_component_match", {
    numComponents: l
  })), i > 0 && d.push(getI18nString("design_systems.libraries_modal.plural.num_style_match", {
    numStyles: i
  })), getFeatureFlags().dsa_styles_variables_ui && s > 0 && d.push(getI18nString("design_systems.libraries_modal.plural.num_variable_match", {
    numVariables: s
  })), o > 0 && d.push(getI18nString("design_systems.libraries_modal.plural.num_variable_collection_match", {
    numVariableCollections: o
  })), d.length > 1) ? jsx("div", {
    children: d.join(", ")
  }) : 1 === d.length ? jsx("span", {
    children: d[0]
  }) : jsx("span", {});
}
export const I = $$s0;