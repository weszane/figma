import { useLayoutEffect, useState } from "react"
// Original file: /Users/allen/github/fig/src/figma_app/708845.ts

interface Size {
  width: number
  height: number
}

/** Original name: $$i0 */
export const initialSize: Size = {
  width: 0,
  height: 0,
}

/**
 * Hook to observe resize of a React ref element.
 * @param ref - The React ref to the element to observe.
 * @param callback - Optional callback invoked with the new size.
 * @returns The current size of the element, or null if not observed.
 * Original name: $$a1
 */
export function useResizeObserverRef(
  ref: React.RefObject<HTMLElement>,
  callback?: (size: Size) => void,
): Size | null {
  const [size, setSize] = useState<Size | null>(null)

  useLayoutEffect(() => {
    if (!ref || !ref.current)
      return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (ref.current !== entry.target)
          continue

        const newWidth = entry.contentRect.width
        const newHeight = entry.contentRect.height

        if (size && size.width === newWidth && size.height === newHeight)
          continue

        const newSize: Size = {
          width: newWidth,
          height: newHeight,
        }

        setSize(newSize)
        callback?.(newSize)
      }
    })

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref, callback, size])

  return size
}

/**
 * Hook to observe resize of an HTMLElement directly.
 * @param element - The HTMLElement to observe.
 * @param callback - Optional callback invoked with the new size.
 * @returns The current size of the element, or null if not observed.
 * Original name: $$s2
 */
export function useResizeObserverElement(
  element: HTMLElement | null,
  callback?: (size: Size) => void,
): Size | null {
  const [size, setSize] = useState<Size | null>(null)

  useLayoutEffect(() => {
    if (!element)
      return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (element !== entry.target)
          continue

        const newWidth = entry.contentRect.width
        const newHeight = entry.contentRect.height

        if (size && size.width === newWidth && size.height === newHeight)
          continue

        const newSize: Size = {
          width: newWidth,
          height: newHeight,
        }

        setSize(newSize)
        callback?.(newSize)
      }
    })

    observer.observe(element)

    return () => observer.disconnect()
  }, [element, callback, size])

  return size
}

// Refactored exports to match new names
export const cU = initialSize
export const wY = useResizeObserverRef
export const Wx = useResizeObserverElement
