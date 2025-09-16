import { setLastVisitedPlan } from '../905/93909';
import { getI18nString } from '../905/303541';
import { debugState } from '../905/407919';
import { getFeatureFlags } from '../905/601108';
import { customHistory } from '../905/612521';
import { parseAndNormalizeQuery } from '../905/634134';
import { buildUrlPath, getDisplayName, getRepoById } from '../905/760074';
import { OrganizationType } from '../905/833838';
import { isValidSessionLocalID, parseSessionLocalID, sessionLocalIDToString } from '../905/871411';
import { getInitialOptions } from '../figma_app/169182';
import { mapFileSummary } from '../figma_app/349248';
import { INTERACTION_FAKE_FILE_KEY } from '../figma_app/617727';
import { encodeHashFragment, serializeViewerQueryParams } from '../figma_app/831696';
import { isInteractionPathCheck } from '../figma_app/897289';
import { encodeUri } from '../figma_app/930338';
/**
 * Checks if the given view type is a prototype-related view.
 * Original function: A
 * @param viewType - The view type string.
 * @returns True if prototype-related, else false.
 */
function isPrototypeViewType(viewType: string): boolean {
  return viewType === 'proto' || viewType === 'deck' || viewType === 'presenter';
}

/**
 * Type definitions for selected view and related entities.
 */
interface FileSummary {
  key: string;
  name?: string;
  editor_type?: string;
}
interface SelectedView {
  view: string;
  file: FileSummary;
  isPresenterView?: boolean;
  scalingInfo?: {
    viewportScalingMode?: string;
    contentScalingMode?: string;
  };
  showDebugStats?: boolean;
  versionId?: string;
  backgroundColorHex?: number;
  hideUI?: boolean;
  bareUI?: boolean;
  showHotspots?: boolean;
  showDeviceFrame?: boolean;
  mobileOptimizations?: boolean;
  inlinePreview?: boolean;
  commentThreadId?: string;
  nodeId?: string;
  startingPointNodeId?: string;
  showProtoSidebar?: boolean;
  disableDefaultKeyboardNav?: boolean;
  commentsEnabled?: boolean;
  prevSelectedView?: {
    view: string;
    tab?: string;
    folderId?: string;
  };
  openAudienceViewPopout?: boolean;
  isAudienceViewPopout?: boolean;
  share?: boolean;
}

/**
 * Refactored class for handling selected view logic.
 * Original class: $$y0
 */
export class SelectedViewHandler {
  /**
   * Maps a path to a selected view object.
   * Original method: pathToSelectedView
   */
  pathToSelectedView(fileByKey: Record<string, FileSummary>, pathSegments: string[], queryString?: string, hashFragment?: string): SelectedView | null {
    const isTestInteraction = pathSegments[1] === 'test' && pathSegments[2] === 'interactions' && isPrototypeViewType(pathSegments[3]) && isInteractionPathCheck();
    let segments = pathSegments;
    if (isTestInteraction) {
      segments = segments.slice();
      segments.splice(1, 2);
    }
    const viewType = segments[1];
    if (!isPrototypeViewType(viewType)) return null;
    const query = queryString ? parseAndNormalizeQuery(queryString) : {};
    let fileKey = segments[3] === 'branch' && segments[4] ? segments[4] : segments[2];
    if (isTestInteraction) fileKey = INTERACTION_FAKE_FILE_KEY;
    let file = fileByKey[fileKey];
    if (!file) {
      const {
        editing_file
      } = getInitialOptions();
      if (editing_file && editing_file.key === fileKey) file = editing_file;
    }
    if (!file) {
      throw new Error(`Missing file object, path=${segments.join('/')}, editingFile=${JSON.stringify(getInitialOptions().editing_file)}`);
    }
    const selectedView: SelectedView = {
      view: 'prototype',
      file: mapFileSummary(file),
      showHotspots: true,
      showDeviceFrame: true,
      mobileOptimizations: query['mobile-optimizations'] === 'true'
    };
    if (viewType === 'presenter') selectedView.isPresenterView = true;
    if (hashFragment) selectedView.commentThreadId = hashFragment.slice(1);

    // Scaling info
    if (query.scaling) {
      selectedView.scalingInfo = selectedView.scalingInfo || {};
      selectedView.scalingInfo.viewportScalingMode = query.scaling;
    }
    if (query['content-scaling']) {
      selectedView.scalingInfo = selectedView.scalingInfo || {};
      selectedView.scalingInfo.contentScalingMode = query['content-scaling'];
    }

    // Other flags
    if (query['show-debug-stats']) selectedView.showDebugStats = true;
    if (query['version-id']) selectedView.versionId = query['version-id'];
    if (query['bg-color']) {
      selectedView.backgroundColorHex = 0xFFFFFF & parseInt(query['bg-color'], 16);
    }
    if (query['hide-ui'] === '1') selectedView.hideUI = true;
    if (query['bare-ui'] === '1') selectedView.bareUI = true;
    if (query['hotspot-hints'] === '0') selectedView.showHotspots = false;
    if (query['device-frame'] === '0') selectedView.showDeviceFrame = false;
    if (query['inline-viewer'] === '1') selectedView.inlinePreview = true;

    // Node IDs
    if (query['node-id']) {
      const nodeId = parseSessionLocalID(query['node-id']);
      if (isValidSessionLocalID(nodeId)) selectedView.nodeId = sessionLocalIDToString(nodeId);
    }
    if (query['starting-point-node-id']) {
      const startId = parseSessionLocalID(query['starting-point-node-id']);
      if (isValidSessionLocalID(startId)) selectedView.startingPointNodeId = sessionLocalIDToString(startId);
    }

    // Sidebar and keyboard nav
    if (query['show-proto-sidebar'] === '1') selectedView.showProtoSidebar = true;
    if (query['disable-default-keyboard-nav'] === '1') selectedView.disableDefaultKeyboardNav = true;

    // Comments
    if (query['comments-enabled'] === '1' || query['allow-comments'] === '1') {
      selectedView.commentsEnabled = true;
    }

    // Last visited plan
    if (query['prev-plan-id'] && query['prev-plan-type']) {
      debugState.dispatch(setLastVisitedPlan({
        planId: query['prev-plan-id'],
        planType: query['prev-plan-type'] === 'org' ? OrganizationType.ORG : OrganizationType.TEAM
      }));
    }

    // Previous selected view
    if (query['prev-selected-view']) {
      if (query['prev-selected-view'] === 'recentsAndSharing') {
        selectedView.prevSelectedView = {
          view: 'recentsAndSharing',
          tab: query['prev-tab']
        };
      } else if (query['prev-selected-view'] === 'folder' && query['prev-folder-id']) {
        selectedView.prevSelectedView = {
          view: 'folder',
          folderId: query['prev-folder-id']
        };
      }
    }

    // Popout and share
    if (selectedView.isPresenterView && query['open-popout']) selectedView.openAudienceViewPopout = true;
    if (query.popout && (!getFeatureFlags().slides_pv_av_refresh || window.opener)) {
      selectedView.isAudienceViewPopout = true;
    }
    if (query.share) selectedView.share = true;
    return selectedView;
  }

  /**
   * Determines if a history change is required between two selected views.
   * Original method: requireHistoryChange
   */
  requireHistoryChange(current: SelectedView, previous: SelectedView): boolean {
    return current.view === 'prototype' && previous.view === 'prototype' && !!current.nodeId && current.nodeId !== previous.nodeId;
  }

  /**
   * Converts a selected view object to a path string.
   * Original method: selectedViewToPath
   */
  selectedViewToPath(selectedView: SelectedView, context: {
    repos: any;
    lastVisitedPlan?: {
      planId?: string;
      planType?: string;
    };
  }): string | null {
    if (selectedView.view !== 'prototype') return null;
    let path: string;
    const file = selectedView.file;
    if (file.key === INTERACTION_FAKE_FILE_KEY) {
      const {
        pathname,
        search
      } = customHistory.location;
      switch (pathname) {
        case '/test/interactions/proto':
          return `/test/interactions/proto${search}`;
        case '/test/interactions/deck':
          return `/test/interactions/deck${search}`;
        case '/test/interactions/presenter':
          return `/test/interactions/presenter${search}`;
        default:
          return `/test/interactions${search}`;
      }
    }
    const viewName = this.selectedViewName(selectedView, context);
    const encodedViewName = viewName ? encodeUri(viewName) : '';
    let viewType = 'proto';
    if (selectedView.isPresenterView) {
      viewType = 'presenter';
    } else {
      switch (file.editor_type) {
        case 'slides':
          viewType = 'deck';
          break;
        case 'design':
        default:
          viewType = 'proto';
      }
    }
    if (file) {
      const repo = getRepoById(file, context.repos);
      path = buildUrlPath(file, repo, viewType);
    } else {
      path = `/${viewType}/${file.key}`;
      if (encodedViewName) path += `/${encodedViewName}`;
    }
    const lastPlanId = context.lastVisitedPlan?.planId || null;
    const lastPlanType = context.lastVisitedPlan?.planType || null;
    path += serializeViewerQueryParams(selectedView, lastPlanId, lastPlanType);
    path += encodeHashFragment(selectedView.commentThreadId);
    return path;
  }

  /**
   * Gets the display name for the selected view.
   * Original method: selectedViewName
   */
  selectedViewName(selectedView: SelectedView, context: {
    repos: any;
  }): string | null {
    if (selectedView.view !== 'prototype') return null;
    const file = selectedView.file;
    let name = file.name;
    if (file) {
      const repo = getRepoById(file, context.repos);
      if (repo) name = getDisplayName(file, repo);
      name = name ?? file.name;
    }
    return name ?? getI18nString('proto.prototype_view_selector.untitled');
  }

  /**
   * Checks if the selected view has missing resources.
   * Original method: selectedViewHasMissingResources
   */
  selectedViewHasMissingResources(_selectedView: SelectedView, _context: any): boolean {
    return false;
  }
}

// Export with refactored name
export const f = SelectedViewHandler;