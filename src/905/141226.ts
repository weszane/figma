import { jsx } from "react/jsx-runtime";
import { E } from "../905/632989";
import { B } from "../905/950875";
import s from "classnames";
import { getI18nString } from "../905/303541";
import { eo } from "../905/49095";
import { Ib } from "../905/129884";
var o = s;
export function $$u1(e) {
  switch (e.id) {
    case eo.NoStyleForColor:
      return getI18nString("dev_handoff.code.hints.color_missing_style");
    case eo.VariableNotResolved:
      return getI18nString("dev_handoff.code.hints.variable_not_resolved");
    case eo.AbsolutePosition:
      return getI18nString("dev_handoff.code.hints.absolute_position", {
        name: e.name
      });
    case eo.BordersDontTakeUpSpace:
      return getI18nString("dev_handoff.code.hints.borders_dont_take_up_space");
    case eo.SinglePaint:
      return getI18nString("dev_handoff.code.hints.single_paint");
    case eo.UnsupportedPaint:
      return getI18nString("dev_handoff.code.hints.unsupported_paint");
    case eo.UnsupportedGradientPaint:
      return getI18nString("dev_handoff.code.hints.unsupported_gradient_paint");
    case eo.LeadingTrim:
      return getI18nString("dev_handoff.code.hints.leading_trim");
    case eo.BackgroundBlendModePlusLighterDarker:
      return getI18nString("dev_handoff.code.hints.background_blend_mode_plus_lighter_darker", {
        value: e.value
      });
    case eo.PlusDarker:
      return getI18nString("dev_handoff.code.hints.plus_darker");
    case eo.SwiftUISeparateBorderWidth:
      return getI18nString("dev_handoff.code.hints.swift_ui_separate_border_width");
    case eo.SwiftUIBlurNoSpread:
      return getI18nString("dev_handoff.code.hints.swift_ui_blur_no_spread");
    case eo.SwiftUIOnlySingleFillForShapes:
      return getI18nString("dev_handoff.code.hints.swift_ui_only_single_fill_for_shapes");
    case eo.SwiftUISeparateCornerRadius:
      return getI18nString("dev_handoff.code.hints.swift_ui_separate_corner_radius");
    case eo.SwiftUISpacersForSpaceBetween:
      return getI18nString("dev_handoff.code.hints.swift_ui_spacers_for_space_between");
    case eo.ComposeSeparateBorderWidth:
      return getI18nString("dev_handoff.code.hints.compose_separate_border_width");
    case eo.ComposeShadowIncompatibility:
      return getI18nString("dev_handoff.code.hints.compose_shadow_incompatibility");
    case eo.ComposeBlurTip:
      return getI18nString("dev_handoff.code.hints.compose_blur_tip");
    case eo.DisplayP3Fallback:
      return getI18nString("dev_handoff.code.hints.display_p3_fallback");
    case eo.EffectsInSvg:
      return getI18nString("dev_handoff.code.hints.effects_in_svg");
    case eo.SwiftUIBackgroundBlur:
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
    children: jsx(E, {
      className: "code_hints--hintButtonInner--uLch1",
      "aria-label": e,
      htmlAttributes: {
        "data-tooltip": e,
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip-show-immediately": !0
      },
      children: jsx(B, {})
    })
  });
}
export const A = $$p0;
export const x = $$u1;