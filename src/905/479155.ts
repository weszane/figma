import type { ReactNode, RefObject } from 'react'
import { noop } from 'lodash-es'
import { createContext, createRef, useCallback, useContext, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { jsx } from 'react/jsx-runtime'
import { useDropdownState } from '../905/848862'
import { generateUUIDv4 } from '../905/871474'

interface ItemRegistryEntry {
  index: number
  ref: RefObject<any>
}

interface LayoutItem {
  id: string
  ref: RefObject<any>
  primary?: boolean
}

interface LayoutContextValue {
  tracker: LayoutTracker
  renderId: number
  setRenderId: (id: number) => void
}

interface ListLayoutContextValue {
  trackerRef: RefObject<ItemRegistry>
  layoutIndex: number
  primary?: boolean
}

interface GridLayoutContextValue {
  trackerRef: RefObject<ItemRegistry>
  layoutIndex: number
  columns: number
  primary?: boolean
}

interface LayoutProviderProps {
  children: ReactNode
}

/**
 * Registry for managing items with indices and references
 */
class ItemRegistry {
  listLength = 0
  map = new Map<string, ItemRegistryEntry>()

  reset() {
    this.listLength = 0
    this.map = new Map()
  }

  register(id: string, ref: RefObject<any>, increment?: number) {
    if (!this.map.has(id)) {
      if (increment !== undefined) {
        this.listLength += increment
      }
      else {
        this.listLength++
      }
      const index = this.listLength - 1
      this.map.set(id, {
        index,
        ref,
      })
      return index
    }
    return this.map.get(id)?.index ?? -1
  }

  unregister(id: string) {
    this.map.delete(id)
    this.listLength--
  }

  getRef(index: number) {
    for (const [, { index: itemIndex, ref }] of this.map.entries()) {
      if (itemIndex === index)
        return ref
    }
    return null
  }
}

/**
 * Tracker for managing layout items with DOM position sorting
 */
export class LayoutTracker {
  items: LayoutItem[] = []
  listeners = new Map<string, () => void>()

  register(item: LayoutItem, onChange: () => void = noop) {
    if (item.ref.current === null || this.items.findIndex(existingItem => existingItem.id === item.id) > -1) {
      return
    }

    this.items = [...this.items, item]
      .sort((itemA, itemB) => {
        if (!itemA.ref.current || !itemB.ref.current)
          return 0

        const elementA = itemA.ref.current
        const comparison = itemB.ref.current.compareDocumentPosition(elementA)
        return (comparison & Node.DOCUMENT_POSITION_PRECEDING) ? -1 : 1
      })
      .filter(item => item.ref.current !== null)

    this.listeners.set(item.id, onChange)
    this.notifyItemsChanged()
  }

  unregister(id: string) {
    this.items = this.items.filter(item => item.id !== id)
    this.listeners.delete(id)
    this.notifyItemsChanged()
  }

  getRef(index: number) {
    return this.items[index]?.ref ?? null
  }

  getIndex(id: string) {
    return this.items.findIndex(item => item.id === id)
  }

  reset() {
    this.items = []
  }

  findFirstIndexWith(predicate: (item: LayoutItem) => boolean) {
    return this.items.findIndex(predicate)
  }

  notifyItemsChanged() {
    for (const listener of this.listeners.values()) {
      listener()
    }
  }
}

export const LayoutContext = createContext<LayoutContextValue>({
  tracker: new LayoutTracker(),
  renderId: 0,
  setRenderId: noop,
})

export const ListLayoutContext = createContext<ListLayoutContextValue>({
  trackerRef: createRef<ItemRegistry>(),
  layoutIndex: -1,
})

export const GridLayoutContext = createContext<GridLayoutContextValue>({
  trackerRef: createRef<ItemRegistry>(),
  layoutIndex: -1,
  columns: 1,
})

/**
 * Hook to focus element when dropdown is not shown
 */
export function useFocusWhenDropdownClosed(elementRef: RefObject<HTMLElement>) {
  const { renderId } = useContext(LayoutContext)
  const dropdownState = useDropdownState()

  useEffect(() => {
    if (!dropdownState) {
      elementRef.current?.focus()
    }
  }, [renderId, dropdownState, elementRef])
}

/**
 * Hook to trigger layout re-render
 */
export function useLayoutRerender() {
  const { renderId, setRenderId } = useContext(LayoutContext)

  return useCallback(() => {
    setRenderId(renderId + 1)
  }, [renderId, setRenderId])
}

/**
 * Hook for managing layout registration and primary layout detection
 */
export function useLayoutRegistration(elementRef: RefObject<HTMLElement>, isPrimary: boolean) {
  const itemRegistry = useRef(new ItemRegistry())
  const { tracker } = useContext(LayoutContext)
  const id = useId()
  const [index, setIndex] = useState(-1)

  useEffect(() => {
    const unregister = () => {
      tracker.unregister(id)
    }

    tracker.register({
      id,
      ref: elementRef,
      primary: isPrimary,
    }, () => setIndex(tracker.getIndex(id)))

    return unregister
  }, [id, isPrimary, elementRef, tracker])

  const primaryLayoutIndex = tracker.findFirstIndexWith(item => !!item.primary)

  return {
    tracker: itemRegistry,
    index,
    isPrimaryLayout: primaryLayoutIndex < 0 ? undefined : primaryLayoutIndex === index,
  }
}

const LayoutIdContext = createContext<string>({} as string)

/**
 * Provider component for layout management with unique ID generation
 */
export function LayoutProvider({ children }: LayoutProviderProps) {
  const listContext = useContext(ListLayoutContext)
  const gridContext = useContext(GridLayoutContext)

  listContext.trackerRef.current?.reset()
  gridContext.trackerRef.current?.reset()

  const layoutId = generateUUIDv4()

  return jsx(LayoutIdContext.Provider, {
    value: layoutId,
    children,
  })
}

/**
 * Hook for list item registration
 */
export function useListItemRegistration(elementRef: RefObject<HTMLElement>) {
  const listContext = useContext(ListLayoutContext)
  const layoutId = useContext(LayoutIdContext)
  const id = useId()
  const [itemIndex, setItemIndex] = useState(-1)
  const layoutIndex = ensureNonNegative(listContext.layoutIndex)

  useLayoutEffect(() => {
    if (listContext.trackerRef?.current) {
      setItemIndex(listContext.trackerRef.current.register(id, elementRef))
    }
  }, [listContext.trackerRef, id, elementRef, layoutId])

  return {
    itemIndex: ensureNonNegative(itemIndex),
    layoutIndex,
    inPrimaryLayout: listContext.primary,
  }
}

/**
 * Hook for grid item registration with row and column calculations
 */
export function useGridItemRegistration(elementRef: RefObject<HTMLElement>, isRowSpanning: boolean = false) {
  const gridContext = useContext(GridLayoutContext)
  const layoutId = useContext(LayoutIdContext)
  const id = useId()
  const [itemIndex, setItemIndex] = useState(-1)
  const layoutIndex = ensureNonNegative(gridContext.layoutIndex)
  const columnIndex = ensureNonNegative(isRowSpanning ? 0 : itemIndex % gridContext.columns)
  const rowIndex = ensureNonNegative(Math.floor(itemIndex / gridContext.columns))

  useLayoutEffect(() => {
    if (gridContext.trackerRef?.current) {
      setItemIndex(gridContext.trackerRef.current.register(
        id,
        elementRef,
        isRowSpanning ? gridContext.columns : undefined,
      ))
    }
  }, [gridContext.trackerRef, id, elementRef, layoutId, gridContext.columns, isRowSpanning])

  return {
    rowIndex,
    itemIndex: ensureNonNegative(itemIndex),
    layoutIndex,
    columnIndex,
    inPrimaryLayout: gridContext.primary,
  }
}

/**
 * Ensures a number is non-negative, converting negative values to 0
 */
function ensureNonNegative(value: number): number {
  return value < 0 ? 0 : value
}

// Legacy exports for backward compatibility
export const AD = LayoutProvider
export const AM = GridLayoutContext
export const L0 = useLayoutRegistration
export const MQ = ListLayoutContext
export const R$ = useLayoutRerender
export const Uz = LayoutContext
export const Yf = LayoutTracker
export const bE = useFocusWhenDropdownClosed
export const tm = useListItemRegistration
export const zp = useGridItemRegistration
