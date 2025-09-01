import { jsx } from "react/jsx-runtime";
import r from "classnames";
var l = r;
export function $$s0({
  children: e,
  wrapperClassName: t,
  isVisible: i
}) {
  return jsx("div", {
    className: l()(t, "focusable_hidden_button_wrapper--wrapper--w-n3a", {
      "focusable_hidden_button_wrapper--visible--3AzQL": i
    }),
    children: e
  });
}
export const k = $$s0;