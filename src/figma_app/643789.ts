import { useMemo } from "react";
import { resourceUtils } from "../905/989992";
import { p } from "../figma_app/288654";
import { FMemberRoleType } from "../figma_app/191312";
import { y_L, Bl3 } from "../figma_app/43951";
import { A8 } from "../figma_app/465071";
import { e6 } from "../905/557142";
export function $$c1(e) {
  let t = e.canRead;
  let r = e.canAdmin;
  let n = e.canDelete;
  let i = !!(e.roleOnObjectForUser && e.roleOnObjectForUser.level >= e6.VIEWER);
  let a = !!e.currentPrivilegedOrgUser;
  return {
    canAdminOrg: !!(e.currentPlanUser && A8(e.currentPlanUser, FMemberRoleType.ADMIN)),
    canDelete: n,
    canView: t,
    isInTeam: i,
    isOrgMember: a,
    canAdmin: r
  };
}
export function $$u2(e) {
  return function (e, t = !0) {
    let r = useMemo(() => e.map(e => ({
      teamId: e
    })), [e]);
    let s = p(y_L, r, {
      enabled: t
    });
    return {
      teams: useMemo(() => resourceUtils.all(s.map(e => e.result)).transform(t => {
        let r = {};
        for (let n = 0; n < e.length; n++) {
          let i = e[n];
          let a = t[n]?.team;
          a ? r[i] = $$c1(a) : r[i] = {
            canAdmin: !1,
            canAdminOrg: !1,
            canDelete: !1,
            canView: !1,
            isInTeam: !1,
            isOrgMember: !1
          };
        }
        return r;
      }), [s, e])
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
export function $$p0(e, t = !0) {
  let r = useMemo(() => e.map(e => ({
    id: e
  })), [e]);
  let s = p(Bl3, r, {
    enabled: t
  });
  return useMemo(() => resourceUtils.all(s.map(e => e.result)).transform(t => e.reduce((e, r, n) => (e[r] = !!t[n]?.team?.hasPermission, e), {})), [s, e]);
}
export const GG = $$p0;
export const ci = $$c1;
export const dr = $$u2;