import { resourceDataAndPresetKeysV2SetAtom } from '../905/72677';
import { trackEventAnalytics } from '../905/449184';
import { sendHistogram } from '../905/485103';
import { getPartnerType } from '../905/853613';
import { atomStoreManager } from '../figma_app/27355';
import { isEligibleElement } from '../figma_app/915774';
// Original function name: $$d0
// Original export name: V
// Refactored to improve readability, add types, and maintain functionality

interface ComponentLike {
  library_key: string;
  node_id: string;
}

interface HistogramData {
  metricName: string;
  duration: number;
}

/**
 * Tracks analytics for adding a component-like instance.
 * @param editingFileKey - The key of the editing file (original param: e)
 * @param componentLike - The component-like object (original param: t)
 * @param success - Whether the operation was successful (original param: i)
 * @param appleEulaAccepted - Whether Apple EULA was accepted (original param: d)
 * @param histogramData - Optional histogram data to send (original param: c)
 */
export function trackComponentLikeAddInstance(
  editingFileKey: string,
  componentLike: ComponentLike,
  success: boolean,
  appleEulaAccepted: boolean,
  histogramData?: HistogramData
): void {
  const partnerType = getPartnerType(componentLike.library_key);
  const resourceDataAndPresetKeys = atomStoreManager.get(resourceDataAndPresetKeysV2SetAtom);
  
  trackEventAnalytics('ComponentLike Add instance', {
    editingFileKey,
    componentLikeLibraryKey: componentLike.library_key,
    componentLikeGUID: componentLike.node_id,
    success,
    partnerType,
    isExample: isEligibleElement(componentLike, resourceDataAndPresetKeys),
    appleEulaAccepted
  }, {
    forwardToDatadog: true
  });
  
  if (histogramData) {
    sendHistogram(histogramData.metricName, histogramData.duration);
  }
}

export const V = trackComponentLikeAddInstance;
