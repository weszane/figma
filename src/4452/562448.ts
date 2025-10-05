import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { findClosestHTMLElement } from "../figma_app/243213";
import { H } from "../905/620380";
if (443 == require.j) {}
let i = 443 == require.j ? ["Enter", " "] : null;
export function $$l0(e, t = {}) {
  let [a, o] = useState(null);
  let d = H(t);
  let c = useRef();
  let u = useCallback(e => {
    o(null);
    c.current ??= e;
  }, []);
  let m = useMemo(() => {
    if (a) return e(a);
  }, [a, e]);
  let _ = a && !m;
  useEffect(() => {
    if (!a && c.current) {
      let e = t.onClear;
      e?.(c.current);
      c.current = void 0;
    }
  }, [a, t.onClear]);
  useEffect(() => {
    a && !_ && d.current.onHighlight?.();
  }, [_, a, d]);
  useEffect(() => {
    _ && u("item-missing");
  }, [_, u]);
  useEffect(() => {
    let e = d.current?.interactionConfig;
    if (!a || !e) return;
    let t = t => {
      let a = new Map();
      e.forEach(e => {
        e.ref.current && a.set(e.ref.current, e.shouldClearHighlight);
      });
      let s = findClosestHTMLElement(t.target);
      for (; s;) {
        let e = a.get(s);
        if ("boolean" == typeof e) return e;
        s = s.parentElement;
      }
      return !1;
    };
    let s = e => {
      t(e) && u("other-interaction");
    };
    let r = e => {
      i.includes(e.key) && t(e) && u("other-interaction");
    };
    let l = e => {
      t(e) && setTimeout(() => u("other-interaction"), 0);
    };
    document.body.addEventListener("pointerdown", s, {
      capture: !0
    });
    document.body.addEventListener("keydown", r, {
      capture: !0
    });
    document.body.addEventListener("input", l, {
      capture: !0
    });
    return () => {
      document.body.removeEventListener("pointerdown", s, {
        capture: !0
      });
      document.body.removeEventListener("keydown", r, {
        capture: !0
      });
      document.body.addEventListener("input", l, {
        capture: !0
      });
    };
  }, [a, u, d]);
  return {
    highlightedItem: m,
    setHighlightedItemId: o,
    clearHighlightedItemId: u
  };
}
export const v = $$l0;