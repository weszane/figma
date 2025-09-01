import { useState, useRef, useCallback } from "react";
import { Egt } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { U } from "../figma_app/901889";
import { Pe } from "../figma_app/32128";
export function $$l0(e) {
  let [t, i] = useState([]);
  let l = useRef(null);
  let [d, c] = useState(null);
  let u = t.length > 0;
  let p = U();
  let h = useCallback(e => {
    i(e);
    c(null);
    l.current = null;
  }, []);
  let m = useCallback(() => {
    i(e => e.length ? [] : e);
    c(null);
    l.current = null;
  }, []);
  let f = useCallback((e, i) => {
    if (t.includes(e)) {
      c(null);
      return;
    }
    let r = i.target;
    d && d.dragOverPageId === e && l.current || (l.current = r.getBoundingClientRect());
    let n = i.clientY - l.current.top < l.current.height / 2 ? "before" : "after";
    c(t => t && t.dragOverPageId === e && t.insertPosition === n ? t : {
      dragOverPageId: e,
      insertPosition: n
    });
  }, [d, t]);
  let g = useCallback(() => !d || !u || t.includes(d.dragOverPageId) ? (m(), !1) : (l7.user("reorder-pages", () => {
    let i = Pe(e);
    "before" === d.insertPosition ? [...t].sort((e, t) => i[e] - i[t]).forEach(e => {
      Egt.pageMoveBeforePage(e, d.dragOverPageId);
    }) : [...t].sort((e, t) => i[t] - i[e]).forEach(e => {
      Egt.pageMoveAfterPage(e, d.dragOverPageId);
    });
  }), m(), p("page_reorder", {
    reorderedPageIds: t,
    dragOverPageId: d.dragOverPageId,
    insertPosition: d.insertPosition
  }, {
    forwardToDatadog: !0
  }), !0), [e, u, t, m, d, p]);
  return {
    isReordering: u,
    reorderingPageIds: t,
    startReordering: h,
    cancelReordering: m,
    commitReordering: g,
    draggingState: d,
    updateDraggingState: f
  };
}
export const C = $$l0;