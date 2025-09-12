import type {
  CSSProperties,
  ReactNode,
  Ref,
} from 'react'
import {
  autoUpdate,
} from '@floating-ui/dom'
import {
  FloatingArrow,
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  safePolygon,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useMergeRefs,
} from '@floating-ui/react'
import {
  arrow,
  flip,
  offset,
} from '@floating-ui/react-dom'
import classNames from 'classnames'
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useId,
  useRef,
  useState,
} from 'react'
import { jsx } from 'react/jsx-runtime'
import { getThemeContextOrDefault } from '../905/158740'
import { UI3ConditionalWrapper } from '../905/341359'
import { loadFeatureFlags } from '../905/586361'
import { useSelectionProvider } from '../905/751750'
import { EventShield } from '../905/821217'
import {
  EVENT_CAPTURE_CLASS,
  EVENT_CAPTURE_KEYS_CLASS,
  WHEEL_EVENT_CAPTURE_CLASS,
} from '../905/955878'

/**
 * Context for PopoverOutlet (original: $$f0)
 */
export const PopoverContext = createContext<React.RefObject<HTMLDivElement> | undefined>(undefined)

/**
 * PopoverOutlet component (original: PopoverOutlet)
 * Provides a context ref for popover content.
 */
export function PopoverOutlet({
  children,
}: {
  children: ReactNode
}) {
  const outletRef = useRef<HTMLDivElement>(null)
  return jsx('div', {
    className: 'utils__contents__try7q',
    ref: outletRef,
    children: jsx(PopoverContext.Provider, {
      value: outletRef,
      children,
    }),
  })
}
PopoverOutlet.displayName = 'PopoverOutlet'

/**
 * Types for PopoverPrimitiveProps (original: $$A1)
 */
export interface PopoverPrimitiveProps {
  type: 'dialog' | 'menu' | 'listbox' | 'grid' | 'tree' | 'tooltip' | 'tutorial'
  softDismiss?: boolean
  provideOwnDismiss?: boolean
  provideOwnClick?: boolean
  isOpen: boolean
  openOnHover?: boolean
  offset?: number
  arrowPadding?: number
  middleware?: any[]
  config2025CuratorHacks?: any
  [key: string]: any
}

/**
 * PopoverPrimitive logic hook (original: $$A1)
 * Returns props and context for popover triggers, arrows, and containers.
 */
export function usePopoverPrimitive({
  type,
  softDismiss,
  provideOwnDismiss,
  provideOwnClick,
  isOpen,
  openOnHover = false,
  offset: offsetValue = 8,
  arrowPadding = 0,
  middleware,
  config2025CuratorHacks,
  ...rest
}: PopoverPrimitiveProps) {
  const id = useId()
  const arrowRef = useRef<HTMLDivElement>(null)
  const [popoverId, setPopoverId] = useState(id)

  const {
    refs,
    floatingStyles,
    context,
  } = useFloating({
    ...rest,
    middleware: middleware
      ? middleware.concat([arrow({ element: arrowRef, padding: arrowPadding })])
      : [
          offset(offsetValue),
          flip({ padding: 8, fallbackAxisSideDirection: 'start' }),
          arrow({ element: arrowRef, padding: arrowPadding }),
        ],
    open: isOpen,
    whileElementsMounted: autoUpdate,
  })

  const useSoftDismiss = softDismiss === undefined
    ? type === 'listbox' || type === 'menu' || type === 'tooltip'
    : softDismiss

  const click = useClick(context, {
    enabled: type !== 'tutorial' && !provideOwnClick,
  })
  const dismiss = useDismiss(context, {
    enabled: !provideOwnDismiss,
    outsidePress: softDismiss,
  })
  const hover = useHover(context, {
    enabled: openOnHover,
    move: false,
    delay: { open: 500, close: 0 },
    handleClose: safePolygon({
      requireIntent: false,
      blockPointerEvents: true,
      buffer: 1,
    }),
  })

  const {
    getReferenceProps,
    getFloatingProps,
  } = useInteractions([click, dismiss, hover])

  /**
   * Returns props for the popover container.
   * @param options - Container options
   */
  const getContainerProps = useCallback(({
    style,
    ...containerProps
  }: { style?: CSSProperties, id?: string, [key: string]: any } = {}) => {
    if (containerProps.id)
      setPopoverId(containerProps.id)
    return {
      isOpen,
      type,
      context,
      useSoftDismiss,
      id: popoverId,
      ref: refs.setFloating,
      style: { ...style, ...floatingStyles },
      config2025CuratorHacks,
      ...containerProps,
      ...getFloatingProps({}),
    }
  }, [
    popoverId,
    context,
    useSoftDismiss,
    floatingStyles,
    getFloatingProps,
    isOpen,
    refs.setFloating,
    type,
    config2025CuratorHacks,
  ])

  /**
   * Returns props for the arrow element.
   */
  const getArrowProps = useCallback(() => ({
    ref: arrowRef,
    context,
  }), [context, arrowRef])

  /**
   * Returns props for the trigger element.
   * @param triggerProps - Additional trigger props
   */
  const getTriggerProps = useCallback((triggerProps = {}) => {
    const ref = refs.setReference
    if (type === 'tutorial') {
      const { onClick, ...restProps } = getReferenceProps({
        ref,
        'aria-details': popoverId,
      })
      return restProps
    }
    return getReferenceProps({
      ...triggerProps,
      ref,
      'aria-controls': popoverId,
      'aria-haspopup': type === 'tooltip' ? 'dialog' : type,
      'aria-expanded': isOpen,
      'aria-describedby': type === 'tooltip' ? popoverId : undefined,
    })
  }, [popoverId, getReferenceProps, isOpen, refs.setReference, type])

  return {
    getTriggerProps,
    getArrowProps,
    getContainerProps,
    context,
  }
}

/**
 * PopoverPrimitiveArrow component (original: PopoverPrimitiveArrow)
 * Renders the arrow for the popover.
 */
export const PopoverPrimitiveArrow = forwardRef<SVGSVGElement, { fill?: string }>(({
  fill = 'var(--color-bg)',
  ...props
}, ref) => {
  const localRef = useRef<SVGSVGElement>(null)
  const mergedRef = useMergeRefs([localRef, ref])
  return jsx(FloatingArrow, {
    ref: mergedRef,
    tipRadius: 1,
    fill,
    ...props,
  })
})
PopoverPrimitiveArrow.displayName = 'PopoverPrimitive.Arrow'

/**
 * Props for PopoverPrimitiveContainer (original: PopoverPrimitiveContainer)
 */
/**
 * Props for PopoverPrimitiveContainer (original: PopoverPrimitiveContainer)
 * @property {boolean} isOpen - Whether the popover is open
 * @property {string} type - Type of the popover
 * @property {ReactNode} children - Children nodes
 * @property {any} context - Floating UI context
 * @property {boolean} useSoftDismiss - Enables soft dismiss behavior
 * @property {CSSProperties} style - Custom styles
 * @property {any} config2025CuratorHacks - Curator hacks config
 * @property {string} className - Custom class name
 * @property {any} [key: string] - Additional props
 */
export interface PopoverPrimitiveContainerProps {
  isOpen: boolean
  type: string
  children: ReactNode
  context: any
  useSoftDismiss?: boolean
  style?: CSSProperties
  config2025CuratorHacks?: any
  className?: string
  [key: string]: any
}

/**
 * PopoverPrimitiveContainer component (original: PopoverPrimitiveContainer)
 * Renders the popover container with focus management and event shielding.
 */
export const PopoverPrimitiveContainer = forwardRef<HTMLElement, PopoverPrimitiveContainerProps>(({
  isOpen,
  type,
  children,
  context,
  useSoftDismiss,
  style,
  config2025CuratorHacks,
  className,
  ...rest
}, ref: Ref<HTMLElement>) => {
  const outletRoot = useContext(PopoverContext)
  const isMenuOrListbox = type === 'listbox' || type === 'menu'
  const [selectionId, SelectionProvider] = useSelectionProvider()
  const { version } = getThemeContextOrDefault()
  const { fpl_popover_fullscreen_events } = loadFeatureFlags()
  const eventClasses = fpl_popover_fullscreen_events
    ? [EVENT_CAPTURE_CLASS, EVENT_CAPTURE_KEYS_CLASS, WHEEL_EVENT_CAPTURE_CLASS]
    : []

  const zIndexMap: Record<string, string> = {
    dialog: 'var(--z-index-window)',
    grid: 'var(--z-index-window)',
    tree: 'var(--z-index-window)',
    listbox: 'var(--z-index-dropdown)',
    menu: config2025CuratorHacks ? '9' : 'var(--z-index-dropdown)',
    tutorial: 'var(--z-index-window)',
    tooltip: 'var(--z-index-tooltip)',
  }

  // Render logic for popover container
  if (!isOpen && type === 'listbox') {
    return jsx('div', {
      style: { display: 'none' },
      children,
    })
  }

  if (!isOpen)
    return null

  if (useSoftDismiss) {
    // EventShield for soft dismiss
    return jsx(EventShield, {
      display: 'contents',
      eventListeners: isMenuOrListbox ? ['onKeyDown', 'onKeyUp', 'onKeyPress'] : [],
      children: jsx(FloatingPortal, {
        root: outletRoot,
        children: jsx(UI3ConditionalWrapper, {
          disabled: version !== 'ui3',
          children: jsx(FloatingOverlay, {
            style: {
              zIndex: zIndexMap[type],
              isolation: 'isolate',
            },
            lockScroll: true,
            children: jsx(PopoverOutlet, {
              children: jsx(FloatingFocusManager, {
                context,
                modal: isMenuOrListbox,
                initialFocus: type === 'tooltip' ? -1 : 0,
                children: jsx('div', {
                  ref,
                  style,
                  className: classNames(className, ...eventClasses),
                  ...rest,
                  children,
                }),
              }),
            }),
          }),
        }),
      }),
    })
  }

  // SelectionProvider for menu/listbox
  return jsx(SelectionProvider, {
    value: selectionId,
    children: jsx(FloatingPortal, {
      root: outletRoot,
      children: jsx(PopoverOutlet, {
        children: jsx('section', {
          'aria-labelledby': selectionId,
          ref,
          ...rest,
          'style': { ...style, zIndex: zIndexMap[type] },
          'className': classNames(className, ...eventClasses),
          children,
        }),
      }),
    }),
  })
})
PopoverPrimitiveContainer.displayName = 'PopoverPrimitive.Container'

// Export refactored names
export const Uk = PopoverContext
export const fP = usePopoverPrimitive
export const i3 = PopoverPrimitiveArrow
export const mc = PopoverPrimitiveContainer
export const nK = PopoverOutlet
