import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A } from "../vendor/723372";
import { VM } from "../905/472756";
import { r as _$$r } from "../905/577641";
export let $$l0 = forwardRef(({
  className: e,
  htmlAttributes: t,
  id: i,
  ...r
}, l) => {
  let {
    id,
    isRegistered
  } = VM("description", {
    providedId: i
  });
  return jsx("strong", {
    role: isRegistered ? "note" : void 0,
    ..._$$r,
    ...t,
    ...r,
    className: A("badge-reset__badgeReset__ochuI", e),
    id,
    ref: l
  });
});
$$l0.displayName = "BadgePrimitive";
export const F = $$l0;