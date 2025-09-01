import { useMemo } from "react";
import { Qw } from "../905/989992";
import { oA } from "../905/663269";
import { p } from "../figma_app/288654";
import { _R } from "../figma_app/765689";
import { FFileType } from "../figma_app/191312";
import { XRI } from "../figma_app/43951";
let c = e => (t, i) => i ? t.filter(t => {
  let n = i[t];
  return !!n?.[e];
}) : [];
let $$u6 = c("canTrash");
let $$p7 = c("canDuplicate");
let $$m4 = c("canRestore");
let $$h2 = c("canRestoreToOtherFolders");
let $$g5 = c("canDeleteForever");
let $$f3 = c("canMove");
let $$_0 = c("isDraftFile");
export function $$A1(e, t = !0) {
  let i = useMemo(() => e.map(e => ({
    fileKey: e
  })), [e]);
  let c = p(XRI, i, {
    enabled: t
  });
  return useMemo(() => Qw.all(c.map(e => e.result)).transform(e => {
    let t = {};
    for (let i of e) {
      let e = i.file;
      e && (t[e.id] = function (e) {
        let t = e.editorType === FFileType.WHITEBOARD && e.org?.isFigJamDisabled || e.editorType === FFileType.SLIDES && e.org?.isSlidesDisabled || e.editorType === FFileType.SITES && e.org?.isSitesDisabled || e.editorType === FFileType.COOPER && e.org?.isCooperDisabled || !1;
        let i = e.canEdit;
        let n = e.canEdit;
        let r = e.canRename;
        let s = !!e.project?.canView;
        let d = !!e.project?.canEdit;
        let c = !!oA(e.canTrash);
        let u = !!oA(e.canMove);
        let p = oA(e.canMoveWithReasons);
        let m = (e.canEdit || !e.viewerExportRestricted) && !t;
        let h = !!oA(e.canRestore);
        let g = !!oA(e.canRestoreToOtherFolders);
        let f = e.canFavorite;
        let _ = e.isFavorited;
        let A = e.isTeamTemplate;
        let y = _R(e.editorType ?? FFileType.DESIGN, e.currentPlanUser);
        let b = e.isDraftFile;
        let v = !!oA(e.canPermanentlyDelete);
        let I = e.parentOrgId ? "org" : e.teamId ? "team" : null;
        let E = e.parentOrgId || e.teamId || null;
        return {
          canEdit: i,
          canRename: r,
          canMove: u,
          canShowInProject: s,
          canPin: d,
          canTrash: c,
          canDuplicate: m,
          canRestore: h,
          canRestoreToOtherFolders: g,
          canFavorite: f,
          isFavorited: _,
          canDeleteForever: v,
          canUseInNewFile: A,
          canRestoreFromVersion: n,
          isFileTypeDisabled: t,
          canOpenMoveModal: !0,
          isUserRestrictedForSeat: y,
          planUser: e.currentPlanUser,
          planType: I,
          planId: E,
          isDraftFile: b,
          canMoveWithReasons: p
        };
      }(e));
    }
    return t;
  }), [c]);
}
export const G4 = $$_0;
export const IT = $$A1;
export const SW = $$h2;
export const Ul = $$f3;
export const g4 = $$m4;
export const m8 = $$g5;
export const n = $$u6;
export const v_ = $$p7;