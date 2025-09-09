import { useMemo } from "react";
import { ResourceConnectedUsers, SharingGroupsByResourceConnection, ProjectActiveResourceConnections } from "../figma_app/43951";
import { useSubscription } from "../figma_app/288654";
export function $$s1(e, t, i = !0) {
  let o = useSubscription(ResourceConnectedUsers, {
    id: e,
    isHostPlanAdmin: t
  }, {
    enabled: !!e && i
  });
  return useMemo(() => o.transform(e => {
    let t = e?.resourceConnection?.resourceConnectedUsersWithPlan;
    let i = e?.resourceConnection?.totalResourceConnectedUsers;
    return {
      resourceConnectedUsersWithPlan: t?.map(e => e.user && {
        user: {
          id: e.user.id,
          name: e.user.name || void 0,
          img_url: e.user.imgUrl,
          handle: e.user.handle,
          email: e.user.email || void 0
        },
        planId: e.planParentId,
        planName: e.planName,
        planImgUrl: e.planImgUrl,
        level: e.level,
        isFileRole: e.isFileRole
      }).sort((e, t) => e && e.isFileRole ? 1 : t && t.isFileRole ? -1 : 0) || [],
      totalResourceConnectedUsers: Number(i) || 0
    };
  }), [o]);
}
export function $$o2(e) {
  let t = useSubscription(SharingGroupsByResourceConnection, {
    resourceConnectionId: e ?? ""
  }, {
    enabled: !!e
  });
  return useMemo(() => t.transform(e => {
    let t = e?.resourceConnectionSharingGroups;
    return t?.length || 0;
  }), [t]);
}
export function $$l0(e, t = !0) {
  let i = useSubscription(ProjectActiveResourceConnections, {
    projectId: e ?? ""
  }, {
    enabled: !!e && t
  });
  return useMemo(() => i.transform(e => e?.project?.activeProjectResourceConnections?.map(e => ({
    id: e.id,
    hostPlanName: e.hostPlanName,
    connectedPlanName: e.connectedPlanName
  }))), [i]);
}
export const AT = $$l0;
export const Bs = $$s1;
export const Hg = $$o2;