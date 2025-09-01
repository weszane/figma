import { useMemo } from "react";
import { R } from "../905/987929";
var $$a1 = (e => (e[e.Clockwise = 1] = "Clockwise", e[e.Counterclockwise = -1] = "Counterclockwise", e))($$a1 || {});
class s extends R {
  constructor({
    mixedMathHandler: e,
    incrementDirection: t = 1
  }) {
    let i = 1 === t ? 1 : -1;
    super({
      nudge: 1 * i,
      bigNudge: 15 * i,
      maximumFractionDigits: 2,
      mixedMathHandler: e
    });
    this.allowedUnits = "\xb0|px";
  }
  formatUnmixed(e) {
    -180 == (e = (e + 180 + 360) % 360 - 180) && (e = 180);
    return `${super.formatUnmixed(e)}\xb0`;
  }
}
export function $$o0({
  mixedMathHandler: e,
  incrementDirection: t = 1
}) {
  return useMemo(() => new s({
    mixedMathHandler: e,
    incrementDirection: t
  }), [e, t]);
}
export const tz = $$o0;
export const yb = $$a1;