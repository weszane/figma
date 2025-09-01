import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { rXF } from "../figma_app/763686";
import s from "classnames";
import { rf } from "../figma_app/806412";
import { TI } from "../905/713722";
import { tZ, u as _$$u, BQ } from "../figma_app/852050";
import { Oi } from "../figma_app/394327";
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
  let w = tZ(t);
  let O = _$$u(t);
  let R = BQ(O?.node_id ?? void 0);
  let L = useMemo(() => v, [v]);
  let P = rf(N, "click", e => {
    L && L(e);
  });
  if (R && "MIXED" !== R && R.resolvedType === rXF.COLOR) {
    let e = TI.format(R.value);
    if (R.value.a < 1) {
      let t = (100 * R.value.a).toLocaleString("en", {
        maximumFractionDigits: 2
      });
      C = `#${e}, ${t}%`;
    } else C = `#${e}`;
  } else C = Oi(R);
  let D = (O?.resolvedType || "") === rXF.FLOAT && w !== e;
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