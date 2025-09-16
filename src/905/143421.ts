import classNames from 'classnames'
import { forwardRef, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { jsx, jsxs } from 'react/jsx-runtime'
import { setupDragHandler } from '../905/97346'
import { defaultComponentAttribute } from '../905/577641'
import { useExposedRef } from '../905/581092'
import { identity, toPercent, toPixels } from '../905/893109'

/**
 * CSS class names for ScrollContainer (original: n)
 */
export const scrollContainerClasses = {
  both: 'scroll-container__both__D9TzF',
  content: 'scroll-container__content__OKxPs',
  dragging: 'scroll-container__dragging__NUd6f',
  fill: 'scroll-container__fill__qOryJ',
  noScroll: 'scroll-container__noScroll__6yNJu',
  pinBottom: 'scroll-container__pinBottom__RQoSX',
  pinBottomAnchor: 'scroll-container__pinBottomAnchor__kxzWs',
  root: 'scroll-container__root__2RmsE',
  scroll: 'scroll-container__scroll__8Q3Cb',
  scrollBar: 'scroll-container__scrollBar__5Nut9',
  scrollBars: 'scroll-container__scrollBars__qxWAs',
  scrolling: 'scroll-container__scrolling__XpT9A',
  specificityHack: 'scroll-container__specificity-hack__vgVtm',
  x: 'scroll-container__x__3bIVO',
  y: 'scroll-container__y__WrBOK',
}

/**
 * Determines scroll position (original: p)
 * @param pos Current scroll position
 * @param max Maximum scrollable size
 * @param view Viewport size
 * @returns 'none' | 'start' | 'end' | 'middle'
 */
function getScrollPosition(pos: number, max: number, view: number): 'none' | 'start' | 'end' | 'middle' {
  if (max <= view)
    return 'none'
  if (pos <= 0)
    return 'start'
  if (pos >= max - view)
    return 'end'
  return 'middle'
}

/**
 * Calculates scrollbar size (original: m)
 * @param total Total scrollable size
 * @param view Viewport size
 * @param offset Offset for both scrollbars
 * @returns Scrollbar size in pixels
 */
function getScrollBarSize(total: number, view: number, offset: number): number {
  if (total <= view)
    return 0
  return Math.max(24, view / total * (view - offset))
}

/**
 * Calculates scroll percent and position for drag (original: h)
 * @returns [scrollPercent, scrollPosition]
 */
function getDragScroll(
  both: boolean,
  pointer: number,
  containerStart: number,
  containerSize: number,
  scrollSize: number,
  scrollPos: number,
  viewSize: number,
  barSize: number,
): [number, number | null] {
  const ratio = containerSize / viewSize
  const dragArea = viewSize - barSize - (both ? 11 : 0)
  const scrollRange = scrollSize - viewSize
  const pointerOffset = pointer - containerStart
  const dragOffset = dragArea * ratio * (scrollPos / scrollRange)
  let scrollPosition: number | null = null
  if (pointerOffset < dragOffset || pointerOffset > dragOffset + barSize * ratio) {
    scrollPosition = (pointerOffset - barSize * ratio / 2) / ratio / dragArea * scrollRange
  }
  return [((scrollPosition ?? scrollPos) / scrollRange), scrollPosition]
}

// Exported CSS class names (original: var declarations)
export const SCROLL_CONTAINER_ROOT = scrollContainerClasses.root
export const SCROLL_CONTAINER_SCROLL = scrollContainerClasses.scroll
export const SCROLL_CONTAINER_X = scrollContainerClasses.x
export const SCROLL_CONTAINER_Y = scrollContainerClasses.y
export const SCROLL_CONTAINER_BOTH = scrollContainerClasses.both
export const SCROLL_CONTAINER_NO_SCROLL = scrollContainerClasses.noScroll
export const SCROLL_CONTAINER_FILL = scrollContainerClasses.fill
export const SCROLL_CONTAINER_CONTENT = scrollContainerClasses.content
export const SCROLL_CONTAINER_SCROLL_BARS = scrollContainerClasses.scrollBars
export const SCROLL_CONTAINER_SCROLL_BAR = scrollContainerClasses.scrollBar
export const SCROLL_CONTAINER_DRAGGING = scrollContainerClasses.dragging
export const SCROLL_CONTAINER_SPECIFICITY_HACK = scrollContainerClasses.specificityHack
export const SCROLL_CONTAINER_SCROLLING = scrollContainerClasses.scrolling
export const SCROLL_CONTAINER_PIN_BOTTOM = scrollContainerClasses.pinBottom
export const SCROLL_CONTAINER_PIN_BOTTOM_ANCHOR = scrollContainerClasses.pinBottomAnchor

/**
 * ScrollContainer component (original: $$R0)
 */
/**
 * Props for ScrollContainer (original: $$R0)
 */
export interface ScrollContainerProps {
  children: React.ReactNode
  theme?: {
    root?: string
    rootStyle?: React.CSSProperties
    scroll?: string
    scrollStyle?: React.CSSProperties
    content?: string
    contentStyle?: React.CSSProperties
  }
  scroll?: 'x' | 'y' | 'both'
  fill?: boolean
  defaultScrollTop?: number
  defaultScrollLeft?: number
  overscroll?: boolean
  pinBottom?: boolean
  onScroll?: (e: React.UIEvent<HTMLDivElement>) => void
  [key: string]: any // For additional props
}

/**
 * ScrollContainer component (original: $$R0)
 * @param props ScrollContainerProps
 * @param ref React ref
 */
export const ScrollContainer = forwardRef<HTMLDivElement, ScrollContainerProps>(({
  children,
  theme = {},
  scroll = 'y',
  fill = false,
  defaultScrollTop,
  defaultScrollLeft,
  overscroll,
  pinBottom,
  onScroll,
  ...rest
}, ref) => {
  const exposedRef = useExposedRef(ref)
  const contentRef = useRef<HTMLDivElement>(null)
  const isHorizontal = scroll === 'x' || scroll === 'both'
  const isVertical = scroll === 'y' || scroll === 'both'
  const lastScrollTop = useRef<number>(0)
  const scrollFlags = useRef<number>(0)
  const rafId = useRef<number | null>(null)
  const dragStartPercent = useRef<number>(0)
  const [overscrollHeight, setOverscrollHeight] = useState<number>(0)
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  const [scrollBarWidth, setScrollBarWidth] = useState<number>(isHorizontal ? 1 : 0)
  const [scrollBarHeight, setScrollBarHeight] = useState<number>(isVertical ? 1 : 0)
  const [scrollBarLeft, setScrollBarLeft] = useState<number>(0)
  const [scrollBarTop, setScrollBarTop] = useState<number>(0)
  const [scrollXPos, setScrollXPos] = useState<'none' | 'start' | 'end' | 'middle'>('none')
  const [scrollYPos, setScrollYPos] = useState<'none' | 'start' | 'end' | 'middle'>('none')
  const hasBothScroll = scroll === 'both' && !!scrollBarHeight && !!scrollBarWidth
  const isNoScroll = (!isHorizontal || !scrollBarWidth) && (!isVertical || !scrollBarHeight)
  // Set initial scroll positions
  useLayoutEffect(() => {
    const el = exposedRef.current
    if (!el)
      return
    if (defaultScrollTop != null)
      el.scrollTop = defaultScrollTop
    if (defaultScrollLeft != null)
      el.scrollLeft = defaultScrollLeft
    lastScrollTop.current = el.scrollTop
  }, [])

  /**
   * Updates scrollbar sizes and positions (original: ea)
   */
  const updateScrollBars = useCallback(() => {
    const el = exposedRef.current
    if (!el)
      return
    const verticalPos = isVertical ? getScrollPosition(el.scrollTop, el.scrollHeight, el.clientHeight) : 'none'
    const horizontalPos = isHorizontal ? getScrollPosition(el.scrollLeft, el.scrollWidth, el.clientWidth) : 'none'
    const offset = verticalPos !== 'none' && horizontalPos !== 'none' ? 11 : 0
    if (isVertical) {
      setScrollBarHeight(getScrollBarSize(el.scrollHeight, el.clientHeight, offset))
      setScrollYPos(verticalPos)
    }
    if (isHorizontal) {
      setScrollBarWidth(getScrollBarSize(el.scrollWidth, el.clientWidth, offset))
      setScrollXPos(horizontalPos)
    }
  }, [isHorizontal, isVertical])

  useLayoutEffect(updateScrollBars, [])

  // Drag handler setup (original: setupDragHandler)
  const [isDragging, dragProps] = setupDragHandler({
    onBeforeDrag(e: PointerEvent & { target: EventTarget }) {
      const target = e.target as HTMLElement
      return !!target.hasAttribute('data-fpl-orientation') && target
    },
    onDragStart(e: PointerEvent & { target: EventTarget, clientX: number, clientY: number }) {
      const target = e.target as HTMLElement
      const el = exposedRef.current
      if (!el)
        return
      const rect = el.getBoundingClientRect()
      if (target.getAttribute('data-fpl-orientation') === 'vertical') {
        const [percent, scrollPos] = getDragScroll(
          hasBothScroll,
          e.clientY,
          rect.top,
          rect.height,
          el.scrollHeight,
          el.scrollTop,
          el.clientHeight,
          scrollBarHeight,
        )
        dragStartPercent.current = percent
        if (scrollPos != null)
          el.scrollTop = scrollPos
      }
      else {
        const [percent, scrollPos] = getDragScroll(
          hasBothScroll,
          e.clientX,
          rect.left,
          rect.width,
          el.scrollWidth,
          el.scrollLeft,
          el.clientWidth,
          scrollBarWidth,
        )
        dragStartPercent.current = percent
        if (scrollPos != null)
          el.scrollLeft = scrollPos
      }
    },
    onDrag(e: { target: EventTarget, delta: { x: number, y: number } }) {
      const target = e.target as HTMLElement
      const el = exposedRef.current
      if (!el)
        return
      const rect = el.getBoundingClientRect()
      if (target.getAttribute('data-fpl-orientation') === 'vertical') {
        el.scrollTop = (
          dragStartPercent.current
          + e.delta.y / (rect.height / el.clientHeight * (el.clientHeight - scrollBarHeight - (hasBothScroll ? 11 : 0)))
        ) * (el.scrollHeight - el.clientHeight)
      }
      else {
        el.scrollLeft = (
          dragStartPercent.current
          + e.delta.x / (rect.width / el.clientWidth * (el.clientWidth - scrollBarWidth - (hasBothScroll ? 11 : 0)))
        ) * (el.scrollWidth - el.clientWidth)
      }
    },
  })

  // Show/hide scrolling state (original: ed)
  const scrollTimeout = useRef<number | null>(null)
  const handleWheel = useCallback(() => {
    if (scrollTimeout.current)
      clearTimeout(scrollTimeout.current)
    setIsScrolling(true)
    scrollTimeout.current = window.setTimeout(() => setIsScrolling(false), 200)
  }, [])

  /**
   * Handles scroll and resize events (original: ec)
   */
  const handleScrollResize = useCallback((flags: number) => {
    scrollFlags.current |= flags
    if (!rafId.current) {
      rafId.current = requestAnimationFrame(() => {
        const el = exposedRef.current
        const contentEl = contentRef.current
        if (el && contentEl) {
          const { clientWidth, clientHeight, scrollWidth, scrollHeight } = el
          // Overscroll logic
          const updateOverscroll = () => {
            if (!overscroll)
              return
            const isHovered = el.matches(':hover')
            const isAtBottom = lastScrollTop.current >= contentEl.clientHeight
            setOverscrollHeight(Math.max(
              !isHovered || isAtBottom || lastScrollTop.current === 0
                ? 0
                : Math.ceil(lastScrollTop.current) + clientHeight,
              contentEl.clientHeight,
            ))
          }
          const offset = hasBothScroll ? 11 : 0
          const verticalBar = isVertical ? getScrollBarSize(scrollHeight, clientHeight, offset) : 0
          const horizontalBar = isHorizontal ? getScrollBarSize(scrollWidth, clientWidth, offset) : 0
          if (scrollFlags.current & 1) {
            updateOverscroll()
            if (isVertical)
              setScrollBarHeight(verticalBar)
            if (isHorizontal)
              setScrollBarWidth(horizontalBar)
          }
          if (scrollFlags.current & 2) {
            const { scrollTop, scrollLeft } = el
            const isScrollingUp = scrollTop < lastScrollTop.current
            lastScrollTop.current = scrollTop
            if (isVertical) {
              setScrollBarTop(
                scrollTop / (scrollHeight - clientHeight)
                * ((clientHeight - offset - verticalBar) / clientHeight),
              )
              setScrollYPos(getScrollPosition(scrollTop, scrollHeight, clientHeight))
            }
            if (isHorizontal) {
              setScrollBarLeft(
                scrollLeft / (scrollWidth - clientWidth)
                * ((clientWidth - offset - horizontalBar) / clientWidth),
              )
              setScrollXPos(getScrollPosition(scrollLeft, scrollWidth, clientWidth))
            }
            if (overscroll && isScrollingUp && overscrollHeight > contentEl.clientHeight) {
              updateOverscroll()
            }
          }
        }
        rafId.current = null
        scrollFlags.current = 0
      })
    }
  }, [hasBothScroll, isVertical, isHorizontal, overscroll, overscrollHeight])

  // Resize observer
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => handleScrollResize(3))
    if (exposedRef.current)
      resizeObserver.observe(exposedRef.current)
    if (contentRef.current)
      resizeObserver.observe(contentRef.current)
    return () => {
      if (scrollTimeout.current)
        clearTimeout(scrollTimeout.current)
      if (rafId.current)
        cancelAnimationFrame(rafId.current)
      rafId.current = null
      resizeObserver.disconnect()
    }
  }, [handleScrollResize])

  // Mutation observer for children
  useEffect(() => {
    if (!exposedRef.current)
      return
    const mutationObserver = new MutationObserver(() => flushSync(updateScrollBars))
    mutationObserver.observe(exposedRef.current, { subtree: true, childList: true })
    return () => mutationObserver.disconnect()
  }, [updateScrollBars])

  // Content element
  const contentElement = jsx('div', {
    ref: contentRef,
    role: 'none',
    className: classNames(SCROLL_CONTAINER_CONTENT, theme.content),
    style: theme.contentStyle,
    children,
  })

  // Overscroll wrapper
  const overscrollWrapper = overscroll
    ? jsx('div', {
        role: 'none',
        style: { minHeight: overscrollHeight },
        children: contentElement,
      })
    : contentElement

  // Main render
  return jsxs('div', {
    'role': 'none',
    'className': classNames(SCROLL_CONTAINER_ROOT, theme.root, {
      [SCROLL_CONTAINER_FILL]: fill,
      [SCROLL_CONTAINER_SCROLLING]: isScrolling,
    }),
    'style': theme.rootStyle,
    'onWheel': handleWheel,
    'data-fpl-scroll-x': scrollXPos,
    'data-fpl-scroll-y': scrollYPos,
    'children': [
      jsxs('div', {
        ref: exposedRef,
        role: 'none',
        ...rest,
        ...defaultComponentAttribute,
        className: classNames(SCROLL_CONTAINER_SCROLL, theme.scroll, scrollContainerClasses[scroll], {
          [SCROLL_CONTAINER_NO_SCROLL]: isNoScroll,
          [SCROLL_CONTAINER_PIN_BOTTOM]: pinBottom,
        }),
        style: theme.scrollStyle,
        onScroll: (e: React.UIEvent<HTMLDivElement>) => {
          handleScrollResize(2)
          onScroll?.(e)
        },
        children: [
          overscrollWrapper,
          pinBottom && jsx('div', { 'aria-hidden': true, 'className': SCROLL_CONTAINER_PIN_BOTTOM_ANCHOR }),
        ],
      }),
      jsxs('div', {
        'aria-hidden': true,
        'hidden': isNoScroll,
        'onWheel': handleWheel,
        ...dragProps({
          className: classNames(SCROLL_CONTAINER_SCROLL_BARS, {
            [SCROLL_CONTAINER_DRAGGING]: isDragging,
          }),
        }),
        'children': [
          isHorizontal && jsx(ScrollBar, {
            orientation: 'horizontal',
            scrollSize: scrollBarWidth,
            scrollPercent: scrollBarLeft,
          }),
          isVertical && jsx(ScrollBar, {
            orientation: 'vertical',
            scrollSize: scrollBarHeight,
            scrollPercent: scrollBarTop,
          }),
        ],
      }),
    ],
  })
})

/**
 * ScrollBar component (original: N)
 */
export function ScrollBar({
  orientation,
  scrollSize,
  scrollPercent,
}: {
  orientation: 'horizontal' | 'vertical'
  scrollSize: number
  scrollPercent: number
}) {
  return jsx('div', {
    'data-fpl-orientation': orientation,
    'className': SCROLL_CONTAINER_SCROLL_BAR,
    'style': {
      [identity('--scroll-size')]: toPixels(scrollSize),
      [identity('--scroll-percent')]: toPercent(scrollPercent),
    },
  })
}

ScrollContainer.displayName = 'ScrollContainer'
export const P = ScrollContainer
