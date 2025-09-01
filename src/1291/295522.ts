import { jsxs, jsx } from "react/jsx-runtime";
import { g } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
import { tx } from "../905/303541";
import { lW } from "../figma_app/850075";
import { to } from "../figma_app/828186";
import { E } from "../905/511388";
let c = {
  communitySourceText: {
    ...g.textBodyMedium,
    color: "x1n0bwc9",
    textOverflow: "xlyipyv",
    $$css: !0
  }
};
export function $$u0({
  libraryKey: e,
  attribution: t,
  showAuthor: s = !0
}) {
  let a = to();
  let u = lW(a);
  let m = e && u[e];
  return a && m ? jsxs("div", {
    className: "x78zum5 x1q0g3np x1cy8zhl xg2d0mh",
    children: [jsx(E, {
      libraryKey: e,
      showTooltip: !0,
      isNewIcon: !0
    }), s && t && jsx("span", {
      ...Ay.props(c.communitySourceText),
      children: tx("whiteboard.inserts.by_publisher_name", {
        publisherName: t
      })
    })]
  }) : null;
}
export const $ = $$u0;