import { jsx } from "react/jsx-runtime";
import { lQ } from "../905/934246";
import a from "classnames";
import { Lk } from "../figma_app/975811";
import { stopPropagation } from "../figma_app/753501";
import { KindEnum } from "../905/129884";
import { AngleInput, ScrubbableInput, ExpressionInput, PercentageBaseInput } from "../figma_app/178475";
import { useTransformInputHandler } from "../figma_app/98483";
var s = a;
function p(e) {
  return s()("scrubbable_style_overrides--scrubbable--P1-fg", e.className, {
    "scrubbable_style_overrides--disabled--e867X": e.disabled
  });
}
export function $$m0(e) {
  let {
    children,
    dataTooltip,
    ...a
  } = e;
  return jsx(AngleInput, {
    ...a,
    onKeyDown: stopPropagation,
    dispatch: lQ,
    className: p(e),
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": dataTooltip,
    reverseScrub: !0,
    children: jsx(h, {
      children
    })
  });
}
function h({
  children: e
}) {
  return e ? jsx("div", {
    className: "scrubbable_style_overrides--scrubbableIconContainer--ghYip",
    children: e
  }) : jsx("div", {
    className: "scrubbable_style_overrides--scrubbableSpacer--vcNhH"
  });
}
export function $$g1(e) {
  let {
    children,
    dataTooltip,
    ...a
  } = e;
  let s = new Lk({
    min: .01,
    max: e.max,
    bigNudgeAmount: e.bigStep / 10,
    smallNudgeAmount: e.step / 10,
    floatingPointFormat: {
      maxNumDigits: 2
    }
  });
  return jsx(ScrubbableInput, {
    ...a,
    onKeyDown: stopPropagation,
    formatter: s,
    dispatch: lQ,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": dataTooltip,
    className: p(e),
    scrubMultiplier: .1,
    children: jsx(h, {
      children
    })
  });
}
export function $$f3(e) {
  let t = useTransformInputHandler({
    key: "x",
    setValue: e.onValueChange
  });
  let {
    children,
    dataTooltip,
    dataTooltipShowAbove,
    ...s
  } = e;
  return jsx(ExpressionInput, {
    ...t,
    ...s,
    onKeyDown: stopPropagation,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": dataTooltip,
    "data-tooltip-show-above": dataTooltipShowAbove,
    className: p(e),
    children: jsx(h, {
      children
    })
  });
}
export function $$_2(e) {
  let {
    children,
    dataTooltip,
    ...a
  } = e;
  return jsx(PercentageBaseInput, {
    ...a,
    onKeyDown: stopPropagation,
    dispatch: lQ,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": dataTooltip,
    hidePercentSign: !1,
    childrenAtEnd: !1,
    className: p(e),
    children: jsx(h, {
      children
    })
  });
}
export const Fr = $$m0;
export const hb = $$g1;
export const Z = $$_2;
export const Uq = $$f3;