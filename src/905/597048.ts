import { jsx } from "react/jsx-runtime";
import r from "classnames";
import { SvgComponent } from "../905/714743";
import { A } from "../6828/313994";
var a = r;
export function $$l0({
  size: e = "normal"
}) {
  return jsx("div", {
    className: a()("medium_icon--container--F--Qs", {
      "medium_icon--small--XIffS": "small" === e
    }),
    "aria-hidden": !0,
    children: jsx(SvgComponent, {
      svg: A
    })
  });
}
export const L = $$l0;