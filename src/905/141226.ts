import { jsx } from "react/jsx-runtime";
import { ButtonPrimitive } from "../905/632989";
import { B } from "../905/950875";
import s from "classnames";
import { getI18nString } from "../905/303541";
import { DesignIssueType } from "../905/49095";
import { KindEnum } from "../905/129884";
var o = s;
export function $$u1(e) {
  switch (e.id) {
    case DesignIssueType.NoStyleForColor:
      return getI18nString("dev_handoff.code.hints.color_missing_style");
    case DesignIssueType.VariableNotResolved:
      return getI18nString("dev_handoff.code.hints.variable_not_resolved");
    case DesignIssueType.AbsolutePosition:
      return getI18nString("dev_handoff.code.hints.absolute_position", {
        name: e.name
      });
    case DesignIssueType.BordersDontTakeUpSpace:
      return getI18nString("dev_handoff.code.hints.borders_dont_take_up_space");
    case DesignIssueType.SinglePaint:
      return getI18nString("dev_handoff.code.hints.single_paint");
    case DesignIssueType.UnsupportedPaint:
      return getI18nString("dev_handoff.code.hints.unsupported_paint");
    case DesignIssueType.UnsupportedGradientPaint:
      return getI18nString("dev_handoff.code.hints.unsupported_gradient_paint");
    case DesignIssueType.LeadingTrim:
      return getI18nString("dev_handoff.code.hints.leading_trim");
    case DesignIssueType.BackgroundBlendModePlusLighterDarker:
      return getI18nString("dev_handoff.code.hints.background_blend_mode_plus_lighter_darker", {
        value: e.value
      });
    case DesignIssueType.PlusDarker:
      return getI18nString("dev_handoff.code.hints.plus_darker");
    case DesignIssueType.SwiftUISeparateBorderWidth:
      return getI18nString("dev_handoff.code.hints.swift_ui_separate_border_width");
    case DesignIssueType.SwiftUIBlurNoSpread:
      return getI18nString("dev_handoff.code.hints.swift_ui_blur_no_spread");
    case DesignIssueType.SwiftUIOnlySingleFillForShapes:
      return getI18nString("dev_handoff.code.hints.swift_ui_only_single_fill_for_shapes");
    case DesignIssueType.SwiftUISeparateCornerRadius:
      return getI18nString("dev_handoff.code.hints.swift_ui_separate_corner_radius");
    case DesignIssueType.SwiftUISpacersForSpaceBetween:
      return getI18nString("dev_handoff.code.hints.swift_ui_spacers_for_space_between");
    case DesignIssueType.ComposeSeparateBorderWidth:
      return getI18nString("dev_handoff.code.hints.compose_separate_border_width");
    case DesignIssueType.ComposeShadowIncompatibility:
      return getI18nString("dev_handoff.code.hints.compose_shadow_incompatibility");
    case DesignIssueType.ComposeBlurTip:
      return getI18nString("dev_handoff.code.hints.compose_blur_tip");
    case DesignIssueType.DisplayP3Fallback:
      return getI18nString("dev_handoff.code.hints.display_p3_fallback");
    case DesignIssueType.EffectsInSvg:
      return getI18nString("dev_handoff.code.hints.effects_in_svg");
    case DesignIssueType.SwiftUIBackgroundBlur:
      return getI18nString("dev_handoff.code.hints.swift_ui_background_blur");
  }
}
export function $$p0({
  hint: e,
  hidden: t
}) {
  return jsx("div", {
    className: o()("code_hints--hintButton--Zdf0R", {
      "code_hints--hidden--Ka-iU": t
    }),
    children: jsx(ButtonPrimitive, {
      className: "code_hints--hintButtonInner--uLch1",
      "aria-label": e,
      htmlAttributes: {
        "data-tooltip": e,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip-show-immediately": !0
      },
      children: jsx(B, {})
    })
  });
}
export const A = $$p0;
export const x = $$u1;