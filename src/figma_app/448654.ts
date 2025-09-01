import { useMemo } from "react";
import { Qw } from "../905/989992";
import { oA } from "../905/663269";
import { p } from "../figma_app/288654";
import { _R } from "../figma_app/765689";
import { FFileType } from "../figma_app/191312";
import { rwE } from "../figma_app/43951";
export function $$c7(e) {
  let t = e.canEdit;
  let r = e.canMove;
  let n = !!e.project?.canView;
  let i = e.canEdit && !e.isTrashed;
  let s = e.canEdit && e.isTrashed;
  let d = e.isTrashed && !!oA(e.sourceFile?.canRestore);
  let c = oA(e.canMoveWithReasons);
  let u = !!(e.isTrashed && oA(e.sourceFile?.canRestoreToOtherFolders));
  let p = !!e.sourceFile?.isFavorited;
  let _ = e.canRead && !!e.sourceFile && !e.sourceFile.isFavorited;
  let h = e.canRead && !!e.sourceFile && e.sourceFile.isFavorited;
  let m = !!e.project && e.canEdit;
  let g = e.parentOrgId ? "org" : e.teamId ? "team" : null;
  let f = e.parentOrgId || e.teamId || null;
  let E = _R(FFileType.DESIGN, e.currentPlanUser);
  let y = e.isDraftRepo;
  return {
    canDelete: i,
    canRename: t,
    canShowInProject: n,
    isFavorited: p,
    canRestore: d,
    canRestoreToOtherFolders: u,
    canForeverDelete: s,
    canFavorite: _,
    canUnfavorite: h,
    isMainBranch: t => t === e.sourceFile?.key,
    canMove: r,
    canEditBranch: t => !!e.branches?.find(e => e.key === t)?.canEdit,
    canPin: m,
    planId: f,
    planType: g,
    canOpenMoveModal: !0,
    isUserRestrictedForSeat: E,
    planUser: e.currentPlanUser,
    isDraftRepo: y,
    canMoveWithReasons: c
  };
}
let u = e => (t, r) => r ? t.filter(t => {
  let n = r[t];
  return !!n?.[e];
}) : [];
let $$p8 = u("canDelete");
let $$_2 = u("canRestore");
let $$h0 = u("canRestoreToOtherFolders");
let $$m4 = u("canForeverDelete");
let $$g3 = u("canMove");
let $$f1 = u("isDraftRepo");
export function $$E6(e, t, r) {
  return r ? e.filter(e => {
    let n = t[e];
    let i = r[e];
    return i?.isMainBranch(n);
  }) : [];
}
export function $$y5(e, t = !0) {
  let r = useMemo(() => e.map(e => ({
    repoId: e
  })), [e]);
  let a = p(rwE, r, {
    enabled: t
  });
  return useMemo(() => Qw.all(a.map(e => e.result)).transform(e => {
    let t = {};
    for (let r of e) {
      let e = r.repo;
      e && (t[e.id] = $$c7(e));
    }
    return t;
  }), [a]);
}
export const CS = $$h0;
export const Sk = $$f1;
export const _H = $$_2;
export const ae = $$g3;
export const gX = $$m4;
export const k8 = $$y5;
export const nL = $$E6;
export const zh = $$c7;
export const zj = $$p8;