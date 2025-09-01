import { jsx } from "react/jsx-runtime";
import { useRef, useContext, useEffect, useMemo, createContext, useState } from "react";
import { i as _$$i } from "../vendor/218335";
import { H } from "../vendor/373976";
import { u as _$$u } from "../vendor/363976";
var $$n0;
!function (e) {
  e[e.BEFORE = 1] = "BEFORE";
  e[e.INSIDE = 2] = "INSIDE";
  e[e.AFTER = 3] = "AFTER";
}($$n0 || ($$n0 = {}));
let d = {
  dropPositionThreshold: .5,
  snapThreshold: 120
};
export function $$c1(e) {
  let t = "function" == typeof e ? {
    ...d,
    ...e()
  } : {
    ...d,
    ...e
  };
  let i = useRef(t);
  i.current = t;
  let n = useContext(u);
  let r = useRef(n);
  r.current = n;
  let [l, c] = _$$i(() => ({
    type: t.type,
    item: () => i.current.item,
    canDrag: () => !1 !== i.current.canDrag,
    end(e, t) {
      if (!t.didDrop()) {
        let n = t.getClientOffset();
        let {
          lastHoveredItem,
          setLastHoveredItem
        } = r.current;
        if (lastHoveredItem && lastHoveredItem.element && n && h(n, lastHoveredItem.element.getBoundingClientRect()) < i.current.snapThreshold) {
          let r = lastHoveredItem.element.getBoundingClientRect();
          let o = m(n.y, r, i.current.dropPositionThreshold);
          lastHoveredItem.onDrop?.({
            dragItem: e,
            dragType: t.getItemType(),
            dropItem: lastHoveredItem.item,
            dropType: lastHoveredItem.type,
            dropRect: r,
            position: o
          });
          setLastHoveredItem(null);
          return;
        }
        i.current.onEnd?.();
      }
    },
    collect: e => e.isDragging() ? {
      dragItem: e.getItem(),
      dragType: e.getItemType()
    } : {}
  }), [t.type]);
  let p = t.accept ?? [];
  let [g, f] = H(() => ({
    accept: [t.type, ...p],
    canDrop: () => !1 !== i.current.canDrop,
    hover(e, t) {
      let n = i.current.element.current;
      let a = t.getClientOffset();
      if (!n || !a) return;
      let s = n.getBoundingClientRect();
      let o = m(a.y, s, i.current.dropPositionThreshold);
      i.current.onHover?.({
        dragItem: e,
        dragType: t.getItemType(),
        dropItem: i.current.item,
        dropType: i.current.type,
        dropRect: s,
        position: o
      });
      r.current.setLastHoveredItem({
        item: i.current.item,
        type: i.current.type,
        element: i.current.element.current,
        onDrop: i.current.onDrop
      });
    },
    drop(e, t) {
      let n = i.current.element.current;
      let r = t.getClientOffset();
      if (!n || !r) return;
      let a = n.getBoundingClientRect();
      let s = m(r.y, a, i.current.dropPositionThreshold);
      i.current.onDrop?.({
        dragItem: e,
        dragType: t.getItemType(),
        dropItem: i.current.item,
        dropType: i.current.type,
        dropRect: a,
        position: s
      });
    },
    collect(e) {
      let t = i.current.element.current;
      let n = i.current.getDeepestTargetOnly;
      let a = e.getClientOffset();
      if (t && a) {
        let s = t.getBoundingClientRect();
        if (e.isOver({
          shallow: n
        }) || r.current.lastHoveredItem === i.current.item && h(a, s) < i.current.snapThreshold) return {
          position: m(a.y, s, i.current.dropPositionThreshold),
          dragItem: e.getItem(),
          dragType: e.getItemType()
        };
      }
      return {};
    }
  }), [t.type, ...p]);
  let _ = !!l.dragItem;
  useEffect(() => {
    _ && i.current.onStart?.({
      dragItem: i.current.item,
      dragType: i.current.type
    });
  }, [_]);
  c(f(t.element));
  return useMemo(() => ({
    ...l,
    ...g
  }), [l, g]);
}
let u = createContext({
  lastHoveredItem: null,
  setLastHoveredItem: () => {}
});
export function $$p2({
  children: e
}) {
  let t = _$$u().getBackend();
  let i = useRef(null);
  useEffect(() => {
    let e = i.current;
    if (e) return t.attach(e);
  }, [t]);
  let [n, s] = useState(null);
  let o = useMemo(() => ({
    lastHoveredItem: n,
    setLastHoveredItem: s
  }), [n]);
  let d = e => {
    e.target.closest("[data-temporary-fpl-no-drag]") || e.stopPropagation();
  };
  return jsx(u.Provider, {
    value: o,
    children: jsx("div", {
      onMouseDown: d,
      onPointerDown: d,
      style: {
        display: "contents"
      },
      ref: i,
      children: e
    })
  });
}
function m(e, t, i) {
  let r = (e - t.top) / t.height;
  return r < i ? $$n0.BEFORE : r >= 1 - i ? $$n0.AFTER : $$n0.INSIDE;
}
function h(e, t) {
  return Math.min(Math.abs(e.y - t.top), Math.abs(e.y - t.bottom), Math.abs(e.x - t.left), Math.abs(e.x - t.right));
}
$$p2.displayName = "DragReorderableProvider";
export const Nz = $$n0;
export const h4 = $$c1;
export const hh = $$p2;