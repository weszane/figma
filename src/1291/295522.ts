import { jsxs, jsx } from "react/jsx-runtime";
import { textDisplayConfig } from "../905/687265";
import { stylex } from "@stylexjs/stylex";
import { renderI18nText } from "../905/303541";
import { lW } from "../figma_app/850075";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { LibraryIconWithTooltip } from "../905/511388";
let c = {
  communitySourceText: {
    ...textDisplayConfig.textBodyMedium,
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
  let a = useIsSelectedViewFullscreenCooper();
  let u = lW(a);
  let m = e && u[e];
  return a && m ? jsxs("div", {
    className: "x78zum5 x1q0g3np x1cy8zhl xg2d0mh",
    children: [jsx(LibraryIconWithTooltip, {
      libraryKey: e,
      showTooltip: !0,
      isNewIcon: !0
    }), s && t && jsx("span", {
      ...stylex.props(c.communitySourceText),
      children: renderI18nText("whiteboard.inserts.by_publisher_name", {
        publisherName: t
      })
    })]
  }) : null;
}
export const $ = $$u0;