import { useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import { reportError } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { trackEventAnalytics } from '../905/449184';
import { useSingleEffect } from '../905/791079';
import { atom, useAtomValueAndSetter } from '../figma_app/27355';
import { useCanAccessFullDevMode } from '../figma_app/473493';
import { setupRemovableAtomFamily } from '../figma_app/615482';
import { trackFileEventWithStore } from '../figma_app/901889';

/**
 * Atom for removable state management.
 * Original: _
 */
export const removableAtomFamily = setupRemovableAtomFamily(() => atom(false), {
  preserveValue: false
});

/**
 * Atom for string state.
 * Original: $$h1
 */
export const atomH1 = atom('');

/**
 * Atom for string state.
 * Original: $$m4
 */
export const atomM4 = atom('');

/**
 * Enum for overview tabs.
 * Original: $$g3
 */
export enum OverviewTab {
  ALL = 'ALL',
  RECENTLY_VIEWED = 'RECENTLY_VIEWED',
  BUILD = 'BUILD',
  COMPLETED = 'COMPLETED',
}

/**
 * Enum for sorting options.
 * Original: $$f0
 */
export enum SortBy {
  RECENT = 'RECENT',
  PAGE = 'PAGE',
  ALPHABETICAL = 'ALPHABETICAL',
}

/**
 * Tracks overview statistics for dev mode.
 * Original: $$E2
 * @param nodes - Array of node objects
 * @param tab - Current tab
 * @param sortedBy - Sorting method
 */
export function trackOverviewStats(nodes: Array<any>, tab: OverviewTab, sortedBy: SortBy): void {
  let lastStats: any = null;
  const trackFileEvent = trackFileEventWithStore();
  const canAccessFullDevMode = useCanAccessFullDevMode();
  useSingleEffect(() => {
    lastStats = null;
  });
  useEffect(() => {
    if (nodes.length === 0) return;
    try {
      const numPages = new Set(nodes.map(node => node.pageId)).size;
      const numUsers = new Set(nodes.filter(node => node.userId).map(node => node.userId)).size;
      const stats = {
        numNodes: nodes.length,
        numNodesWithFallbackUser: nodes.filter(node => node.isFallbackForLegacyStatus).length,
        numSectionsWithMissingUserInfo: nodes.filter(node => !node.userId && node.isSection).length,
        numFramesWithMissingUserInfo: nodes.filter(node => !node.userId && !node.isSection).length,
        numPages,
        numUsers,
        tab,
        sortedBy,
        type: canAccessFullDevMode ? 'full' : 'lite'
      };
      if (!shallowEqual(stats, lastStats)) {
        trackFileEvent('dev_mode.overview.stats', stats, {
          forwardToDatadog: true
        });
        lastStats = stats;
      }
    } catch (error) {
      reportError(ServiceCategories.DEVELOPER_TOOLS, error);
    }
  }, [nodes, sortedBy, tab, canAccessFullDevMode, trackFileEvent]);
}

/**
 * Tracks avatar loading and error events for dev mode overview.
 * Original: $$y5
 * @param usersRequested - Array of requested users
 * @param usersInfo - Users info object
 * @param nodes - Array of node objects
 */
export function trackOverviewAvatars(usersRequested: Array<any>, usersInfo: any, nodes: Array<any>): void {
  const [hasError, setHasError] = useAtomValueAndSetter(removableAtomFamily);
  const trackFileEvent = trackFileEventWithStore();
  useEffect(() => {
    if (hasError) return;
    try {
      if (usersRequested.length > 0 && usersInfo && !usersInfo.loading) {
        if (usersInfo.hasError || !usersInfo.usersById) {
          setHasError(true);
          trackEventAnalytics('dev_mode.overview.avatars.error', {}, {
            forwardToDatadog: true
          });
        } else if (Object.keys(usersInfo.usersById).length === usersRequested.length) {
          setHasError(true);
          const nodesMissingUser = nodes.filter(node => !node.userId);
          const nodesMissingFallback = nodes.filter(node => !node.userId && node.isFallbackForLegacyStatus);
          const nodesEditedMissingUser = nodes.filter(node => !node.userId && !node.isFallbackForLegacyStatus && node.hasBeenEditedSinceLastStatusChange);
          const usersNotFound = Object.entries(usersInfo.usersById).filter(([id, user]) => id && !user);
          trackFileEvent('dev_mode.overview.avatars.loaded', {
            numUsersRequested: usersRequested.length,
            numUsersNotFound: usersNotFound.length,
            numNodesWithMissingUserInfo: nodesMissingUser.length,
            numNodesWithMissingFallbackUserInfo: nodesMissingFallback.length,
            numNodesEditedWithMissingUserInfo: nodesEditedMissingUser.length
          }, {
            forwardToDatadog: true
          });
        }
      }
    } catch (error) {
      setHasError(true);
      reportError(ServiceCategories.DEVELOPER_TOOLS, error);
    }
  }, [hasError, nodes, setHasError, trackFileEvent, usersRequested.length, usersInfo]);
}

// Export refactored variables with original names for compatibility
export const _6 = SortBy;
export const _o = atomH1;
export const c7 = trackOverviewStats;
export const oz = OverviewTab;
export const wz = atomM4;
export const zz = trackOverviewAvatars;
