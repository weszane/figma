import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useId, useRef, useCallback, useMemo } from "react";
import { DndProvider } from "../vendor/912394";
import { getElementPosition, pointFromMouseEvent } from "../905/268491";
import { setupRefUpdater } from "../905/823680";
import { defaultComponentAttribute } from "../905/577641";
import { isEventTargetOutside, preventAndStopEvent } from "../905/955878";
import { defaultInputState } from "../905/768014";
import { GB, Nd, uB, lg } from "../905/127493";
import { k } from "../905/733611";
class o {
  actions;
  monitor;
  registry;
  sourceNodes = {};
  sourceNodesOptions = {};
  sourcePreviewNodes = {};
  sourcePreviewNodesOptions = {};
  targetNodes = {};
  targetNodeOptions = {};
  mouseClientOffset = {};
  moveStartSourceIds = null;
  draggedSourceNode = null;
  draggedSourceNodeRemovalObserver = null;
  isSetUp = !1;
  seenMoveStartCaptureEvents = new WeakSet();
  seenMoveStartEvents = new WeakSet();
  seenMoveCaptureEvents = new WeakSet();
  seenMoveEndCaptureEvents = new WeakSet();
  constructor(e) {
    this.actions = e.getActions();
    this.monitor = e.getMonitor();
    this.registry = e.getRegistry();
  }
  setup() {
    if (this.isSetUp) throw Error("Cannot have two DnD Mouse backend at the same time");
    this.isSetUp = !0;
    this.attach(window);
  }
  teardown() {
    this.isSetUp = !1;
    this.mouseClientOffset = {};
    this.detach(window);
  }
  attach(e) {
    e.addEventListener("mousedown", this.handleWindowMoveStartCapture, !0);
    e.addEventListener("mousedown", this.handleWindowMoveStart);
    e.addEventListener("mousemove", this.handleWindowMoveCapture, !0);
    e.addEventListener("mouseup", this.handleWindowMoveEndCapture, !0);
    return () => this.detach(e);
  }
  detach(e) {
    e.removeEventListener("mousedown", this.handleWindowMoveStartCapture, !0);
    e.removeEventListener("mousedown", this.handleWindowMoveStart);
    e.removeEventListener("mousemove", this.handleWindowMoveCapture, !0);
    e.removeEventListener("mouseup", this.handleWindowMoveEndCapture, !0);
  }
  checkAndMarkEventSeen(e, t) {
    return !!e.has(t) || (e.add(t), !1);
  }
  getSourceClientOffset = e => function (e) {
    let t = 1 === e.nodeType ? e : e.parentElement;
    return t ? getElementPosition(t) : null;
  }(this.sourceNodes[e]);
  connectDragSource(e, t) {
    this.sourceNodes[e] = t;
    let i = this.handleMoveStart.bind(this, e);
    t.addEventListener("mousedown", i);
    return () => {
      delete this.sourceNodes[e];
      t.removeEventListener("mousedown", i);
    };
  }
  connectDragPreview(e, t, i) {
    this.sourcePreviewNodesOptions[e] = i;
    this.sourcePreviewNodes[e] = t;
    return () => {
      delete this.sourcePreviewNodes[e];
      delete this.sourcePreviewNodesOptions[e];
    };
  }
  connectDropTarget(e, t) {
    this.targetNodes[e] = t;
    return () => {
      delete this.targetNodes[e];
    };
  }
  handleWindowMoveStartCapture = e => {
    e instanceof MouseEvent && (this.checkAndMarkEventSeen(this.seenMoveStartCaptureEvents, e) || (this.moveStartSourceIds = []));
  };
  handleMoveStart = (e, t) => {
    2 !== t.button && this.moveStartSourceIds?.unshift(e);
  };
  handleWindowMoveStart = e => {
    if (!(e instanceof MouseEvent) || this.checkAndMarkEventSeen(this.seenMoveStartEvents, e)) return;
    let t = pointFromMouseEvent(e);
    t && (this.mouseClientOffset = t);
  };
  handleWindowMoveCapture = e => {
    if (!(e instanceof MouseEvent) || this.checkAndMarkEventSeen(this.seenMoveCaptureEvents, e)) return;
    let {
      moveStartSourceIds
    } = this;
    let i = pointFromMouseEvent(e);
    if (!i) return;
    let {
      x,
      y
    } = this.mouseClientOffset;
    if (!this.monitor.isDragging() && moveStartSourceIds && null != x && null != y && (Math.abs(x - i.x) > 4 || Math.abs(y - i.y) > 4) && (this.moveStartSourceIds = null, this.actions.beginDrag(moveStartSourceIds, {
      clientOffset: this.mouseClientOffset,
      getSourceClientOffset: this.getSourceClientOffset,
      publishSource: !1
    })), !this.monitor.isDragging()) return;
    let a = this.sourceNodes[this.monitor.getSourceId()];
    this.installSourceNodeRemovalObserver(a);
    this.actions.publishDragSource();
    e.preventDefault();
    let o = Object.keys(this.targetNodes).filter(e => {
      let t = this.targetNodes[e].getBoundingClientRect();
      return i.x >= t.left && i.x <= t.right && i.y >= t.top && i.y <= t.bottom;
    });
    this.actions.hover(o, {
      clientOffset: i
    });
  };
  handleWindowMoveEndCapture = e => {
    if (e instanceof MouseEvent && !this.checkAndMarkEventSeen(this.seenMoveEndCaptureEvents, e)) {
      if (!this.monitor.isDragging() || this.monitor.didDrop()) {
        this.moveStartSourceIds = null;
        return;
      }
      e.preventDefault();
      this.mouseClientOffset = {};
      this.uninstallSourceNodeRemovalObserver();
      this.actions.drop();
      this.actions.endDrag();
    }
  };
  installSourceNodeRemovalObserver(e) {
    this.uninstallSourceNodeRemovalObserver();
    this.draggedSourceNode = e;
    this.draggedSourceNodeRemovalObserver = new window.MutationObserver(() => {
      e.parentElement || (this.resurrectSourceNode(), this.uninstallSourceNodeRemovalObserver());
    });
    e && e.parentElement && this.draggedSourceNodeRemovalObserver.observe(e.parentElement, {
      childList: !0
    });
  }
  resurrectSourceNode() {
    this.draggedSourceNode && (this.draggedSourceNode.style.display = "none", this.draggedSourceNode.removeAttribute("data-reactid"), document.body.appendChild(this.draggedSourceNode));
  }
  uninstallSourceNodeRemovalObserver() {
    this.draggedSourceNodeRemovalObserver && this.draggedSourceNodeRemovalObserver.disconnect();
    this.draggedSourceNodeRemovalObserver = null;
    this.draggedSourceNode = null;
  }
  profile() {
    return {};
  }
}
function l(e) {
  return new o(e);
}
let $$g0 = '[role="row"]:not([data-fpl-column-header-row="true"])';
let $$f1 = forwardRef(({
  children: e,
  ...t
}, i) => {
  let {
    followingFocusTargetRef,
    gridContextValue,
    gridProps,
    precedingFocusTargetRef,
    ref
  } = function ({
    setSelectedRows: e,
    onDragOver: t,
    onReorderRows: i,
    onCancelDrag: n,
    htmlAttributes: a,
    ...s
  }) {
    let {
      onFocus,
      onKeyDown,
      ...d
    } = a || {};
    let c = useId();
    let h = useRef(null);
    let f = useRef(null);
    let A = useRef(null);
    let y = useRef(void 0);
    let b = useRef(void 0);
    let v = useRef(!1);
    let I = useCallback(e => (v.current = !0, _(h.current, "forward" === e ? "right" : "left", e)), []);
    let E = useCallback(t => {
      if (!function (e, t) {
        if (isEventTargetOutside(e)) return !1;
        let i = e.target;
        for (; i && i !== t;) {
          if ("dialog" === i.getAttribute("role")) return !1;
          i = i.parentElement;
        }
        return !0;
      }(t, h.current)) return;
      onKeyDown?.(t);
      let i = document.activeElement?.closest(GB);
      let n = e => {
        if (v.current = !1, Nd(2)) {
          let t = "down" === e || "right" === e;
          uB(t ? "forward" : "reverse");
        } else _(h.current, e);
      };
      switch (t.key) {
        case "Escape":
          Nd(0) ? i?.blur() : Nd(1) && i?.focus();
          v.current = !1;
          break;
        case "Enter":
          if (Nd(0) && document.activeElement instanceof HTMLElement) {
            lg(document.activeElement, "forward");
            break;
          }
          return;
        case "ArrowUp":
          n("up");
          break;
        case "ArrowDown":
          n("down");
          break;
        case "ArrowLeft":
          n("left");
          break;
        case "ArrowRight":
          n("right");
          break;
        case "Tab":
          if (Nd(2) || v.current) {
            if (!uB(t.shiftKey ? "reverse" : "forward", I)) return;
          } else {
            let e = t.shiftKey ? f.current : A.current;
            e?.focus();
            return;
          }
          break;
        case " ":
          if (t.shiftKey && i) {
            let t = i.closest($$g0);
            let n = Array.from(h.current?.querySelectorAll($$g0) ?? []);
            let r = t ? n.indexOf(t) : -1;
            let a = new Set(Array.from(h.current?.querySelectorAll('[role="row"][aria-selected="true"]') ?? []).map(e => n.indexOf(e)));
            a.has(r) ? a.$$delete(r) : a.add(r);
            r >= 0 && e?.(a);
            break;
          }
          return;
        default:
          return;
      }
      preventAndStopEvent(t);
    }, [onKeyDown, I, e]);
    let x = useCallback(e => {
      if (onFocus?.(e), h.current && h.current.contains(e.target) && !h.current.contains(e.relatedTarget) && "Tab" === defaultInputState.key) {
        v.current = !1;
        let e = h.current.querySelector(GB);
        e instanceof HTMLElement && lg(e);
      }
    }, [onFocus]);
    let S = useMemo(() => ({
      role: "grid",
      onKeyDown: E,
      onFocus: x,
      ...d,
      ...s
    }), [x, E, d, s]);
    return {
      followingFocusTargetRef: A,
      gridContextValue: {
        setSelectedRows: e,
        onDragOver: t,
        onCancelDrag: n,
        draggingRowIndex: useRef(void 0),
        newDraggingOrder: useRef(void 0),
        onReorderRows: i,
        lastClickedRow: y,
        id: c,
        gridRef: h,
        keyboardDragIndexRef: b
      },
      gridProps: S,
      precedingFocusTargetRef: f,
      ref: h
    };
  }(t);
  let v = setupRefUpdater(i, ref);
  return jsx(DndProvider, {
    backend: l,
    children: jsxs(k.Provider, {
      value: gridContextValue,
      children: [jsx(A, {
        ref: precedingFocusTargetRef
      }), jsx("div", {
        ...gridProps,
        ...defaultComponentAttribute,
        ref: v,
        children: e
      }), jsx(A, {
        ref: followingFocusTargetRef
      })]
    })
  });
});
function _(e, t, i) {
  if (!e || !document.activeElement) return !1;
  let n = document.activeElement;
  let r = n.closest($$g0);
  let a = n.closest(GB);
  if (!r || !a) return !1;
  let s = Array.from(e.querySelectorAll($$g0));
  let o = s.map(e => e.querySelectorAll(GB));
  let l = o.map(e => e.length);
  let d = s.indexOf(r);
  let c = Array.from(o[d]).indexOf(a);
  if (d < 0 || c < 0) return !1;
  let [u, p] = function (e, t, i, n) {
    let r = e.length;
    if (0 === r || t < 0 || t >= r || i < 0 || i >= e[t]) return [-1, -1];
    switch (n) {
      case "right":
        if (i + 1 < e[t]) return [t, i + 1];
        if (t === r - 1 && i + 1 === e[t]) return [-1, -1];
        return [t + 1, 0];
      case "left":
        if (0 < i) return [t, i - 1];
        if (0 === t && 0 === i) return [-1, -1];
        return [t - 1, e[t - 1] - 1];
      case "down":
        {
          function a(t, i) {
            for (let n = t; n < r; n++) if (i < e[n]) return n;
            return -1;
          }
          let n = a(t + 1, i);
          if (0 <= n) return [n, i];
          let s = Math.max(...e);
          for (let e = i + 1; e < s; e++) {
            let i = a(0, e);
            if (!(i < 0)) {
              if (i === t) break;
              return [i, e];
            }
          }
          return [-1, -1];
        }
      case "up":
        {
          function s(t, i) {
            for (let n = t; -1 < n; n--) if (i < e[n]) return n;
            return -1;
          }
          let n = s(t - 1, i);
          if (0 <= n) return [n, i];
          for (let e = i - 1; -1 < e; e--) {
            let i = s(r - 1, e);
            if (!(i < 0)) {
              if (i === t) break;
              return [i, e];
            }
          }
          return [-1, -1];
        }
    }
  }(l, d, c, t);
  if (u < 0 || p < 0) return !1;
  let h = s[u].querySelectorAll(GB)[p];
  return h !== a && (lg(h, i), !0);
}
$$f1.displayName = "Root";
let A = forwardRef(function (e, t) {
  return jsx("div", {
    ref: t,
    tabIndex: -1
  });
});
export const lO = $$g0;
export const bL = $$f1;