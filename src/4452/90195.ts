import { yu, eU, Iz } from "../figma_app/27355";
import { Qw } from "../905/989992";
import { Jt, MT } from "../figma_app/330108";
import { bt } from "../905/270322";
import { ox } from "../figma_app/88768";
import { getPermissionsStateMemoized } from "../figma_app/642025";
import { ZM } from "../figma_app/329496";
let c = bt(e => {
  if ("loaded" !== e.orgTeams.status) return Qw.loading();
  let t = e.orgTeams.teams.filter(t => t.org_id === e.currentUserOrgId);
  return Qw.loaded(t);
});
let $$u3 = yu(c, ({
  target: e
}) => {
  let t = e.getStore();
  t.getState().orgTeams.status || t.dispatch(Jt({}));
  return () => {
    t.dispatch(MT());
  };
});
let m = bt(e => getPermissionsStateMemoized(e));
let _ = eU(e => {
  let t = e($$u3);
  let a = e(m);
  return t.transform(e => e.filter(e => ox(e, a)));
});
let p = eU(e => e(_).transform(e => ZM(e)));
let $$g2 = Iz(e => eU(t => t(p).transform(t => t[e] ?? 0)));
let $$h1 = eU(e => e(_).transform(e => e.filter(e => null === e.workspace_id || void 0 === e.workspace_id)));
let $$x0 = yu(c, ({
  target: e
}) => {
  let t = e.getStore();
  t.getState().orgTeams.status || t.dispatch(Jt({
    includeMemberCount: !0,
    includeProjectCount: !0,
    includeTopMembers: !1
  }));
  return () => {
    t.dispatch(MT());
  };
});
export const EK = $$x0;
export const Fd = $$h1;
export const aN = $$g2;
export const wT = $$u3;