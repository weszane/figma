import { useAtomWithSubscription } from "../figma_app/27355";
import { FJ } from "../905/508367";
import { Rs } from "../figma_app/288654";
import { IT } from "../figma_app/566371";
import { tS } from "../figma_app/516028";
import { dq } from "../905/845253";
import { UserAvatarView } from "../figma_app/43951";
import { M4 } from "../905/713695";
import { ol } from "../figma_app/598018";
import { rK } from "../figma_app/72338";
import { Yr } from "../figma_app/325912";
import { lA, TT, YF } from "../figma_app/952035";
export function $$m9() {
  let e = dq();
  let t = ol();
  let r = tS() || "";
  return () => {
    let n = Yr;
    e ? n += `?org_id=${encodeURIComponent(e)}&file_key=${encodeURIComponent(r)}` : t?.id && (n += `?team_id=${encodeURIComponent(t.id)}&file_key=${encodeURIComponent(r)}`);
    let a = FJ(n, "_blank");
    window.addEventListener("message", e => {
      e.data && "child-redirect-complete" === e.data.type && a?.close();
    });
  };
}
export function $$g3({
  disabled: e = !1
} = {}) {
  let {
    activeProjects,
    isLoading
  } = $$I6(e);
  let {
    organization,
    isLoading: _isLoading
  } = $$v7(e);
  let a = organization?.plan === "free";
  let s = activeProjects?.length;
  return {
    needsToPauseProject: a && s >= 2,
    isLoading: isLoading || _isLoading
  };
}
export function $$f10() {
  let e = tS();
  let t = lA(e ?? "");
  let r = !!t.authenticated;
  let n = !!t.expired;
  let i = !t.isLoading && r && !n;
  let {
    connectedProject,
    connectedProjectExpired,
    isConnectedNonOwner,
    projectOwnerId,
    isLoading
  } = $$A1();
  let {
    existingProjects,
    isLoading: _isLoading2
  } = $$S8(!i);
  return {
    existingProjects,
    connectedProject,
    connectedProjectExpired,
    isConnectedNonOwner,
    projectOwnerId,
    authenticated: r,
    authenticationExpired: n,
    isLoading: _isLoading2 || isLoading || !!t.isLoading
  };
}
export async function $$E0(e) {
  if (!e) return !1;
  let t = TT({
    fileKey: e
  });
  let r = M4.getCachedData(t);
  if (null !== r) return !!r.connectedProject;
  try {
    return !!(await M4.fetch(t)).connectedProject;
  } catch (e) {
    console.error("Failed to check Supabase connection:", e);
    return !1;
  }
}
export let $$y5 = {
  REMOVED: "removed",
  INACTIVE: "inactive",
  PAUSING: "pausing",
  RESTORING: "restoring",
  ACTIVE_UNHEALTHY: "active_unhealthy",
  UNKNOWN: "unknown",
  INIT_FAILED: "init_failed",
  RESTORE_FAILED: "restore_failed",
  PAUSE_FAILED: "pause_failed",
  ACTIVE_HEALTHY: "active_healthy",
  COMING_UP: "coming_up"
};
export function $$b2() {
  var e;
  let {
    connectedProject,
    authenticationExpired,
    connectedProjectExpired,
    isConnectedNonOwner
  } = $$f10();
  return !!useAtomWithSubscription(rK) && !isConnectedNonOwner && (authenticationExpired || connectedProjectExpired || !!connectedProject && ((e = connectedProject.status.toLowerCase()) === $$y5.REMOVED || e === $$y5.INACTIVE || e === $$y5.PAUSING || e === $$y5.RESTORING || e === $$y5.ACTIVE_UNHEALTHY || e === $$y5.UNKNOWN || e === $$y5.INIT_FAILED || e === $$y5.RESTORE_FAILED || e === $$y5.PAUSE_FAILED));
}
let T = ["active_healthy", "active_unhealthy", "pausing", "coming_up", "restoring"];
export function $$I6(e = !1) {
  let t = tS();
  let [r] = IT(YF({
    fileKey: e ? null : t
  }));
  let n = r.data?.existingProjects ?? [];
  return {
    activeProjects: n?.filter(e => T.includes(e.status.toLowerCase())) ?? [],
    isLoading: "loading" === r.status
  };
}
export function $$S8(e = !1) {
  let t = tS();
  let [r] = IT(YF({
    fileKey: e ? null : t
  }));
  return {
    existingProjects: r.data?.existingProjects ?? [],
    isLoading: "loading" === r.status
  };
}
export function $$v7(e = !1) {
  let t = tS();
  let r = lA((e ? null : t) ?? "");
  return {
    organization: r.org ?? void 0,
    isLoading: !!r.isLoading
  };
}
export function $$A1(e = !1) {
  let t = tS();
  let [r] = IT(TT({
    fileKey: e ? null : t
  }));
  let n = r.data?.connectedProject ?? void 0;
  let i = r.data?.expired ?? !1;
  let a = r.data?.ownerId ?? null;
  return {
    connectedProject: n,
    connectedProjectExpired: i,
    isConnectedNonOwner: !!r.data?.isConnectedNonOwner,
    projectOwnerId: a,
    isLoading: "loading" === r.status
  };
}
export function $$x4() {
  let {
    projectOwnerId
  } = $$f10();
  let t = Rs(UserAvatarView, {
    userId: projectOwnerId
  }, {
    enabled: !!projectOwnerId
  });
  if ("loaded" !== t.status) return null;
  let r = t.data.userPublic;
  return {
    name: r?.name ?? "",
    handle: r?.handle ?? "",
    id: r?.id,
    imgUrl: r?.userPublicImgUrl
  };
}
export const $6 = $$E0;
export const GC = $$A1;
export const Iz = $$b2;
export const Lz = $$g3;
export const RK = $$x4;
export const TL = $$y5;
export const YY = $$I6;
export const mS = $$v7;
export const tE = $$S8;
export const wT = $$m9;
export const zA = $$f10;