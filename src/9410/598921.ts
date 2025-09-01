import { jsx } from "react/jsx-runtime";
import n from "classnames";
var a = n;
export function $$s0({
  children: e,
  withBorder: t,
  autoHeight: i = !1
}) {
  return jsx("div", {
    className: a()("tabs_header--tabsHeader--8rHi8", {
      "tabs_header--autoHeight--eXDMV": i,
      "tabs_header--withBorder--jZYSF": t
    }),
    children: e
  });
}
export const y = $$s0;