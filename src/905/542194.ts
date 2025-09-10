import { DistributionAnalytics, HierarchicalTimerGroup, PerfTimerManager } from '../905/609396';
import { perfTimerFrameManagerBindings } from '../figma_app/763686';

/**
 * Timer group for hierarchical performance tracking.
 * Original variable: $$s2
 */
export const reactTimerGroup = new HierarchicalTimerGroup({
  bufferSize: 400
});

/**
 * Installs performance timer callbacks.
 * Original call: PerfTimerManager.installCallbacks()
 */
PerfTimerManager.installCallbacks();

/**
 * Global performance timer manager instance.
 * Original variable: $$o3
 */
export const globalPerfTimer = PerfTimerManager.global();

/**
 * Distribution analytics instance.
 * Original variable: $$l1
 */
export const distributionAnalytics = new DistributionAnalytics();

// Expose timers and analytics to window for debugging/profiling
window.FIGMA_appTimer = reactTimerGroup;
window.FIGMA_opsTimer = globalPerfTimer;
window.FIGMA_distribution = distributionAnalytics;

/**
 * Start React profiling via fZb.
 * Original window.FIGMA_start_react_profile
 */
window.FIGMA_start_react_profile = () => perfTimerFrameManagerBindings?.startProfile('react', 1);

/**
 * Stop React profiling via fZb.
 * Original window.FIGMA_stop_react_profile
 */
window.FIGMA_stop_react_profile = () => perfTimerFrameManagerBindings?.stopProfile('react', 1);

/**
 * Set of timer event names for analytics.
 * Original variable: $$d0
 */
export const timerEventNames = new Set(['react-render', 'frame', 'trigger-action', 'symbol-updater', 'style-updater', 'synthesize-all-pending-changes', 'scene-render', 'render-tree-generation', 'fullscreen-handle-event', 'comments-render', 'react', 'update-selection-properties']);

// Export aliases for refactored names
export const Q4 = timerEventNames;
export const Vq = distributionAnalytics;
export const rH = reactTimerGroup;
export const sn = globalPerfTimer;
