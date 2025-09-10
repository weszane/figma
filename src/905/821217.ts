import { jsx } from "react/jsx-runtime";
import { defaultComponentAttribute } from "src/905/577641";
let a = e => e.stopPropagation();
export function $$s0({
  display: e = "block",
  eventListeners: t,
  htmlAttributes: i,
  ...s
}) {
  let o = function (e) {
    let t = {};
    for (let i of e) t[i] = a;
    return t;
  }(t);
  return jsx("div", {
    ...o,
    ...i,
    ...s,
    ...defaultComponentAttribute,
    style: {
      display: e
    }
  });
}
$$s0.displayName = "EventShield";
export const o = $$s0;
