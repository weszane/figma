import { jsx } from "react/jsx-runtime";
import { renderI18nText } from "../905/303541";
import { formatLibraryContents } from "../figma_app/646357";
export function $$s1({
  numComponents: e,
  numStateGroups: t,
  numVariableCollections: i,
  numVariables: r,
  numStyles: s
}) {
  return jsx("span", {
    children: formatLibraryContents({
      numProductComponents: e + t,
      numStyles: s ?? 0,
      numVariables: r ?? 0,
      numVariableCollections: i ?? 0
    })
  });
}
export function $$o0({
  numComponents: e,
  numStateGroups: t
}) {
  let i = e + t;
  return jsx("span", {
    children: 0 === i ? renderI18nText("design_systems.libraries_modal.no_components") : renderI18nText("design_systems.libraries_modal.plural.num_component", {
      numComponents: i
    })
  });
}
export const a = $$o0;
export const c = $$s1;