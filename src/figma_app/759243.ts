import { jsx } from "react/jsx-runtime";
import i from "classnames";
import { a as _$$a } from "../905/29104";
import { Ex, zE } from "../figma_app/919079";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { KindEnum } from "../905/129884";
var a = i;
export function $$u0({
  location: e,
  overrideText: t,
  hoverStyleClassName: r,
  onMouseUp: i,
  onPointerUp: u
}) {
  let p = !!i || !!u;
  let _ = p ? {
    dataTooltip: getI18nString("qa.learn_more"),
    dataTooltipType: KindEnum.TEXT,
    dataTooltipShowAbove: !0
  } : {};
  let h = _$$a() ? getI18nString("whiteboard.ai_modal.beta_badge") : getI18nString("qa.ai");
  return "" === t ? null : jsx(Ex, {
    className: a()(_$$s.font11.fontNormal.h16.px4.b1.bRadius5.mr0.hFitContent.$$if(p, _$$s.cursorPointer).$$if("MODAL" === e || "FILE_BROWSER_BAR" === e || "SLIDES_REWRITE_MODAL" === e, _$$s.colorTextSecondary.colorBorder).$$if("SUMMARIZE_NUDGE" === e, _$$s.colorTextOnbrand.colorBorderBrand).$$if("SUMMARIZE_NUDGE_DISABLED" === e, _$$s.colorTextOnbrand.colorBorderDisabled).$$if("INLINE_TOOLBAR" === e, _$$s.colorTextMenuSecondary.colorBorderMenu).$$if("SLIDES_REWRITE_MODAL" === e, _$$s.textBodySmall).$, r),
    color: zE.INVERT,
    subtle: !0,
    text: t ?? h,
    onMouseUp: i,
    onPointerUp: u,
    ..._
  });
}
export const v = $$u0;