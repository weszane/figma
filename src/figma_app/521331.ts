import { Osy } from "../figma_app/763686";
import { FN } from "../figma_app/191804";
import { Ku } from "../figma_app/740163";
import { q } from "../figma_app/777660";
import { _B } from "../figma_app/152690";
export function $$l1({
  color: e,
  colorVar: t,
  encodedPaint: r,
  opacity: l,
  valueFormatter: c
}) {
  let {
    variable,
    variableDisplayName
  } = _B({
    color: e,
    colorVar: t,
    opacity: l
  });
  let _ = Ku();
  let h = () => {
    Osy.highlightOnlySamePaintInSublayers(r);
  };
  let m = () => Osy.highlightOnlySamePaintInSublayers("");
  let {
    value,
    copyValue
  } = $$d0(e ?? FN, _, c, l);
  let E = q(e ?? FN, _, c).value;
  return variable && variableDisplayName && e ? {
    copyValue,
    isSoftDeleted: variable?.subscriptionStatus === "LOCAL" && variable?.isSoftDeleted,
    isVariableRow: !0,
    onMouseEnter: h,
    onMouseLeave: m,
    value,
    valueWithoutOpacity: E,
    variable,
    variableDisplayName
  } : {
    copyValue,
    isVariableRow: !1,
    onMouseEnter: h,
    onMouseLeave: m,
    value,
    valueWithoutOpacity: E
  };
}
export function $$d0(e, t, r, n = 1) {
  let {
    a = 1
  } = e;
  return q({
    ...e,
    a: a * n
  }, t, r, {
    alphaInPercent: !0
  });
}
export const G = $$d0;
export const X = $$l1;