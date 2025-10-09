import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { VariableResolvedDataType } from "../figma_app/763686";
import s from "classnames";
import { useHandleMouseEvent } from "../figma_app/878298";
import { formattedColorManipulator } from "../905/713722";
import { getVariableName, getVariableById, getResolvedVariableValue } from "../figma_app/852050";
import { getVariableDisplayString } from "../figma_app/394327";
import { J2, wG } from "../905/331989";
import { HB, vk, Ju, gD } from "../905/903359";
var o = s;
export function $$h1({
  value: e,
  variableId: t,
  colorTheme: r = J2.DEFAULT,
  disableHover: s = !1,
  invalid: h = !1,
  zeroSizeLayout: m = !1,
  isStandalone: g = !1,
  isDeleted: f = !1,
  offsetLeft: E = 0,
  offsetTop: y = 0,
  styleOverride: b,
  classNameOverride: T,
  thumbnailValue: I,
  tooltipOverride: S,
  onClick: v,
  variablePillContainerClassName: A,
  fullWidth: x,
  recordingKey: N
}) {
  let C;
  let w = getVariableName(t);
  let O = getVariableById(t);
  let R = getResolvedVariableValue(O?.node_id ?? void 0);
  let L = useMemo(() => v, [v]);
  let P = useHandleMouseEvent(N, "click", e => {
    L && L(e);
  });
  if (R && "MIXED" !== R && R.resolvedType === VariableResolvedDataType.COLOR) {
    let e = formattedColorManipulator.format(R.value);
    if (R.value.a < 1) {
      let t = (100 * R.value.a).toLocaleString("en", {
        maximumFractionDigits: 2
      });
      C = `#${e}, ${t}%`;
    } else C = `#${e}`;
  } else C = getVariableDisplayString(R);
  let D = (O?.resolvedType || "") === VariableResolvedDataType.FLOAT && w !== e;
  let k = jsx("div", {
    className: o()(T, {
      [HB]: !0,
      [vk]: !!P,
      [Ju]: g
    }),
    style: g ? b : {
      transform: `translate(${E}px, ${y}px)`
    },
    "aria-disabled": !P,
    children: jsx(wG, {
      colorTheme: r,
      containerClassName: A,
      dataTestId: "variable-pill",
      disableHover: s,
      endTruncate: D,
      fullWidth: x,
      invalid: h,
      isDeleted: f,
      onClick: P,
      text: e,
      thumbnailValue: I,
      tooltip: S || (w !== e ? w : void 0),
      variableDescription: O?.description,
      variableValue: !D && C ? C : e
    })
  });
  return m ? jsx("div", {
    className: gD,
    children: k
  }) : k;
}
export const J = J2;
export const P = $$h1;