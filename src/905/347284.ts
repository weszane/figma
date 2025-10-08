import classNames from "classnames"
import { jsx, jsxs } from "react/jsx-runtime"
import { s4, ZR } from "../figma_app/8833"
import { setRefValue } from "../figma_app/272902"
import { BrowserInfo } from "../figma_app/778880"
import { parsePxNumber } from "../figma_app/783094"
import { scrollBarXHeight, scrollBarYWidth, trackPadding } from "../figma_app/786175"
import { memoizeByArgs } from "../figma_app/815945"
import { handleMouseEvent, RecordingComponent } from "../figma_app/878298"

// Define interfaces for props and state to add type safety
interface ScrollContainerProps {
  useBottomPinning?: boolean
  scrollContainerRef?: React.RefObject<HTMLElement>
  initialScrollTop?: number
  onScroll?: (scrollTop: number, stateSnapshot: any) => void
  onScrollLeftChanged?: (scrollLeft: number, wasImperativelyScrolled: boolean) => void
  enableOverscroll?: boolean
  horizontalScrollBarEnabled?: boolean
  onCanScrollChange?: (canScroll: boolean) => void
  className?: string
  width?: number | string
  height?: number | string
  minContentWidth?: number | string
  horizontalScrollingDisabled?: boolean
  scrollingDisabled?: boolean
  allowScrollAndZoomOver?: boolean
  hideScrollbar?: boolean
  maxHeight?: number | string
  onContextMenu?: (event: React.MouseEvent) => void
  onMouseDown?: (event: React.MouseEvent) => void
  onPointerDown?: (event: React.PointerEvent) => void
  dataTestId?: string
  dataOnboardingKey?: string
  containerId?: string
  enableScrollShadow?: boolean
  scrollContainerDataTestId?: string
  innerClassName?: string
  contentId?: string
  role?: string
  scrollContentRef?: React.RefObject<HTMLElement>
  children?: React.ReactNode
  scrollBarAlways?: boolean
  disableScrollbarBorder?: boolean
}

interface ScrollContainerState {
  canScroll: boolean
  canScrollUp: boolean
  canScrollDown: boolean
  scrollbarTop: number
  scrollbarHeight: number
  overscrollHeight: number
  canScrollX: boolean
  scrollbarLeft: number
  scrollbarWidth: number
  startDragY?: number
  startDragScrollTop?: number
  startDragX?: number
  startDragScrollLeft?: number
}

/**
 * ScrollContainer component handles custom scrolling with vertical and horizontal scrollbars.
 * Original class name: $$h0
 */
export class RecordingScrollContainer extends RecordingComponent<ScrollContainerProps, ScrollContainerState> {
  // Instance variables (original properties from constructor)
  private scrollingTimeout: NodeJS.Timeout | null = null
  private trackHeight = 0
  private trackTop = 0
  private scrollHeight = 0
  private scrollTop = 0
  private trackWidth = 0
  private trackLeft = 0
  private scrollWidth = 0
  private scrollLeft = 0
  private wasImperativelyScrolled = false
  private rafId: number | null = null
  private outerResizeObserver: ResizeObserver
  private resizeObserver: ResizeObserver
  private lastParentHeight = 0
  private lastContentHeight = 0
  private scrollContainer: HTMLElement | null = null
  private clipContainer: HTMLElement | null = null
  private scrollContent: HTMLElement | null = null
  private nextClientY = 0
  private nextClientX = 0
  private nextFrameRequestedY: number | null = null
  private nextFrameRequestedX: number | null = null

  constructor(props: ScrollContainerProps) {
    super(props)
    this.state = {
      canScroll: false,
      canScrollUp: false,
      canScrollDown: false,
      scrollbarTop: 0,
      scrollbarHeight: 0,
      overscrollHeight: 0,
      canScrollX: false,
      scrollbarLeft: 0,
      scrollbarWidth: 0,
    }
    this.outerResizeObserver = new ResizeObserver(this.handleResize)
    this.resizeObserver = new ResizeObserver(this.handleResize)
  }

  /**
   * Handles resize events for scroll container and content.
   * Original method: this.handleResize
   */
  private handleResize = () => {
    this.updateOverscrollMinHeight()
    this.recomputeScrollbar("vertical")
    this.recomputeScrollbar("horizontal")
    if (this.props.useBottomPinning) {
      const scrollContainer = this.scrollContainer
      const lastContentHeight = this.lastContentHeight
      const lastParentHeight = this.lastParentHeight
      const offsetHeight = scrollContainer!.offsetHeight
      const scrollTop = scrollContainer!.scrollTop
      if (lastParentHeight > 0 && scrollTop + 1 >= lastContentHeight - lastParentHeight) {
        scrollContainer!.scrollTop = this.scrollContent!.offsetHeight - offsetHeight
      }
      this.lastParentHeight = offsetHeight
    }
  }

  /**
   * Scrolls to a specific top position.
   * Original method: this.scrollTo
   */
  scrollTo = (top: number) => {
    if (this.scrollContainer) {
      this.scrollContainer.scrollTop = top
    }
  }

  /**
   * Scrolls to a specific left position.
   * Original method: this.scrollToLeft
   */
  scrollToLeft = (left: number) => {
    if (this.scrollContainer) {
      this.wasImperativelyScrolled = true
      this.scrollContainer.scrollLeft = left
    }
  }

  /**
   * Scrolls to the top.
   * Original method: this.scrollToTop
   */
  scrollToTop = () => {
    if (this.scrollContainer) {
      this.scrollContainer.scrollTop = 0
    }
  }

  /**
   * Scrolls to the bottom.
   * Original method: this.scrollToBottom
   */
  scrollToBottom = () => {
    if (this.scrollContainer) {
      this.scrollContainer.scrollTop = this.scrollContainer.scrollHeight
    }
  }

  /**
   * Gets the current scroll top position.
   * Original method: this.getScrollTop
   */
  getScrollTop = (): number => (this.scrollContainer ? this.scrollContainer.scrollTop : 0)

  /**
   * Gets the scroll container element.
   * Original method: this.getScrollContainer
   */
  getScrollContainer = (): HTMLElement | null => this.scrollContainer

  /**
   * Gets the clip container element.
   * Original method: this.getClipContainer
   */
  getClipContainer = (): HTMLElement | null => this.clipContainer

  /**
   * Gets the scroll height.
   * Original method: this.getScrollHeight
   */
  getScrollHeight = (): number => this.scrollHeight

  /**
   * Gets the scroll width.
   * Original method: this.getScrollWidth
   */
  getScrollWidth = (): number => this.scrollWidth

  /**
   * Gets the scroll container's top bounding rect (memoized).
   * Original method: this.getScrollContainerTop
   */
  getScrollContainerTop = memoizeByArgs(() => this.scrollContainer!.getBoundingClientRect().top)

  /**
   * Gets the scroll container's bottom bounding rect (memoized).
   * Original method: this.getScrollContainerBottom
   */
  getScrollContainerBottom = memoizeByArgs(() => this.scrollContainer!.getBoundingClientRect().bottom)

  /**
   * Gets the track height.
   * Original method: this.getTrackHeight
   */
  getTrackHeight = (): number => this.trackHeight

  /**
   * Sets the clip container ref.
   * Original method: this.setClipContainer
   */
  setClipContainer = (element: HTMLElement | null) => {
    if (element) {
      this.clipContainer = element
    }
  }

  /**
   * Sets the scroll container ref and initializes observers.
   * Original method: this.setScrollContainer
   */
  setScrollContainer = (element: HTMLElement | null) => {
    this.outerResizeObserver.disconnect()
    if (element) {
      this.scrollContainer = element
      setRefValue(this.props.scrollContainerRef, element)
      if (this.props.initialScrollTop) {
        this.scrollContainer.scrollTop = this.props.initialScrollTop
      }
      this.outerResizeObserver.observe(element)
      this.recomputeScrollbar("vertical")
      this.recomputeScrollbar("horizontal")
    }
  }

  /**
   * Sets the scroll content ref and initializes observer.
   * Original method: this.setScrollContent
   */
  setScrollContent = (element: HTMLElement | null) => {
    this.resizeObserver.disconnect()
    if (element) {
      this.scrollContent = element
      if (this.props.scrollContentRef) {
        this.props.scrollContentRef.current = element
      }
      this.resizeObserver.observe(element)
    }
  }

  /**
   * Handles scroll events.
   * Original method: this.onScroll
   */
  onScroll = () => {
    const previousScrollTop = this.scrollTop
    this.scrollTop = this.scrollContainer!.scrollTop
    this.recomputeScrollbar("vertical")
    if (this.props.onScroll) {
      this.props.onScroll(this.scrollTop, this.getStateSnapshot())
    }
    if (this.scrollLeft !== this.scrollContainer!.scrollLeft) {
      this.scrollLeft = this.scrollContainer!.scrollLeft
      this.recomputeScrollbar("horizontal")
      if (this.props.onScrollLeftChanged) {
        this.props.onScrollLeftChanged(this.scrollLeft, this.wasImperativelyScrolled)
      }
    }
    this.wasImperativelyScrolled = false
    if (this.scrollingTimeout) {
      clearTimeout(this.scrollingTimeout)
    }
    this.scrollingTimeout = setTimeout(() => {
      this.scrollingTimeout = null
    }, 200)
    this.lastContentHeight = this.scrollContent!.offsetHeight
    if (this.props.enableOverscroll && !(this.scrollTop >= previousScrollTop) && this.state.overscrollHeight > this.scrollContent!.clientHeight) {
      this.updateOverscrollMinHeight()
    }
  }

  /**
   * Recomputes scrollbar dimensions and position.
   * Original method: this.recomputeScrollbar
   */
  recomputeScrollbar = (direction: "vertical" | "horizontal") => {
    if (direction === "horizontal" && !this.props.horizontalScrollBarEnabled) {
      return
    }
    if (!this.scrollingTimeout) {
      if (direction === "vertical") {
        const adjustment = parsePxNumber(scrollBarXHeight) + parsePxNumber(trackPadding)
        this.trackHeight = this.scrollContainer!.clientHeight - adjustment
        this.scrollHeight = this.scrollContainer!.scrollHeight - adjustment
        this.trackTop = this.scrollContainer!.getBoundingClientRect().top
      }
      else if (direction === "horizontal") {
        const adjustment = parsePxNumber(scrollBarYWidth) + parsePxNumber(trackPadding)
        this.trackWidth = this.scrollContainer!.clientWidth - adjustment
        this.scrollWidth = this.scrollContainer!.scrollWidth - adjustment
        this.trackLeft = this.scrollContainer!.getBoundingClientRect().left
      }
    }
    const { trackSize, scrollSize, minScrollbarSize, scrollPos, scrollbarPos, scrollbarSize } = direction === "vertical"
      ? {
          trackSize: this.trackHeight,
          scrollSize: this.scrollHeight,
          minScrollbarSize: 42,
          scrollPos: this.scrollTop,
          scrollbarPos: this.state.scrollbarTop,
          scrollbarSize: this.state.scrollbarHeight,
        }
      : {
          trackSize: this.trackWidth,
          scrollSize: this.scrollWidth,
          minScrollbarSize: 42,
          scrollPos: this.scrollLeft,
          scrollbarPos: this.state.scrollbarLeft,
          scrollbarSize: this.state.scrollbarWidth,
        }
    const scrollbarSizeNew = scrollSize === 0 ? 0 : Math.max(trackSize / scrollSize * trackSize, minScrollbarSize)
    const canScroll = scrollSize > trackSize
    let scrollbarPosNew = 0
    if (canScroll) {
      const scrollRange = scrollSize - trackSize
      if (direction === "vertical") {
        scrollbarPosNew = scrollPos / scrollRange * (trackSize - scrollbarSizeNew)
      }
      else if (direction === "horizontal") {
        const padding = parsePxNumber(trackPadding) + parsePxNumber(scrollBarYWidth)
        scrollbarPosNew = scrollPos / scrollRange * (trackSize - scrollbarSizeNew - padding) + padding
      }
    }
    if (scrollbarPos !== scrollbarPosNew || scrollbarSize !== scrollbarSizeNew) {
      if (direction === "vertical") {
        this.setState({
          scrollbarTop: scrollbarPosNew,
          scrollbarHeight: scrollbarSizeNew,
          canScroll,
          canScrollUp: scrollPos > 10,
          canScrollDown: scrollPos < scrollSize - trackSize - 10,
        })
      }
      else if (direction === "horizontal") {
        this.setState({
          scrollbarLeft: scrollbarPosNew,
          scrollbarWidth: scrollbarSizeNew,
          canScrollX: canScroll,
        })
      }
    }
  }

  /**
   * Checks if the scrollbar is being dragged.
   * Original method: this.isDraggingScrollbar
   */
  isDraggingScrollbar = (direction: "vertical" | "horizontal"): boolean => {
    if (direction === "vertical") {
      return this.state.startDragScrollTop != null && this.state.startDragY != null
    }
    else if (direction === "horizontal") {
      return this.state.startDragScrollLeft != null && this.state.startDragX != null
    }
    return false
  }

  /**
   * Handles mousedown on scrollbar.
   * Original method: this.onScrollBarMouseDown
   */
  onScrollBarMouseDown = (event: React.MouseEvent, direction: "vertical" | "horizontal") => {
    event.stopPropagation()
    event.preventDefault()
    if (direction === "vertical") {
      this.setState({
        startDragY: event.clientY,
        startDragScrollTop: this.scrollTop,
      })
    }
    else if (direction === "horizontal") {
      this.setState({
        startDragX: event.clientX,
        startDragScrollLeft: this.scrollLeft,
      })
    }
  }

  /**
   * Handles mousedown on track.
   * Original method: this.onTrackMouseDown
   */
  onTrackMouseDown = (event: React.MouseEvent, direction: "vertical" | "horizontal") => {
    event.stopPropagation()
    event.preventDefault()
    const { relativePos, trackSize, scrollSize, relativeSize } = direction === "vertical"
      ? {
          relativePos: event.clientY - this.trackTop,
          relativeSize: this.state.scrollbarHeight / 2,
          trackSize: this.trackHeight,
          scrollSize: this.scrollHeight,
        }
      : {
          relativePos: event.clientX - this.trackLeft,
          relativeSize: this.state.scrollbarWidth ? this.state.scrollbarWidth / 2 : 0,
          trackSize: this.trackWidth,
          scrollSize: this.scrollWidth,
        }
    const scrollPos = Math.min(Math.max(0, relativePos - relativeSize), trackSize) / trackSize * scrollSize
    if (direction === "vertical") {
      this.scrollContainer!.scrollTop = scrollPos
      this.setState({
        startDragY: event.clientY,
        startDragScrollTop: this.scrollTop,
      })
    }
    else if (direction === "horizontal") {
      this.scrollContainer!.scrollLeft = scrollPos
      this.setState({
        startDragX: event.clientX,
        startDragScrollLeft: this.scrollLeft,
      })
    }
    this.recomputeScrollbar(direction)
  }

  /**
   * Handles wheel events on track.
   * Original method: this.onTrackMouseWheel
   */
  onTrackMouseWheel = (event: React.WheelEvent, direction: "vertical" | "horizontal") => {
    enum DeltaMode {
      DOM_DELTA_PIXEL = 0,
      DOM_DELTA_LINE = 1,
      DOM_DELTA_PAGE = 2,
    }
    const delta = direction === "vertical" ? event.deltaY : event.deltaX
    let scrollDelta = 0
    if (event.deltaMode === DeltaMode.DOM_DELTA_PIXEL) {
      scrollDelta = delta
    }
    else if (event.deltaMode === DeltaMode.DOM_DELTA_LINE) {
      scrollDelta = 10 * delta
    }
    else if (event.deltaMode === DeltaMode.DOM_DELTA_PAGE) {
      scrollDelta = 100 * delta
    }
    if (direction === "vertical") {
      this.scrollContainer!.scrollTop += scrollDelta
    }
    else if (direction === "horizontal") {
      this.scrollContainer!.scrollLeft += scrollDelta
    }
  }

  /**
   * Handles mousemove for dragging.
   * Original method: this.onMouseMove
   */
  onMouseMove = (event: MouseEvent) => {
    if (this.isDraggingScrollbar("vertical")) {
      this.nextClientY = event.clientY
      if (BrowserInfo.safari) {
        if (this.nextFrameRequestedY == null) {
          this.nextFrameRequestedY = requestAnimationFrame(() => {
            this.scrollByNextClient("vertical")
          })
        }
      }
      else {
        this.scrollByNextClient("vertical")
      }
    }
    else if (this.isDraggingScrollbar("horizontal")) {
      this.nextClientX = event.clientX
      if (BrowserInfo.safari) {
        if (this.nextFrameRequestedX == null) {
          this.nextFrameRequestedX = requestAnimationFrame(() => {
            this.scrollByNextClient("horizontal")
          })
        }
      }
      else {
        this.scrollByNextClient("horizontal")
      }
    }
  }

  /**
   * Scrolls based on client position during drag.
   * Original method: this.scrollByNextClient
   */
  scrollByNextClient = (direction: "vertical" | "horizontal") => {
    const { trackSize, scrollSize, trackPos, startDrag, startDragScroll, nextClient } = direction === "vertical"
      ? {
          trackSize: this.trackHeight,
          scrollSize: this.scrollHeight,
          trackPos: this.trackTop,
          startDrag: this.state.startDragY,
          startDragScroll: this.state.startDragScrollTop,
          nextClient: this.nextClientY,
        }
      : {
          trackSize: this.trackWidth,
          scrollSize: this.scrollWidth,
          trackPos: this.trackLeft,
          startDrag: this.state.startDragX,
          startDragScroll: this.state.startDragScrollLeft,
          nextClient: this.nextClientX,
        }
    if (startDrag != null && startDragScroll != null) {
      const delta = nextClient - startDrag
      const scrollDelta = delta / trackSize * scrollSize
      if ((delta > 0 && nextClient >= trackPos) || (delta < 0 && nextClient <= trackPos + trackSize)) {
        if (direction === "vertical") {
          this.scrollContainer!.scrollTop = startDragScroll + scrollDelta
        }
        else if (direction === "horizontal") {
          this.scrollContainer!.scrollLeft = startDragScroll + scrollDelta
        }
        this.recomputeScrollbar(direction)
      }
      if (direction === "vertical") {
        this.nextFrameRequestedY = null
      }
      else if (direction === "horizontal") {
        this.nextFrameRequestedX = null
      }
    }
  }

  /**
   * Handles mouseup to end dragging.
   * Original method: this.onMouseUp
   */
  onMouseUp = () => {
    this.setState({
      startDragScrollTop: undefined,
      startDragY: undefined,
      startDragScrollLeft: undefined,
      startDragX: undefined,
    })
  }

  /**
   * Handles mousedown with custom event handling.
   * Original method: this.onMouseDown
   */
  onMouseDown = handleMouseEvent(this, "mousedown", (event: React.MouseEvent) => {
    if (this.props.onMouseDown) {
      this.props.onMouseDown(event)
    }
  })

  componentDidMount() {
    super.componentDidMount()
    document.addEventListener("mousemove", this.onMouseMove)
    document.addEventListener("mouseup", this.onMouseUp)
  }

  UNSAFE_componentWillUpdate(nextProps: ScrollContainerProps, nextState: ScrollContainerState) {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }
    this.rafId = requestAnimationFrame(() => {
      this.recomputeScrollbar("vertical")
      this.recomputeScrollbar("horizontal")
      if (this.props.onCanScrollChange && this.state.canScroll !== nextState.canScroll) {
        this.props.onCanScrollChange(nextState.canScroll)
      }
    })
  }

  componentWillUnmount() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }
    super.componentWillUnmount()
    document.removeEventListener("mousemove", this.onMouseMove)
    document.removeEventListener("mouseup", this.onMouseUp)
    this.resizeObserver.disconnect()
    this.outerResizeObserver.disconnect()
  }

  /**
   * Returns a snapshot of the current state.
   * Original method: this.getStateSnapshot
   */
  getStateSnapshot() {
    return {
      trackHeight: this.trackHeight,
      trackTop: this.trackTop,
      scrollHeight: this.scrollHeight,
      scrollTop: this.scrollTop,
      scrollContainerScrollTop: this.scrollContainer!.scrollTop,
      scrollContainerScrollLeft: this.scrollContainer!.scrollLeft,
      componentState: this.state,
    }
  }

  /**
   * Updates the overscroll minimum height.
   * Original method: this.updateOverscrollMinHeight
   */
  updateOverscrollMinHeight() {
    if (this.props.enableOverscroll) {
      const isHovered = this.scrollContainer?.matches(":hover")
      const isAtBottom = this.scrollTop >= this.scrollContent!.clientHeight
      const overscrollHeight = Math.max(
        !isHovered || isAtBottom || this.scrollTop === 0
          ? 0
          : Math.ceil(this.scrollTop) + this.scrollContainer!.clientHeight,
        this.scrollContent!.clientHeight,
      )
      this.setState({
        overscrollHeight,
      })
    }
  }

  render() {
    const scrollContainerClass = classNames("scroll_container--scrollContainer--DYS0c scroll_container--full--CiWTy", {
      "scroll_container--horizontalScrollingEnabled--yhrnC": this.props.minContentWidth && !this.props.horizontalScrollingDisabled,
      "scroll_container--verticalScrollingDisabled--swGL9": this.props.scrollingDisabled,
    })
    const clipContainerClass = this.props.allowScrollAndZoomOver ? (this.state.canScroll ? ZR : "") : s4
    const showHorizontalScrollbar = !this.props.hideScrollbar && this.state.canScrollX && this.props.minContentWidth && !this.props.horizontalScrollingDisabled && this.props.horizontalScrollBarEnabled
    return jsxs("div", {
      "className": classNames(this.props.className, "scroll_container--clipContainer--5rNO2", clipContainerClass),
      "style": {
        width: this.props.width,
        height: this.props.height,
        minWidth: this.props.minContentWidth,
        maxHeight: this.props.maxHeight,
      },
      "onContextMenu": this.props.onContextMenu,
      "onMouseDown": this.props.onMouseDown ? this.onMouseDown : undefined,
      "onPointerDown": this.props.onPointerDown,
      "ref": this.setClipContainer,
      "data-non-interactive": true,
      "data-testid": this.props.dataTestId,
      "data-onboarding-key": this.props.dataOnboardingKey,
      "children": [
        showHorizontalScrollbar && jsx("div", {
          className: this.isDraggingScrollbar("horizontal")
            ? classNames("scroll_container--trackDraggingX--FMfwj scroll_container--trackX--hi0Cm scroll_container--_baseTrack--2eCvb", {
                "scroll_container--trackDraggingBorderX--BmoqS": !this.props.disableScrollbarBorder,
              })
            : classNames("scroll_container--trackX--hi0Cm scroll_container--_baseTrack--2eCvb", {
                "scroll_container--trackBorderX--YtWKS": !this.props.disableScrollbarBorder,
              }),
          onMouseDown: event => this.onTrackMouseDown(event, "horizontal"),
          onWheel: event => this.onTrackMouseWheel(event, "horizontal"),
          children: jsx("div", {
            className: this.props.scrollBarAlways ? "scroll_container--scrollBarAlwaysX--vgl9K scroll_container--scrollBarX--045hC scroll_container--_baseScrollBar--k-tCf" : "scroll_container--scrollBarX--045hC scroll_container--_baseScrollBar--k-tCf",
            style: {
              transform: `translate3d(${this.state.scrollbarLeft}px, 0px, 0)`,
              width: this.state.scrollbarWidth,
            },
            onMouseDown: event => this.onScrollBarMouseDown(event, "horizontal"),
          }),
        }),
        jsx("div", {
          "ref": this.setScrollContainer,
          "id": this.props.containerId,
          "className": classNames(scrollContainerClass, {
            "scroll_container--propagateScrolling--ZuMmX": !!this.props.minContentWidth,
            "scroll_container--scrollShadowTop--iFgEd": this.props.enableScrollShadow && this.state.canScrollUp && !this.state.canScrollDown,
            "scroll_container--scrollShadowBottom--xsUjO": this.props.enableScrollShadow && this.state.canScrollDown && !this.state.canScrollUp,
            "scroll_container--scrollShadowBoth--ehH-a": this.props.enableScrollShadow && this.state.canScrollUp && this.state.canScrollDown,
            "scroll_container--scrollShadowCommon--LB95H": this.props.enableScrollShadow && (this.state.canScrollUp || this.state.canScrollDown),
          }),
          "onScroll": this.onScroll,
          "data-non-interactive": true,
          "data-testid": this.props.scrollContainerDataTestId,
          "children": jsx("div", {
            "style": this.props.enableOverscroll
              ? {
                  minHeight: this.state.overscrollHeight,
                }
              : undefined,
            "className": "scroll_container--full--CiWTy",
            "data-non-interactive": true,
            "children": jsx("div", {
              "className": this.props.innerClassName,
              "id": this.props.contentId,
              "ref": this.setScrollContent,
              "role": this.props.role,
              "data-non-interactive": true,
              "children": this.props.children,
            }),
          }),
        }),
        !this.props.hideScrollbar && this.state.canScroll && jsx("div", {
          className: this.isDraggingScrollbar("vertical")
            ? classNames("scroll_container--trackDraggingY--SwLNT scroll_container--trackY--p6A6y scroll_container--_baseTrack--2eCvb", {
                "scroll_container--trackDraggingBorderY---uhHH": !this.props.disableScrollbarBorder,
              })
            : classNames("scroll_container--trackY--p6A6y scroll_container--_baseTrack--2eCvb", {
                "scroll_container--trackBorderY--Rwpf0": !this.props.disableScrollbarBorder,
                "scroll_container--trackYWithTrackXPresent--fT3ux": showHorizontalScrollbar,
              }),
          onMouseDown: event => this.onTrackMouseDown(event, "vertical"),
          onWheel: event => this.onTrackMouseWheel(event, "vertical"),
          children: jsx("div", {
            className: this.props.scrollBarAlways ? "scroll_container--scrollBarAlwaysY--r0qYV scroll_container--scrollBarY--pCJVZ scroll_container--_baseScrollBar--k-tCf" : "scroll_container--scrollBarY--pCJVZ scroll_container--_baseScrollBar--k-tCf",
            style: {
              transform: `translate3d(0px, ${this.state.scrollbarTop}px, 0)`,
              height: this.state.scrollbarHeight,
            },
            onMouseDown: event => this.onScrollBarMouseDown(event, "vertical"),
          }),
        }),
      ],
    })
  }

  static displayName = "ScrollContainer"
}

export const P = RecordingScrollContainer
