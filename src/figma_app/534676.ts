import { jsx, jsxs } from "react/jsx-runtime";
import i from "classnames";
import { Xb } from "../figma_app/778880";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { tx, t } from "../905/303541";
import { X2 } from "../figma_app/808294";
import { Ib } from "../905/129884";
import { m_ } from "../figma_app/209680";
import { A } from "../6828/154709";
var a = i;
let _ = "resource_badge_subtext--container--hKr5Q";
let h = "resource_badge_subtext--textMedium--Q-O1i text--fontPos13--xW8hS text--_fontBase--QdLsd";
let m = "resource_badge_subtext--textSmall--fgvsr text--fontPos11--2LvXf text--_fontBase--QdLsd";
export function $$f1({
  resource: e,
  showCaret: t = !0,
  textSize: r = "medium"
}) {
  let i = X2(e.monetized_resource_metadata);
  let a = tx("community.buyer.in_app_purchase");
  return jsx("div", {
    className: _,
    children: Xb ? a : jsx(m_, {
      preview: i,
      children: jsxs("div", {
        className: _$$s.flex.$,
        children: [jsx("div", {
          className: "small" === r ? m : h,
          children: a
        }), t && jsx(B, {
          className: "resource_badge_subtext--caret--weiCk",
          svg: A
        })]
      })
    })
  });
}
export function $$E2({
  textSize: e = "medium"
}) {
  return jsx("div", {
    className: a()(_, "small" === e ? m : h),
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": t("community.detail_view.this_plugin_requires_third_party_payment_if_you_decide_to_upgrade"),
    "data-tooltip-show-immediately": !0,
    children: tx("community.buyer.in_app_purchase")
  });
}
export function $$y0({
  metadata: e,
  textSize: t = "medium"
}) {
  return jsx("div", {
    className: a()(_, "small" === t ? m : h),
    children: tx("community.resource.free_trial_days", {
      days: e.trial_length_in_days
    })
  });
}
export const sw = $$y0;
export const Cg = $$f1;
export const Gb = $$E2;