import { jsx, jsxs } from "react/jsx-runtime";
import { E } from "../905/53857";
import { renderI18nText } from "../905/303541";
import { SvgComponent } from "../905/714743";
import { A } from "../6828/55207";
import { m_ } from "../figma_app/209680";
import { BadgeType } from "../905/875063";
import { Ex, b3, OQ } from "../905/69098";
import { RL, kz } from "../figma_app/410936";
function l() {
  return jsx(SvgComponent, {
    svg: A,
    className: "creator_fund_icon--icon--He--a"
  });
}
function m(e) {
  let t = renderI18nText("community.badge.creator_fund");
  return e.disableIcon ? jsx(E, {
    variant: "defaultOutline",
    children: t
  }) : jsx(Ex, {
    background: "white",
    height: e.height,
    border: e.border,
    children: jsxs(b3, {
      children: [jsx(OQ, {
        children: jsx(l, {})
      }), t]
    })
  });
}
export function $$h1({
  height: e,
  badges: t,
  border: i,
  disableIcon: r
}) {
  return t.some(e => e === BadgeType.CREATOR_FUND) ? jsx(m, {
    height: e,
    border: i,
    disableIcon: r
  }) : null;
}
export function $$g0(e) {
  let t = jsxs("a", {
    href: "https://figma.com/community-creators",
    target: "_blank",
    className: RL,
    onClick: e => {
      e.stopPropagation();
    },
    children: [renderI18nText("community.detail_view.creator_fund_tooltip"), jsx("span", {
      className: kz,
      children: renderI18nText("community.learn_more")
    })]
  });
  return jsx(m_, {
    preview: t,
    children: e.children
  });
}
export const v = $$g0;
export const n = $$h1;