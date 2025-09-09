import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { FUserRoleType } from "../figma_app/191312";
import { G } from "../figma_app/66216";
import { sS, q5 } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { mp } from "../905/772425";
let c = null;
let u = async e => {
  if (c?.fileKey === e && performance.now() - c.timeCached < 3e5) return await c.usersPromise;
  let t = G.getFileUsers({
    fileKey: e
  }).then(e => ({
    users: e.data.meta.users,
    pendingEmails: e.data.meta.pending_emails,
    protoUsers: e.data.meta.proto_users || []
  }));
  c = {
    fileKey: e,
    timeCached: performance.now(),
    usersPromise: t
  };
  return await c.usersPromise;
};
export function $$p0() {
  c = null;
}
export function $$m1(e) {
  let t = useSelector(sS);
  let [i, a] = useState(null);
  useEffect(() => {
    if (!t || !e) {
      a(null);
      return;
    }
    let i = !0;
    u(t).then(e => {
      i && a(e);
    }).catch(() => {
      a(null);
    });
    return () => {
      i = !1;
    };
  }, [t, e]);
  return i;
}
export function $$h2({
  maxResultsCount: e,
  api: t,
  includeHiResAvatars: i,
  checkPermissions: s,
  feedPostUuid: c
} = {}) {
  let u = q5();
  let p = u?.teamId;
  let m = u?.key;
  let g = u?.parentOrgId || null;
  let f = selectCurrentUser();
  let _ = useSelector(e => e.orgUsersByOrgId);
  let A = useSelector(e => e.contacts.users);
  let y = !1;
  if (g && f) {
    let e = _[g];
    let t = e && e[f.id];
    y = !!t && t.permission === FUserRoleType.GUEST;
  }
  let b = useMemo(() => {
    let e = [];
    m && (g && y || !p) && (e = [...A], f && e.push(f));
    return e;
  }, [g, f, m, p, y, A]);
  return useMemo(() => mp({
    currentOrgId: g,
    teamId: p,
    users: b,
    fileKey: m,
    maxResultsCount: e,
    api: t,
    includeHiResAvatars: !!i,
    checkPermissions: s,
    feedPostUuid: c
  }), [g, p, b, m, e, t, i, s, c]);
}
export const C0 = $$p0;
export const Qt = $$m1;
export const zW = $$h2;