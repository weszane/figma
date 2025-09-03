import { z } from "../vendor/835909";
var $$n0;
let a = z.enum(["fill", "stroke"]);
!function (e) {
  e.MISSING_COLOR_TOKEN = "MISSING_COLOR_TOKEN";
  e.MISSING_CORNER_RADII = "MISSING_CORNER_RADII";
}($$n0 || ($$n0 = {}));
let s = z.object({
  name: z.string(),
  type: z.string(),
  value: z.string()
});
let o = z.object({
  id: z.string().optional(),
  prop: z.discriminatedUnion("ruleType", [z.object({
    ruleType: z.literal("MISSING_COLOR_TOKEN"),
    value: a
  }), z.object({
    ruleType: z.literal("MISSING_CORNER_RADII"),
    value: z.enum(["topLeftRadius", "topRightRadius", "bottomLeftRadius", "bottomRightRadius"])
  })]),
  newValue: z.string().optional(),
  deleted: z.boolean().optional()
});
let l = z.object({
  guid: z.string().optional(),
  jsx: z.string().optional()
});
let d = z.object({
  variables: z.array(s).optional(),
  prop: a
});
let $$c2 = z.object({
  targetNodeGuid: z.string().optional(),
  inputJsx: z.string().optional(),
  ruleType: z.nativeEnum($$n0),
  context: d.optional()
});
let $$u1 = z.object({
  propertyUpdates: z.array(o).optional(),
  replacementJsx: l.optional()
});
export const D2 = $$n0;
export const Ld = $$u1;
export const nT = $$c2; 
