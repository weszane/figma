import { useMemo } from "react";
import { resourceUtils } from "../905/989992";
import { useSubscription, useMultiSubscription } from "../figma_app/288654";
import { getFileCreationPermissions, FileCreationPermissionsGenerator } from "../figma_app/687776";
import { ProjectTilePermissions, ProjectCanView } from "../figma_app/43951";
export function $$l3(e) {
  let t = e.canEdit;
  let r = !e.isOrphanedOrgProject;
  let n = e.canMove;
  let i = e.isEmpty;
  return {
    canEdit: t,
    canEditDescription: e.canEdit && !e.isEditingLockedForUser,
    canShare: r,
    canMove: n,
    canSkipDeletionConfirmation: i,
    ...getFileCreationPermissions(e),
    canTransferExternally: e.canTransferExternally,
    canTransferCopy: e.canTransferCopy,
    canTrash: e.canTrash,
    canTrashWithReasons: e.canTrashWithReasons,
    canRestore: e.canRestore,
    canPermanentlyDelete: e.canPermanentlyDelete,
    canConnect: e.canConnect,
    isPlanAdmin: !!e.planPermissions?.isAdmin,
    isPlanMember: !!e.planPermissions?.isMember,
    planCanConnectWithReasons: e.planPermissions?.canConnectWithReasons
  };
}
export function $$d2(e, t = !0) {
  let r = useSubscription(ProjectTilePermissions, {
    projectId: e
  }, {
    enabled: t
  });
  return resourceUtils.useTransform(r, e => e.project ? $$l3(e.project) : null);
}
export function $$c1(e) {
  return function (e, t = !0) {
    let r = useMemo(() => e.map(e => ({
      projectId: e
    })), [e]);
    let d = useMultiSubscription(ProjectTilePermissions, r, {
      enabled: t
    });
    return {
      projects: useMemo(() => resourceUtils.all(d.map(e => e.result)).transform(t => {
        let r = {};
        for (let n = 0; n < e.length; n++) {
          let i = e[n];
          let a = t[n]?.project;
          a ? r[i] = $$l3(a) : r[i] = {
            canEdit: !1,
            canShare: !1,
            canMove: !1,
            canEditDescription: !1,
            canSkipDeletionConfirmation: !1,
            ...FileCreationPermissionsGenerator.disabled(),
            canTransferExternally: !1,
            canTransferCopy: !1,
            canTrash: !1,
            canTrashWithReasons: {
              result: !1,
              publicDenyReasons: []
            },
            canRestore: !1,
            canPermanentlyDelete: !1,
            canConnect: !1,
            isPlanAdmin: !1,
            isPlanMember: !1,
            planCanConnectWithReasons: {
              result: !1,
              publicDenyReasons: []
            }
          };
        }
        return r;
      }), [d, e])
    };
  }(useMemo(() => {
    let t = [];
    e.forEach(e => {
      let r = e.id;
      t.push(r);
    });
    return t;
  }, [e]));
}
export function $$u0(e, t = !0) {
  let r = useMemo(() => e.map(e => ({
    projectId: e
  })), [e]);
  let s = useMultiSubscription(ProjectCanView, r, {
    enabled: t
  });
  return useMemo(() => resourceUtils.all(s.map(e => e.result)).transform(t => e.reduce((e, r, n) => (e[r] = !!t[n]?.project?.canRead, e), {})), [s, e]);
}
export const Cm = $$u0;
export const MD = $$c1;
export const YO = $$d2;
export const aQ = $$l3;