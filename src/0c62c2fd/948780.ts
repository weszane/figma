import { useState, useRef, useCallback } from "react";
import { Egt } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { U } from "../figma_app/901889";
import { Pe } from "../figma_app/32128";
export function $$l0(e) {
  let [t, r] = useState([]);
  let l = useRef(null);
  let [d, c] = useState(null);
  let u = t.length > 0;
  let m = U();
  let _ = useCallback(e => {
    r(e);
    c(null);
    l.current = null;
  }, []);
  let p = useCallback(() => {
    r(e => e.length ? [] : e);
    c(null);
    l.current = null;
  }, []);
  let f = useCallback((e, r) => {
    if (t.includes(e)) {
      c(null);
      return;
    }
    let a = r.target;
    d && d.dragOverPageId === e && l.current || (l.current = a.getBoundingClientRect());
    let s = r.clientY - l.current.top < l.current.height / 2 ? "before" : "after";
    c(t => t && t.dragOverPageId === e && t.insertPosition === s ? t : {
      dragOverPageId: e,
      insertPosition: s
    });
  }, [d, t]);
  let g = useCallback(() => !d || !u || t.includes(d.dragOverPageId) ? (p(), !1) : (l7.user("reorder-pages", () => {
    let r = Pe(e);
    "before" === d.insertPosition ? [...t].sort((e, t) => r[e] - r[t]).forEach(e => {
      Egt.pageMoveBeforePage(e, d.dragOverPageId);
    }) : [...t].sort((e, t) => r[t] - r[e]).forEach(e => {
      Egt.pageMoveAfterPage(e, d.dragOverPageId);
    });
  }), p(), m("page_reorder", {
    reorderedPageIds: t,
    dragOverPageId: d.dragOverPageId,
    insertPosition: d.insertPosition
  }, {
    forwardToDatadog: !0
  }), !0), [e, u, t, p, d, m]);
  return {
    isReordering: u,
    reorderingPageIds: t,
    startReordering: _,
    cancelReordering: p,
    commitReordering: g,
    draggingState: d,
    updateDraggingState: f
  };
}
export const C = $$l0;