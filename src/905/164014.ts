import { useRef, useCallback } from "react";
import { ServiceCategories } from "../905/165054";
import { m as _$$m } from "../vendor/601859";
import { reportError } from "../905/11";
export function $$o0({
  scrollThreshold: e = 50,
  scrollAmount: t = 5
} = {}) {
  let i = _$$m();
  let r = useRef(null);
  let s = useRef();
  let c = useRef();
  let u = useRef();
  let p = useRef(!0);
  let m = useCallback(e => {
    if (!p.current || !u.current || void 0 === s.current || void 0 === c.current) return;
    let t = d(u.current);
    let i = e.target;
    if (!t || !i) return;
    let n = i.scrollLeft - s.current.scrollLeft;
    let r = i.scrollTop - s.current.scrollTop;
    t.x = c.current.x - n;
    t.y = c.current.y - r;
  }, []);
  let h = useCallback((i, n) => {
    let a = r.current;
    let o = i.target;
    if (!p.current || !a || !(o instanceof Element)) return;
    let l = a.getBoundingClientRect();
    let d = n.point;
    let c = o.closest("[draggable]");
    let u = c?.parentElement;
    let m = c === u?.firstElementChild;
    let h = c === u?.lastElementChild;
    let g = (i, n, r, o) => {
      let l = "x" === o;
      let d = l ? a.scrollLeft : a.scrollTop;
      let c = l ? a.scrollWidth : a.scrollHeight;
      let u = l ? a.clientWidth : a.clientHeight;
      let p = l ? s.current?.scrollWidth : s.current?.scrollHeight;
      let g = l ? "scrollLeft" : "scrollTop";
      i < n + e && (!m || d > 0) ? a[g] -= t : i > r - e && !h && d + u < (p ?? c) && (a[g] += t);
    };
    g(d.x, l.left, l.right, "x");
    g(d.y, l.top, l.bottom, "y");
  }, [t, e]);
  let g = useCallback(() => {
    let e = r.current;
    let t = l(i);
    let n = t ? d(t) : void 0;
    if (!e || !t || !n) {
      p.current = !1;
      return;
    }
    s.current = {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop,
      scrollWidth: e.scrollWidth,
      scrollHeight: e.scrollHeight
    };
    c.current = {
      x: n.x,
      y: n.y
    };
    u.current = t;
  }, [i]);
  return {
    scrollerRef: r,
    onScroll: m,
    dragControls: i,
    onDrag: h,
    onDragStart: g,
    onDragEnd: useCallback(() => {
      s.current = void 0;
      c.current = void 0;
      u.current = void 0;
      p.current = !0;
    }, [])
  };
}
let l = e => {
  try {
    return Array.from(e.componentControls).find(e => e.isDragging);
  } catch (e) {
    reportError(ServiceCategories.SLIDES, e);
    return;
  }
};
let d = e => {
  try {
    return e.panSession.history[0];
  } catch (e) {
    reportError(ServiceCategories.SLIDES, e);
    return;
  }
};
export const O = $$o0;
