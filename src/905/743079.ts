import type {
  Ref,
} from 'react'
import {
  useFloatingTree,
  useListItem,
  useMergeRefs,
} from '@floating-ui/react'
import {
  createContext,
  MutableRefObject,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ensureContext } from '../905/61417'
import { setupKeyboardNavigationHandler } from '../905/457273'
import { loadFeatureFlags } from '../905/586361'
import { preventAndStopEvent } from '../905/955878'

/**
 * Context for menu items.
 * Original name: $$d2
 */
export const MenuItemContext = createContext<null | unknown>(null)

/**
 * Props for MenuItemHandler.
 * Original usage: $$c0
 */
export interface MenuItemHandlerProps {
  forwardedRef?: Ref<HTMLElement>
  action: (event: React.MouseEvent | React.KeyboardEvent) => void
  disabled?: boolean
  closeOnClick?: boolean
  isLink?: boolean
}

/**
 * Handles menu item logic, keyboard navigation, and selection.
 * Original name: $$c0
 */
export function setupMenuItemHandler({
  forwardedRef,
  action,
  disabled,
  closeOnClick,
  isLink,
}: MenuItemHandlerProps) {
  const floatingTree = useFloatingTree()
  const keepMenuOpen = loadFeatureFlags().fpl_keep_menu_open

  const {
    activeIndex,
    allowSelection,
    getItemProps,
    setActiveIndex,
    listRef,
  } = ensureContext(MenuItemContext, 'MenuItem', 'Menu.Root or Menu.SubContainer')

  const [label, setLabel] = useState('')
  const itemRef = useRef<HTMLElement | null>(null)
  const pointerActive = useRef(false)

  const handleKeyboardNavigation = setupKeyboardNavigationHandler(setActiveIndex)

  const { ref, index } = useListItem({ label })
  const mergedRef = useMergeRefs([ref, forwardedRef, itemRef])

  // Set label from innerText on mount
  useLayoutEffect(() => {
    if (itemRef.current) {
      setLabel(itemRef.current.textContent ?? '')
    }
  }, [])

  /**
   * Handles item selection logic.
   * Original inner function: n
   */
  const handleSelect = (event: React.MouseEvent | React.KeyboardEvent) => {
    action(event)
    if ((event.ctrlKey || event.metaKey) && keepMenuOpen)
      return
    setTimeout(() => {
      if (floatingTree && closeOnClick) {
        floatingTree.events.emit('click')
      }
    }, 30)
  }

  /**
   * Memoized props for menu item.
   */
  return useMemo(() => {
    const isActive = index === activeIndex

    return {
      'data-fpl-selected': isActive || undefined,
      'tabIndex': isActive ? 0 : -1,
      'ref': mergedRef,
      disabled,
      'aria-disabled': disabled,
      ...getItemProps({
        onClick: (event: React.MouseEvent) => {
          if (isLink) {
            floatingTree && closeOnClick && floatingTree.events.emit('click')
            return
          }
          if (!disabled && !pointerActive.current && allowSelection) {
            handleSelect(event)
          }
          preventAndStopEvent(event)
        },
        onKeyDown: (event: React.KeyboardEvent) => {
          if (event.key === ' ' && isLink) {
            if (!disabled)
              handleSelect(event)
            preventAndStopEvent(event)
            return
          }
          if (event.key === ' ' || event.key === 'Enter') {
            if (!disabled)
              handleSelect(event)
            preventAndStopEvent(event)
          }
          handleKeyboardNavigation(listRef.current.length, activeIndex, event)
        },
        onPointerLeave: () => {
          pointerActive.current = false
        },
        onPointerUp: (event: React.PointerEvent) => {
          if (isLink && !pointerActive.current) {
            handleSelect(event)
            preventAndStopEvent(event)
            return
          }
          if (event.button === 0 && !disabled && allowSelection) {
            pointerActive.current = true
            handleSelect(event)
          }
        },
        onPointerDown: () => {
          if (isLink)
            pointerActive.current = true
        },
      }),
    }
  }, [
    action,
    activeIndex,
    isLink,
    allowSelection,
    closeOnClick,
    disabled,
    getItemProps,
    handleKeyboardNavigation,
    index,
    listRef,
    mergedRef,
    floatingTree,
  ])
}

/**
 * Checks if two rectangles overlap.
 * Original name: $$u1
 * @param a - First rectangle
 * @param b - Second rectangle
 * @returns True if rectangles overlap
 */
export function rectanglesOverlap(
  a: { left: number, right: number, top: number, bottom: number },
  b: { left: number, right: number, top: number, bottom: number },
): boolean {
  return !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom)
}

// Export refactored names
export const Os = setupMenuItemHandler
export const Uw = rectanglesOverlap
export const Ym = MenuItemContext
