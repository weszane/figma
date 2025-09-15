import { useMemo, useCallback, useState, useEffect } from "react";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { TeamPermissions, TeamRoles } from "../figma_app/43951";
import { liveStoreInstance } from "../905/713695";
import { hasTeamPaidAccess } from "../figma_app/345997";
import { X, SN } from "../905/915142";
import { AccessLevelEnum } from "../905/557142";
export function $$c0(e) {
  let [t] = setupResourceAtomHandler(TeamPermissions({
    teamId: e
  }));
  return useMemo(() => t.transform(e => X(e)), [t]);
}
export function $$u1(e) {
  let [t] = setupResourceAtomHandler(TeamRoles({
    teamId: e
  }));
  return useMemo(() => t.transform(e => SN(e) ?? []), [t]);
}
export function $$m2({
  teamId: e,
  teamPermissions: t,
  initialValue: a
}) {
  let n = liveStoreInstance.Team.useValue(e).data;
  let r = useCallback(e => a || (!hasTeamPaidAccess(n) && e ? AccessLevelEnum.EDITOR : AccessLevelEnum.VIEWER), [a, n]);
  let [o, c] = useState(() => r(!!t?.canEdit));
  useEffect(() => {
    c(r(!!t?.canEdit));
  }, [t?.canEdit, r]);
  return {
    default: r(!!t?.canEdit),
    inviteLevel: o,
    setInviteLevel: c
  };
}
export const dr = $$c0;
export const eb = $$u1;
export const oU = $$m2;