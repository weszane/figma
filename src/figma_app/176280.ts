import { jsx } from "react/jsx-runtime";
import { memo, useCallback } from "react";
import { C } from "../figma_app/938538";
export let $$s0 = memo(function ({
  toolId: e,
  tooltipText: t,
  tooltipShortcut: r,
  disabled: s = !1,
  secondary: o = !1,
  icon: l,
  activeToolId: d,
  onActivateTool: c,
  onDeactivateTool: u,
  onboardingKey: p,
  recordingKey: _ = `tool-${e}`,
  canBeActive: h = !0
}) {
  let m = h && e === d;
  let g = useCallback(() => {
    if (u && m) return u(e);
    c(e);
  }, [c, u, m, e]);
  return jsx(C, {
    "data-testid": `${t}-tool`,
    disabled: s,
    icon: l,
    isActive: m,
    onClick: g,
    onboardingKey: p,
    recordingKey: _,
    secondary: o,
    tooltipShortcut: r,
    tooltipText: t
  });
});
export const N = $$s0;