import { analyticsEventManager } from '../905/449184';
import { getFeatureFlags } from '../905/601108';
import { selectedNodeGuidAtom } from '../905/632622';
import { getSingletonSceneGraph } from '../905/700578';
import { atomStoreManager } from '../figma_app/27355';
import { mapEditorTypeToStringWithError } from '../figma_app/53721';
import { stringifyPoint, stringifyRectangle, stringifyVisibleArea } from '../figma_app/407767';
import { fullscreenValue } from '../figma_app/455680';
import { openFileKeyAtom } from '../figma_app/516028';
import { FRAME_SELECTION_VERSION, getBestFrame, getFrameSelectionConfig } from '../figma_app/663669';
import { editorTypeAtom } from '../figma_app/976749';

// Original function name: $$h0
// Tracks auto-suggest trigger shadowing events with immediate and delayed logging.
/**
 * Tracks auto-suggest trigger shadowing events.
 * @param insertedLocation - The point where the node was inserted.
 * @param insertedNodeGuid - The GUID of the inserted node.
 */
export function trackAutoSuggestTriggerShadowing(insertedLocation: {
  x: number;
  y: number;
}, insertedNodeGuid: string): void {
  if (!getFeatureFlags().anticipation_trigger_shadow) {
    return;
  }

  // Track immediate event
  analyticsEventManager.trackDefinedEvent('auto_suggest.trigger_shadowing', buildTriggerShadowingEventData({
    insertedLocation,
    insertedNodeGuid,
    isDelayed: false
  }));

  // Track delayed event after 5 seconds
  setTimeout(() => {
    analyticsEventManager.trackDefinedEvent('auto_suggest.trigger_shadowing', buildTriggerShadowingEventData({
      insertedLocation,
      insertedNodeGuid,
      isDelayed: true
    }));
  }, 5000);
}

// Original function name: g
// Builds event data object for trigger shadowing.
/**
 * Builds the event data object for trigger shadowing analytics.
 * @param params - The parameters for building the event data.
 * @returns The event data object.
 */
function buildTriggerShadowingEventData(params: {
  insertedLocation: {
    x: number;
    y: number;
  };
  insertedNodeGuid: string;
  isDelayed: boolean;
}): Record<string, any> {
  const {
    insertedLocation,
    insertedNodeGuid,
    isDelayed
  } = params;
  const lastSelectedNodeGuid = atomStoreManager.get(selectedNodeGuidAtom);
  const sceneGraph = getSingletonSceneGraph();
  const insertedNode = sceneGraph.get(insertedNodeGuid);
  const parentNode = insertedNode?.parentNode;
  const lastSelectedNode = lastSelectedNodeGuid ? sceneGraph.get(lastSelectedNodeGuid) : undefined;
  const viewportInfo = fullscreenValue.getViewportInfo();
  const fileKey = atomStoreManager.get(openFileKeyAtom) ?? undefined;
  const editorType = atomStoreManager.get(editorTypeAtom);
  const productType = editorType ? mapEditorTypeToStringWithError(editorType) : undefined;
  const startTime = performance.now();
  const dominantFrameGuid = getBestFrame(viewportInfo, getFrameSelectionConfig());
  const endTime = performance.now();
  const dominantFrameNode = dominantFrameGuid ? sceneGraph.get(dominantFrameGuid) : undefined;
  return {
    fileKey,
    insertedLocation: stringifyPoint(insertedLocation),
    insertedNodeGuid,
    insertedNodeType: insertedNode?.type,
    insertedNodeBounds: stringifyRectangle(insertedNode?.absoluteBoundingBox),
    parentNodeGuid: parentNode?.guid,
    parentNodeType: parentNode?.type,
    parentNodeBounds: stringifyRectangle(parentNode?.absoluteBoundingBox),
    lastSelectedNodeGuid: lastSelectedNode?.guid,
    lastSelectedNodeType: lastSelectedNode?.type,
    lastSelectedNodeBounds: stringifyRectangle(lastSelectedNode?.absoluteBoundingBox),
    viewportInfo: stringifyVisibleArea(viewportInfo),
    dominantFrameGuid,
    dominantFrameNodeType: dominantFrameNode?.type,
    dominantFrameBounds: stringifyRectangle(dominantFrameNode?.absoluteBoundingBox),
    version: FRAME_SELECTION_VERSION,
    isDelayedLog: isDelayed,
    durationMs: endTime - startTime,
    productType
  };
}

// Original export name: L
export const L = trackAutoSuggestTriggerShadowing;