import { noop } from 'lodash-es'
import { createContext, forwardRef, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { jsx } from 'react/jsx-runtime'
import { useStableMemo } from '../905/19536'
import { isExactModifier, ModifierKeyCodes } from '../905/63728'
import { RecordableDiv } from '../905/511649'
import { logger } from '../905/651849'
import { assertNotNullish, isNullish } from '../figma_app/95419'
import { throwTypeError } from '../figma_app/465776'
import { findNearest, findNext, findPrevious, popLast } from '../figma_app/656233'
import { BrowserInfo } from '../figma_app/778880'


interface FocusOptions extends ScrollIntoViewOptions {
  preventScroll: boolean
}

interface TreeNode {
  type: 'parent' | 'leaf'
  children?: TreeNode[]
  items?: KeyboardNavigationItem[]
}

interface KeyboardItemNavigationOptions {
  supportHorizontalNavigation: boolean
  simulateClickOnEnter: boolean
  skipOnDownNavigation?: boolean
  skipOnRightNavigation?: boolean
  fauxFocusByDefault?: boolean
}

interface TreeNode {
  type: 'parent' | 'leaf'
  children?: TreeNode[]
  items?: KeyboardNavigationItem[]
}

interface KeyboardNavigationItemConstructor {
  id?: string
  path: number[]
  column?: number
  element: HTMLElement
  defaultFocusOptions?: FocusOptions
  setIsFauxFocused: (isFauxFocused: boolean, item: KeyboardNavigationItem) => void
  fauxClick?: () => void
  onFocusThroughKeyboardNavigation?: () => void
  keyboardItemNavigationOptions?: KeyboardItemNavigationOptions
}

interface KeyboardNavigationContextValue {
  tree: TreeNode
  lookupMap: Map<string, KeyboardNavigationItem>
  onFocusItem: (item: KeyboardNavigationItem) => void
  onBlurItem: (item: KeyboardNavigationItem) => void
  onFauxFocusItem: (item: KeyboardNavigationItem, onBlur: () => void) => void
  onFauxBlurItem: (item: KeyboardNavigationItem) => void
  fauxBlurItem: () => void
  blurItem: () => void
  setDefaultFauxFocusedItem: (item: KeyboardNavigationItem | null) => void
  fauxFocusDefaultItem: () => void
  useKeyNavFauxFocusSync?: boolean
}

interface UseKeyboardNavigationItemProps {
  path: number[]
  column?: number | null
  id?: string
  defaultFocusOptions?: FocusOptions
  onFocus?: () => void
  onBlur?: () => void
  onFauxFocus?: () => void
  onFauxBlur?: () => void
  onFocusThroughKeyboardNavigation?: () => void
  fauxClick?: () => void
  disabled?: boolean
  navigationOptions?: KeyboardItemNavigationOptions
}

interface UseKeyboardNavigationItemReturn {
  setKeyboardNavigationElement: (element: HTMLElement | null) => void
  keyboardNavigationItem: KeyboardNavigationItem | null
  isFocused: boolean
  isFauxFocused: boolean
}
// Original: h
const DEFAULT_FOCUS_OPTIONS: FocusOptions = {
  preventScroll: false,
  block: 'nearest',
}

// Original: m
const DEFAULT_NAVIGATION_OPTIONS = {
  supportHorizontalNavigation: true,
  simulateClickOnEnter: true,
}

/**
 * Represents a keyboard navigation item in the tree structure.
 * Original: g
 */
class KeyboardNavigationItem {
  id: string | undefined
  path: number[]
  column: number | null
  element: HTMLElement
  defaultFocusOptions: FocusOptions
  setIsFauxFocused: (isFauxFocused: boolean, item: KeyboardNavigationItem) => void
  fauxClick: (() => void) | undefined
  onFocusThroughKeyboardNavigation: (() => void) | undefined
  navigationOptions: { supportHorizontalNavigation: boolean, simulateClickOnEnter: boolean, skipOnDownNavigation?: boolean, skipOnRightNavigation?: boolean, fauxFocusByDefault?: boolean }

  constructor({
    id,
    path,
    column,
    element,
    defaultFocusOptions = DEFAULT_FOCUS_OPTIONS,
    setIsFauxFocused,
    fauxClick,
    onFocusThroughKeyboardNavigation,
    keyboardItemNavigationOptions = DEFAULT_NAVIGATION_OPTIONS,
  }: KeyboardNavigationItemConstructor) {
    this.id = id
    this.path = path
    this.column = column
    this.element = element
    this.defaultFocusOptions = defaultFocusOptions
    this.setIsFauxFocused = setIsFauxFocused
    this.fauxClick = fauxClick
    this.onFocusThroughKeyboardNavigation = onFocusThroughKeyboardNavigation
    this.navigationOptions = keyboardItemNavigationOptions
  }

  tree: TreeNode // Original: this.tree

  /**
   * Adds this item to the navigation tree.
   */
  addToTree(tree: any, lookupMap: Map<string, KeyboardNavigationItem> | null) {
    this.tree = tree
    // Original: (function (e, t) { ... })(e, this)
    const addItemToTree = (tree: any, item: KeyboardNavigationItem) => {
      let leaf: any
      const { path, column } = item
      try {
        leaf = getLeaf(tree, path, true)
      }
      catch {
        logger.warn('Failed to add item to KeyboardNavigationProvider tree: ', item)
        return
      }
      const col = column ?? 0
      const existingItem = leaf.items[col]?.element
      if (existingItem && existingItem !== item.element) {
        logger.warn('Overwriting item in KeyboardNavigationProvider tree. Existing item: ', leaf.items[col], ' New item: ', item)
      }
      leaf.items[col] = item
    }
    addItemToTree(tree, this)
    if (lookupMap && this.id) {
      lookupMap.set(this.id, this)
    }
  }

  /**
   * Removes this item from the navigation tree.
   */
  removeFromTree(lookupMap: Map<string, KeyboardNavigationItem> | null) {
    if (this.tree) {
      // Original: (function (e, t) { ... }(this.tree, this))
      const removeItemFromTree = (tree: any, item: KeyboardNavigationItem) => {
        let leaf: any
        let parent: any
        const { path, column } = item
        try {
          parent = getLeaf(tree, path)
          leaf = parent.items[column || 0] ?? null
        }
        catch {
          logger.warn('Item not found in KeyboardNavigationProvider tree: ', item)
          return
        }
        if (!leaf) {
          logger.warn('Item not found in KeyboardNavigationProvider tree: ', item)
          return
        }
        if (leaf.element !== item.element) {
          logger.warn('Item found in KeyboardNavigationProvider tree, but it does not match the expected item: ', leaf, item)
          return
        }
        parent.items[column || 0] = undefined
        if (parent.items.every(isNullish)) {
          getParent(tree, path.slice(0, -1)).children[path[path.length - 1]] = undefined
          for (let i = path.length - 1; i >= 1; i--) {
            const ancestorPath = path.slice(0, i)
            const [parentPath, index] = popLast(ancestorPath)
            const ancestorParent = getParent(tree, parentPath)
            if (getParent(tree, ancestorPath).children.every(isNullish)) {
              ancestorParent.children[index] = undefined
            }
            else {
              break
            }
          }
          if (tree.children.every(isNullish)) {
            tree.children = []
          }
        }
      }
      removeItemFromTree(this.tree, this)
      this.tree = undefined
    }
    if (lookupMap && this.id) {
      lookupMap.delete(this.id)
    }
  }

  /**
   * Focuses the element.
   */
  focus(options = this.defaultFocusOptions) {
    this.element.focus({ preventScroll: true })
    this.onFocusThroughKeyboardNavigation?.()
    if (!options.preventScroll) {
      this.element.scrollIntoView(options)
    }
  }

  /**
   * Blurs the element.
   */
  blur() {
    this.element.blur()
  }

  /**
   * Sets faux focus on the item.
   */
  fauxFocus(options = this.defaultFocusOptions) {
    this.setIsFauxFocused(true, this)
    if (!options.preventScroll) {
      this.element.scrollIntoView(options)
    }
  }

  /**
   * Removes faux focus from the item.
   */
  fauxBlur() {
    this.setIsFauxFocused(false, this)
  }

  /**
   * Simulates a click on the element.
   */
  simulateClick() {
    if (this.fauxClick) {
      this.fauxClick()
    }
    else {
      this.element.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
      }))
    }
  }

  /**
   * Gets the item above this one.
   */
  getItemAbove() {
    return this.tree ? findVerticalItem(this.tree, this, 'up') : null
  }

  /**
   * Gets the item below this one, skipping items that should be skipped.
   */
  getItemBelow() {
    if (!this.tree)
      return null
    let item = findVerticalItem(this.tree, this, 'down') || null
    while (item && item.navigationOptions.skipOnDownNavigation) {
      item = item.getItemBelow()
    }
    return item
  }

  /**
   * Gets the item to the left of this one.
   */
  getItemToTheLeft() {
    return this.tree ? findHorizontalItem(this.tree, this, 'left') : null
  }

  /**
   * Gets the item to the right of this one, skipping items that should be skipped.
   */
  getItemToTheRight() {
    if (!this.tree)
      return null
    let item = findHorizontalItem(this.tree, this, 'right') || null
    while (item && item.navigationOptions.skipOnRightNavigation) {
      item = item.getItemToTheRight()
    }
    return item
  }
}

// Original: f
const KeyboardNavigationContext = createContext<KeyboardNavigationContextValue | null>(null)



interface KeyboardNavigationProviderProps {
  onKeyDown?: (event: KeyboardEvent) => void
  allowVim?: boolean
  disabled?: boolean
  overrideDown?: (item: KeyboardNavigationItem) => { path: number[], column?: number } | undefined
  overrideUp?: (item: KeyboardNavigationItem) => { path: number[], column?: number } | undefined
  overrideLeft?: (item: KeyboardNavigationItem) => { path: number[], column?: number } | undefined
  overrideRight?: (item: KeyboardNavigationItem) => { path: number[], column?: number } | undefined
  allowHorizontalNavigationWhileInputFocused?: boolean
  useKeyNavFauxFocusSync?: boolean
  useFocusOnly?: boolean
  useDisplayContents?: boolean
  stopPropagationOnEventHandle?: boolean
}

/**
 * Provides keyboard navigation context and handles key events.
 * Original: $$E4
 */
export const KeyboardNavigationProvider = forwardRef<HTMLDivElement, KeyboardNavigationProviderProps>(({
  onKeyDown,
  allowVim = false,
  disabled,
  overrideDown,
  overrideUp,
  overrideLeft,
  overrideRight,
  allowHorizontalNavigationWhileInputFocused = false,
  useKeyNavFauxFocusSync,
  useFocusOnly,
  useDisplayContents,
  stopPropagationOnEventHandle = false,
  ...rest
}, ref) => {
  const treeRef = useRef<TreeNode>({ type: 'parent', children: [] })
  const lookupMapRef = useRef(new Map<string, KeyboardNavigationItem>())
  const focusedItemRef = useRef<KeyboardNavigationItem | null>(null)
  const fauxFocusedItemRef = useRef<KeyboardNavigationItem | null>(null)
  const defaultFauxFocusedItemRef = useRef<KeyboardNavigationItem | null>(null)
  const fauxFocusTimeoutRef = useRef(noop)

  const handleFocusItem = useCallback((item: KeyboardNavigationItem) => {
    focusedItemRef.current = item
  }, [])

  const handleBlurItem = useCallback((item: KeyboardNavigationItem) => {
    if (focusedItemRef.current === item) {
      focusedItemRef.current = null
    }
  }, [])

  const handleFauxBlurItem = useCallback((item: KeyboardNavigationItem) => {
    if (fauxFocusedItemRef.current === item) {
      fauxFocusedItemRef.current = null
      fauxFocusTimeoutRef.current()
      fauxFocusTimeoutRef.current = noop
    }
  }, [])

  const handleFauxFocusItem = useCallback((item: KeyboardNavigationItem, onTimeout: () => void) => {
    if (fauxFocusedItemRef.current) {
      handleFauxBlurItem(fauxFocusedItemRef.current)
    }
    fauxFocusedItemRef.current = item
    fauxFocusTimeoutRef.current = onTimeout
  }, [handleFauxBlurItem])

  const preventDefaultAndStopPropagation = useCallback((event: KeyboardEvent) => {
    if (stopPropagationOnEventHandle) {
      event.stopPropagation()
    }
    event.preventDefault()
  }, [stopPropagationOnEventHandle])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const focusedItem = focusedItemRef.current
    const fauxFocusedItem = fauxFocusedItemRef.current
    const key = getKey(event)
    const isModifierFree = !(event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) && allowHorizontalNavigationWhileInputFocused

    const handleNavigation = (direction: 'up' | 'down' | 'left' | 'right', override?: (item: KeyboardNavigationItem) => { path: number[], column?: number } | undefined) => {
      if (fauxFocusedItem && !useFocusOnly) {
        preventDefaultAndStopPropagation(event)
        const overrideItem = override ? getOverrideItem(treeRef.current, fauxFocusedItem, override) : null
        const targetItem = overrideItem || fauxFocusedItem[`getItem${direction.charAt(0).toUpperCase() + direction.slice(1)}`]()
        targetItem?.fauxFocus()
      }
      else if (focusedItem) {
        preventDefaultAndStopPropagation(event)
        const overrideItem = override ? getOverrideItem(treeRef.current, focusedItem, override) : null
        const targetItem = overrideItem || focusedItem[`getItem${direction.charAt(0).toUpperCase() + direction.slice(1)}`]()
        targetItem?.focus()
      }
      else if (direction === 'down' && defaultFauxFocusedItemRef.current) {
        preventDefaultAndStopPropagation(event)
        defaultFauxFocusedItemRef.current.fauxFocus()
      }
    }

    if (isUpKey(event, allowVim)) {
      handleNavigation('up', overrideUp)
    }
    else if (isDownKey(event, allowVim)) {
      handleNavigation('down', overrideDown)
    }
    else if (isLeftKey(key, allowVim, isModifierFree)) {
      if (fauxFocusedItem?.navigationOptions.supportHorizontalNavigation && !useFocusOnly) {
        handleNavigation('left', overrideLeft)
      }
      else if (focusedItem) {
        handleNavigation('left', overrideLeft)
      }
    }
    else if (isRightKey(key, allowVim, isModifierFree)) {
      if (fauxFocusedItem?.navigationOptions.supportHorizontalNavigation && !useFocusOnly) {
        handleNavigation('right', overrideRight)
      }
      else if (focusedItem) {
        handleNavigation('right', overrideRight)
      }
    }
    else if (key === 'Enter' && fauxFocusedItem && !useFocusOnly) {
      preventDefaultAndStopPropagation(event)
      if (fauxFocusedItem.navigationOptions.simulateClickOnEnter) {
        fauxFocusedItem.simulateClick()
      }
    }
    else if (key === 'Escape' && (focusedItem || fauxFocusedItem)) {
      preventDefaultAndStopPropagation(event)
      focusedItem?.blur()
      fauxFocusedItem?.fauxBlur()
    }

    onKeyDown?.(event)
  }, [allowHorizontalNavigationWhileInputFocused, allowVim, onKeyDown, useFocusOnly, overrideUp, overrideDown, overrideLeft, overrideRight, preventDefaultAndStopPropagation])

  const contextValue = useMemo<KeyboardNavigationContextValue>(() => ({
    tree: treeRef.current,
    lookupMap: lookupMapRef.current,
    onFocusItem: handleFocusItem,
    onBlurItem: handleBlurItem,
    onFauxFocusItem: handleFauxFocusItem,
    onFauxBlurItem: handleFauxBlurItem,
    fauxBlurItem: () => fauxFocusedItemRef.current?.fauxBlur(),
    blurItem: () => focusedItemRef.current?.blur(),
    setDefaultFauxFocusedItem: (item) => {
      if (!defaultFauxFocusedItemRef.current) {
        defaultFauxFocusedItemRef.current = item
      }
    },
    fauxFocusDefaultItem: () => {
      defaultFauxFocusedItemRef.current?.fauxFocus()
    },
    useKeyNavFauxFocusSync: useKeyNavFauxFocusSync || false,
  }), [handleFocusItem, handleBlurItem, handleFauxFocusItem, handleFauxBlurItem, useKeyNavFauxFocusSync])

  return jsx(KeyboardNavigationContext.Provider, {
    value: contextValue,
    children: jsx(RecordableDiv, {
      style: useDisplayContents ? { display: 'contents' } : undefined,
      onKeyDown: disabled ? onKeyDown : handleKeyDown,
      forwardedRef: ref,
      ...rest,
    }),
  })
})

export const dP = KeyboardNavigationProvider
// Original: useKeyboardNavigationItem
/**
 * Hook for managing a keyboard navigation item within the provider context.
 * @param path - The path in the navigation tree.
 * @param column - The column index, optional.
 * @param id - Unique identifier for the item.
 * @param defaultFocusOptions - Default focus options.
 * @param onFocus - Callback when item gains focus.
 * @param onBlur - Callback when item loses focus.
 * @param onFauxFocus - Callback when item gains faux focus.
 * @param onFauxBlur - Callback when item loses faux focus.
 * @param onFocusThroughKeyboardNavigation - Callback for keyboard navigation focus.
 * @param fauxClick - Function to simulate click.
 * @param disabled - Whether the item is disabled.
 * @param navigationOptions - Navigation options for the item.
 * @returns Object with setters and state for the navigation item.
 */
export function useKeyboardNavigationItem({
  path,
  column = null,
  id,
  defaultFocusOptions,
  onFocus,
  onBlur,
  onFauxFocus,
  onFauxBlur,
  onFocusThroughKeyboardNavigation,
  fauxClick,
  disabled,
  navigationOptions,
}: UseKeyboardNavigationItemProps): UseKeyboardNavigationItemReturn {
  const memoizedPath = useStableMemo(path)
  const memoizedDefaultFocusOptions = useStableMemo(defaultFocusOptions)
  const memoizedNavigationOptions = useStableMemo(navigationOptions)

  if (memoizedPath.length === 0) {
    throw new Error('Path must be non-empty')
  }
  if (memoizedPath.some(index => index < 0)) {
    throw new Error('All path indices must be non-negative')
  }
  if (column != null && column < 0) {
    throw new Error('Column must be non-negative')
  }

  const [element, setElement] = useState<HTMLElement | undefined>(undefined)
  const [isFocused, setIsFocused] = useState(false)
  const [isFauxFocused, setIsFauxFocused] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | number | null>(null)

  const {
    tree,
    lookupMap,
    onFocusItem,
    onBlurItem,
    onFauxFocusItem,
    onFauxBlurItem,
    setDefaultFauxFocusedItem,
    useKeyNavFauxFocusSync,
  } = assertNotNullish(useContext(KeyboardNavigationContext), 'Must use `useKeyboardNavigationItem` inside `<KeyboardNavigationProvider>`')

  useEffect(() => {
    if (element && !disabled) {
      const handleFocus = () => setIsFocused(true)
      const handleBlur = () => setIsFocused(false)
      element.addEventListener('focus', handleFocus)
      element.addEventListener('blur', handleBlur)
      if (element === document.activeElement) {
        handleFocus()
      }
      return () => {
        element.removeEventListener('focus', handleFocus)
        element.removeEventListener('blur', handleBlur)
        if (element === document.activeElement) {
          handleBlur()
        }
      }
    }
  }, [disabled, element])

  const fauxBlur = useCallback((item: KeyboardNavigationItem) => {
    setIsFauxFocused((prev) => {
      if (prev) {
        onFauxBlur?.()
        onFauxBlurItem(item)
      }
      return false
    })
  }, [onFauxBlur, onFauxBlurItem])

  const fauxFocus = useCallback((item: KeyboardNavigationItem) => {
    setIsFauxFocused((prev) => {
      if (!prev) {
        onFauxFocus?.()
        onFauxFocusItem(item, () => {
          if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current)
          }
          timeoutRef.current = setTimeout(() => {
            fauxBlur(item)
          }, 0)
        })
      }
      return true
    })
  }, [fauxBlur, onFauxFocus, onFauxFocusItem])

  const setIsFauxFocusedHandler = useCallback((isFauxFocused: boolean, item: KeyboardNavigationItem) => {
    if (isFauxFocused) {
      fauxFocus(item)
    }
    else {
      fauxBlur(item)
    }
  }, [fauxFocus, fauxBlur])

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const keyboardNavigationItem = useMemo(() => {
    if (element == null || disabled) {
      return null
    }
    return new KeyboardNavigationItem({
      id,
      path: memoizedPath,
      column,
      element,
      defaultFocusOptions: memoizedDefaultFocusOptions,
      setIsFauxFocused: useKeyNavFauxFocusSync ? setIsFauxFocusedHandler : setIsFauxFocused,
      fauxClick,
      onFocusThroughKeyboardNavigation,
      keyboardItemNavigationOptions: memoizedNavigationOptions,
    })
  }, [element, disabled, id, memoizedPath, column, memoizedDefaultFocusOptions, useKeyNavFauxFocusSync, setIsFauxFocusedHandler, fauxClick, onFocusThroughKeyboardNavigation, memoizedNavigationOptions])

  useEffect(() => {
    if (keyboardNavigationItem) {
      keyboardNavigationItem.addToTree(tree, lookupMap)
      if (keyboardNavigationItem.navigationOptions.fauxFocusByDefault) {
        setDefaultFauxFocusedItem(keyboardNavigationItem)
      }
      return () => {
        keyboardNavigationItem.removeFromTree(lookupMap)
        if (keyboardNavigationItem.navigationOptions.fauxFocusByDefault) {
          setDefaultFauxFocusedItem(null)
        }
      }
    }
  }, [keyboardNavigationItem, lookupMap, setDefaultFauxFocusedItem, tree])

  useEffect(() => {
    if (keyboardNavigationItem && isFocused) {
      onFocus?.()
      onFocusItem(keyboardNavigationItem)
      return () => {
        onBlur?.()
        onBlurItem(keyboardNavigationItem)
      }
    }
  }, [keyboardNavigationItem, isFocused, onFocus, onBlur, onFocusItem, onBlurItem])

  useEffect(() => {
    if (!useKeyNavFauxFocusSync && keyboardNavigationItem && isFauxFocused) {
      onFauxFocus?.()
      onFauxFocusItem(keyboardNavigationItem, () => {
        setIsFauxFocused(false)
      })
      return () => {
        onFauxBlur?.()
        onFauxBlurItem(keyboardNavigationItem)
      }
    }
  }, [keyboardNavigationItem, isFauxFocused, onFauxFocus, onFauxBlur, onFauxFocusItem, onFauxBlurItem, useKeyNavFauxFocusSync])

  return {
    setKeyboardNavigationElement: setElement,
    keyboardNavigationItem,
    isFocused,
    isFauxFocused,
  }
}

// Original: useKeyboardNavigationLookupMap
/**
 * Hook to get a function for looking up keyboard navigation items by ID.
 * @returns Function that takes an ID and returns the corresponding item or undefined.
 */
export function useKeyboardNavigationLookupMap() {
  const { lookupMap } = assertNotNullish(useContext(KeyboardNavigationContext), 'Must use `useKeyboardNavigationLookupMap` inside `<KeyboardNavigationProvider>`')
  return useCallback((id: string) => lookupMap.get(id), [lookupMap])
}

// Original: useBlurFocusedItem
/**
 * Hook to get a function for blurring the currently focused or faux-focused item.
 * @param type - Type of blur: 'real' for actual focus, 'faux' for faux focus.
 * @returns Function to perform the blur.
 */
export function useBlurFocusedItem(type: 'real' | 'faux' = 'real') {
  const { blurItem, fauxBlurItem } = assertNotNullish(useContext(KeyboardNavigationContext), 'Must use `useBlurFocusedItem` inside `<KeyboardNavigationProvider>`')
  return useCallback(() => {
    switch (type) {
      case 'real':
        blurItem()
        break
      case 'faux':
        fauxBlurItem()
        break
      default:
        throwTypeError(type)
    }
  }, [blurItem, fauxBlurItem, type])
}

// Original: useFocusFirstItem
/**
 * Hook to get a function for focusing the first item in the navigation tree.
 * @param options - Options for focusing, including preventScroll.
 * @returns Function to focus the first item.
 */
export function useFocusFirstItem({ preventScroll }: { preventScroll?: boolean } = {}) {
  const { tree } = assertNotNullish(useContext(KeyboardNavigationContext), 'Must use `useFocusFirstItem` inside `<KeyboardNavigationProvider>`')
  return useCallback(() => {
    const findFirstItem = (node: any): KeyboardNavigationItem | null => {
      if (node.type === 'leaf') {
        return node.items.find((item: KeyboardNavigationItem | undefined) => item != null) ?? null
      }
      for (const child of node.children) {
        if (child) {
          const item = findFirstItem(child)
          if (item) {
            return item
          }
        }
      }
      return null
    }
    const firstItem = findFirstItem(tree)
    firstItem?.focus({ preventScroll })
  }, [preventScroll, tree])
}

// Original: isUpKey
/**
 * Checks if the event corresponds to an up navigation key.
 * @param event - The keyboard event.
 * @param allowVim - Whether Vim keys are allowed.
 * @returns True if it's an up key.
 */
export function isUpKey(event: KeyboardEvent, allowVim: boolean): boolean {
  const key = getKey(event)
  const isCtrl = isExactModifier(event, ModifierKeyCodes.CONTROL)
  const isMacCtrl = BrowserInfo.mac && isCtrl
  return key === 'ArrowUp' || (key === 'KeyK' && allowVim && !isInputFocused()) || (isMacCtrl && key === 'KeyP')
}

// Original: isDownKey
/**
 * Checks if the event corresponds to a down navigation key.
 * @param event - The keyboard event.
 * @param allowVim - Whether Vim keys are allowed.
 * @returns True if it's a down key.
 */
export function isDownKey(event: KeyboardEvent, allowVim: boolean): boolean {
  const key = getKey(event)
  const isCtrl = isExactModifier(event, ModifierKeyCodes.CONTROL)
  const isMacCtrl = BrowserInfo.mac && isCtrl
  return key === 'ArrowDown' || (key === 'KeyJ' && allowVim && !isInputFocused()) || (isMacCtrl && key === 'KeyN')
}

// Original: isLeftKey
/**
 * Checks if the event corresponds to a left navigation key.
 * @param key - The key string.
 * @param allowVim - Whether Vim keys are allowed.
 * @param allowHorizontalWhileInputFocused - Whether to allow horizontal navigation while input is focused.
 * @returns True if it's a left key.
 */
export function isLeftKey(key: string, allowVim: boolean, allowHorizontalWhileInputFocused: boolean = false): boolean {
  return (key === 'ArrowLeft' && canNavigateHorizontally(allowHorizontalWhileInputFocused)) || (key === 'KeyH' && allowVim && !isInputFocused())
}

// Original: isRightKey
/**
 * Checks if the event corresponds to a right navigation key.
 * @param key - The key string.
 * @param allowVim - Whether Vim keys are allowed.
 * @param allowHorizontalWhileInputFocused - Whether to allow horizontal navigation while input is focused.
 * @returns True if it's a right key.
 */
export function isRightKey(key: string, allowVim: boolean, allowHorizontalWhileInputFocused: boolean = false): boolean {
  return (key === 'ArrowRight' && canNavigateHorizontally(allowHorizontalWhileInputFocused)) || (key === 'KeyL' && allowVim && !isInputFocused())
}

// Original: N
/**
 * Checks if the active element is not an input field.
 * @returns True if not focused on input.
 */
function isInputFocused(): boolean {
  return !isInputElement(document.activeElement)
}

// Original: C
/**
 * Determines if horizontal navigation is allowed based on focus state.
 * @param allowHorizontalWhileInputFocused - Whether to allow when input is focused.
 * @returns True if can navigate horizontally.
 */
function canNavigateHorizontally(allowHorizontalWhileInputFocused: boolean): boolean {
  const activeElement = document.activeElement
  return !isInputElement(activeElement) || allowHorizontalWhileInputFocused || (activeElement instanceof HTMLDivElement ? activeElement.textContent === '' : (activeElement as HTMLInputElement).value === '')
}

// Original: w
/**
 * Checks if the element is an input, textarea, or editable div.
 * @param element - The element to check.
 * @returns True if it's an input element.
 */
function isInputElement(element: Element | null): boolean {
  return !!element && ((element instanceof HTMLInputElement) || (element instanceof HTMLTextAreaElement) || (element instanceof HTMLDivElement && element.contentEditable === 'true'))
}

// Original: O
/**
 * Finds the next or previous item horizontally in the same row.
 * @param tree - The navigation tree.
 * @param item - The current item with path and column.
 * @param direction - 'left' or 'right'.
 * @returns The found item or null.
 */
function findHorizontalItem(tree: TreeNode, { path, column }: { path: number[], column: number | null }, direction: 'left' | 'right'): KeyboardNavigationItem | null {
  if (column == null) {
    return null
  }
  const leaf = getLeaf(tree, path)
  const foundItem = direction === 'left' ? findPrevious(leaf.items, column) : findNext(leaf.items, column)
  if (foundItem) {
    return foundItem
  }
  // If not found in row, look vertically in the opposite direction
  return findVerticalItem(tree, { path, column: direction === 'left' ? Infinity : -1 }, direction === 'left' ? 'up' : 'down')
}

// Original: R
/**
 * Finds the next or previous item vertically in the tree.
 * @param tree - The navigation tree.
 * @param item - The current item with path and column.
 * @param direction - 'up' or 'down'.
 * @returns The found item or null.
 */
function findVerticalItem(tree: any, { path, column }: { path: number[], column: number | null }, direction: 'up' | 'down'): KeyboardNavigationItem | null {
  for (let i = path.length - 1; i >= 0; i--) {
    const ancestorPath = path.slice(0, i)
    const index = path[i]
    const parent = getParent(tree, ancestorPath)
    const sibling = direction === 'up' ? findPrevious(parent.children, index) : findNext(parent.children, index)
    if (sibling) {
      const targetLeaf = direction === 'up' ? findLastLeaf(sibling) : findFirstLeaf(sibling)
      return findNearest(targetLeaf.items, column ?? 0)
    }
  }
  return null
}

// Helper function for finding the last leaf in a subtree (for up navigation)
function findLastLeaf(node: any): any {
  if (node.type === 'leaf') {
    return node
  }
  const lastChild = findPrevious(node.children, node.children.length)
  if (lastChild) {
    return findLastLeaf(lastChild)
  }
  throw new Error('Expected a node but got nothing')
}

// Helper function for finding the first leaf in a subtree (for down navigation)
function findFirstLeaf(node: any): any {
  if (node.type === 'leaf') {
    return node
  }
  const firstChild = findNext(node.children, -1)
  if (firstChild) {
    return findFirstLeaf(firstChild)
  }
  throw new Error('Expected a node but got nothing')
}

// Original: L
/**
 * Gets or creates a parent node at the given path.
 * @param tree - The root tree.
 * @param path - The path to the parent.
 * @param createIfMissing - Whether to create missing nodes.
 * @returns The parent node.
 */
function getParent(tree: TreeNode, path: number[], createIfMissing: boolean = false): TreeNode {
  let current = tree
  for (const index of path) {
    let child = current.children[index]
    if (child) {
      if (child.type === 'leaf') {
        throw new Error('Expected a parent but got a leaf')
      }
      current = child
    }
    else if (createIfMissing) {
      child = { type: 'parent', children: [] }
      current.children[index] = child
      current = child
    }
    else {
      throw new Error('Expected a parent but got nothing')
    }
  }
  return current
}

// Original: P
/**
 * Gets or creates a leaf node at the given path.
 * @param tree - The root tree.
 * @param path - The path to the leaf.
 * @param createIfMissing - Whether to create missing nodes.
 * @returns The leaf node.
 */
function getLeaf(tree: TreeNode, path: number[], createIfMissing: boolean = false): TreeNode | undefined {
  const [parentPath, index] = popLast(path)
  const parent = getParent(tree, parentPath, createIfMissing)
  let child = parent.children[index]
  if (child) {
    if (child.type !== 'parent') {
      return child
    }
    throw new Error('Expected a parent but got a leaf')
  }
  if (createIfMissing) {
    child = { type: 'leaf', items: [] }
    parent.children[index] = child
    return child
  }
  throw new Error('Expected a leaf but got nothing')
}

// Original: D
/**
 * Gets an item based on an override function.
 * @param tree - The navigation tree.
 * @param item - The current item.
 * @param override - The override function.
 * @returns The overridden item or null.
 */
function getOverrideItem(tree: any, item: KeyboardNavigationItem, override?: (item: KeyboardNavigationItem) => { path: number[], column?: number } | undefined): KeyboardNavigationItem | null {
  try {
    const overrideResult = override?.(item)
    if (overrideResult) {
      const { path, column } = overrideResult
      return getLeaf(tree, path).items[column ?? 0]
    }
  }
  catch {
    // Ignore errors
  }
  return null
}

// Original: k
/**
 * Gets the key from the event, preferring code over key.
 * @param event - The keyboard event.
 * @returns The key string.
 */
function getKey(event: KeyboardEvent): string {
  return event.code ?? event.key
}
export const M3 = useKeyboardNavigationItem
export const Nt = isDownKey
export const bh = useFocusFirstItem
export const c2 = isUpKey
export const lv = isRightKey
export const q_ = useKeyboardNavigationLookupMap
export const yn = isLeftKey
export const z3 = useBlurFocusedItem
