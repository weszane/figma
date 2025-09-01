import { jsx, jsxs } from "react/jsx-runtime";
import { tx } from "../905/303541";
import { c } from "../905/391496";
import { m_ } from "../figma_app/209680";
import { s as _$$s } from "../905/875063";
import { RL, kz } from "../figma_app/410936";
export function $$d2(e) {
  return e.some(e => e === _$$s.FIGMA_PARTNER);
}
export function $$c0({
  badges: e
}, t, r) {
  return $$d2(e) ? jsx(c, {
    showBorder: t,
    is24x24: r
  }) : null;
}
export function $$u1(e) {
  let t = jsxs("a", {
    href: "https://www.figma.com/partners/",
    target: "_blank",
    className: RL,
    onClick: e => {
      e.stopPropagation();
    },
    children: [tx("community.detail_view.figma_partner_this_creator_is"), jsx("span", {
      className: kz,
      children: tx("community.learn_more")
    })]
  });
  return jsx(m_, {
    preview: t,
    children: e.children
  });
}
export const C2 = $$c0;
export const Gx = $$u1;
export const J3 = $$d2;