import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { P } from "../905/175083";
import { Ez5, nQ7 } from "../figma_app/763686";
import { X } from "../905/350405";
import { a as _$$a } from "../figma_app/234156";
import { t as _$$t } from "../905/303541";
import { ut } from "../figma_app/84367";
import { uy } from "../figma_app/835688";
import { Bk } from "../figma_app/357367";
export function $$h0({
  onToggleMode: e,
  getTooltipShortcut: t,
  modeIdentifier: l,
  modeIcon: h,
  modeLabel: p
}) {
  let g = ut(Ez5?.interopToolMode(), nQ7.SELF);
  let f = Bk();
  let m = useCallback(t => {
    f && e("design" === t ? nQ7.DESIGN : nQ7.SELF);
  }, [f, e]);
  let v = useMemo(() => [{
    mode: l,
    icon: h,
    label: p,
    tooltipShortcut: t?.(nQ7.SELF, g)
  }, {
    mode: "design",
    icon: jsx(P, {}),
    label: f ? _$$t("fullscreen.toolbar.toolbelt_mode_segmented_control.design") : _$$t("slides.inserts_menu.design_mode_upsell"),
    tooltipShortcut: f ? t?.(nQ7.DESIGN, g) : void 0,
    disabled: !f
  }], [l, h, p, t, g, f]);
  return jsxs(Fragment, {
    children: [jsx(X, {}), jsx(_$$a, {
      "data-testid": "design-mode-toggle",
      modes: v,
      activeMode: g === nQ7.DESIGN ? "design" : l,
      onModeSwitch: m,
      onboardingKey: uy,
      recordingKey: g === nQ7.SELF ? "design-tool-mode-toggle" : "self-tool-mode-toggle"
    })]
  });
}
export const u = $$h0;