import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { P } from "../905/175083";
import { AppStateTsApi, SelfDesignType } from "../figma_app/763686";
import { X } from "../905/350405";
import { a as _$$a } from "../figma_app/234156";
import { getI18nString } from "../905/303541";
import { getObservableValue } from "../figma_app/84367";
import { uy } from "../figma_app/835688";
import { canEnterDesignMode } from "../figma_app/357367";
export function $$h0({
  onToggleMode: e,
  getTooltipShortcut: t,
  modeIdentifier: l,
  modeIcon: h,
  modeLabel: p
}) {
  let g = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF);
  let f = canEnterDesignMode();
  let m = useCallback(t => {
    f && e("design" === t ? SelfDesignType.DESIGN : SelfDesignType.SELF);
  }, [f, e]);
  let v = useMemo(() => [{
    mode: l,
    icon: h,
    label: p,
    tooltipShortcut: t?.(SelfDesignType.SELF, g)
  }, {
    mode: "design",
    icon: jsx(P, {}),
    label: f ? getI18nString("fullscreen.toolbar.toolbelt_mode_segmented_control.design") : getI18nString("slides.inserts_menu.design_mode_upsell"),
    tooltipShortcut: f ? t?.(SelfDesignType.DESIGN, g) : void 0,
    disabled: !f
  }], [l, h, p, t, g, f]);
  return jsxs(Fragment, {
    children: [jsx(X, {}), jsx(_$$a, {
      "data-testid": "design-mode-toggle",
      modes: v,
      activeMode: g === SelfDesignType.DESIGN ? "design" : l,
      onModeSwitch: m,
      onboardingKey: uy,
      recordingKey: g === SelfDesignType.SELF ? "design-tool-mode-toggle" : "self-tool-mode-toggle"
    })]
  });
}
export const u = $$h0;