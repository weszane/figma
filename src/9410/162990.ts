import { useState, useLayoutEffect, useCallback } from "react";
import { shallowEqual } from "../vendor/514228";
import { TQ } from "../905/657224";
import { tS } from "../figma_app/516028";
export function $$o0({
  defaultIsOpen: e
}) {
  let [t, i] = function (e) {
    let t = tS();
    let [i, o] = useState(() => t ? l(t) ?? e : e);
    useLayoutEffect(() => {
      if (!t) return;
      let e = l(t);
      e && o(e);
    }, [t]);
    return [i, useCallback(e => {
      o(i => {
        let r = "function" == typeof e ? e(i) : e;
        t && function (e, t) {
          let i = TQ();
          if (i) {
            let r = JSON.parse(i.getItem("pages-panel") || "{}");
            if (shallowEqual(r[e], t)) return;
            r[e] = t;
            i.setItem("pages-panel", JSON.stringify(r));
          }
        }(t, r);
        return r;
      });
    }, [t])];
  }({
    height: null,
    isOpen: e,
    devHandoffShowAllPages: !1
  });
  let o = useCallback(e => {
    i(t => ({
      ...t,
      isOpen: e
    }));
  }, [i]);
  let d = useCallback(e => {
    i(t => ({
      ...t,
      height: e
    }));
  }, [i]);
  let c = useCallback(e => {
    i(t => ({
      ...t,
      devHandoffShowAllPages: e
    }));
  }, [i]);
  return {
    height: t.height,
    setHeight: d,
    isOpen: t.isOpen,
    setIsOpen: o,
    devHandoffShowAllPages: t.devHandoffShowAllPages,
    setDevHandoffShowAllPages: c
  };
}
function l(e) {
  let t = TQ();
  if (t) return JSON.parse(t.getItem("pages-panel") || "{}")[e];
}
export const d = $$o0;