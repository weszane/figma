import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import n from "classnames";
import { P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { gH } from "../7222/396421";
import { ag } from "../9410/356923";
var a = n;
export function $$u0({
  modules: e
}) {
  let {
    onShowSeparatorScroll
  } = gH();
  if (!e.length) return null;
  let i = e[0].library_key;
  return jsx(P, {
    className: _$$s.px16.hFull.$,
    onScroll: onShowSeparatorScroll,
    children: jsx($$m3, {
      children: e.map((t, i) => jsx(ag, {
        module: t,
        "aria-label": getI18nString("slides.templates.template_picker.slide_button.aria_label", {
          index: i + 1,
          total: e.length
        })
      }, t.id))
    }, i)
  });
}
export function $$p2({
  children: e
}) {
  return jsx("div", {
    className: _$$s.flex.flexWrap.pb8.gap0.$,
    children: e
  });
}
export function $$h1({
  title: e,
  children: t,
  rightHeaderCta: i
}) {
  let n = e || !!i;
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: a()({
        [_$$s.flex.justifyBetween.alignLeft.itemsCenter.pt16.pb8.px8.$]: n
      }),
      children: [e && jsx("div", {
        className: _$$s.font13.colorText.fontSemiBold.fontInter.noWrap.overflowHidden.ellipsis.pr4.$,
        children: e
      }), i]
    }), jsx($$p2, {
      children: t
    })]
  });
}
export function $$m3({
  children: e
}) {
  return jsx("div", {
    className: _$$s.flex.flexWrap.pb16.gap8.$,
    children: e
  });
}
export const Dh = $$u0;
export const MR = $$h1;
export const p9 = $$p2;
export const y0 = $$m3;