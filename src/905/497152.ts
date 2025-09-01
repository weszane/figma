import { PWo } from "../figma_app/763686";
var $$r1 = (e => (e.COMPONENT = "component", e.STYLE = "style", e.STATE_GROUP = "state_group", e.VARIABLE = "variable", e.VARIABLE_SET = "variable_set", e.MODULE = "module", e.VARIABLE_OVERRIDE = "variable_override", e.RESPONSIVE_SET = "responsive_set", e.CONSTRAINED_TEMPLATE = "constrained_template", e.CODE_LIBRARY = "code_library", e.CODE_FILE = "code_file", e.CODE_COMPONENT = "code_component", e.MANAGED_STRING = "managed_string", e))($$r1 || {});
export function $$a2(e) {
  switch (e) {
    case PWo.SYMBOL:
      return "component";
    case PWo.STYLE:
      return "style";
    case PWo.STATE_GROUP:
      return "state_group";
    case PWo.MODULE:
      return "module";
    case PWo.RESPONSIVE_SET:
      return "responsive_set";
    case PWo.VARIABLE:
      return "variable";
    case PWo.VARIABLE_SET:
      return "variable_set";
    case PWo.VARIABLE_OVERRIDE:
      return "variable_override";
    case PWo.CONSTRAINED_TEMPLATE:
      return "constrained_template";
    case PWo.CODE_LIBRARY:
      return "code_library";
    case PWo.CODE_FILE:
      return "code_file";
    case PWo.CODE_COMPONENT:
      return "code_component";
    case PWo.MANAGED_STRING:
      return "managed_string";
    case PWo.BRUSH:
    case PWo.NONE:
      return null;
  }
}
export function $$s0(e) {
  switch (e) {
    case "component":
      return PWo.SYMBOL;
    case "module":
      return PWo.MODULE;
    case "style":
      return PWo.STYLE;
    case "state_group":
      return PWo.STATE_GROUP;
    case "variable":
      return PWo.VARIABLE;
    case "variable_set":
      return PWo.VARIABLE_SET;
    case "variable_override":
      return PWo.VARIABLE_OVERRIDE;
    case "responsive_set":
      return PWo.RESPONSIVE_SET;
    case "constrained_template":
      return PWo.CONSTRAINED_TEMPLATE;
    case "code_library":
      return PWo.CODE_LIBRARY;
    case "code_file":
      return PWo.CODE_FILE;
    case "code_component":
      return PWo.CODE_COMPONENT;
    case "managed_string":
      return PWo.MANAGED_STRING;
  }
}
export const Hk = $$s0;
export const PW = $$r1;
export const Zx = $$a2;