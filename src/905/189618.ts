import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback, useLayoutEffect, useEffect } from "react";
import { shallowEqual } from "../vendor/514228";
import s from "classnames";
import { wY } from "../figma_app/708845";
import { Ay } from "../figma_app/778880";
var o = s;
let c = {
  trackWidth: 0,
  trackLeft: 0,
  scrollWidth: 0,
  scrollLeft: 0,
  canScroll: !0,
  scrollbarLeft: 0,
  scrollbarWidth: 0,
  startDragX: void 0,
  startDragScrollLeft: void 0
};
let u = (e, t) => {
  let i = {
    ...e
  };
  if (i.trackWidth = t.clientWidth, i.scrollWidth = t.scrollWidth, i.trackLeft = t.getBoundingClientRect().left, i.scrollLeft = t.scrollLeft, i.scrollbarWidth = Math.max(i.trackWidth * (i.trackWidth / i.scrollWidth), 42), i.canScroll = i.scrollWidth > i.trackWidth, i.canScroll) {
    let e = i.scrollWidth - i.trackWidth;
    let t = i.trackWidth - i.scrollbarWidth;
    i.scrollbarLeft = t * (i.scrollLeft / e);
  }
  return shallowEqual(e, i) ? e : i;
};
var p = (e => (e[e.DOM_DELTA_PIXEL = 0] = "DOM_DELTA_PIXEL", e[e.DOM_DELTA_LINE = 1] = "DOM_DELTA_LINE", e[e.DOM_DELTA_PAGE = 2] = "DOM_DELTA_PAGE", e))(p || {});
let m = e => {
  let t = 0;
  0 === e.deltaMode ? t = e.deltaX : 1 === e.deltaMode ? t = 10 * e.deltaX : 2 === e.deltaMode && (t = 100 * e.deltaX);
  return t;
};
let h = (e, t, i, n) => {
  let {
    startDragX,
    startDragScrollLeft,
    scrollWidth,
    trackWidth,
    trackLeft
  } = i;
  if (void 0 !== startDragX && void 0 !== startDragScrollLeft) {
    let i = e - startDragX;
    (i > 0 && e >= trackLeft || i < 0 && e <= trackLeft + trackWidth) && (t.scrollLeft = startDragScrollLeft + i / trackWidth * scrollWidth, n());
  }
};
let g = ({
  scrollContainerRef: e,
  clipContainerRef: t,
  onCanScrollChanged: i,
  childRef: n
}) => {
  let [a, s] = useState(c);
  let o = useRef();
  let [p, g] = useState(null);
  let f = void 0 !== a.startDragX && void 0 !== a.startDragScrollLeft;
  let _ = useCallback(() => {
    let t = e.current;
    t && s(e => u(e, t));
  }, [e, s]);
  useLayoutEffect(() => {
    o.current !== a.canScroll && i?.(a.canScroll);
    o.current = a.canScroll;
  }, [a.canScroll, i]);
  let A = useCallback(t => {
    let i = t.clientX;
    let n = e.current;
    n && (Ay.safari ? null === p && g(requestAnimationFrame(() => {
      h(i, n, a, _);
      g(null);
    })) : h(i, n, a, _), _());
  }, [_, p, e, a]);
  let y = useCallback(t => {
    e.current && (e.current.scrollLeft += m(t), _());
  }, [e, _]);
  let b = useCallback(t => {
    if (!e.current) return;
    t.stopPropagation();
    t.preventDefault();
    let {
      clientX
    } = t;
    let {
      trackLeft,
      scrollbarWidth,
      trackWidth,
      scrollWidth,
      scrollbarLeft
    } = a;
    let c = clientX - trackLeft;
    if (!(c >= scrollbarLeft && c <= scrollbarLeft + scrollbarWidth)) {
      let t = Math.min(Math.max(0, c - scrollbarWidth / 2), trackWidth);
      e.current.scrollLeft = t / trackWidth * scrollWidth;
      _();
    }
    s(e => ({
      ...e,
      startDragX: clientX,
      startDragScrollLeft: e.scrollLeft
    }));
  }, [e, a, s, _]);
  let v = useCallback(() => {
    s(e => ({
      ...e,
      startDragScrollLeft: void 0,
      startDragX: void 0
    }));
  }, []);
  wY(t, _);
  wY(n, _);
  useEffect(() => {
    if (f) {
      document.addEventListener("mousemove", A);
      return () => document.removeEventListener("mousemove", A);
    }
  }, [A, f]);
  useEffect(() => {
    if (f) {
      document.addEventListener("mouseup", v);
      return () => document.removeEventListener("mouseup", v);
    }
  }, [v, f]);
  useLayoutEffect(_, [_]);
  return {
    reconcileStateWithDom: _,
    onTrackWheel: y,
    onTrackMouseDown: b,
    scrollState: a,
    isDragging: f
  };
};
let f = e => {
  if (!e.canScroll) return "none";
  let t = e.scrollLeft;
  let i = e.trackWidth - e.scrollbarWidth - e.scrollLeft + 25;
  let n = 1 - Math.min(t / 50, 1);
  let r = 1 - Math.min(i / 50, 1);
  let a = `rgba(0, 0, 0, ${n})`;
  let s = "rgba(0, 0, 0, 1)";
  let o = `rgba(0, 0, 0, ${r})`;
  let l = [`${a} 0%`, `${a} 5px`, `${s} 50px`, `${s} calc(100% - 50px)`, `${o} calc(100% - 5px)`, `${o} 100%`];
  return `linear-gradient(to right, ${l.join(", ")})`;
};
export function $$_0({
  className: e,
  scrollBarAlways: t,
  fadeEdges: i,
  children: a,
  onCanScrollChanged: s,
  childRef: l,
  hideScrollBar: d
}) {
  let c = useRef(null);
  let u = useRef(null);
  let {
    reconcileStateWithDom,
    onTrackWheel,
    onTrackMouseDown,
    scrollState,
    isDragging
  } = g({
    scrollContainerRef: c,
    clipContainerRef: u,
    childRef: l,
    onCanScrollChanged: s
  });
  let y = {
    transform: `translate3d(${scrollState.scrollbarLeft}px, 0px, 0)`,
    width: scrollState.scrollbarWidth
  };
  return jsxs("div", {
    ref: u,
    className: o()("horizontal_scroll_container--clipContainer--5E1FP", e),
    children: [scrollState.canScroll && !d && jsx("div", {
      className: isDragging ? "horizontal_scroll_container--trackDragging---EmpF horizontal_scroll_container--track--NB72q" : "horizontal_scroll_container--track--NB72q",
      onMouseDown: onTrackMouseDown,
      onWheel: onTrackWheel,
      children: jsx("div", {
        className: t ? "horizontal_scroll_container--scrollBarAlways---9ddQ horizontal_scroll_container--scrollBar--2cVcj" : "horizontal_scroll_container--scrollBar--2cVcj",
        style: y
      })
    }), jsx("div", {
      ref: c,
      className: "horizontal_scroll_container--scrollContainer--IkUqe",
      onScroll: () => reconcileStateWithDom(),
      style: {
        WebkitMaskImage: i ? f(scrollState) : void 0
      },
      children: a
    })]
  });
}
export const Z = $$_0;