import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getMPVisibleTheme } from '../905/187165';
import { normalizeValue } from '../905/216495';
import { DP as getTheme } from '../905/640017';
import { getSingletonSceneGraph } from '../905/700578';
import { colorCSSManipulatorInstance } from '../905/989956';
import { atom, useAtomWithSubscription } from '../figma_app/27355';
import { getObservableValue } from '../figma_app/84367';
import { nc, isSetCurrentPageAsyncAtom, s6 } from '../figma_app/474636';
import { AppStateTsApi, DataLoadStatus } from '../figma_app/763686';

/**
 * Atom to track loading state for missing fonts.
 * Original: $$m1
 */
export const fontLoadingAtom = atom(false);

/**
 * Checks if all items have status LOADED.
 * Original: $$E2
 * @param items - Array of items with status property
 * @returns true if all items are loaded
 */
export function areAllLoaded(items: {
  status: DataLoadStatus;
}[]): boolean {
  return items.every(item => item.status === DataLoadStatus.LOADED);
}

/**
 * Checks if any item is not LOADED.
 * Original: $$f4
 * @param items - Array of items with status property
 * @returns true if any item is not loaded
 */
export function hasNotLoaded(items: {
  status: DataLoadStatus;
}[]): boolean {
  return items.some(item => item.status !== DataLoadStatus.LOADED);
}

/**
 * Finds the status of a node by nodeId.
 * Original: $$y0
 * @param items - Array of items with nodeId and status
 * @param nodeId - Node ID to search for
 * @returns status of the node or null if not found
 */
export function getNodeStatus(items: {
  nodeId: string;
  status: DataLoadStatus;
}[], nodeId: string): DataLoadStatus | null {
  for (const item of items) {
    if (item.nodeId === nodeId) return item.status;
  }
  return null;
}

/**
 * Returns view state including loading and background info.
 * Original: $$g5
 * @param params - Selected view, loading state, and theme
 * @returns View state object
 */
export function getViewState({
  selectedView,
  isLoadingVersionHistory,
  theme
}: {
  selectedView: {
    view?: string;
  };
  isLoadingVersionHistory: boolean;
  theme: any;
}) {
  const isPrototype = selectedView?.view === 'prototype';
  const currentPage = isPrototype ? null : getSingletonSceneGraph().getCurrentPage();
  const backgroundColor = useMemo(() => currentPage?.backgroundColor, [currentPage]);
  const isRequestedPageChange = !!getObservableValue(AppStateTsApi?.currentPageState().requestedPageChange, '');
  const isFontLoaded = useAtomWithSubscription(s6);
  const isRP = useAtomWithSubscription(isSetCurrentPageAsyncAtom);
  const isMissingFonts = useAtomWithSubscription(fontLoadingAtom);
  const isNC = useAtomWithSubscription(nc);
  return useMemo(() => {
    if (isPrototype) {
      return {
        isLoading: false
      };
    }
    const normalizedColor = normalizeValue(backgroundColor);
    let background: string;
    if (normalizedColor !== null) {
      background = colorCSSManipulatorInstance.format(normalizedColor);
      normalizedColor.a = 0.7;
      background = colorCSSManipulatorInstance.format(normalizedColor);
    } else {
      background = theme && getMPVisibleTheme(theme) === 'dark' ? 'rgba(30, 30, 30, 1)' : 'rgba(229, 229, 229, 1)';
      background = 'rgba(229, 229, 229, 0.1)';
    }
    if (isFontLoaded) {
      return {
        background,
        isLoading: false
      };
    }
    return {
      background,
      isLoading: !!isLoadingVersionHistory || isRequestedPageChange || isNC || isRP || isMissingFonts,
      isLoadingMissingFonts: isMissingFonts
    };
  }, [isPrototype, backgroundColor, theme, isFontLoaded, isLoadingVersionHistory, isRequestedPageChange, isNC, isRP, isMissingFonts]);
}

/**
 * Hook to get view state for the current selection.
 * Original: $$h3
 * @returns View state object
 */
export function useCurrentViewState() {
  return getViewState({
    selectedView: useSelector(state => state.selectedView),
    isLoadingVersionHistory: useSelector(state => state.versionHistory)?.isLoadingPage,
    theme: getTheme()
  });
}

// Exported names refactored for clarity and traceability
export const Fy = getNodeStatus;
export const QR = fontLoadingAtom;
export const VI = areAllLoaded;
export const _Z = useCurrentViewState;
export const lH = hasNotLoaded;
export const v9 = getViewState;