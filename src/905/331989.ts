import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { VariableResolvedDataType } from "../figma_app/763686";
import s from "classnames";
import { SvgComponent } from "../905/714743";
import { G } from "../905/750789";
import { i as _$$i } from "../905/186077";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { KindEnum } from "../905/129884";
import { Y } from "../905/315917";
import { J, Z } from "../905/420117";
import { m as _$$m } from "../905/658204";
import { e as _$$e } from "../905/871724";
import { LO, sW } from "../905/500756";
import { zr, yQ, Io, EE, Mk, Hw, Qq, Gq, Bx } from "../figma_app/875495";
import { A as _$$A } from "../1617/991344";
var o = s;
export let $$v2 = forwardRef(({
  colorTheme: e = J.DEFAULT,
  invalid: t = !1,
  isDeleted: i = !1,
  isNarrow: r = !1,
  endTruncate: s = !1,
  text: l,
  thumbnailValue: p,
  tooltip: m,
  disableHover: b,
  containerClassName: v,
  dataTestId: E,
  fullWidth: x,
  ui3Height: S,
  onClick: w,
  actionOnMouseDown: C = !1,
  variableDescription: T,
  variableValue: k,
  ariaLabel: R,
  forceHoveredStyle: N = !1,
  forceUI3ColorPill: P = !1,
  useHoveredStyle: O = !1,
  isNonInteractive: D = !1
}, L) => {
  let F = p?.resolvedType === VariableResolvedDataType.COLOR;
  let M = (!F || P) && !!p && !i;
  let j = e === J.OVERRIDDEN;
  let {
    isSelected
  } = _$$e();
  let B = e === J.DEFAULT && isSelected ? J.IN_SELECTION : e;
  let V = Y(l, T, k, m);
  return jsxs("div", {
    ref: L,
    className: o()(zr, {
      [_$$s.wFull.$]: x,
      [yQ]: S
    }),
    "data-testid": "variable-pill-root",
    children: [F && !P && !i && jsx(LO, {
      value: p,
      colorTheme: B
    }), jsxs(Z, {
      actionOnMouseDown: C,
      "aria-label": R,
      className: o()(Io, {
        [_$$s.wFull.$]: x
      }, v, N && EE, O && Mk, S && yQ),
      colorTheme: B,
      "data-testid": E,
      disableHover: b,
      hasIcon: M,
      isNarrow: r,
      isNonInteractive: D,
      onPress: w,
      children: [M && jsx(LO, {
        disabled: [J.DISABLED, J.DISABLED_TERTIARY].includes(B),
        value: p,
        variableThumbnailIconType: B === J.COMPONENT ? sW.COMPONENT : sW.DEFAULT,
        colorTheme: B
      }), jsxs("div", {
        className: Hw,
        children: [i && jsx($$I0, {}), jsx("div", {
          className: Qq,
          children: jsx(G, {
            className: o()({
              [Gq]: t
            }),
            truncate: s ? "end" : "start",
            text: l,
            showTooltip: _$$i.ALWAYS,
            getTooltipText: V
          })
        })]
      })]
    }), j && jsx(_$$m, {})]
  });
});
export function $$I0() {
  return jsx("div", {
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("variables.variable_was_deleted"),
    children: jsx(SvgComponent, {
      className: Bx,
      svg: _$$A
    })
  });
}
export const B3 = $$I0;
export const J2 = J;
export const wG = $$v2;