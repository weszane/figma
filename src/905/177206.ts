import { useMemo } from "react";
import { b$ } from "../figma_app/493477";
import { sx } from "../905/449184";
import { sT } from "../figma_app/740163";
import { R } from "../905/987929";
let l = /[0-9]+\,[0-9]+/g;
let d = {
  maximumFractionDigits: 2
};
class c extends R {
  constructor(e = {}) {
    super(b$(d, e));
  }
  parse(e, t) {
    l.test(e) && sx("editor-parsing-float-input-with-comma", {
      input: e
    });
    return super.parse(e, t);
  }
}
export function $$u0({
  min: e,
  max: t,
  nudge: i,
  bigNudge: r,
  mixedMathHandler: a,
  mixedMathCallback: o,
  onMixedMathNudge: l,
  onEvaluateExpressionError: d
}) {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT(i, r);
  return useMemo(() => new c({
    min: e,
    max: t,
    nudge: smallNudgeAmount,
    bigNudge: bigNudgeAmount,
    mixedMathHandler: a,
    mixedMathCallback: o,
    onMixedMathNudge: l,
    onEvaluateExpressionError: d
  }), [e, t, smallNudgeAmount, bigNudgeAmount, a, o, l, d]);
}
export const S = $$u0;