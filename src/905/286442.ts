import { useEffect, useMemo } from 'react';
import { setupAutoFocusHandler, setupKeyboardNavigationFocus } from '../905/44915';
import { useListItemRegistration } from '../905/479155';
import { useKeyboardNavigationItem } from '../figma_app/119475';

/**
 * Handles keyboard navigation and focus logic for a grid/list item.
 * Original function name: $$o0
 *
 * @param params - Configuration options for focus and navigation.
 * @returns Object containing focus/blur handlers, active state, and target info.
 */
export function usKeyboardFocusHandler({
  ref,
  navigationOptions,
  itemsPerRow,
  debug,
  focusOptions,
  itemOverrides
}: {
  ref: React.RefObject<HTMLElement>;
  navigationOptions: any;
  itemsPerRow?: number;
  debug?: boolean;
  focusOptions?: any;
  itemOverrides?: {
    column?: number;
  };
}) {
  // Extract item and layout indices, and layout state
  const {
    itemIndex,
    layoutIndex,
    inPrimaryLayout
  } = useListItemRegistration(ref);

  // Compute navigation path and column
  const path = [layoutIndex, itemsPerRow != null ? Math.floor(itemIndex / itemsPerRow) : 0];
  const column = itemOverrides?.column ?? (itemsPerRow != null ? itemIndex % itemsPerRow : itemIndex);

  // Setup keyboard navigation item
  const {
    isFauxFocused,
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = useKeyboardNavigationItem({
    path,
    column,
    navigationOptions: typeof navigationOptions === 'function' ? navigationOptions({
      itemIndex,
      layoutIndex,
      inPrimaryLayout
    }) : navigationOptions
  } as any);

  // Setup auto focus handler
  const shouldAutoFocus = setupAutoFocusHandler({
    isPrimaryLayout: inPrimaryLayout,
    layoutIndex,
    itemIndex,
    debug,
    ...focusOptions
  });

  // Setup focus/blur handlers
  const {
    focus,
    blur
  } = setupKeyboardNavigationFocus({
    keyboardNavigationItem,
    shouldAutoFocus,
    enableFauxFocus: true
  });

  // Memoized target info
  const target = useMemo(() => keyboardNavigationItem ? {
    item: keyboardNavigationItem,
    index: itemIndex,
    element: ref.current
  } : null, [itemIndex, keyboardNavigationItem, ref]);

  // Effect to set keyboard navigation element if not present
  useEffect(() => {
    if (ref.current && !keyboardNavigationItem) {
      setKeyboardNavigationElement(ref.current);
    }
  }, [keyboardNavigationItem, ref, setKeyboardNavigationElement]);
  return {
    focus,
    active: isFauxFocused,
    target,
    blur
  };
}

/** Exported as H (original: $$o0) */
export const H = usKeyboardFocusHandler;