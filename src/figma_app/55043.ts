import { useState, useCallback } from "react";
import { wA } from "../vendor/514228";
import { lQ } from "../905/934246";
import { az } from "../905/449184";
import { Rs } from "../figma_app/288654";
import { u as _$$u } from "../905/918498";
import { b } from "../905/723768";
import { to } from "../905/156213";
import { F } from "../905/224";
import { FPlanNameType, FOrganizationLevelType } from "../figma_app/191312";
import { VTr } from "../figma_app/43951";
import { T5 } from "../figma_app/465071";
import { b as _$$b } from "../905/165519";
import { Bi } from "../905/652992";
import { DV } from "../905/739964";
export function $$E1(e, t) {
  let [r, a] = useState(!1);
  let o = wA();
  let l = T5("useConnectedProjectsStarterTeamPaywall").unwrapOr(null);
  return useCallback(() => {
    if (!l || r) return null;
    l.tier === FPlanNameType.STARTER && l.key.type === FOrganizationLevelType.TEAM ? (az.trackDefinedEvent("workflow.connected_project_invite_starter_team_paywall_hit", {
      planId: l.key.type,
      planType: l.key.parentId || void 0,
      planTier: l.tier,
      resourceConnectionInviteId: t
    }), o(to({
      type: DV,
      data: {
        team: {
          id: l.key.parentId || "",
          name: l.name || ""
        },
        resource: Bi.CONNECTED_PROJECTS,
        editorType: null,
        currentPlan: F.Plan.STARTER,
        upsellPlan: F.Plan.PRO,
        upsellSource: _$$b.CONNECTED_PROJECT_INVITE
      }
    })), a(!0)) : e();
  }, [l, e, o, t, r, a]);
}
export function $$y0(e, t, r) {
  let u = wA();
  let h = Rs(VTr, {
    planParentId: e?.parentId || "",
    planType: e?.type || FOrganizationLevelType.TEAM
  }, {
    enabled: !!e?.parentId
  });
  let m = "loaded" === h.status ? h.data.plan : null;
  return useCallback(() => {
    if (!m) return lQ;
    m && m.connectionCount >= b[m.tier] && !m.unlimitedConnectionsEnabled && !m.testingOnlyUnlimitedConnectionsEnabled ? (az.trackDefinedEvent("workflow.connected_projects_maximum_connections_paywall_hit", {
      planId: m.key.parentId || void 0,
      planType: m.key.type,
      planTier: m.tier,
      numConnections: m.connectionCount,
      resourceConnectionInviteId: r
    }), u(to({
      type: _$$u,
      data: {
        plan: m
      }
    }))) : t();
  }, [m, t, u, r]);
}
export const N = $$y0;
export const t = $$E1;