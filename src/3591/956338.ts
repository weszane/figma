import { jsx } from "react/jsx-runtime";
import s from "classnames";
import { t, tx } from "../905/303541";
import { Ex } from "../905/69098";
import { Ib } from "../905/129884";
var l = s;
export function $$p0({
  height: e = "24"
}) {
  return jsx("div", {
    className: "in_review_badge--inReviewBadge--6j9Uu",
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": t("community.plugins.this_resource_is_in_review_by_figma_moderators_and_will_be_available_publicly_once_approved"),
    children: jsx(Ex, {
      height: e,
      children: jsx("span", {
        className: l()({
          "in_review_badge--heightSixteen--aD6ev text--fontPos9--naThA text--_fontBase--QdLsd": "16" === e
        }),
        children: tx("community.plugins.in_review")
      })
    })
  });
}
export const L = $$p0;