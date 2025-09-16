import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef } from "react";
import { Nz, h4 } from "../905/720338";
import { useRecording } from "../905/959312";
import { setupRefUpdater } from "../905/823680";
import { ensureContext } from "../905/61417";
import { q7 } from "../figma_app/860955";
import { useFplStrings } from "../figma_app/415899";
import { defaultComponentAttribute } from "../905/577641";
import { preventAndStopEvent, stopEventPropagation } from "../905/955878";
import { k as _$$k } from "../905/733611";
import { lO } from "../905/246123";
let g = () => {
  let e = ensureContext(_$$k, "GridPrimitive.Row", "GridContext");
  let t = e.gridRef;
  return (i, n) => {
    let r = t.current;
    let s = I(r, lO);
    let o = s.map((e, t) => t);
    if (e.draggingRowIndex?.current == null) return o;
    let l = I(r, '[role="row"][aria-selected="true"]').map(e => s.indexOf(e));
    l.includes(e.draggingRowIndex.current) || l.push(e.draggingRowIndex.current);
    l.sort((e, t) => e - t);
    let d = i === Nz.BEFORE ? Math.min(n, s.length) : Math.min(n + 1, s.length);
    let c = o.filter(e => !l.includes(e));
    let u = c.filter(e => e < d).length;
    return [...c.slice(0, u), ...l, ...c.slice(u)];
  };
};
let f = (e, t) => {
  null == e.draggingRowIndex.current && (e.draggingRowIndex.current = t);
};
let _ = () => {
  let e = v();
  return t => t.current ? e().indexOf(t.current) : void 0;
};
let A = () => {
  let {
    setSelectedRows,
    lastClickedRow
  } = ensureContext(_$$k, "GridPrimitive.Row", "GridContext");
  let i = v();
  return n => {
    let r = new Set();
    i().forEach((e, t) => {
      "true" === e.getAttribute("aria-selected") && r.add(t);
    });
    let a = new Set();
    n.forEach((e, i) => {
      lastClickedRow.current === e && (lastClickedRow.current = i);
      r.has(e) && a.add(i);
    });
    setSelectedRows?.(a);
  };
};
let y = () => {
  let e = ensureContext(_$$k, "GridPrimitive.Row", "GridContext");
  let t = e.keyboardDragIndexRef;
  return () => {
    e.newDraggingOrder.current = void 0;
    t.current = void 0;
    e.draggingRowIndex.current = void 0;
  };
};
let b = () => {
  let e = ensureContext(_$$k, "GridPrimitive.Row", "GridContext");
  let t = g();
  let {
    onDragOver
  } = e;
  return (n, r) => {
    e.newDraggingOrder.current = t(r, n);
    let s = r === Nz.BEFORE ? "above" : "below";
    onDragOver?.({
      draggingOverRowIndex: n,
      position: s
    });
  };
};
let v = () => {
  let e = ensureContext(_$$k, "GridPrimitive.Row", "GridContext").gridRef;
  return () => I(e.current, lO);
};
let I = (e, t) => e ? Array.from(e.querySelectorAll(t)) : [];
let $$E1 = forwardRef(({
  children: e,
  ...t
}, i) => {
  let {
    rowProps,
    rowRef
  } = function ({
    selected: e,
    disableDragging: t,
    recordingKey: i,
    htmlAttributes: n,
    ...o
  }) {
    let {
      onKeyDown,
      onKeyUp,
      onPointerDown,
      onPointerUp,
      ...E
    } = n || {};
    let x = useRef(null);
    let S = useRef(!1);
    let w = ensureContext(_$$k, "GridPrimitive.Row", "GridContext");
    let {
      setSelectedRows,
      onReorderRows,
      lastClickedRow,
      id,
      gridRef,
      keyboardDragIndexRef
    } = w;
    let O = v();
    let D = _();
    let L = A();
    let F = y();
    let M = () => {
      w.newDraggingOrder.current && (onReorderRows?.(w.newDraggingOrder.current), L(w.newDraggingOrder.current));
      F();
    };
    let j = () => {
      document.body.style.userSelect = "";
      M();
    };
    h4(() => ({
      type: id,
      item: {
        rowRef: x
      },
      element: x,
      canDrag: !t && null == w.keyboardDragIndexRef.current,
      onStart: () => {
        if (!setSelectedRows) return;
        document.body.style.userSelect = "none";
        let e = I(gridRef.current, '[role="row"][aria-selected="true"]');
        let t = D(x);
        if (null == t) return;
        let i = e.map(e => O().indexOf(e));
        i.includes(t) || i.push(t);
        f(w, t);
        let n = new Set(i);
        n.add(t);
        setSelectedRows(n);
      },
      onHover: e => {
        if (e.dragType !== e.dropType || !e.dropItem.rowRef.current) return;
        let t = D(e.dragItem.rowRef);
        let i = D(e.dropItem.rowRef);
        null != i && null != t && (f(w, t), V(i, e.position));
      },
      onEnd: j,
      onDrop: j
    }));
    let U = useRecording(e => {
      if (onPointerDown?.(e), null != w.keyboardDragIndexRef.current || 2 === e.button || e.target instanceof HTMLElement && e.target.closest('[role="gridcell"]')) return;
      S.current = !0;
      let t = gridRef.current;
      let i = O();
      let n = I(t, '[role="row"][aria-selected="true"]').map(e => i.indexOf(e));
      let r = x.current ? i.indexOf(x.current) : -1;
      if (-1 !== r) {
        if (e.metaKey) {
          let e = new Set(n);
          e.has(r) || (e.add(r), lastClickedRow.current = r);
          setSelectedRows?.(e);
        } else if (e.shiftKey && null != lastClickedRow.current) {
          let e = Math.min(lastClickedRow.current, r);
          let t = Math.max(lastClickedRow.current, r);
          let i = new Set(n);
          for (let n = e; n <= t; n++) i.add(n);
          setSelectedRows?.(i);
        } else {
          0 === n.length && (lastClickedRow.current = void 0);
          n.includes(r) || setSelectedRows?.(new Set([r]));
          lastClickedRow.current = r;
        }
      }
    }, {
      eventName: "pointerdown",
      recordingKey: i
    }, [onPointerDown, gridRef, x, setSelectedRows, lastClickedRow]);
    let B = useRecording(e => {
      if (onPointerUp?.(e), S.current && !e.metaKey && !e.shiftKey && !w.newDraggingOrder.current) {
        let e = I(gridRef.current, lO);
        let t = x.current ? e.indexOf(x.current) : -1;
        setSelectedRows?.(new Set([t]));
      }
      S.current = !1;
    }, {
      eventName: "pointerup",
      recordingKey: i
    }, [onPointerUp, gridRef, x, setSelectedRows]);
    let V = b();
    return {
      rowProps: {
        role: "row",
        "aria-selected": e,
        onKeyDown: e => {
          if (onKeyDown?.(e), !e.altKey || null == keyboardDragIndexRef.current && null != w.draggingRowIndex.current) return;
          let t = D(x);
          if (null == t) return;
          let i = gridRef.current;
          let n = I(i, '[role="row"]');
          let r = keyboardDragIndexRef.current ?? t;
          if ("ArrowUp" === e.key) r = null == keyboardDragIndexRef.current ? r : Math.max(0, r - 1);else {
            if ("ArrowDown" !== e.key) return;
            r = r < n.length ? r + 1 : r;
          }
          f(w, t);
          let s = I(i, '[role="row"][aria-selected="true"]').map(e => n.indexOf(e));
          keyboardDragIndexRef.current || s.includes(t) || setSelectedRows?.(new Set([t]));
          keyboardDragIndexRef.current = r;
          r === n.length ? V(r - 1, Nz.AFTER) : V(r, Nz.BEFORE);
          preventAndStopEvent(e);
        },
        onKeyUp: e => {
          onKeyUp?.(e);
          e.altKey || null == w.keyboardDragIndexRef.current || M();
        },
        onPointerDown: U,
        onPointerUp: B,
        ...E,
        ...o
      },
      rowRef: x
    };
  }(t);
  let g = setupRefUpdater(rowRef, i);
  return jsx("div", {
    ...rowProps,
    ...defaultComponentAttribute,
    ref: g,
    children: e
  });
});
let x = {
  TOP: "top",
  UP: "up",
  DOWN: "down",
  BOTTOM: "bottom"
};
export function $$S0(e) {
  let t = g();
  let i = ensureContext(_$$k, "GridPrimitive.Row", "GridContext");
  let r = _();
  let s = v();
  let o = r(e);
  let u = b();
  let E = A();
  let {
    onCancelDrag
  } = i;
  let w = y();
  let C = e => {
    i.onReorderRows?.(e);
    E(e);
    w();
  };
  let T = useFplStrings("moveRowToTop");
  let k = useFplStrings("moveRowUp");
  let R = useFplStrings("moveRowDown");
  let N = useFplStrings("moveRowToBottom");
  if (null == o) return {
    menuItems: [],
    getMenuContainerProps: () => void 0
  };
  let P = i.draggingRowIndex.current;
  f(i, o);
  let O = I(i.gridRef.current, lO);
  let D = t(Nz.BEFORE, 0);
  let L = t(Nz.AFTER, s().length - 1);
  let F = t(Nz.AFTER, o + 1);
  let M = t(Nz.BEFORE, o - 1);
  i.draggingRowIndex.current = P;
  let j = (e, t) => e.length === t.length && e.every((e, i) => e === t[i]);
  let U = O.map((e, t) => t);
  let B = !j(M, U);
  let V = !j(F, U);
  let G = !j(D, U) && !j(M, D);
  let z = !j(L, U) && !j(F, L);
  let H = t => {
    let i = t.target.closest("[data-move-action]")?.getAttribute("data-move-action");
    if (!i) {
      onCancelDrag?.();
      return;
    }
    let n = r(e);
    switch (i) {
      case x.TOP:
        u(0, Nz.BEFORE);
        break;
      case x.UP:
        if (null == n) return;
        u(n - 1, Nz.BEFORE);
        break;
      case x.DOWN:
        if (null == n) return;
        u(n + 1, Nz.AFTER);
        break;
      case x.BOTTOM:
        u(s().length - 1, Nz.AFTER);
    }
  };
  let W = [];
  B && W.push([jsx(q7, {
    onClick: () => {
      C(M);
    },
    "data-move-action": x.UP,
    children: k
  }, "moveUp")]);
  V && W.push([jsx(q7, {
    onClick: () => {
      C(F);
    },
    "data-move-action": x.DOWN,
    children: R
  }, "moveDown")]);
  G && W.push([jsx(q7, {
    onClick: () => {
      C(D);
    },
    "data-move-action": x.TOP,
    children: T
  }, "moveToTop")]);
  z && W.push([jsx(q7, {
    onClick: () => {
      C(L);
    },
    "data-move-action": x.BOTTOM,
    children: N
  }, "moveToBottom")]);
  return {
    menuItems: W,
    getMenuContainerProps: () => ({
      onPointerMove: H,
      onPointerLeave: onCancelDrag,
      onPointerDown: stopEventPropagation
    })
  };
}
$$E1.displayName = "Row";
export const V6 = $$S0;
export const fI = $$E1;