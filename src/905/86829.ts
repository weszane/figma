import { jsx } from "react/jsx-runtime";
import { Button } from "../905/521428";
import { f } from "../905/257420";
export function $$s0(e) {
  return jsx(Button, {
    onClick: e.onClick,
    "data-testid": e.dataTestId ? `${e.dataTestId}-show-more-button` : "show-more-button",
    variant: "ghost",
    iconPrefix: jsx("div", {
      className: "show_more_button--iconContainer--8Lv7k",
      children: jsx(f, {})
    }),
    "aria-label": e.label,
    children: jsx("span", {
      className: "show_more_button--showMoreLabel---pygN",
      children: e.label
    })
  });
}
export const d = $$s0;