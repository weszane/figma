import { jsx } from "react/jsx-runtime";
import r from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
var a = r;
var $$l1 = (e => (e.DEFAULT = "default", e.BRAND = "brand", e.ON_MENU = "on_menu", e.UI3 = "ui3", e.SLIDES_SPEAKER_NOTES = "slides_speaker_notes", e))($$l1 || {});
export function $$d0({
  children: e,
  variant: t = "default",
  focused: i = !1
}) {
  let r = a()(_$$s.b1.flex.h16.py0.px4.font11.itemsCenter.justifyCenter.gap4.bRadius5.match(t, {
    default: _$$s.colorBorder.colorTextSecondary,
    brand: _$$s.colorTextBrand,
    on_menu: _$$s.colorTextMenuSecondary,
    ui3: _$$s.colorBorderBrand.colorTextBrand,
    slides_speaker_notes: _$$s.colorTextTertiary
  }).$, {
    "badge--menuBadge--va-CK": "on_menu" === t,
    "badge--speakerNotes--glkoC": "slides_speaker_notes" === t
  });
  let l = styleBuilderInstance.$$if(i, styleBuilderInstance.add({
    borderColor: "var(--color-border-selected)"
  })).$;
  return jsx("div", {
    className: r,
    style: l,
    "data-testid": "qav2-item-badge",
    children: e
  });
}
export const E = $$d0;
export const x = $$l1;