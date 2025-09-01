import { q } from "../vendor/82231";
import { ai, X4 } from "../vendor/459595";
import { aj } from "../vendor/4355";
import { $, q as _$$q } from "../vendor/349319";
let h = e => q(0, 255, e);
let d = {
  ...ai,
  transform: e => Math.round(h(e))
};
let $$p0 = {
  test: $("rgb", "red"),
  parse: _$$q("red", "green", "blue"),
  transform: ({
    red: e,
    green: r,
    blue: n,
    alpha: i = 1
  }) => "rgba(" + d.transform(e) + ", " + d.transform(r) + ", " + d.transform(n) + ", " + aj(X4.transform(i)) + ")"
};
export const B = $$p0;