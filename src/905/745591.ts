import { jsx } from "react/jsx-runtime";
import { forwardRef, useState, useLayoutEffect } from "react";
import { defaultComponentAttribute } from "../905/577641";
export let $$s0 = forwardRef(({
  children: e,
  role: t = "status",
  htmlAttributes: i,
  ...s
}, o) => {
  let [l, d] = useState(!0);
  useLayoutEffect(() => d(!1), []);
  return jsx("div", {
    ref: o,
    ...i,
    ...defaultComponentAttribute,
    ...s,
    role: t,
    children: l ? void 0 : e
  });
});
$$s0.displayName = "AnnouncementPrimitive";
export const T = $$s0;