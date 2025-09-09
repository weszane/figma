import { AppStateTsApi, SelectionPaintHelpers, SaveConnectionIssues } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { NC } from "../905/17179";
import { trackEventAnalytics } from "../905/449184";
import { GZ } from "../905/508367";
import { desktopAPIInstance } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { sendBackToFilesAction } from "../figma_app/564528";
import { handleAtomEvent } from "../905/502364";
import { getI18nString } from "../905/303541";
import { sf } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { oI } from "../905/854717";
import { F7, yJ, k8, $T, AB, h2, _V } from "../figma_app/8833";
import { ds } from "../figma_app/314264";
import { fullscreenValue } from "../figma_app/455680";
import { k6, Dg, Ug, V } from "../figma_app/682945";
import { Ed } from "../figma_app/139113";
import { nX } from "../figma_app/336853";
import { Np, xS, Tk } from "../figma_app/193867";
import { Eq } from "../figma_app/598018";
import { M8 } from "../figma_app/915202";
import { O } from "../905/833838";
import { v as _$$v } from "../905/906499";
import { createOptimistThunk } from "../905/350402";
let $$w18 = NC("CLEAR_SELECTED_VIEW_COMMENT_ID");
let $$O17 = NC("UPDATE_RECENTLY_USED_QUICK_COMMAND");
let $$R13 = NC("RECENTLY_USED_QUICK_COMMANDS");
let $$L48 = NC("FULLSCREEN_UPDATE_CANVAS_MENTION_POPUP_POSITION");
let $$P8 = NC("FULLSCREEN_SET_CANVAS_MENTION_POPUP");
let $$D44 = NC("FULLSCREEN_UPDATE_HYPERLINK_POPUP_POSITION");
let $$k16 = NC("FULLSCREEN_SET_HYPERLINK_POPUP");
let $$M5 = NC("FULLSCREEN_SET_EYEDROPPER");
let $$F50 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let n = t.params || {};
  let {
    fileKey
  } = r.selectedView;
  ds(t.name, fileKey ?? null, r, n);
});
let $$j4 = NC("FULLSCREEN_SET_LEFT_PANEL_TAB");
let $$U7 = NC("FULLSCREEN_SHOW_FILE_CREATION_FAILURE_BANNER");
let $$B2 = NC("FULLSCREEN_HIDE_UPGRADE_BANNER");
let $$G40 = NC("FULLSCREEN_SHOW_UPGRADE_BANNER");
let $$V20 = NC("FULLSCREEN_SET_PREFERRED_VALUES_PICKER_LIST_LAYOUT");
let $$H36 = NC("FULLSCREEN_SET_INSTANCE_SWAP_PICKER_LIST_LAYOUT");
let $$z9 = NC("FULLSCREEN_SET_PICKER_LIST_LAYOUT");
let $$W28 = createOptimistThunk((e, t) => {
  trackEventAnalytics("Style Picker View Changed", {
    styleType: "FILL",
    oldViewMode: t.isListLayout ? "GRID" : "LIST",
    newViewMode: t.isListLayout ? "LIST" : "GRID"
  });
  e.dispatch($$z9(t));
});
let $$K11 = NC("FULLSCREEN_SHOULD_SHOW_STACK_ALIGNMENT_PICKER");
let $$Y23 = NC("FULLSCREEN_HIDE_STYLE_PICKER");
let $$$34 = NC("FULLSCREEN_SHOW_STYLE_PICKER");
let $$X14 = NC("FULLSCREEN_HIDE_PICKER");
let $$q3 = NC("FULLSCREEN_SHOW_PICKER");
export function $$J19(e) {
  return e && e.startsWith(F7);
}
export function $$Z42(e) {
  return e && e.startsWith(yJ);
}
function Q(e, t, r) {
  let i = e && e.id;
  let a = t && t.id;
  let o = i !== k8 && a === k8;
  let l = i === k8 && a !== k8;
  let d = i !== $T && a === $T;
  let c = i === $T && a !== $T;
  let u = i !== AB && i !== h2 && (a === AB || a === h2);
  let p = (i === AB || i === h2) && a !== AB && a !== h2;
  let _ = i !== _V && a === _V;
  let h = i === _V && a !== _V;
  let m = !$$J19(i) && $$J19(a);
  let E = $$J19(i) && !$$J19(a);
  let b = !$$Z42(i) && $$Z42(a);
  let T = $$Z42(i) && !$$Z42(a);
  o ? AppStateTsApi?.uiState().backgroundPickerOpen.set(!0) : l ? AppStateTsApi?.uiState().backgroundPickerOpen.set(!1) : d ? fullscreenValue.updateAppModel({
    prototypeBackgroundPickerOpen: !0
  }) : c ? fullscreenValue.updateAppModel({
    prototypeBackgroundPickerOpen: !1
  }) : u ? (AppStateTsApi?.propertiesPanelState().typeDetailsPanelOpen.set(!0), trackEventAnalytics("Type Details Panel Opened")) : p && AppStateTsApi?.propertiesPanelState().typeDetailsPanelOpen.set(!1);
  m ? SelectionPaintHelpers?.setIsPaintPickerOpen(!0) : E && SelectionPaintHelpers?.setIsPaintPickerOpen(!1);
  b ? SelectionPaintHelpers?.setIsStylePickerOpen(!0) : T && SelectionPaintHelpers?.setIsStylePickerOpen(!1);
  _ ? AppStateTsApi?.uiState().minMaxModalShown.set(!0) : h && AppStateTsApi?.uiState().minMaxModalShown.set(!1);
  E && r(oI({
    paintId: void 0,
    originalPaint: void 0,
    updatedPaintFromDropper: void 0
  }));
}
let $$ee26 = createOptimistThunk(e => {
  let t = e.getState().pickerShown;
  e.dispatch($$X14());
  Q(t, e.getState().pickerShown, e.dispatch);
});
let $$et51 = createOptimistThunk((e, t) => {
  let r = e.getState().pickerShown;
  e.dispatch($$q3(t));
  Q(r, e.getState().pickerShown, e.dispatch);
});
let $$er0 = NC("FULLSCREEN_UPDATE_LOCAL_FONT_AGENT_VERSION");
let $$en46 = NC("FULLSCREEN_UPDATE_FONT_LIST");
let $$ei25 = NC("FULLSCREEN_STOP_RENAMING");
let $$ea52 = NC("FULLSCREEN_BEGIN_RENAMING");
let $$es24 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let i = t.newSelectedView;
  if (r.saveStatus && r.saveStatus.hasUnsavedChanges && r.saveStatus.tabCloseText !== SaveConnectionIssues.SUPPRESS_UNSAVED_CHANGES_UI) {
    if (!Ed(() => e.dispatch($$eA35()))) {
      let t = getI18nString("autosave.unable_to_leave_document.unsaved_changes_save_in_background");
      e.dispatch(showModalHandler({
        type: _$$v,
        data: {
          message: t
        }
      }));
    }
    customHistory.push(Np(r, i), {
      ...e.getState().selectedView,
      previousSelectedView: t.oldSelectedView,
      jsCommitHash: getInitialOptions().release_manifest_git_commit
    });
    e.dispatch(sf(t.oldSelectedView));
  } else {
    r.saveStatus && r.saveStatus.tabCloseText === SaveConnectionIssues.SUPPRESS_UNSAVED_CHANGES_UI && trackEventAnalytics("suppress_unsaved_changes_ui", {}, {
      forwardToDatadog: !0
    });
    e.dispatch(sf({
      ...i,
      fromPopstate: !0
    }));
  }
});
let $$eo38 = NC("FULLSCREEN_UPDATE_SELECTED_STYLE_THUMBNAIL_URL");
let $$el37 = NC("FULLSCREEN_UPDATE_SELECTED_STYLE_PROPERTIES");
let $$ed47 = NC("FULLSCREEN_UPDATE_MIRROR");
let $$ec41 = NC("FULLSCREEN_SET_NEEDS_UPGRADE");
let $$eu27 = NC("FULLSCREEN_SET_FILE_VERSION");
let $$ep29 = NC("FULLSCREEN_SET_PROGRESS_BAR_STATE");
let $$e_31 = NC("FULLSCREEN_STOP_OBSERVING_OTHER_USER");
let $$eh22 = NC("FULLSCREEN_UPDATE_MULTIPLAYER_STATE");
let $$em6 = createOptimistThunk((e, t) => {
  void 0 !== t.allUsers && (k6(t.allUsers.length, t.presenterSessionID), handleAtomEvent({
    id: M8
  }));
  e.dispatch($$eh22(t));
});
let $$eg49 = NC("FULLSCREEN_SHOW_DOWNTIME_BANNER");
let $$ef1 = NC("FULLSCREEN_HIDE_DOWNTIME_BANNER");
let $$eE30 = NC("FULLSCREEN_HIDE_OPEN_DESKTOP_APP_MODAL");
let $$ey32 = NC("FULLSCREEN_SHOW_OPEN_DESKTOP_APP_MODAL");
let $$eb15 = NC("FULLSCREEN_RECONNECTING_SUCCEEDED");
let $$eT43 = createOptimistThunk(e => {
  Dg();
  e.dispatch($$eb15());
});
let $$eI53 = NC("FULLSCREEN_RECONNECTING_STARTED");
let $$eS45 = createOptimistThunk(e => {
  Ug();
  e.dispatch($$eI53());
});
let $$ev33 = NC("FULLSCREEN_ATTEMPT_CLOSE");
let $$eA35 = createOptimistThunk((e, t) => {
  if (desktopAPIInstance) {
    t?.closeDesktopTabWithMessage ? (desktopAPIInstance.showFileBrowser(t.closeDesktopTabWithMessage), desktopAPIInstance.close({
      suppressReopening: !0,
      shouldForceClose: !0
    })) : desktopAPIInstance.showFileBrowser();
    return;
  }
  if (GZ()) {
    if (getFeatureFlags().integ_zoom_allow_file_switching && sendBackToFilesAction()) return;
    customHistory.redirect("/", "_blank");
    return;
  }
  let r = e.getState();
  let {
    openFile,
    selectedView
  } = r;
  let c = openFile?.project?.id;
  let p = {
    view: "recentsAndSharing"
  };
  if (openFile && selectedView) {
    if ("fullscreen" === selectedView.view && r.lastVisitedPlan && r.lastVisitedPlan.planId !== (r.lastVisitedPlan.planType === O.ORG ? openFile?.parentOrgId : openFile?.teamId)) {
      let e = xS(r, p);
      selectedView.prevSelectedView && (e = xS(r, selectedView.prevSelectedView));
      let t = nX(e);
      let n = Eq(e);
      (t || n) && (e = Tk(e, t ? O.ORG : O.TEAM, t || n, r.lastVisitedPlan.planType, r.lastVisitedPlan.planId));
      customHistory.redirect(e);
      return;
    }
    "fullscreen" === selectedView.view && selectedView.prevSelectedView ? p = selectedView.prevSelectedView : openFile && c && (p = {
      view: "folder",
      folderId: c
    });
  }
  if (AppStateTsApi?.uiState().isRecovery.getCopy()) {
    let e = xS(r, p);
    customHistory.redirect(e);
  }
  fullscreenValue.dispatchIfSaved(sf(p));
  V();
  e.dispatch($$ev33(t));
});
let $$ex10 = NC("FILE_SELECTED_SHARE_MODAL_TAB");
let $$eN21 = NC("UPDATE_OPEN_FILE");
let $$eC12 = NC("NEW_FILE_LOADED");
let $$ew39 = NC("FULLSCREEN_OPEN");
export const Bs = $$er0;
export const CN = $$ef1;
export const D9 = $$B2;
export const Dr = $$q3;
export const FP = $$j4;
export const Gm = $$M5;
export const J4 = $$em6;
export const JM = $$U7;
export const Jt = $$P8;
export const Kx = $$z9;
export const M3 = $$ex10;
export const Mt = $$K11;
export const OB = $$eC12;
export const PQ = $$R13;
export const Ql = $$X14;
export const Qm = $$eb15;
export const R5 = $$k16;
export const Rw = $$O17;
export const ST = $$w18;
export const Ty = $$J19;
export const U8 = $$V20;
export const UC = $$eN21;
export const UM = $$eh22;
export const Uv = $$Y23;
export const VB = $$es24;
export const Wk = $$ei25;
export const XE = $$ee26;
export const XQ = $$eu27;
export const Y = $$W28;
export const Y6 = $$ep29;
export const Z1 = $$eE30;
export const Z_ = $$e_31;
export const aK = $$ey32;
export const bO = $$ev33;
export const bS = $$$34;
export const eH = $$eA35;
export const fG = $$H36;
export const fk = $$el37;
export const fy = $$eo38;
export const ho = $$ew39;
export const il = $$G40;
export const kP = $$ec41;
export const kU = $$Z42;
export const lp = $$eT43;
export const lz = $$D44;
export const nA = $$eS45;
export const nN = $$en46;
export const p5 = $$ed47;
export const pj = $$L48;
export const re = $$eg49;
export const sx = $$F50;
export const u1 = $$et51;
export const vg = $$ea52;
export const yv = $$eI53;