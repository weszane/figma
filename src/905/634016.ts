import { useMergeRefs } from "@floating-ui/react"
import { createContext, forwardRef, useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react"
import { jsx } from "react/jsx-runtime"
import { ensureContext } from "../905/61417"
import { ScrollContainer } from "../905/143421"
import { mergeProps } from "../905/475481"
import { defaultComponentAttribute } from "../905/577641"
import { useExposedRef } from "../905/581092"
import { ButtonPrimitive } from "../905/632989"
import { PopoverPrimitiveContainer, usePopoverPrimitive } from "../905/691059"
import { setupRefUpdater } from "../905/823680"
import { preventAndStopEvent } from "../905/955878"
import { useRecording } from "../905/959312"

// Constants
const ROLE_OPTION_SELECTOR = "[role=option]"
const FRAME_RATE_DELAY = Math.floor(1000 / 60)

// Context
const ComboboxListContext = createContext<ComboboxListContextValue | null>(null)

// Types
interface ComboboxListContextValue {
  activeValue: any
  expanded: boolean
  id: string
  inputMode: "pointer" | "keyboard"
  setActiveValue: (value: any) => void
  onExpand: (expanded: boolean) => void
  onPointerLeave: () => void
  onSelect: (value: any, options: { event: Event }) => void
  refs: { input: React.RefObject<HTMLElement>, scroll: React.RefObject<HTMLElement> }
  selected: any[]
  registerOption: (element: HTMLElement | null, value: any) => () => void
}


interface ListProps {
  activeValue: any
  children: React.ReactNode
  className?: string
  expanded: boolean
  htmlAttributes?: React.HTMLAttributes<HTMLDivElement>
  id: string
  inputMode: "pointer" | "keyboard"
  onExpand: (expanded: boolean) => void
  onPointerLeave: () => void
  onSelect: (value: any, options: { event: Event }) => void
  refs: { input: React.RefObject<HTMLElement>, scroll: React.RefObject<HTMLElement> }
  registerOption: (element: HTMLElement | null, value: any) => () => void
  selected: any[]
  setActiveValue: (value: any) => void
  style?: React.CSSProperties
}

interface OptionProps {
  value: any
  children: React.ReactNode
  disabled?: boolean
  htmlAttributes?: React.HTMLAttributes<HTMLDivElement>
  id?: string
  recordingKey?: string
}

interface GroupProps {
  children: React.ReactNode
  htmlAttributes?: React.HTMLAttributes<HTMLDivElement>
}

interface TriggerProps {
  htmlAttributes?: React.HTMLAttributes<HTMLButtonElement>
  [key: string]: any
}

interface UseComboboxOptions {
  activeValue?: any
  arrowKeyBehavior?: "absolute" | "viewport"
  selected?: any[]
  expandOnFocus?: boolean
  onSelect?: (value: any, options: { event: Event }) => void
  onActiveValueChange?: (value: any) => void
  popupId?: string
  recordingKey?: string
  expanded?: boolean
  onExpand?: (expanded: boolean) => void
}

interface UseComboboxReturn {
  activeValue: any
  config: UseComboboxOptions
  getDialogProps: (props?: any) => any
  getInputProps: (props?: any) => any
  getListProps: (props?: any) => any
  getTriggerProps: (props?: any) => any
  nextItem: (event?: KeyboardEvent) => void
  prevItem: (event?: KeyboardEvent) => void
  refs: {
    input: React.RefObject<HTMLElement>
    scroll: (element: HTMLElement | null) => void
  }
  registerOption: (element: HTMLElement | null, value: any) => () => void
  selected: any[]
  setActiveValue: (value: any) => void
}

// Utility functions
function generatePopupId({ uuid }: { uuid: string }): string {
  return `fpl-${uuid}-popup`
}

function generateListboxId({ uuid }: { uuid: string }): string {
  return `fpl-${uuid}-listbox`
}

function generateOptionId({ uuid, localId }: { uuid: string, localId: string }): string {
  return `fpl-${uuid}-option-${localId}`
}

function getFirstOption(map: WeakMap<Element, any>, container: Element | null): any {
  if (!container)
    return
  container.scrollTo({ top: 0 })
  const option = container.querySelector(ROLE_OPTION_SELECTOR)
  return option ? map.get(option) : undefined
}

function getLastOption(map: WeakMap<Element, any>, container: Element | null): any {
  if (!container)
    return
  container.scrollTo({ top: container.scrollHeight })
  const options = container.querySelectorAll(ROLE_OPTION_SELECTOR)
  return map.get(options[options.length - 1]) ?? undefined
}

function getVisibleOption(map: WeakMap<Element, any>, container: Element | null): any {
  if (!container)
    return
  const { scrollTop } = container
  for (const option of Array.from(container.querySelectorAll(ROLE_OPTION_SELECTOR) as unknown as HTMLElement[])) {
    if (option.offsetTop + option.offsetHeight >= scrollTop) {
      return map.get(option)
    }
  }
}

// Components
/**
 * PopupList component for ComboboxPrimitive
 */
export function PopupList({
  anchorEl,
  offset = 8,
  placement = "bottom-start",
  expanded,
  onExpand,
  id,
  refs,
  ...rest
}) {
  const popupId = generatePopupId({ uuid: id })
  const { getContainerProps, getTriggerProps } = usePopoverPrimitive({
    isOpen: expanded,
    offset,
    onOpenChange: onExpand,
    placement,
    nodeId: popupId,
    type: "dialog",
  })

  useLayoutEffect(() => {
    if (expanded && refs?.input.current) {
      refs.input.current.focus()
    }
  }, [expanded, refs?.input])

  useLayoutEffect(() => {
    if (anchorEl?.current) {
      const props = getTriggerProps() as any
      props.ref(anchorEl.current)
    }
  }, [expanded, anchorEl, getTriggerProps])

  return jsx(PopoverPrimitiveContainer, {
    ...getContainerProps(),
    children: jsx(List, { expanded, onExpand, id, refs, ...rest }),
  })
}
PopupList.displayName = "ComboboxPrimitive.PopupList"

/**
 * List component for ComboboxPrimitive
 */
const List = forwardRef<HTMLDivElement, ListProps>(({
  activeValue,
  children,
  className,
  expanded,
  htmlAttributes,
  id,
  inputMode,
  onExpand,
  onPointerLeave,
  onSelect,
  refs,
  registerOption,
  selected,
  setActiveValue,
  style,
  ...rest
}, ref) => {
  const contextValue = useMemo(() => ({
    activeValue,
    expanded,
    id,
    inputMode,
    setActiveValue,
    onExpand,
    onPointerLeave,
    onSelect,
    refs,
    selected,
    registerOption,
  }), [activeValue, expanded, id, inputMode, setActiveValue, onExpand, onPointerLeave, onSelect, refs, selected, registerOption])

  return jsx(ComboboxListContext.Provider, {
    value: contextValue,
    children: jsx(ScrollContainer, {
      ...htmlAttributes,
      ...rest,
      role: "listbox",
      id: generateListboxId({ uuid: id }),
      theme: { root: className, rootStyle: style },
      ref: setupRefUpdater(ref, refs.scroll),
      onPointerLeave,
      children,
    }),
  })
})
List.displayName = "ComboboxPrimitive.List"

/**
 * Option component for ComboboxPrimitive
 */
const Option = forwardRef<HTMLDivElement, OptionProps>(({
  value,
  children,
  disabled,
  htmlAttributes,
  id,
  recordingKey,
  ...rest
}, ref) => {
  const exposedRef = useExposedRef(ref)
  const {
    activeValue,
    inputMode,
    id: contextId,
    refs,
    selected,
    onSelect,
    setActiveValue,
    registerOption,
  } = ensureContext(ComboboxListContext, "ComboboxPrimitiveListContext", "ComboboxPrimitive.List")

  const handlePointerDown = useRecording((event) => {
    if (disabled) {
      htmlAttributes?.onPointerDown?.(event)
      return
    }
    event.preventDefault()
    onSelect?.(value, { event })
    refs.input.current?.focus()
    htmlAttributes?.onPointerDown?.(event)
  }, { eventName: "pointerdown", recordingKey }, [onSelect, disabled, value])

  const debouncedPointerMove = useDebounce((event) => {
    if (disabled) {
      htmlAttributes?.onPointerMove?.(event)
      return
    }
    if (activeValue !== value && inputMode === "pointer") {
      setActiveValue(value)
    }
    refs.input.current?.focus()
    htmlAttributes?.onPointerMove?.(event)
  }, FRAME_RATE_DELAY, [activeValue, disabled, inputMode, setActiveValue, value])

  const isSelected = selected?.includes(value) || undefined

  useEffect(() => registerOption(exposedRef.current, value), [value, registerOption, exposedRef])

  const optionId = useId()
  let finalId = id
  if (!finalId) {
    finalId = typeof value === "string" ? generateOptionId({ uuid: contextId, localId: value }) : optionId
  }

  return jsx("div", {
    ...defaultComponentAttribute,
    ...htmlAttributes,
    ...rest,
    "id": finalId,
    "ref": exposedRef,
    "role": "option",
    "aria-selected": isSelected,
    "aria-disabled": disabled,
    "onPointerDown": handlePointerDown,
    "onPointerMove": debouncedPointerMove,
    "data-activedescendant": activeValue === value || undefined,
    children,
  })
})
Option.displayName = "ComboboxPrimitive.Option"

/**
 * Group component for ComboboxPrimitive
 */
const Group = forwardRef<HTMLDivElement, GroupProps>(({
  children,
  htmlAttributes,
  ...rest
}, ref) => jsx("div", {
  ...defaultComponentAttribute,
  ...htmlAttributes,
  ...rest,
  role: "group",
  ref,
  children,
}))
Group.displayName = "ComboboxPrimitive.Group"

/**
 * Trigger component for ComboboxPrimitive
 */
const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(({
  htmlAttributes,
  ...rest
}, ref) => jsx(ButtonPrimitive, {
  ...rest,
  htmlAttributes: { tabIndex: -1, ...htmlAttributes },
  ref,
}))
Trigger.displayName = "ComboboxPrimitive.Trigger"

// Hook
/**
 * useCombobox hook for managing combobox state and behavior
 */
function useCombobox(options: UseComboboxOptions): UseComboboxReturn {
  const generatedId = useId()
  const config = { ...defaultConfig, ...options }
  const {
    arrowKeyBehavior,
    expandOnFocus,
    selected,
    onSelect,
    onActiveValueChange,
    popupId = generatedId,
    recordingKey,
  } = config

  const inputRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLElement>(null)
  const [inputElementRef, setInputElementRef] = useState<any | null>(null)
  const mergedInputRef = useMergeRefs([inputRef, inputElementRef])
  const [inputMode, setInputMode] = useState<"pointer" | "keyboard">("pointer")
  const elementToValueMap = useRef(new WeakMap<Element, any>())
  const valueToElementMap = useRef(new Map<any, WeakRef<Element>>())
  const registerOption = useCallback((element: HTMLElement | null, value: any) => {
    if (element) {
      elementToValueMap.current.set(element, value)
      valueToElementMap.current.set(value, new WeakRef(element))
    }
    return () => {
      if (element) {
        elementToValueMap.current.delete(element)
        valueToElementMap.current.delete(value)
      }
    }
  }, [])

  const [internalExpanded, setInternalExpanded] = useState(config.expanded ?? false)
  const expanded = config.onExpand && typeof config.expanded === "boolean" ? config.expanded : internalExpanded
  const setExpanded = useCallback((value: boolean) => {
    config.onExpand?.(value)
    setInternalExpanded(value)
  }, [config.onExpand])

  const [internalActiveValue, setInternalActiveValue] = useState<any>(undefined)
  const activeValue = config.activeValue || internalActiveValue
  const setActiveValue = useCallback((value: any) => {
    setInputMode("pointer")
    onActiveValueChange?.(value)
    setInternalActiveValue(value)
  }, [onActiveValueChange])

  const nextItem = useCallback((event?: KeyboardEvent) => {
    if (!scrollRef.current)
      return
    if (activeValue) {
      const options = scrollRef.current.querySelectorAll(ROLE_OPTION_SELECTOR) || []
      let found = false
      for (let i = 0; i < options.length; i++) {
        const option = options[i]
        const value = elementToValueMap.current.get(option)
        if (value === activeValue) {
          if (i === options.length - 1) {
            if (event?.repeat)
              return
            setActiveValue(getFirstOption(elementToValueMap.current, scrollRef.current))
            return
          }
          found = true
          continue
        }
        if (found) {
          option.scrollIntoView({ block: "nearest" })
          setActiveValue(value)
          return
        }
      }
    }
    else if (arrowKeyBehavior === "viewport") {
      const value = getVisibleOption(elementToValueMap.current, scrollRef.current)
      if (value) {
        setActiveValue(value)
        return
      }
    }
    setActiveValue(getFirstOption(elementToValueMap.current, scrollRef.current))
  }, [activeValue, arrowKeyBehavior, setActiveValue])

  const prevItem = useCallback((event?: KeyboardEvent) => {
    if (!scrollRef.current)
      return
    if (activeValue) {
      const options = scrollRef.current.querySelectorAll(ROLE_OPTION_SELECTOR) || []
      let found = false
      for (let i = options.length - 1; i >= 0; i--) {
        const option = options[i]
        const value = elementToValueMap.current.get(option)
        if (value === activeValue) {
          if (i === 0) {
            if (event?.repeat)
              return
            setActiveValue(getLastOption(elementToValueMap.current, scrollRef.current))
            return
          }
          found = true
          continue
        }
        if (found) {
          option.scrollIntoView({ block: "nearest" })
          setActiveValue(value)
          return
        }
      }
    }
    else if (arrowKeyBehavior === "viewport") {
      const value = getVisibleOption(elementToValueMap.current, scrollRef.current)
      if (value) {
        setActiveValue(value)
        return
      }
    }
    const value = getLastOption(elementToValueMap.current, scrollRef.current)
    if (value)
      setActiveValue(value)
  }, [activeValue, arrowKeyBehavior, setActiveValue])

  const handleFocus = useCallback(() => {
    if (expandOnFocus !== false) {
      setActiveValue(getFirstOption(elementToValueMap.current, scrollRef.current))
      setExpanded(true)
    }
  }, [expandOnFocus, setExpanded, setActiveValue])

  useEffect(() => {
    if (expanded && !activeValue) {
      setActiveValue(arrowKeyBehavior === "viewport" ? getVisibleOption(elementToValueMap.current, scrollRef.current) : getFirstOption(elementToValueMap.current, scrollRef.current))
    }
  }, [activeValue, arrowKeyBehavior, expanded, setActiveValue])

  const handleBlur = useCallback(() => {
    if (expandOnFocus !== false) {
      setExpanded(false)
    }
  }, [expandOnFocus, setExpanded])

  const handleKeyDown = useRecording((event) => {
    if (!expanded && event.key === "ArrowDown" && event.altKey) {
      setActiveValue(getFirstOption(elementToValueMap.current, scrollRef.current))
      setExpanded(true)
      preventAndStopEvent(event)
      return
    }
    if (expanded && !event.altKey && !event.ctrlKey && !event.shiftKey && !event.metaKey) {
      switch (event.key) {
        case "Home":
          scrollRef.current?.scroll({ top: 0 })
          setActiveValue(getFirstOption(elementToValueMap.current, scrollRef.current))
          preventAndStopEvent(event)
          setInputMode("keyboard")
          break
        case "End":
          scrollRef.current?.scroll({ top: scrollRef.current.offsetHeight })
          setActiveValue(getLastOption(elementToValueMap.current, scrollRef.current))
          preventAndStopEvent(event)
          setInputMode("keyboard")
          break
        case "ArrowDown":
          nextItem(event)
          preventAndStopEvent(event)
          setInputMode("keyboard")
          break
        case "ArrowUp":
          prevItem(event)
          preventAndStopEvent(event)
          setInputMode("keyboard")
          break
      }
    }
  }, { eventName: "keydown", recordingKey }, [expanded, setExpanded, nextItem, prevItem, setActiveValue])

  const handleKeyUp = useCallback((event) => {
    if (event.key === "Enter" && onSelect && activeValue) {
      onSelect(activeValue, { event })
      preventAndStopEvent(event)
    }
  }, [activeValue, onSelect])

  const getInputProps = useCallback((props?: any) => {
    if (props?.ref && props.ref !== inputElementRef) {
      setInputElementRef(props.ref)
    }
      return mergeProps(props ?? {}, {
      ...props?.htmlAttributes,
      "ref": mergedInputRef,
      "role": "combobox",
      "aria-expanded": expanded,
      "aria-controls": generateListboxId({ uuid: popupId }),
      "aria-activedescendant": activeValue ? valueToElementMap.current.get(activeValue)?.deref()?.id : undefined,
      "aria-autocomplete": "list",
      "aria-haspopup": "listbox",
      "onFocus": handleFocus,
      "onBlur": handleBlur,
      "onKeyDown": handleKeyDown,
      "onKeyUp": handleKeyUp,
    })
  }, [activeValue, expanded, mergedInputRef, handleBlur, handleFocus, handleKeyDown, handleKeyUp, popupId, inputElementRef])

  const handlePointerLeave = useCallback(() => {
    setInputMode("pointer")
  }, [])

  const getListProps = useCallback((props?: any) => mergeProps(props ?? {}, {
    ...props?.htmlAttributes,
    registerOption,
    activeValue,
    id: popupId,
    inputMode,
    setActiveValue,
    expanded,
    onExpand: setExpanded,
    onPointerLeave: handlePointerLeave,
    onSelect,
    refs: { input: inputRef, scroll: scrollRef },
    selected: selected ?? [],
  }), [activeValue, expanded, inputMode, setExpanded, handlePointerLeave, onSelect, popupId, registerOption, selected, setActiveValue])

  const handleTriggerClick = useCallback((event) => {
    setExpanded(!expanded)
    preventAndStopEvent(event)
  }, [expanded, setExpanded])

  const getTriggerProps = useCallback((props?: any) => mergeProps(props ?? {}, {
    "onClick": handleTriggerClick,
    "aria-controls": generateListboxId({ uuid: popupId }),
    "aria-expanded": expanded,
    "aria-haspopup": "listbox",
  }), [expanded, popupId, handleTriggerClick])

  const handleClose = useCallback(() => {
    setExpanded(false)
  }, [setExpanded])

  const getDialogProps = useCallback((props?: any) => mergeProps(props ?? {}, {
    onClose: handleClose,
  }), [handleClose])

  return useMemo(() => ({
    activeValue,
    config: Object.freeze(config),
    getDialogProps,
    getInputProps,
    getListProps,
    getTriggerProps,
    nextItem,
    prevItem,
    refs: {
      input: inputRef,
      scroll: (element: HTMLElement | null) => { scrollRef.current = element },
    },
    registerOption,
    selected: selected ?? [],
    setActiveValue,
  }), [activeValue, config, getDialogProps, getInputProps, getListProps, getTriggerProps, nextItem, prevItem, registerOption, selected, setActiveValue])
}

// Custom hook for debouncing
function useDebounce<T extends (...args: any[]) => any>(func: T, delay: number, deps: React.DependencyList): T {
  const ref = useRef<NodeJS.Timeout | number | null>(null)
  return useCallback((...args: Parameters<T>) => {
    if (ref.current)
      clearTimeout(ref.current)
    ref.current = setTimeout(() => func(...args), delay)
    return () => {
      if (ref.current)
        clearTimeout(ref.current)
    }
  }, deps) as T
}

// Default config
const defaultConfig: Required<Pick<UseComboboxOptions, "activeValue" | "arrowKeyBehavior" | "selected">> = {
  activeValue: undefined,
  arrowKeyBehavior: "absolute",
  selected: undefined,
}

// Exports
export const ComboboxPrimitive = {
  Group,
  List,
  Option,
  PopupList,
  Trigger,
  useCombobox,
}
export const F = ComboboxPrimitive
