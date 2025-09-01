import { jsx } from "react/jsx-runtime";
import { Ro } from "../figma_app/805373";
import { P, U } from "../905/566881";
export function $$s0({
  user: e,
  size: t = P.MEDIUM,
  fallbackDisplay: i = U.FIRST_CHARACTER
}) {
  return jsx("div", {
    className: "viewedAt" in e ? "user--avatarContainer--roppm" : void 0,
    children: jsx(Ro, {
      className: "viewedAt" in e ? "user--greyedOut--ihgyE" : void 0,
      entity: e,
      size: t,
      hideFallbackInitial: i === U.HIDDEN,
      shape: "CIRCLE"
    })
  });
}
export const H = $$s0;