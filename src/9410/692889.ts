import { jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { IconButton } from "../905/443068";
import { Button } from "../905/521428";
import { g as _$$g } from "../905/757007";
import { W } from "../905/569454";
import { getFeatureFlags } from "../905/601108";
import { renderI18nText, getI18nString } from "../905/303541";
import { useCanAccessFullDevMode, useCanUseDevModeDemoFile } from "../figma_app/473493";
import { useHasParentOrgId } from "../905/882262";
import { z4 } from "../905/37051";
import { Fk } from "../figma_app/167249";
import { KindEnum } from "../905/129884";
export function $$g0({
  nodeId: e,
  sourceForLogging: t,
  onboardingKey: i,
  isMinimal: g
}) {
  let _ = useHasParentOrgId();
  let x = useCanAccessFullDevMode();
  let y = useCanUseDevModeDemoFile();
  let b = _ && x && !y;
  let {
    hasReadyStatus,
    hasCompletedStatus
  } = Fk((e, t) => {
    let i = e?.get(t ?? "");
    return {
      hasReadyStatus: i?.hasReadyStatus,
      hasCompletedStatus: i?.hasCompletedStatus
    };
  }, e);
  let E = useRef(hasReadyStatus);
  let T = useRef(hasCompletedStatus);
  let [w, S] = useState(!1);
  useEffect(() => {
    if (!getFeatureFlags().dt_interactive_inspection_m2) return;
    (hasReadyStatus || hasCompletedStatus) && S(!1);
    let e = E.current && !hasReadyStatus;
    let t = T.current && !hasCompletedStatus;
    (e || t) && S(!0);
  }, [hasCompletedStatus, hasReadyStatus]);
  let j = useCallback(() => {
    b && e && z4.setNodesCompleted([e], `${t}-complete-button`);
  }, [b, e, t]);
  let I = useCallback(() => {
    b && e && z4.setNodesReady(!0, [e], `${t}-complete-button`, null);
  }, [b, e, t]);
  let k = getFeatureFlags().dt_interactive_inspection_m2 && !hasCompletedStatus && !hasReadyStatus && !w;
  let N = useMemo(() => hasReadyStatus ? j : hasCompletedStatus || k ? I : void 0, [hasCompletedStatus, hasReadyStatus, j, I, k]);
  let A = useMemo(() => hasCompletedStatus ? renderI18nText("dev_handoff.status.completed") : k ? renderI18nText("dev_handoff.status.mark_as_ready_for_first_time") : renderI18nText("dev_handoff.status.mark_completed"), [hasCompletedStatus, k]);
  let O = useMemo(() => hasCompletedStatus ? jsx(_$$g, {
    "data-testid": "filled-icon"
  }) : jsx(W, {
    "data-testid": "empty-icon"
  }), [hasCompletedStatus]);
  let L = useMemo(() => hasReadyStatus ? getI18nString("dev_handoff.status.mark_as_completed") : hasCompletedStatus ? getI18nString("dev_handoff.status.mark_as_ready") : k ? getI18nString("dev_handoff.status.mark_as_ready_for_first_time") : getI18nString("dev_handoff.workflows.focus_view.complete_button.status_removed"), [hasCompletedStatus, hasReadyStatus, k]);
  let R = useMemo(() => hasReadyStatus ? getI18nString("dev_handoff.overview_mode.tooltip.upgrade_mark_completed") : hasCompletedStatus ? getI18nString("dev_handoff.overview_mode.tooltip.upgrade_mark_incomplete") : k ? getI18nString("dev_handoff.overview_mode.tooltip.upgrade_mark_ready") : getI18nString("dev_handoff.workflows.focus_view.complete_button.status_removed"), [hasCompletedStatus, hasReadyStatus, k]);
  if (!e) return null;
  if (g) return hasReadyStatus || hasCompletedStatus ? jsx(IconButton, {
    onClick: N,
    disabled: !b,
    "aria-label": L,
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": b ? L : R,
      "data-testid": "change-status-icon-button"
    },
    children: O
  }) : null;
  let D = getFeatureFlags().dt_interactive_inspection_m2 ? w : !hasReadyStatus && !hasCompletedStatus;
  let M = !b || D;
  return jsx(Button, {
    variant: "secondary",
    onClick: N,
    disabled: M,
    "aria-label": L,
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": M ? R : void 0,
      "data-tooltip-text-left": !0,
      "data-onboarding-key": i,
      "data-testid": "change-status-button"
    },
    iconPrefix: O,
    children: A
  });
}
export const p = $$g0;