import { z } from "../vendor/835909";
export let $$n0 = z.enum(["pass-through", "normal", "darken", "multiply", "color-burn", "lighten", "screen", "color-dodge", "overlay", "soft-light", "hard-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "normal", "linear-burn", "linear-dodge"]).describe("@name(BlendMode)");
export function $$r2(e) {
  if (e) return e.toLowerCase().replace(/_/g, "-");
}
export function $$a1(e) {
  return e ? e.toUpperCase().replace("-", "_") : "NORMAL";
}
export const U3 = $$n0;
export const hA = $$a1;
export const nl = $$r2;
