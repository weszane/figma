import { jsx } from "react/jsx-runtime";
import { a as _$$a } from "../905/361302";
import { yb, tz } from "../905/608681";
import { N } from "../905/696319";
export function $$o0({
  mixedMathHandler: e,
  incrementDirection: t = yb.Counterclockwise,
  ...i
}) {
  let o = tz({
    mixedMathHandler: e,
    incrementDirection: t
  });
  return jsx(N, {
    ...i,
    icon: jsx(_$$a, {}),
    formatter: o
  });
}
export const Z = $$o0;