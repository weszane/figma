import { X4 } from "../vendor/459595";
import { KN } from "../vendor/512366";
import { aj } from "../vendor/4355";
import { $, q } from "../vendor/349319";
export let $$h0 = {
  test: $("hsl", "hue"),
  parse: q("hue", "saturation", "lightness"),
  transform: ({
    hue: e,
    saturation: r,
    lightness: n,
    alpha: a = 1
  }) => "hsla(" + Math.round(e) + ", " + KN.transform(aj(r)) + ", " + KN.transform(aj(n)) + ", " + aj(X4.transform(a)) + ")"
};
export const V = $$h0;