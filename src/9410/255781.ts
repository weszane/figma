import { jsx } from "react/jsx-runtime";
import { t } from "../5132/435788";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { logError } from "../905/714362";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { zE } from "../905/738636";
import { $ } from "../905/922405";
import { sendToMakeFromDesignAtom } from "../figma_app/223206";
import { logAndTrackCTA } from "../figma_app/314264";
import { getPermissionsAndView } from "../905/766303";
import { FFileType } from "../figma_app/191312";
import { TabOpenBehavior, FileBrowserLocation } from "../figma_app/915202";
import { i0 } from "../figma_app/632248";
import { Fullscreen } from "../figma_app/763686";
import { getInitialDynamicConfig } from "../figma_app/594947";
let C = {
  FULLSCREEN_UNAVAILABLE: "fullscreen-unavailable",
  SINGLE_FRAME_REQUIRED: "single-frame-required",
  MISSING_REQUIRED_DATA: "missing-required-data",
  SOMETHING_WENT_WRONG: "something-went-wrong",
  EXCEEDS_MAKE_PASTE_THRESHOLD: "exceeds-make-paste-threshold"
};
function v({
  entryPoint: e,
  userId: t,
  fileKey: i,
  fileVersion: r,
  pageGuid: n,
  selectedNodeId: a
}) {
  return {
    entryPoint: e,
    userId: t,
    fileKey: i || void 0,
    fileVersion: r,
    pageGuid: n,
    selectedNodeId: a
  };
}
function E(e, t, i) {
  let {
    fileKey,
    fileVersion,
    pageGuid,
    selectedNodeId,
    entryPoint,
    userId
  } = i;
  t === C.SOMETHING_WENT_WRONG && logError("sendToMakeFromDesign", "Unable to fetch required data to create a new Make file", {
    fileKey,
    fileVersion,
    pageGuid,
    selectedNodeId
  }, {
    reportAsSentryError: !0
  });
  T({
    fileKey,
    pageGuid,
    selectedNodeId,
    entryPoint,
    userId,
    status: "error",
    error: t,
    exceedsMakePasteThreshold: !1
  });
  e(VisualBellActions.enqueue({
    message: t === C.EXCEEDS_MAKE_PASTE_THRESHOLD ? getI18nString("figmake.send_to_make_from_design.error.exceeds-make-paste-threshold") : getI18nString("figmake.send_to_make_from_design.error.something-went-wrong"),
    type: "send-to-make-from-design-error",
    error: !0
  }));
}
function T({
  userId: e,
  entryPoint: t,
  status: i,
  pageGuid: r,
  selectedNodeId: n,
  error: a,
  fileKey: s,
  exceedsMakePasteThreshold: o
}) {
  logAndTrackCTA({
    trackingContext: `${t} > SendToMakeFromDesign`,
    text: "Send to Figma Make",
    pageId: r,
    nodeId: n,
    userId: e,
    fileKey: s,
    status: i,
    error: a,
    exceedsMakePasteThreshold: o
  });
}
let w = !1;
let S = (e, t) => ({
  flags: ["edit", "design"],
  callback: (i, r, n) => {
    if (w) return;
    w = !0;
    let l = debugState.getState();
    let d = getSingletonSceneGraph();
    let c = l.openFile?.key;
    let p = l.user?.id;
    let m = l.fileVersion;
    let x = d.getCurrentPage()?.guid;
    let S = {
      entryPoint: e,
      userId: p,
      fileKey: c,
      fileVersion: m,
      pageGuid: x
    };
    let j = d.getDirectlySelectedNodes();
    if (1 !== j.length) {
      E(n, C.SINGLE_FRAME_REQUIRED, v(S));
      w = !1;
      return;
    }
    let I = j?.[0]?.guid;
    if (!c || null === m || !x || !I) {
      E(n, C.MISSING_REQUIRED_DATA, v({
        ...S,
        selectedNodeId: I
      }));
      w = !1;
      return;
    }
    try {
      let i = function ({
        fileKey: e,
        fileVersion: t,
        pageGuid: i,
        selectedNodeId: r
      }) {
        if (!e || !t || !i || !r) throw Error(C.SOMETHING_WENT_WRONG);
        let n = function () {
          let e = getInitialDynamicConfig("make_large_paste_threshold").get("sizeBytes", 25e4);
          return Fullscreen?.isActiveCanvasSelectionWithinThreshold(e) ?? null;
        }();
        if (null === n) throw Error(C.FULLSCREEN_UNAVAILABLE);
        return {
          fileKey: e,
          fileVersion: t,
          pageGuid: i,
          selectedNodeId: r,
          exceedsMakePasteThreshold: !n
        };
      }({
        fileKey: c,
        fileVersion: m,
        pageGuid: x,
        selectedNodeId: I
      });
      !function ({
        validatedParams: e,
        newFileFrom: t,
        dispatch: i
      }) {
        let r = atomStoreManager.set(sendToMakeFromDesignAtom, {
          fileKey: e.fileKey,
          fileVersion: e.fileVersion,
          pageGuid: e.pageGuid,
          selectedNodeId: e.selectedNodeId,
          exceedsMakePasteThreshold: e.exceedsMakePasteThreshold
        });
        let n = debugState.getState();
        let a = getPermissionsAndView(n);
        i(zE({
          state: a,
          from: t,
          editorType: FFileType.FIGMAKE,
          team: void 0,
          openNewFileIn: TabOpenBehavior.NEW_TAB,
          newFileDataLocalStorageKey: r
        }));
      }({
        validatedParams: i,
        newFileFrom: t,
        dispatch: n
      });
      T({
        entryPoint: e,
        pageGuid: x,
        selectedNodeId: I,
        userId: p,
        fileKey: c,
        status: "success",
        exceedsMakePasteThreshold: i.exceedsMakePasteThreshold
      });
    } catch (e) {
      E(n, e instanceof Error ? e.message : C.SOMETHING_WENT_WRONG, v({
        ...S,
        selectedNodeId: I
      }));
    } finally {
      w = !1;
    }
  }
});
let $$j1 = {
  action: i0,
  tags: [$.AI],
  iconType: jsx(t, {}),
  searchSynonyms: ["send to make", "export to make", "create make file", "figma make", "figmake"],
  ...S("AI Quick Actions V2", FileBrowserLocation.SEND_TO_MAKE_FROM_DESIGN_QA_V2_MENU)
};
let $$I0 = {
  name: "send-to-make-from-design",
  ...S("SelectionContextMenu", FileBrowserLocation.SEND_TO_MAKE_FROM_DESIGN_CONTEXT_MENU)
};
export const V6 = $$I0;
export const Bc = $$j1;