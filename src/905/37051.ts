import { debugState } from "../905/407919";
import { trackEventAnalytics } from "../905/449184";
import { getUnitForEntry } from "../905/762943";
import { isVsCodeEnvironment } from "../905/858738";
import { defaultSessionLocalIDString } from "../905/871411";
import { sendWithRetry } from "../905/910117";
import { debounce } from "../905/915765";
import { selectViewAction, showDropdownThunk } from "../905/929976";
import { dropdownTypeLinterContextMenu, dropdownTypeReadyStatusContextMenu, dropdownTypeAnnotationsButtonContextMenu } from "../figma_app/8833";
import { atomStoreManager } from "../figma_app/27355";
import { setNodeStatus } from "../figma_app/53571";
import { FEditorType } from "../figma_app/53721";
import { eN } from "../figma_app/401061";
import { sendAsset } from "../figma_app/415217";
import { isInteractiveInspectionAndRollbackEnabled } from "../figma_app/544649";
import { BuildStatus, PluginSource, SourceType } from "../figma_app/763686";
import { atomM4 } from "../figma_app/879363";

// Refactored interface for fullscreen operations
export interface FullscreenAPI {
  getIsExtension: () => boolean;
  setNodesReady: (isBuilding: boolean, nodeIds: string[], source: string, description?: string) => void;
  setNodesCompleted: (nodeIds: string[], source: string) => void;
  forwardExportsToExtension: (assetName: string, buffer: ArrayBuffer) => void;
  showAnnotationsButtonContextMenu: (target: HTMLElement, count: number) => void;
  showStatusContextMenu: (target: HTMLElement, nodeId: string) => void;
  showLinterContextMenu: (target: HTMLElement) => void;
  isStatusContextMenuShowing: () => boolean;
  isLinterContextMenuShowing: () => boolean;
  isDevModeOverview: () => boolean;
  enterDevModeFocusView: (nodeId: string, backButtonTargetId?: string) => void;
  exitDevModeFocusOrOverview: () => void;
  isInteractiveInspectionEnabled: () => boolean;
  isChangingInspectionValues: () => boolean;
  onUnexpectedEditInFocusView: () => void;
  getUnitName: (source: {
    type: PluginSource;
    id: string;
  }, unitId: string) => string;
}

// Initial implementation that throws errors until initialized
export let fullscreenAlias: FullscreenAPI = {
  getIsExtension: () => isVsCodeEnvironment(),
  setNodesReady(_isBuilding, _nodeIds, _source, _description) {
    throw new Error("Fullscreen not initialized");
  },
  setNodesCompleted(_nodeIds, _source) {
    throw new Error("Fullscreen not initialized");
  },
  forwardExportsToExtension(_assetName, _buffer) {
    throw new Error("Fullscreen not initialized");
  },
  showAnnotationsButtonContextMenu(_target, _count) {
    throw new Error("Fullscreen not initialized");
  },
  showStatusContextMenu(_target, _nodeId) {
    throw new Error("Fullscreen not initialized");
  },
  showLinterContextMenu(_target) {
    throw new Error("Fullscreen not initialized");
  },
  isStatusContextMenuShowing() {
    throw new Error("Fullscreen not initialized");
  },
  isLinterContextMenuShowing() {
    throw new Error("Fullscreen not initialized");
  },
  isDevModeOverview: () => false,
  enterDevModeFocusView(_nodeId) {
    throw new Error("Fullscreen not initialized");
  },
  exitDevModeFocusOrOverview() {
    throw new Error("Fullscreen not initialized");
  },
  isInteractiveInspectionEnabled: () => false,
  isChangingInspectionValues: () => false,
  onUnexpectedEditInFocusView() {
    throw new Error("Fullscreen not initialized");
  },
  getUnitName(_source, _unitId) {
    throw new Error("Fullscreen not initialized");
  }
};

// Type for related links data
interface RelatedLink {
  nodeId: string;
  fileKey: string;
  linkName: string;
  linkUrl: string;
}

// Refactored class for managing related links with better naming and structure
export class RelatedLinksManager {
  pendingRelatedLinks: RelatedLink[] = [];
  flushLinks: (resolve: (value: unknown) => void, reject: (reason?: unknown) => void) => void;
  constructor() {
    // Refactored flushLinks with clearer variable names and structure
    this.flushLinks = debounce(async (resolve, reject) => {
      const linksToProcess = this.pendingRelatedLinks;
      this.pendingRelatedLinks = [];
      let retryMultiplier = 1;
      for (;;) {
        try {
          const requestData = {
            link_batch: linksToProcess.map(link => ({
              node_id: link.nodeId,
              file_key: link.fileKey,
              link_name: link.linkName,
              link_url: link.linkUrl
            }))
          };
          resolve(sendWithRetry.post("/api/files/related_links_batch", requestData));
          return;
        } catch (error) {
          // Handle client errors immediately
          if (error.status >= 400 && error.status < 500) {
            reject(error);
            return;
          }
        }

        // Exponential backoff with jitter
        const delay = 1000 * retryMultiplier * Math.random();
        await new Promise(resolve => setTimeout(resolve, delay));
        retryMultiplier = Math.min(2 * retryMultiplier, 64);
      }
    }, 100);
  }

  /**
   * Add links to the pending batch and trigger flush
   * @param links - Array of related links to add
   * @returns Promise that resolves when links are processed
   */
  addLinks(links: RelatedLink[]): Promise<unknown> {
    this.pendingRelatedLinks.push(...links);
    return new Promise((resolve, reject) => this.flushLinks(resolve, reject));
  }
}

/**
 * Initializes the fullscreen API with actual implementations
 */
export function initializeFullscreenAPI(): void {
  fullscreenAlias = {
    getIsExtension: () => isVsCodeEnvironment(),
    setNodesReady(isBuilding, nodeIds, source, description) {
      const status = isBuilding ? BuildStatus.BUILD : BuildStatus.NONE;
      setNodeStatus({
        nodeIds,
        status,
        sourceForLogging: source,
        description,
        editScopeType: SourceType.USER
      });
    },
    setNodesCompleted(nodeIds, source) {
      setNodeStatus({
        nodeIds,
        status: BuildStatus.COMPLETED,
        sourceForLogging: source,
        editScopeType: SourceType.USER
      });
    },
    forwardExportsToExtension(assetName, buffer) {
      sendAsset({
        assetName,
        buffer
      });
    },
    showStatusContextMenu(target, nodeId) {
      debugState.dispatch(showDropdownThunk({
        type: dropdownTypeReadyStatusContextMenu,
        data: {
          targetInViewport: target,
          nodeId
        }
      }));
    },
    showLinterContextMenu(target) {
      debugState.dispatch(showDropdownThunk({
        type: dropdownTypeLinterContextMenu,
        data: {
          targetInViewport: target
        }
      }));
    },
    isStatusContextMenuShowing: () => debugState.getState().dropdownShown?.type === dropdownTypeReadyStatusContextMenu,
    isLinterContextMenuShowing: () => debugState.getState().dropdownShown?.type === dropdownTypeLinterContextMenu,
    showAnnotationsButtonContextMenu(target, annotationsCount) {
      debugState.dispatch(showDropdownThunk({
        type: dropdownTypeAnnotationsButtonContextMenu,
        data: {
          targetInViewport: target,
          annotationsCount
        }
      }));
    },
    isDevModeOverview() {
      const viewState = debugState.getState().selectedView;
      return viewState.view === "fullscreen" && !!viewState.showOverview;
    },
    enterDevModeFocusView(nodeId, backButtonTargetId) {
      if (!nodeId || nodeId === defaultSessionLocalIDString) {
        return;
      }
      const currentView = debugState.getState().selectedView;
      atomStoreManager.set(atomM4, "dev_mode_canvas_ii");
      const newView = {
        ...currentView,
        editorType: FEditorType.DevHandoff,
        focusViewBackNavigation: {
          toEditorType: currentView.editorType,
          toOverview: false
        },
        devModeFocusId: nodeId,
        overviewBackButtonTargetNodeId: backButtonTargetId
      };
      debugState.dispatch(selectViewAction(newView));
      trackEventAnalytics("Dev Mode II Focus Entry Clicked");
    },
    exitDevModeFocusOrOverview() {
      const currentView = {
        ...debugState.getState().selectedView,
        showOverview: false,
        devModeFocusId: undefined
      };
      debugState.dispatch(selectViewAction(currentView));
    },
    isInteractiveInspectionEnabled: () => isInteractiveInspectionAndRollbackEnabled(),
    isChangingInspectionValues: eN,
    onUnexpectedEditInFocusView() {},
    // No-op function

    getUnitName(source, unitId) {
      const normalizedSource = {
        ...source,
        type: source.type === PluginSource.FIRST_PARTY ? "first-party" : source.type === PluginSource.LOCAL_PLUGIN ? "local-plugin" : "published-plugin"
      };
      return getUnitForEntry(normalizedSource, unitId);
    }
  };
}

// Export aliases with descriptive names
export const GK = RelatedLinksManager;
export const Ln = initializeFullscreenAPI;
export const z4 = fullscreenAlias;