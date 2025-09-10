import { useMemo, useCallback, useState, useEffect } from "react";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { TeamPermissions, TeamRoles } from "../figma_app/43951";
import { M4 } from "../905/713695";
import { hasTeamPaidAccess } from "../figma_app/345997";
import { X, SN } from "../905/915142";
import { AccessLevelEnum } from "../905/557142";
export function $$c0(e) {
  let [n] = setupResourceAtomHandler(TeamPermissions({
    teamId: e
  }));
  return useMemo(() => n.transform(e => X(e)), [n]);
}
export function $$p1(e) {
  let [n] = setupResourceAtomHandler(TeamRoles({
    teamId: e
  }));
  return useMemo(() => n.transform(e => SN(e) ?? []), [n]);
}
export function $$u2({
  teamId: e,
  teamPermissions: n,
  initialValue: t
}) {
  let a = M4.Team.useValue(e).data;
  let r = useCallback(e => t || (!hasTeamPaidAccess(a) && e ? AccessLevelEnum.EDITOR : AccessLevelEnum.VIEWER), [t, a]);
  let [o, c] = useState(() => r(!!n?.canEdit));
  useEffect(() => {
    c(r(!!n?.canEdit));
  }, [n?.canEdit, r]);
  return {
    default: r(!!n?.canEdit),
    inviteLevel: o,
    setInviteLevel: c
  };
}
export const dr = $$c0;
export const eb = $$p1;
export const oU = $$u2;