import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { localStorageRef } from '../905/657224';
import { useAtomWithSubscription } from '../figma_app/27355';
import { setLeftPanelTab } from '../figma_app/91703';
import { expTootipsSymbol } from '../figma_app/202626';
import { checkUserAccess, isOnboardingComplete } from '../figma_app/242339';
import { selectCurrentFile } from '../figma_app/516028';
import { useHasAnyUiKit } from '../figma_app/630951';
import { UserInterfaceElements } from '../figma_app/763686';
import { isStarterUserAtom } from '../figma_app/864723';
import { isDesignFileType } from '../figma_app/976749';
// Utility function to check if a node tree contains any visible TEXT nodes
// Original: $$g0
/**
 * Recursively checks if the given node or any of its visible children contain a TEXT node.
 * @param node - The root node to start checking from.
 * @returns True if a TEXT node is found, false otherwise.
 */
export function hasTextNode(node: any): boolean {
  const queue = [node];
  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode.visible !== false) {
      if (currentNode.type === 'TEXT') {
        return true;
      }
      if (currentNode.childrenNodes) {
        queue.push(...currentNode.childrenNodes);
      }
    }
  }
  return false;
}

// Constants for localStorage keys and default tab
// Original: f, E
const LAST_USED_LEFT_PANEL_TAB_KEY = 'last-used-left-panel-tab';
const ASSETS_TAB_VALUE = 'ASSETS_TAB';

// Function to set the last used left panel tab in localStorage
// Original: $$y1
/**
 * Sets the last used left panel tab in localStorage based on the provided tab.
 * @param tab - The UserInterfaceElements tab to set.
 */
export function setLastUsedLeftPanelTab(tab: UserInterfaceElements): void {
  if (localStorageRef) {
    const value = tab === UserInterfaceElements.ASSETS ? ASSETS_TAB_VALUE : 'LAYERS_TAB';
    localStorageRef.setItem(LAST_USED_LEFT_PANEL_TAB_KEY, value);
  }
}

// Helper function to get the last used left panel tab from localStorage
// Original: b
/**
 * Retrieves the last used left panel tab from localStorage.
 * @returns The UserInterfaceElements tab or null if not found.
 */
function getLastUsedLeftPanelTab(): UserInterfaceElements | null {
  if (localStorageRef) {
    const value = localStorageRef.getItem(LAST_USED_LEFT_PANEL_TAB_KEY);
    if (value) {
      return value === ASSETS_TAB_VALUE ? UserInterfaceElements.ASSETS : UserInterfaceElements.LAYERS;
    }
  }
  return null;
}

// React hook to initialize the left panel tab based on user state and conditions
// Original: $$T2
/**
 * Custom hook that dispatches the left panel tab initialization if conditions are met.
 */
export function useInitializeLeftPanelTab(): void {
  const dispatch = useDispatch<AppDispatch>();
  const hasExpTooltips = checkUserAccess([expTootipsSymbol]);
  const onboardingComplete = isOnboardingComplete();
  const { hasAnyUiKit } = useHasAnyUiKit();
  const isStarterUser = useAtomWithSubscription(isStarterUserAtom);
  const isDesignFile = isDesignFileType();
  const canEdit = selectCurrentFile()?.canEdit;

  useEffect(() => {
    if (isDesignFile && canEdit && onboardingComplete && !hasExpTooltips) {
      const lastTab = getLastUsedLeftPanelTab();
      dispatch(setLeftPanelTab({
        tab: lastTab,
        persist: true
      }));
    }
  }, [dispatch, canEdit, isDesignFile, onboardingComplete, hasExpTooltips, hasAnyUiKit, isStarterUser]);
}
export const C$ = hasTextNode
export const Cp = setLastUsedLeftPanelTab
export const a4 = useInitializeLeftPanelTab
