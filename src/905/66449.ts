// Refactored to improve readability, add type safety, and simplify logic
// Renamed variables, added types, simplified callbacks, improved structure

import { useSetAtom } from "jotai"
import { useCallback, useEffect, useMemo, useRef } from "react"
import { Fragment, jsx } from "react/jsx-runtime"
import {
  isLibraryModalContextAvailable,
  useLibraryModalContext,
} from "../905/753512"
import { useVisibility } from "../905/773253"
import { tabCategories } from "../905/789781"
import { atom, useAtomValueAndSetter } from "../figma_app/27355"
import {
  KeyboardNavigationProvider,
  useFocusFirstItem,
  useKeyboardNavigationItem,
} from "../figma_app/119475"
import { MB } from "../figma_app/525558"
import { PrimaryWorkflowEnum } from "../figma_app/633080"

// Atoms for managing focus state
const isSearchFocusedAtom = atom<boolean>(false)
const isTabFocusedAtom = atom<boolean>(false)

// Props interfaces
interface KeyboardNavigationWrapperProps {
  children: React.ReactNode
}

interface FocusableElementProps {
  elementRef: React.RefObject<HTMLElement>
  kbArgs?: any
}

// Tab strip section enum
export enum TabStripSection {
  Search = 0,
  Tabs = 1,
}

// Tab body section enum
export enum TabBodySection {
  Header = 0,
  Body = 1,
  Footer = 2,
}

// In this file section enum
export enum InThisFileSection {
  CreatedInThisFile = 0,
  AddedToThisFile = 1,
  UsedInThisFile = 2,
  MissingLibrariesButton = 3,
}

// Updates section enum
export enum UpdatesSection {
  List = 0,
  Footer = 1,
}

// Updates section footer enum
export enum UpdatesSectionFooter {
  AllPagesToggle = 0,
  UpdateAllButton = 1,
}

// Teams list section enum
export enum TeamsListSection {
  SeeMore = 0,
  CardRow = 1,
}

// Workspaces section enum
export enum WorkspacesSection {
  CurrentWorkspace = 0,
  AllWorkspaces = 1,
}

// Updates list asset section mapping
export const UpdatesListAssetSection = {
  [PrimaryWorkflowEnum.COMPONENT]: 0,
  [PrimaryWorkflowEnum.STATE_GROUP]: 1,
  [PrimaryWorkflowEnum.STYLE]: 2,
  [PrimaryWorkflowEnum.VARIABLE_SET]: 3,
  [PrimaryWorkflowEnum.CODE_COMPONENT]: 4,
} as const

/**
 * Provides keyboard navigation for the library modal
 */
export function KeyboardNavigationWrapper({
  children,
}: KeyboardNavigationWrapperProps) {
  const setIsTabFocused = useSetAtom(isTabFocusedAtom)
  const { tabManager } = useLibraryModalContext()
  const activeTab = tabManager.activeTab

  // Override right arrow key to focus tab
  const handleOverrideRight = useCallback(() => {
    setIsTabFocused(true)
    return null
  }, [setIsTabFocused])

  // Override down arrow key to navigate to tabs when in search
  const handleOverrideDown = useCallback((item: any) => {
    // If we're in the first column and not on search tab, navigate to active tab
    if (item.path[0] === 0 && activeTab !== "search") {
      return {
        path: [1, tabCategories.findIndex(category => category === activeTab)],
        column: null,
      }
    }
    return null
  }, [activeTab])

  return jsx(KeyboardNavigationProvider, {
    overrideRight: handleOverrideRight,
    overrideDown: handleOverrideDown,
    children,
  })
}

/**
 * Focuses an element when conditions are met
 */
export function useFocusElementWhenReady(
  elementRef: HTMLElement | null,
  shouldFocus: boolean,
  condition: boolean,
) {
  const [, setIsSearchFocused] = useAtomValueAndSetter(isSearchFocusedAtom)

  useEffect(() => {
    if (elementRef && shouldFocus && condition) {
      elementRef.focus()
      setIsSearchFocused(false)
    }
  }, [shouldFocus, condition, setIsSearchFocused, elementRef])
}

/**
 * Focuses a ref element when conditions are met
 */
export function useFocusRefElementWhenReady(
  elementRef: React.RefObject<HTMLElement>,
  shouldFocus: boolean,
) {
  const [, setIsSearchFocused] = useAtomValueAndSetter(isSearchFocusedAtom)
  const { tabManager } = useLibraryModalContext()
  const activeTab = tabManager.activeTab

  useEffect(() => {
    if (elementRef.current && shouldFocus && activeTab === "search") {
      elementRef.current.focus()
      setIsSearchFocused(false)
    }
  }, [shouldFocus, setIsSearchFocused, elementRef, activeTab])
}

/**
 * Provides keyboard navigation for the search area
 */
export function SearchKeyboardNavigation({
  children,
}: KeyboardNavigationWrapperProps) {
  const setIsSearchFocused = useSetAtom(isSearchFocusedAtom)

  // Override left arrow key to focus search
  const handleOverrideLeft = useCallback((item: any) => {
    // If we're in the first column, focus search
    if (item.column && item.column !== 0) {
      setIsSearchFocused(true)
    }
    return null
  }, [setIsSearchFocused])

  return jsx(KeyboardNavigationProvider, {
    overrideLeft: handleOverrideLeft,
    children: jsx(SearchFocusHandler, {
      children,
    }),
  })
}

/**
 * Handles focusing the first item when search is focused
 */
function SearchFocusHandler({
  children,
}: KeyboardNavigationWrapperProps) {
  const focusFirstItem = useFocusFirstItem({
    preventScroll: true,
  })
  const [isTabFocused, setIsTabFocused] = useAtomValueAndSetter(isTabFocusedAtom)

  useEffect(() => {
    if (isTabFocused) {
      setIsTabFocused(false)
      setTimeout(focusFirstItem, 0)
    }
  }, [focusFirstItem, setIsTabFocused, isTabFocused])

  return jsx(Fragment, {
    children,
  })
}

/**
 * Creates keyboard navigation item for clickable elements
 */
function useKeyboardNavigationForClickable(props: any) {
  const { onClick, disabled, ...restProps } = props
  const isVisible = useVisibility()
  const isDisabled = disabled || isVisible
  const setIsTabFocused = useSetAtom(isTabFocusedAtom)

  // Handle tab key press to set focus
  const handleTabKeyDown = useCallback(() => {
    setIsTabFocused(true)
  }, [setIsTabFocused])

  // Combine click and keyboard handlers
  const handleClickWithFocus = MB({
    onBoth: onClick,
    onClick,
    onKeyDown: handleTabKeyDown,
  })

  // Create keyboard navigation item
  const keyboardItem = useKeyboardNavigationItem({
    ...restProps,
    disabled: isDisabled,
  })

  return useMemo(() => ({
    setKeyboardNavigationElement: keyboardItem.setKeyboardNavigationElement,
    keyboardNavigationItem: keyboardItem.keyboardNavigationItem,
    isFocused: keyboardItem.isFocused,
    isFauxFocused: keyboardItem.isFauxFocused,
    onClickWithFocus: handleClickWithFocus,
  }), [keyboardItem, handleClickWithFocus])
}

/**
 * Handles keyboard events for elements that should be clickable via Enter or Space
 */
export function useKeyboardClickHandler() {
  return useCallback((event: React.KeyboardEvent) => {
    // Handle Enter or Space key press on the element
    if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault()
      // Create and dispatch a click event
      const clickEvent = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        detail: 0,
      })
      event.currentTarget.dispatchEvent(clickEvent)
    }
  }, [])
}

/**
 * Conditionally renders keyboard navigation wrapper based on context availability
 */
export function ConditionalKeyboardWrapper({
  children,
  kbArgs,
  elementRef,
}: FocusableElementProps & KeyboardNavigationWrapperProps) {
  return isLibraryModalContextAvailable()
    ? jsx(KeyboardNavigationElement, {
      elementRef,
      kbArgs,
      children,
    })
    : jsx(Fragment, {
      children,
    })
}

/**
 * Sets up keyboard navigation for an element
 */
export function KeyboardNavigationElement({
  children,
  kbArgs,
  elementRef,
}: FocusableElementProps & KeyboardNavigationWrapperProps) {
  const { setKeyboardNavigationElement } = useKeyboardNavigationForClickable(kbArgs || {})

  useEffect(() => {
    setKeyboardNavigationElement(elementRef.current)
  }, [setKeyboardNavigationElement, elementRef])

  return jsx(Fragment, {
    children,
  })
}

/**
 * Creates a ref and keyboard args object for an element
 */
export function useElementWithKeyboardArgs(keyboardArgs?: any) {
  return {
    ref: useRef<HTMLElement>(null),
    kbArgs: keyboardArgs,
  }
}

// Export named functions and constants
export const $_ = useFocusElementWhenReady
export const p1 = useFocusRefElementWhenReady
export const Tq = KeyboardNavigationElement
export const Y7 = KeyboardNavigationWrapper
export const a8 = useKeyboardClickHandler
export const bj = ConditionalKeyboardWrapper
export const ej = SearchKeyboardNavigation
export const E4 = useElementWithKeyboardArgs

// Export enums
export const LibraryModalSections = {
  TabStripSection,
  TabBodySection,
  InThisFileSection,
  UpdatesSection,
  UpdatesSectionFooter,
  UpdatesListAssetSection,
  TeamsListSection,
  WorkspacesSection,
}

export const m3 = LibraryModalSections
export const hx = useKeyboardNavigationForClickable
