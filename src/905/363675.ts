import { jsxs, jsx } from "react/jsx-runtime";
import { T } from "../905/745591";
import { ensureContext } from "../905/61417";
import { T8 } from "../905/417626";
import { y } from "../905/842987";
import { s as _$$s } from "../905/536340";
import { iU, eJ } from "../905/193774";
export function $$c0({
  title: e,
  children: t,
  htmlAttributes: i,
  ...c
}) {
  let {
    variant
  } = ensureContext(y, "Banner.Message", "Banner");
  let p = T8(variant);
  return jsxs(T, {
    className: iU,
    role: "danger" === variant ? "alert" : "status",
    ...i,
    ...c,
    children: [p && jsxs("span", {
      className: _$$s,
      children: [p, "\xa0"]
    }), e && jsx("span", {
      className: eJ,
      children: e
    }), jsx("span", {
      children: t
    })]
  });
}
$$c0.displayName = "Banner.Message";
export const Q = $$c0;