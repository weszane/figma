import { createContext, forwardRef, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jsx, jsxs } from 'react/jsx-runtime';
import { vq } from './8732';
import { lQ } from './934246';
import { dP, M3 } from '../figma_app/119475';
import { handleKeyboardEventByState } from '../figma_app/896988';
export enum NavigationPath {
  Search = 0,
  BeforeItems = 1,
  ParentSubpath = 2,
  ScrollContainer = 3,
  MultiselectParentCheckbox = 4,
}
export enum ItemType {
  Leaves = 0,
  Subpaths = 1,
}
export enum NavigationAction {
  Focus = 0,
  FauxFocus = 1,
  Click = 2,
}
export interface NavigationState {
  path: number[];
  column?: number;
  action?: NavigationAction;
}
const initialNavigationState: NavigationState = {
  path: [],
  column: void 0
};
const NavigationContext = createContext<[NavigationState, (state: NavigationState) => void]>([initialNavigationState, lQ]);
export interface KeyboardNavigationProviderProps {
  beforeItemsRefs: React.RefObject<HTMLElement>[];
  shouldRender: boolean;
  searchBarRef?: React.RefObject<any>;
  pickerToggleRef?: React.RefObject<HTMLElement>;
  onDrillup: () => void;
  onSubpathDrilldown: (id: string) => void;
  indexOfParent: number;
  isSearching: boolean;
  children: React.ReactNode;
}
export function KeyboardNavigationProvider({
  beforeItemsRefs,
  shouldRender,
  searchBarRef,
  pickerToggleRef,
  onDrillup,
  onSubpathDrilldown,
  indexOfParent,
  isSearching,
  children
}: KeyboardNavigationProviderProps) {
  const navigationState = useState(initialNavigationState);
  const setNavigationState = navigationState[1];
  const instanceSwapPickerShown = useSelector((e: any) => e.instanceSwapPickerShown);
  const dispatch = useDispatch();
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const isSearchInputFocused = searchBarRef?.current?.searchInput === document.activeElement;
    if (e.key === 'I' && e.shiftKey && !isSearchInputFocused) {
      e.preventDefault();
      searchBarRef?.current?.focus();
      return;
    }
    if (e.key === 'Enter' && isSearchInputFocused && isSearching) {
      e.preventDefault();
      setNavigationState({
        path: [NavigationPath.ScrollContainer, 0, 0],
        column: 0,
        action: NavigationAction.Click
      });
      return;
    }
    if (e.key === 'Escape') {
      dispatch(vq());
      if (instanceSwapPickerShown.isShown && instanceSwapPickerShown.returnFocusToToggle && pickerToggleRef?.current) {
        pickerToggleRef.current.focus();
      }
    }
  }, [dispatch, instanceSwapPickerShown, isSearching, pickerToggleRef, searchBarRef, setNavigationState]);
  const overrideLeft = useCallback((navState: any) => {
    if (navState.path[0] === NavigationPath.ParentSubpath || navState.path[0] === NavigationPath.ScrollContainer) {
      if (navState.column && navState.column > 0) return null;
      onDrillup();
      setNavigationState({
        path: [NavigationPath.ScrollContainer, 1, indexOfParent],
        action: NavigationAction.Focus
      });
    }
    return null;
  }, [indexOfParent, onDrillup, setNavigationState]);
  const overrideRight = useCallback((navState: any) => {
    if (navState.path[1] === 1) {
      const id = navState.id ? navState.id.split('-')[1] : void 0;
      if (id) {
        onSubpathDrilldown(id);
        setNavigationState({
          path: [NavigationPath.ParentSubpath],
          action: NavigationAction.Focus
        });
      }
    }
    return null;
  }, [onSubpathDrilldown, setNavigationState]);
  const overrideDown = useCallback((navState: any) => navState.path[0] === NavigationPath.Search && isSearching ? {
    path: [NavigationPath.ScrollContainer, 0, 1],
    column: 0
  } : null, [isSearching]);
  return jsxs(dP, {
    onKeyDown: handleKeyDown,
    overrideLeft,
    overrideRight,
    overrideDown,
    allowHorizontalNavigationWhileInputFocused: true,
    children: [beforeItemsRefs.map((ref, i) => jsx(BeforeItemRef, {
      index: i,
      ref,
      shouldRender
    }, i)), jsx(NavigationContext.Provider, {
      value: navigationState,
      children
    })]
  });
}
const BeforeItemRef = forwardRef<HTMLElement, {
  index: number;
  shouldRender: boolean;
}>((props, ref) => {
  const {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: [NavigationPath.BeforeItems],
    column: props.index
  });
  useNavigationEffect(keyboardNavigationItem);
  useEffect(() => {
    if (ref && 'current' in ref && ref.current && props.shouldRender) {
      setKeyboardNavigationElement(ref.current);
    }
  }, [props.shouldRender, ref, setKeyboardNavigationElement]);
  return null;
});
function useNavigationEffect(navigationItem: any) {
  const [{
    path,
    column,
    action
  }, setNavigationState] = useContext(NavigationContext);
  useEffect(() => {
    if (navigationItem && navigationItem.path.join() === path.join() && navigationItem.column === (column ?? null) && action !== void 0) {
      switch (action) {
        case NavigationAction.Focus:
          navigationItem.focus({
            preventScroll: true
          });
          break;
        case NavigationAction.FauxFocus:
          navigationItem.fauxFocus({
            preventScroll: true
          });
          break;
        case NavigationAction.Click:
          navigationItem.simulateClick();
      }
      setNavigationState(initialNavigationState);
    }
  }, [navigationItem, path, column, setNavigationState, action]);
}
export function useKeyboardNavigationItemForSearch() {
  const {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: [NavigationPath.Search],
    id: 'search',
    navigationOptions: {
      supportHorizontalNavigation: false
    }
  });
  useNavigationEffect(keyboardNavigationItem);
  return {
    setKeyboardNavigationElement
  };
}
export function useKeyboardNavigationItemForParentSubpath(disabled: boolean) {
  const {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: [NavigationPath.ParentSubpath],
    id: 'parentSubpath',
    disabled
  });
  useNavigationEffect(keyboardNavigationItem);
  return {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  };
}
export function useKeyboardNavigationItemForLeaf(index: number, numCols: number, disabled: boolean) {
  const {
    row,
    col
  } = useMemo(() => ({
    row: Math.floor(index / numCols),
    col: index % numCols
  }), [index, numCols]);
  const {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: [NavigationPath.ScrollContainer, 0, row],
    column: col,
    id: `leaf-${index}`,
    disabled
  });
  useNavigationEffect(keyboardNavigationItem);
  return {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  };
}
export function useKeyboardNavigationItemForSubpath(index: number, id: string, disabled: boolean) {
  const {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    path: [NavigationPath.ScrollContainer, 1, index],
    id: `subpath-${id}`,
    disabled
  });
  useNavigationEffect(keyboardNavigationItem);
  return {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  };
}
export function useFocusSubpath(index: number) {
  const [, setNavigationState] = useContext(NavigationContext);
  return useCallback(() => {
    setNavigationState({
      path: [NavigationPath.ScrollContainer, 1, index],
      action: NavigationAction.Focus
    });
  }, [index, setNavigationState]);
}
export function useFocusParentSubpath() {
  const [, setNavigationState] = useContext(NavigationContext);
  return useCallback(() => {
    setNavigationState({
      path: [NavigationPath.ParentSubpath],
      action: NavigationAction.Focus
    });
  }, [setNavigationState]);
}
