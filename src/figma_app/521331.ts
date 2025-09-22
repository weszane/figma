import { SelectionPaintHelpers } from "../figma_app/763686";
import { whiteColor } from "../figma_app/191804";
import { getColorFormat } from "../figma_app/740163";
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
  let _ = getColorFormat();
  let h = () => {
    SelectionPaintHelpers.highlightOnlySamePaintInSublayers(r);
  };
  let m = () => SelectionPaintHelpers.highlightOnlySamePaintInSublayers("");
  let {
    value,
    copyValue
  } = $$d0(e ?? whiteColor, _, c, l);
  let E = q(e ?? whiteColor, _, c).value;
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