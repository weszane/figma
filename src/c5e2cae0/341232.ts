import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { sx } from "../905/941192";
import { TrackedButton } from "../figma_app/831799";
import { A } from "../c5e2cae0/809027";
import { A as _$$A } from "../c5e2cae0/97605";
let c = e => e.maxSeatsCount ? Math.min(e.maxSeatsCount, 99) : 99;
export function $$m0(e) {
  return jsx(Fragment, {
    children: jsxs("div", {
      className: _$$s.flex.itemsCenter.$,
      children: [jsxs("div", {
        className: "seat_counter--seatCounter--DiuEb",
        children: [jsx(TrackedButton, {
          disabled: e.numSeats <= e.minSeatsCount,
          innerText: `remove additional ${e.billableProductKey} seat`,
          className: "seat_counter--minusButton--e0dEs",
          onClick: e.decrementSeats,
          dataTestId: `remove-additional-${e.billableProductKey}`,
          children: jsx(SvgComponent, {
            svg: A
          })
        }), jsx("input", {
          value: e.numSeats,
          maxLength: 2,
          onChange: e.updateAdditionalSeatsText,
          className: "seat_counter--additionalSeatsInput--pOPr1",
          onFocus: e => e.target.select()
        }), jsx(TrackedButton, {
          disabled: e.numSeats >= c(e),
          innerText: `add additional ${e.billableProductKey} seat`,
          className: "seat_counter--plusButton--ZEWEz",
          onClick: e.incrementSeats,
          dataTestId: `add-additional-${e.billableProductKey}`,
          children: jsx(SvgComponent, {
            svg: _$$A
          })
        })]
      }), jsxs("div", {
        children: [jsx("div", {
          className: "seat_counter--headerText--xIHXf",
          children: e.headerText
        }), e.headerSubText && jsx("div", {
          className: "seat_counter--headerSubText--c9SXC seat_counter--headerText--xIHXf",
          children: e.headerSubText
        }), e.clarificationText && jsx("span", {
          style: sx.colorText.colorBgSecondary.h16.pl4.pr4.mt8.bRadius1.inlineBlock.add({
            fontSize: "9px"
          }).$,
          children: e.clarificationText
        })]
      })]
    })
  });
}
export function $$_1(e, t) {
  return a => {
    if ("" === a.target.value) {
      e(0);
      return;
    }
    let s = parseInt(a.target.value);
    isNaN(s) || (s > 99 ? e(99) : t && s > t ? e(t) : e(s));
  };
}
export const s = $$m0;
export const K = $$_1;