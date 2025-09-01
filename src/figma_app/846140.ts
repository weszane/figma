import { z } from "../905/239603";
let i = z.object({
  type: z.string(),
  props: z.record(z.any())
}).extend({
  children: z.lazy(() => z.union([z.string().array(), i.array()]))
});
var $$a3 = (e => (e.SPACING = "spacing", e.CORNER_RADIUS = "cornerRadius", e.FONT = "font", e.COLOR = "color", e.DARK_MODE = "dark", e))($$a3 || {});
var $$s0 = (e => (e.DEFAULT = "default", e.SERIF = "serif", e))($$s0 || {});
var $$o2 = (e => (e.TITLE = "title", e.BODY = "body", e.LABEL = "label", e))($$o2 || {});
var $$l4 = (e => (e.BOLD = "bold", e.MEDIUM = "medium", e.REGULAR = "regular", e))($$l4 || {});
let d = z.object({
  value: z.number(),
  units: z.$$enum(["RAW", "PIXELS", "PERCENT"])
});
let c = z.object({
  fontName: z.object({
    family: z.string(),
    style: z.string()
  }),
  letterSpacing: d.optional()
});
let u = z.object({
  r: z.number(),
  g: z.number(),
  b: z.number(),
  a: z.number()
});
let p = z.object({
  colorVariableMap: z.record(z.string(), u),
  numberVariableMap: z.record(z.string(), z.number()),
  fontVariableMap: z.record(z.string(), c).optional()
});
z.object({
  accentColor: u.optional(),
  darkMode: z.boolean(),
  variableMaps: p.optional()
});
z.object({
  position: z.boolean(),
  size: z.boolean(),
  flex: z.boolean(),
  color: z.boolean(),
  radius: z.boolean(),
  typography: z.boolean()
});
export let $$_1 = {
  position: !1,
  size: !1,
  flex: !1,
  color: !1,
  radius: !1,
  typography: !1
};
z.object({
  nodeId: z.string().nullable(),
  jsxStr: z.string(),
  prefixTypes: z.array(z.string())
});
let h = z.object({
  children: z.string().optional(),
  className: z.string().optional()
});
z.object({
  componentName: z.string().optional(),
  overrides: z.record(h)
});
z.object({
  key: z.string(),
  nodeId: z.string(),
  version: z.string(),
  descriptionLegacy: z.string(),
  componentKeys: z.array(z.string()),
  componentJSXNames: z.array(z.string())
});
export const GS = $$s0;
export const LW = $$_1;
export const lu = $$o2;
export const u7 = $$a3;
export const vj = $$l4; 
