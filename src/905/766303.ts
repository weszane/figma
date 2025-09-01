import { FFileType } from "../figma_app/191312";
import { ZZ } from "../figma_app/345997";
import { getPermissionsState } from "../figma_app/642025";
import { U2 } from "../figma_app/193867";
export function $$o5(e) {
  if ("fullscreen" === e.selectedView.view) {
    let t = e.selectedView.fileKey;
    if (t) return e.fileByKey[t] ?? null;
  }
  return null;
}
export function $$l1(e) {
  let t = U2(e.selectedView);
  return t ? e.fileByKey[t] ?? null : null;
}
export function $$d2(e) {
  return "folder" === e.selectedView.view ? e.folders[e.selectedView.folderId] : null;
}
export function $$c0(e) {
  return {
    ...getPermissionsState(e),
    selectedView: e.selectedView,
    currentOrgId: e.currentUserOrgId
  };
}
export function $$u4({
  state: e,
  openNewFileIn: t,
  folderOverride: i = null,
  trackingInfo: a,
  editorType: s = FFileType.DESIGN,
  fileName: o,
  callback: l,
  figjamAiNewFileData: c,
  slidesAiNewFileData: u,
  figjamMakeSomethingUseCase: p,
  newFileDataLocalStorageKey: m,
  figmakeInitialMessage: h
}) {
  let g = null;
  if (null === i) {
    let t = $$d2(e);
    t && !ZZ(t, e) && (g = t.id);
  } else "drafts" !== i && (g = i.folderId);
  let f = null;
  let _ = e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : null;
  _ && (f = _.id);
  let A = null;
  let y = e.currentTeamId ? e.teams[e.currentTeamId] : null;
  y && (A = y.id);
  return {
    folder_id: g,
    org_id: f,
    openNewFileIn: t,
    trackingInfo: a || null,
    editorType: s,
    fileName: o,
    figjamAiNewFileData: c,
    slidesAiNewFileData: u,
    figjamMakeSomethingUseCase: p,
    newFileDataLocalStorageKey: m,
    figmakeInitialMessage: h,
    callback: l,
    team_id: A
  };
}
export function $$p3(e) {
  return {
    ...e,
    optimist: void 0
  };
}
export const Kl = $$c0;
export const d1 = $$l1;
export const e9 = $$d2;
export const l$ = $$p3;
export const xA = $$u4;
export const yt = $$o5;