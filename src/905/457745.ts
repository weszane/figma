import { z } from "../905/239603";
let r = z.enum(["FILL", "TEXT", "GRID", "EFFECT", "BOOLEAN", "STRING", "FLOAT", "COLOR"]);
let $$a0 = z.object({
  library_keys: z.array(z.string()),
  entity_type: z.enum(["VARIABLE", "STYLE"]),
  max_results_per_library: z.number(),
  entity_value_type: r
}).refine(e => !(("BOOLEAN" === e.entity_value_type || "STRING" === e.entity_value_type || "FLOAT" === e.entity_value_type || "COLOR" === e.entity_value_type) && "VARIABLE" !== e.entity_type), {
  message: "BOOLEAN, STRING, FLOAT, and COLOR entity types can only be used when asset_type is 'VARIABLE', and   'FILL', 'TEXT', 'GRID', 'EFFECT' entity types can only be used when asset_type is 'STYLE",
  path: ["entity_value_type"]
});
let s = z.object({
  keys: z.array(z.string())
});
let $$o1 = z.object({
  entity_keys_per_library: z.record(z.string(), s)
});
export const R = $$a0;
export const X = $$o1;
