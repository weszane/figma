import { useMemo } from "react";
import { Qw } from "../905/989992";
import { Rs, p } from "../figma_app/288654";
import { VI, DI } from "../figma_app/687776";
import { oGE, rH3 } from "../figma_app/43951";
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
    ...VI(e),
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
  let r = Rs(oGE, {
    projectId: e
  }, {
    enabled: t
  });
  return Qw.useTransform(r, e => e.project ? $$l3(e.project) : null);
}
export function $$c1(e) {
  return function (e, t = !0) {
    let r = useMemo(() => e.map(e => ({
      projectId: e
    })), [e]);
    let d = p(oGE, r, {
      enabled: t
    });
    return {
      projects: useMemo(() => Qw.all(d.map(e => e.result)).transform(t => {
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
            ...DI.disabled(),
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
  let s = p(rH3, r, {
    enabled: t
  });
  return useMemo(() => Qw.all(s.map(e => e.result)).transform(t => e.reduce((e, r, n) => (e[r] = !!t[n]?.project?.canRead, e), {})), [s, e]);
}
export const Cm = $$u0;
export const MD = $$c1;
export const YO = $$d2;
export const aQ = $$l3;