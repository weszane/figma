import { debounce } from "../905/915765";
import { zIx, zkO, z7j } from "../figma_app/763686";
import { AD } from "../905/871411";
import { atomStoreManager } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { debugState } from "../905/407919";
import { XHR } from "../905/910117";
import { eN } from "../figma_app/401061";
import { $o } from "../905/762943";
import { s4 } from "../figma_app/544649";
import { L } from "../figma_app/53571";
import { wz } from "../figma_app/879363";
import { j7, sf } from "../905/929976";
import { WJ, AM, XX } from "../figma_app/8833";
import { pY } from "../figma_app/415217";
import { FEditorType } from "../figma_app/53721";
import { T } from "../905/858738";
export let $$b2 = {
  getIsExtension: () => T(),
  setNodesReady(e, t, i) {
    throw Error("Fullscreen not initialized");
  },
  setNodesCompleted(e, t) {
    throw Error("Fullscreen not initialized");
  },
  forwardExportsToExtension(e, t) {
    throw Error("Fullscreen not initialized");
  },
  showAnnotationsButtonContextMenu() {
    throw Error("Fullscreen not initialized");
  },
  showStatusContextMenu(e, t) {
    throw Error("Fullscreen not initialized");
  },
  showLinterContextMenu() {
    throw Error("Fullscreen not initialized");
  },
  isStatusContextMenuShowing() {
    throw Error("Fullscreen not initialized");
  },
  isLinterContextMenuShowing() {
    throw Error("Fullscreen not initialized");
  },
  isDevModeOverview: () => !1,
  enterDevModeFocusView(e) {
    throw Error("Fullscreen not initialized");
  },
  exitDevModeFocusOrOverview() {
    throw Error("Fullscreen not initialized");
  },
  isInteractiveInspectionEnabled: () => !1,
  isChangingInspectionValues: () => !1,
  onUnexpectedEditInFocusView() {
    throw Error("Fullscreen not initialized");
  },
  getUnitName(e, t) {
    throw Error("Fullscreen not initialized");
  }
};
export class $$v0 {
  constructor() {
    this.pendingRelatedLinks = [];
    this.flushLinks = debounce(async (e, t) => {
      let i = this.pendingRelatedLinks;
      this.pendingRelatedLinks = [];
      let n = 1;
      for (;;) {
        try {
          let t = {
            link_batch: i.map(e => ({
              node_id: e.nodeId,
              file_key: e.fileKey,
              link_name: e.linkName,
              link_url: e.linkUrl
            }))
          };
          e(XHR.post("/api/files/related_links_batch", t));
          return;
        } catch (e) {
          if (e.status >= 400 && e.status < 500) {
            t(e);
            return;
          }
        }
        let r = 1e3 * n * Math.random();
        await new Promise(e => setTimeout(e, r));
        n = Math.min(2 * n, 64);
      }
    }, 100);
  }
  addLinks(e) {
    this.pendingRelatedLinks.push(...e);
    return new Promise((e, t) => this.flushLinks(e, t));
  }
}
export function $$I1() {
  $$b2 = {
    getIsExtension: () => T(),
    setNodesReady(e, t, i, n) {
      let a = e ? zIx.BUILD : zIx.NONE;
      L({
        nodeIds: t,
        status: a,
        sourceForLogging: i,
        description: n,
        editScopeType: zkO.USER
      });
    },
    setNodesCompleted(e, t) {
      L({
        nodeIds: e,
        status: zIx.COMPLETED,
        sourceForLogging: t,
        editScopeType: zkO.USER
      });
    },
    forwardExportsToExtension(e, t) {
      pY({
        assetName: e,
        buffer: t
      });
    },
    showStatusContextMenu(e, t) {
      debugState.dispatch(j7({
        type: WJ,
        data: {
          targetInViewport: e,
          nodeId: t
        }
      }));
    },
    showLinterContextMenu(e) {
      debugState.dispatch(j7({
        type: AM,
        data: {
          targetInViewport: e
        }
      }));
    },
    isStatusContextMenuShowing: () => debugState.getState().dropdownShown?.type === WJ,
    isLinterContextMenuShowing: () => debugState.getState().dropdownShown?.type === AM,
    showAnnotationsButtonContextMenu(e, t) {
      debugState.dispatch(j7({
        type: XX,
        data: {
          targetInViewport: e,
          annotationsCount: t
        }
      }));
    },
    isDevModeOverview() {
      let e = debugState.getState().selectedView;
      return "fullscreen" === e.view && !!e.showOverview;
    },
    enterDevModeFocusView(e, t) {
      if (!e || e === AD) return;
      let i = debugState.getState().selectedView;
      atomStoreManager.set(wz, "dev_mode_canvas_ii");
      let n = {
        ...i,
        editorType: FEditorType.DevHandoff,
        focusViewBackNavigation: {
          toEditorType: i.editorType,
          toOverview: !1
        },
        devModeFocusId: e,
        overviewBackButtonTargetNodeId: t
      };
      debugState.dispatch(sf(n));
      trackEventAnalytics("Dev Mode II Focus Entry Clicked");
    },
    exitDevModeFocusOrOverview() {
      let e = {
        ...debugState.getState().selectedView,
        showOverview: !1,
        devModeFocusId: void 0
      };
      debugState.dispatch(sf(e));
    },
    isInteractiveInspectionEnabled: () => s4(),
    isChangingInspectionValues: eN,
    onUnexpectedEditInFocusView() {},
    getUnitName(e, t) {
      let i = {
        ...e,
        type: e.type === z7j.FIRST_PARTY ? "first-party" : e.type === z7j.LOCAL_PLUGIN ? "local-plugin" : "published-plugin"
      };
      return $o(i, t);
    }
  };
}
export const GK = $$v0;
export const Ln = $$I1;
export const z4 = $$b2;