import { z } from "../vendor/835909";
let $$r6 = z.object({
  sessionID: z.number(),
  localID: z.number()
});
let $$a3 = z.object({
  r: z.number().gte(0).lte(1),
  g: z.number().gte(0).lte(1),
  b: z.number().gte(0).lte(1),
  a: z.number().gte(0).lte(1)
});
let $$s2 = z.object({
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number()
});
z.object({
  top: z.number(),
  right: z.number(),
  bottom: z.number(),
  left: z.number()
}).partial();
let $$o1 = z.tuple([z.tuple([z.number(), z.number(), z.number()]), z.tuple([z.number(), z.number(), z.number()])]);
let $$l5 = z.object({
  m00: z.number(),
  m01: z.number(),
  m02: z.number(),
  m10: z.number(),
  m11: z.number(),
  m12: z.number()
});
let d = z.enum(["STRING", "FLOAT", "BOOLEAN", "COLOR", "IMAGE"]);
let $$c4 = z.object({
  type: z.literal("VARIABLE_ALIAS"),
  id: z.string(),
  resolvedType: d.optional()
});
let $$u0 = z.object({
  x: z.number(),
  y: z.number()
});
z.object({
  width: z.number(),
  height: z.number()
});
export const $l = $$u0;
export const QV = $$o1;
export const TL = $$s2;
export const Ux = $$a3;
export const Yj = $$c4;
export const bG = $$l5;
export const rw = $$r6;
