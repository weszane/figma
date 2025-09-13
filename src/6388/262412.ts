import { jsx } from "react/jsx-runtime";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { KindEnum } from "../905/129884";
import { w2 } from "../figma_app/178475";
export function $$a0({
  "data-tooltip-type": e = KindEnum.TEXT,
  ...t
}) {
  return jsx(w2, {
    childrenAtEnd: !0,
    "data-tooltip-type": e,
    decimals: 0,
    hidePercentSign: !0,
    inputClassName: _$$s.w64.br0.$,
    tooltipForScreenReadersOnly: !1,
    ...t,
    children: jsx("span", {
      className: _$$s.flex.w14.justifyEnd.pr4.eventsNone.colorTextSecondary.$,
      children: renderI18nText("fullscreen.scrubbable.percent")
    })
  });
}
export const Y = $$a0;