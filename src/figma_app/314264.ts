import { Multiplayer, AppStateTsApi } from "src/figma_app/763686";
import { clearAnalyticsStorage, trackEventAnalytics, analyticsEventManager } from "src/905/449184";
import { NU } from "src/905/11";
import { logInfo } from "src/905/714362";
import { FFileType, FResourceCategoryType } from "src/figma_app/191312";
import { FEditorType } from "src/figma_app/53721";
import { G } from "src/figma_app/471068";
import { n as _$$n } from "src/905/347702";
import { _ } from "src/905/613917";
export function $$p1(e) {
  switch (e) {
    case FEditorType.Design:
      return "design";
    case FEditorType.Whiteboard:
      return "figjam";
    case FEditorType.DevHandoff:
      return "dev_handoff";
    case FEditorType.Slides:
      return "slides";
    case FEditorType.Sites:
      return "sites";
    case FEditorType.Figmake:
      return "make";
    case FEditorType.Cooper:
      return "buzz";
    case FEditorType.Illustration:
      return "draw";
    default:
      return "unknown";
  }
}
export function $$_30(e) {
  switch (e && e.editorType) {
    case FFileType.DESIGN:
      return "design";
    case FFileType.WHITEBOARD:
      return "figjam";
    case FFileType.SLIDES:
      return "slides";
    case FFileType.SITES:
      return "sites";
    case FFileType.FIGMAKE:
      return "make";
    case FFileType.COOPER:
      return "buzz";
    default:
      return "unknown";
  }
}
export function $$h33(e, t) {
  return e?.view === "fullscreen" ? $$p1(e.editorType) : t ? $$_30({
    editorType: t
  }) : "unknown";
}
let m = (e, t) => {
  switch (t?.selectedView?.view) {
    case "prototype":
    case "mobileViewer":
      if (t.selectedView.file?.key === e) return t.selectedView.file || null;
      return null;
    default:
      return e && t.fileByKey[e] || null;
  }
};
let g = null;
export function $$f19() {
  return g;
}
export function $$E36(e) {
  g = e;
}
let y = 0;
export function $$b9() {
  return y.toString();
}
export function $$T13() {
  y = 0;
}
export function $$I6() {
  y++;
}
let S = (e, t, r, i = {}) => {
  let a = $$h33(r?.selectedView, t && t.editor_type);
  let s = {
    ...i,
    ...$$v8(a, r?.selectedView?.view)
  };
  s.productType = a;
  s.fileKey = e || "new";
  s.fileParentOrgId = t && t.parent_org_id;
  s.fileTeamId = t && t.team_id;
  t && t.file_repo_id && (s.fileRepoId = t.file_repo_id);
  s.fileTeamId = t && t.team_id;
  s.containingFolderId = t && t.folder_id;
  s.entrypoint = i.entrypoint;
  s.figmaBasicsExperiment = t?.track_tags?.figma_basics_experiment;
  g && (s.loadID = g, s.reconnectId = $$b9());
  s.fileIsIncremental = !!Multiplayer?.isIncrementalSession();
  s.fileIsValidatingIncremental = !!Multiplayer?.isValidatingIncremental();
  s.isStagingChanges = !!Multiplayer?.isStagingChanges();
  return s;
};
export function $$v8(e, t) {
  return e === FFileType.SLIDES && "fullscreen" === t ? {
    slide_view: AppStateTsApi?.singleSlideView()?.isFocusedNodeViewEnabled() ? "ssv" : "grid"
  } : {};
}
export function $$A12() {
  clearAnalyticsStorage();
}
let $$x20 = _$$n((e, t, r, n = {}, a) => {
  let s = m(t, r);
  let o = S(t, s, r, n);
  trackEventAnalytics(e, o, a);
});
let $$N21 = _$$n((e, t, r, n = {}, a) => {
  let s = S(t.key, t, r, n);
  trackEventAnalytics(e, s, a);
});
let $$C5 = _$$n((e, t, r, n) => {
  let a = m(t, r);
  let s = S(t, a, r, n);
  analyticsEventManager.trackDefinedEvent(e, s);
});
export function $$w2(e, t, r = {}, n) {
  r.productType = t && $$_30(t);
  r.fileKey = t?.key || "new";
  r.fileParentOrgId = t?.parentOrgId;
  r.fileTeamId = t?.teamId;
  r.containingFolderId = t?.folderId;
  t && t.fileRepoId && (r.fileRepoId = t.fileRepoId);
  trackEventAnalytics(e, r, n);
}
export let $$O23 = "File Browser File Clicked";
export function $$R25(e, t, r) {
  if (t.state) {
    var n;
    $$x20($$O23, e, t.state, {
      selectedView: "recentsAndSharing" === (n = t.state).selectedView.view ? n.selectedView.tab || G.RECENTLY_VIEWED : "folder" === n.selectedView.view && n.selectedView.folderId === n.user?.drafts_folder_id ? "drafts" : n.selectedView.view,
      entrypoint: t.entrypoint,
      planFilterId: t.planFilterId,
      planFilterType: t.planFilterType,
      sharedByFilter: t.sharedByFilter,
      viewMode: t.viewMode
    }, r);
  } else t.selectedViewName ? trackEventAnalytics($$O23, {
    fileKey: e,
    selectedView: t.selectedViewName,
    entrypoint: t.entrypoint
  }, r) : trackEventAnalytics($$O23, {
    fileKey: e,
    entrypoint: t.entrypoint
  }, r);
}
export function $$L7(e, t, r, n) {
  trackEventAnalytics("file_browser_loaded", {
    selectedView: e.view,
    currentOrgId: t,
    currentTeamId: r,
    isLimitedTeamPlanSpace: n
  });
}
export function $$P27(e) {
  trackEventAnalytics("file_browser_page_visit", {
    selectedView: e.view
  });
}
export function $$D3(e, t, r) {
  trackEventAnalytics("file_browser_plan_filter_selected", {
    planId: e,
    entryPoint: t,
    planType: r
  });
}
export function $$k26(e, t) {
  trackEventAnalytics("file_browser_sharer_filter_selected", {
    sharerId: e,
    entryPoint: t
  });
}
export function $$M10(e, t, r = {}, n) {
  r.fileKeys = t.map(e => e.key);
  r.fileParentOrgIds = [];
  r.fileTeamIds = [];
  r.containingFolderIds = [];
  t.forEach(e => {
    r.fileParentOrgIds.push(e.parent_org_id);
    r.fileTeamIds.push(e.team_id);
    r.containingFolderIds.push(e.folder_id);
  });
  trackEventAnalytics(e, r, n);
}
export function $$F11(e, t, r, n = {}, a) {
  let s = t.map(e => r.fileByKey[e]);
  n.fileKeys = t;
  n.fileParentOrgIds = [];
  n.fileTeamIds = [];
  n.containingFolderIds = [];
  s.forEach(e => {
    n.fileParentOrgIds.push(e.parent_org_id);
    n.fileTeamIds.push(e.team_id);
    n.containingFolderIds.push(e.folder_id);
  });
  trackEventAnalytics(e, n, a);
}
export function $$j29(e, t, r = {}, n) {
  r.fileKeys = [];
  r.fileParentOrgIds = [];
  r.fileTeamIds = [];
  r.containingFolderIds = [];
  t.forEach(e => {
    r.fileKeys.push(e.key);
    r.fileParentOrgIds.push(e.parentOrgId);
    r.fileTeamIds.push(e.teamId);
    r.containingFolderIds.push(e.folderId);
  });
  trackEventAnalytics(e, r, n);
}
export function $$U18(e, t, r, n) {
  let i = e.map(e => e.key);
  let a = [];
  let s = [];
  let o = [];
  i.forEach((e, r) => {
    let n = t[r];
    a.push(n.key);
    s.push(n.folder_id);
    o.push(n.team_id);
  });
  $$F11("File Copied", i, r, {
    copiedFileKeys: a,
    copiedContainingFolderIds: s,
    copiedFileTeamIds: o
  }, n);
}
export function $$B34(e, t, r, n, a = {}, s) {
  let o = n.folders[t];
  a.folderId = o?.id || t;
  a.folderTeamId = o?.team_id || r;
  trackEventAnalytics(e, a, s);
}
export function $$G16(e, t, r, n = {}, a) {
  let s = _(t, r);
  n.teamId = s?.id;
  n.teamName = s?.name;
  trackEventAnalytics(e, n, a);
}
export function $$V4(e, t, r, n = {}, a) {
  let s = r.orgById[t];
  n.orgId = s.id;
  n.orgName = s.name;
  trackEventAnalytics(e, n, a);
}
export function $$H32(e, t, r = {}, n) {
  r.userId = t.user && t.user.id;
  trackEventAnalytics(e, r, n);
}
let z = {
  [FResourceCategoryType.FILE]: "fileKey",
  [FResourceCategoryType.FILE_REPO]: "fileRepoId",
  [FResourceCategoryType.FOLDER]: "folderId",
  [FResourceCategoryType.TEAM]: "teamId"
};
export function $$W37(e, t, r = {}, n) {
  let a = z[t.resource_type];
  r.roleId = t.id;
  r[a] = t.resource_id_or_key;
  t.user_id && (r.roleUserId = t.user_id);
  trackEventAnalytics(e, r, n);
}
export function $$K35(e, t) {
  trackEventAnalytics(e, t);
}
export function $$Y28(e) {
  return {
    canEdit: e.canEdit,
    fileKey: e.key,
    productType: $$_30(e)
  };
}
var $ = (e => (e.DESIGN = "DESIGN", e.WHITEBOARD = "WHITEBOARD", e))($ || {});
export let $$X15 = "CTA Clicked";
export function $$q0(e, t, r, n) {
  let o = t || $$X15;
  logInfo(o, e.text || "", e, {
    logToConsole: NU.NEVER
  });
  let l = {
    ...e,
    nonInteraction: 0
  };
  trackEventAnalytics(o, l, {
    forwardToDatadog: !0,
    sendAsBeacon: r,
    ...n
  });
}
export var $$J17 = (e => (e.NOT_POPULATED = "not_populated", e.POPULATED_INCOMPLETE = "populated_incomplete", e.POPULATED_COMPLETE = "populated_complete", e))($$J17 || {});
export function $$Z22(e, t) {
  let r = {
    ...e,
    nonInteraction: 0
  };
  trackEventAnalytics("Input Blurred", r, t);
}
export function $$Q31(e, t = {}) {
  trackEventAnalytics("Context Viewed", e, {
    forwardToDatadog: !0,
    ...t
  });
}
let $$ee24 = "Disabled Team Creation Button Hovered";
let $$et14 = 5e3;
export const Cu = $$q0;
export const Dc = $$p1;
export const E9 = $$w2;
export const FE = $$D3;
export const Fr = $$V4;
export const GS = $$C5;
export const Hb = $$I6;
export const I0 = $$L7;
export const Nb = $$v8;
export const Nq = $$b9;
export const OH = $$M10;
export const PB = $$F11;
export const Pg = $$A12;
export const QM = $$T13;
export const WL = $$et14;
export const Ws = $$X15;
export const _J = $$G16;
export const _R = $$J17;
export const ak = $$U18;
export const cf = $$f19;
export const ds = $$x20;
export const f5 = $$N21;
export const fy = $$Z22;
export const gH = $$O23;
export const jd = $$ee24;
export const k1 = $$R25;
export const nX = $$k26;
export const o5 = $$P27;
export const oP = $$Y28;
export const pf = $$j29;
export const pi = $$_30;
export const qD = $$Q31;
export const uE = $$H32;
export const v5 = $$h33;
export const xr = $$B34;
export const ye = $$K35;
export const ys = $$E36;
export const z_ = $$W37;
