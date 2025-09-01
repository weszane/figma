import { jsx } from "react/jsx-runtime";
import { memo, useMemo } from "react";
import { L } from "../905/857916";
import { t as _$$t } from "../905/303541";
import { Ib } from "../905/129884";
let a = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M8.5 7.024c.276-.027.5.2.5.476s-.224.496-.498.531a4 4 0 1 0 4.467 4.468c.034-.274.256-.5.532-.5s.502.225.475.5a5.002 5.002 0 0 1-9.806.796 5 5 0 0 1 4.33-6.27m3.002.647a5 5 0 1 1 2.999 9.305.463.463 0 0 1-.5-.474c0-.277.227-.497.5-.531a4 4 0 1 0-4.47-4.469c-.034.273-.254.498-.53.498s-.503-.225-.475-.5a5 5 0 0 1 2.476-3.83"
    })
  });
});
export function $$d0(e) {
  let t = useMemo(() => e.hostPlanName && e.connectedPlanName ? {
    "data-tooltip": _$$t("file_browser.tooltip.connected_project", {
      hostPlanName: e.hostPlanName,
      connectedPlanName: e.connectedPlanName
    }),
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip-timeout": 50,
    "data-tooltip-max-width": 300,
    "data-onboarding-key": e.dataOnboardingKey
  } : {}, [e.hostPlanName, e.connectedPlanName, e.dataOnboardingKey]);
  return jsx("div", {
    ...t,
    className: e.large ? "connected_project_badge--badgeContainer--IyDx-" : void 0,
    style: {
      pointerEvents: "auto"
    },
    children: e.large ? jsx(a, {
      style: {
        "--color-icon": "var(--color-icon-brand)"
      }
    }) : jsx(L, {
      style: {
        "--color-icon": "var(--color-icon-brand)"
      }
    })
  });
}
export const W = $$d0;