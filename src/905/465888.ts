import { FloatingList, FloatingNode, FloatingTree, safePolygon, useClick, useDismiss, useFloatingNodeId, useFloatingParentNodeId, useFloatingTree, useHover, useInteractions, useListItem, useListNavigation, useMergeRefs, useRole, useTypeahead } from '@floating-ui/react'
import { flip, offset, size } from '@floating-ui/react-dom'
import classNames from 'classnames'
import { createContext, forwardRef, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { jsx, jsxs } from 'react/jsx-runtime'
import { ensureContext } from '../905/61417'
import { ScreenReaderOnly } from '../905/172252'
import { setupKeyboardNavigationHandler } from '../905/457273'
import { useAriaAttributes, withA11yConnector } from '../905/472756'
import { defaultComponentAttribute } from '../905/577641'
import { loadFeatureFlags } from '../905/586361'
import { PopoverPrimitiveContainer, usePopoverPrimitive } from '../905/691059'
import { MenuItemContext, rectanglesOverlap, setupMenuItemHandler } from '../905/743079'
import { useSelectionContext, useSelectionProvider } from '../905/751750'
import { EventShield } from '../905/821217'
import { preventAndStopEvent } from '../905/955878'
import { useRecording } from '../905/959312'
import { useFplStrings } from '../figma_app/415899'
import { LinkPrimitive } from '../figma_app/496441'

// Original code: Menu.Item component
/**
 * @description MenuItem component for individual menu items.
 * @param {object} props - Component props.
 * @param {Function} props.onClick - Click handler.
 * @param {React.ReactNode} props.children - Children elements.
 * @param {boolean} props.disabled - Whether the item is disabled.
 * @param {string} props.recordingKey - Key for recording.
 * @param {object} props.htmlAttributes - Additional HTML attributes.
 * @param {React.Ref} ref - Forwarded ref.
 * @returns {JSX.Element} The menu item element.
 */
// Original code: MenuItem component
/**
 * @description MenuItem component for individual menu items.
 * @param {MenuItemProps} props - Component props.
 * @param {React.Ref} ref - Forwarded ref.
 * @returns {JSX.Element} The menu item element.
 */
const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(({
  onClick,
  children,
  disabled,
  recordingKey,
  htmlAttributes,
  ...otherProps
}, ref) => {
  // Original code: useAriaAttributes hook for description
  const ariaAttributes = useAriaAttributes(['description'])

  // Original code: useRecording hook for click event
  const handleClick = useRecording(onClick, {
    eventName: 'click',
    recordingKey,
  }, [onClick, disabled])

  // Original code: setupMenuItemHandler for menu item interactions
  const menuItemHandler = setupMenuItemHandler({
    forwardedRef: ref,
    action: handleClick,
    disabled,
    closeOnClick: true,
  })

  return jsx('li', {
    role: 'menuitem',
    ...ariaAttributes,
    ...menuItemHandler,
    ...otherProps,
    ...htmlAttributes,
    children,
  })
})

// Define types for better clarity and maintainability
interface MenuItemProps {
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void
  children: React.ReactNode
  disabled?: boolean
  recordingKey?: string
  htmlAttributes?: React.HTMLAttributes<HTMLLIElement>
  [key: string]: any
}
MenuItem.displayName = 'Menu.Item'

// Original code: MenuPrimitive.Item
/**
 * @description MenuItemPrimitive component with accessibility connector.
 */
export const MenuItemPrimitive = withA11yConnector(MenuItem)
MenuItemPrimitive.displayName = 'MenuPrimitive.Item'

// Original code: MenuPrimitive.Link
/**
 * @description MenuLink component for menu links.
 * @param {object} props - Component props.
 * @param {string} props.href - Link href.
 * @param {object} props.htmlAttributes - Additional HTML attributes.
 * @param {React.Ref} ref - Forwarded ref.
 * @returns {JSX.Element} The link element.
 */
// Original code: MenuPrimitive.Link
/**
 * @description MenuLink component for menu links.
 * @param {object} props - Component props.
 * @param {string} props.href - Link href.
 * @param {object} props.htmlAttributes - Additional HTML attributes.
 * @param {React.Ref} ref - Forwarded ref.
 * @returns {JSX.Element} The link element.
 */
export const MenuPrimitiveLink = forwardRef<HTMLAnchorElement, MenuLinkProps>(({
  href,
  htmlAttributes,
  ...otherProps
}, ref) => {
  const menuItemHandler = setupMenuItemHandler({
    forwardedRef: ref,
    action: (event) => {
      (event.currentTarget as HTMLAnchorElement).click()
    },
    disabled: false,
    closeOnClick: true,
    isLink: true,
  })
  return jsx(LinkPrimitive, {
    href,
    htmlAttributes: {
      role: 'menuitem',
      ...htmlAttributes,
    },
    ...menuItemHandler,
    ...otherProps,
  })
})

// Define types for better clarity and maintainability
interface MenuLinkProps {
  href: string
  htmlAttributes?: React.HTMLAttributes<HTMLAnchorElement>
  [key: string]: any
}

MenuPrimitiveLink.displayName = 'MenuPrimitive.Link'

// Original code: MenuContext
/**
 * @description Context for menu state management.
 */
const MenuContext = createContext({
  activeIndex: null,
  setActiveIndex: () => {},
  listLength: 0,
})

// Original code: isOutsideCuratorPortal
/**
 * @description Checks if the event target is outside the curator portal.
 * @param {Event} e - The event.
 * @returns {boolean} True if outside.
 */
function isOutsideCuratorPortal(e) {
  const t = e.target
  return t instanceof HTMLElement && t.closest('#curator-portal-target') === null
}

// Original code: useMenu hook
/**
 * @description Custom hook for managing menu state, interactions, and positioning using Floating UI.
 * This hook handles menu opening/closing, navigation, scrolling, and context menu functionality.
 * @param {UseMenuOptions} options - Configuration options for the menu.
 * @returns {UseMenuReturn} An object containing the menu manager and utility functions.
 */
export function useMenu(options: UseMenuOptions): UseMenuReturn {
  // State variables for menu management
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)
  const [innerOffset, setInnerOffset] = useState(0)
  const [selectionLock, setSelectionLock] = useState(true)
  const [scrollTop, setScrollTop] = useState(0)
  const [hasOverlap, setHasOverlap] = useState(false)

  // Refs for DOM elements and lists
  const nodeId = useFloatingNodeId()
  const touchStartPosition = useRef<{ x: number, y: number } | null>(null)
  const listRef = useRef([])
  const itemRef = useRef([])
  const overflowRef = useRef(null)
  const scrollRef = useRef(null)
  const touchTimeoutRef = useRef<number | null>(null)

  // Determine if this is a nested menu
  const parentNodeId = useFloatingParentNodeId()
  const isNested = parentNodeId !== null

  // Load feature flags
  const initialFocusEnabled = loadFeatureFlags().fpl_menu_initial_focus

  // Middleware configuration for Floating UI
  const middleware = [
    offset(options?.offset),
    flip(),
    size({
      padding: { top: 12, bottom: 12, left: 8, right: 8 },
      apply({ availableWidth, availableHeight, elements }) {
        Object.assign(elements.floating.style, {
          maxWidth: `${Math.max(0, availableWidth)}px`,
          maxHeight: `${Math.max(0, availableHeight)}px`,
        })
      },
    }),
  ]

  // Popover primitive setup
  const {
    getTriggerProps: baseGetTriggerProps,
    getContainerProps,
    context,
  } = usePopoverPrimitive({
    isOpen,
    type: 'menu',
    provideOwnDismiss: true,
    provideOwnClick: true,
    middleware,
    onOpenChange: setIsOpen,
    nodeId,
    placement: isNested ? 'right-start' : options?.initialPosition ?? 'bottom-start',
    config2025CuratorHacks: options?.config2025CuratorHacks,
  })

  // Dismiss configuration for curator portal
  const dismissConfig = options?.config2025CuratorHacks
    ? { outsidePress: isOutsideCuratorPortal }
    : {}

  // Interactions setup
  const {
    getReferenceProps,
    getFloatingProps,
    getItemProps,
  } = useInteractions([
    useHover(context, {
      enabled: isNested,
      delay: { open: 75 },
      handleClose: safePolygon({ blockPointerEvents: true, buffer: 8 }),
    }),
    useClick(context, {
      toggle: !isNested,
      ignoreMouse: isNested,
      event: 'mousedown',
    }),
    useDismiss(context, {
      bubbles: { outsidePress: true, escapeKey: true },
      ...dismissConfig,
    }),
    useRole(context, { role: 'menu' }),
    useTypeahead(context, {
      listRef,
      activeIndex,
      onMatch: setActiveIndex,
      findMatch: (list, search) =>
        list.find(item => item?.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())),
    }),
    useListNavigation(context, {
      listRef: itemRef,
      activeIndex,
      focusItemOnOpen: !initialFocusEnabled || undefined,
      nested: isNested,
      scrollItemIntoView: { block: 'center', inline: 'center' },
      onNavigate: setActiveIndex,
      disabledIndices: [],
    }),
  ])

  // Effect to detect menu overlap
  useLayoutEffect(() => {
    if (!context.isPositioned && hasOverlap) {
      setHasOverlap(false)
      return
    }
    if (!context.isPositioned)
      return

    const containers = Array.from(document.querySelectorAll('[data-fpl-menu-container]')).map(
      el => el.getBoundingClientRect(),
    )
    for (let i = 0; i < containers.length - 1; i++) {
      for (let j = i + 1; j < containers.length; j++) {
        if (rectanglesOverlap(containers[i], containers[j])) {
          setHasOverlap(true)
          return
        }
      }
    }
    setHasOverlap(false)
  }, [context.isPositioned])

  // Helper function to open menu at a specific position
  const openAtPosition = (x: number, y: number) => {
    context.refs.setPositionReference({
      getBoundingClientRect: () => ({
        width: 0,
        height: 0,
        x,
        y,
        top: y,
        right: x,
        bottom: y,
        left: x,
      }),
    })
    setIsOpen(true)
  }

  // Helper function to get trigger props
  const getTriggerProps = (extraProps?: any) => ({
    ...baseGetTriggerProps(),
    ...getReferenceProps({
      onMouseDown: extraProps?.onClick,
      ...extraProps,
    }),
  })

  // Helper function for context menu trigger
  const getContextMenuTriggerProps = () => ({
    onContextMenu: (event: React.MouseEvent) => {
      if (event.shiftKey)
        return
      preventAndStopEvent(event)
      openAtPosition(event.clientX, event.clientY)
    },
    onTouchStart: (event: React.TouchEvent) => {
      if (event.touches.length > 1) {
        if (touchTimeoutRef.current)
          clearTimeout(touchTimeoutRef.current)
        return
      }
      const { clientX, clientY } = event.touches[0]
      touchStartPosition.current = { x: clientX, y: clientY }
      touchTimeoutRef.current = window.setTimeout(() => {
        openAtPosition(clientX, clientY)
      }, 600)
    },
    onTouchMove: (event: React.TouchEvent) => {
      const touch = event.touches[0]
      if (touchTimeoutRef.current && touchStartPosition.current) {
        const deltaX = Math.abs(touch.clientX - touchStartPosition.current.x)
        const deltaY = Math.abs(touch.clientY - touchStartPosition.current.y)
        if (deltaX > 10 || deltaY > 10) {
          clearTimeout(touchTimeoutRef.current)
        }
      }
    },
    onTouchCancel: () => {
      if (touchTimeoutRef.current)
        clearTimeout(touchTimeoutRef.current)
    },
    onTouchEnd: () => {
      if (touchTimeoutRef.current)
        clearTimeout(touchTimeoutRef.current)
    },
  })

  // Helper function for arrow scroll
  const handleArrowScroll = (delta: number) => {
    flushSync(() => setInnerOffset(prev => prev - delta))
  }

  // Memoized return object
  return useMemo(
    () => ({
      manager: {
        getItemProps,
        getContainerProps,
        getFloatingProps,
        getTriggerProps,
        overflowRef,
        scrollRef,
        listRef,
        itemRef,
        context,
        setScrollTop,
        setSelectionLock,
        setOpen: setIsOpen,
        handleArrowScroll,
        allowSelection: selectionLock,
        nodeId,
        isOpen,
        hasOverlap,
        scrollTop,
        innerOffset,
        activeIndex,
        setActiveIndex,
      },
      getContextMenuTriggerProps,
      getTriggerProps,
      openControlledPosition: openAtPosition,
    }),
    [
      activeIndex,
      selectionLock,
      context,
      getContainerProps,
      getFloatingProps,
      getItemProps,
      getReferenceProps,
      baseGetTriggerProps,
      hasOverlap,
      innerOffset,
      isOpen,
      nodeId,
      touchStartPosition.current,
      scrollTop,
    ],
  )
}

// Define types for better clarity and maintainability
export interface UseMenuOptions {
  offset?: number
  initialPosition?: string
  config2025CuratorHacks?: boolean
}

export interface UseMenuReturn {
  manager: {
    getItemProps: any
    getContainerProps: any
    getFloatingProps: any
    getTriggerProps: (extraProps?: any) => any
    overflowRef: React.RefObject<any>
    scrollRef: React.RefObject<any>
    listRef: React.RefObject<any>
    itemRef: React.RefObject<any>
    context: any
    setScrollTop: (value: number) => void
    setSelectionLock: (value: boolean) => void
    setOpen: (value: boolean) => void
    handleArrowScroll: (delta: number) => void
    allowSelection: boolean
    nodeId: string
    isOpen: boolean
    hasOverlap: boolean
    scrollTop: number
    innerOffset: number
    activeIndex: number | null
    setActiveIndex: (index: number | null) => void
  }
  getContextMenuTriggerProps: () => any
  getTriggerProps: (extraProps?: any) => any
  openControlledPosition: (x: number, y: number) => void
}

// Original code: SubMenu
/**
 * @description SubMenu component.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Children elements.
 * @param {number} props.offset - Offset value.
 * @returns {JSX.Element} The submenu element.
 */
export function SubMenu({
  children: e,
  offset: t = 0,
}) {
  const {
    manager,
  } = useMenu({
    offset: t,
  })
  return jsx(MenuItemContext.Provider, {
    value: manager,
    children: e,
  })
}
SubMenu.displayName = 'MenuPrimitive.SubMenu'

// Original code: SubTrigger
/**
 * @description SubTrigger component.
 * @param {object} props - Component props.
 * @param {boolean} props.disabled - Whether disabled.
 * @param {React.ReactNode} props.children - Children elements.
 * @param {boolean} props.hasChecked - Whether has checked state.
 * @param {object} props.htmlAttributes - Additional HTML attributes.
 * @param {string} props.recordingKey - Recording key.
 * @param {React.Ref} ref - Forwarded ref.
 * @returns {JSX.Element} The subtrigger element.
 */
// Original code: SubTrigger
/**
 * @description SubTrigger component for submenu triggers with accessibility and interaction handling.
 * @param {SubTriggerProps} props - Component props.
 * @param {React.Ref} ref - Forwarded ref.
 * @returns {JSX.Element} The subtrigger element.
 */
export const SubTrigger = forwardRef<HTMLLIElement, SubTriggerProps>(({
  disabled,
  children,
  hasChecked,
  htmlAttributes,
  recordingKey,
  ...otherProps
}, ref) => {
  // Original code: useFplStrings hook for 'hasChecked' string
  const hasCheckedString = useFplStrings('hasChecked')

  // Original code: MenuContext for active index and list length
  const {
    activeIndex,
    setActiveIndex,
    listLength,
  } = useContext(MenuContext)

  // Original code: ensureContext for MenuItemContext
  const {
    getTriggerProps,
    setOpen,
  } = ensureContext(MenuItemContext, 'SubTrigger', 'SubMenu')

  // Original code: useState for label
  const [label, setLabel] = useState('')

  // Original code: useListItem hook
  const {
    ref: listItemRef,
    index,
  } = useListItem({
    label,
  })

  // Original code: useRef for trigger element
  const triggerRef = useRef<HTMLLIElement>(null)

  // Original code: setupKeyboardNavigationHandler
  const handleKeyDown = setupKeyboardNavigationHandler(setActiveIndex)

  // Original code: getTriggerProps with onKeyDown
  const {
    ref: triggerPropsRef,
    ...triggerProps
  } = getTriggerProps({
    onKeyDown: event => handleKeyDown(listLength, activeIndex, event),
  })

  // Original code: useMergeRefs for merging refs
  const mergedRef = useMergeRefs([listItemRef, triggerRef, triggerPropsRef, ref])

  // Original code: isSelected logic
  const isSelected = activeIndex === index

  // Original code: openSubMenu function
  const openSubMenu = () => setOpen(true)

  // Original code: useRecording for click event
  const handleClick = useRecording(openSubMenu, {
    eventName: 'click',
    recordingKey,
  }, [openSubMenu, disabled])

  // Original code: useLayoutEffect for setting label
  useLayoutEffect(() => {
    if (triggerRef.current) {
      setLabel(triggerRef.current.textContent ?? '')
    }
  }, [])

  // Early return or guard clause not applicable here as the component is straightforward

  return jsxs('li', {
    'role': 'menuitem',
    'data-fpl-selected': isSelected || triggerProps['aria-expanded'] || undefined,
    'data-fpl-nested-selection': hasChecked,
    'aria-disabled': disabled,
    'tabIndex': isSelected ? 0 : -1,
    ...triggerProps,
    ...defaultComponentAttribute,
    'ref': mergedRef,
    ...otherProps,
    ...htmlAttributes,
    'onClick': handleClick,
    'children': [
      children,
      ' ',
      hasChecked && jsx(ScreenReaderOnly, {
        children: hasCheckedString,
      }),
    ],
  })
})

// Define types for better clarity and maintainability
interface SubTriggerProps {
  disabled?: boolean
  children: React.ReactNode
  hasChecked?: boolean
  htmlAttributes?: React.HTMLAttributes<HTMLLIElement>
  recordingKey?: string
  [key: string]: any
}

SubTrigger.displayName = 'MenuPrimitive.SubTrigger'
SubTrigger.displayName = 'MenuPrimitive.SubTrigger'

// Original code: SubContainer

// Original code: MenuContainer
/**
 * @description MenuContainer component for rendering the menu container with floating UI and context.
 * @param {MenuContainerProps} props - Component props.
 * @param {React.Ref} ref - Forwarded ref.
 * @returns {JSX.Element} The menu container element.
 */
export const MenuContainer = forwardRef<HTMLDivElement, MenuContainerProps>(({
  children,
  htmlAttributes,
  className,
  ...otherProps
}, ref) => {
  // Original code: useFloatingTree hook
  const floatingTree = useFloatingTree()

  // Original code: ensureContext for MenuItemContext
  const {
    getContainerProps,
    nodeId,
    setOpen,
    context,
    scrollRef,
    listRef,
    itemRef,
    innerOffset,
    getFloatingProps,
    setScrollTop,
    setActiveIndex,
    activeIndex,
  } = ensureContext(MenuItemContext, 'Container', 'Root')

  // Original code: useMergeRefs for merging refs
  const mergedRef = useMergeRefs([ref, scrollRef])

  // Original code: useEffect for handling floating tree events
  useEffect(() => {
    if (!floatingTree)
      return
    const handleClick = () => setOpen(false)
    floatingTree.events.on('click', handleClick)
    return () => {
      floatingTree.events.off('click', handleClick)
    }
  }, [floatingTree, setOpen])

  // Original code: floatingRef from context
  const floatingRef = context.refs.floating ?? { current: null }

  // Original code: useEffect for scrolling to inner offset
  useEffect(() => {
    if (!floatingRef.current)
      return
    floatingRef.current.scrollTo({
      top: innerOffset,
      behavior: 'instant',
    })
  }, [floatingRef, innerOffset])

  return jsx(FloatingNode, {
    id: nodeId,
    children: jsx(MenuContext.Provider, {
      value: {
        activeIndex,
        setActiveIndex,
        listLength: listRef.current.length,
      },
      children: jsx(PopoverPrimitiveContainer, {
        ...getContainerProps({
          onScroll({ currentTarget }) {
            flushSync(() => setScrollTop(currentTarget.scrollTop))
          },
        }),
        'className': classNames('menu-primitive__container__5lt-5', className),
        'data-fpl-menu-container': true,
        ...defaultComponentAttribute,
        ...otherProps,
        ...htmlAttributes,
        'children': jsx(FloatingList, {
          elementsRef: listRef,
          labelsRef: itemRef,
          children: jsx('ul', {
            className: 'menu-primitive__list__i3VRn',
            ref: mergedRef,
            ...getFloatingProps({}),
            children,
          }),
        }),
      }),
    }),
  })
})

// Define types for better clarity and maintainability
interface MenuContainerProps {
  children: React.ReactNode
  htmlAttributes?: React.HTMLAttributes<HTMLDivElement>
  className?: string
  [key: string]: any
}

MenuContainer.displayName = 'MenuPrimitive.Container'

/**
 * @description SubContainer component.
 * @param {object} props - Component props.
 * @param {React.Ref} ref - Forwarded ref.
 * @returns {JSX.Element} The subcontainer element.
 */
export const MenuSubContainer = forwardRef((props, ref) => {
  const {
    nodeId,
    hasOverlap,
  } = ensureContext(MenuItemContext, 'SubContainer', 'SubMenu')
  return jsx(FloatingNode, {
    id: nodeId,
    children: jsx(MenuContainer, {
      'data-fpl-menu-overlap': hasOverlap || undefined,
      'ref': ref,
      ...props,
    }),
  })
})
MenuSubContainer.displayName = 'MenuPrimitive.SubContainer'

// Original code: MenuRoot
/**
 * @description MenuRoot component.
 * @param {object} props - Component props.
 * @param {object} props.manager - Menu manager.
 * @param {React.ReactNode} props.children - Children elements.
 * @returns {JSX.Element} The root element.
 */
export function MenuRoot({
  manager: e,
  children: t,
}) {
  return jsx(FloatingTree, {
    children: jsx(MenuItemContext.Provider, {
      value: e,
      children: jsx(EventShield, {
        display: 'contents',
        eventListeners: ['onClick', 'onPointerDown', 'onMouseDown'],
        children: t,
      }),
    }),
  })
}
MenuContainer.displayName = 'MenuPrimitive.Container'
MenuRoot.displayName = 'MenuPrimitive.Root'

// Original code: MenuTitle
// Original code: MenuTitle
/**
 * @description MenuTitle component for menu titles.
 * @param {object} props - Component props.
 * @param {object} props.htmlAttributes - Additional HTML attributes.
 * @param {React.Ref} ref - Forwarded ref.
 * @returns {JSX.Element} The title element.
 */
export const MenuTitle = forwardRef<HTMLLIElement, {
  htmlAttributes?: React.HTMLAttributes<HTMLLIElement>
  [key: string]: any
}>(({
  htmlAttributes,
  ...rest
}, ref) => {
  const selectionId = useSelectionContext()
  return jsx('li', {
    ref,
    id: selectionId,
    role: 'none',
    ...htmlAttributes,
    ...defaultComponentAttribute,
    ...rest,
  })
})
MenuTitle.displayName = 'MenuPrimitive.Title'

export const MenuGroup = forwardRef<HTMLUListElement, {
  children: React.ReactNode
  title?: React.ReactNode
  htmlAttributes?: React.HTMLAttributes<HTMLUListElement>
  [key: string]: any
}>(({
  children,
  title,
  htmlAttributes,
  ...rest
}, ref) => {
  const [selectionId, SelectionProvider] = useSelectionProvider()
  return title
    ? jsx(SelectionProvider, {
        value: selectionId,
        children: jsxs('ul', {
          ref,
          'aria-labelledby': selectionId,
          'role': 'group',
          ...htmlAttributes,
          ...defaultComponentAttribute,
          ...rest,
          'children': [title, children],
        }),
      })
    : jsx('ul', {
        role: 'none',
        ...htmlAttributes,
        ...defaultComponentAttribute,
        ...rest,
        children,
      })
})
MenuGroup.displayName = 'MenuPrimitive.Group'

// Original code: SCROLL_THRESHOLD
const SCROLL_THRESHOLD = 10
// Original code: canScroll helper
// Original code: canScroll helper
/**
 * @description Checks if scrolling is possible in a given direction for the menu container.
 * @param {React.RefObject<HTMLElement>} floatingRef - Reference to the floating element (menu container).
 * @param {string} direction - The direction to check ('up' or 'down').
 * @param {React.RefObject<HTMLElement>} scrollRef - Reference to the scrollable element.
 * @returns {boolean} True if scrolling is possible in the specified direction.
 */
function canScroll(floatingRef: React.RefObject<HTMLElement>, direction: string, scrollRef: React.RefObject<HTMLElement>): boolean {
  if (floatingRef.current && scrollRef.current) {
    const { scrollTop, scrollHeight, clientHeight } = floatingRef.current
    if (direction === 'up') {
      return scrollTop >= SCROLL_THRESHOLD
    }
    if (direction === 'down') {
      return scrollHeight > clientHeight + scrollTop + SCROLL_THRESHOLD
    }
  }
  return false
}

// Original code: ScrollArrow
// Original code: ScrollArrow
/**
 * @description ScrollArrow component for handling scroll arrows in menus.
 * @param {object} props - Component props.
 * @param {string} props.direction - The direction of the scroll ('up' or 'down').
 * @param {React.ReactNode} props.children - The children elements to render inside the arrow.
 * @param {string} props.className - Additional CSS class name.
 * @param {React.Ref} ref - Forwarded ref for the arrow element.
 * @returns {JSX.Element} The scroll arrow element.
 */
export const ScrollArrow = forwardRef<HTMLDivElement, {
  direction: 'up' | 'down'
  children: React.ReactNode
  className?: string
}>(({
  direction,
  children,
  className,
  ...otherProps
}, ref) => {
  const [isVisible, setIsVisible] = useState(false)
  const arrowRef = useRef<HTMLDivElement>(null)
  const mergedRef = useMergeRefs([arrowRef, ref])
  const stateRef = useRef<'idle' | 'active'>('idle')
  const animationFrameRef = useRef(-1)

  const {
    context: { isPositioned, refs },
    scrollTop,
    scrollRef,
    handleArrowScroll,
    innerOffset,
  } = ensureContext(MenuItemContext, 'ScrollArrow', 'Root')

  const floatingRef = refs.floating ?? { current: null }

  // Helper function to handle the scroll animation logic
  const startScrollAnimation = () => {
    let lastTime = Date.now()
    const animate = () => {
      if (!floatingRef.current)
        return

      const now = Date.now()
      const deltaTime = now - lastTime
      lastTime = now
      const scrollAmount = deltaTime / 2

      const currentScrollTop = floatingRef.current.scrollTop
      const maxScrollTop = floatingRef.current.scrollHeight - floatingRef.current.clientHeight

      if (direction === 'up') {
        const remainingScroll = currentScrollTop
        const actualScroll = Math.min(scrollAmount, remainingScroll)
        handleArrowScroll(-actualScroll)
        if (currentScrollTop - actualScroll > 0) {
          animationFrameRef.current = requestAnimationFrame(animate)
        }
        else {
          setIsVisible(canScroll(floatingRef, direction, scrollRef))
        }
      }
      else {
        const remainingScroll = maxScrollTop - currentScrollTop
        const actualScroll = Math.min(scrollAmount, remainingScroll)
        handleArrowScroll(actualScroll)
        if (currentScrollTop + actualScroll < maxScrollTop) {
          animationFrameRef.current = requestAnimationFrame(animate)
        }
        else {
          setIsVisible(canScroll(floatingRef, direction, scrollRef))
        }
      }
    }
    animationFrameRef.current = requestAnimationFrame(animate)
  }

  useLayoutEffect(() => {
    if (isPositioned && stateRef.current !== 'active') {
      requestAnimationFrame(() => {
        flushSync(() => setIsVisible(canScroll(floatingRef, direction, scrollRef)))
      })
    }
  }, [isPositioned, innerOffset, scrollTop, floatingRef, direction, scrollRef])

  return jsx('div', {
    'className': classNames('menu-primitive__scrollArrow__Om355', className),
    'data-fpl-select-direction': direction,
    'data-fpl-select-visibility': isVisible || undefined,
    'ref': mergedRef,
    'aria-hidden': true,
    'onPointerEnter': () => {
      stateRef.current = 'active'
      startScrollAnimation()
    },
    'onPointerLeave': () => {
      stateRef.current = 'idle'
      cancelAnimationFrame(animationFrameRef.current)
    },
    ...defaultComponentAttribute,
    ...otherProps,
    children,
  })
})
ScrollArrow.displayName = 'SelectPrimitive.ScrollArrow'

// Refactored exports with meaningful names
export const mc = MenuContainer
export const YJ = MenuGroup
export const q7 = MenuItemPrimitive
export const N_ = MenuPrimitiveLink
export const bL = MenuRoot
export const LJ = ScrollArrow
export const MJ = MenuSubContainer
export const g8 = SubMenu
export const ZP = SubTrigger
export const hE = MenuTitle
export const b = useMenu
