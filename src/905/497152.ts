import { FacetType } from "../figma_app/763686";
var $$r1 = (e => (e.COMPONENT = "component", e.STYLE = "style", e.STATE_GROUP = "state_group", e.VARIABLE = "variable", e.VARIABLE_SET = "variable_set", e.MODULE = "module", e.VARIABLE_OVERRIDE = "variable_override", e.RESPONSIVE_SET = "responsive_set", e.CONSTRAINED_TEMPLATE = "constrained_template", e.CODE_LIBRARY = "code_library", e.CODE_FILE = "code_file", e.CODE_COMPONENT = "code_component", e.MANAGED_STRING = "managed_string", e))($$r1 || {});
export function $$a2(e) {
  switch (e) {
    case FacetType.SYMBOL:
      return "component";
    case FacetType.STYLE:
      return "style";
    case FacetType.STATE_GROUP:
      return "state_group";
    case FacetType.MODULE:
      return "module";
    case FacetType.RESPONSIVE_SET:
      return "responsive_set";
    case FacetType.VARIABLE:
      return "variable";
    case FacetType.VARIABLE_SET:
      return "variable_set";
    case FacetType.VARIABLE_OVERRIDE:
      return "variable_override";
    case FacetType.CONSTRAINED_TEMPLATE:
      return "constrained_template";
    case FacetType.CODE_LIBRARY:
      return "code_library";
    case FacetType.CODE_FILE:
      return "code_file";
    case FacetType.CODE_COMPONENT:
      return "code_component";
    case FacetType.MANAGED_STRING:
      return "managed_string";
    case FacetType.BRUSH:
    case FacetType.NONE:
      return null;
  }
}
export function $$s0(e) {
  switch (e) {
    case "component":
      return FacetType.SYMBOL;
    case "module":
      return FacetType.MODULE;
    case "style":
      return FacetType.STYLE;
    case "state_group":
      return FacetType.STATE_GROUP;
    case "variable":
      return FacetType.VARIABLE;
    case "variable_set":
      return FacetType.VARIABLE_SET;
    case "variable_override":
      return FacetType.VARIABLE_OVERRIDE;
    case "responsive_set":
      return FacetType.RESPONSIVE_SET;
    case "constrained_template":
      return FacetType.CONSTRAINED_TEMPLATE;
    case "code_library":
      return FacetType.CODE_LIBRARY;
    case "code_file":
      return FacetType.CODE_FILE;
    case "code_component":
      return FacetType.CODE_COMPONENT;
    case "managed_string":
      return FacetType.MANAGED_STRING;
  }
}
export const Hk = $$s0;
export const PW = $$r1;
export const Zx = $$a2;