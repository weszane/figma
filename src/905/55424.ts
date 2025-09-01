import { jsx } from "react/jsx-runtime";
import { E } from "../905/632989";
import a from "classnames";
import { MB, Hr, vF, AE } from "../905/549307";
var s = a;
export function $$l0({
  text: e,
  onMouseDown: t,
  isLeftColInteractionsPanel: i
}) {
  return jsx(E, {
    className: ["!", "(", "not", "Not", "NOT"].includes(e) ? s()({
      [MB]: !0,
      [Hr]: !0,
      [vF]: !!i
    }) : ")" === e ? s()({
      [AE]: !0,
      [Hr]: !0,
      [vF]: !!i
    }) : s()({
      [Hr]: !0,
      [vF]: !!i
    }),
    actionOnPointerDown: !0,
    onClick: e => t?.(e),
    children: e
  });
}
export const X = $$l0;