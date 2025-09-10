import { jsx, Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import { DP, Dx } from "../905/158740";
export function $$s0(e) {
  return e.disabled ? jsx(Fragment, {
    children: e.children
  }) : jsx(o, {
    ...e
  });
}
function o({
  children: e
}) {
  let t = DP();
  let i = useMemo(() => ({
    ...t,
    version: "ui3"
  }), [t]);
  return jsx(Dx, {
    value: i,
    children: jsx("div", {
      "data-fpl-ui3-override": !0,
      style: {
        display: "contents"
      },
      children: e
    })
  });
}
export const J = $$s0;
