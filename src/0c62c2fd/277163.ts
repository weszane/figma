import { jsx } from "react/jsx-runtime";
import { KindEnum } from "../905/129884";
import { Me } from "../figma_app/778125";
import { A } from "../1617/954184";
export function $$o0(e) {
  return jsx(Me, {
    className: "addition_button--button--X9H6b",
    "data-onboarding-key": e.data_onboarding_key,
    "data-tooltip": e.data_tooltip,
    "data-tooltip-show-immediately": e.disabled || void 0,
    "data-tooltip-type": KindEnum.TEXT,
    disabled: e.disabled,
    innerText: e.innerText,
    isBackgroundTransparent: e.isBackgroundTransparent,
    onClick: e.onClick,
    onMouseDown: e.onMouseDown,
    onMouseEnter: e.onMouseEnter,
    svg: A
  });
}
export const f = $$o0;