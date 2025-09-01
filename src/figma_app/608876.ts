import { useRef, useCallback } from "react";
import { Ay } from "../figma_app/778880";
import { Point } from "../905/736624";
import { BI } from "../figma_app/546509";
export function $$o0(e) {
  let {
    onDelayedDragSuccess,
    onDelayedDragCancelled
  } = e;
  let o = BI();
  let l = useRef(void 0);
  let d = useRef(-1);
  let c = useCallback(e => {
    e.preventDefault();
  }, []);
  let u = () => {
    clearTimeout(d.current);
    d.current = -1;
  };
  let p = useCallback(e => {
    -1 !== d.current && e.pointerId === l.current?.pointerId && Point.distance(new Point(l.current.clientX, l.current.clientY), new Point(e.clientX, e.clientY)) > 10 && (onDelayedDragCancelled(), u(), document.removeEventListener("touchmove", c), document.removeEventListener("pointermove", p), l.current = void 0);
  }, [onDelayedDragCancelled, c]);
  let _ = useCallback(e => {
    document.removeEventListener("touchmove", c);
    document.removeEventListener("pointermove", p);
    document.removeEventListener("pointerup", _);
    l.current = void 0;
    u();
  }, [c, p]);
  return e => {
    "mouse" !== e.pointerType && (o?.shouldOptimizeForIpadApp || Ay.isMeetDevice) && function (e) {
      let t = e.target;
      for (; t && "body" !== t.tagName.toLowerCase();) {
        let e = getComputedStyle(t).overflowY;
        if ("scroll" === e || "auto" === e) return !0;
        t = t.parentElement;
      }
      return !1;
    }(e) ? (document.addEventListener("pointermove", p), document.addEventListener("pointerup", _), l.current = e, d.current = setTimeout(() => {
      document.addEventListener("touchmove", c, {
        passive: !1
      });
      onDelayedDragSuccess(e);
    }, 250)) : onDelayedDragSuccess(e);
  };
}
export const L = $$o0;