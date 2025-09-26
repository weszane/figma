import { jsx } from "react/jsx-runtime";
import i from "classnames";
import { a as _$$a } from "../905/29104";
import { Badge, BadgeColor } from "../figma_app/919079";
import { cssBuilderInstance } from "../cssbuilder/589278";
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
  return "" === t ? null : jsx(Badge, {
    className: a()(cssBuilderInstance.font11.fontNormal.h16.px4.b1.bRadius5.mr0.hFitContent.if(p, cssBuilderInstance.cursorPointer).if("MODAL" === e || "FILE_BROWSER_BAR" === e || "SLIDES_REWRITE_MODAL" === e, cssBuilderInstance.colorTextSecondary.colorBorder).if("SUMMARIZE_NUDGE" === e, cssBuilderInstance.colorTextOnbrand.colorBorderBrand).if("SUMMARIZE_NUDGE_DISABLED" === e, cssBuilderInstance.colorTextOnbrand.colorBorderDisabled).if("INLINE_TOOLBAR" === e, cssBuilderInstance.colorTextMenuSecondary.colorBorderMenu).if("SLIDES_REWRITE_MODAL" === e, cssBuilderInstance.textBodySmall).$, r),
    color: BadgeColor.INVERT,
    subtle: !0,
    text: t ?? h,
    onMouseUp: i,
    onPointerUp: u,
    ..._
  });
}
export const v = $$u0;
