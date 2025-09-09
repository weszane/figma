import { canViewTeam } from "../figma_app/642025";
import { Tb } from "../figma_app/633080";
import { AccessLevelEnum } from "../905/557142";
import { C0 } from "../figma_app/756995";
import { DQ, Pw } from "../figma_app/121751";
import { setupShadowRead, adminPermissionConfig } from "../figma_app/391338";
let $$d = "temp-";
export function $$c1(e, t) {
  return $$p2(e[t]);
}
export function $$u6(e) {
  return !!e && "" === e.path;
}
export function $$p2(e) {
  return !!e && "" === e.path;
}
export function $$_15(e) {
  return e.startsWith($$d);
}
export function $$h10() {
  return `${$$d}${+new Date()}`;
}
export function $$m7(e) {
  return e?.path === "";
}
export function $$g11(e, t, r, n) {
  if (!e) return null;
  if (n) return t[n.drafts_folder_id] || null;
  for (let n in t) {
    let i = t[n];
    let s = r[n] ? r[n][e] : null;
    if (!i.teamId && "" === i.path && null == i.orgId && s && s.level === AccessLevelEnum.OWNER) return i;
  }
  return null;
}
export function $$f16(e) {
  return e && !e.team_id && "" !== e.path && !!e.org_id;
}
export function $$E13(e) {
  return e && !e.teamId && "" !== e.path && !!e.orgId;
}
export function $$y0(e) {
  return e?.path === "" ? Tb() : e?.path;
}
export function $$b4(e) {
  return void 0 === e ? null : "" === e ? Tb() : e;
}
export function $$T3(e, t) {
  return null != t && t in e;
}
export function $$I14(e, t) {
  let r = t.folders[e];
  if (r && r.org_id) return r.org_id;
  if (r && r.team_id) {
    let e = t.teams[r.team_id];
    if (e && e.org_id) return e.org_id;
  }
}
export function $$$$S5(e) {
  return e.length <= 0 ? "Please provide a name" : e.length > 255 ? "Sorry, name must be at max 255 characters." : e.match(/[\/\\:?*"|]/) ? 'The following characters are not allowed:  / : ? * " |' : void 0;
}
export function $$v8(e, t) {
  return {
    tileSortFilterConfig: t.folders.byId[e] || t.folders.$$default,
    sortKeys: [C0.NAME, C0.CREATED_AT, C0.TOUCHED_AT]
  };
}
export function $$A9(e, t, r, i, a, s, d) {
  let c = r && canViewTeam(r, i);
  let u = setupShadowRead({
    label: adminPermissionConfig.planBasedFolderUrl.hasTeamAccess,
    oldValue: c,
    newValue: a,
    enableShadowRead: d,
    enableFullRead: DQ(Pw.GROUP_7),
    maxReports: 5,
    contextArgs: {
      currentTeamId: i.currentTeamId,
      currentOrgId: i.currentUserOrgId,
      currentUserId: i.user?.id ?? null,
      openFileKey: i.openFile?.key ?? null,
      teamIdArg: r,
      folderId: e,
      openFileLoadedFromLiveGraph: d,
      callsite: s
    }
  });
  return t ? `${location.origin}/files/${t}/project/${e}` : u ? `${location.origin}/files/team/${r}/project/${e}` : i.user?.personal_drafts_folder_id === e ? `${location.origin}/files/drafts-to-move` : `${location.origin}/files/project/${e}`;
}
export function $$x17(e) {
  return !!e && !!e.team_id && !e.path;
}
export function $$N12(e) {
  return !!e && !!e.teamId && !e.path;
}
export const CI = $$y0;
export const D = $$c1;
export const Gi = $$p2;
export const N5 = $$T3;
export const S = $$b4;
export const SS = $$$$S5;
export const T9 = $$u6;
export const VA = $$m7;
export const ZN = $$v8;
export const cU = $$A9;
export const d = $$h10;
export const gj = $$g11;
export const jd = $$N12;
export const n3 = $$E13;
export const oq = $$I14;
export const qF = $$_15;
export const sp = $$f16;
export const ye = $$x17;