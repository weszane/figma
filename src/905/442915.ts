import { YV, td } from "../figma_app/181241";
import { z } from "../905/239603";
import { n as _$$n } from "../905/347702";
let a = z.$$enum(["color", "float"]);
let s = z.$$enum(["LOCAL", "LIBRARY", "SUBSCRIBED"]);
z.$$enum(["PROPS_PANEL", "LINTER"]);
let o = z.$$enum(["FILL", "STROKE", "STACK_PADDING", "STACK_SPACING", "CORNER_RADIUS", "FONT_SIZE", "LINE_HEIGHT", "LETTER_SPACING", "MULTI", "UNKNOWN"]);
let l = z.$$enum(["FRAME", "TEXT", "VECTOR", "INSTANCE", "SYMBOL", "ICON-LIKE", "OTHER"]);
let d = z.object({
  r: z.number(),
  g: z.number(),
  b: z.number(),
  a: z.number()
});
let c = z.object({
  color_value: d.optional(),
  number_value: z.number().optional()
}).refine(e => {
  let t = void 0 !== e.color_value;
  let i = void 0 !== e.number_value;
  return !(t && i);
}, {
  message: "At most one of 'color_value' or 'number_value' can be set.",
  path: ["color_value", "number_value"]
});
let u = z.object({
  variable_id: z.string(),
  variable_set_id: z.string(),
  variable_resolved_data_type: a,
  value: c,
  usage_type: s,
  name: z.string(),
  variable_num_usages_in_file: z.number(),
  variable_num_usages_in_containing_subtree: z.number(),
  elapsed_seconds_since_last_insertions: z.array(z.number())
});
let p = z.object({
  key: z.string(),
  type: z.string(),
  library_key: z.string().optional(),
  state_group_id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional()
});
let m = z.object({
  is_top_level_node: z.boolean(),
  num_descendant_nodes: z.number(),
  is_component: z.boolean(),
  depth_from_top_level_frame: z.number(),
  seconds_since_last_edited: z.number().optional(),
  last_edited_by: z.string().optional(),
  edit_info_valid: z.boolean(),
  layer_name: z.string(),
  property: o,
  node_type: l,
  selected_components: z.array(p),
  file_total_variable_usages: z.number(),
  containing_subtree_total_variable_usages: z.number()
});
let h = z.object({
  org_id: z.number().optional(),
  open_file_key: z.string(),
  entry_point: z.string(),
  query_id: z.string(),
  session_id: z.string(),
  candidates: z.array(u),
  current_value: c,
  subscribed_library_keys: z.array(z.string()),
  current_value_data_type: a,
  used_product_components_on_page: z.array(p),
  selection_context: m
});
let g = z.object({
  reranked_candidates: z.array(z.string())
});
export let $$_0 = new class {
  constructor() {
    this.RecommendVariablesValidator = YV("RecommendVariablesValidator", g, null, !0);
    this.recommendVariables = _$$n(e => {
      let t = h.parse(e);
      return this.RecommendVariablesValidator.validate(async ({
        xr: e
      }) => await e.post("/api/recommend/variables", td.toAPIParameters(t)));
    });
  }
}();
export const D = $$_0; 
