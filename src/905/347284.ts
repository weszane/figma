import { jsxs, jsx } from "react/jsx-runtime";
import { memoizeByArgs } from "../figma_app/815945";
import { setRefValue } from "../figma_app/272902";
import s from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { BrowserInfo } from "../figma_app/778880";
import { RecordingComponent, handleMouseEvent } from "../figma_app/878298";
import { ZR, s4 } from "../figma_app/8833";
import { scrollBarXHeight, trackPadding, scrollBarYWidth } from "../figma_app/786175";
var o = s;
var m = (e => (e.VERTICAL = "vertical", e.HORIZONTAL = "horizontal", e))(m || {});
export class $$h0 extends RecordingComponent {
  constructor() {
    super(...arguments);
    this.scrollingTimeout = null;
    this.trackHeight = 0;
    this.trackTop = 0;
    this.scrollHeight = 0;
    this.scrollTop = 0;
    this.trackWidth = 0;
    this.trackLeft = 0;
    this.scrollWidth = 0;
    this.scrollLeft = 0;
    this.wasImperativelyScrolled = !1;
    this.rafId = null;
    this.handleResize = () => {
      if (this.updateOverscrollMinHeight(), this.recomputeScrollbar("vertical"), this.recomputeScrollbar("horizontal"), this.props.useBottomPinning) {
        let e = this.scrollContainer;
        let t = this.lastContentHeight;
        let i = this.lastParentHeight;
        let n = e.offsetHeight;
        let r = e.scrollTop;
        i > 0 && r + 1 >= t - i && (e.scrollTop = this.scrollContent.offsetHeight - n);
        this.lastParentHeight = n;
      }
    };
    this.outerResizeObserver = new ResizeObserver(this.handleResize);
    this.resizeObserver = new ResizeObserver(this.handleResize);
    this.lastParentHeight = 0;
    this.lastContentHeight = 0;
    this.state = {
      canScroll: !1,
      canScrollUp: !1,
      canScrollDown: !1,
      scrollbarTop: 0,
      scrollbarHeight: 0,
      overscrollHeight: 0,
      canScrollX: !1,
      scrollbarLeft: 0,
      scrollbarWidth: 0
    };
    this.scrollTo = e => {
      this.scrollContainer && (this.scrollContainer.scrollTop = e);
    };
    this.scrollToLeft = e => {
      this.scrollContainer && (this.wasImperativelyScrolled = !0, this.scrollContainer.scrollLeft = e);
    };
    this.scrollToTop = () => {
      this.scrollContainer && (this.scrollContainer.scrollTop = 0);
    };
    this.scrollToBottom = () => {
      this.scrollContainer && (this.scrollContainer.scrollTop = this.scrollContainer.scrollHeight);
    };
    this.getScrollTop = () => this.scrollContainer ? this.scrollContainer.scrollTop : 0;
    this.getScrollContainer = () => this.scrollContainer;
    this.getClipContainer = () => this.clipContainer;
    this.getScrollHeight = () => this.scrollHeight;
    this.getScrollWidth = () => this.scrollWidth;
    this.getScrollContainerTop = memoizeByArgs(() => this.scrollContainer.getBoundingClientRect().top);
    this.getScrollContainerBottom = memoizeByArgs(() => this.scrollContainer.getBoundingClientRect().bottom);
    this.getTrackHeight = () => this.trackHeight;
    this.setClipContainer = e => {
      e && (this.clipContainer = e);
    };
    this.setScrollContainer = e => {
      this.outerResizeObserver.disconnect();
      e && (this.scrollContainer = e, setRefValue(this.props.scrollContainerRef, e), this.props.initialScrollTop && (this.scrollContainer.scrollTop = this.props.initialScrollTop), this.outerResizeObserver.observe(e), this.recomputeScrollbar("vertical"), this.recomputeScrollbar("horizontal"));
    };
    this.setScrollContent = e => {
      this.resizeObserver.disconnect();
      e && (this.scrollContent = e, this.props.scrollContentRef && (this.props.scrollContentRef.current = e), this.resizeObserver.observe(e));
    };
    this.onScroll = () => {
      let e = this.scrollTop;
      this.scrollTop = this.scrollContainer.scrollTop;
      this.recomputeScrollbar("vertical");
      this.props.onScroll && this.props.onScroll(this.scrollTop, this.getStateSnapshot());
      this.scrollLeft !== this.scrollContainer.scrollLeft && (this.scrollLeft = this.scrollContainer.scrollLeft, this.recomputeScrollbar("horizontal"), this.props.onScrollLeftChanged && this.props.onScrollLeftChanged(this.scrollLeft, this.wasImperativelyScrolled));
      this.wasImperativelyScrolled = !1;
      this.scrollingTimeout && clearTimeout(this.scrollingTimeout);
      this.scrollingTimeout = setTimeout(() => {
        this.scrollingTimeout = null;
      }, 200);
      this.lastContentHeight = this.scrollContent.offsetHeight;
      this.props.enableOverscroll && !(this.scrollTop >= e) && this.state.overscrollHeight > this.scrollContent.clientHeight && this.updateOverscrollMinHeight();
    };
    this.recomputeScrollbar = e => {
      if ("horizontal" === e && !this.props.horizontalScrollBarEnabled) return;
      if (!this.scrollingTimeout) {
        if ("vertical" === e) {
          let e = parsePxNumber(scrollBarXHeight) + parsePxNumber(trackPadding);
          this.trackHeight = this.scrollContainer.clientHeight - e;
          this.scrollHeight = this.scrollContainer.scrollHeight - e;
          this.trackTop = this.scrollContainer.getBoundingClientRect().top;
        } else if ("horizontal" === e) {
          let e = parsePxNumber(scrollBarYWidth) + parsePxNumber(trackPadding);
          this.trackWidth = this.scrollContainer.clientWidth - e;
          this.scrollWidth = this.scrollContainer.scrollWidth - e;
          this.trackLeft = this.scrollContainer.getBoundingClientRect().left;
        }
      }
      let {
        trackSize,
        scrollSize,
        minScrollbarSize,
        scrollPos,
        scrollbarPos,
        scrollbarSize
      } = {
        vertical: {
          trackSize: this.trackHeight,
          scrollSize: this.scrollHeight,
          minScrollbarSize: 42,
          scrollPos: this.scrollTop,
          scrollbarPos: this.state.scrollbarTop,
          scrollbarSize: this.state.scrollbarHeight
        },
        horizontal: {
          trackSize: this.trackWidth,
          scrollSize: this.scrollWidth,
          minScrollbarSize: 42,
          scrollPos: this.scrollLeft,
          scrollbarPos: this.state.scrollbarLeft,
          scrollbarSize: this.state.scrollbarWidth
        }
      }[e];
      let o = 0 === scrollSize ? 0 : Math.max(trackSize / scrollSize * trackSize, minScrollbarSize);
      let d = scrollSize > trackSize;
      let c = 0;
      if (d) {
        let n = scrollSize - trackSize;
        if ("vertical" === e) c = scrollPos / n * (trackSize - o);else if ("horizontal" === e) {
          let e = parsePxNumber(trackPadding) + parsePxNumber(scrollBarYWidth);
          c = scrollPos / n * (trackSize - o - e) + e;
        }
      }
      (scrollbarPos !== c || scrollbarSize !== o) && ("vertical" === e ? this.setState({
        scrollbarTop: c,
        scrollbarHeight: o,
        canScroll: d,
        canScrollUp: scrollPos > 10,
        canScrollDown: scrollPos < scrollSize - trackSize - 10
      }) : "horizontal" === e && this.setState({
        scrollbarLeft: c,
        scrollbarWidth: o,
        canScrollX: d
      }));
    };
    this.isDraggingScrollbar = e => "vertical" === e ? null != this.state.startDragScrollTop && null != this.state.startDragY : "horizontal" === e && null != this.state.startDragScrollLeft && null != this.state.startDragX;
    this.onScrollBarMouseDown = (e, t) => {
      e.stopPropagation();
      e.preventDefault();
      "vertical" === t ? this.setState({
        startDragY: e.clientY,
        startDragScrollTop: this.scrollTop
      }) : "horizontal" === t && this.setState({
        startDragX: e.clientX,
        startDragScrollLeft: this.scrollLeft
      });
    };
    this.onTrackMouseDown = (e, t) => {
      e.stopPropagation();
      e.preventDefault();
      let {
        relativePos,
        trackSize,
        scrollSize,
        relativeSize
      } = {
        vertical: {
          relativePos: e.clientY - this.trackTop,
          relativeSize: this.state.scrollbarHeight / 2,
          trackSize: this.trackHeight,
          scrollSize: this.scrollHeight
        },
        horizontal: {
          relativePos: e.clientX - this.trackLeft,
          relativeSize: this.state.scrollbarWidth ? this.state.scrollbarWidth / 2 : 0,
          trackSize: this.trackWidth,
          scrollSize: this.scrollWidth
        }
      }[t];
      let s = Math.min(Math.max(0, relativePos - relativeSize), trackSize) / trackSize * scrollSize;
      "vertical" === t ? (this.scrollContainer.scrollTop = s, this.setState({
        startDragY: e.clientY,
        startDragScrollTop: this.scrollTop
      })) : "horizontal" === t && (this.scrollContainer.scrollLeft = s, this.setState({
        startDragX: e.clientX,
        startDragScrollLeft: this.scrollLeft
      }));
      this.recomputeScrollbar(t);
    };
    this.onTrackMouseWheel = (e, t) => {
      let i;
      (e => {
        e[e.DOM_DELTA_PIXEL = 0] = "DOM_DELTA_PIXEL";
        e[e.DOM_DELTA_LINE = 1] = "DOM_DELTA_LINE";
        e[e.DOM_DELTA_PAGE = 2] = "DOM_DELTA_PAGE";
      })(i || (i = {}));
      let n = "vertical" === t ? e.deltaY : e.deltaX;
      let r = 0;
      0 === e.deltaMode ? r = n : 1 === e.deltaMode ? r = 10 * n : 2 === e.deltaMode && (r = 100 * n);
      "vertical" === t ? this.scrollContainer.scrollTop += r : "horizontal" === t && (this.scrollContainer.scrollLeft += r);
    };
    this.onMouseMove = e => {
      this.isDraggingScrollbar("vertical") ? (this.nextClientY = e.clientY, BrowserInfo.safari ? null == this.nextFrameRequestedY && (this.nextFrameRequestedY = requestAnimationFrame(() => {
        this.scrollByNextClient("vertical");
      })) : this.scrollByNextClient("vertical")) : this.isDraggingScrollbar("horizontal") && (this.nextClientX = e.clientX, BrowserInfo.safari ? null == this.nextFrameRequestedX && (this.nextFrameRequestedX = requestAnimationFrame(() => {
        this.scrollByNextClient("horizontal");
      })) : this.scrollByNextClient("horizontal"));
    };
    this.nextClientY = 0;
    this.nextClientX = 0;
    this.nextFrameRequestedY = null;
    this.nextFrameRequestedX = null;
    this.scrollByNextClient = e => {
      let {
        trackSize,
        scrollSize,
        trackPos,
        startDrag,
        startDragScroll,
        nextClient
      } = {
        vertical: {
          trackSize: this.trackHeight,
          scrollSize: this.scrollHeight,
          trackPos: this.trackTop,
          startDrag: this.state.startDragY,
          startDragScroll: this.state.startDragScrollTop,
          nextClient: this.nextClientY
        },
        horizontal: {
          trackSize: this.trackWidth,
          scrollSize: this.scrollWidth,
          trackPos: this.trackLeft,
          startDrag: this.state.startDragX,
          startDragScroll: this.state.startDragScrollLeft,
          nextClient: this.nextClientX
        }
      }[e];
      if (null != startDrag && null != startDragScroll) {
        let o = nextClient - startDrag;
        let l = o / trackSize * scrollSize;
        (o > 0 && nextClient >= trackPos || o < 0 && nextClient <= trackPos + trackSize) && ("vertical" === e ? this.scrollContainer.scrollTop = startDragScroll + l : "horizontal" === e && (this.scrollContainer.scrollLeft = startDragScroll + l), this.recomputeScrollbar(e));
        "vertical" === e ? this.nextFrameRequestedY = null : "horizontal" === e && (this.nextFrameRequestedX = null);
      }
    };
    this.onMouseUp = () => {
      this.setState({
        startDragScrollTop: void 0,
        startDragY: void 0,
        startDragScrollLeft: void 0,
        startDragX: void 0
      });
    };
    this.onMouseDown = handleMouseEvent(this, "mousedown", e => {
      this.props.onMouseDown(e);
    });
  }
  componentDidMount() {
    super.componentDidMount();
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
  }
  UNSAFE_componentWillUpdate(e, t) {
    this.rafId && cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => {
      this.recomputeScrollbar("vertical");
      this.recomputeScrollbar("horizontal");
      this.props.onCanScrollChange && this.state.canScroll !== t.canScroll && this.props.onCanScrollChange(t.canScroll);
    });
  }
  componentWillUnmount() {
    this.rafId && cancelAnimationFrame(this.rafId);
    super.componentWillUnmount();
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    this.resizeObserver.disconnect();
    this.outerResizeObserver.disconnect();
  }
  getStateSnapshot() {
    return {
      trackHeight: this.trackHeight,
      trackTop: this.trackTop,
      scrollHeight: this.scrollHeight,
      scrollTop: this.scrollTop,
      scrollContainerScrollTop: this.scrollContainer.scrollTop,
      scrollContainerScrollLeft: this.scrollContainer.scrollLeft,
      componentState: this.state
    };
  }
  updateOverscrollMinHeight() {
    if (this.props.enableOverscroll) {
      let e = this.scrollContainer?.matches(":hover");
      let t = this.scrollTop >= this.scrollContent.clientHeight;
      let i = Math.max(!e || t || 0 === this.scrollTop ? 0 : Math.ceil(this.scrollTop) + this.scrollContainer.clientHeight, this.scrollContent.clientHeight);
      this.setState({
        overscrollHeight: i
      });
    }
  }
  render() {
    let e = o()("scroll_container--scrollContainer--DYS0c scroll_container--full--CiWTy", {
      "scroll_container--horizontalScrollingEnabled--yhrnC": this.props.minContentWidth && !this.props.horizontalScrollingDisabled,
      "scroll_container--verticalScrollingDisabled--swGL9": this.props.scrollingDisabled
    });
    let t = this.props.allowScrollAndZoomOver ? this.state.canScroll ? ZR : "" : s4;
    let i = !this.props.hideScrollbar && this.state.canScrollX && this.props.minContentWidth && !this.props.horizontalScrollingDisabled && this.props.horizontalScrollBarEnabled;
    return jsxs("div", {
      className: o()(this.props.className, "scroll_container--clipContainer--5rNO2", t),
      style: {
        width: this.props.width,
        height: this.props.height,
        minWidth: this.props.minContentWidth,
        maxHeight: this.props.maxHeight
      },
      onContextMenu: this.props.onContextMenu,
      onMouseDown: this.props.onMouseDown ? this.onMouseDown : void 0,
      onPointerDown: this.props.onPointerDown,
      ref: this.setClipContainer,
      "data-non-interactive": !0,
      "data-testid": this.props.dataTestId,
      "data-onboarding-key": this.props.dataOnboardingKey,
      children: [i && jsx("div", {
        className: this.isDraggingScrollbar("horizontal") ? o()("scroll_container--trackDraggingX--FMfwj scroll_container--trackX--hi0Cm scroll_container--_baseTrack--2eCvb", {
          "scroll_container--trackDraggingBorderX--BmoqS": !this.props.disableScrollbarBorder
        }) : o()("scroll_container--trackX--hi0Cm scroll_container--_baseTrack--2eCvb", {
          "scroll_container--trackBorderX--YtWKS": !this.props.disableScrollbarBorder
        }),
        onMouseDown: e => {
          this.onTrackMouseDown(e, "horizontal");
        },
        onWheel: e => {
          this.onTrackMouseWheel(e, "horizontal");
        },
        children: jsx("div", {
          className: this.props.scrollBarAlways ? "scroll_container--scrollBarAlwaysX--vgl9K scroll_container--scrollBarX--045hC scroll_container--_baseScrollBar--k-tCf" : "scroll_container--scrollBarX--045hC scroll_container--_baseScrollBar--k-tCf",
          style: {
            transform: `translate3d(${this.state.scrollbarLeft}px, 0px, 0)`,
            width: this.state.scrollbarWidth
          },
          onMouseDown: e => {
            this.onScrollBarMouseDown(e, "horizontal");
          }
        })
      }), jsx("div", {
        ref: this.setScrollContainer,
        id: this.props.containerId,
        className: o()(e, {
          "scroll_container--propagateScrolling--ZuMmX": !!this.props.minContentWidth,
          "scroll_container--scrollShadowTop--iFgEd": this.props.enableScrollShadow && this.state.canScrollUp && !this.state.canScrollDown,
          "scroll_container--scrollShadowBottom--xsUjO": this.props.enableScrollShadow && this.state.canScrollDown && !this.state.canScrollUp,
          "scroll_container--scrollShadowBoth--ehH-a": this.props.enableScrollShadow && this.state.canScrollUp && this.state.canScrollDown,
          "scroll_container--scrollShadowCommon--LB95H": this.props.enableScrollShadow && (this.state.canScrollUp || this.state.canScrollDown)
        }),
        onScroll: this.onScroll,
        "data-non-interactive": !0,
        "data-testid": this.props.scrollContainerDataTestId,
        children: jsx("div", {
          style: this.props.enableOverscroll ? {
            minHeight: this.state.overscrollHeight
          } : void 0,
          className: "scroll_container--full--CiWTy",
          "data-non-interactive": !0,
          children: jsx("div", {
            className: this.props.innerClassName,
            id: this.props.contentId,
            ref: this.setScrollContent,
            role: this.props.role,
            "data-non-interactive": !0,
            children: this.props.children
          })
        })
      }), !this.props.hideScrollbar && this.state.canScroll && jsx("div", {
        className: this.isDraggingScrollbar("vertical") ? o()("scroll_container--trackDraggingY--SwLNT scroll_container--trackY--p6A6y scroll_container--_baseTrack--2eCvb", {
          "scroll_container--trackDraggingBorderY---uhHH": !this.props.disableScrollbarBorder
        }) : o()("scroll_container--trackY--p6A6y scroll_container--_baseTrack--2eCvb", {
          "scroll_container--trackBorderY--Rwpf0": !this.props.disableScrollbarBorder,
          "scroll_container--trackYWithTrackXPresent--fT3ux": i
        }),
        onMouseDown: e => {
          this.onTrackMouseDown(e, "vertical");
        },
        onWheel: e => {
          this.onTrackMouseWheel(e, "vertical");
        },
        children: jsx("div", {
          className: this.props.scrollBarAlways ? "scroll_container--scrollBarAlwaysY--r0qYV scroll_container--scrollBarY--pCJVZ scroll_container--_baseScrollBar--k-tCf" : "scroll_container--scrollBarY--pCJVZ scroll_container--_baseScrollBar--k-tCf",
          style: {
            transform: `translate3d(0px, ${this.state.scrollbarTop}px, 0)`,
            height: this.state.scrollbarHeight
          },
          onMouseDown: e => {
            this.onScrollBarMouseDown(e, "vertical");
          }
        })
      })]
    });
  }
}
$$h0.displayName = "ScrollContainer";
export const P = $$h0;