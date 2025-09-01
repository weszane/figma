import { jsx } from "react/jsx-runtime";
import n from "classnames";
import { kL, to } from "../9410/212974";
var a = n;
export function $$o0({
  children: e,
  hasScrollLine: t,
  onClick: i
}) {
  return jsx("div", {
    className: a()(kL, {
      [to]: t
    }),
    onClick: i,
    children: e
  });
}
export const B = $$o0;