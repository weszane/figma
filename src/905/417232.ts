import { jsx } from "react/jsx-runtime";
import { useRef, useContext, useEffect, useMemo, createContext, useState } from "react";
import { i as _$$i } from "../vendor/218335";
import { H } from "../vendor/373976";
import { u } from "../vendor/363976";
import { noop } from 'lodash-es';
var $$d0 = (e => (e[e.BEFORE = 1] = "BEFORE", e[e.INSIDE = 2] = "INSIDE", e[e.AFTER = 3] = "AFTER", e))($$d0 || {});
let c = {
  dropPositionThreshold: .5,
  snapThreshold: 120
};
export function $$u1(e) {
  let t = "function" == typeof e ? {
    ...c,
    ...e()
  } : {
    ...c,
    ...e
  };
  let i = useRef(t);
  i.current = t;
  let n = useContext(p);
  let o = useRef(n);
  o.current = n;
  let [l, d] = _$$i(() => ({
    type: t.type,
    item: () => i.current.item,
    canDrag: () => !1 !== i.current.canDrag,
    end(e, t) {
      if (!t.didDrop()) {
        let n = t.getClientOffset();
        let {
          lastHoveredItem,
          setLastHoveredItem
        } = o.current;
        if (lastHoveredItem && lastHoveredItem.element && n && g(n, lastHoveredItem.element.getBoundingClientRect()) < i.current.snapThreshold) {
          let s = lastHoveredItem.element.getBoundingClientRect();
          let o = h(n.y, s, i.current.dropPositionThreshold);
          lastHoveredItem.onDrop?.({
            dragItem: e,
            dragType: t.getItemType(),
            dropItem: lastHoveredItem.item,
            dropType: lastHoveredItem.type,
            dropRect: s,
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
  let u = t.accept ?? [];
  let [m, f] = H(() => ({
    accept: [t.type, ...u],
    canDrop: () => !1 !== i.current.canDrop,
    hover(e, t) {
      let n = i.current.element.current;
      let r = t.getClientOffset();
      if (!n || !r) return;
      let a = n.getBoundingClientRect();
      let s = h(r.y, a, i.current.dropPositionThreshold);
      i.current.onHover?.({
        dragItem: e,
        dragType: t.getItemType(),
        dropItem: i.current.item,
        dropType: i.current.type,
        dropRect: a,
        position: s
      });
      o.current.setLastHoveredItem({
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
      let s = h(r.y, a, i.current.dropPositionThreshold);
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
      let r = e.getClientOffset();
      if (t && r) {
        let a = t.getBoundingClientRect();
        if (e.isOver({
          shallow: n
        }) || o.current.lastHoveredItem === i.current.item && g(r, a) < i.current.snapThreshold) return {
          position: h(r.y, a, i.current.dropPositionThreshold),
          dragItem: e.getItem(),
          dragType: e.getItemType()
        };
      }
      return {};
    }
  }), [t.type, ...u]);
  let _ = !!l.dragItem;
  useEffect(() => {
    _ && i.current.onStart?.({
      dragItem: i.current.item,
      dragType: i.current.type
    });
  }, [_]);
  d(f(t.element));
  return useMemo(() => ({
    ...l,
    ...m
  }), [l, m]);
}
let p = createContext({
  lastHoveredItem: null,
  setLastHoveredItem: () => noop
});
export function $$m2({
  children: e
}) {
  let t = u().getBackend();
  let i = useRef(null);
  useEffect(() => {
    let e = i.current;
    if (e) return t.attach(e);
  }, [t]);
  let [a, s] = useState(null);
  let l = useMemo(() => ({
    lastHoveredItem: a,
    setLastHoveredItem: s
  }), [a]);
  let d = e => {
    e.target.closest("[data-temporary-fpl-no-drag]") || e.stopPropagation();
  };
  return jsx(p.Provider, {
    value: l,
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
function h(e, t, i) {
  let n = (e - t.top) / t.height;
  return n < i ? 1 : n >= 1 - i ? 3 : 2;
}
function g(e, t) {
  return Math.min(Math.abs(e.y - t.top), Math.abs(e.y - t.bottom), Math.abs(e.x - t.left), Math.abs(e.x - t.right));
}
export const Nz = $$d0;
export const h4 = $$u1;
export const hh = $$m2;
