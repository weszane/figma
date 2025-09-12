import { autoUpdate } from '@floating-ui/dom'
import { FloatingFocusManager, FloatingList, FloatingOverlay, FloatingPortal, inner, useClick, useDismiss, useFloating, useInnerOffset, useInteractions, useListItem, useListNavigation, useMergeRefs, useTypeahead } from '@floating-ui/react'
import { flip, offset, size } from '@floating-ui/react-dom'
import classNames from 'classnames'
import { createContext, forwardRef, useCallback, useContext, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { jsx, jsxs } from 'react/jsx-runtime'
import { setupRecordingHandler } from '../905/458642'
import { defaultComponentAttribute } from '../905/577641'
import { loadFeatureFlags } from '../905/586361'
import { PopoverContext } from '../905/691059'
import { useSelectionContext, useSelectionProvider } from '../905/751750'
import { EventShield } from '../905/821217'
import { EVENT_CAPTURE_CLASS, EVENT_CAPTURE_KEYS_CLASS, preventAndStopEvent, WHEEL_EVENT_CAPTURE_CLASS } from '../905/955878'

/**
 * Checks if the scroll position allows for scrolling in the given direction.
 * Original: _
 * @param ref - The ref to the scrollable element.
 * @param direction - 'up' or 'down'.
 * @returns {boolean}
 */
function canScroll(ref: React.RefObject<HTMLElement>, direction: 'up' | 'down'): boolean {
  if (ref.current) {
    const { scrollTop, scrollHeight, clientHeight } = ref.current
    if (direction === 'up')
      return scrollTop >= 10
    if (direction === 'down')
      return scrollTop <= scrollHeight - clientHeight - 10
  }
  return false
}

/**
 * Context for SelectPrimitive.
 * Original: $$A6
 */
export const SelectPrimitiveContext = createContext<{
  getTriggerProps: () => Record<string, any>
  setTriggerReference: (ref: any) => void
  getContainerProps: (value: any) => Record<string, any>
  setContainerReference: (ref: any) => void
  getItemProps: (value: any) => Record<string, any>
  overflowRef: React.RefObject<HTMLElement>
  scrollRef: React.RefObject<HTMLElement>
  allowSelection: boolean
  setOpen: (open: boolean) => void
  setScrollTop: (scrollTop: number) => void
  handleSelect: (value: any, event: any) => void
  handleArrowScroll: (amount: number) => void
  isOpen: boolean
  isTriggerFocused: boolean
  scrollTop: number
  innerOffset: number
  selectedIndex: number | null
  itemList: any[]
  activeIndex: number
  fallback: boolean
  floatingContext: Record<string, any>
  floatingStyles: Record<string, any>
}>({
  getTriggerProps: () => ({}),
  setTriggerReference: () => {},
  getContainerProps: () => ({}),
  setContainerReference: () => {},
  getItemProps: () => ({}),
  overflowRef: { current: null },
  scrollRef: { current: null },
  allowSelection: false,
  setOpen: () => {},
  setScrollTop: () => {},
  handleSelect: () => {},
  handleArrowScroll: () => {},
  isOpen: false,
  isTriggerFocused: false,
  scrollTop: 0,
  innerOffset: 0,
  selectedIndex: null,
  itemList: [],
  activeIndex: 0,
  fallback: false,
  floatingContext: {},
  floatingStyles: {},
})

/**
 * Hook to get select state.
 * Original: $$y8
 */
export function useSelectPrimitiveState() {
  const { itemList, selectedIndex, isOpen, activeIndex } = useContext(SelectPrimitiveContext)
  return {
    itemList,
    selectedItem: selectedIndex !== null ? itemList[selectedIndex] : null,
    isOpen,
    highlightedItem: activeIndex !== null ? itemList[activeIndex] : null,
  }
}

/**
 * ScrollArrow component for SelectPrimitive.
 * Original: $$b5
 */
export const SelectPrimitiveScrollArrow = forwardRef<HTMLDivElement, {
  direction: 'up' | 'down'
  children: React.ReactNode
  className?: string
  [key: string]: any
}>(({ direction, children, className, ...props }, ref) => {
  const [visible, setVisible] = useState(false)
  const localRef = useRef<HTMLDivElement>(null)
  const mergedRef = useMergeRefs([localRef, ref])
  const pointerState = useRef<'idle' | 'active'>('idle')
  const animationFrameRef = useRef<number>(-1)

  const {
    scrollRef,
    floatingContext: { isPositioned },
    scrollTop,
    handleArrowScroll,
    innerOffset,
  } = useContext(SelectPrimitiveContext)

  useLayoutEffect(() => {
    if (isPositioned && pointerState.current !== 'active') {
      requestAnimationFrame(() => {
        flushSync(() => setVisible(canScroll(scrollRef, direction)))
      })
    }
  }, [isPositioned, innerOffset, scrollTop, scrollRef, direction])

  return jsx('div', {
    'className': classNames('select-primitive__scrollArrow__-uP-4', className),
    'data-fpl-select-direction': direction,
    'data-fpl-select-visibility': visible || undefined,
    'ref': mergedRef,
    'aria-hidden': true,
    'onPointerEnter': () => {
      pointerState.current = 'active'
      let lastTime = Date.now()
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = requestAnimationFrame(function scrollLoop() {
        if (scrollRef.current) {
          const now = Date.now()
          const delta = now - lastTime
          lastTime = now
          const scrollAmount = delta / 2
          const remaining
            = direction === 'up'
              ? scrollRef.current.scrollTop
              : scrollRef.current.scrollHeight - scrollRef.current.clientHeight - scrollRef.current.scrollTop
          const canContinue
            = direction === 'up'
              ? scrollRef.current.scrollTop - scrollAmount > 0
              : scrollRef.current.scrollTop + scrollAmount < scrollRef.current.scrollHeight - scrollRef.current.clientHeight
          handleArrowScroll(
            direction === 'up' ? Math.min(scrollAmount, remaining) : Math.max(-scrollAmount, -remaining),
          )
          if (canContinue) {
            animationFrameRef.current = requestAnimationFrame(scrollLoop)
          }
          else {
            setVisible(canScroll(scrollRef, direction))
          }
        }
      })
    },
    'onPointerLeave': () => {
      pointerState.current = 'idle'
      cancelAnimationFrame(animationFrameRef.current)
    },
    ...defaultComponentAttribute,
    ...props,
    children,
  })
})
SelectPrimitiveScrollArrow.displayName = 'SelectPrimitive.ScrollArrow'

/**
 * Container component for SelectPrimitive.
 * Original: $$v0
 */
export const SelectPrimitiveContainer = forwardRef<HTMLDivElement, {
  children: React.ReactNode
  className?: string
  htmlAttributes?: Record<string, any>
  DEPRECATED_optionsOnFocusOnly?: boolean
  [key: string]: any
}>(({ children, className, htmlAttributes, DEPRECATED_optionsOnFocusOnly, ...props }, ref) => {
  const {
    setContainerReference,
    getContainerProps,
    floatingContext,
    floatingStyles,
    scrollRef,
    fallback,
    setScrollTop,
    isOpen,
    isTriggerFocused,
  } = useContext(SelectPrimitiveContext)

  const mergedRef = useMergeRefs([ref, scrollRef])
  const popoverContext = useContext(PopoverContext)
  const { fpl_popover_fullscreen_events } = loadFeatureFlags()
  const eventClasses = fpl_popover_fullscreen_events
    ? [EVENT_CAPTURE_CLASS, EVENT_CAPTURE_KEYS_CLASS, WHEEL_EVENT_CAPTURE_CLASS]
    : []

  const shieldedContent = jsx(EventShield, {
    display: 'contents',
    eventListeners: ['onClick', 'onPointerDown', 'onMouseDown'],
    children: jsx('div', {
      ref: setContainerReference,
      style: floatingStyles,
      className: classNames(eventClasses),
      children: jsx('ul', {
        ...defaultComponentAttribute,
        ...htmlAttributes,
        'className': classNames('select-primitive__container__hpR3l', className),
        'ref': mergedRef,
        'data-fpl-fallback': fallback,
        'role': 'listbox',
        ...getContainerProps({
          onScroll({ currentTarget }) {
            flushSync(() => setScrollTop(currentTarget.scrollTop))
          },
        }),
        ...props,
        children,
      }),
    }),
  })

  if (!DEPRECATED_optionsOnFocusOnly || isOpen || isTriggerFocused) {
    return isOpen
      ? jsx(FloatingPortal, {
          root: popoverContext ?? document.body,
          children: jsx(FloatingOverlay, {
            style: { zIndex: 'var(--z-index-dropdown)' },
            lockScroll: true,
            children: jsx(FloatingFocusManager, {
              context: floatingContext,
              modal: false,
              children: shieldedContent,
            }),
          }),
        })
      : jsx('div', {
          style: { display: 'none' },
          children: shieldedContent,
        })
  }
  return null
})
SelectPrimitiveContainer.displayName = 'SelectPrimitive.Container'

/**
 * Trigger component for SelectPrimitive.
 * Original: $$I7
 */
export const SelectPrimitiveTrigger = forwardRef<HTMLButtonElement, {
  htmlAttributes?: Record<string, any>
  [key: string]: any
}>(({ htmlAttributes, ...props }, ref) => {
  const { getTriggerProps, setTriggerReference } = useContext(SelectPrimitiveContext)
  const mergedRef = useMergeRefs([setTriggerReference, ref])
  return jsx(EventShield, {
    eventListeners: ['onPointerDown', 'onClick', 'onMouseDown'],
    display: 'contents',
    children: jsx('button', {
      type: 'button',
      ref: mergedRef,
      ...getTriggerProps(),
      ...defaultComponentAttribute,
      ...htmlAttributes,
      ...props,
    }),
  })
})
SelectPrimitiveTrigger.displayName = 'SelectPrimitive.Trigger'

/**
 * Option component for SelectPrimitive.
 * Original: $$E3
 */
export const SelectPrimitiveOption = forwardRef<HTMLLIElement, {
  value: any
  htmlAttributes?: Record<string, any>
  disabled?: boolean
  [key: string]: any
}>(({ value, htmlAttributes, ...props }, ref) => {
  const {
    activeIndex,
    selectedIndex,
    allowSelection,
    getItemProps,
    handleSelect,
  } = useContext(SelectPrimitiveContext)

  const [label, setLabel] = useState('')
  const innerRef = useRef<HTMLLIElement>(null)
  const pointerUpFlag = useRef(false)

  const { ref: listItemRef, index } = useListItem({
    label: { label, value } as any,
  })
  const mergedRef = useMergeRefs([listItemRef, ref, innerRef])

  useLayoutEffect(() => {
    if (innerRef.current)
      setLabel(innerRef.current.textContent ?? '')
  }, [])

  const isActive = !props.disabled && index === activeIndex

  return jsx('li', {
    ...defaultComponentAttribute,
    ...htmlAttributes,
    'aria-selected': index === selectedIndex,
    'role': 'option',
    'tabIndex': isActive ? 0 : -1,
    'data-fpl-selected': isActive || undefined,
    'aria-disabled': props.disabled,
    'ref': mergedRef,
    ...getItemProps({
      onKeyDown: (event: React.KeyboardEvent) => {
        if (event.key === ' ' || event.key === 'Enter') {
          if (!props.disabled)
            handleSelect(value, event)
          preventAndStopEvent(event)
        }
      },
      onClick: (event: React.MouseEvent) => {
        if (!props.disabled && allowSelection && !pointerUpFlag.current)
          handleSelect(value, event)
        preventAndStopEvent(event)
        pointerUpFlag.current = false
      },
      onPointerUp: (event: React.PointerEvent) => {
        if (event.button === 0 && !props.disabled && allowSelection) {
          pointerUpFlag.current = true
          handleSelect(value, event)
        }
        preventAndStopEvent(event)
      },
      onPointerLeave: () => {
        pointerUpFlag.current = false
      },
    }),
    'data-fpl-select-value': value,
    ...props,
  })
})
SelectPrimitiveOption.displayName = 'SelectPrimitive.Option'

/**
 * GroupLabel component for SelectPrimitive.
 * Original: $$x2
 */
export const SelectPrimitiveGroupLabel = forwardRef<HTMLLIElement, Record<string, any>>((props, ref) => {
  const id = useSelectionContext()
  return jsx('li', {
    id,
    ref,
    role: 'presentation',
    ...props,
  })
})
SelectPrimitiveGroupLabel.displayName = 'SelectPrimitive.GroupLabel'

/**
 * Group component for SelectPrimitive.
 * Original: $$S1
 */
export const SelectPrimitiveGroup = forwardRef<HTMLUListElement, {
  groupLabel: React.ReactNode
  children: React.ReactNode
  htmlAttributes?: Record<string, any>
  [key: string]: any
}>(({ groupLabel, children, htmlAttributes, ...props }, ref) => {
  const [labelId, Provider] = useSelectionProvider()
  return jsx(Provider, {
    value: labelId,
    children: jsxs('ul', {
      ...defaultComponentAttribute,
      ...htmlAttributes,
      ref,
      'aria-labelledby': labelId,
      'role': 'group',
      ...props,
      'children': [groupLabel, children],
    }),
  })
})
SelectPrimitiveGroup.displayName = 'SelectPrimitive.Group'

/**
 * Root component for SelectPrimitive.
 * Original: $$w4
 */
export function SelectPrimitiveRoot({
  value,
  onChange,
  recordingKey,
  onSelectionChange,
  onOpenChange,
  offsetAmount = 0,
  children,
  padding,
}: {
  value: any
  onChange: (value: any, info?: any) => void
  recordingKey?: string
  onSelectionChange?: (value?: any) => void
  onOpenChange?: (open: boolean) => void
  offsetAmount?: number
  children: React.ReactNode
  padding?: number
}) {
  const elementsRef = useRef<any[]>([])
  const overflowRef = useRef<any>(null)
  const scrollRef = useRef<any>(null)
  const labelsRef = useRef<any[]>([])
  const [allowSelection, setAllowSelection] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isTriggerFocused, setIsTriggerFocused] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [fallback, setFallback] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [innerOffset, setInnerOffset] = useState(0)

  const { fpl_select_position_fix } = loadFeatureFlags()
  const { onChange: recordingOnChange } = setupRecordingHandler({ onChange, recordingKey })

  const handleSelect = useCallback(
    (selectedValue: any, event: any) => {
      recordingOnChange(selectedValue, { info: { event } })
      setIsOpen(false)
    },
    [recordingOnChange],
  )

  const selectedIndex = useMemo(() => {
    if (!labelsRef.current)
      return null
    const idx = labelsRef.current.findIndex(item => item?.value === value)
    return idx !== -1 ? idx : null
  }, [JSON.stringify(labelsRef.current), value])

  useLayoutEffect(() => {
    if (isOpen && fpl_select_position_fix)
      setFallback(false)
  }, [isOpen, fpl_select_position_fix])

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setAllowSelection(true), 300)
      return () => clearTimeout(timer)
    }
    setInnerOffset(0)
    setAllowSelection(false)
    setFallback(false)
  }, [isOpen])

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-start',
    open: isOpen,
    onOpenChange: (open) => {
      setIsOpen(open)
      onOpenChange && onOpenChange(open)
    },
    whileElementsMounted: autoUpdate,
    transform: true,
    middleware: fallback
      ? [
          offset({ alignmentAxis: -1 * offsetAmount }),
          flip({ padding }),
          size({
            apply({ rects, availableWidth, availableHeight, elements }) {
              Object.assign(elements.floating.style, {
                minWidth: `${rects.reference.width + 2 * offsetAmount}px`,
                maxWidth: `${availableWidth}px`,
                maxHeight: `${availableHeight}px`,
                display: 'flex',
                flexDirection: 'column',
              })
            },
            padding,
          }),
        ]
      : [
          flip({ mainAxis: false, padding }),
          inner({
            listRef: elementsRef,
            overflowRef,
            scrollRef,
            index: selectedIndex ?? 0,
            offset: innerOffset,
            padding,
            referenceOverflowThreshold: 20,
            onFallbackChange: setFallback,
            minItemsVisible: 4,
          }),
          offset({ alignmentAxis: -1 * offsetAmount }),
          size({
            apply({ rects, availableWidth, elements }) {
              Object.assign(elements.floating.style, {
                minWidth: `${rects.reference.width + 2 * offsetAmount}px`,
                maxWidth: `${availableWidth}px`,
              })
            },
            padding,
          }),
        ],
  })

  const handleNavigate = useCallback(
    (idx: number | null) => {
      if (onSelectionChange && activeIndex !== idx) {
        if (idx === null)
          onSelectionChange()
        else onSelectionChange(labelsRef.current[idx].value)
      }
      setActiveIndex(idx)
    },
    [onSelectionChange, labelsRef, activeIndex],
  )

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    useClick(context, { event: 'mousedown' }),
    useDismiss(context),
    useInnerOffset(context, {
      enabled: !fallback,
      onChange: setInnerOffset,
      overflowRef,
      scrollRef,
    }),
    useListNavigation(context, {
      listRef: elementsRef,
      activeIndex,
      selectedIndex,
      focusItemOnOpen: true,
      scrollItemIntoView: { block: 'center', inline: 'center' },
      onNavigate: handleNavigate,
    }),
    useTypeahead(context, {
      listRef: labelsRef,
      activeIndex,
      onMatch: isOpen
        ? handleNavigate
        : (idx) => {
            if (idx !== null)
              handleSelect(labelsRef.current[idx].value, {})
          },
      findMatch: (list, search) => {
        const lower = search.toLocaleLowerCase()
        return list.find((item: any) => item.label.toLocaleLowerCase().startsWith(lower))
      },
    }),
  ])

  const id = useId()

  const contextValue = useMemo(
    () => ({
      getTriggerProps() {
        const props: any = getReferenceProps({
          'aria-controls': id,
          'aria-haspopup': 'listbox',
          'aria-expanded': isOpen,
          'role': 'combobox',
        })
        return {
          ...props,
          onFocus: (event: any) => {
            props.onFocus?.(event)
            setIsTriggerFocused(true)
          },
          onBlur: (event: any) => {
            props.onBlur?.(event)
            setIsTriggerFocused(false)
          },
        }
      },
      setTriggerReference: refs.setReference,
      getContainerProps: () => getFloatingProps({ id }),
      setContainerReference: refs.setFloating,
      getItemProps,
      setOpen: setIsOpen,
      overflowRef,
      scrollRef,
      setScrollTop,
      handleSelect,
      handleArrowScroll(amount: number) {
        if (fallback) {
          if (scrollRef.current) {
            scrollRef.current.scrollTop -= amount
            flushSync(() => setScrollTop(scrollRef.current.scrollTop ?? 0))
          }
        }
        else {
          flushSync(() => setInnerOffset(offset => offset - amount))
        }
      },
      floatingContext: context,
      floatingStyles,
      isOpen,
      isTriggerFocused,
      fallback,
      itemList: labelsRef.current,
      scrollTop,
      innerOffset,
      activeIndex,
      selectedIndex,
      allowSelection,
    }),
    [
      refs.setReference,
      refs.setFloating,
      getItemProps,
      handleSelect,
      context,
      floatingStyles,
      isOpen,
      isTriggerFocused,
      fallback,
      scrollTop,
      innerOffset,
      activeIndex,
      selectedIndex,
      allowSelection,
      getReferenceProps,
      id,
      getFloatingProps,
    ],
  )

  return jsx(SelectPrimitiveContext.Provider, {
    value: contextValue,
    children: jsx(FloatingList, {
      elementsRef,
      labelsRef,
      children,
    }),
  })
}
SelectPrimitiveRoot.displayName = 'SelectPrimitive.Root'

// Export refactored names
export const mc = SelectPrimitiveContainer
export const YJ = SelectPrimitiveGroup
export const WL = SelectPrimitiveGroupLabel
export const c$ = SelectPrimitiveOption
export const bL = SelectPrimitiveRoot
export const LJ = SelectPrimitiveScrollArrow
export const pk = SelectPrimitiveContext
export const l9 = SelectPrimitiveTrigger
export const WM = useSelectPrimitiveState
