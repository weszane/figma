import { z } from "../vendor/835909";
var $$n0;
var $$i2;
!function (e) {
  e.NEUTRAL = "neutral";
  e.CASUAL = "casual";
  e.PROFESSIONAL = "professional";
  e.CONCISE = "concise";
  e.EXPANDED = "expanded";
}($$n0 || ($$n0 = {}));
(function (e) {
  e.DESIGN = "design";
  e.SLIDES = "slides";
  e.FIGJAM = "figjam";
})($$i2 || ($$i2 = {}));
let s = z.object({
  id: z.string(),
  text: z.string()
}).array();
let o = z.object({
  tone: z.nativeEnum($$n0),
  weight: z.number()
}).array();
let l = z.enum(["design", "slides", "figjam"]);
let $$d3 = z.union([z.object({
  text: z.string(),
  tones: o,
  productType: l.optional()
}), z.object({
  texts: s,
  tones: o,
  productType: l.optional()
})]);
let $$c1 = z.object({
  id: z.string().optional(),
  delta: z.string()
});
export const DE = $$n0;
export const aC = $$c1;
export const ch = $$i2;
export const e3 = $$d3;
